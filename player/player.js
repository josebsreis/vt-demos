var TourPlayer=(function(Mn){"use strict";var IE=Object.defineProperty;var NE=(Mn,ei,_s)=>ei in Mn?IE(Mn,ei,{enumerable:!0,configurable:!0,writable:!0,value:_s}):Mn[ei]=_s;var it=(Mn,ei,_s)=>NE(Mn,typeof ei!="symbol"?ei+"":ei,_s);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tn="srgb",vi="srgb-linear",cr="linear",rt="srgb",il="300 es";class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const xs=Math.PI/180,ys=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Eo(n,e){return(n%e+e)%e}function qf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Yf(n,e,t){return n!==e?(t-n)/(e-n):0}function Es(n,e,t){return(1-t)*n+t*e}function jf(n,e,t,i){return Es(n,e,1-Math.exp(-t*i))}function Zf(n,e=1){return e-Math.abs(Eo(n,e*2)-e)}function Kf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Jf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ep(n,e){return n+Math.random()*(e-n)}function tp(n){return n*(.5-Math.random())}function np(n){n!==void 0&&(sl=n);let e=sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(n){return n*xs}function sp(n){return n*ys}function rp(n){return(n&n-1)===0&&n!==0}function op(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ap(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),m=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*m,a*l);break;case"YZY":n.set(c*m,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*m,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:xs,RAD2DEG:ys,generateUUID:ki,clamp:Ye,euclideanModulo:Eo,mapLinear:qf,inverseLerp:Yf,lerp:Es,damp:jf,pingpong:Zf,smoothstep:Kf,smootherstep:Jf,randInt:Qf,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:op,floorPowerOfTwo:ap,setQuaternionFromProperEuler:lp,normalize:Gt,denormalize:Bi};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ti{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const m=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=m,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==m||l!==p||u!==g){let f=1-a;const h=c*m+l*p+u*g+d*v,M=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){const A=Math.sqrt(w),C=Math.atan2(A,h*M);f=Math.sin(f*C)/A,a=Math.sin(a*C)/A}const E=a*M;if(c=c*f+m*E,l=l*f+p*E,u=u*f+g*E,d=d*f+v*E,f===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],m=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*p-l*m,e[t+1]=c*g+u*m+l*d-a*p,e[t+2]=l*g+u*p+a*m-c*d,e[t+3]=u*g-a*d-c*m-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),m=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=m*u*d+l*p*g,this._y=l*p*d-m*u*g,this._z=l*u*g+m*p*d,this._w=l*u*d-m*p*g;break;case"YXZ":this._x=m*u*d+l*p*g,this._y=l*p*d-m*u*g,this._z=l*u*g-m*p*d,this._w=l*u*d+m*p*g;break;case"ZXY":this._x=m*u*d-l*p*g,this._y=l*p*d+m*u*g,this._z=l*u*g+m*p*d,this._w=l*u*d-m*p*g;break;case"ZYX":this._x=m*u*d-l*p*g,this._y=l*p*d+m*u*g,this._z=l*u*g-m*p*d,this._w=l*u*d+m*p*g;break;case"YZX":this._x=m*u*d+l*p*g,this._y=l*p*d+m*u*g,this._z=l*u*g-m*p*d,this._w=l*u*d-m*p*g;break;case"XZY":this._x=m*u*d-l*p*g,this._y=l*p*d-m*u*g,this._z=l*u*g+m*p*d,this._w=l*u*d+m*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],m=i+a+d;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,m=Math.sin(t*u)/l;return this._w=o*d+this._w*m,this._x=i*d+this._x*m,this._y=s*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new I,rl=new ti;class He{constructor(e,t,i,s,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],m=i[2],p=i[5],g=i[8],v=s[0],f=s[3],h=s[6],M=s[1],w=s[4],E=s[7],A=s[2],C=s[5],P=s[8];return r[0]=o*v+a*M+c*A,r[3]=o*f+a*w+c*C,r[6]=o*h+a*E+c*P,r[1]=l*v+u*M+d*A,r[4]=l*f+u*w+d*C,r[7]=l*h+u*E+d*P,r[2]=m*v+p*M+g*A,r[5]=m*f+p*w+g*C,r[8]=m*h+p*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,m=a*c-u*r,p=l*r-o*c,g=t*d+i*m+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=m*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new He;function ol(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cp(){const n=Ss("canvas");return n.style.display="block",n}const al={};function zi(n){n in al||(al[n]=!0,console.warn(n))}function hp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ll=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dp(){const n={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?cr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vi]:{primaries:e,whitePoint:i,transfer:cr,toXYZ:ll,fromXYZ:cl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:ll,fromXYZ:cl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const Ke=dp();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vi===void 0&&(Vi=Ss("canvas")),Vi.width=e.width,Vi.height=e.height;const s=Vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fp=0;class Mo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bo(s[o].image)):r.push(bo(s[o]))}else r=bo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?up.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pp=0;const To=new I;class Rt extends Oi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=1001,s=1001,r=1006,o=1008,a=1023,c=1009,l=Rt.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ki(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null,Rt.DEFAULT_MAPPING=300,Rt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],m=c[1],p=c[5],g=c[9],v=c[2],f=c[6],h=c[10];if(Math.abs(u-m)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+m)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,E=(p+1)/2,A=(h+1)/2,C=(u+m)/4,P=(d+v)/4,D=(g+f)/4;return w>E&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=C/i,r=P/i):E>A?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=D/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=D/r),this.set(i,s,r,t),this}let M=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(m-u)*(m-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(d-v)/M,this.z=(m-u)/M,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mp extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Rt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends mp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hl extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gp extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hr.copy(i.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),dr.subVectors(this.max,ws),Wi.subVectors(e.a,ws),Xi.subVectors(e.b,ws),$i.subVectors(e.c,ws),ii.subVectors(Xi,Wi),si.subVectors($i,Xi),_i.subVectors(Wi,$i);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-_i.z,_i.y,ii.z,0,-ii.x,si.z,0,-si.x,_i.z,0,-_i.x,-ii.y,ii.x,0,-si.y,si.x,0,-_i.y,_i.x,0];return!Ao(t,Wi,Xi,$i,dr)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,Wi,Xi,$i,dr))?!1:(ur.crossVectors(ii,si),t=[ur.x,ur.y,ur.z],Ao(t,Wi,Xi,$i,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,hr=new Gi,Wi=new I,Xi=new I,$i=new I,ii=new I,si=new I,_i=new I,ws=new I,dr=new I,ur=new I,xi=new I;function Ao(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xi.fromArray(n,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const vp=new Gi,Ms=new I,Co=new I;class fr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ms,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Co)),this.expandByPoint(Ms.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new I,Ro=new I,pr=new I,ri=new I,Po=new I,mr=new I,Lo=new I;class Do{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ro.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Ro);const r=e.distanceTo(t)*.5,o=-this.direction.dot(pr),a=ri.dot(this.direction),c=-ri.dot(pr),l=ri.lengthSq(),u=Math.abs(1-o*o);let d,m,p,g;if(u>0)if(d=o*c-a,m=o*a-c,g=r*u,d>=0)if(m>=-g)if(m<=g){const v=1/u;d*=v,m*=v,p=d*(d+o*m+2*a)+m*(o*d+m+2*c)+l}else m=r,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*c)+l;else m=-r,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*c)+l;else m<=-g?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+m*(m+2*c)+l):m<=g?(d=0,m=Math.min(Math.max(-r,-c),r),p=m*(m+2*c)+l):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+m*(m+2*c)+l);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ro).addScaledVector(pr,m),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,m=this.origin;return l>=0?(i=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(i=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),u>=0?(r=(e.min.y-m.y)*u,o=(e.max.y-m.y)*u):(r=(e.max.y-m.y)*u,o=(e.min.y-m.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-m.z)*d,c=(e.max.z-m.z)*d):(a=(e.max.z-m.z)*d,c=(e.min.z-m.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){Po.subVectors(t,e),mr.subVectors(i,e),Lo.crossVectors(Po,mr);let o=this.direction.dot(Lo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const c=a*this.direction.dot(mr.crossVectors(ri,mr));if(c<0)return null;const l=a*this.direction.dot(Po.cross(ri));if(l<0||c+l>o)return null;const u=-a*ri.dot(Lo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,s,r,o,a,c,l,u,d,m,p,g,v,f){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,m,p,g,v,f)}set(e,t,i,s,r,o,a,c,l,u,d,m,p,g,v,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=m,h[3]=p,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const m=o*u,p=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=m-v*l,t[9]=-a*c,t[2]=v-m*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const m=c*u,p=c*d,g=l*u,v=l*d;t[0]=m+v*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+m*a,t[10]=o*c}else if(e.order==="ZXY"){const m=c*u,p=c*d,g=l*u,v=l*d;t[0]=m-v*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-m*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const m=o*u,p=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=m*l+v,t[1]=c*d,t[5]=v*l+m,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-m*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=m-v*d}else if(e.order==="XZY"){const m=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=m*d+v,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=v*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_p,e,xp)}lookAt(e,t,i){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),oi.crossVectors(i,nn),oi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),oi.crossVectors(i,nn)),oi.normalize(),gr.crossVectors(nn,oi),s[0]=oi.x,s[4]=gr.x,s[8]=nn.x,s[1]=oi.y,s[5]=gr.y,s[9]=nn.y,s[2]=oi.z,s[6]=gr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],m=i[9],p=i[13],g=i[2],v=i[6],f=i[10],h=i[14],M=i[3],w=i[7],E=i[11],A=i[15],C=s[0],P=s[4],D=s[8],S=s[12],x=s[1],T=s[5],B=s[9],W=s[13],G=s[2],J=s[6],V=s[10],Y=s[14],H=s[3],Q=s[7],j=s[11],ee=s[15];return r[0]=o*C+a*x+c*G+l*H,r[4]=o*P+a*T+c*J+l*Q,r[8]=o*D+a*B+c*V+l*j,r[12]=o*S+a*W+c*Y+l*ee,r[1]=u*C+d*x+m*G+p*H,r[5]=u*P+d*T+m*J+p*Q,r[9]=u*D+d*B+m*V+p*j,r[13]=u*S+d*W+m*Y+p*ee,r[2]=g*C+v*x+f*G+h*H,r[6]=g*P+v*T+f*J+h*Q,r[10]=g*D+v*B+f*V+h*j,r[14]=g*S+v*W+f*Y+h*ee,r[3]=M*C+w*x+E*G+A*H,r[7]=M*P+w*T+E*J+A*Q,r[11]=M*D+w*B+E*V+A*j,r[15]=M*S+w*W+E*Y+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],m=e[10],p=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+r*c*d-s*l*d-r*a*m+i*l*m+s*a*p-i*c*p)+v*(+t*c*p-t*l*m+r*o*m-s*o*p+s*l*u-r*c*u)+f*(+t*l*d-t*a*p-r*o*d+i*o*p+r*a*u-i*l*u)+h*(-s*a*u-t*c*d+t*a*m+s*o*d-i*o*m+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],m=e[10],p=e[11],g=e[12],v=e[13],f=e[14],h=e[15],M=d*f*l-v*m*l+v*c*p-a*f*p-d*c*h+a*m*h,w=g*m*l-u*f*l-g*c*p+o*f*p+u*c*h-o*m*h,E=u*v*l-g*d*l+g*a*p-o*v*p-u*a*h+o*d*h,A=g*d*c-u*v*c-g*a*m+o*v*m+u*a*f-o*d*f,C=t*M+i*w+s*E+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=M*P,e[1]=(v*m*r-d*f*r-v*s*p+i*f*p+d*s*h-i*m*h)*P,e[2]=(a*f*r-v*c*r+v*s*l-i*f*l-a*s*h+i*c*h)*P,e[3]=(d*c*r-a*m*r-d*s*l+i*m*l+a*s*p-i*c*p)*P,e[4]=w*P,e[5]=(u*f*r-g*m*r+g*s*p-t*f*p-u*s*h+t*m*h)*P,e[6]=(g*c*r-o*f*r-g*s*l+t*f*l+o*s*h-t*c*h)*P,e[7]=(o*m*r-u*c*r+u*s*l-t*m*l-o*s*p+t*c*p)*P,e[8]=E*P,e[9]=(g*d*r-u*v*r-g*i*p+t*v*p+u*i*h-t*d*h)*P,e[10]=(o*v*r-g*a*r+g*i*l-t*v*l-o*i*h+t*a*h)*P,e[11]=(u*a*r-o*d*r-u*i*l+t*d*l+o*i*p-t*a*p)*P,e[12]=A*P,e[13]=(u*v*s-g*d*s+g*i*m-t*v*m-u*i*f+t*d*f)*P,e[14]=(g*a*s-o*v*s-g*i*c+t*v*c+o*i*f-t*a*f)*P,e[15]=(o*d*s-u*a*s+u*i*c-t*d*c-o*i*m+t*a*m)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,m=r*l,p=r*u,g=r*d,v=o*u,f=o*d,h=a*d,M=c*l,w=c*u,E=c*d,A=i.x,C=i.y,P=i.z;return s[0]=(1-(v+h))*A,s[1]=(p+E)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(p-E)*C,s[5]=(1-(m+h))*C,s[6]=(f+M)*C,s[7]=0,s[8]=(g+w)*P,s[9]=(f-M)*P,s[10]=(1-(m+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const l=1/r,u=1/o,d=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=2e3,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),m=(t+e)/(t-e),p=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===2e3)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===2001)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=2e3,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),m=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===2e3)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===2001)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new I,_n=new ot,_p=new I(0,0,0),xp=new I(1,1,1),oi=new I,gr=new I,nn=new I,dl=new ot,ul=new ti;class bn{constructor(e=0,t=0,i=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],m=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ul.setFromEuler(this),this.setFromQuaternion(ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yp=0;const fl=new I,Yi=new ti,Hn=new ot,vr=new I,bs=new I,Ep=new I,Sp=new ti,pl=new I(1,0,0),ml=new I(0,1,0),gl=new I(0,0,1),vl={type:"added"},wp={type:"removed"},ji={type:"childadded",child:null},No={type:"childremoved",child:null};class It extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new I,t=new bn,i=new ti,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new He}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(bs,vr,this.up):Hn.lookAt(vr,bs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wp),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),m=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}It.DEFAULT_UP=new I(0,1,0),It.DEFAULT_MATRIX_AUTO_UPDATE=!0,It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,Vn=new I,Uo=new I,Gn=new I,Zi=new I,Ki=new I,_l=new I,Fo=new I,Oo=new I,ko=new I,Bo=new St,zo=new St,Ho=new St;class yn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Vn.subVectors(i,t),Uo.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Vn),c=xn.dot(Uo),l=Vn.dot(Vn),u=Vn.dot(Uo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const m=1/d,p=(l*c-a*u)*m,g=(o*u-a*c)*m;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bo.setScalar(0),zo.setScalar(0),Ho.setScalar(0),Bo.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,i),Ho.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bo,r.x),o.addScaledVector(zo,r.y),o.addScaledVector(Ho,r.z),o}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Vn.subVectors(e,t),xn.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),xn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Zi.subVectors(s,i),Ki.subVectors(r,i),Fo.subVectors(e,i);const c=Zi.dot(Fo),l=Ki.dot(Fo);if(c<=0&&l<=0)return t.copy(i);Oo.subVectors(e,s);const u=Zi.dot(Oo),d=Ki.dot(Oo);if(u>=0&&d<=u)return t.copy(s);const m=c*d-u*l;if(m<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Zi,o);ko.subVectors(e,r);const p=Zi.dot(ko),g=Ki.dot(ko);if(g>=0&&p<=g)return t.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ki,a);const f=u*g-p*d;if(f<=0&&d-u>=0&&p-g>=0)return _l.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(_l,a);const h=1/(f+v+m);return o=v*h,a=m*h,t.copy(i).addScaledVector(Zi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Vo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*6*(.6666666666666666-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Eo(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vo(o,r,e+.3333333333333333),this.g=Vo(o,r,e),this.b=Vo(o,r,e-.3333333333333333)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=xl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Ke.workingToColorSpace(kt.copy(this),e),Math.round(Ye(kt.r*255,0,255))*65536+Math.round(Ye(kt.g*255,0,255))*256+Math.round(Ye(kt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=tn){Ke.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(_r);const i=Es(ai.h,_r.h,t),s=Es(ai.s,_r.s,t),r=Es(ai.l,_r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new et;et.NAMES=xl;let Mp=0;class Ts extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tn extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new I,xr=new Je;let bp=0;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class yl extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class El extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tp=0;const dn=new ot,Go=new It,Ji=new I,rn=new Gi,As=new Gi,Pt=new I;class En extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ol(e)?El:yl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(rn.min,As.min),rn.expandByPoint(Pt),Pt.addVectors(rn.max,As.max),rn.expandByPoint(Pt)):(rn.expandByPoint(As.min),rn.expandByPoint(As.max))}rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Pt.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(e,l),Pt.add(Ji)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new I,c[D]=new I;const l=new I,u=new I,d=new I,m=new Je,p=new Je,g=new Je,v=new I,f=new I;function h(D,S,x){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),u.sub(l),d.sub(l),p.sub(m),g.sub(m);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(T),f.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(T),a[D].add(v),a[S].add(v),a[x].add(v),c[D].add(f),c[S].add(f),c[x].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){const x=M[D],T=x.start,B=x.count;for(let W=T,G=T+B;W<G;W+=3)h(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const w=new I,E=new I,A=new I,C=new I;function P(D){A.fromBufferAttribute(s,D),C.copy(A);const S=a[D];w.copy(S),w.sub(A.multiplyScalar(A.dot(S))).normalize(),E.crossVectors(C,S);const T=E.dot(c[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,T)}for(let D=0,S=M.length;D<S;++D){const x=M[D],T=x.start,B=x.count;for(let W=T,G=T+B;W<G;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let m=0,p=e.count;m<p;m+=3){const g=e.getX(m+0),v=e.getX(m+1),f=e.getX(m+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,f),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(m+0,u.x,u.y,u.z),i.setXYZ(m+1,u.x,u.y,u.z),i.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,m=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,f=c.length;v<f;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let h=0;h<u;h++)m[g++]=l[p++]}return new An(m,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const m=l[u],p=e(m,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,m=l.length;d<m;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let m=0,p=d.length;m<p;m++)u.push(d[m].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new ot,yi=new Do,yr=new fr,wl=new I,Er=new I,Sr=new I,wr=new I,Wo=new I,Mr=new I,Ml=new I,br=new I;class Bt extends It{constructor(e=new En,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Wo.fromBufferAttribute(d,e),o?Mr.addScaledVector(Wo,u):Mr.addScaledVector(Wo.sub(t),u))}t.add(Mr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(yr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(yr,wl)===null||yi.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(Sl.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Sl),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,m=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=m.length;g<v;g++){const f=m[g],h=o[f.materialIndex],M=Math.max(f.start,p.start),w=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let E=M,A=w;E<A;E+=3){const C=a.getX(E),P=a.getX(E+1),D=a.getX(E+2);s=Tr(this,h,e,i,l,u,d,C,P,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=g,h=v;f<h;f+=3){const M=a.getX(f),w=a.getX(f+1),E=a.getX(f+2);s=Tr(this,o,e,i,l,u,d,M,w,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=m.length;g<v;g++){const f=m[g],h=o[f.materialIndex],M=Math.max(f.start,p.start),w=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let E=M,A=w;E<A;E+=3){const C=E,P=E+1,D=E+2;s=Tr(this,h,e,i,l,u,d,C,P,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let f=g,h=v;f<h;f+=3){const M=f,w=f+1,E=f+2;s=Tr(this,o,e,i,l,u,d,M,w,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Ap(n,e,t,i,s,r,o,a){let c;if(e.side===1?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===0,a),c===null)return null;br.copy(a),br.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(br);return l<t.near||l>t.far?null:{distance:l,point:br.clone(),object:n}}function Tr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Er),n.getVertexPosition(c,Sr),n.getVertexPosition(l,wr);const u=Ap(n,e,t,i,Er,Sr,wr,Ml);if(u){const d=new I;yn.getBarycoord(Ml,Er,Sr,wr,d),s&&(u.uv=yn.getInterpolatedAttribute(s,a,c,l,d,new Je)),r&&(u.uv1=yn.getInterpolatedAttribute(r,a,c,l,d,new Je)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,c,l,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:c,c:l,normal:new I,materialIndex:0};yn.getNormal(Er,Sr,wr,m.normal),u.face=m,u.barycoord=d}return u}class Cs extends En{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let m=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(d,2));function g(v,f,h,M,w,E,A,C,P,D,S){const x=E/P,T=A/D,B=E/2,W=A/2,G=C/2,J=P+1,V=D+1;let Y=0,H=0;const Q=new I;for(let j=0;j<V;j++){const ee=j*T-W;for(let xe=0;xe<J;xe++){const Oe=xe*x-B;Q[v]=Oe*M,Q[f]=ee*w,Q[h]=G,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[f]=0,Q[h]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(xe/P),d.push(1-j/D),Y+=1}}for(let j=0;j<D;j++)for(let ee=0;ee<P;ee++){const xe=m+ee+J*j,Oe=m+ee+J*(j+1),We=m+(ee+1)+J*(j+1),q=m+(ee+1)+J*j;c.push(xe,Oe,q),c.push(Oe,We,q),H+=6}a.addGroup(p,H,S),p+=H,m+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Qi(n[t]);for(const s in i)e[s]=i[s]}return e}function Cp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Rp={clone:Qi,merge:Wt};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Tl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,Al=new Je,Cl=new Je;class on extends Tl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Al,Cl),t.subVectors(Cl,Al)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class Dp extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(es,ts,e,t);s.layers=this.layers,this.add(s);const r=new on(es,ts,e,t);r.layers=this.layers,this.add(r);const o=new on(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new on(es,ts,e,t);a.layers=this.layers,this.add(a);const c=new on(es,ts,e,t);c.layers=this.layers,this.add(c);const l=new on(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,m,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Rl extends Rt{constructor(e=[],t=301,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ip extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Rl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cs(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new Bt(s,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Dp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Xn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Np={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),h=this._getHandJoint(l,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],m=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&m>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ar extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $o=new I,Up=new I,Fp=new He;class Ei{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$o.subVectors(i,t).cross(Up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($o),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Fp.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new fr,Op=new Je(.5,.5),Cr=new I;class qo{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],m=r[6],p=r[7],g=r[8],v=r[9],f=r[10],h=r[11],M=r[12],w=r[13],E=r[14],A=r[15];if(s[0].setComponents(l-o,p-u,h-g,A-M).normalize(),s[1].setComponents(l+o,p+u,h+g,A+M).normalize(),s[2].setComponents(l+a,p+d,h+v,A+w).normalize(),s[3].setComponents(l-a,p-d,h-v,A-w).normalize(),i)s[4].setComponents(c,m,f,E).normalize(),s[5].setComponents(l-c,p-m,h-f,A-E).normalize();else if(s[4].setComponents(l-c,p-m,h-f,A-E).normalize(),t===2e3)s[5].setComponents(l+c,p+m,h+f,A+E).normalize();else if(t===2001)s[5].setComponents(c,m,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=Op.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Cr.x=s.normal.x>0?e.max.x:e.min.x,Cr.y=s.normal.y>0?e.max.y:e.min.y,Cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pl extends Ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rr=new I,Pr=new I,Ll=new ot,Rs=new Do,Lr=new fr,Yo=new I,Dl=new I;class Il extends It{constructor(e=new En,t=new Pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Rr.fromBufferAttribute(t,s-1),Pr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Rr.distanceTo(Pr);e.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;Ll.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(Ll);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,m=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,f=g-1;v<f;v+=l){const h=u.getX(v),M=u.getX(v+1),w=Dr(this,e,Rs,c,h,M,v);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(g-1),f=u.getX(p),h=Dr(this,e,Rs,c,v,f,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let v=p,f=g-1;v<f;v+=l){const h=Dr(this,e,Rs,c,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=Dr(this,e,Rs,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Rr.fromBufferAttribute(a,s),Pr.fromBufferAttribute(a,r),t.distanceSqToSegment(Rr,Pr,Yo,Dl)>i)return;Yo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Yo);if(!(l<e.near||l>e.far))return{distance:l,point:Dl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Nl=new I,Ul=new I;class kp extends Il{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Nl.fromBufferAttribute(t,s),Ul.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nl.distanceTo(Ul);e.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bp extends Rt{constructor(e,t,i,s,r=1006,o=1006,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class zp extends Rt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fl extends Rt{constructor(e,t,i=1014,s,r,o,a=1003,c=1003,l,u=1026,d=1){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:d};super(m,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ns extends En{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,m=t/c,p=[],g=[],v=[],f=[];for(let h=0;h<u;h++){const M=h*m-o;for(let w=0;w<l;w++){const E=w*d-r;g.push(E,-M,0),v.push(0,0,1),f.push(w/a),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let M=0;M<a;M++){const w=M+l*h,E=M+l*(h+1),A=M+1+l*(h+1),C=M+1+l*h;p.push(w,E,C),p.push(E,A,C)}this.setIndex(p),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class wi extends En{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new I,m=new I,p=[],g=[],v=[],f=[];for(let h=0;h<=i;h++){const M=[],w=h/i;let E=0;h===0&&o===0?E=.5/t:h===i&&c===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const C=A/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),m.copy(d).normalize(),v.push(m.x,m.y,m.z),f.push(C+E,1-w),M.push(l++)}u.push(M)}for(let h=0;h<i;h++)for(let M=0;M<t;M++){const w=u[h][M+1],E=u[h][M],A=u[h+1][M],C=u[h+1][M+1];(h!==0||o>0)&&p.push(w,E,C),(h!==i-1||c<Math.PI)&&p.push(E,A,C)}this.setIndex(p),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hp extends En{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new I,r=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const d=c[l],m=d.start,p=d.count;for(let g=m,v=m+p;g<v;g+=3)for(let f=0;f<3;f++){const h=a.getX(g+f),M=a.getX(g+(f+1)%3);s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,M),Ol(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,d=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Ol(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new sn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Ol(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class Vp extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gp extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ci={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Wp{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,m=l.length;d<m;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Xp=new Wp;let jo=class{constructor(e){this.manager=e!==void 0?e:Xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class $p extends Error{constructor(e,t){super(e),this.response=t}}class qp extends jo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ci.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:i,onError:s});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=$n[e],d=l.body.getReader(),m=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=m?parseInt(m):0,g=p!==0;let v=0;const f=new ReadableStream({start(h){M();function M(){d.read().then(({done:w,value:E})=>{if(w)h.close();else{v+=E.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,P=u.length;C<P;C++){const D=u[C];D.onProgress&&D.onProgress(A)}h.enqueue(E),M()}},w=>{h.error(w)})}}});return new Response(f)}else throw new $p(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),m=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(m);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ci.add(`file:${e}`,l);const u=$n[e];delete $n[e];for(let d=0,m=u.length;d<m;d++){const p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),l;delete $n[e];for(let d=0,m=u.length;d<m;d++){const p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const is=new WeakMap;class Yp extends jo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=is.get(o);d===void 0&&(d=[],is.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=Ss("img");function c(){u(),t&&t(this);const d=is.get(this)||[];for(let m=0;m<d.length;m++){const p=d[m];p.onLoad&&p.onLoad(this)}is.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),ci.remove(`image:${e}`);const m=is.get(this)||[];for(let p=0;p<m.length;p++){const g=m[p];g.onError&&g.onError(d)}is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ci.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class jp extends Tl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zp extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kl=new ot;class Bl{constructor(e,t,i=0,s=1/0){this.ray=new Do(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kl),this}intersectObject(e,t=!0,i=[]){return Zo(e,this,i,t),i.sort(zl),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zo(e[s],this,i,t);return i.sort(zl),i}}function zl(n,e){return n.distance-e.distance}function Zo(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Zo(r[o],e,t,!0)}}function Hl(n,e,t,i){const s=Kp(i);switch(t){case 1021:return n*e;case 1028:return n*e/s.components*s.byteLength;case 1029:return n*e/s.components*s.byteLength;case 1030:return n*e*2/s.components*s.byteLength;case 1031:return n*e*2/s.components*s.byteLength;case 1022:return n*e*3/s.components*s.byteLength;case 1023:return n*e*4/s.components*s.byteLength;case 1033:return n*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kp(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vl(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Jp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let m=0;for(let p=1;p<d.length;p++){const g=d[m],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++m,d[m]=v)}d.length=m+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,um=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
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
#endif`,Km=`struct PhysicalMaterial {
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
}`,Jm=`
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Og=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ve={alphahash_fragment:Qp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:om,batching_pars_vertex:am,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:hm,bsdfs:dm,iridescence_fragment:um,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:vm,color_fragment:_m,color_pars_fragment:xm,color_pars_vertex:ym,color_vertex:Em,common:Sm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Mm,displacementmap_pars_vertex:bm,displacementmap_vertex:Tm,emissivemap_fragment:Am,emissivemap_pars_fragment:Cm,colorspace_fragment:Rm,colorspace_pars_fragment:Pm,envmap_fragment:Lm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Im,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:Fm,fog_pars_vertex:Om,fog_fragment:km,fog_pars_fragment:Bm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Wm,lights_toon_fragment:$m,lights_toon_pars_fragment:qm,lights_phong_fragment:Ym,lights_phong_pars_fragment:jm,lights_physical_fragment:Zm,lights_physical_pars_fragment:Km,lights_fragment_begin:Jm,lights_fragment_maps:Qm,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:sg,map_fragment:rg,map_pars_fragment:og,map_particle_fragment:ag,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:hg,morphinstance_vertex:dg,morphcolor_vertex:ug,morphnormal_vertex:fg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:vg,normal_pars_fragment:_g,normal_pars_vertex:xg,normal_vertex:yg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:bg,opaque_fragment:Tg,packing:Ag,premultiplied_alpha_fragment:Cg,project_vertex:Rg,dithering_fragment:Pg,dithering_pars_fragment:Lg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Fg,shadowmask_pars_fragment:Og,skinbase_vertex:kg,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:Hg,specularmap_fragment:Vg,specularmap_pars_fragment:Gg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:$g,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:jg,uv_vertex:Zg,worldpos_vertex:Kg,background_vert:`varying vec2 vUv;
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
}`},de={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Cn={basic:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Wt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Wt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Wt([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Wt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Wt([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Wt([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Wt([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Wt([de.lights,de.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Cn.physical={uniforms:Wt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ir={r:0,b:0,g:0},Mi=new bn,Jg=new ot;function Qg(n,e,t,i,s,r,o){const a=new et(0);let c=r===!0?0:1,l,u,d=null,m=0,p=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function v(w){let E=!1;const A=g(w);A===null?h(a,c):A&&A.isColor&&(h(A,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(w,E){const A=g(E);A&&(A.isCubeTexture||A.mapping===306)?(u===void 0&&(u=new Bt(new Cs(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Qi(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Mi.copy(E.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Mi)),u.material.toneMapped=Ke.getTransfer(A.colorSpace)!==rt,(d!==A||m!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,m=A.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Bt(new ns(2,2),new Wn({name:"BackgroundMaterial",uniforms:Qi(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(A.colorSpace)!==rt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||m!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,m=A.version,p=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function h(w,E){w.getRGB(Ir,bl(n)),i.buffers.color.setClear(Ir.r,Ir.g,Ir.b,E,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),c=E,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,h(a,c)},render:v,addToRenderList:f,dispose:M}}function ev(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let r=s,o=!1;function a(x,T,B,W,G){let J=!1;const V=d(W,B,T);r!==V&&(r=V,l(r.object)),J=p(x,W,B,G),J&&g(x,W,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,E(x,T,B,W),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,T,B){const W=B.wireframe===!0;let G=i[x.id];G===void 0&&(G={},i[x.id]=G);let J=G[T.id];J===void 0&&(J={},G[T.id]=J);let V=J[W];return V===void 0&&(V=m(c()),J[W]=V),V}function m(x){const T=[],B=[],W=[];for(let G=0;G<t;G++)T[G]=0,B[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:B,attributeDivisors:W,object:x,attributes:{},index:null}}function p(x,T,B,W){const G=r.attributes,J=T.attributes;let V=0;const Y=B.getAttributes();for(const H in Y)if(Y[H].location>=0){const j=G[H];let ee=J[H];if(ee===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),j===void 0||j.attribute!==ee||ee&&j.data!==ee.data)return!0;V++}return r.attributesNum!==V||r.index!==W}function g(x,T,B,W){const G={},J=T.attributes;let V=0;const Y=B.getAttributes();for(const H in Y)if(Y[H].location>=0){let j=J[H];j===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(j=x.instanceColor));const ee={};ee.attribute=j,j&&j.data&&(ee.data=j.data),G[H]=ee,V++}r.attributes=G,r.attributesNum=V,r.index=W}function v(){const x=r.newAttributes;for(let T=0,B=x.length;T<B;T++)x[T]=0}function f(x){h(x,0)}function h(x,T){const B=r.newAttributes,W=r.enabledAttributes,G=r.attributeDivisors;B[x]=1,W[x]===0&&(n.enableVertexAttribArray(x),W[x]=1),G[x]!==T&&(n.vertexAttribDivisor(x,T),G[x]=T)}function M(){const x=r.newAttributes,T=r.enabledAttributes;for(let B=0,W=T.length;B<W;B++)T[B]!==x[B]&&(n.disableVertexAttribArray(B),T[B]=0)}function w(x,T,B,W,G,J,V){V===!0?n.vertexAttribIPointer(x,T,B,G,J):n.vertexAttribPointer(x,T,B,W,G,J)}function E(x,T,B,W){v();const G=W.attributes,J=B.getAttributes(),V=T.defaultAttributeValues;for(const Y in J){const H=J[Y];if(H.location>=0){let Q=G[Y];if(Q===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const j=Q.normalized,ee=Q.itemSize,xe=e.get(Q);if(xe===void 0)continue;const Oe=xe.buffer,We=xe.type,q=xe.bytesPerElement,ce=We===n.INT||We===n.UNSIGNED_INT||Q.gpuType===1013;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Le=oe.stride,be=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<H.locationSize;Ue++)h(H.location+Ue,oe.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)f(H.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Ue=0;Ue<H.locationSize;Ue++)w(H.location+Ue,ee/H.locationSize,We,j,Le*q,(be+ee/H.locationSize*Ue)*q,ce)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)h(H.location+oe,Q.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<H.locationSize;oe++)f(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let oe=0;oe<H.locationSize;oe++)w(H.location+oe,ee/H.locationSize,We,j,ee*q,ee/H.locationSize*oe*q,ce)}}else if(V!==void 0){const j=V[Y];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(H.location,j);break;case 3:n.vertexAttrib3fv(H.location,j);break;case 4:n.vertexAttrib4fv(H.location,j);break;default:n.vertexAttrib1fv(H.location,j)}}}}M()}function A(){D();for(const x in i){const T=i[x];for(const B in T){const W=T[B];for(const G in W)u(W[G].object),delete W[G];delete T[B]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const B in T){const W=T[B];for(const G in W)u(W[G].object),delete W[G];delete T[B]}delete i[x.id]}function P(x){for(const T in i){const B=i[T];if(B[x.id]===void 0)continue;const W=B[x.id];for(const G in W)u(W[G].object),delete W[G];delete B[x.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:f,disableUnusedAttributes:M}}function tv(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,m){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],m[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,m,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*m[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function nv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==1023&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!D)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:A,maxSamples:C}}function iv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ei,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const p=d.length!==0||m||i!==0||s;return s=m,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){t=u(d,m,0)},this.setState=function(d,m,p){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{const M=r?0:i,w=M*4;let E=h.clippingState||null;c.value=E,E=u(g,m,w,p);for(let A=0;A!==w;++A)E[A]=t[A];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,m,p,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const h=p+v*4,M=m.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<h)&&(f=new Float32Array(h));for(let w=0,E=p;w!==v;++w,E+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(f,E),f[E+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function sv(n){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ip(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ss=4,Gl=[.125,.215,.35,.446,.526,.582],bi=20,Ko=new jp,Wl=new et;let Jo=null,Qo=0,ea=0,ta=!1;const Ti=(1+Math.sqrt(5))/2,rs=1/Ti,Xl=[new I(-Ti,rs,0),new I(Ti,rs,0),new I(-rs,0,Ti),new I(rs,0,Ti),new I(0,Ti,-rs),new I(0,Ti,rs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],rv=new I;class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=rv}=r;Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,ea),this._renderer.xr.enabled=ta,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:vi,depthBuffer:!1},s=ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ov(r)),this._blurMaterial=av(r,e,t)}return s}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,i,s,r){const c=new on(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,p=d.toneMapping;d.getClearColor(Wl),d.toneMapping=0,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Tn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),f=new Bt(new Cs,v);let h=!1;const M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,h=!0):(v.color.copy(Wl),h=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z)):E===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]));const A=this._cubeSize;Nr(s,E*A,w>2?A:0,A,A),d.setRenderTarget(s),h&&d.render(f,c),d.render(e,c)}f.geometry.dispose(),f.material.dispose(),d.toneMapping=p,d.autoClear=m,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Nr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ko)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xl[(s-r-1)%Xl.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Bt(this._lodPlanes[s],l),m=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),v=r/g,f=isFinite(r)?1+Math.floor(u*v):bi;f>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${bi}`);const h=[];let M=0;for(let P=0;P<bi;++P){const D=P/v,S=Math.exp(-D*D/2);h.push(S),P===0?M+=S:P<f&&(M+=2*S)}for(let P=0;P<h.length;P++)h[P]=h[P]/M;m.envMap.value=e.texture,m.samples.value=f,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:w}=this;m.dTheta.value=g,m.mipInt.value=w-i;const E=this._sizeLods[s],A=3*E*(s>w-ss?s-w+ss:0),C=4*(this._cubeSize-E);Nr(t,A,C,3*E,2*E),c.setRenderTarget(t),c.render(d,Ko)}}function ov(n){const e=[],t=[],i=[];let s=n;const r=n-ss+1+Gl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-ss?c=Gl[o-n+ss-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,m=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,f=2,h=1,M=new Float32Array(v*g*p),w=new Float32Array(f*g*p),E=new Float32Array(h*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,D=C>2?0:-1,S=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];M.set(S,v*g*C),w.set(m,f*g*C);const x=[C,C,C,C,C,C];E.set(x,h*g*C)}const A=new En;A.setAttribute("position",new An(M,v)),A.setAttribute("uv",new An(w,f)),A.setAttribute("faceIndex",new An(E,h)),e.push(A),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ql(n,e,t){const i=new ni(n,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function av(n,e,t){const i=new Float32Array(bi),s=new I(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:na(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yl(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function jl(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function na(){return`

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
	`}function lv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u){let d=e.get(a);const m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new $l(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new $l(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&zi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function hv(n,e,t,i){const s={},r=new WeakMap;function o(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id];const p=r.get(m);p&&(e.remove(p),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(d,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function c(d){const m=d.attributes;for(const p in m)e.update(m[p],n.ARRAY_BUFFER)}function l(d){const m=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let w=0,E=M.length;w<E;w+=3){const A=M[w+0],C=M[w+1],P=M[w+2];m.push(A,C,C,P,P,A)}}else if(g!==void 0){const M=g.array;v=g.version;for(let w=0,E=M.length/3-1;w<E;w+=3){const A=w+0,C=w+1,P=w+2;m.push(A,C,C,P,P,A)}}else return;const f=new(ol(m)?El:yl)(m,1);f.version=v;const h=r.get(d);h&&e.remove(h),r.set(d,f)}function u(d){const m=r.get(d);if(m){const p=d.index;p!==null&&m.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function dv(n,e,t){let i;function s(m){i=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,p){n.drawElements(i,p,r,m*o),t.update(p,i,1)}function l(m,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,m*o,g),t.update(p,i,g))}function u(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,m,0,g);let f=0;for(let h=0;h<g;h++)f+=p[h];t.update(f,i,1)}function d(m,p,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<m.length;h++)l(m[h]/o,p[h],v[h]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,r,m,0,v,0,g);let h=0;for(let M=0;M<g;M++)h+=p[M]*v[M];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function uv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fv(n,e,t){const i=new WeakMap,s=new St;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let m=i.get(a);if(m===void 0||m.count!==d){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;p===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let E=a.attributes.position.count*w,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*A*4*d),P=new hl(C,E,A,d);P.type=1015,P.needsUpdate=!0;const D=w*4;for(let x=0;x<d;x++){const T=f[x],B=h[x],W=M[x],G=E*A*4*x;for(let J=0;J<T.count;J++){const V=J*D;p===!0&&(s.fromBufferAttribute(T,J),C[G+V+0]=s.x,C[G+V+1]=s.y,C[G+V+2]=s.z,C[G+V+3]=0),g===!0&&(s.fromBufferAttribute(B,J),C[G+V+4]=s.x,C[G+V+5]=s.y,C[G+V+6]=s.z,C[G+V+7]=0),v===!0&&(s.fromBufferAttribute(W,J),C[G+V+8]=s.x,C[G+V+9]=s.y,C[G+V+10]=s.z,C[G+V+11]=W.itemSize===4?s.w:1)}}m={count:d,texture:P,size:new Je(E,A)},i.set(a,m),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function pv(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Zl=new Rt,Kl=new Fl(1,1),Jl=new hl,Ql=new gp,ec=new Rl,tc=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function os(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ur(n,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;rc.set(i),n.uniformMatrix2fv(this.addr,!1,rc),At(t,i)}}function yv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),At(t,i)}}function Ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),At(t,i)}}function Sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Tv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function Rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Pv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kl.compareFunction=515,r=Kl):r=Zl,t.setTexture2D(e||r,s)}function Lv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ql,s)}function Dv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ec,s)}function Iv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jl,s)}function Nv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return vv;case 35666:return _v;case 35674:return xv;case 35675:return yv;case 35676:return Ev;case 5124:case 35670:return Sv;case 35667:case 35671:return wv;case 35668:case 35672:return Mv;case 35669:case 35673:return bv;case 5125:return Tv;case 36294:return Av;case 36295:return Cv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Uv(n,e){n.uniform1fv(this.addr,e)}function Fv(n,e){const t=os(e,this.size,2);n.uniform2fv(this.addr,t)}function Ov(n,e){const t=os(e,this.size,3);n.uniform3fv(this.addr,t)}function kv(n,e){const t=os(e,this.size,4);n.uniform4fv(this.addr,t)}function Bv(n,e){const t=os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zv(n,e){const t=os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hv(n,e){const t=os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vv(n,e){n.uniform1iv(this.addr,e)}function Gv(n,e){n.uniform2iv(this.addr,e)}function Wv(n,e){n.uniform3iv(this.addr,e)}function Xv(n,e){n.uniform4iv(this.addr,e)}function $v(n,e){n.uniform1uiv(this.addr,e)}function qv(n,e){n.uniform2uiv(this.addr,e)}function Yv(n,e){n.uniform3uiv(this.addr,e)}function jv(n,e){n.uniform4uiv(this.addr,e)}function Zv(n,e,t){const i=this.cache,s=e.length,r=Ur(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zl,r[o])}function Kv(n,e,t){const i=this.cache,s=e.length,r=Ur(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ql,r[o])}function Jv(n,e,t){const i=this.cache,s=e.length,r=Ur(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ec,r[o])}function Qv(n,e,t){const i=this.cache,s=e.length,r=Ur(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jl,r[o])}function e_(n){switch(n){case 5126:return Uv;case 35664:return Fv;case 35665:return Ov;case 35666:return kv;case 35674:return Bv;case 35675:return zv;case 35676:return Hv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return $v;case 36294:return qv;case 36295:return Yv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}class t_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nv(t.type)}}class n_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e_(t.type)}}class i_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function oc(n,e){n.seq.push(e),n.map[e.id]=e}function s_(n,e,t){const i=n.name,s=i.length;for(ia.lastIndex=0;;){const r=ia.exec(i),o=ia.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){oc(t,l===void 0?new t_(a,n,e):new n_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new i_(a),oc(t,d)),t=d}}}class Fr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);s_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ac(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const r_=37297;let o_=0;function a_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const lc=new He;function l_(n){Ke._getMatrix(lc,Ke.workingColorSpace,n);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case cr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+a_(n.getShaderSource(e),a)}else return r}function c_(n,e){const t=l_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function h_(n,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Or=new I;function d_(){Ke.getLuminanceCoefficients(Or);const n=Or.x.toFixed(4),e=Or.y.toFixed(4),t=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function f_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ps(n){return n!==""}function hc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(n){return n.replace(m_,v_)}const g_=new Map;function v_(n,e){let t=Ve[e];if(t===void 0){const i=g_.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sa(t)}const __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(n){return n.replace(__,x_)}function x_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function y_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function E_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function w_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function M_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function b_(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=y_(t),l=E_(t),u=S_(t),d=w_(t),m=M_(t),p=u_(t),g=f_(r),v=s.createProgram();let f,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),h.length>0&&(h+=`
`)):(f=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),h=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ve.tonemapping_pars_fragment:"",t.toneMapping!==0?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,c_("linearToOutputTexel",t.outputColorSpace),d_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),o=sa(o),o=hc(o,t),o=dc(o,t),a=sa(a),a=hc(a,t),a=dc(a,t),o=uc(o),a=uc(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=M+f+o,E=M+h+a,A=ac(s,s.VERTEX_SHADER,w),C=ac(s,s.FRAGMENT_SHADER,E);s.attachShader(v,A),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(T){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(C)||"",J=B.trim(),V=W.trim(),Y=G.trim();let H=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,C);else{const j=cc(s,A,"vertex"),ee=cc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+J+`
`+j+`
`+ee)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(V===""||Y==="")&&(Q=!1);Q&&(T.diagnostics={runnable:H,programLog:J,vertexShader:{log:V,prefix:f},fragmentShader:{log:Y,prefix:h}})}s.deleteShader(A),s.deleteShader(C),D=new Fr(s,v),S=p_(s,v)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,r_)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let T_=0;class A_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new C_(e),t.set(e,i)),i}}class C_{constructor(e){this.id=T_++,this.code=e,this.usedTimes=0}}function R_(n,e,t,i,s,r,o){const a=new Io,c=new A_,l=new Set,u=[],d=s.logarithmicDepthBuffer,m=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function f(S,x,T,B,W){const G=B.fog,J=W.geometry,V=S.isMeshStandardMaterial?B.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),H=Y&&Y.mapping===306?Y.image.height:null,Q=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const j=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ee=j!==void 0?j.length:0;let xe=0;J.morphAttributes.position!==void 0&&(xe=1),J.morphAttributes.normal!==void 0&&(xe=2),J.morphAttributes.color!==void 0&&(xe=3);let Oe,We,q,ce;if(Q){const ke=Cn[Q];Oe=ke.vertexShader,We=ke.fragmentShader}else Oe=S.vertexShader,We=S.fragmentShader,c.update(S),q=c.getVertexShaderID(S),ce=c.getFragmentShaderID(S);const oe=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),be=W.isInstancedMesh===!0,Ue=W.isBatchedMesh===!0,pt=!!S.map,$e=!!S.matcap,R=!!Y,st=!!S.aoMap,Re=!!S.lightMap,Ze=!!S.bumpMap,ve=!!S.normalMap,lt=!!S.displacementMap,ye=!!S.emissiveMap,Be=!!S.metalnessMap,mt=!!S.roughnessMap,gt=S.anisotropy>0,b=S.clearcoat>0,_=S.dispersion>0,z=S.iridescence>0,K=S.sheen>0,te=S.transmission>0,Z=gt&&!!S.anisotropyMap,Te=b&&!!S.clearcoatMap,le=b&&!!S.clearcoatNormalMap,Se=b&&!!S.clearcoatRoughnessMap,Ae=z&&!!S.iridescenceMap,ne=z&&!!S.iridescenceThicknessMap,fe=K&&!!S.sheenColorMap,Ie=K&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,he=!!S.specularColorMap,ze=!!S.specularIntensityMap,L=te&&!!S.transmissionMap,se=te&&!!S.thicknessMap,ae=!!S.gradientMap,O=!!S.alphaMap,k=S.alphaTest>0,N=!!S.alphaHash,ie=!!S.extensions;let Ee=0;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ee=n.toneMapping);const qe={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:We,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&W._colorsTexture!==null,instancing:be,instancingColor:be&&W.instanceColor!==null,instancingMorph:be&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:vi,alphaToCoverage:!!S.alphaToCoverage,map:pt,matcap:$e,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:H,aoMap:st,lightMap:Re,bumpMap:Ze,normalMap:ve,displacementMap:m&&lt,emissiveMap:ye,normalMapObjectSpace:ve&&S.normalMapType===1,normalMapTangentSpace:ve&&S.normalMapType===0,metalnessMap:Be,roughnessMap:mt,anisotropy:gt,anisotropyMap:Z,clearcoat:b,clearcoatMap:Te,clearcoatNormalMap:le,clearcoatRoughnessMap:Se,dispersion:_,iridescence:z,iridescenceMap:Ae,iridescenceThicknessMap:ne,sheen:K,sheenColorMap:fe,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:he,specularIntensityMap:ze,transmission:te,transmissionMap:L,thicknessMap:se,gradientMap:ae,opaque:S.transparent===!1&&S.blending===1&&S.alphaToCoverage===!1,alphaMap:O,alphaTest:k,alphaHash:N,combine:S.combine,mapUv:pt&&v(S.map.channel),aoMapUv:st&&v(S.aoMap.channel),lightMapUv:Re&&v(S.lightMap.channel),bumpMapUv:Ze&&v(S.bumpMap.channel),normalMapUv:ve&&v(S.normalMap.channel),displacementMapUv:lt&&v(S.displacementMap.channel),emissiveMapUv:ye&&v(S.emissiveMap.channel),metalnessMapUv:Be&&v(S.metalnessMap.channel),roughnessMapUv:mt&&v(S.roughnessMap.channel),anisotropyMapUv:Z&&v(S.anisotropyMap.channel),clearcoatMapUv:Te&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(S.sheenRoughnessMap.channel),specularMapUv:Ce&&v(S.specularMap.channel),specularColorMapUv:he&&v(S.specularColorMap.channel),specularIntensityMapUv:ze&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:se&&v(S.thicknessMap.channel),alphaMapUv:O&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ve||gt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(pt||O),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:W.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:pt&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ie&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&S.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(M(x,S),w(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function M(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function w(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){const x=g[S.type];let T;if(x){const B=Cn[x];T=Rp.clone(B.uniforms)}else T=S.uniforms;return T}function A(S,x){let T;for(let B=0,W=u.length;B<W;B++){const G=u[B];if(G.cacheKey===x){T=G,++T.usedTimes;break}}return T===void 0&&(T=new b_(n,x,S,r),u.push(T)),T}function C(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function P(S){c.remove(S)}function D(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:E,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:D}}function P_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function L_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,m,p,g,v,f){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:m,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},n[e]=h):(h.id=d.id,h.object=d,h.geometry=m,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=f),e++,h}function a(d,m,p,g,v,f){const h=o(d,m,p,g,v,f);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function c(d,m,p,g,v,f){const h=o(d,m,p,g,v,f);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,m){t.length>1&&t.sort(d||L_),i.length>1&&i.sort(m||pc),s.length>1&&s.sort(m||pc)}function u(){for(let d=e,m=n.length;d<m;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function D_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new mc,n.set(i,[o])):s>=r.length?(o=new mc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function I_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new et};break;case"SpotLight":t={position:new I,direction:new I,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function N_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let U_=0;function F_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O_(n){const e=new I_,t=N_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new ot,o=new ot;function a(l){let u=0,d=0,m=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,v=0,f=0,h=0,M=0,w=0,E=0,A=0,C=0,P=0;l.sort(F_);for(let S=0,x=l.length;S<x;S++){const T=l[S],B=T.color,W=T.intensity,G=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=B.r*W,d+=B.g*W,m+=B.b*W;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],W);P++}else if(T.isDirectionalLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,H=t.get(T);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=T.shadow.matrix,M++}i.directional[p]=V,p++}else if(T.isSpotLight){const V=e.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(B).multiplyScalar(W),V.distance=G,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[v]=V;const Y=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,Y.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[v]=Y.matrix,T.castShadow){const H=t.get(T);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=J,E++}v++}else if(T.isRectAreaLight){const V=e.get(T);V.color.copy(B).multiplyScalar(W),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[f]=V,f++}else if(T.isPointLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const Y=T.shadow,H=t.get(T);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=T.shadow.matrix,w++}i.point[g]=V,g++}else if(T.isHemisphereLight){const V=e.get(T);V.skyColor.copy(T.color).multiplyScalar(W),V.groundColor.copy(T.groundColor).multiplyScalar(W),i.hemi[h]=V,h++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=m;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==f||D.hemiLength!==h||D.numDirectionalShadows!==M||D.numPointShadows!==w||D.numSpotShadows!==E||D.numSpotMaps!==A||D.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=f,D.hemiLength=h,D.numDirectionalShadows=M,D.numPointShadows=w,D.numSpotShadows=E,D.numSpotMaps=A,D.numLightProbes=P,i.version=U_++)}function c(l,u){let d=0,m=0,p=0,g=0,v=0;const f=u.matrixWorldInverse;for(let h=0,M=l.length;h<M;h++){const w=l[h];if(w.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),d++}else if(w.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),p++}else if(w.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(w.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(f),v++}}}return{setup:a,setupView:c,state:i}}function gc(n){const e=new O_(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function k_(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new gc(n),e.set(s,[a])):r>=o.length?(a=new gc(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
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
}`;function H_(n,e,t){let i=new qo;const s=new Je,r=new Je,o=new St,a=new Vp({depthPacking:3201}),c=new Gp,l={},u=t.maxTextureSize,d={0:1,1:0,2:2},m=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:B_,fragmentShader:z_}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let h=this.type;this.render=function(C,P,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),B=n.state;B.setBlending(0),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=h!==3&&this.type===3,G=h===3&&this.type!==3;for(let J=0,V=C.length;J<V;J++){const Y=C[J],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Q=H.getFrameExtents();if(s.multiply(Q),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y)),H.map===null||W===!0||G===!0){const ee=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new ni(s.x,s.y,ee),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const j=H.getViewportCount();for(let ee=0;ee<j;ee++){const xe=H.getViewport(ee);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),B.viewport(o),H.updateMatrices(Y,ee),i=H.getFrustum(),E(P,D,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===3&&M(H,D),H.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(S,x,T)};function M(C,P){const D=e.update(v);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ni(s.x,s.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,D,m,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,D,p,v,null)}function w(C,P,D,S){let x=null;const T=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=D.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=x.uuid,W=P.uuid;let G=l[B];G===void 0&&(G={},l[B]=G);let J=G[W];J===void 0&&(J=x.clone(),G[W]=J,P.addEventListener("dispose",A)),x=J}if(x.visible=P.visible,x.wireframe=P.wireframe,S===3?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:d[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=n.properties.get(x);B.light=D}return x}function E(C,P,D,S,x){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===3)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const W=e.update(C),G=C.material;if(Array.isArray(G)){const J=W.groups;for(let V=0,Y=J.length;V<Y;V++){const H=J[V],Q=G[H.materialIndex];if(Q&&Q.visible){const j=w(C,Q,S,x);C.onBeforeShadow(n,C,P,D,W,j,H),n.renderBufferDirect(D,null,W,j,C,H),C.onAfterShadow(n,C,P,D,W,j,H)}}}else if(G.visible){const J=w(C,G,S,x);C.onBeforeShadow(n,C,P,D,W,J,null),n.renderBufferDirect(D,null,W,J,C,null),C.onAfterShadow(n,C,P,D,W,J,null)}}const B=C.children;for(let W=0,G=B.length;W<G;W++)E(B[W],P,D,S,x)}function A(C){C.target.removeEventListener("dispose",A);for(const D in l){const S=l[D],x=C.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const V_={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function G_(n,e){function t(){let L=!1;const se=new St;let ae=null;const O=new St(0,0,0,0);return{setMask:function(k){ae!==k&&!L&&(n.colorMask(k,k,k,k),ae=k)},setLocked:function(k){L=k},setClear:function(k,N,ie,Ee,qe){qe===!0&&(k*=Ee,N*=Ee,ie*=Ee),se.set(k,N,ie,Ee),O.equals(se)===!1&&(n.clearColor(k,N,ie,Ee),O.copy(se))},reset:function(){L=!1,ae=null,O.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,ae=null,O=null,k=null;return{setReversed:function(N){if(se!==N){const ie=e.get("EXT_clip_control");N?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),se=N;const Ee=k;k=null,this.setClear(Ee)}},getReversed:function(){return se},setTest:function(N){N?oe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(N){ae!==N&&!L&&(n.depthMask(N),ae=N)},setFunc:function(N){if(se&&(N=V_[N]),O!==N){switch(N){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}O=N}},setLocked:function(N){L=N},setClear:function(N){k!==N&&(se&&(N=1-N),n.clearDepth(N),k=N)},reset:function(){L=!1,ae=null,O=null,k=null,se=!1}}}function s(){let L=!1,se=null,ae=null,O=null,k=null,N=null,ie=null,Ee=null,qe=null;return{setTest:function(ke){L||(ke?oe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ke){se!==ke&&!L&&(n.stencilMask(ke),se=ke)},setFunc:function(ke,yt,vt){(ae!==ke||O!==yt||k!==vt)&&(n.stencilFunc(ke,yt,vt),ae=ke,O=yt,k=vt)},setOp:function(ke,yt,vt){(N!==ke||ie!==yt||Ee!==vt)&&(n.stencilOp(ke,yt,vt),N=ke,ie=yt,Ee=vt)},setLocked:function(ke){L=ke},setClear:function(ke){qe!==ke&&(n.clearStencil(ke),qe=ke)},reset:function(){L=!1,se=null,ae=null,O=null,k=null,N=null,ie=null,Ee=null,qe=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},m=new WeakMap,p=[],g=null,v=!1,f=null,h=null,M=null,w=null,E=null,A=null,C=null,P=new et(0,0,0),D=0,S=!1,x=null,T=null,B=null,W=null,G=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Y>=2);let Q=null,j={};const ee=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Oe=new St().fromArray(ee),We=new St().fromArray(xe);function q(L,se,ae,O){const k=new Uint8Array(4),N=n.createTexture();n.bindTexture(L,N),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ie=0;ie<ae;ie++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,O,0,n.RGBA,n.UNSIGNED_BYTE,k):n.texImage2D(se+ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,k);return N}const ce={};ce[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(3),Ze(!1),ve(1),oe(n.CULL_FACE),st(0);function oe(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Le(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function be(L,se){return d[L]!==se?(n.bindFramebuffer(L,se),d[L]=se,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Ue(L,se){let ae=p,O=!1;if(L){ae=m.get(se),ae===void 0&&(ae=[],m.set(se,ae));const k=L.textures;if(ae.length!==k.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let N=0,ie=k.length;N<ie;N++)ae[N]=n.COLOR_ATTACHMENT0+N;ae.length=k.length,O=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,O=!0);O&&n.drawBuffers(ae)}function pt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const $e={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};$e[103]=n.MIN,$e[104]=n.MAX;const R={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function st(L,se,ae,O,k,N,ie,Ee,qe,ke){if(L===0){v===!0&&(Le(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),L!==5){if(L!==f||ke!==S){if((h!==100||E!==100)&&(n.blendEquation(n.FUNC_ADD),h=100,E=100),ke)switch(L){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,w=null,A=null,C=null,P.set(0,0,0),D=0,f=L,S=ke}return}k=k||se,N=N||ae,ie=ie||O,(se!==h||k!==E)&&(n.blendEquationSeparate($e[se],$e[k]),h=se,E=k),(ae!==M||O!==w||N!==A||ie!==C)&&(n.blendFuncSeparate(R[ae],R[O],R[N],R[ie]),M=ae,w=O,A=N,C=ie),(Ee.equals(P)===!1||qe!==D)&&(n.blendColor(Ee.r,Ee.g,Ee.b,qe),P.copy(Ee),D=qe),f=L,S=!1}function Re(L,se){L.side===2?Le(n.CULL_FACE):oe(n.CULL_FACE);let ae=L.side===1;se&&(ae=!ae),Ze(ae),L.blending===1&&L.transparent===!1?st(0):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const O=L.stencilWrite;a.setTest(O),O&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(L){x!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),x=L)}function ve(L){L!==0?(oe(n.CULL_FACE),L!==T&&(L===1?n.cullFace(n.BACK):L===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),T=L}function lt(L){L!==B&&(V&&n.lineWidth(L),B=L)}function ye(L,se,ae){L?(oe(n.POLYGON_OFFSET_FILL),(W!==se||G!==ae)&&(n.polygonOffset(se,ae),W=se,G=ae)):Le(n.POLYGON_OFFSET_FILL)}function Be(L){L?oe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function mt(L){L===void 0&&(L=n.TEXTURE0+J-1),Q!==L&&(n.activeTexture(L),Q=L)}function gt(L,se,ae){ae===void 0&&(Q===null?ae=n.TEXTURE0+J-1:ae=Q);let O=j[ae];O===void 0&&(O={type:void 0,texture:void 0},j[ae]=O),(O.type!==L||O.texture!==se)&&(Q!==ae&&(n.activeTexture(ae),Q=ae),n.bindTexture(L,se||ce[L]),O.type=L,O.texture=se)}function b(){const L=j[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){Oe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Oe.copy(L))}function Ie(L){We.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),We.copy(L))}function Ce(L,se){let ae=l.get(se);ae===void 0&&(ae=new WeakMap,l.set(se,ae));let O=ae.get(L);O===void 0&&(O=n.getUniformBlockIndex(se,L.name),ae.set(L,O))}function he(L,se){const O=l.get(se).get(L);c.get(se)!==O&&(n.uniformBlockBinding(se,O,L.__bindingPointIndex),c.set(se,O))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,j={},d={},m=new WeakMap,p=[],g=null,v=!1,f=null,h=null,M=null,w=null,E=null,A=null,C=null,P=new et(0,0,0),D=0,S=!1,x=null,T=null,B=null,W=null,G=null,Oe.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Le,bindFramebuffer:be,drawBuffers:Ue,useProgram:pt,setBlending:st,setMaterial:Re,setFlipSided:Ze,setCullFace:ve,setLineWidth:lt,setPolygonOffset:ye,setScissorTest:Be,activeTexture:mt,bindTexture:gt,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Ae,texImage3D:ne,updateUBOMapping:Ce,uniformBlockBinding:he,texStorage2D:le,texStorage3D:Se,texSubImage2D:K,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:Te,scissor:fe,viewport:Ie,reset:ze}}function W_(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,u=new WeakMap;let d;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Ss("canvas")}function v(b,_,z){let K=1;const te=gt(b);if((te.width>z||te.height>z)&&(K=z/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(K*te.width),Te=Math.floor(K*te.height);d===void 0&&(d=g(Z,Te));const le=_?g(Z,Te):d;return le.width=Z,le.height=Te,le.getContext("2d").drawImage(b,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Te+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function f(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(b,_,z,K,te=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=_;if(_===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),_===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),_===n.RGBA){const Te=te?cr:Ke.getTransfer(K);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(b,_){let z;return b?_===null||_===1014||_===1020?z=n.DEPTH24_STENCIL8:_===1015?z=n.DEPTH32F_STENCIL8:_===1012&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?z=n.DEPTH_COMPONENT24:_===1015?z=n.DEPTH_COMPONENT32F:_===1012&&(z=n.DEPTH_COMPONENT16),z}function A(b,_){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function C(b){const _=b.target;_.removeEventListener("dispose",C),D(_),_.isVideoTexture&&u.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),x(_)}function D(b){const _=i.get(b);if(_.__webglInit===void 0)return;const z=b.source,K=m.get(z);if(K){const te=K[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(b),Object.keys(K).length===0&&m.delete(z)}i.remove(b)}function S(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const z=b.source,K=m.get(z);delete K[_.__cacheKey],o.memory.textures--}function x(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let te=0;te<_.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(_.__webglFramebuffer[K][te]);else n.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)n.deleteFramebuffer(_.__webglFramebuffer[K]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=b.textures;for(let K=0,te=z.length;K<te;K++){const Z=i.get(z[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(b)}let T=0;function B(){T=0}function W(){const b=T;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),T+=1,b}function G(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function J(b,_){const z=i.get(b);if(b.isVideoTexture&&Be(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&z.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,b,_);return}}else b.isExternalTexture&&(z.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function V(b,_){const z=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){ce(z,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function Y(b,_){const z=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){ce(z,b,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function H(b,_){const z=i.get(b);if(b.version>0&&z.__version!==b.version){oe(z,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}const Q={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},j={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},ee={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function xe(b,_){if(_.type===1015&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Q[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Q[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Q[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,j[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,j[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Oe(b,_){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",C));const K=_.source;let te=m.get(K);te===void 0&&(te={},m.set(K,te));const Z=G(_);if(Z!==b.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[Z].usedTimes++;const Te=te[b.__cacheKey];Te!==void 0&&(te[b.__cacheKey].usedTimes--,Te.usedTimes===0&&S(_)),b.__cacheKey=Z,b.__webglTexture=te[Z].texture}return z}function We(b,_,z){return Math.floor(Math.floor(b/z)/_)}function q(b,_,z,K){const Z=b.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,K,_.data);else{Z.sort((ne,fe)=>ne.start-fe.start);let Te=0;for(let ne=1;ne<Z.length;ne++){const fe=Z[Te],Ie=Z[ne],Ce=fe.start+fe.count,he=We(Ie.start,_.width,4),ze=We(fe.start,_.width,4);Ie.start<=Ce+1&&he===ze&&We(Ie.start+Ie.count-1,_.width,4)===he?fe.count=Math.max(fe.count,Ie.start+Ie.count-fe.start):(++Te,Z[Te]=Ie)}Z.length=Te+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ne=0,fe=Z.length;ne<fe;ne++){const Ie=Z[ne],Ce=Math.floor(Ie.start/4),he=Math.ceil(Ie.count/4),ze=Ce%_.width,L=Math.floor(Ce/_.width),se=he,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ze,L,se,ae,z,K,_.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function ce(b,_,z){let K=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=n.TEXTURE_3D);const te=Oe(b,_),Z=_.source;t.bindTexture(K,b.__webglTexture,n.TEXTURE0+z);const Te=i.get(Z);if(Z.version!==Te.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const le=Ke.getPrimaries(Ke.workingColorSpace),Se=_.colorSpace===""?null:Ke.getPrimaries(_.colorSpace),Ae=_.colorSpace===""||le===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ne=v(_.image,!1,s.maxTextureSize);ne=mt(_,ne);const fe=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type);let Ce=w(_.internalFormat,fe,Ie,_.colorSpace,_.isVideoTexture);xe(K,_);let he;const ze=_.mipmaps,L=_.isVideoTexture!==!0,se=Te.__version===void 0||te===!0,ae=Z.dataReady,O=A(_,ne);if(_.isDepthTexture)Ce=E(_.format===1027,_.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ne.width,ne.height,0,fe,Ie,null));else if(_.isDataTexture)if(ze.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,O,Ce,ze[0].width,ze[0].height);for(let k=0,N=ze.length;k<N;k++)he=ze[k],L?ae&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,he.width,he.height,fe,Ie,he.data):t.texImage2D(n.TEXTURE_2D,k,Ce,he.width,he.height,0,fe,Ie,he.data);_.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,O,Ce,ne.width,ne.height),ae&&q(_,ne,fe,Ie)):t.texImage2D(n.TEXTURE_2D,0,Ce,ne.width,ne.height,0,fe,Ie,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,O,Ce,ze[0].width,ze[0].height,ne.depth);for(let k=0,N=ze.length;k<N;k++)if(he=ze[k],_.format!==1023)if(fe!==null)if(L){if(ae)if(_.layerUpdates.size>0){const ie=Hl(he.width,he.height,_.format,_.type);for(const Ee of _.layerUpdates){const qe=he.data.subarray(Ee*ie/he.data.BYTES_PER_ELEMENT,(Ee+1)*ie/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,Ee,he.width,he.height,1,fe,qe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,he.width,he.height,ne.depth,fe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Ce,he.width,he.height,ne.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,he.width,he.height,ne.depth,fe,Ie,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,Ce,he.width,he.height,ne.depth,0,fe,Ie,he.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,O,Ce,ze[0].width,ze[0].height);for(let k=0,N=ze.length;k<N;k++)he=ze[k],_.format!==1023?fe!==null?L?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,k,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,he.width,he.height,fe,Ie,he.data):t.texImage2D(n.TEXTURE_2D,k,Ce,he.width,he.height,0,fe,Ie,he.data)}else if(_.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,O,Ce,ne.width,ne.height,ne.depth),ae)if(_.layerUpdates.size>0){const k=Hl(ne.width,ne.height,_.format,_.type);for(const N of _.layerUpdates){const ie=ne.data.subarray(N*k/ne.data.BYTES_PER_ELEMENT,(N+1)*k/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,N,ne.width,ne.height,1,fe,Ie,ie)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ie,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,fe,Ie,ne.data);else if(_.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,O,Ce,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ie,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,fe,Ie,ne.data);else if(_.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,O,Ce,ne.width,ne.height);else{let k=ne.width,N=ne.height;for(let ie=0;ie<O;ie++)t.texImage2D(n.TEXTURE_2D,ie,Ce,k,N,0,fe,Ie,null),k>>=1,N>>=1}}else if(ze.length>0){if(L&&se){const k=gt(ze[0]);t.texStorage2D(n.TEXTURE_2D,O,Ce,k.width,k.height)}for(let k=0,N=ze.length;k<N;k++)he=ze[k],L?ae&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,fe,Ie,he):t.texImage2D(n.TEXTURE_2D,k,Ce,fe,Ie,he);_.generateMipmaps=!1}else if(L){if(se){const k=gt(ne);t.texStorage2D(n.TEXTURE_2D,O,Ce,k.width,k.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ie,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ce,fe,Ie,ne);f(_)&&h(K),Te.__version=Z.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function oe(b,_,z){if(_.image.length!==6)return;const K=Oe(b,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+z);const Z=i.get(te);if(te.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+z);const Te=Ke.getPrimaries(Ke.workingColorSpace),le=_.colorSpace===""?null:Ke.getPrimaries(_.colorSpace),Se=_.colorSpace===""||Te===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let N=0;N<6;N++)!Ae&&!ne?fe[N]=v(_.image[N],!0,s.maxCubemapSize):fe[N]=ne?_.image[N].image:_.image[N],fe[N]=mt(_,fe[N]);const Ie=fe[0],Ce=r.convert(_.format,_.colorSpace),he=r.convert(_.type),ze=w(_.internalFormat,Ce,he,_.colorSpace),L=_.isVideoTexture!==!0,se=Z.__version===void 0||K===!0,ae=te.dataReady;let O=A(_,Ie);xe(n.TEXTURE_CUBE_MAP,_);let k;if(Ae){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,O,ze,Ie.width,Ie.height);for(let N=0;N<6;N++){k=fe[N].mipmaps;for(let ie=0;ie<k.length;ie++){const Ee=k[ie];_.format!==1023?Ce!==null?L?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie,ze,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie,0,0,Ee.width,Ee.height,Ce,he,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie,ze,Ee.width,Ee.height,0,Ce,he,Ee.data)}}}else{if(k=_.mipmaps,L&&se){k.length>0&&O++;const N=gt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,O,ze,N.width,N.height)}for(let N=0;N<6;N++)if(ne){L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,fe[N].width,fe[N].height,Ce,he,fe[N].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,ze,fe[N].width,fe[N].height,0,Ce,he,fe[N].data);for(let ie=0;ie<k.length;ie++){const qe=k[ie].image[N].image;L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie+1,0,0,qe.width,qe.height,Ce,he,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie+1,ze,qe.width,qe.height,0,Ce,he,qe.data)}}else{L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ce,he,fe[N]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,ze,Ce,he,fe[N]);for(let ie=0;ie<k.length;ie++){const Ee=k[ie];L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie+1,0,0,Ce,he,Ee.image[N]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie+1,ze,Ce,he,Ee.image[N])}}}f(_)&&h(n.TEXTURE_CUBE_MAP),Z.__version=te.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Le(b,_,z,K,te,Z){const Te=r.convert(z.format,z.colorSpace),le=r.convert(z.type),Se=w(z.internalFormat,Te,le,z.colorSpace),Ae=i.get(_),ne=i.get(z);if(ne.__renderTarget=_,!Ae.__hasExternalTextures){const fe=Math.max(1,_.width>>Z),Ie=Math.max(1,_.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Se,fe,Ie,_.depth,0,Te,le,null):t.texImage2D(te,Z,Se,fe,Ie,0,Te,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,ne.__webglTexture,0,lt(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,ne.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(b,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const K=_.depthTexture,te=K&&K.isDepthTexture?K.type:null,Z=E(_.stencilBuffer,te),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=lt(_);ye(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Z,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const K=_.textures;for(let te=0;te<K.length;te++){const Z=K[te],Te=r.convert(Z.format,Z.colorSpace),le=r.convert(Z.type),Se=w(Z.internalFormat,Te,le,Z.colorSpace),Ae=lt(_);z&&ye(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Se,_.width,_.height):ye(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Se,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const te=K.__webglTexture,Z=lt(_);if(_.depthTexture.format===1026)ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(_.depthTexture.format===1027)ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function pt(b){const _=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=K}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const K=b.texture.mipmaps;K&&K.length>0?Ue(_.__webglFramebuffer[0],b):Ue(_.__webglFramebuffer,b)}else if(z){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=n.createRenderbuffer(),be(_.__webglDepthbuffer[K],b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),be(_.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(b,_,z){const K=i.get(b);_!==void 0&&Le(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&pt(b)}function R(b){const _=b.texture,z=i.get(b),K=i.get(_);b.addEventListener("dispose",P);const te=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=_.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let Se=0;Se<_.mipmaps.length;Se++)z.__webglFramebuffer[le][Se]=n.createFramebuffer()}else z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)z.__webglFramebuffer[le]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Te)for(let le=0,Se=te.length;le<Se;le++){const Ae=i.get(te[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&ye(b)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Se=te[le];z.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const Ae=r.convert(Se.format,Se.colorSpace),ne=r.convert(Se.type),fe=w(Se.internalFormat,Ae,ne,Se.colorSpace,b.isXRRenderTarget===!0),Ie=lt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,fe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,z.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),be(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),xe(n.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)Le(z.__webglFramebuffer[le][Se],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se);else Le(z.__webglFramebuffer[le],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);f(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let le=0,Se=te.length;le<Se;le++){const Ae=te[le],ne=i.get(Ae);let fe=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ne.__webglTexture),xe(fe,Ae),Le(z.__webglFramebuffer,b,Ae,n.COLOR_ATTACHMENT0+le,fe,0),f(Ae)&&h(fe)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),xe(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)Le(z.__webglFramebuffer[Se],b,_,n.COLOR_ATTACHMENT0,le,Se);else Le(z.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,le,0);f(_)&&h(le),t.unbindTexture()}b.depthBuffer&&pt(b)}function st(b){const _=b.textures;for(let z=0,K=_.length;z<K;z++){const te=_[z];if(f(te)){const Z=M(b),Te=i.get(te).__webglTexture;t.bindTexture(Z,Te),h(Z),t.unbindTexture()}}}const Re=[],Ze=[];function ve(b){if(b.samples>0){if(ye(b)===!1){const _=b.textures,z=b.width,K=b.height;let te=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),le=_.length>1;if(le)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=b.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const ne=i.get(_[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,z,K,0,0,z,K,te,n.NEAREST),c===!0&&(Re.length=0,Ze.length=0,Re.push(n.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Re.push(Z),Ze.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const ne=i.get(_[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function lt(b){return Math.min(s.maxSamples,b.samples)}function ye(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function mt(b,_){const z=b.colorSpace,K=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==vi&&z!==""&&(Ke.getTransfer(z)===rt?(K!==1023||te!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function gt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=$e,this.setupRenderTarget=R,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ye}function X_(n,e){function t(i,s=""){let r;const o=Ke.getTransfer(s);if(i===1009)return n.UNSIGNED_BYTE;if(i===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return n.BYTE;if(i===1011)return n.SHORT;if(i===1012)return n.UNSIGNED_SHORT;if(i===1013)return n.INT;if(i===1014)return n.UNSIGNED_INT;if(i===1015)return n.FLOAT;if(i===1016)return n.HALF_FLOAT;if(i===1021)return n.ALPHA;if(i===1022)return n.RGB;if(i===1023)return n.RGBA;if(i===1026)return n.DEPTH_COMPONENT;if(i===1027)return n.DEPTH_STENCIL;if(i===1028)return n.RED;if(i===1029)return n.RED_INTEGER;if(i===1030)return n.RG;if(i===1031)return n.RG_INTEGER;if(i===1033)return n.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vc extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
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

}`;class Y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:$_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j_ extends Oi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,m=null,p=null,g=null;const v=new Y_,f={},h=t.getContextAttributes();let M=null,w=null;const E=[],A=[],C=new Je;let P=null;const D=new on;D.viewport=new St;const S=new on;S.viewport=new St;const x=[D,S],T=new Zp;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=E[q];return ce===void 0&&(ce=new Xo,E[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=E[q];return ce===void 0&&(ce=new Xo,E[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=E[q];return ce===void 0&&(ce=new Xo,E[q]=ce),ce.getHandSpace()};function G(q){const ce=A.indexOf(q.inputSource);if(ce===-1)return;const oe=E[ce];oe!==void 0&&(oe.update(q.inputSource,q.frame,l||o),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",V);for(let q=0;q<E.length;q++){const ce=A[q];ce!==null&&(A[q]=null,E[q].disconnect(ce))}B=null,W=null,v.reset();for(const q in f)delete f[q];e.setRenderTarget(M),p=null,m=null,d=null,s=null,w=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",J),s.addEventListener("inputsourceschange",V),h.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Le=null,be=null;h.depth&&(be=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=h.stencil?1027:1026,Le=h.stencil?1020:1014);const Ue={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};m=d.createProjectionLayer(Ue),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new ni(m.textureWidth,m.textureHeight,{format:1023,type:1009,depthTexture:new Fl(m.textureWidth,m.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const oe={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ni(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(q){for(let ce=0;ce<q.removed.length;ce++){const oe=q.removed[ce],Le=A.indexOf(oe);Le>=0&&(A[Le]=null,E[Le].disconnect(oe))}for(let ce=0;ce<q.added.length;ce++){const oe=q.added[ce];let Le=A.indexOf(oe);if(Le===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=A.length){A.push(oe),Le=Ue;break}else if(A[Ue]===null){A[Ue]=oe,Le=Ue;break}if(Le===-1)break}const be=E[Le];be&&be.connect(oe)}}const Y=new I,H=new I;function Q(q,ce,oe){Y.setFromMatrixPosition(ce.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const Le=Y.distanceTo(H),be=ce.projectionMatrix.elements,Ue=oe.projectionMatrix.elements,pt=be[14]/(be[10]-1),$e=be[14]/(be[10]+1),R=(be[9]+1)/be[5],st=(be[9]-1)/be[5],Re=(be[8]-1)/be[0],Ze=(Ue[8]+1)/Ue[0],ve=pt*Re,lt=pt*Ze,ye=Le/(-Re+Ze),Be=ye*-Re;if(ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const mt=pt+ye,gt=$e+ye,b=ve-Be,_=lt+(Le-Be),z=R*$e/gt*mt,K=st*$e/gt*mt;q.projectionMatrix.makePerspective(b,_,z,K,mt,gt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ce=q.near,oe=q.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),T.near=S.near=D.near=ce,T.far=S.far=D.far=oe,(B!==T.near||W!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),B=T.near,W=T.far),T.layers.mask=q.layers.mask|6,D.layers.mask=T.layers.mask&3,S.layers.mask=T.layers.mask&5;const Le=q.parent,be=T.cameras;j(T,Le);for(let Ue=0;Ue<be.length;Ue++)j(be[Ue],Le);be.length===2?Q(T,D,S):T.projectionMatrix.copy(D.projectionMatrix),ee(q,T,Le)};function ee(q,ce,oe){oe===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&p===null))return c},this.setFoveation=function(q){c=q,m!==null&&(m.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)},this.getCameraTexture=function(q){return f[q]};let xe=null;function Oe(q,ce){if(u=ce.getViewerPose(l||o),g=ce,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Le=!1;oe.length!==T.cameras.length&&(T.cameras.length=0,Le=!0);for(let $e=0;$e<oe.length;$e++){const R=oe[$e];let st=null;if(p!==null)st=p.getViewport(R);else{const Ze=d.getViewSubImage(m,R);st=Ze.viewport,$e===0&&(e.setRenderTargetTextures(w,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(w))}let Re=x[$e];Re===void 0&&(Re=new on,Re.layers.enable($e),Re.viewport=new St,x[$e]=Re),Re.matrix.fromArray(R.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(R.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(st.x,st.y,st.width,st.height),$e===0&&(T.matrix.copy(Re.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Le===!0&&T.cameras.push(Re)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const $e=d.getDepthInformation(oe[0]);$e&&$e.isValid&&$e.texture&&v.init($e,s.renderState)}if(be&&be.includes("camera-access")&&(e.state.unbindTexture(),d))for(let $e=0;$e<oe.length;$e++){const R=oe[$e].camera;if(R){let st=f[R];st||(st=new vc,f[R]=st);const Re=d.getCameraImage(R);st.sourceTexture=Re}}}for(let oe=0;oe<E.length;oe++){const Le=A[oe],be=E[oe];Le!==null&&be!==void 0&&be.update(Le,ce,l||o)}xe&&xe(q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const We=new Vl;We.setAnimationLoop(Oe),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const Ai=new bn,Z_=new ot;function K_(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,bl(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,M,w,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),d(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h)):h.isMeshStandardMaterial?(r(f,h),m(f,h),h.isMeshPhysicalMaterial&&p(f,h,E)):h.isMeshMatcapMaterial?(r(f,h),g(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),v(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?c(f,h,M,w):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===1&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===1&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const M=e.get(h),w=M.envMap,E=M.envMapRotation;w&&(f.envMap.value=w,Ai.copy(E),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),f.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(Ai)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,M,w){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*M,f.scale.value=w*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function m(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function p(f,h,M){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const M=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J_(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const E=w.program;i.uniformBlockBinding(M,E)}function l(M,w){let E=s[M.id];E===void 0&&(g(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",f));const A=w.program;i.updateUBOMapping(M,A);const C=e.render.frame;r[M.id]!==C&&(m(M),r[M.id]=C)}function u(M){const w=d();M.__bindingPointIndex=w;const E=n.createBuffer(),A=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const w=s[M.id],E=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,P=E.length;C<P;C++){const D=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,x=D.length;S<x;S++){const T=D[S];if(p(T,C,S,A)===!0){const B=T.__offset,W=Array.isArray(T.value)?T.value:[T.value];let G=0;for(let J=0;J<W.length;J++){const V=W[J],Y=v(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,B+G,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,w,E,A){const C=M.value,P=w+"_"+E;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{const D=A[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return A[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(M){const w=M.uniforms;let E=0;const A=16;for(let P=0,D=w.length;P<D;P++){const S=Array.isArray(w[P])?w[P]:[w[P]];for(let x=0,T=S.length;x<T;x++){const B=S[x],W=Array.isArray(B.value)?B.value:[B.value];for(let G=0,J=W.length;G<J;G++){const V=W[G],Y=v(V),H=E%A,Q=H%Y.boundary,j=H+Q;E+=Q,j!==0&&A-j<Y.storage&&(E+=A-j),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=Y.storage}}}const C=E%A;return C>0&&(E+=A-C),M.__size=E,M.__cache={},this}function v(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function f(M){const w=M.target;w.removeEventListener("dispose",f);const E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function h(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}class Q_{constructor(e={}){const{canvas:t=cp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let f=null,h=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let A=!1;this._outputColorSpace=tn;let C=0,P=0,D=null,S=-1,x=null;const T=new St,B=new St;let W=null;const G=new et(0);let J=0,V=t.width,Y=t.height,H=1,Q=null,j=null;const ee=new St(0,0,V,Y),xe=new St(0,0,V,Y);let Oe=!1;const We=new qo;let q=!1,ce=!1;const oe=new ot,Le=new I,be=new St,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function $e(){return D===null?H:1}let R=i;function st(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r179"),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",k,!1),R===null){const U="webgl2";if(R=st(U,y),R===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Re,Ze,ve,lt,ye,Be,mt,gt,b,_,z,K,te,Z,Te,le,Se,Ae,ne,fe,Ie,Ce,he,ze;function L(){Re=new cv(R),Re.init(),Ce=new X_(R,Re),Ze=new nv(R,Re,e,Ce),ve=new G_(R,Re),Ze.reversedDepthBuffer&&m&&ve.buffers.depth.setReversed(!0),lt=new uv(R),ye=new P_,Be=new W_(R,Re,ve,ye,Ze,Ce,lt),mt=new sv(E),gt=new lv(E),b=new Jp(R),he=new ev(R,b),_=new hv(R,b,lt,he),z=new pv(R,_,b,lt),ne=new fv(R,Ze,Be),le=new iv(ye),K=new R_(E,mt,gt,Re,Ze,he,le),te=new K_(E,ye),Z=new D_,Te=new k_(Re),Ae=new Qg(E,mt,gt,ve,z,p,c),Se=new H_(E,z,Ze),ze=new J_(R,lt,Ze,ve),fe=new tv(R,Re,lt),Ie=new dv(R,Re,lt),lt.programs=K.programs,E.capabilities=Ze,E.extensions=Re,E.properties=ye,E.renderLists=Z,E.shadowMap=Se,E.state=ve,E.info=lt}L();const se=new j_(E,R);this.xr=se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Re.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Re.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(V,Y,!1))},this.getSize=function(y){return y.set(V,Y)},this.setSize=function(y,U,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,Y=U,t.width=Math.floor(y*H),t.height=Math.floor(U*H),X===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(V*H,Y*H).floor()},this.setDrawingBufferSize=function(y,U,X){V=y,Y=U,H=X,t.width=Math.floor(y*X),t.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(ee)},this.setViewport=function(y,U,X,$){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,U,X,$),ve.viewport(T.copy(ee).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(xe)},this.setScissor=function(y,U,X,$){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,U,X,$),ve.scissor(B.copy(xe).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(y){ve.setScissorTest(Oe=y)},this.setOpaqueSort=function(y){Q=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,X=!0){let $=0;if(y){let F=!1;if(D!==null){const re=D.texture.format;F=re===1033||re===1031||re===1029}if(F){const re=D.texture.type,me=re===1009||re===1014||re===1012||re===1020||re===1017||re===1018,we=Ae.getClearColor(),_e=Ae.getClearAlpha(),Ne=we.r,Fe=we.g,Pe=we.b;me?(g[0]=Ne,g[1]=Fe,g[2]=Pe,g[3]=_e,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Ne,v[1]=Fe,v[2]=Pe,v[3]=_e,R.clearBufferiv(R.COLOR,0,v))}else $|=R.COLOR_BUFFER_BIT}U&&($|=R.DEPTH_BUFFER_BIT),X&&($|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",k,!1),Ae.dispose(),Z.dispose(),Te.dispose(),ye.dispose(),mt.dispose(),gt.dispose(),z.dispose(),he.dispose(),ze.dispose(),K.dispose(),se.dispose(),se.removeEventListener("sessionstart",vt),se.removeEventListener("sessionend",Jt),Ct.stop()};function ae(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=lt.autoReset,U=Se.enabled,X=Se.autoUpdate,$=Se.needsUpdate,F=Se.type;L(),lt.autoReset=y,Se.enabled=U,Se.autoUpdate=X,Se.needsUpdate=$,Se.type=F}function k(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function N(y){const U=y.target;U.removeEventListener("dispose",N),ie(U)}function ie(y){Ee(y),ye.remove(y)}function Ee(y){const U=ye.get(y).programs;U!==void 0&&(U.forEach(function(X){K.releaseProgram(X)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,$,F,re){U===null&&(U=Ue);const me=F.isMesh&&F.matrixWorld.determinant()<0,we=Ft(y,U,X,$,F);ve.setMaterial($,me);let _e=X.index,Ne=1;if($.wireframe===!0){if(_e=_.getWireframeAttribute(X),_e===void 0)return;Ne=2}const Fe=X.drawRange,Pe=X.attributes.position;let je=Fe.start*Ne,at=(Fe.start+Fe.count)*Ne;re!==null&&(je=Math.max(je,re.start*Ne),at=Math.min(at,(re.start+re.count)*Ne)),_e!==null?(je=Math.max(je,0),at=Math.min(at,_e.count)):Pe!=null&&(je=Math.max(je,0),at=Math.min(at,Pe.count));const Et=at-je;if(Et<0||Et===1/0)return;he.setup(F,$,we,X,_e);let dt,ct=fe;if(_e!==null&&(dt=b.get(_e),ct=Ie,ct.setIndex(dt)),F.isMesh)$.wireframe===!0?(ve.setLineWidth($.wireframeLinewidth*$e()),ct.setMode(R.LINES)):ct.setMode(R.TRIANGLES);else if(F.isLine){let De=$.linewidth;De===void 0&&(De=1),ve.setLineWidth(De*$e()),F.isLineSegments?ct.setMode(R.LINES):F.isLineLoop?ct.setMode(R.LINE_LOOP):ct.setMode(R.LINE_STRIP)}else F.isPoints?ct.setMode(R.POINTS):F.isSprite&&ct.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,_t=F._multiDrawCounts,Qe=F._multiDrawCount,cn=_e?b.get(_e).bytesPerElement:1,vs=ye.get($).currentProgram.getUniforms();for(let hn=0;hn<Qe;hn++)vs.setValue(R,"_gl_DrawID",hn),ct.render(De[hn]/cn,_t[hn])}else if(F.isInstancedMesh)ct.renderInstances(je,Et,F.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_t=Math.min(X.instanceCount,De);ct.renderInstances(je,Et,_t)}else ct.render(je,Et)};function qe(y,U,X){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,On(y,U,X),y.side=0,y.needsUpdate=!0,On(y,U,X),y.side=2):On(y,U,X)}this.compile=function(y,U,X=null){X===null&&(X=y),h=Te.get(X),h.init(U),w.push(h),X.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),y!==X&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const $=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const we=re[me];qe(we,X,F),$.add(we)}else qe(re,X,F),$.add(re)}),h=w.pop(),$},this.compileAsync=function(y,U,X=null){const $=this.compile(y,U,X);return new Promise(F=>{function re(){if($.forEach(function(me){ye.get(me).currentProgram.isReady()&&$.delete(me)}),$.size===0){F(y);return}setTimeout(re,10)}Re.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ke=null;function yt(y){ke&&ke(y)}function vt(){Ct.stop()}function Jt(){Ct.start()}const Ct=new Vl;Ct.setAnimationLoop(yt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(y){ke=y,se.setAnimationLoop(y),y===null?Ct.stop():Ct.start()},se.addEventListener("sessionstart",vt),se.addEventListener("sessionend",Jt),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,D),h=Te.get(y,w.length),h.init(U),w.push(h),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),We.setFromProjectionMatrix(oe,2e3,U.reversedDepth),ce=this.localClippingEnabled,q=le.init(this.clippingPlanes,ce),f=Z.get(y,M.length),f.init(),M.push(f),se.enabled===!0&&se.isPresenting===!0){const re=E.xr.getDepthSensingMesh();re!==null&&pn(re,U,-1/0,E.sortObjects)}pn(y,U,0,E.sortObjects),f.finish(),E.sortObjects===!0&&f.sort(Q,j),pt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,pt&&Ae.addToRenderList(f,y),this.info.render.frame++,q===!0&&le.beginShadows();const X=h.state.shadowsArray;Se.render(X,y,U),q===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=f.opaque,F=f.transmissive;if(h.setupLights(),U.isArrayCamera){const re=U.cameras;if(F.length>0)for(let me=0,we=re.length;me<we;me++){const _e=re[me];Qt($,F,y,_e)}pt&&Ae.render(y);for(let me=0,we=re.length;me<we;me++){const _e=re[me];xo(f,y,_e,_e.viewport)}}else F.length>0&&Qt($,F,y,U),pt&&Ae.render(y),xo(f,y,U);D!==null&&P===0&&(Be.updateMultisampleRenderTarget(D),Be.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(E,y,U),he.resetDefaultState(),S=-1,x=null,w.pop(),w.length>0?(h=w[w.length-1],q===!0&&le.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,M.pop(),M.length>0?f=M[M.length-1]:f=null};function pn(y,U,X,$){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||We.intersectsSprite(y)){$&&be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(oe);const me=z.update(y),we=y.material;we.visible&&f.push(y,me,we,X,be.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||We.intersectsObject(y))){const me=z.update(y),we=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),be.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),be.copy(me.boundingSphere.center)),be.applyMatrix4(y.matrixWorld).applyMatrix4(oe)),Array.isArray(we)){const _e=me.groups;for(let Ne=0,Fe=_e.length;Ne<Fe;Ne++){const Pe=_e[Ne],je=we[Pe.materialIndex];je&&je.visible&&f.push(y,me,je,X,be.z,Pe)}}else we.visible&&f.push(y,me,we,X,be.z,null)}}const re=y.children;for(let me=0,we=re.length;me<we;me++)pn(re[me],U,X,$)}function xo(y,U,X,$){const F=y.opaque,re=y.transmissive,me=y.transparent;h.setupLightsView(X),q===!0&&le.setGlobalState(E.clippingPlanes,X),$&&ve.viewport(T.copy($)),F.length>0&&Qn(F,U,X),re.length>0&&Qn(re,U,X),me.length>0&&Qn(me,U,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Qt(y,U,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[$.id]===void 0&&(h.state.transmissionRenderTarget[$.id]=new ni(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=h.state.transmissionRenderTarget[$.id],me=$.viewport||T;re.setSize(me.z*E.transmissionResolutionScale,me.w*E.transmissionResolutionScale);const we=E.getRenderTarget(),_e=E.getActiveCubeFace(),Ne=E.getActiveMipmapLevel();E.setRenderTarget(re),E.getClearColor(G),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),pt&&Ae.render(X);const Fe=E.toneMapping;E.toneMapping=0;const Pe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),h.setupLightsView($),q===!0&&le.setGlobalState(E.clippingPlanes,$),Qn(y,X,$),Be.updateMultisampleRenderTarget(re),Be.updateRenderTargetMipmap(re),Re.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let at=0,Et=U.length;at<Et;at++){const dt=U[at],ct=dt.object,De=dt.geometry,_t=dt.material,Qe=dt.group;if(_t.side===2&&ct.layers.test($.layers)){const cn=_t.side;_t.side=1,_t.needsUpdate=!0,yo(ct,X,$,De,_t,Qe),_t.side=cn,_t.needsUpdate=!0,je=!0}}je===!0&&(Be.updateMultisampleRenderTarget(re),Be.updateRenderTargetMipmap(re))}E.setRenderTarget(we,_e,Ne),E.setClearColor(G,J),Pe!==void 0&&($.viewport=Pe),E.toneMapping=Fe}function Qn(y,U,X){const $=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=y.length;F<re;F++){const me=y[F],we=me.object,_e=me.geometry,Ne=me.group;let Fe=me.material;Fe.allowOverride===!0&&$!==null&&(Fe=$),we.layers.test(X.layers)&&yo(we,U,X,_e,Fe,Ne)}}function yo(y,U,X,$,F,re){y.onBeforeRender(E,U,X,$,F,re),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(E,U,X,$,y,re),F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=1,F.needsUpdate=!0,E.renderBufferDirect(X,U,$,F,y,re),F.side=0,F.needsUpdate=!0,E.renderBufferDirect(X,U,$,F,y,re),F.side=2):E.renderBufferDirect(X,U,$,F,y,re),y.onAfterRender(E,U,X,$,F,re)}function On(y,U,X){U.isScene!==!0&&(U=Ue);const $=ye.get(y),F=h.state.lights,re=h.state.shadowsArray,me=F.state.version,we=K.getParameters(y,F.state,re,U,X),_e=K.getProgramCacheKey(we);let Ne=$.programs;$.environment=y.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(y.isMeshStandardMaterial?gt:mt).get(y.envMap||$.environment),$.envMapRotation=$.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",N),Ne=new Map,$.programs=Ne);let Fe=Ne.get(_e);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===me)return Vt(y,we),Fe}else we.uniforms=K.getUniforms(y),y.onBeforeCompile(we,E),Fe=K.acquireProgram(we,_e),Ne.set(_e,Fe),$.uniforms=we.uniforms;const Pe=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=le.uniform),Vt(y,we),$.needsLights=$u(y),$.lightsStateVersion=me,$.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=Fe,$.uniformsList=null,Fe}function qt(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Fr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Vt(y,U){const X=ye.get(y);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Ft(y,U,X,$,F){U.isScene!==!0&&(U=Ue),Be.resetTextureUnits();const re=U.fog,me=$.isMeshStandardMaterial?U.environment:null,we=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:vi,_e=($.isMeshStandardMaterial?gt:mt).get($.envMap||me),Ne=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let Et=0;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Et=E.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=dt!==void 0?dt.length:0,De=ye.get($),_t=h.state.lights;if(q===!0&&(ce===!0||y!==x)){const Yt=y===x&&$.id===S;le.setState($,y,Yt)}let Qe=!1;$.version===De.__version?(De.needsLights&&De.lightsStateVersion!==_t.state.version||De.outputColorSpace!==we||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==_e||$.fog===!0&&De.fog!==re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==le.numPlanes||De.numIntersection!==le.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Fe||De.morphTargets!==Pe||De.morphNormals!==je||De.morphColors!==at||De.toneMapping!==Et||De.morphTargetsCount!==ct)&&(Qe=!0):(Qe=!0,De.__version=$.version);let cn=De.currentProgram;Qe===!0&&(cn=On($,U,F));let vs=!1,hn=!1,lr=!1;const xt=cn.getUniforms(),mn=De.uniforms;if(ve.useProgram(cn.program)&&(vs=!0,hn=!0,lr=!0),$.id!==S&&(S=$.id,hn=!0),vs||x!==y){ve.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xt.setValue(R,"projectionMatrix",y.projectionMatrix),xt.setValue(R,"viewMatrix",y.matrixWorldInverse);const en=xt.map.cameraPosition;en!==void 0&&en.setValue(R,Le.setFromMatrixPosition(y.matrixWorld)),Ze.logarithmicDepthBuffer&&xt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&xt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,hn=!0,lr=!0)}if(F.isSkinnedMesh){xt.setOptional(R,F,"bindMatrix"),xt.setOptional(R,F,"bindMatrixInverse");const Yt=F.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),xt.setValue(R,"boneTexture",Yt.boneTexture,Be))}F.isBatchedMesh&&(xt.setOptional(R,F,"batchingTexture"),xt.setValue(R,"batchingTexture",F._matricesTexture,Be),xt.setOptional(R,F,"batchingIdTexture"),xt.setValue(R,"batchingIdTexture",F._indirectTexture,Be),xt.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&xt.setValue(R,"batchingColorTexture",F._colorsTexture,Be));const gn=X.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ne.update(F,X,cn),(hn||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,xt.setValue(R,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(mn.envMap.value=_e,mn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&U.environment!==null&&(mn.envMapIntensity.value=U.environmentIntensity),hn&&(xt.setValue(R,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&Ui(mn,lr),re&&$.fog===!0&&te.refreshFogUniforms(mn,re),te.refreshMaterialUniforms(mn,$,H,Y,h.state.transmissionRenderTarget[y.id]),Fr.upload(R,qt(De),mn,Be)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Fr.upload(R,qt(De),mn,Be),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&xt.setValue(R,"center",F.center),xt.setValue(R,"modelViewMatrix",F.modelViewMatrix),xt.setValue(R,"normalMatrix",F.normalMatrix),xt.setValue(R,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Yt=$.uniformsGroups;for(let en=0,nl=Yt.length;en<nl;en++){const Fi=Yt[en];ze.update(Fi,cn),ze.bind(Fi,cn)}}return cn}function Ui(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function $u(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,U,X){const $=ye.get(y);$.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ye.get(y.texture).__webglTexture=U,ye.get(y.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const X=ye.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const tl=R.createFramebuffer();this.setRenderTarget=function(y,U=0,X=0){D=y,C=U,P=X;let $=!0,F=null,re=!1,me=!1;if(y){const _e=ye.get(y);if(_e.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(R.FRAMEBUFFER,null),$=!1;else if(_e.__webglFramebuffer===void 0)Be.setupRenderTarget(y);else if(_e.__hasExternalTextures)Be.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pe=y.depthTexture;if(_e.__boundDepthTexture!==Pe){if(Pe!==null&&ye.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(y)}}const Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const Fe=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?F=Fe[U][X]:F=Fe[U],re=!0):y.samples>0&&Be.useMultisampledRTT(y)===!1?F=ye.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[X]:F=Fe,T.copy(y.viewport),B.copy(y.scissor),W=y.scissorTest}else T.copy(ee).multiplyScalar(H).floor(),B.copy(xe).multiplyScalar(H).floor(),W=Oe;if(X!==0&&(F=tl),ve.bindFramebuffer(R.FRAMEBUFFER,F)&&$&&ve.drawBuffers(y,F),ve.viewport(T),ve.scissor(B),ve.setScissorTest(W),re){const _e=ye.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,X)}else if(me){const _e=U;for(let Ne=0;Ne<y.textures.length;Ne++){const Fe=ye.get(y.textures[Ne]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,X,_e)}}else if(y!==null&&X!==0){const _e=ye.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_e.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(y,U,X,$,F,re,me,we=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){ve.bindFramebuffer(R.FRAMEBUFFER,_e);try{const Ne=y.textures[we],Fe=Ne.format,Pe=Ne.type;if(!Ze.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-$&&X>=0&&X<=y.height-F&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),R.readPixels(U,X,$,F,Ce.convert(Fe),Ce.convert(Pe),re))}finally{const Ne=D!==null?ye.get(D).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,U,X,$,F,re,me,we=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(U>=0&&U<=y.width-$&&X>=0&&X<=y.height-F){ve.bindFramebuffer(R.FRAMEBUFFER,_e);const Ne=y.textures[we],Fe=Ne.format,Pe=Ne.type;if(!Ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.bufferData(R.PIXEL_PACK_BUFFER,re.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),R.readPixels(U,X,$,F,Ce.convert(Fe),Ce.convert(Pe),0);const at=D!==null?ye.get(D).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,at);const Et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await hp(R,Et,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,re),R.deleteBuffer(je),R.deleteSync(Et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,X=0){const $=Math.pow(2,-X),F=Math.floor(y.image.width*$),re=Math.floor(y.image.height*$),me=U!==null?U.x:0,we=U!==null?U.y:0;Be.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,me,we,F,re),ve.unbindTexture()};const LE=R.createFramebuffer(),DE=R.createFramebuffer();this.copyTextureToTexture=function(y,U,X=null,$=null,F=0,re=null){re===null&&(F!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=F,F=0):re=0);let me,we,_e,Ne,Fe,Pe,je,at,Et;const dt=y.isCompressedTexture?y.mipmaps[re]:y.image;if(X!==null)me=X.max.x-X.min.x,we=X.max.y-X.min.y,_e=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Fe=X.min.y,Pe=X.isBox3?X.min.z:0;else{const gn=Math.pow(2,-F);me=Math.floor(dt.width*gn),we=Math.floor(dt.height*gn),y.isDataArrayTexture?_e=dt.depth:y.isData3DTexture?_e=Math.floor(dt.depth*gn):_e=1,Ne=0,Fe=0,Pe=0}$!==null?(je=$.x,at=$.y,Et=$.z):(je=0,at=0,Et=0);const ct=Ce.convert(U.format),De=Ce.convert(U.type);let _t;U.isData3DTexture?(Be.setTexture3D(U,0),_t=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),_t=R.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),_t=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),cn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),vs=R.getParameter(R.UNPACK_SKIP_PIXELS),hn=R.getParameter(R.UNPACK_SKIP_ROWS),lr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ne),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pe);const xt=y.isDataArrayTexture||y.isData3DTexture,mn=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const gn=ye.get(y),Yt=ye.get(U),en=ye.get(gn.__renderTarget),nl=ye.get(Yt.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,en.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,nl.__webglFramebuffer);for(let Fi=0;Fi<_e;Fi++)xt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(y).__webglTexture,F,Pe+Fi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,re,Et+Fi)),R.blitFramebuffer(Ne,Fe,me,we,je,at,me,we,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||ye.has(y)){const gn=ye.get(y),Yt=ye.get(U);ve.bindFramebuffer(R.READ_FRAMEBUFFER,LE),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,DE);for(let en=0;en<_e;en++)xt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gn.__webglTexture,F,Pe+en):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,gn.__webglTexture,F),mn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Yt.__webglTexture,re,Et+en):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Yt.__webglTexture,re),F!==0?R.blitFramebuffer(Ne,Fe,me,we,je,at,me,we,R.COLOR_BUFFER_BIT,R.NEAREST):mn?R.copyTexSubImage3D(_t,re,je,at,Et+en,Ne,Fe,me,we):R.copyTexSubImage2D(_t,re,je,at,Ne,Fe,me,we);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else mn?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(_t,re,je,at,Et,me,we,_e,ct,De,dt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(_t,re,je,at,Et,me,we,_e,ct,dt.data):R.texSubImage3D(_t,re,je,at,Et,me,we,_e,ct,De,dt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,re,je,at,me,we,ct,De,dt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,re,je,at,dt.width,dt.height,ct,dt.data):R.texSubImage2D(R.TEXTURE_2D,re,je,at,me,we,ct,De,dt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,cn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,vs),R.pixelStorei(R.UNPACK_SKIP_ROWS,hn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,lr),re===0&&U.generateMipmaps&&R.generateMipmap(_t),ve.unbindTexture()},this.copyTextureToTexture3D=function(y,U,X=null,$=null,F=0){return zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,X,$,F)},this.initRenderTarget=function(y){ye.get(y).__webglFramebuffer===void 0&&Be.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Be.setTextureCube(y,0):y.isData3DTexture?Be.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Be.setTexture2DArray(y,0):Be.setTexture2D(y,0),ve.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,ve.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.14.1
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var e0=Object.defineProperty,ra=(n,e)=>{for(var t in e)e0(n,t,{get:e[t],enumerable:!0})},as={};ra(as,{ACTIONS:()=>wc,ANIMATION_MIN_DURATION:()=>oa,CAPTURE_EVENTS_CLASS:()=>Ls,CTRLZOOM_TIMEOUT:()=>Sc,DBLCLICK_DELAY:()=>xc,EASINGS:()=>kr,ICONS:()=>Sn,IDS:()=>Nt,KEY_CODES:()=>Lt,LONGTOUCH_DELAY:()=>yc,MOVE_THRESHOLD:()=>_c,SPHERE_RADIUS:()=>Ci,TWOFINGERSOVERLAY_DELAY:()=>Ec,VIEWER_DATA:()=>hi});var t0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,n0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',i0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,s0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,r0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,o0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,a0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,l0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,c0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,oa=500,_c=4,xc=300,yc=500,Ec=100,Sc=2e3,Ci=10,hi="photoSphereViewer",Ls="psv--capture-event",wc=(n=>(n.ROTATE_UP="ROTATE_UP",n.ROTATE_DOWN="ROTATE_DOWN",n.ROTATE_RIGHT="ROTATE_RIGHT",n.ROTATE_LEFT="ROTATE_LEFT",n.ZOOM_IN="ZOOM_IN",n.ZOOM_OUT="ZOOM_OUT",n))(wc||{}),Nt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Lt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},Sn={arrow:t0,close:n0,download:i0,fullscreenIn:s0,fullscreenOut:r0,info:o0,menu:a0,zoomIn:l0,zoomOut:c0},kr={linear:n=>n,inQuad:n=>n*n,outQuad:n=>n*(2-n),inOutQuad:n=>n<.5?2*n*n:-1+(4-2*n)*n,inCubic:n=>n*n*n,outCubic:n=>--n*n*n+1,inOutCubic:n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,inQuart:n=>n*n*n*n,outQuart:n=>1- --n*n*n*n,inOutQuart:n=>n<.5?8*n*n*n*n:1-8*--n*n*n*n,inQuint:n=>n*n*n*n*n,outQuint:n=>1+--n*n*n*n*n,inOutQuint:n=>n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n,inSine:n=>1-Math.cos(n*(Math.PI/2)),outSine:n=>Math.sin(n*(Math.PI/2)),inOutSine:n=>.5-.5*Math.cos(Math.PI*n),inExpo:n=>Math.pow(2,10*(n-1)),outExpo:n=>1-Math.pow(2,-10*n),inOutExpo:n=>(n=n*2-1)<0?.5*Math.pow(2,10*n):1-.5*Math.pow(2,-10*n),inCirc:n=>1-Math.sqrt(1-n*n),outCirc:n=>Math.sqrt(1-(n-1)*(n-1)),inOutCirc:n=>(n*=2)<1?.5-.5*Math.sqrt(1-n*n):.5+.5*Math.sqrt(1-(n-=2)*n)},pe={};ra(pe,{Animation:()=>qr,Dynamic:()=>Is,MultiDynamic:()=>jc,PressHandler:()=>Yr,Slider:()=>Kc,SliderDirection:()=>Zc,addClasses:()=>aa,angle:()=>bc,applyEulerInverse:()=>va,checkClosedShadowDom:()=>qc,checkStylesheet:()=>$c,checkVersion:()=>_a,cleanCssPosition:()=>Gc,clone:()=>Vr,createTexture:()=>ga,cssPositionIsOrdered:()=>pa,dasherize:()=>p0,deepEqual:()=>kc,deepmerge:()=>Fc,distance:()=>Mc,exitFullscreen:()=>Nc,firstNonNull:()=>Pn,getAbortError:()=>ua,getAngle:()=>Ac,getClosest:()=>Rc,getConfigParser:()=>$r,getElement:()=>Cc,getEventTarget:()=>zr,getMatchingTarget:()=>Pc,getPosition:()=>Lc,getShortestArc:()=>Tc,getStyleProperty:()=>Rn,getTouchData:()=>la,getXMPValue:()=>an,greatArcDistance:()=>d0,hasParent:()=>f0,invertResolvableBoolean:()=>Gr,isAbortError:()=>zc,isEmpty:()=>Oc,isExtendedPosition:()=>fa,isFullscreenEnabled:()=>Dc,isNil:()=>Dt,isPlainObject:()=>ha,keyPressMatch:()=>ca,logWarn:()=>Ut,mergePanoData:()=>Yc,parseAngle:()=>Ln,parsePoint:()=>m0,parseSpeed:()=>Wc,removeClasses:()=>u0,requestFullscreen:()=>Ic,resolveBoolean:()=>da,speedToDuration:()=>ma,sum:()=>h0,throttle:()=>Uc,toggleClass:()=>Br,wrap:()=>Ds});function Ds(n,e){let t=n%e;return t<0&&(t+=e),t}function h0(n){return n.reduce((e,t)=>e+t,0)}function Mc(n,e){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function bc(n,e){return Math.atan2(e.y-n.y,e.x-n.x)}function Tc(n,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-n+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function Ac(n,e){return Math.acos(Math.cos(n.pitch)*Math.cos(e.pitch)*Math.cos(n.yaw-e.yaw)+Math.sin(n.pitch)*Math.sin(e.pitch))}function d0([n,e],[t,i]){n-t>Math.PI?n-=2*Math.PI:n-t<-Math.PI&&(n+=2*Math.PI);const s=(t-n)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function Cc(n){return typeof n=="string"?n.match(/^[a-z]/i)?document.getElementById(n):document.querySelector(n):n}function Br(n,e,t){t===void 0?n.classList.toggle(e):t?n.classList.add(e):t||n.classList.remove(e)}function aa(n,e){n.classList.add(...e.split(" ").filter(t=>!!t))}function u0(n,e){n.classList.remove(...e.split(" ").filter(t=>!!t))}function f0(n,e){let t=n;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function Rc(n,e){if(!n?.matches)return null;let t=n;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function zr(n){return n?.composedPath()[0]||null}function Pc(n,e){return n?n.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function Lc(n){let e=0,t=0,i=n;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,t+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function Rn(n,e){return window.getComputedStyle(n).getPropertyValue(e)}function la(n){if(n.touches.length<2)return null;const e={x:n.touches[0].clientX,y:n.touches[0].clientY},t={x:n.touches[1].clientX,y:n.touches[1].clientY};return{distance:Mc(e,t),angle:bc(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var Hr;function Dc(n,e=!1){return e?n===Hr:document.fullscreenElement===n}function Ic(n,e=!1){e?(Hr=n,n.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):n.requestFullscreen()}function Nc(n=!1){n?(Hr.classList.remove("psv-fullscreen-emulation"),Hr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function ca(n,e){let t,i=!1,s=!1,r=!1,o=!1;return e==="+"?t=e:e.split("+").forEach(a=>{switch(a){case"Shift":i=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":o=!0;break;case"Space":t=" ";break;case"Plus":t="+";break;case"Minus":t="-";break;default:t=a;break}}),i===n.shiftKey&&s===n.ctrlKey&&r===n.altKey&&o===n.metaKey&&t===n.key}function p0(n){return n.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function Uc(n,e){let t=!1;return function(...i){t||(t=!0,setTimeout(()=>{n.apply(this,i),t=!1},e))}}function ha(n){if(typeof n!="object"||n===null||Object.prototype.toString.call(n)!=="[object Object]")return!1;if(Object.getPrototypeOf(n)===null)return!0;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e}function Fc(n,e){const t=e;return(function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=i(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{o!=="__proto__"&&(typeof r[o]!="object"||!r[o]||!ha(r[o])?s[o]=r[o]:r[o]!==t&&(s[o]?i(s[o],r[o]):s[o]=i(null,r[o])))})):s=r,s})(n,e)}function Vr(n){return Fc(null,n)}function Oc(n){return!n||Object.keys(n).length===0&&n.constructor===Object}function Dt(n){return n==null}function Pn(...n){for(const e of n)if(!Dt(e))return e;return null}function kc(n,e){if(n===e)return!0;if(Bc(n)&&Bc(e)){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t of Object.keys(n))if(!kc(n[t],e[t]))return!1;return!0}else return!1}function Bc(n){return typeof n=="object"&&n!==null}var ue=class qu extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,qu)}};function da(n,e){ha(n)?(e(n.initial,!0),n.promise.then(t=>e(t,!1))):e(n,!0)}function Gr(n){return{initial:!n.initial,promise:n.promise.then(e=>!e)}}function ua(){const n=new Error("Loading was aborted.");return n.name="AbortError",n}function zc(n){return n?.name==="AbortError"}function Ut(n){console.warn(`PhotoSphereViewer: ${n}`)}function fa(n){return!n||Array.isArray(n)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>n[e]!==void 0&&n[t]!==void 0)}function an(n,e,t=!0){let i=n.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=n.match("GPano:"+e+'="(.*?)"'),i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var Hc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wr=["left","center","right"],Xr=["top","center","bottom"],Vc=[...Wr,...Xr],un="center";function m0(n){if(!n)return{x:.5,y:.5};if(typeof n=="object")return n;let e=n.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Hc[e[0]]?e=[e[0],un]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Hc[s]||s),t||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function Gc(n,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return n?(typeof n=="string"&&(n=n.split(" ")),n.length===1&&(n[0]===un?n=[un,un]:Wr.indexOf(n[0])!==-1?n=[un,n[0]]:Xr.indexOf(n[0])!==-1&&(n=[n[0],un])),n.length!==2||Vc.indexOf(n[0])===-1||Vc.indexOf(n[1])===-1?(Ut(`Unparsable position ${n}`),null):!e&&n[0]===un&&n[1]===un?(Ut("Invalid position center center"),null):(t&&!pa(n)&&(n=[n[1],n[0]]),n[1]===un&&Wr.indexOf(n[0])!==-1&&(n=[un,n[0]]),n[0]===un&&Xr.indexOf(n[1])!==-1&&(n=[n[1],un]),n)):null}function pa(n){return Xr.indexOf(n[0])!==-1&&Wr.indexOf(n[1])!==-1}function Wc(n){let e;if(typeof n=="string"){const t=n.toString().trim();let i=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Xe.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new ue(`Unknown speed unit "${s}"`)}}else e=n;return e}function ma(n,e){if(typeof n!="number"){const t=Wc(n);return e/Math.abs(t)*1e3}else return Math.abs(n)}function Ln(n,e=!1,t=e){let i;if(typeof n=="string"){const s=n.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new ue(`Unknown angle "${n}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":i=Xe.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new ue(`Unknown angle unit "${o}"`)}else i=r}else if(typeof n=="number"&&!isNaN(n))i=n;else throw new ue(`Unknown angle "${n}"`);return i=Ds(e?i+Math.PI:i,Math.PI*2),e?Xe.clamp(i-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):i}function ga(n,e=!1){const t=new Rt(n);return t.needsUpdate=!0,t.minFilter=e?1008:1006,t.generateMipmaps=e,t.anisotropy=e?2:1,t}var Xc=new ti;function va(n,e){Xc.setFromEuler(e).invert(),n.applyQuaternion(Xc)}function $r(n,e){const t=function(i){const s=Vr({...n,...i}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:n[o]});else if(!(o in n)){Ut(`Unknown option ${o}`);continue}r[o]=a}return r};return t.defaults=n,t.parsers=e||{},t}function $c(n,e){Rn(n,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function _a(n,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${n} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function qc(n){do{if(n instanceof ShadowRoot&&n.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}n=n.parentNode}while(n)}function Yc(n,e,t,i){const s={isEquirectangular:!0,fullWidth:Pn(t?.fullWidth,i?.fullWidth),fullHeight:Pn(t?.fullHeight,i?.fullHeight),croppedWidth:Pn(t?.croppedWidth,i?.croppedWidth,n),croppedHeight:Pn(t?.croppedHeight,i?.croppedHeight,e),croppedX:Pn(t?.croppedX,i?.croppedX),croppedY:Pn(t?.croppedY,i?.croppedY),poseHeading:Pn(t?.poseHeading,i?.poseHeading,0),posePitch:Pn(t?.posePitch,i?.posePitch,0),poseRoll:Pn(t?.poseRoll,i?.poseRoll,0),initialHeading:i?.initialHeading,initialPitch:i?.initialPitch,initialFov:i?.initialFov};if(s.croppedWidth!==n){const r=n/s.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(o=>{s[o]&&(s[o]=Math.round(s[o]*r))})}return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(s.croppedWidth,s.croppedHeight*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-n)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(Ut("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(Ut("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(Ut("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(Ut("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(Ut("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var qr=class{constructor(e){this.easing=kr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=e,e?(e.easing&&(this.easing=typeof e.easing=="function"?e.easing:kr[e.easing]||kr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(t=>this.__run(t))},e.delay||0)):this.resolved=!0}__run(e){if(this.cancelled)return;this.start||(this.start=e);const t=(e-this.start)/this.options.duration,i={};if(t<1){for(const[s,r]of Object.entries(this.options.properties))if(r){const o=r.start+(r.end-r.start)*this.easing(t);i[s]=o}this.options.onTick(i,t),this.animationFrame=window.requestAnimationFrame(s=>this.__run(s))}else{for(const[s,r]of Object.entries(this.options.properties))r&&(i[s]=r.end);this.options.onTick(i,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(e){e?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(t=>t(e)),this.callbacks.length=0}then(e){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(e):new Promise(t=>{this.callbacks.push(t)}).then(e)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Is=class{constructor(n,e){if(this.fn=n,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new ue("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(n){this.__current=n}setSpeed(n){this.speed=n}goto(n,e=1){this.mode=2,this.target=this.wrap?Ds(n,this.max):Xe.clamp(n,this.min,this.max),this.speedMult=e}step(n,e=1){e===0?this.setValue(this.current+n):(this.mode!==2&&(this.target=this.current),this.goto(this.target+n,e))}roll(n=!1,e=1){this.mode=1,this.target=n?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(n){return this.target=this.wrap?Ds(n,this.max):Xe.clamp(n,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(n){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+n/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-n/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*n/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*n/1e3)),t!==null&&(t=this.wrap?Ds(t,this.max):Xe.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},jc=class{constructor(n,e){this.fn=n,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((n,[e,t])=>(n[e]=t.current,n),{})}setSpeed(n){for(const e of Object.values(this.dynamics))e.setSpeed(n)}goto(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].goto(i,e)}step(n,e=1){if(e===0)this.setValue(Object.keys(n).reduce((t,i)=>(t[i]=n[i]+this.dynamics[i].current,t),{}));else for(const[t,i]of Object.entries(n))this.dynamics[t].step(i,e)}roll(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].roll(i,e)}stop(){for(const n of Object.values(this.dynamics))n.stop()}setValue(n){let e=!1;for(const[t,i]of Object.entries(n))e=this.dynamics[t].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(n){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(n)||e;return e&&this.fn&&this.fn(this.current),e}},Yr=class{constructor(n=200){this.delay=n,this.time=0,this.delay=n}get pending(){return this.time!==0}down(n){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=n}up(n){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{n(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(n(this.data),this.time=0,this.data=void 0)}},Zc=(n=>(n.VERTICAL="VERTICAL",n.HORIZONTAL="HORIZONTAL",n))(Zc||{}),Kc=class{constructor(n,e,t){this.container=n,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(n){switch(n.type){case"click":n.stopPropagation();break;case"mousedown":this.__onMouseDown(n);break;case"mouseenter":this.__onMouseEnter(n);break;case"mouseleave":this.__onMouseLeave(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break}}__onMouseDown(n){this.mousedown=!0,this.__update(n.clientX,n.clientY,!0)}__onMouseEnter(n){this.mouseover=!0,this.__update(n.clientX,n.clientY,!0)}__onTouchStart(n){this.mouseover=!0,this.mousedown=!0;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(n){(this.mousedown||this.mouseover)&&(n.stopPropagation(),this.__update(n.clientX,n.clientY,!0))}__onTouchMove(n){if(this.mousedown||this.mouseover){n.stopPropagation();const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(n){this.mousedown&&(this.mousedown=!1,this.__update(n.clientX,n.clientY,!1))}__onMouseLeave(n){this.mouseover&&(this.mouseover=!1,this.__update(n.clientX,n.clientY,!0))}__onTouchEnd(n){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(n,e,t){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=Xe.clamp((i.bottom-e)/i.height,0,1):s=Xe.clamp((n-i.left)/i.width,0,1),this.listener({value:s,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:n,clientY:e}})}},ge={};ra(ge,{BeforeAnimateEvent:()=>xa,BeforeRenderEvent:()=>Us,BeforeRotateEvent:()=>nh,ClickEvent:()=>sh,ConfigChangedEvent:()=>jt,DoubleClickEvent:()=>ah,FullscreenEvent:()=>Fs,HideNotificationEvent:()=>Os,HideOverlayEvent:()=>dh,HidePanelEvent:()=>di,HideTooltipEvent:()=>ph,KeypressEvent:()=>ui,LoadProgressEvent:()=>vh,ObjectEnterEvent:()=>zh,ObjectEvent:()=>jr,ObjectHoverEvent:()=>Gh,ObjectLeaveEvent:()=>ya,PanoramaErrorEvent:()=>Sh,PanoramaLoadEvent:()=>xh,PanoramaLoadedEvent:()=>ls,PositionUpdatedEvent:()=>ks,ReadyEvent:()=>zs,RenderEvent:()=>Rh,RollUpdatedEvent:()=>Bs,ShowNotificationEvent:()=>Hs,ShowOverlayEvent:()=>Dh,ShowPanelEvent:()=>fi,ShowTooltipEvent:()=>Uh,SizeUpdatedEvent:()=>Vs,StopAllEvent:()=>Gs,TransitionDoneEvent:()=>Mh,ViewerEvent:()=>tt,ZoomUpdatedEvent:()=>qn});var Ns=class extends Event{constructor(n,e=!1){super(n,{cancelable:e})}},Jc=class extends EventTarget{dispatchEvent(n){return super.dispatchEvent(n)}addEventListener(n,e,t){super.addEventListener(n,e,t)}removeEventListener(n,e,t){super.removeEventListener(n,e,t)}},tt=class extends Ns{},Qc=class Yu extends tt{constructor(e,t){super(Yu.type,!0),this.position=e,this.zoomLevel=t}};Qc.type="before-animate";var xa=Qc,eh=class ju extends tt{constructor(e,t){super(ju.type),this.timestamp=e,this.elapsed=t}};eh.type="before-render";var Us=eh,th=class Zu extends tt{constructor(e){super(Zu.type,!0),this.position=e}};th.type="before-rotate";var nh=th,ih=class Ku extends tt{constructor(e){super(Ku.type),this.data=e}};ih.type="click";var sh=ih,rh=class Ju extends tt{constructor(e){super(Ju.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};rh.type="config-changed";var jt=rh,oh=class Qu extends tt{constructor(e){super(Qu.type),this.data=e}};oh.type="dblclick";var ah=oh,lh=class ef extends tt{constructor(e){super(ef.type),this.fullscreenEnabled=e}};lh.type="fullscreen";var Fs=lh,ch=class tf extends tt{constructor(e){super(tf.type),this.notificationId=e}};ch.type="hide-notification";var Os=ch,hh=class nf extends tt{constructor(e){super(nf.type),this.overlayId=e}};hh.type="hide-overlay";var dh=hh,uh=class sf extends tt{constructor(e){super(sf.type),this.panelId=e}};uh.type="hide-panel";var di=uh,fh=class rf extends tt{constructor(e){super(rf.type),this.tooltipData=e}};fh.type="hide-tooltip";var ph=fh,mh=class of extends tt{constructor(e,t){super(of.type,!0),this.key=e,this.originalEvent=t}matches(e){return ca(this.originalEvent,e)}};mh.type="key-press";var ui=mh,gh=class af extends tt{constructor(e){super(af.type),this.progress=e}};gh.type="load-progress";var vh=gh,_h=class lf extends tt{constructor(e){super(lf.type),this.panorama=e}};_h.type="panorama-load";var xh=_h,yh=class cf extends tt{constructor(e){super(cf.type),this.data=e}};yh.type="panorama-loaded";var ls=yh,Eh=class hf extends tt{constructor(e,t){super(hf.type),this.panorama=e,this.error=t}};Eh.type="panorama-error";var Sh=Eh,wh=class df extends tt{constructor(e){super(df.type),this.completed=e}};wh.type="transition-done";var Mh=wh,bh=class uf extends tt{constructor(e){super(uf.type),this.position=e}};bh.type="position-updated";var ks=bh,Th=class ff extends tt{constructor(e){super(ff.type),this.roll=e}};Th.type="roll-updated";var Bs=Th,Ah=class pf extends tt{constructor(){super(pf.type)}};Ah.type="ready";var zs=Ah,Ch=class mf extends tt{constructor(){super(mf.type)}};Ch.type="render";var Rh=Ch,Ph=class gf extends tt{constructor(e){super(gf.type),this.notificationId=e}};Ph.type="show-notification";var Hs=Ph,Lh=class vf extends tt{constructor(e){super(vf.type),this.overlayId=e}};Lh.type="show-overlay";var Dh=Lh,Ih=class _f extends tt{constructor(e){super(_f.type),this.panelId=e}};Ih.type="show-panel";var fi=Ih,Nh=class xf extends tt{constructor(e,t){super(xf.type),this.tooltip=e,this.tooltipData=t}};Nh.type="show-tooltip";var Uh=Nh,Fh=class yf extends tt{constructor(e){super(yf.type),this.size=e}};Fh.type="size-updated";var Vs=Fh,Oh=class Ef extends tt{constructor(){super(Ef.type)}};Oh.type="stop-all";var Gs=Oh,kh=class Sf extends tt{constructor(e){super(Sf.type),this.zoomLevel=e}};kh.type="zoom-updated";var qn=kh,jr=class extends tt{constructor(n,e,t,i,s){super(n),this.originalEvent=e,this.object=t,this.viewerPoint=i,this.userDataKey=s}},Bh=class wf extends jr{constructor(e,t,i,s){super(wf.type,e,t,i,s)}};Bh.type="enter-object";var zh=Bh,Hh=class Mf extends jr{constructor(e,t,i,s){super(Mf.type,e,t,i,s)}};Hh.type="leave-object";var ya=Hh,Vh=class bf extends jr{constructor(e,t,i,s){super(bf.type,e,t,i,s)}};Vh.type="hover-object";var Gh=Vh,Zr=class{constructor(n){this.viewer=n}init(){}destroy(){}supportsTransition(n){return!1}supportsPreload(n){return!1}textureCoordsToSphericalCoords(n,e){throw new ue("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(n,e){throw new ue("Current adapter does not support texture coordinates.")}};Zr.supportsDownload=!1;function Wh(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof Zr)return _a(e.id,e.VERSION,"5.14.1"),e}return null}var Ws=`${hi}_touchSupport`,Xt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=_0(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const n=g0();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!n,this.maxTextureWidth=n?n.getParameter(n.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=v0(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Xt.isWebGLSupported)throw new ue("WebGL 2 is not supported.");if(Xt.maxTextureWidth===0)throw new ue("Unable to detect system capabilities")}};function g0(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function v0(){let n="ontouchstart"in window||navigator.maxTouchPoints>0;Ws in localStorage&&(n=localStorage[Ws]==="true");const e=new Promise(t=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{i(),localStorage[Ws]=!1,t(!1)},r=()=>{i(),localStorage[Ws]=!0,t(!0)},o=()=>{i(),localStorage[Ws]=n,t(n)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:n,promise:e}}function _0(n){let e=n,t=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!t;){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e,r.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}r.width=0,r.height=0,t||(e/=2)}if(t)return e;throw new ue("Unable to detect system capabilities")}var x0=$r({resolution:64,useXmpData:!0,blur:!1},{resolution:n=>{if(!n||!Xe.isPowerOfTwo(n))throw new ue("EquirectangularAdapter resolution must be power of two.");return n}}),Kr=class Tf extends Zr{static withConfig(e){return[Tf,e]}constructor(e,t){super(e),this.config=x0(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(Dt(e.textureX)||Dt(e.textureY))throw new ue("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,s=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,t){const i=e.yaw/Math.PI/2*t.fullWidth,s=e.pitch/Math.PI*t.fullHeight;let r=Math.round(e.yaw<Math.PI?i+t.fullWidth/2:i-t.fullWidth/2)-t.croppedX,o=Math.round(t.fullHeight/2-s)-t.croppedY;return(r<0||r>t.croppedWidth||o<0||o>t.croppedHeight)&&(r=o=void 0),{textureX:r,textureY:o}}async loadTexture(e,t=!0,i,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new ue("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:i}:r={data:i,...e};const o=await this.viewer.textureLoader.loadFile(r.path,t?d=>this.viewer.textureLoader.dispatchProgress(d):null,r.path),a=s?await this.loadXMP(o):null,c=await this.viewer.textureLoader.blobToImage(o);typeof r.data=="function"&&(r.data=r.data(c,a));const l=Yc(c.width,c.height,r.data,a),u=this.createEquirectangularTexture(c);return{panorama:e,texture:u,panoData:l,cacheKey:r.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),i=t.indexOf("<x:xmpmeta");if(i===-1)return null;const s=t.indexOf("</x:xmpmeta>",i);if(s===-1)return null;const r=t.substring(i,s);return r.includes("GPano:")?{fullWidth:an(r,"FullPanoWidthPixels"),fullHeight:an(r,"FullPanoHeightPixels"),croppedWidth:an(r,"CroppedAreaImageWidthPixels"),croppedHeight:an(r,"CroppedAreaImageHeightPixels"),croppedX:an(r,"CroppedAreaLeftPixels"),croppedY:an(r,"CroppedAreaTopPixels"),poseHeading:an(r,"PoseHeadingDegrees",!1),posePitch:an(r,"PosePitchDegrees",!1),poseRoll:an(r,"PoseRollDegrees",!1),initialHeading:an(r,"InitialViewHeadingDegrees",!1),initialPitch:an(r,"InitialViewPitchDegrees",!1),initialFov:an(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=i,s.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>Xt.maxTextureWidth){const t=Math.min(1,Xt.maxCanvasWidth/e.width),i=new OffscreenCanvas(Math.floor(e.width*t),Math.floor(e.height*t)),s=i.getContext("2d");return this.config.blur&&(s.filter=`blur(${i.width/2048}px)`),s.drawImage(e,0,0,i.width,i.height),ga(i)}return ga(e)}createMesh(e){const t=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,o=new wi(Ci,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+t,i,s,r).scale(-1,1,1),a=new Tn({depthTest:!1,depthWrite:!1});return new Bt(o,a)}setTexture(e,t){e.material.map=t.texture}setTextureOpacity(e,t){e.material.opacity=t,e.material.transparent=t<1}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};Kr.id="equirectangular",Kr.VERSION="5.14.1",Kr.supportsDownload=!0;var Ea=Kr,Xh=class Af extends Ea{static withConfig(e){return[Af,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1})}async loadTexture(e,t){const i=await super.loadTexture(e,t,null,!1);return i.panoData=null,i}createMesh(){const e=new wi(Ci,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),i=e.getAttribute("normal");for(let r=0;r<t.count;r++)for(let o=0;o<3;o++){const a=r*3+o,c=i.getX(a),l=i.getY(a),u=i.getZ(a),d=.947;if(r<t.count/6){const m=c===0&&u===0?1:Math.acos(l)/Math.sqrt(c*c+u*u)*(2/Math.PI);t.setXY(a,c*(d/4)*m+1/4,u*(d/2)*m+1/2)}else{const m=c===0&&u===0?1:Math.acos(-l)/Math.sqrt(c*c+u*u)*(2/Math.PI);t.setXY(a,-c*(d/4)*m+3/4,u*(d/2)*m+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new Tn({depthTest:!1,depthWrite:!1});return new Bt(e,s)}};Xh.id="dual-fisheye",Xh.VERSION="5.14.1";var pi=class Cf{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Cf?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},y0=$r({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),$t=class extends pi{constructor(n,e){super(n,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=y0(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===Lt.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(n=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),n&&this.viewer.navbar.autoSize())}hide(n=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",n&&this.viewer.navbar.autoSize())}checkSupported(){da(this.isSupported(),(n,e)=>{this.state&&(this.state.supported=n,e?n||this.hide():this.toggle(n))})}autoSize(){}isSupported(){return!0}toggleActive(n=!this.state.active){n!==this.state.active&&(this.state.active=n,Br(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(n){this.container.innerHTML=n,aa(this.container.querySelector("svg"),"psv-button-svg")}},E0=class extends $t{constructor(n,e){super(n,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},Xs=class extends $t{constructor(n){super(n,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Sn.info}),this.mode=0,this.viewer.addEventListener(Os.type,this),this.viewer.addEventListener(Hs.type,this),this.viewer.addEventListener(di.type,this),this.viewer.addEventListener(fi.type,this),this.viewer.addEventListener(jt.type,this)}destroy(){this.viewer.removeEventListener(Os.type,this),this.viewer.removeEventListener(Hs.type,this),this.viewer.removeEventListener(di.type,this),this.viewer.removeEventListener(fi.type,this),this.viewer.removeEventListener(jt.type,this),super.destroy()}handleEvent(n){if(n instanceof jt){n.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;n instanceof Os?e=this.mode===1:n instanceof Hs?e=this.mode===1&&n.notificationId!==Nt.DESCRIPTION:n instanceof di?e=this.mode===2:n instanceof fi&&(e=this.mode===2&&n.panelId!==Nt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(n){super.hide(n),this.mode&&this.__close()}autoSize(n=!1){if(n){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),i=!!this.viewer.config.description;t||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Nt.DESCRIPTION);break;case 2:this.viewer.panel.hide(Nt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Nt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Nt.DESCRIPTION,content:this.viewer.config.caption}))}};Xs.id="description";var $h=class extends $t{constructor(n){super(n,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Sn.download}),this.viewer.addEventListener(jt.type,this),this.viewer.addEventListener(ls.type,this)}destroy(){this.viewer.removeEventListener(jt.type,this),this.viewer.removeEventListener(ls.type,this),super.destroy()}handleEvent(n){n instanceof jt?(n.containsOptions("downloadUrl")&&this.checkSupported(),n.containsOptions("downloadUrl","downloadName")&&this.__update()):n instanceof ls&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const n=this.container;n.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,n.target="_blank",n.href.startsWith("data:")&&!this.viewer.config.downloadName?n.download="panorama."+n.href.substring(0,n.href.indexOf(";")).split("/").pop():n.download=this.viewer.config.downloadName||n.href.split("/").pop()}};$h.id="download";var qh=class extends $t{constructor(n){super(n,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Sn.fullscreenIn,iconActive:Sn.fullscreenOut}),this.viewer.addEventListener(Fs.type,this)}destroy(){this.viewer.removeEventListener(Fs.type,this),super.destroy()}handleEvent(n){n instanceof Fs&&this.toggleActive(n.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};qh.id="fullscreen";var S0="psvButton",w0=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${Sn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${n.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Jr=class extends $t{constructor(n){super(n,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Sn.menu}),this.viewer.addEventListener(fi.type,this),this.viewer.addEventListener(di.type,this),super.hide()}destroy(){this.viewer.removeEventListener(fi.type,this),this.viewer.removeEventListener(di.type,this),super.destroy()}handleEvent(n){n instanceof fi?this.toggleActive(n.panelId===Nt.MENU):n instanceof di&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(n){super.hide(n),this.__hideMenu()}show(n){super.show(n),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Nt.MENU,content:w0(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:n=>{const e=n?Rc(n,".psv-panel-menu-item"):void 0,t=e?e.dataset[S0]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Nt.MENU)}};Jr.id="menu";function M0(n){let e=0;switch(n){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return Sn.arrow.replace("rotate(0",`rotate(${e}`)}var $s=class extends $t{constructor(n,e){super(n,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:M0(e)}),this.direction=e,this.handler=new Yr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Lt.Enter&&this.__onMouseDown();break;case"keyup":n.key===Lt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Gr(Xt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const n={};switch(this.direction){case 0:n.pitch=!1;break;case 1:n.pitch=!0;break;case 3:n.yaw=!1;break;default:n.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(n),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};$s.groupId="move";var Yh=class extends $s{constructor(n){super(n,1)}};Yh.id="moveDown";var jh=class extends $s{constructor(n){super(n,2)}};jh.id="moveLeft";var Zh=class extends $s{constructor(n){super(n,3)}};Zh.id="moveRight";var Kh=class extends $s{constructor(n){super(n,0)}};Kh.id="moveUp";var Sa=class extends $t{constructor(n,e,t){super(n,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new Yr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Lt.Enter&&this.__onMouseDown();break;case"keyup":n.key===Lt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Gr(Xt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Sa.groupId="zoom";var Jh=class extends Sa{constructor(n){super(n,Sn.zoomIn,0)}};Jh.id="zoomIn";var Qh=class extends Sa{constructor(n){super(n,Sn.zoomOut,1)}};Qh.id="zoomOut";var wa=class extends $t{constructor(n){super(n,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Kc(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(Rn(this.container,"max-width"),10),this.viewer.addEventListener(qn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(zs.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(qn.type,this),this.viewer.removeEventListener(zs.type,this),super.destroy()}handleEvent(n){n instanceof qn?this.__moveZoomValue(n.zoomLevel):n instanceof zs&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Gr(Xt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(n){this.zoomValue.style.left=n/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(n){n.mousedown&&this.viewer.zoom(n.value*100)}};wa.id="zoomRange",wa.groupId="zoom";var ed=class extends Jc{constructor(n){super(),this.viewer=n}init(){}destroy(){}},Ma=class extends ed{constructor(n,e){super(n),this.config=this.constructor.configParser(e)}setOption(n,e){this.setOptions({[n]:e})}setOptions(n){const e={...this.config,...n},t=this.constructor,i=t.configParser,s=t.readonlyOptions,r=t.id;for(let[o,a]of Object.entries(n)){if(!(o in i.defaults)){Ut(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){Ut(`${r}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};Ma.readonlyOptions=[];function ba(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof ed)return _a(e.id,e.VERSION,"5.14.1"),e}return null}var Yn={panorama:null,container:null,adapter:[Ea,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Lt.ArrowUp]:"ROTATE_UP",[Lt.ArrowDown]:"ROTATE_DOWN",[Lt.ArrowRight]:"ROTATE_RIGHT",[Lt.ArrowLeft]:"ROTATE_LEFT",[Lt.PageUp]:"ZOOM_IN",[Lt.PageDown]:"ZOOM_OUT",[Lt.Plus]:"ZOOM_IN",[Lt.Minus]:"ZOOM_OUT"}},td={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Ta={container:n=>{if(!n)throw new ue("No value given for container.");return n},adapter:(n,{defValue:e})=>{if(n?Array.isArray(n)?n=[Wh(n[0]),n[1]]:n=[Wh(n),null]:n=e,!n[0])throw new ue("An undefined value was given for adapter.");if(!n[0].id)throw new ue("Adapter has no id.");return n},defaultYaw:n=>Ln(n),defaultPitch:n=>Ln(n,!0),defaultZoomLvl:n=>Xe.clamp(n,0,100),minFov:(n,{rawConfig:e})=>(e.maxFov<n&&(Ut("maxFov cannot be lower than minFov"),n=e.maxFov),Xe.clamp(n,1,179)),maxFov:(n,{rawConfig:e})=>(n<e.minFov&&(n=e.minFov),Xe.clamp(n,1,179)),moveInertia:(n,{defValue:e})=>n===!0?e:n===!1?0:n,lang:n=>({...Yn.lang,...n}),fisheye:n=>n===!0?1:n===!1?0:n,requestHeaders:n=>n&&typeof n=="object"?()=>n:typeof n=="function"?n:null,withCredentials:n=>typeof n=="boolean"?()=>n:typeof n=="function"?n:()=>!1,defaultTransition:(n,{defValue:e})=>n===null||n.speed===0?null:{...e,...n},rendererParameters:(n,{defValue:e})=>({...n,...e}),plugins:n=>n.map((e,t)=>{if(Array.isArray(e)?e=[ba(e[0]),e[1]]:e=[ba(e),null],!e[0])throw new ue(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new ue(`Plugin ${t} has no id.`);return e}),navbar:n=>n===!1?null:n===!0?Vr(Yn.navbar):typeof n=="string"?n.split(/[ ,]/):n},b0=$r(Yn,Ta),cs=class extends $t{constructor(n){super(n,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(n){this.show(),this.contentElt.innerHTML=n??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(Xs.id,!1)?.autoSize(!0)}};cs.id="caption";var Aa={},Qr={};function Ca(n,e){if(!n.id)throw new ue("Button id is required");if(Aa[n.id]=n,n.groupId&&(Qr[n.groupId]=Qr[n.groupId]||[]).push(n),e){const t=Yn.navbar;switch(e){case"start":t.unshift(n.id);break;case"end":t.push(n.id);break;default:{const[i,s]=e.split(":"),r=t.indexOf(i);if(!i||!s||r===-1)throw new ue(`Invalid defaultPosition ${e}`);t.splice(r+(s==="right"?1:0),0,n.id)}}}}[Qh,wa,Jh,Xs,cs,$h,qh,jh,Zh,Kh,Yh].forEach(n=>Ca(n));var T0=class extends pi{constructor(n){super(n,{className:`psv-navbar ${Ls}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(n){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,n.indexOf(cs.id)!==-1&&n.indexOf(Xs.id)===-1&&n.splice(n.indexOf(cs.id),0,Xs.id),n.forEach(e=>{typeof e=="object"?new E0(this,e):Aa[e]?new Aa[e](this):Qr[e]?Qr[e].forEach(t=>{new t(this)}):Ut(`Unknown button ${e}`)}),new Jr(this),this.children.forEach(e=>{e instanceof $t&&e.checkSupported()}),this.autoSize()}setCaption(n){this.children.some(e=>e instanceof cs?(e.setCaption(n),!0):!1)}getButton(n,e=!0){const t=this.children.find(i=>i instanceof $t&&i.id===n);return!t&&e&&Ut(`button "${n}" not found in the navbar`),t}focusButton(n){this.isVisible()&&(this.getButton(n,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(i=>{i instanceof $t&&i.autoSize()});const n=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(i=>{i.isVisible()&&i instanceof $t&&(e+=i.width,i.collapsable&&t.push(i))}),e!==0&&(n<e&&t.length>0?(t.forEach(i=>i.collapse()),this.collapsed=t,this.getButton(Jr.id).show(!1)):n>=e&&this.collapsed.length>0&&(this.collapsed.forEach(i=>i.uncollapse()),this.collapsed=[],this.getButton(Jr.id).hide(!1)),this.getButton(cs.id,!1)?.autoSize())}};ci.enabled=!1;var hs={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){ci.enabled&&(Ut("ThreeJS cache should be disabled"),ci.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(n,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[n]=t,this.items[e].lastAccess=Date.now())},get(n,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[n]},remove(n,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[n],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,n],[,e])=>e.lastAccess-n.lastAccess).forEach(([n,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[n]})}},A0=class extends pi{constructor(n){super(n,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=Rn(this.loader,"color"),this.color=Rn(this.canvas,"color"),this.border=parseInt(Rn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(Rn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(jt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(jt.type,this),super.destroy()}handleEvent(n){n instanceof jt&&n.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(n){this.container.classList.remove("psv-loader--undefined");const e=Xe.clamp(n,0,99.999)/100*Math.PI*2,t=this.size/2,i=t,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+t,a=-Math.cos(e)*r+t,c=n>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${c} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const n=this.loader.querySelector(".psv-loader-image, .psv-loader-text");n&&this.loader.removeChild(n);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},C0=class extends pi{constructor(n){super(n,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new ue("Notification cannot be toggled")}show(n){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof n=="string"&&(n={content:n}),this.state.contentId=n.id||null,this.content.innerHTML=n.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new Hs(this.state.contentId)),n.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),n.timeout))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new Os(e))}}},R0=class extends pi{constructor(n){super(n,{className:`psv-overlay ${Ls}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(ui.type,this),super.hide()}destroy(){this.viewer.removeEventListener(ui.type,this),super.destroy()}handleEvent(n){n.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),n.stopPropagation()):n instanceof ui&&this.isVisible()&&this.state.dismissible&&n.matches(Lt.Escape)&&(this.hide(),n.preventDefault())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new ue("Overlay cannot be toggled")}show(n){typeof n=="string"&&(n={title:n}),this.state.contentId=n.id||null,this.state.dismissible=n.dismissible!==!1,this.image.innerHTML=n.image||"",this.title.innerHTML=n.title||"",this.text.innerHTML=n.text||"",super.show(),this.viewer.dispatchEvent(new Dh(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new dh(e))}}},P0=200,Ra="psv-panel-content--no-interaction",L0=class extends pi{constructor(n){super(n,{className:`psv-panel ${Ls}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=Sn.close,t.title=n.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(ui.type,this)}destroy(){this.viewer.removeEventListener(ui.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break;case ui.type:this.__onKeyPress(n);break}}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new ue("Panel cannot be toggled")}show(n){typeof n=="string"&&(n={content:n});const e=this.isVisible(n.id);this.state.contentId=n.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),n.id&&this.state.width[n.id]?this.container.style.width=this.state.width[n.id]:n.width?this.container.style.width=n.width:this.container.style.width=null,this.content.innerHTML=n.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Br(this.content,"psv-panel-content--no-margin",n.noMargin===!0),n.clickHandler&&(this.state.clickHandler=t=>{n.clickHandler(zr(t))},this.state.keyHandler=t=>{t.key===Lt.Enter&&n.clickHandler(zr(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new fi(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new di(e))}}__onMouseDown(n){n.stopPropagation(),this.__startResize(n.clientX,n.clientY)}__onTouchStart(n){if(n.stopPropagation(),n.touches.length===1){const e=n.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(n){this.state.mousedown&&(n.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Ra))}__onTouchEnd(n){this.state.mousedown&&(n.stopPropagation(),n.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Ra)))}__onMouseMove(n){this.state.mousedown&&(n.stopPropagation(),this.__resize(n.clientX,n.clientY))}__onTouchMove(n){if(this.state.mousedown){const e=n.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(n){this.isVisible()&&n.matches(Lt.Escape)&&(this.hide(),n.preventDefault())}__startResize(n,e){this.state.mouseX=n,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Ra)}__resize(n,e){const t=n,i=e,s=Math.max(P0,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=t,this.state.mouseY=i}},D0=class extends pi{constructor(n,e){super(n,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(n){n.type==="transitionend"&&this.__onTransitionEnd(n)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new ue("Tooltip cannot be toggled")}show(n){if(this.state.state!==0)throw new ue("Initialized tooltip cannot be re-initialized");n.className&&aa(this.container,n.className),n.style&&Object.assign(this.container.style,n.style),this.state.state=3,this.update(n.content,n),this.state.data=n.data,this.state.state=1,this.viewer.dispatchEvent(new Uh(this,this.state.data)),this.__waitImages()}update(n,e){this.content.innerHTML=n;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(Rn(this.arrow,"border-top-width"),10),this.state.border=parseInt(Rn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(n){if(this.state.state!==1&&this.state.state!==3)throw new ue("Uninitialized tooltip cannot be moved");n.box=n.box??this.state.config?.box??{width:0,height:0},this.state.config=n;const e=this.container,t=this.arrow,i={posClass:Gc(n.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,n);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const a=pa(i.posClass);s&&(i.posClass[a?0:1]=s),r&&(i.posClass[a?1:0]=r),this.__computeTooltipPosition(i,n)}e.style.top=i.top+"px",e.style.left=i.left+"px",t.style.top=i.arrowTop+"px",t.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new ph(this.state.data));const n=parseFloat(Rn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},n*2)}__onTransitionEnd(n){if(n.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(n,e){const t=this.state.arrow,i=e.top,s=n.height,r=e.left,o=n.width,a=t+this.state.border,c=e.box.width/2+t*2,l=e.box.height/2+t*2;switch(n.posClass.join("-")){case"top-left":n.top=i-l-s,n.left=r+a-o,n.arrowTop=s,n.arrowLeft=o-a-t;break;case"top-center":n.top=i-l-s,n.left=r-o/2,n.arrowTop=s,n.arrowLeft=o/2-t;break;case"top-right":n.top=i-l-s,n.left=r-a,n.arrowTop=s,n.arrowLeft=t;break;case"bottom-left":n.top=i+l,n.left=r+a-o,n.arrowTop=-t*2,n.arrowLeft=o-a-t;break;case"bottom-center":n.top=i+l,n.left=r-o/2,n.arrowTop=-t*2,n.arrowLeft=o/2-t;break;case"bottom-right":n.top=i+l,n.left=r-a,n.arrowTop=-t*2,n.arrowLeft=t;break;case"left-top":n.top=i+a-s,n.left=r-c-o,n.arrowTop=s-a-t,n.arrowLeft=o;break;case"center-left":n.top=i-s/2,n.left=r-c-o,n.arrowTop=s/2-t,n.arrowLeft=o;break;case"left-bottom":n.top=i-a,n.left=r-c-o,n.arrowTop=t,n.arrowLeft=o;break;case"right-top":n.top=i+a-s,n.left=r+c,n.arrowTop=s-a-t,n.arrowLeft=-t*2;break;case"center-right":n.top=i-s/2,n.left=r+c,n.arrowTop=s/2-t,n.arrowLeft=-t*2;break;case"right-bottom":n.top=i-a,n.left=r+c,n.arrowTop=t,n.arrowLeft=-t*2;break}}__waitImages(){const n=this.content.querySelectorAll("img");if(n.length>0){const e=[];n.forEach(t=>{t.complete||e.push(new Promise(i=>{t.onload=i,t.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},I0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,qs=class{constructor(n){this.viewer=n,this.config=n.config,this.state=n.state}destroy(){}},wn=new I,eo=new bn(0,0,0,"ZXY"),N0=class extends qs{constructor(n){super(n)}fovToZoomLevel(n){const e=Math.round((n-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Xe.clamp(e-2*(e-50),0,100)}zoomLevelToFov(n){return this.config.maxFov+n/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(n){return Xe.radToDeg(2*Math.atan(Math.tan(Xe.degToRad(n)/2)*this.state.aspect))}hFovToVFov(n){return Xe.radToDeg(2*Math.atan(Math.tan(Xe.degToRad(n)/2)/this.state.aspect))}getAnimationProperties(n,e,t){const i=!Dt(e),s=!Dt(t),r={};let o=null;if(i){const a=this.viewer.getPosition(),c=Tc(a.yaw,e.yaw);r.yaw={start:a.yaw,end:a.yaw+c},r.pitch={start:a.pitch,end:e.pitch},o=ma(n,Ac(a,e))}if(s){const a=this.viewer.getZoomLevel(),c=Math.abs(t-a);r.zoom={start:a,end:t},o===null&&(o=ma(n,Math.PI/4*c/100))}return o===null?typeof n=="number"?o=n:o=oa:o=Math.max(oa,o),{duration:o,properties:r}}getTransitionOptions(n){let e;const t=this.config.defaultTransition??Yn.defaultTransition;return n.transition===!1||n.transition===null?e=null:n.transition===!0?e={...t}:typeof n.transition=="object"?e={...t,...n.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(n){if(!this.state.textureData?.panoData)throw new ue("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(n,this.state.textureData.panoData);return!eo.equals(this.viewer.renderer.panoramaPose)||!eo.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,wn),wn.applyEuler(this.viewer.renderer.panoramaPose),wn.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(wn)):e}sphericalCoordsToTextureCoords(n){if(!this.state.textureData?.panoData)throw new ue("Current adapter does not support texture coordinates or no texture has been loaded");return(!eo.equals(this.viewer.renderer.panoramaPose)||!eo.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(n,wn),va(wn,this.viewer.renderer.sphereCorrection),va(wn,this.viewer.renderer.panoramaPose),n=this.vector3ToSphericalCoords(wn)),this.viewer.adapter.sphericalCoordsToTextureCoords(n,this.state.textureData.panoData)}sphericalCoordsToVector3(n,e,t=Ci){return e||(e=new I),e.x=t*-Math.cos(n.pitch)*Math.sin(n.yaw),e.y=t*Math.sin(n.pitch),e.z=t*Math.cos(n.pitch)*Math.cos(n.yaw),e}vector3ToSphericalCoords(n){const e=Math.acos(n.y/Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z)),t=Math.atan2(n.x,n.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(n){const e=this.viewer.renderer.getIntersections(n).filter(t=>t.object.userData[hi]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(n){const e=this.viewerCoordsToVector3(n);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(n){const e=n.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(n){return this.sphericalCoordsToVector3(n,wn),this.vector3ToViewerCoords(wn)}isPointVisible(n){let e,t;if(n instanceof I)e=n,t=this.vector3ToViewerCoords(n);else if(fa(n))e=this.sphericalCoordsToVector3(n,wn),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(n){if("yaw"in n||"pitch"in n){if(!("yaw"in n)||!("pitch"in n))throw new ue("Position is missing 'yaw' or 'pitch'");return{yaw:Ln(n.yaw),pitch:Ln(n.pitch,!0)}}else return this.textureCoordsToSphericalCoords(n)}cleanSphereCorrection(n){return{pan:Ln(n?.pan||0),tilt:Ln(n?.tilt||0,!0),roll:Ln(n?.roll||0,!0,!1)}}cleanPanoramaPose(n){return{pan:Xe.degToRad(n?.poseHeading||0),tilt:Xe.degToRad(n?.posePitch||0),roll:Xe.degToRad(n?.poseRoll||0)}}cleanPanoramaOptions(n,e){return e?.isEquirectangular&&(Dt(n.zoom)&&!Dt(e.initialFov)&&(n={...n,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),Dt(n.position)&&!Dt(e.initialHeading)&&!Dt(e.initialPitch)&&(n={...n,position:{yaw:Ln(e.initialHeading),pitch:Ln(e.initialPitch,!0)}})),n}},U0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,F0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,to=class Rf{constructor(){this.$=Rf.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};to.IDLE=0,to.CLICK=1,to.MOVING=2;var Mt=to,O0=class extends qs{constructor(n){super(n),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new Mt,this.keyHandler=new Yr,this.resizeObserver=new ResizeObserver(Uc(()=>this.viewer.autoSize(),50)),this.moveThreshold=_c*Xt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Us.type,this),this.viewer.addEventListener(Gs.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Us.type,this),this.viewer.removeEventListener(Gs.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(n){switch(n.type){case"keydown":this.__onKeyDown(n);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchmove":this.__onTouchMove(n);break;case"touchend":this.__onTouchEnd(n);break;case"fullscreenchange":this.__onFullscreenChange();break;case Us.type:this.__applyMoveDelta();break;case Gs.type:this.__clearMoveDelta();break}if(!Pc(n,"."+Ls))switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"wheel":this.__onMouseWheel(n);break}}__onKeyDown(n){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=n.key===Lt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Nt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new ui(n.key,n))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,t]of Object.entries(this.config.keyboardActions))if(ca(n,e)){if(typeof t=="function")t(this.viewer,n);else{switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(t)}n.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(n=>{n==="ZOOM_IN"||n==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(n){this.step.add(Mt.CLICK),this.data.startMouseX=n.clientX,this.data.startMouseY=n.clientY,this.config.mousemove&&n.preventDefault()}__onMouseUp(n){this.step.is(Mt.CLICK,Mt.MOVING)&&this.__stopMove(n.clientX,n.clientY,n,n.button===2)}__onMouseMove(n){this.config.mousemove&&this.step.is(Mt.CLICK,Mt.MOVING)&&(n.preventDefault(),this.__doMove(n.clientX,n.clientY)),this.__handleObjectsEvents(n)}__onTouchStart(n){n.touches.length===1?(this.step.add(Mt.CLICK),this.data.startMouseX=n.touches[0].clientX,this.data.startMouseY=n.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=n.touches[0];this.__stopMove(e.clientX,e.clientY,n,!0),this.data.longtouchTimeout=null},yc))):n.touches.length===2&&(this.step.set(Mt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(n),n.preventDefault()))}__onTouchEnd(n){if(this.__cancelLongTouch(),this.step.is(Mt.CLICK,Mt.MOVING)){if(n.preventDefault(),this.__cancelTwoFingersOverlay(),n.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(n.touches.length===0){const e=n.changedTouches[0];this.__stopMove(e.clientX,e.clientY,n)}}}__onTouchMove(n){if(this.__cancelLongTouch(),!!this.config.mousemove)if(n.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(Mt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Nt.TWO_FINGERS,image:U0,title:this.config.lang.twoFingers})},Ec));else if(this.step.is(Mt.CLICK,Mt.MOVING)){n.preventDefault();const e=n.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(n),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Nt.TWO_FINGERS))}__onMouseWheel(n){if(!this.config.mousewheel||!n.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Nt.CTRL_ZOOM,image:F0,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Nt.CTRL_ZOOM),Sc);return}n.preventDefault(),n.stopPropagation();const e=n.deltaY/Math.abs(n.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const n=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(n?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new Fs(n))}__resetMove(){this.step.set(Mt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(n){this.viewer.stopAll(),this.__resetMove();const e=la(n);this.step.set(Mt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(n,e,t,i=!1){this.step.is(Mt.CLICK)&&!this.__moveThresholdReached(n,e)&&this.__doClick(n,e,t,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(n,e,t,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=n-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),c=a.find(l=>l.object.userData[hi]);if(c){const l=this.viewer.dataHelper.vector3ToSphericalCoords(c.point),u={rightclick:i,originalEvent:t,target:zr(t),clientX:n,clientY:e,viewerX:r,viewerY:o,yaw:l.yaw,pitch:l.pitch,objects:a.map(d=>d.object).filter(d=>!d.userData[hi])};try{const d=this.viewer.dataHelper.sphericalCoordsToTextureCoords(u);Object.assign(u,d)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-u.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-u.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new ah(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new sh(u)),this.data.dblclickData=Vr(u),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},xc))}}__handleObjectsEvents(n){if(!Oc(this.state.objectsObservers)&&n.composedPath().includes(this.viewer.container)){const e=Lc(this.viewer.container),t={x:n.clientX-e.x,y:n.clientY-e.y},i=this.viewer.renderer.getIntersections(t),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(n,r,t,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=i.find(c=>c.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,ya),this.state.objectsObservers[r]=null),o?s(a.object,r,Gh):(this.state.objectsObservers[r]=a.object,s(a.object,r,zh))):o&&(s(o,r,ya),this.state.objectsObservers[r]=null)}}}__doMove(n,e){if(this.step.is(Mt.CLICK)&&this.__moveThresholdReached(n,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(Mt.MOVING),this.data.mouseX=n,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(Mt.MOVING)){const t=(n-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(n-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(t/this.state.size.width)*Xe.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*Xe.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=n,this.data.mouseY=e}}__moveThresholdReached(n,e){return Math.abs(n-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(n){if(this.step.is(Mt.MOVING)){n.preventDefault();const e=la(n);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Xt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};Ke.enabled=!1;var no=new Je,nd=new ot,id=new Gi,k0=class extends qs{constructor(n){super(n),this.frustumNeedsUpdate=!0,this.renderer=new Q_(this.config.rendererParameters),this.renderer.setPixelRatio(Xt.pixelRatio),this.renderer.outputColorSpace=vi,this.renderer.toneMapping=1,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Ar,this.camera=new on(50,16/9,.1,2*Ci),this.camera.matrixAutoUpdate=!1;const e=new Bt(new wi(Ci).scale(-1,1,1),new Tn({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[hi]:!0},this.scene.add(e),this.raycaster=new Bl,this.frustum=new qo,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(Vs.type,this),this.viewer.addEventListener(qn.type,this),this.viewer.addEventListener(ks.type,this),this.viewer.addEventListener(Bs.type,this),this.viewer.addEventListener(jt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(n=>this.__renderLoop(n))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Vs.type,this),this.viewer.removeEventListener(qn.type,this),this.viewer.removeEventListener(ks.type,this),this.viewer.removeEventListener(Bs.type,this),this.viewer.removeEventListener(jt.type,this),super.destroy()}handleEvent(n){switch(n.type){case Vs.type:this.__onSizeUpdated();break;case qn.type:this.__onZoomUpdated();break;case ks.type:this.__onPositionUpdated();break;case Bs.type:this.__onPositionUpdated();break;case jt.type:n.containsOptions("fisheye")&&this.__onPositionUpdated(),n.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(n){n?this.customRenderer=n(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(n){const e=this.timestamp?n-this.timestamp:0;this.timestamp=n,this.viewer.dispatchEvent(new Us(n,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Rh))}setTexture(n){this.meshContainer||(this.meshContainer=new Xn,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(n.panoData),this.viewer.adapter.setTexture(this.mesh,n,!1),this.meshContainer.add(this.mesh),this.state.textureData=n,this.viewer.needsUpdate()}setPanoramaPose(n,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(n);e.rotation.set(-t.tilt,t.pan,t.roll,"YXZ")}setSphereCorrection(n,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(n);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(n,e,t){const i=t.effect==="fade"||t.rotation,s=!Dt(e.position),r=!Dt(e.zoom),o=new xa(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new Xn,c=this.viewer.adapter.createMesh(n.panoData);if(this.viewer.adapter.setTexture(c,n,!0),this.viewer.adapter.setTextureOpacity(c,0),this.setPanoramaPose(n.panoData,c),this.setSphereCorrection(e.sphereCorrection,a),s&&!t.rotation){const m=this.viewer.getPosition(),p=new I(0,1,0);a.rotateOnWorldAxis(p,o.position.yaw-m.yaw);const g=new I(0,1,0).cross(this.camera.getWorldDirection(new I)).normalize();a.rotateOnWorldAxis(g,o.position.pitch-m.pitch)}a.add(c),this.scene.add(a),this.renderer.setRenderTarget(new ni),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:l,properties:u}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?o.position:null,i?o.zoomLevel:null),d=new qr({properties:{...u,opacity:{start:0,end:1}},duration:l,easing:"inOutCubic",onTick:m=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(c,m.opacity);break;case"black":case"white":m.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?Xe.mapLinear(m.opacity,0,.5,1,0):Xe.mapLinear(m.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=t.effect==="black"?Xe.mapLinear(m.opacity,.5,1,0,1):Xe.mapLinear(m.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(c,1),r&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}s&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:m.yaw,pitch:m.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(m.zoom),this.viewer.needsUpdate()}});return d.then(m=>{a.remove(c),this.scene.remove(a),m?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=c,this.meshContainer.add(c),this.state.textureData=n,this.setPanoramaPose(n.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(n),this.viewer.adapter.disposeMesh(c))}),d}getIntersections(n){no.x=2*n.x/this.state.size.width-1,no.y=-2*n.y/this.state.size.height+1,this.raycaster.setFromCamera(no,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,no)),e}isObjectVisible(n){if(!n)return!1;if(this.frustumNeedsUpdate&&(nd.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(nd),this.frustumNeedsUpdate=!1),n.isVector3)return this.frustum.containsPoint(n);if(n.isMesh&&n.geometry){const e=n;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),id.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(id)}else return n.isObject3D?this.frustum.intersectsObject(n):!1}addObject(n){this.scene.add(n)}removeObject(n){this.scene.remove(n)}cleanScene(n){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(i=>{i.value?.dispose?.()}),t.dispose()};n.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{e(i)}):e(t.material)),t instanceof Ar||t.dispose?.(),t!==n&&this.cleanScene(t)})}},B0=class extends Yp{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(n,e,t,i){const s=this._abortController.signal,r=super.load(n,c=>{a(),e(c)},t,c=>{if(a(),s.aborted){const l=new Error;l.name="AbortError",l.message="The operation was aborted.",i(l)}else i(c)});function o(){r.src=""}function a(){s.removeEventListener("abort",o,!1)}return s.addEventListener("abort",o,!1),r}},z0=class extends qs{constructor(n){super(n),this.fileLoader=new qp,this.fileLoader.setResponseType("blob"),this.imageLoader=new B0}destroy(){this.abortLoading(),super.destroy()}abortLoading(){this.fileLoader.abort?.(),this.imageLoader.abort()}loadFile(n,e,t){const i=hs.get(n,t);if(i){if(i instanceof Blob)return e?.(100),Promise.resolve(i);hs.remove(n,t)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(n)),this.fileLoader.setWithCredentials(this.config.withCredentials(n));let s=0;return e?.(s),this.fileLoader.loadAsync(n,r=>{if(r.lengthComputable){const o=r.loaded/r.total*100;o>s&&(s=o,e?.(s))}}).then(r=>(s=100,e?.(s),hs.add(n,t,r),r))}loadImage(n,e,t){const i=hs.get(n,t);return i?(e?.(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(n)),this.imageLoader.loadAsync(n).then(s=>(hs.add(n,t,s),s))):this.loadFile(n,e,t).then(s=>this.blobToImage(s))}blobToImage(n){return new Promise((e,t)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=t,i.src=URL.createObjectURL(n)})}preloadPanorama(n){return this.viewer.adapter.supportsPreload(n)?this.viewer.adapter.loadTexture(n,!1):Promise.reject(new ue("Current adapter does not support preload"))}dispatchProgress(n){this.viewer.loader.setProgress(n),this.viewer.dispatchEvent(new vh(Math.round(n)))}},H0=class extends qs{constructor(n){super(n),this.zoom=new Is(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new qn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new jc(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new ks(e))},{yaw:new Is(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Is(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Is(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new Bs(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Xe.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Xe.degToRad(this.config.moveSpeed*50))}update(n){this.zoom.update(n),this.position.update(n),this.roll.update(n)}},V0=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new I(0,0,Ci),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},G0=class extends Jc{constructor(n){if(super(),this.plugins={},this.children=[],this.parent=Cc(n.container),!this.parent)throw new ue('"container" element not found.');this.parent[hi]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),qc(this.parent),$c(this.container,"core"),this.state=new V0,this.config=b0(n),this.__setSize(this.config.size),this.overlay=new R0(this);try{Xt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}hs.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new k0(this),this.textureLoader=new z0(this),this.eventsHandler=new O0(this),this.dataHelper=new N0(this),this.dynamics=new H0(this),this.adapter.init?.(),this.loader=new A0(this),this.navbar=new T0(this),this.panel=new L0(this),this.notification=new C0(this),this.autoSize(),this.setCursor(null),da(Xt.isTouchEnabled,e=>{Br(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[n,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[n];this.children.slice().forEach(n=>n.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[hi]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new zs)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(n){if(typeof n=="string")return this.plugins[n];{const e=ba(n);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Dc(this.parent,Xt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(n){n?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Vs(this.getSize())),this.navbar.autoSize())}setPanorama(n,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=n,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=r=>{if(zc(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new Sh(n,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new xh(n));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),ua();const o=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!Dt(o.zoom)||!Dt(o.position))&&this.stopAll(),{textureData:r,cleanOptions:o}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new ls(r)),Dt(o.zoom)||this.zoom(o.zoom),Dt(o.position)||this.rotate(o.position)}).then(()=>i(),r=>i(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>(this.loader.hide(),this.dispatchEvent(new ls(r)),this.state.transitionAnimation=this.renderer.transition(r,o,t),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Mh(r)),!r)throw ua()}).then(()=>i(),r=>i(r)),this.state.loadingPromise}setOptions(n){const e={...this.config,...n};for(let[t,i]of Object.entries(n)){if(!(t in Yn)){Ut(`Unknown option ${t}`);continue}if(t in td){Ut(td[t]);continue}switch(t in Ta&&(i=Ta[t](i,{rawConfig:e,defValue:Yn[t]})),this.config[t]=i,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new qn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new jt(Object.keys(n)))}setOption(n,e){this.setOptions({[n]:e})}showError(n){this.overlay.show({id:Nt.ERROR,image:I0,title:n,dismissible:!1})}hideError(){this.overlay.hide(Nt.ERROR)}rotate(n){const e=new nh(this.dataHelper.cleanPosition(n));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(n){this.dynamics.zoom.setValue(n)}zoomIn(n=1){this.dynamics.zoom.step(n)}zoomOut(n=1){this.dynamics.zoom.step(-n)}animate(n){const e=fa(n),t=!Dt(n.zoom),i=new xa(e?this.dataHelper.cleanPosition(n):void 0,n.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(n.speed,i.position,i.zoomLevel);return s?(this.state.animation=new qr({properties:r,duration:s,easing:n.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),t&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),t&&this.zoom(i.zoomLevel),new qr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(n){this.__setSize(n),this.autoSize()}__setSize(n){["width","height"].forEach(e=>{n?.[e]&&(/^[0-9.]+$/.test(n[e])&&(n[e]+="px"),this.parent.style[e]=n[e])})}enterFullscreen(){this.isFullscreenEnabled()||Ic(this.parent,Xt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&Nc(Xt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(n){return new D0(this,n)}setCursor(n){this.state.cursorOverride=n,n?this.container.style.cursor=n:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(n){this.state.objectsObservers[n]||(this.state.objectsObservers[n]=null)}unobserveObjects(n){delete this.state.objectsObservers[n]}stopAll(){return this.dispatchEvent(new Gs),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Equirectangular Tiles Adapter 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var W0=class{constructor(n,e,t){this.id=n,this.priority=e,this.fn=t,this.status=1}start(){return this.status=2,this.fn(this).then(()=>{this.status=4},()=>{this.status=5})}cancel(){this.status=3}isCancelled(){return this.status===3}},X0=class{constructor(n=8){this.concurency=n,this.runningTasks={},this.tasks={}}enqueue(n){this.tasks[n.id]=n}clear(){Object.values(this.tasks).forEach(n=>n.cancel()),this.tasks={},this.runningTasks={}}setPriority(n,e){const t=this.tasks[n];t&&(t.priority=e,t.status===0&&(t.status=1))}disableAllTasks(){Object.values(this.tasks).forEach(n=>{n.status=0})}start(){if(Object.keys(this.runningTasks).length>=this.concurency)return;const n=Object.values(this.tasks).filter(e=>e.status===1).sort((e,t)=>t.priority-e.priority).pop();n&&(this.runningTasks[n.id]=!0,n.start().then(()=>{n.isCancelled()||(delete this.tasks[n.id],delete this.runningTasks[n.id],this.start())}),this.start())}};function $0(){const n=new OffscreenCanvas(512,512),e=n.getContext("2d");return e.fillStyle="#333",e.fillRect(0,0,n.width,n.height),e.font=`${n.width/5}px serif`,e.fillStyle="#a22",e.textAlign="center",e.textBaseline="middle",e.fillText("⚠",n.width/2,n.height/2),new Tn({map:pe.createTexture(n)})}function q0(n){const e=new Hp(n),t=new kp(e);return t.material.depthTest=!1,t.material.depthWrite=!1,t.material.opacity=.25,t.material.transparent=!0,t}var sd=["dodgerblue","limegreen","indianred"];function Y0(n,e,t){const i=document.createElement("canvas");i.width=n.width,i.height=n.height;const s=i.getContext("2d");s.fillStyle=sd[e%sd.length],s.fillRect(0,0,i.width,i.height),s.globalCompositeOperation="multiply",s.drawImage(n,0,0);const r=n.width/7;return s.globalCompositeOperation="source-over",s.fillStyle="white",s.font=`${r}px monospace`,s.textAlign="center",t.split(`
`).forEach((o,a)=>{s.fillText(o,n.width/2,n.height/2+r*(.3+a))}),i}function Pa(n){return!!n.levels}function rd(n,e,t){return{...n,level:e,colSize:n.width/n.cols,rowSize:n.width/2/n.rows,facesByCol:t.SPHERE_SEGMENTS/n.cols,facesByRow:t.SPHERE_HORIZONTAL_SEGMENTS/n.rows}}function od(n,e,t,i,s){let r,o;return Pa(n)?(i?(o=n.levels.findIndex(a=>{const c=a.width/360*e,l=a.width/2/180*t;return c>=i.width&&l>=i.height}),o===-1&&(o=n.levels.length-1)):o=0,r=n.levels[o]):(o=0,r={...n}),rd(r,o,s)}function j0(n,e,t){return!Pa(n)||!n.levels[e]?null:rd(n.levels[e],e,t)}function Z0(n,e){if(typeof n!="object"||!n.tileUrl)throw new ue("Invalid panorama configuration, are you using the right adapter?");Pa(n)?(n.levels.forEach(t=>{ad(t,e),"zoomRange"in t&&pe.logWarn('EquirectangularTilesAdapter: "zoomRange" property is deprecated and must be removed')}),n.levels.sort((t,i)=>t.width-i.width)):ad(n,e)}function ad(n,e){if(!n.width||!n.cols||!n.rows)throw new ue("Invalid panorama configuration, are you using the right adapter?");if(n.cols>e.SPHERE_SEGMENTS)throw new ue(`Panorama cols must not be greater than ${e.SPHERE_SEGMENTS}.`);if(n.rows>e.SPHERE_HORIZONTAL_SEGMENTS)throw new ue(`Panorama rows must not be greater than ${e.SPHERE_HORIZONTAL_SEGMENTS}.`);if(!Xe.isPowerOfTwo(n.cols)||!Xe.isPowerOfTwo(n.rows))throw new ue("Panorama cols and rows must be powers of 2.")}function K0(n,e){for(let t=0;t<e.cols;t++){const i=n.tileUrl(t,e.rows/2,e.level);if(i)return i}return n.tileUrl.toString()}var Ys=6,Zt=3,J0="uv",Q0="position",ld=-1;function La(n){return`${n.col}x${n.row}/${n.config.level}`}function io(n){return n.children}var ex=pe.getConfigParser({resolution:64,showErrorTile:!0,baseBlur:!0,antialias:!0,debug:!1,useXmpData:!1}),so=new I,ro=class Pf extends Zr{constructor(e,t){super(e),this.state={tileConfig:null,tiles:{},faces:{},geom:null,materials:[],errorMaterial:null,inTransition:!1},this.queue=new X0,this.config=ex(t),this.adapter=new Ea(this.viewer,{resolution:this.config.resolution,blur:this.config.baseBlur}),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2,this.NB_VERTICES=2*this.SPHERE_SEGMENTS*Zt+(this.SPHERE_HORIZONTAL_SEGMENTS-2)*this.SPHERE_SEGMENTS*Ys,this.NB_GROUPS=this.SPHERE_SEGMENTS*this.SPHERE_HORIZONTAL_SEGMENTS,this.viewer.config.requestHeaders&&pe.logWarn('EquirectangularTilesAdapter fallbacks to file loader because "requestHeaders" where provided. Consider removing "requestHeaders" if you experience performances issues.')}static withConfig(e){return[Pf,e]}init(){super.init(),this.viewer.addEventListener(ge.TransitionDoneEvent.type,this),this.viewer.addEventListener(ge.PositionUpdatedEvent.type,this),this.viewer.addEventListener(ge.ZoomUpdatedEvent.type,this)}destroy(){this.viewer.removeEventListener(ge.TransitionDoneEvent.type,this),this.viewer.removeEventListener(ge.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(ge.ZoomUpdatedEvent.type,this),this.__cleanup(),this.state.errorMaterial?.map?.dispose(),this.state.errorMaterial?.dispose(),this.adapter.destroy(),delete this.adapter,delete this.state.geom,delete this.state.errorMaterial,super.destroy()}handleEvent(e){switch(e.type){case ge.PositionUpdatedEvent.type:case ge.ZoomUpdatedEvent.type:this.__refresh();break;case ge.TransitionDoneEvent.type:this.state.inTransition=!1,e.completed&&this.__switchMesh(this.viewer.renderer.mesh);break}}supportsTransition(e){return!!e.baseUrl}supportsPreload(e){return!!e.baseUrl}textureCoordsToSphericalCoords(e,t){return this.adapter.textureCoordsToSphericalCoords(e,t)}sphericalCoordsToTextureCoords(e,t){return this.adapter.sphericalCoordsToTextureCoords(e,t)}async loadTexture(e,t=!0){Z0(e,this);const i=od(e,0,0,null,this),s={isEquirectangular:!0,fullWidth:i.width,fullHeight:i.width/2,croppedWidth:i.width,croppedHeight:i.width/2,croppedX:0,croppedY:0,poseHeading:0,posePitch:0,poseRoll:0};if(e.baseUrl){const r=await this.adapter.loadTexture(e.baseUrl,t,e.basePanoData,!0);return{panorama:e,panoData:{...s,baseData:r.panoData},cacheKey:r.cacheKey,texture:r.texture}}else return{panorama:e,panoData:{...s,baseData:null},cacheKey:K0(e,i),texture:null}}createMesh(e){const t=this.adapter.createMesh(e.baseData??e),i=new wi(as.SPHERE_RADIUS,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI/2).scale(-1,1,1).toNonIndexed();i.clearGroups();let s=0,r=0;for(;s<this.SPHERE_SEGMENTS*Zt;s+=Zt)i.addGroup(s,Zt,r++);for(;s<this.NB_VERTICES-this.SPHERE_SEGMENTS*Zt;s+=Ys)i.addGroup(s,Ys,r++);for(;s<this.NB_VERTICES;s+=Zt)i.addGroup(s,Zt,r++);const o=[],a=new Tn({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1});for(let u=0;u<this.NB_GROUPS;u++)o.push(a);const c=new Bt(i,o);c.renderOrder=1;const l=new Xn;return l.add(t),l.add(c),l}setTexture(e,t,i){const[s]=io(e);t.texture?this.adapter.setTexture(s,{panorama:t.panorama.baseUrl,texture:t.texture,panoData:t.panoData.baseData}):s.visible=!1,i?this.state.inTransition=!0:this.__switchMesh(e)}setTextureOpacity(e,t){const[i]=io(e);this.adapter.setTextureOpacity(i,t)}disposeTexture({texture:e}){e?.dispose()}disposeMesh(e){const[t,i]=io(e);t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.forEach(s=>{s.map?.dispose(),s.dispose()})}__refresh(){if(!this.state.geom||this.state.inTransition)return;const e=this.viewer.config.panorama,t=od(e,this.viewer.state.hFov,this.viewer.state.vFov,this.viewer.state.size,this),i=this.state.geom.getAttribute(Q0),s={};for(let r=0;r<this.NB_VERTICES;r+=1)if(so.fromBufferAttribute(i,r),so.applyEuler(this.viewer.renderer.sphereCorrection),this.viewer.renderer.isObjectVisible(so)){let o;r<this.SPHERE_SEGMENTS*Zt?o=Math.floor(r/3):r<this.NB_VERTICES-this.SPHERE_SEGMENTS*Zt?o=Math.floor((r/3-this.SPHERE_SEGMENTS)/2)+this.SPHERE_SEGMENTS:o=Math.floor((r-this.NB_VERTICES-this.SPHERE_SEGMENTS*Zt)/3)+this.SPHERE_HORIZONTAL_SEGMENTS*(this.SPHERE_SEGMENTS-1);const a=Math.floor(o/this.SPHERE_SEGMENTS),c=o-a*this.SPHERE_SEGMENTS;let l=t;for(;l;){const u=Math.floor(a/l.facesByRow),d=Math.floor(c/l.facesByCol);let m=so.angleTo(this.viewer.state.direction);(u===0||u===l.rows-1)&&(m*=2);const p={row:u,col:d,angle:m,config:l,url:null},g=La(p);if(s[g]){s[g].angle=Math.min(s[g].angle,m);break}else if(p.url=e.tileUrl(d,u,l.level),p.url){s[g]=p;break}else l=j0(e,l.level-1,this)}}this.state.tileConfig=t,this.__loadTiles(Object.values(s))}__loadTiles(e){this.queue.disableAllTasks(),e.forEach(t=>{const i=La(t);this.state.tiles[i]?this.queue.setPriority(i,t.angle):(this.state.tiles[i]=!0,this.queue.enqueue(new W0(i,t.angle,s=>this.__loadTile(t,s))))}),this.queue.start()}__loadTile(e,t){return this.viewer.textureLoader.loadImage(e.url,null,this.viewer.state.textureData.cacheKey).then(i=>{if(!t.isCancelled()){this.config.debug&&(i=Y0(i,e.config.level,La(e)));const s=this.config.antialias&&e.config.level>0,r=new Tn({map:pe.createTexture(i,s)});this.__swapMaterial(e,r,!1),this.viewer.needsUpdate()}}).catch(i=>{!pe.isAbortError(i)&&!t.isCancelled()&&this.config.showErrorTile&&(this.state.errorMaterial||(this.state.errorMaterial=$0()),this.__swapMaterial(e,this.state.errorMaterial,!0),this.viewer.needsUpdate())})}__swapMaterial(e,t,i){const s=this.state.geom.getAttribute(J0);for(let r=0;r<e.config.facesByCol;r++)for(let o=0;o<e.config.facesByRow;o++){const a=e.col*e.config.facesByCol+r,c=e.row*e.config.facesByRow+o,l=c===0,u=c===this.SPHERE_HORIZONTAL_SEGMENTS-1;let d;if(l?d=a*Zt:u?d=this.NB_VERTICES-this.SPHERE_SEGMENTS*Zt+a*Zt:d=this.SPHERE_SEGMENTS*Zt+(c-1)*this.SPHERE_SEGMENTS*Ys+a*Ys,i&&this.state.faces[d]>ld||this.state.faces[d]>e.config.level)continue;this.state.faces[d]=i?ld:e.config.level;const m=this.state.geom.groups.find(h=>h.start===d).materialIndex;this.state.materials[m]=t;const p=1-o/e.config.facesByRow,g=1-(o+1)/e.config.facesByRow,v=r/e.config.facesByCol,f=(r+1)/e.config.facesByCol;l?(s.setXY(d,(v+f)/2,p),s.setXY(d+1,v,g),s.setXY(d+2,f,g)):u?(s.setXY(d,f,p),s.setXY(d+1,v,p),s.setXY(d+2,(v+f)/2,g)):(s.setXY(d,f,p),s.setXY(d+1,v,p),s.setXY(d+2,f,g),s.setXY(d+3,v,p),s.setXY(d+4,v,g),s.setXY(d+5,f,g))}s.needsUpdate=!0}__switchMesh(e){const[,t]=io(e);if(this.__cleanup(),this.state.materials=t.material,this.state.geom=t.geometry,this.config.debug){const i=q0(this.state.geom);this.viewer.renderer.addObject(i),this.viewer.renderer.setSphereCorrection(this.viewer.config.sphereCorrection,i)}setTimeout(()=>this.__refresh())}__cleanup(){this.queue.clear(),this.state.tiles={},this.state.faces={},this.state.materials=[],this.state.inTransition=!1}};ro.id="equirectangular-tiles",ro.VERSION="5.14.1",ro.supportsDownload=!1;var tx=ro;const nx=3,cd={accent:"#3b82f6",panelBg:"#111111",radius:"12px"},ix={background:"#1a1d24",backgroundOpacity:.96,textColor:"#ffffff",fontSize:13,padding:8,radius:6},sx={autoRotate:{enabled:!1,speed:.5,idleDelayMs:4e3},gyroscope:!0,fullscreenButton:!0,audio:{muted:!1}},rx={goto:"arrow",info:"info",video:"play",url:"plus",audio:"circle",look:"eye",toggle:"dot",image:"circle",panel:"info",narrate:"play",model3d:"circle"};function hd(n,e=cd.accent){return{builtinIcon:rx[n]??"circle",iconColor:"#ffffff",background:e,radius:999,text:"",textColor:"#ffffff",fontSize:13,size:22,padding:9,effect:"none",effectColor:e,effectOpacity:.7,effectSpeed:1.6,effectSize:44,effectStroke:2,fill:e,fillOpacity:.28,stroke:e,strokeWidth:2}}function js(n){const e=globalThis.crypto,t=e?.randomUUID?e.randomUUID().replace(/-/g,""):Math.random().toString(16).slice(2).padEnd(12,"0");return`${n}-${t.slice(0,8)}`}function ox(n,e){if(!n.componentId)return n.style;const t=e?.find(s=>s.id===n.componentId);return t?.variants.length?(n.variantId&&t.variants.find(s=>s.id===n.variantId)||t.variants[0])?.style??n.style:n.style}const ht=n=>typeof n=="object"&&n!==null,jn=n=>Array.isArray(n)?n:[],Ge=(n,e="")=>typeof n=="string"?n:e,ut=(n,e=0)=>typeof n=="number"&&!Number.isNaN(n)?n:e;function oo(n,e){return n.length?[{event:e==="hover"?"hover":"click",actions:n}]:[]}function ax(n,e){if(!ht(n))return{action:{type:"none"},trigger:"click"};const t=Ge(n.type,"none"),i=n.trigger==="hover"?"hover":"click";switch(t){case"goto":return{action:{type:"goto",targetSceneId:Ge(n.targetSceneId),...ht(n.landing)?{landing:n.landing}:{}},trigger:i};case"info":return{action:{type:"info",title:Ge(n.title),text:Ge(n.text),...n.imageAssetId?{imageAssetId:Ge(n.imageAssetId)}:{},...n.imageSrc?{imageSrc:Ge(n.imageSrc)}:{},...n.videoUrl?{videoUrl:Ge(n.videoUrl)}:{}},trigger:i};case"video":return{action:{type:"video",url:Ge(n.url)},trigger:i};case"url":return{action:{type:"url",url:Ge(n.url),target:n.target==="lightbox"?"lightbox":"blank"},trigger:i};case"audio":return{action:{type:"audio",url:Ge(n.url),...n.loop?{loop:!0}:{}},trigger:i};case"look":return{action:{type:"look",yaw:ut(n.yaw),pitch:ut(n.pitch),...n.zoom!=null?{zoom:ut(n.zoom)}:{}},trigger:i};case"toggle":return{action:{type:"toggle",targetIds:jn(n.targetIds),mode:n.mode==="show"||n.mode==="hide"?n.mode:"toggle"},trigger:i};case"image":return{action:{type:"image",...n.imageAssetId?{imageAssetId:Ge(n.imageAssetId)}:{},...n.imageSrc?{imageSrc:Ge(n.imageSrc)}:{}},trigger:i};case"none":return{action:{type:"none"},trigger:i};default:return t==="panel"||t==="setVar"||t==="animate"||t==="narrate"||t==="model3d"?{action:n,trigger:i}:(e.push({code:"unknown-action",message:`Unknown action type "${t}" replaced with none`,data:n}),{action:{type:"none"},trigger:i})}}function lx(n,e){const t=n.geometry;if(ht(t)){if(t.kind==="polygon"&&Array.isArray(t.points)&&t.points.length>=3)return{kind:"polygon",points:t.points.map(i=>({yaw:ut(i.yaw),pitch:ut(i.pitch)}))};if(t.kind==="point")return{kind:"point",yaw:ut(t.yaw),pitch:ut(t.pitch)}}return e==="polygon"&&Array.isArray(n.points)&&n.points.length>=3?{kind:"polygon",points:n.points.map(i=>({yaw:ut(i.yaw),pitch:ut(i.pitch)}))}:{kind:"point",yaw:ut(n.yaw),pitch:ut(n.pitch)}}function dd(n,e,t){const i=ht(n)?n:{},s=Ge(i.id)||js("h");let r;if(Array.isArray(i.on))r=i.on;else{const u=Array.isArray(i.actions)?i.actions:i.action!=null?[i.action]:[];if(u.length){const d=u.map(g=>ax(g,t)),m=d.filter(g=>g.trigger==="hover").map(g=>g.action),p=d.filter(g=>g.trigger==="click").map(g=>g.action);r=[...oo(p,"click"),...oo(m,"hover")]}else i.type==="info"?r=oo([{type:"info",title:Ge(i.label,"Info"),text:Ge(i.content)}],"hover"):i.type!=null||i.targetSceneId!=null?r=oo([{type:"goto",targetSceneId:Ge(i.targetSceneId)}],"click"):r=[]}const o=i.form==="text"||i.form==="image"||i.form==="html"||i.form==="polygon"?i.form:"icon",a=r[0]?.actions[0]?.type??"none",c=ht(i.style)?{...hd(a,e),...i.style}:{...hd(a,e),...i.label?{text:Ge(i.label)}:{}},l=lx(i,o);return o==="polygon"&&l.kind==="point"&&t.push({code:"hotspot-repaired",message:`Hotspot ${s} was marked polygon but had fewer than 3 points; treated as a point`,data:i.points}),{id:s,name:Ge(i.name)||c.text||Ge(i.tooltip)||s,geometry:l,form:l.kind==="polygon"?"polygon":o==="polygon"?"icon":o,style:c,...i.componentId?{componentId:Ge(i.componentId)}:{},...i.variantId?{variantId:Ge(i.variantId)}:{},...i.tooltip?{tooltip:Ge(i.tooltip)}:{},on:r,...i.perspective?{perspective:!0}:{},...i.html?{html:Ge(i.html)}:{},...i.imageAssetId?{imageAssetId:Ge(i.imageAssetId)}:{},...i.imageSrc?{imageSrc:Ge(i.imageSrc)}:{},...i.width!=null?{width:ut(i.width)}:{},...i.height!=null?{height:ut(i.height)}:{},...i.visible===!1?{visible:!1}:{},...ht(i.provenance)?{provenance:i.provenance}:{}}}function cx(n,e,t){if(ht(n.source))return n.source;if(ht(n.tiles)){const s=n.tiles;return{kind:"tiled",dir:Ge(s.dir),width:ut(s.width),cols:ut(s.cols),rows:ut(s.rows)}}const i=Ge(n.panorama);return i||e.push({code:"scene-missing-source",message:`Scene ${t} has no panorama; it will not render until one is set`,data:n}),{kind:"single",src:i}}function hx(n,e,t){const i=ht(n)?n:{},s=Ge(i.id)||js("scene"),r=Array.isArray(i.layers)?i.layers.map(a=>({id:Ge(a.id)||js("layer"),name:Ge(a.name,"Hotspots"),visible:a.visible!==!1,locked:a.locked===!0,hotspots:jn(a.hotspots).map(c=>dd(c,e,t))})):[{id:js("layer"),name:"Hotspots",visible:!0,locked:!1,hotspots:jn(i.hotspots).map(a=>dd(a,e,t))}],o=ht(i.initialView)?i.initialView:{};return{id:s,name:Ge(i.name,"Scene"),projection:i.projection==="cubemap"?"cubemap":"equirect",source:cx(i,t,s),...i.proxy?{proxy:Ge(i.proxy)}:{},...i.thumbnail?{thumbnail:Ge(i.thumbnail)}:{},...i.subtitle?{subtitle:Ge(i.subtitle)}:{},initialView:{yaw:ut(o.yaw),pitch:ut(o.pitch),...o.fov!=null?{fov:ut(o.fov)}:{}},...i.north!=null?{north:ut(i.north)}:{},...i.tilt!=null?{tilt:ut(i.tilt)}:{},...i.roll!=null?{roll:ut(i.roll)}:{},...ht(i.audio)?{audio:i.audio}:{},...ht(i.guide)?{guide:i.guide}:{},layers:r,...Array.isArray(i.on)?{on:i.on}:{},...ht(i.analysis)?{analysis:i.analysis}:{}}}function dx(n){const e=ht(n)?n:{},t=[],i=ut(e.schema,(ht(e.skin)&&"elements"in e.skin,2)),s={...cd,...ht(e.theme)?e.theme:{}},r=jn(e.scenes).map(g=>hx(g,s.accent,t));let o={};if(ht(e.skin)){const g=e.skin;o={...typeof g.html=="string"?{html:g.html}:{},...typeof g.css=="string"?{css:g.css}:{},...typeof g.dir=="string"?{dir:g.dir}:{},...typeof g.entry=="string"?{entry:g.entry}:{},...typeof g.template=="string"?{template:g.template}:{}};const v=Array.isArray(g.elements)?g.elements:[];v.length&&t.push({code:"skin-dropped",message:`The old skin had ${v.length} element(s) on a fixed stage. Skins are now markup over the panorama — these were not converted.`,data:e.skin})}const a={schema:nx,id:Ge(e.id)||js("tour"),title:Ge(e.title,"Untitled tour"),locales:ht(e.locales)?{default:Ge(e.locales.default,"en"),available:jn(e.locales.available).length?jn(e.locales.available):["en"]}:{default:"en",available:["en"]},theme:s,tooltipStyle:{...ix,...ht(e.tooltipStyle)?e.tooltipStyle:{}},...ht(e.defaultStyle)?{defaultStyle:e.defaultStyle}:{},...Array.isArray(e.stylePresets)?{stylePresets:e.stylePresets}:{},...Array.isArray(e.components)?{components:e.components}:{},assets:jn(e.assets),variables:jn(e.variables),scenes:r,...ht(e.graph)?{graph:e.graph}:{},skin:o,runtime:{...sx,...ht(e.runtime)?e.runtime:{}},...ht(e.i18n)?{i18n:e.i18n}:{},...ht(e.quiz)?{quiz:e.quiz}:{},...Ge(e.logo)?{logo:Ge(e.logo)}:{}},c=new Set(["schema","version","pages","skinDir"]),l=new Set(["panorama","hotspots","yaw","pitch","fov","cube","faces"]),u=new Set(Object.keys(a)),d=Object.keys(e).filter(g=>!u.has(g)&&!c.has(g)),m=new Set;for(const[g,v]of jn(e.scenes).entries()){if(!ht(v)||!r[g])continue;const f=new Set(Object.keys(r[g]));for(const h of Object.keys(v))!f.has(h)&&!l.has(h)&&m.add(h)}const p=[...d,...[...m].map(g=>`scenes[].${g}`)];return p.length&&t.push({code:"unknown-fields",message:`This tour has ${p.length} field(s) this version does not understand — ${p.join(", ")}. It was probably written by a newer build. Saving from here would delete them.`,data:p}),!a.runtime.startSceneId&&r.length&&(a.runtime.startSceneId=r[0].id),{doc:a,warnings:t,from:ut(e.schema,i)}}const ux={enabled:!0,radius:.14,angle:Math.PI/3,fill:"#3b82f6",fillOpacity:.35,stroke:"#3b82f6"};function fx(n,e=.5){const t=n/2,i=r=>.5+Math.sin(r)*e,s=r=>.5-Math.cos(r)*e;return["M 0.5 0.5",`L ${i(-t)} ${s(-t)}`,`A ${e} ${e} 0 ${n>Math.PI?1:0} 1 ${i(t)} ${s(t)}`,"Z"].join(" ")}function px(n){return{...ux,...n?.radar??{}}}const mx={visible:!0,movement:"draggable",scaleMode:"fit"};function Ri(n){return{...mx,...n?.view??{}}}function gx(n,e,t){return!n||n.heading==null?null:vx(n.heading+(t-(e?.north??0)))}function vx(n){const e=Math.PI*2,t=(n%e+e)%e;return t>Math.PI?t-e:t}const _x=n=>typeof n=="string"&&n.trim()!=="";function xx(n,e){if(e===n.locales.default)return(i,s)=>s;const t=n.i18n?.[e]??{};return(i,s)=>_x(t[i])?t[i]:s}function ud(n,e){if(e===n.locales.default||!n.i18n?.[e])return n;const t=xx(n,e);return{...n,title:t("tour.title",n.title),...n.description?{description:t("tour.description",n.description)}:{},scenes:n.scenes.map(i=>({...i,name:t(`${i.id}.name`,i.name),...i.guide?.text?{guide:{...i.guide,text:t(`${i.id}.guide.text`,i.guide.text)}}:{},...i.subtitle?{subtitle:t(`${i.id}.subtitle`,i.subtitle)}:{},layers:i.layers.map(s=>({...s,hotspots:s.hotspots.map(r=>({...r,...r.tooltip?{tooltip:t(`${r.id}.tooltip`,r.tooltip)}:{},...r.style?.text?{style:{...r.style,text:t(`${r.id}.style.text`,r.style.text)}}:{},...r.on?{on:r.on.map(o=>({...o,actions:o.actions.map((a,c)=>{const l=`${r.id}.${o.event}.${c}`;return a.type==="info"?{...a,title:t(`${l}.title`,a.title),text:t(`${l}.text`,a.text)}:a.type==="panel"&&a.content?{...a,content:Object.fromEntries(Object.entries(a.content).map(([u,d])=>typeof d=="string"?[u,t(`${l}.content.${u}`,d)]:[u,d]))}:a.type==="narrate"&&a.text?{...a,text:t(`${l}.narrate`,a.text)}:a})}))}:{}}))}))})),...n.quiz?{quiz:{...n.quiz,...n.quiz.title?{title:t("quiz.title",n.quiz.title)}:{},...n.quiz.intro?{intro:t("quiz.intro",n.quiz.intro)}:{},...n.quiz.passMessage?{passMessage:t("quiz.passMessage",n.quiz.passMessage)}:{},...n.quiz.failMessage?{failMessage:t("quiz.failMessage",n.quiz.failMessage)}:{},questions:n.quiz.questions.map(i=>({...i,prompt:t(`${i.id}.prompt`,i.prompt),...i.explanation?{explanation:t(`${i.id}.explanation`,i.explanation)}:{},answers:i.answers.map(s=>({...s,text:t(`${s.id}.text`,s.text)}))}))}}:{},...n.graph?{graph:{...n.graph,floors:n.graph.floors.map(i=>({...i,name:t(`floor:${i.id}.name`,i.name)}))}}:{},variables:n.variables.map(i=>typeof i.initial=="string"?{...i,initial:t(`var:${i.name}.initial`,i.initial)}:i)}}const yx=[{code:"en",label:"English"},{code:"pt",label:"Português"},{code:"pt-BR",label:"Português (Brasil)"},{code:"es",label:"Español"},{code:"fr",label:"Français"},{code:"de",label:"Deutsch"},{code:"it",label:"Italiano"},{code:"nl",label:"Nederlands"},{code:"pl",label:"Polski"},{code:"ru",label:"Русский"},{code:"tr",label:"Türkçe"},{code:"ar",label:"العربية"},{code:"zh",label:"中文"},{code:"ja",label:"日本語"},{code:"ko",label:"한국어"}],Ex=n=>yx.find(e=>e.code===n)?.label??n;function Sx(n){return n.scenes.some(e=>e.guide?.text||e.guide?.audio)?!0:!!n.quiz&&n.quiz.enabled!==!1&&n.quiz.questions.length>0}const fd=n=>n.points??1,pd=n=>n.trim().toLowerCase().replace(/\s+/g," ");function md(n,e){if(n.kind==="text"){const s=(n.accept??[]).map(pd).filter(Boolean);return s.length?s.includes(pd(e[0]??"")):!1}const t=n.answers.filter(s=>s.correct).map(s=>s.id);if(!t.length)return!1;if(n.kind==="single")return e.length===1&&t.includes(e[0]);const i=new Set(e);return t.length===i.size&&t.every(s=>i.has(s))}function gd(n){return n.kind==="text"?!(n.accept??[]).some(e=>e.trim()):!n.answers.some(e=>e.correct)}function wx(n,e){const t=n.questions.filter(c=>!gd(c)),i=new Map(e.map(c=>[c.questionId,c.given]));let s=0,r=0;for(const c of t){const l=i.get(c.id);l&&md(c,l)&&(s+=fd(c),r+=1)}const o=t.reduce((c,l)=>c+fd(l),0),a=o===0?100:Math.round(s/o*100);return{points:s,total:o,percent:a,correct:r,answered:n.questions.filter(c=>i.has(c.id)).length,questions:t.length,passed:n.passScore==null?null:a>=n.passScore}}function Mx(n,e){const t=[...n];let i=e||1;for(let s=t.length-1;s>0;s-=1){i^=i<<13,i^=i>>>17,i^=i<<5;const r=Math.abs(i)%(s+1);[t[s],t[r]]=[t[r],t[s]]}return t}const bx=[{n:1,color:"#E5243B",title:"No Poverty",zh:"消除貧窮"},{n:2,color:"#DDA63A",title:"Zero Hunger",zh:"消除飢餓"},{n:3,color:"#4C9F38",title:"Good Health and Well-Being",zh:"健康與福祉"},{n:4,color:"#C5192D",title:"Quality Education",zh:"優質教育"},{n:5,color:"#FF3A21",title:"Gender Equality",zh:"性別平等"},{n:6,color:"#26BDE2",title:"Clean Water and Sanitation",zh:"淨水與衛生"},{n:7,color:"#FCC30B",title:"Affordable and Clean Energy",zh:"可負擔的潔淨能源"},{n:8,color:"#A21942",title:"Decent Work and Economic Growth",zh:"合適的工作及經濟成長"},{n:9,color:"#FD6925",title:"Industry, Innovation and Infrastructure",zh:"工業化、創新及基礎建設"},{n:10,color:"#DD1367",title:"Reduced Inequalities",zh:"減少不平等"},{n:11,color:"#FD9D24",title:"Sustainable Cities and Communities",zh:"永續城市與社區"},{n:12,color:"#BF8B2E",title:"Responsible Consumption and Production",zh:"負責任的消費與生產"},{n:13,color:"#3F7E44",title:"Climate Action",zh:"氣候行動"},{n:14,color:"#0A97D9",title:"Life Below Water",zh:"水下生命"},{n:15,color:"#56C02B",title:"Life on Land",zh:"陸域生命"},{n:16,color:"#00689D",title:"Peace, Justice and Strong Institutions",zh:"和平、正義及健全制度"},{n:17,color:"#19486A",title:"Partnerships for the Goals",zh:"多元夥伴關係"}],Da=n=>bx.find(e=>e.n===n),Tx="#64748b";function Ax(n){const e=n?.[0];return e!=null&&Da(e)?.color||Tx}function vd(n){const e=n.replace("#",""),t=r=>parseInt(e.slice(r,r+2),16)/255,i=r=>r<=.03928?r/12.92:((r+.055)/1.055)**2.4;return .2126*i(t(0))+.7152*i(t(2))+.0722*i(t(4))>.45?"#10131a":"#ffffff"}function _d(n,e){return e.toLowerCase().startsWith("zh")?n.zh:n.title}const Cx=new Map;let Ia="";function Rx(n){Ia=n.replace(/\/+$/,"")}const Px=/^(?:[a-z]+:|\/\/)/i,Lx=n=>n.split("/").map(encodeURIComponent).join("/");function nt(n){if(!n)return n;const e=Cx.get(n);return e||(!Ia||Px.test(n)?n:`${Ia}/${Lx(n.replace(/^\/+/,""))}`)}const Na=new Set,zt=new WeakMap,Pi=new WeakMap,ln=new WeakMap,Zs=new WeakMap,Ua=new WeakMap,Ks=new WeakMap,Li=new WeakMap,mi=new WeakMap,ds=new WeakSet;let Kt,Fa=0,Oa=0;const Zn="__aa_tgt",Js="__aa_del",ao="__aa_new",xd=n=>{const e=Ux(n);e&&e.forEach(t=>Fx(t))},Dx=n=>{n.forEach(e=>{e.target===Kt&&Ix(),zt.has(e.target)&&Di(e.target)})};function yd(n){const e=n.getBoundingClientRect(),t=Kt?.clientWidth||0,i=Kt?.clientHeight||0;return e.bottom<0||e.top>i||e.right<0||e.left>t}function ka(n){const e=Zs.get(n);e?.disconnect();let t=zt.get(n),i=0;const s=5;t||(t=us(n),zt.set(n,t));const{offsetWidth:r,offsetHeight:o}=Kt,c=[t.top-s,r-(t.left+s+t.width),o-(t.top+s+t.height),t.left-s].map(u=>`${-1*Math.floor(u)}px`).join(" "),l=new IntersectionObserver(()=>{++i>1&&Di(n)},{root:Kt,threshold:1,rootMargin:c});l.observe(n),Zs.set(n,l)}function Di(n,e=!0){clearTimeout(mi.get(n));const t=lo(n),i=e?Qs(t)?500:t.duration:0;mi.set(n,setTimeout(async()=>{const s=ln.get(n);try{await s?.finished,zt.set(n,us(n)),ka(n)}catch{}},i))}function Ix(){clearTimeout(mi.get(Kt)),mi.set(Kt,setTimeout(()=>{Na.forEach(n=>co(n,e=>Ed(()=>Di(e))))},100))}function Nx(n){setTimeout(()=>{Ks.set(n,setInterval(()=>Ed(Di.bind(null,n)),2e3))},Math.round(2e3*Math.random()))}function Ed(n){typeof requestIdleCallback=="function"?requestIdleCallback(()=>n()):requestAnimationFrame(()=>n())}let Kn;const Sd=typeof window<"u"&&"ResizeObserver"in window;Sd&&(Kt=document.documentElement,new MutationObserver(xd),Kn=new ResizeObserver(Dx),window.addEventListener("scroll",()=>{Oa=window.scrollY,Fa=window.scrollX}),Kn.observe(Kt));function Ux(n){return n.reduce((i,s)=>[...i,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(i=>i.nodeName==="#comment")?!1:n.reduce((i,s)=>{if(i===!1)return!1;if(s.target instanceof Element){if(Ba(s.target),!i.has(s.target)){i.add(s.target);for(let r=0;r<s.target.children.length;r++){const o=s.target.children.item(r);if(o){if(Js in o)return!1;Ba(s.target,o),i.add(o)}}}if(s.removedNodes.length)for(let r=0;r<s.removedNodes.length;r++){const o=s.removedNodes[r];if(Js in o)return!1;o instanceof Element&&(i.add(o),Ba(s.target,o),Pi.set(o,[s.previousSibling,s.nextSibling]))}}return i},new Set)}function Ba(n,e){!e&&!(Zn in n)?Object.defineProperty(n,Zn,{value:n}):e&&!(Zn in e)&&Object.defineProperty(e,Zn,{value:n})}function Fx(n){var e,t;const i=n.isConnected,s=zt.has(n);i&&Pi.has(n)&&Pi.delete(n),((e=ln.get(n))===null||e===void 0?void 0:e.playState)!=="finished"&&((t=ln.get(n))===null||t===void 0||t.cancel()),ao in n?bd(n):s&&i?kx(n):s&&!i?Bx(n):bd(n)}function Dn(n){return Number(n.replace(/[^0-9.\-]/g,""))}function Ox(n){let e=n.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function us(n){const e=n.getBoundingClientRect(),{x:t,y:i}=Ox(n);return{top:e.top+i,left:e.left+t,width:e.width,height:e.height}}function wd(n,e,t){let i=e.width,s=e.height,r=t.width,o=t.height;const a=getComputedStyle(n);if(a.getPropertyValue("box-sizing")==="content-box"){const l=Dn(a.paddingTop)+Dn(a.paddingBottom)+Dn(a.borderTopWidth)+Dn(a.borderBottomWidth),u=Dn(a.paddingLeft)+Dn(a.paddingRight)+Dn(a.borderRightWidth)+Dn(a.borderLeftWidth);i-=u,r-=u,s-=l,o-=l}return[i,r,s,o].map(Math.round)}function lo(n){return Zn in n&&Li.has(n[Zn])?Li.get(n[Zn]):{duration:250,easing:"ease-in-out"}}function Md(n){if(Zn in n)return n[Zn]}function za(n){const e=Md(n);return e?ds.has(e):!1}function co(n,...e){e.forEach(t=>t(n,Li.has(n)));for(let t=0;t<n.children.length;t++){const i=n.children.item(t);i&&e.forEach(s=>s(i,Li.has(i)))}}function Ha(n){return Array.isArray(n)?n:[n]}function Qs(n){return typeof n=="function"}function kx(n){const e=zt.get(n),t=us(n);if(!za(n))return zt.set(n,t);if(yd(n)){zt.set(n,t),ka(n);return}let i;if(!e)return;const s=lo(n);if(typeof s!="function"){let r=e.left-t.left,o=e.top-t.top;const a=e.left+e.width-(t.left+t.width);e.top+e.height-(t.top+t.height)==0&&(o=0),a==0&&(r=0);const[l,u,d,m]=wd(n,e,t),p={transform:`translate(${r}px, ${o}px)`},g={transform:"translate(0, 0)"};l!==u&&(p.width=`${l}px`,g.width=`${u}px`),d!==m&&(p.height=`${d}px`,g.height=`${m}px`),i=n.animate([p,g],{duration:s.duration,easing:s.easing})}else{const[r]=Ha(s(n,"remain",e,t));i=new Animation(r),i.play()}ln.set(n,i),zt.set(n,t),i.addEventListener("finish",Di.bind(null,n,!1),{once:!0})}function bd(n){ao in n&&delete n[ao];const e=us(n);zt.set(n,e);const t=lo(n);if(!za(n))return;if(yd(n)){ka(n);return}let i;if(typeof t!="function")i=n.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:t.duration*1.5,easing:"ease-in"});else{const[s]=Ha(t(n,"add",e));i=new Animation(s),i.play()}ln.set(n,i),i.addEventListener("finish",Di.bind(null,n,!1),{once:!0})}function Td(n,e){var t;n.remove(),zt.delete(n),Pi.delete(n),ln.delete(n),(t=Zs.get(n))===null||t===void 0||t.disconnect(),setTimeout(()=>{if(Js in n&&delete n[Js],Object.defineProperty(n,ao,{value:!0,configurable:!0}),e&&n instanceof HTMLElement)for(const i in e)n.style[i]=""},0)}function Bx(n){var e;if(!Pi.has(n)||!zt.has(n))return;const[t,i]=Pi.get(n);Object.defineProperty(n,Js,{value:!0,configurable:!0});const s=window.scrollX,r=window.scrollY;if(i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(n,i):t&&t.parentNode?t.parentNode.appendChild(n):(e=Md(n))===null||e===void 0||e.appendChild(n),!za(n))return Td(n);const[o,a,c,l]=Hx(n),u=lo(n),d=zt.get(n);(s!==Fa||r!==Oa)&&zx(n,s,r,u);let m,p={position:"absolute",top:`${o}px`,left:`${a}px`,width:`${c}px`,height:`${l}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!Qs(u))Object.assign(n.style,p),m=n.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"});else{const[g,v]=Ha(u(n,"remove",d));v?.styleReset!==!1&&(p=v?.styleReset||p,Object.assign(n.style,p)),m=new Animation(g),m.play()}ln.set(n,m),m.addEventListener("finish",()=>Td(n,p),{once:!0})}function zx(n,e,t,i){const s=Fa-e,r=Oa-t,o=document.documentElement.style.scrollBehavior;if(getComputedStyle(Kt).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+s,window.scrollY+r),!n.parentElement)return;const c=n.parentElement;let l=c.clientHeight,u=c.clientWidth;const d=performance.now();function m(){requestAnimationFrame(()=>{if(!Qs(i)){const p=l-c.clientHeight,g=u-c.clientWidth;d+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-g,top:window.scrollY-p}),l=c.clientHeight,u=c.clientWidth,m()):document.documentElement.style.scrollBehavior=o}})}m()}function Hx(n){var e;const t=zt.get(n),[i,,s]=wd(n,t,us(n));let r=n.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const o=getComputedStyle(r),a=!ln.has(n)||((e=ln.get(n))===null||e===void 0?void 0:e.playState)==="finished"?us(r):zt.get(r),c=Math.round(t.top-a.top)-Dn(o.borderTopWidth),l=Math.round(t.left-a.left)-Dn(o.borderLeftWidth);return[c,l,i,s]}function Vx(n,e={}){if(Sd&&Kn&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!Qs(e)&&!e.disrespectUserMotionPreference)){ds.add(n),getComputedStyle(n).position==="static"&&Object.assign(n.style,{position:"relative"}),co(n,Di,Nx,o=>Kn?.observe(o)),Qs(e)?Li.set(n,e):Li.set(n,{duration:250,easing:"ease-in-out",...e});const r=new MutationObserver(xd);r.observe(n,{childList:!0}),Ua.set(n,r),Na.add(n)}return Object.freeze({parent:n,enable:()=>{ds.add(n)},disable:()=>{ds.delete(n),co(n,i=>{const s=ln.get(i);try{s?.cancel()}catch{}ln.delete(i);const r=mi.get(i);r&&clearTimeout(r),mi.delete(i);const o=Ks.get(i);o&&clearInterval(o),Ks.delete(i)})},isEnabled:()=>ds.has(n),destroy:()=>{ds.delete(n),Na.delete(n),Li.delete(n);const i=Ua.get(n);i?.disconnect(),Ua.delete(n),co(n,s=>{Kn?.unobserve(s);const r=ln.get(s);try{r?.cancel()}catch{}ln.delete(s);const o=Zs.get(s);o?.disconnect(),Zs.delete(s);const a=Ks.get(s);a&&clearInterval(a),Ks.delete(s);const c=mi.get(s);c&&clearTimeout(c),mi.delete(s),zt.delete(s),Pi.delete(s)})}})}const Gx=180;function Wx(n,e=Gx){if(!n||!(n instanceof HTMLElement))return null;try{return Vx(n,{duration:e,easing:"cubic-bezier(0.22, 1, 0.36, 1)"})}catch{return null}}const er="data-tour-scene",Xx="data-tour-current",Ad="data-tour-scenes",Ii="data-tour-field",Cd=new WeakMap;function $x(n){const e=Cd.get(n);if(e)return e;const t=n.firstElementChild;if(!t)return null;const i=t.cloneNode(!0);return Cd.set(n,i),i}function qx(n,e){const t=n.matches(`[${Ii}]`)?[n,...n.querySelectorAll(`[${Ii}]`)]:[...n.querySelectorAll(`[${Ii}]`)];for(const i of t)switch(i.getAttribute(Ii)){case"name":i.textContent=e.name??"";break;case"subtitle":i.textContent=e.subtitle??"",e.subtitle?i.removeAttribute("hidden"):i.setAttribute("hidden","");break;case"thumb":e.thumbnail?(i.setAttribute("src",nt(e.thumbnail)??e.thumbnail),i.removeAttribute("hidden")):(i.removeAttribute("src"),i.setAttribute("hidden",""));break}}function ho(n,e){for(const t of n.querySelectorAll(`[${Ad}]`)){const i=$x(t);i&&t.replaceChildren(...e.map(s=>{const r=i.cloneNode(!0);return r.setAttribute(er,s.id),qx(r,s),r}))}}function Rd(n,e,t={}){const i=o=>!t.skip||!t.skip.contains(o),s=o=>{const c=o.target?.closest?.(`[${er}]`),l=c?.getAttribute(er);!l||!i(c)||(o.preventDefault(),e.goToScene(l))},r=o=>{const a=o===void 0?e.sceneId:o;for(const c of n.querySelectorAll(`[${er}]`)){if(!i(c))continue;const l=c.getAttribute(er)===a;c.toggleAttribute(Xx,l),l?c.setAttribute("aria-current","location"):c.removeAttribute("aria-current")}};return n.addEventListener("click",s),r(),{update:r,destroy(){n.removeEventListener("click",s)}}}const Pd="tour-skin",Yx="tour-skin-style";function jx(n,e,t){const i=n.querySelector(`:scope > .${Pd}`),s=i??document.createElement("div");i||(s.className=Pd,n.appendChild(s)),Wx(s);let r=null;const o=u=>{if(!i){if(!u){r?.remove(),r=null;return}r||(r=document.createElement("style"),r.className=Yx,n.appendChild(r)),r.textContent=u}};let a=t.scenes;const c=u=>{s.innerHTML=u,ho(s,a)};i?ho(s,a):(c(t.html??""),o(t.css??""));const l=Rd(s,e);return{layer:s,update:l.update,setHtml(u){c(u),l.update()},setCss:o,setScenes(u){a=u,ho(s,a),l.update()},destroy(){l.destroy(),i||(s.remove(),r?.remove())}}}function Zx(n){return n.length<2?"":`<nav class="ts-rail" ${Ad} aria-label="Scenes"><button class="ts-rail-item" type="button"><img class="ts-rail-thumb" ${Ii}="thumb" alt="" hidden><span class="ts-rail-name" ${Ii}="name"></span><span class="ts-rail-sub" ${Ii}="subtitle" hidden></span></button></nav>`}function Kx(){return`.ts-rail {
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
`}function Jx(n){const e=n.skin?.html?.trim();return e?{html:e,css:n.skin?.css??""}:{html:Zx(n.scenes),css:Kx()}}/*!
 * Photo Sphere Viewer / Markers Plugin 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Qx=Object.defineProperty,ey=(n,e)=>{for(var t in e)Qx(n,t,{get:e[t],enumerable:!0})},ty={};ey(ty,{EnterMarkerEvent:()=>Od,GotoMarkerDoneEvent:()=>Va,HideMarkersEvent:()=>tr,LeaveMarkerEvent:()=>Ud,MarkerVisibilityEvent:()=>Dd,MarkersPluginEvent:()=>fn,RenderMarkersListEvent:()=>jd,SelectMarkerEvent:()=>Bd,SelectMarkerListEvent:()=>Hd,SetMarkersEvent:()=>$d,ShowMarkersEvent:()=>nr,UnselectMarkerEvent:()=>Gd});var fn=class extends Ns{},Ld=class Lf extends fn{constructor(e,t){super(Lf.type),this.marker=e,this.visible=t}};Ld.type="marker-visibility";var Dd=Ld,Id=class Df extends fn{constructor(e){super(Df.type),this.marker=e}};Id.type="goto-marker-done";var Va=Id,Nd=class If extends fn{constructor(e){super(If.type),this.marker=e}};Nd.type="leave-marker";var Ud=Nd,Fd=class Nf extends fn{constructor(e){super(Nf.type),this.marker=e}};Fd.type="enter-marker";var Od=Fd,kd=class Uf extends fn{constructor(e,t,i){super(Uf.type),this.marker=e,this.doubleClick=t,this.rightClick=i}};kd.type="select-marker";var Bd=kd,zd=class Ff extends fn{constructor(e){super(Ff.type),this.marker=e}};zd.type="select-marker-list";var Hd=zd,Vd=class Of extends fn{constructor(e){super(Of.type),this.marker=e}};Vd.type="unselect-marker";var Gd=Vd,Wd=class kf extends fn{constructor(){super(kf.type)}};Wd.type="hide-markers";var tr=Wd,Xd=class Bf extends fn{constructor(e){super(Bf.type),this.markers=e}};Xd.type="set-markers";var $d=Xd,qd=class zf extends fn{constructor(){super(zf.type)}};qd.type="show-markers";var nr=qd,Yd=class Hf extends fn{constructor(e){super(Hf.type),this.markers=e}};Yd.type="render-markers-list";var jd=Yd,ny=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,ir=class extends $t{constructor(n){super(n,{className:"psv-markers-button",icon:ny,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(nr.type,this),this.plugin.addEventListener(tr.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(nr.type,this),this.plugin.removeEventListener(tr.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(n){n instanceof nr?this.toggleActive(!0):n instanceof tr&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};ir.id="markers";var Zd=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,uo="http://www.w3.org/2000/svg",ft="psvMarker",iy=pe.dasherize(ft),sr="marker",fs="markersList",Ga={amount:2,duration:100,easing:"linear"},sy=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Zd} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${n.map(t=>`
        <li data-${iy}="${t.id}" class="psv-panel-menu-item" tabindex="0">
          ${t.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${t.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${t.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,fo=class extends $t{constructor(n){super(n,{className:" psv-markers-list-button",icon:Zd,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(ge.ShowPanelEvent.type,this),this.viewer.addEventListener(ge.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(ge.ShowPanelEvent.type,this),this.viewer.removeEventListener(ge.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(n){n instanceof ge.ShowPanelEvent?this.toggleActive(n.panelId===fs):n instanceof ge.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};fo.id="markersList";var Kd=new I,ry=new ti,Jd=new I,oy=class extends It{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}},In=new ot,ay=new ot,ly=class{constructor(e={}){const t=this;let i,s,r,o;const a={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);const u=document.createElement("div");u.style.transformStyle="preserve-3d",l.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(f,h){const M=h.projectionMatrix.elements[5]*o;h.view&&h.view.enabled?(l.style.transform=`translate( ${-h.view.offsetX*(i/h.view.width)}px, ${-h.view.offsetY*(s/h.view.height)}px )`,l.style.transform+=`scale( ${h.view.fullWidth/h.view.width}, ${h.view.fullHeight/h.view.height} )`):l.style.transform="",f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld();let w,E;h.isOrthographicCamera&&(w=-(h.right+h.left)/2,E=(h.top+h.bottom)/2);const A=h.view&&h.view.enabled?h.view.height/h.view.fullHeight:1,C=h.isOrthographicCamera?`scale( ${A} )scale(`+M+")translate("+d(w)+"px,"+d(E)+"px)"+m(h.matrixWorldInverse):`scale( ${A} )translateZ(`+M+"px)"+m(h.matrixWorldInverse),D=(h.isPerspectiveCamera?"perspective("+M+"px) ":"")+C+"translate("+r+"px,"+o+"px)";a.camera.style!==D&&(u.style.transform=D,a.camera.style=D),v(f,f,h)},this.setSize=function(f,h){i=f,s=h,r=i/2,o=s/2,c.style.width=f+"px",c.style.height=h+"px",l.style.width=f+"px",l.style.height=h+"px",u.style.width=f+"px",u.style.height=h+"px"};function d(f){return Math.abs(f)<1e-10?0:f}function m(f){const h=f.elements;return"matrix3d("+d(h[0])+","+d(-h[1])+","+d(h[2])+","+d(h[3])+","+d(h[4])+","+d(-h[5])+","+d(h[6])+","+d(h[7])+","+d(h[8])+","+d(-h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(-h[13])+","+d(h[14])+","+d(h[15])+")"}function p(f){const h=f.elements;return"translate(-50%,-50%)"+("matrix3d("+d(h[0])+","+d(h[1])+","+d(h[2])+","+d(h[3])+","+d(-h[4])+","+d(-h[5])+","+d(-h[6])+","+d(-h[7])+","+d(h[8])+","+d(h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(h[13])+","+d(h[14])+","+d(h[15])+")")}function g(f){f.isCSS3DObject&&(f.element.style.display="none");for(let h=0,M=f.children.length;h<M;h++)g(f.children[h])}function v(f,h,M,w){if(f.visible===!1){g(f);return}if(f.isCSS3DObject){const E=f.layers.test(M.layers)===!0,A=f.element;if(A.style.display=E===!0?"":"none",E===!0){f.onBeforeRender(t,h,M);let C;f.isCSS3DSprite?(In.copy(M.matrixWorldInverse),In.transpose(),f.rotation2D!==0&&In.multiply(ay.makeRotationZ(f.rotation2D)),f.matrixWorld.decompose(Kd,ry,Jd),In.setPosition(Kd),In.scale(Jd),In.elements[3]=0,In.elements[7]=0,In.elements[11]=0,In.elements[15]=1,C=p(In)):C=p(f.matrixWorld);const P=a.objects.get(f);if(P===void 0||P.style!==C){A.style.transform=C;const D={style:C};a.objects.set(f,D)}A.parentNode!==u&&u.appendChild(A),f.onAfterRender(t,h,M)}}for(let E=0,A=f.children.length;E<A;E++)v(f.children[E],h,M)}}},cy=class{constructor(n){this.viewer=n,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new ly({element:this.element}),this.scene=new Ar,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(t=>{const i=t.target[ft];i.config.visible&&(i.viewportIntersection=t.isIntersecting)})},{root:this.element}),n.addEventListener(ge.ReadyEvent.type,this,{once:!0}),n.addEventListener(ge.SizeUpdatedEvent.type,this),n.addEventListener(ge.RenderEvent.type,this)}handleEvent(n){switch(n.type){case ge.ReadyEvent.type:case ge.SizeUpdatedEvent.type:this.updateSize();break;case ge.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(ge.ReadyEvent.type,this),this.viewer.removeEventListener(ge.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(ge.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const n=this.viewer.getSize();this.renderer.setSize(n.width,n.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(n){this.scene.add(n.threeElement),this.intersectionObserver.observe(n.domElement)}removeObject(n){this.scene.remove(n.threeElement),this.intersectionObserver.unobserve(n.domElement)}},po=(n=>(n.image="image",n.html="html",n.element="element",n.imageLayer="imageLayer",n.videoLayer="videoLayer",n.elementLayer="elementLayer",n.polygon="polygon",n.polygonPixels="polygonPixels",n.polyline="polyline",n.polylinePixels="polylinePixels",n.square="square",n.rect="rect",n.circle="circle",n.ellipse="ellipse",n.path="path",n))(po||{});function Wa(n,e=!1){const t=[];if(Object.keys(po).forEach(i=>{n[i]&&t.push(i)}),t.length===0&&!e)throw new ue(`missing marker content, either ${Object.keys(po).join(", ")}`);if(t.length>1)throw new ue(`multiple marker content, either ${Object.keys(po).join(", ")}`);return t[0]}var Qd=class{constructor(n,e,t){if(this.viewer=n,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!t.id)throw new ue("missing marker id");this.type=Wa(t),this.createElement(),this.update(t)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(n){const e=Wa(n,!0);if(e!==void 0&&e!==this.type)throw new ue(`cannot change marker ${n.id} type`);if(this.config=pe.deepmerge(this.config,n),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),pe.isNil(this.config.visible)&&(this.config.visible=!0),pe.isNil(this.config.zIndex)&&(this.config.zIndex=1),pe.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const t=this.config.rotation;typeof t=="object"?this.config.rotation={yaw:t.yaw?pe.parseAngle(t.yaw,!0,!1):0,pitch:t.pitch?pe.parseAngle(t.pitch,!0,!1):0,roll:t.roll?pe.parseAngle(t.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:pe.parseAngle(t,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=pe.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(n,e,t=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const i={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(n||e){const s=pe.getPosition(this.viewer.container);i.top=e-s.y+10,i.left=n-s.x,i.box={width:20,height:20}}else i.top=this.state.position2D.y,i.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,o=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,o*=this.config.hoverScale.amount),i.top=s.y-o*this.state.anchor.y+o/2,i.left=s.x-r*this.state.anchor.x+r/2,i.box={width:r,height:o}}this.tooltip?t?this.tooltip.update(this.config.tooltip.content,i):this.tooltip.move(i):this.tooltip=this.viewer.createTooltip(i)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},Xa=class extends Qd{get domElement(){return this.element}constructor(n,e,t){super(n,e,t)}afterCreateElement(){this.element[ft]=this}destroy(){delete this.element[ft],super.destroy()}update(n){super.update(n);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&pe.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},mo=class extends Xa{constructor(n,e,t){super(n,e,t)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:n,zoomLevel:e,hoveringMarker:t}){this.__updateSize();const i=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return i.x-=this.state.size.width*this.state.anchor.x,i.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&i.x+this.state.size.width>=0&&i.x-this.state.size.width<=this.viewer.state.size.width&&i.y+this.state.size.height>=0&&i.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${i.x}px ${i.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:n,mouseover:this===t}),i):null}update(n){if(super.update(n),!pe.isExtendedPosition(this.config.position))throw new ue(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(t){throw new ue(`invalid marker ${this.id} position`,t)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Ga:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Xe.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const n=this.domElement,e=!this.state.visible||!this.state.size;if(e&&n.classList.add("psv-marker--transparent"),this.isSvg()){const t=n.firstElementChild.getBoundingClientRect();this.state.size={width:t.width,height:t.height}}else this.state.size={width:n.offsetWidth,height:n.offsetHeight};e&&n.classList.remove("psv-marker--transparent"),this.isSvg()&&(n.style.width=this.state.size.width+"px",n.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:n,viewerPosition:e,mouseover:t}){t!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let i=1;if(typeof this.config.scale=="function")i=this.config.scale(n,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;i*=s+(r-s)*as.EASINGS.inQuad(n/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,o=Xe.degToRad(this.viewer.state.hFov)/2,a=Math.abs(pe.getShortestArc(this.state.position.yaw,e.yaw));i*=r+(s-r)*as.EASINGS.outQuad(Math.max(0,(o-a)/o))}}t&&this.config.hoverScale&&(i*=this.config.hoverScale.amount),this.domElement.style.scale=`${i}`}},hy=`// https://www.8thwall.com/playground/chromakey-threejs

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
`,dy=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,uy=class extends Wn{get map(){return this.uniforms.map.value}set map(n){this.uniforms.map.value=n}set alpha(n){this.uniforms.alpha.value=n}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(n){this.uniforms.keying.value=n?.enabled===!0,n?.enabled&&(typeof n.color=="object"&&"r"in n.color?this.uniforms.color.value.set(n.color.r/255,n.color.g/255,n.color.b/255):this.uniforms.color.value.set(n.color??65280),this.uniforms.similarity.value=n.similarity??.2,this.uniforms.smoothness.value=n.smoothness??.2)}constructor(n){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:n?.map},repeat:{value:new Je(1,1)},offset:{value:new Je(0,0)},alpha:{value:n?.alpha??1},keying:{value:!1},color:{value:new et(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:dy,fragmentShader:hy}),this.chromaKey=n?.chromaKey}};function fy({src:n,withCredentials:e,muted:t,autoplay:i}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=i,s.muted=t,s.preload="metadata",n instanceof MediaStream?s.srcObject=n:s.src=n,s}function py(n,e,t){const[i,s]=n,[r,o]=e,a=pe.greatArcDistance(n,e),c=Math.sin((1-t)*a)/Math.sin(a),l=Math.sin(t*a)/Math.sin(a),u=c*Math.cos(s)*Math.cos(i)+l*Math.cos(o)*Math.cos(r),d=c*Math.cos(s)*Math.sin(i)+l*Math.cos(o)*Math.sin(r),m=c*Math.sin(s)+l*Math.sin(o);return[Math.atan2(d,u),Math.atan2(m,Math.sqrt(u*u+d*d))]}function my(n){const e=[n[0]];let t=0;for(let i=1;i<n.length;i++){const s=n[i-1][0]-n[i][0];s>Math.PI?t+=1:s<-Math.PI&&(t-=1),e.push([n[i][0]+t*2*Math.PI,n[i][1]])}return e}function eu(n){return n.reduce((e,t)=>e.add(t),new I).normalize()}function gy(n){const e=my(n);let t=0;const i=[];for(let r=0;r<e.length-1;r++){const o=pe.greatArcDistance(e[r],e[r+1])*as.SPHERE_RADIUS;i.push(o),t+=o}let s=0;for(let r=0;r<e.length-1;r++){if(s+i[r]>t/2){const o=(t/2-s)/i[r];return py(e[r],e[r+1],o)}s+=i[r]}return e[Math.round(e.length/2)]}var go=new I,tu=new I,$a=new I,nu=new I,iu=new I,su=new I;function vy(n,e,t){go.copy(t).normalize(),tu.crossVectors(n,e).normalize(),$a.crossVectors(tu,n).normalize(),nu.copy(n).multiplyScalar(-go.dot($a)),iu.copy($a).multiplyScalar(go.dot(n));const i=new I().addVectors(nu,iu).normalize();return su.crossVectors(i,go),i.applyAxisAngle(su,.01).multiplyScalar(as.SPHERE_RADIUS)}var _y=class extends Qd{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(n,e,t){super(n,e,t)}is3d(){return!0}createElement(){const n=new uy({alpha:0}),e=new ns(1,1),t=new Bt(e,n);t.userData={[ft]:this},Object.defineProperty(t,"visible",{enumerable:!0,get:function(){return this.userData[ft].config.visible},set:function(i){this.userData[ft].config.visible=i}}),this.element=new Xn().add(t),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[ft],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(n){super.update(n);const e=this.threeMesh,t=e.parent,i=e.material;if(pe.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new ue(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new ue(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,t.position),t.lookAt(0,t.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const o=new I;return o.fromBufferAttribute(s,r),e.localToWorld(o)})}else{if(this.config.position?.length!==4)throw new ue(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(c=>this.viewer.dataHelper.cleanPosition(c))}catch(c){throw new ue(`invalid marker ${this.id} position`,c)}const r=s.map(c=>this.viewer.dataHelper.sphericalCoordsToVector3(c)),o=eu(r);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(o),this.state.positions3D=r;const a=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((c,l)=>{a.setX(l,c.x),a.setY(l,c.y),a.setZ(l,c.z)}),a.needsUpdate=!0,this.__setTextureWrap(i)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){i.map?.dispose();const s=fy({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new Bp(s);i.map=r,i.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(i.alpha=this.config.opacity,pe.isExtendedPosition(this.config.position)||(e.material.userData[ft]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(i)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else i.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){i.map?.dispose();const s=new Rt;i.map=s,i.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(pe.isExtendedPosition(this.config.position)||(e.material.userData[ft]={width:r.width,height:r.height},this.__setTextureWrap(i)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,i.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else i.alpha=this.config.opacity;break}i.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(n){const e=n.userData[ft];if(!e||!e.height||!e.width){n.repeat.set(1,1),n.offset.set(0,0);return}const t=this.config.position.map(d=>this.viewer.dataHelper.cleanPosition(d)),i=pe.greatArcDistance([t[0].yaw,t[0].pitch],[t[1].yaw,t[1].pitch]),s=pe.greatArcDistance([t[3].yaw,t[3].pitch],[t[2].yaw,t[2].pitch]),r=pe.greatArcDistance([t[1].yaw,t[1].pitch],[t[2].yaw,t[2].pitch]),o=pe.greatArcDistance([t[0].yaw,t[0].pitch],[t[3].yaw,t[3].pitch]),a=(i+s)/(r+o),c=e.width/e.height;let l=0,u=0;a<c?l=c-a:u=1/c-1/a,n.repeat.set(1-l,1-u),n.offset.set(l/2,u/2)}},xy=class extends Xa{constructor(n,e,t){super(n,e,t),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new oy(this.element),this.object.userData={[ft]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[ft].config.visible},set:function(n){this.userData[ft].config.visible=n}}),this.afterCreateElement()}destroy(){delete this.object.userData[ft],delete this.object,super.destroy()}render({viewerPosition:n,zoomLevel:e}){const t=this.domElement;if(this.state.size={width:t.offsetWidth,height:t.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:n,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(n){if(super.update(n),!pe.isExtendedPosition(this.config.position))throw new ue(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new ue(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,t=this.domElement;t.classList.add("psv-marker--css3d"),t.childNodes.forEach(i=>i.remove()),t.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},yy=class extends mo{constructor(n,e,t){super(n,e,t)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(n){const e=super.render(n);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:n.viewerPosition,zoomLevel:n.zoomLevel,viewerSize:this.viewer.state.size}),e}update(n){super.update(n);const e=this.domElement;if(this.config.image&&!this.config.size)throw new ue(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(t=>t.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},Ey=class extends Xa{constructor(n,e,t){super(n,e,t)}createElement(){this.element=document.createElementNS(uo,"path"),this.element[ft]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const n=this.__getAllPolyPositions();if(n[0].length>(this.isPolygon?2:1)){const t=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),i=n.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(o=>`${o.x-t.x},${o.y-t.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",i),this.domElement.setAttributeNS(null,"transform",`translate(${t.x} ${t.y})`),t}else return null}update(n){super.update(n);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([t,i])=>{e.setAttributeNS(null,pe.dasherize(t),i)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let t=this.config[this.type];if(!Array.isArray(t[0])&&typeof t[0]!="object")for(let i=0;i<t.length;i++)t.splice(i,2,[t[i],t[i+1]]);if(!Array.isArray(t[0][0])&&typeof t[0][0]!="object"&&(t=[t]),this.isPolyline&&t.length>1)throw new ue("polylines cannot have holes");this.isPixels?this.definition=t.map(i=>i.map(s=>{let r;return pe.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:s[0],textureY:s[1]}),[r.yaw,r.pitch]})):this.definition=t.map(i=>i.map(s=>{let r;return pe.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.cleanPosition({yaw:s[0],pitch:s[1]}),[r.yaw,r.pitch]}))}catch(t){throw new ue(`invalid marker ${this.id} position`,t)}if(this.positions3D=this.coords.map(t=>t.map(i=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:i[0],pitch:i[1]}))),this.isPolygon){const t=eu(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(t)}else{const t=gy(this.coords[0]);this.state.position={yaw:t[0],pitch:t[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(n=>this.__getPolyPositions(n))}__getPolyPositions(n){const e=n.length,t=n.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),i=[];return t.forEach((s,r)=>{s.visible||[r===0?t[e-1]:t[r-1],r===e-1?t[0]:t[r+1]].forEach(a=>{a.visible&&i.push({visible:a.vector,invisible:s.vector,index:r})})}),i.reverse().forEach(s=>{t.splice(s.index,0,{vector:vy(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),t.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},Sy=class extends mo{get svgElement(){return this.domElement.firstElementChild}constructor(n,e,t){super(n,e,t)}isSvg(){return!0}createElement(){const n=this.type==="square"?"rect":this.type,e=document.createElementNS(uo,n);this.element=document.createElementNS(uo,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(n){super.update(n);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([t,i])=>{e.setAttributeNS(null,t,i)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([t,i])=>{e.setAttributeNS(null,pe.dasherize(t),i)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},wy=pe.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(n){return n?(n===!0&&(n=Ga),typeof n=="number"&&(n={amount:n}),{...Ga,...n}):null}});function My(n){switch(Wa(n,!1)){case"image":case"html":case"element":return yy;case"imageLayer":case"videoLayer":return _y;case"elementLayer":return xy;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return Ey;case"square":case"rect":case"circle":case"ellipse":case"path":return Sy;default:throw new ue("invalid marker type")}}var rr=class Vf extends Ma{constructor(e,t){super(e,t),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",i=>i.preventDefault()),this.svgContainer=document.createElementNS(uo,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new cy(e),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(e){return[Vf,e]}init(){super.init(),pe.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(ge.ClickEvent.type,this),this.viewer.addEventListener(ge.DoubleClickEvent.type,this),this.viewer.addEventListener(ge.RenderEvent.type,this),this.viewer.addEventListener(ge.ConfigChangedEvent.type,this),this.viewer.addEventListener(ge.ObjectEnterEvent.type,this),this.viewer.addEventListener(ge.ObjectHoverEvent.type,this),this.viewer.addEventListener(ge.ObjectLeaveEvent.type,this),this.viewer.addEventListener(ge.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(ft),this.viewer.removeEventListener(ge.ClickEvent.type,this),this.viewer.removeEventListener(ge.DoubleClickEvent.type,this),this.viewer.removeEventListener(ge.RenderEvent.type,this),this.viewer.removeEventListener(ge.ObjectEnterEvent.type,this),this.viewer.removeEventListener(ge.ObjectHoverEvent.type,this),this.viewer.removeEventListener(ge.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(ge.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(e){switch(e.type){case ge.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case ge.RenderEvent.type:this.renderMarkers();break;case ge.ClickEvent.type:this.__onClick(e,!1);break;case ge.DoubleClickEvent.type:this.__onClick(e,!0);break;case ge.ObjectEnterEvent.type:case ge.ObjectLeaveEvent.type:case ge.ObjectHoverEvent.type:if(e.userDataKey===ft){const t=e.originalEvent,i=e.object.userData[ft];switch(e.type){case ge.ObjectEnterEvent.type:i.config.style?.cursor?this.viewer.setCursor(i.config.style.cursor):(i.config.tooltip||i.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(t,i);break;case ge.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(i);break;case ge.ObjectHoverEvent.type:this.__onHoverMarker(t,i);break}}break;case"mouseenter":{const t=this.__getTargetMarker(pe.getEventTarget(e));this.__onEnterMarker(e,t);break}case"mouseleave":{const t=this.__getTargetMarker(pe.getEventTarget(e));this.__onLeaveMarker(t);break}case"mousemove":{const t=this.__getTargetMarker(pe.getEventTarget(e),!0);this.__onHoverMarker(e,t);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(e=>{e.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new nr)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(e=>{e.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new tr)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!0,e.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!1,e.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(e,t=!0){if(this.markers[e.id])throw new ue(`marker "${e.id}" already exists`);const i=new(My(e))(this.viewer,this,e);i.isPoly()?this.svgContainer.appendChild(i.domElement):i.isCss3d()?this.css3DContainer.addObject(i):i.is3d()?this.viewer.renderer.addObject(i.threeElement):this.container.appendChild(i.domElement),this.markers[i.id]=i,this.state.showAllTooltips&&(i.state.staticTooltip=!0),t&&this.__afterChangeMarkers()}getMarker(e){const t=typeof e=="object"?e.id:e;if(!this.markers[t])throw new ue(`cannot find marker "${t}"`);return this.markers[t]}getCurrentMarker(){return this.state.currentMarker}updateMarker(e,t=!0){const i=this.getMarker(e.id);i.update(e),t&&(this.__afterChangeMarkers(),(i===this.state.hoveringMarker&&i.config.tooltip?.trigger==="hover"||i.state.staticTooltip)&&i.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(e,t=!0){const i=this.getMarker(e);i.isPoly()?this.svgContainer.removeChild(i.domElement):i.isCss3d()?this.css3DContainer.removeObject(i):i.is3d()?this.viewer.renderer.removeObject(i.threeElement):this.container.removeChild(i.domElement),this.state.hoveringMarker===i&&(this.state.hoveringMarker=null),this.state.currentMarker===i&&(this.state.currentMarker=null),i.destroy(),delete this.markers[i.id],t&&this.__afterChangeMarkers()}removeMarkers(e,t=!0){e.forEach(i=>this.removeMarker(i,!1)),t&&this.__afterChangeMarkers()}setMarkers(e,t=!0){this.clearMarkers(!1),e?.forEach(i=>{this.addMarker(i,!1)}),t&&this.__afterChangeMarkers()}clearMarkers(e=!0){Object.keys(this.markers).forEach(t=>{this.removeMarker(t,!1)}),e&&this.__afterChangeMarkers()}gotoMarker(e,t=this.config.gotoMarkerSpeed){const i=this.getMarker(e);return t?this.viewer.animate({...i.state.position,zoom:i.config.zoomLvl,speed:t}).then(()=>{this.dispatchEvent(new Va(i))}):(this.viewer.rotate(i.state.position),pe.isNil(i.config.zoomLvl)||this.viewer.zoom(i.config.zoomLvl),this.dispatchEvent(new Va(i)),Promise.resolve())}hideMarker(e){this.toggleMarker(e,!1)}showMarker(e){this.toggleMarker(e,!0)}showMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!0,t.showTooltip()}hideMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!1,t.hideTooltip()}toggleMarker(e,t){const i=this.getMarker(e);i.config.visible=pe.isNil(t)?!i.config.visible:t,this.renderMarkers()}showMarkerPanel(e){const t=this.getMarker(e);t.config.content?this.viewer.panel.show({id:sr,content:t.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(sr)}toggleMarkersList(){this.viewer.panel.isVisible(fs)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let e=[];Object.values(this.markers).forEach(i=>{i.config.visible&&!i.config.hideList&&e.push(i)});const t=new jd(e);this.dispatchEvent(t),e=t.markers,this.viewer.panel.show({id:fs,content:sy(e,this.viewer.config.lang[ir.id]),noMargin:!0,clickHandler:i=>{const s=pe.getClosest(i,".psv-panel-menu-item"),r=s?s.dataset[ft]:void 0;if(r){const o=this.getMarker(r);this.dispatchEvent(new Hd(o)),this.gotoMarker(o.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(fs)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const e=this.viewer.getZoomLevel(),t=this.viewer.getPosition(),i=this.state.hoveringMarker;Object.values(this.markers).forEach(s=>{let r=s.config.visible,o=!1,a=null;r&&(a=s.render({viewerPosition:t,zoomLevel:e,hoveringMarker:i}),r=!!a),o=s.state.visible!==r,s.state.visible=r,s.state.position2D=a,s.domElement&&pe.toggleClass(s.domElement,"psv-marker--visible",r),r?s.state.staticTooltip?s.showTooltip():s!==this.state.hoveringMarker&&s.hideTooltip():s.hideTooltip(),o&&(this.dispatchEvent(new Dd(s,r)),(s.is3d()||s.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(e,t=!1){if(e instanceof Node){const i=t?pe.getClosest(e,".psv-marker"):e;return i?i[ft]:void 0}else return Array.isArray(e)?e.map(i=>i.userData[ft]).filter(i=>!!i).sort((i,s)=>s.config.zIndex-i.config.zIndex)[0]:null}__onEnterMarker(e,t){t&&(this.state.hoveringMarker=t,this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,this.dispatchEvent(new Od(t)),t instanceof mo&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onLeaveMarker(e){e&&(this.dispatchEvent(new Ud(e)),e instanceof mo&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"?e.hideTooltip():e.state.staticTooltip&&e.showTooltip())}__onHoverMarker(e,t){t&&(this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,(t.isPoly()||t.is3d()||t.isCss3d())&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onClick(e,t){const i=this.__getTargetMarker(e.data.objects),r=this.__getTargetMarker(e.data.target,!0)||i;this.state.currentMarker&&this.state.currentMarker!==r&&(this.dispatchEvent(new Gd(this.state.currentMarker)),this.viewer.panel.hide(sr),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),r&&(this.state.currentMarker=r,this.dispatchEvent(new Bd(r,t,e.data.rightclick)),this.config.clickEventOnMarker?e.data.marker=r:e.stopImmediatePropagation(),this.markers[r.id]&&!e.data.rightclick&&(r.config.tooltip?.trigger==="click"?r.tooltip?this.hideMarkerTooltip(r.id):this.showMarkerTooltip(r.id):this.showMarkerPanel(r.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new $d(this.getMarkers()))}__refreshUi(){const e=Object.values(this.markers).filter(t=>!t.config.hideList).length;e===0?(this.viewer.panel.hide(sr),this.viewer.panel.hide(fs)):this.viewer.panel.isVisible(fs)?this.showMarkersList():this.viewer.panel.isVisible(sr)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(ir.id,!1)?.toggle(e>0),this.viewer.navbar.getButton(fo.id,!1)?.toggle(e>0)}__checkObjectsObserver(){Object.values(this.markers).some(t=>t.is3d())?this.viewer.observeObjects(ft):this.viewer.unobserveObjects(ft)}};rr.id="markers",rr.VERSION="5.14.1",rr.configParser=wy,rr.readonlyOptions=["markers"];var ru=rr;Yn.lang[ir.id]="Markers",Yn.lang[fo.id]="Markers list",Ca(ir,"caption:left"),Ca(fo,"caption:left");/*!
 * Photo Sphere Viewer / Virtual Tour Plugin 5.14.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var by=Object.defineProperty,Ty=(n,e)=>{for(var t in e)by(n,t,{get:e[t],enumerable:!0})},Ay={};Ty(Ay,{EnterArrowEvent:()=>cu,LeaveArrowEvent:()=>du,NodeChangedEvent:()=>au});var ou=class Gf extends Ns{constructor(e,t){super(Gf.type),this.node=e,this.data=t}};ou.type="node-changed";var au=ou,lu=class Wf extends Ns{constructor(e,t){super(Wf.type),this.link=e,this.node=t}};lu.type="enter-arrow";var cu=lu,hu=class Xf extends Ns{constructor(e,t){super(Xf.type),this.link=e,this.node=t}};hu.type="leave-arrow";var du=hu,Cy=class extends It{constructor(n=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=n,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Je(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(n,e){return super.copy(n,e),this.element=n.element.cloneNode(!0),this.center=n.center,this}},ps=new I,uu=new ot,fu=new ot,pu=new I,mu=new I,Ry=class{constructor(n={}){const e=this;let t,i,s,r;const o={objects:new WeakMap},a=n.element!==void 0?n.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a,this.getSize=function(){return{width:t,height:i}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),uu.copy(g.matrixWorldInverse),fu.multiplyMatrices(g.projectionMatrix,uu),l(p,p,g),m(p)},this.setSize=function(p,g){t=p,i=g,s=t/2,r=i/2,a.style.width=p+"px",a.style.height=g+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let g=0,v=p.children.length;g<v;g++)c(p.children[g])}function l(p,g,v){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){ps.setFromMatrixPosition(p.matrixWorld),ps.applyMatrix4(fu);const f=ps.z>=-1&&ps.z<=1&&p.layers.test(v.layers)===!0,h=p.element;h.style.display=f===!0?"":"none",f===!0&&(p.onBeforeRender(e,g,v),h.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(ps.x*s+s)+"px,"+(-ps.y*r+r)+"px)",h.parentNode!==a&&a.appendChild(h),p.onAfterRender(e,g,v));const M={distanceToCameraSquared:u(v,p)};o.objects.set(p,M)}for(let f=0,h=p.children.length;f<h;f++)l(p.children[f],g,v)}function u(p,g){return pu.setFromMatrixPosition(p.matrixWorld),mu.setFromMatrixPosition(g.matrixWorld),pu.distanceToSquared(mu)}function d(p){const g=[];return p.traverseVisible(function(v){v.isCSS2DObject&&g.push(v)}),g}function m(p){const g=d(p).sort(function(f,h){if(f.renderOrder!==h.renderOrder)return h.renderOrder-f.renderOrder;const M=o.objects.get(f).distanceToCameraSquared,w=o.objects.get(h).distanceToCameraSquared;return M-w}),v=g.length;for(let f=0,h=g.length;f<h;f++)g[f].element.style.zIndex=v-f}}},gu=new I,Py=new ti,vu=new I,Ly=class extends It{constructor(n=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=n,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(n,e){return super.copy(n,e),this.element=n.element.cloneNode(!0),this}},Nn=new ot,Dy=new ot,Iy=class{constructor(n={}){const e=this;let t,i,s,r;const o={camera:{style:""},objects:new WeakMap},a=n.element!==void 0?n.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",a.appendChild(c);const l=document.createElement("div");l.style.transformStyle="preserve-3d",c.appendChild(l),this.getSize=function(){return{width:t,height:i}},this.render=function(v,f){const h=f.projectionMatrix.elements[5]*r;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(t/f.view.width)}px, ${-f.view.offsetY*(i/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let M,w;f.isOrthographicCamera&&(M=-(f.right+f.left)/2,w=(f.top+f.bottom)/2);const E=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,A=f.isOrthographicCamera?`scale( ${E} )scale(`+h+")translate("+u(M)+"px,"+u(w)+"px)"+d(f.matrixWorldInverse):`scale( ${E} )translateZ(`+h+"px)"+d(f.matrixWorldInverse),P=(f.isPerspectiveCamera?"perspective("+h+"px) ":"")+A+"translate("+s+"px,"+r+"px)";o.camera.style!==P&&(l.style.transform=P,o.camera.style=P),g(v,v,f)},this.setSize=function(v,f){t=v,i=f,s=t/2,r=i/2,a.style.width=v+"px",a.style.height=f+"px",c.style.width=v+"px",c.style.height=f+"px",l.style.width=v+"px",l.style.height=f+"px"};function u(v){return Math.abs(v)<1e-10?0:v}function d(v){const f=v.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function m(v){const f=v.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function p(v){v.isCSS3DObject&&(v.element.style.display="none");for(let f=0,h=v.children.length;f<h;f++)p(v.children[f])}function g(v,f,h,M){if(v.visible===!1){p(v);return}if(v.isCSS3DObject){const w=v.layers.test(h.layers)===!0,E=v.element;if(E.style.display=w===!0?"":"none",w===!0){v.onBeforeRender(e,f,h);let A;v.isCSS3DSprite?(Nn.copy(h.matrixWorldInverse),Nn.transpose(),v.rotation2D!==0&&Nn.multiply(Dy.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(gu,Py,vu),Nn.setPosition(gu),Nn.scale(vu),Nn.elements[3]=0,Nn.elements[7]=0,Nn.elements[11]=0,Nn.elements[15]=1,A=m(Nn)):A=m(v.matrixWorld);const C=o.objects.get(v);if(C===void 0||C.style!==A){E.style.transform=A;const P={style:A};o.objects.set(v,P)}E.parentNode!==l&&l.appendChild(E),v.onAfterRender(e,f,h)}}for(let w=0,E=v.children.length;w<E;w++)g(v.children[w],f,h)}}},Ny=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
</svg>`,vo="tourLink",ms="__tour-link__",Uy={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},Fy={element:()=>{const n=document.createElement("button");return n.className="psv-virtual-tour-arrow",n.innerHTML=Ny,n},size:{width:80,height:80}},qa="arrow",Oy=class extends pi{constructor(n,e){super(n,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new Iy({element:this.container}):new Ry({element:this.container}),this.camera=this.is3D?new on(30,1):null,this.scene=new Ar,this.viewer.addEventListener(ge.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(ge.PositionUpdatedEvent.type,this),this.viewer.addEventListener(ge.SizeUpdatedEvent.type,this),this.viewer.addEventListener(ge.RenderEvent.type,this),this.viewer.addEventListener(ge.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",t=>t.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(ge.ReadyEvent.type,this),this.viewer.removeEventListener(ge.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(ge.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(ge.RenderEvent.type,this),this.viewer.removeEventListener(ge.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(n){switch(n.type){case ge.ReadyEvent.type:case ge.SizeUpdatedEvent.type:case ge.PositionUpdatedEvent.type:this.__updateCamera();break;case ge.RenderEvent.type:this.render();break;case ge.ClickEvent.type:{if(n.data.rightclick)break;const e=this.__getTargetLink(n.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(pe.getEventTarget(n));e&&this.plugin.__onEnterArrow(e,n);break}case"mouseleave":{const e=this.__getTargetLink(pe.getEventTarget(n));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(pe.getEventTarget(n),!0)&&this.plugin.__onHoverArrow(n);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":n.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const n=this.viewer.getSize();if(this.renderer.setSize(n.width,n.height),this.is3D){const e=this.viewer.getPosition();e.pitch=Xe.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,n.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(n.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const n=this.viewer.getPosition(),e=[];let t=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(i=>{const s=i.userData[qa];if(s.conflict){const r=Math.abs(pe.getShortestArc(n.yaw,s.yaw));t=Math.min(t,r),e.push([i,r])}}),e.forEach(([i,s])=>{const r=s!==t;i.element.style.opacity=r?"0.5":null,i.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(n,e){if(e?.image){const t=document.createElement("img");return t.src=e.image,t}else if(e?.element)return typeof e.element=="function"?e.element(n):e.element}addLinkArrow(n,e,t=1){let i=this.__buildArrowElement(n,n.arrowStyle);i||(i=this.__buildArrowElement(n,this.arrowStyle)),i[vo]=n;const s={...this.arrowStyle,...n.arrowStyle};if(i.classList.add("psv-virtual-tour-link"),s.className&&pe.addClasses(i,s.className),s.style&&Object.assign(i.style,s.style),this.is3D){i.style.width=s.size.width*1.5+"px",i.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(a=>{const c=a.userData[qa];Math.abs(pe.getShortestArc(c.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(c.conflict=!0,r=!0)});const o=new Ly(i);o.userData[qa]={yaw:e.yaw,conflict:r},o.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},o.position,t*100),this.scene.add(o)}else{i.style.width=s.size.width+"px",i.style.height=s.size.height+"px",i.style.pointerEvents="auto";const r=new Cy(i);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(n,e=!1){const t=e?pe.getClosest(n,".psv-virtual-tour-link"):n;return t?t[vo]:void 0}__onToggleGallery(n){n?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},_u=class{constructor(n,e){this.plugin=n,this.viewer=e,this.nodes={}}destroy(){}checkNode(n){if(!n.id)throw new ue("No id given for node");if(!n.panorama)throw new ue(`No panorama provided for node ${n.id}`);if(this.plugin.isGps&&!(n.gps?.length>=2))throw new ue(`No GPS position provided for node ${n.id}`);if(!this.plugin.isGps&&n.markers?.some(e=>e.gps&&!e.position))throw new ue("Cannot use GPS positioning for markers in manual mode");n.links||(pe.logWarn(`Node ${n.id} has no links`),n.links=[])}checkLink(n,e){if(!e.nodeId)throw new ue(`Link of node ${n.id} has no target id`);if(e.nodeId===n.id)throw new ue(`Node ${n.id} links to itself`);if(!this.plugin.isGps&&!pe.isExtendedPosition(e.position))throw new ue(`No position provided for link ${e.nodeId} of node ${n.id}`);if(this.plugin.isGps&&!e.gps)throw new ue(`No GPS position provided for link ${e.nodeId} of node ${n.id}`)}},ky=class extends _u{async loadNode(n){if(this.nodes[n])return this.nodes[n];throw new ue(`Node ${n} not found`)}setNodes(n){if(!n?.length)throw new ue("No nodes provided");const e={},t={};n.forEach(i=>{if(this.checkNode(i),e[i.id])throw new ue(`Duplicate node ${i.id}`);e[i.id]=i}),n.forEach(i=>{this.__checkLinks(i,e),i.links.forEach(s=>{t[s.nodeId]=!0})}),n.forEach(i=>{t[i.id]||pe.logWarn(`Node ${i.id} is never linked to`)}),this.nodes=e}updateNode(n){if(!n.id)throw new ue("No id given for node");const e=this.nodes[n.id];if(!e)throw new ue(`Node ${n.id} does not exist`);return Object.assign(e,n),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(n,e){n.links.forEach(t=>{if(!e[t.nodeId])throw new ue(`Target node ${t.nodeId} of node ${n.id} does not exists`);t.gps=t.gps||e[t.nodeId].gps,this.checkLink(n,t)})}},By=class extends _u{constructor(n,e){if(super(n,e),!n.config.getNode)throw new ue("Missing getNode() option.");this.nodeResolver=n.config.getNode}async loadNode(n){if(this.nodes[n])return this.nodes[n];{const e=await this.nodeResolver(n);return this.checkNode(e),e.links.forEach(t=>{this.checkLink(e,t)}),this.nodes[n]=e,e}}clearCache(){this.nodes={}}};function xu(n,e){const t=yu(n),i=yu(e),s=n[2]??0,r=e[2]??0;let o=0;return s!==r&&(o=Math.atan((r-s)/zy(t,i))),{yaw:Hy(t,i),pitch:o}}function yu(n){return[Xe.degToRad(n[0]),Xe.degToRad(n[1])]}function zy(n,e){return pe.greatArcDistance(n,e)*6371e3}function Hy(n,e){const[t,i]=n,[s,r]=e,o=Math.sin(s-t)*Math.cos(r),a=Math.cos(i)*Math.sin(r)-Math.sin(i)*Math.cos(r)*Math.cos(s-t);return Math.atan2(o,a)}var Ya=pe.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:Fy,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(n){if(n!=="client"&&n!=="server")throw new ue("VirtualTourPlugin: invalid dataMode");return n},positionMode(n){if(n!=="gps"&&n!=="manual")throw new ue("VirtualTourPlugin: invalid positionMode");return n},renderMode(n){if(n!=="3d"&&n!=="2d")throw new ue("VirtualTourPlugin: invalid renderMode");return n},arrowsPosition(n,{defValue:e}){return{...e,...n}},arrowStyle(n,{defValue:e}){return{...e,...n}},map(n,{rawConfig:e}){if(n){if(e.dataMode==="server")return pe.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!n.imageUrl)return pe.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null;"recenter"in n||(n.recenter=!0)}return n}}),or=class $f extends Ma{constructor(e,t){super(e,t),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new Oy(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}static withConfig(e){return[$f,e]}init(){super.init(),this.arrowsRenderer.init(),pe.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(pe.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&pe.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new By(this,this.viewer):new ky(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(e){if(e instanceof ge.ClickEvent){const t=e.data.objects.find(i=>i.userData[vo])?.userData[vo];t&&this.setCurrentNode(t.nodeId,null,t)}else if(e.type==="select-hotspot"){const t=e.hotspotId;t.startsWith(ms)&&this.setCurrentNode(t.substring(ms.length))}}getCurrentNode(){return this.state.currentNode}setNodes(e,t){if(this.isServerSide)throw new ue("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(e),t?this.datasource.nodes[t]||(t=e[0].id,pe.logWarn(`startNodeId not found is provided nodes, resetted to ${t}`)):t=e[0].id,this.setCurrentNode(t),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(e,t,i){if(e===this.state.currentNode?.id&&!t?.forceUpdate)return Promise.resolve(!0);t?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=e;const s=this.state.currentNode,r=s&&i?this.__getLinkPosition(s,i):null;return Promise.resolve(this.state.preload[e]).then(()=>{if(this.state.loadingNode!==e)throw pe.getAbortError();return this.datasource.loadNode(e)}).then(o=>{if(this.state.loadingNode!==e)throw pe.getAbortError();const a={...Ya.defaults.transitionOptions,rotateTo:r,zoomTo:r?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(o,s,i):this.config.transitionOptions,...t};return a.effect||(a.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),a.rotation&&a.effect==="none"?this.viewer.animate({...a.rotateTo,zoom:a.zoomTo,speed:a.speed}).then(()=>[o,a]):Promise.resolve([o,a])}).then(([o,a])=>{if(this.state.loadingNode!==e)throw pe.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(o.panorama,{caption:o.caption,description:o.description,panoData:o.panoData,sphereCorrection:o.sphereCorrection,showLoader:a.showLoader,position:a.rotateTo,zoom:a.zoomTo,transition:a.effect==="none"?!1:{effect:a.effect,rotation:a.rotation,speed:a.speed}}).then(c=>{if(!c)throw pe.getAbortError();return o})}).then(o=>{if(this.state.loadingNode!==e)throw pe.getAbortError();return this.state.currentNode=o,this.map&&this.map.setCenter(this.__getNodeMapPosition(o)??this.map.config.center,this.config.map.recenter),this.plan?.setCoordinates(o.gps),this.__addNodeMarkers(o),this.__renderLinks(o),this.__preload(o),this.state.loadingNode=null,this.dispatchEvent(new au(o,{fromNode:s,fromLink:i,fromLinkPosition:r})),this.viewer.resetIdleTimer(),!0}).catch(o=>{if(pe.isAbortError(o))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,o})}async gotoLink(e,t="8rpm"){const i=this.getLinkPosition(e);t?await this.viewer.animate({...i,speed:t}):this.viewer.rotate(i)}getLinkPosition(e){const t=this.state.currentNode?.links.find(i=>i.nodeId===e);if(!t)throw new ue(`Cannot find link "${e}"`);return this.__getLinkPosition(this.state.currentNode,t)}updateNode(e){if(this.isServerSide)throw new ue("Cannot update node in server side mode");const t=this.datasource.updateNode(e);if((e.name||e.thumbnail||e.panorama)&&this.__setGalleryItems(),(e.name||e.gps||e.map)&&this.__setMapHotspots(),(e.name||e.gps||e.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===t.id){if(this.__hideTooltip(),e.panorama||e.panoData||e.sphereCorrection){this.setCurrentNode(t.id,{forceUpdate:!0});return}e.caption&&this.viewer.setOption("caption",t.caption),e.description&&this.viewer.setOption("description",t.description),(e.links||e.gps)&&this.__renderLinks(t),e.gps&&this.plan?.setCoordinates(t.gps),(e.map||e.gps)&&this.map?.setCenter(this.__getNodeMapPosition(t)),(e.markers||e.gps)&&this.__addNodeMarkers(t)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(e=>e.showInGallery!==!1).map(e=>({id:e.id,panorama:e.panorama,name:e.name,thumbnail:e.thumbnail})),e=>{this.setCurrentNode(e)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.map!==!1).map(e=>({tooltip:e.name,...e.map||{},...this.__getNodeMapPosition(e),id:ms+e.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.plan!==!1).map(e=>({tooltip:e.name,...e.plan||{},coordinates:e.gps,id:ms+e.id})))}__renderLinks(e){this.arrowsRenderer.clear();const t=[];e.links.forEach(i=>{const s=this.__getLinkPosition(e,i);s.yaw+=i.linkOffset?.yaw??0,s.pitch+=i.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(s.pitch+=this.config.arrowsPosition.linkPitchOffset),t.push(s),this.arrowsRenderer.addLinkArrow(i,s,i.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(t)}__getLinkPosition(e,t){return this.isGps?xu(e.gps,t.gps):this.viewer.dataHelper.cleanPosition(t.position)}async __getTooltipContent(e){const t=await this.datasource.loadNode(e.nodeId),i=[];(t.name||t.thumbnail||t.caption)&&(t.name&&i.push(`<h3>${t.name}</h3>`),t.thumbnail&&i.push(`<img src="${t.thumbnail}">`),t.caption&&i.push(`<p>${t.caption}</p>`));let s=i.join("");return this.config.getLinkTooltip&&(s=this.config.getLinkTooltip(s,e,t)),s}__onEnterArrow(e,t){const i=pe.getPosition(this.viewer.container),s={x:t.clientX-i.x,y:t.clientY-i.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...Uy,left:s.x,top:s.y,box:{width:20,height:20}}),this.__getTooltipContent(e).then(r=>{r?this.state.currentTooltip.update(r):this.__hideTooltip()})),this.map?.setActiveHotspot(ms+e.nodeId),this.plan?.setActiveHotspot(ms+e.nodeId),this.dispatchEvent(new cu(e,this.state.currentNode))}__onHoverArrow(e){const t=pe.getPosition(this.viewer.container),i={x:e.clientX-t.x,y:e.clientY-t.y};this.state.currentTooltip?.move({left:i.x,top:i.y})}__onLeaveArrow(e){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new du(e,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(e){this.config.preload&&(this.state.preload[e.id]=!0,this.state.currentNode.links.filter(t=>!this.state.preload[t.nodeId]).filter(t=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,t):!0).forEach(t=>{this.state.preload[t.nodeId]=this.datasource.loadNode(t.nodeId).then(i=>this.viewer.textureLoader.preloadPanorama(i.panorama)).then(()=>{this.state.preload[t.nodeId]=!0}).catch(()=>{delete this.state.preload[t.nodeId]})}))}__addNodeMarkers(e){e.markers&&(this.markers?this.markers.setMarkers(e.markers.map(t=>(t.gps&&this.isGps&&(t.position=xu(e.gps,t.gps),t.data?.map&&Object.assign(t.data.map,this.__getGpsMapPosition(t.gps)),t.data?.plan&&(t.data.plan.coordinates=t.gps)),t))):pe.logWarn(`Node ${e.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(e){const t=this.__getGpsMapPosition(e.gps);return t||(e.map?{x:e.map.x,y:e.map.y}:null)}__getGpsMapPosition(e){const t=this.config.map;return this.isGps&&t&&t.extent&&t.size?{x:Xe.mapLinear(e[0],t.extent[0],t.extent[2],0,t.size.width),y:Xe.mapLinear(e[1],t.extent[1],t.extent[3],0,t.size.height)}:null}};or.id="virtual-tour",or.VERSION="5.14.1",or.configParser=Ya,or.readonlyOptions=Object.keys(Ya.defaults);var Eu=or;class Vy{constructor(){it(this,"clips",new Map);it(this,"ambientEl",null);it(this,"ambientSrc",null);it(this,"muted",!1)}element(e){let t=this.clips.get(e);if(!t){if(typeof Audio>"u")return null;t=new Audio(e),this.clips.set(e,t)}return t}start(e,t){e.loop=!!t.loop,e.volume=t.volume??1,e.muted=this.muted,e.play().catch(()=>{})}play(e,t={}){const i=nt(e);if(!i)return;const s=this.element(i);s&&this.start(s,t)}toggle(e,t={}){const i=nt(e);if(!i)return;const s=this.clips.get(i);if(s&&!s.paused){s.pause();return}const r=this.element(i);r&&this.start(r,t)}stop(e){const t=nt(e),i=t?this.clips.get(t):void 0;i&&(i.pause(),i.currentTime=0)}setAmbient(e,t={}){const i=e?nt(e)??null:null;i!==this.ambientSrc&&(this.ambientEl?.pause(),this.ambientEl=null,this.ambientSrc=i,!(!i||typeof Audio>"u")&&(this.ambientEl=new Audio(i),this.start(this.ambientEl,{loop:!0,...t})))}setMuted(e){this.muted=e;for(const t of this.clips.values())t.muted=e;this.ambientEl&&(this.ambientEl.muted=e)}isMuted(){return this.muted}stopAll(){for(const e of this.clips.values())e.pause();this.clips.clear(),this.ambientEl?.pause(),this.ambientEl=null,this.ambientSrc=null}}const Gy=new Set(["info","none"]);function Wy(n){return[...n].sort((e,t)=>(e.type==="goto"?1:0)-(t.type==="goto"?1:0))}function Su(n,e){const t=[];for(const i of Wy(n)){if(i.if&&e.variables&&!e.variables.test(i.if))continue;let s=!0;switch(i.type){case"goto":if(!i.targetSceneId)break;e.goTo?e.goTo(i.targetSceneId,i.landing,i.transition):s=!1;break;case"look":e.lookAt?e.lookAt(i.yaw,i.pitch,i.zoom):s=!1;break;case"toggle":if(!i.targetIds?.length)break;e.toggleHotspots?e.toggleHotspots(i.targetIds,i.mode):s=!1;break;case"video":if(!i.url)break;e.playVideo?e.playVideo(i.url):s=!1;break;case"url":if(!i.url)break;e.openUrl?e.openUrl(i.url,i.target):s=!1;break;case"audio":if(!i.url)break;e.playAudio?e.playAudio(i.url,!!i.loop):s=!1;break;case"image":{const r=e.resolveMedia?.(i.imageAssetId,i.imageSrc)??i.imageSrc;if(!r)break;e.showImage?e.showImage(r):s=!1;break}case"panel":if(!i.panelId)break;e.openPanel?e.openPanel(i.panelId,i.mode,i.content):s=!1;break;case"setVar":e.variables?s=e.variables.apply(i):s=!1;break;case"animate":if(!i.targetIds?.length)break;e.animate?e.animate(i.targetIds,i.animation,i.durationMs):s=!1;break;case"narrate":{const r=e.resolveMedia?.(i.audioAssetId,void 0);if(!i.text&&!r)break;e.narrate?e.narrate({text:i.text,src:r,voice:i.voice}):s=!1;break}case"model3d":{const r=e.resolveMedia?.(i.assetId,i.src)??i.src;if(!r)break;e.showModel?e.showModel(r,i.scale):s=!1;break}default:s=Gy.has(i.type);break}s?t.push(i.type):e.onUnsupported?.(i)}return t}const gi=(n,e=!1)=>`<svg viewBox="0 0 24 24" width="100%" height="100%" fill="${e?"currentColor":"none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`,wu={pin:gi('<path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),arrow:gi('<path d="M5 12h14M13 6l6 6-6 6"/>'),info:gi('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),circle:gi('<circle cx="12" cy="12" r="8"/>'),plus:gi('<path d="M12 5v14M5 12h14"/>'),eye:gi('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'),dot:gi('<circle cx="12" cy="12" r="6"/>',!0),play:gi('<path d="M8 5v14l11-7z"/>',!0)};function Xy(n){return wu[n]??wu.circle}const $y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bt=n=>n.replace(/[&<>"']/g,e=>$y[e]),Mu=(n,e)=>e?n.find(t=>t.id===e):void 0;function qy(n,e){const t=Mu(e,n.iconAssetId);return t?.kind==="svg"&&t.svg?t.svg:t?.kind==="image"&&t.src?`<img src="${bt(nt(t.src))}" alt="" draggable="false" />`:Xy(n.builtinIcon)}const Yy=new Set(["pulse","echo","strobe","glow"]);function ja(n,e){const t=Mu(e,n.imageAssetId);return t?.kind==="image"&&t.src?nt(t.src):nt(n.imageSrc)}function bu(n){const e=n.borderWidth?`border:${n.borderWidth}px ${n.borderStyle||"solid"} ${n.borderColor||"#ffffff"};`:"";return`color:${n.iconColor};background:${n.background||"transparent"};border-radius:${n.radius}px;padding:${n.padding}px;`+e}function Tu(n,e){return`--hs-hover-scale:${n.hoverScale??1.08};--hs-hover-bg:${n.hoverColor||n.background||"transparent"};`+(n.opacity!=null&&n.opacity<1?`opacity:${n.opacity};`:"")+(e?`--fx-color:${n.effectColor||"#3b82f6"};--fx-op:${n.effectOpacity??.7};--fx-speed:${n.effectSpeed??1.6};--fx-size:${n.effectSize??44};--fx-stroke:${n.effectStroke??2};--fx-radius:${n.radius}`:"")}function jy(n,e,t){const i=t??n.style;if(n.form==="html")return`<div class="vtc-hotspot vtc-hotspot--html">${n.html??""}</div>`;if(n.form==="text"){const a=i.background?`background:${i.background};padding:${i.padding}px;border-radius:${i.radius}px;`:"";return`<div class="vtc-hotspot vtc-hotspot--text" style="color:${i.textColor||"#fff"};font-size:${i.fontSize||16}px;${a}">${bt(i.text||"Text")}</div>`}if(n.form==="callout"){const a=n.callout??{dx:90,dy:-60},c=a.lineColor||i.borderColor||i.textColor||"#fff",l=a.lineWidth??2,u=a.anchorSize??7,d=a.elbow,m=Math.max(Math.abs(a.dx),Math.abs(a.dy),Math.abs(d?.dx??0),Math.abs(d?.dy??0))+l+2,p=m,g=d?`${p},${p} ${p+d.dx},${p+d.dy} ${p+a.dx},${p+a.dy}`:`${p},${p} ${p+a.dx},${p+a.dy}`,v=`<div class="vtc-callout__card" style="${bu(i)}color:${i.textColor||"#fff"};font-size:${i.fontSize||14}px;max-width:${a.maxWidth??200}px;transform:translate(calc(-50% + ${a.dx}px), calc(-50% + ${a.dy}px));">${bt(i.text||n.name)}</div>`;return`<div class="vtc-hotspot vtc-callout" style="${Tu(i,null)}"><svg class="vtc-callout__leader" width="${m*2}" height="${m*2}" style="margin-left:${-m}px;margin-top:${-m}px" aria-hidden="true"><polyline points="${g}" fill="none" stroke="${c}" stroke-width="${l}" stroke-linejoin="round" stroke-linecap="round" />`+(u>0?`<circle cx="${p}" cy="${p}" r="${u/2}" fill="${c}" />`:"")+`</svg>${v}</div>`}if(n.form==="image"){const a=ja(n,e)??"",c=n.width??120,l=n.height??120;return`<div class="vtc-hotspot vtc-hotspot--image"><img src="${bt(a)}" alt="" draggable="false" style="width:${c}px;height:${l}px;object-fit:contain" /></div>`}const s=i.effect&&i.effect!=="none"?i.effect:null,r=s&&Yy.has(s)?'<span class="vtc-hotspot__fx"></span>':"",o=i.text?`<span class="vtc-hotspot__text" style="color:${i.textColor};font-size:${i.fontSize}px">${bt(i.text)}</span>`:"";return`<div class="vtc-hotspot${s?` vtc-fx-${s}`:""}" style="${Tu(i,s)}"><span class="vtc-hotspot__core">${r}<span class="vtc-hotspot__chip" style="${bu(i)}"><span class="vtc-hotspot__icon" style="width:${i.size}px;height:${i.size}px;">${qy(i,e)}</span></span></span>${o}</div>`}function Au(n){const e=n.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);if(e)return`<iframe class="vtc-info__video" src="https://www.youtube.com/embed/${bt(e[1])}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;const t=n.match(/vimeo\.com\/(\d+)/);return t?`<iframe class="vtc-info__video" src="https://player.vimeo.com/video/${bt(t[1])}" allow="autoplay; fullscreen" allowfullscreen></iframe>`:`<video class="vtc-info__video" src="${bt(nt(n))}" controls></video>`}function Zy(n,e){const t=ja(n,e),i=[];return n.title&&i.push(`<div class="vtc-info__title">${bt(n.title)}</div>`),t&&i.push(`<img class="vtc-info__img" src="${bt(t)}" alt="" />`),n.videoUrl&&i.push(Au(n.videoUrl)),n.text&&i.push(`<div class="vtc-info__text">${bt(n.text)}</div>`),i.length?`<div class="vtc-info">${i.join("")}</div>`:""}function Ky(n,e){if(e)return n.scenes.find(t=>t.id===e)}function Jy(n){return Ky(n,n.runtime.startSceneId)??n.scenes[0]}function Qy(n){return n.layers.filter(e=>e.visible).flatMap(e=>e.hotspots)}function Za(n,e){for(const t of n.layers){const i=t.hotspots.find(s=>s.id===e);if(i)return{scene:n,layer:t,hotspot:i}}}function Cu(n,e){return(n.on??[]).filter(t=>t.event===e).flatMap(t=>t.actions)}function Ka(n,e,t){for(const i of n.on??[])if(!(t&&i.event!==t)){for(const s of i.actions)if(s.type===e)return s}}function eE(n){const e=n.hotspot?Ka(n.hotspot,"goto"):null;return e?n.tour?.scenes.find(t=>t.id===e.targetSceneId)??null:null}function Ru(n,e){if(!n||!n.includes("{{"))return n??"";const t=eE(e);return n.replace(/\{\{\s*([a-z.]+)\s*\}\}/gi,(i,s)=>{switch(s.toLowerCase()){case"scene.name":return e.scene?.name??"";case"scene.subtitle":return e.scene?.subtitle??"";case"target.name":return t?.name??"";case"target.subtitle":return t?.subtitle??"";case"tour.title":return e.tour?.title??"";default:return i}})}const tE=(n,e)=>e;function Ja(n,e,t){const i=t.t??tE,s=Ka(e,"info","hover"),r=s??Ka(e,"info");if(r){const o={...r,title:i(`${e.id}.info.title`,r.title),text:i(`${e.id}.info.text`,r.text)},a=Zy(o,t.assets);if(a)return n.tooltip={content:a,trigger:s?"hover":"click",position:"top center",className:"vtc-info-tip"},n}if(e.tooltip){const o=Ru(i(`${e.id}.tooltip`,e.tooltip),{...t.tokens,hotspot:e});o&&(n.tooltip={content:bt(o),position:"top center"})}return n}function Pu(n,e){const t=ox(n,e.components),i=n.visible===!1,s={id:n.id,className:"vtc-hotspot-marker"+(e.selected?" is-selected":"")+(i?" is-hidden":""),data:{hotspotId:n.id},visible:e.showHidden?!0:!i};if(n.geometry.kind==="polygon"){const a=n.geometry.points,c={...s,visible:s.visible&&a.length>=3,polygon:a.map(l=>[l.yaw,l.pitch]),svgStyle:{fill:t.fill||t.background||"#3b82f6",fillOpacity:String(t.fillOpacity??.28),stroke:t.stroke||t.iconColor||"#ffffff",strokeWidth:`${t.strokeWidth??2}px`}};return Ja(c,n,e)}const r={yaw:n.geometry.yaw,pitch:n.geometry.pitch};if(n.form==="image"&&n.perspective){const a=ja(n,e.assets);if(a){const c={...s,imageLayer:a,position:r,size:{width:n.width??120,height:n.height??120}};return Ja(c,n,e)}}const o={...s,position:r,html:jy(n,e.assets,t.text?{...t,text:Ru(t.text,{...e.tokens,hotspot:n})}:t),anchor:"center center",...t.scaleWithZoom?{scale:[.7,1.4]}:{}};return Ja(o,n,e)}function Lu(n){return n.kind==="tiled"?"equirect-tiles":n.kind==="cube"?"cubemap":"equirect"}function nE(n){const e=new Set(n.scenes.map(t=>Lu(t.source)));return e.has("cubemap")&&e.size>1?{kind:"cubemap",conflict:n.scenes.filter(i=>Lu(i.source)!=="cubemap").map(i=>i.id)}:e.has("cubemap")?{kind:"cubemap"}:e.has("equirect-tiles")?{kind:"equirect-tiles"}:{kind:"equirect"}}function iE(n,e={}){if(e.preferProxy&&n.proxy)return nt(n.proxy);const t=n.source;if(t.kind==="single")return nt(t.src);if(t.kind==="cube"){const i=t.faces;return{left:nt(i.nx),front:nt(i.pz),right:nt(i.px),back:nt(i.nz),top:nt(i.py),bottom:nt(i.ny)}}return{width:t.width,cols:t.cols,rows:t.rows,baseUrl:nt(`${t.dir}/base.jpg`),tileUrl:(i,s)=>nt(`${t.dir}/tile_${i}_${s}.jpg`)}}function sE(){const n=globalThis.localStorage;try{return n?.getItem("__probe__"),n}catch{return}}function _o(n,e){if(e==="boolean")return n===!0||n==="true"||n===1;if(e==="number"){const t=typeof n=="number"?n:Number(n);return Number.isFinite(t)?t:0}return n==null?"":String(n)}class Du{constructor(e,t={}){it(this,"types",new Map);it(this,"initial",new Map);it(this,"persisted",new Set);it(this,"values",new Map);it(this,"listeners",new Set);it(this,"storage");it(this,"storageKey");this.storageKey=`tour-studio:vars:${t.tourId??"tour"}`,this.storage=t.storage===null?void 0:t.storage??sE();for(const i of e)this.types.set(i.name,i.type),this.initial.set(i.name,_o(i.initial,i.type)),i.persist&&this.persisted.add(i.name);this.reset()}reset(){if(this.values=new Map(this.initial),!(!this.storage||this.persisted.size===0))try{const e=JSON.parse(this.storage.getItem(this.storageKey)??"{}");for(const t of this.persisted)t in e&&this.values.set(t,_o(e[t],this.types.get(t)))}catch{}}has(e){return this.types.has(e)}get(e){return this.values.get(e)}snapshot(){return Object.fromEntries(this.values)}set(e,t){const i=this.types.get(e);if(!i)return!1;const s=_o(t,i);if(this.values.get(e)===s)return!0;this.values.set(e,s),this.save();for(const r of this.listeners)r(e,s);return!0}apply(e){if(!this.types.get(e.variable))return!1;const i=this.values.get(e.variable);if(e.op==="toggle")return this.set(e.variable,!i);if(e.op==="add"){const s=typeof e.value=="number"?e.value:Number(e.value??0);return this.set(e.variable,Number(i??0)+(Number.isFinite(s)?s:0))}return this.set(e.variable,e.value??"")}test(e){if(!e)return!0;const t=this.types.get(e.variable);if(!t)return!1;const i=this.values.get(e.variable);if(e.op==="truthy")return!!i;if(e.op==="falsy")return!i;const s=_o(e.value,t);switch(e.op){case"eq":return i===s;case"ne":return i!==s;case"gt":return i>s;case"lt":return i<s;case"gte":return i>=s;case"lte":return i<=s;default:return!1}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}save(){if(!this.storage||this.persisted.size===0)return;const e={};for(const t of this.persisted){const i=this.values.get(t);i!==void 0&&(e[t]=i)}try{this.storage.setItem(this.storageKey,JSON.stringify(e))}catch{}}}const Iu=3,Nu="__tour-draft",rE="__tour-draft-v",oE={effect:"none",rotation:!1,showLoader:!1},aE=62,lE={kind:"fade",durationMs:400};function Uu(n){return cE(n??lE)}function cE(n){if(n.kind==="none")return oE;const e={showLoader:!1,effect:"fade",speed:n.durationMs,rotation:!1};return n.kind==="zoom-blend"?{...e,rotation:!1,zoomTo:aE}:e}function hE(n){if(!n.length)return null;let e=0,t=0,i=0;for(const s of n)e+=Math.cos(s.pitch)*Math.cos(s.yaw),t+=Math.sin(s.pitch),i+=Math.cos(s.pitch)*Math.sin(s.yaw);return{yaw:Math.atan2(i,e),pitch:Math.atan2(t,Math.hypot(e,i))}}class dE{constructor(e,t={},i={}){it(this,"viewer",null);it(this,"vt",null);it(this,"markers",null);it(this,"container");it(this,"callbacks");it(this,"options");it(this,"doc",null);it(this,"currentSceneId",null);it(this,"editMode",!1);it(this,"selectedHotspotIds",[]);it(this,"runtimeHidden",new Set);it(this,"draftPoints",null);it(this,"draftIds",new Set);it(this,"audio",new Vy);it(this,"vars");it(this,"onGrabStart",e=>{if(e.target?.closest?.(".psv-marker, .vtc-hotspot-marker")||this.restingCursor!=="grab")return;this.viewer?.setCursor("grabbing");const t=()=>{this.viewer?.setCursor(this.restingCursor),window.removeEventListener("pointerup",t),window.removeEventListener("pointercancel",t)};window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t)});it(this,"onPointerDown",e=>{if(!this.editMode||!this.viewer)return;const t=e.target?.closest?.(".psv-marker");if(!t)return;const i=t.id.replace("psv-marker-","");e.stopPropagation(),e.preventDefault();const s=e.shiftKey||e.metaKey||e.ctrlKey;if(this.hotspotById(i)?.geometry.kind==="polygon"){this.callbacks.onHotspotSelected?.(i,s);return}if(s){this.callbacks.onHotspotSelected?.(i,!0);return}this.startMarkerDrag(e,i)});it(this,"restingCursor","grab");this.container=e,this.callbacks=t,this.options=i,this.vars=new Du([]),this.container.addEventListener("pointerdown",this.onPointerDown,!0),this.container.addEventListener("pointerdown",this.onGrabStart)}get variables(){return this.vars}get isLive(){return this.viewer!==null}get sceneId(){return this.currentSceneId}get psv(){return this.viewer}setEditMode(e){this.editMode!==e&&(this.editMode=e,this.applyMarkers())}setSelected(e){const t=e==null?[]:Array.isArray(e)?e:[e];t.length===this.selectedHotspotIds.length&&t.every((i,s)=>this.selectedHotspotIds[s]===i)||(this.selectedHotspotIds=t,this.applyMarkers())}setDraft(e){this.draftPoints=e?.length?e.map(t=>({yaw:t.yaw,pitch:t.pitch})):null,this.renderDraft()}load(e,t){if(this.doc=e,this.container.style.setProperty("--tour-accent",e.theme.accent),this.vars=new Du(e.variables,{tourId:e.id}),this.audio.setMuted(!!e.runtime.audio?.muted),e.scenes.length===0){this.destroyViewer();return}const i=t&&e.scenes.find(r=>r.id===t)||Jy(e),s=e.scenes.map(r=>this.toNode(r));this.viewer?this.vt.setNodes(s,i.id):this.create(s,i)}setDoc(e){const t=this.doc;if(this.doc=e,this.container.style.setProperty("--tour-accent",e.theme.accent),(!t||t.scenes.length!==e.scenes.length||e.scenes.some((s,r)=>{const o=t.scenes[r];return!o||o.id!==s.id||JSON.stringify(o.source)!==JSON.stringify(s.source)}))&&this.viewer){this.vt.setNodes(e.scenes.map(s=>this.toNode(s)),this.currentSceneId??void 0);return}this.applyMarkers()}toNode(e){return{id:e.id,panorama:iE(e,this.options),name:e.name,caption:e.name,thumbnail:nt(e.thumbnail),markers:this.markersFor(e),links:[],...e.north!=null||e.tilt!=null||e.roll!=null?{sphereCorrection:{pan:e.north??0,tilt:e.tilt??0,roll:e.roll??0}}:{}}}markersFor(e){const t=this.doc;return Qy(e).map(i=>Pu(i,{assets:t.assets,components:t.components,tokens:{tour:t,scene:e},selected:this.selectedHotspotIds.includes(i.id),showHidden:this.editMode,t:this.options.t}))}create(e,t){const s=this.doc.runtime;this.viewer=new G0({container:this.container,...this.options.adapter?{adapter:this.options.adapter}:{},defaultYaw:t.initialView.yaw,defaultPitch:t.initialView.pitch,...t.initialView.fov!=null?{defaultZoomLvl:t.initialView.fov}:{},...s.minFov!=null?{minFov:s.minFov}:{},...s.maxFov!=null?{maxFov:s.maxFov}:{},navbar:!1,mousemove:!0,touchmoveTwoFingers:!1,plugins:[[ru,{gotoMarkerSpeed:"6rpm"}],[Eu,{dataMode:"client",positionMode:"manual",nodes:e,startNodeId:t.id,preload:!0,transitionOptions:()=>Uu(void 0)}]]}),this.vt=this.viewer.getPlugin(Eu),this.markers=this.viewer.getPlugin(ru),this.viewer.setCursor(this.restingCursor),this.viewer.addEventListener("load-progress",r=>{this.setProgress(r.progress)}),this.viewer.addEventListener("panorama-loaded",()=>this.setProgress(null)),this.viewer.addEventListener("ready",()=>this.setProgress(null)),this.vt.addEventListener("node-changed",r=>{const o=this.currentSceneId;this.currentSceneId=r.node.id,this.runtimeHidden.clear(),this.draftPoints=null,this.draftIds.clear(),this.applyMarkers(),o&&o!==r.node.id&&this.runSceneEvent(o,"unload"),this.startSceneAudio(),this.runSceneEvent(r.node.id,"load"),this.callbacks.onSceneChanged?.(r.node.id)}),this.markers.addEventListener("select-marker",r=>{this.editMode||this.runHotspotEvent(Qa(r.marker),"click")}),this.markers.addEventListener("enter-marker",r=>{this.editMode||this.runHotspotEvent(Qa(r.marker),"hover")}),this.markers.addEventListener("leave-marker",r=>{this.editMode||this.runHotspotEvent(Qa(r.marker),"leave")}),this.viewer.addEventListener("click",r=>{r.data.rightclick||r.data.marker||this.callbacks.onSphereClick?.({yaw:r.data.yaw,pitch:r.data.pitch})}),this.viewer.addEventListener("position-updated",r=>{this.callbacks.onViewChanged?.({yaw:r.position.yaw,pitch:r.position.pitch})}),this.currentSceneId=t.id,this.startSceneAudio(),this.runSceneEvent(t.id,"load")}runHotspotEvent(e,t){if(!e||!this.doc||!this.currentSceneId)return;const i=this.doc.scenes.find(r=>r.id===this.currentSceneId),s=i&&Za(i,e);s&&Su(Cu(s.hotspot,t),this.deps())}runSceneEvent(e,t){const i=this.doc?.scenes.find(s=>s.id===e);i?.on?.length&&Su(Cu(i,t),this.deps())}trigger(e,t){this.runHotspotEvent(e,t)}deps(){return{...this.options.host,variables:this.vars,goTo:(e,t,i)=>this.goToScene(e,t,i),lookAt:(e,t,i)=>this.lookAt(e,t,i),toggleHotspots:(e,t)=>this.setHotspotsVisible(e,t),playAudio:(e,t)=>this.audio.toggle(e,{loop:t}),resolveMedia:(e,t)=>{const i=e?this.doc?.assets.find(s=>s.id===e):void 0;return nt(i?.src??t)},onUnsupported:this.callbacks.onUnsupportedAction}}hotspotById(e){const t=this.doc?.scenes.find(i=>i.id===this.currentSceneId);return t?Za(t,e)?.hotspot:void 0}startMarkerDrag(e,t){const i=this.container.getBoundingClientRect(),s=e.clientX,r=e.clientY;let o=!1,a=null;const c=u=>{if(!o&&(Math.abs(u.clientX-s)>Iu||Math.abs(u.clientY-r)>Iu)&&(o=!0),!o)return;const d=this.viewer.dataHelper.viewerCoordsToSphericalCoords({x:u.clientX-i.left,y:u.clientY-i.top});a={yaw:d.yaw,pitch:d.pitch};const m=this.hotspotById(t);m&&this.markers?.updateMarker(Pu({...m,geometry:{kind:"point",...a}},{assets:this.doc.assets,components:this.doc.components,tokens:{tour:this.doc,scene:this.doc.scenes.find(p=>p.id===this.currentSceneId)},selected:!0,showHidden:!0,t:this.options.t}))},l=()=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),o&&a?this.callbacks.onHotspotMoved?.(t,a):this.callbacks.onHotspotSelected?.(t)};window.addEventListener("pointermove",c),window.addEventListener("pointerup",l)}goToScene(e,t,i){if(!this.vt||e===this.currentSceneId)return;const s=this.doc?.scenes.find(c=>c.id===e);if(!s)return;const r=Uu(i),o=t??s.initialView,a=i?.kind==="zoom-blend";this.vt.setCurrentNode(e,{...r,...a?{}:{rotateTo:{yaw:o.yaw,pitch:o.pitch}}})}setProgress(e){const t=this.progressBar();if(t){if(e==null||e>=100){t.style.opacity="0",t.style.width="0%";return}t.style.opacity="1",t.style.width=`${Math.max(0,Math.min(100,e))}%`}}progressBar(){if(!this.container)return null;let e=this.container.querySelector(":scope > .tour-progress");return e||(e=document.createElement("div"),e.className="tour-progress",this.container.appendChild(e)),e}setCursor(e){this.restingCursor=e,this.viewer?.setCursor(e)}focusHotspot(e){const t=this.doc?.scenes.find(o=>o.id===this.currentSceneId),i=t&&Za(t,e);if(!i||!this.viewer)return;const s=i.hotspot.geometry,r=s.kind==="point"?{yaw:s.yaw,pitch:s.pitch}:hE(s.points);r&&this.viewer.rotate(r)}lookAt(e,t,i){this.viewer?.animate({yaw:e,pitch:t,...i!=null?{zoom:i}:{},speed:"6rpm"})}focusPoint(e){this.viewer?.animate({yaw:e.yaw,pitch:e.pitch,speed:"8rpm"})}refreshSize(){this.viewer?.autoSize()}getPosition(){if(!this.viewer)return null;const e=this.viewer.getPosition();return{yaw:e.yaw,pitch:e.pitch}}pointAt(e,t){if(!this.viewer)return null;const i=this.container.getBoundingClientRect(),s=this.viewer.dataHelper.viewerCoordsToSphericalCoords({x:e-i.left,y:t-i.top});return{yaw:s.yaw,pitch:s.pitch}}setHotspotsVisible(e,t){if(this.markers)for(const i of e){const s=t==="hide"?!0:t==="show"?!1:!this.runtimeHidden.has(i);s?this.runtimeHidden.add(i):this.runtimeHidden.delete(i);try{this.markers.toggleMarker(i,!s)}catch{}}}applyMarkers(){const e=this.doc?.scenes.find(t=>t.id===this.currentSceneId);if(!(!e||!this.markers)){this.markers.setMarkers(this.markersFor(e));for(const t of this.runtimeHidden)try{this.markers.hideMarker(t)}catch{}this.renderDraft()}}renderDraft(){if(!this.markers)return;for(const r of this.draftIds)try{this.markers.removeMarker(r)}catch{}this.draftIds.clear();const e=this.draftPoints;if(!e?.length)return;const t=this.doc?.theme.accent??"#3b82f6",i=r=>{this.markers.addMarker(r),this.draftIds.add(r.id)},s=e.map(r=>[r.yaw,r.pitch]);e.length>=3?i({id:Nu,polygon:s,className:"vtc-draft",svgStyle:{fill:t,fillOpacity:"0.22",stroke:"#ffffff",strokeWidth:"2px",strokeDasharray:"6 4"}}):e.length===2&&i({id:Nu,polyline:s,className:"vtc-draft",svgStyle:{stroke:"#ffffff",strokeWidth:"2px",strokeDasharray:"6 4",fill:"none"}}),e.forEach((r,o)=>{i({id:`${rE}${o}`,position:{yaw:r.yaw,pitch:r.pitch},html:`<span class="vtc-draft-dot${o===0?" is-first":""}"></span>`,anchor:"center center",className:"vtc-draft-vertex"})})}startSceneAudio(){const t=this.doc?.scenes.find(s=>s.id===this.currentSceneId)?.audio;if(!t){this.audio.setAmbient(null);return}const i=t.assetId?this.doc?.assets.find(s=>s.id===t.assetId):void 0;this.audio.setAmbient(i?.src??t.src,{loop:t.loop!==!1,volume:t.volume})}destroyViewer(){this.viewer?.destroy(),this.viewer=null,this.vt=null,this.markers=null,this.currentSceneId=null}destroy(){this.container.removeEventListener("pointerdown",this.onPointerDown,!0),this.container.removeEventListener("pointerdown",this.onGrabStart),this.audio.stopAll(),this.destroyViewer()}}function Qa(n){return n.data?.hotspotId??n.id}const Fu='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';function uE(n){if(!n)return"";const{title:e,text:t,image:i,...s}=n,r=[];e&&r.push(`<h2>${bt(String(e))}</h2>`),i&&r.push(`<img src="${bt(nt(String(i)))}" alt="" />`),t&&r.push(`<p>${bt(String(t))}</p>`);for(const[o,a]of Object.entries(s))a==null||a===""||r.push(`<p class="tp-kv"><span>${bt(o)}</span>${bt(String(a))}</p>`);return r.join("")}function fE(n,e){const t=document.createElement("div");t.className="tour-player-host",n.appendChild(t);let i=null;const s=h=>{h.key!=="Escape"||!i||(i(),h.stopPropagation())};document.addEventListener("keydown",s);let r=null;const o=()=>{r?.remove(),r=null,i=c?.classList.contains("open")?d:null},a=(h,M)=>{o();const w=document.createElement("div");return w.className=`tp-overlay ${h}`,w.innerHTML=`<button class="tp-close" aria-label="Close">${Fu}</button><div class="tp-overlay-body">${M}</div>`,w.addEventListener("click",E=>{(E.target===w||E.target.closest(".tp-close"))&&o()}),t.appendChild(w),r=w,i=o,w};let c=null,l=null;const u=()=>c||(c=document.createElement("aside"),c.className="tp-panel",c.innerHTML=`<button class="tp-close" aria-label="Close">${Fu}</button><div class="tp-panel-body"></div>`,c.querySelector(".tp-close").addEventListener("click",()=>d()),t.appendChild(c),c);function d(){c?.classList.remove("open"),l=null,i=r?o:null}const m=(h,M)=>{const w=u();w.querySelector(".tp-panel-body").innerHTML=uE(M),w.classList.add("open"),l=h,i=d};let p=null;const g=()=>{p?.pause(),p=null,"speechSynthesis"in window&&window.speechSynthesis.cancel()},v={playVideo(h){a("tp-video",Au(nt(h)??h))},openUrl(h,M){if(M==="blank"){window.open(h,"_blank","noopener,noreferrer");return}a("tp-frame",`<iframe src="${bt(h)}" title="" referrerpolicy="no-referrer"></iframe>`)},showImage(h){a("tp-image",`<img src="${bt(nt(h)??h)}" alt="" />`)},openPanel(h,M,w){M==="close"||M==="toggle"&&l===h?d():m(h,w)},animate(h,M,w){for(const E of h){const A=document.getElementById(`psv-marker-${E}`);A&&(A.classList.remove(`tp-anim-${M}`),A.offsetWidth,A.classList.add(`tp-anim-${M}`),window.setTimeout(()=>A.classList.remove(`tp-anim-${M}`),w??1200))}},narrate({text:h,src:M}){if(g(),M){p=new Audio(nt(M)??M),p.play().catch(()=>{});return}h&&"speechSynthesis"in window&&window.speechSynthesis.speak(new SpeechSynthesisUtterance(h))},showModel(h){const M=nt(h)??h;a("tp-model",`<p>This tour includes a 3D model.</p><p><a href="${bt(M)}" download>Download the model</a></p>`)}},f=h=>{t.style.setProperty("--tp-accent",h.theme.accent),t.style.setProperty("--tp-panel-bg",h.theme.panelBg),t.style.setProperty("--tp-radius",h.theme.radius)};return f(e),{effects:v,setTheme:f,clear(){o(),d(),g()},destroy(){g(),document.removeEventListener("keydown",s),t.remove()}}}const Ou={restart:[{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},{d:"M3 3v5h5"}],close:[{d:"M18 6 6 18"},{d:"m6 6 12 12"}],next:[{d:"m9 18 6-6-6-6"}],back:[{d:"m15 18-6-6 6-6"}],up:[{d:"m18 15-6-6-6 6"}],down:[{d:"m6 9 6 6 6-6"}],collapse:[{d:"m6 9 6 6 6-6"}],expand:[{d:"m18 15-6-6-6 6"}],scenes:[{d:"M3 5h.01"},{d:"M3 12h.01"},{d:"M3 19h.01"},{d:"M8 5h13"},{d:"M8 12h13"},{d:"M8 19h13"}],language:[{d:"M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12Z"},{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"},{d:"M2 12h20"}],vr:[{d:"M2 15A4 4 0 1 0 10 15A4 4 0 1 0 2 15Z"},{d:"M14 15A4 4 0 1 0 22 15A4 4 0 1 0 14 15Z"},{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"},{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"},{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}],drag:[{d:"M12 2v20"},{d:"m15 19-3 3-3-3"},{d:"m19 9 3 3-3 3"},{d:"M2 12h20"},{d:"m5 9-3 3 3 3"},{d:"m9 5 3-3 3 3"}],check:[{d:"M20 6 9 17l-5-5"}],cross:[{d:"M18 6 6 18"},{d:"m6 6 12 12"}],play:[{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",filled:!0}],pause:[{d:"M15 3H18A1 1 0 0 1 19 4V20A1 1 0 0 1 18 21H15A1 1 0 0 1 14 20V4A1 1 0 0 1 15 3Z",filled:!0},{d:"M6 3H9A1 1 0 0 1 10 4V20A1 1 0 0 1 9 21H6A1 1 0 0 1 5 20V4A1 1 0 0 1 6 3Z",filled:!0}],lock:[{d:"M5 11H19A2 2 0 0 1 21 13V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V13A2 2 0 0 1 5 11Z",filled:!0},{d:"M7 11V7a5 5 0 0 1 10 0v4"}],unlocked:[{d:"M5 11H19A2 2 0 0 1 21 13V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V13A2 2 0 0 1 5 11Z",filled:!0},{d:"M7 11V7a5 5 0 0 1 9.9-1"}],sound:[{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"},{d:"M16 9a5 5 0 0 1 0 6"},{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}],mute:[{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"},{d:"M22 9L16 15"},{d:"M16 9L22 15"}]};function pE(n){return Ou[n]??[]}function ar(n,e=20){const t=Ou[n];if(!t)return"";const i=t.map(s=>`<path d="${s.d}" `+(s.filled?'fill="currentColor" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round"/>':'fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>')).join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" aria-hidden="true">${i}</svg>`}const ku={next:"Next",back:"Back",questions:"questions",question:"question",answer:"Answer to continue",check:"Check",correct:"Correct!",wrong:"Not quite",continue:"Continue",finish:"Finish",scenes:"Scenes",restart:"Start again",mute:"Sound off",unmute:"Sound on",progress:"Progress",done:"done",correctOf:"questions right, out of",visitedOf:"places visited, out of",score:"Your score",play:"Listen",pause:"Pause",close:"Close",locked:"Answer the earlier questions first",menuScenes:"Scenes",menuSound:"Sound",menuRestart:"Restart",welcomeTitle:"Welcome!",welcomeGo:"Let's go",welcomeSkip:"Skip",howLook:"Drag the picture to look around",howLookMore:"Every place is a full 360° photo — turn all the way round.",howListen:"Listen or read the guide",howListenMore:"The card at the bottom tells you about each place.",howQuiz:"Answer 2 questions to move on",howQuizMore:"Each place unlocks the next one. There are {scenes} places to visit."},Bu={zh:{next:"下一站",back:"上一站",questions:"題",question:"題",answer:"答對才能繼續",check:"確認",correct:"答對了！",wrong:"再想想",continue:"繼續",finish:"完成",scenes:"所有地點",restart:"重新開始",mute:"關閉聲音",unmute:"開啟聲音",progress:"進度",done:"題完成",correctOf:"題答對，總共",visitedOf:"個地點去過，總共",score:"你的成績",play:"聽解說",pause:"暫停",close:"關閉",locked:"要先答完前面的題目喔",menuScenes:"地點",menuSound:"聲音",menuRestart:"重來",welcomeTitle:"歡迎！",welcomeGo:"出發！",welcomeSkip:"跳過",howLook:"拖曳畫面就能環顧四周",howLookMore:"每個地點都是 360° 全景，可以轉一整圈喔。",howListen:"聽解說或閱讀文字",howListenMore:"下方的卡片會介紹每個地點。",howQuiz:"答對 2 題就能前往下一站",howQuizMore:"每一站會解鎖下一站，總共有 {scenes} 個地點。"}};function zu(n){return Bu[n]??Bu[n.split("-")[0].toLowerCase()]??{}}const Me=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},Jn=(n,e,t)=>{const i=document.createElement("button");return i.type="button",i.className=n,i.textContent=e,i.addEventListener("click",t),i},mE=(n,e,t,i)=>{const s=document.createElement("button");return s.type="button",s.className=n,s.title=t,s.setAttribute("aria-label",t),s.innerHTML=ar(e),s.addEventListener("click",i),s},el=(n,e)=>{n.textContent!==e&&(n.textContent=e)},gE=/SDG\s*0?(\d{1,2})\b/gi,vE=(n,e,t)=>{const i=`${t}\0${e}`;if(n.dataset.rich===i)return;n.dataset.rich=i;const s=[];let r=0;for(const o of e.matchAll(gE)){const a=Da(Number(o[1]));if(!a)continue;const c=o.index??0;c>r&&s.push(document.createTextNode(e.slice(r,c)));const l=Me("span","tg-sdg-pill",o[0]);l.style.background=a.color,l.style.color=vd(a.color),l.title=_d(a,t),s.push(l),r=c+o[0].length}r<e.length&&s.push(document.createTextNode(e.slice(r))),n.replaceChildren(...s)},gs=(n,e,t=20)=>{const i=e?`${e}:${t}`:"";n.dataset.icon!==i&&(n.dataset.icon=i,n.innerHTML=e?ar(e,t):"")},Un=(n,e,t,i=!1)=>{const s=`${e}:${t}:${i}`;if(n.dataset.icon===s)return n;n.dataset.icon=s;const r=ar(e,16);return n.innerHTML=i?`<span>${t}</span>${r}`:`${r}<span>${t}</span>`,n};function _E(n,e,t){let i=e,s=t.locale,r={...ku,...t.strings},o=null,a=!1,c=!1;const l={given:new Map,correct:new Set,visited:new Set},u=new Audio;u.preload="none";const d=Me("div","tg");n.appendChild(d);const m=Me("div","tg-top"),p=Me("img","tg-logo");p.alt="",p.hidden=!0;const g=Me("div","tg-menu"),v=O=>O.toLowerCase().startsWith("zh")?"中文":O.split("-")[0].toUpperCase(),f=Me("div","tg-lang-seg"),h=new Map;for(const O of t.locales??[]){const k=Jn("tg-lang-opt",v(O),()=>t.onLocale?.(O));k.title=O,h.set(O,k),f.append(k)}f.hidden=(t.locales??[]).length<2;const M=Jn("tg-menu-btn","",()=>le(!!A.hidden)),w=Jn("tg-menu-btn","",()=>{a=!a,a&&ve(),z(),Se()}),E=Jn("tg-menu-btn","",()=>{confirm(r.restart+"?")&&(l.given.clear(),l.correct.clear(),l.visited.clear(),ve(),t.onRestart(),ae())});g.append(w,E,M,f);const A=Me("div","tg-panel");A.hidden=!0;const C=Me("div","tg-card"),P=Me("h1","tg-card-title"),D=Me("p","tg-card-text"),S=Me("div","tg-card-voice"),x=Me("img","tg-avatar");x.alt="";const T=Me("button","tg-play"),B=mE("tg-card-toggle","collapse","Hide",()=>{const O=C.classList.toggle("shut");gs(B,O?"expand":"collapse",14),O&&ve()});S.append(x,T),C.append(P,D,S,B);const W=Me("div","tg-bar"),G=Me("div","tg-track"),J=Me("span","tg-track-line"),V=Me("span","tg-track-fill"),Y=Me("div","tg-dots"),H=Me("div","tg-tip");H.hidden=!0;const Q=Me("span","tg-row-lock"),j=Me("span","tg-row-name"),ee=Me("span","tg-row-marks");H.append(Q,j,ee),G.append(J,V,Y,H);const xe=Me("span","tg-count");W.append(G,xe);const Oe=Me("div","tg-nav"),We=Me("button","tg-nav-btn back"),q=Me("button","tg-nav-btn next");Oe.append(We,q);const ce=Me("div","tg-modal");ce.hidden=!0;const oe=Me("div","tg-welcome");oe.hidden=!0;const Le=()=>`tour-welcome:${i.id}`;m.append(p,g),d.append(m,A,C,Oe,W,ce,oe);const be=()=>i.scenes,Ue=O=>i.scenes.find(k=>k.id===O)??null,pt=O=>i.scenes.findIndex(k=>k.id===O),$e=()=>i.quiz&&i.quiz.enabled!==!1&&i.quiz.questions.length?i.quiz:null,R=O=>($e()?.questions??[]).filter(k=>k.sceneId===O&&!gd(k)),st=O=>{const k=R(O);return k.length===0||k.every(N=>l.given.has(N.id))},Re=()=>$e()?.gate==="scene",Ze=O=>{const k=O?.guide?.audio?.[s]??O?.guide?.audio?.[i.locales.default];return k?nt(k)??null:null},ve=()=>{u.pause(),u.currentTime=0,T.classList.remove("playing"),Un(T,"play",r.play)},lt=(O=!1)=>{if(O&&C.classList.contains("shut"))return;const k=Ze(Ue(o));!k||a||(u.src!==new URL(k,location.href).href&&(u.src=k),u.play().then(()=>{T.classList.add("playing"),Un(T,"pause",r.pause)},()=>ve()))},ye=()=>{if(!a){if(!u.paused){ve();return}lt()}};u.addEventListener("ended",ve),T.addEventListener("click",ye);let Be=null;const mt=()=>{ce.hidden=!0,ce.replaceChildren(),Be=null,ae()},gt=(O,k)=>{const N=O[k];if(!N){mt();return}const ie=Ue(N.sceneId??o),Ee=Ax(ie?.guide?.sdgs),qe=k+1,ke=Me("div","tg-quiz");ke.style.setProperty("--sdg",Ee);const yt=Me("div","tg-quiz-bands");for(const qt of ie?.guide?.sdgs??[]){const Vt=Da(qt);if(!Vt)continue;const Ft=Me("div","tg-band");Ft.style.background=Vt.color,Ft.style.color=vd(Vt.color),Ft.append(Me("span","tg-band-n",`SDG ${Vt.n}`),Me("span","tg-band-name",_d(Vt,s))),yt.append(Ft)}const vt=Me("div","tg-quiz-head");vt.append(Me("span","tg-quiz-count",`${k+1} / ${O.length}`));const Jt=Me("p","tg-quiz-prompt",N.prompt),Ct=Me("div","tg-answers"),pn=Me("div","tg-feedback");pn.hidden=!0;const xo=i.quiz?.shuffleAnswers?Mx(N.answers,qe):N.answers;let Qt=[],Qn=!1;const yo=()=>{if(Qn||!Qt.length)return;Qn=!0,l.given.set(N.id,Qt);const qt=md(N,Qt);qt&&l.correct.add(N.id);const Vt=(i.quiz?.feedback??"immediate")==="immediate";pn.hidden=!1,pn.className=`tg-feedback ${Vt?qt?"right":"wrong":"noted"}`,pn.replaceChildren((()=>{const Ft=Me("strong","");return Vt?Ft.textContent=qt?r.correct:r.wrong:Ft.innerHTML=ar("check",18),Ft})(),...Vt&&N.explanation?[Me("span","",N.explanation)]:[]);for(const Ft of Ct.querySelectorAll("button")){const Ui=Ft;if(Ui.disabled=!0,!Vt)continue;N.answers.find(tl=>tl.id===Ui.dataset.id)?.correct?Ui.classList.add("is-right"):Qt.includes(Ui.dataset.id)&&Ui.classList.add("is-wrong")}On.textContent=k+1===O.length?r.finish:r.continue,On.disabled=!1,ae()},On=Jn("tg-quiz-go",r.check,()=>{Qn?gt(O,k+1):yo()});On.disabled=!0;for(const qt of xo){const Vt=Jn("tg-answer",qt.text,()=>{if(!Qn){N.kind==="multiple"?Qt=Qt.includes(qt.id)?Qt.filter(Ft=>Ft!==qt.id):[...Qt,qt.id]:Qt=[qt.id];for(const Ft of Ct.querySelectorAll("button"))Ft.classList.toggle("on",Qt.includes(Ft.dataset.id));On.disabled=!Qt.length}});Vt.dataset.id=qt.id,Ct.append(Vt)}ke.append(yt,vt,Jt,Ct,pn,On),ce.replaceChildren(ke),ce.hidden=!1,Be=mt},b=()=>{const O=R(o).filter(k=>!l.given.has(k.id));O.length&&(ve(),gt(O,0))},_=()=>{const O=$e();if(!O)return;const k=wx(O,[...l.given].map(([ie,Ee])=>({questionId:ie,given:Ee}))),N=Me("div","tg-quiz tg-score");N.append(Me("p","tg-score-big",`${k.percent}%`),Me("p","tg-quiz-prompt",`${r.score}: ${k.correct} / ${k.questions}`),...k.passed===!0&&O.passMessage?[Me("p","",O.passMessage)]:[],...k.passed===!1&&O.failMessage?[Me("p","",O.failMessage)]:[],Jn("tg-quiz-go",r.close,mt)),ce.replaceChildren(N),ce.hidden=!1,Be=mt},z=()=>{const O=i.logo?nt(i.logo):null;p.hidden=!O,O&&p.getAttribute("src")!==O&&p.setAttribute("src",O),Un(w,a?"mute":"sound",r.menuSound),w.classList.toggle("off",a);const k=a?r.unmute:r.mute;w.title=k,w.setAttribute("aria-label",k),Un(M,"scenes",r.menuScenes),M.title=r.scenes,M.setAttribute("aria-label",r.scenes),M.classList.toggle("on",!A.hidden),Un(E,"restart",r.menuRestart),E.title=r.restart,E.setAttribute("aria-label",r.restart);for(const[N,ie]of h)ie.classList.toggle("on",N===s)},K=O=>be().slice(0,O).every(k=>st(k.id)),te=new Map,Z=()=>{te.clear(),A.replaceChildren(...be().map((O,k)=>{const N=document.createElement("button");N.type="button",N.className="tg-row";const ie=Me("span","tg-row-lock"),Ee=Me("span","tg-row-name",`${k+1}. ${O.name}`),qe=Me("span","tg-row-marks"),ke=R(O.id).map(()=>{const yt=Me("span","tg-mark");return qe.append(yt),yt});return N.append(ie,Ee,qe),N.addEventListener("click",()=>{N.classList.contains("locked")||(le(!1),t.onGoto(O.id))}),te.set(O.id,{row:N,dot:ie,marks:ke}),N}))},Te=()=>{be().forEach((O,k)=>{const N=te.get(O.id);if(!N)return;const ie=Re()&&!K(k),Ee=O.id===o;N.row.classList.toggle("here",Ee),N.row.classList.toggle("locked",ie),N.row.disabled=ie,N.row.title=ie?r.locked:O.name,gs(N.dot,ie?"lock":"unlocked",14),N.dot.classList.toggle("open",!ie);const qe=R(O.id);N.marks.forEach((ke,yt)=>{const vt=qe[yt];if(!vt)return;const Jt=l.given.has(vt.id),Ct=l.correct.has(vt.id);ke.className=`tg-mark${Jt?Ct?" right":" wrong":""}`,gs(ke,Jt?Ct?"check":"cross":"",11),ke.title=Jt?Ct?r.correct:r.wrong:r.answer})})},le=O=>{A.hidden=!O,O&&Te(),M.classList.toggle("on",O)},Se=()=>{const O=Ue(o),k=O?.guide?.text??O?.subtitle??"";if(C.hidden=!k,!k)return;el(P,O?.name??""),P.hidden=!O?.name,vE(D,k,s);const N=O?.guide?.avatar?nt(O.guide.avatar):null;x.hidden=!N,N&&(x.src=N);const ie=Ze(O);T.hidden=!ie,T.toggleAttribute("disabled",a),T.title=a?r.unmute:"",u.paused?Un(T,"play",r.play):Un(T,"pause",r.pause)},Ae=()=>{const O=pt(o),k=be(),N=R(o).filter(Ee=>!l.given.has(Ee.id)).length;We.hidden=O<=0,Un(We,"back",r.back),We.onclick=()=>k[O-1]&&t.onGoto(k[O-1].id);const ie=O===k.length-1;if(Re()&&N>0){q.className="tg-nav-btn next asking",Un(q,"next",`${N} ${N===1?r.question:r.questions}`,!0),q.title=r.answer,q.onclick=b,q.hidden=!1;return}if(q.className="tg-nav-btn next",ie){q.hidden=!$e(),q.textContent=r.score,q.onclick=_;return}q.hidden=!1,Un(q,"next",r.next,!0),q.onclick=()=>k[O+1]&&t.onGoto(k[O+1].id)},ne=new Map,fe=(O,k,N)=>{const ie=Re()&&!K(k);gs(Q,ie?"lock":"unlocked",14),Q.classList.toggle("open",!ie),el(j,`${k+1}. ${O.name}`);const Ee=R(O.id);ee.replaceChildren(...Ee.map(vt=>{const Jt=l.given.has(vt.id),Ct=l.correct.has(vt.id),pn=Me("span",`tg-mark${Jt?Ct?" right":" wrong":""}`);return gs(pn,Jt?Ct?"check":"cross":"",11),pn})),H.hidden=!1;const qe=N.offsetLeft+N.offsetWidth/2,ke=H.offsetWidth/2,yt=G.clientWidth;H.style.left=`${Math.max(ke,Math.min(qe,yt-ke))}px`},Ie=()=>{ne.clear(),Y.replaceChildren(...be().map((O,k)=>{const N=Me("span","tg-dot");return N.addEventListener("click",ie=>{ie.stopPropagation(),!(Re()&&!K(k)||O.id===o)&&t.onGoto(O.id)}),N.addEventListener("pointerenter",()=>fe(O,k,N)),ne.set(O.id,N),N}))};G.addEventListener("pointerleave",()=>{H.hidden=!0});const Ce=()=>{const O=be();if(W.hidden=O.length<2,W.hidden)return;const k=pt(o);el(xe,k>=0?`${k+1}/${O.length}`:""),V.style.width=O.length>1&&k>=0?`${k/(O.length-1)*100}%`:"0%",O.forEach((N,ie)=>{const Ee=ne.get(N.id);Ee&&(Ee.classList.toggle("here",N.id===o),Ee.classList.toggle("past",k>=0&&ie<k),Ee.classList.toggle("locked",Re()&&!K(ie)))})},he=O=>{oe.hidden=!0;try{localStorage.setItem(Le(),"1")}catch{}},ze=()=>{if(oe.hidden)return;const O=be().length,k=[["drag",r.howLook,r.howLookMore],["play",r.howListen,r.howListenMore],["check",r.howQuiz,r.howQuizMore.replace("{scenes}",String(O))]],N=Me("div","tg-welcome-box");N.append(Me("h2","tg-welcome-title",i.title||r.welcomeTitle),...k.map(([Ee,qe,ke])=>{const yt=Me("div","tg-welcome-row"),vt=Me("span","tg-welcome-icon");gs(vt,Ee,20);const Jt=Me("div","");return Jt.append(Me("strong","",qe),Me("span","",ke)),yt.append(vt,Jt),yt}));const ie=Me("div","tg-welcome-actions");ie.append(Jn("tg-welcome-skip",r.welcomeSkip,()=>he()),Jn("tg-welcome-go",r.welcomeGo,()=>he())),N.append(ie),oe.replaceChildren(N)};let L="";const se=()=>{const O=be().map(k=>`${k.id}:${R(k.id).length}`).join("|");O!==L&&(L=O,Z(),Ie())},ae=()=>{se(),ze(),z(),Se(),Ae(),Ce(),Te()};return ae(),{setDoc(O,k,N){i=O,s=k,r={...ku,...N},ve(),ae()},setScene(O){const k=O===o;if(o=O,O&&l.visited.add(O),k){ae();return}if(ve(),A.hidden=!0,Be&&mt(),ae(),!c){c=!0;let N=!1;try{N=!!localStorage.getItem(Le())}catch{N=!1}!N&&be().length>1&&(oe.hidden=!1,ze())}lt(!0)},canLeave(O){return Re()?st(O):!0},destroy(){ve(),d.remove()}}}const Ht=1024,Ni=860,Hu=1.35,xE=1.9,yE=.06,Fn="'Inter Variable', Inter, 'PingFang TC', 'Noto Sans TC', sans-serif";function EE(n){const e=s=>n.querySelector(s),t=s=>!!s&&!s.hidden&&s.offsetParent!==null,i=e(".tg-modal");return{title:e(".tg-card-title")?.textContent??"",index:e(".tg-count")?.textContent??"",cardText:e(".tg-card-text")?.textContent??"",play:e(".tg-play"),playing:!!e(".tg-play.playing"),back:e(".tg-nav-btn.back"),next:e(".tg-nav-btn.next"),nextLabel:e(".tg-nav-btn.next")?.textContent?.trim()??"",asking:!!e(".tg-nav-btn.next.asking"),quizOpen:!!i&&!i.hidden,prompt:e(".tg-quiz-prompt")?.textContent??"",bands:[...n.querySelectorAll(".tg-band")].map(s=>({label:s.querySelector(".tg-band-n")?.textContent??"",name:s.querySelector(".tg-band-name")?.textContent??"",bg:s.style.background||"#334155",fg:s.style.color||"#ffffff"})),answers:[...n.querySelectorAll(".tg-answer")].map(s=>({el:s,text:s.textContent??"",on:s.classList.contains("on"),right:s.classList.contains("is-right"),wrong:s.classList.contains("is-wrong"),disabled:s.disabled})),feedback:e(".tg-feedback:not([hidden])")?.textContent??"",go:e(".tg-quiz-go"),goLabel:e(".tg-quiz-go")?.textContent??"",visibleBack:t(e(".tg-nav-btn.back")),visibleNext:t(e(".tg-nav-btn.next"))}}function SE(n,e,t,i){const s=document.createElement("canvas");s.width=Ht,s.height=Ni;const r=s.getContext("2d"),o=new zp(s);o.colorSpace=tn;const a=new Tn({map:o,transparent:!0}),c=new Bt(new ns(Hu,Hu*Ni/Ht),a),l=new Xn;l.add(c),e.add(l);let u=!1,d=!1,m=[];const p=(B,W,G,J,V)=>{r.beginPath(),r.roundRect(B,W,G,J,V)},g=(B,W,G,J,V)=>{r.save(),r.translate(W,G),r.scale(J/24,J/24),r.strokeStyle=V,r.fillStyle=V,r.lineCap="round",r.lineJoin="round";for(const Y of pE(B)){const H=new Path2D(Y.d);r.lineWidth=Y.filled?1.25:2.25,Y.filled&&r.fill(H),r.stroke(H)}r.restore()},v=(B,W,G,J,V,Y=12)=>{const H=B.split(/\s+/);let Q="",j=0;for(const ee of H){const xe=Q?`${Q} ${ee}`:ee;if(r.measureText(xe).width>J&&Q){if(r.fillText(Q,W,G),G+=V,Q=ee,++j>=Y-1){Q+="…";break}}else Q=xe}return Q&&(r.fillText(Q,W,G),G+=V),G},f=(B,W,G,J,V,Y={})=>{p(W,G,J,V,V/2),r.fillStyle=Y.disabled?"rgba(255,255,255,0.08)":Y.primary?"#ffffff":"rgba(255,255,255,0.14)",r.fill(),r.fillStyle=Y.disabled?"rgba(255,255,255,0.35)":Y.primary?"#0b1220":"#ffffff",r.font=`600 30px ${Fn}`,r.textBaseline="middle";const H=r.measureText(B).width,Q=Y.icon?40:0,j=W+(J-H-Q)/2;Y.icon&&g(Y.icon,j,G+V/2-15,30,r.fillStyle),r.fillText(B,j+Q,G+V/2+2),!Y.disabled&&(Y.el||Y.act)&&m.push({x:W,y:G,w:J,h:V,el:Y.el,act:Y.act})},h=()=>{const B=EE(n);m=[],r.clearRect(0,0,Ht,Ni),p(0,0,Ht,Ni,36),r.fillStyle="rgba(13, 16, 22, 0.94)",r.fill(),r.strokeStyle="rgba(255,255,255,0.16)",r.lineWidth=2,r.stroke(),r.textBaseline="alphabetic";let W=48;B.index&&(r.fillStyle="rgba(255,255,255,0.55)",r.font=`800 30px ${Fn}`,r.fillText(B.index,W,84),W+=r.measureText(B.index).width+16),r.fillStyle="#ffffff",r.font=`700 44px ${Fn}`,r.fillText(B.title,W,84);const G=u?"Pinned":"Follows you";r.font=`600 26px ${Fn}`;const J=r.measureText(G).width+56;f(G,Ht-J-40,44,J,56,{act:()=>{u=!u,h()}});let V=132;if(B.quizOpen){V=24;for(const Y of B.bands){r.fillStyle=Y.bg,p(0,V,Ht,62,0),r.fill(),r.fillStyle=Y.fg,r.textBaseline="middle",r.font=`800 22px ${Fn}`;const Q=Y.label.toUpperCase();r.fillText(Q,48,V+62/2+1);const j=r.measureText(Q).width;r.font=`700 27px ${Fn}`;let ee=Y.name;for(;r.measureText(ee).width>Ht-110-j&&ee.length>2;)ee=`${ee.slice(0,-2)}…`;r.fillText(ee,48+j+18,V+62/2+1),r.textBaseline="alphabetic",V+=62}V+=B.bands.length?26:0,r.fillStyle="#ffffff",r.font=`600 34px ${Fn}`,V=v(B.prompt,48,V+20,Ht-96,46,4)+16,r.font=`400 30px ${Fn}`;for(const Y of B.answers){p(48,V,Ht-96,76,18),r.fillStyle=Y.right?"rgba(74, 222, 128, 0.28)":Y.wrong?"rgba(248, 113, 113, 0.26)":Y.on?"rgba(255,255,255,0.24)":"rgba(255,255,255,0.10)",r.fill(),(Y.on||Y.right||Y.wrong)&&(r.strokeStyle=Y.right?"#4ade80":Y.wrong?"#f87171":"#ffffff",r.lineWidth=3,r.stroke()),r.fillStyle="#ffffff",r.textBaseline="middle";let Q=Y.text;for(;r.measureText(Q).width>Ht-160&&Q.length>2;)Q=`${Q.slice(0,-2)}…`;r.fillText(Q,72,V+76/2+2),r.textBaseline="alphabetic",Y.disabled||m.push({x:48,y:V,w:Ht-96,h:76,el:Y.el}),V+=90}B.feedback&&(r.font=`600 28px ${Fn}`,r.fillStyle="rgba(255,255,255,0.92)",V=v(B.feedback,48,V+26,Ht-96,38,3)+8),B.go&&f(B.goLabel,48,Ni-128,Ht-96,84,{primary:!0,el:B.go,disabled:B.go.disabled})}else{r.fillStyle="rgba(255,255,255,0.94)",r.font=`400 31px ${Fn}`,V=v(B.cardText,48,V+26,Ht-96,44,9),B.play&&!B.play.hidden&&f(B.playing?"Pause":"Listen",48,V+18,250,78,{icon:B.playing?"pause":"play",el:B.play});const Y=Ni-128;B.visibleBack&&B.back&&f("Back",48,Y,220,84,{icon:"back",el:B.back}),B.visibleNext&&B.next&&f(B.nextLabel,Ht-48-420,Y,420,84,{primary:!B.asking,icon:"next",el:B.next})}o.needsUpdate=!0};let M=!1;const w=new MutationObserver(()=>{M||(M=!0,requestAnimationFrame(()=>{M=!1,h()}))});w.observe(n,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),h(),n.dataset.vrPanel="up";const E=new Bl,A=[t.getController(0),t.getController(1)],C=new I,P=new I;for(const B of A){const W=new En().setFromPoints([new I(0,0,0),new I(0,0,-2)]);B.add(new Il(W,new Pl({color:16777215,transparent:!0,opacity:.5}))),B.add((()=>{const G=new Bt(new wi(.008),new Tn({color:16777215}));return G.position.z=-2,G})()),B.addEventListener("selectstart",()=>{C.setFromMatrixPosition(B.matrixWorld),P.set(0,0,-1).transformDirection(B.matrixWorld),E.set(C,P);const G=E.intersectObject(c,!1)[0];if(!G?.uv)return;const J=G.uv.x*Ht,V=(1-G.uv.y)*Ni,Y=m.find(H=>J>=H.x&&J<=H.x+H.w&&V>=H.y&&V<=H.y+H.h);Y&&(Y.act?Y.act():Y.el?.click())})}const D=new I,S=new I,x=new I;return{tick:()=>{const B=i();B&&(B.getWorldDirection(x),x.y=0,x.lengthSq()<.001&&x.set(0,0,-1),x.normalize(),S.copy(B.position),D.copy(S).addScaledVector(x,xE),D.y=S.y-.05,d?u||l.position.lerp(D,yE):(l.position.copy(D),d=!0),l.lookAt(S.x,l.position.y,S.z))},destroy(){delete n.dataset.vrPanel,w.disconnect(),e.remove(l),a.map?.dispose(),a.dispose(),c.geometry.dispose()}}}const Vu=()=>navigator.xr;function wE(n,e,t={}){let i=null,s=null,r=!1;e.renderer.setCustomRenderer(d=>({render(m,p){i={renderer:d,scene:m,camera:p},d.xr.isPresenting||d.render(m,p)}}));const o=document.createElement("button");o.type="button",o.className="tp-vr",o.hidden=!0;const a=()=>{const d=!!i?.renderer.xr.isPresenting,m=d?t.exitLabel??"Exit VR":t.label??"VR";o.innerHTML=`${ar("vr",17)}<span>${m}</span>`,o.title=m,o.classList.toggle("on",d)};let c=null;const l=()=>{const d=i;d&&(c?.destroy(),c=null,d.renderer.setAnimationLoop(null),d.renderer.xr.enabled=!1,s=null,a(),t.onChange?.(!1),e.needsUpdate())},u=async()=>{const d=i;if(!d)throw new Error("The viewer has not drawn a frame yet.");const m=Vu();if(!m)throw new Error("This browser has no WebXR.");const p=await m.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});d.renderer.xr.enabled=!0,await d.renderer.xr.setSession(p),s=p,p.addEventListener("end",l,{once:!0}),t.guideRoot&&(c=SE(t.guideRoot,d.scene,d.renderer.xr,()=>d.renderer.xr.isPresenting?d.renderer.xr.getCamera():null)),d.renderer.setAnimationLoop(()=>{c?.tick(d.renderer.xr.getCamera()),d.renderer.render(d.scene,d.camera)}),a(),t.onChange?.(!0)};return o.addEventListener("click",()=>{if(s){s.end();return}u().catch(d=>{t.onError?.(String(d?.message??d)),l()})}),n.appendChild(o),(async()=>{try{const d=Vu();r=!!d&&await d.isSessionSupported("immersive-vr")}catch{r=!1}o.hidden=!r,a()})(),{supported:()=>r,isPresenting:()=>!!i?.renderer.xr.isPresenting,enter:u,exit:async()=>{await s?.end()},destroy(){s?.end(),e.renderer.setCustomRenderer(null),o.remove()}}}const Gu="http://www.w3.org/2000/svg";function ME(n,e,t={}){let i=e,s=null,r=null,o=0,a=!1;const c=document.createElement("button");c.type="button",c.className="tp-minimap-toggle",c.setAttribute("aria-label","Floor plan"),c.innerHTML='<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M1.5 4.2L6 2.2l4 2 4.5-2v9.6l-4.5 2-4-2-4.5 2z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 2.2v9.6M10 4.2v9.6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',n.appendChild(c);const l=document.createElement("div");l.className="tp-minimap",l.hidden=!0;const u=document.createElement("div");u.className="tp-minimap-floors";const d=document.createElement("div");d.className="tp-minimap-frame";const m=document.createElement("div");m.className="tp-minimap-stage",d.appendChild(m);const p=document.createElement("img");p.className="tp-minimap-image",p.alt="",p.draggable=!1,m.appendChild(p);const g=document.createElement("div");g.className="tp-minimap-pins",m.appendChild(g);const v=document.createElementNS(Gu,"svg");v.setAttribute("class","tp-minimap-radar"),v.setAttribute("viewBox","0 0 1 1"),v.setAttribute("preserveAspectRatio","none");const f=document.createElementNS(Gu,"path");v.appendChild(f),m.appendChild(v);const h=document.createElement("button");h.type="button",h.className="tp-minimap-close",h.setAttribute("aria-label","Close the floor plan"),h.innerHTML='<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',l.append(h,u,d),n.appendChild(l);let M=1,w=0,E=0;const A=j=>i.graph?.floors.find(ee=>ee.id===j),C=()=>{m.style.transform=`translate(${w}px, ${E}px) scale(${M})`},P=()=>{M=Ri(A(r)).zoom?.initial??1,w=0,E=0,C()};let D=null;const S=j=>{Ri(A(r)).movement==="draggable"&&(j.target.closest(".tp-minimap-pin")||(D={x:j.clientX,y:j.clientY,panX:w,panY:E},d.setPointerCapture(j.pointerId),d.classList.add("dragging")))},x=j=>{D&&(w=D.panX+(j.clientX-D.x),E=D.panY+(j.clientY-D.y),C())},T=j=>{D&&(D=null,d.releasePointerCapture(j.pointerId),d.classList.remove("dragging"))},B=j=>{const ee=Ri(A(r)).zoom;if(!ee)return;j.preventDefault();const xe=Math.min(ee.max,Math.max(ee.min,M*(j.deltaY<0?1.12:1/1.12)));xe!==M&&(M=xe,C())};d.addEventListener("pointerdown",S),d.addEventListener("pointermove",x),d.addEventListener("pointerup",T),d.addEventListener("pointercancel",T),d.addEventListener("wheel",B,{passive:!1});const W=j=>{a=j,l.hidden=!j,c.classList.toggle("on",j),j&&J()};c.addEventListener("click",()=>W(!a)),h.addEventListener("click",()=>W(!1));const G=()=>{const j=(i.graph?.floors??[]).filter(ee=>Ri(ee).visible);if(j.length)return j.find(ee=>ee.nodes.some(xe=>xe.sceneId===s))??j[0]},J=()=>{const ee=A(r)?.nodes.find(q=>q.sceneId===s),xe=i.scenes.find(q=>q.id===s),Oe=px(i.graph),We=Oe.enabled?gx(ee,xe,o):null;if(We==null||!ee){v.style.display="none";return}v.style.display="",v.setAttribute("style",""),v.style.left=`${(ee.x-Oe.radius)*100}%`,v.style.top=`${ee.y*100}%`,v.style.width=`${Oe.radius*200}%`,v.style.marginTop=`${-Oe.radius*100}%`,v.style.transform=`rotate(${We}rad)`,f.setAttribute("d",fx(Oe.angle)),f.setAttribute("fill",Oe.fill),f.setAttribute("fill-opacity",String(Oe.fillOpacity)),f.setAttribute("stroke",Oe.stroke),f.setAttribute("stroke-width","0.006"),f.setAttribute("stroke-opacity","0.9")},V=()=>{const j=(i.graph?.floors??[]).filter(ee=>Ri(ee).visible);u.hidden=j.length<2,u.replaceChildren(...j.map(ee=>{const xe=document.createElement("button");return xe.type="button",xe.textContent=ee.name,xe.className=ee.id===r?"on":"",xe.addEventListener("click",()=>{r=ee.id,P(),H()}),xe}))},Y=()=>{const j=A(r);g.replaceChildren(...(j?.nodes??[]).map(ee=>{const xe=i.scenes.find(We=>We.id===ee.sceneId),Oe=document.createElement("button");return Oe.type="button",Oe.className=`tp-minimap-pin${ee.sceneId===s?" here":""}`,Oe.style.left=`${ee.x*100}%`,Oe.style.top=`${ee.y*100}%`,Oe.title=xe?.name??ee.sceneId,Oe.setAttribute("aria-label",xe?.name??ee.sceneId),Oe.addEventListener("click",We=>{We.stopPropagation(),ee.sceneId!==s&&t.onGoto?.(ee.sceneId)}),Oe}))},H=()=>{const j=A(r),ee=j?.image?nt(j.image):null;ee&&p.getAttribute("src")!==ee&&p.setAttribute("src",ee),p.hidden=!ee;const xe=Ri(j);d.classList.toggle("fill",xe.scaleMode==="fill"),d.classList.toggle("draggable",xe.movement==="draggable"),V(),Y(),J()},Q=()=>{const j=G();j&&j.id!==r?(r=j.id,P()):j||(r=null)};return Q(),H(),{setDoc(j){i=j,Q(),H()},setScene(j){s=j,Q(),H()},setYaw(j){j!==o&&(o=j,a&&J())},setOpen:W,isOpen:()=>a,destroy(){d.removeEventListener("pointerdown",S),d.removeEventListener("pointermove",x),d.removeEventListener("pointerup",T),d.removeEventListener("pointercancel",T),d.removeEventListener("wheel",B),l.remove(),c.remove()}}}function bE(n){return!!n?.graph?.floors.some(e=>Ri(e).visible&&e.image)}const TE="1";function AE(){const n=document.getElementById("tour-doc");if(!n?.textContent)throw new Error('No tour document on the page: expected <script type="application/json" id="tour-doc">.');const{doc:e,warnings:t}=dx(JSON.parse(n.textContent));for(const i of t)console.warn(`[tour] ${i}`);return e}function CE(n,e){n.style.setProperty("--tour-accent",e.theme.accent),n.style.setProperty("--tour-panel-bg",e.theme.panelBg),n.style.setProperty("--tour-radius",e.theme.radius);const t=e.tooltipStyle;n.style.setProperty("--tour-tooltip-bg",t.background),n.style.setProperty("--tour-tooltip-fg",t.textColor),n.style.setProperty("--tour-tooltip-size",`${t.fontSize}px`)}function Wu(n,e){if(!e)return null;if(n.includes(e))return e;const t=e.split("-")[0].toLowerCase();return n.find(i=>i.toLowerCase()===t)??n.find(i=>i.split("-")[0].toLowerCase()===t)??null}function Xu(n={}){const e=n.container??document.getElementById("tour");if(!e)throw new Error('No container: expected an element with id="tour".');const t=n.doc??AE();if(!t.scenes.length)throw new Error("This tour has no scenes.");const i=(()=>{try{return localStorage.getItem(`tour-lang:${t.id}`)}catch{return null}})(),s=t.locales.available,r=[new URLSearchParams(location.search).get("lang"),i,...navigator.languages??[]].find(x=>x&&Wu(s,x))??t.locales.default;let o=Wu(s,r)??t.locales.default,a=ud(t,o);Rx(""),CE(e,a),document.title=a.title||document.title;const c=fE(e,a),l=nE(a);let u=null,d=null,m=null;const p=Sx(t),g=x=>{if(x!==o){o=x,a=ud(t,o);try{localStorage.setItem(`tour-lang:${t.id}`,x)}catch{}document.documentElement.lang=x,document.title=a.title||document.title,M.setDoc(a),u?.setScenes(a.scenes),h?.setDoc(a),m?.setDoc(a,o,zu(o)),M.sceneId&&m?.setScene(M.sceneId),f()}},v=s.length>1&&!p?document.createElement("div"):null,f=()=>{v&&(v.className="tp-langs",v.replaceChildren(...s.map(x=>{const T=document.createElement("button");return T.type="button",T.textContent=x.toUpperCase(),T.title=Ex(x),T.className=x===o?"on":"",T.addEventListener("click",()=>g(x)),T})))};v&&(f(),e.appendChild(v)),document.documentElement.lang=o;const h=bE(a)?ME(e,a,{onGoto:x=>M.goToScene(x)}):null,M=new dE(e,{onSceneChanged:x=>{c.clear(),u?.update(x),d?.update(x),h?.setScene(x),m?.setScene(x),RE(x)},onViewChanged:x=>h?.setYaw(x.yaw),onUnsupportedAction:x=>console.warn(`[tour] unsupported action: ${x.type}`)},{host:c.effects,...l.kind==="equirect-tiles"?{adapter:tx}:{}}),w=n.sceneId??new URLSearchParams(location.search).get("scene")??void 0,E=w&&a.scenes.some(x=>x.id===w)?w:void 0,A=Jx(a),C=p&&!a.skin?.html,P=jx(e,M,{...C?{html:"",css:A.css}:A,scenes:a.scenes});u=P,ho(document,a.scenes),d=Rd(document,M,{skip:u.layer}),p&&(m=_E(e,a,{locale:o,onGoto:x=>M.goToScene(x),locales:s,strings:zu(o),onLocale:x=>g(x),onRestart:()=>{const x=a.runtime.startSceneId??a.scenes[0]?.id;x&&M.goToScene(x)}})),M.load(a,E);let D=null;const S=M.psv;return S&&(D=wE(e,S,{guideRoot:e.querySelector(".tg"),onChange:x=>{e.classList.toggle("in-vr",x)},onError:x=>console.warn(`[tour] VR: ${x}`)})),{engine:M,skin:P,destroy(){D?.destroy(),m?.destroy(),v?.remove(),h?.destroy(),M.destroy(),c.destroy(),u?.destroy(),d?.destroy()}}}function RE(n){if(location.protocol==="file:")return;const e=new URL(location.href);e.searchParams.get("scene")!==n&&(e.searchParams.set("scene",n),history.replaceState(null,"",e))}function PE(){if(document.currentScript?.hasAttribute("data-tour-manual"))return;const e=()=>{try{window.tourPlayer=Xu()}catch(t){const i=t instanceof Error?t.message:String(t);console.error("[tour]",t);const s=document.getElementById("tour");s&&(s.innerHTML=`<div class="tour-player-error"><p>${i}</p></div>`)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}return PE(),Mn.PLAYER_VERSION=TE,Mn.createPlayer=Xu,Object.defineProperty(Mn,Symbol.toStringTag,{value:"Module"}),Mn})({});
