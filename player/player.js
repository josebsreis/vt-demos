var TourPlayer=(function(vn){"use strict";var RE=Object.defineProperty;var PE=(vn,Wn,ls)=>Wn in vn?RE(vn,Wn,{enumerable:!0,configurable:!0,writable:!0,value:ls}):vn[Wn]=ls;var nt=(vn,Wn,ls)=>PE(vn,typeof Wn!="symbol"?Wn+"":Wn,ls);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jt="srgb",ci="srgb-linear",Qs="linear",st="srgb",Ka="300 es";class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ja=1234567;const cs=Math.PI/180,hs=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function ho(n,e){return(n%e+e)%e}function Gf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Wf(n,e,t){return n!==e?(t-n)/(e-n):0}function ds(n,e,t){return(1-t)*n+t*e}function Xf(n,e,t,i){return ds(n,e,1-Math.exp(-t*i))}function $f(n,e=1){return e-Math.abs(ho(n,e*2)-e)}function qf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zf(n,e){return n+Math.random()*(e-n)}function Kf(n){return n*(.5-Math.random())}function Jf(n){n!==void 0&&(Ja=n);let e=Ja+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qf(n){return n*cs}function ep(n){return n*hs}function tp(n){return(n&n-1)===0&&n!==0}function np(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ip(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*p,a*c);break;case"YZY":n.set(l*p,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*p,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $e={DEG2RAD:cs,RAD2DEG:hs,generateUUID:Ri,clamp:Ye,euclideanModulo:ho,mapLinear:Gf,inverseLerp:Wf,lerp:ds,damp:Xf,pingpong:$f,smoothstep:qf,smootherstep:Yf,randInt:jf,randFloat:Zf,randFloatSpread:Kf,seededRandom:Jf,degToRad:Qf,radToDeg:ep,isPowerOfTwo:tp,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:sp,normalize:Bt,denormalize:Pi};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const p=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==p||c!==m||u!==g){let f=1-a;const h=l*p+c*m+u*g+d*v,w=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const A=Math.sqrt(S),C=Math.atan2(A,h*w);f=Math.sin(f*C)/A,a=Math.sin(a*C)/A}const E=a*w;if(l=l*f+p*E,c=c*f+m*E,u=u*f+g*E,d=d*f+v*E,f===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*p,e[t+1]=l*g+u*p+c*d-a*m,e[t+2]=c*g+u*m+a*p-l*d,e[t+3]=u*g-a*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),p=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"YZX":this._x=p*u*d+c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d-p*m*g;break;case"XZY":this._x=p*u*d-c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new I,Qa=new Xn;class ze{constructor(e,t,i,s,r,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],m=i[5],g=i[8],v=s[0],f=s[3],h=s[6],w=s[1],S=s[4],E=s[7],A=s[2],C=s[5],P=s[8];return r[0]=o*v+a*w+l*A,r[3]=o*f+a*S+l*C,r[6]=o*h+a*E+l*P,r[1]=c*v+u*w+d*A,r[4]=c*f+u*S+d*C,r[7]=c*h+u*E+d*P,r[2]=p*v+m*w+g*A,r[5]=p*f+m*S+g*C,r[8]=p*h+m*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,p=a*l-u*r,m=c*r-o*l,g=t*d+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=p*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new ze;function el(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rp(){const n=us("canvas");return n.style.display="block",n}const tl={};function Li(n){n in tl||(tl[n]=!0,console.warn(n))}function op(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const nl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ap(){const n={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Qs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Li("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Li("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ci]:{primaries:e,whitePoint:i,transfer:Qs,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}const Ke=ap();function Rn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Di(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class lp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ii===void 0&&(Ii=us("canvas")),Ii.width=e.width,Ii.height=e.height;const s=Ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ii}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rn(t[i]/255)*255):t[i]=Rn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cp=0;class po{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mo(s[o].image)):r.push(mo(s[o]))}else r=mo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;const go=new I;class At extends Ci{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=1001,s=1001,r=1006,o=1008,a=1023,l=1009,c=At.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ri(),this.name="",this.source=new po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null,At.DEFAULT_MAPPING=300,At.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],f=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(m+1)/2,A=(h+1)/2,C=(u+p)/4,P=(d+v)/4,D=(g+f)/4;return S>E&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=C/i,r=P/i):E>A?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=D/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=D/r),this.set(i,s,r,t),this}let w=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(d-v)/w,this.z=(p-u)/w,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dp extends Ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new At(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new po(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends dp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sl extends At{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends At{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),er.copy(i.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),tr.subVectors(this.max,fs),Ui.subVectors(e.a,fs),Fi.subVectors(e.b,fs),Oi.subVectors(e.c,fs),qn.subVectors(Fi,Ui),Yn.subVectors(Oi,Fi),hi.subVectors(Ui,Oi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-hi.z,hi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,hi.z,0,-hi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-hi.y,hi.x,0];return!vo(t,Ui,Fi,Oi,tr)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,Ui,Fi,Oi,tr))?!1:(nr.crossVectors(qn,Yn),t=[nr.x,nr.y,nr.z],vo(t,Ui,Fi,Oi,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,er=new Ni,Ui=new I,Fi=new I,Oi=new I,qn=new I,Yn=new I,hi=new I,fs=new I,tr=new I,nr=new I,di=new I;function vo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){di.fromArray(n,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=i.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fp=new Ni,ps=new I,_o=new I;class ir{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(_o)),this.expandByPoint(ps.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ln=new I,xo=new I,sr=new I,jn=new I,yo=new I,rr=new I,Eo=new I;class So{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xo.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(xo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sr),a=jn.dot(this.direction),l=-jn.dot(sr),c=jn.lengthSq(),u=Math.abs(1-o*o);let d,p,m,g;if(u>0)if(d=o*l-a,p=o*a-l,g=r*u,d>=0)if(p>=-g)if(p<=g){const v=1/u;d*=v,p*=v,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xo).addScaledVector(sr,p),m}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,s,r){yo.subVectors(t,e),rr.subVectors(i,e),Eo.crossVectors(yo,rr);let o=this.direction.dot(Eo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(rr.crossVectors(jn,rr));if(l<0)return null;const c=a*this.direction.dot(yo.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(Eo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,s,r,o,a,l,c,u,d,p,m,g,v,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,p,m,g,v,f)}set(e,t,i,s,r,o,a,l,c,u,d,p,m,g,v,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=o*u,m=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=p-v*c,t[9]=-a*l,t[2]=v-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,m=l*d,g=c*u,v=c*d;t[0]=p+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,m=l*d,g=c*u,v=c*d;t[0]=p-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,m=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-p*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+v,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,i){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Zn.crossVectors(i,Zt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Zn.crossVectors(i,Zt)),Zn.normalize(),or.crossVectors(Zt,Zn),s[0]=Zn.x,s[4]=or.x,s[8]=Zt.x,s[1]=Zn.y,s[5]=or.y,s[9]=Zt.y,s[2]=Zn.z,s[6]=or.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],m=i[13],g=i[2],v=i[6],f=i[10],h=i[14],w=i[3],S=i[7],E=i[11],A=i[15],C=s[0],P=s[4],D=s[8],M=s[12],x=s[1],T=s[5],O=s[9],G=s[13],B=s[2],q=s[6],z=s[10],J=s[14],F=s[3],te=s[7],$=s[11],re=s[15];return r[0]=o*C+a*x+l*B+c*F,r[4]=o*P+a*T+l*q+c*te,r[8]=o*D+a*O+l*z+c*$,r[12]=o*M+a*G+l*J+c*re,r[1]=u*C+d*x+p*B+m*F,r[5]=u*P+d*T+p*q+m*te,r[9]=u*D+d*O+p*z+m*$,r[13]=u*M+d*G+p*J+m*re,r[2]=g*C+v*x+f*B+h*F,r[6]=g*P+v*T+f*q+h*te,r[10]=g*D+v*O+f*z+h*$,r[14]=g*M+v*G+f*J+h*re,r[3]=w*C+S*x+E*B+A*F,r[7]=w*P+S*T+E*q+A*te,r[11]=w*D+S*O+E*z+A*$,r[15]=w*M+S*G+E*J+A*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*a*p+i*c*p+s*a*m-i*l*m)+v*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*u-r*l*u)+f*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*u-i*c*u)+h*(-s*a*u-t*l*d+t*a*p+s*o*d-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],g=e[12],v=e[13],f=e[14],h=e[15],w=d*f*c-v*p*c+v*l*m-a*f*m-d*l*h+a*p*h,S=g*p*c-u*f*c-g*l*m+o*f*m+u*l*h-o*p*h,E=u*v*c-g*d*c+g*a*m-o*v*m-u*a*h+o*d*h,A=g*d*l-u*v*l-g*a*p+o*v*p+u*a*f-o*d*f,C=t*w+i*S+s*E+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=w*P,e[1]=(v*p*r-d*f*r-v*s*m+i*f*m+d*s*h-i*p*h)*P,e[2]=(a*f*r-v*l*r+v*s*c-i*f*c-a*s*h+i*l*h)*P,e[3]=(d*l*r-a*p*r-d*s*c+i*p*c+a*s*m-i*l*m)*P,e[4]=S*P,e[5]=(u*f*r-g*p*r+g*s*m-t*f*m-u*s*h+t*p*h)*P,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*h-t*l*h)*P,e[7]=(o*p*r-u*l*r+u*s*c-t*p*c-o*s*m+t*l*m)*P,e[8]=E*P,e[9]=(g*d*r-u*v*r-g*i*m+t*v*m+u*i*h-t*d*h)*P,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*h+t*a*h)*P,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*m-t*a*m)*P,e[12]=A*P,e[13]=(u*v*s-g*d*s+g*i*p-t*v*p-u*i*f+t*d*f)*P,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*f-t*a*f)*P,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*p+t*a*p)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,p=r*c,m=r*u,g=r*d,v=o*u,f=o*d,h=a*d,w=l*c,S=l*u,E=l*d,A=i.x,C=i.y,P=i.z;return s[0]=(1-(v+h))*A,s[1]=(m+E)*A,s[2]=(g-S)*A,s[3]=0,s[4]=(m-E)*C,s[5]=(1-(p+h))*C,s[6]=(f+w)*C,s[7]=0,s[8]=(g+S)*P,s[9]=(f-w)*P,s[10]=(1-(p+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,u=1/o,d=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=2e3,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===2e3)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===2001)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=2e3,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-s),p=-(t+e)/(t-e),m=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===2e3)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===2001)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new I,dn=new rt,pp=new I(0,0,0),mp=new I(1,1,1),Zn=new I,or=new I,Zt=new I,rl=new rt,ol=new Xn;class _n{constructor(e=0,t=0,i=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gp=0;const al=new I,Bi=new Xn,Dn=new rt,ar=new I,ms=new I,vp=new I,_p=new Xn,ll=new I(1,0,0),cl=new I(0,1,0),hl=new I(0,0,1),dl={type:"added"},xp={type:"removed"},zi={type:"childadded",child:null},wo={type:"childremoved",child:null};class Lt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new I,t=new _n,i=new Xn,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new ze}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ar.copy(e):ar.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ms,ar,this.up):Dn.lookAt(ar,ms,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new I(0,1,0),Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new I,In=new I,bo=new I,Nn=new I,Hi=new I,Vi=new I,ul=new I,To=new I,Ao=new I,Co=new I,Ro=new yt,Po=new yt,Lo=new yt;class fn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){un.subVectors(s,t),In.subVectors(i,t),bo.subVectors(e,t);const o=un.dot(un),a=un.dot(In),l=un.dot(bo),c=In.dot(In),u=In.dot(bo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const p=1/d,m=(c*l-a*u)*p,g=(o*u-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ro.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Ro.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,i),Lo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ro,r.x),o.addScaledVector(Po,r.y),o.addScaledVector(Lo,r.z),o}static isFrontFacing(e,t,i,s){return un.subVectors(i,t),In.subVectors(e,t),un.cross(In).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,i),Vi.subVectors(r,i),To.subVectors(e,i);const l=Hi.dot(To),c=Vi.dot(To);if(l<=0&&c<=0)return t.copy(i);Ao.subVectors(e,s);const u=Hi.dot(Ao),d=Vi.dot(Ao);if(u>=0&&d<=u)return t.copy(s);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Hi,o);Co.subVectors(e,r);const m=Hi.dot(Co),g=Vi.dot(Co);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Vi,a);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return ul.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(ul,a);const h=1/(f+v+p);return o=v*h,a=p*h,t.copy(i).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Do(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*6*(.6666666666666666-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=ho(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Do(o,r,e+.3333333333333333),this.g=Do(o,r,e),this.b=Do(o,r,e-.3333333333333333)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=fl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Ke.workingToColorSpace(Ut.copy(this),e),Math.round(Ye(Ut.r*255,0,255))*65536+Math.round(Ye(Ut.g*255,0,255))*256+Math.round(Ye(Ut.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ut.copy(this),t);const i=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=jt){Ke.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,s=Ut.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(lr);const i=ds(Kn.h,lr.h,t),s=ds(Kn.s,lr.s,t),r=ds(Kn.l,lr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new et;et.NAMES=fl;let yp=0;class gs extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xn extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,cr=new Je;let Ep=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class pl extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ml extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Sp=0;const rn=new rt,Io=new Lt,Gi=new I,Jt=new Ni,vs=new Ni,Ct=new I;class pn extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(el(e)?ml:pl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(Jt.min,vs.min),Jt.expandByPoint(Ct),Ct.addVectors(Jt.max,vs.max),Jt.expandByPoint(Ct)):(Jt.expandByPoint(vs.min),Jt.expandByPoint(vs.max))}Jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(e,c),Ct.add(Gi)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new I,l[D]=new I;const c=new I,u=new I,d=new I,p=new Je,m=new Je,g=new Je,v=new I,f=new I;function h(D,M,x){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),p.fromBufferAttribute(r,D),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),u.sub(c),d.sub(c),m.sub(p),g.sub(p);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(T),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(T),a[D].add(v),a[M].add(v),a[x].add(v),l[D].add(f),l[M].add(f),l[x].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,M=w.length;D<M;++D){const x=w[D],T=x.start,O=x.count;for(let G=T,B=T+O;G<B;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new I,E=new I,A=new I,C=new I;function P(D){A.fromBufferAttribute(s,D),C.copy(A);const M=a[D];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),E.crossVectors(C,M);const T=E.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,T)}for(let D=0,M=w.length;D<M;++D){const x=w[D],T=x.start,O=x.count;for(let G=T,B=T+O;G<B;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let h=0;h<u;h++)p[g++]=c[m++]}return new yn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new rt,ui=new So,hr=new ir,vl=new I,dr=new I,ur=new I,fr=new I,No=new I,pr=new I,_l=new I,mr=new I;class Ft extends Lt{constructor(e=new pn,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(No.fromBufferAttribute(d,e),o?pr.addScaledVector(No,u):pr.addScaledVector(No.sub(t),u))}t.add(pr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere),hr.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(hr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(hr,vl)===null||ui.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(gl.copy(r).invert(),ui.copy(e.ray).applyMatrix4(gl),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const f=p[g],h=o[f.materialIndex],w=Math.max(f.start,m.start),S=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let E=w,A=S;E<A;E+=3){const C=a.getX(E),P=a.getX(E+1),D=a.getX(E+2);s=gr(this,h,e,i,c,u,d,C,P,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const w=a.getX(f),S=a.getX(f+1),E=a.getX(f+2);s=gr(this,o,e,i,c,u,d,w,S,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const f=p[g],h=o[f.materialIndex],w=Math.max(f.start,m.start),S=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let E=w,A=S;E<A;E+=3){const C=E,P=E+1,D=E+2;s=gr(this,h,e,i,c,u,d,C,P,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const w=f,S=f+1,E=f+2;s=gr(this,o,e,i,c,u,d,w,S,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Mp(n,e,t,i,s,r,o,a){let l;if(e.side===1?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===0,a),l===null)return null;mr.copy(a),mr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(mr);return c<t.near||c>t.far?null:{distance:c,point:mr.clone(),object:n}}function gr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,dr),n.getVertexPosition(l,ur),n.getVertexPosition(c,fr);const u=Mp(n,e,t,i,dr,ur,fr,_l);if(u){const d=new I;fn.getBarycoord(_l,dr,ur,fr,d),s&&(u.uv=fn.getInterpolatedAttribute(s,a,l,c,d,new Je)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,l,c,d,new Je)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new I,materialIndex:0};fn.getNormal(dr,ur,fr,p.normal),u.face=p,u.barycoord=d}return u}class _s extends pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function g(v,f,h,w,S,E,A,C,P,D,M){const x=E/P,T=A/D,O=E/2,G=A/2,B=C/2,q=P+1,z=D+1;let J=0,F=0;const te=new I;for(let $=0;$<z;$++){const re=$*T-G;for(let Se=0;Se<q;Se++){const Ue=Se*x-O;te[v]=Ue*w,te[f]=re*S,te[h]=B,c.push(te.x,te.y,te.z),te[v]=0,te[f]=0,te[h]=C>0?1:-1,u.push(te.x,te.y,te.z),d.push(Se/P),d.push(1-$/D),J+=1}}for(let $=0;$<D;$++)for(let re=0;re<P;re++){const Se=p+re+q*$,Ue=p+re+q*($+1),ke=p+(re+1)+q*($+1),j=p+(re+1)+q*$;l.push(Se,Ue,j),l.push(Ue,ke,j),F+=6}a.addGroup(m,F,M),m+=F,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Wi(n[t]);for(const s in i)e[s]=i[s]}return e}function wp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const bp={clone:Wi,merge:zt};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yl extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new I,El=new Je,Sl=new Je;class Qt extends yl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,El,Sl),t.subVectors(Sl,El)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,$i=1;class Cp extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(Xi,$i,e,t);s.layers=this.layers,this.add(s);const r=new Qt(Xi,$i,e,t);r.layers=this.layers,this.add(r);const o=new Qt(Xi,$i,e,t);o.layers=this.layers,this.add(o);const a=new Qt(Xi,$i,e,t);a.layers=this.layers,this.add(a);const l=new Qt(Xi,$i,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Xi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ml extends At{constructor(e=[],t=301,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rp extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ml(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _s(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new Ft(s,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Cp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Fn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pp={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),h=this._getHandJoint(c,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vr extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fo=new I,Lp=new I,Dp=new ze;class fi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Fo.subVectors(i,t).cross(Lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dp.getNormalMatrix(e),s=this.coplanarPoint(Fo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new ir,Ip=new Je(.5,.5),_r=new I;class Oo{constructor(e=new fi,t=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],p=r[6],m=r[7],g=r[8],v=r[9],f=r[10],h=r[11],w=r[12],S=r[13],E=r[14],A=r[15];if(s[0].setComponents(c-o,m-u,h-g,A-w).normalize(),s[1].setComponents(c+o,m+u,h+g,A+w).normalize(),s[2].setComponents(c+a,m+d,h+v,A+S).normalize(),s[3].setComponents(c-a,m-d,h-v,A-S).normalize(),i)s[4].setComponents(l,p,f,E).normalize(),s[5].setComponents(c-l,m-p,h-f,A-E).normalize();else if(s[4].setComponents(c-l,m-p,h-f,A-E).normalize(),t===2e3)s[5].setComponents(c+l,m+p,h+f,A+E).normalize();else if(t===2001)s[5].setComponents(l,p,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=Ip.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wl extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xr=new I,yr=new I,bl=new rt,xs=new So,Er=new ir,ko=new I,Tl=new I;class Al extends Lt{constructor(e=new pn,t=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)xr.fromBufferAttribute(t,s-1),yr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=xr.distanceTo(yr);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;bl.copy(s).invert(),xs.copy(e.ray).applyMatrix4(bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=m,f=g-1;v<f;v+=c){const h=u.getX(v),w=u.getX(v+1),S=Sr(this,e,xs,l,h,w,v);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(g-1),f=u.getX(m),h=Sr(this,e,xs,l,v,f,g-1);h&&t.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=m,f=g-1;v<f;v+=c){const h=Sr(this,e,xs,l,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=Sr(this,e,xs,l,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(xr.fromBufferAttribute(a,s),yr.fromBufferAttribute(a,r),t.distanceSqToSegment(xr,yr,ko,Tl)>i)return;ko.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ko);if(!(c<e.near||c>e.far))return{distance:c,point:Tl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Cl=new I,Rl=new I;class Np extends Al{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cl.fromBufferAttribute(t,s),Rl.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cl.distanceTo(Rl);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Up extends At{constructor(e,t,i,s,r=1006,o=1006,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class Fp extends At{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pl extends At{constructor(e,t,i=1014,s,r,o,a=1003,l=1003,c,u=1026,d=1){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qi extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,p=t/l,m=[],g=[],v=[],f=[];for(let h=0;h<u;h++){const w=h*p-o;for(let S=0;S<c;S++){const E=S*d-r;g.push(E,-w,0),v.push(0,0,1),f.push(S/a),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const S=w+c*h,E=w+c*(h+1),A=w+1+c*(h+1),C=w+1+c*h;m.push(S,E,C),m.push(E,A,C)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class mi extends pn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,p=new I,m=[],g=[],v=[],f=[];for(let h=0;h<=i;h++){const w=[],S=h/i;let E=0;h===0&&o===0?E=.5/t:h===i&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const C=A/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),f.push(C+E,1-S),w.push(c++)}u.push(w)}for(let h=0;h<i;h++)for(let w=0;w<t;w++){const S=u[h][w+1],E=u[h][w],A=u[h+1][w],C=u[h+1][w+1];(h!==0||o>0)&&m.push(S,E,C),(h!==i-1||l<Math.PI)&&m.push(E,A,C)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Op extends pn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new I,r=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],p=d.start,m=d.count;for(let g=p,v=p+m;g<v;g+=3)for(let f=0;f<3;f++){const h=a.getX(g+f),w=a.getX(g+(f+1)%3);s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,w),Ll(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Ll(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Kt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Ll(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class kp extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bp extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class zp{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Hp=new zp;let Bo=class{constructor(e){this.manager=e!==void 0?e:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class Vp extends Error{constructor(e,t){super(e),this.response=t}}class Gp extends Bo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:i,onError:s});return}On[e]=[],On[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=On[e],d=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let v=0;const f=new ReadableStream({start(h){w();function w(){d.read().then(({done:S,value:E})=>{if(S)h.close();else{v+=E.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let C=0,P=u.length;C<P;C++){const D=u[C];D.onProgress&&D.onProgress(A)}h.enqueue(E),w()}},S=>{h.error(S)})}}});return new Response(f)}else throw new Vp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Qn.add(`file:${e}`,c);const u=On[e];delete On[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=On[e];if(u===void 0)throw this.manager.itemError(e),c;delete On[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Yi=new WeakMap;class Wp extends Bo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Yi.get(o);d===void 0&&(d=[],Yi.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=us("img");function l(){u(),t&&t(this);const d=Yi.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onLoad&&m.onLoad(this)}Yi.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Qn.remove(`image:${e}`);const p=Yi.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onError&&g.onError(d)}Yi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Xp extends yl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $p extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dl=new rt;class Il{constructor(e,t,i=0,s=1/0){this.ray=new So(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dl),this}intersectObject(e,t=!0,i=[]){return zo(e,this,i,t),i.sort(Nl),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)zo(e[s],this,i,t);return i.sort(Nl),i}}function Nl(n,e){return n.distance-e.distance}function zo(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)zo(r[o],e,t,!0)}}function Ul(n,e,t,i){const s=qp(i);switch(t){case 1021:return n*e;case 1028:return n*e/s.components*s.byteLength;case 1029:return n*e/s.components*s.byteLength;case 1030:return n*e*2/s.components*s.byteLength;case 1031:return n*e*2/s.components*s.byteLength;case 1022:return n*e*3/s.components*s.byteLength;case 1023:return n*e*4/s.components*s.byteLength;case 1033:return n*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qp(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fl(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Yp(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,qm=`struct PhysicalMaterial {
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
}`,Ym=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ge={alphahash_fragment:jp,alphahash_pars_fragment:Zp,alphamap_fragment:Kp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:om,bsdfs:am,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:um,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:vm,common:_m,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Em,displacementmap_vertex:Sm,emissivemap_fragment:Mm,emissivemap_pars_fragment:wm,colorspace_fragment:bm,colorspace_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Rm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Hm,envmap_vertex:Lm,fog_vertex:Dm,fog_pars_vertex:Im,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:km,lights_lambert_pars_fragment:Bm,lights_pars_begin:zm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:$m,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:jm,lights_fragment_end:Zm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:eg,map_fragment:tg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:og,morphinstance_vertex:ag,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:dg,normal_fragment_begin:ug,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Eg,opaque_fragment:Sg,packing:Mg,premultiplied_alpha_fragment:wg,project_vertex:bg,dithering_fragment:Tg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ig,skinbase_vertex:Ng,skinning_pars_vertex:Ug,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:kg,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:Hg,transmission_fragment:Vg,transmission_pars_fragment:Gg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:$g,worldpos_vertex:qg,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},En={basic:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:zt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:zt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:zt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:zt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:zt([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};En.physical={uniforms:zt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Mr={r:0,b:0,g:0},gi=new _n,Yg=new rt;function jg(n,e,t,i,s,r,o){const a=new et(0);let l=r===!0?0:1,c,u,d=null,p=0,m=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function v(S){let E=!1;const A=g(S);A===null?h(a,l):A&&A.isColor&&(h(A,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(S,E){const A=g(E);A&&(A.isCubeTexture||A.mapping===306)?(u===void 0&&(u=new Ft(new _s(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Wi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gi.copy(E.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(gi)),u.material.toneMapped=Ke.getTransfer(A.colorSpace)!==st,(d!==A||p!==A.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,p=A.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ft(new qi(2,2),new Un({name:"BackgroundMaterial",uniforms:Wi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(A.colorSpace)!==st,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||p!==A.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,p=A.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,E){S.getRGB(Mr,xl(n)),i.buffers.color.setClear(Mr.r,Mr.g,Mr.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(a,l)},render:v,addToRenderList:f,dispose:w}}function Zg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(x,T,O,G,B){let q=!1;const z=d(G,O,T);r!==z&&(r=z,c(r.object)),q=m(x,G,O,B),q&&g(x,G,O,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(x,T,O,G),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,T,O){const G=O.wireframe===!0;let B=i[x.id];B===void 0&&(B={},i[x.id]=B);let q=B[T.id];q===void 0&&(q={},B[T.id]=q);let z=q[G];return z===void 0&&(z=p(l()),q[G]=z),z}function p(x){const T=[],O=[],G=[];for(let B=0;B<t;B++)T[B]=0,O[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:G,object:x,attributes:{},index:null}}function m(x,T,O,G){const B=r.attributes,q=T.attributes;let z=0;const J=O.getAttributes();for(const F in J)if(J[F].location>=0){const $=B[F];let re=q[F];if(re===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;z++}return r.attributesNum!==z||r.index!==G}function g(x,T,O,G){const B={},q=T.attributes;let z=0;const J=O.getAttributes();for(const F in J)if(J[F].location>=0){let $=q[F];$===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&($=x.instanceColor));const re={};re.attribute=$,$&&$.data&&(re.data=$.data),B[F]=re,z++}r.attributes=B,r.attributesNum=z,r.index=G}function v(){const x=r.newAttributes;for(let T=0,O=x.length;T<O;T++)x[T]=0}function f(x){h(x,0)}function h(x,T){const O=r.newAttributes,G=r.enabledAttributes,B=r.attributeDivisors;O[x]=1,G[x]===0&&(n.enableVertexAttribArray(x),G[x]=1),B[x]!==T&&(n.vertexAttribDivisor(x,T),B[x]=T)}function w(){const x=r.newAttributes,T=r.enabledAttributes;for(let O=0,G=T.length;O<G;O++)T[O]!==x[O]&&(n.disableVertexAttribArray(O),T[O]=0)}function S(x,T,O,G,B,q,z){z===!0?n.vertexAttribIPointer(x,T,O,B,q):n.vertexAttribPointer(x,T,O,G,B,q)}function E(x,T,O,G){v();const B=G.attributes,q=O.getAttributes(),z=T.defaultAttributeValues;for(const J in q){const F=q[J];if(F.location>=0){let te=B[J];if(te===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const $=te.normalized,re=te.itemSize,Se=e.get(te);if(Se===void 0)continue;const Ue=Se.buffer,ke=Se.type,j=Se.bytesPerElement,de=ke===n.INT||ke===n.UNSIGNED_INT||te.gpuType===1013;if(te.isInterleavedBufferAttribute){const he=te.data,be=he.stride,Le=te.offset;if(he.isInstancedInterleavedBuffer){for(let Oe=0;Oe<F.locationSize;Oe++)h(F.location+Oe,he.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Oe=0;Oe<F.locationSize;Oe++)f(F.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Oe=0;Oe<F.locationSize;Oe++)S(F.location+Oe,re/F.locationSize,ke,$,be*j,(Le+re/F.locationSize*Oe)*j,de)}else{if(te.isInstancedBufferAttribute){for(let he=0;he<F.locationSize;he++)h(F.location+he,te.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<F.locationSize;he++)f(F.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let he=0;he<F.locationSize;he++)S(F.location+he,re/F.locationSize,ke,$,re*j,re/F.locationSize*he*j,de)}}else if(z!==void 0){const $=z[J];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(F.location,$);break;case 3:n.vertexAttrib3fv(F.location,$);break;case 4:n.vertexAttrib4fv(F.location,$);break;default:n.vertexAttrib1fv(F.location,$)}}}}w()}function A(){D();for(const x in i){const T=i[x];for(const O in T){const G=T[O];for(const B in G)u(G[B].object),delete G[B];delete T[O]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const O in T){const G=T[O];for(const B in G)u(G[B].object),delete G[B];delete T[O]}delete i[x.id]}function P(x){for(const T in i){const O=i[T];if(O[x.id]===void 0)continue;const G=O[x.id];for(const B in G)u(G[B].object),delete G[B];delete O[x.id]}}function D(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:f,disableUnusedAttributes:w}}function Kg(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function l(c,u,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==1023&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:A,maxSamples:C}}function Qg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new fi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||s;return s=p,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const w=r?0:i,S=w*4;let E=h.clippingState||null;l.value=E,E=u(g,p,S,m);for(let A=0;A!==S;++A)E[A]=t[A];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const h=m+v*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<h)&&(f=new Float32Array(h));for(let S=0,E=m;S!==v;++S,E+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function ev(n){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ji=4,Ol=[.125,.215,.35,.446,.526,.582],vi=20,Ho=new Xp,kl=new et;let Vo=null,Go=0,Wo=0,Xo=!1;const _i=(1+Math.sqrt(5))/2,Zi=1/_i,Bl=[new I(-_i,Zi,0),new I(_i,Zi,0),new I(-Zi,0,_i),new I(Zi,0,_i),new I(0,_i,-Zi),new I(0,_i,Zi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],tv=new I;class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=tv}=r;Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,Go,Wo),this._renderer.xr.enabled=Xo,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:ci,depthBuffer:!1},s=Hl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nv(r)),this._blurMaterial=iv(r,e,t)}return s}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,s,r){const l=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(kl),d.toneMapping=0,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new xn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),f=new Ft(new _s,v);let h=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,h=!0):(v.color.copy(kl),h=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const A=this._cubeSize;wr(s,E*A,S>2?A:0,A,A),d.setRenderTarget(s),h&&d.render(f,l),d.render(e,l)}f.geometry.dispose(),f.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bl[(s-r-1)%Bl.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ft(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vi-1),v=r/g,f=isFinite(r)?1+Math.floor(u*v):vi;f>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${vi}`);const h=[];let w=0;for(let P=0;P<vi;++P){const D=P/v,M=Math.exp(-D*D/2);h.push(M),P===0?w+=M:P<f&&(w+=2*M)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-i;const E=this._sizeLods[s],A=3*E*(s>S-ji?s-S+ji:0),C=4*(this._cubeSize-E);wr(t,A,C,3*E,2*E),l.setRenderTarget(t),l.render(d,Ho)}}function nv(n){const e=[],t=[],i=[];let s=n;const r=n-ji+1+Ol.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ji?l=Ol[o-n+ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,f=2,h=1,w=new Float32Array(v*g*m),S=new Float32Array(f*g*m),E=new Float32Array(h*g*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,D=C>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];w.set(M,v*g*C),S.set(p,f*g*C);const x=[C,C,C,C,C,C];E.set(x,h*g*C)}const A=new pn;A.setAttribute("position",new yn(w,v)),A.setAttribute("uv",new yn(S,f)),A.setAttribute("faceIndex",new yn(E,h)),e.push(A),s>ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hl(n,e,t){const i=new $n(n,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function iv(n,e,t){const i=new Float32Array(vi),s=new I(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$o(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vl(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gl(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $o(){return`

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
	`}function sv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new zl(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new zl(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Li("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ov(n,e,t,i){const s={},r=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function c(d){const p=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let S=0,E=w.length;S<E;S+=3){const A=w[S+0],C=w[S+1],P=w[S+2];p.push(A,C,C,P,P,A)}}else if(g!==void 0){const w=g.array;v=g.version;for(let S=0,E=w.length/3-1;S<E;S+=3){const A=S+0,C=S+1,P=S+2;p.push(A,C,C,P,P,A)}}else return;const f=new(el(p)?ml:pl)(p,1);f.version=v;const h=r.get(d);h&&e.remove(h),r.set(d,f)}function u(d){const p=r.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function av(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){n.drawElements(i,m,r,p*o),t.update(m,i,1)}function c(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,p*o,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];t.update(f,i,1)}function d(p,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)c(p[h]/o,m[h],v[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,v,0,g);let h=0;for(let w=0;w<g;w++)h+=m[w]*v[w];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function lv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cv(n,e,t){const i=new WeakMap,s=new yt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let E=a.attributes.position.count*S,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*A*4*d),P=new sl(C,E,A,d);P.type=1015,P.needsUpdate=!0;const D=S*4;for(let x=0;x<d;x++){const T=f[x],O=h[x],G=w[x],B=E*A*4*x;for(let q=0;q<T.count;q++){const z=q*D;m===!0&&(s.fromBufferAttribute(T,q),C[B+z+0]=s.x,C[B+z+1]=s.y,C[B+z+2]=s.z,C[B+z+3]=0),g===!0&&(s.fromBufferAttribute(O,q),C[B+z+4]=s.x,C[B+z+5]=s.y,C[B+z+6]=s.z,C[B+z+7]=0),v===!0&&(s.fromBufferAttribute(G,q),C[B+z+8]=s.x,C[B+z+9]=s.y,C[B+z+10]=s.z,C[B+z+11]=G.itemSize===4?s.w:1)}}p={count:d,texture:P,size:new Je(E,A)},i.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function hv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Wl=new At,Xl=new Pl(1,1),$l=new sl,ql=new up,Yl=new Ml,jl=[],Zl=[],Kl=new Float32Array(16),Jl=new Float32Array(9),Ql=new Float32Array(4);function Ki(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=jl[s];if(r===void 0&&(r=new Float32Array(s),jl[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function br(n,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function mv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Ql.set(i),n.uniformMatrix2fv(this.addr,!1,Ql),Tt(t,i)}}function gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Jl.set(i),n.uniformMatrix3fv(this.addr,!1,Jl),Tt(t,i)}}function vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Kl.set(i),n.uniformMatrix4fv(this.addr,!1,Kl),Tt(t,i)}}function _v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function Sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function Tv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xl.compareFunction=515,r=Xl):r=Wl,t.setTexture2D(e||r,s)}function Av(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ql,s)}function Cv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Yl,s)}function Rv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$l,s)}function Pv(n){switch(n){case 5126:return dv;case 35664:return uv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return vv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return Ev;case 5125:return Sv;case 36294:return Mv;case 36295:return wv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Rv}}function Lv(n,e){n.uniform1fv(this.addr,e)}function Dv(n,e){const t=Ki(e,this.size,2);n.uniform2fv(this.addr,t)}function Iv(n,e){const t=Ki(e,this.size,3);n.uniform3fv(this.addr,t)}function Nv(n,e){const t=Ki(e,this.size,4);n.uniform4fv(this.addr,t)}function Uv(n,e){const t=Ki(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fv(n,e){const t=Ki(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ov(n,e){const t=Ki(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kv(n,e){n.uniform1iv(this.addr,e)}function Bv(n,e){n.uniform2iv(this.addr,e)}function zv(n,e){n.uniform3iv(this.addr,e)}function Hv(n,e){n.uniform4iv(this.addr,e)}function Vv(n,e){n.uniform1uiv(this.addr,e)}function Gv(n,e){n.uniform2uiv(this.addr,e)}function Wv(n,e){n.uniform3uiv(this.addr,e)}function Xv(n,e){n.uniform4uiv(this.addr,e)}function $v(n,e,t){const i=this.cache,s=e.length,r=br(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Wl,r[o])}function qv(n,e,t){const i=this.cache,s=e.length,r=br(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ql,r[o])}function Yv(n,e,t){const i=this.cache,s=e.length,r=br(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Yl,r[o])}function jv(n,e,t){const i=this.cache,s=e.length,r=br(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$l,r[o])}function Zv(n){switch(n){case 5126:return Lv;case 35664:return Dv;case 35665:return Iv;case 35666:return Nv;case 35674:return Uv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return kv;case 35667:case 35671:return Bv;case 35668:case 35672:return zv;case 35669:case 35673:return Hv;case 5125:return Vv;case 36294:return Gv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return jv}}class Kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}}class Jv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zv(t.type)}}class Qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function ec(n,e){n.seq.push(e),n.map[e.id]=e}function e_(n,e,t){const i=n.name,s=i.length;for(qo.lastIndex=0;;){const r=qo.exec(i),o=qo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ec(t,c===void 0?new Kv(a,n,e):new Jv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Qv(a),ec(t,d)),t=d}}}class Tr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);e_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function tc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const t_=37297;let n_=0;function i_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const nc=new ze;function s_(n){Ke._getMatrix(nc,Ke.workingColorSpace,n);const e=`mat3( ${nc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Qs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ic(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+i_(n.getShaderSource(e),a)}else return r}function r_(n,e){const t=s_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function o_(n,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new I;function a_(){Ke.getLuminanceCoefficients(Ar);const n=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function c_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ys(n){return n!==""}function sc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(n){return n.replace(d_,f_)}const u_=new Map;function f_(n,e){let t=Ge[e];if(t===void 0){const i=u_.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(n){return n.replace(p_,m_)}function m_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function v_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function __(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function x_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function y_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function E_(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=g_(t),c=v_(t),u=__(t),d=x_(t),p=y_(t),m=l_(t),g=c_(r),v=s.createProgram();let f,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),h.length>0&&(h+=`
`)):(f=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),h=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ge.tonemapping_pars_fragment:"",t.toneMapping!==0?o_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,r_("linearToOutputTexel",t.outputColorSpace),a_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),o=Yo(o),o=sc(o,t),o=rc(o,t),a=Yo(a),a=sc(a,t),a=rc(a,t),o=oc(o),a=oc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=w+f+o,E=w+h+a,A=tc(s,s.VERTEX_SHADER,S),C=tc(s,s.FRAGMENT_SHADER,E);s.attachShader(v,A),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(T){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(A)||"",B=s.getShaderInfoLog(C)||"",q=O.trim(),z=G.trim(),J=B.trim();let F=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,C);else{const $=ic(s,A,"vertex"),re=ic(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+q+`
`+$+`
`+re)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||J==="")&&(te=!1);te&&(T.diagnostics={runnable:F,programLog:q,vertexShader:{log:z,prefix:f},fragmentShader:{log:J,prefix:h}})}s.deleteShader(A),s.deleteShader(C),D=new Tr(s,v),M=h_(s,v)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,t_)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let S_=0;class M_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new w_(e),t.set(e,i)),i}}class w_{constructor(e){this.id=S_++,this.code=e,this.usedTimes=0}}function b_(n,e,t,i,s,r,o){const a=new Mo,l=new M_,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,x,T,O,G){const B=O.fog,q=G.geometry,z=M.isMeshStandardMaterial?O.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),F=J&&J.mapping===306?J.image.height:null,te=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=$!==void 0?$.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let Ue,ke,j,de;if(te){const Be=En[te];Ue=Be.vertexShader,ke=Be.fragmentShader}else Ue=M.vertexShader,ke=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const he=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Le=G.isInstancedMesh===!0,Oe=G.isBatchedMesh===!0,ht=!!M.map,Xe=!!M.matcap,R=!!J,ot=!!M.aoMap,Ce=!!M.lightMap,Ze=!!M.bumpMap,Ae=!!M.normalMap,at=!!M.displacementMap,xe=!!M.emissiveMap,Ve=!!M.metalnessMap,Et=!!M.roughnessMap,mt=M.anisotropy>0,b=M.clearcoat>0,_=M.dispersion>0,k=M.iridescence>0,Z=M.sheen>0,se=M.transmission>0,Y=mt&&!!M.anisotropyMap,Te=b&&!!M.clearcoatMap,oe=b&&!!M.clearcoatNormalMap,V=b&&!!M.clearcoatRoughnessMap,K=k&&!!M.iridescenceMap,H=k&&!!M.iridescenceThicknessMap,ne=Z&&!!M.sheenColorMap,me=Z&&!!M.sheenRoughnessMap,pe=!!M.specularMap,ce=!!M.specularColorMap,Re=!!M.specularIntensityMap,L=se&&!!M.transmissionMap,ie=se&&!!M.thicknessMap,le=!!M.gradientMap,ye=!!M.alphaMap,ee=M.alphaTest>0,Q=!!M.alphaHash,Me=!!M.extensions;let Ie=0;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const We={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:Ue,fragmentShader:ke,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ci,alphaToCoverage:!!M.alphaToCoverage,map:ht,matcap:Xe,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:F,aoMap:ot,lightMap:Ce,bumpMap:Ze,normalMap:Ae,displacementMap:p&&at,emissiveMap:xe,normalMapObjectSpace:Ae&&M.normalMapType===1,normalMapTangentSpace:Ae&&M.normalMapType===0,metalnessMap:Ve,roughnessMap:Et,anisotropy:mt,anisotropyMap:Y,clearcoat:b,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:V,dispersion:_,iridescence:k,iridescenceMap:K,iridescenceThicknessMap:H,sheen:Z,sheenColorMap:ne,sheenRoughnessMap:me,specularMap:pe,specularColorMap:ce,specularIntensityMap:Re,transmission:se,transmissionMap:L,thicknessMap:ie,gradientMap:le,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:ee,alphaHash:Q,combine:M.combine,mapUv:ht&&v(M.map.channel),aoMapUv:ot&&v(M.aoMap.channel),lightMapUv:Ce&&v(M.lightMap.channel),bumpMapUv:Ze&&v(M.bumpMap.channel),normalMapUv:Ae&&v(M.normalMap.channel),displacementMapUv:at&&v(M.displacementMap.channel),emissiveMapUv:xe&&v(M.emissiveMap.channel),metalnessMapUv:Ve&&v(M.metalnessMap.channel),roughnessMapUv:Et&&v(M.roughnessMap.channel),anisotropyMapUv:Y&&v(M.anisotropyMap.channel),clearcoatMapUv:Te&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:H&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(M.sheenRoughnessMap.channel),specularMapUv:pe&&v(M.specularMap.channel),specularColorMapUv:ce&&v(M.specularColorMap.channel),specularIntensityMapUv:Re&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:ie&&v(M.thicknessMap.channel),alphaMapUv:ye&&v(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ae||mt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(ht||ye),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:G.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ht&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:xe&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Me&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&M.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function h(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)x.push(T),x.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(w(x,M),S(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){const x=g[M.type];let T;if(x){const O=En[x];T=bp.clone(O.uniforms)}else T=M.uniforms;return T}function A(M,x){let T;for(let O=0,G=u.length;O<G;O++){const B=u[O];if(B.cacheKey===x){T=B,++T.usedTimes;break}}return T===void 0&&(T=new E_(n,x,M,r),u.push(T)),T}function C(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:E,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:D}}function T_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function A_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,p,m,g,v,f){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=f),e++,h}function a(d,p,m,g,v,f){const h=o(d,p,m,g,v,f);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,p,m,g,v,f){const h=o(d,p,m,g,v,f);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,p){t.length>1&&t.sort(d||A_),i.length>1&&i.sort(p||lc),s.length>1&&s.sort(p||lc)}function u(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function C_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new cc,n.set(i,[o])):s>=r.length?(o=new cc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function R_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new et};break;case"SpotLight":t={position:new I,direction:new I,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function P_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let L_=0;function D_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function I_(n){const e=new R_,t=P_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new rt,o=new rt;function a(c){let u=0,d=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,v=0,f=0,h=0,w=0,S=0,E=0,A=0,C=0,P=0;c.sort(D_);for(let M=0,x=c.length;M<x;M++){const T=c[M],O=T.color,G=T.intensity,B=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=O.r*G,d+=O.g*G,p+=O.b*G;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],G);P++}else if(T.isDirectionalLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const J=T.shadow,F=t.get(T);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=T.shadow.matrix,w++}i.directional[m]=z,m++}else if(T.isSpotLight){const z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(O).multiplyScalar(G),z.distance=B,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[v]=z;const J=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,J.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[v]=J.matrix,T.castShadow){const F=t.get(T);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=q,E++}v++}else if(T.isRectAreaLight){const z=e.get(T);z.color.copy(O).multiplyScalar(G),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[f]=z,f++}else if(T.isPointLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const J=T.shadow,F=t.get(T);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=T.shadow.matrix,S++}i.point[g]=z,g++}else if(T.isHemisphereLight){const z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(G),z.groundColor.copy(T.groundColor).multiplyScalar(G),i.hemi[h]=z,h++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==f||D.hemiLength!==h||D.numDirectionalShadows!==w||D.numPointShadows!==S||D.numSpotShadows!==E||D.numSpotMaps!==A||D.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=f,D.hemiLength=h,D.numDirectionalShadows=w,D.numPointShadows=S,D.numSpotShadows=E,D.numSpotMaps=A,D.numLightProbes=P,i.version=L_++)}function l(c,u){let d=0,p=0,m=0,g=0,v=0;const f=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const S=c[h];if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),d++}else if(S.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),m++}else if(S.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),v++}}}return{setup:a,setupView:l,state:i}}function hc(n){const e=new I_(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function N_(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new hc(n),e.set(s,[a])):r>=o.length?(a=new hc(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F_=`uniform sampler2D shadow_pass;
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
}`;function O_(n,e,t){let i=new Oo;const s=new Je,r=new Je,o=new yt,a=new kp({depthPacking:3201}),l=new Bp,c={},u=t.maxTextureSize,d={0:1,1:0,2:2},p=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:U_,fragmentShader:F_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ft(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let h=this.type;this.render=function(C,P,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),O=n.state;O.setBlending(0),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=h!==3&&this.type===3,B=h===3&&this.type!==3;for(let q=0,z=C.length;q<z;q++){const J=C[q],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const te=F.getFrameExtents();if(s.multiply(te),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,F.mapSize.y=r.y)),F.map===null||G===!0||B===!0){const re=this.type!==3?{minFilter:1003,magFilter:1003}:{};F.map!==null&&F.map.dispose(),F.map=new $n(s.x,s.y,re),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const $=F.getViewportCount();for(let re=0;re<$;re++){const Se=F.getViewport(re);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),O.viewport(o),F.updateMatrices(J,re),i=F.getFrustum(),E(P,D,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===3&&w(F,D),F.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(M,x,T)};function w(C,P){const D=e.update(v);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $n(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,D,p,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,D,m,v,null)}function S(C,P,D,M){let x=null;const T=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=D.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=x.uuid,G=P.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let q=B[G];q===void 0&&(q=x.clone(),B[G]=q,P.addEventListener("dispose",A)),x=q}if(x.visible=P.visible,x.wireframe=P.wireframe,M===3?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:d[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=n.properties.get(x);O.light=D}return x}function E(C,P,D,M,x){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===3)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const G=e.update(C),B=C.material;if(Array.isArray(B)){const q=G.groups;for(let z=0,J=q.length;z<J;z++){const F=q[z],te=B[F.materialIndex];if(te&&te.visible){const $=S(C,te,M,x);C.onBeforeShadow(n,C,P,D,G,$,F),n.renderBufferDirect(D,null,G,$,C,F),C.onAfterShadow(n,C,P,D,G,$,F)}}}else if(B.visible){const q=S(C,B,M,x);C.onBeforeShadow(n,C,P,D,G,q,null),n.renderBufferDirect(D,null,G,q,C,null),C.onAfterShadow(n,C,P,D,G,q,null)}}const O=C.children;for(let G=0,B=O.length;G<B;G++)E(O[G],P,D,M,x)}function A(C){C.target.removeEventListener("dispose",A);for(const D in c){const M=c[D],x=C.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const k_={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function B_(n,e){function t(){let L=!1;const ie=new yt;let le=null;const ye=new yt(0,0,0,0);return{setMask:function(ee){le!==ee&&!L&&(n.colorMask(ee,ee,ee,ee),le=ee)},setLocked:function(ee){L=ee},setClear:function(ee,Q,Me,Ie,We){We===!0&&(ee*=Ie,Q*=Ie,Me*=Ie),ie.set(ee,Q,Me,Ie),ye.equals(ie)===!1&&(n.clearColor(ee,Q,Me,Ie),ye.copy(ie))},reset:function(){L=!1,le=null,ye.set(-1,0,0,0)}}}function i(){let L=!1,ie=!1,le=null,ye=null,ee=null;return{setReversed:function(Q){if(ie!==Q){const Me=e.get("EXT_clip_control");Q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=Q;const Ie=ee;ee=null,this.setClear(Ie)}},getReversed:function(){return ie},setTest:function(Q){Q?he(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Q){le!==Q&&!L&&(n.depthMask(Q),le=Q)},setFunc:function(Q){if(ie&&(Q=k_[Q]),ye!==Q){switch(Q){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ee!==Q&&(ie&&(Q=1-Q),n.clearDepth(Q),ee=Q)},reset:function(){L=!1,le=null,ye=null,ee=null,ie=!1}}}function s(){let L=!1,ie=null,le=null,ye=null,ee=null,Q=null,Me=null,Ie=null,We=null;return{setTest:function(Be){L||(Be?he(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Be){ie!==Be&&!L&&(n.stencilMask(Be),ie=Be)},setFunc:function(Be,gt,kt){(le!==Be||ye!==gt||ee!==kt)&&(n.stencilFunc(Be,gt,kt),le=Be,ye=gt,ee=kt)},setOp:function(Be,gt,kt){(Q!==Be||Me!==gt||Ie!==kt)&&(n.stencilOp(Be,gt,kt),Q=Be,Me=gt,Ie=kt)},setLocked:function(Be){L=Be},setClear:function(Be){We!==Be&&(n.clearStencil(Be),We=Be)},reset:function(){L=!1,ie=null,le=null,ye=null,ee=null,Q=null,Me=null,Ie=null,We=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,w=null,S=null,E=null,A=null,C=null,P=new et(0,0,0),D=0,M=!1,x=null,T=null,O=null,G=null,B=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=J>=2);let te=null,$={};const re=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ue=new yt().fromArray(re),ke=new yt().fromArray(Se);function j(L,ie,le,ye){const ee=new Uint8Array(4),Q=n.createTexture();n.bindTexture(L,Q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<le;Me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(ie+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return Q}const de={};de[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(3),Ze(!1),Ae(1),he(n.CULL_FACE),ot(0);function he(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function be(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Le(L,ie){return d[L]!==ie?(n.bindFramebuffer(L,ie),d[L]=ie,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ie),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Oe(L,ie){let le=m,ye=!1;if(L){le=p.get(ie),le===void 0&&(le=[],p.set(ie,le));const ee=L.textures;if(le.length!==ee.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Me=ee.length;Q<Me;Q++)le[Q]=n.COLOR_ATTACHMENT0+Q;le.length=ee.length,ye=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ye=!0);ye&&n.drawBuffers(le)}function ht(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Xe={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};Xe[103]=n.MIN,Xe[104]=n.MAX;const R={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function ot(L,ie,le,ye,ee,Q,Me,Ie,We,Be){if(L===0){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(he(n.BLEND),v=!0),L!==5){if(L!==f||Be!==M){if((h!==100||E!==100)&&(n.blendEquation(n.FUNC_ADD),h=100,E=100),Be)switch(L){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,S=null,A=null,C=null,P.set(0,0,0),D=0,f=L,M=Be}return}ee=ee||ie,Q=Q||le,Me=Me||ye,(ie!==h||ee!==E)&&(n.blendEquationSeparate(Xe[ie],Xe[ee]),h=ie,E=ee),(le!==w||ye!==S||Q!==A||Me!==C)&&(n.blendFuncSeparate(R[le],R[ye],R[Q],R[Me]),w=le,S=ye,A=Q,C=Me),(Ie.equals(P)===!1||We!==D)&&(n.blendColor(Ie.r,Ie.g,Ie.b,We),P.copy(Ie),D=We),f=L,M=!1}function Ce(L,ie){L.side===2?be(n.CULL_FACE):he(n.CULL_FACE);let le=L.side===1;ie&&(le=!le),Ze(le),L.blending===1&&L.transparent===!1?ot(0):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ye=L.stencilWrite;a.setTest(ye),ye&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(L){x!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),x=L)}function Ae(L){L!==0?(he(n.CULL_FACE),L!==T&&(L===1?n.cullFace(n.BACK):L===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),T=L}function at(L){L!==O&&(z&&n.lineWidth(L),O=L)}function xe(L,ie,le){L?(he(n.POLYGON_OFFSET_FILL),(G!==ie||B!==le)&&(n.polygonOffset(ie,le),G=ie,B=le)):be(n.POLYGON_OFFSET_FILL)}function Ve(L){L?he(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Et(L){L===void 0&&(L=n.TEXTURE0+q-1),te!==L&&(n.activeTexture(L),te=L)}function mt(L,ie,le){le===void 0&&(te===null?le=n.TEXTURE0+q-1:le=te);let ye=$[le];ye===void 0&&(ye={type:void 0,texture:void 0},$[le]=ye),(ye.type!==L||ye.texture!==ie)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture(L,ie||de[L]),ye.type=L,ye.texture=ie)}function b(){const L=$[te];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(L){Ue.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ue.copy(L))}function me(L){ke.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ke.copy(L))}function pe(L,ie){let le=c.get(ie);le===void 0&&(le=new WeakMap,c.set(ie,le));let ye=le.get(L);ye===void 0&&(ye=n.getUniformBlockIndex(ie,L.name),le.set(L,ye))}function ce(L,ie){const ye=c.get(ie).get(L);l.get(ie)!==ye&&(n.uniformBlockBinding(ie,ye,L.__bindingPointIndex),l.set(ie,ye))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,$={},d={},p=new WeakMap,m=[],g=null,v=!1,f=null,h=null,w=null,S=null,E=null,A=null,C=null,P=new et(0,0,0),D=0,M=!1,x=null,T=null,O=null,G=null,B=null,Ue.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:be,bindFramebuffer:Le,drawBuffers:Oe,useProgram:ht,setBlending:ot,setMaterial:Ce,setFlipSided:Ze,setCullFace:Ae,setLineWidth:at,setPolygonOffset:xe,setScissorTest:Ve,activeTexture:Et,bindTexture:mt,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:k,texImage2D:K,texImage3D:H,updateUBOMapping:pe,uniformBlockBinding:ce,texStorage2D:oe,texStorage3D:V,texSubImage2D:Z,texSubImage3D:se,compressedTexSubImage2D:Y,compressedTexSubImage3D:Te,scissor:ne,viewport:me,reset:Re}}function z_(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return m?new OffscreenCanvas(b,_):us("canvas")}function v(b,_,k){let Z=1;const se=mt(b);if((se.width>k||se.height>k)&&(Z=k/Math.max(se.width,se.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(Z*se.width),Te=Math.floor(Z*se.height);d===void 0&&(d=g(Y,Te));const oe=_?g(Y,Te):d;return oe.width=Y,oe.height=Te,oe.getContext("2d").drawImage(b,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Y+"x"+Te+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),b;return b}function f(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,_,k,Z,se=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=_;if(_===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),_===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),k===n.UNSIGNED_INT&&(Y=n.RGB32UI),k===n.BYTE&&(Y=n.RGB8I),k===n.SHORT&&(Y=n.RGB16I),k===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),k===n.UNSIGNED_INT&&(Y=n.RGBA32UI),k===n.BYTE&&(Y=n.RGBA8I),k===n.SHORT&&(Y=n.RGBA16I),k===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const Te=se?Qs:Ke.getTransfer(Z);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=Te===st?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(b,_){let k;return b?_===null||_===1014||_===1020?k=n.DEPTH24_STENCIL8:_===1015?k=n.DEPTH32F_STENCIL8:_===1012&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?k=n.DEPTH_COMPONENT24:_===1015?k=n.DEPTH_COMPONENT32F:_===1012&&(k=n.DEPTH_COMPONENT16),k}function A(b,_){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function C(b){const _=b.target;_.removeEventListener("dispose",C),D(_),_.isVideoTexture&&u.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),x(_)}function D(b){const _=i.get(b);if(_.__webglInit===void 0)return;const k=b.source,Z=p.get(k);if(Z){const se=Z[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(b),Object.keys(Z).length===0&&p.delete(k)}i.remove(b)}function M(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const k=b.source,Z=p.get(k);delete Z[_.__cacheKey],o.memory.textures--}function x(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let se=0;se<_.__webglFramebuffer[Z].length;se++)n.deleteFramebuffer(_.__webglFramebuffer[Z][se]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=b.textures;for(let Z=0,se=k.length;Z<se;Z++){const Y=i.get(k[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(b)}let T=0;function O(){T=0}function G(){const b=T;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),T+=1,b}function B(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function q(b,_){const k=i.get(b);if(b.isVideoTexture&&Ve(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(k,b,_);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function z(b,_){const k=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){de(k,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function J(b,_){const k=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){de(k,b,_);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function F(b,_){const k=i.get(b);if(b.version>0&&k.__version!==b.version){he(k,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}const te={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},$={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},re={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function Se(b,_){if(_.type===1015&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,te[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,te[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,te[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,$[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,$[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ue(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",C));const Z=_.source;let se=p.get(Z);se===void 0&&(se={},p.set(Z,se));const Y=B(_);if(Y!==b.__cacheKey){se[Y]===void 0&&(se[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),se[Y].usedTimes++;const Te=se[b.__cacheKey];Te!==void 0&&(se[b.__cacheKey].usedTimes--,Te.usedTimes===0&&M(_)),b.__cacheKey=Y,b.__webglTexture=se[Y].texture}return k}function ke(b,_,k){return Math.floor(Math.floor(b/k)/_)}function j(b,_,k,Z){const Y=b.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,Z,_.data);else{Y.sort((H,ne)=>H.start-ne.start);let Te=0;for(let H=1;H<Y.length;H++){const ne=Y[Te],me=Y[H],pe=ne.start+ne.count,ce=ke(me.start,_.width,4),Re=ke(ne.start,_.width,4);me.start<=pe+1&&ce===Re&&ke(me.start+me.count-1,_.width,4)===ce?ne.count=Math.max(ne.count,me.start+me.count-ne.start):(++Te,Y[Te]=me)}Y.length=Te+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),V=n.getParameter(n.UNPACK_SKIP_PIXELS),K=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let H=0,ne=Y.length;H<ne;H++){const me=Y[H],pe=Math.floor(me.start/4),ce=Math.ceil(me.count/4),Re=pe%_.width,L=Math.floor(pe/_.width),ie=ce,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Re,L,ie,le,k,Z,_.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,V),n.pixelStorei(n.UNPACK_SKIP_ROWS,K)}}function de(b,_,k){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const se=Ue(b,_),Y=_.source;t.bindTexture(Z,b.__webglTexture,n.TEXTURE0+k);const Te=i.get(Y);if(Y.version!==Te.__version||se===!0){t.activeTexture(n.TEXTURE0+k);const oe=Ke.getPrimaries(Ke.workingColorSpace),V=_.colorSpace===""?null:Ke.getPrimaries(_.colorSpace),K=_.colorSpace===""||oe===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let H=v(_.image,!1,s.maxTextureSize);H=Et(_,H);const ne=r.convert(_.format,_.colorSpace),me=r.convert(_.type);let pe=S(_.internalFormat,ne,me,_.colorSpace,_.isVideoTexture);Se(Z,_);let ce;const Re=_.mipmaps,L=_.isVideoTexture!==!0,ie=Te.__version===void 0||se===!0,le=Y.dataReady,ye=A(_,H);if(_.isDepthTexture)pe=E(_.format===1027,_.type),ie&&(L?t.texStorage2D(n.TEXTURE_2D,1,pe,H.width,H.height):t.texImage2D(n.TEXTURE_2D,0,pe,H.width,H.height,0,ne,me,null));else if(_.isDataTexture)if(Re.length>0){L&&ie&&t.texStorage2D(n.TEXTURE_2D,ye,pe,Re[0].width,Re[0].height);for(let ee=0,Q=Re.length;ee<Q;ee++)ce=Re[ee],L?le&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ne,me,ce.data):t.texImage2D(n.TEXTURE_2D,ee,pe,ce.width,ce.height,0,ne,me,ce.data);_.generateMipmaps=!1}else L?(ie&&t.texStorage2D(n.TEXTURE_2D,ye,pe,H.width,H.height),le&&j(_,H,ne,me)):t.texImage2D(n.TEXTURE_2D,0,pe,H.width,H.height,0,ne,me,H.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,pe,Re[0].width,Re[0].height,H.depth);for(let ee=0,Q=Re.length;ee<Q;ee++)if(ce=Re[ee],_.format!==1023)if(ne!==null)if(L){if(le)if(_.layerUpdates.size>0){const Me=Ul(ce.width,ce.height,_.format,_.type);for(const Ie of _.layerUpdates){const We=ce.data.subarray(Ie*Me/ce.data.BYTES_PER_ELEMENT,(Ie+1)*Me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ie,ce.width,ce.height,1,ne,We)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,H.depth,ne,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,pe,ce.width,ce.height,H.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,H.depth,ne,me,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,pe,ce.width,ce.height,H.depth,0,ne,me,ce.data)}else{L&&ie&&t.texStorage2D(n.TEXTURE_2D,ye,pe,Re[0].width,Re[0].height);for(let ee=0,Q=Re.length;ee<Q;ee++)ce=Re[ee],_.format!==1023?ne!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ne,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?le&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ne,me,ce.data):t.texImage2D(n.TEXTURE_2D,ee,pe,ce.width,ce.height,0,ne,me,ce.data)}else if(_.isDataArrayTexture)if(L){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,pe,H.width,H.height,H.depth),le)if(_.layerUpdates.size>0){const ee=Ul(H.width,H.height,_.format,_.type);for(const Q of _.layerUpdates){const Me=H.data.subarray(Q*ee/H.data.BYTES_PER_ELEMENT,(Q+1)*ee/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,H.width,H.height,1,ne,me,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ne,me,H.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,H.width,H.height,H.depth,0,ne,me,H.data);else if(_.isData3DTexture)L?(ie&&t.texStorage3D(n.TEXTURE_3D,ye,pe,H.width,H.height,H.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ne,me,H.data)):t.texImage3D(n.TEXTURE_3D,0,pe,H.width,H.height,H.depth,0,ne,me,H.data);else if(_.isFramebufferTexture){if(ie)if(L)t.texStorage2D(n.TEXTURE_2D,ye,pe,H.width,H.height);else{let ee=H.width,Q=H.height;for(let Me=0;Me<ye;Me++)t.texImage2D(n.TEXTURE_2D,Me,pe,ee,Q,0,ne,me,null),ee>>=1,Q>>=1}}else if(Re.length>0){if(L&&ie){const ee=mt(Re[0]);t.texStorage2D(n.TEXTURE_2D,ye,pe,ee.width,ee.height)}for(let ee=0,Q=Re.length;ee<Q;ee++)ce=Re[ee],L?le&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ne,me,ce):t.texImage2D(n.TEXTURE_2D,ee,pe,ne,me,ce);_.generateMipmaps=!1}else if(L){if(ie){const ee=mt(H);t.texStorage2D(n.TEXTURE_2D,ye,pe,ee.width,ee.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,me,H)}else t.texImage2D(n.TEXTURE_2D,0,pe,ne,me,H);f(_)&&h(Z),Te.__version=Y.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function he(b,_,k){if(_.image.length!==6)return;const Z=Ue(b,_),se=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+k);const Y=i.get(se);if(se.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+k);const Te=Ke.getPrimaries(Ke.workingColorSpace),oe=_.colorSpace===""?null:Ke.getPrimaries(_.colorSpace),V=_.colorSpace===""||Te===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);const K=_.isCompressedTexture||_.image[0].isCompressedTexture,H=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let Q=0;Q<6;Q++)!K&&!H?ne[Q]=v(_.image[Q],!0,s.maxCubemapSize):ne[Q]=H?_.image[Q].image:_.image[Q],ne[Q]=Et(_,ne[Q]);const me=ne[0],pe=r.convert(_.format,_.colorSpace),ce=r.convert(_.type),Re=S(_.internalFormat,pe,ce,_.colorSpace),L=_.isVideoTexture!==!0,ie=Y.__version===void 0||Z===!0,le=se.dataReady;let ye=A(_,me);Se(n.TEXTURE_CUBE_MAP,_);let ee;if(K){L&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Re,me.width,me.height);for(let Q=0;Q<6;Q++){ee=ne[Q].mipmaps;for(let Me=0;Me<ee.length;Me++){const Ie=ee[Me];_.format!==1023?pe!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Ie.width,Ie.height,pe,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Re,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Ie.width,Ie.height,pe,ce,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Re,Ie.width,Ie.height,0,pe,ce,Ie.data)}}}else{if(ee=_.mipmaps,L&&ie){ee.length>0&&ye++;const Q=mt(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Re,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(H){L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ne[Q].width,ne[Q].height,pe,ce,ne[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Re,ne[Q].width,ne[Q].height,0,pe,ce,ne[Q].data);for(let Me=0;Me<ee.length;Me++){const We=ee[Me].image[Q].image;L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,We.width,We.height,pe,ce,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Re,We.width,We.height,0,pe,ce,We.data)}}else{L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pe,ce,ne[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Re,pe,ce,ne[Q]);for(let Me=0;Me<ee.length;Me++){const Ie=ee[Me];L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,pe,ce,Ie.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Re,pe,ce,Ie.image[Q])}}}f(_)&&h(n.TEXTURE_CUBE_MAP),Y.__version=se.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function be(b,_,k,Z,se,Y){const Te=r.convert(k.format,k.colorSpace),oe=r.convert(k.type),V=S(k.internalFormat,Te,oe,k.colorSpace),K=i.get(_),H=i.get(k);if(H.__renderTarget=_,!K.__hasExternalTextures){const ne=Math.max(1,_.width>>Y),me=Math.max(1,_.height>>Y);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,Y,V,ne,me,_.depth,0,Te,oe,null):t.texImage2D(se,Y,V,ne,me,0,Te,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),xe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,se,H.__webglTexture,0,at(_)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,se,H.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(b,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const Z=_.depthTexture,se=Z&&Z.isDepthTexture?Z.type:null,Y=E(_.stencilBuffer,se),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=at(_);xe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Y,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const Z=_.textures;for(let se=0;se<Z.length;se++){const Y=Z[se],Te=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),V=S(Y.internalFormat,Te,oe,Y.colorSpace),K=at(_);k&&xe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,V,_.width,_.height):xe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const se=Z.__webglTexture,Y=at(_);if(_.depthTexture.format===1026)xe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(_.depthTexture.format===1027)xe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ht(b){const _=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",se)};Z.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=Z}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Z=b.texture.mipmaps;Z&&Z.length>0?Oe(_.__webglFramebuffer[0],b):Oe(_.__webglFramebuffer,b)}else if(k){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),Le(_.__webglDepthbuffer[Z],b,!1);else{const se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Y)}}else{const Z=b.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Le(_.__webglDepthbuffer,b,!1);else{const se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(b,_,k){const Z=i.get(b);_!==void 0&&be(Z.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ht(b)}function R(b){const _=b.texture,k=i.get(b),Z=i.get(_);b.addEventListener("dispose",P);const se=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let V=0;V<_.mipmaps.length;V++)k.__webglFramebuffer[oe][V]=n.createFramebuffer()}else k.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)k.__webglFramebuffer[oe]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Te)for(let oe=0,V=se.length;oe<V;oe++){const K=i.get(se[oe]);K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&xe(b)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<se.length;oe++){const V=se[oe];k.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const K=r.convert(V.format,V.colorSpace),H=r.convert(V.type),ne=S(V.internalFormat,K,H,V.colorSpace,b.isXRRenderTarget===!0),me=at(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ne,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Se(n.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let V=0;V<_.mipmaps.length;V++)be(k.__webglFramebuffer[oe][V],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,V);else be(k.__webglFramebuffer[oe],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);f(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,V=se.length;oe<V;oe++){const K=se[oe],H=i.get(K);let ne=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ne=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,H.__webglTexture),Se(ne,K),be(k.__webglFramebuffer,b,K,n.COLOR_ATTACHMENT0+oe,ne,0),f(K)&&h(ne)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),Se(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let V=0;V<_.mipmaps.length;V++)be(k.__webglFramebuffer[V],b,_,n.COLOR_ATTACHMENT0,oe,V);else be(k.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,oe,0);f(_)&&h(oe),t.unbindTexture()}b.depthBuffer&&ht(b)}function ot(b){const _=b.textures;for(let k=0,Z=_.length;k<Z;k++){const se=_[k];if(f(se)){const Y=w(b),Te=i.get(se).__webglTexture;t.bindTexture(Y,Te),h(Y),t.unbindTexture()}}}const Ce=[],Ze=[];function Ae(b){if(b.samples>0){if(xe(b)===!1){const _=b.textures,k=b.width,Z=b.height;let se=n.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),oe=_.length>1;if(oe)for(let K=0;K<_.length;K++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const V=b.texture.mipmaps;V&&V.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let K=0;K<_.length;K++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[K]);const H=i.get(_[K]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,k,Z,0,0,k,Z,se,n.NEAREST),l===!0&&(Ce.length=0,Ze.length=0,Ce.push(n.COLOR_ATTACHMENT0+K),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ce.push(Y),Ze.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let K=0;K<_.length;K++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,Te.__webglColorRenderbuffer[K]);const H=i.get(_[K]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function at(b){return Math.min(s.maxSamples,b.samples)}function xe(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ve(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Et(b,_){const k=b.colorSpace,Z=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==ci&&k!==""&&(Ke.getTransfer(k)===st?(Z!==1023||se!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=Xe,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xe}function H_(n,e){function t(i,s=""){let r;const o=Ke.getTransfer(s);if(i===1009)return n.UNSIGNED_BYTE;if(i===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return n.BYTE;if(i===1011)return n.SHORT;if(i===1012)return n.UNSIGNED_SHORT;if(i===1013)return n.INT;if(i===1014)return n.UNSIGNED_INT;if(i===1015)return n.FLOAT;if(i===1016)return n.HALF_FLOAT;if(i===1021)return n.ALPHA;if(i===1022)return n.RGB;if(i===1023)return n.RGBA;if(i===1026)return n.DEPTH_COMPONENT;if(i===1027)return n.DEPTH_STENCIL;if(i===1028)return n.RED;if(i===1029)return n.RED_INTEGER;if(i===1030)return n.RG;if(i===1031)return n.RG_INTEGER;if(i===1033)return n.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class dc extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const V_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G_=`
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

}`;class W_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new dc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:V_,fragmentShader:G_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new qi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X_ extends Ci{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,g=null;const v=new W_,f={},h=t.getContextAttributes();let w=null,S=null;const E=[],A=[],C=new Je;let P=null;const D=new Qt;D.viewport=new yt;const M=new Qt;M.viewport=new yt;const x=[D,M],T=new $p;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=E[j];return de===void 0&&(de=new Uo,E[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=E[j];return de===void 0&&(de=new Uo,E[j]=de),de.getGripSpace()},this.getHand=function(j){let de=E[j];return de===void 0&&(de=new Uo,E[j]=de),de.getHandSpace()};function B(j){const de=A.indexOf(j.inputSource);if(de===-1)return;const he=E[de];he!==void 0&&(he.update(j.inputSource,j.frame,c||o),he.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",z);for(let j=0;j<E.length;j++){const de=A[j];de!==null&&(A[j]=null,E[j].disconnect(de))}O=null,G=null,v.reset();for(const j in f)delete f[j];e.setRenderTarget(w),m=null,p=null,d=null,s=null,S=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",z),h.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,be=null,Le=null;h.depth&&(Le=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=h.stencil?1027:1026,be=h.stencil?1020:1014);const Oe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};p=d.createProjectionLayer(Oe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new $n(p.textureWidth,p.textureHeight,{format:1023,type:1009,depthTexture:new Pl(p.textureWidth,p.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const he={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new $n(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(j){for(let de=0;de<j.removed.length;de++){const he=j.removed[de],be=A.indexOf(he);be>=0&&(A[be]=null,E[be].disconnect(he))}for(let de=0;de<j.added.length;de++){const he=j.added[de];let be=A.indexOf(he);if(be===-1){for(let Oe=0;Oe<E.length;Oe++)if(Oe>=A.length){A.push(he),be=Oe;break}else if(A[Oe]===null){A[Oe]=he,be=Oe;break}if(be===-1)break}const Le=E[be];Le&&Le.connect(he)}}const J=new I,F=new I;function te(j,de,he){J.setFromMatrixPosition(de.matrixWorld),F.setFromMatrixPosition(he.matrixWorld);const be=J.distanceTo(F),Le=de.projectionMatrix.elements,Oe=he.projectionMatrix.elements,ht=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),R=(Le[9]+1)/Le[5],ot=(Le[9]-1)/Le[5],Ce=(Le[8]-1)/Le[0],Ze=(Oe[8]+1)/Oe[0],Ae=ht*Ce,at=ht*Ze,xe=be/(-Ce+Ze),Ve=xe*-Ce;if(de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ve),j.translateZ(xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Le[10]===-1)j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Et=ht+xe,mt=Xe+xe,b=Ae-Ve,_=at+(be-Ve),k=R*Xe/mt*Et,Z=ot*Xe/mt*Et;j.projectionMatrix.makePerspective(b,_,k,Z,Et,mt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function $(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let de=j.near,he=j.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(he=v.depthFar)),T.near=M.near=D.near=de,T.far=M.far=D.far=he,(O!==T.near||G!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,G=T.far),T.layers.mask=j.layers.mask|6,D.layers.mask=T.layers.mask&3,M.layers.mask=T.layers.mask&5;const be=j.parent,Le=T.cameras;$(T,be);for(let Oe=0;Oe<Le.length;Oe++)$(Le[Oe],be);Le.length===2?te(T,D,M):T.projectionMatrix.copy(D.projectionMatrix),re(j,T,be)};function re(j,de,he){he===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)},this.getCameraTexture=function(j){return f[j]};let Se=null;function Ue(j,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let be=!1;he.length!==T.cameras.length&&(T.cameras.length=0,be=!0);for(let Xe=0;Xe<he.length;Xe++){const R=he[Xe];let ot=null;if(m!==null)ot=m.getViewport(R);else{const Ze=d.getViewSubImage(p,R);ot=Ze.viewport,Xe===0&&(e.setRenderTargetTextures(S,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(S))}let Ce=x[Xe];Ce===void 0&&(Ce=new Qt,Ce.layers.enable(Xe),Ce.viewport=new yt,x[Xe]=Ce),Ce.matrix.fromArray(R.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(R.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(ot.x,ot.y,ot.width,ot.height),Xe===0&&(T.matrix.copy(Ce.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),be===!0&&T.cameras.push(Ce)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Xe=d.getDepthInformation(he[0]);Xe&&Xe.isValid&&Xe.texture&&v.init(Xe,s.renderState)}if(Le&&Le.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Xe=0;Xe<he.length;Xe++){const R=he[Xe].camera;if(R){let ot=f[R];ot||(ot=new dc,f[R]=ot);const Ce=d.getCameraImage(R);ot.sourceTexture=Ce}}}for(let he=0;he<E.length;he++){const be=A[he],Le=E[he];be!==null&&Le!==void 0&&Le.update(be,de,c||o)}Se&&Se(j,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const ke=new Fl;ke.setAnimationLoop(Ue),this.setAnimationLoop=function(j){Se=j},this.dispose=function(){}}}const xi=new _n,$_=new rt;function q_(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,xl(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,w,S,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),d(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h)):h.isMeshStandardMaterial?(r(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,E)):h.isMeshMatcapMaterial?(r(f,h),g(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),v(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?l(f,h,w,S):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===1&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===1&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const w=e.get(h),S=w.envMap,E=w.envMapRotation;S&&(f.envMap.value=S,xi.copy(E),xi.x*=-1,xi.y*=-1,xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),f.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(xi)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,w,S){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*w,f.scale.value=S*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,w){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const w=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Y_(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const E=S.program;i.uniformBlockBinding(w,E)}function c(w,S){let E=s[w.id];E===void 0&&(g(w),E=u(w),s[w.id]=E,w.addEventListener("dispose",f));const A=S.program;i.updateUBOMapping(w,A);const C=e.render.frame;r[w.id]!==C&&(p(w),r[w.id]=C)}function u(w){const S=d();w.__bindingPointIndex=S;const E=n.createBuffer(),A=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const S=s[w.id],E=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,P=E.length;C<P;C++){const D=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,x=D.length;M<x;M++){const T=D[M];if(m(T,C,M,A)===!0){const O=T.__offset,G=Array.isArray(T.value)?T.value:[T.value];let B=0;for(let q=0;q<G.length;q++){const z=G[q],J=v(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,O+B,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,S,E,A){const C=w.value,P=S+"_"+E;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{const D=A[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return A[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(w){const S=w.uniforms;let E=0;const A=16;for(let P=0,D=S.length;P<D;P++){const M=Array.isArray(S[P])?S[P]:[S[P]];for(let x=0,T=M.length;x<T;x++){const O=M[x],G=Array.isArray(O.value)?O.value:[O.value];for(let B=0,q=G.length;B<q;B++){const z=G[B],J=v(z),F=E%A,te=F%J.boundary,$=F+te;E+=te,$!==0&&A-$<J.storage&&(E+=A-$),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=J.storage}}}const C=E%A;return C>0&&(E+=A-C),w.__size=E,w.__cache={},this}function v(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function f(w){const S=w.target;S.removeEventListener("dispose",f);const E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function h(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class j_{constructor(e={}){const{canvas:t=rp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let f=null,h=null;const w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let A=!1;this._outputColorSpace=jt;let C=0,P=0,D=null,M=-1,x=null;const T=new yt,O=new yt;let G=null;const B=new et(0);let q=0,z=t.width,J=t.height,F=1,te=null,$=null;const re=new yt(0,0,z,J),Se=new yt(0,0,z,J);let Ue=!1;const ke=new Oo;let j=!1,de=!1;const he=new rt,be=new I,Le=new yt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Xe(){return D===null?F:1}let R=i;function ot(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r179"),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ee,!1),R===null){const N="webgl2";if(R=ot(N,y),R===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ce,Ze,Ae,at,xe,Ve,Et,mt,b,_,k,Z,se,Y,Te,oe,V,K,H,ne,me,pe,ce,Re;function L(){Ce=new rv(R),Ce.init(),pe=new H_(R,Ce),Ze=new Jg(R,Ce,e,pe),Ae=new B_(R,Ce),Ze.reversedDepthBuffer&&p&&Ae.buffers.depth.setReversed(!0),at=new lv(R),xe=new T_,Ve=new z_(R,Ce,Ae,xe,Ze,pe,at),Et=new ev(E),mt=new sv(E),b=new Yp(R),ce=new Zg(R,b),_=new ov(R,b,at,ce),k=new hv(R,_,b,at),H=new cv(R,Ze,Ve),oe=new Qg(xe),Z=new b_(E,Et,mt,Ce,Ze,ce,oe),se=new q_(E,xe),Y=new C_,Te=new N_(Ce),K=new jg(E,Et,mt,Ae,k,m,l),V=new O_(E,k,Ze),Re=new Y_(R,at,Ze,Ae),ne=new Kg(R,Ce,at),me=new av(R,Ce,at),at.programs=Z.programs,E.capabilities=Ze,E.extensions=Ce,E.properties=xe,E.renderLists=Y,E.shadowMap=V,E.state=Ae,E.info=at}L();const ie=new X_(E,R);this.xr=ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Ce.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ce.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(y){y!==void 0&&(F=y,this.setSize(z,J,!1))},this.getSize=function(y){return y.set(z,J)},this.setSize=function(y,N,W=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=y,J=N,t.width=Math.floor(y*F),t.height=Math.floor(N*F),W===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(z*F,J*F).floor()},this.setDrawingBufferSize=function(y,N,W){z=y,J=N,F=W,t.width=Math.floor(y*W),t.height=Math.floor(N*W),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(re)},this.setViewport=function(y,N,W,X){y.isVector4?re.set(y.x,y.y,y.z,y.w):re.set(y,N,W,X),Ae.viewport(T.copy(re).multiplyScalar(F).round())},this.getScissor=function(y){return y.copy(Se)},this.setScissor=function(y,N,W,X){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,N,W,X),Ae.scissor(O.copy(Se).multiplyScalar(F).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(y){Ae.setScissorTest(Ue=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,W=!0){let X=0;if(y){let U=!1;if(D!==null){const ae=D.texture.format;U=ae===1033||ae===1031||ae===1029}if(U){const ae=D.texture.type,ve=ae===1009||ae===1014||ae===1012||ae===1020||ae===1017||ae===1018,we=K.getClearColor(),Ee=K.getClearAlpha(),Ne=we.r,Fe=we.g,Pe=we.b;ve?(g[0]=Ne,g[1]=Fe,g[2]=Pe,g[3]=Ee,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Ne,v[1]=Fe,v[2]=Pe,v[3]=Ee,R.clearBufferiv(R.COLOR,0,v))}else X|=R.COLOR_BUFFER_BIT}N&&(X|=R.DEPTH_BUFFER_BIT),W&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),K.dispose(),Y.dispose(),Te.dispose(),xe.dispose(),Et.dispose(),mt.dispose(),k.dispose(),ce.dispose(),Re.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",kt),ie.removeEventListener("sessionend",Ya),Gn.stop()};function le(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=at.autoReset,N=V.enabled,W=V.autoUpdate,X=V.needsUpdate,U=V.type;L(),at.autoReset=y,V.enabled=N,V.autoUpdate=W,V.needsUpdate=X,V.type=U}function ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){const N=y.target;N.removeEventListener("dispose",Q),Me(N)}function Me(y){Ie(y),xe.remove(y)}function Ie(y){const N=xe.get(y).programs;N!==void 0&&(N.forEach(function(W){Z.releaseProgram(W)}),y.isShaderMaterial&&Z.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,W,X,U,ae){N===null&&(N=Oe);const ve=U.isMesh&&U.matrixWorld.determinant()<0,we=ME(y,N,W,X,U);Ae.setMaterial(X,ve);let Ee=W.index,Ne=1;if(X.wireframe===!0){if(Ee=_.getWireframeAttribute(W),Ee===void 0)return;Ne=2}const Fe=W.drawRange,Pe=W.attributes.position;let je=Fe.start*Ne,lt=(Fe.start+Fe.count)*Ne;ae!==null&&(je=Math.max(je,ae.start*Ne),lt=Math.min(lt,(ae.start+ae.count)*Ne)),Ee!==null?(je=Math.max(je,0),lt=Math.min(lt,Ee.count)):Pe!=null&&(je=Math.max(je,0),lt=Math.min(lt,Pe.count));const xt=lt-je;if(xt<0||xt===1/0)return;ce.setup(U,X,we,W,Ee);let ut,ct=ne;if(Ee!==null&&(ut=b.get(Ee),ct=me,ct.setIndex(ut)),U.isMesh)X.wireframe===!0?(Ae.setLineWidth(X.wireframeLinewidth*Xe()),ct.setMode(R.LINES)):ct.setMode(R.TRIANGLES);else if(U.isLine){let De=X.linewidth;De===void 0&&(De=1),Ae.setLineWidth(De*Xe()),U.isLineSegments?ct.setMode(R.LINES):U.isLineLoop?ct.setMode(R.LINE_LOOP):ct.setMode(R.LINE_STRIP)}else U.isPoints?ct.setMode(R.POINTS):U.isSprite&&ct.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))ct.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const De=U._multiDrawStarts,vt=U._multiDrawCounts,Qe=U._multiDrawCount,nn=Ee?b.get(Ee).bytesPerElement:1,as=xe.get(X).currentProgram.getUniforms();for(let sn=0;sn<Qe;sn++)as.setValue(R,"_gl_DrawID",sn),ct.render(De[sn]/nn,vt[sn])}else if(U.isInstancedMesh)ct.renderInstances(je,xt,U.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,De);ct.renderInstances(je,xt,vt)}else ct.render(je,xt)};function We(y,N,W){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,co(y,N,W),y.side=0,y.needsUpdate=!0,co(y,N,W),y.side=2):co(y,N,W)}this.compile=function(y,N,W=null){W===null&&(W=y),h=Te.get(W),h.init(N),S.push(h),W.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),y!==W&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const X=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ae=U.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const we=ae[ve];We(we,W,U),X.add(we)}else We(ae,W,U),X.add(ae)}),h=S.pop(),X},this.compileAsync=function(y,N,W=null){const X=this.compile(y,N,W);return new Promise(U=>{function ae(){if(X.forEach(function(ve){xe.get(ve).currentProgram.isReady()&&X.delete(ve)}),X.size===0){U(y);return}setTimeout(ae,10)}Ce.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Be=null;function gt(y){Be&&Be(y)}function kt(){Gn.stop()}function Ya(){Gn.start()}const Gn=new Fl;Gn.setAnimationLoop(gt),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(y){Be=y,ie.setAnimationLoop(y),y===null?Gn.stop():Gn.start()},ie.addEventListener("sessionstart",kt),ie.addEventListener("sessionend",Ya),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,N,D),h=Te.get(y,S.length),h.init(N),S.push(h),he.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ke.setFromProjectionMatrix(he,2e3,N.reversedDepth),de=this.localClippingEnabled,j=oe.init(this.clippingPlanes,de),f=Y.get(y,w.length),f.init(),w.push(f),ie.enabled===!0&&ie.isPresenting===!0){const ae=E.xr.getDepthSensingMesh();ae!==null&&ja(ae,N,-1/0,E.sortObjects)}ja(y,N,0,E.sortObjects),f.finish(),E.sortObjects===!0&&f.sort(te,$),ht=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ht&&K.addToRenderList(f,y),this.info.render.frame++,j===!0&&oe.beginShadows();const W=h.state.shadowsArray;V.render(W,y,N),j===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=f.opaque,U=f.transmissive;if(h.setupLights(),N.isArrayCamera){const ae=N.cameras;if(U.length>0)for(let ve=0,we=ae.length;ve<we;ve++){const Ee=ae[ve];Bu(X,U,y,Ee)}ht&&K.render(y);for(let ve=0,we=ae.length;ve<we;ve++){const Ee=ae[ve];ku(f,y,Ee,Ee.viewport)}}else U.length>0&&Bu(X,U,y,N),ht&&K.render(y),ku(f,y,N);D!==null&&P===0&&(Ve.updateMultisampleRenderTarget(D),Ve.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(E,y,N),ce.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(h=S[S.length-1],j===!0&&oe.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function ja(y,N,W,X){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ke.intersectsSprite(y)){X&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(he);const ve=k.update(y),we=y.material;we.visible&&f.push(y,ve,we,W,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ke.intersectsObject(y))){const ve=k.update(y),we=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Le.copy(ve.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(he)),Array.isArray(we)){const Ee=ve.groups;for(let Ne=0,Fe=Ee.length;Ne<Fe;Ne++){const Pe=Ee[Ne],je=we[Pe.materialIndex];je&&je.visible&&f.push(y,ve,je,W,Le.z,Pe)}}else we.visible&&f.push(y,ve,we,W,Le.z,null)}}const ae=y.children;for(let ve=0,we=ae.length;ve<we;ve++)ja(ae[ve],N,W,X)}function ku(y,N,W,X){const U=y.opaque,ae=y.transmissive,ve=y.transparent;h.setupLightsView(W),j===!0&&oe.setGlobalState(E.clippingPlanes,W),X&&Ae.viewport(T.copy(X)),U.length>0&&lo(U,N,W),ae.length>0&&lo(ae,N,W),ve.length>0&&lo(ve,N,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Bu(y,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[X.id]===void 0&&(h.state.transmissionRenderTarget[X.id]=new $n(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ae=h.state.transmissionRenderTarget[X.id],ve=X.viewport||T;ae.setSize(ve.z*E.transmissionResolutionScale,ve.w*E.transmissionResolutionScale);const we=E.getRenderTarget(),Ee=E.getActiveCubeFace(),Ne=E.getActiveMipmapLevel();E.setRenderTarget(ae),E.getClearColor(B),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),ht&&K.render(W);const Fe=E.toneMapping;E.toneMapping=0;const Pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),j===!0&&oe.setGlobalState(E.clippingPlanes,X),lo(y,W,X),Ve.updateMultisampleRenderTarget(ae),Ve.updateRenderTargetMipmap(ae),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let lt=0,xt=N.length;lt<xt;lt++){const ut=N[lt],ct=ut.object,De=ut.geometry,vt=ut.material,Qe=ut.group;if(vt.side===2&&ct.layers.test(X.layers)){const nn=vt.side;vt.side=1,vt.needsUpdate=!0,zu(ct,W,X,De,vt,Qe),vt.side=nn,vt.needsUpdate=!0,je=!0}}je===!0&&(Ve.updateMultisampleRenderTarget(ae),Ve.updateRenderTargetMipmap(ae))}E.setRenderTarget(we,Ee,Ne),E.setClearColor(B,q),Pe!==void 0&&(X.viewport=Pe),E.toneMapping=Fe}function lo(y,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ae=y.length;U<ae;U++){const ve=y[U],we=ve.object,Ee=ve.geometry,Ne=ve.group;let Fe=ve.material;Fe.allowOverride===!0&&X!==null&&(Fe=X),we.layers.test(W.layers)&&zu(we,N,W,Ee,Fe,Ne)}}function zu(y,N,W,X,U,ae){y.onBeforeRender(E,N,W,X,U,ae),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(E,N,W,X,y,ae),U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=1,U.needsUpdate=!0,E.renderBufferDirect(W,N,X,U,y,ae),U.side=0,U.needsUpdate=!0,E.renderBufferDirect(W,N,X,U,y,ae),U.side=2):E.renderBufferDirect(W,N,X,U,y,ae),y.onAfterRender(E,N,W,X,U,ae)}function co(y,N,W){N.isScene!==!0&&(N=Oe);const X=xe.get(y),U=h.state.lights,ae=h.state.shadowsArray,ve=U.state.version,we=Z.getParameters(y,U.state,ae,N,W),Ee=Z.getProgramCacheKey(we);let Ne=X.programs;X.environment=y.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(y.isMeshStandardMaterial?mt:Et).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",Q),Ne=new Map,X.programs=Ne);let Fe=Ne.get(Ee);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===ve)return Vu(y,we),Fe}else we.uniforms=Z.getUniforms(y),y.onBeforeCompile(we,E),Fe=Z.acquireProgram(we,Ee),Ne.set(Ee,Fe),X.uniforms=we.uniforms;const Pe=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),Vu(y,we),X.needsLights=bE(y),X.lightsStateVersion=ve,X.needsLights&&(Pe.ambientLightColor.value=U.state.ambient,Pe.lightProbe.value=U.state.probe,Pe.directionalLights.value=U.state.directional,Pe.directionalLightShadows.value=U.state.directionalShadow,Pe.spotLights.value=U.state.spot,Pe.spotLightShadows.value=U.state.spotShadow,Pe.rectAreaLights.value=U.state.rectArea,Pe.ltc_1.value=U.state.rectAreaLTC1,Pe.ltc_2.value=U.state.rectAreaLTC2,Pe.pointLights.value=U.state.point,Pe.pointLightShadows.value=U.state.pointShadow,Pe.hemisphereLights.value=U.state.hemi,Pe.directionalShadowMap.value=U.state.directionalShadowMap,Pe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pe.spotShadowMap.value=U.state.spotShadowMap,Pe.spotLightMatrix.value=U.state.spotLightMatrix,Pe.spotLightMap.value=U.state.spotLightMap,Pe.pointShadowMap.value=U.state.pointShadowMap,Pe.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function Hu(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Tr.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Vu(y,N){const W=xe.get(y);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function ME(y,N,W,X,U){N.isScene!==!0&&(N=Oe),Ve.resetTextureUnits();const ae=N.fog,ve=X.isMeshStandardMaterial?N.environment:null,we=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ci,Ee=(X.isMeshStandardMaterial?mt:Et).get(X.envMap||ve),Ne=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,lt=!!W.morphAttributes.color;let xt=0;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xt=E.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=ut!==void 0?ut.length:0,De=xe.get(X),vt=h.state.lights;if(j===!0&&(de===!0||y!==x)){const Gt=y===x&&X.id===M;oe.setState(X,y,Gt)}let Qe=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==vt.state.version||De.outputColorSpace!==we||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isBatchedMesh&&De.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&De.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==Ee||X.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Fe||De.morphTargets!==Pe||De.morphNormals!==je||De.morphColors!==lt||De.toneMapping!==xt||De.morphTargetsCount!==ct)&&(Qe=!0):(Qe=!0,De.__version=X.version);let nn=De.currentProgram;Qe===!0&&(nn=co(X,N,U));let as=!1,sn=!1,Js=!1;const _t=nn.getUniforms(),ln=De.uniforms;if(Ae.useProgram(nn.program)&&(as=!0,sn=!0,Js=!0),X.id!==M&&(M=X.id,sn=!0),as||x!==y){Ae.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),_t.setValue(R,"projectionMatrix",y.projectionMatrix),_t.setValue(R,"viewMatrix",y.matrixWorldInverse);const Yt=_t.map.cameraPosition;Yt!==void 0&&Yt.setValue(R,be.setFromMatrixPosition(y.matrixWorld)),Ze.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_t.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,sn=!0,Js=!0)}if(U.isSkinnedMesh){_t.setOptional(R,U,"bindMatrix"),_t.setOptional(R,U,"bindMatrixInverse");const Gt=U.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(R,"boneTexture",Gt.boneTexture,Ve))}U.isBatchedMesh&&(_t.setOptional(R,U,"batchingTexture"),_t.setValue(R,"batchingTexture",U._matricesTexture,Ve),_t.setOptional(R,U,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",U._indirectTexture,Ve),_t.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",U._colorsTexture,Ve));const cn=W.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&H.update(U,W,nn),(sn||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,_t.setValue(R,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ln.envMap.value=Ee,ln.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(ln.envMapIntensity.value=N.environmentIntensity),sn&&(_t.setValue(R,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&wE(ln,Js),ae&&X.fog===!0&&se.refreshFogUniforms(ln,ae),se.refreshMaterialUniforms(ln,X,F,J,h.state.transmissionRenderTarget[y.id]),Tr.upload(R,Hu(De),ln,Ve)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Tr.upload(R,Hu(De),ln,Ve),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_t.setValue(R,"center",U.center),_t.setValue(R,"modelViewMatrix",U.modelViewMatrix),_t.setValue(R,"normalMatrix",U.normalMatrix),_t.setValue(R,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Gt=X.uniformsGroups;for(let Yt=0,Za=Gt.length;Yt<Za;Yt++){const Ai=Gt[Yt];Re.update(Ai,nn),Re.bind(Ai,nn)}}return nn}function wE(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function bE(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,N,W){const X=xe.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),xe.get(y.texture).__webglTexture=N,xe.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const W=xe.get(y);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const TE=R.createFramebuffer();this.setRenderTarget=function(y,N=0,W=0){D=y,C=N,P=W;let X=!0,U=null,ae=!1,ve=!1;if(y){const Ee=xe.get(y);if(Ee.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(Ee.__webglFramebuffer===void 0)Ve.setupRenderTarget(y);else if(Ee.__hasExternalTextures)Ve.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pe=y.depthTexture;if(Ee.__boundDepthTexture!==Pe){if(Pe!==null&&xe.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(y)}}const Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ve=!0);const Fe=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?U=Fe[N][W]:U=Fe[N],ae=!0):y.samples>0&&Ve.useMultisampledRTT(y)===!1?U=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[W]:U=Fe,T.copy(y.viewport),O.copy(y.scissor),G=y.scissorTest}else T.copy(re).multiplyScalar(F).floor(),O.copy(Se).multiplyScalar(F).floor(),G=Ue;if(W!==0&&(U=TE),Ae.bindFramebuffer(R.FRAMEBUFFER,U)&&X&&Ae.drawBuffers(y,U),Ae.viewport(T),Ae.scissor(O),Ae.setScissorTest(G),ae){const Ee=xe.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ee.__webglTexture,W)}else if(ve){const Ee=N;for(let Ne=0;Ne<y.textures.length;Ne++){const Fe=xe.get(y.textures[Ne]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,W,Ee)}}else if(y!==null&&W!==0){const Ee=xe.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ee.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(y,N,W,X,U,ae,ve,we=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Ae.bindFramebuffer(R.FRAMEBUFFER,Ee);try{const Ne=y.textures[we],Fe=Ne.format,Pe=Ne.type;if(!Ze.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-X&&W>=0&&W<=y.height-U&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),R.readPixels(N,W,X,U,pe.convert(Fe),pe.convert(Pe),ae))}finally{const Ne=D!==null?xe.get(D).__webglFramebuffer:null;Ae.bindFramebuffer(R.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,N,W,X,U,ae,ve,we=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee)if(N>=0&&N<=y.width-X&&W>=0&&W<=y.height-U){Ae.bindFramebuffer(R.FRAMEBUFFER,Ee);const Ne=y.textures[we],Fe=Ne.format,Pe=Ne.type;if(!Ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.bufferData(R.PIXEL_PACK_BUFFER,ae.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),R.readPixels(N,W,X,U,pe.convert(Fe),pe.convert(Pe),0);const lt=D!==null?xe.get(D).__webglFramebuffer:null;Ae.bindFramebuffer(R.FRAMEBUFFER,lt);const xt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await op(R,xt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ae),R.deleteBuffer(je),R.deleteSync(xt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,W=0){const X=Math.pow(2,-W),U=Math.floor(y.image.width*X),ae=Math.floor(y.image.height*X),ve=N!==null?N.x:0,we=N!==null?N.y:0;Ve.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,ve,we,U,ae),Ae.unbindTexture()};const AE=R.createFramebuffer(),CE=R.createFramebuffer();this.copyTextureToTexture=function(y,N,W=null,X=null,U=0,ae=null){ae===null&&(U!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=U,U=0):ae=0);let ve,we,Ee,Ne,Fe,Pe,je,lt,xt;const ut=y.isCompressedTexture?y.mipmaps[ae]:y.image;if(W!==null)ve=W.max.x-W.min.x,we=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,Fe=W.min.y,Pe=W.isBox3?W.min.z:0;else{const cn=Math.pow(2,-U);ve=Math.floor(ut.width*cn),we=Math.floor(ut.height*cn),y.isDataArrayTexture?Ee=ut.depth:y.isData3DTexture?Ee=Math.floor(ut.depth*cn):Ee=1,Ne=0,Fe=0,Pe=0}X!==null?(je=X.x,lt=X.y,xt=X.z):(je=0,lt=0,xt=0);const ct=pe.convert(N.format),De=pe.convert(N.type);let vt;N.isData3DTexture?(Ve.setTexture3D(N,0),vt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ve.setTexture2DArray(N,0),vt=R.TEXTURE_2D_ARRAY):(Ve.setTexture2D(N,0),vt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),nn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),as=R.getParameter(R.UNPACK_SKIP_PIXELS),sn=R.getParameter(R.UNPACK_SKIP_ROWS),Js=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ne),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pe);const _t=y.isDataArrayTexture||y.isData3DTexture,ln=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const cn=xe.get(y),Gt=xe.get(N),Yt=xe.get(cn.__renderTarget),Za=xe.get(Gt.__renderTarget);Ae.bindFramebuffer(R.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,Za.__webglFramebuffer);for(let Ai=0;Ai<Ee;Ai++)_t&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.get(y).__webglTexture,U,Pe+Ai),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.get(N).__webglTexture,ae,xt+Ai)),R.blitFramebuffer(Ne,Fe,ve,we,je,lt,ve,we,R.DEPTH_BUFFER_BIT,R.NEAREST);Ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||xe.has(y)){const cn=xe.get(y),Gt=xe.get(N);Ae.bindFramebuffer(R.READ_FRAMEBUFFER,AE),Ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,CE);for(let Yt=0;Yt<Ee;Yt++)_t?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,cn.__webglTexture,U,Pe+Yt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,cn.__webglTexture,U),ln?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gt.__webglTexture,ae,xt+Yt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Gt.__webglTexture,ae),U!==0?R.blitFramebuffer(Ne,Fe,ve,we,je,lt,ve,we,R.COLOR_BUFFER_BIT,R.NEAREST):ln?R.copyTexSubImage3D(vt,ae,je,lt,xt+Yt,Ne,Fe,ve,we):R.copyTexSubImage2D(vt,ae,je,lt,Ne,Fe,ve,we);Ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ln?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(vt,ae,je,lt,xt,ve,we,Ee,ct,De,ut.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(vt,ae,je,lt,xt,ve,we,Ee,ct,ut.data):R.texSubImage3D(vt,ae,je,lt,xt,ve,we,Ee,ct,De,ut):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ae,je,lt,ve,we,ct,De,ut.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ae,je,lt,ut.width,ut.height,ct,ut.data):R.texSubImage2D(R.TEXTURE_2D,ae,je,lt,ve,we,ct,De,ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,as),R.pixelStorei(R.UNPACK_SKIP_ROWS,sn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Js),ae===0&&N.generateMipmaps&&R.generateMipmap(vt),Ae.unbindTexture()},this.copyTextureToTexture3D=function(y,N,W=null,X=null,U=0){return Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,W,X,U)},this.initRenderTarget=function(y){xe.get(y).__webglFramebuffer===void 0&&Ve.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ve.setTextureCube(y,0):y.isData3DTexture?Ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ve.setTexture2DArray(y,0):Ve.setTexture2D(y,0),Ae.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,Ae.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.14.1
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Z_=Object.defineProperty,jo=(n,e)=>{for(var t in e)Z_(n,t,{get:e[t],enumerable:!0})},Ji={};jo(Ji,{ACTIONS:()=>vc,ANIMATION_MIN_DURATION:()=>Zo,CAPTURE_EVENTS_CLASS:()=>Es,CTRLZOOM_TIMEOUT:()=>gc,DBLCLICK_DELAY:()=>fc,EASINGS:()=>Cr,ICONS:()=>mn,IDS:()=>Dt,KEY_CODES:()=>Rt,LONGTOUCH_DELAY:()=>pc,MOVE_THRESHOLD:()=>uc,SPHERE_RADIUS:()=>yi,TWOFINGERSOVERLAY_DELAY:()=>mc,VIEWER_DATA:()=>ei});var K_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,J_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',Q_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,e0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,t0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,n0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,i0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,s0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,r0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Zo=500,uc=4,fc=300,pc=500,mc=100,gc=2e3,yi=10,ei="photoSphereViewer",Es="psv--capture-event",vc=(n=>(n.ROTATE_UP="ROTATE_UP",n.ROTATE_DOWN="ROTATE_DOWN",n.ROTATE_RIGHT="ROTATE_RIGHT",n.ROTATE_LEFT="ROTATE_LEFT",n.ZOOM_IN="ZOOM_IN",n.ZOOM_OUT="ZOOM_OUT",n))(vc||{}),Dt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Rt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},mn={arrow:K_,close:J_,download:Q_,fullscreenIn:e0,fullscreenOut:t0,info:n0,menu:i0,zoomIn:s0,zoomOut:r0},Cr={linear:n=>n,inQuad:n=>n*n,outQuad:n=>n*(2-n),inOutQuad:n=>n<.5?2*n*n:-1+(4-2*n)*n,inCubic:n=>n*n*n,outCubic:n=>--n*n*n+1,inOutCubic:n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,inQuart:n=>n*n*n*n,outQuart:n=>1- --n*n*n*n,inOutQuart:n=>n<.5?8*n*n*n*n:1-8*--n*n*n*n,inQuint:n=>n*n*n*n*n,outQuint:n=>1+--n*n*n*n*n,inOutQuint:n=>n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n,inSine:n=>1-Math.cos(n*(Math.PI/2)),outSine:n=>Math.sin(n*(Math.PI/2)),inOutSine:n=>.5-.5*Math.cos(Math.PI*n),inExpo:n=>Math.pow(2,10*(n-1)),outExpo:n=>1-Math.pow(2,-10*n),inOutExpo:n=>(n=n*2-1)<0?.5*Math.pow(2,10*n):1-.5*Math.pow(2,-10*n),inCirc:n=>1-Math.sqrt(1-n*n),outCirc:n=>Math.sqrt(1-(n-1)*(n-1)),inOutCirc:n=>(n*=2)<1?.5-.5*Math.sqrt(1-n*n):.5+.5*Math.sqrt(1-(n-=2)*n)},ge={};jo(ge,{Animation:()=>Or,Dynamic:()=>Ms,MultiDynamic:()=>Gc,PressHandler:()=>kr,Slider:()=>Xc,SliderDirection:()=>Wc,addClasses:()=>Ko,angle:()=>xc,applyEulerInverse:()=>aa,checkClosedShadowDom:()=>Hc,checkStylesheet:()=>zc,checkVersion:()=>la,cleanCssPosition:()=>Oc,clone:()=>Dr,createTexture:()=>oa,cssPositionIsOrdered:()=>sa,dasherize:()=>h0,deepEqual:()=>Dc,deepmerge:()=>Pc,distance:()=>_c,exitFullscreen:()=>Cc,firstNonNull:()=>Mn,getAbortError:()=>na,getAngle:()=>Ec,getClosest:()=>Mc,getConfigParser:()=>Fr,getElement:()=>Sc,getEventTarget:()=>Pr,getMatchingTarget:()=>wc,getPosition:()=>bc,getShortestArc:()=>yc,getStyleProperty:()=>Sn,getTouchData:()=>Jo,getXMPValue:()=>en,greatArcDistance:()=>a0,hasParent:()=>c0,invertResolvableBoolean:()=>Ir,isAbortError:()=>Nc,isEmpty:()=>Lc,isExtendedPosition:()=>ia,isFullscreenEnabled:()=>Tc,isNil:()=>Pt,isPlainObject:()=>ea,keyPressMatch:()=>Qo,logWarn:()=>It,mergePanoData:()=>Vc,parseAngle:()=>wn,parsePoint:()=>d0,parseSpeed:()=>kc,removeClasses:()=>l0,requestFullscreen:()=>Ac,resolveBoolean:()=>ta,speedToDuration:()=>ra,sum:()=>o0,throttle:()=>Rc,toggleClass:()=>Rr,wrap:()=>Ss});function Ss(n,e){let t=n%e;return t<0&&(t+=e),t}function o0(n){return n.reduce((e,t)=>e+t,0)}function _c(n,e){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function xc(n,e){return Math.atan2(e.y-n.y,e.x-n.x)}function yc(n,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-n+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function Ec(n,e){return Math.acos(Math.cos(n.pitch)*Math.cos(e.pitch)*Math.cos(n.yaw-e.yaw)+Math.sin(n.pitch)*Math.sin(e.pitch))}function a0([n,e],[t,i]){n-t>Math.PI?n-=2*Math.PI:n-t<-Math.PI&&(n+=2*Math.PI);const s=(t-n)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function Sc(n){return typeof n=="string"?n.match(/^[a-z]/i)?document.getElementById(n):document.querySelector(n):n}function Rr(n,e,t){t===void 0?n.classList.toggle(e):t?n.classList.add(e):t||n.classList.remove(e)}function Ko(n,e){n.classList.add(...e.split(" ").filter(t=>!!t))}function l0(n,e){n.classList.remove(...e.split(" ").filter(t=>!!t))}function c0(n,e){let t=n;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function Mc(n,e){if(!n?.matches)return null;let t=n;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function Pr(n){return n?.composedPath()[0]||null}function wc(n,e){return n?n.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function bc(n){let e=0,t=0,i=n;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,t+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function Sn(n,e){return window.getComputedStyle(n).getPropertyValue(e)}function Jo(n){if(n.touches.length<2)return null;const e={x:n.touches[0].clientX,y:n.touches[0].clientY},t={x:n.touches[1].clientX,y:n.touches[1].clientY};return{distance:_c(e,t),angle:xc(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var Lr;function Tc(n,e=!1){return e?n===Lr:document.fullscreenElement===n}function Ac(n,e=!1){e?(Lr=n,n.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):n.requestFullscreen()}function Cc(n=!1){n?(Lr.classList.remove("psv-fullscreen-emulation"),Lr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Qo(n,e){let t,i=!1,s=!1,r=!1,o=!1;return e==="+"?t=e:e.split("+").forEach(a=>{switch(a){case"Shift":i=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":o=!0;break;case"Space":t=" ";break;case"Plus":t="+";break;case"Minus":t="-";break;default:t=a;break}}),i===n.shiftKey&&s===n.ctrlKey&&r===n.altKey&&o===n.metaKey&&t===n.key}function h0(n){return n.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function Rc(n,e){let t=!1;return function(...i){t||(t=!0,setTimeout(()=>{n.apply(this,i),t=!1},e))}}function ea(n){if(typeof n!="object"||n===null||Object.prototype.toString.call(n)!=="[object Object]")return!1;if(Object.getPrototypeOf(n)===null)return!0;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e}function Pc(n,e){const t=e;return(function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=i(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{o!=="__proto__"&&(typeof r[o]!="object"||!r[o]||!ea(r[o])?s[o]=r[o]:r[o]!==t&&(s[o]?i(s[o],r[o]):s[o]=i(null,r[o])))})):s=r,s})(n,e)}function Dr(n){return Pc(null,n)}function Lc(n){return!n||Object.keys(n).length===0&&n.constructor===Object}function Pt(n){return n==null}function Mn(...n){for(const e of n)if(!Pt(e))return e;return null}function Dc(n,e){if(n===e)return!0;if(Ic(n)&&Ic(e)){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t of Object.keys(n))if(!Dc(n[t],e[t]))return!1;return!0}else return!1}function Ic(n){return typeof n=="object"&&n!==null}var fe=class Gu extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,Gu)}};function ta(n,e){ea(n)?(e(n.initial,!0),n.promise.then(t=>e(t,!1))):e(n,!0)}function Ir(n){return{initial:!n.initial,promise:n.promise.then(e=>!e)}}function na(){const n=new Error("Loading was aborted.");return n.name="AbortError",n}function Nc(n){return n?.name==="AbortError"}function It(n){console.warn(`PhotoSphereViewer: ${n}`)}function ia(n){return!n||Array.isArray(n)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>n[e]!==void 0&&n[t]!==void 0)}function en(n,e,t=!0){let i=n.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=n.match("GPano:"+e+'="(.*?)"'),i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var Uc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nr=["left","center","right"],Ur=["top","center","bottom"],Fc=[...Nr,...Ur],on="center";function d0(n){if(!n)return{x:.5,y:.5};if(typeof n=="object")return n;let e=n.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Uc[e[0]]?e=[e[0],on]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Uc[s]||s),t||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function Oc(n,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return n?(typeof n=="string"&&(n=n.split(" ")),n.length===1&&(n[0]===on?n=[on,on]:Nr.indexOf(n[0])!==-1?n=[on,n[0]]:Ur.indexOf(n[0])!==-1&&(n=[n[0],on])),n.length!==2||Fc.indexOf(n[0])===-1||Fc.indexOf(n[1])===-1?(It(`Unparsable position ${n}`),null):!e&&n[0]===on&&n[1]===on?(It("Invalid position center center"),null):(t&&!sa(n)&&(n=[n[1],n[0]]),n[1]===on&&Nr.indexOf(n[0])!==-1&&(n=[on,n[0]]),n[0]===on&&Ur.indexOf(n[1])!==-1&&(n=[n[1],on]),n)):null}function sa(n){return Ur.indexOf(n[0])!==-1&&Nr.indexOf(n[1])!==-1}function kc(n){let e;if(typeof n=="string"){const t=n.toString().trim();let i=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=$e.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new fe(`Unknown speed unit "${s}"`)}}else e=n;return e}function ra(n,e){if(typeof n!="number"){const t=kc(n);return e/Math.abs(t)*1e3}else return Math.abs(n)}function wn(n,e=!1,t=e){let i;if(typeof n=="string"){const s=n.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new fe(`Unknown angle "${n}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":i=$e.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new fe(`Unknown angle unit "${o}"`)}else i=r}else if(typeof n=="number"&&!isNaN(n))i=n;else throw new fe(`Unknown angle "${n}"`);return i=Ss(e?i+Math.PI:i,Math.PI*2),e?$e.clamp(i-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):i}function oa(n,e=!1){const t=new At(n);return t.needsUpdate=!0,t.minFilter=e?1008:1006,t.generateMipmaps=e,t.anisotropy=e?2:1,t}var Bc=new Xn;function aa(n,e){Bc.setFromEuler(e).invert(),n.applyQuaternion(Bc)}function Fr(n,e){const t=function(i){const s=Dr({...n,...i}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:n[o]});else if(!(o in n)){It(`Unknown option ${o}`);continue}r[o]=a}return r};return t.defaults=n,t.parsers=e||{},t}function zc(n,e){Sn(n,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function la(n,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${n} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function Hc(n){do{if(n instanceof ShadowRoot&&n.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}n=n.parentNode}while(n)}function Vc(n,e,t,i){const s={isEquirectangular:!0,fullWidth:Mn(t?.fullWidth,i?.fullWidth),fullHeight:Mn(t?.fullHeight,i?.fullHeight),croppedWidth:Mn(t?.croppedWidth,i?.croppedWidth,n),croppedHeight:Mn(t?.croppedHeight,i?.croppedHeight,e),croppedX:Mn(t?.croppedX,i?.croppedX),croppedY:Mn(t?.croppedY,i?.croppedY),poseHeading:Mn(t?.poseHeading,i?.poseHeading,0),posePitch:Mn(t?.posePitch,i?.posePitch,0),poseRoll:Mn(t?.poseRoll,i?.poseRoll,0),initialHeading:i?.initialHeading,initialPitch:i?.initialPitch,initialFov:i?.initialFov};if(s.croppedWidth!==n){const r=n/s.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(o=>{s[o]&&(s[o]=Math.round(s[o]*r))})}return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(s.croppedWidth,s.croppedHeight*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-n)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(It("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(It("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(It("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(It("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(It("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Or=class{constructor(e){this.easing=Cr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=e,e?(e.easing&&(this.easing=typeof e.easing=="function"?e.easing:Cr[e.easing]||Cr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(t=>this.__run(t))},e.delay||0)):this.resolved=!0}__run(e){if(this.cancelled)return;this.start||(this.start=e);const t=(e-this.start)/this.options.duration,i={};if(t<1){for(const[s,r]of Object.entries(this.options.properties))if(r){const o=r.start+(r.end-r.start)*this.easing(t);i[s]=o}this.options.onTick(i,t),this.animationFrame=window.requestAnimationFrame(s=>this.__run(s))}else{for(const[s,r]of Object.entries(this.options.properties))r&&(i[s]=r.end);this.options.onTick(i,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(e){e?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(t=>t(e)),this.callbacks.length=0}then(e){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(e):new Promise(t=>{this.callbacks.push(t)}).then(e)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Ms=class{constructor(n,e){if(this.fn=n,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new fe("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(n){this.__current=n}setSpeed(n){this.speed=n}goto(n,e=1){this.mode=2,this.target=this.wrap?Ss(n,this.max):$e.clamp(n,this.min,this.max),this.speedMult=e}step(n,e=1){e===0?this.setValue(this.current+n):(this.mode!==2&&(this.target=this.current),this.goto(this.target+n,e))}roll(n=!1,e=1){this.mode=1,this.target=n?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(n){return this.target=this.wrap?Ss(n,this.max):$e.clamp(n,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(n){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+n/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-n/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*n/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*n/1e3)),t!==null&&(t=this.wrap?Ss(t,this.max):$e.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},Gc=class{constructor(n,e){this.fn=n,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((n,[e,t])=>(n[e]=t.current,n),{})}setSpeed(n){for(const e of Object.values(this.dynamics))e.setSpeed(n)}goto(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].goto(i,e)}step(n,e=1){if(e===0)this.setValue(Object.keys(n).reduce((t,i)=>(t[i]=n[i]+this.dynamics[i].current,t),{}));else for(const[t,i]of Object.entries(n))this.dynamics[t].step(i,e)}roll(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].roll(i,e)}stop(){for(const n of Object.values(this.dynamics))n.stop()}setValue(n){let e=!1;for(const[t,i]of Object.entries(n))e=this.dynamics[t].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(n){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(n)||e;return e&&this.fn&&this.fn(this.current),e}},kr=class{constructor(n=200){this.delay=n,this.time=0,this.delay=n}get pending(){return this.time!==0}down(n){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=n}up(n){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{n(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(n(this.data),this.time=0,this.data=void 0)}},Wc=(n=>(n.VERTICAL="VERTICAL",n.HORIZONTAL="HORIZONTAL",n))(Wc||{}),Xc=class{constructor(n,e,t){this.container=n,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(n){switch(n.type){case"click":n.stopPropagation();break;case"mousedown":this.__onMouseDown(n);break;case"mouseenter":this.__onMouseEnter(n);break;case"mouseleave":this.__onMouseLeave(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break}}__onMouseDown(n){this.mousedown=!0,this.__update(n.clientX,n.clientY,!0)}__onMouseEnter(n){this.mouseover=!0,this.__update(n.clientX,n.clientY,!0)}__onTouchStart(n){this.mouseover=!0,this.mousedown=!0;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(n){(this.mousedown||this.mouseover)&&(n.stopPropagation(),this.__update(n.clientX,n.clientY,!0))}__onTouchMove(n){if(this.mousedown||this.mouseover){n.stopPropagation();const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(n){this.mousedown&&(this.mousedown=!1,this.__update(n.clientX,n.clientY,!1))}__onMouseLeave(n){this.mouseover&&(this.mouseover=!1,this.__update(n.clientX,n.clientY,!0))}__onTouchEnd(n){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(n,e,t){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=$e.clamp((i.bottom-e)/i.height,0,1):s=$e.clamp((n-i.left)/i.width,0,1),this.listener({value:s,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:n,clientY:e}})}},_e={};jo(_e,{BeforeAnimateEvent:()=>ca,BeforeRenderEvent:()=>bs,BeforeRotateEvent:()=>Zc,ClickEvent:()=>Jc,ConfigChangedEvent:()=>Wt,DoubleClickEvent:()=>th,FullscreenEvent:()=>Ts,HideNotificationEvent:()=>As,HideOverlayEvent:()=>rh,HidePanelEvent:()=>ti,HideTooltipEvent:()=>lh,KeypressEvent:()=>ni,LoadProgressEvent:()=>dh,ObjectEnterEvent:()=>Nh,ObjectEvent:()=>Br,ObjectHoverEvent:()=>Oh,ObjectLeaveEvent:()=>ha,PanoramaErrorEvent:()=>gh,PanoramaLoadEvent:()=>fh,PanoramaLoadedEvent:()=>Qi,PositionUpdatedEvent:()=>Cs,ReadyEvent:()=>Ps,RenderEvent:()=>Mh,RollUpdatedEvent:()=>Rs,ShowNotificationEvent:()=>Ls,ShowOverlayEvent:()=>Th,ShowPanelEvent:()=>ii,ShowTooltipEvent:()=>Rh,SizeUpdatedEvent:()=>Ds,StopAllEvent:()=>Is,TransitionDoneEvent:()=>_h,ViewerEvent:()=>tt,ZoomUpdatedEvent:()=>kn});var ws=class extends Event{constructor(n,e=!1){super(n,{cancelable:e})}},$c=class extends EventTarget{dispatchEvent(n){return super.dispatchEvent(n)}addEventListener(n,e,t){super.addEventListener(n,e,t)}removeEventListener(n,e,t){super.removeEventListener(n,e,t)}},tt=class extends ws{},qc=class Wu extends tt{constructor(e,t){super(Wu.type,!0),this.position=e,this.zoomLevel=t}};qc.type="before-animate";var ca=qc,Yc=class Xu extends tt{constructor(e,t){super(Xu.type),this.timestamp=e,this.elapsed=t}};Yc.type="before-render";var bs=Yc,jc=class $u extends tt{constructor(e){super($u.type,!0),this.position=e}};jc.type="before-rotate";var Zc=jc,Kc=class qu extends tt{constructor(e){super(qu.type),this.data=e}};Kc.type="click";var Jc=Kc,Qc=class Yu extends tt{constructor(e){super(Yu.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};Qc.type="config-changed";var Wt=Qc,eh=class ju extends tt{constructor(e){super(ju.type),this.data=e}};eh.type="dblclick";var th=eh,nh=class Zu extends tt{constructor(e){super(Zu.type),this.fullscreenEnabled=e}};nh.type="fullscreen";var Ts=nh,ih=class Ku extends tt{constructor(e){super(Ku.type),this.notificationId=e}};ih.type="hide-notification";var As=ih,sh=class Ju extends tt{constructor(e){super(Ju.type),this.overlayId=e}};sh.type="hide-overlay";var rh=sh,oh=class Qu extends tt{constructor(e){super(Qu.type),this.panelId=e}};oh.type="hide-panel";var ti=oh,ah=class ef extends tt{constructor(e){super(ef.type),this.tooltipData=e}};ah.type="hide-tooltip";var lh=ah,ch=class tf extends tt{constructor(e,t){super(tf.type,!0),this.key=e,this.originalEvent=t}matches(e){return Qo(this.originalEvent,e)}};ch.type="key-press";var ni=ch,hh=class nf extends tt{constructor(e){super(nf.type),this.progress=e}};hh.type="load-progress";var dh=hh,uh=class sf extends tt{constructor(e){super(sf.type),this.panorama=e}};uh.type="panorama-load";var fh=uh,ph=class rf extends tt{constructor(e){super(rf.type),this.data=e}};ph.type="panorama-loaded";var Qi=ph,mh=class of extends tt{constructor(e,t){super(of.type),this.panorama=e,this.error=t}};mh.type="panorama-error";var gh=mh,vh=class af extends tt{constructor(e){super(af.type),this.completed=e}};vh.type="transition-done";var _h=vh,xh=class lf extends tt{constructor(e){super(lf.type),this.position=e}};xh.type="position-updated";var Cs=xh,yh=class cf extends tt{constructor(e){super(cf.type),this.roll=e}};yh.type="roll-updated";var Rs=yh,Eh=class hf extends tt{constructor(){super(hf.type)}};Eh.type="ready";var Ps=Eh,Sh=class df extends tt{constructor(){super(df.type)}};Sh.type="render";var Mh=Sh,wh=class uf extends tt{constructor(e){super(uf.type),this.notificationId=e}};wh.type="show-notification";var Ls=wh,bh=class ff extends tt{constructor(e){super(ff.type),this.overlayId=e}};bh.type="show-overlay";var Th=bh,Ah=class pf extends tt{constructor(e){super(pf.type),this.panelId=e}};Ah.type="show-panel";var ii=Ah,Ch=class mf extends tt{constructor(e,t){super(mf.type),this.tooltip=e,this.tooltipData=t}};Ch.type="show-tooltip";var Rh=Ch,Ph=class gf extends tt{constructor(e){super(gf.type),this.size=e}};Ph.type="size-updated";var Ds=Ph,Lh=class vf extends tt{constructor(){super(vf.type)}};Lh.type="stop-all";var Is=Lh,Dh=class _f extends tt{constructor(e){super(_f.type),this.zoomLevel=e}};Dh.type="zoom-updated";var kn=Dh,Br=class extends tt{constructor(n,e,t,i,s){super(n),this.originalEvent=e,this.object=t,this.viewerPoint=i,this.userDataKey=s}},Ih=class xf extends Br{constructor(e,t,i,s){super(xf.type,e,t,i,s)}};Ih.type="enter-object";var Nh=Ih,Uh=class yf extends Br{constructor(e,t,i,s){super(yf.type,e,t,i,s)}};Uh.type="leave-object";var ha=Uh,Fh=class Ef extends Br{constructor(e,t,i,s){super(Ef.type,e,t,i,s)}};Fh.type="hover-object";var Oh=Fh,zr=class{constructor(n){this.viewer=n}init(){}destroy(){}supportsTransition(n){return!1}supportsPreload(n){return!1}textureCoordsToSphericalCoords(n,e){throw new fe("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(n,e){throw new fe("Current adapter does not support texture coordinates.")}};zr.supportsDownload=!1;function kh(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof zr)return la(e.id,e.VERSION,"5.14.1"),e}return null}var Ns=`${ei}_touchSupport`,Ht={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=p0(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const n=u0();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!n,this.maxTextureWidth=n?n.getParameter(n.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=f0(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Ht.isWebGLSupported)throw new fe("WebGL 2 is not supported.");if(Ht.maxTextureWidth===0)throw new fe("Unable to detect system capabilities")}};function u0(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function f0(){let n="ontouchstart"in window||navigator.maxTouchPoints>0;Ns in localStorage&&(n=localStorage[Ns]==="true");const e=new Promise(t=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{i(),localStorage[Ns]=!1,t(!1)},r=()=>{i(),localStorage[Ns]=!0,t(!0)},o=()=>{i(),localStorage[Ns]=n,t(n)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:n,promise:e}}function p0(n){let e=n,t=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!t;){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e,r.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}r.width=0,r.height=0,t||(e/=2)}if(t)return e;throw new fe("Unable to detect system capabilities")}var m0=Fr({resolution:64,useXmpData:!0,blur:!1},{resolution:n=>{if(!n||!$e.isPowerOfTwo(n))throw new fe("EquirectangularAdapter resolution must be power of two.");return n}}),Hr=class Sf extends zr{static withConfig(e){return[Sf,e]}constructor(e,t){super(e),this.config=m0(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(Pt(e.textureX)||Pt(e.textureY))throw new fe("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,s=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,t){const i=e.yaw/Math.PI/2*t.fullWidth,s=e.pitch/Math.PI*t.fullHeight;let r=Math.round(e.yaw<Math.PI?i+t.fullWidth/2:i-t.fullWidth/2)-t.croppedX,o=Math.round(t.fullHeight/2-s)-t.croppedY;return(r<0||r>t.croppedWidth||o<0||o>t.croppedHeight)&&(r=o=void 0),{textureX:r,textureY:o}}async loadTexture(e,t=!0,i,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new fe("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:i}:r={data:i,...e};const o=await this.viewer.textureLoader.loadFile(r.path,t?d=>this.viewer.textureLoader.dispatchProgress(d):null,r.path),a=s?await this.loadXMP(o):null,l=await this.viewer.textureLoader.blobToImage(o);typeof r.data=="function"&&(r.data=r.data(l,a));const c=Vc(l.width,l.height,r.data,a),u=this.createEquirectangularTexture(l);return{panorama:e,texture:u,panoData:c,cacheKey:r.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),i=t.indexOf("<x:xmpmeta");if(i===-1)return null;const s=t.indexOf("</x:xmpmeta>",i);if(s===-1)return null;const r=t.substring(i,s);return r.includes("GPano:")?{fullWidth:en(r,"FullPanoWidthPixels"),fullHeight:en(r,"FullPanoHeightPixels"),croppedWidth:en(r,"CroppedAreaImageWidthPixels"),croppedHeight:en(r,"CroppedAreaImageHeightPixels"),croppedX:en(r,"CroppedAreaLeftPixels"),croppedY:en(r,"CroppedAreaTopPixels"),poseHeading:en(r,"PoseHeadingDegrees",!1),posePitch:en(r,"PosePitchDegrees",!1),poseRoll:en(r,"PoseRollDegrees",!1),initialHeading:en(r,"InitialViewHeadingDegrees",!1),initialPitch:en(r,"InitialViewPitchDegrees",!1),initialFov:en(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=i,s.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>Ht.maxTextureWidth){const t=Math.min(1,Ht.maxCanvasWidth/e.width),i=new OffscreenCanvas(Math.floor(e.width*t),Math.floor(e.height*t)),s=i.getContext("2d");return this.config.blur&&(s.filter=`blur(${i.width/2048}px)`),s.drawImage(e,0,0,i.width,i.height),oa(i)}return oa(e)}createMesh(e){const t=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,o=new mi(yi,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+t,i,s,r).scale(-1,1,1),a=new xn({depthTest:!1,depthWrite:!1});return new Ft(o,a)}setTexture(e,t){e.material.map=t.texture}setTextureOpacity(e,t){e.material.opacity=t,e.material.transparent=t<1}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};Hr.id="equirectangular",Hr.VERSION="5.14.1",Hr.supportsDownload=!0;var da=Hr,Bh=class Mf extends da{static withConfig(e){return[Mf,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1})}async loadTexture(e,t){const i=await super.loadTexture(e,t,null,!1);return i.panoData=null,i}createMesh(){const e=new mi(yi,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),i=e.getAttribute("normal");for(let r=0;r<t.count;r++)for(let o=0;o<3;o++){const a=r*3+o,l=i.getX(a),c=i.getY(a),u=i.getZ(a),d=.947;if(r<t.count/6){const p=l===0&&u===0?1:Math.acos(c)/Math.sqrt(l*l+u*u)*(2/Math.PI);t.setXY(a,l*(d/4)*p+1/4,u*(d/2)*p+1/2)}else{const p=l===0&&u===0?1:Math.acos(-c)/Math.sqrt(l*l+u*u)*(2/Math.PI);t.setXY(a,-l*(d/4)*p+3/4,u*(d/2)*p+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new xn({depthTest:!1,depthWrite:!1});return new Ft(e,s)}};Bh.id="dual-fisheye",Bh.VERSION="5.14.1";var si=class wf{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof wf?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},g0=Fr({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Vt=class extends si{constructor(n,e){super(n,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=g0(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===Rt.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(n=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),n&&this.viewer.navbar.autoSize())}hide(n=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",n&&this.viewer.navbar.autoSize())}checkSupported(){ta(this.isSupported(),(n,e)=>{this.state&&(this.state.supported=n,e?n||this.hide():this.toggle(n))})}autoSize(){}isSupported(){return!0}toggleActive(n=!this.state.active){n!==this.state.active&&(this.state.active=n,Rr(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(n){this.container.innerHTML=n,Ko(this.container.querySelector("svg"),"psv-button-svg")}},v0=class extends Vt{constructor(n,e){super(n,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},Us=class extends Vt{constructor(n){super(n,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:mn.info}),this.mode=0,this.viewer.addEventListener(As.type,this),this.viewer.addEventListener(Ls.type,this),this.viewer.addEventListener(ti.type,this),this.viewer.addEventListener(ii.type,this),this.viewer.addEventListener(Wt.type,this)}destroy(){this.viewer.removeEventListener(As.type,this),this.viewer.removeEventListener(Ls.type,this),this.viewer.removeEventListener(ti.type,this),this.viewer.removeEventListener(ii.type,this),this.viewer.removeEventListener(Wt.type,this),super.destroy()}handleEvent(n){if(n instanceof Wt){n.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;n instanceof As?e=this.mode===1:n instanceof Ls?e=this.mode===1&&n.notificationId!==Dt.DESCRIPTION:n instanceof ti?e=this.mode===2:n instanceof ii&&(e=this.mode===2&&n.panelId!==Dt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(n){super.hide(n),this.mode&&this.__close()}autoSize(n=!1){if(n){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),i=!!this.viewer.config.description;t||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Dt.DESCRIPTION);break;case 2:this.viewer.panel.hide(Dt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Dt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Dt.DESCRIPTION,content:this.viewer.config.caption}))}};Us.id="description";var zh=class extends Vt{constructor(n){super(n,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:mn.download}),this.viewer.addEventListener(Wt.type,this),this.viewer.addEventListener(Qi.type,this)}destroy(){this.viewer.removeEventListener(Wt.type,this),this.viewer.removeEventListener(Qi.type,this),super.destroy()}handleEvent(n){n instanceof Wt?(n.containsOptions("downloadUrl")&&this.checkSupported(),n.containsOptions("downloadUrl","downloadName")&&this.__update()):n instanceof Qi&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const n=this.container;n.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,n.target="_blank",n.href.startsWith("data:")&&!this.viewer.config.downloadName?n.download="panorama."+n.href.substring(0,n.href.indexOf(";")).split("/").pop():n.download=this.viewer.config.downloadName||n.href.split("/").pop()}};zh.id="download";var Hh=class extends Vt{constructor(n){super(n,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:mn.fullscreenIn,iconActive:mn.fullscreenOut}),this.viewer.addEventListener(Ts.type,this)}destroy(){this.viewer.removeEventListener(Ts.type,this),super.destroy()}handleEvent(n){n instanceof Ts&&this.toggleActive(n.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};Hh.id="fullscreen";var _0="psvButton",x0=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${mn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${n.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Vr=class extends Vt{constructor(n){super(n,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:mn.menu}),this.viewer.addEventListener(ii.type,this),this.viewer.addEventListener(ti.type,this),super.hide()}destroy(){this.viewer.removeEventListener(ii.type,this),this.viewer.removeEventListener(ti.type,this),super.destroy()}handleEvent(n){n instanceof ii?this.toggleActive(n.panelId===Dt.MENU):n instanceof ti&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(n){super.hide(n),this.__hideMenu()}show(n){super.show(n),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Dt.MENU,content:x0(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:n=>{const e=n?Mc(n,".psv-panel-menu-item"):void 0,t=e?e.dataset[_0]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Dt.MENU)}};Vr.id="menu";function y0(n){let e=0;switch(n){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return mn.arrow.replace("rotate(0",`rotate(${e}`)}var Fs=class extends Vt{constructor(n,e){super(n,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:y0(e)}),this.direction=e,this.handler=new kr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Rt.Enter&&this.__onMouseDown();break;case"keyup":n.key===Rt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Ir(Ht.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const n={};switch(this.direction){case 0:n.pitch=!1;break;case 1:n.pitch=!0;break;case 3:n.yaw=!1;break;default:n.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(n),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Fs.groupId="move";var Vh=class extends Fs{constructor(n){super(n,1)}};Vh.id="moveDown";var Gh=class extends Fs{constructor(n){super(n,2)}};Gh.id="moveLeft";var Wh=class extends Fs{constructor(n){super(n,3)}};Wh.id="moveRight";var Xh=class extends Fs{constructor(n){super(n,0)}};Xh.id="moveUp";var ua=class extends Vt{constructor(n,e,t){super(n,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new kr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Rt.Enter&&this.__onMouseDown();break;case"keyup":n.key===Rt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Ir(Ht.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};ua.groupId="zoom";var $h=class extends ua{constructor(n){super(n,mn.zoomIn,0)}};$h.id="zoomIn";var qh=class extends ua{constructor(n){super(n,mn.zoomOut,1)}};qh.id="zoomOut";var fa=class extends Vt{constructor(n){super(n,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Xc(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(Sn(this.container,"max-width"),10),this.viewer.addEventListener(kn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Ps.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(kn.type,this),this.viewer.removeEventListener(Ps.type,this),super.destroy()}handleEvent(n){n instanceof kn?this.__moveZoomValue(n.zoomLevel):n instanceof Ps&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Ir(Ht.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(n){this.zoomValue.style.left=n/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(n){n.mousedown&&this.viewer.zoom(n.value*100)}};fa.id="zoomRange",fa.groupId="zoom";var Yh=class extends $c{constructor(n){super(),this.viewer=n}init(){}destroy(){}},pa=class extends Yh{constructor(n,e){super(n),this.config=this.constructor.configParser(e)}setOption(n,e){this.setOptions({[n]:e})}setOptions(n){const e={...this.config,...n},t=this.constructor,i=t.configParser,s=t.readonlyOptions,r=t.id;for(let[o,a]of Object.entries(n)){if(!(o in i.defaults)){It(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){It(`${r}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};pa.readonlyOptions=[];function ma(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof Yh)return la(e.id,e.VERSION,"5.14.1"),e}return null}var Bn={panorama:null,container:null,adapter:[da,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Rt.ArrowUp]:"ROTATE_UP",[Rt.ArrowDown]:"ROTATE_DOWN",[Rt.ArrowRight]:"ROTATE_RIGHT",[Rt.ArrowLeft]:"ROTATE_LEFT",[Rt.PageUp]:"ZOOM_IN",[Rt.PageDown]:"ZOOM_OUT",[Rt.Plus]:"ZOOM_IN",[Rt.Minus]:"ZOOM_OUT"}},jh={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},ga={container:n=>{if(!n)throw new fe("No value given for container.");return n},adapter:(n,{defValue:e})=>{if(n?Array.isArray(n)?n=[kh(n[0]),n[1]]:n=[kh(n),null]:n=e,!n[0])throw new fe("An undefined value was given for adapter.");if(!n[0].id)throw new fe("Adapter has no id.");return n},defaultYaw:n=>wn(n),defaultPitch:n=>wn(n,!0),defaultZoomLvl:n=>$e.clamp(n,0,100),minFov:(n,{rawConfig:e})=>(e.maxFov<n&&(It("maxFov cannot be lower than minFov"),n=e.maxFov),$e.clamp(n,1,179)),maxFov:(n,{rawConfig:e})=>(n<e.minFov&&(n=e.minFov),$e.clamp(n,1,179)),moveInertia:(n,{defValue:e})=>n===!0?e:n===!1?0:n,lang:n=>({...Bn.lang,...n}),fisheye:n=>n===!0?1:n===!1?0:n,requestHeaders:n=>n&&typeof n=="object"?()=>n:typeof n=="function"?n:null,withCredentials:n=>typeof n=="boolean"?()=>n:typeof n=="function"?n:()=>!1,defaultTransition:(n,{defValue:e})=>n===null||n.speed===0?null:{...e,...n},rendererParameters:(n,{defValue:e})=>({...n,...e}),plugins:n=>n.map((e,t)=>{if(Array.isArray(e)?e=[ma(e[0]),e[1]]:e=[ma(e),null],!e[0])throw new fe(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new fe(`Plugin ${t} has no id.`);return e}),navbar:n=>n===!1?null:n===!0?Dr(Bn.navbar):typeof n=="string"?n.split(/[ ,]/):n},E0=Fr(Bn,ga),es=class extends Vt{constructor(n){super(n,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(n){this.show(),this.contentElt.innerHTML=n??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(Us.id,!1)?.autoSize(!0)}};es.id="caption";var va={},Gr={};function _a(n,e){if(!n.id)throw new fe("Button id is required");if(va[n.id]=n,n.groupId&&(Gr[n.groupId]=Gr[n.groupId]||[]).push(n),e){const t=Bn.navbar;switch(e){case"start":t.unshift(n.id);break;case"end":t.push(n.id);break;default:{const[i,s]=e.split(":"),r=t.indexOf(i);if(!i||!s||r===-1)throw new fe(`Invalid defaultPosition ${e}`);t.splice(r+(s==="right"?1:0),0,n.id)}}}}[qh,fa,$h,Us,es,zh,Hh,Gh,Wh,Xh,Vh].forEach(n=>_a(n));var S0=class extends si{constructor(n){super(n,{className:`psv-navbar ${Es}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(n){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,n.indexOf(es.id)!==-1&&n.indexOf(Us.id)===-1&&n.splice(n.indexOf(es.id),0,Us.id),n.forEach(e=>{typeof e=="object"?new v0(this,e):va[e]?new va[e](this):Gr[e]?Gr[e].forEach(t=>{new t(this)}):It(`Unknown button ${e}`)}),new Vr(this),this.children.forEach(e=>{e instanceof Vt&&e.checkSupported()}),this.autoSize()}setCaption(n){this.children.some(e=>e instanceof es?(e.setCaption(n),!0):!1)}getButton(n,e=!0){const t=this.children.find(i=>i instanceof Vt&&i.id===n);return!t&&e&&It(`button "${n}" not found in the navbar`),t}focusButton(n){this.isVisible()&&(this.getButton(n,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(i=>{i instanceof Vt&&i.autoSize()});const n=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(i=>{i.isVisible()&&i instanceof Vt&&(e+=i.width,i.collapsable&&t.push(i))}),e!==0&&(n<e&&t.length>0?(t.forEach(i=>i.collapse()),this.collapsed=t,this.getButton(Vr.id).show(!1)):n>=e&&this.collapsed.length>0&&(this.collapsed.forEach(i=>i.uncollapse()),this.collapsed=[],this.getButton(Vr.id).hide(!1)),this.getButton(es.id,!1)?.autoSize())}};Qn.enabled=!1;var ts={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){Qn.enabled&&(It("ThreeJS cache should be disabled"),Qn.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(n,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[n]=t,this.items[e].lastAccess=Date.now())},get(n,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[n]},remove(n,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[n],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,n],[,e])=>e.lastAccess-n.lastAccess).forEach(([n,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[n]})}},M0=class extends si{constructor(n){super(n,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=Sn(this.loader,"color"),this.color=Sn(this.canvas,"color"),this.border=parseInt(Sn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(Sn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Wt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Wt.type,this),super.destroy()}handleEvent(n){n instanceof Wt&&n.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(n){this.container.classList.remove("psv-loader--undefined");const e=$e.clamp(n,0,99.999)/100*Math.PI*2,t=this.size/2,i=t,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+t,a=-Math.cos(e)*r+t,l=n>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const n=this.loader.querySelector(".psv-loader-image, .psv-loader-text");n&&this.loader.removeChild(n);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},w0=class extends si{constructor(n){super(n,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new fe("Notification cannot be toggled")}show(n){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof n=="string"&&(n={content:n}),this.state.contentId=n.id||null,this.content.innerHTML=n.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new Ls(this.state.contentId)),n.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),n.timeout))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new As(e))}}},b0=class extends si{constructor(n){super(n,{className:`psv-overlay ${Es}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(ni.type,this),super.hide()}destroy(){this.viewer.removeEventListener(ni.type,this),super.destroy()}handleEvent(n){n.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),n.stopPropagation()):n instanceof ni&&this.isVisible()&&this.state.dismissible&&n.matches(Rt.Escape)&&(this.hide(),n.preventDefault())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new fe("Overlay cannot be toggled")}show(n){typeof n=="string"&&(n={title:n}),this.state.contentId=n.id||null,this.state.dismissible=n.dismissible!==!1,this.image.innerHTML=n.image||"",this.title.innerHTML=n.title||"",this.text.innerHTML=n.text||"",super.show(),this.viewer.dispatchEvent(new Th(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new rh(e))}}},T0=200,xa="psv-panel-content--no-interaction",A0=class extends si{constructor(n){super(n,{className:`psv-panel ${Es}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=mn.close,t.title=n.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(ni.type,this)}destroy(){this.viewer.removeEventListener(ni.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break;case ni.type:this.__onKeyPress(n);break}}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new fe("Panel cannot be toggled")}show(n){typeof n=="string"&&(n={content:n});const e=this.isVisible(n.id);this.state.contentId=n.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),n.id&&this.state.width[n.id]?this.container.style.width=this.state.width[n.id]:n.width?this.container.style.width=n.width:this.container.style.width=null,this.content.innerHTML=n.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Rr(this.content,"psv-panel-content--no-margin",n.noMargin===!0),n.clickHandler&&(this.state.clickHandler=t=>{n.clickHandler(Pr(t))},this.state.keyHandler=t=>{t.key===Rt.Enter&&n.clickHandler(Pr(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new ii(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new ti(e))}}__onMouseDown(n){n.stopPropagation(),this.__startResize(n.clientX,n.clientY)}__onTouchStart(n){if(n.stopPropagation(),n.touches.length===1){const e=n.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(n){this.state.mousedown&&(n.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(xa))}__onTouchEnd(n){this.state.mousedown&&(n.stopPropagation(),n.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(xa)))}__onMouseMove(n){this.state.mousedown&&(n.stopPropagation(),this.__resize(n.clientX,n.clientY))}__onTouchMove(n){if(this.state.mousedown){const e=n.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(n){this.isVisible()&&n.matches(Rt.Escape)&&(this.hide(),n.preventDefault())}__startResize(n,e){this.state.mouseX=n,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(xa)}__resize(n,e){const t=n,i=e,s=Math.max(T0,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=t,this.state.mouseY=i}},C0=class extends si{constructor(n,e){super(n,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(n){n.type==="transitionend"&&this.__onTransitionEnd(n)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new fe("Tooltip cannot be toggled")}show(n){if(this.state.state!==0)throw new fe("Initialized tooltip cannot be re-initialized");n.className&&Ko(this.container,n.className),n.style&&Object.assign(this.container.style,n.style),this.state.state=3,this.update(n.content,n),this.state.data=n.data,this.state.state=1,this.viewer.dispatchEvent(new Rh(this,this.state.data)),this.__waitImages()}update(n,e){this.content.innerHTML=n;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(Sn(this.arrow,"border-top-width"),10),this.state.border=parseInt(Sn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(n){if(this.state.state!==1&&this.state.state!==3)throw new fe("Uninitialized tooltip cannot be moved");n.box=n.box??this.state.config?.box??{width:0,height:0},this.state.config=n;const e=this.container,t=this.arrow,i={posClass:Oc(n.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,n);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const a=sa(i.posClass);s&&(i.posClass[a?0:1]=s),r&&(i.posClass[a?1:0]=r),this.__computeTooltipPosition(i,n)}e.style.top=i.top+"px",e.style.left=i.left+"px",t.style.top=i.arrowTop+"px",t.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new lh(this.state.data));const n=parseFloat(Sn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},n*2)}__onTransitionEnd(n){if(n.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(n,e){const t=this.state.arrow,i=e.top,s=n.height,r=e.left,o=n.width,a=t+this.state.border,l=e.box.width/2+t*2,c=e.box.height/2+t*2;switch(n.posClass.join("-")){case"top-left":n.top=i-c-s,n.left=r+a-o,n.arrowTop=s,n.arrowLeft=o-a-t;break;case"top-center":n.top=i-c-s,n.left=r-o/2,n.arrowTop=s,n.arrowLeft=o/2-t;break;case"top-right":n.top=i-c-s,n.left=r-a,n.arrowTop=s,n.arrowLeft=t;break;case"bottom-left":n.top=i+c,n.left=r+a-o,n.arrowTop=-t*2,n.arrowLeft=o-a-t;break;case"bottom-center":n.top=i+c,n.left=r-o/2,n.arrowTop=-t*2,n.arrowLeft=o/2-t;break;case"bottom-right":n.top=i+c,n.left=r-a,n.arrowTop=-t*2,n.arrowLeft=t;break;case"left-top":n.top=i+a-s,n.left=r-l-o,n.arrowTop=s-a-t,n.arrowLeft=o;break;case"center-left":n.top=i-s/2,n.left=r-l-o,n.arrowTop=s/2-t,n.arrowLeft=o;break;case"left-bottom":n.top=i-a,n.left=r-l-o,n.arrowTop=t,n.arrowLeft=o;break;case"right-top":n.top=i+a-s,n.left=r+l,n.arrowTop=s-a-t,n.arrowLeft=-t*2;break;case"center-right":n.top=i-s/2,n.left=r+l,n.arrowTop=s/2-t,n.arrowLeft=-t*2;break;case"right-bottom":n.top=i-a,n.left=r+l,n.arrowTop=t,n.arrowLeft=-t*2;break}}__waitImages(){const n=this.content.querySelectorAll("img");if(n.length>0){const e=[];n.forEach(t=>{t.complete||e.push(new Promise(i=>{t.onload=i,t.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},R0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Os=class{constructor(n){this.viewer=n,this.config=n.config,this.state=n.state}destroy(){}},gn=new I,Wr=new _n(0,0,0,"ZXY"),P0=class extends Os{constructor(n){super(n)}fovToZoomLevel(n){const e=Math.round((n-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return $e.clamp(e-2*(e-50),0,100)}zoomLevelToFov(n){return this.config.maxFov+n/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(n){return $e.radToDeg(2*Math.atan(Math.tan($e.degToRad(n)/2)*this.state.aspect))}hFovToVFov(n){return $e.radToDeg(2*Math.atan(Math.tan($e.degToRad(n)/2)/this.state.aspect))}getAnimationProperties(n,e,t){const i=!Pt(e),s=!Pt(t),r={};let o=null;if(i){const a=this.viewer.getPosition(),l=yc(a.yaw,e.yaw);r.yaw={start:a.yaw,end:a.yaw+l},r.pitch={start:a.pitch,end:e.pitch},o=ra(n,Ec(a,e))}if(s){const a=this.viewer.getZoomLevel(),l=Math.abs(t-a);r.zoom={start:a,end:t},o===null&&(o=ra(n,Math.PI/4*l/100))}return o===null?typeof n=="number"?o=n:o=Zo:o=Math.max(Zo,o),{duration:o,properties:r}}getTransitionOptions(n){let e;const t=this.config.defaultTransition??Bn.defaultTransition;return n.transition===!1||n.transition===null?e=null:n.transition===!0?e={...t}:typeof n.transition=="object"?e={...t,...n.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(n){if(!this.state.textureData?.panoData)throw new fe("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(n,this.state.textureData.panoData);return!Wr.equals(this.viewer.renderer.panoramaPose)||!Wr.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,gn),gn.applyEuler(this.viewer.renderer.panoramaPose),gn.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(gn)):e}sphericalCoordsToTextureCoords(n){if(!this.state.textureData?.panoData)throw new fe("Current adapter does not support texture coordinates or no texture has been loaded");return(!Wr.equals(this.viewer.renderer.panoramaPose)||!Wr.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(n,gn),aa(gn,this.viewer.renderer.sphereCorrection),aa(gn,this.viewer.renderer.panoramaPose),n=this.vector3ToSphericalCoords(gn)),this.viewer.adapter.sphericalCoordsToTextureCoords(n,this.state.textureData.panoData)}sphericalCoordsToVector3(n,e,t=yi){return e||(e=new I),e.x=t*-Math.cos(n.pitch)*Math.sin(n.yaw),e.y=t*Math.sin(n.pitch),e.z=t*Math.cos(n.pitch)*Math.cos(n.yaw),e}vector3ToSphericalCoords(n){const e=Math.acos(n.y/Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z)),t=Math.atan2(n.x,n.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(n){const e=this.viewer.renderer.getIntersections(n).filter(t=>t.object.userData[ei]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(n){const e=this.viewerCoordsToVector3(n);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(n){const e=n.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(n){return this.sphericalCoordsToVector3(n,gn),this.vector3ToViewerCoords(gn)}isPointVisible(n){let e,t;if(n instanceof I)e=n,t=this.vector3ToViewerCoords(n);else if(ia(n))e=this.sphericalCoordsToVector3(n,gn),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(n){if("yaw"in n||"pitch"in n){if(!("yaw"in n)||!("pitch"in n))throw new fe("Position is missing 'yaw' or 'pitch'");return{yaw:wn(n.yaw),pitch:wn(n.pitch,!0)}}else return this.textureCoordsToSphericalCoords(n)}cleanSphereCorrection(n){return{pan:wn(n?.pan||0),tilt:wn(n?.tilt||0,!0),roll:wn(n?.roll||0,!0,!1)}}cleanPanoramaPose(n){return{pan:$e.degToRad(n?.poseHeading||0),tilt:$e.degToRad(n?.posePitch||0),roll:$e.degToRad(n?.poseRoll||0)}}cleanPanoramaOptions(n,e){return e?.isEquirectangular&&(Pt(n.zoom)&&!Pt(e.initialFov)&&(n={...n,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),Pt(n.position)&&!Pt(e.initialHeading)&&!Pt(e.initialPitch)&&(n={...n,position:{yaw:wn(e.initialHeading),pitch:wn(e.initialPitch,!0)}})),n}},L0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,D0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Xr=class bf{constructor(){this.$=bf.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Xr.IDLE=0,Xr.CLICK=1,Xr.MOVING=2;var Mt=Xr,I0=class extends Os{constructor(n){super(n),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new Mt,this.keyHandler=new kr,this.resizeObserver=new ResizeObserver(Rc(()=>this.viewer.autoSize(),50)),this.moveThreshold=uc*Ht.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(bs.type,this),this.viewer.addEventListener(Is.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(bs.type,this),this.viewer.removeEventListener(Is.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(n){switch(n.type){case"keydown":this.__onKeyDown(n);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchmove":this.__onTouchMove(n);break;case"touchend":this.__onTouchEnd(n);break;case"fullscreenchange":this.__onFullscreenChange();break;case bs.type:this.__applyMoveDelta();break;case Is.type:this.__clearMoveDelta();break}if(!wc(n,"."+Es))switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"wheel":this.__onMouseWheel(n);break}}__onKeyDown(n){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=n.key===Rt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Dt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new ni(n.key,n))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,t]of Object.entries(this.config.keyboardActions))if(Qo(n,e)){if(typeof t=="function")t(this.viewer,n);else{switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(t)}n.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(n=>{n==="ZOOM_IN"||n==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(n){this.step.add(Mt.CLICK),this.data.startMouseX=n.clientX,this.data.startMouseY=n.clientY,this.config.mousemove&&n.preventDefault()}__onMouseUp(n){this.step.is(Mt.CLICK,Mt.MOVING)&&this.__stopMove(n.clientX,n.clientY,n,n.button===2)}__onMouseMove(n){this.config.mousemove&&this.step.is(Mt.CLICK,Mt.MOVING)&&(n.preventDefault(),this.__doMove(n.clientX,n.clientY)),this.__handleObjectsEvents(n)}__onTouchStart(n){n.touches.length===1?(this.step.add(Mt.CLICK),this.data.startMouseX=n.touches[0].clientX,this.data.startMouseY=n.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=n.touches[0];this.__stopMove(e.clientX,e.clientY,n,!0),this.data.longtouchTimeout=null},pc))):n.touches.length===2&&(this.step.set(Mt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(n),n.preventDefault()))}__onTouchEnd(n){if(this.__cancelLongTouch(),this.step.is(Mt.CLICK,Mt.MOVING)){if(n.preventDefault(),this.__cancelTwoFingersOverlay(),n.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(n.touches.length===0){const e=n.changedTouches[0];this.__stopMove(e.clientX,e.clientY,n)}}}__onTouchMove(n){if(this.__cancelLongTouch(),!!this.config.mousemove)if(n.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(Mt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Dt.TWO_FINGERS,image:L0,title:this.config.lang.twoFingers})},mc));else if(this.step.is(Mt.CLICK,Mt.MOVING)){n.preventDefault();const e=n.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(n),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Dt.TWO_FINGERS))}__onMouseWheel(n){if(!this.config.mousewheel||!n.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Dt.CTRL_ZOOM,image:D0,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Dt.CTRL_ZOOM),gc);return}n.preventDefault(),n.stopPropagation();const e=n.deltaY/Math.abs(n.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const n=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(n?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new Ts(n))}__resetMove(){this.step.set(Mt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(n){this.viewer.stopAll(),this.__resetMove();const e=Jo(n);this.step.set(Mt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(n,e,t,i=!1){this.step.is(Mt.CLICK)&&!this.__moveThresholdReached(n,e)&&this.__doClick(n,e,t,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(n,e,t,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=n-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),l=a.find(c=>c.object.userData[ei]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),u={rightclick:i,originalEvent:t,target:Pr(t),clientX:n,clientY:e,viewerX:r,viewerY:o,yaw:c.yaw,pitch:c.pitch,objects:a.map(d=>d.object).filter(d=>!d.userData[ei])};try{const d=this.viewer.dataHelper.sphericalCoordsToTextureCoords(u);Object.assign(u,d)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-u.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-u.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new th(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Jc(u)),this.data.dblclickData=Dr(u),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},fc))}}__handleObjectsEvents(n){if(!Lc(this.state.objectsObservers)&&n.composedPath().includes(this.viewer.container)){const e=bc(this.viewer.container),t={x:n.clientX-e.x,y:n.clientY-e.y},i=this.viewer.renderer.getIntersections(t),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(n,r,t,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=i.find(l=>l.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,ha),this.state.objectsObservers[r]=null),o?s(a.object,r,Oh):(this.state.objectsObservers[r]=a.object,s(a.object,r,Nh))):o&&(s(o,r,ha),this.state.objectsObservers[r]=null)}}}__doMove(n,e){if(this.step.is(Mt.CLICK)&&this.__moveThresholdReached(n,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(Mt.MOVING),this.data.mouseX=n,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(Mt.MOVING)){const t=(n-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(n-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(t/this.state.size.width)*$e.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*$e.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=n,this.data.mouseY=e}}__moveThresholdReached(n,e){return Math.abs(n-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(n){if(this.step.is(Mt.MOVING)){n.preventDefault();const e=Jo(n);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Ht.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};Ke.enabled=!1;var $r=new Je,Zh=new rt,Kh=new Ni,N0=class extends Os{constructor(n){super(n),this.frustumNeedsUpdate=!0,this.renderer=new j_(this.config.rendererParameters),this.renderer.setPixelRatio(Ht.pixelRatio),this.renderer.outputColorSpace=ci,this.renderer.toneMapping=1,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new vr,this.camera=new Qt(50,16/9,.1,2*yi),this.camera.matrixAutoUpdate=!1;const e=new Ft(new mi(yi).scale(-1,1,1),new xn({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[ei]:!0},this.scene.add(e),this.raycaster=new Il,this.frustum=new Oo,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(Ds.type,this),this.viewer.addEventListener(kn.type,this),this.viewer.addEventListener(Cs.type,this),this.viewer.addEventListener(Rs.type,this),this.viewer.addEventListener(Wt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(n=>this.__renderLoop(n))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Ds.type,this),this.viewer.removeEventListener(kn.type,this),this.viewer.removeEventListener(Cs.type,this),this.viewer.removeEventListener(Rs.type,this),this.viewer.removeEventListener(Wt.type,this),super.destroy()}handleEvent(n){switch(n.type){case Ds.type:this.__onSizeUpdated();break;case kn.type:this.__onZoomUpdated();break;case Cs.type:this.__onPositionUpdated();break;case Rs.type:this.__onPositionUpdated();break;case Wt.type:n.containsOptions("fisheye")&&this.__onPositionUpdated(),n.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(n){n?this.customRenderer=n(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(n){const e=this.timestamp?n-this.timestamp:0;this.timestamp=n,this.viewer.dispatchEvent(new bs(n,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Mh))}setTexture(n){this.meshContainer||(this.meshContainer=new Fn,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(n.panoData),this.viewer.adapter.setTexture(this.mesh,n,!1),this.meshContainer.add(this.mesh),this.state.textureData=n,this.viewer.needsUpdate()}setPanoramaPose(n,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(n);e.rotation.set(-t.tilt,t.pan,t.roll,"YXZ")}setSphereCorrection(n,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(n);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(n,e,t){const i=t.effect==="fade"||t.rotation,s=!Pt(e.position),r=!Pt(e.zoom),o=new ca(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new Fn,l=this.viewer.adapter.createMesh(n.panoData);if(this.viewer.adapter.setTexture(l,n,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(n.panoData,l),this.setSphereCorrection(e.sphereCorrection,a),s&&!t.rotation){const p=this.viewer.getPosition(),m=new I(0,1,0);a.rotateOnWorldAxis(m,o.position.yaw-p.yaw);const g=new I(0,1,0).cross(this.camera.getWorldDirection(new I)).normalize();a.rotateOnWorldAxis(g,o.position.pitch-p.pitch)}a.add(l),this.scene.add(a),this.renderer.setRenderTarget(new $n),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:c,properties:u}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?o.position:null,i?o.zoomLevel:null),d=new Or({properties:{...u,opacity:{start:0,end:1}},duration:c,easing:"inOutCubic",onTick:p=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?$e.mapLinear(p.opacity,0,.5,1,0):$e.mapLinear(p.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=t.effect==="black"?$e.mapLinear(p.opacity,.5,1,0,1):$e.mapLinear(p.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}s&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return d.then(p=>{a.remove(l),this.scene.remove(a),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=n,this.setPanoramaPose(n.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(n),this.viewer.adapter.disposeMesh(l))}),d}getIntersections(n){$r.x=2*n.x/this.state.size.width-1,$r.y=-2*n.y/this.state.size.height+1,this.raycaster.setFromCamera($r,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,$r)),e}isObjectVisible(n){if(!n)return!1;if(this.frustumNeedsUpdate&&(Zh.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Zh),this.frustumNeedsUpdate=!1),n.isVector3)return this.frustum.containsPoint(n);if(n.isMesh&&n.geometry){const e=n;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Kh.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Kh)}else return n.isObject3D?this.frustum.intersectsObject(n):!1}addObject(n){this.scene.add(n)}removeObject(n){this.scene.remove(n)}cleanScene(n){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(i=>{i.value?.dispose?.()}),t.dispose()};n.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{e(i)}):e(t.material)),t instanceof vr||t.dispose?.(),t!==n&&this.cleanScene(t)})}},U0=class extends Wp{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(n,e,t,i){const s=this._abortController.signal,r=super.load(n,l=>{a(),e(l)},t,l=>{if(a(),s.aborted){const c=new Error;c.name="AbortError",c.message="The operation was aborted.",i(c)}else i(l)});function o(){r.src=""}function a(){s.removeEventListener("abort",o,!1)}return s.addEventListener("abort",o,!1),r}},F0=class extends Os{constructor(n){super(n),this.fileLoader=new Gp,this.fileLoader.setResponseType("blob"),this.imageLoader=new U0}destroy(){this.abortLoading(),super.destroy()}abortLoading(){this.fileLoader.abort?.(),this.imageLoader.abort()}loadFile(n,e,t){const i=ts.get(n,t);if(i){if(i instanceof Blob)return e?.(100),Promise.resolve(i);ts.remove(n,t)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(n)),this.fileLoader.setWithCredentials(this.config.withCredentials(n));let s=0;return e?.(s),this.fileLoader.loadAsync(n,r=>{if(r.lengthComputable){const o=r.loaded/r.total*100;o>s&&(s=o,e?.(s))}}).then(r=>(s=100,e?.(s),ts.add(n,t,r),r))}loadImage(n,e,t){const i=ts.get(n,t);return i?(e?.(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(n)),this.imageLoader.loadAsync(n).then(s=>(ts.add(n,t,s),s))):this.loadFile(n,e,t).then(s=>this.blobToImage(s))}blobToImage(n){return new Promise((e,t)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=t,i.src=URL.createObjectURL(n)})}preloadPanorama(n){return this.viewer.adapter.supportsPreload(n)?this.viewer.adapter.loadTexture(n,!1):Promise.reject(new fe("Current adapter does not support preload"))}dispatchProgress(n){this.viewer.loader.setProgress(n),this.viewer.dispatchEvent(new dh(Math.round(n)))}},O0=class extends Os{constructor(n){super(n),this.zoom=new Ms(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new kn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Gc(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new Cs(e))},{yaw:new Ms(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Ms(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Ms(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new Rs(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed($e.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed($e.degToRad(this.config.moveSpeed*50))}update(n){this.zoom.update(n),this.position.update(n),this.roll.update(n)}},k0=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new I(0,0,yi),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},B0=class extends $c{constructor(n){if(super(),this.plugins={},this.children=[],this.parent=Sc(n.container),!this.parent)throw new fe('"container" element not found.');this.parent[ei]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Hc(this.parent),zc(this.container,"core"),this.state=new k0,this.config=E0(n),this.__setSize(this.config.size),this.overlay=new b0(this);try{Ht.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}ts.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new N0(this),this.textureLoader=new F0(this),this.eventsHandler=new I0(this),this.dataHelper=new P0(this),this.dynamics=new O0(this),this.adapter.init?.(),this.loader=new M0(this),this.navbar=new S0(this),this.panel=new A0(this),this.notification=new w0(this),this.autoSize(),this.setCursor(null),ta(Ht.isTouchEnabled,e=>{Rr(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[n,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[n];this.children.slice().forEach(n=>n.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[ei]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Ps)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(n){if(typeof n=="string")return this.plugins[n];{const e=ma(n);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Tc(this.parent,Ht.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(n){n?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Ds(this.getSize())),this.navbar.autoSize())}setPanorama(n,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=n,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=r=>{if(Nc(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new gh(n,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new fh(n));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),na();const o=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!Pt(o.zoom)||!Pt(o.position))&&this.stopAll(),{textureData:r,cleanOptions:o}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Qi(r)),Pt(o.zoom)||this.zoom(o.zoom),Pt(o.position)||this.rotate(o.position)}).then(()=>i(),r=>i(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>(this.loader.hide(),this.dispatchEvent(new Qi(r)),this.state.transitionAnimation=this.renderer.transition(r,o,t),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new _h(r)),!r)throw na()}).then(()=>i(),r=>i(r)),this.state.loadingPromise}setOptions(n){const e={...this.config,...n};for(let[t,i]of Object.entries(n)){if(!(t in Bn)){It(`Unknown option ${t}`);continue}if(t in jh){It(jh[t]);continue}switch(t in ga&&(i=ga[t](i,{rawConfig:e,defValue:Bn[t]})),this.config[t]=i,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new kn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Wt(Object.keys(n)))}setOption(n,e){this.setOptions({[n]:e})}showError(n){this.overlay.show({id:Dt.ERROR,image:R0,title:n,dismissible:!1})}hideError(){this.overlay.hide(Dt.ERROR)}rotate(n){const e=new Zc(this.dataHelper.cleanPosition(n));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(n){this.dynamics.zoom.setValue(n)}zoomIn(n=1){this.dynamics.zoom.step(n)}zoomOut(n=1){this.dynamics.zoom.step(-n)}animate(n){const e=ia(n),t=!Pt(n.zoom),i=new ca(e?this.dataHelper.cleanPosition(n):void 0,n.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(n.speed,i.position,i.zoomLevel);return s?(this.state.animation=new Or({properties:r,duration:s,easing:n.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),t&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),t&&this.zoom(i.zoomLevel),new Or(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(n){this.__setSize(n),this.autoSize()}__setSize(n){["width","height"].forEach(e=>{n?.[e]&&(/^[0-9.]+$/.test(n[e])&&(n[e]+="px"),this.parent.style[e]=n[e])})}enterFullscreen(){this.isFullscreenEnabled()||Ac(this.parent,Ht.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&Cc(Ht.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(n){return new C0(this,n)}setCursor(n){this.state.cursorOverride=n,n?this.container.style.cursor=n:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(n){this.state.objectsObservers[n]||(this.state.objectsObservers[n]=null)}unobserveObjects(n){delete this.state.objectsObservers[n]}stopAll(){return this.dispatchEvent(new Is),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Equirectangular Tiles Adapter 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var z0=class{constructor(n,e,t){this.id=n,this.priority=e,this.fn=t,this.status=1}start(){return this.status=2,this.fn(this).then(()=>{this.status=4},()=>{this.status=5})}cancel(){this.status=3}isCancelled(){return this.status===3}},H0=class{constructor(n=8){this.concurency=n,this.runningTasks={},this.tasks={}}enqueue(n){this.tasks[n.id]=n}clear(){Object.values(this.tasks).forEach(n=>n.cancel()),this.tasks={},this.runningTasks={}}setPriority(n,e){const t=this.tasks[n];t&&(t.priority=e,t.status===0&&(t.status=1))}disableAllTasks(){Object.values(this.tasks).forEach(n=>{n.status=0})}start(){if(Object.keys(this.runningTasks).length>=this.concurency)return;const n=Object.values(this.tasks).filter(e=>e.status===1).sort((e,t)=>t.priority-e.priority).pop();n&&(this.runningTasks[n.id]=!0,n.start().then(()=>{n.isCancelled()||(delete this.tasks[n.id],delete this.runningTasks[n.id],this.start())}),this.start())}};function V0(){const n=new OffscreenCanvas(512,512),e=n.getContext("2d");return e.fillStyle="#333",e.fillRect(0,0,n.width,n.height),e.font=`${n.width/5}px serif`,e.fillStyle="#a22",e.textAlign="center",e.textBaseline="middle",e.fillText("⚠",n.width/2,n.height/2),new xn({map:ge.createTexture(n)})}function G0(n){const e=new Op(n),t=new Np(e);return t.material.depthTest=!1,t.material.depthWrite=!1,t.material.opacity=.25,t.material.transparent=!0,t}var Jh=["dodgerblue","limegreen","indianred"];function W0(n,e,t){const i=document.createElement("canvas");i.width=n.width,i.height=n.height;const s=i.getContext("2d");s.fillStyle=Jh[e%Jh.length],s.fillRect(0,0,i.width,i.height),s.globalCompositeOperation="multiply",s.drawImage(n,0,0);const r=n.width/7;return s.globalCompositeOperation="source-over",s.fillStyle="white",s.font=`${r}px monospace`,s.textAlign="center",t.split(`
`).forEach((o,a)=>{s.fillText(o,n.width/2,n.height/2+r*(.3+a))}),i}function ya(n){return!!n.levels}function Qh(n,e,t){return{...n,level:e,colSize:n.width/n.cols,rowSize:n.width/2/n.rows,facesByCol:t.SPHERE_SEGMENTS/n.cols,facesByRow:t.SPHERE_HORIZONTAL_SEGMENTS/n.rows}}function ed(n,e,t,i,s){let r,o;return ya(n)?(i?(o=n.levels.findIndex(a=>{const l=a.width/360*e,c=a.width/2/180*t;return l>=i.width&&c>=i.height}),o===-1&&(o=n.levels.length-1)):o=0,r=n.levels[o]):(o=0,r={...n}),Qh(r,o,s)}function X0(n,e,t){return!ya(n)||!n.levels[e]?null:Qh(n.levels[e],e,t)}function $0(n,e){if(typeof n!="object"||!n.tileUrl)throw new fe("Invalid panorama configuration, are you using the right adapter?");ya(n)?(n.levels.forEach(t=>{td(t,e),"zoomRange"in t&&ge.logWarn('EquirectangularTilesAdapter: "zoomRange" property is deprecated and must be removed')}),n.levels.sort((t,i)=>t.width-i.width)):td(n,e)}function td(n,e){if(!n.width||!n.cols||!n.rows)throw new fe("Invalid panorama configuration, are you using the right adapter?");if(n.cols>e.SPHERE_SEGMENTS)throw new fe(`Panorama cols must not be greater than ${e.SPHERE_SEGMENTS}.`);if(n.rows>e.SPHERE_HORIZONTAL_SEGMENTS)throw new fe(`Panorama rows must not be greater than ${e.SPHERE_HORIZONTAL_SEGMENTS}.`);if(!$e.isPowerOfTwo(n.cols)||!$e.isPowerOfTwo(n.rows))throw new fe("Panorama cols and rows must be powers of 2.")}function q0(n,e){for(let t=0;t<e.cols;t++){const i=n.tileUrl(t,e.rows/2,e.level);if(i)return i}return n.tileUrl.toString()}var ks=6,Xt=3,Y0="uv",j0="position",nd=-1;function Ea(n){return`${n.col}x${n.row}/${n.config.level}`}function qr(n){return n.children}var Z0=ge.getConfigParser({resolution:64,showErrorTile:!0,baseBlur:!0,antialias:!0,debug:!1,useXmpData:!1}),Yr=new I,jr=class Tf extends zr{constructor(e,t){super(e),this.state={tileConfig:null,tiles:{},faces:{},geom:null,materials:[],errorMaterial:null,inTransition:!1},this.queue=new H0,this.config=Z0(t),this.adapter=new da(this.viewer,{resolution:this.config.resolution,blur:this.config.baseBlur}),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2,this.NB_VERTICES=2*this.SPHERE_SEGMENTS*Xt+(this.SPHERE_HORIZONTAL_SEGMENTS-2)*this.SPHERE_SEGMENTS*ks,this.NB_GROUPS=this.SPHERE_SEGMENTS*this.SPHERE_HORIZONTAL_SEGMENTS,this.viewer.config.requestHeaders&&ge.logWarn('EquirectangularTilesAdapter fallbacks to file loader because "requestHeaders" where provided. Consider removing "requestHeaders" if you experience performances issues.')}static withConfig(e){return[Tf,e]}init(){super.init(),this.viewer.addEventListener(_e.TransitionDoneEvent.type,this),this.viewer.addEventListener(_e.PositionUpdatedEvent.type,this),this.viewer.addEventListener(_e.ZoomUpdatedEvent.type,this)}destroy(){this.viewer.removeEventListener(_e.TransitionDoneEvent.type,this),this.viewer.removeEventListener(_e.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(_e.ZoomUpdatedEvent.type,this),this.__cleanup(),this.state.errorMaterial?.map?.dispose(),this.state.errorMaterial?.dispose(),this.adapter.destroy(),delete this.adapter,delete this.state.geom,delete this.state.errorMaterial,super.destroy()}handleEvent(e){switch(e.type){case _e.PositionUpdatedEvent.type:case _e.ZoomUpdatedEvent.type:this.__refresh();break;case _e.TransitionDoneEvent.type:this.state.inTransition=!1,e.completed&&this.__switchMesh(this.viewer.renderer.mesh);break}}supportsTransition(e){return!!e.baseUrl}supportsPreload(e){return!!e.baseUrl}textureCoordsToSphericalCoords(e,t){return this.adapter.textureCoordsToSphericalCoords(e,t)}sphericalCoordsToTextureCoords(e,t){return this.adapter.sphericalCoordsToTextureCoords(e,t)}async loadTexture(e,t=!0){$0(e,this);const i=ed(e,0,0,null,this),s={isEquirectangular:!0,fullWidth:i.width,fullHeight:i.width/2,croppedWidth:i.width,croppedHeight:i.width/2,croppedX:0,croppedY:0,poseHeading:0,posePitch:0,poseRoll:0};if(e.baseUrl){const r=await this.adapter.loadTexture(e.baseUrl,t,e.basePanoData,!0);return{panorama:e,panoData:{...s,baseData:r.panoData},cacheKey:r.cacheKey,texture:r.texture}}else return{panorama:e,panoData:{...s,baseData:null},cacheKey:q0(e,i),texture:null}}createMesh(e){const t=this.adapter.createMesh(e.baseData??e),i=new mi(Ji.SPHERE_RADIUS,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI/2).scale(-1,1,1).toNonIndexed();i.clearGroups();let s=0,r=0;for(;s<this.SPHERE_SEGMENTS*Xt;s+=Xt)i.addGroup(s,Xt,r++);for(;s<this.NB_VERTICES-this.SPHERE_SEGMENTS*Xt;s+=ks)i.addGroup(s,ks,r++);for(;s<this.NB_VERTICES;s+=Xt)i.addGroup(s,Xt,r++);const o=[],a=new xn({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1});for(let u=0;u<this.NB_GROUPS;u++)o.push(a);const l=new Ft(i,o);l.renderOrder=1;const c=new Fn;return c.add(t),c.add(l),c}setTexture(e,t,i){const[s]=qr(e);t.texture?this.adapter.setTexture(s,{panorama:t.panorama.baseUrl,texture:t.texture,panoData:t.panoData.baseData}):s.visible=!1,i?this.state.inTransition=!0:this.__switchMesh(e)}setTextureOpacity(e,t){const[i]=qr(e);this.adapter.setTextureOpacity(i,t)}disposeTexture({texture:e}){e?.dispose()}disposeMesh(e){const[t,i]=qr(e);t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.forEach(s=>{s.map?.dispose(),s.dispose()})}__refresh(){if(!this.state.geom||this.state.inTransition)return;const e=this.viewer.config.panorama,t=ed(e,this.viewer.state.hFov,this.viewer.state.vFov,this.viewer.state.size,this),i=this.state.geom.getAttribute(j0),s={};for(let r=0;r<this.NB_VERTICES;r+=1)if(Yr.fromBufferAttribute(i,r),Yr.applyEuler(this.viewer.renderer.sphereCorrection),this.viewer.renderer.isObjectVisible(Yr)){let o;r<this.SPHERE_SEGMENTS*Xt?o=Math.floor(r/3):r<this.NB_VERTICES-this.SPHERE_SEGMENTS*Xt?o=Math.floor((r/3-this.SPHERE_SEGMENTS)/2)+this.SPHERE_SEGMENTS:o=Math.floor((r-this.NB_VERTICES-this.SPHERE_SEGMENTS*Xt)/3)+this.SPHERE_HORIZONTAL_SEGMENTS*(this.SPHERE_SEGMENTS-1);const a=Math.floor(o/this.SPHERE_SEGMENTS),l=o-a*this.SPHERE_SEGMENTS;let c=t;for(;c;){const u=Math.floor(a/c.facesByRow),d=Math.floor(l/c.facesByCol);let p=Yr.angleTo(this.viewer.state.direction);(u===0||u===c.rows-1)&&(p*=2);const m={row:u,col:d,angle:p,config:c,url:null},g=Ea(m);if(s[g]){s[g].angle=Math.min(s[g].angle,p);break}else if(m.url=e.tileUrl(d,u,c.level),m.url){s[g]=m;break}else c=X0(e,c.level-1,this)}}this.state.tileConfig=t,this.__loadTiles(Object.values(s))}__loadTiles(e){this.queue.disableAllTasks(),e.forEach(t=>{const i=Ea(t);this.state.tiles[i]?this.queue.setPriority(i,t.angle):(this.state.tiles[i]=!0,this.queue.enqueue(new z0(i,t.angle,s=>this.__loadTile(t,s))))}),this.queue.start()}__loadTile(e,t){return this.viewer.textureLoader.loadImage(e.url,null,this.viewer.state.textureData.cacheKey).then(i=>{if(!t.isCancelled()){this.config.debug&&(i=W0(i,e.config.level,Ea(e)));const s=this.config.antialias&&e.config.level>0,r=new xn({map:ge.createTexture(i,s)});this.__swapMaterial(e,r,!1),this.viewer.needsUpdate()}}).catch(i=>{!ge.isAbortError(i)&&!t.isCancelled()&&this.config.showErrorTile&&(this.state.errorMaterial||(this.state.errorMaterial=V0()),this.__swapMaterial(e,this.state.errorMaterial,!0),this.viewer.needsUpdate())})}__swapMaterial(e,t,i){const s=this.state.geom.getAttribute(Y0);for(let r=0;r<e.config.facesByCol;r++)for(let o=0;o<e.config.facesByRow;o++){const a=e.col*e.config.facesByCol+r,l=e.row*e.config.facesByRow+o,c=l===0,u=l===this.SPHERE_HORIZONTAL_SEGMENTS-1;let d;if(c?d=a*Xt:u?d=this.NB_VERTICES-this.SPHERE_SEGMENTS*Xt+a*Xt:d=this.SPHERE_SEGMENTS*Xt+(l-1)*this.SPHERE_SEGMENTS*ks+a*ks,i&&this.state.faces[d]>nd||this.state.faces[d]>e.config.level)continue;this.state.faces[d]=i?nd:e.config.level;const p=this.state.geom.groups.find(h=>h.start===d).materialIndex;this.state.materials[p]=t;const m=1-o/e.config.facesByRow,g=1-(o+1)/e.config.facesByRow,v=r/e.config.facesByCol,f=(r+1)/e.config.facesByCol;c?(s.setXY(d,(v+f)/2,m),s.setXY(d+1,v,g),s.setXY(d+2,f,g)):u?(s.setXY(d,f,m),s.setXY(d+1,v,m),s.setXY(d+2,(v+f)/2,g)):(s.setXY(d,f,m),s.setXY(d+1,v,m),s.setXY(d+2,f,g),s.setXY(d+3,v,m),s.setXY(d+4,v,g),s.setXY(d+5,f,g))}s.needsUpdate=!0}__switchMesh(e){const[,t]=qr(e);if(this.__cleanup(),this.state.materials=t.material,this.state.geom=t.geometry,this.config.debug){const i=G0(this.state.geom);this.viewer.renderer.addObject(i),this.viewer.renderer.setSphereCorrection(this.viewer.config.sphereCorrection,i)}setTimeout(()=>this.__refresh())}__cleanup(){this.queue.clear(),this.state.tiles={},this.state.faces={},this.state.materials=[],this.state.inTransition=!1}};jr.id="equirectangular-tiles",jr.VERSION="5.14.1",jr.supportsDownload=!1;var K0=jr;const J0=3,id={accent:"#3b82f6",panelBg:"#111111",radius:"12px"},Q0={background:"#1a1d24",backgroundOpacity:.96,textColor:"#ffffff",fontSize:13,padding:8,radius:6},ex={autoRotate:{enabled:!1,speed:.5,idleDelayMs:4e3},gyroscope:!0,fullscreenButton:!0,audio:{muted:!1}},tx={goto:"arrow",info:"info",video:"play",url:"plus",audio:"circle",look:"eye",toggle:"dot",image:"circle",panel:"info",narrate:"play",model3d:"circle"};function sd(n,e=id.accent){return{builtinIcon:tx[n]??"circle",iconColor:"#ffffff",background:e,radius:999,text:"",textColor:"#ffffff",fontSize:13,size:22,padding:9,effect:"none",effectColor:e,effectOpacity:.7,effectSpeed:1.6,effectSize:44,effectStroke:2,fill:e,fillOpacity:.28,stroke:e,strokeWidth:2}}function Bs(n){const e=globalThis.crypto,t=e?.randomUUID?e.randomUUID().replace(/-/g,""):Math.random().toString(16).slice(2).padEnd(12,"0");return`${n}-${t.slice(0,8)}`}function nx(n,e){if(!n.componentId)return n.style;const t=e?.find(s=>s.id===n.componentId);return t?.variants.length?(n.variantId&&t.variants.find(s=>s.id===n.variantId)||t.variants[0])?.style??n.style:n.style}const dt=n=>typeof n=="object"&&n!==null,zn=n=>Array.isArray(n)?n:[],qe=(n,e="")=>typeof n=="string"?n:e,ft=(n,e=0)=>typeof n=="number"&&!Number.isNaN(n)?n:e;function Zr(n,e){return n.length?[{event:e==="hover"?"hover":"click",actions:n}]:[]}function ix(n,e){if(!dt(n))return{action:{type:"none"},trigger:"click"};const t=qe(n.type,"none"),i=n.trigger==="hover"?"hover":"click";switch(t){case"goto":return{action:{type:"goto",targetSceneId:qe(n.targetSceneId),...dt(n.landing)?{landing:n.landing}:{}},trigger:i};case"info":return{action:{type:"info",title:qe(n.title),text:qe(n.text),...n.imageAssetId?{imageAssetId:qe(n.imageAssetId)}:{},...n.imageSrc?{imageSrc:qe(n.imageSrc)}:{},...n.videoUrl?{videoUrl:qe(n.videoUrl)}:{}},trigger:i};case"video":return{action:{type:"video",url:qe(n.url)},trigger:i};case"url":return{action:{type:"url",url:qe(n.url),target:n.target==="lightbox"?"lightbox":"blank"},trigger:i};case"audio":return{action:{type:"audio",url:qe(n.url),...n.loop?{loop:!0}:{}},trigger:i};case"look":return{action:{type:"look",yaw:ft(n.yaw),pitch:ft(n.pitch),...n.zoom!=null?{zoom:ft(n.zoom)}:{}},trigger:i};case"toggle":return{action:{type:"toggle",targetIds:zn(n.targetIds),mode:n.mode==="show"||n.mode==="hide"?n.mode:"toggle"},trigger:i};case"image":return{action:{type:"image",...n.imageAssetId?{imageAssetId:qe(n.imageAssetId)}:{},...n.imageSrc?{imageSrc:qe(n.imageSrc)}:{}},trigger:i};case"none":return{action:{type:"none"},trigger:i};default:return t==="panel"||t==="setVar"||t==="animate"||t==="narrate"||t==="model3d"?{action:n,trigger:i}:(e.push({code:"unknown-action",message:`Unknown action type "${t}" replaced with none`,data:n}),{action:{type:"none"},trigger:i})}}function sx(n,e){const t=n.geometry;if(dt(t)){if(t.kind==="polygon"&&Array.isArray(t.points)&&t.points.length>=3)return{kind:"polygon",points:t.points.map(i=>({yaw:ft(i.yaw),pitch:ft(i.pitch)}))};if(t.kind==="point")return{kind:"point",yaw:ft(t.yaw),pitch:ft(t.pitch)}}return e==="polygon"&&Array.isArray(n.points)&&n.points.length>=3?{kind:"polygon",points:n.points.map(i=>({yaw:ft(i.yaw),pitch:ft(i.pitch)}))}:{kind:"point",yaw:ft(n.yaw),pitch:ft(n.pitch)}}function rd(n,e,t){const i=dt(n)?n:{},s=qe(i.id)||Bs("h");let r;if(Array.isArray(i.on))r=i.on;else{const u=Array.isArray(i.actions)?i.actions:i.action!=null?[i.action]:[];if(u.length){const d=u.map(g=>ix(g,t)),p=d.filter(g=>g.trigger==="hover").map(g=>g.action),m=d.filter(g=>g.trigger==="click").map(g=>g.action);r=[...Zr(m,"click"),...Zr(p,"hover")]}else i.type==="info"?r=Zr([{type:"info",title:qe(i.label,"Info"),text:qe(i.content)}],"hover"):i.type!=null||i.targetSceneId!=null?r=Zr([{type:"goto",targetSceneId:qe(i.targetSceneId)}],"click"):r=[]}const o=i.form==="text"||i.form==="image"||i.form==="html"||i.form==="polygon"?i.form:"icon",a=r[0]?.actions[0]?.type??"none",l=dt(i.style)?{...sd(a,e),...i.style}:{...sd(a,e),...i.label?{text:qe(i.label)}:{}},c=sx(i,o);return o==="polygon"&&c.kind==="point"&&t.push({code:"hotspot-repaired",message:`Hotspot ${s} was marked polygon but had fewer than 3 points; treated as a point`,data:i.points}),{id:s,name:qe(i.name)||l.text||qe(i.tooltip)||s,geometry:c,form:c.kind==="polygon"?"polygon":o==="polygon"?"icon":o,style:l,...i.componentId?{componentId:qe(i.componentId)}:{},...i.variantId?{variantId:qe(i.variantId)}:{},...i.tooltip?{tooltip:qe(i.tooltip)}:{},on:r,...i.perspective?{perspective:!0}:{},...i.html?{html:qe(i.html)}:{},...i.imageAssetId?{imageAssetId:qe(i.imageAssetId)}:{},...i.imageSrc?{imageSrc:qe(i.imageSrc)}:{},...i.width!=null?{width:ft(i.width)}:{},...i.height!=null?{height:ft(i.height)}:{},...i.visible===!1?{visible:!1}:{},...dt(i.provenance)?{provenance:i.provenance}:{}}}function rx(n,e,t){if(dt(n.source))return n.source;if(dt(n.tiles)){const s=n.tiles;return{kind:"tiled",dir:qe(s.dir),width:ft(s.width),cols:ft(s.cols),rows:ft(s.rows)}}const i=qe(n.panorama);return i||e.push({code:"scene-missing-source",message:`Scene ${t} has no panorama; it will not render until one is set`,data:n}),{kind:"single",src:i}}function ox(n,e,t){const i=dt(n)?n:{},s=qe(i.id)||Bs("scene"),r=Array.isArray(i.layers)?i.layers.map(a=>({id:qe(a.id)||Bs("layer"),name:qe(a.name,"Hotspots"),visible:a.visible!==!1,locked:a.locked===!0,hotspots:zn(a.hotspots).map(l=>rd(l,e,t))})):[{id:Bs("layer"),name:"Hotspots",visible:!0,locked:!1,hotspots:zn(i.hotspots).map(a=>rd(a,e,t))}],o=dt(i.initialView)?i.initialView:{};return{id:s,name:qe(i.name,"Scene"),projection:i.projection==="cubemap"?"cubemap":"equirect",source:rx(i,t,s),...i.proxy?{proxy:qe(i.proxy)}:{},...i.thumbnail?{thumbnail:qe(i.thumbnail)}:{},...i.subtitle?{subtitle:qe(i.subtitle)}:{},initialView:{yaw:ft(o.yaw),pitch:ft(o.pitch),...o.fov!=null?{fov:ft(o.fov)}:{}},...i.north!=null?{north:ft(i.north)}:{},...i.tilt!=null?{tilt:ft(i.tilt)}:{},...i.roll!=null?{roll:ft(i.roll)}:{},...dt(i.audio)?{audio:i.audio}:{},...dt(i.guide)?{guide:i.guide}:{},layers:r,...Array.isArray(i.on)?{on:i.on}:{},...dt(i.analysis)?{analysis:i.analysis}:{}}}function ax(n){const e=dt(n)?n:{},t=[],i=ft(e.schema,(dt(e.skin)&&"elements"in e.skin,2)),s={...id,...dt(e.theme)?e.theme:{}},r=zn(e.scenes).map(g=>ox(g,s.accent,t));let o={};if(dt(e.skin)){const g=e.skin;o={...typeof g.html=="string"?{html:g.html}:{},...typeof g.css=="string"?{css:g.css}:{},...typeof g.dir=="string"?{dir:g.dir}:{},...typeof g.entry=="string"?{entry:g.entry}:{},...typeof g.template=="string"?{template:g.template}:{}};const v=Array.isArray(g.elements)?g.elements:[];v.length&&t.push({code:"skin-dropped",message:`The old skin had ${v.length} element(s) on a fixed stage. Skins are now markup over the panorama — these were not converted.`,data:e.skin})}const a={schema:J0,id:qe(e.id)||Bs("tour"),title:qe(e.title,"Untitled tour"),locales:dt(e.locales)?{default:qe(e.locales.default,"en"),available:zn(e.locales.available).length?zn(e.locales.available):["en"]}:{default:"en",available:["en"]},theme:s,tooltipStyle:{...Q0,...dt(e.tooltipStyle)?e.tooltipStyle:{}},...dt(e.defaultStyle)?{defaultStyle:e.defaultStyle}:{},...Array.isArray(e.stylePresets)?{stylePresets:e.stylePresets}:{},...Array.isArray(e.components)?{components:e.components}:{},assets:zn(e.assets),variables:zn(e.variables),scenes:r,...dt(e.graph)?{graph:e.graph}:{},skin:o,runtime:{...ex,...dt(e.runtime)?e.runtime:{}},...dt(e.i18n)?{i18n:e.i18n}:{},...dt(e.quiz)?{quiz:e.quiz}:{}},l=new Set(["schema","version","pages","skinDir"]),c=new Set(["panorama","hotspots","yaw","pitch","fov","cube","faces"]),u=new Set(Object.keys(a)),d=Object.keys(e).filter(g=>!u.has(g)&&!l.has(g)),p=new Set;for(const[g,v]of zn(e.scenes).entries()){if(!dt(v)||!r[g])continue;const f=new Set(Object.keys(r[g]));for(const h of Object.keys(v))!f.has(h)&&!c.has(h)&&p.add(h)}const m=[...d,...[...p].map(g=>`scenes[].${g}`)];return m.length&&t.push({code:"unknown-fields",message:`This tour has ${m.length} field(s) this version does not understand — ${m.join(", ")}. It was probably written by a newer build. Saving from here would delete them.`,data:m}),!a.runtime.startSceneId&&r.length&&(a.runtime.startSceneId=r[0].id),{doc:a,warnings:t,from:ft(e.schema,i)}}const lx={enabled:!0,radius:.14,angle:Math.PI/3,fill:"#3b82f6",fillOpacity:.35,stroke:"#3b82f6"};function cx(n,e=.5){const t=n/2,i=r=>.5+Math.sin(r)*e,s=r=>.5-Math.cos(r)*e;return["M 0.5 0.5",`L ${i(-t)} ${s(-t)}`,`A ${e} ${e} 0 ${n>Math.PI?1:0} 1 ${i(t)} ${s(t)}`,"Z"].join(" ")}function hx(n){return{...lx,...n?.radar??{}}}const dx={visible:!0,movement:"draggable",scaleMode:"fit"};function Ei(n){return{...dx,...n?.view??{}}}function ux(n,e,t){return!n||n.heading==null?null:fx(n.heading+(t-(e?.north??0)))}function fx(n){const e=Math.PI*2,t=(n%e+e)%e;return t>Math.PI?t-e:t}const px=n=>typeof n=="string"&&n.trim()!=="";function mx(n,e){if(e===n.locales.default)return(i,s)=>s;const t=n.i18n?.[e]??{};return(i,s)=>px(t[i])?t[i]:s}function od(n,e){if(e===n.locales.default||!n.i18n?.[e])return n;const t=mx(n,e);return{...n,title:t("tour.title",n.title),...n.description?{description:t("tour.description",n.description)}:{},scenes:n.scenes.map(i=>({...i,name:t(`${i.id}.name`,i.name),...i.guide?.text?{guide:{...i.guide,text:t(`${i.id}.guide.text`,i.guide.text)}}:{},...i.subtitle?{subtitle:t(`${i.id}.subtitle`,i.subtitle)}:{},layers:i.layers.map(s=>({...s,hotspots:s.hotspots.map(r=>({...r,...r.tooltip?{tooltip:t(`${r.id}.tooltip`,r.tooltip)}:{},...r.style?.text?{style:{...r.style,text:t(`${r.id}.style.text`,r.style.text)}}:{},...r.on?{on:r.on.map(o=>({...o,actions:o.actions.map((a,l)=>{const c=`${r.id}.${o.event}.${l}`;return a.type==="info"?{...a,title:t(`${c}.title`,a.title),text:t(`${c}.text`,a.text)}:a.type==="panel"&&a.content?{...a,content:Object.fromEntries(Object.entries(a.content).map(([u,d])=>typeof d=="string"?[u,t(`${c}.content.${u}`,d)]:[u,d]))}:a.type==="narrate"&&a.text?{...a,text:t(`${c}.narrate`,a.text)}:a})}))}:{}}))}))})),...n.quiz?{quiz:{...n.quiz,...n.quiz.title?{title:t("quiz.title",n.quiz.title)}:{},...n.quiz.intro?{intro:t("quiz.intro",n.quiz.intro)}:{},...n.quiz.passMessage?{passMessage:t("quiz.passMessage",n.quiz.passMessage)}:{},...n.quiz.failMessage?{failMessage:t("quiz.failMessage",n.quiz.failMessage)}:{},questions:n.quiz.questions.map(i=>({...i,prompt:t(`${i.id}.prompt`,i.prompt),...i.explanation?{explanation:t(`${i.id}.explanation`,i.explanation)}:{},answers:i.answers.map(s=>({...s,text:t(`${s.id}.text`,s.text)}))}))}}:{},...n.graph?{graph:{...n.graph,floors:n.graph.floors.map(i=>({...i,name:t(`floor:${i.id}.name`,i.name)}))}}:{},variables:n.variables.map(i=>typeof i.initial=="string"?{...i,initial:t(`var:${i.name}.initial`,i.initial)}:i)}}const gx=[{code:"en",label:"English"},{code:"pt",label:"Português"},{code:"pt-BR",label:"Português (Brasil)"},{code:"es",label:"Español"},{code:"fr",label:"Français"},{code:"de",label:"Deutsch"},{code:"it",label:"Italiano"},{code:"nl",label:"Nederlands"},{code:"pl",label:"Polski"},{code:"ru",label:"Русский"},{code:"tr",label:"Türkçe"},{code:"ar",label:"العربية"},{code:"zh",label:"中文"},{code:"ja",label:"日本語"},{code:"ko",label:"한국어"}],vx=n=>gx.find(e=>e.code===n)?.label??n;function _x(n){return n.scenes.some(e=>e.guide?.text||e.guide?.audio)?!0:!!n.quiz&&n.quiz.enabled!==!1&&n.quiz.questions.length>0}const ad=n=>n.points??1,ld=n=>n.trim().toLowerCase().replace(/\s+/g," ");function cd(n,e){if(n.kind==="text"){const s=(n.accept??[]).map(ld).filter(Boolean);return s.length?s.includes(ld(e[0]??"")):!1}const t=n.answers.filter(s=>s.correct).map(s=>s.id);if(!t.length)return!1;if(n.kind==="single")return e.length===1&&t.includes(e[0]);const i=new Set(e);return t.length===i.size&&t.every(s=>i.has(s))}function Sa(n){return n.kind==="text"?!(n.accept??[]).some(e=>e.trim()):!n.answers.some(e=>e.correct)}function xx(n,e){const t=n.questions.filter(l=>!Sa(l)),i=new Map(e.map(l=>[l.questionId,l.given]));let s=0,r=0;for(const l of t){const c=i.get(l.id);c&&cd(l,c)&&(s+=ad(l),r+=1)}const o=t.reduce((l,c)=>l+ad(c),0),a=o===0?100:Math.round(s/o*100);return{points:s,total:o,percent:a,correct:r,answered:n.questions.filter(l=>i.has(l.id)).length,questions:t.length,passed:n.passScore==null?null:a>=n.passScore}}function yx(n,e){const t=[...n];let i=e||1;for(let s=t.length-1;s>0;s-=1){i^=i<<13,i^=i>>>17,i^=i<<5;const r=Math.abs(i)%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t}const Ex=[{n:1,color:"#E5243B",title:"No Poverty"},{n:2,color:"#DDA63A",title:"Zero Hunger"},{n:3,color:"#4C9F38",title:"Good Health and Well-Being"},{n:4,color:"#C5192D",title:"Quality Education"},{n:5,color:"#FF3A21",title:"Gender Equality"},{n:6,color:"#26BDE2",title:"Clean Water and Sanitation"},{n:7,color:"#FCC30B",title:"Affordable and Clean Energy"},{n:8,color:"#A21942",title:"Decent Work and Economic Growth"},{n:9,color:"#FD6925",title:"Industry, Innovation and Infrastructure"},{n:10,color:"#DD1367",title:"Reduced Inequalities"},{n:11,color:"#FD9D24",title:"Sustainable Cities and Communities"},{n:12,color:"#BF8B2E",title:"Responsible Consumption and Production"},{n:13,color:"#3F7E44",title:"Climate Action"},{n:14,color:"#0A97D9",title:"Life Below Water"},{n:15,color:"#56C02B",title:"Life on Land"},{n:16,color:"#00689D",title:"Peace, Justice and Strong Institutions"},{n:17,color:"#19486A",title:"Partnerships for the Goals"}],Ma=n=>Ex.find(e=>e.n===n),Sx="#64748b";function wa(n){const e=n?.[0];return e!=null&&Ma(e)?.color||Sx}const Mx=new Map;let ba="";function wx(n){ba=n.replace(/\/+$/,"")}const bx=/^(?:[a-z]+:|\/\/)/i,Tx=n=>n.split("/").map(encodeURIComponent).join("/");function it(n){if(!n)return n;const e=Mx.get(n);return e||(!ba||bx.test(n)?n:`${ba}/${Tx(n.replace(/^\/+/,""))}`)}const Ta=new Set,Ot=new WeakMap,Si=new WeakMap,tn=new WeakMap,zs=new WeakMap,Aa=new WeakMap,Hs=new WeakMap,Mi=new WeakMap,ri=new WeakMap,ns=new WeakSet;let $t,Ca=0,Ra=0;const Hn="__aa_tgt",Vs="__aa_del",Kr="__aa_new",hd=n=>{const e=Px(n);e&&e.forEach(t=>Lx(t))},Ax=n=>{n.forEach(e=>{e.target===$t&&Cx(),Ot.has(e.target)&&wi(e.target)})};function dd(n){const e=n.getBoundingClientRect(),t=$t?.clientWidth||0,i=$t?.clientHeight||0;return e.bottom<0||e.top>i||e.right<0||e.left>t}function Pa(n){const e=zs.get(n);e?.disconnect();let t=Ot.get(n),i=0;const s=5;t||(t=is(n),Ot.set(n,t));const{offsetWidth:r,offsetHeight:o}=$t,l=[t.top-s,r-(t.left+s+t.width),o-(t.top+s+t.height),t.left-s].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++i>1&&wi(n)},{root:$t,threshold:1,rootMargin:l});c.observe(n),zs.set(n,c)}function wi(n,e=!0){clearTimeout(ri.get(n));const t=Jr(n),i=e?Gs(t)?500:t.duration:0;ri.set(n,setTimeout(async()=>{const s=tn.get(n);try{await s?.finished,Ot.set(n,is(n)),Pa(n)}catch{}},i))}function Cx(){clearTimeout(ri.get($t)),ri.set($t,setTimeout(()=>{Ta.forEach(n=>Qr(n,e=>ud(()=>wi(e))))},100))}function Rx(n){setTimeout(()=>{Hs.set(n,setInterval(()=>ud(wi.bind(null,n)),2e3))},Math.round(2e3*Math.random()))}function ud(n){typeof requestIdleCallback=="function"?requestIdleCallback(()=>n()):requestAnimationFrame(()=>n())}let Vn;const fd=typeof window<"u"&&"ResizeObserver"in window;fd&&($t=document.documentElement,new MutationObserver(hd),Vn=new ResizeObserver(Ax),window.addEventListener("scroll",()=>{Ra=window.scrollY,Ca=window.scrollX}),Vn.observe($t));function Px(n){return n.reduce((i,s)=>[...i,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(i=>i.nodeName==="#comment")?!1:n.reduce((i,s)=>{if(i===!1)return!1;if(s.target instanceof Element){if(La(s.target),!i.has(s.target)){i.add(s.target);for(let r=0;r<s.target.children.length;r++){const o=s.target.children.item(r);if(o){if(Vs in o)return!1;La(s.target,o),i.add(o)}}}if(s.removedNodes.length)for(let r=0;r<s.removedNodes.length;r++){const o=s.removedNodes[r];if(Vs in o)return!1;o instanceof Element&&(i.add(o),La(s.target,o),Si.set(o,[s.previousSibling,s.nextSibling]))}}return i},new Set)}function La(n,e){!e&&!(Hn in n)?Object.defineProperty(n,Hn,{value:n}):e&&!(Hn in e)&&Object.defineProperty(e,Hn,{value:n})}function Lx(n){var e,t;const i=n.isConnected,s=Ot.has(n);i&&Si.has(n)&&Si.delete(n),((e=tn.get(n))===null||e===void 0?void 0:e.playState)!=="finished"&&((t=tn.get(n))===null||t===void 0||t.cancel()),Kr in n?gd(n):s&&i?Ix(n):s&&!i?Nx(n):gd(n)}function bn(n){return Number(n.replace(/[^0-9.\-]/g,""))}function Dx(n){let e=n.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function is(n){const e=n.getBoundingClientRect(),{x:t,y:i}=Dx(n);return{top:e.top+i,left:e.left+t,width:e.width,height:e.height}}function pd(n,e,t){let i=e.width,s=e.height,r=t.width,o=t.height;const a=getComputedStyle(n);if(a.getPropertyValue("box-sizing")==="content-box"){const c=bn(a.paddingTop)+bn(a.paddingBottom)+bn(a.borderTopWidth)+bn(a.borderBottomWidth),u=bn(a.paddingLeft)+bn(a.paddingRight)+bn(a.borderRightWidth)+bn(a.borderLeftWidth);i-=u,r-=u,s-=c,o-=c}return[i,r,s,o].map(Math.round)}function Jr(n){return Hn in n&&Mi.has(n[Hn])?Mi.get(n[Hn]):{duration:250,easing:"ease-in-out"}}function md(n){if(Hn in n)return n[Hn]}function Da(n){const e=md(n);return e?ns.has(e):!1}function Qr(n,...e){e.forEach(t=>t(n,Mi.has(n)));for(let t=0;t<n.children.length;t++){const i=n.children.item(t);i&&e.forEach(s=>s(i,Mi.has(i)))}}function Ia(n){return Array.isArray(n)?n:[n]}function Gs(n){return typeof n=="function"}function Ix(n){const e=Ot.get(n),t=is(n);if(!Da(n))return Ot.set(n,t);if(dd(n)){Ot.set(n,t),Pa(n);return}let i;if(!e)return;const s=Jr(n);if(typeof s!="function"){let r=e.left-t.left,o=e.top-t.top;const a=e.left+e.width-(t.left+t.width);e.top+e.height-(t.top+t.height)==0&&(o=0),a==0&&(r=0);const[c,u,d,p]=pd(n,e,t),m={transform:`translate(${r}px, ${o}px)`},g={transform:"translate(0, 0)"};c!==u&&(m.width=`${c}px`,g.width=`${u}px`),d!==p&&(m.height=`${d}px`,g.height=`${p}px`),i=n.animate([m,g],{duration:s.duration,easing:s.easing})}else{const[r]=Ia(s(n,"remain",e,t));i=new Animation(r),i.play()}tn.set(n,i),Ot.set(n,t),i.addEventListener("finish",wi.bind(null,n,!1),{once:!0})}function gd(n){Kr in n&&delete n[Kr];const e=is(n);Ot.set(n,e);const t=Jr(n);if(!Da(n))return;if(dd(n)){Pa(n);return}let i;if(typeof t!="function")i=n.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:t.duration*1.5,easing:"ease-in"});else{const[s]=Ia(t(n,"add",e));i=new Animation(s),i.play()}tn.set(n,i),i.addEventListener("finish",wi.bind(null,n,!1),{once:!0})}function vd(n,e){var t;n.remove(),Ot.delete(n),Si.delete(n),tn.delete(n),(t=zs.get(n))===null||t===void 0||t.disconnect(),setTimeout(()=>{if(Vs in n&&delete n[Vs],Object.defineProperty(n,Kr,{value:!0,configurable:!0}),e&&n instanceof HTMLElement)for(const i in e)n.style[i]=""},0)}function Nx(n){var e;if(!Si.has(n)||!Ot.has(n))return;const[t,i]=Si.get(n);Object.defineProperty(n,Vs,{value:!0,configurable:!0});const s=window.scrollX,r=window.scrollY;if(i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(n,i):t&&t.parentNode?t.parentNode.appendChild(n):(e=md(n))===null||e===void 0||e.appendChild(n),!Da(n))return vd(n);const[o,a,l,c]=Fx(n),u=Jr(n),d=Ot.get(n);(s!==Ca||r!==Ra)&&Ux(n,s,r,u);let p,m={position:"absolute",top:`${o}px`,left:`${a}px`,width:`${l}px`,height:`${c}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!Gs(u))Object.assign(n.style,m),p=n.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"});else{const[g,v]=Ia(u(n,"remove",d));v?.styleReset!==!1&&(m=v?.styleReset||m,Object.assign(n.style,m)),p=new Animation(g),p.play()}tn.set(n,p),p.addEventListener("finish",()=>vd(n,m),{once:!0})}function Ux(n,e,t,i){const s=Ca-e,r=Ra-t,o=document.documentElement.style.scrollBehavior;if(getComputedStyle($t).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+s,window.scrollY+r),!n.parentElement)return;const l=n.parentElement;let c=l.clientHeight,u=l.clientWidth;const d=performance.now();function p(){requestAnimationFrame(()=>{if(!Gs(i)){const m=c-l.clientHeight,g=u-l.clientWidth;d+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-g,top:window.scrollY-m}),c=l.clientHeight,u=l.clientWidth,p()):document.documentElement.style.scrollBehavior=o}})}p()}function Fx(n){var e;const t=Ot.get(n),[i,,s]=pd(n,t,is(n));let r=n.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const o=getComputedStyle(r),a=!tn.has(n)||((e=tn.get(n))===null||e===void 0?void 0:e.playState)==="finished"?is(r):Ot.get(r),l=Math.round(t.top-a.top)-bn(o.borderTopWidth),c=Math.round(t.left-a.left)-bn(o.borderLeftWidth);return[l,c,i,s]}function Ox(n,e={}){if(fd&&Vn&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!Gs(e)&&!e.disrespectUserMotionPreference)){ns.add(n),getComputedStyle(n).position==="static"&&Object.assign(n.style,{position:"relative"}),Qr(n,wi,Rx,o=>Vn?.observe(o)),Gs(e)?Mi.set(n,e):Mi.set(n,{duration:250,easing:"ease-in-out",...e});const r=new MutationObserver(hd);r.observe(n,{childList:!0}),Aa.set(n,r),Ta.add(n)}return Object.freeze({parent:n,enable:()=>{ns.add(n)},disable:()=>{ns.delete(n),Qr(n,i=>{const s=tn.get(i);try{s?.cancel()}catch{}tn.delete(i);const r=ri.get(i);r&&clearTimeout(r),ri.delete(i);const o=Hs.get(i);o&&clearInterval(o),Hs.delete(i)})},isEnabled:()=>ns.has(n),destroy:()=>{ns.delete(n),Ta.delete(n),Mi.delete(n);const i=Aa.get(n);i?.disconnect(),Aa.delete(n),Qr(n,s=>{Vn?.unobserve(s);const r=tn.get(s);try{r?.cancel()}catch{}tn.delete(s);const o=zs.get(s);o?.disconnect(),zs.delete(s);const a=Hs.get(s);a&&clearInterval(a),Hs.delete(s);const l=ri.get(s);l&&clearTimeout(l),ri.delete(s),Ot.delete(s),Si.delete(s)})}})}const kx=180;function _d(n,e=kx){if(!n||!(n instanceof HTMLElement))return null;try{return Ox(n,{duration:e,easing:"cubic-bezier(0.22, 1, 0.36, 1)"})}catch{return null}}const Ws="data-tour-scene",Bx="data-tour-current",xd="data-tour-scenes",bi="data-tour-field",yd=new WeakMap;function zx(n){const e=yd.get(n);if(e)return e;const t=n.firstElementChild;if(!t)return null;const i=t.cloneNode(!0);return yd.set(n,i),i}function Hx(n,e){const t=n.matches(`[${bi}]`)?[n,...n.querySelectorAll(`[${bi}]`)]:[...n.querySelectorAll(`[${bi}]`)];for(const i of t)switch(i.getAttribute(bi)){case"name":i.textContent=e.name??"";break;case"subtitle":i.textContent=e.subtitle??"",e.subtitle?i.removeAttribute("hidden"):i.setAttribute("hidden","");break;case"thumb":e.thumbnail?(i.setAttribute("src",it(e.thumbnail)??e.thumbnail),i.removeAttribute("hidden")):(i.removeAttribute("src"),i.setAttribute("hidden",""));break}}function eo(n,e){for(const t of n.querySelectorAll(`[${xd}]`)){const i=zx(t);i&&t.replaceChildren(...e.map(s=>{const r=i.cloneNode(!0);return r.setAttribute(Ws,s.id),Hx(r,s),r}))}}function Ed(n,e,t={}){const i=o=>!t.skip||!t.skip.contains(o),s=o=>{const l=o.target?.closest?.(`[${Ws}]`),c=l?.getAttribute(Ws);!c||!i(l)||(o.preventDefault(),e.goToScene(c))},r=o=>{const a=o===void 0?e.sceneId:o;for(const l of n.querySelectorAll(`[${Ws}]`)){if(!i(l))continue;const c=l.getAttribute(Ws)===a;l.toggleAttribute(Bx,c),c?l.setAttribute("aria-current","location"):l.removeAttribute("aria-current")}};return n.addEventListener("click",s),r(),{update:r,destroy(){n.removeEventListener("click",s)}}}const Sd="tour-skin",Vx="tour-skin-style";function Gx(n,e,t){const i=n.querySelector(`:scope > .${Sd}`),s=i??document.createElement("div");i||(s.className=Sd,n.appendChild(s)),_d(s);let r=null;const o=u=>{if(!i){if(!u){r?.remove(),r=null;return}r||(r=document.createElement("style"),r.className=Vx,n.appendChild(r)),r.textContent=u}};let a=t.scenes;const l=u=>{s.innerHTML=u,eo(s,a)};i?eo(s,a):(l(t.html??""),o(t.css??""));const c=Ed(s,e);return{layer:s,update:c.update,setHtml(u){l(u),c.update()},setCss:o,setScenes(u){a=u,eo(s,a),c.update()},destroy(){c.destroy(),i||(s.remove(),r?.remove())}}}function Wx(n){return n.length<2?"":`<nav class="ts-rail" ${xd} aria-label="Scenes"><button class="ts-rail-item" type="button"><img class="ts-rail-thumb" ${bi}="thumb" alt="" hidden><span class="ts-rail-name" ${bi}="name"></span><span class="ts-rail-sub" ${bi}="subtitle" hidden></span></button></nav>`}function Xx(){return`.ts-rail {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  max-width: min(92%, 900px);
  padding: 6px;
  overflow-x: auto;
  border-radius: var(--tour-radius, 10px);
  background: rgba(18, 20, 24, 0.72);
  backdrop-filter: blur(8px);
  scrollbar-width: none;
}
.ts-rail::-webkit-scrollbar { display: none; }

.ts-rail-item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 108px;
  padding: 5px;
  border: 0;
  border-radius: calc(var(--tour-radius, 10px) - 4px);
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease-out;
}
.ts-rail-item:hover { background: rgba(255, 255, 255, 0.1); }

/* Hidden by the runtime on a scene that has no thumbnail, which is why the
   item is laid out to look right either way. */
.ts-rail-thumb {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.07);
}
.ts-rail-thumb[hidden] { display: none; }

.ts-rail-sub {
  display: block;
  padding: 0 3px;
  font-size: 10px;
  line-height: 1.3;
  opacity: 0.62;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ts-rail-sub[hidden] { display: none; }

.ts-rail-name {
  display: block;
  padding: 0 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* The runtime sets this on the link for the room you are in. */
.ts-rail-item[data-tour-current] {
  background: var(--tour-accent, #0099ff);
  color: #fff;
}
`}function $x(n){const e=n.skin?.html?.trim();return e?{html:e,css:n.skin?.css??""}:{html:Wx(n.scenes),css:Xx()}}/*!
 * Photo Sphere Viewer / Markers Plugin 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var qx=Object.defineProperty,Yx=(n,e)=>{for(var t in e)qx(n,t,{get:e[t],enumerable:!0})},jx={};Yx(jx,{EnterMarkerEvent:()=>Rd,GotoMarkerDoneEvent:()=>Na,HideMarkersEvent:()=>Xs,LeaveMarkerEvent:()=>Ad,MarkerVisibilityEvent:()=>wd,MarkersPluginEvent:()=>an,RenderMarkersListEvent:()=>Hd,SelectMarkerEvent:()=>Ld,SelectMarkerListEvent:()=>Id,SetMarkersEvent:()=>kd,ShowMarkersEvent:()=>$s,UnselectMarkerEvent:()=>Ud});var an=class extends ws{},Md=class Af extends an{constructor(e,t){super(Af.type),this.marker=e,this.visible=t}};Md.type="marker-visibility";var wd=Md,bd=class Cf extends an{constructor(e){super(Cf.type),this.marker=e}};bd.type="goto-marker-done";var Na=bd,Td=class Rf extends an{constructor(e){super(Rf.type),this.marker=e}};Td.type="leave-marker";var Ad=Td,Cd=class Pf extends an{constructor(e){super(Pf.type),this.marker=e}};Cd.type="enter-marker";var Rd=Cd,Pd=class Lf extends an{constructor(e,t,i){super(Lf.type),this.marker=e,this.doubleClick=t,this.rightClick=i}};Pd.type="select-marker";var Ld=Pd,Dd=class Df extends an{constructor(e){super(Df.type),this.marker=e}};Dd.type="select-marker-list";var Id=Dd,Nd=class If extends an{constructor(e){super(If.type),this.marker=e}};Nd.type="unselect-marker";var Ud=Nd,Fd=class Nf extends an{constructor(){super(Nf.type)}};Fd.type="hide-markers";var Xs=Fd,Od=class Uf extends an{constructor(e){super(Uf.type),this.markers=e}};Od.type="set-markers";var kd=Od,Bd=class Ff extends an{constructor(){super(Ff.type)}};Bd.type="show-markers";var $s=Bd,zd=class Of extends an{constructor(e){super(Of.type),this.markers=e}};zd.type="render-markers-list";var Hd=zd,Zx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,qs=class extends Vt{constructor(n){super(n,{className:"psv-markers-button",icon:Zx,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener($s.type,this),this.plugin.addEventListener(Xs.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener($s.type,this),this.plugin.removeEventListener(Xs.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(n){n instanceof $s?this.toggleActive(!0):n instanceof Xs&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};qs.id="markers";var Vd=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,to="http://www.w3.org/2000/svg",pt="psvMarker",Kx=ge.dasherize(pt),Ys="marker",ss="markersList",Ua={amount:2,duration:100,easing:"linear"},Jx=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Vd} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${n.map(t=>`
        <li data-${Kx}="${t.id}" class="psv-panel-menu-item" tabindex="0">
          ${t.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${t.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${t.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,no=class extends Vt{constructor(n){super(n,{className:" psv-markers-list-button",icon:Vd,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(_e.ShowPanelEvent.type,this),this.viewer.addEventListener(_e.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(_e.ShowPanelEvent.type,this),this.viewer.removeEventListener(_e.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(n){n instanceof _e.ShowPanelEvent?this.toggleActive(n.panelId===ss):n instanceof _e.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};no.id="markersList";var Gd=new I,Qx=new Xn,Wd=new I,ey=class extends Lt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}},Tn=new rt,ty=new rt,ny=class{constructor(e={}){const t=this;let i,s,r,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(f,h){const w=h.projectionMatrix.elements[5]*o;h.view&&h.view.enabled?(c.style.transform=`translate( ${-h.view.offsetX*(i/h.view.width)}px, ${-h.view.offsetY*(s/h.view.height)}px )`,c.style.transform+=`scale( ${h.view.fullWidth/h.view.width}, ${h.view.fullHeight/h.view.height} )`):c.style.transform="",f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld();let S,E;h.isOrthographicCamera&&(S=-(h.right+h.left)/2,E=(h.top+h.bottom)/2);const A=h.view&&h.view.enabled?h.view.height/h.view.fullHeight:1,C=h.isOrthographicCamera?`scale( ${A} )scale(`+w+")translate("+d(S)+"px,"+d(E)+"px)"+p(h.matrixWorldInverse):`scale( ${A} )translateZ(`+w+"px)"+p(h.matrixWorldInverse),D=(h.isPerspectiveCamera?"perspective("+w+"px) ":"")+C+"translate("+r+"px,"+o+"px)";a.camera.style!==D&&(u.style.transform=D,a.camera.style=D),v(f,f,h)},this.setSize=function(f,h){i=f,s=h,r=i/2,o=s/2,l.style.width=f+"px",l.style.height=h+"px",c.style.width=f+"px",c.style.height=h+"px",u.style.width=f+"px",u.style.height=h+"px"};function d(f){return Math.abs(f)<1e-10?0:f}function p(f){const h=f.elements;return"matrix3d("+d(h[0])+","+d(-h[1])+","+d(h[2])+","+d(h[3])+","+d(h[4])+","+d(-h[5])+","+d(h[6])+","+d(h[7])+","+d(h[8])+","+d(-h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(-h[13])+","+d(h[14])+","+d(h[15])+")"}function m(f){const h=f.elements;return"translate(-50%,-50%)"+("matrix3d("+d(h[0])+","+d(h[1])+","+d(h[2])+","+d(h[3])+","+d(-h[4])+","+d(-h[5])+","+d(-h[6])+","+d(-h[7])+","+d(h[8])+","+d(h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(h[13])+","+d(h[14])+","+d(h[15])+")")}function g(f){f.isCSS3DObject&&(f.element.style.display="none");for(let h=0,w=f.children.length;h<w;h++)g(f.children[h])}function v(f,h,w,S){if(f.visible===!1){g(f);return}if(f.isCSS3DObject){const E=f.layers.test(w.layers)===!0,A=f.element;if(A.style.display=E===!0?"":"none",E===!0){f.onBeforeRender(t,h,w);let C;f.isCSS3DSprite?(Tn.copy(w.matrixWorldInverse),Tn.transpose(),f.rotation2D!==0&&Tn.multiply(ty.makeRotationZ(f.rotation2D)),f.matrixWorld.decompose(Gd,Qx,Wd),Tn.setPosition(Gd),Tn.scale(Wd),Tn.elements[3]=0,Tn.elements[7]=0,Tn.elements[11]=0,Tn.elements[15]=1,C=m(Tn)):C=m(f.matrixWorld);const P=a.objects.get(f);if(P===void 0||P.style!==C){A.style.transform=C;const D={style:C};a.objects.set(f,D)}A.parentNode!==u&&u.appendChild(A),f.onAfterRender(t,h,w)}}for(let E=0,A=f.children.length;E<A;E++)v(f.children[E],h,w)}}},iy=class{constructor(n){this.viewer=n,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new ny({element:this.element}),this.scene=new vr,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(t=>{const i=t.target[pt];i.config.visible&&(i.viewportIntersection=t.isIntersecting)})},{root:this.element}),n.addEventListener(_e.ReadyEvent.type,this,{once:!0}),n.addEventListener(_e.SizeUpdatedEvent.type,this),n.addEventListener(_e.RenderEvent.type,this)}handleEvent(n){switch(n.type){case _e.ReadyEvent.type:case _e.SizeUpdatedEvent.type:this.updateSize();break;case _e.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.viewer.removeEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const n=this.viewer.getSize();this.renderer.setSize(n.width,n.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(n){this.scene.add(n.threeElement),this.intersectionObserver.observe(n.domElement)}removeObject(n){this.scene.remove(n.threeElement),this.intersectionObserver.unobserve(n.domElement)}},io=(n=>(n.image="image",n.html="html",n.element="element",n.imageLayer="imageLayer",n.videoLayer="videoLayer",n.elementLayer="elementLayer",n.polygon="polygon",n.polygonPixels="polygonPixels",n.polyline="polyline",n.polylinePixels="polylinePixels",n.square="square",n.rect="rect",n.circle="circle",n.ellipse="ellipse",n.path="path",n))(io||{});function Fa(n,e=!1){const t=[];if(Object.keys(io).forEach(i=>{n[i]&&t.push(i)}),t.length===0&&!e)throw new fe(`missing marker content, either ${Object.keys(io).join(", ")}`);if(t.length>1)throw new fe(`multiple marker content, either ${Object.keys(io).join(", ")}`);return t[0]}var Xd=class{constructor(n,e,t){if(this.viewer=n,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!t.id)throw new fe("missing marker id");this.type=Fa(t),this.createElement(),this.update(t)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(n){const e=Fa(n,!0);if(e!==void 0&&e!==this.type)throw new fe(`cannot change marker ${n.id} type`);if(this.config=ge.deepmerge(this.config,n),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),ge.isNil(this.config.visible)&&(this.config.visible=!0),ge.isNil(this.config.zIndex)&&(this.config.zIndex=1),ge.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const t=this.config.rotation;typeof t=="object"?this.config.rotation={yaw:t.yaw?ge.parseAngle(t.yaw,!0,!1):0,pitch:t.pitch?ge.parseAngle(t.pitch,!0,!1):0,roll:t.roll?ge.parseAngle(t.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:ge.parseAngle(t,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=ge.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(n,e,t=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const i={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(n||e){const s=ge.getPosition(this.viewer.container);i.top=e-s.y+10,i.left=n-s.x,i.box={width:20,height:20}}else i.top=this.state.position2D.y,i.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,o=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,o*=this.config.hoverScale.amount),i.top=s.y-o*this.state.anchor.y+o/2,i.left=s.x-r*this.state.anchor.x+r/2,i.box={width:r,height:o}}this.tooltip?t?this.tooltip.update(this.config.tooltip.content,i):this.tooltip.move(i):this.tooltip=this.viewer.createTooltip(i)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},Oa=class extends Xd{get domElement(){return this.element}constructor(n,e,t){super(n,e,t)}afterCreateElement(){this.element[pt]=this}destroy(){delete this.element[pt],super.destroy()}update(n){super.update(n);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&ge.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},so=class extends Oa{constructor(n,e,t){super(n,e,t)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:n,zoomLevel:e,hoveringMarker:t}){this.__updateSize();const i=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return i.x-=this.state.size.width*this.state.anchor.x,i.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&i.x+this.state.size.width>=0&&i.x-this.state.size.width<=this.viewer.state.size.width&&i.y+this.state.size.height>=0&&i.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${i.x}px ${i.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:n,mouseover:this===t}),i):null}update(n){if(super.update(n),!ge.isExtendedPosition(this.config.position))throw new fe(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(t){throw new fe(`invalid marker ${this.id} position`,t)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Ua:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?$e.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const n=this.domElement,e=!this.state.visible||!this.state.size;if(e&&n.classList.add("psv-marker--transparent"),this.isSvg()){const t=n.firstElementChild.getBoundingClientRect();this.state.size={width:t.width,height:t.height}}else this.state.size={width:n.offsetWidth,height:n.offsetHeight};e&&n.classList.remove("psv-marker--transparent"),this.isSvg()&&(n.style.width=this.state.size.width+"px",n.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:n,viewerPosition:e,mouseover:t}){t!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let i=1;if(typeof this.config.scale=="function")i=this.config.scale(n,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;i*=s+(r-s)*Ji.EASINGS.inQuad(n/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,o=$e.degToRad(this.viewer.state.hFov)/2,a=Math.abs(ge.getShortestArc(this.state.position.yaw,e.yaw));i*=r+(s-r)*Ji.EASINGS.outQuad(Math.max(0,(o-a)/o))}}t&&this.config.hoverScale&&(i*=this.config.hoverScale.amount),this.domElement.style.scale=`${i}`}},sy=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,ry=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,oy=class extends Un{get map(){return this.uniforms.map.value}set map(n){this.uniforms.map.value=n}set alpha(n){this.uniforms.alpha.value=n}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(n){this.uniforms.keying.value=n?.enabled===!0,n?.enabled&&(typeof n.color=="object"&&"r"in n.color?this.uniforms.color.value.set(n.color.r/255,n.color.g/255,n.color.b/255):this.uniforms.color.value.set(n.color??65280),this.uniforms.similarity.value=n.similarity??.2,this.uniforms.smoothness.value=n.smoothness??.2)}constructor(n){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:n?.map},repeat:{value:new Je(1,1)},offset:{value:new Je(0,0)},alpha:{value:n?.alpha??1},keying:{value:!1},color:{value:new et(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:ry,fragmentShader:sy}),this.chromaKey=n?.chromaKey}};function ay({src:n,withCredentials:e,muted:t,autoplay:i}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=i,s.muted=t,s.preload="metadata",n instanceof MediaStream?s.srcObject=n:s.src=n,s}function ly(n,e,t){const[i,s]=n,[r,o]=e,a=ge.greatArcDistance(n,e),l=Math.sin((1-t)*a)/Math.sin(a),c=Math.sin(t*a)/Math.sin(a),u=l*Math.cos(s)*Math.cos(i)+c*Math.cos(o)*Math.cos(r),d=l*Math.cos(s)*Math.sin(i)+c*Math.cos(o)*Math.sin(r),p=l*Math.sin(s)+c*Math.sin(o);return[Math.atan2(d,u),Math.atan2(p,Math.sqrt(u*u+d*d))]}function cy(n){const e=[n[0]];let t=0;for(let i=1;i<n.length;i++){const s=n[i-1][0]-n[i][0];s>Math.PI?t+=1:s<-Math.PI&&(t-=1),e.push([n[i][0]+t*2*Math.PI,n[i][1]])}return e}function $d(n){return n.reduce((e,t)=>e.add(t),new I).normalize()}function hy(n){const e=cy(n);let t=0;const i=[];for(let r=0;r<e.length-1;r++){const o=ge.greatArcDistance(e[r],e[r+1])*Ji.SPHERE_RADIUS;i.push(o),t+=o}let s=0;for(let r=0;r<e.length-1;r++){if(s+i[r]>t/2){const o=(t/2-s)/i[r];return ly(e[r],e[r+1],o)}s+=i[r]}return e[Math.round(e.length/2)]}var ro=new I,qd=new I,ka=new I,Yd=new I,jd=new I,Zd=new I;function dy(n,e,t){ro.copy(t).normalize(),qd.crossVectors(n,e).normalize(),ka.crossVectors(qd,n).normalize(),Yd.copy(n).multiplyScalar(-ro.dot(ka)),jd.copy(ka).multiplyScalar(ro.dot(n));const i=new I().addVectors(Yd,jd).normalize();return Zd.crossVectors(i,ro),i.applyAxisAngle(Zd,.01).multiplyScalar(Ji.SPHERE_RADIUS)}var uy=class extends Xd{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(n,e,t){super(n,e,t)}is3d(){return!0}createElement(){const n=new oy({alpha:0}),e=new qi(1,1),t=new Ft(e,n);t.userData={[pt]:this},Object.defineProperty(t,"visible",{enumerable:!0,get:function(){return this.userData[pt].config.visible},set:function(i){this.userData[pt].config.visible=i}}),this.element=new Fn().add(t),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[pt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(n){super.update(n);const e=this.threeMesh,t=e.parent,i=e.material;if(ge.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new fe(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new fe(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,t.position),t.lookAt(0,t.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const o=new I;return o.fromBufferAttribute(s,r),e.localToWorld(o)})}else{if(this.config.position?.length!==4)throw new fe(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(l=>this.viewer.dataHelper.cleanPosition(l))}catch(l){throw new fe(`invalid marker ${this.id} position`,l)}const r=s.map(l=>this.viewer.dataHelper.sphericalCoordsToVector3(l)),o=$d(r);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(o),this.state.positions3D=r;const a=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((l,c)=>{a.setX(c,l.x),a.setY(c,l.y),a.setZ(c,l.z)}),a.needsUpdate=!0,this.__setTextureWrap(i)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){i.map?.dispose();const s=ay({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new Up(s);i.map=r,i.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(i.alpha=this.config.opacity,ge.isExtendedPosition(this.config.position)||(e.material.userData[pt]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(i)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else i.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){i.map?.dispose();const s=new At;i.map=s,i.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(ge.isExtendedPosition(this.config.position)||(e.material.userData[pt]={width:r.width,height:r.height},this.__setTextureWrap(i)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,i.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else i.alpha=this.config.opacity;break}i.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(n){const e=n.userData[pt];if(!e||!e.height||!e.width){n.repeat.set(1,1),n.offset.set(0,0);return}const t=this.config.position.map(d=>this.viewer.dataHelper.cleanPosition(d)),i=ge.greatArcDistance([t[0].yaw,t[0].pitch],[t[1].yaw,t[1].pitch]),s=ge.greatArcDistance([t[3].yaw,t[3].pitch],[t[2].yaw,t[2].pitch]),r=ge.greatArcDistance([t[1].yaw,t[1].pitch],[t[2].yaw,t[2].pitch]),o=ge.greatArcDistance([t[0].yaw,t[0].pitch],[t[3].yaw,t[3].pitch]),a=(i+s)/(r+o),l=e.width/e.height;let c=0,u=0;a<l?c=l-a:u=1/l-1/a,n.repeat.set(1-c,1-u),n.offset.set(c/2,u/2)}},fy=class extends Oa{constructor(n,e,t){super(n,e,t),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new ey(this.element),this.object.userData={[pt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[pt].config.visible},set:function(n){this.userData[pt].config.visible=n}}),this.afterCreateElement()}destroy(){delete this.object.userData[pt],delete this.object,super.destroy()}render({viewerPosition:n,zoomLevel:e}){const t=this.domElement;if(this.state.size={width:t.offsetWidth,height:t.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:n,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(n){if(super.update(n),!ge.isExtendedPosition(this.config.position))throw new fe(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new fe(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,t=this.domElement;t.classList.add("psv-marker--css3d"),t.childNodes.forEach(i=>i.remove()),t.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},py=class extends so{constructor(n,e,t){super(n,e,t)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(n){const e=super.render(n);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:n.viewerPosition,zoomLevel:n.zoomLevel,viewerSize:this.viewer.state.size}),e}update(n){super.update(n);const e=this.domElement;if(this.config.image&&!this.config.size)throw new fe(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(t=>t.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},my=class extends Oa{constructor(n,e,t){super(n,e,t)}createElement(){this.element=document.createElementNS(to,"path"),this.element[pt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const n=this.__getAllPolyPositions();if(n[0].length>(this.isPolygon?2:1)){const t=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),i=n.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(o=>`${o.x-t.x},${o.y-t.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",i),this.domElement.setAttributeNS(null,"transform",`translate(${t.x} ${t.y})`),t}else return null}update(n){super.update(n);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([t,i])=>{e.setAttributeNS(null,ge.dasherize(t),i)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let t=this.config[this.type];if(!Array.isArray(t[0])&&typeof t[0]!="object")for(let i=0;i<t.length;i++)t.splice(i,2,[t[i],t[i+1]]);if(!Array.isArray(t[0][0])&&typeof t[0][0]!="object"&&(t=[t]),this.isPolyline&&t.length>1)throw new fe("polylines cannot have holes");this.isPixels?this.definition=t.map(i=>i.map(s=>{let r;return ge.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:s[0],textureY:s[1]}),[r.yaw,r.pitch]})):this.definition=t.map(i=>i.map(s=>{let r;return ge.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.cleanPosition({yaw:s[0],pitch:s[1]}),[r.yaw,r.pitch]}))}catch(t){throw new fe(`invalid marker ${this.id} position`,t)}if(this.positions3D=this.coords.map(t=>t.map(i=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:i[0],pitch:i[1]}))),this.isPolygon){const t=$d(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(t)}else{const t=hy(this.coords[0]);this.state.position={yaw:t[0],pitch:t[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(n=>this.__getPolyPositions(n))}__getPolyPositions(n){const e=n.length,t=n.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),i=[];return t.forEach((s,r)=>{s.visible||[r===0?t[e-1]:t[r-1],r===e-1?t[0]:t[r+1]].forEach(a=>{a.visible&&i.push({visible:a.vector,invisible:s.vector,index:r})})}),i.reverse().forEach(s=>{t.splice(s.index,0,{vector:dy(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),t.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},gy=class extends so{get svgElement(){return this.domElement.firstElementChild}constructor(n,e,t){super(n,e,t)}isSvg(){return!0}createElement(){const n=this.type==="square"?"rect":this.type,e=document.createElementNS(to,n);this.element=document.createElementNS(to,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(n){super.update(n);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([t,i])=>{e.setAttributeNS(null,t,i)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([t,i])=>{e.setAttributeNS(null,ge.dasherize(t),i)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},vy=ge.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(n){return n?(n===!0&&(n=Ua),typeof n=="number"&&(n={amount:n}),{...Ua,...n}):null}});function _y(n){switch(Fa(n,!1)){case"image":case"html":case"element":return py;case"imageLayer":case"videoLayer":return uy;case"elementLayer":return fy;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return my;case"square":case"rect":case"circle":case"ellipse":case"path":return gy;default:throw new fe("invalid marker type")}}var js=class kf extends pa{constructor(e,t){super(e,t),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",i=>i.preventDefault()),this.svgContainer=document.createElementNS(to,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new iy(e),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(e){return[kf,e]}init(){super.init(),ge.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(_e.ClickEvent.type,this),this.viewer.addEventListener(_e.DoubleClickEvent.type,this),this.viewer.addEventListener(_e.RenderEvent.type,this),this.viewer.addEventListener(_e.ConfigChangedEvent.type,this),this.viewer.addEventListener(_e.ObjectEnterEvent.type,this),this.viewer.addEventListener(_e.ObjectHoverEvent.type,this),this.viewer.addEventListener(_e.ObjectLeaveEvent.type,this),this.viewer.addEventListener(_e.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(pt),this.viewer.removeEventListener(_e.ClickEvent.type,this),this.viewer.removeEventListener(_e.DoubleClickEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.viewer.removeEventListener(_e.ObjectEnterEvent.type,this),this.viewer.removeEventListener(_e.ObjectHoverEvent.type,this),this.viewer.removeEventListener(_e.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(e){switch(e.type){case _e.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case _e.RenderEvent.type:this.renderMarkers();break;case _e.ClickEvent.type:this.__onClick(e,!1);break;case _e.DoubleClickEvent.type:this.__onClick(e,!0);break;case _e.ObjectEnterEvent.type:case _e.ObjectLeaveEvent.type:case _e.ObjectHoverEvent.type:if(e.userDataKey===pt){const t=e.originalEvent,i=e.object.userData[pt];switch(e.type){case _e.ObjectEnterEvent.type:i.config.style?.cursor?this.viewer.setCursor(i.config.style.cursor):(i.config.tooltip||i.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(t,i);break;case _e.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(i);break;case _e.ObjectHoverEvent.type:this.__onHoverMarker(t,i);break}}break;case"mouseenter":{const t=this.__getTargetMarker(ge.getEventTarget(e));this.__onEnterMarker(e,t);break}case"mouseleave":{const t=this.__getTargetMarker(ge.getEventTarget(e));this.__onLeaveMarker(t);break}case"mousemove":{const t=this.__getTargetMarker(ge.getEventTarget(e),!0);this.__onHoverMarker(e,t);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(e=>{e.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new $s)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(e=>{e.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new Xs)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!0,e.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!1,e.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(e,t=!0){if(this.markers[e.id])throw new fe(`marker "${e.id}" already exists`);const i=new(_y(e))(this.viewer,this,e);i.isPoly()?this.svgContainer.appendChild(i.domElement):i.isCss3d()?this.css3DContainer.addObject(i):i.is3d()?this.viewer.renderer.addObject(i.threeElement):this.container.appendChild(i.domElement),this.markers[i.id]=i,this.state.showAllTooltips&&(i.state.staticTooltip=!0),t&&this.__afterChangeMarkers()}getMarker(e){const t=typeof e=="object"?e.id:e;if(!this.markers[t])throw new fe(`cannot find marker "${t}"`);return this.markers[t]}getCurrentMarker(){return this.state.currentMarker}updateMarker(e,t=!0){const i=this.getMarker(e.id);i.update(e),t&&(this.__afterChangeMarkers(),(i===this.state.hoveringMarker&&i.config.tooltip?.trigger==="hover"||i.state.staticTooltip)&&i.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(e,t=!0){const i=this.getMarker(e);i.isPoly()?this.svgContainer.removeChild(i.domElement):i.isCss3d()?this.css3DContainer.removeObject(i):i.is3d()?this.viewer.renderer.removeObject(i.threeElement):this.container.removeChild(i.domElement),this.state.hoveringMarker===i&&(this.state.hoveringMarker=null),this.state.currentMarker===i&&(this.state.currentMarker=null),i.destroy(),delete this.markers[i.id],t&&this.__afterChangeMarkers()}removeMarkers(e,t=!0){e.forEach(i=>this.removeMarker(i,!1)),t&&this.__afterChangeMarkers()}setMarkers(e,t=!0){this.clearMarkers(!1),e?.forEach(i=>{this.addMarker(i,!1)}),t&&this.__afterChangeMarkers()}clearMarkers(e=!0){Object.keys(this.markers).forEach(t=>{this.removeMarker(t,!1)}),e&&this.__afterChangeMarkers()}gotoMarker(e,t=this.config.gotoMarkerSpeed){const i=this.getMarker(e);return t?this.viewer.animate({...i.state.position,zoom:i.config.zoomLvl,speed:t}).then(()=>{this.dispatchEvent(new Na(i))}):(this.viewer.rotate(i.state.position),ge.isNil(i.config.zoomLvl)||this.viewer.zoom(i.config.zoomLvl),this.dispatchEvent(new Na(i)),Promise.resolve())}hideMarker(e){this.toggleMarker(e,!1)}showMarker(e){this.toggleMarker(e,!0)}showMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!0,t.showTooltip()}hideMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!1,t.hideTooltip()}toggleMarker(e,t){const i=this.getMarker(e);i.config.visible=ge.isNil(t)?!i.config.visible:t,this.renderMarkers()}showMarkerPanel(e){const t=this.getMarker(e);t.config.content?this.viewer.panel.show({id:Ys,content:t.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(Ys)}toggleMarkersList(){this.viewer.panel.isVisible(ss)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let e=[];Object.values(this.markers).forEach(i=>{i.config.visible&&!i.config.hideList&&e.push(i)});const t=new Hd(e);this.dispatchEvent(t),e=t.markers,this.viewer.panel.show({id:ss,content:Jx(e,this.viewer.config.lang[qs.id]),noMargin:!0,clickHandler:i=>{const s=ge.getClosest(i,".psv-panel-menu-item"),r=s?s.dataset[pt]:void 0;if(r){const o=this.getMarker(r);this.dispatchEvent(new Id(o)),this.gotoMarker(o.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(ss)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const e=this.viewer.getZoomLevel(),t=this.viewer.getPosition(),i=this.state.hoveringMarker;Object.values(this.markers).forEach(s=>{let r=s.config.visible,o=!1,a=null;r&&(a=s.render({viewerPosition:t,zoomLevel:e,hoveringMarker:i}),r=!!a),o=s.state.visible!==r,s.state.visible=r,s.state.position2D=a,s.domElement&&ge.toggleClass(s.domElement,"psv-marker--visible",r),r?s.state.staticTooltip?s.showTooltip():s!==this.state.hoveringMarker&&s.hideTooltip():s.hideTooltip(),o&&(this.dispatchEvent(new wd(s,r)),(s.is3d()||s.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(e,t=!1){if(e instanceof Node){const i=t?ge.getClosest(e,".psv-marker"):e;return i?i[pt]:void 0}else return Array.isArray(e)?e.map(i=>i.userData[pt]).filter(i=>!!i).sort((i,s)=>s.config.zIndex-i.config.zIndex)[0]:null}__onEnterMarker(e,t){t&&(this.state.hoveringMarker=t,this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,this.dispatchEvent(new Rd(t)),t instanceof so&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onLeaveMarker(e){e&&(this.dispatchEvent(new Ad(e)),e instanceof so&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"?e.hideTooltip():e.state.staticTooltip&&e.showTooltip())}__onHoverMarker(e,t){t&&(this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,(t.isPoly()||t.is3d()||t.isCss3d())&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onClick(e,t){const i=this.__getTargetMarker(e.data.objects),r=this.__getTargetMarker(e.data.target,!0)||i;this.state.currentMarker&&this.state.currentMarker!==r&&(this.dispatchEvent(new Ud(this.state.currentMarker)),this.viewer.panel.hide(Ys),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),r&&(this.state.currentMarker=r,this.dispatchEvent(new Ld(r,t,e.data.rightclick)),this.config.clickEventOnMarker?e.data.marker=r:e.stopImmediatePropagation(),this.markers[r.id]&&!e.data.rightclick&&(r.config.tooltip?.trigger==="click"?r.tooltip?this.hideMarkerTooltip(r.id):this.showMarkerTooltip(r.id):this.showMarkerPanel(r.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new kd(this.getMarkers()))}__refreshUi(){const e=Object.values(this.markers).filter(t=>!t.config.hideList).length;e===0?(this.viewer.panel.hide(Ys),this.viewer.panel.hide(ss)):this.viewer.panel.isVisible(ss)?this.showMarkersList():this.viewer.panel.isVisible(Ys)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(qs.id,!1)?.toggle(e>0),this.viewer.navbar.getButton(no.id,!1)?.toggle(e>0)}__checkObjectsObserver(){Object.values(this.markers).some(t=>t.is3d())?this.viewer.observeObjects(pt):this.viewer.unobserveObjects(pt)}};js.id="markers",js.VERSION="5.14.1",js.configParser=vy,js.readonlyOptions=["markers"];var Kd=js;Bn.lang[qs.id]="Markers",Bn.lang[no.id]="Markers list",_a(qs,"caption:left"),_a(no,"caption:left");/*!
 * Photo Sphere Viewer / Virtual Tour Plugin 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var xy=Object.defineProperty,yy=(n,e)=>{for(var t in e)xy(n,t,{get:e[t],enumerable:!0})},Ey={};yy(Ey,{EnterArrowEvent:()=>tu,LeaveArrowEvent:()=>iu,NodeChangedEvent:()=>Qd});var Jd=class Bf extends ws{constructor(e,t){super(Bf.type),this.node=e,this.data=t}};Jd.type="node-changed";var Qd=Jd,eu=class zf extends ws{constructor(e,t){super(zf.type),this.link=e,this.node=t}};eu.type="enter-arrow";var tu=eu,nu=class Hf extends ws{constructor(e,t){super(Hf.type),this.link=e,this.node=t}};nu.type="leave-arrow";var iu=nu,Sy=class extends Lt{constructor(n=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=n,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Je(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(n,e){return super.copy(n,e),this.element=n.element.cloneNode(!0),this.center=n.center,this}},rs=new I,su=new rt,ru=new rt,ou=new I,au=new I,My=class{constructor(n={}){const e=this;let t,i,s,r;const o={objects:new WeakMap},a=n.element!==void 0?n.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a,this.getSize=function(){return{width:t,height:i}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),su.copy(g.matrixWorldInverse),ru.multiplyMatrices(g.projectionMatrix,su),c(m,m,g),p(m)},this.setSize=function(m,g){t=m,i=g,s=t/2,r=i/2,a.style.width=m+"px",a.style.height=g+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let g=0,v=m.children.length;g<v;g++)l(m.children[g])}function c(m,g,v){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){rs.setFromMatrixPosition(m.matrixWorld),rs.applyMatrix4(ru);const f=rs.z>=-1&&rs.z<=1&&m.layers.test(v.layers)===!0,h=m.element;h.style.display=f===!0?"":"none",f===!0&&(m.onBeforeRender(e,g,v),h.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(rs.x*s+s)+"px,"+(-rs.y*r+r)+"px)",h.parentNode!==a&&a.appendChild(h),m.onAfterRender(e,g,v));const w={distanceToCameraSquared:u(v,m)};o.objects.set(m,w)}for(let f=0,h=m.children.length;f<h;f++)c(m.children[f],g,v)}function u(m,g){return ou.setFromMatrixPosition(m.matrixWorld),au.setFromMatrixPosition(g.matrixWorld),ou.distanceToSquared(au)}function d(m){const g=[];return m.traverseVisible(function(v){v.isCSS2DObject&&g.push(v)}),g}function p(m){const g=d(m).sort(function(f,h){if(f.renderOrder!==h.renderOrder)return h.renderOrder-f.renderOrder;const w=o.objects.get(f).distanceToCameraSquared,S=o.objects.get(h).distanceToCameraSquared;return w-S}),v=g.length;for(let f=0,h=g.length;f<h;f++)g[f].element.style.zIndex=v-f}}},lu=new I,wy=new Xn,cu=new I,by=class extends Lt{constructor(n=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=n,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(n,e){return super.copy(n,e),this.element=n.element.cloneNode(!0),this}},An=new rt,Ty=new rt,Ay=class{constructor(n={}){const e=this;let t,i,s,r;const o={camera:{style:""},objects:new WeakMap},a=n.element!==void 0?n.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",a.appendChild(l);const c=document.createElement("div");c.style.transformStyle="preserve-3d",l.appendChild(c),this.getSize=function(){return{width:t,height:i}},this.render=function(v,f){const h=f.projectionMatrix.elements[5]*r;f.view&&f.view.enabled?(l.style.transform=`translate( ${-f.view.offsetX*(t/f.view.width)}px, ${-f.view.offsetY*(i/f.view.height)}px )`,l.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):l.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let w,S;f.isOrthographicCamera&&(w=-(f.right+f.left)/2,S=(f.top+f.bottom)/2);const E=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,A=f.isOrthographicCamera?`scale( ${E} )scale(`+h+")translate("+u(w)+"px,"+u(S)+"px)"+d(f.matrixWorldInverse):`scale( ${E} )translateZ(`+h+"px)"+d(f.matrixWorldInverse),P=(f.isPerspectiveCamera?"perspective("+h+"px) ":"")+A+"translate("+s+"px,"+r+"px)";o.camera.style!==P&&(c.style.transform=P,o.camera.style=P),g(v,v,f)},this.setSize=function(v,f){t=v,i=f,s=t/2,r=i/2,a.style.width=v+"px",a.style.height=f+"px",l.style.width=v+"px",l.style.height=f+"px",c.style.width=v+"px",c.style.height=f+"px"};function u(v){return Math.abs(v)<1e-10?0:v}function d(v){const f=v.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function p(v){const f=v.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function m(v){v.isCSS3DObject&&(v.element.style.display="none");for(let f=0,h=v.children.length;f<h;f++)m(v.children[f])}function g(v,f,h,w){if(v.visible===!1){m(v);return}if(v.isCSS3DObject){const S=v.layers.test(h.layers)===!0,E=v.element;if(E.style.display=S===!0?"":"none",S===!0){v.onBeforeRender(e,f,h);let A;v.isCSS3DSprite?(An.copy(h.matrixWorldInverse),An.transpose(),v.rotation2D!==0&&An.multiply(Ty.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(lu,wy,cu),An.setPosition(lu),An.scale(cu),An.elements[3]=0,An.elements[7]=0,An.elements[11]=0,An.elements[15]=1,A=p(An)):A=p(v.matrixWorld);const C=o.objects.get(v);if(C===void 0||C.style!==A){E.style.transform=A;const P={style:A};o.objects.set(v,P)}E.parentNode!==c&&c.appendChild(E),v.onAfterRender(e,f,h)}}for(let S=0,E=v.children.length;S<E;S++)g(v.children[S],f,h)}}},Cy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill-rule="even-odd" fill="currentColor" d="
        M50,50 m45,0
        a45,45 0 1,0 -90,0
        a45,45 0 1,0  90,0

        M50,50 m38,0
        a38,38 0 0,1 -76,0
        a38,38 0 0,1  76,0

        M50,50 m30,0
        a30,30 0 1,0 -60,0
        a30,30 0 1,0  60,0
        
        M50,40 m2.5,-2.5
        l17.5,17.5
        a 2.5,2.5 0 0 1 -5,5
        l-15,-15
        l-15,15
        a 2.5,2.5 0 0 1 -5,-5
        l17.5,-17.5
        a 3.5,3.5 0 0 1 5,0
    "/>
</svg>`,oo="tourLink",os="__tour-link__",Ry={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},Py={element:()=>{const n=document.createElement("button");return n.className="psv-virtual-tour-arrow",n.innerHTML=Cy,n},size:{width:80,height:80}},Ba="arrow",Ly=class extends si{constructor(n,e){super(n,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new Ay({element:this.container}):new My({element:this.container}),this.camera=this.is3D?new Qt(30,1):null,this.scene=new vr,this.viewer.addEventListener(_e.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(_e.PositionUpdatedEvent.type,this),this.viewer.addEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.addEventListener(_e.RenderEvent.type,this),this.viewer.addEventListener(_e.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",t=>t.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.viewer.removeEventListener(_e.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.viewer.removeEventListener(_e.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(n){switch(n.type){case _e.ReadyEvent.type:case _e.SizeUpdatedEvent.type:case _e.PositionUpdatedEvent.type:this.__updateCamera();break;case _e.RenderEvent.type:this.render();break;case _e.ClickEvent.type:{if(n.data.rightclick)break;const e=this.__getTargetLink(n.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(ge.getEventTarget(n));e&&this.plugin.__onEnterArrow(e,n);break}case"mouseleave":{const e=this.__getTargetLink(ge.getEventTarget(n));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(ge.getEventTarget(n),!0)&&this.plugin.__onHoverArrow(n);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":n.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const n=this.viewer.getSize();if(this.renderer.setSize(n.width,n.height),this.is3D){const e=this.viewer.getPosition();e.pitch=$e.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,n.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(n.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const n=this.viewer.getPosition(),e=[];let t=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(i=>{const s=i.userData[Ba];if(s.conflict){const r=Math.abs(ge.getShortestArc(n.yaw,s.yaw));t=Math.min(t,r),e.push([i,r])}}),e.forEach(([i,s])=>{const r=s!==t;i.element.style.opacity=r?"0.5":null,i.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(n,e){if(e?.image){const t=document.createElement("img");return t.src=e.image,t}else if(e?.element)return typeof e.element=="function"?e.element(n):e.element}addLinkArrow(n,e,t=1){let i=this.__buildArrowElement(n,n.arrowStyle);i||(i=this.__buildArrowElement(n,this.arrowStyle)),i[oo]=n;const s={...this.arrowStyle,...n.arrowStyle};if(i.classList.add("psv-virtual-tour-link"),s.className&&ge.addClasses(i,s.className),s.style&&Object.assign(i.style,s.style),this.is3D){i.style.width=s.size.width*1.5+"px",i.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(a=>{const l=a.userData[Ba];Math.abs(ge.getShortestArc(l.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(l.conflict=!0,r=!0)});const o=new by(i);o.userData[Ba]={yaw:e.yaw,conflict:r},o.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},o.position,t*100),this.scene.add(o)}else{i.style.width=s.size.width+"px",i.style.height=s.size.height+"px",i.style.pointerEvents="auto";const r=new Sy(i);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(n,e=!1){const t=e?ge.getClosest(n,".psv-virtual-tour-link"):n;return t?t[oo]:void 0}__onToggleGallery(n){n?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},hu=class{constructor(n,e){this.plugin=n,this.viewer=e,this.nodes={}}destroy(){}checkNode(n){if(!n.id)throw new fe("No id given for node");if(!n.panorama)throw new fe(`No panorama provided for node ${n.id}`);if(this.plugin.isGps&&!(n.gps?.length>=2))throw new fe(`No GPS position provided for node ${n.id}`);if(!this.plugin.isGps&&n.markers?.some(e=>e.gps&&!e.position))throw new fe("Cannot use GPS positioning for markers in manual mode");n.links||(ge.logWarn(`Node ${n.id} has no links`),n.links=[])}checkLink(n,e){if(!e.nodeId)throw new fe(`Link of node ${n.id} has no target id`);if(e.nodeId===n.id)throw new fe(`Node ${n.id} links to itself`);if(!this.plugin.isGps&&!ge.isExtendedPosition(e.position))throw new fe(`No position provided for link ${e.nodeId} of node ${n.id}`);if(this.plugin.isGps&&!e.gps)throw new fe(`No GPS position provided for link ${e.nodeId} of node ${n.id}`)}},Dy=class extends hu{async loadNode(n){if(this.nodes[n])return this.nodes[n];throw new fe(`Node ${n} not found`)}setNodes(n){if(!n?.length)throw new fe("No nodes provided");const e={},t={};n.forEach(i=>{if(this.checkNode(i),e[i.id])throw new fe(`Duplicate node ${i.id}`);e[i.id]=i}),n.forEach(i=>{this.__checkLinks(i,e),i.links.forEach(s=>{t[s.nodeId]=!0})}),n.forEach(i=>{t[i.id]||ge.logWarn(`Node ${i.id} is never linked to`)}),this.nodes=e}updateNode(n){if(!n.id)throw new fe("No id given for node");const e=this.nodes[n.id];if(!e)throw new fe(`Node ${n.id} does not exist`);return Object.assign(e,n),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(n,e){n.links.forEach(t=>{if(!e[t.nodeId])throw new fe(`Target node ${t.nodeId} of node ${n.id} does not exists`);t.gps=t.gps||e[t.nodeId].gps,this.checkLink(n,t)})}},Iy=class extends hu{constructor(n,e){if(super(n,e),!n.config.getNode)throw new fe("Missing getNode() option.");this.nodeResolver=n.config.getNode}async loadNode(n){if(this.nodes[n])return this.nodes[n];{const e=await this.nodeResolver(n);return this.checkNode(e),e.links.forEach(t=>{this.checkLink(e,t)}),this.nodes[n]=e,e}}clearCache(){this.nodes={}}};function du(n,e){const t=uu(n),i=uu(e),s=n[2]??0,r=e[2]??0;let o=0;return s!==r&&(o=Math.atan((r-s)/Ny(t,i))),{yaw:Uy(t,i),pitch:o}}function uu(n){return[$e.degToRad(n[0]),$e.degToRad(n[1])]}function Ny(n,e){return ge.greatArcDistance(n,e)*6371e3}function Uy(n,e){const[t,i]=n,[s,r]=e,o=Math.sin(s-t)*Math.cos(r),a=Math.cos(i)*Math.sin(r)-Math.sin(i)*Math.cos(r)*Math.cos(s-t);return Math.atan2(o,a)}var za=ge.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:Py,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(n){if(n!=="client"&&n!=="server")throw new fe("VirtualTourPlugin: invalid dataMode");return n},positionMode(n){if(n!=="gps"&&n!=="manual")throw new fe("VirtualTourPlugin: invalid positionMode");return n},renderMode(n){if(n!=="3d"&&n!=="2d")throw new fe("VirtualTourPlugin: invalid renderMode");return n},arrowsPosition(n,{defValue:e}){return{...e,...n}},arrowStyle(n,{defValue:e}){return{...e,...n}},map(n,{rawConfig:e}){if(n){if(e.dataMode==="server")return ge.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!n.imageUrl)return ge.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null;"recenter"in n||(n.recenter=!0)}return n}}),Zs=class Vf extends pa{constructor(e,t){super(e,t),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new Ly(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}static withConfig(e){return[Vf,e]}init(){super.init(),this.arrowsRenderer.init(),ge.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(ge.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&ge.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new Iy(this,this.viewer):new Dy(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(e){if(e instanceof _e.ClickEvent){const t=e.data.objects.find(i=>i.userData[oo])?.userData[oo];t&&this.setCurrentNode(t.nodeId,null,t)}else if(e.type==="select-hotspot"){const t=e.hotspotId;t.startsWith(os)&&this.setCurrentNode(t.substring(os.length))}}getCurrentNode(){return this.state.currentNode}setNodes(e,t){if(this.isServerSide)throw new fe("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(e),t?this.datasource.nodes[t]||(t=e[0].id,ge.logWarn(`startNodeId not found is provided nodes, resetted to ${t}`)):t=e[0].id,this.setCurrentNode(t),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(e,t,i){if(e===this.state.currentNode?.id&&!t?.forceUpdate)return Promise.resolve(!0);t?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=e;const s=this.state.currentNode,r=s&&i?this.__getLinkPosition(s,i):null;return Promise.resolve(this.state.preload[e]).then(()=>{if(this.state.loadingNode!==e)throw ge.getAbortError();return this.datasource.loadNode(e)}).then(o=>{if(this.state.loadingNode!==e)throw ge.getAbortError();const a={...za.defaults.transitionOptions,rotateTo:r,zoomTo:r?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(o,s,i):this.config.transitionOptions,...t};return a.effect||(a.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),a.rotation&&a.effect==="none"?this.viewer.animate({...a.rotateTo,zoom:a.zoomTo,speed:a.speed}).then(()=>[o,a]):Promise.resolve([o,a])}).then(([o,a])=>{if(this.state.loadingNode!==e)throw ge.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(o.panorama,{caption:o.caption,description:o.description,panoData:o.panoData,sphereCorrection:o.sphereCorrection,showLoader:a.showLoader,position:a.rotateTo,zoom:a.zoomTo,transition:a.effect==="none"?!1:{effect:a.effect,rotation:a.rotation,speed:a.speed}}).then(l=>{if(!l)throw ge.getAbortError();return o})}).then(o=>{if(this.state.loadingNode!==e)throw ge.getAbortError();return this.state.currentNode=o,this.map&&this.map.setCenter(this.__getNodeMapPosition(o)??this.map.config.center,this.config.map.recenter),this.plan?.setCoordinates(o.gps),this.__addNodeMarkers(o),this.__renderLinks(o),this.__preload(o),this.state.loadingNode=null,this.dispatchEvent(new Qd(o,{fromNode:s,fromLink:i,fromLinkPosition:r})),this.viewer.resetIdleTimer(),!0}).catch(o=>{if(ge.isAbortError(o))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,o})}async gotoLink(e,t="8rpm"){const i=this.getLinkPosition(e);t?await this.viewer.animate({...i,speed:t}):this.viewer.rotate(i)}getLinkPosition(e){const t=this.state.currentNode?.links.find(i=>i.nodeId===e);if(!t)throw new fe(`Cannot find link "${e}"`);return this.__getLinkPosition(this.state.currentNode,t)}updateNode(e){if(this.isServerSide)throw new fe("Cannot update node in server side mode");const t=this.datasource.updateNode(e);if((e.name||e.thumbnail||e.panorama)&&this.__setGalleryItems(),(e.name||e.gps||e.map)&&this.__setMapHotspots(),(e.name||e.gps||e.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===t.id){if(this.__hideTooltip(),e.panorama||e.panoData||e.sphereCorrection){this.setCurrentNode(t.id,{forceUpdate:!0});return}e.caption&&this.viewer.setOption("caption",t.caption),e.description&&this.viewer.setOption("description",t.description),(e.links||e.gps)&&this.__renderLinks(t),e.gps&&this.plan?.setCoordinates(t.gps),(e.map||e.gps)&&this.map?.setCenter(this.__getNodeMapPosition(t)),(e.markers||e.gps)&&this.__addNodeMarkers(t)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(e=>e.showInGallery!==!1).map(e=>({id:e.id,panorama:e.panorama,name:e.name,thumbnail:e.thumbnail})),e=>{this.setCurrentNode(e)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.map!==!1).map(e=>({tooltip:e.name,...e.map||{},...this.__getNodeMapPosition(e),id:os+e.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.plan!==!1).map(e=>({tooltip:e.name,...e.plan||{},coordinates:e.gps,id:os+e.id})))}__renderLinks(e){this.arrowsRenderer.clear();const t=[];e.links.forEach(i=>{const s=this.__getLinkPosition(e,i);s.yaw+=i.linkOffset?.yaw??0,s.pitch+=i.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(s.pitch+=this.config.arrowsPosition.linkPitchOffset),t.push(s),this.arrowsRenderer.addLinkArrow(i,s,i.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(t)}__getLinkPosition(e,t){return this.isGps?du(e.gps,t.gps):this.viewer.dataHelper.cleanPosition(t.position)}async __getTooltipContent(e){const t=await this.datasource.loadNode(e.nodeId),i=[];(t.name||t.thumbnail||t.caption)&&(t.name&&i.push(`<h3>${t.name}</h3>`),t.thumbnail&&i.push(`<img src="${t.thumbnail}">`),t.caption&&i.push(`<p>${t.caption}</p>`));let s=i.join("");return this.config.getLinkTooltip&&(s=this.config.getLinkTooltip(s,e,t)),s}__onEnterArrow(e,t){const i=ge.getPosition(this.viewer.container),s={x:t.clientX-i.x,y:t.clientY-i.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...Ry,left:s.x,top:s.y,box:{width:20,height:20}}),this.__getTooltipContent(e).then(r=>{r?this.state.currentTooltip.update(r):this.__hideTooltip()})),this.map?.setActiveHotspot(os+e.nodeId),this.plan?.setActiveHotspot(os+e.nodeId),this.dispatchEvent(new tu(e,this.state.currentNode))}__onHoverArrow(e){const t=ge.getPosition(this.viewer.container),i={x:e.clientX-t.x,y:e.clientY-t.y};this.state.currentTooltip?.move({left:i.x,top:i.y})}__onLeaveArrow(e){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new iu(e,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(e){this.config.preload&&(this.state.preload[e.id]=!0,this.state.currentNode.links.filter(t=>!this.state.preload[t.nodeId]).filter(t=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,t):!0).forEach(t=>{this.state.preload[t.nodeId]=this.datasource.loadNode(t.nodeId).then(i=>this.viewer.textureLoader.preloadPanorama(i.panorama)).then(()=>{this.state.preload[t.nodeId]=!0}).catch(()=>{delete this.state.preload[t.nodeId]})}))}__addNodeMarkers(e){e.markers&&(this.markers?this.markers.setMarkers(e.markers.map(t=>(t.gps&&this.isGps&&(t.position=du(e.gps,t.gps),t.data?.map&&Object.assign(t.data.map,this.__getGpsMapPosition(t.gps)),t.data?.plan&&(t.data.plan.coordinates=t.gps)),t))):ge.logWarn(`Node ${e.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(e){const t=this.__getGpsMapPosition(e.gps);return t||(e.map?{x:e.map.x,y:e.map.y}:null)}__getGpsMapPosition(e){const t=this.config.map;return this.isGps&&t&&t.extent&&t.size?{x:$e.mapLinear(e[0],t.extent[0],t.extent[2],0,t.size.width),y:$e.mapLinear(e[1],t.extent[1],t.extent[3],0,t.size.height)}:null}};Zs.id="virtual-tour",Zs.VERSION="5.14.1",Zs.configParser=za,Zs.readonlyOptions=Object.keys(za.defaults);var fu=Zs;class Fy{constructor(){nt(this,"clips",new Map);nt(this,"ambientEl",null);nt(this,"ambientSrc",null);nt(this,"muted",!1)}element(e){let t=this.clips.get(e);if(!t){if(typeof Audio>"u")return null;t=new Audio(e),this.clips.set(e,t)}return t}start(e,t){e.loop=!!t.loop,e.volume=t.volume??1,e.muted=this.muted,e.play().catch(()=>{})}play(e,t={}){const i=it(e);if(!i)return;const s=this.element(i);s&&this.start(s,t)}toggle(e,t={}){const i=it(e);if(!i)return;const s=this.clips.get(i);if(s&&!s.paused){s.pause();return}const r=this.element(i);r&&this.start(r,t)}stop(e){const t=it(e),i=t?this.clips.get(t):void 0;i&&(i.pause(),i.currentTime=0)}setAmbient(e,t={}){const i=e?it(e)??null:null;i!==this.ambientSrc&&(this.ambientEl?.pause(),this.ambientEl=null,this.ambientSrc=i,!(!i||typeof Audio>"u")&&(this.ambientEl=new Audio(i),this.start(this.ambientEl,{loop:!0,...t})))}setMuted(e){this.muted=e;for(const t of this.clips.values())t.muted=e;this.ambientEl&&(this.ambientEl.muted=e)}isMuted(){return this.muted}stopAll(){for(const e of this.clips.values())e.pause();this.clips.clear(),this.ambientEl?.pause(),this.ambientEl=null,this.ambientSrc=null}}const Oy=new Set(["info","none"]);function ky(n){return[...n].sort((e,t)=>(e.type==="goto"?1:0)-(t.type==="goto"?1:0))}function pu(n,e){const t=[];for(const i of ky(n)){if(i.if&&e.variables&&!e.variables.test(i.if))continue;let s=!0;switch(i.type){case"goto":if(!i.targetSceneId)break;e.goTo?e.goTo(i.targetSceneId,i.landing,i.transition):s=!1;break;case"look":e.lookAt?e.lookAt(i.yaw,i.pitch,i.zoom):s=!1;break;case"toggle":if(!i.targetIds?.length)break;e.toggleHotspots?e.toggleHotspots(i.targetIds,i.mode):s=!1;break;case"video":if(!i.url)break;e.playVideo?e.playVideo(i.url):s=!1;break;case"url":if(!i.url)break;e.openUrl?e.openUrl(i.url,i.target):s=!1;break;case"audio":if(!i.url)break;e.playAudio?e.playAudio(i.url,!!i.loop):s=!1;break;case"image":{const r=e.resolveMedia?.(i.imageAssetId,i.imageSrc)??i.imageSrc;if(!r)break;e.showImage?e.showImage(r):s=!1;break}case"panel":if(!i.panelId)break;e.openPanel?e.openPanel(i.panelId,i.mode,i.content):s=!1;break;case"setVar":e.variables?s=e.variables.apply(i):s=!1;break;case"animate":if(!i.targetIds?.length)break;e.animate?e.animate(i.targetIds,i.animation,i.durationMs):s=!1;break;case"narrate":{const r=e.resolveMedia?.(i.audioAssetId,void 0);if(!i.text&&!r)break;e.narrate?e.narrate({text:i.text,src:r,voice:i.voice}):s=!1;break}case"model3d":{const r=e.resolveMedia?.(i.assetId,i.src)??i.src;if(!r)break;e.showModel?e.showModel(r,i.scale):s=!1;break}default:s=Oy.has(i.type);break}s?t.push(i.type):e.onUnsupported?.(i)}return t}const oi=(n,e=!1)=>`<svg viewBox="0 0 24 24" width="100%" height="100%" fill="${e?"currentColor":"none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`,mu={pin:oi('<path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),arrow:oi('<path d="M5 12h14M13 6l6 6-6 6"/>'),info:oi('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),circle:oi('<circle cx="12" cy="12" r="8"/>'),plus:oi('<path d="M12 5v14M5 12h14"/>'),eye:oi('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'),dot:oi('<circle cx="12" cy="12" r="6"/>',!0),play:oi('<path d="M8 5v14l11-7z"/>',!0)};function By(n){return mu[n]??mu.circle}const zy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wt=n=>n.replace(/[&<>"']/g,e=>zy[e]),gu=(n,e)=>e?n.find(t=>t.id===e):void 0;function Hy(n,e){const t=gu(e,n.iconAssetId);return t?.kind==="svg"&&t.svg?t.svg:t?.kind==="image"&&t.src?`<img src="${wt(it(t.src))}" alt="" draggable="false" />`:By(n.builtinIcon)}const Vy=new Set(["pulse","echo","strobe","glow"]);function Ha(n,e){const t=gu(e,n.imageAssetId);return t?.kind==="image"&&t.src?it(t.src):it(n.imageSrc)}function vu(n){const e=n.borderWidth?`border:${n.borderWidth}px ${n.borderStyle||"solid"} ${n.borderColor||"#ffffff"};`:"";return`color:${n.iconColor};background:${n.background||"transparent"};border-radius:${n.radius}px;padding:${n.padding}px;`+e}function _u(n,e){return`--hs-hover-scale:${n.hoverScale??1.08};--hs-hover-bg:${n.hoverColor||n.background||"transparent"};`+(n.opacity!=null&&n.opacity<1?`opacity:${n.opacity};`:"")+(e?`--fx-color:${n.effectColor||"#3b82f6"};--fx-op:${n.effectOpacity??.7};--fx-speed:${n.effectSpeed??1.6};--fx-size:${n.effectSize??44};--fx-stroke:${n.effectStroke??2};--fx-radius:${n.radius}`:"")}function Gy(n,e,t){const i=t??n.style;if(n.form==="html")return`<div class="vtc-hotspot vtc-hotspot--html">${n.html??""}</div>`;if(n.form==="text"){const a=i.background?`background:${i.background};padding:${i.padding}px;border-radius:${i.radius}px;`:"";return`<div class="vtc-hotspot vtc-hotspot--text" style="color:${i.textColor||"#fff"};font-size:${i.fontSize||16}px;${a}">${wt(i.text||"Text")}</div>`}if(n.form==="callout"){const a=n.callout??{dx:90,dy:-60},l=a.lineColor||i.borderColor||i.textColor||"#fff",c=a.lineWidth??2,u=a.anchorSize??7,d=a.elbow,p=Math.max(Math.abs(a.dx),Math.abs(a.dy),Math.abs(d?.dx??0),Math.abs(d?.dy??0))+c+2,m=p,g=d?`${m},${m} ${m+d.dx},${m+d.dy} ${m+a.dx},${m+a.dy}`:`${m},${m} ${m+a.dx},${m+a.dy}`,v=`<div class="vtc-callout__card" style="${vu(i)}color:${i.textColor||"#fff"};font-size:${i.fontSize||14}px;max-width:${a.maxWidth??200}px;transform:translate(calc(-50% + ${a.dx}px), calc(-50% + ${a.dy}px));">${wt(i.text||n.name)}</div>`;return`<div class="vtc-hotspot vtc-callout" style="${_u(i,null)}"><svg class="vtc-callout__leader" width="${p*2}" height="${p*2}" style="margin-left:${-p}px;margin-top:${-p}px" aria-hidden="true"><polyline points="${g}" fill="none" stroke="${l}" stroke-width="${c}" stroke-linejoin="round" stroke-linecap="round" />`+(u>0?`<circle cx="${m}" cy="${m}" r="${u/2}" fill="${l}" />`:"")+`</svg>${v}</div>`}if(n.form==="image"){const a=Ha(n,e)??"",l=n.width??120,c=n.height??120;return`<div class="vtc-hotspot vtc-hotspot--image"><img src="${wt(a)}" alt="" draggable="false" style="width:${l}px;height:${c}px;object-fit:contain" /></div>`}const s=i.effect&&i.effect!=="none"?i.effect:null,r=s&&Vy.has(s)?'<span class="vtc-hotspot__fx"></span>':"",o=i.text?`<span class="vtc-hotspot__text" style="color:${i.textColor};font-size:${i.fontSize}px">${wt(i.text)}</span>`:"";return`<div class="vtc-hotspot${s?` vtc-fx-${s}`:""}" style="${_u(i,s)}"><span class="vtc-hotspot__core">${r}<span class="vtc-hotspot__chip" style="${vu(i)}"><span class="vtc-hotspot__icon" style="width:${i.size}px;height:${i.size}px;">${Hy(i,e)}</span></span></span>${o}</div>`}function xu(n){const e=n.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);if(e)return`<iframe class="vtc-info__video" src="https://www.youtube.com/embed/${wt(e[1])}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;const t=n.match(/vimeo\.com\/(\d+)/);return t?`<iframe class="vtc-info__video" src="https://player.vimeo.com/video/${wt(t[1])}" allow="autoplay; fullscreen" allowfullscreen></iframe>`:`<video class="vtc-info__video" src="${wt(it(n))}" controls></video>`}function Wy(n,e){const t=Ha(n,e),i=[];return n.title&&i.push(`<div class="vtc-info__title">${wt(n.title)}</div>`),t&&i.push(`<img class="vtc-info__img" src="${wt(t)}" alt="" />`),n.videoUrl&&i.push(xu(n.videoUrl)),n.text&&i.push(`<div class="vtc-info__text">${wt(n.text)}</div>`),i.length?`<div class="vtc-info">${i.join("")}</div>`:""}function Xy(n,e){if(e)return n.scenes.find(t=>t.id===e)}function $y(n){return Xy(n,n.runtime.startSceneId)??n.scenes[0]}function qy(n){return n.layers.filter(e=>e.visible).flatMap(e=>e.hotspots)}function Va(n,e){for(const t of n.layers){const i=t.hotspots.find(s=>s.id===e);if(i)return{scene:n,layer:t,hotspot:i}}}function yu(n,e){return(n.on??[]).filter(t=>t.event===e).flatMap(t=>t.actions)}function Ga(n,e,t){for(const i of n.on??[])if(!(t&&i.event!==t)){for(const s of i.actions)if(s.type===e)return s}}function Yy(n){const e=n.hotspot?Ga(n.hotspot,"goto"):null;return e?n.tour?.scenes.find(t=>t.id===e.targetSceneId)??null:null}function Eu(n,e){if(!n||!n.includes("{{"))return n??"";const t=Yy(e);return n.replace(/\{\{\s*([a-z.]+)\s*\}\}/gi,(i,s)=>{switch(s.toLowerCase()){case"scene.name":return e.scene?.name??"";case"scene.subtitle":return e.scene?.subtitle??"";case"target.name":return t?.name??"";case"target.subtitle":return t?.subtitle??"";case"tour.title":return e.tour?.title??"";default:return i}})}const jy=(n,e)=>e;function Wa(n,e,t){const i=t.t??jy,s=Ga(e,"info","hover"),r=s??Ga(e,"info");if(r){const o={...r,title:i(`${e.id}.info.title`,r.title),text:i(`${e.id}.info.text`,r.text)},a=Wy(o,t.assets);if(a)return n.tooltip={content:a,trigger:s?"hover":"click",position:"top center",className:"vtc-info-tip"},n}if(e.tooltip){const o=Eu(i(`${e.id}.tooltip`,e.tooltip),{...t.tokens,hotspot:e});o&&(n.tooltip={content:wt(o),position:"top center"})}return n}function Su(n,e){const t=nx(n,e.components),i=n.visible===!1,s={id:n.id,className:"vtc-hotspot-marker"+(e.selected?" is-selected":"")+(i?" is-hidden":""),data:{hotspotId:n.id},visible:e.showHidden?!0:!i};if(n.geometry.kind==="polygon"){const a=n.geometry.points,l={...s,visible:s.visible&&a.length>=3,polygon:a.map(c=>[c.yaw,c.pitch]),svgStyle:{fill:t.fill||t.background||"#3b82f6",fillOpacity:String(t.fillOpacity??.28),stroke:t.stroke||t.iconColor||"#ffffff",strokeWidth:`${t.strokeWidth??2}px`}};return Wa(l,n,e)}const r={yaw:n.geometry.yaw,pitch:n.geometry.pitch};if(n.form==="image"&&n.perspective){const a=Ha(n,e.assets);if(a){const l={...s,imageLayer:a,position:r,size:{width:n.width??120,height:n.height??120}};return Wa(l,n,e)}}const o={...s,position:r,html:Gy(n,e.assets,t.text?{...t,text:Eu(t.text,{...e.tokens,hotspot:n})}:t),anchor:"center center",...t.scaleWithZoom?{scale:[.7,1.4]}:{}};return Wa(o,n,e)}function Mu(n){return n.kind==="tiled"?"equirect-tiles":n.kind==="cube"?"cubemap":"equirect"}function Zy(n){const e=new Set(n.scenes.map(t=>Mu(t.source)));return e.has("cubemap")&&e.size>1?{kind:"cubemap",conflict:n.scenes.filter(i=>Mu(i.source)!=="cubemap").map(i=>i.id)}:e.has("cubemap")?{kind:"cubemap"}:e.has("equirect-tiles")?{kind:"equirect-tiles"}:{kind:"equirect"}}function Ky(n,e={}){if(e.preferProxy&&n.proxy)return it(n.proxy);const t=n.source;if(t.kind==="single")return it(t.src);if(t.kind==="cube"){const i=t.faces;return{left:it(i.nx),front:it(i.pz),right:it(i.px),back:it(i.nz),top:it(i.py),bottom:it(i.ny)}}return{width:t.width,cols:t.cols,rows:t.rows,baseUrl:it(`${t.dir}/base.jpg`),tileUrl:(i,s)=>it(`${t.dir}/tile_${i}_${s}.jpg`)}}function Jy(){const n=globalThis.localStorage;try{return n?.getItem("__probe__"),n}catch{return}}function ao(n,e){if(e==="boolean")return n===!0||n==="true"||n===1;if(e==="number"){const t=typeof n=="number"?n:Number(n);return Number.isFinite(t)?t:0}return n==null?"":String(n)}class wu{constructor(e,t={}){nt(this,"types",new Map);nt(this,"initial",new Map);nt(this,"persisted",new Set);nt(this,"values",new Map);nt(this,"listeners",new Set);nt(this,"storage");nt(this,"storageKey");this.storageKey=`tour-studio:vars:${t.tourId??"tour"}`,this.storage=t.storage===null?void 0:t.storage??Jy();for(const i of e)this.types.set(i.name,i.type),this.initial.set(i.name,ao(i.initial,i.type)),i.persist&&this.persisted.add(i.name);this.reset()}reset(){if(this.values=new Map(this.initial),!(!this.storage||this.persisted.size===0))try{const e=JSON.parse(this.storage.getItem(this.storageKey)??"{}");for(const t of this.persisted)t in e&&this.values.set(t,ao(e[t],this.types.get(t)))}catch{}}has(e){return this.types.has(e)}get(e){return this.values.get(e)}snapshot(){return Object.fromEntries(this.values)}set(e,t){const i=this.types.get(e);if(!i)return!1;const s=ao(t,i);if(this.values.get(e)===s)return!0;this.values.set(e,s),this.save();for(const r of this.listeners)r(e,s);return!0}apply(e){if(!this.types.get(e.variable))return!1;const i=this.values.get(e.variable);if(e.op==="toggle")return this.set(e.variable,!i);if(e.op==="add"){const s=typeof e.value=="number"?e.value:Number(e.value??0);return this.set(e.variable,Number(i??0)+(Number.isFinite(s)?s:0))}return this.set(e.variable,e.value??"")}test(e){if(!e)return!0;const t=this.types.get(e.variable);if(!t)return!1;const i=this.values.get(e.variable);if(e.op==="truthy")return!!i;if(e.op==="falsy")return!i;const s=ao(e.value,t);switch(e.op){case"eq":return i===s;case"ne":return i!==s;case"gt":return i>s;case"lt":return i<s;case"gte":return i>=s;case"lte":return i<=s;default:return!1}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}save(){if(!this.storage||this.persisted.size===0)return;const e={};for(const t of this.persisted){const i=this.values.get(t);i!==void 0&&(e[t]=i)}try{this.storage.setItem(this.storageKey,JSON.stringify(e))}catch{}}}const bu=3,Tu="__tour-draft",Qy="__tour-draft-v",eE={effect:"none",rotation:!1,showLoader:!1},tE=62,nE={kind:"fade",durationMs:400};function Au(n){return iE(n??nE)}function iE(n){if(n.kind==="none")return eE;const e={showLoader:!1,effect:"fade",speed:n.durationMs,rotation:!1};return n.kind==="zoom-blend"?{...e,rotation:!1,zoomTo:tE}:e}function sE(n){if(!n.length)return null;let e=0,t=0,i=0;for(const s of n)e+=Math.cos(s.pitch)*Math.cos(s.yaw),t+=Math.sin(s.pitch),i+=Math.cos(s.pitch)*Math.sin(s.yaw);return{yaw:Math.atan2(i,e),pitch:Math.atan2(t,Math.hypot(e,i))}}class rE{constructor(e,t={},i={}){nt(this,"viewer",null);nt(this,"vt",null);nt(this,"markers",null);nt(this,"container");nt(this,"callbacks");nt(this,"options");nt(this,"doc",null);nt(this,"currentSceneId",null);nt(this,"editMode",!1);nt(this,"selectedHotspotIds",[]);nt(this,"runtimeHidden",new Set);nt(this,"draftPoints",null);nt(this,"draftIds",new Set);nt(this,"audio",new Fy);nt(this,"vars");nt(this,"onGrabStart",e=>{if(e.target?.closest?.(".psv-marker, .vtc-hotspot-marker")||this.restingCursor!=="grab")return;this.viewer?.setCursor("grabbing");const t=()=>{this.viewer?.setCursor(this.restingCursor),window.removeEventListener("pointerup",t),window.removeEventListener("pointercancel",t)};window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t)});nt(this,"onPointerDown",e=>{if(!this.editMode||!this.viewer)return;const t=e.target?.closest?.(".psv-marker");if(!t)return;const i=t.id.replace("psv-marker-","");e.stopPropagation(),e.preventDefault();const s=e.shiftKey||e.metaKey||e.ctrlKey;if(this.hotspotById(i)?.geometry.kind==="polygon"){this.callbacks.onHotspotSelected?.(i,s);return}if(s){this.callbacks.onHotspotSelected?.(i,!0);return}this.startMarkerDrag(e,i)});nt(this,"restingCursor","grab");this.container=e,this.callbacks=t,this.options=i,this.vars=new wu([]),this.container.addEventListener("pointerdown",this.onPointerDown,!0),this.container.addEventListener("pointerdown",this.onGrabStart)}get variables(){return this.vars}get isLive(){return this.viewer!==null}get sceneId(){return this.currentSceneId}get psv(){return this.viewer}setEditMode(e){this.editMode!==e&&(this.editMode=e,this.applyMarkers())}setSelected(e){const t=e==null?[]:Array.isArray(e)?e:[e];t.length===this.selectedHotspotIds.length&&t.every((i,s)=>this.selectedHotspotIds[s]===i)||(this.selectedHotspotIds=t,this.applyMarkers())}setDraft(e){this.draftPoints=e?.length?e.map(t=>({yaw:t.yaw,pitch:t.pitch})):null,this.renderDraft()}load(e,t){if(this.doc=e,this.container.style.setProperty("--tour-accent",e.theme.accent),this.vars=new wu(e.variables,{tourId:e.id}),this.audio.setMuted(!!e.runtime.audio?.muted),e.scenes.length===0){this.destroyViewer();return}const i=t&&e.scenes.find(r=>r.id===t)||$y(e),s=e.scenes.map(r=>this.toNode(r));this.viewer?this.vt.setNodes(s,i.id):this.create(s,i)}setDoc(e){const t=this.doc;if(this.doc=e,this.container.style.setProperty("--tour-accent",e.theme.accent),(!t||t.scenes.length!==e.scenes.length||e.scenes.some((s,r)=>{const o=t.scenes[r];return!o||o.id!==s.id||JSON.stringify(o.source)!==JSON.stringify(s.source)}))&&this.viewer){this.vt.setNodes(e.scenes.map(s=>this.toNode(s)),this.currentSceneId??void 0);return}this.applyMarkers()}toNode(e){return{id:e.id,panorama:Ky(e,this.options),name:e.name,caption:e.name,thumbnail:it(e.thumbnail),markers:this.markersFor(e),links:[],...e.north!=null||e.tilt!=null||e.roll!=null?{sphereCorrection:{pan:e.north??0,tilt:e.tilt??0,roll:e.roll??0}}:{}}}markersFor(e){const t=this.doc;return qy(e).map(i=>Su(i,{assets:t.assets,components:t.components,tokens:{tour:t,scene:e},selected:this.selectedHotspotIds.includes(i.id),showHidden:this.editMode,t:this.options.t}))}create(e,t){const s=this.doc.runtime;this.viewer=new B0({container:this.container,...this.options.adapter?{adapter:this.options.adapter}:{},defaultYaw:t.initialView.yaw,defaultPitch:t.initialView.pitch,...t.initialView.fov!=null?{defaultZoomLvl:t.initialView.fov}:{},...s.minFov!=null?{minFov:s.minFov}:{},...s.maxFov!=null?{maxFov:s.maxFov}:{},navbar:!1,mousemove:!0,touchmoveTwoFingers:!1,plugins:[[Kd,{gotoMarkerSpeed:"6rpm"}],[fu,{dataMode:"client",positionMode:"manual",nodes:e,startNodeId:t.id,preload:!0,transitionOptions:()=>Au(void 0)}]]}),this.vt=this.viewer.getPlugin(fu),this.markers=this.viewer.getPlugin(Kd),this.viewer.setCursor(this.restingCursor),this.viewer.addEventListener("load-progress",r=>{this.setProgress(r.progress)}),this.viewer.addEventListener("panorama-loaded",()=>this.setProgress(null)),this.viewer.addEventListener("ready",()=>this.setProgress(null)),this.vt.addEventListener("node-changed",r=>{const o=this.currentSceneId;this.currentSceneId=r.node.id,this.runtimeHidden.clear(),this.draftPoints=null,this.draftIds.clear(),this.applyMarkers(),o&&o!==r.node.id&&this.runSceneEvent(o,"unload"),this.startSceneAudio(),this.runSceneEvent(r.node.id,"load"),this.callbacks.onSceneChanged?.(r.node.id)}),this.markers.addEventListener("select-marker",r=>{this.editMode||this.runHotspotEvent(Xa(r.marker),"click")}),this.markers.addEventListener("enter-marker",r=>{this.editMode||this.runHotspotEvent(Xa(r.marker),"hover")}),this.markers.addEventListener("leave-marker",r=>{this.editMode||this.runHotspotEvent(Xa(r.marker),"leave")}),this.viewer.addEventListener("click",r=>{r.data.rightclick||r.data.marker||this.callbacks.onSphereClick?.({yaw:r.data.yaw,pitch:r.data.pitch})}),this.viewer.addEventListener("position-updated",r=>{this.callbacks.onViewChanged?.({yaw:r.position.yaw,pitch:r.position.pitch})}),this.currentSceneId=t.id,this.startSceneAudio(),this.runSceneEvent(t.id,"load")}runHotspotEvent(e,t){if(!e||!this.doc||!this.currentSceneId)return;const i=this.doc.scenes.find(r=>r.id===this.currentSceneId),s=i&&Va(i,e);s&&pu(yu(s.hotspot,t),this.deps())}runSceneEvent(e,t){const i=this.doc?.scenes.find(s=>s.id===e);i?.on?.length&&pu(yu(i,t),this.deps())}trigger(e,t){this.runHotspotEvent(e,t)}deps(){return{...this.options.host,variables:this.vars,goTo:(e,t,i)=>this.goToScene(e,t,i),lookAt:(e,t,i)=>this.lookAt(e,t,i),toggleHotspots:(e,t)=>this.setHotspotsVisible(e,t),playAudio:(e,t)=>this.audio.toggle(e,{loop:t}),resolveMedia:(e,t)=>{const i=e?this.doc?.assets.find(s=>s.id===e):void 0;return it(i?.src??t)},onUnsupported:this.callbacks.onUnsupportedAction}}hotspotById(e){const t=this.doc?.scenes.find(i=>i.id===this.currentSceneId);return t?Va(t,e)?.hotspot:void 0}startMarkerDrag(e,t){const i=this.container.getBoundingClientRect(),s=e.clientX,r=e.clientY;let o=!1,a=null;const l=u=>{if(!o&&(Math.abs(u.clientX-s)>bu||Math.abs(u.clientY-r)>bu)&&(o=!0),!o)return;const d=this.viewer.dataHelper.viewerCoordsToSphericalCoords({x:u.clientX-i.left,y:u.clientY-i.top});a={yaw:d.yaw,pitch:d.pitch};const p=this.hotspotById(t);p&&this.markers?.updateMarker(Su({...p,geometry:{kind:"point",...a}},{assets:this.doc.assets,components:this.doc.components,tokens:{tour:this.doc,scene:this.doc.scenes.find(m=>m.id===this.currentSceneId)},selected:!0,showHidden:!0,t:this.options.t}))},c=()=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",c),o&&a?this.callbacks.onHotspotMoved?.(t,a):this.callbacks.onHotspotSelected?.(t)};window.addEventListener("pointermove",l),window.addEventListener("pointerup",c)}goToScene(e,t,i){if(!this.vt||e===this.currentSceneId)return;const s=this.doc?.scenes.find(l=>l.id===e);if(!s)return;const r=Au(i),o=t??s.initialView,a=i?.kind==="zoom-blend";this.vt.setCurrentNode(e,{...r,...a?{}:{rotateTo:{yaw:o.yaw,pitch:o.pitch}}})}setProgress(e){const t=this.progressBar();if(t){if(e==null||e>=100){t.style.opacity="0",t.style.width="0%";return}t.style.opacity="1",t.style.width=`${Math.max(0,Math.min(100,e))}%`}}progressBar(){if(!this.container)return null;let e=this.container.querySelector(":scope > .tour-progress");return e||(e=document.createElement("div"),e.className="tour-progress",this.container.appendChild(e)),e}setCursor(e){this.restingCursor=e,this.viewer?.setCursor(e)}focusHotspot(e){const t=this.doc?.scenes.find(o=>o.id===this.currentSceneId),i=t&&Va(t,e);if(!i||!this.viewer)return;const s=i.hotspot.geometry,r=s.kind==="point"?{yaw:s.yaw,pitch:s.pitch}:sE(s.points);r&&this.viewer.rotate(r)}lookAt(e,t,i){this.viewer?.animate({yaw:e,pitch:t,...i!=null?{zoom:i}:{},speed:"6rpm"})}focusPoint(e){this.viewer?.animate({yaw:e.yaw,pitch:e.pitch,speed:"8rpm"})}refreshSize(){this.viewer?.autoSize()}getPosition(){if(!this.viewer)return null;const e=this.viewer.getPosition();return{yaw:e.yaw,pitch:e.pitch}}pointAt(e,t){if(!this.viewer)return null;const i=this.container.getBoundingClientRect(),s=this.viewer.dataHelper.viewerCoordsToSphericalCoords({x:e-i.left,y:t-i.top});return{yaw:s.yaw,pitch:s.pitch}}setHotspotsVisible(e,t){if(this.markers)for(const i of e){const s=t==="hide"?!0:t==="show"?!1:!this.runtimeHidden.has(i);s?this.runtimeHidden.add(i):this.runtimeHidden.delete(i);try{this.markers.toggleMarker(i,!s)}catch{}}}applyMarkers(){const e=this.doc?.scenes.find(t=>t.id===this.currentSceneId);if(!(!e||!this.markers)){this.markers.setMarkers(this.markersFor(e));for(const t of this.runtimeHidden)try{this.markers.hideMarker(t)}catch{}this.renderDraft()}}renderDraft(){if(!this.markers)return;for(const r of this.draftIds)try{this.markers.removeMarker(r)}catch{}this.draftIds.clear();const e=this.draftPoints;if(!e?.length)return;const t=this.doc?.theme.accent??"#3b82f6",i=r=>{this.markers.addMarker(r),this.draftIds.add(r.id)},s=e.map(r=>[r.yaw,r.pitch]);e.length>=3?i({id:Tu,polygon:s,className:"vtc-draft",svgStyle:{fill:t,fillOpacity:"0.22",stroke:"#ffffff",strokeWidth:"2px",strokeDasharray:"6 4"}}):e.length===2&&i({id:Tu,polyline:s,className:"vtc-draft",svgStyle:{stroke:"#ffffff",strokeWidth:"2px",strokeDasharray:"6 4",fill:"none"}}),e.forEach((r,o)=>{i({id:`${Qy}${o}`,position:{yaw:r.yaw,pitch:r.pitch},html:`<span class="vtc-draft-dot${o===0?" is-first":""}"></span>`,anchor:"center center",className:"vtc-draft-vertex"})})}startSceneAudio(){const t=this.doc?.scenes.find(s=>s.id===this.currentSceneId)?.audio;if(!t){this.audio.setAmbient(null);return}const i=t.assetId?this.doc?.assets.find(s=>s.id===t.assetId):void 0;this.audio.setAmbient(i?.src??t.src,{loop:t.loop!==!1,volume:t.volume})}destroyViewer(){this.viewer?.destroy(),this.viewer=null,this.vt=null,this.markers=null,this.currentSceneId=null}destroy(){this.container.removeEventListener("pointerdown",this.onPointerDown,!0),this.container.removeEventListener("pointerdown",this.onGrabStart),this.audio.stopAll(),this.destroyViewer()}}function Xa(n){return n.data?.hotspotId??n.id}const Cu='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';function oE(n){if(!n)return"";const{title:e,text:t,image:i,...s}=n,r=[];e&&r.push(`<h2>${wt(String(e))}</h2>`),i&&r.push(`<img src="${wt(it(String(i)))}" alt="" />`),t&&r.push(`<p>${wt(String(t))}</p>`);for(const[o,a]of Object.entries(s))a==null||a===""||r.push(`<p class="tp-kv"><span>${wt(o)}</span>${wt(String(a))}</p>`);return r.join("")}function aE(n,e){const t=document.createElement("div");t.className="tour-player-host",n.appendChild(t);let i=null;const s=h=>{h.key!=="Escape"||!i||(i(),h.stopPropagation())};document.addEventListener("keydown",s);let r=null;const o=()=>{r?.remove(),r=null,i=l?.classList.contains("open")?d:null},a=(h,w)=>{o();const S=document.createElement("div");return S.className=`tp-overlay ${h}`,S.innerHTML=`<button class="tp-close" aria-label="Close">${Cu}</button><div class="tp-overlay-body">${w}</div>`,S.addEventListener("click",E=>{(E.target===S||E.target.closest(".tp-close"))&&o()}),t.appendChild(S),r=S,i=o,S};let l=null,c=null;const u=()=>l||(l=document.createElement("aside"),l.className="tp-panel",l.innerHTML=`<button class="tp-close" aria-label="Close">${Cu}</button><div class="tp-panel-body"></div>`,l.querySelector(".tp-close").addEventListener("click",()=>d()),t.appendChild(l),l);function d(){l?.classList.remove("open"),c=null,i=r?o:null}const p=(h,w)=>{const S=u();S.querySelector(".tp-panel-body").innerHTML=oE(w),S.classList.add("open"),c=h,i=d};let m=null;const g=()=>{m?.pause(),m=null,"speechSynthesis"in window&&window.speechSynthesis.cancel()},v={playVideo(h){a("tp-video",xu(it(h)??h))},openUrl(h,w){if(w==="blank"){window.open(h,"_blank","noopener,noreferrer");return}a("tp-frame",`<iframe src="${wt(h)}" title="" referrerpolicy="no-referrer"></iframe>`)},showImage(h){a("tp-image",`<img src="${wt(it(h)??h)}" alt="" />`)},openPanel(h,w,S){w==="close"||w==="toggle"&&c===h?d():p(h,S)},animate(h,w,S){for(const E of h){const A=document.getElementById(`psv-marker-${E}`);A&&(A.classList.remove(`tp-anim-${w}`),A.offsetWidth,A.classList.add(`tp-anim-${w}`),window.setTimeout(()=>A.classList.remove(`tp-anim-${w}`),S??1200))}},narrate({text:h,src:w}){if(g(),w){m=new Audio(it(w)??w),m.play().catch(()=>{});return}h&&"speechSynthesis"in window&&window.speechSynthesis.speak(new SpeechSynthesisUtterance(h))},showModel(h){const w=it(h)??h;a("tp-model",`<p>This tour includes a 3D model.</p><p><a href="${wt(w)}" download>Download the model</a></p>`)}},f=h=>{t.style.setProperty("--tp-accent",h.theme.accent),t.style.setProperty("--tp-panel-bg",h.theme.panelBg),t.style.setProperty("--tp-radius",h.theme.radius)};return f(e),{effects:v,setTheme:f,clear(){o(),d(),g()},destroy(){g(),document.removeEventListener("keydown",s),t.remove()}}}const Ru={restart:{d:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>'},close:{d:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'},next:{d:'<path d="m9 18 6-6-6-6"/>'},back:{d:'<path d="m15 18-6-6 6-6"/>'},up:{d:'<path d="m18 15-6-6-6 6"/>'},down:{d:'<path d="m6 9 6 6 6-6"/>'},collapse:{d:'<path d="m6 9 6 6 6-6"/>'},expand:{d:'<path d="m18 15-6-6-6 6"/>'},scenes:{d:'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>'},language:{d:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'},vr:{d:'<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>'},check:{d:'<path d="M20 6 9 17l-5-5"/>'},cross:{d:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'},play:{d:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',filled:!0},pause:{d:'<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>',filled:!0},lock:{d:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',filled:!0},sound:{d:'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>'},mute:{d:'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>'}};function lE(n){const e=Ru[n];return e?{d:[...e.d.matchAll(/ d="([^"]+)"/g)].flatMap(t=>t[1]?[t[1]]:[]),filled:!!e.filled}:{d:[],filled:!1}}function Ks(n,e=20){const t=Ru[n];if(!t)return"";const i=t.filled?'fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"':'fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"';return`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" ${i} aria-hidden="true">${t.d}</svg>`}const Pu={next:"Next",back:"Back",questions:"questions",question:"question",answer:"Answer to continue",check:"Check",correct:"Correct!",wrong:"Not quite",continue:"Continue",finish:"Finish",scenes:"Scenes",restart:"Start again",mute:"Sound off",unmute:"Sound on",progress:"Progress",done:"done",score:"Your score",play:"Listen",pause:"Pause",close:"Close",locked:"Answer the earlier questions first",menuScenes:"Scenes",menuSound:"Sound",menuRestart:"Restart"},Lu={zh:{next:"下一站",back:"上一站",questions:"題",question:"題",answer:"答對才能繼續",check:"確認",correct:"答對了！",wrong:"再想想",continue:"繼續",finish:"完成",scenes:"所有地點",restart:"重新開始",mute:"關閉聲音",unmute:"開啟聲音",progress:"進度",done:"題完成",score:"你的成績",play:"聽解說",pause:"暫停",close:"關閉",locked:"要先答完前面的題目喔",menuScenes:"地點",menuSound:"聲音",menuRestart:"重來"}};function Du(n){return Lu[n]??Lu[n.split("-")[0].toLowerCase()]??{}}const He=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},Ti=(n,e,t)=>{const i=document.createElement("button");return i.type="button",i.className=n,i.textContent=e,i.addEventListener("click",t),i},cE=(n,e,t,i)=>{const s=document.createElement("button");return s.type="button",s.className=n,s.title=t,s.setAttribute("aria-label",t),s.innerHTML=Ks(e),s.addEventListener("click",i),s},$a=(n,e)=>{n.textContent!==e&&(n.textContent=e)},qa=(n,e,t=20)=>{const i=e?`${e}:${t}`:"";n.dataset.icon!==i&&(n.dataset.icon=i,n.innerHTML=e?Ks(e,t):"")},Cn=(n,e,t,i=!1)=>{const s=`${e}:${t}:${i}`;if(n.dataset.icon===s)return n;n.dataset.icon=s;const r=Ks(e,16);return n.innerHTML=i?`<span>${t}</span>${r}`:`${r}<span>${t}</span>`,n};function hE(n,e,t){let i=e,s=t.locale,r={...Pu,...t.strings},o=null,a=!1;const l={given:new Map,correct:new Set},c=new Audio;c.preload="none";const u=He("div","tg");n.appendChild(u);const d=He("div","tg-top"),p=He("h1","tg-title"),m=He("div","tg-badges"),g=He("div","tg-titlewrap");g.append(p,m);const v=He("div","tg-menu"),f=V=>V.toLowerCase().startsWith("zh")?"中文":V.split("-")[0].toUpperCase(),h=He("div","tg-lang-seg"),w=new Map;for(const V of t.locales??[]){const K=Ti("tg-lang-opt",f(V),()=>t.onLocale?.(V));K.title=V,w.set(V,K),h.append(K)}h.hidden=(t.locales??[]).length<2;const S=Ti("tg-menu-btn","",()=>mt(!!C.hidden)),E=Ti("tg-menu-btn","",()=>{a=!a,a&&be(),Ae(),b()}),A=Ti("tg-menu-btn","",()=>{confirm(r.restart+"?")&&(l.given.clear(),l.correct.clear(),be(),t.onRestart(),oe())});v.append(S,E,A,h);const C=He("div","tg-panel");C.hidden=!0;const P=He("div","tg-card"),D=He("img","tg-avatar");D.alt="";const M=He("div","tg-card-body"),x=He("p","tg-card-text"),T=He("button","tg-play"),O=cE("tg-card-toggle","collapse","Hide",()=>{P.classList.toggle("shut"),qa(O,P.classList.contains("shut")?"expand":"collapse",14)});M.append(x,T),P.append(D,M,O);const G=He("div","tg-bar"),B=He("div","tg-segments"),q=He("span","tg-bar-label");G.append(B,q);const z=He("div","tg-nav"),J=He("button","tg-nav-btn back"),F=He("button","tg-nav-btn next");z.append(J,F);const te=He("div","tg-modal");te.hidden=!0,d.append(g,v),u.append(d,C,P,z,G,te),_d(te,220);const $=()=>i.scenes,re=V=>i.scenes.find(K=>K.id===V)??null,Se=V=>i.scenes.findIndex(K=>K.id===V),Ue=()=>i.quiz&&i.quiz.enabled!==!1&&i.quiz.questions.length?i.quiz:null,ke=V=>(Ue()?.questions??[]).filter(K=>K.sceneId===V&&!Sa(K)),j=V=>{const K=ke(V);return K.length===0||K.every(H=>l.given.has(H.id))},de=()=>Ue()?.gate==="scene",he=V=>{const K=V?.guide?.audio?.[s]??V?.guide?.audio?.[i.locales.default];return K?it(K)??null:null},be=()=>{c.pause(),c.currentTime=0,T.classList.remove("playing"),Cn(T,"play",r.play)},Le=()=>{const V=he(re(o));!V||a||(c.src!==new URL(V,location.href).href&&(c.src=V),c.play().then(()=>{T.classList.add("playing"),Cn(T,"pause",r.pause)},()=>be()))},Oe=()=>{if(!a){if(!c.paused){be();return}Le()}};c.addEventListener("ended",be),T.addEventListener("click",Oe);let ht=null;const Xe=()=>{te.hidden=!0,te.replaceChildren(),ht=null,oe()},R=(V,K)=>{const H=V[K];if(!H){Xe();return}const ne=re(H.sceneId??o),me=wa(ne?.guide?.sdgs),pe=K+1,ce=He("div","tg-quiz");ce.style.setProperty("--sdg",me);const Re=He("div","tg-quiz-head");for(const We of ne?.guide?.sdgs??[]){const Be=Ma(We);if(!Be)continue;const gt=He("span","tg-sdg",String(We));gt.style.background=Be.color,gt.title=Be.title,Re.append(gt)}Re.append(He("span","tg-quiz-count",`${K+1} / ${V.length}`));const L=He("p","tg-quiz-prompt",H.prompt),ie=He("div","tg-answers"),le=He("div","tg-feedback");le.hidden=!0;const ye=i.quiz?.shuffleAnswers?yx(H.answers,pe):H.answers;let ee=[],Q=!1;const Me=()=>{if(Q||!ee.length)return;Q=!0,l.given.set(H.id,ee);const We=cd(H,ee);We&&l.correct.add(H.id);const Be=(i.quiz?.feedback??"immediate")==="immediate";le.hidden=!1,le.className=`tg-feedback ${Be?We?"right":"wrong":"noted"}`,le.replaceChildren((()=>{const gt=He("strong","");return Be?gt.textContent=We?r.correct:r.wrong:gt.innerHTML=Ks("check",18),gt})(),...Be&&H.explanation?[He("span","",H.explanation)]:[]);for(const gt of ie.querySelectorAll("button")){const kt=gt;if(kt.disabled=!0,!Be)continue;H.answers.find(Gn=>Gn.id===kt.dataset.id)?.correct?kt.classList.add("is-right"):ee.includes(kt.dataset.id)&&kt.classList.add("is-wrong")}Ie.textContent=K+1===V.length?r.finish:r.continue,Ie.disabled=!1,oe()},Ie=Ti("tg-quiz-go",r.check,()=>{Q?R(V,K+1):Me()});Ie.disabled=!0;for(const We of ye){const Be=Ti("tg-answer",We.text,()=>{if(!Q){H.kind==="multiple"?ee=ee.includes(We.id)?ee.filter(gt=>gt!==We.id):[...ee,We.id]:ee=[We.id];for(const gt of ie.querySelectorAll("button"))gt.classList.toggle("on",ee.includes(gt.dataset.id));Ie.disabled=!ee.length}});Be.dataset.id=We.id,ie.append(Be)}ce.append(Re,L,ie,le,Ie),te.replaceChildren(ce),te.hidden=!1,ht=Xe},ot=()=>{const V=ke(o).filter(K=>!l.given.has(K.id));V.length&&(be(),R(V,0))},Ce=()=>{const V=Ue();if(!V)return;const K=xx(V,[...l.given].map(([ne,me])=>({questionId:ne,given:me}))),H=He("div","tg-quiz tg-score");H.append(He("p","tg-score-big",`${K.percent}%`),He("p","tg-quiz-prompt",`${r.score}: ${K.correct} / ${K.questions}`),...K.passed===!0&&V.passMessage?[He("p","",V.passMessage)]:[],...K.passed===!1&&V.failMessage?[He("p","",V.failMessage)]:[],Ti("tg-quiz-go",r.close,Xe)),te.replaceChildren(H),te.hidden=!1,ht=Xe};let Ze="";const Ae=()=>{const V=re(o);$a(p,V?.name??"");const K=(V?.guide?.sdgs??[]).join(",");K!==Ze&&(Ze=K,m.replaceChildren(...(V?.guide?.sdgs??[]).flatMap(ne=>{const me=Ma(ne);if(!me)return[];const pe=He("span","tg-sdg",String(ne));return pe.style.background=me.color,pe.title=me.title,[pe]}))),Cn(E,a?"mute":"sound",r.menuSound),E.classList.toggle("off",a);const H=a?r.unmute:r.mute;E.title=H,E.setAttribute("aria-label",H),Cn(S,"scenes",r.menuScenes),S.title=r.scenes,S.setAttribute("aria-label",r.scenes),S.classList.toggle("on",!C.hidden),Cn(A,"restart",r.menuRestart),A.title=r.restart,A.setAttribute("aria-label",r.restart);for(const[ne,me]of w)me.classList.toggle("on",ne===s)},at=V=>$().slice(0,V).every(K=>j(K.id)),xe=new Map,Ve=()=>{xe.clear(),C.replaceChildren(...$().map((V,K)=>{const H=document.createElement("button");H.type="button",H.className="tg-row";const ne=He("span","tg-row-dot"),me=He("span","tg-row-name",`${K+1}. ${V.name}`),pe=He("span","tg-row-marks"),ce=ke(V.id).map(()=>{const Re=He("span","tg-mark");return pe.append(Re),Re});return H.append(ne,me,pe),H.addEventListener("click",()=>{H.classList.contains("locked")||(mt(!1),t.onGoto(V.id))}),xe.set(V.id,{row:H,dot:ne,marks:ce}),H}))},Et=()=>{$().forEach((V,K)=>{const H=xe.get(V.id);if(!H)return;const ne=de()&&!at(K),me=V.id===o;H.row.classList.toggle("here",me),H.row.classList.toggle("locked",ne),H.row.disabled=ne,H.row.title=ne?r.locked:V.name,qa(H.dot,ne?"lock":"",11),H.dot.style.background=ne?"transparent":wa(V.guide?.sdgs);const pe=ke(V.id);H.marks.forEach((ce,Re)=>{const L=pe[Re];if(!L)return;const ie=l.given.has(L.id),le=l.correct.has(L.id);ce.className=`tg-mark${ie?le?" right":" wrong":""}`,qa(ce,ie?le?"check":"cross":"",11),ce.title=ie?le?r.correct:r.wrong:r.answer})})},mt=V=>{C.hidden=!V,V&&Et(),S.classList.toggle("on",V)},b=()=>{const V=re(o),K=V?.guide?.text??V?.subtitle??"";if(P.hidden=!K,!K)return;$a(x,K);const H=V?.guide?.avatar?it(V.guide.avatar):null;D.hidden=!H,H&&(D.src=H);const ne=he(V);T.hidden=!ne,T.toggleAttribute("disabled",a),T.title=a?r.unmute:"",c.paused?Cn(T,"play",r.play):Cn(T,"pause",r.pause)},_=()=>{const V=Se(o),K=$(),H=ke(o).filter(me=>!l.given.has(me.id)).length;J.hidden=V<=0,Cn(J,"back",r.back),J.onclick=()=>K[V-1]&&t.onGoto(K[V-1].id);const ne=V===K.length-1;if(de()&&H>0){F.className="tg-nav-btn next asking",Cn(F,"next",`${H} ${H===1?r.question:r.questions}`,!0),F.title=r.answer,F.onclick=ot,F.hidden=!1;return}if(F.className="tg-nav-btn next",ne){F.hidden=!Ue(),F.textContent=r.score,F.onclick=Ce;return}F.hidden=!1,Cn(F,"next",r.next,!0),F.onclick=()=>K[V+1]&&t.onGoto(K[V+1].id)},k=new Map,Z=()=>{k.clear(),B.replaceChildren(...$().map((V,K)=>{const H=He("span","tg-seg"),ne=He("span","tg-seg-fill");return H.append(ne),H.addEventListener("click",me=>{me.stopPropagation(),!(de()&&!at(K)||V.id===o)&&t.onGoto(V.id)}),B.append(H),k.set(V.id,{seg:H,fill:ne}),H}))},se=()=>{const V=Ue();if(G.hidden=!V,!V)return;$().forEach((H,ne)=>{const me=k.get(H.id);if(!me)return;const pe=ke(H.id),ce=pe.filter(ie=>l.given.has(ie.id)).length,Re=de()&&!at(ne);me.seg.classList.toggle("here",H.id===o),me.seg.classList.toggle("locked",Re),me.fill.style.width=pe.length?`${ce/pe.length*100}%`:"0%",me.fill.style.background=wa(H.guide?.sdgs);const L=Re?r.locked:pe.length===0?"":`${ce}/${pe.length}`;me.seg.title=`${ne+1}. ${H.name}${L?` — ${L}`:""}`});const K=(V.questions??[]).filter(H=>!Sa(H)).length;$a(q,`${l.given.size} / ${K} ${r.done}`)};let Y="";const Te=()=>{const V=$().map(K=>`${K.id}:${ke(K.id).length}`).join("|");V!==Y&&(Y=V,Ve(),Z())},oe=()=>{Te(),Ae(),b(),_(),se(),Et()};return oe(),{setDoc(V,K,H){i=V,s=K,r={...Pu,...H},be(),oe()},setScene(V){const K=V===o;if(o=V,K){oe();return}be(),C.hidden=!0,ht&&Xe(),oe(),Le()},canLeave(V){return de()?j(V):!0},destroy(){be(),u.remove()}}}const qt=1024,ai=860,Iu=1.35,dE=1.9,uE=.06,li="'Inter Variable', Inter, 'PingFang TC', 'Noto Sans TC', sans-serif";function fE(n){const e=s=>n.querySelector(s),t=s=>!!s&&!s.hidden&&s.offsetParent!==null,i=e(".tg-modal");return{title:e(".tg-title")?.textContent??"",cardText:e(".tg-card-text")?.textContent??"",play:e(".tg-play"),playing:!!e(".tg-play.playing"),back:e(".tg-nav-btn.back"),next:e(".tg-nav-btn.next"),nextLabel:e(".tg-nav-btn.next")?.textContent?.trim()??"",asking:!!e(".tg-nav-btn.next.asking"),barLabel:e(".tg-bar-label")?.textContent??"",quizOpen:!!i&&!i.hidden,prompt:e(".tg-quiz-prompt")?.textContent??"",answers:[...n.querySelectorAll(".tg-answer")].map(s=>({el:s,text:s.textContent??"",on:s.classList.contains("on"),right:s.classList.contains("is-right"),wrong:s.classList.contains("is-wrong"),disabled:s.disabled})),feedback:e(".tg-feedback:not([hidden])")?.textContent??"",go:e(".tg-quiz-go"),goLabel:e(".tg-quiz-go")?.textContent??"",visibleBack:t(e(".tg-nav-btn.back")),visibleNext:t(e(".tg-nav-btn.next"))}}function pE(n,e,t,i){const s=document.createElement("canvas");s.width=qt,s.height=ai;const r=s.getContext("2d"),o=new Fp(s);o.colorSpace=jt;const a=new xn({map:o,transparent:!0}),l=new Ft(new qi(Iu,Iu*ai/qt),a),c=new Fn;c.add(l),e.add(c);let u=!1,d=!1,p=[];const m=(O,G,B,q,z)=>{r.beginPath(),r.roundRect(O,G,B,q,z)},g=(O,G,B,q,z)=>{const{d:J,filled:F}=lE(O);r.save(),r.translate(G,B),r.scale(q/24,q/24),r.strokeStyle=z,r.fillStyle=z,r.lineWidth=2.25,r.lineCap="round",r.lineJoin="round";for(const te of J){const $=new Path2D(te);F?r.fill($):r.stroke($)}r.restore()},v=(O,G,B,q,z,J=12)=>{const F=O.split(/\s+/);let te="",$=0;for(const re of F){const Se=te?`${te} ${re}`:re;if(r.measureText(Se).width>q&&te){if(r.fillText(te,G,B),B+=z,te=re,++$>=J-1){te+="…";break}}else te=Se}return te&&(r.fillText(te,G,B),B+=z),B},f=(O,G,B,q,z,J={})=>{m(G,B,q,z,z/2),r.fillStyle=J.disabled?"rgba(255,255,255,0.08)":J.primary?"#ffffff":"rgba(255,255,255,0.14)",r.fill(),r.fillStyle=J.disabled?"rgba(255,255,255,0.35)":J.primary?"#0b1220":"#ffffff",r.font=`600 30px ${li}`,r.textBaseline="middle";const F=r.measureText(O).width,te=J.icon?40:0,$=G+(q-F-te)/2;J.icon&&g(J.icon,$,B+z/2-15,30,r.fillStyle),r.fillText(O,$+te,B+z/2+2),!J.disabled&&(J.el||J.act)&&p.push({x:G,y:B,w:q,h:z,el:J.el,act:J.act})},h=()=>{const O=fE(n);p=[],r.clearRect(0,0,qt,ai),m(0,0,qt,ai,36),r.fillStyle="rgba(13, 16, 22, 0.94)",r.fill(),r.strokeStyle="rgba(255,255,255,0.16)",r.lineWidth=2,r.stroke(),r.fillStyle="#ffffff",r.font=`700 44px ${li}`,r.textBaseline="alphabetic",r.fillText(O.title,48,84);const G=u?"Pinned":"Follows you";r.font=`600 26px ${li}`;const B=r.measureText(G).width+56;f(G,qt-B-40,44,B,56,{act:()=>{u=!u,h()}});let q=132;if(O.quizOpen){r.fillStyle="#ffffff",r.font=`600 34px ${li}`,q=v(O.prompt,48,q+20,qt-96,46,4)+16,r.font=`400 30px ${li}`;for(const z of O.answers){m(48,q,qt-96,76,18),r.fillStyle=z.right?"rgba(74, 222, 128, 0.28)":z.wrong?"rgba(248, 113, 113, 0.26)":z.on?"rgba(255,255,255,0.24)":"rgba(255,255,255,0.10)",r.fill(),(z.on||z.right||z.wrong)&&(r.strokeStyle=z.right?"#4ade80":z.wrong?"#f87171":"#ffffff",r.lineWidth=3,r.stroke()),r.fillStyle="#ffffff",r.textBaseline="middle";let F=z.text;for(;r.measureText(F).width>qt-160&&F.length>2;)F=`${F.slice(0,-2)}…`;r.fillText(F,72,q+76/2+2),r.textBaseline="alphabetic",z.disabled||p.push({x:48,y:q,w:qt-96,h:76,el:z.el}),q+=90}O.feedback&&(r.font=`600 28px ${li}`,r.fillStyle="rgba(255,255,255,0.92)",q=v(O.feedback,48,q+26,qt-96,38,3)+8),O.go&&f(O.goLabel,48,ai-128,qt-96,84,{primary:!0,el:O.go,disabled:O.go.disabled})}else{r.fillStyle="rgba(255,255,255,0.94)",r.font=`400 31px ${li}`,q=v(O.cardText,48,q+26,qt-96,44,9),O.play&&!O.play.hidden&&f(O.playing?"Pause":"Listen",48,q+18,250,78,{icon:O.playing?"pause":"play",el:O.play});const z=ai-128;O.visibleBack&&O.back&&f("Back",48,z,220,84,{icon:"back",el:O.back}),O.visibleNext&&O.next&&f(O.nextLabel,qt-48-420,z,420,84,{primary:!O.asking,icon:"next",el:O.next}),O.barLabel&&(r.font=`600 26px ${li}`,r.fillStyle="rgba(255,255,255,0.6)",r.fillText(O.barLabel,48,ai-44))}o.needsUpdate=!0};let w=!1;const S=new MutationObserver(()=>{w||(w=!0,requestAnimationFrame(()=>{w=!1,h()}))});S.observe(n,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),h(),n.dataset.vrPanel="up";const E=new Il,A=[t.getController(0),t.getController(1)],C=new I,P=new I;for(const O of A){const G=new pn().setFromPoints([new I(0,0,0),new I(0,0,-2)]);O.add(new Al(G,new wl({color:16777215,transparent:!0,opacity:.5}))),O.add((()=>{const B=new Ft(new mi(.008),new xn({color:16777215}));return B.position.z=-2,B})()),O.addEventListener("selectstart",()=>{C.setFromMatrixPosition(O.matrixWorld),P.set(0,0,-1).transformDirection(O.matrixWorld),E.set(C,P);const B=E.intersectObject(l,!1)[0];if(!B?.uv)return;const q=B.uv.x*qt,z=(1-B.uv.y)*ai,J=p.find(F=>q>=F.x&&q<=F.x+F.w&&z>=F.y&&z<=F.y+F.h);J&&(J.act?J.act():J.el?.click())})}const D=new I,M=new I,x=new I;return{tick:()=>{const O=i();O&&(O.getWorldDirection(x),x.y=0,x.lengthSq()<.001&&x.set(0,0,-1),x.normalize(),M.copy(O.position),D.copy(M).addScaledVector(x,dE),D.y=M.y-.05,d?u||c.position.lerp(D,uE):(c.position.copy(D),d=!0),c.lookAt(M.x,c.position.y,M.z))},destroy(){delete n.dataset.vrPanel,S.disconnect(),e.remove(c),a.map?.dispose(),a.dispose(),l.geometry.dispose()}}}const Nu=()=>navigator.xr;function mE(n,e,t={}){let i=null,s=null,r=!1;e.renderer.setCustomRenderer(d=>({render(p,m){i={renderer:d,scene:p,camera:m},d.xr.isPresenting||d.render(p,m)}}));const o=document.createElement("button");o.type="button",o.className="tp-vr",o.hidden=!0;const a=()=>{const d=!!i?.renderer.xr.isPresenting,p=d?t.exitLabel??"Exit VR":t.label??"VR";o.innerHTML=`${Ks("vr",17)}<span>${p}</span>`,o.title=p,o.classList.toggle("on",d)};let l=null;const c=()=>{const d=i;d&&(l?.destroy(),l=null,d.renderer.setAnimationLoop(null),d.renderer.xr.enabled=!1,s=null,a(),t.onChange?.(!1),e.needsUpdate())},u=async()=>{const d=i;if(!d)throw new Error("The viewer has not drawn a frame yet.");const p=Nu();if(!p)throw new Error("This browser has no WebXR.");const m=await p.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});d.renderer.xr.enabled=!0,await d.renderer.xr.setSession(m),s=m,m.addEventListener("end",c,{once:!0}),t.guideRoot&&(l=pE(t.guideRoot,d.scene,d.renderer.xr,()=>d.renderer.xr.isPresenting?d.renderer.xr.getCamera():null)),d.renderer.setAnimationLoop(()=>{l?.tick(d.renderer.xr.getCamera()),d.renderer.render(d.scene,d.camera)}),a(),t.onChange?.(!0)};return o.addEventListener("click",()=>{if(s){s.end();return}u().catch(d=>{t.onError?.(String(d?.message??d)),c()})}),n.appendChild(o),(async()=>{try{const d=Nu();r=!!d&&await d.isSessionSupported("immersive-vr")}catch{r=!1}o.hidden=!r,a()})(),{supported:()=>r,isPresenting:()=>!!i?.renderer.xr.isPresenting,enter:u,exit:async()=>{await s?.end()},destroy(){s?.end(),e.renderer.setCustomRenderer(null),o.remove()}}}const Uu="http://www.w3.org/2000/svg";function gE(n,e,t={}){let i=e,s=null,r=null,o=0,a=!1;const l=document.createElement("button");l.type="button",l.className="tp-minimap-toggle",l.setAttribute("aria-label","Floor plan"),l.innerHTML='<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M1.5 4.2L6 2.2l4 2 4.5-2v9.6l-4.5 2-4-2-4.5 2z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 2.2v9.6M10 4.2v9.6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',n.appendChild(l);const c=document.createElement("div");c.className="tp-minimap",c.hidden=!0;const u=document.createElement("div");u.className="tp-minimap-floors";const d=document.createElement("div");d.className="tp-minimap-frame";const p=document.createElement("div");p.className="tp-minimap-stage",d.appendChild(p);const m=document.createElement("img");m.className="tp-minimap-image",m.alt="",m.draggable=!1,p.appendChild(m);const g=document.createElement("div");g.className="tp-minimap-pins",p.appendChild(g);const v=document.createElementNS(Uu,"svg");v.setAttribute("class","tp-minimap-radar"),v.setAttribute("viewBox","0 0 1 1"),v.setAttribute("preserveAspectRatio","none");const f=document.createElementNS(Uu,"path");v.appendChild(f),p.appendChild(v);const h=document.createElement("button");h.type="button",h.className="tp-minimap-close",h.setAttribute("aria-label","Close the floor plan"),h.innerHTML='<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',c.append(h,u,d),n.appendChild(c);let w=1,S=0,E=0;const A=$=>i.graph?.floors.find(re=>re.id===$),C=()=>{p.style.transform=`translate(${S}px, ${E}px) scale(${w})`},P=()=>{w=Ei(A(r)).zoom?.initial??1,S=0,E=0,C()};let D=null;const M=$=>{Ei(A(r)).movement==="draggable"&&($.target.closest(".tp-minimap-pin")||(D={x:$.clientX,y:$.clientY,panX:S,panY:E},d.setPointerCapture($.pointerId),d.classList.add("dragging")))},x=$=>{D&&(S=D.panX+($.clientX-D.x),E=D.panY+($.clientY-D.y),C())},T=$=>{D&&(D=null,d.releasePointerCapture($.pointerId),d.classList.remove("dragging"))},O=$=>{const re=Ei(A(r)).zoom;if(!re)return;$.preventDefault();const Se=Math.min(re.max,Math.max(re.min,w*($.deltaY<0?1.12:1/1.12)));Se!==w&&(w=Se,C())};d.addEventListener("pointerdown",M),d.addEventListener("pointermove",x),d.addEventListener("pointerup",T),d.addEventListener("pointercancel",T),d.addEventListener("wheel",O,{passive:!1});const G=$=>{a=$,c.hidden=!$,l.classList.toggle("on",$),$&&q()};l.addEventListener("click",()=>G(!a)),h.addEventListener("click",()=>G(!1));const B=()=>{const $=(i.graph?.floors??[]).filter(re=>Ei(re).visible);if($.length)return $.find(re=>re.nodes.some(Se=>Se.sceneId===s))??$[0]},q=()=>{const re=A(r)?.nodes.find(j=>j.sceneId===s),Se=i.scenes.find(j=>j.id===s),Ue=hx(i.graph),ke=Ue.enabled?ux(re,Se,o):null;if(ke==null||!re){v.style.display="none";return}v.style.display="",v.setAttribute("style",""),v.style.left=`${(re.x-Ue.radius)*100}%`,v.style.top=`${re.y*100}%`,v.style.width=`${Ue.radius*200}%`,v.style.marginTop=`${-Ue.radius*100}%`,v.style.transform=`rotate(${ke}rad)`,f.setAttribute("d",cx(Ue.angle)),f.setAttribute("fill",Ue.fill),f.setAttribute("fill-opacity",String(Ue.fillOpacity)),f.setAttribute("stroke",Ue.stroke),f.setAttribute("stroke-width","0.006"),f.setAttribute("stroke-opacity","0.9")},z=()=>{const $=(i.graph?.floors??[]).filter(re=>Ei(re).visible);u.hidden=$.length<2,u.replaceChildren(...$.map(re=>{const Se=document.createElement("button");return Se.type="button",Se.textContent=re.name,Se.className=re.id===r?"on":"",Se.addEventListener("click",()=>{r=re.id,P(),F()}),Se}))},J=()=>{const $=A(r);g.replaceChildren(...($?.nodes??[]).map(re=>{const Se=i.scenes.find(ke=>ke.id===re.sceneId),Ue=document.createElement("button");return Ue.type="button",Ue.className=`tp-minimap-pin${re.sceneId===s?" here":""}`,Ue.style.left=`${re.x*100}%`,Ue.style.top=`${re.y*100}%`,Ue.title=Se?.name??re.sceneId,Ue.setAttribute("aria-label",Se?.name??re.sceneId),Ue.addEventListener("click",ke=>{ke.stopPropagation(),re.sceneId!==s&&t.onGoto?.(re.sceneId)}),Ue}))},F=()=>{const $=A(r),re=$?.image?it($.image):null;re&&m.getAttribute("src")!==re&&m.setAttribute("src",re),m.hidden=!re;const Se=Ei($);d.classList.toggle("fill",Se.scaleMode==="fill"),d.classList.toggle("draggable",Se.movement==="draggable"),z(),J(),q()},te=()=>{const $=B();$&&$.id!==r?(r=$.id,P()):$||(r=null)};return te(),F(),{setDoc($){i=$,te(),F()},setScene($){s=$,te(),F()},setYaw($){$!==o&&(o=$,a&&q())},setOpen:G,isOpen:()=>a,destroy(){d.removeEventListener("pointerdown",M),d.removeEventListener("pointermove",x),d.removeEventListener("pointerup",T),d.removeEventListener("pointercancel",T),d.removeEventListener("wheel",O),c.remove(),l.remove()}}}function vE(n){return!!n?.graph?.floors.some(e=>Ei(e).visible&&e.image)}const _E="1";function xE(){const n=document.getElementById("tour-doc");if(!n?.textContent)throw new Error('No tour document on the page: expected <script type="application/json" id="tour-doc">.');const{doc:e,warnings:t}=ax(JSON.parse(n.textContent));for(const i of t)console.warn(`[tour] ${i}`);return e}function yE(n,e){n.style.setProperty("--tour-accent",e.theme.accent),n.style.setProperty("--tour-panel-bg",e.theme.panelBg),n.style.setProperty("--tour-radius",e.theme.radius);const t=e.tooltipStyle;n.style.setProperty("--tour-tooltip-bg",t.background),n.style.setProperty("--tour-tooltip-fg",t.textColor),n.style.setProperty("--tour-tooltip-size",`${t.fontSize}px`)}function Fu(n,e){if(!e)return null;if(n.includes(e))return e;const t=e.split("-")[0].toLowerCase();return n.find(i=>i.toLowerCase()===t)??n.find(i=>i.split("-")[0].toLowerCase()===t)??null}function Ou(n={}){const e=n.container??document.getElementById("tour");if(!e)throw new Error('No container: expected an element with id="tour".');const t=n.doc??xE();if(!t.scenes.length)throw new Error("This tour has no scenes.");const i=(()=>{try{return localStorage.getItem(`tour-lang:${t.id}`)}catch{return null}})(),s=t.locales.available,r=[new URLSearchParams(location.search).get("lang"),i,...navigator.languages??[]].find(x=>x&&Fu(s,x))??t.locales.default;let o=Fu(s,r)??t.locales.default,a=od(t,o);wx(""),yE(e,a),document.title=a.title||document.title;const l=aE(e,a),c=Zy(a);let u=null,d=null,p=null;const m=_x(t),g=x=>{if(x!==o){o=x,a=od(t,o);try{localStorage.setItem(`tour-lang:${t.id}`,x)}catch{}document.documentElement.lang=x,document.title=a.title||document.title,w.setDoc(a),u?.setScenes(a.scenes),h?.setDoc(a),p?.setDoc(a,o,Du(o)),w.sceneId&&p?.setScene(w.sceneId),f()}},v=s.length>1&&!m?document.createElement("div"):null,f=()=>{v&&(v.className="tp-langs",v.replaceChildren(...s.map(x=>{const T=document.createElement("button");return T.type="button",T.textContent=x.toUpperCase(),T.title=vx(x),T.className=x===o?"on":"",T.addEventListener("click",()=>g(x)),T})))};v&&(f(),e.appendChild(v)),document.documentElement.lang=o;const h=vE(a)?gE(e,a,{onGoto:x=>w.goToScene(x)}):null,w=new rE(e,{onSceneChanged:x=>{l.clear(),u?.update(x),d?.update(x),h?.setScene(x),p?.setScene(x),EE(x)},onViewChanged:x=>h?.setYaw(x.yaw),onUnsupportedAction:x=>console.warn(`[tour] unsupported action: ${x.type}`)},{host:l.effects,...c.kind==="equirect-tiles"?{adapter:K0}:{}}),S=n.sceneId??new URLSearchParams(location.search).get("scene")??void 0,E=S&&a.scenes.some(x=>x.id===S)?S:void 0,A=$x(a),C=m&&!a.skin?.html,P=Gx(e,w,{...C?{html:"",css:A.css}:A,scenes:a.scenes});u=P,eo(document,a.scenes),d=Ed(document,w,{skip:u.layer}),m&&(p=hE(e,a,{locale:o,onGoto:x=>w.goToScene(x),locales:s,strings:Du(o),onLocale:x=>g(x),onRestart:()=>{const x=a.runtime.startSceneId??a.scenes[0]?.id;x&&w.goToScene(x)}})),w.load(a,E);let D=null;const M=w.psv;return M&&(D=mE(e,M,{guideRoot:e.querySelector(".tg"),onChange:x=>{e.classList.toggle("in-vr",x)},onError:x=>console.warn(`[tour] VR: ${x}`)})),{engine:w,skin:P,destroy(){D?.destroy(),p?.destroy(),v?.remove(),h?.destroy(),w.destroy(),l.destroy(),u?.destroy(),d?.destroy()}}}function EE(n){if(location.protocol==="file:")return;const e=new URL(location.href);e.searchParams.get("scene")!==n&&(e.searchParams.set("scene",n),history.replaceState(null,"",e))}function SE(){if(document.currentScript?.hasAttribute("data-tour-manual"))return;const e=()=>{try{window.tourPlayer=Ou()}catch(t){const i=t instanceof Error?t.message:String(t);console.error("[tour]",t);const s=document.getElementById("tour");s&&(s.innerHTML=`<div class="tour-player-error"><p>${i}</p></div>`)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}return SE(),vn.PLAYER_VERSION=_E,vn.createPlayer=Ou,Object.defineProperty(vn,Symbol.toStringTag,{value:"Module"}),vn})({});
