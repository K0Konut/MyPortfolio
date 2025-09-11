(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ai(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},pn=[],tt=()=>{},Tu=()=>!1,qr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),li=t=>t.startsWith("onUpdate:"),me=Object.assign,ci=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cu=Object.prototype.hasOwnProperty,K=(t,e)=>Cu.call(t,e),F=Array.isArray,gn=t=>Kr(t)==="[object Map]",Oa=t=>Kr(t)==="[object Set]",B=t=>typeof t=="function",ae=t=>typeof t=="string",Vt=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Ma=t=>(ie(t)||B(t))&&B(t.then)&&B(t.catch),Da=Object.prototype.toString,Kr=t=>Da.call(t),Au=t=>Kr(t).slice(8,-1),Na=t=>Kr(t)==="[object Object]",ui=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ru=/-(\w)/g,De=Gr(t=>t.replace(Ru,(e,n)=>n?n.toUpperCase():"")),Pu=/\B([A-Z])/g,tn=Gr(t=>t.replace(Pu,"-$1").toLowerCase()),Jr=Gr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ps=Gr(t=>t?`on${Jr(t)}`:""),Dt=(t,e)=>!Object.is(t,e),yr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},La=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$s=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ji;const Yr=()=>Ji||(Ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function di(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ae(r)?Du(r):di(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ae(t)||ie(t))return t}const ku=/;(?![^(]*\))/g,Ou=/:([^]+)/,Mu=/\/\*[^]*?\*\//g;function Du(t){const e={};return t.replace(Mu,"").split(ku).forEach(n=>{if(n){const r=n.split(Ou);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fi(t){let e="";if(ae(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=fi(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lu=ai(Nu);function $a(t){return!!t||t===""}const Ua=t=>!!(t&&t.__v_isRef===!0),Ut=t=>ae(t)?t:t==null?"":F(t)||ie(t)&&(t.toString===Da||!B(t.toString))?Ua(t)?Ut(t.value):JSON.stringify(t,Fa,2):String(t),Fa=(t,e)=>Ua(e)?Fa(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[gs(r,i)+" =>"]=s,n),{})}:Oa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gs(n))}:Vt(e)?gs(e):ie(e)&&!F(e)&&!Na(e)?String(e):e,gs=(t,e="")=>{var n;return Vt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class $u{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){this._on>0&&--this._on===0&&(xe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Uu(){return xe}let se;const ms=new WeakSet;class ja{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ms.has(this)&&(ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ba(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yi(this),Ha(this);const e=se,n=Ue;se=this,Ue=!0;try{return this.fn()}finally{za(this),se=e,Ue=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gi(e);this.deps=this.depsTail=void 0,Yi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Us(this)&&this.run()}get dirty(){return Us(this)}}let Va=0,Fn,jn;function Ba(t,e=!1){if(t.flags|=8,e){t.next=jn,jn=t;return}t.next=Fn,Fn=t}function hi(){Va++}function pi(){if(--Va>0)return;if(jn){let e=jn;for(jn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fn;){let e=Fn;for(Fn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ha(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function za(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),gi(r),Fu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Us(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yn)||(t.globalVersion=Yn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Us(t))))return;t.flags|=2;const e=t.dep,n=se,r=Ue;se=t,Ue=!0;try{Ha(t);const s=t.fn(t._value);(e.version===0||Dt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{se=n,Ue=r,za(t),t.flags&=-3}}function gi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)gi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ue=!0;const qa=[];function mt(){qa.push(Ue),Ue=!1}function bt(){const t=qa.pop();Ue=t===void 0?!0:t}function Yi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=se;se=void 0;try{e()}finally{se=n}}}let Yn=0;class ju{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!se||!Ue||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new ju(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Ka(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=r)}return n}trigger(e){this.version++,Yn++,this.notify(e)}notify(e){hi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pi()}}}function Ka(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ka(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Fs=new WeakMap,Jt=Symbol(""),js=Symbol(""),Xn=Symbol("");function he(t,e,n){if(Ue&&se){let r=Fs.get(t);r||Fs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new mi),s.map=r,s.key=n),s.track()}}function ft(t,e,n,r,s,i){const o=Fs.get(t);if(!o){Yn++;return}const a=l=>{l&&l.trigger()};if(hi(),e==="clear")o.forEach(a);else{const l=F(t),c=l&&ui(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===Xn||!Vt(p)&&p>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Xn)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Jt)),gn(t)&&a(o.get(js)));break;case"delete":l||(a(o.get(Jt)),gn(t)&&a(o.get(js)));break;case"set":gn(t)&&a(o.get(Jt));break}}pi()}function cn(t){const e=q(t);return e===t?e:(he(e,"iterate",Xn),Me(t)?e:e.map(ue))}function Xr(t){return he(t=q(t),"iterate",Xn),t}const Vu={__proto__:null,[Symbol.iterator](){return bs(this,Symbol.iterator,ue)},concat(...t){return cn(this).concat(...t.map(e=>F(e)?cn(e):e))},entries(){return bs(this,"entries",t=>(t[1]=ue(t[1]),t))},every(t,e){return ct(this,"every",t,e,void 0,arguments)},filter(t,e){return ct(this,"filter",t,e,n=>n.map(ue),arguments)},find(t,e){return ct(this,"find",t,e,ue,arguments)},findIndex(t,e){return ct(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ct(this,"findLast",t,e,ue,arguments)},findLastIndex(t,e){return ct(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ct(this,"forEach",t,e,void 0,arguments)},includes(...t){return vs(this,"includes",t)},indexOf(...t){return vs(this,"indexOf",t)},join(t){return cn(this).join(t)},lastIndexOf(...t){return vs(this,"lastIndexOf",t)},map(t,e){return ct(this,"map",t,e,void 0,arguments)},pop(){return On(this,"pop")},push(...t){return On(this,"push",t)},reduce(t,...e){return Xi(this,"reduce",t,e)},reduceRight(t,...e){return Xi(this,"reduceRight",t,e)},shift(){return On(this,"shift")},some(t,e){return ct(this,"some",t,e,void 0,arguments)},splice(...t){return On(this,"splice",t)},toReversed(){return cn(this).toReversed()},toSorted(t){return cn(this).toSorted(t)},toSpliced(...t){return cn(this).toSpliced(...t)},unshift(...t){return On(this,"unshift",t)},values(){return bs(this,"values",ue)}};function bs(t,e,n){const r=Xr(t),s=r[e]();return r!==t&&!Me(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Bu=Array.prototype;function ct(t,e,n,r,s,i){const o=Xr(t),a=o!==t&&!Me(t),l=o[e];if(l!==Bu[e]){const d=l.apply(t,i);return a?ue(d):d}let c=n;o!==t&&(a?c=function(d,p){return n.call(this,ue(d),p,t)}:n.length>2&&(c=function(d,p){return n.call(this,d,p,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function Xi(t,e,n,r){const s=Xr(t);let i=n;return s!==t&&(Me(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,ue(a),l,t)}),s[e](i,...r)}function vs(t,e,n){const r=q(t);he(r,"iterate",Xn);const s=r[e](...n);return(s===-1||s===!1)&&yi(n[0])?(n[0]=q(n[0]),r[e](...n)):s}function On(t,e,n=[]){mt(),hi();const r=q(t)[e].apply(t,n);return pi(),bt(),r}const Hu=ai("__proto__,__v_isRef,__isVue"),Ga=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vt));function zu(t){Vt(t)||(t=String(t));const e=q(this);return he(e,"has",t),e.hasOwnProperty(t)}class Ja{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ed:Za:i?Qa:Xa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){let l;if(o&&(l=Vu[n]))return l;if(n==="hasOwnProperty")return zu}const a=Reflect.get(e,n,ge(e)?e:r);return(Vt(n)?Ga.has(n):Hu(n))||(s||he(e,"get",n),i)?a:ge(a)?o&&ui(n)?a:a.value:ie(a)?s?tl(a):Qr(a):a}}class Ya extends Ja{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ft(i);if(!Me(r)&&!Ft(r)&&(i=q(i),r=q(r)),!F(e)&&ge(i)&&!ge(r))return l?!1:(i.value=r,!0)}const o=F(e)&&ui(n)?Number(n)<e.length:K(e,n),a=Reflect.set(e,n,r,ge(e)?e:s);return e===q(s)&&(o?Dt(r,i)&&ft(e,"set",n,r):ft(e,"add",n,r)),a}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ft(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Vt(n)||!Ga.has(n))&&he(e,"has",n),r}ownKeys(e){return he(e,"iterate",F(e)?"length":Jt),Reflect.ownKeys(e)}}class Wu extends Ja{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qu=new Ya,Ku=new Wu,Gu=new Ya(!0);const Vs=t=>t,gr=t=>Reflect.getPrototypeOf(t);function Ju(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=gn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Vs:e?Ar:ue;return!e&&he(i,"iterate",l?js:Jt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function mr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yu(t,e){const n={get(s){const i=this.__v_raw,o=q(i),a=q(s);t||(Dt(s,a)&&he(o,"get",s),he(o,"get",a));const{has:l}=gr(o),c=e?Vs:t?Ar:ue;if(l.call(o,s))return c(i.get(s));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&he(q(s),"iterate",Jt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=q(i),a=q(s);return t||(Dt(s,a)&&he(o,"has",s),he(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=q(a),c=e?Vs:t?Ar:ue;return!t&&he(l,"iterate",Jt),a.forEach((u,d)=>s.call(i,c(u),c(d),o))}};return me(n,t?{add:mr("add"),set:mr("set"),delete:mr("delete"),clear:mr("clear")}:{add(s){!e&&!Me(s)&&!Ft(s)&&(s=q(s));const i=q(this);return gr(i).has.call(i,s)||(i.add(s),ft(i,"add",s,s)),this},set(s,i){!e&&!Me(i)&&!Ft(i)&&(i=q(i));const o=q(this),{has:a,get:l}=gr(o);let c=a.call(o,s);c||(s=q(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,i),c?Dt(i,u)&&ft(o,"set",s,i):ft(o,"add",s,i),this},delete(s){const i=q(this),{has:o,get:a}=gr(i);let l=o.call(i,s);l||(s=q(s),l=o.call(i,s)),a&&a.call(i,s);const c=i.delete(s);return l&&ft(i,"delete",s,void 0),c},clear(){const s=q(this),i=s.size!==0,o=s.clear();return i&&ft(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ju(s,t,e)}),n}function bi(t,e){const n=Yu(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Xu={get:bi(!1,!1)},Qu={get:bi(!1,!0)},Zu={get:bi(!0,!1)};const Xa=new WeakMap,Qa=new WeakMap,Za=new WeakMap,ed=new WeakMap;function td(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nd(t){return t.__v_skip||!Object.isExtensible(t)?0:td(Au(t))}function Qr(t){return Ft(t)?t:vi(t,!1,qu,Xu,Xa)}function el(t){return vi(t,!1,Gu,Qu,Qa)}function tl(t){return vi(t,!0,Ku,Zu,Za)}function vi(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=nd(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function mn(t){return Ft(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ft(t){return!!(t&&t.__v_isReadonly)}function Me(t){return!!(t&&t.__v_isShallow)}function yi(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function rd(t){return!K(t,"__v_skip")&&Object.isExtensible(t)&&La(t,"__v_skip",!0),t}const ue=t=>ie(t)?Qr(t):t,Ar=t=>ie(t)?tl(t):t;function ge(t){return t?t.__v_isRef===!0:!1}function Le(t){return nl(t,!1)}function sd(t){return nl(t,!0)}function nl(t,e){return ge(t)?t:new id(t,e)}class id{constructor(e,n){this.dep=new mi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:ue(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Me(e)||Ft(e);e=r?e:q(e),Dt(e,n)&&(this._rawValue=e,this._value=r?e:ue(e),this.dep.trigger())}}function Yt(t){return ge(t)?t.value:t}const od={get:(t,e,n)=>e==="__v_raw"?t:Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ge(s)&&!ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rl(t){return mn(t)?t:new Proxy(t,od)}class ad{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new mi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return Ba(this,!0),!0}get value(){const e=this.dep.track();return Wa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ld(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new ad(r,s,n)}const br={},Rr=new WeakMap;let qt;function cd(t,e=!1,n=qt){if(n){let r=Rr.get(n);r||Rr.set(n,r=[]),r.push(t)}}function ud(t,e,n=te){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=O=>s?O:Me(O)||s===!1||s===0?ht(O,1):ht(O);let u,d,p,m,E=!1,A=!1;if(ge(t)?(d=()=>t.value,E=Me(t)):mn(t)?(d=()=>c(t),E=!0):F(t)?(A=!0,E=t.some(O=>mn(O)||Me(O)),d=()=>t.map(O=>{if(ge(O))return O.value;if(mn(O))return c(O);if(B(O))return l?l(O,2):O()})):B(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){mt();try{p()}finally{bt()}}const O=qt;qt=u;try{return l?l(t,3,[m]):t(m)}finally{qt=O}}:d=tt,e&&s){const O=d,Q=s===!0?1/0:s;d=()=>ht(O(),Q)}const j=Uu(),M=()=>{u.stop(),j&&j.active&&ci(j.effects,u)};if(i&&e){const O=e;e=(...Q)=>{O(...Q),M()}}let k=A?new Array(t.length).fill(br):br;const N=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const Q=u.run();if(s||E||(A?Q.some((ce,oe)=>Dt(ce,k[oe])):Dt(Q,k))){p&&p();const ce=qt;qt=u;try{const oe=[Q,k===br?void 0:A&&k[0]===br?[]:k,m];l?l(e,3,oe):e(...oe),k=Q}finally{qt=ce}}}else u.run()};return a&&a(N),u=new ja(d),u.scheduler=o?()=>o(N,!1):N,m=O=>cd(O,!1,u),p=u.onStop=()=>{const O=Rr.get(u);if(O){if(l)l(O,4);else for(const Q of O)Q();Rr.delete(u)}},e?r?N(!0):k=u.run():o?o(N.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function ht(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ge(t))ht(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)ht(t[r],e,n);else if(Oa(t)||gn(t))t.forEach(r=>{ht(r,e,n)});else if(Na(t)){for(const r in t)ht(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ht(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function or(t,e,n,r){try{return r?t(...r):t()}catch(s){Zr(s,e,n)}}function it(t,e,n,r){if(B(t)){const s=or(t,e,n,r);return s&&Ma(s)&&s.catch(i=>{Zr(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(it(t[i],e,n,r));return s}}function Zr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(i){mt(),or(i,null,10,[t,l,c]),bt();return}}dd(t,n,s,r,o)}function dd(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ve=[];let Qe=-1;const bn=[];let Ct=null,un=0;const sl=Promise.resolve();let Pr=null;function il(t){const e=Pr||sl;return t?e.then(this?t.bind(this):t):e}function fd(t){let e=Qe+1,n=ve.length;for(;e<n;){const r=e+n>>>1,s=ve[r],i=Qn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function _i(t){if(!(t.flags&1)){const e=Qn(t),n=ve[ve.length-1];!n||!(t.flags&2)&&e>=Qn(n)?ve.push(t):ve.splice(fd(e),0,t),t.flags|=1,ol()}}function ol(){Pr||(Pr=sl.then(ll))}function hd(t){F(t)?bn.push(...t):Ct&&t.id===-1?Ct.splice(un+1,0,t):t.flags&1||(bn.push(t),t.flags|=1),ol()}function Qi(t,e,n=Qe+1){for(;n<ve.length;n++){const r=ve[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ve.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function al(t){if(bn.length){const e=[...new Set(bn)].sort((n,r)=>Qn(n)-Qn(r));if(bn.length=0,Ct){Ct.push(...e);return}for(Ct=e,un=0;un<Ct.length;un++){const n=Ct[un];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ct=null,un=0}}const Qn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ll(t){try{for(Qe=0;Qe<ve.length;Qe++){const e=ve[Qe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),or(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qe<ve.length;Qe++){const e=ve[Qe];e&&(e.flags&=-2)}Qe=-1,ve.length=0,al(),Pr=null,(ve.length||bn.length)&&ll()}}let Ce=null,cl=null;function kr(t){const e=Ce;return Ce=t,cl=t&&t.type.__scopeId||null,e}function ke(t,e=Ce,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&co(-1);const i=kr(e);let o;try{o=t(...s)}finally{kr(i),r._d&&co(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Zi(t,e){if(Ce===null)return t;const n=ss(Ce),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=te]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&ht(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function zt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(mt(),it(l,n,8,[t.el,a,t,e]),bt())}}const pd=Symbol("_vte"),gd=t=>t.__isTeleport;function wi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xi(t,e){return B(t)?me({name:t.name},e,{setup:t}):t}function ul(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Or(t,e,n,r,s=!1){if(F(t)){t.forEach((E,A)=>Or(E,e&&(F(e)?e[A]:e),n,r,s));return}if(Vn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Or(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ss(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===te?a.refs={}:a.refs,d=a.setupState,p=q(d),m=d===te?()=>!1:E=>K(p,E);if(c!=null&&c!==l&&(ae(c)?(u[c]=null,m(c)&&(d[c]=null)):ge(c)&&(c.value=null)),B(l))or(l,a,12,[o,u]);else{const E=ae(l),A=ge(l);if(E||A){const j=()=>{if(t.f){const M=E?m(l)?d[l]:u[l]:l.value;s?F(M)&&ci(M,i):F(M)?M.includes(i)||M.push(i):E?(u[l]=[i],m(l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else E?(u[l]=o,m(l)&&(d[l]=o)):A&&(l.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,Te(j,n)):j()}}}Yr().requestIdleCallback;Yr().cancelIdleCallback;const Vn=t=>!!t.type.__asyncLoader,dl=t=>t.type.__isKeepAlive;function md(t,e){fl(t,"a",e)}function bd(t,e){fl(t,"da",e)}function fl(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(es(e,r,n),n){let s=n.parent;for(;s&&s.parent;)dl(s.parent.vnode)&&vd(r,e,n,s),s=s.parent}}function vd(t,e,n,r){const s=es(e,t,r,!0);hl(()=>{ci(r[e],s)},n)}function es(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{mt();const a=ar(n),l=it(e,n,t,o);return a(),bt(),l});return r?s.unshift(i):s.push(i),i}}const wt=t=>(e,n=pe)=>{(!er||t==="sp")&&es(t,(...r)=>e(...r),n)},yd=wt("bm"),Ii=wt("m"),_d=wt("bu"),wd=wt("u"),xd=wt("bum"),hl=wt("um"),Id=wt("sp"),Ed=wt("rtg"),Sd=wt("rtc");function Td(t,e=pe){es("ec",t,e)}const Cd="components";function ts(t,e){return Rd(Cd,t,!0,e)||t}const Ad=Symbol.for("v-ndc");function Rd(t,e,n=!0,r=!1){const s=Ce||pe;if(s){const i=s.type;{const a=bf(i,!1);if(a&&(a===e||a===De(e)||a===Jr(De(e))))return i}const o=eo(s[t]||i[t],e)||eo(s.appContext[t],e);return!o&&r?i:o}}function eo(t,e){return t&&(t[e]||t[De(e)]||t[Jr(De(e))])}function Pd(t,e,n,r){let s;const i=n,o=F(t);if(o||ae(t)){const a=o&&mn(t);let l=!1,c=!1;a&&(l=!Me(t),c=Ft(t),t=Xr(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?c?Ar(ue(t[u])):ue(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}const Bs=t=>t?Dl(t)?ss(t):Bs(t.parent):null,Bn=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bs(t.parent),$root:t=>Bs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>gl(t),$forceUpdate:t=>t.f||(t.f=()=>{_i(t.update)}),$nextTick:t=>t.n||(t.n=il.bind(t.proxy)),$watch:t=>Xd.bind(t)}),ys=(t,e)=>t!==te&&!t.__isScriptSetup&&K(t,e),kd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ys(r,e))return o[e]=1,r[e];if(s!==te&&K(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,i[e];if(n!==te&&K(n,e))return o[e]=4,n[e];Hs&&(o[e]=0)}}const u=Bn[e];let d,p;if(u)return e==="$attrs"&&he(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==te&&K(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ys(s,e)?(s[e]=n,!0):r!==te&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&K(t,o)||ys(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(Bn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function to(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hs=!0;function Od(t){const e=gl(t),n=t.proxy,r=t.ctx;Hs=!1,e.beforeCreate&&no(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:E,activated:A,deactivated:j,beforeDestroy:M,beforeUnmount:k,destroyed:N,unmounted:O,render:Q,renderTracked:ce,renderTriggered:oe,errorCaptured:ze,serverPrefetch:xt,expose:We,inheritAttrs:It,components:Ht,directives:qe,filters:Pn}=e;if(c&&Md(c,r,null),o)for(const X in o){const z=o[X];B(z)&&(r[X]=z.bind(n))}if(s){const X=s.call(n,n);ie(X)&&(t.data=Qr(X))}if(Hs=!0,i)for(const X in i){const z=i[X],lt=B(z)?z.bind(n,n):B(z.get)?z.get.bind(n,n):tt,Et=!B(z)&&B(z.set)?z.set.bind(n):tt,Ke=Ne({get:lt,set:Et});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:_e=>Ke.value=_e})}if(a)for(const X in a)pl(a[X],r,n,X);if(l){const X=B(l)?l.call(n):l;Reflect.ownKeys(X).forEach(z=>{_r(z,X[z])})}u&&no(u,t,"c");function le(X,z){F(z)?z.forEach(lt=>X(lt.bind(n))):z&&X(z.bind(n))}if(le(yd,d),le(Ii,p),le(_d,m),le(wd,E),le(md,A),le(bd,j),le(Td,ze),le(Sd,ce),le(Ed,oe),le(xd,k),le(hl,O),le(Id,xt),F(We))if(We.length){const X=t.exposed||(t.exposed={});We.forEach(z=>{Object.defineProperty(X,z,{get:()=>n[z],set:lt=>n[z]=lt})})}else t.exposed||(t.exposed={});Q&&t.render===tt&&(t.render=Q),It!=null&&(t.inheritAttrs=It),Ht&&(t.components=Ht),qe&&(t.directives=qe),xt&&ul(t)}function Md(t,e,n=tt){F(t)&&(t=zs(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=Fe(s.from||r,s.default,!0):i=Fe(s.from||r):i=Fe(s),ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function no(t,e,n){it(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pl(t,e,n,r){let s=r.includes(".")?Al(n,r):()=>n[r];if(ae(t)){const i=e[t];B(i)&&Hn(s,i)}else if(B(t))Hn(s,t.bind(n));else if(ie(t))if(F(t))t.forEach(i=>pl(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Hn(s,i,t)}}function gl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Mr(l,c,o,!0)),Mr(l,e,o)),ie(e)&&i.set(e,l),l}function Mr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Mr(t,i,n,!0),s&&s.forEach(o=>Mr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Dd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dd={data:ro,props:so,emits:so,methods:Nn,computed:Nn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Nn,directives:Nn,watch:Ld,provide:ro,inject:Nd};function ro(t,e){return e?t?function(){return me(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Nd(t,e){return Nn(zs(t),zs(e))}function zs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function Nn(t,e){return t?me(Object.create(null),t,e):e}function so(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:me(Object.create(null),to(t),to(e??{})):e}function Ld(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const r in e)n[r]=be(t[r],e[r]);return n}function ml(){return{app:null,config:{isNativeTag:Tu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $d=0;function Ud(t,e){return function(r,s=null){B(r)||(r=me({},r)),s!=null&&!ie(s)&&(s=null);const i=ml(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:$d++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(c,...d)):B(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,p){if(!l){const m=c._ceVNode||J(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),l=!0,c._container=u,u.__vue_app__=c,ss(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(it(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=vn;vn=c;try{return u()}finally{vn=d}}};return c}}let vn=null;function _r(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function Fe(t,e,n=!1){const r=pe||Ce;if(r||vn){const s=vn?vn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}const bl={},vl=()=>Object.create(bl),yl=t=>Object.getPrototypeOf(t)===bl;function Fd(t,e,n,r=!1){const s={},i=vl();t.propsDefaults=Object.create(null),_l(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:el(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(ns(t.emitsOptions,p))continue;const m=e[p];if(l)if(K(i,p))m!==i[p]&&(i[p]=m,c=!0);else{const E=De(p);s[E]=Ws(l,a,E,m,t,!1)}else m!==i[p]&&(i[p]=m,c=!0)}}}else{_l(t,e,s,i)&&(c=!0);let u;for(const d in a)(!e||!K(e,d)&&((u=tn(d))===d||!K(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Ws(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!K(e,d))&&(delete i[d],c=!0)}c&&ft(t.attrs,"set","")}function _l(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Un(l))continue;const c=e[l];let u;s&&K(s,u=De(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:ns(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=q(n),c=a||te;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Ws(s,l,d,c[d],t,!K(c,d))}}return o}function Ws(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=ar(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}const Vd=new WeakMap;function wl(t,e,n=!1){const r=n?Vd:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!B(t)){const u=d=>{l=!0;const[p,m]=wl(d,e,!0);me(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ie(t)&&r.set(t,pn),pn;if(F(i))for(let u=0;u<i.length;u++){const d=De(i[u]);io(d)&&(o[d]=te)}else if(i)for(const u in i){const d=De(u);if(io(d)){const p=i[u],m=o[d]=F(p)||B(p)?{type:p}:me({},p),E=m.type;let A=!1,j=!0;if(F(E))for(let M=0;M<E.length;++M){const k=E[M],N=B(k)&&k.name;if(N==="Boolean"){A=!0;break}else N==="String"&&(j=!1)}else A=B(E)&&E.name==="Boolean";m[0]=A,m[1]=j,(A||K(m,"default"))&&a.push(d)}}const c=[o,a];return ie(t)&&r.set(t,c),c}function io(t){return t[0]!=="$"&&!Un(t)}const Ei=t=>t[0]==="_"||t==="$stable",Si=t=>F(t)?t.map(Ze):[Ze(t)],Bd=(t,e,n)=>{if(e._n)return e;const r=ke((...s)=>Si(e(...s)),n);return r._c=!1,r},xl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ei(s))continue;const i=t[s];if(B(i))e[s]=Bd(s,i,r);else if(i!=null){const o=Si(i);e[s]=()=>o}}},Il=(t,e)=>{const n=Si(e);t.slots.default=()=>n},El=(t,e,n)=>{for(const r in e)(n||!Ei(r))&&(t[r]=e[r])},Hd=(t,e,n)=>{const r=t.slots=vl();if(t.vnode.shapeFlag&32){const s=e._;s?(El(r,e,n),n&&La(r,"_",s,!0)):xl(e,r)}else e&&Il(t,e)},zd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:El(s,e,n):(i=!e.$stable,xl(e,s)),o=e}else e&&(Il(t,e),o={default:1});if(i)for(const a in s)!Ei(a)&&o[a]==null&&delete s[a]},Te=sf;function Wd(t){return qd(t)}function qd(t,e){const n=Yr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=tt,insertStaticContent:E}=t,A=(f,h,g,b=null,_=null,y=null,S=void 0,I=null,x=!!h.dynamicChildren)=>{if(f===h)return;f&&!Mn(f,h)&&(b=v(f),_e(f,_,y,!0),f=null),h.patchFlag===-2&&(x=!1,h.dynamicChildren=null);const{type:w,ref:$,shapeFlag:C}=h;switch(w){case rs:j(f,h,g,b);break;case jt:M(f,h,g,b);break;case wr:f==null&&k(h,g,b,S);break;case Oe:Ht(f,h,g,b,_,y,S,I,x);break;default:C&1?Q(f,h,g,b,_,y,S,I,x):C&6?qe(f,h,g,b,_,y,S,I,x):(C&64||C&128)&&w.process(f,h,g,b,_,y,S,I,x,D)}$!=null&&_&&Or($,f&&f.ref,y,h||f,!h)},j=(f,h,g,b)=>{if(f==null)r(h.el=a(h.children),g,b);else{const _=h.el=f.el;h.children!==f.children&&c(_,h.children)}},M=(f,h,g,b)=>{f==null?r(h.el=l(h.children||""),g,b):h.el=f.el},k=(f,h,g,b)=>{[f.el,f.anchor]=E(f.children,h,g,b,f.el,f.anchor)},N=({el:f,anchor:h},g,b)=>{let _;for(;f&&f!==h;)_=p(f),r(f,g,b),f=_;r(h,g,b)},O=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},Q=(f,h,g,b,_,y,S,I,x)=>{h.type==="svg"?S="svg":h.type==="math"&&(S="mathml"),f==null?ce(h,g,b,_,y,S,I,x):xt(f,h,_,y,S,I,x)},ce=(f,h,g,b,_,y,S,I)=>{let x,w;const{props:$,shapeFlag:C,transition:L,dirs:V}=f;if(x=f.el=o(f.type,y,$&&$.is,$),C&8?u(x,f.children):C&16&&ze(f.children,x,null,b,_,_s(f,y),S,I),V&&zt(f,null,b,"created"),oe(x,f,f.scopeId,S,b),$){for(const re in $)re!=="value"&&!Un(re)&&i(x,re,null,$[re],y,b);"value"in $&&i(x,"value",null,$.value,y),(w=$.onVnodeBeforeMount)&&Xe(w,b,f)}V&&zt(f,null,b,"beforeMount");const H=Kd(_,L);H&&L.beforeEnter(x),r(x,h,g),((w=$&&$.onVnodeMounted)||H||V)&&Te(()=>{w&&Xe(w,b,f),H&&L.enter(x),V&&zt(f,null,b,"mounted")},_)},oe=(f,h,g,b,_)=>{if(g&&m(f,g),b)for(let y=0;y<b.length;y++)m(f,b[y]);if(_){let y=_.subTree;if(h===y||Pl(y.type)&&(y.ssContent===h||y.ssFallback===h)){const S=_.vnode;oe(f,S,S.scopeId,S.slotScopeIds,_.parent)}}},ze=(f,h,g,b,_,y,S,I,x=0)=>{for(let w=x;w<f.length;w++){const $=f[w]=I?At(f[w]):Ze(f[w]);A(null,$,h,g,b,_,y,S,I)}},xt=(f,h,g,b,_,y,S)=>{const I=h.el=f.el;let{patchFlag:x,dynamicChildren:w,dirs:$}=h;x|=f.patchFlag&16;const C=f.props||te,L=h.props||te;let V;if(g&&Wt(g,!1),(V=L.onVnodeBeforeUpdate)&&Xe(V,g,h,f),$&&zt(h,f,g,"beforeUpdate"),g&&Wt(g,!0),(C.innerHTML&&L.innerHTML==null||C.textContent&&L.textContent==null)&&u(I,""),w?We(f.dynamicChildren,w,I,g,b,_s(h,_),y):S||z(f,h,I,null,g,b,_s(h,_),y,!1),x>0){if(x&16)It(I,C,L,g,_);else if(x&2&&C.class!==L.class&&i(I,"class",null,L.class,_),x&4&&i(I,"style",C.style,L.style,_),x&8){const H=h.dynamicProps;for(let re=0;re<H.length;re++){const G=H[re],Ee=C[G],we=L[G];(we!==Ee||G==="value")&&i(I,G,Ee,we,_,g)}}x&1&&f.children!==h.children&&u(I,h.children)}else!S&&w==null&&It(I,C,L,g,_);((V=L.onVnodeUpdated)||$)&&Te(()=>{V&&Xe(V,g,h,f),$&&zt(h,f,g,"updated")},b)},We=(f,h,g,b,_,y,S)=>{for(let I=0;I<h.length;I++){const x=f[I],w=h[I],$=x.el&&(x.type===Oe||!Mn(x,w)||x.shapeFlag&70)?d(x.el):g;A(x,w,$,null,b,_,y,S,!0)}},It=(f,h,g,b,_)=>{if(h!==g){if(h!==te)for(const y in h)!Un(y)&&!(y in g)&&i(f,y,h[y],null,_,b);for(const y in g){if(Un(y))continue;const S=g[y],I=h[y];S!==I&&y!=="value"&&i(f,y,I,S,_,b)}"value"in g&&i(f,"value",h.value,g.value,_)}},Ht=(f,h,g,b,_,y,S,I,x)=>{const w=h.el=f?f.el:a(""),$=h.anchor=f?f.anchor:a("");let{patchFlag:C,dynamicChildren:L,slotScopeIds:V}=h;V&&(I=I?I.concat(V):V),f==null?(r(w,g,b),r($,g,b),ze(h.children||[],g,$,_,y,S,I,x)):C>0&&C&64&&L&&f.dynamicChildren?(We(f.dynamicChildren,L,g,_,y,S,I),(h.key!=null||_&&h===_.subTree)&&Sl(f,h,!0)):z(f,h,g,$,_,y,S,I,x)},qe=(f,h,g,b,_,y,S,I,x)=>{h.slotScopeIds=I,f==null?h.shapeFlag&512?_.ctx.activate(h,g,b,S,x):Pn(h,g,b,_,y,S,x):on(f,h,x)},Pn=(f,h,g,b,_,y,S)=>{const I=f.component=ff(f,b,_);if(dl(f)&&(I.ctx.renderer=D),hf(I,!1,S),I.asyncDep){if(_&&_.registerDep(I,le,S),!f.el){const x=I.subTree=J(jt);M(null,x,h,g)}}else le(I,f,h,g,_,y,S)},on=(f,h,g)=>{const b=h.component=f.component;if(nf(f,h,g))if(b.asyncDep&&!b.asyncResolved){X(b,h,g);return}else b.next=h,b.update();else h.el=f.el,b.vnode=h},le=(f,h,g,b,_,y,S)=>{const I=()=>{if(f.isMounted){let{next:C,bu:L,u:V,parent:H,vnode:re}=f;{const Je=Tl(f);if(Je){C&&(C.el=re.el,X(f,C,S)),Je.asyncDep.then(()=>{f.isUnmounted||I()});return}}let G=C,Ee;Wt(f,!1),C?(C.el=re.el,X(f,C,S)):C=re,L&&yr(L),(Ee=C.props&&C.props.onVnodeBeforeUpdate)&&Xe(Ee,H,C,re),Wt(f,!0);const we=ao(f),Ge=f.subTree;f.subTree=we,A(Ge,we,d(Ge.el),v(Ge),f,_,y),C.el=we.el,G===null&&rf(f,we.el),V&&Te(V,_),(Ee=C.props&&C.props.onVnodeUpdated)&&Te(()=>Xe(Ee,H,C,re),_)}else{let C;const{el:L,props:V}=h,{bm:H,m:re,parent:G,root:Ee,type:we}=f,Ge=Vn(h);Wt(f,!1),H&&yr(H),!Ge&&(C=V&&V.onVnodeBeforeMount)&&Xe(C,G,h),Wt(f,!0);{Ee.ce&&Ee.ce._injectChildStyle(we);const Je=f.subTree=ao(f);A(null,Je,g,b,f,_,y),h.el=Je.el}if(re&&Te(re,_),!Ge&&(C=V&&V.onVnodeMounted)){const Je=h;Te(()=>Xe(C,G,Je),_)}(h.shapeFlag&256||G&&Vn(G.vnode)&&G.vnode.shapeFlag&256)&&f.a&&Te(f.a,_),f.isMounted=!0,h=g=b=null}};f.scope.on();const x=f.effect=new ja(I);f.scope.off();const w=f.update=x.run.bind(x),$=f.job=x.runIfDirty.bind(x);$.i=f,$.id=f.uid,x.scheduler=()=>_i($),Wt(f,!0),w()},X=(f,h,g)=>{h.component=f;const b=f.vnode.props;f.vnode=h,f.next=null,jd(f,h.props,b,g),zd(f,h.children,g),mt(),Qi(f),bt()},z=(f,h,g,b,_,y,S,I,x=!1)=>{const w=f&&f.children,$=f?f.shapeFlag:0,C=h.children,{patchFlag:L,shapeFlag:V}=h;if(L>0){if(L&128){Et(w,C,g,b,_,y,S,I,x);return}else if(L&256){lt(w,C,g,b,_,y,S,I,x);return}}V&8?($&16&&Pe(w,_,y),C!==w&&u(g,C)):$&16?V&16?Et(w,C,g,b,_,y,S,I,x):Pe(w,_,y,!0):($&8&&u(g,""),V&16&&ze(C,g,b,_,y,S,I,x))},lt=(f,h,g,b,_,y,S,I,x)=>{f=f||pn,h=h||pn;const w=f.length,$=h.length,C=Math.min(w,$);let L;for(L=0;L<C;L++){const V=h[L]=x?At(h[L]):Ze(h[L]);A(f[L],V,g,null,_,y,S,I,x)}w>$?Pe(f,_,y,!0,!1,C):ze(h,g,b,_,y,S,I,x,C)},Et=(f,h,g,b,_,y,S,I,x)=>{let w=0;const $=h.length;let C=f.length-1,L=$-1;for(;w<=C&&w<=L;){const V=f[w],H=h[w]=x?At(h[w]):Ze(h[w]);if(Mn(V,H))A(V,H,g,null,_,y,S,I,x);else break;w++}for(;w<=C&&w<=L;){const V=f[C],H=h[L]=x?At(h[L]):Ze(h[L]);if(Mn(V,H))A(V,H,g,null,_,y,S,I,x);else break;C--,L--}if(w>C){if(w<=L){const V=L+1,H=V<$?h[V].el:b;for(;w<=L;)A(null,h[w]=x?At(h[w]):Ze(h[w]),g,H,_,y,S,I,x),w++}}else if(w>L)for(;w<=C;)_e(f[w],_,y,!0),w++;else{const V=w,H=w,re=new Map;for(w=H;w<=L;w++){const Se=h[w]=x?At(h[w]):Ze(h[w]);Se.key!=null&&re.set(Se.key,w)}let G,Ee=0;const we=L-H+1;let Ge=!1,Je=0;const kn=new Array(we);for(w=0;w<we;w++)kn[w]=0;for(w=V;w<=C;w++){const Se=f[w];if(Ee>=we){_e(Se,_,y,!0);continue}let Ye;if(Se.key!=null)Ye=re.get(Se.key);else for(G=H;G<=L;G++)if(kn[G-H]===0&&Mn(Se,h[G])){Ye=G;break}Ye===void 0?_e(Se,_,y,!0):(kn[Ye-H]=w+1,Ye>=Je?Je=Ye:Ge=!0,A(Se,h[Ye],g,null,_,y,S,I,x),Ee++)}const Ki=Ge?Gd(kn):pn;for(G=Ki.length-1,w=we-1;w>=0;w--){const Se=H+w,Ye=h[Se],Gi=Se+1<$?h[Se+1].el:b;kn[w]===0?A(null,Ye,g,Gi,_,y,S,I,x):Ge&&(G<0||w!==Ki[G]?Ke(Ye,g,Gi,2):G--)}}},Ke=(f,h,g,b,_=null)=>{const{el:y,type:S,transition:I,children:x,shapeFlag:w}=f;if(w&6){Ke(f.component.subTree,h,g,b);return}if(w&128){f.suspense.move(h,g,b);return}if(w&64){S.move(f,h,g,D);return}if(S===Oe){r(y,h,g);for(let C=0;C<x.length;C++)Ke(x[C],h,g,b);r(f.anchor,h,g);return}if(S===wr){N(f,h,g);return}if(b!==2&&w&1&&I)if(b===0)I.beforeEnter(y),r(y,h,g),Te(()=>I.enter(y),_);else{const{leave:C,delayLeave:L,afterLeave:V}=I,H=()=>{f.ctx.isUnmounted?s(y):r(y,h,g)},re=()=>{C(y,()=>{H(),V&&V()})};L?L(y,H,re):re()}else r(y,h,g)},_e=(f,h,g,b=!1,_=!1)=>{const{type:y,props:S,ref:I,children:x,dynamicChildren:w,shapeFlag:$,patchFlag:C,dirs:L,cacheIndex:V}=f;if(C===-2&&(_=!1),I!=null&&(mt(),Or(I,null,g,f,!0),bt()),V!=null&&(h.renderCache[V]=void 0),$&256){h.ctx.deactivate(f);return}const H=$&1&&L,re=!Vn(f);let G;if(re&&(G=S&&S.onVnodeBeforeUnmount)&&Xe(G,h,f),$&6)pr(f.component,g,b);else{if($&128){f.suspense.unmount(g,b);return}H&&zt(f,null,h,"beforeUnmount"),$&64?f.type.remove(f,h,g,D,b):w&&!w.hasOnce&&(y!==Oe||C>0&&C&64)?Pe(w,h,g,!1,!0):(y===Oe&&C&384||!_&&$&16)&&Pe(x,h,g),b&&an(f)}(re&&(G=S&&S.onVnodeUnmounted)||H)&&Te(()=>{G&&Xe(G,h,f),H&&zt(f,null,h,"unmounted")},g)},an=f=>{const{type:h,el:g,anchor:b,transition:_}=f;if(h===Oe){ln(g,b);return}if(h===wr){O(f);return}const y=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,x=()=>S(g,y);I?I(f.el,y,x):x()}else y()},ln=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},pr=(f,h,g)=>{const{bum:b,scope:_,job:y,subTree:S,um:I,m:x,a:w,parent:$,slots:{__:C}}=f;oo(x),oo(w),b&&yr(b),$&&F(C)&&C.forEach(L=>{$.renderCache[L]=void 0}),_.stop(),y&&(y.flags|=8,_e(S,f,h,g)),I&&Te(I,h),Te(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Pe=(f,h,g,b=!1,_=!1,y=0)=>{for(let S=y;S<f.length;S++)_e(f[S],h,g,b,_)},v=f=>{if(f.shapeFlag&6)return v(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),g=h&&h[pd];return g?p(g):h};let R=!1;const T=(f,h,g)=>{f==null?h._vnode&&_e(h._vnode,null,null,!0):A(h._vnode||null,f,h,null,null,null,g),h._vnode=f,R||(R=!0,Qi(),al(),R=!1)},D={p:A,um:_e,m:Ke,r:an,mt:Pn,mc:ze,pc:z,pbc:We,n:v,o:t};return{render:T,hydrate:void 0,createApp:Ud(T)}}function _s({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Kd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sl(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=At(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Sl(o,a)),a.type===rs&&(a.el=o.el),a.type===jt&&!a.el&&(a.el=o.el)}}function Gd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tl(e)}function oo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Jd=Symbol.for("v-scx"),Yd=()=>Fe(Jd);function Hn(t,e,n){return Cl(t,e,n)}function Cl(t,e,n=te){const{immediate:r,deep:s,flush:i,once:o}=n,a=me({},n),l=e&&r||!e&&i!=="post";let c;if(er){if(i==="sync"){const m=Yd();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=tt,m.resume=tt,m.pause=tt,m}}const u=pe;a.call=(m,E,A)=>it(m,u,E,A);let d=!1;i==="post"?a.scheduler=m=>{Te(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,E)=>{E?m():_i(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=ud(t,e,a);return er&&(c?c.push(p):l&&p()),p}function Xd(t,e,n){const r=this.proxy,s=ae(t)?t.includes(".")?Al(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=ar(this),a=Cl(s,i.bind(r),n);return o(),a}function Al(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Qd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${tn(e)}Modifiers`];function Zd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&Qd(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ae(u)?u.trim():u)),o.number&&(s=n.map($s)));let a,l=r[a=ps(e)]||r[a=ps(De(e))];!l&&i&&(l=r[a=ps(tn(e))]),l&&it(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,it(c,t,6,s)}}function Rl(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=Rl(c,e,!0);u&&(a=!0,me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ie(t)&&r.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):me(o,i),ie(t)&&r.set(t,o),o)}function ns(t,e){return!t||!qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,tn(e))||K(t,e))}function ao(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:p,setupState:m,ctx:E,inheritAttrs:A}=t,j=kr(t);let M,k;try{if(n.shapeFlag&4){const O=s||r,Q=O;M=Ze(c.call(Q,O,u,d,m,p,E)),k=a}else{const O=e;M=Ze(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),k=e.props?a:ef(a)}}catch(O){zn.length=0,Zr(O,t,1),M=J(jt)}let N=M;if(k&&A!==!1){const O=Object.keys(k),{shapeFlag:Q}=N;O.length&&Q&7&&(i&&O.some(li)&&(k=tf(k,i)),N=xn(N,k,!1,!0))}return n.dirs&&(N=xn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&wi(N,n.transition),M=N,kr(j),M}const ef=t=>{let e;for(const n in t)(n==="class"||n==="style"||qr(n))&&((e||(e={}))[n]=t[n]);return e},tf=(t,e)=>{const n={};for(const r in t)(!li(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?lo(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!ns(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?lo(r,o,c):!0:!!o;return!1}function lo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ns(n,i))return!0}return!1}function rf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Pl=t=>t.__isSuspense;function sf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):hd(t)}const Oe=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),zn=[];let Ae=null;function Y(t=!1){zn.push(Ae=t?null:[])}function of(){zn.pop(),Ae=zn[zn.length-1]||null}let Zn=1;function co(t,e=!1){Zn+=t,t<0&&Ae&&e&&(Ae.hasOnce=!0)}function kl(t){return t.dynamicChildren=Zn>0?Ae||pn:null,of(),Zn>0&&Ae&&Ae.push(t),t}function ne(t,e,n,r,s,i){return kl(P(t,e,n,r,s,i,!0))}function Ol(t,e,n,r,s){return kl(J(t,e,n,r,s,!0))}function Dr(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const Ml=({key:t})=>t??null,xr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||ge(t)||B(t)?{i:Ce,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===Oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ml(e),ref:e&&xr(e),scopeId:cl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ce};return a?(Ti(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),Zn>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const J=af;function af(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ad)&&(t=jt),Dr(t)){const a=xn(t,e,!0);return n&&Ti(a,n),Zn>0&&!i&&Ae&&(a.shapeFlag&6?Ae[Ae.indexOf(t)]=a:Ae.push(a)),a.patchFlag=-2,a}if(vf(t)&&(t=t.__vccOpts),e){e=lf(e);let{class:a,style:l}=e;a&&!ae(a)&&(e.class=fi(a)),ie(l)&&(yi(l)&&!F(l)&&(l=me({},l)),e.style=di(l))}const o=ae(t)?1:Pl(t)?128:gd(t)?64:ie(t)?4:B(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function lf(t){return t?yi(t)||yl(t)?me({},t):t:null}function xn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?cf(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ml(c),ref:e&&e.ref?n&&i?F(i)?i.concat(xr(e)):[i,xr(e)]:xr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&wi(u,l.clone(u)),u}function fe(t=" ",e=0){return J(rs,null,t,e)}function je(t,e){const n=J(wr,null,t);return n.staticCount=e,n}function In(t="",e=!1){return e?(Y(),Ol(jt,null,t)):J(jt,null,t)}function Ze(t){return t==null||typeof t=="boolean"?J(jt):F(t)?J(Oe,null,t.slice()):Dr(t)?At(t):J(rs,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xn(t)}function Ti(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ti(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!yl(e)?e._ctx=Ce:s===3&&Ce&&(Ce.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ce},n=32):(e=String(e),r&64?(n=16,e=[fe(e)]):n=8);t.children=e,t.shapeFlag|=n}function cf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fi([e.class,r.class]));else if(s==="style")e.style=di([e.style,r.style]);else if(qr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xe(t,e,n,r=null){it(t,e,7,[n,r])}const uf=ml();let df=0;function ff(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uf,i={uid:df++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $u(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wl(r,s),emitsOptions:Rl(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zd.bind(null,i),t.ce&&t.ce(i),i}let pe=null,Nr,qs;{const t=Yr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Nr=e("__VUE_INSTANCE_SETTERS__",n=>pe=n),qs=e("__VUE_SSR_SETTERS__",n=>er=n)}const ar=t=>{const e=pe;return Nr(t),t.scope.on(),()=>{t.scope.off(),Nr(e)}},uo=()=>{pe&&pe.scope.off(),Nr(null)};function Dl(t){return t.vnode.shapeFlag&4}let er=!1;function hf(t,e=!1,n=!1){e&&qs(e);const{props:r,children:s}=t.vnode,i=Dl(t);Fd(t,r,i,e),Hd(t,s,n||e);const o=i?pf(t,e):void 0;return e&&qs(!1),o}function pf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kd);const{setup:r}=n;if(r){mt();const s=t.setupContext=r.length>1?mf(t):null,i=ar(t),o=or(r,t,0,[t.props,s]),a=Ma(o);if(bt(),i(),(a||t.sp)&&!Vn(t)&&ul(t),a){if(o.then(uo,uo),e)return o.then(l=>{fo(t,l)}).catch(l=>{Zr(l,t,0)});t.asyncDep=o}else fo(t,o)}else Nl(t)}function fo(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=rl(e)),Nl(t)}function Nl(t,e,n){const r=t.type;t.render||(t.render=r.render||tt);{const s=ar(t);mt();try{Od(t)}finally{bt(),s()}}}const gf={get(t,e){return he(t,"get",""),t[e]}};function mf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gf),slots:t.slots,emit:t.emit,expose:e}}function ss(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rl(rd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bn)return Bn[n](t)},has(e,n){return n in e||n in Bn}})):t.proxy}function bf(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function vf(t){return B(t)&&"__vccOpts"in t}const Ne=(t,e)=>ld(t,e,er);function Ll(t,e,n){const r=arguments.length;return r===2?ie(e)&&!F(e)?Dr(e)?J(t,null,[e]):J(t,e):J(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Dr(n)&&(n=[n]),J(t,e,n))}const yf="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ks;const ho=typeof window<"u"&&window.trustedTypes;if(ho)try{Ks=ho.createPolicy("vue",{createHTML:t=>t})}catch{}const $l=Ks?t=>Ks.createHTML(t):t=>t,_f="http://www.w3.org/2000/svg",wf="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,po=dt&&dt.createElement("template"),xf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dt.createElementNS(_f,t):e==="mathml"?dt.createElementNS(wf,t):n?dt.createElement(t,{is:n}):dt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dt.createTextNode(t),createComment:t=>dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{po.innerHTML=$l(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=po.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},If=Symbol("_vtc");function Ef(t,e,n){const r=t[If];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const go=Symbol("_vod"),Sf=Symbol("_vsh"),Tf=Symbol(""),Cf=/(^|;)\s*display\s*:/;function Af(t,e,n){const r=t.style,s=ae(n);let i=!1;if(n&&!s){if(e)if(ae(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ir(r,a,"")}else for(const o in e)n[o]==null&&Ir(r,o,"");for(const o in n)o==="display"&&(i=!0),Ir(r,o,n[o])}else if(s){if(e!==n){const o=r[Tf];o&&(n+=";"+o),r.cssText=n,i=Cf.test(n)}}else e&&t.removeAttribute("style");go in t&&(t[go]=i?r.display:"",t[Sf]&&(r.display="none"))}const mo=/\s*!important$/;function Ir(t,e,n){if(F(n))n.forEach(r=>Ir(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Rf(t,e);mo.test(n)?t.setProperty(tn(r),n.replace(mo,""),"important"):t[r]=n}}const bo=["Webkit","Moz","ms"],ws={};function Rf(t,e){const n=ws[e];if(n)return n;let r=De(e);if(r!=="filter"&&r in t)return ws[e]=r;r=Jr(r);for(let s=0;s<bo.length;s++){const i=bo[s]+r;if(i in t)return ws[e]=i}return e}const vo="http://www.w3.org/1999/xlink";function yo(t,e,n,r,s,i=Lu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vo,e.slice(6,e.length)):t.setAttributeNS(vo,e,n):n==null||i&&!$a(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Vt(n)?String(n):n)}function _o(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$l(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=$a(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function dn(t,e,n,r){t.addEventListener(e,n,r)}function Pf(t,e,n,r){t.removeEventListener(e,n,r)}const wo=Symbol("_vei");function kf(t,e,n,r,s=null){const i=t[wo]||(t[wo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Of(e);if(r){const c=i[e]=Nf(r,s);dn(t,a,c,l)}else o&&(Pf(t,a,o,l),i[e]=void 0)}}const xo=/(?:Once|Passive|Capture)$/;function Of(t){let e;if(xo.test(t)){e={};let r;for(;r=t.match(xo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tn(t.slice(2)),e]}let xs=0;const Mf=Promise.resolve(),Df=()=>xs||(Mf.then(()=>xs=0),xs=Date.now());function Nf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;it(Lf(r,n.value),e,5,[r])};return n.value=t,n.attached=Df(),n}function Lf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Io=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$f=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Ef(t,r,o):e==="style"?Af(t,n,r):qr(e)?li(e)||kf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uf(t,e,r,o))?(_o(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ae(r))?_o(t,De(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yo(t,e,r,o))};function Uf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Io(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Io(e)&&ae(n)?!1:e in t}const Eo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>yr(e,n):e};function Ff(t){t.target.composing=!0}function So(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Is=Symbol("_assign"),To={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Is]=Eo(s);const i=r||s.props&&s.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=$s(a)),t[Is](a)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Ff),dn(t,"compositionend",So),dn(t,"change",So))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Is]=Eo(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?$s(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},jf=["ctrl","shift","alt","meta"],Vf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jf.some(n=>t[`${n}Key`]&&!e.includes(n))},Bf=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Vf[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Hf=me({patchProp:$f},xf);let Co;function zf(){return Co||(Co=Wd(Hf))}const Wf=(...t)=>{const e=zf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Kf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Kf(t){return ae(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const fn=typeof document<"u";function Ul(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ul(t.default)}const W=Object.assign;function Es(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ve(s)?s.map(t):t(s)}return n}const Wn=()=>{},Ve=Array.isArray,Fl=/#/g,Jf=/&/g,Yf=/\//g,Xf=/=/g,Qf=/\?/g,jl=/\+/g,Zf=/%5B/g,eh=/%5D/g,Vl=/%5E/g,th=/%60/g,Bl=/%7B/g,nh=/%7C/g,Hl=/%7D/g,rh=/%20/g;function Ci(t){return encodeURI(""+t).replace(nh,"|").replace(Zf,"[").replace(eh,"]")}function sh(t){return Ci(t).replace(Bl,"{").replace(Hl,"}").replace(Vl,"^")}function Gs(t){return Ci(t).replace(jl,"%2B").replace(rh,"+").replace(Fl,"%23").replace(Jf,"%26").replace(th,"`").replace(Bl,"{").replace(Hl,"}").replace(Vl,"^")}function ih(t){return Gs(t).replace(Xf,"%3D")}function oh(t){return Ci(t).replace(Fl,"%23").replace(Qf,"%3F")}function ah(t){return t==null?"":oh(t).replace(Yf,"%2F")}function tr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const lh=/\/$/,ch=t=>t.replace(lh,"");function Ss(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=hh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:tr(o)}}function uh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ao(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&En(e.matched[r],n.matched[s])&&zl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function En(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fh(t[n],e[n]))return!1;return!0}function fh(t,e){return Ve(t)?Ro(t,e):Ve(e)?Ro(e,t):t===e}function Ro(t,e){return Ve(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var nr;(function(t){t.pop="pop",t.push="push"})(nr||(nr={}));var qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qn||(qn={}));function ph(t){if(!t)if(fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ch(t)}const gh=/^[^#]+#/;function mh(t,e){return t.replace(gh,"#")+e}function bh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const is=()=>({left:window.scrollX,top:window.scrollY});function vh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Po(t,e){return(history.state?history.state.position-e:-1)+t}const Js=new Map;function yh(t,e){Js.set(t,e)}function _h(t){const e=Js.get(t);return Js.delete(t),e}let wh=()=>location.protocol+"//"+location.host;function Wl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ao(l,"")}return Ao(n,t)+r+s}function xh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Wl(t,location),E=n.value,A=e.value;let j=0;if(p){if(n.value=m,e.value=p,o&&o===E){o=null;return}j=A?p.position-A.position:0}else r(m);s.forEach(M=>{M(n.value,E,{delta:j,type:nr.pop,direction:j?j>0?qn.forward:qn.back:qn.unknown})})};function l(){o=n.value}function c(p){s.push(p);const m=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(W({},p.state,{scroll:is()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function ko(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?is():null}}function Ih(t){const{history:e,location:n}=window,r={value:Wl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:wh()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(l,c){const u=W({},e.state,ko(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=W({},s.value,e.state,{forward:l,scroll:is()});i(u.current,u,!0);const d=W({},ko(r.value,l,null),{position:u.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Eh(t){t=ph(t);const e=Ih(t),n=xh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=W({location:"",base:t,go:r,createHref:mh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Sh(t){return typeof t=="string"||t&&typeof t=="object"}function ql(t){return typeof t=="string"||typeof t=="symbol"}const Kl=Symbol("");var Oo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oo||(Oo={}));function Sn(t,e){return W(new Error,{type:t,[Kl]:!0},e)}function ut(t,e){return t instanceof Error&&Kl in t&&(e==null||!!(t.type&e))}const Mo="[^/]+?",Th={sensitive:!1,strict:!1,start:!0,end:!0},Ch=/[.+*?^${}()[\]/\\]/g;function Ah(t,e){const n=W({},Th,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const p=c[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Ch,"\\$&"),m+=40;else if(p.type===1){const{value:E,repeatable:A,optional:j,regexp:M}=p;i.push({name:E,repeatable:A,optional:j});const k=M||Mo;if(k!==Mo){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${E}" (${k}): `+O.message)}}let N=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(N=j&&c.length<2?`(?:/${N})`:"/"+N),j&&(N+="?"),s+=N,m+=20,j&&(m+=-8),A&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",E=i[p-1];d[E.name]=m&&E.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:A,optional:j}=m,M=E in c?c[E]:"";if(Ve(M)&&!A)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const k=Ve(M)?M.join("/"):M;if(!k)if(j)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Rh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Gl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Rh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Do(r))return 1;if(Do(s))return-1}return s.length-r.length}function Do(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ph={type:0,value:""},kh=/[a-zA-Z0-9_]/;function Oh(t){if(!t)return[[]];if(t==="/")return[[Ph]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:kh.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function Mh(t,e,n){const r=Ah(Oh(t.path),n),s=W(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Dh(t,e){const n=[],r=new Map;e=Uo({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const E=!m,A=Lo(d);A.aliasOf=m&&m.record;const j=Uo(e,d),M=[A];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const Q of O)M.push(Lo(W({},A,{components:m?m.record.components:A.components,path:Q,aliasOf:m?m.record:A})))}let k,N;for(const O of M){const{path:Q}=O;if(p&&Q[0]!=="/"){const ce=p.record.path,oe=ce[ce.length-1]==="/"?"":"/";O.path=p.record.path+(Q&&oe+Q)}if(k=Mh(O,p,j),m?m.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),E&&d.name&&!$o(k)&&o(d.name)),Jl(k)&&l(k),A.children){const ce=A.children;for(let oe=0;oe<ce.length;oe++)i(ce[oe],k,m&&m.children[oe])}m=m||k}return N?()=>{o(N)}:Wn}function o(d){if(ql(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=$h(d,n);n.splice(p,0,d),d.record.name&&!$o(d)&&r.set(d.record.name,d)}function c(d,p){let m,E={},A,j;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Sn(1,{location:d});j=m.record.name,E=W(No(p.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&No(d.params,m.keys.map(N=>N.name))),A=m.stringify(E)}else if(d.path!=null)A=d.path,m=n.find(N=>N.re.test(A)),m&&(E=m.parse(A),j=m.record.name);else{if(m=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!m)throw Sn(1,{location:d,currentLocation:p});j=m.record.name,E=W({},p.params,d.params),A=m.stringify(E)}const M=[];let k=m;for(;k;)M.unshift(k.record),k=k.parent;return{name:j,path:A,params:E,matched:M,meta:Lh(M)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function No(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Nh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Nh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $o(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lh(t){return t.reduce((e,n)=>W(e,n.meta),{})}function Uo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $h(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Gl(t,e[i])<0?r=i:n=i+1}const s=Uh(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Uh(t){let e=t;for(;e=e.parent;)if(Jl(e)&&Gl(t,e)===0)return e}function Jl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Fh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(jl," "),o=i.indexOf("="),a=tr(o<0?i:i.slice(0,o)),l=o<0?null:tr(i.slice(o+1));if(a in e){let c=e[a];Ve(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fo(t){let e="";for(let n in t){const r=t[n];if(n=ih(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ve(r)?r.map(i=>i&&Gs(i)):[r&&Gs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function jh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Vh=Symbol(""),jo=Symbol(""),os=Symbol(""),Ai=Symbol(""),Ys=Symbol("");function Dn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=p=>{p===!1?l(Sn(4,{from:n,to:e})):p instanceof Error?l(p):Sh(p)?l(Sn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(p=>l(p))})}function Ts(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Ul(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Rt(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=Gf(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Rt(m,n,r,o,a,s)()}))}}return i}function Vo(t){const e=Fe(os),n=Fe(Ai),r=Ne(()=>{const l=Yt(t.to);return e.resolve(l)}),s=Ne(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(En.bind(null,u));if(p>-1)return p;const m=Bo(l[c-2]);return c>1&&Bo(u)===m&&d[d.length-1].path!==m?d.findIndex(En.bind(null,l[c-2])):p}),i=Ne(()=>s.value>-1&&qh(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&zl(n.params,r.value.params));function a(l={}){if(Wh(l)){const c=e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(Wn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Bh(t){return t.length===1?t[0]:t}const Hh=xi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Vo,setup(t,{slots:e}){const n=Qr(Vo(t)),{options:r}=Fe(os),s=Ne(()=>({[Ho(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ho(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Bh(e.default(n));return t.custom?i:Ll("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zh=Hh;function Wh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ho=(t,e,n)=>t??e??n,Kh=xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Fe(Ys),s=Ne(()=>t.route||r.value),i=Fe(jo,0),o=Ne(()=>{let c=Yt(i);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ne(()=>s.value.matched[o.value]);_r(jo,Ne(()=>o.value+1)),_r(Vh,a),_r(Ys,s);const l=Le();return Hn(()=>[l.value,a.value,t.name],([c,u,d],[p,m,E])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!En(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return zo(n.default,{Component:p,route:c});const m=d.props[u],E=m?m===!0?c.params:typeof m=="function"?m(c):m:null,j=Ll(p,W({},E,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return zo(n.default,{Component:j,route:c})||j}}});function zo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gh=Kh;function Jh(t){const e=Dh(t.routes,t),n=t.parseQuery||Fh,r=t.stringifyQuery||Fo,s=t.history,i=Dn(),o=Dn(),a=Dn(),l=sd(St);let c=St;fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Es.bind(null,v=>""+v),d=Es.bind(null,ah),p=Es.bind(null,tr);function m(v,R){let T,D;return ql(v)?(T=e.getRecordMatcher(v),D=R):D=v,e.addRoute(D,T)}function E(v){const R=e.getRecordMatcher(v);R&&e.removeRoute(R)}function A(){return e.getRoutes().map(v=>v.record)}function j(v){return!!e.getRecordMatcher(v)}function M(v,R){if(R=W({},R||l.value),typeof v=="string"){const g=Ss(n,v,R.path),b=e.resolve({path:g.path},R),_=s.createHref(g.fullPath);return W(g,b,{params:p(b.params),hash:tr(g.hash),redirectedFrom:void 0,href:_})}let T;if(v.path!=null)T=W({},v,{path:Ss(n,v.path,R.path).path});else{const g=W({},v.params);for(const b in g)g[b]==null&&delete g[b];T=W({},v,{params:d(g)}),R.params=d(R.params)}const D=e.resolve(T,R),Z=v.hash||"";D.params=u(p(D.params));const f=uh(r,W({},v,{hash:sh(Z),path:D.path})),h=s.createHref(f);return W({fullPath:f,hash:Z,query:r===Fo?jh(v.query):v.query||{}},D,{redirectedFrom:void 0,href:h})}function k(v){return typeof v=="string"?Ss(n,v,l.value.path):W({},v)}function N(v,R){if(c!==v)return Sn(8,{from:R,to:v})}function O(v){return oe(v)}function Q(v){return O(W(k(v),{replace:!0}))}function ce(v){const R=v.matched[v.matched.length-1];if(R&&R.redirect){const{redirect:T}=R;let D=typeof T=="function"?T(v):T;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),W({query:v.query,hash:v.hash,params:D.path!=null?{}:v.params},D)}}function oe(v,R){const T=c=M(v),D=l.value,Z=v.state,f=v.force,h=v.replace===!0,g=ce(T);if(g)return oe(W(k(g),{state:typeof g=="object"?W({},Z,g.state):Z,force:f,replace:h}),R||T);const b=T;b.redirectedFrom=R;let _;return!f&&dh(r,D,T)&&(_=Sn(16,{to:b,from:D}),Ke(D,D,!0,!1)),(_?Promise.resolve(_):We(b,D)).catch(y=>ut(y)?ut(y,2)?y:Et(y):z(y,b,D)).then(y=>{if(y){if(ut(y,2))return oe(W({replace:h},k(y.to),{state:typeof y.to=="object"?W({},Z,y.to.state):Z,force:f}),R||b)}else y=Ht(b,D,!0,h,Z);return It(b,D,y),y})}function ze(v,R){const T=N(v,R);return T?Promise.reject(T):Promise.resolve()}function xt(v){const R=ln.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(v):v()}function We(v,R){let T;const[D,Z,f]=Yh(v,R);T=Ts(D.reverse(),"beforeRouteLeave",v,R);for(const g of D)g.leaveGuards.forEach(b=>{T.push(Rt(b,v,R))});const h=ze.bind(null,v,R);return T.push(h),Pe(T).then(()=>{T=[];for(const g of i.list())T.push(Rt(g,v,R));return T.push(h),Pe(T)}).then(()=>{T=Ts(Z,"beforeRouteUpdate",v,R);for(const g of Z)g.updateGuards.forEach(b=>{T.push(Rt(b,v,R))});return T.push(h),Pe(T)}).then(()=>{T=[];for(const g of f)if(g.beforeEnter)if(Ve(g.beforeEnter))for(const b of g.beforeEnter)T.push(Rt(b,v,R));else T.push(Rt(g.beforeEnter,v,R));return T.push(h),Pe(T)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),T=Ts(f,"beforeRouteEnter",v,R,xt),T.push(h),Pe(T))).then(()=>{T=[];for(const g of o.list())T.push(Rt(g,v,R));return T.push(h),Pe(T)}).catch(g=>ut(g,8)?g:Promise.reject(g))}function It(v,R,T){a.list().forEach(D=>xt(()=>D(v,R,T)))}function Ht(v,R,T,D,Z){const f=N(v,R);if(f)return f;const h=R===St,g=fn?history.state:{};T&&(D||h?s.replace(v.fullPath,W({scroll:h&&g&&g.scroll},Z)):s.push(v.fullPath,Z)),l.value=v,Ke(v,R,T,h),Et()}let qe;function Pn(){qe||(qe=s.listen((v,R,T)=>{if(!pr.listening)return;const D=M(v),Z=ce(D);if(Z){oe(W(Z,{replace:!0,force:!0}),D).catch(Wn);return}c=D;const f=l.value;fn&&yh(Po(f.fullPath,T.delta),is()),We(D,f).catch(h=>ut(h,12)?h:ut(h,2)?(oe(W(k(h.to),{force:!0}),D).then(g=>{ut(g,20)&&!T.delta&&T.type===nr.pop&&s.go(-1,!1)}).catch(Wn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(h,D,f))).then(h=>{h=h||Ht(D,f,!1),h&&(T.delta&&!ut(h,8)?s.go(-T.delta,!1):T.type===nr.pop&&ut(h,20)&&s.go(-1,!1)),It(D,f,h)}).catch(Wn)}))}let on=Dn(),le=Dn(),X;function z(v,R,T){Et(v);const D=le.list();return D.length?D.forEach(Z=>Z(v,R,T)):console.error(v),Promise.reject(v)}function lt(){return X&&l.value!==St?Promise.resolve():new Promise((v,R)=>{on.add([v,R])})}function Et(v){return X||(X=!v,Pn(),on.list().forEach(([R,T])=>v?T(v):R()),on.reset()),v}function Ke(v,R,T,D){const{scrollBehavior:Z}=t;if(!fn||!Z)return Promise.resolve();const f=!T&&_h(Po(v.fullPath,0))||(D||!T)&&history.state&&history.state.scroll||null;return il().then(()=>Z(v,R,f)).then(h=>h&&vh(h)).catch(h=>z(h,v,R))}const _e=v=>s.go(v);let an;const ln=new Set,pr={currentRoute:l,listening:!0,addRoute:m,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:j,getRoutes:A,resolve:M,options:t,push:O,replace:Q,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:lt,install(v){const R=this;v.component("RouterLink",zh),v.component("RouterView",Gh),v.config.globalProperties.$router=R,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(l)}),fn&&!an&&l.value===St&&(an=!0,O(s.location).catch(Z=>{}));const T={};for(const Z in St)Object.defineProperty(T,Z,{get:()=>l.value[Z],enumerable:!0});v.provide(os,R),v.provide(Ai,el(T)),v.provide(Ys,l);const D=v.unmount;ln.add(v),v.unmount=function(){ln.delete(v),ln.size<1&&(c=St,qe&&qe(),qe=null,l.value=St,an=!1,X=!1),D()}}};function Pe(v){return v.reduce((R,T)=>R.then(()=>xt(T)),Promise.resolve())}return pr}function Yh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>En(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>En(c,l))||s.push(l))}return[n,r,s]}function Ri(){return Fe(os)}function Xh(t){return Fe(Ai)}const Qh=()=>{};var Wo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new ep;const p=i<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const E=c<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ep extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tp=function(t){const e=Yl(t);return Xl.encodeByteArray(e,!0)},Ql=function(t){return tp(t).replace(/\./g,"")},Zl=function(t){try{return Xl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=()=>np().__FIREBASE_DEFAULTS__,sp=()=>{if(typeof process>"u"||typeof Wo>"u")return;const t=Wo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ip=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zl(t[1]);return e&&JSON.parse(e)},Pi=()=>{try{return Qh()||rp()||sp()||ip()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},op=t=>{var e,n;return(n=(e=Pi())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ec=()=>{var t;return(t=Pi())==null?void 0:t.config},tc=t=>{var e;return(e=Pi())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lp(t){return(await fetch(t,{credentials:"include"})).ok}const Kn={};function cp(){const t={prod:[],emulator:[]};for(const e of Object.keys(Kn))Kn[e]?t.emulator.push(e):t.prod.push(e);return t}function up(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qo=!1;function dp(t,e){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||Kn[t]===e||Kn[t]||qo)return;Kn[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=cp().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{qo=!0,o()},p}function u(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=up(r),m=n("text"),E=document.getElementById(m)||document.createElement("span"),A=n("learnmore"),j=document.getElementById(A)||document.createElement("a"),M=n("preprendIcon"),k=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const N=p.element;a(N),u(j,A);const O=c();l(k,M),N.append(k,E,j,O),document.body.appendChild(N)}i?(E.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function hp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gp(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rc(){try{return typeof indexedDB=="object"}catch{return!1}}function sc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function mp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="FirebaseError";class at extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bp,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nn.prototype.create)}}class nn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,r)}}function vp(t,e){return t.replace(yp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yp=/\{\$([^}]+)}/g;function _p(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ko(i)&&Ko(o)){if(!Xt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ko(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ln(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wp(t,e){const n=new xp(t,e);return n.subscribe.bind(n)}class xp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ip(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Cs),s.error===void 0&&(s.error=Cs),s.complete===void 0&&(s.complete=Cs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ip(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=1e3,Sp=2,Tp=4*60*60*1e3,Cp=.5;function Go(t,e=Ep,n=Sp){const r=e*Math.pow(n,t),s=Math.round(Cp*r*(Math.random()-.5)*2);return Math.min(Tp,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ap;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pp(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(t){return t===Kt?void 0:t}function Pp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ap(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Op={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Mp=ee.INFO,Dp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Np=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Dp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ki{constructor(e){this.name=e,this._logLevel=Mp,this._logHandler=Np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Lp=(t,e)=>e.some(n=>t instanceof n);let Jo,Yo;function $p(){return Jo||(Jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return Yo||(Yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ic=new WeakMap,Xs=new WeakMap,oc=new WeakMap,As=new WeakMap,Oi=new WeakMap;function Fp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ic.set(n,t)}).catch(()=>{}),Oi.set(e,t),e}function jp(t){if(Xs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xs.set(t,e)}let Qs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vp(t){Qs=t(Qs)}function Bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rs(this),e,...n);return oc.set(r,e.sort?e.sort():[e]),Nt(r)}:Up().includes(t)?function(...e){return t.apply(Rs(this),e),Nt(ic.get(this))}:function(...e){return Nt(t.apply(Rs(this),e))}}function Hp(t){return typeof t=="function"?Bp(t):(t instanceof IDBTransaction&&jp(t),Lp(t,$p())?new Proxy(t,Qs):t)}function Nt(t){if(t instanceof IDBRequest)return Fp(t);if(As.has(t))return As.get(t);const e=Hp(t);return e!==t&&(As.set(t,e),Oi.set(e,t)),e}const Rs=t=>Oi.get(t);function ac(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Nt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nt(o.result),l.oldVersion,l.newVersion,Nt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zp=["get","getKey","getAll","getAllKeys","count"],Wp=["put","add","delete","clear"],Ps=new Map;function Xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ps.get(e))return Ps.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Wp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zp.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ps.set(e,i),i}Vp(t=>({...t,get:(e,n,r)=>Xo(e,n)||t.get(e,n,r),has:(e,n)=>!!Xo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zs="@firebase/app",Qo="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new ki("@firebase/app"),Gp="@firebase/app-compat",Jp="@firebase/analytics-compat",Yp="@firebase/analytics",Xp="@firebase/app-check-compat",Qp="@firebase/app-check",Zp="@firebase/auth",eg="@firebase/auth-compat",tg="@firebase/database",ng="@firebase/data-connect",rg="@firebase/database-compat",sg="@firebase/functions",ig="@firebase/functions-compat",og="@firebase/installations",ag="@firebase/installations-compat",lg="@firebase/messaging",cg="@firebase/messaging-compat",ug="@firebase/performance",dg="@firebase/performance-compat",fg="@firebase/remote-config",hg="@firebase/remote-config-compat",pg="@firebase/storage",gg="@firebase/storage-compat",mg="@firebase/firestore",bg="@firebase/ai",vg="@firebase/firestore-compat",yg="firebase",_g="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]",wg={[Zs]:"fire-core",[Gp]:"fire-core-compat",[Yp]:"fire-analytics",[Jp]:"fire-analytics-compat",[Qp]:"fire-app-check",[Xp]:"fire-app-check-compat",[Zp]:"fire-auth",[eg]:"fire-auth-compat",[tg]:"fire-rtdb",[ng]:"fire-data-connect",[rg]:"fire-rtdb-compat",[sg]:"fire-fn",[ig]:"fire-fn-compat",[og]:"fire-iid",[ag]:"fire-iid-compat",[lg]:"fire-fcm",[cg]:"fire-fcm-compat",[ug]:"fire-perf",[dg]:"fire-perf-compat",[fg]:"fire-rc",[hg]:"fire-rc-compat",[pg]:"fire-gcs",[gg]:"fire-gcs-compat",[mg]:"fire-fst",[vg]:"fire-fst-compat",[bg]:"fire-vertex","fire-js":"fire-js",[yg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map,xg=new Map,ti=new Map;function Zo(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yt(t){const e=t.name;if(ti.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;ti.set(e,t);for(const n of Lr.values())Zo(n,t);for(const n of xg.values())Zo(n,t);return!0}function Cn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function et(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new nn("app","Firebase",Ig);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=_g;function lc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ei,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(n||(n=ec()),!n)throw Lt.create("no-options");const i=Lr.get(s);if(i){if(Xt(n,i.options)&&Xt(r,i.config))return i;throw Lt.create("duplicate-app",{appName:s})}const o=new kp(s);for(const l of ti.values())o.addComponent(l);const a=new Eg(n,r,o);return Lr.set(s,a),a}function cc(t=ei){const e=Lr.get(t);if(!e&&t===ei&&ec())return lc();if(!e)throw Lt.create("no-app",{appName:t});return e}function nt(t,e,n){let r=wg[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(o.join(" "));return}yt(new ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="firebase-heartbeat-database",Tg=1,rr="firebase-heartbeat-store";let ks=null;function uc(){return ks||(ks=ac(Sg,Tg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),ks}async function Cg(t){try{const n=(await uc()).transaction(rr),r=await n.objectStore(rr).get(dc(t));return await n.done,r}catch(e){if(e instanceof at)vt.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(n.message)}}}async function ea(t,e){try{const r=(await uc()).transaction(rr,"readwrite");await r.objectStore(rr).put(e,dc(t)),await r.done}catch(n){if(n instanceof at)vt.warn(n.message);else{const r=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vt.warn(r.message)}}}function dc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=1024,Rg=30;class Pg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Og(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ta();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Rg){const o=Mg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ta(),{heartbeatsToSend:r,unsentEntries:s}=kg(this._heartbeatsCache.heartbeats),i=Ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return vt.warn(n),""}}}function ta(){return new Date().toISOString().substring(0,10)}function kg(t,e=Ag){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),na(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),na(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Og{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rc()?sc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ea(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ea(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function na(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}function Mg(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){yt(new ot("platform-logger",e=>new qp(e),"PRIVATE")),yt(new ot("heartbeat",e=>new Pg(e),"PRIVATE")),nt(Zs,Qo,t),nt(Zs,Qo,"esm2020"),nt("fire-js","")}Dg("");var Ng="firebase",Lg="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(Ng,Lg,"app");const fc="@firebase/installations",Mi="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=1e4,pc=`w:${Mi}`,gc="FIS_v2",$g="https://firebaseinstallations.googleapis.com/v1",Ug=60*60*1e3,Fg="installations",jg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qt=new nn(Fg,jg,Vg);function mc(t){return t instanceof at&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc({projectId:t}){return`${$g}/projects/${t}/installations`}function vc(t){return{token:t.token,requestStatus:2,expiresIn:Hg(t.expiresIn),creationTime:Date.now()}}async function yc(t,e){const r=(await e.json()).error;return Qt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _c({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Bg(t,{refreshToken:e}){const n=_c(t);return n.append("Authorization",zg(e)),n}async function wc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Hg(t){return Number(t.replace("s","000"))}function zg(t){return`${gc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=bc(t),s=_c(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:gc,appId:t.appId,sdkVersion:pc},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await wc(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:vc(c.authToken)}}else throw await yc("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=/^[cdef][\w-]{21}$/,ni="";function Gg(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Jg(t);return Kg.test(n)?n:ni}catch{return ni}}function Jg(t){return qg(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map;function Ec(t,e){const n=ls(t);Sc(n,e),Yg(n,e)}function Sc(t,e){const n=Ic.get(t);if(n)for(const r of n)r(e)}function Yg(t,e){const n=Xg();n&&n.postMessage({key:t,fid:e}),Qg()}let Gt=null;function Xg(){return!Gt&&"BroadcastChannel"in self&&(Gt=new BroadcastChannel("[Firebase] FID Change"),Gt.onmessage=t=>{Sc(t.data.key,t.data.fid)}),Gt}function Qg(){Ic.size===0&&Gt&&(Gt.close(),Gt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="firebase-installations-database",em=1,Zt="firebase-installations-store";let Os=null;function Di(){return Os||(Os=ac(Zg,em,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zt)}}})),Os}async function $r(t,e){const n=ls(t),s=(await Di()).transaction(Zt,"readwrite"),i=s.objectStore(Zt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Ec(t,e.fid),e}async function Tc(t){const e=ls(t),r=(await Di()).transaction(Zt,"readwrite");await r.objectStore(Zt).delete(e),await r.done}async function cs(t,e){const n=ls(t),s=(await Di()).transaction(Zt,"readwrite"),i=s.objectStore(Zt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Ec(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){let e;const n=await cs(t.appConfig,r=>{const s=tm(r),i=nm(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ni?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tm(t){const e=t||{fid:Gg(),registrationStatus:0};return Cc(e)}function nm(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Qt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rm(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sm(t)}:{installationEntry:e}}async function rm(t,e){try{const n=await Wg(t,e);return $r(t.appConfig,n)}catch(n){throw mc(n)&&n.customData.serverCode===409?await Tc(t.appConfig):await $r(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sm(t){let e=await ra(t.appConfig);for(;e.registrationStatus===1;)await xc(100),e=await ra(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ni(t);return r||n}return e}function ra(t){return cs(t,e=>{if(!e)throw Qt.create("installation-not-found");return Cc(e)})}function Cc(t){return im(t)?{fid:t.fid,registrationStatus:0}:t}function im(t){return t.registrationStatus===1&&t.registrationTime+hc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om({appConfig:t,heartbeatServiceProvider:e},n){const r=am(t,n),s=Bg(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:pc,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await wc(()=>fetch(r,a));if(l.ok){const c=await l.json();return vc(c)}else throw await yc("Generate Auth Token",l)}function am(t,{fid:e}){return`${bc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e=!1){let n;const r=await cs(t.appConfig,i=>{if(!Ac(i))throw Qt.create("not-registered");const o=i.authToken;if(!e&&um(o))return i;if(o.requestStatus===1)return n=lm(t,e),i;{if(!navigator.onLine)throw Qt.create("app-offline");const a=fm(i);return n=cm(t,a),a}});return n?await n:r.authToken}async function lm(t,e){let n=await sa(t.appConfig);for(;n.authToken.requestStatus===1;)await xc(100),n=await sa(t.appConfig);const r=n.authToken;return r.requestStatus===0?Li(t,e):r}function sa(t){return cs(t,e=>{if(!Ac(e))throw Qt.create("not-registered");const n=e.authToken;return hm(n)?{...e,authToken:{requestStatus:0}}:e})}async function cm(t,e){try{const n=await om(t,e),r={...e,authToken:n};return await $r(t.appConfig,r),n}catch(n){if(mc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Tc(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await $r(t.appConfig,r)}throw n}}function Ac(t){return t!==void 0&&t.registrationStatus===2}function um(t){return t.requestStatus===2&&!dm(t)}function dm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ug}function fm(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function hm(t){return t.requestStatus===1&&t.requestTime+hc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ni(e);return r?r.catch(console.error):Li(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e=!1){const n=t;return await mm(n),(await Li(n,e)).token}async function mm(t){const{registrationPromise:e}=await Ni(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){if(!t||!t.options)throw Ms("App Configuration");if(!t.name)throw Ms("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ms(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ms(t){return Qt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="installations",vm="installations-internal",ym=t=>{const e=t.getProvider("app").getImmediate(),n=bm(e),r=Cn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_m=t=>{const e=t.getProvider("app").getImmediate(),n=Cn(e,Rc).getImmediate();return{getId:()=>pm(n),getToken:s=>gm(n,s)}};function wm(){yt(new ot(Rc,ym,"PUBLIC")),yt(new ot(vm,_m,"PRIVATE"))}wm();nt(fc,Mi);nt(fc,Mi,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="analytics",xm="firebase_id",Im="origin",Em=60*1e3,Sm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$i="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new ki("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new nn("analytics","Analytics",Tm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){if(!t.startsWith($i)){const e=Re.create("invalid-gtag-resource",{gtagURL:t});return Ie.warn(e.message),""}return t}function Pc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Am(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Rm(t,e){const n=Am("firebase-js-sdk-policy",{createScriptURL:Cm}),r=document.createElement("script"),s=`${$i}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Pm(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function km(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Pc(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){Ie.error(a)}t("config",s,i)}async function Om(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Pc(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ie.error(i)}}function Mm(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await Om(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await km(t,e,n,r,a,l)}else if(i==="consent"){const[a,l]=o;t("consent",a,l)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ie.error(a)}}return s}function Dm(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Mm(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Nm(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($i)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=30,$m=1e3;class Um{constructor(e={},n=$m){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const kc=new Um;function Fm(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function jm(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:Fm(n)},s=Sm.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let a="";try{const l=await i.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function Vm(t,e=kc,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Re.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Re.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new zm;return setTimeout(async()=>{a.abort()},Em),Oc({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Oc(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=kc){var a;const{appId:i,measurementId:o}=t;try{await Bm(r,e)}catch(l){if(o)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw l}try{const l=await jm(t);return s.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!Hm(c)){if(s.deleteThrottleMetadata(i),o)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw l}const u=Number((a=c==null?void 0:c.customData)==null?void 0:a.httpStatus)===503?Go(n,s.intervalMillis,Lm):Go(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,d),Ie.debug(`Calling attemptFetch again in ${u} millis`),Oc(t,d,r,s)}}function Bm(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Hm(t){if(!(t instanceof at)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class zm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Wm(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(){if(rc())try{await sc()}catch(t){return Ie.warn(Re.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ie.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Km(t,e,n,r,s,i,o){const a=Vm(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ie.error(p)),e.push(a);const l=qm().then(p=>{if(p)return r.getId()}),[c,u]=await Promise.all([a,l]);Nm(i)||Rm(i,c.measurementId),s("js",new Date);const d=(o==null?void 0:o.config)??{};return d[Im]="firebase",d.update=!0,u!=null&&(d[xm]=u),s("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.app=e}_delete(){return delete Gn[this.app.options.appId],Promise.resolve()}}let Gn={},ia=[];const oa={};let Ds="dataLayer",Jm="gtag",aa,Mc,la=!1;function Ym(){const t=[];if(nc()&&t.push("This is a browser extension environment."),mp()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Re.create("invalid-analytics-context",{errorInfo:e});Ie.warn(n.message)}}function Xm(t,e,n){Ym();const r=t.options.appId;if(!r)throw Re.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(Gn[r]!=null)throw Re.create("already-exists",{id:r});if(!la){Pm(Ds);const{wrappedGtag:i,gtagCore:o}=Dm(Gn,ia,oa,Ds,Jm);Mc=i,aa=o,la=!0}return Gn[r]=Km(t,ia,oa,e,aa,Ds,n),new Gm(t)}function Qm(t=cc()){t=He(t);const e=Cn(t,Ur);return e.isInitialized()?e.getImmediate():Zm(t)}function Zm(t,e={}){const n=Cn(t,Ur);if(n.isInitialized()){const s=n.getImmediate();if(Xt(e,n.getOptions()))return s;throw Re.create("already-initialized")}return n.initialize({options:e})}function e0(t,e,n,r){t=He(t),Wm(Mc,Gn[t.app.options.appId],e,n,r).catch(s=>Ie.error(s))}const ca="@firebase/analytics",ua="0.10.18";function t0(){yt(new ot(Ur,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Xm(r,s,n)},"PUBLIC")),yt(new ot("analytics-internal",t,"PRIVATE")),nt(ca,ua),nt(ca,ua,"esm2020");function t(e){try{const n=e.getProvider(Ur).getImmediate();return{logEvent:(r,s,i)=>e0(n,r,s,i)}}catch(n){throw Re.create("interop-component-reg-failed",{reason:n})}}}t0();function Dc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n0=Dc,Nc=new nn("auth","Firebase",Dc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new ki("@firebase/auth");function r0(t,...e){Fr.logLevel<=ee.WARN&&Fr.warn(`Auth (${cr}): ${t}`,...e)}function Er(t,...e){Fr.logLevel<=ee.ERROR&&Fr.error(`Auth (${cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,...e){throw Ui(t,...e)}function rt(t,...e){return Ui(t,...e)}function Lc(t,e,n){const r={...n0(),[e]:n};return new nn("auth","Firebase",r).create(e,{appName:t.name})}function $t(t){return Lc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ui(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nc.create(t,...e)}function U(t,e,...n){if(!t)throw Ui(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Er(e),new Error(e)}function _t(t,e){t||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function s0(){return da()==="http:"||da()==="https:"}function da(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s0()||nc()||"connection"in navigator)?navigator.onLine:!0}function o0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=fp()||pp()}get(){return i0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],c0=new ur(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Bt(t,e,n,r,s={}){return Uc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=lr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...i};return hp()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&as(t.emulatorConfig.host)&&(c.credentials="include"),$c.fetch()(await Fc(t,t.config.apiHost,n,a),c)})}async function Uc(t,e,n){t._canInitEmulator=!1;const r={...a0,...e};try{const s=new d0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Lc(t,u,c);Be(t,u)}}catch(s){if(s instanceof at)throw s;Be(t,"network-request-failed",{message:String(s)})}}async function us(t,e,n,r,s={}){const i=await Bt(t,e,n,r,s);return"mfaPendingCredential"in i&&Be(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Fc(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Fi(t.config,s):`${t.config.apiScheme}://${s}`;return l0.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function u0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class d0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),c0.get())})}}function vr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rt(t,e,r);return s.customData._tokenResponse=n,s}function fa(t){return t!==void 0&&t.enterprise!==void 0}class f0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return u0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function h0(t,e){return Bt(t,"GET","/v2/recaptchaConfig",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e){return Bt(t,"POST","/v1/accounts:delete",e)}async function jr(t,e){return Bt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g0(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=ji(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Jn(Ns(s.auth_time)),issuedAtTime:Jn(Ns(s.iat)),expirationTime:Jn(Ns(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ns(t){return Number(t)*1e3}function ji(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Er("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zl(n);return s?JSON.parse(s):(Er("Failed to decode base64 JWT payload"),null)}catch(s){return Er("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ha(t){const e=ji(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof at&&m0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t){var d;const e=t.auth,n=await t.getIdToken(),r=await sr(t,jr(e,{idToken:n}));U(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?jc(s.providerUserInfo):[],o=y0(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new si(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function v0(t){const e=He(t);await Vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jc(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e){const n=await Uc(t,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Fc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&as(t.emulatorConfig.host)&&(l.credentials="include"),$c.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function w0(t,e){return Bt(t,"POST","/v2/accounts:revokeToken",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ha(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=ha(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new yn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yn,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $e{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new b0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new si(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sr(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return g0(this,e)}reload(){return v0(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $e({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await sr(this,p0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:m,providerData:E,stsTokenManager:A}=n;U(d&&A,e,"internal-error");const j=yn.fromJSON(this.name,A);U(typeof d=="string",e,"internal-error"),Tt(r,e.name),Tt(s,e.name),U(typeof p=="boolean",e,"internal-error"),U(typeof m=="boolean",e,"internal-error"),Tt(i,e.name),Tt(o,e.name),Tt(a,e.name),Tt(l,e.name),Tt(c,e.name),Tt(u,e.name);const M=new $e({uid:d,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:j,createdAt:c,lastLoginAt:u});return E&&Array.isArray(E)&&(M.providerData=E.map(k=>({...k}))),l&&(M._redirectEventId=l),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new yn;s.updateFromServerResponse(n);const i=new $e({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new yn;a.updateFromIdToken(r);const l=new $e({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new si(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map;function gt(t){_t(t instanceof Function,"Expected a class definition");let e=pa.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vc.type="NONE";const ga=Vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Sr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Sr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await jr(this.auth,{idToken:e}).catch(()=>{});return n?$e._fromGetAccountInfoResponse(this.auth,n,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(gt(ga),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||gt(ga);const o=Sr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const p=await jr(e,{idToken:u}).catch(()=>{});if(!p)break;d=await $e._fromGetAccountInfoResponse(e,p,u)}else d=$e._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new _n(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new _n(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kc(e))return"Blackberry";if(Gc(e))return"Webos";if(Hc(e))return"Safari";if((e.includes("chrome/")||zc(e))&&!e.includes("edge/"))return"Chrome";if(qc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bc(t=ye()){return/firefox\//i.test(t)}function Hc(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zc(t=ye()){return/crios\//i.test(t)}function Wc(t=ye()){return/iemobile/i.test(t)}function qc(t=ye()){return/android/i.test(t)}function Kc(t=ye()){return/blackberry/i.test(t)}function Gc(t=ye()){return/webos/i.test(t)}function Vi(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function x0(t=ye()){var e;return Vi(t)&&!!((e=window.navigator)!=null&&e.standalone)}function I0(){return gp()&&document.documentMode===10}function Jc(t=ye()){return Vi(t)||qc(t)||Gc(t)||Kc(t)||/windows phone/i.test(t)||Wc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e=[]){let n;switch(t){case"Browser":n=ma(ye());break;case"Worker":n=`${ma(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(t,e={}){return Bt(t,"GET","/v2/passwordPolicy",rn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=6;class C0{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??T0,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ba(this),this.idTokenSubscription=new ba(this),this.beforeStateQueue=new E0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jr(this,{idToken:e}),r=await $e._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject($t(this));const n=e?He(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await S0(this),n=new C0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await w0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&r0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function An(t){return He(t)}class ba{constructor(e){this.auth=e,this.observer=null,this.addObserver=wp(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function R0(t){ds=t}function Xc(t){return ds.loadJS(t)}function P0(){return ds.recaptchaEnterpriseScript}function k0(){return ds.gapiScript}function O0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class M0{constructor(){this.enterprise=new D0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class D0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const N0="recaptcha-enterprise",Qc="NO_RECAPTCHA";class L0{constructor(e){this.type=N0,this.auth=An(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{h0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new f0(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;fa(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Qc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new M0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&fa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=P0();l.length!==0&&(l+=a),Xc(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function va(t,e,n,r=!1,s=!1){const i=new L0(t);let o;if(s)o=Qc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ya(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await va(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await va(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e){const n=Cn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xt(i,e??{}))return s;Be(s,"already-initialized")}return n.initialize({options:e})}function U0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function F0(t,e,n){const r=An(t);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zc(e),{host:o,port:a}=j0(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(Xt(c,r.config.emulator)&&Xt(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,as(o)?(lp(`${i}//${o}${l}`),dp("Auth",!0)):V0()}function Zc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function j0(t){const e=Zc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_a(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_a(o)}}}function _a(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function B0(t,e){return Bt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(t,e){return us(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function W0(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Bi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ir(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ir(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,n,"signInWithPassword",H0);case"emailLink":return z0(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,r,"signUpPassword",B0);case"emailLink":return W0(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(t,e){return us(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="http://localhost";class en extends Bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new en(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wn(e,n)}buildRequest(){const e={requestUri:q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G0(t){const e=Ln($n(t)).link,n=e?Ln($n(e)).deep_link_id:null,r=Ln($n(t)).deep_link_id;return(r?Ln($n(r)).link:null)||r||n||e||t}class Hi{constructor(e){const n=Ln($n(e)),r=n.apiKey??null,s=n.oobCode??null,i=K0(n.mode??null);U(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=G0(e);try{return new Hi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return ir._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hi.parseLink(n);return U(r,"argument-error"),ir._fromEmailAndCode(e,r.code,r.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends dr{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends dr{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends dr{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $e._fromIdTokenResponse(e,r,s),o=wa(r);return new Tn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wa(r);return new Tn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends at{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Br.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Br(e,n,r,s)}}function tu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Br._fromErrorAndOperation(t,i,e,r):i})}async function J0(t,e,n=!1){const r=await sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(t,e,n=!1){const{auth:r}=t;if(et(r.app))return Promise.reject($t(r));const s="reauthenticate";try{const i=await sr(t,tu(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ji(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Tn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(t,e,n=!1){if(et(t.app))return Promise.reject($t(t));const r="signIn",s=await tu(t,r,e),i=await Tn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function X0(t,e){return nu(An(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(t){const e=An(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Z0(t,e,n){return et(t.app)?Promise.reject($t(t)):X0(He(t),Rn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Q0(t),r})}function eb(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function tb(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function ru(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function nb(t){return He(t).signOut()}const Hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=1e3,sb=10;class iu extends su{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);I0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iu.type="LOCAL";const ib=iu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends su{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ou.type="SESSION";const au=ou;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await ob(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=zi("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function lb(t){st().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function cb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ub(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function db(){return lu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="firebaseLocalStorageDb",fb=1,zr="firebaseLocalStorage",uu="fbase_key";class fr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hs(t,e){return t.transaction([zr],e?"readwrite":"readonly").objectStore(zr)}function hb(){const t=indexedDB.deleteDatabase(cu);return new fr(t).toPromise()}function ii(){const t=indexedDB.open(cu,fb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zr,{keyPath:uu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zr)?e(r):(r.close(),await hb(),e(await ii()))})})}async function xa(t,e,n){const r=hs(t,!0).put({[uu]:e,value:n});return new fr(r).toPromise()}async function pb(t,e){const n=hs(t,!1).get(e),r=await new fr(n).toPromise();return r===void 0?null:r.value}function Ia(t,e){const n=hs(t,!0).delete(e);return new fr(n).toPromise()}const gb=800,mb=3;class du{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(db()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await cb(),!this.activeServiceWorker)return;this.sender=new ab(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ub()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ii();return await xa(e,Hr,"1"),await Ia(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ia(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=hs(s,!1).getAll();return new fr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}du.type="LOCAL";const bb=du;new ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t,e){return e?gt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yb(t){return nu(t.auth,new Wi(t),t.bypassAuthState)}function _b(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Y0(n,new Wi(t),t.bypassAuthState)}async function wb(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),J0(n,new Wi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yb;case"linkViaPopup":case"linkViaRedirect":return wb;case"reauthViaPopup":case"reauthViaRedirect":return _b;default:Be(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new ur(2e3,1e4);class hn extends fu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xb.get())};e()}}hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="pendingRedirect",Tr=new Map;class Eb extends fu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const r=await Sb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sb(t,e){const n=Ab(e),r=Cb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Tb(t,e){Tr.set(t._key(),e)}function Cb(t){return gt(t._redirectPersistence)}function Ab(t){return Sr(Ib,t.config.apiKey,t.name)}async function Rb(t,e,n=!1){if(et(t.app))return Promise.reject($t(t));const r=An(t),s=vb(r,e),o=await new Eb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=10*60*1e3;class kb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ob(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hu(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ea(e))}saveEventToCache(e){this.cachedEventUids.add(Ea(e)),this.lastProcessedEventTime=Date.now()}}function Ea(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ob(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(t,e={}){return Bt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nb=/^https?/;async function Lb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mb(t);for(const n of e)try{if($b(n))return}catch{}Be(t,"unauthorized-domain")}function $b(t){const e=ri(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Nb.test(n))return!1;if(Db.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new ur(3e4,6e4);function Sa(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fb(t){return new Promise((e,n)=>{var s,i,o;function r(){Sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sa(),n(rt(t,"network-request-failed"))},timeout:Ub.get()})}if((i=(s=st().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=st().gapi)!=null&&o.load)r();else{const a=O0("iframefcb");return st()[a]=()=>{gapi.load?r():n(rt(t,"network-request-failed"))},Xc(`${k0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Cr=null,e})}let Cr=null;function jb(t){return Cr=Cr||Fb(t),Cr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new ur(5e3,15e3),Bb="__/auth/iframe",Hb="emulator/auth/iframe",zb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qb(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fi(e,Hb):`https://${t.config.authDomain}/${Bb}`,r={apiKey:e.apiKey,appName:t.name,v:cr},s=Wb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lr(r).slice(1)}`}async function Kb(t){const e=await jb(t),n=st().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:qb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},Vb.get());function l(){st().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jb=500,Yb=600,Xb="_blank",Qb="http://localhost";class Ta{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zb(t,e,n,r=Jb,s=Yb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Gb,width:r.toString(),height:s.toString(),top:i,left:o},c=ye().toLowerCase();n&&(a=zc(c)?Xb:n),Bc(c)&&(e=e||Qb,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if(x0(c)&&a!=="_self")return ev(e||"",a),new Ta(null);const d=window.open(e||"",a,u);U(d,t,"popup-blocked");try{d.focus()}catch{}return new Ta(d)}function ev(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="__/auth/handler",nv="emulator/auth/handler",rv=encodeURIComponent("fac");async function Ca(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cr,eventId:s};if(e instanceof eu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_p(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof dr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${rv}=${encodeURIComponent(l)}`:"";return`${sv(t)}?${lr(a).slice(1)}${c}`}function sv({config:t}){return t.emulator?Fi(t,nv):`https://${t.authDomain}/${tv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="webStorageSupport";class iv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=au,this._completeRedirectFn=Rb,this._overrideRedirectResult=Tb}async _openPopup(e,n,r,s){var o;_t((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ca(e,n,r,ri(),s);return Zb(e,i,zi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ca(e,n,r,ri(),s);return lb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Kb(e),r=new kb(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ls,{type:Ls},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ls];i!==void 0&&n(!!i),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jc()||Hc()||Vi()}}const ov=iv;var Aa="@firebase/auth",Ra="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cv(t){yt(new ot("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yc(t)},c=new A0(r,s,i,l);return U0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yt(new ot("auth-internal",e=>{const n=An(e.getProvider("auth").getImmediate());return(r=>new av(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Aa,Ra,lv(t)),nt(Aa,Ra,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=5*60,dv=tc("authIdTokenMaxAge")||uv;let Pa=null;const fv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dv)return;const s=n==null?void 0:n.token;Pa!==s&&(Pa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hv(t=cc()){const e=Cn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$0(t,{popupRedirectResolver:ov,persistence:[bb,ib,au]}),r=tc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fv(i.toString());tb(n,o,()=>o(n.currentUser)),eb(n,a=>o(a))}}const s=op("auth");return s&&F0(n,`http://${s}`),n}function pv(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}R0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cv("Browser");const gv={apiKey:"AIzaSyA4bblX8KM7yvmoxSmI0bR2dP4VuWmpfIg",authDomain:"portfolio-costa-dev.firebaseapp.com",projectId:"portfolio-costa-dev",storageBucket:"portfolio-costa-dev.firebasestorage.app",messagingSenderId:"168539818463",appId:"1:168539818463:web:9936cc4e2cba7c11a15c6a",measurementId:"G-LXYLW4EVQ4"},pu=lc(gv);Qm(pu);const Wr=hv(pu),mv={class:"bg-gray-900 text-white shadow-xl sticky top-0 z-50 backdrop-blur-md bg-opacity-80 transition-all duration-500"},bv={class:"container mx-auto flex justify-between items-center py-4 px-6"},vv={class:"hidden md:flex items-center gap-8 text-sm font-medium"},yv={class:"mr-2 text-xs text-gray-300"},_v={class:"md:hidden relative"},wv={key:0,class:"absolute right-0 mt-4 bg-gray-800 text-white rounded-xl py-4 px-6 w-48 shadow-lg z-50"},xv={class:"block text-xs text-gray-300 mb-1"},Iv={__name:"Header",setup(t){const e=Le(!1),n=Le(null),r=Ri();Ii(()=>{ru(Wr,o=>{n.value=o})});const s=()=>{r.push("/login")},i=async()=>{await nb(Wr),n.value=null,r.push("/login")};return(o,a)=>{const l=ts("router-link");return Y(),ne("header",mv,[P("nav",bv,[J(l,{to:"/",class:"text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text tracking-tight hover:brightness-110 transition duration-300"},{default:ke(()=>a[1]||(a[1]=[fe(" Maskulov Costa ")])),_:1,__:[1]}),P("ul",vv,[P("li",null,[J(l,{to:"/",class:"group relative hover:text-blue-400 transition duration-300"},{default:ke(()=>a[2]||(a[2]=[fe("Accueil "),P("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full block"},null,-1)])),_:1,__:[2]})]),P("li",null,[J(l,{to:"/projects",class:"group relative hover:text-blue-400 transition duration-300"},{default:ke(()=>a[3]||(a[3]=[fe("Projets "),P("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full block"},null,-1)])),_:1,__:[3]})]),P("li",null,[J(l,{to:"/about",class:"group relative hover:text-blue-400 transition duration-300"},{default:ke(()=>a[4]||(a[4]=[fe("À propos "),P("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full block"},null,-1)])),_:1,__:[4]})]),P("li",null,[J(l,{to:"/contact",class:"group relative hover:text-blue-400 transition duration-300"},{default:ke(()=>a[5]||(a[5]=[fe("Contact "),P("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full block"},null,-1)])),_:1,__:[5]})]),P("li",null,[n.value?(Y(),ne(Oe,{key:0},[P("span",yv,Ut(n.value.email),1),P("button",{onClick:i,class:"text-red-400 hover:text-red-500 transition text-sm"}," Se déconnecter ")],64)):(Y(),ne("button",{key:1,onClick:s,class:"text-blue-400 hover:text-blue-500 transition text-sm"}," Se connecter "))])]),P("div",_v,[P("button",{onClick:a[0]||(a[0]=c=>e.value=!e.value),class:"text-white focus:outline-none"},a[6]||(a[6]=[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[P("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])),e.value?(Y(),ne("div",wv,[J(l,{to:"/",class:"block py-2 hover:text-blue-400"},{default:ke(()=>a[7]||(a[7]=[fe("Accueil")])),_:1,__:[7]}),J(l,{to:"/projects",class:"block py-2 hover:text-blue-400"},{default:ke(()=>a[8]||(a[8]=[fe("Projets")])),_:1,__:[8]}),J(l,{to:"/about",class:"block py-2 hover:text-blue-400"},{default:ke(()=>a[9]||(a[9]=[fe("À propos")])),_:1,__:[9]}),J(l,{to:"/contact",class:"block py-2 hover:text-blue-400"},{default:ke(()=>a[10]||(a[10]=[fe("Contact")])),_:1,__:[10]}),a[11]||(a[11]=P("hr",{class:"my-2 border-gray-600"},null,-1)),n.value?(Y(),ne(Oe,{key:0},[P("span",xv,Ut(n.value.email),1),P("button",{onClick:i,class:"block w-full text-left py-2 text-red-400 hover:text-red-500"},"Se déconnecter")],64)):(Y(),ne("button",{key:1,onClick:s,class:"block w-full text-left py-2 text-blue-400 hover:text-blue-500"},"Se connecter"))])):In("",!0)])])])}}},sn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ev={},Sv={class:"bg-gray-900 text-gray-400 py-6 text-center text-sm"},Tv={class:"container mx-auto px-4"},Cv={class:"mb-2"};function Av(t,e){return Y(),ne("footer",Sv,[P("div",Tv,[P("p",Cv,[fe(" © "+Ut(new Date().getFullYear())+" ",1),e[0]||(e[0]=P("span",{class:"font-semibold text-white"},"Costa Maskulov",-1)),e[1]||(e[1]=fe(". Tous droits réservés. "))]),e[2]||(e[2]=je('<div class="flex justify-center gap-4 mt-2"><a href="mailto:maskulov@et.esiea.fr" class="hover:text-white transition">maskulov@et.esiea.fr</a><span class="text-gray-600">|</span><a href="https://github.com/K0Konut" target="_blank" class="hover:text-white transition">GitHub</a><span class="text-gray-600">|</span><a href="https://www.linkedin.com/in/costa-maskulov" target="_blank" class="hover:text-white transition">LinkedIn</a></div>',1))])])}const Rv=sn(Ev,[["render",Av]]);var Pv="@vercel/analytics",kv="1.5.0",Ov=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function gu(){return typeof window<"u"}function mu(){try{const t="production"}catch{}return"production"}function Mv(t="auto"){if(t==="auto"){window.vam=mu();return}window.vam=t}function Dv(){return(gu()?window.vam:mu())||"production"}function oi(){return Dv()==="development"}function Nv(t){return t.scriptSrc?t.scriptSrc:oi()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?`${t.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function Lv(t={debug:!0}){var e;if(!gu())return;Mv(t.mode),Ov(),t.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",t.beforeSend));const n=Nv(t);if(document.head.querySelector(`script[src*="${n}"]`))return;const r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn=Pv+(t.framework?`/${t.framework}`:""),r.dataset.sdkv=kv,t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint?r.dataset.endpoint=t.endpoint:t.basePath&&(r.dataset.endpoint=`${t.basePath}/insights`),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{const s=oi()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${s}`)},oi()&&t.debug===!1&&(r.dataset.debug="false"),document.head.appendChild(r)}var $v="@vercel/speed-insights",Uv="1.2.0",Fv=()=>{window.si||(window.si=function(...e){(window.siq=window.siq||[]).push(e)})};function jv(){return typeof window<"u"}function Vv(){try{const t="production"}catch{}return"production"}function bu(){return Vv()==="development"}function Bv(t,e){if(!t||!e)return t;let n=t;try{const r=Object.entries(e);for(const[s,i]of r)if(!Array.isArray(i)){const o=ka(i);o.test(n)&&(n=n.replace(o,`/[${s}]`))}for(const[s,i]of r)if(Array.isArray(i)){const o=ka(i.join("/"));o.test(n)&&(n=n.replace(o,`/[...${s}]`))}return n}catch{return t}}function ka(t){return new RegExp(`/${Hv(t)}(?=[/?#]|$)`)}function Hv(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function zv(t){return t.scriptSrc?t.scriptSrc:bu()?"https://va.vercel-scripts.com/v1/speed-insights/script.debug.js":t.dsn?"https://va.vercel-scripts.com/v1/speed-insights/script.js":t.basePath?`${t.basePath}/speed-insights/script.js`:"/_vercel/speed-insights/script.js"}function Wv(t={}){var e;if(!jv()||t.route===null)return null;Fv();const n=zv(t);if(document.head.querySelector(`script[src*="${n}"]`))return null;t.beforeSend&&((e=window.si)==null||e.call(window,"beforeSend",t.beforeSend));const r=document.createElement("script");return r.src=n,r.defer=!0,r.dataset.sdkn=$v+(t.framework?`/${t.framework}`:""),r.dataset.sdkv=Uv,t.sampleRate&&(r.dataset.sampleRate=t.sampleRate.toString()),t.route&&(r.dataset.route=t.route),t.endpoint?r.dataset.endpoint=t.endpoint:t.basePath&&(r.dataset.endpoint=`${t.basePath}/speed-insights/vitals`),t.dsn&&(r.dataset.dsn=t.dsn),bu()&&t.debug===!1&&(r.dataset.debug="false"),r.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(r),{setRoute:s=>{r.dataset.route=s??void 0}}}function qv(){try{return}catch{}}function Kv(t="vue"){return xi({props:["dsn","sampleRate","beforeSend","debug","scriptSrc","endpoint"],setup(e){const n=Xh(),r=Wv({...e,framework:t,basePath:qv()});if(n&&r){const s=()=>{r.setRoute(Bv(n.path,n.params))};s(),Hn(n,s)}},render(){return null}})}var Gv=Kv();const Jv={class:"min-h-screen bg-gray-100 text-gray-900"},Yv={__name:"App",setup(t){return Lv(),(e,n)=>{const r=ts("router-view");return Y(),ne("div",Jv,[J(Iv),J(r),J(Rv),J(Yt(Gv))])}}},Xv={class:"dark bg-gray-900 min-h-screen relative overflow-hidden"},Qv={class:"relative z-10 container mx-auto py-32 text-center animate-fade-in text-white"},Zv={__name:"Home",setup(t){return(e,n)=>{const r=ts("router-link");return Y(),ne("div",Xv,[n[4]||(n[4]=je('<div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0" data-v-6f90e38e></div><div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0" data-v-6f90e38e></div><div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0" data-v-6f90e38e></div><div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0" data-v-6f90e38e></div><div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0" data-v-6f90e38e></div><div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0" data-v-6f90e38e></div><div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0" data-v-6f90e38e></div><div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0" data-v-6f90e38e></div><div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0" data-v-6f90e38e></div>',9)),P("section",Qv,[n[1]||(n[1]=P("h1",{class:"text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"}," Maskulov Costa ",-1)),n[2]||(n[2]=P("h2",{class:"text-2xl md:text-3xl mb-4 text-gray-300"}," Étudiant en ingénierie informatique ",-1)),n[3]||(n[3]=P("p",{class:"max-w-2xl mx-auto text-lg text-gray-400 mb-10"}," Ce qui me motive au quotidien, c'est de comprendre comment fonctionnent les technologies qui nous entourent, et surtout, de pouvoir créer des solutions utiles et concrètes grâce à l’informatique. ",-1)),J(r,{to:"/projects",class:"inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all"},{default:ke(()=>n[0]||(n[0]=[fe(" 🌟 Découvrir mes projets ")])),_:1,__:[0]})]),n[5]||(n[5]=je('<section class="relative z-10 container mx-auto py-20 grid md:grid-cols-3 gap-8 text-center" data-v-6f90e38e><div class="bg-gray-800 rounded-2xl shadow-xl p-8 transition duration-300" data-v-6f90e38e><h3 class="text-2xl font-semibold mb-3 text-blue-400" data-v-6f90e38e>Ma Vision</h3><p class="text-gray-300" data-v-6f90e38e>Je crois que l&#39;informatique est un outil puissant pour améliorer la vie quotidienne. Ma passion est de transformer les idées en applications concrètes et utiles.</p></div><div class="bg-gray-800 rounded-2xl shadow-xl p-8 transition duration-300" data-v-6f90e38e><h3 class="text-2xl font-semibold mb-3 text-blue-400" data-v-6f90e38e>Mes Valeurs</h3><p class="text-gray-300" data-v-6f90e38e>Rigueur, curiosité, et collaboration sont au cœur de ma manière de travailler. Je m&#39;efforce de toujours apprendre et de repousser les limites de mes compétences.</p></div><div class="bg-gray-800 rounded-2xl shadow-xl p-8 transition duration-300" data-v-6f90e38e><h3 class="text-2xl font-semibold mb-3 text-blue-400" data-v-6f90e38e>Objectifs</h3><p class="text-gray-300" data-v-6f90e38e>Créer des projets qui ont du sens, avoir un impact positif à travers la technologie, et évoluer dans un environnement stimulant aux côtés de personnes inspirantes.</p></div></section><section class="relative z-10 w-full py-24 text-center" data-v-6f90e38e><div class="container mx-auto px-6" data-v-6f90e38e><div class="bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 w-full max-w-5xl mx-auto border border-purple-700/20" data-v-6f90e38e><h3 class="text-4xl md:text-5xl font-extrabold text-white mb-6" data-v-6f90e38e>📄 Mon CV</h3><p class="text-xl text-gray-300 mb-10 max-w-3xl mx-auto" data-v-6f90e38e> Explorez mon parcours académique, mes compétences techniques et mes expériences professionnelles détaillées à travers mon CV. </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-v-6f90e38e><a href="/data/CV_FR.pdf" download="CV_FR_Costa_Maskulov.pdf" class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all" data-v-6f90e38e><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6f90e38e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" data-v-6f90e38e></path></svg> Télécharger le CV </a><a href="/data/CV_FR.pdf" target="_blank" class="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-400 hover:text-white hover:border-white font-semibold py-3 px-8 rounded-full transition-all" data-v-6f90e38e> 📖 Consulter en ligne </a></div></div></div></section><section class="relative z-10 container mx-auto py-20" data-v-6f90e38e><h2 class="text-3xl font-bold text-center mb-12 text-white" data-v-6f90e38e>Compétences</h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center" data-v-6f90e38e><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>HTML</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>CSS</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>JavaScript</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Java</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Python</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>C</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>C++</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Git</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>GitHub</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Travail d&#39;équipe</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Gestion de projet</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Vue.js</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Gestion du stress</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Relation client</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Bonne Communication</div><div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500" data-v-6f90e38e>Bonne Organisation</div></div></section><section class="relative z-10 bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white text-center" data-v-6f90e38e><h2 class="text-3xl font-bold mb-4" data-v-6f90e38e>Un projet en tête ?</h2><p class="text-lg mb-6" data-v-6f90e38e>N&#39;hésitez pas à me contacter, je suis disponible pour des collaborations ou des opportunités professionnelles.</p><a href="mailto:maskulov@et.esiea.fr" class="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition" data-v-6f90e38e>Me contacter</a></section>',4))])}}},ey=sn(Zv,[["__scopeId","data-v-6f90e38e"]]),ty={class:"group relative overflow-hidden border border-purple-400/20 rounded-3xl p-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 text-left"},ny={class:"text-2xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300"},ry={class:"text-gray-300 mt-4 text-base leading-relaxed"},sy=["href"],iy={__name:"ProjectCard",props:{project:Object},setup(t){return(e,n)=>{const r=ts("router-link");return Y(),ne("div",ty,[n[2]||(n[2]=P("div",{class:"absolute inset-0 w-full h-full bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"},null,-1)),P("h3",ny,Ut(t.project.title),1),P("p",ry,Ut(t.project.description),1),t.project.link&&t.project.link.startsWith("/")?(Y(),Ol(r,{key:0,to:t.project.link,class:"inline-flex items-center gap-2 mt-6 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 px-5 rounded-full font-semibold shadow-md hover:from-purple-700 hover:to-blue-700 transition-all"},{default:ke(()=>n[0]||(n[0]=[fe(" Voir plus "),P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[P("path",{d:"M12.293 2.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L14 5.414V17a1 1 0 11-2 0V5.414l-3.293 3.293a1 1 0 01-1.414-1.414l5-5z"})],-1)])),_:1,__:[0]},8,["to"])):t.project.link?(Y(),ne("a",{key:1,href:t.project.link,target:"_blank",class:"inline-flex items-center gap-2 mt-6 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 px-5 rounded-full font-semibold shadow-md hover:from-purple-700 hover:to-blue-700 transition-all"},n[1]||(n[1]=[fe(" Voir plus "),P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[P("path",{d:"M12.293 2.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L14 5.414V17a1 1 0 11-2 0V5.414l-3.293 3.293a1 1 0 01-1.414-1.414l5-5z"})],-1)]),8,sy)):In("",!0)])}}},oy={class:"dark bg-gray-900 min-h-screen relative overflow-hidden"},ay={class:"relative z-10 w-full py-28 text-center"},ly={class:"container mx-auto px-6"},cy={class:"bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-purple-700/20"},uy={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"},dy={__name:"Projects",setup(t){const e=[{id:1,title:"Portfolio Web",description:"Développement de mon site personnel avec Vue.js, Tailwind CSS et animations interactives. Responsive et moderne.",link:"/projects/portfolio"},{id:2,title:"Bot Discord",description:"Création d'un bot multifonction en Node.js pour modération, jeux et commandes personnalisées.",link:"/projects/botdiscord"},{id:3,title:"Site Calculatrice",description:"Application web permettant des calculs simples et scientifiques, développée avec HTML, CSS et JavaScript.",link:"/projects/calculatorweb"},{id:4,title:"Radar de recul",description:"Prototype d'un radar de recul pour véhicule, intégrant capteurs à ultrasons et affichage de distance.",link:"/projects/radar"}];return(n,r)=>(Y(),ne("div",oy,[r[2]||(r[2]=je('<div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div><div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div><div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div><div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0"></div><div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0"></div><div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0"></div><div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0"></div><div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0"></div><div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0"></div>',9)),P("section",ay,[P("div",ly,[P("div",cy,[r[0]||(r[0]=P("h3",{class:"text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-6 tracking-tight"}," 🚀 Mes Réalisations ",-1)),r[1]||(r[1]=P("p",{class:"text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"}," Découvrez mes projets les plus marquants réalisés lors de formations ou à titre personnel. Ils reflètent ma passion pour le code, le design et la recherche de solutions utiles et performantes. ",-1)),P("div",uy,[(Y(),ne(Oe,null,Pd(e,s=>J(iy,{key:s.id,project:s},null,8,["project"])),64))])])])])]))}},fy="/data/photo_profile.jpg",hy={},py={class:"bg-gray-900 relative z-10 w-full py-28 text-center px-4 sm:px-6 lg:px-8 overflow-hidden"};function gy(t,e){return Y(),ne("div",py,e[0]||(e[0]=[je('<div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div><div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div><div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div><div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0"></div><div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0"></div><div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0"></div><div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0"></div><div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0"></div><div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0"></div><div class="relative bg-gradient-to-br from-[#1e1e2f] via-gray-800 to-[#1a1a2a] rounded-3xl shadow-2xl px-10 py-20 max-w-5xl mx-auto border border-purple-700/30 backdrop-blur-md"><img src="'+fy+'" alt="Photo de profil de Maskulov Costa" class="w-32 h-32 mx-auto rounded-full object-cover border-4 border-purple-600 shadow-md mb-8"><h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8"> 👋 À propos de moi </h2><p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"> Passionné d&#39;informatique depuis mon enfance, j&#39;ai choisi de suivre une voie technique en intégrant le lycée Saint Nicolas en filière STI2D, puis l&#39;ESIEA, une école d’ingénieurs spécialisée en informatique. Mon parcours est enrichi d&#39;expériences diverses, allant du service en restauration à la vente et réparation d’appareils Apple, où j’ai pu développer mon sens du contact et de la rigueur. </p><p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"> À travers ces expériences et mon engagement au sein du BDE comme vice-secrétaire général, j’ai renforcé mes compétences en communication, en travail d’équipe et en gestion de projet. Mes atouts clés sont la maîtrise de l&#39;anglais, mes compétences techniques en développement web, et ma capacité à collaborer efficacement dans un environnement d’équipe. </p><p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"> En dehors du développement, je suis passionné par le sport (vélo, roller, escalade, et sports mécaniques comme la F1 et le MotoGP), ainsi que par la musique que je pratique avec la basse et la guitare. Ces centres d&#39;intérêt nourrissent ma créativité et mon équilibre personnel. </p></div>',10)]))}const my=sn(hy,[["render",gy]]);class hr{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const by=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},de={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:by()},qi=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},vy=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=qi(t);de.publicKey=n.publicKey,de.blockHeadless=n.blockHeadless,de.storageProvider=n.storageProvider,de.blockList=n.blockList,de.limitRate=n.limitRate,de.origin=n.origin||e},vu=async(t,e,n={})=>{const r=await fetch(de.origin+t,{method:"POST",headers:n,body:e}),s=await r.text(),i=new hr(r.status,s);if(r.ok)return i;throw i},yu=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},yy=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},_u=t=>t.webdriver||!t.languages||t.languages.length===0,wu=()=>new hr(451,"Unavailable For Headless Browser"),_y=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},wy=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},xy=(t,e)=>t instanceof FormData?t.get(e):t[e],xu=(t,e)=>{if(wy(t))return!1;_y(t.list,t.watchVariable);const n=xy(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},Iu=()=>new hr(403,"Forbidden"),Iy=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},Ey=async(t,e,n)=>{const r=Number(await n.get(t)||0);return e-Date.now()+r},Eu=async(t,e,n)=>{if(!e.throttle||!n)return!1;Iy(e.throttle,e.id);const r=e.id||t;return await Ey(r,e.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},Su=()=>new hr(429,"Too Many Requests"),Sy=async(t,e,n,r)=>{const s=qi(r),i=s.publicKey||de.publicKey,o=s.blockHeadless||de.blockHeadless,a=s.storageProvider||de.storageProvider,l={...de.blockList,...s.blockList},c={...de.limitRate,...s.limitRate};return o&&_u(navigator)?Promise.reject(wu()):(yu(i,t,e),yy(n),n&&xu(l,n)?Promise.reject(Iu()):await Eu(location.pathname,c,a)?Promise.reject(Su()):vu("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},Ty=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Cy=t=>typeof t=="string"?document.querySelector(t):t,Ay=async(t,e,n,r)=>{const s=qi(r),i=s.publicKey||de.publicKey,o=s.blockHeadless||de.blockHeadless,a=de.storageProvider||s.storageProvider,l={...de.blockList,...s.blockList},c={...de.limitRate,...s.limitRate};if(o&&_u(navigator))return Promise.reject(wu());const u=Cy(n);yu(i,t,e),Ty(u);const d=new FormData(u);return xu(l,d)?Promise.reject(Iu()):await Eu(location.pathname,c,a)?Promise.reject(Su()):(d.append("lib_version","4.4.1"),d.append("service_id",t),d.append("template_id",e),d.append("user_id",i),vu("/api/v1.0/email/send-form",d))},Ry={init:vy,send:Sy,sendForm:Ay,EmailJSResponseStatus:hr},Py={class:"bg-gray-900 relative z-10 w-full py-28 text-center px-4 sm:px-6 lg:px-8 overflow-hidden"},ky={class:"relative bg-gradient-to-br from-[#1e1e2f] via-gray-800 to-[#1a1a2a] rounded-3xl shadow-2xl px-10 py-20 max-w-3xl mx-auto border border-purple-700/30 backdrop-blur-md"},Oy=["disabled"],My={key:0},Dy={key:1,class:"flex items-center gap-2"},Ny={key:0,class:"text-green-400 text-center"},Ly={key:1,class:"text-red-400 text-center"},$y={__name:"Contact",setup(t){const e=Le(null),n=Le(!1),r=Le(!1),s=Le(!1),i=()=>{n.value=!0,r.value=!1,s.value=!1,Ry.sendForm("service_mys6aj3","template_irahm0i",e.value,"Ff6yINORfakg3WcI_").then(()=>{n.value=!1,r.value=!0,e.value.reset()}).catch(o=>{n.value=!1,s.value=!0,console.error("Erreur EmailJS :",o)})};return(o,a)=>(Y(),ne("section",Py,[a[5]||(a[5]=je('<div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div><div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div><div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div><div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0"></div><div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0"></div><div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0"></div><div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0"></div><div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0"></div><div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0"></div>',9)),P("div",ky,[a[4]||(a[4]=P("h2",{class:"text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-10"}," 📬 Contactez-moi ",-1)),P("form",{ref_key:"form",ref:e,onSubmit:Bf(i,["prevent"]),class:"space-y-6 text-left"},[a[1]||(a[1]=P("input",{name:"from_name",type:"text",required:"",placeholder:"Votre nom",class:"w-full p-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,-1)),a[2]||(a[2]=P("input",{name:"from_email",type:"email",required:"",placeholder:"Votre email",class:"w-full p-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,-1)),a[3]||(a[3]=P("textarea",{name:"message",rows:"5",required:"",placeholder:"Votre message",class:"w-full p-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,-1)),P("button",{type:"submit",disabled:n.value,class:"w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg transition-all flex items-center justify-center"},[n.value?(Y(),ne("span",Dy,a[0]||(a[0]=[P("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[P("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),P("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})],-1),fe(" Envoi... ")]))):(Y(),ne("span",My,"Envoyer"))],8,Oy),r.value?(Y(),ne("p",Ny,"✅ Message envoyé avec succès !")):In("",!0),s.value?(Y(),ne("p",Ly,"❌ Une erreur est survenue. Réessayez plus tard.")):In("",!0)],544)])]))}},Uy="/data/Code.png",Fy="/data/Deployment.png",jy={class:"dark bg-gray-900 min-h-screen relative overflow-hidden"},Vy={__name:"Portfolio",setup(t){return(e,n)=>(Y(),ne("div",jy,n[0]||(n[0]=[je('<div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0" data-v-ecec2e98></div><div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0" data-v-ecec2e98></div><div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0" data-v-ecec2e98></div><div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0" data-v-ecec2e98></div><div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0" data-v-ecec2e98></div><div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0" data-v-ecec2e98></div><div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0" data-v-ecec2e98></div><div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0" data-v-ecec2e98></div><div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0" data-v-ecec2e98></div><section class="relative z-10 container mx-auto py-32 px-6 text-white" data-v-ecec2e98><h1 class="text-3xl md:text-4xl font-extrabold text-center text-purple-400 mb-6" data-v-ecec2e98>Portfolio Vue.js - Vue d&#39;ensemble</h1><p class="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12" data-v-ecec2e98> Un portfolio professionnel moderne avec des effets visuels avancés, construit comme une application web responsive. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-200 mb-16" data-v-ecec2e98><div data-v-ecec2e98><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-ecec2e98>Technologies Principales</h3><ul class="list-disc list-inside space-y-1" data-v-ecec2e98><li data-v-ecec2e98>Next.js 15 (React)</li><li data-v-ecec2e98>TypeScript</li><li data-v-ecec2e98>Tailwind CSS</li><li data-v-ecec2e98>CSS Modules</li></ul></div><div data-v-ecec2e98><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-ecec2e98>Composants et Animations</h3><ul class="list-disc list-inside space-y-1" data-v-ecec2e98><li data-v-ecec2e98>Custom Spotlight effect</li><li data-v-ecec2e98>MagicButton component</li><li data-v-ecec2e98>Dynamic imports</li><li data-v-ecec2e98>Hover animations</li></ul></div><div data-v-ecec2e98><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-ecec2e98>Outils de développement</h3><ul class="list-disc list-inside space-y-1" data-v-ecec2e98><li data-v-ecec2e98>TypeScript Config</li><li data-v-ecec2e98>Sentry (monitoring d&#39;erreurs)</li></ul></div><div data-v-ecec2e98><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-ecec2e98>Déploiement</h3><ul class="list-disc list-inside space-y-1" data-v-ecec2e98><li data-v-ecec2e98>Cloudflare</li><li data-v-ecec2e98>Vercel (configuration alternative)</li><li data-v-ecec2e98>Routing dynamique</li></ul></div></div><div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-12" data-v-ecec2e98><img src="'+Uy+'" alt="Code développement" class="rounded-xl shadow-lg max-w-sm" data-v-ecec2e98><img src="'+Fy+'" alt="Interface déploiement" class="rounded-xl shadow-lg max-w-sm" data-v-ecec2e98></div><div class="text-center" data-v-ecec2e98><a href="https://github.com/K0Konut/MyPortfolio/" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl transition" data-v-ecec2e98> Voir code source ↗ </a></div></section>',10)])))}},By=sn(Vy,[["__scopeId","data-v-ecec2e98"]]),Hy={class:"dark bg-gray-900 min-h-screen relative overflow-hidden"},zy={__name:"BotDiscord",setup(t){return(e,n)=>(Y(),ne("div",Hy,n[0]||(n[0]=[je('<div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0" data-v-324c849d></div><div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0" data-v-324c849d></div><div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0" data-v-324c849d></div><div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0" data-v-324c849d></div><div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0" data-v-324c849d></div><div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0" data-v-324c849d></div><div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0" data-v-324c849d></div><div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0" data-v-324c849d></div><div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0" data-v-324c849d></div><section class="relative z-10 container mx-auto py-32 px-6 text-white" data-v-324c849d><h1 class="text-3xl md:text-4xl font-extrabold text-center text-purple-400 mb-6" data-v-324c849d>Bot Discord Python - Vue d&#39;ensemble</h1><p class="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12" data-v-324c849d> Un bot Discord multifonction codé en Python. Il gère la modération, les jeux interactifs, les réponses automatisées et bien plus encore. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-200 mb-16" data-v-324c849d><div data-v-324c849d><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-324c849d>Fonctionnalités</h3><ul class="list-disc list-inside space-y-1" data-v-324c849d><li data-v-324c849d>Modération (ban, kick, mute)</li><li data-v-324c849d>Commandes personnalisées</li><li data-v-324c849d>Jeux (quiz, devinettes)</li><li data-v-324c849d>Logs automatiques</li></ul></div><div data-v-324c849d><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-324c849d>Stack Technique</h3><ul class="list-disc list-inside space-y-1" data-v-324c849d><li data-v-324c849d>Python</li><li data-v-324c849d>Discord.py</li><li data-v-324c849d>dotenv</li><li data-v-324c849d>Replit/Heroku</li></ul></div><div data-v-324c849d><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-324c849d>Sécurité</h3><ul class="list-disc list-inside space-y-1" data-v-324c849d><li data-v-324c849d>Permissions par rôle</li><li data-v-324c849d>Anti-spam</li><li data-v-324c849d>Logs d&#39;activité</li></ul></div><div data-v-324c849d><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-324c849d>Utilisation</h3><ul class="list-disc list-inside space-y-1" data-v-324c849d><li data-v-324c849d>Installation simple</li><li data-v-324c849d>Commandes préfixées (!, ?)</li><li data-v-324c849d>Support multi-serveur</li></ul></div></div><div class="text-center" data-v-324c849d><a href="#" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl transition" data-v-324c849d> Voir code source ↗ </a></div></section>',10)])))}},Wy=sn(zy,[["__scopeId","data-v-324c849d"]]),qy={class:"dark bg-gray-900 min-h-screen relative overflow-hidden"},Ky={__name:"CalculatorWeb",setup(t){return(e,n)=>(Y(),ne("div",qy,n[0]||(n[0]=[je('<div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0" data-v-b69791fb></div><div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0" data-v-b69791fb></div><div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0" data-v-b69791fb></div><div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0" data-v-b69791fb></div><div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0" data-v-b69791fb></div><div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0" data-v-b69791fb></div><div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0" data-v-b69791fb></div><div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0" data-v-b69791fb></div><div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0" data-v-b69791fb></div><section class="relative z-10 container mx-auto py-32 px-6 text-white" data-v-b69791fb><h1 class="text-3xl md:text-4xl font-extrabold text-center text-purple-400 mb-6" data-v-b69791fb>Site de Calculatrices - Vue d&#39;ensemble</h1><p class="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12" data-v-b69791fb> Application web proposant deux calculatrices : une basique pour les opérations usuelles (+, -, ×, ÷), et une scientifique plus avancée. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-200 mb-16" data-v-b69791fb><div data-v-b69791fb><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-b69791fb>Fonctionnalités</h3><ul class="list-disc list-inside space-y-1" data-v-b69791fb><li data-v-b69791fb>Calculatrice basique</li><li data-v-b69791fb>Calculatrice scientifique</li><li data-v-b69791fb>Interface responsive</li><li data-v-b69791fb>Support clavier</li></ul></div><div data-v-b69791fb><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-b69791fb>Stack Technique</h3><ul class="list-disc list-inside space-y-1" data-v-b69791fb><li data-v-b69791fb>HTML / CSS</li><li data-v-b69791fb>JavaScript</li><li data-v-b69791fb>Vue.js (v3)</li><li data-v-b69791fb>Tailwind CSS</li></ul></div><div data-v-b69791fb><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-b69791fb>Expérience Utilisateur</h3><ul class="list-disc list-inside space-y-1" data-v-b69791fb><li data-v-b69791fb>Transitions fluides</li><li data-v-b69791fb>Thème sombre clair</li><li data-v-b69791fb>Raccourcis claviers</li><li data-v-b69791fb>Validation dynamique</li></ul></div><div data-v-b69791fb><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-b69791fb>Objectifs</h3><ul class="list-disc list-inside space-y-1" data-v-b69791fb><li data-v-b69791fb>Pratique algorithmique</li><li data-v-b69791fb>Apprentissage Vue 3</li><li data-v-b69791fb>Améliorer le design UI</li></ul></div></div><div class="text-center" data-v-b69791fb><a href="#" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl transition" data-v-b69791fb> Voir code source ↗ </a></div></section>',10)])))}},Gy=sn(Ky,[["__scopeId","data-v-b69791fb"]]),Jy={class:"dark bg-gray-900 min-h-screen relative overflow-hidden"},Yy={__name:"RadarRecul",setup(t){return(e,n)=>(Y(),ne("div",Jy,n[0]||(n[0]=[je('<div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0" data-v-48dea4df></div><div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0" data-v-48dea4df></div><div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0" data-v-48dea4df></div><div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0" data-v-48dea4df></div><div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0" data-v-48dea4df></div><div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0" data-v-48dea4df></div><div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0" data-v-48dea4df></div><div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0" data-v-48dea4df></div><div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0" data-v-48dea4df></div><section class="relative z-10 container mx-auto py-32 px-6 text-white" data-v-48dea4df><h1 class="text-3xl md:text-4xl font-extrabold text-center text-purple-400 mb-6" data-v-48dea4df>Radar de Recul - Vue d&#39;ensemble</h1><p class="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12" data-v-48dea4df> Système embarqué de détection de distance à l&#39;aide d&#39;un capteur à ultrasons HC-SR04, d&#39;une carte STM32, d&#39;un buzzer pour l&#39;alerte sonore, et d&#39;un affichage LED pour visualiser la proximité. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-200 mb-16" data-v-48dea4df><div data-v-48dea4df><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-48dea4df>Fonctionnalités</h3><ul class="list-disc list-inside space-y-1" data-v-48dea4df><li data-v-48dea4df>Mesure de distance en temps réel</li><li data-v-48dea4df>Signal sonore adapté à la distance</li><li data-v-48dea4df>Affichage LED de l&#39;alerte</li><li data-v-48dea4df>Portée précise jusqu&#39;à 2m</li></ul></div><div data-v-48dea4df><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-48dea4df>Matériel Utilisé</h3><ul class="list-disc list-inside space-y-1" data-v-48dea4df><li data-v-48dea4df>STM32 Blue Pill</li><li data-v-48dea4df>Capteur HC-SR04</li><li data-v-48dea4df>LED RGB et buzzer</li><li data-v-48dea4df>Alimentation 5V</li></ul></div><div data-v-48dea4df><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-48dea4df>Code &amp; Firmware</h3><ul class="list-disc list-inside space-y-1" data-v-48dea4df><li data-v-48dea4df>STM32CubeIDE</li><li data-v-48dea4df>Langage C embarqué</li><li data-v-48dea4df>Timers et interruptions</li><li data-v-48dea4df>Mesure d&#39;impulsions</li></ul></div><div data-v-48dea4df><h3 class="text-xl font-bold text-purple-400 mb-2" data-v-48dea4df>Objectifs</h3><ul class="list-disc list-inside space-y-1" data-v-48dea4df><li data-v-48dea4df>Comprendre les capteurs</li><li data-v-48dea4df>Programmer un microcontrôleur</li><li data-v-48dea4df>Assembler une chaîne d&#39;alerte</li></ul></div></div><div class="text-center" data-v-48dea4df><a href="#" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl transition" data-v-48dea4df> Voir code ou documentation ↗ </a></div></section>',10)])))}},Xy=sn(Yy,[["__scopeId","data-v-48dea4df"]]),Qy={class:"dark bg-gray-900 min-h-screen relative overflow-hidden flex items-center justify-center px-4"},Zy={class:"relative z-10 w-full max-w-md bg-gray-800/90 backdrop-blur-md border border-purple-700/20 rounded-3xl shadow-2xl p-8"},e_={class:"flex flex-col gap-4"},t_={key:0,class:"text-red-400 text-sm text-center"},n_={__name:"Login",setup(t){const e=Le(""),n=Le(""),r=Le(null),s=Ri(),i=async()=>{r.value=null;try{await Z0(Wr,e.value,n.value),s.push("./admin")}catch(o){r.value="Identifiants incorrects.",console.error(o)}};return(o,a)=>(Y(),ne("div",Qy,[a[3]||(a[3]=P("div",{class:"absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"},null,-1)),a[4]||(a[4]=P("div",{class:"absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"},null,-1)),a[5]||(a[5]=P("div",{class:"absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"},null,-1)),P("div",Zy,[a[2]||(a[2]=P("h2",{class:"text-3xl font-extrabold text-center text-white mb-6"}," 🔐 Connexion Admin ",-1)),P("div",e_,[Zi(P("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),type:"email",placeholder:"Email",class:"px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[To,e.value]]),Zi(P("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),type:"password",placeholder:"Mot de passe",class:"px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[To,n.value]]),P("button",{onClick:i,class:"bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all"}," Se connecter "),r.value?(Y(),ne("p",t_,Ut(r.value),1)):In("",!0)])])]))}},r_={class:"dark bg-gray-900 min-h-screen relative overflow-hidden px-4 py-24 flex items-center justify-center"},s_={key:0,class:"relative z-10 w-full max-w-3xl bg-gray-800/90 backdrop-blur-md border border-purple-700/20 rounded-3xl shadow-2xl p-10 text-center text-white"},i_={class:"text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"},o_={__name:"Admin",setup(t){const e=Le(null),n=Ri();return Ii(()=>{ru(Wr,r=>{r?e.value=r:n.push("/login")})}),(r,s)=>(Y(),ne("div",r_,[s[1]||(s[1]=P("div",{class:"absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"},null,-1)),s[2]||(s[2]=P("div",{class:"absolute w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full blur-2xl top-[50%] left-[60%] z-0"},null,-1)),s[3]||(s[3]=P("div",{class:"absolute w-[250px] h-[250px] bg-pink-500 opacity-10 rounded-full blur-2xl bottom-[10%] right-[20%] z-0"},null,-1)),e.value?(Y(),ne("div",s_,[P("h1",i_," Bienvenue, "+Ut(e.value.email),1),s[0]||(s[0]=je('<p class="text-gray-300 text-lg mb-8"> Vous êtes connecté à l’espace administrateur. </p><div class="grid gap-6 sm:grid-cols-2"><div class="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"><h3 class="text-xl font-bold text-blue-400 mb-2">📁 Gérer les projets</h3><p class="text-gray-300">Ajoutez, modifiez ou supprimez les projets affichés dans votre portfolio.</p></div><div class="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"><h3 class="text-xl font-bold text-blue-400 mb-2">⚙️ Paramètres</h3><p class="text-gray-300">Prochainement : personnalisation de l’interface, thème, etc.</p></div></div>',2))])):In("",!0)]))}},a_=[{path:"/",component:ey},{path:"/projects",component:dy},{path:"/projects/portfolio",component:By},{path:"/projects/botdiscord",component:Wy},{path:"/projects/calculatorweb",component:Gy},{path:"/projects/radar",component:Xy},{path:"/about",component:my},{path:"/contact",component:$y},{path:"/login",component:n_},{path:"/admin",component:o_}],l_=Jh({history:Eh(),routes:a_});Wf(Yv).use(l_).mount("#app");
