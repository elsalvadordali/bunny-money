(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function le(){}const Fc=t=>t;function Vc(t){return t()}function $a(){return Object.create(null)}function we(t){t.forEach(Vc)}function Ds(t){return typeof t=="function"}function ke(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ei;function ef(t,e){return ei||(ei=document.createElement("a")),ei.href=e,t===ei.href}function tf(t){return Object.keys(t).length===0}function Hi(t){return t&&Ds(t.destroy)?t.destroy:le}const Bc=typeof window<"u";let $c=Bc?()=>window.performance.now():()=>Date.now(),Io=Bc?t=>requestAnimationFrame(t):le;const Cn=new Set;function jc(t){Cn.forEach(e=>{e.c(t)||(Cn.delete(e),e.f())}),Cn.size!==0&&Io(jc)}function qc(t){let e;return Cn.size===0&&Io(jc),{promise:new Promise(n=>{Cn.add(e={c:t,f:n})}),abort(){Cn.delete(e)}}}function d(t,e){t.appendChild(e)}function Hc(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function nf(t){const e=y("style");return sf(Hc(t),e),e.sheet}function sf(t,e){return d(t.head||t,e),e.sheet}function S(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function vn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function E(){return V(" ")}function tt(){return V("")}function U(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Kc(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xe(t){return t===""?null:+t}function rf(t){return Array.from(t.childNodes)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function he(t,e){t.value=e==null?"":e}function yi(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function zc(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function of(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}const _i=new Map;let bi=0;function af(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function lf(t,e){const n={stylesheet:nf(e),rules:{}};return _i.set(t,n),n}function $r(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let _=0;_<=1;_+=l){const w=e+(n-e)*r(_);c+=_*100+`%{${o(w,1-w)}}
`}const u=c+`100% {${o(n,1-n)}}
}`,h=`__svelte_${af(u)}_${a}`,f=Hc(t),{stylesheet:p,rules:g}=_i.get(f)||lf(f,t);g[h]||(g[h]=!0,p.insertRule(`@keyframes ${h} ${u}`,p.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${h} ${s}ms linear ${i}ms 1 both`,bi+=1,h}function jr(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),bi-=i,bi||cf())}function cf(){Io(()=>{bi||(_i.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),_i.clear())})}let hs;function ss(t){hs=t}function uf(){if(!hs)throw new Error("Function called outside component initialization");return hs}function hf(t){uf().$$.on_mount.push(t)}const Xn=[],re=[],ci=[],qr=[],df=Promise.resolve();let Hr=!1;function ff(){Hr||(Hr=!0,df.then(Gc))}function Ct(t){ci.push(t)}function ce(t){qr.push(t)}const Er=new Set;let ti=0;function Gc(){const t=hs;do{for(;ti<Xn.length;){const e=Xn[ti];ti++,ss(e),pf(e.$$)}for(ss(null),Xn.length=0,ti=0;re.length;)re.pop()();for(let e=0;e<ci.length;e+=1){const n=ci[e];Er.has(n)||(Er.add(n),n())}ci.length=0}while(Xn.length);for(;qr.length;)qr.pop()();Hr=!1,Er.clear(),ss(t)}function pf(t){if(t.fragment!==null){t.update(),we(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ct)}}let Qn;function Wc(){return Qn||(Qn=Promise.resolve(),Qn.then(()=>{Qn=null})),Qn}function is(t,e,n){t.dispatchEvent(of(`${e?"intro":"outro"}${n}`))}const ui=new Set;let kt;function lt(){kt={r:0,c:[],p:kt}}function ct(){kt.r||we(kt.c),kt=kt.p}function M(t,e){t&&t.i&&(ui.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(ui.has(t))return;ui.add(t),kt.c.push(()=>{ui.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Qc={duration:0};function mf(t,e,n){let s=e(t,n),i=!1,r,o,a=0;function l(){r&&jr(t,r)}function c(){const{delay:h=0,duration:f=300,easing:p=Fc,tick:g=le,css:v}=s||Qc;v&&(r=$r(t,0,1,f,h,p,v,a++)),g(0,1);const _=$c()+h,w=_+f;o&&o.abort(),i=!0,Ct(()=>is(t,!0,"start")),o=qc(b=>{if(i){if(b>=w)return g(1,0),is(t,!0,"end"),l(),i=!1;if(b>=_){const k=p((b-_)/f);g(k,1-k)}}return i})}let u=!1;return{start(){u||(u=!0,jr(t),Ds(s)?(s=s(),Wc().then(c)):c())},invalidate(){u=!1},end(){i&&(l(),i=!1)}}}function ja(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&jr(t,l)}function u(f,p){const g=f.b-r;return p*=Math.abs(g),{a:r,b:f.b,d:g,duration:p,start:f.start,end:f.start+p,group:f.group}}function h(f){const{delay:p=0,duration:g=300,easing:v=Fc,tick:_=le,css:w}=i||Qc,b={start:$c()+p,b:f};f||(b.group=kt,kt.r+=1),o||a?a=b:(w&&(c(),l=$r(t,r,f,g,p,v,w)),f&&_(0,1),o=u(b,g),Ct(()=>is(t,f,"start")),qc(k=>{if(a&&k>a.start&&(o=u(a,g),a=null,is(t,o.b,"start"),w&&(c(),l=$r(t,r,o.b,o.duration,0,v,i.css))),o){if(k>=o.end)_(r=o.b,1-r),is(t,o.b,"end"),a||(o.b?c():--o.group.r||we(o.group.c)),o=null;else if(k>=o.start){const C=k-o.start;r=o.a+o.d*v(C/o.duration),_(r,1-r)}}return!!(o||a)}))}return{run(f){Ds(i)?Wc().then(()=>{i=i(),h(f)}):h(f)},end(){c(),o=a=null}}}function gf(t,e){t.d(1),e.delete(t.key)}function vf(t,e,n,s,i,r,o,a,l,c,u,h){let f=t.length,p=r.length,g=f;const v={};for(;g--;)v[t[g].key]=g;const _=[],w=new Map,b=new Map;for(g=p;g--;){const T=h(i,r,g),D=n(T);let N=o.get(D);N?s&&N.p(T,e):(N=c(D,T),N.c()),w.set(D,_[g]=N),D in v&&b.set(D,Math.abs(g-v[D]))}const k=new Set,C=new Set;function I(T){M(T,1),T.m(a,u),o.set(T.key,T),u=T.first,p--}for(;f&&p;){const T=_[p-1],D=t[f-1],N=T.key,R=D.key;T===D?(u=T.first,f--,p--):w.has(R)?!o.has(N)||k.has(N)?I(T):C.has(R)?f--:b.get(N)>b.get(R)?(C.add(N),I(T)):(k.add(R),f--):(l(D,o),f--)}for(;f--;){const T=t[f];w.has(T.key)||l(T,o)}for(;p;)I(_[p-1]);return _}function ue(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function se(t){t&&t.c()}function Z(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Ct(()=>{const o=t.$$.on_mount.map(Vc).filter(Ds);t.$$.on_destroy?t.$$.on_destroy.push(...o):we(o),t.$$.on_mount=[]}),r.forEach(Ct)}function ee(t,e){const n=t.$$;n.fragment!==null&&(we(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yf(t,e){t.$$.dirty[0]===-1&&(Xn.push(t),ff(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,s,i,r,o,a=[-1]){const l=hs;ss(t);const c=t.$$={fragment:null,ctx:[],props:r,update:le,not_equal:i,bound:$a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:$a(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,f,...p)=>{const g=p.length?p[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&yf(t,h)),f}):[],c.update(),u=!0,we(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=rf(e.target);c.fragment&&c.fragment.l(h),h.forEach(A)}else c.fragment&&c.fragment.c();e.intro&&M(t.$$.fragment),Z(t,e.target,e.anchor,e.customElement),Gc()}ss(l)}class Se{$destroy(){ee(this,1),this.$destroy=le}$on(e,n){if(!Ds(n))return le;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!tf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function _f(t){const e=t-1;return e*e*e+1}function Kr(t,{delay:e=0,duration:n=400,easing:s=_f,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o);return{delay:e,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} translate(${(1-h)*i}px, ${(1-h)*r}px);
			opacity: ${l-u*f}`}}function qa(t){let e,n,s,i,r,o,a,l,c;return{c(){e=y("div"),n=y("p"),s=V(t[1]),i=E(),r=y("button"),r.textContent="X",m(n,"class","m-4"),m(r,"class","text-black bg-yellow rounded-md pl-6 pr-6 mb-1 border-black border-2 shaded big-shade"),m(e,"class","sticky m-4 p-6 rounded-xl m-2 bg-pink center border-black border-2 shaded svelte-1dvn315")},m(u,h){S(u,e,h),d(e,n),d(n,s),d(e,i),d(e,r),a=!0,l||(c=U(r,"click",t[2]),l=!0)},p(u,h){(!a||h&2)&&ae(s,u[1])},i(u){a||(Ct(()=>{o||(o=ja(e,Kr,{x:-300,duration:700},!0)),o.run(1)}),a=!0)},o(u){o||(o=ja(e,Kr,{x:-300,duration:700},!1)),o.run(0),a=!1},d(u){u&&A(e),u&&o&&o.end(),l=!1,c()}}}function bf(t){let e,n,s=t[0]&&qa(t);return{c(){s&&s.c(),e=tt()},m(i,r){s&&s.m(i,r),S(i,e,r),n=!0},p(i,[r]){i[0]?s?(s.p(i,r),r&1&&M(s,1)):(s=qa(i),s.c(),M(s,1),s.m(e.parentNode,e)):s&&(lt(),F(s,1,1,()=>{s=null}),ct())},i(i){n||(M(s),n=!0)},o(i){F(s),n=!1},d(i){s&&s.d(i),i&&A(e)}}}function wf(t,e,n){let{message:s="default"}=e,{visible:i=!1}=e;const r=()=>n(0,i=!1);return t.$$set=o=>{"message"in o&&n(1,s=o.message),"visible"in o&&n(0,i=o.visible)},t.$$.update=()=>{t.$$.dirty&1&&i&&setTimeout(()=>{n(0,i=!1),n(1,s="")},5e3)},[i,s,r]}class nt extends Se{constructor(e){super(),Ae(this,e,wf,bf,ke,{message:1,visible:0})}}/**
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
 *//**
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
 */const Yc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ef=function(t){const e=Yc(t);return Xc.encodeByteArray(e,!0)},wi=function(t){return Ef(t).replace(/\./g,"")},Jc=function(t){try{return Xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function If(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Tf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Af(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sf(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cf(){return typeof indexedDB=="object"}function Df(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Nf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rf=()=>Nf().__FIREBASE_DEFAULTS__,Of=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jc(t[1]);return e&&JSON.parse(e)},To=()=>{try{return Rf()||Of()||Lf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zc=t=>{var e,n;return(n=(e=To())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pf=t=>{const e=Zc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Mf=()=>{var t;return(t=To())===null||t===void 0?void 0:t.config},eu=t=>{var e;return(e=To())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Uf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function xf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wi(JSON.stringify(n)),wi(JSON.stringify(o)),a].join(".")}/**
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
 */const Ff="FirebaseError";class Mt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ff,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Vf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,s)}}function Vf(t,e){return t.replace(Bf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Bf=/\{\$([^}]+)}/g;function $f(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ki(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ha(r)&&Ha(o)){if(!ki(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ha(t){return t!==null&&typeof t=="object"}/**
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
 */function Rs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Zn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jf(t,e){const n=new qf(t,e);return n.subscribe.bind(n)}class qf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Hf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ir),i.error===void 0&&(i.error=Ir),i.complete===void 0&&(i.complete=Ir);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ir(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Kf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Uf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gf(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zf(t){return t===tn?void 0:t}function Gf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Qf={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Yf=ge.INFO,Xf={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Jf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Xf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ao{constructor(e){this.name=e,this._logLevel=Yf,this._logHandler=Jf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Zf=(t,e)=>e.some(n=>t instanceof n);let Ka,za;function ep(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tp(){return za||(za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tu=new WeakMap,zr=new WeakMap,nu=new WeakMap,Tr=new WeakMap,So=new WeakMap;function np(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(jt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tu.set(n,t)}).catch(()=>{}),So.set(e,t),e}function sp(t){if(zr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});zr.set(t,e)}let Gr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ip(t){Gr=t(Gr)}function rp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ar(this),e,...n);return nu.set(s,e.sort?e.sort():[e]),jt(s)}:tp().includes(t)?function(...e){return t.apply(Ar(this),e),jt(tu.get(this))}:function(...e){return jt(t.apply(Ar(this),e))}}function op(t){return typeof t=="function"?rp(t):(t instanceof IDBTransaction&&sp(t),Zf(t,ep())?new Proxy(t,Gr):t)}function jt(t){if(t instanceof IDBRequest)return np(t);if(Tr.has(t))return Tr.get(t);const e=op(t);return e!==t&&(Tr.set(t,e),So.set(e,t)),e}const Ar=t=>So.get(t);function ap(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=jt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(jt(o.result),l.oldVersion,l.newVersion,jt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const lp=["get","getKey","getAll","getAllKeys","count"],cp=["put","add","delete","clear"],Sr=new Map;function Ga(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sr.get(e))return Sr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=cp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||lp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Sr.set(e,r),r}ip(t=>({...t,get:(e,n,s)=>Ga(e,n)||t.get(e,n,s),has:(e,n)=>!!Ga(e,n)||t.has(e,n)}));/**
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
 */class up{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",Wa="0.8.2";/**
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
 */const hn=new Ao("@firebase/app"),dp="@firebase/app-compat",fp="@firebase/analytics-compat",pp="@firebase/analytics",mp="@firebase/app-check-compat",gp="@firebase/app-check",vp="@firebase/auth",yp="@firebase/auth-compat",_p="@firebase/database",bp="@firebase/database-compat",wp="@firebase/functions",kp="@firebase/functions-compat",Ep="@firebase/installations",Ip="@firebase/installations-compat",Tp="@firebase/messaging",Ap="@firebase/messaging-compat",Sp="@firebase/performance",Cp="@firebase/performance-compat",Dp="@firebase/remote-config",Np="@firebase/remote-config-compat",Rp="@firebase/storage",Op="@firebase/storage-compat",Lp="@firebase/firestore",Pp="@firebase/firestore-compat",Mp="firebase",Up="9.12.1";/**
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
 */const Qr="[DEFAULT]",xp={[Wr]:"fire-core",[dp]:"fire-core-compat",[pp]:"fire-analytics",[fp]:"fire-analytics-compat",[gp]:"fire-app-check",[mp]:"fire-app-check-compat",[vp]:"fire-auth",[yp]:"fire-auth-compat",[_p]:"fire-rtdb",[bp]:"fire-rtdb-compat",[wp]:"fire-fn",[kp]:"fire-fn-compat",[Ep]:"fire-iid",[Ip]:"fire-iid-compat",[Tp]:"fire-fcm",[Ap]:"fire-fcm-compat",[Sp]:"fire-perf",[Cp]:"fire-perf-compat",[Dp]:"fire-rc",[Np]:"fire-rc-compat",[Rp]:"fire-gcs",[Op]:"fire-gcs-compat",[Lp]:"fire-fst",[Pp]:"fire-fst-compat","fire-js":"fire-js",[Mp]:"fire-js-all"};/**
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
 */const Ei=new Map,Yr=new Map;function Fp(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Yr.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Yr.set(e,t);for(const n of Ei.values())Fp(n,t);return!0}function Co(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Vp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qt=new Ns("app","Firebase",Vp);/**
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
 */class Bp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=Up;function su(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=Mf()),!n)throw qt.create("no-options");const r=Ei.get(i);if(r){if(ki(n,r.options)&&ki(s,r.config))return r;throw qt.create("duplicate-app",{appName:i})}const o=new Wf(i);for(const l of Yr.values())o.addComponent(l);const a=new Bp(n,s,o);return Ei.set(i,a),a}function iu(t=Qr){const e=Ei.get(t);if(!e&&t===Qr)return su();if(!e)throw qt.create("no-app",{appName:t});return e}function Ht(t,e,n){var s;let i=(s=xp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Ln(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $p="firebase-heartbeat-database",jp=1,ds="firebase-heartbeat-store";let Cr=null;function ru(){return Cr||(Cr=ap($p,jp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),Cr}async function qp(t){var e;try{return(await ru()).transaction(ds).objectStore(ds).get(ou(t))}catch(n){if(n instanceof Mt)hn.warn(n.message);else{const s=qt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});hn.warn(s.message)}}}async function Qa(t,e){var n;try{const i=(await ru()).transaction(ds,"readwrite");return await i.objectStore(ds).put(e,ou(t)),i.done}catch(s){if(s instanceof Mt)hn.warn(s.message);else{const i=qt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});hn.warn(i.message)}}}function ou(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hp=1024,Kp=30*24*60*60*1e3;class zp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ya();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Kp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ya(),{heartbeatsToSend:n,unsentEntries:s}=Gp(this._heartbeatsCache.heartbeats),i=wi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ya(){return new Date().toISOString().substring(0,10)}function Gp(t,e=Hp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Wp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cf()?Df().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xa(t){return wi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Qp(t){Ln(new un("platform-logger",e=>new up(e),"PRIVATE")),Ln(new un("heartbeat",e=>new zp(e),"PRIVATE")),Ht(Wr,Wa,t),Ht(Wr,Wa,"esm2017"),Ht("fire-js","")}Qp("");function Do(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function au(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yp=au,lu=new Ns("auth","Firebase",au());/**
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
 */const Ja=new Ao("@firebase/auth");function hi(t,...e){Ja.logLevel<=ge.ERROR&&Ja.error(`Auth (${Os}): ${t}`,...e)}/**
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
 */function pt(t,...e){throw No(t,...e)}function vt(t,...e){return No(t,...e)}function Xp(t,e,n){const s=Object.assign(Object.assign({},Yp()),{[e]:n});return new Ns("auth","Firebase",s).create(e,{appName:t.name})}function No(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return lu.create(t,...e)}function G(t,e,...n){if(!t)throw No(e,...n)}function Et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hi(e),new Error(e)}function Dt(t,e){t||Et(e)}/**
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
 */const Za=new Map;function It(t){Dt(t instanceof Function,"Expected a class definition");let e=Za.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Za.set(t,e),e)}/**
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
 */function Jp(t,e){const n=Co(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ki(r,e!=null?e:{}))return i;pt(i,"already-initialized")}return n.initialize({options:e})}function Zp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(It);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Xr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function em(){return el()==="http:"||el()==="https:"}function el(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(em()||Tf()||"connection"in navigator)?navigator.onLine:!0}function nm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=If()||Af()}get(){return tm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ro(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const im=new Ls(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,s,i={}){return uu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),cu.fetch()(hu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function uu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},sm),e);try{const i=new rm(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ni(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ni(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ni(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xp(t,u,c);pt(t,u)}}catch(i){if(i instanceof Mt)throw i;pt(t,"network-request-failed")}}async function Ps(t,e,n,s,i={}){const r=await jn(t,e,n,s,i);return"mfaPendingCredential"in r&&pt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function hu(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ro(t.config,i):`${t.config.apiScheme}://${i}`}class rm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(vt(this.auth,"network-request-failed")),im.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ni(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=vt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function om(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function am(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function rs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lm(t,e=!1){const n=He(t),s=await n.getIdToken(e),i=Oo(s);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:rs(Dr(i.auth_time)),issuedAtTime:rs(Dr(i.iat)),expirationTime:rs(Dr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Dr(t){return Number(t)*1e3}function Oo(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return hi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Jc(s);return r?JSON.parse(r):(hi("Failed to decode base64 JWT payload"),null)}catch(r){return hi("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function cm(t){const e=Oo(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mt&&um(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function um({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class du{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(t){var e;const n=t.auth,s=await t.getIdToken(),i=await fs(t,am(n,{idToken:s}));G(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?pm(r.providerUserInfo):[],a=fm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new du(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function dm(t){const e=He(t);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fm(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function pm(t){return t.map(e=>{var{providerId:n}=e,s=Do(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function mm(t,e){const n=await uu(t,{},async()=>{const s=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=hu(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await mm(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ps;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function xt(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Do(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new du(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await fs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lm(this,e)}reload(){return dm(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ii(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fs(this,om(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:C,isAnonymous:I,providerData:T,stsTokenManager:D}=n;G(k&&D,e,"internal-error");const N=ps.fromJSON(this.name,D);G(typeof k=="string",e,"internal-error"),xt(h,e.name),xt(f,e.name),G(typeof C=="boolean",e,"internal-error"),G(typeof I=="boolean",e,"internal-error"),xt(p,e.name),xt(g,e.name),xt(v,e.name),xt(_,e.name),xt(w,e.name),xt(b,e.name);const R=new an({uid:k,auth:e,email:f,emailVerified:C,displayName:h,isAnonymous:I,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:N,createdAt:w,lastLoginAt:b});return T&&Array.isArray(T)&&(R.providerData=T.map(x=>Object.assign({},x))),_&&(R._redirectEventId=_),R}static async _fromIdTokenResponse(e,n,s=!1){const i=new ps;i.updateFromServerResponse(n);const r=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ii(r),r}}/**
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
 */class fu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fu.type="NONE";const tl=fu;/**
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
 */function di(t,e,n){return`firebase:${t}:${e}:${n}`}class Dn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=di(this.userKey,i.apiKey,r),this.fullPersistenceKey=di("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Dn(It(tl),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||It(tl);const o=di(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=an._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Dn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Dn(r,e,s))}}/**
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
 */function nl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yu(e))return"Blackberry";if(_u(e))return"Webos";if(Lo(e))return"Safari";if((e.includes("chrome/")||mu(e))&&!e.includes("edge/"))return"Chrome";if(vu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pu(t=Je()){return/firefox\//i.test(t)}function Lo(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mu(t=Je()){return/crios\//i.test(t)}function gu(t=Je()){return/iemobile/i.test(t)}function vu(t=Je()){return/android/i.test(t)}function yu(t=Je()){return/blackberry/i.test(t)}function _u(t=Je()){return/webos/i.test(t)}function Ki(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gm(t=Je()){var e;return Ki(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vm(){return Sf()&&document.documentMode===10}function bu(t=Je()){return Ki(t)||vu(t)||_u(t)||yu(t)||/windows phone/i.test(t)||gu(t)}function ym(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wu(t,e=[]){let n;switch(t){case"Browser":n=nl(Je());break;case"Worker":n=`${nl(Je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${s}`}/**
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
 */class _m{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class bm{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sl(this),this.idTokenSubscription=new sl(this),this.beforeStateQueue=new _m(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ii(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&It(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ms(t){return He(t)}class sl{constructor(e){this.auth=e,this.observer=null,this.addObserver=jf(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wm(t,e,n){const s=Ms(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=ku(e),{host:o,port:a}=km(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Em()}function ku(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function km(t){const e=ku(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:il(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:il(o)}}}function il(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Em(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Po{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,n){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function Im(t,e){return jn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Tm(t,e){return Ps(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}async function Am(t,e){return jn(t,"POST","/v1/accounts:sendOobCode",$n(t,e))}async function Sm(t,e){return Am(t,e)}/**
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
 */async function Cm(t,e){return Ps(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function Dm(t,e){return Ps(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class ms extends Po{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ms(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ms(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Tm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Cm(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Im(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dm(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Nn(t,e){return Ps(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
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
 */const Nm="http://localhost";class dn extends Po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Do(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new dn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Nn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}buildRequest(){const e={requestUri:Nm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
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
 */function Rm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Om(t){const e=Jn(Zn(t)).link,n=e?Jn(Zn(e)).deep_link_id:null,s=Jn(Zn(t)).deep_link_id;return(s?Jn(Zn(s)).link:null)||s||n||e||t}class Mo{constructor(e){var n,s,i,r,o,a;const l=Jn(Zn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Rm((i=l.mode)!==null&&i!==void 0?i:null);G(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Om(e);try{return new Mo(n)}catch{return null}}}/**
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
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,n){return ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Mo.parseLink(n);return G(s,"argument-error"),ms._fromEmailAndCode(e,s.code,s.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Us extends Eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ft extends Us{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Vt.credential(n,s)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class Bt extends Us{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class $t extends Us{constructor(){super("twitter.com")}static credential(e,n){return dn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $t.credential(n,s)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */async function Lm(t,e){return Ps(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
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
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await an._fromIdTokenResponse(e,s,i),o=rl(s);return new fn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=rl(s);return new fn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function rl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ti extends Mt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ti.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ti(e,n,s,i)}}function Iu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ti._fromErrorAndOperation(t,r,e,s):r})}async function Pm(t,e,n=!1){const s=await fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",s)}/**
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
 */async function Mm(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await fs(t,Iu(i,r,e,t),n);G(o.idToken,i,"internal-error");const a=Oo(o.idToken);G(a,i,"internal-error");const{sub:l}=a;return G(t.uid===l,i,"user-mismatch"),fn._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&pt(i,"user-mismatch"),o}}/**
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
 */async function Tu(t,e,n=!1){const s="signIn",i=await Iu(t,s,e),r=await fn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Um(t,e){return Tu(Ms(t),e)}/**
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
 */function xm(t,e,n){var s;G(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),G(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(G(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(G(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function Fm(t,e,n){const s=Ms(t),i=await Lm(s,{returnSecureToken:!0,email:e,password:n}),r=await fn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function ol(t,e,n){return Um(He(t),qn.credential(e,n))}async function Vm(t,e){const n=He(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&xm(n.auth,i,e);const{email:r}=await Sm(n.auth,i);r!==t.email&&await t.reload()}function Bm(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function $m(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function jm(t,e,n,s){return He(t).onAuthStateChanged(e,n,s)}function Au(t){return He(t).signOut()}const Ai="__sak";/**
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
 */class Su{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qm(){const t=Je();return Lo(t)||Ki(t)}const Hm=1e3,Km=10;class Cu extends Su{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qm()&&ym(),this.fallbackToPolling=bu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);vm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Km):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Hm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cu.type="LOCAL";const zm=Cu;/**
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
 */class Du extends Su{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Du.type="SESSION";const Nu=Du;/**
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
 */function Gm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new zi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Gm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
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
 */function Uo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Wm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Uo("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function Qm(t){yt().location.href=t}/**
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
 */function Ru(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function Ym(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jm(){return Ru()?self:null}/**
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
 */const Ou="firebaseLocalStorageDb",Zm=1,Si="firebaseLocalStorage",Lu="fbase_key";class xs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gi(t,e){return t.transaction([Si],e?"readwrite":"readonly").objectStore(Si)}function eg(){const t=indexedDB.deleteDatabase(Ou);return new xs(t).toPromise()}function Jr(){const t=indexedDB.open(Ou,Zm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Si,{keyPath:Lu})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Si)?e(s):(s.close(),await eg(),e(await Jr()))})})}async function al(t,e,n){const s=Gi(t,!0).put({[Lu]:e,value:n});return new xs(s).toPromise()}async function tg(t,e){const n=Gi(t,!1).get(e),s=await new xs(n).toPromise();return s===void 0?null:s.value}function ll(t,e){const n=Gi(t,!0).delete(e);return new xs(n).toPromise()}const ng=800,sg=3;class Pu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ru()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(Jm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ym(),!this.activeServiceWorker)return;this.sender=new Wm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jr();return await al(e,Ai,"1"),await ll(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>al(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ll(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Gi(i,!1).getAll();return new xs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pu.type="LOCAL";const ig=Pu;/**
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
 */function rg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function og(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=vt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",rg().appendChild(s)})}function ag(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ls(3e4,6e4);/**
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
 */function lg(t,e){return e?It(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xo extends Po{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cg(t){return Tu(t.auth,new xo(t),t.bypassAuthState)}function ug(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Mm(n,new xo(t),t.bypassAuthState)}async function hg(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Pm(n,new xo(t),t.bypassAuthState)}/**
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
 */class Mu{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cg;case"linkViaPopup":case"linkViaRedirect":return hg;case"reauthViaPopup":case"reauthViaRedirect":return ug;default:pt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dg=new Ls(2e3,1e4);class Tn extends Mu{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Uo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,dg.get())};e()}}Tn.currentPopupAction=null;/**
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
 */const fg="pendingRedirect",fi=new Map;class pg extends Mu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=fi.get(this.auth._key());if(!e){try{const s=await mg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}fi.set(this.auth._key(),e)}return this.bypassAuthState||fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mg(t,e){const n=yg(e),s=vg(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function gg(t,e){fi.set(t._key(),e)}function vg(t){return It(t._redirectPersistence)}function yg(t){return di(fg,t.config.apiKey,t.name)}async function _g(t,e,n=!1){const s=Ms(t),i=lg(s,e),o=await new pg(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const bg=10*60*1e3;class wg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Uu(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bg&&this.cachedEventUids.clear(),this.cachedEventUids.has(cl(e))}saveEventToCache(e){this.cachedEventUids.add(cl(e)),this.lastProcessedEventTime=Date.now()}}function cl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uu(t);default:return!1}}/**
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
 */async function Eg(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
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
 */const Ig=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tg=/^https?/;async function Ag(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Eg(t);for(const n of e)try{if(Sg(n))return}catch{}pt(t,"unauthorized-domain")}function Sg(t){const e=Xr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Tg.test(n))return!1;if(Ig.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Cg=new Ls(3e4,6e4);function ul(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dg(t){return new Promise((e,n)=>{var s,i,r;function o(){ul(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ul(),n(vt(t,"network-request-failed"))},timeout:Cg.get()})}if(!((i=(s=yt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=yt().gapi)===null||r===void 0)&&r.load)o();else{const a=ag("iframefcb");return yt()[a]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},og(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pi=null,e})}let pi=null;function Ng(t){return pi=pi||Dg(t),pi}/**
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
 */const Rg=new Ls(5e3,15e3),Og="__/auth/iframe",Lg="emulator/auth/iframe",Pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ug(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ro(e,Lg):`https://${t.config.authDomain}/${Og}`,s={apiKey:e.apiKey,appName:t.name,v:Os},i=Mg.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Rs(s).slice(1)}`}async function xg(t){const e=await Ng(t),n=yt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Ug(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pg,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),a=yt().setTimeout(()=>{r(o)},Rg.get());function l(){yt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Fg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vg=500,Bg=600,$g="_blank",jg="http://localhost";class hl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qg(t,e,n,s=Vg,i=Bg){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Fg),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Je().toLowerCase();n&&(a=mu(c)?$g:n),pu(c)&&(e=e||jg,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(gm(c)&&a!=="_self")return Hg(e||"",a),new hl(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new hl(h)}function Hg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Kg="__/auth/handler",zg="emulator/auth/handler";function dl(t,e,n,s,i,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Os,eventId:i};if(e instanceof Eu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$f(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Us){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Gg(t)}?${Rs(a).slice(1)}`}function Gg({config:t}){return t.emulator?Ro(t,zg):`https://${t.authDomain}/${Kg}`}/**
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
 */const Nr="webStorageSupport";class Wg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nu,this._completeRedirectFn=_g,this._overrideRedirectResult=gg}async _openPopup(e,n,s,i){var r;Dt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=dl(e,n,s,Xr(),i);return qg(e,o,Uo())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Qm(dl(e,n,s,Xr(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xg(e),s=new wg(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nr,{type:Nr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Nr];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ag(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bu()||Lo()||Ki()}}const Qg=Wg;var fl="@firebase/auth",pl="0.20.10";/**
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
 */class Yg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jg(t){Ln(new un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{G(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wu(t)},u=new bm(a,l,c);return Zp(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ln(new un("auth-internal",e=>{const n=Ms(e.getProvider("auth").getImmediate());return(s=>new Yg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(fl,pl,Xg(t)),Ht(fl,pl,"esm2017")}/**
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
 */const Zg=5*60,ev=eu("authIdTokenMaxAge")||Zg;let ml=null;const tv=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ev)return;const i=n==null?void 0:n.token;ml!==i&&(ml=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nv(t=iu()){const e=Co(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jp(t,{popupRedirectResolver:Qg,persistence:[ig,zm,Nu]}),s=eu("authTokenSyncURL");if(s){const r=tv(s);$m(n,r,()=>r(n.currentUser)),Bm(n,o=>r(o))}const i=Zc("auth");return i&&wm(n,`http://${i}`),n}Jg("Browser");var sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Fo=Fo||{},te=sv||self;function Ci(){}function Wi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iv(t){return Object.prototype.hasOwnProperty.call(t,Rr)&&t[Rr]||(t[Rr]=++rv)}var Rr="closure_uid_"+(1e9*Math.random()>>>0),rv=0;function ov(t,e,n){return t.call.apply(t.bind,arguments)}function av(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=ov:Qe=av,Qe.apply(null,arguments)}function si(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Xt(){this.s=this.s,this.o=this.o}var lv=0;Xt.prototype.s=!1;Xt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lv!=0)&&iv(this)};Xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Wi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var cv=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",Ci,e),te.removeEventListener("test",Ci,e)}catch{}return t}();function Di(t){return/^[\s\xa0]*$/.test(t)}var vl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Or(t,e){return t<e?-1:t>e?1:0}function Qi(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function gt(t){return Qi().indexOf(t)!=-1}function Bo(t){return Bo[" "](t),t}Bo[" "]=Ci;function uv(t){var e=fv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hv=gt("Opera"),Pn=gt("Trident")||gt("MSIE"),Fu=gt("Edge"),Zr=Fu||Pn,Vu=gt("Gecko")&&!(Qi().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),dv=Qi().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge");function Bu(){var t=te.document;return t?t.documentMode:void 0}var Ni;e:{var Lr="",Pr=function(){var t=Qi();if(Vu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fu)return/Edge\/([\d\.]+)/.exec(t);if(Pn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dv)return/WebKit\/(\S+)/.exec(t);if(hv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pr&&(Lr=Pr?Pr[1]:""),Pn){var Mr=Bu();if(Mr!=null&&Mr>parseFloat(Lr)){Ni=String(Mr);break e}}Ni=Lr}var fv={};function pv(){return uv(function(){let t=0;const e=vl(String(Ni)).split("."),n=vl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Or(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Or(i[2].length==0,r[2].length==0)||Or(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var eo;if(te.document&&Pn){var yl=Bu();eo=yl||parseInt(Ni,10)||void 0}else eo=void 0;var mv=eo;function gs(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vu){e:{try{Bo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gs.X.h.call(this)}}Ke(gs,Ye);var gv={2:"touch",3:"pen",4:"mouse"};gs.prototype.h=function(){gs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vs="closure_listenable_"+(1e6*Math.random()|0),vv=0;function yv(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++vv,this.ba=this.ea=!1}function Yi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function $o(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function $u(t){const e={};for(const n in t)e[n]=t[n];return e}const _l="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ju(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<_l.length;r++)n=_l[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Xi(t){this.src=t,this.g={},this.h=0}Xi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=no(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new yv(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function to(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=xu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Yi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function no(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var jo="closure_lm_"+(1e6*Math.random()|0),Ur={};function qu(t,e,n,s,i){if(s&&s.once)return Ku(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)qu(t,e[r],n,s,i);return null}return n=Ko(n),t&&t[Vs]?t.N(e,n,Fs(s)?!!s.capture:!!s,i):Hu(t,e,n,!1,s,i)}function Hu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Fs(i)?!!i.capture:!!i,a=Ho(t);if(a||(t[jo]=a=new Xi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=_v(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cv||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Gu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _v(){function t(n){return e.call(t.src,t.listener,n)}const e=bv;return t}function Ku(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ku(t,e[r],n,s,i);return null}return n=Ko(n),t&&t[Vs]?t.O(e,n,Fs(s)?!!s.capture:!!s,i):Hu(t,e,n,!0,s,i)}function zu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)zu(t,e[r],n,s,i);else s=Fs(s)?!!s.capture:!!s,n=Ko(n),t&&t[Vs]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=no(r,n,s,i),-1<n&&(Yi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ho(t))&&(e=t.g[e.toString()],t=-1,e&&(t=no(e,n,s,i)),(n=-1<t?e[t]:null)&&qo(n))}function qo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Vs])to(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Gu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ho(e))?(to(n,t),n.h==0&&(n.src=null,e[jo]=null)):Yi(t)}}}function Gu(t){return t in Ur?Ur[t]:Ur[t]="on"+t}function bv(t,e){if(t.ba)t=!0;else{e=new gs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&qo(t),t=n.call(s,e)}return t}function Ho(t){return t=t[jo],t instanceof Xi?t:null}var xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(t){return typeof t=="function"?t:(t[xr]||(t[xr]=function(e){return t.handleEvent(e)}),t[xr])}function Fe(){Xt.call(this),this.i=new Xi(this),this.P=this,this.I=null}Ke(Fe,Xt);Fe.prototype[Vs]=!0;Fe.prototype.removeEventListener=function(t,e,n,s){zu(this,t,e,n,s)};function qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var i=e;e=new Ye(s,t),ju(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ii(o,s,!0,e)&&i}if(o=e.g=t,i=ii(o,s,!0,e)&&i,i=ii(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ii(o,s,!1,e)&&i}Fe.prototype.M=function(){if(Fe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Yi(n[s]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Fe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ii(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&to(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var zo=te.JSON.stringify;function wv(){var t=Yu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kv{constructor(){this.h=this.g=null}add(e,n){const s=Wu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Wu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ev,t=>t.reset());class Ev{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Iv(t){te.setTimeout(()=>{throw t},0)}function Qu(t,e){so||Tv(),io||(so(),io=!0),Yu.add(t,e)}var so;function Tv(){var t=te.Promise.resolve(void 0);so=function(){t.then(Av)}}var io=!1,Yu=new kv;function Av(){for(var t;t=wv();){try{t.h.call(t.g)}catch(n){Iv(n)}var e=Wu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}io=!1}function Ji(t,e){Fe.call(this),this.h=t||1,this.g=e||te,this.j=Qe(this.lb,this),this.l=Date.now()}Ke(Ji,Fe);$=Ji.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),qe(this,"tick"),this.ca&&(Go(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Go(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){Ji.X.M.call(this),Go(this),delete this.g};function Wo(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Xu(t){t.g=Wo(()=>{t.g=null,t.i&&(t.i=!1,Xu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Sv extends Xt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xu(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(t){Xt.call(this),this.h=t,this.g={}}Ke(vs,Xt);var bl=[];function Ju(t,e,n,s){Array.isArray(n)||(n&&(bl[0]=n.toString()),n=bl);for(var i=0;i<n.length;i++){var r=qu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Zu(t){$o(t.g,function(e,n){this.g.hasOwnProperty(n)&&qo(e)},t),t.g={}}vs.prototype.M=function(){vs.X.M.call(this),Zu(this)};vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zi(){this.g=!0}Zi.prototype.Aa=function(){this.g=!1};function Cv(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Dv(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function An(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Rv(t,n)+(s?" "+s:"")})}function Nv(t,e){t.info(function(){return"TIMEOUT: "+e})}Zi.prototype.info=function(){};function Rv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zo(n)}catch{return e}}var yn={},wl=null;function er(){return wl=wl||new Fe}yn.Pa="serverreachability";function eh(t){Ye.call(this,yn.Pa,t)}Ke(eh,Ye);function ys(t){const e=er();qe(e,new eh(e))}yn.STAT_EVENT="statevent";function th(t,e){Ye.call(this,yn.STAT_EVENT,t),this.stat=e}Ke(th,Ye);function et(t){const e=er();qe(e,new th(e,t))}yn.Qa="timingevent";function nh(t,e){Ye.call(this,yn.Qa,t),this.size=e}Ke(nh,Ye);function Bs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var tr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},sh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Qo(){}Qo.prototype.h=null;function kl(t){return t.h||(t.h=t.i())}function ih(){}var $s={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Yo(){Ye.call(this,"d")}Ke(Yo,Ye);function Xo(){Ye.call(this,"c")}Ke(Xo,Ye);var ro;function nr(){}Ke(nr,Qo);nr.prototype.g=function(){return new XMLHttpRequest};nr.prototype.i=function(){return{}};ro=new nr;function js(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new vs(this),this.O=Ov,t=Zr?125:void 0,this.T=new Ji(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rh}function rh(){this.i=null,this.g="",this.h=!1}var Ov=45e3,oo={},Ri={};$=js.prototype;$.setTimeout=function(t){this.O=t};function ao(t,e,n){t.K=1,t.v=ir(Nt(e)),t.s=n,t.P=!0,oh(t,null)}function oh(t,e){t.F=Date.now(),qs(t),t.A=Nt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ph(n.i,"t",s),t.C=0,n=t.l.H,t.h=new rh,t.g=Mh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Sv(Qe(t.La,t,t.g),t.N)),Ju(t.S,t.g,"readystatechange",t.ib),e=t.H?$u(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ys(),Cv(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&Tt(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const u=Tt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Zr||this.g&&(this.h.h||this.g.fa()||Al(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ys(3):ys(2)),sr(this);var n=this.g.aa();this.Y=n;t:if(ah(this)){var s=Al(this.g);t="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),os(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Dv(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Di(a)){var c=a;break t}}c=null}if(n=c)An(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lo(this,n);else{this.i=!1,this.o=3,et(12),nn(this),os(this);break e}}this.P?(lh(this,u,o),Zr&&this.i&&u==3&&(Ju(this.S,this.T,"tick",this.hb),this.T.start())):(An(this.j,this.m,o,null),lo(this,o)),u==4&&nn(this),this.i&&!this.I&&(u==4?Rh(this.l,this):(this.i=!1,qs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),nn(this),os(this)}}}catch{}finally{}};function ah(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function lh(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Lv(t,n),i==Ri){e==4&&(t.o=4,et(14),s=!1),An(t.j,t.m,null,"[Incomplete Response]");break}else if(i==oo){t.o=4,et(15),An(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else An(t.j,t.m,i,null),lo(t,i);ah(t)&&i!=Ri&&i!=oo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ia(e),e.K=!0,et(11))):(An(t.j,t.m,n,"[Invalid Chunked Response]"),nn(t),os(t))}$.hb=function(){if(this.g){var t=Tt(this.g),e=this.g.fa();this.C<e.length&&(sr(this),lh(this,t,e),this.i&&t!=4&&qs(this))}};function Lv(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ri:(n=Number(e.substring(n,s)),isNaN(n)?oo:(s+=1,s+n>e.length?Ri:(e=e.substr(s,n),t.C=s+n,e)))}$.cancel=function(){this.I=!0,nn(this)};function qs(t){t.V=Date.now()+t.O,ch(t,t.O)}function ch(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bs(Qe(t.gb,t),e)}function sr(t){t.B&&(te.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Nv(this.j,this.A),this.K!=2&&(ys(),et(17)),nn(this),this.o=2,os(this)):ch(this,this.V-t)};function os(t){t.l.G==0||t.I||Rh(t.l,t)}function nn(t){sr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Go(t.T),Zu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||co(n.h,t))){if(!t.J&&co(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Pi(n),ar(n);else break e;sa(n),et(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Bs(Qe(n.cb,n),6e3));if(1>=vh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else sn(n,11)}else if((t.J||n.g==t)&&Pi(n),!Di(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Jo(r,r.h),r.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Te(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ph(s,s.H?s.ka:null,s.V),o.J){yh(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(sr(a),qs(a)),s.g=o}else Dh(s);0<n.i.length&&lr(n)}else c[0]!="stop"&&c[0]!="close"||sn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?sn(n,7):na(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ys(4)}catch{}}function Pv(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Mv(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function uh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Mv(t),s=Pv(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ln(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ln){this.h=e!==void 0?e:t.h,Oi(this,t.j),this.s=t.s,this.g=t.g,Li(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),El(this,n),this.o=t.o}else t&&(n=String(t).match(hh))?(this.h=!!e,Oi(this,n[1]||"",!0),this.s=es(n[2]||""),this.g=es(n[3]||"",!0),Li(this,n[4]),this.l=es(n[5]||"",!0),El(this,n[6]||"",!0),this.o=es(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ts(e,Il,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ts(e,Il,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ts(n,n.charAt(0)=="/"?Vv:Fv,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ts(n,$v)),t.join("")};function Nt(t){return new ln(t)}function Oi(t,e,n){t.j=n?es(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Li(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function El(t,e,n){e instanceof _s?(t.i=e,jv(t.i,t.h)):(n||(e=ts(e,Bv)),t.i=new _s(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function ir(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function es(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ts(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Il=/[#\/\?@]/g,Fv=/[#\?:]/g,Vv=/[#\?]/g,Bv=/[#\?@]/g,$v=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jt(t){t.g||(t.g=new Map,t.h=0,t.i&&Uv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=_s.prototype;$.add=function(t,e){Jt(this),this.i=null,t=Hn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dh(t,e){Jt(t),e=Hn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fh(t,e){return Jt(t),e=Hn(t,e),t.g.has(e)}$.forEach=function(t,e){Jt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};$.oa=function(){Jt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};$.W=function(t){Jt(this);let e=[];if(typeof t=="string")fh(this,t)&&(e=e.concat(this.g.get(Hn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Jt(this),this.i=null,t=Hn(this,t),fh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ph(t,e,n){dh(t,e),0<n.length&&(t.i=null,t.g.set(Hn(t,e),Vo(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Hn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jv(t,e){e&&!t.j&&(Jt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(dh(this,s),ph(this,i,n))},t)),t.j=e}var qv=class{constructor(t,e){this.h=t,this.g=e}};function mh(t){this.l=t||Hv,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ga&&te.g.Ga()&&te.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hv=10;function gh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vh(t){return t.h?1:t.g?t.g.size:0}function co(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jo(t,e){t.g?t.g.add(e):t.h=e}function yh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mh.prototype.cancel=function(){if(this.i=_h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _h(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vo(t.i)}function Zo(){}Zo.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};Zo.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function Kv(){this.g=new Zo}function zv(t,e,n){const s=n||"";try{uh(t,function(i,r){let o=i;Fs(i)&&(o=zo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Gv(t,e){const n=new Zi;if(te.Image){const s=new Image;s.onload=si(ri,n,s,"TestLoadImage: loaded",!0,e),s.onerror=si(ri,n,s,"TestLoadImage: error",!1,e),s.onabort=si(ri,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=si(ri,n,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ri(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Hs(t){this.l=t.ac||null,this.j=t.jb||!1}Ke(Hs,Qo);Hs.prototype.g=function(){return new rr(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function rr(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ea,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(rr,Fe);var ea=0;$=rr.prototype;$.open=function(t,e){if(this.readyState!=ea)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=ea};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bh(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function bh(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ks(this):bs(this),this.readyState==3&&bh(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,Ks(this))};$.Ua=function(t){this.g&&(this.response=t,Ks(this))};$.ga=function(){this.g&&Ks(this)};function Ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Wv=te.JSON.parse;function Ne(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wh,this.K=this.L=!1}Ke(Ne,Fe);var wh="",Qv=/^https?$/i,Yv=["POST","PUT"];$=Ne.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ro.g(),this.C=this.u?kl(this.u):kl(ro),this.g.onreadystatechange=Qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Tl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=xu(Yv,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ih(this),0<this.B&&((this.K=Xv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.qa,this)):this.A=Wo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Tl(this,r)}};function Xv(t){return Pn&&pv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof Fo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Tl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kh(t),or(t)}function kh(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),or(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),or(this,!0)),Ne.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?Eh(this):this.fb())};$.fb=function(){Eh(this)};function Eh(t){if(t.h&&typeof Fo<"u"&&(!t.C[1]||Tt(t)!=4||t.aa()!=2)){if(t.v&&Tt(t)==4)Wo(t.Ha,0,t);else if(qe(t,"readystatechange"),Tt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(hh)[1]||null;if(!i&&te.self&&te.self.location){var r=te.self.location.protocol;i=r.substr(0,r.length-1)}s=!Qv.test(i?i.toLowerCase():"")}n=s}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<Tt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",kh(t)}}finally{or(t)}}}}function or(t,e){if(t.g){Ih(t);const n=t.g,s=t.C[0]?Ci:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ih(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function Tt(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Wv(e)}};function Al(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Th(t){let e="";return $o(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ta(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Th(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ah(t){this.Ca=0,this.i=[],this.j=new Zi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Yn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Yn("baseRetryDelayMs",5e3,t),this.bb=Yn("retryDelaySeedMs",1e4,t),this.$a=Yn("forwardChannelMaxRetries",2,t),this.ta=Yn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mh(t&&t.concurrentRequestLimit),this.Fa=new Kv,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=Ah.prototype;$.ma=8;$.G=1;function na(t){if(Sh(t),t.G==3){var e=t.U++,n=Nt(t.F);Te(n,"SID",t.I),Te(n,"RID",e),Te(n,"TYPE","terminate"),zs(t,n),e=new js(t,t.j,e,void 0),e.K=2,e.v=ir(Nt(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mh(e.l,null),e.g.da(e.v)),e.F=Date.now(),qs(e)}Lh(t)}function ar(t){t.g&&(ia(t),t.g.cancel(),t.g=null)}function Sh(t){ar(t),t.u&&(te.clearTimeout(t.u),t.u=null),Pi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function lr(t){gh(t.h)||t.m||(t.m=!0,Qu(t.Ja,t),t.C=0)}function Jv(t,e){return vh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Bs(Qe(t.Ja,t,e),Oh(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new js(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=$u(r),ju(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ch(this,i,e),n=Nt(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),zs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Th(r)))+"&"+e:this.o&&ta(n,this.o,r)),Jo(this.h,i),this.Ya&&Te(n,"TYPE","init"),this.O?(Te(n,"$req",e),Te(n,"SID","null"),i.Z=!0,ao(i,n,null)):ao(i,n,e),this.G=2}}else this.G==3&&(t?Sl(this,t):this.i.length==0||gh(this.h)||Sl(this))};function Sl(t,e){var n;e?n=e.m:n=t.U++;const s=Nt(t.F);Te(s,"SID",t.I),Te(s,"RID",n),Te(s,"AID",t.T),zs(t,s),t.o&&t.s&&ta(s,t.o,t.s),n=new js(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ch(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Jo(t.h,n),ao(n,s,e)}function zs(t,e){t.ia&&$o(t.ia,function(n,s){Te(e,s,n)}),t.l&&uh({},function(n,s){Te(e,s,n)})}function Ch(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Qe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{zv(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Dh(t){t.g||t.u||(t.Z=1,Qu(t.Ia,t),t.A=0)}function sa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Bs(Qe(t.Ia,t),Oh(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,Nh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Bs(Qe(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,et(10),ar(this),Nh(this))};function ia(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function Nh(t){t.g=new js(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Nt(t.sa);Te(e,"RID","rpc"),Te(e,"SID",t.I),Te(e,"CI",t.L?"0":"1"),Te(e,"AID",t.T),Te(e,"TYPE","xmlhttp"),zs(t,e),t.o&&t.s&&ta(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ir(Nt(e)),n.s=null,n.P=!0,oh(n,t)}$.cb=function(){this.v!=null&&(this.v=null,ar(this),sa(this),et(19))};function Pi(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Rh(t,e){var n=null;if(t.g==e){Pi(t),ia(t),t.g=null;var s=2}else if(co(t.h,e))n=e.D,yh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=er(),qe(s,new nh(s,n)),lr(t)}else Dh(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Jv(t,e)||s==2&&sa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:sn(t,5);break;case 4:sn(t,10);break;case 3:sn(t,6);break;default:sn(t,2)}}}function Oh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function sn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Qe(t.kb,t);n||(n=new ln("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Oi(n,"https"),ir(n)),Gv(n.toString(),s)}else et(2);t.G=0,t.l&&t.l.va(e),Lh(t),Sh(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Lh(t){if(t.G=0,t.la=[],t.l){const e=_h(t.h);(e.length!=0||t.i.length!=0)&&(gl(t.la,e),gl(t.la,t.i),t.h.i.length=0,Vo(t.i),t.i.length=0),t.l.ua()}}function Ph(t,e,n){var s=n instanceof ln?Nt(n):new ln(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Li(s,s.m);else{var i=te.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ln(null,void 0);s&&Oi(r,s),e&&(r.g=e),i&&Li(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Te(s,n,e),Te(s,"VER",t.ma),zs(t,s),s}function Mh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ne(new Hs({jb:!0})):new Ne(t.ra),e.Ka(t.H),e}function Uh(){}$=Uh.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Mi(){if(Pn&&!(10<=Number(mv)))throw Error("Environmental error: no available transport.")}Mi.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Fe.call(this),this.g=new Ah(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Di(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Di(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Kn(this)}Ke(ut,Fe);ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;et(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ph(t,null,t.V),lr(t)};ut.prototype.close=function(){na(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zo(t),t=n);e.i.push(new qv(e.ab++,t)),e.G==3&&lr(e)};ut.prototype.M=function(){this.g.l=null,delete this.j,na(this.g),delete this.g,ut.X.M.call(this)};function xh(t){Yo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(xh,Yo);function Fh(){Xo.call(this),this.status=1}Ke(Fh,Xo);function Kn(t){this.g=t}Ke(Kn,Uh);Kn.prototype.xa=function(){qe(this.g,"a")};Kn.prototype.wa=function(t){qe(this.g,new xh(t))};Kn.prototype.va=function(t){qe(this.g,new Fh)};Kn.prototype.ua=function(){qe(this.g,"b")};Mi.prototype.createWebChannel=Mi.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;tr.NO_ERROR=0;tr.TIMEOUT=8;tr.HTTP_ERROR=6;sh.COMPLETE="complete";ih.EventType=$s;$s.OPEN="a";$s.CLOSE="b";$s.ERROR="c";$s.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.Oa;Ne.prototype.getLastErrorCode=Ne.prototype.Ea;Ne.prototype.getStatus=Ne.prototype.aa;Ne.prototype.getResponseJson=Ne.prototype.Sa;Ne.prototype.getResponseText=Ne.prototype.fa;Ne.prototype.send=Ne.prototype.da;Ne.prototype.setWithCredentials=Ne.prototype.Ka;var Zv=function(){return new Mi},ey=function(){return er()},Fr=tr,ty=sh,ny=yn,Cl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},sy=Hs,oi=ih,iy=Ne;const Dl="@firebase/firestore";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let zn="9.12.1";/**
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
 */const pn=new Ao("@firebase/firestore");function Nl(){return pn.logLevel}function q(t,...e){if(pn.logLevel<=ge.DEBUG){const n=e.map(ra);pn.debug(`Firestore (${zn}): ${t}`,...n)}}function Rt(t,...e){if(pn.logLevel<=ge.ERROR){const n=e.map(ra);pn.error(`Firestore (${zn}): ${t}`,...n)}}function uo(t,...e){if(pn.logLevel<=ge.WARN){const n=e.map(ra);pn.warn(`Firestore (${zn}): ${t}`,...n)}}function ra(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+t;throw Rt(e),new Error(e)}function be(t,e){t||ie()}function oe(t,e){return t}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ry{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class oy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ay{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Kt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new Vh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Ge(e)}}class ly{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(be(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class cy{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new ly(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hy{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.A=n.token,new uy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Bh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=dy(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ve(t,e){return t<e?-1:t>e?1:0}function Mn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Pe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Pe(0,0))}static max(){return new de(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ws{constructor(e,n,s){n===void 0?n=0:n>e.length&&ie(),s===void 0?s=e.length-n:s>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ws?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends ws{construct(e,n,s){return new De(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new X(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const fy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends ws{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return fy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new X(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new X(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(De.fromString(e))}static fromName(e){return new W(De.fromString(e).popFirst(5))}static empty(){return new W(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new De(e.slice()))}}function py(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=de.fromTimestamp(s===1e9?new Pe(n+1,0):new Pe(n,s));return new zt(i,W.empty(),e)}function my(t){return new zt(t.readTime,t.key,-1)}class zt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new zt(de.min(),W.empty(),-1)}static max(){return new zt(de.max(),W.empty(),-1)}}function gy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const vy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gs(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==vy)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,s)=>{n(e)})}static reject(e){return new L((n,s)=>{s(e)})}static waitFor(e){return new L((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=L.resolve(!1);for(const s of e)n=n.next(i=>i?L.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new L((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new L((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class oa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Rl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _n(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */oa.at=-1;class Ue{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ai(this.root,e,this.comparator,!0)}}class ai{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:$e.RED,this.left=i!=null?i:$e.EMPTY,this.right=r!=null?r:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new $e(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(t,e,n,s,i){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ol(this.data.getIterator())}getIteratorFrom(e){return new Ol(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Ol{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new dt([])}unionWith(e){let n=new Me(We.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const _y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(t){if(be(!!t),typeof t=="string"){let e=0;const n=_y.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Un(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function jh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qh(t){const e=t.mapValue.fields.__previous_value__;return jh(e)?qh(e):e}function ks(t){const e=Gt(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
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
 */class by{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Es{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Es&&e.projectId===this.projectId&&e.database===this.database}}function cr(t){return t==null}function Ui(t){return t===0&&1/t==-1/0}function wy(t){return typeof t=="number"&&Number.isInteger(t)&&!Ui(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jh(t)?4:ky(t)?9007199254740991:10:ie()}function bt(t,e){if(t===e)return!0;const n=mn(t);if(n!==mn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ks(t).isEqual(ks(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Gt(s.timestampValue),o=Gt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Un(s.bytesValue).isEqual(Un(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Le(s.doubleValue),o=Le(i.doubleValue);return r===o?Ui(r)===Ui(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Mn(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Rl(r)!==Rl(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!bt(r[a],o[a])))return!1;return!0}(t,e);default:return ie()}}function Is(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function xn(t,e){if(t===e)return 0;const n=mn(t),s=mn(e);if(n!==s)return ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Le(i.integerValue||i.doubleValue),a=Le(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ll(t.timestampValue,e.timestampValue);case 4:return Ll(ks(t),ks(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Un(i),a=Un(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ve(o[l],a[l]);if(c!==0)return c}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ve(Le(i.latitude),Le(r.latitude));return o!==0?o:ve(Le(i.longitude),Le(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=xn(o[l],a[l]);if(c)return c}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===li.mapValue&&r===li.mapValue)return 0;if(i===li.mapValue)return 1;if(r===li.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ve(a[u],c[u]);if(h!==0)return h;const f=xn(o[a[u]],l[c[u]]);if(f!==0)return f}return ve(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ie()}}function Ll(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Gt(t),s=Gt(e),i=ve(n.seconds,s.seconds);return i!==0?i:ve(n.nanos,s.nanos)}function Rn(t){return ho(t)}function ho(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Gt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Un(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ho(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ho(s.fields[a])}`;return r+"}"}(t.mapValue):ie();var e,n}function fo(t){return!!t&&"integerValue"in t}function aa(t){return!!t&&"arrayValue"in t}function Pl(t){return!!t&&"nullValue"in t}function Ml(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mi(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _n(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ky(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=We.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];mi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){_n(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new it(as(this.value))}}function Hh(t){const e=[];return _n(t.fields,(n,s)=>{const i=new We([n]);if(mi(s)){const r=Hh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new dt(e)}/**
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
 */class je{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new je(e,0,de.min(),de.min(),it.empty(),0)}static newFoundDocument(e,n,s){return new je(e,1,n,de.min(),s,0)}static newNoDocument(e,n){return new je(e,2,n,de.min(),it.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,de.min(),it.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ey{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Ul(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ey(t,e,n,s,i,r,o)}function la(t){const e=oe(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Rn(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),cr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rn(s)).join(",")),e.ht=n}return e.ht}function Iy(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Rn(s.value)}`;var s}).join(", ")}]`),cr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Rn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Rn(n)).join(",")),`Target(${e})`}function ca(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Oy(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!bt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fl(t.startAt,e.startAt)&&Fl(t.endAt,e.endAt)}function po(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new Ty(e,n,s):n==="array-contains"?new Cy(e,s):n==="in"?new Dy(e,s):n==="not-in"?new Ny(e,s):n==="array-contains-any"?new Ry(e,s):new rt(e,n,s)}static lt(e,n,s){return n==="in"?new Ay(e,s):new Sy(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(xn(n,this.value)):n!==null&&mn(this.value)===mn(n)&&this.ft(xn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ty extends rt{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.ft(n)}}class Ay extends rt{constructor(e,n){super(e,"in",n),this.keys=Kh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sy extends rt{constructor(e,n){super(e,"not-in",n),this.keys=Kh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class Cy extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return aa(n)&&Is(n.arrayValue,this.value)}}class Dy extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Is(this.value.arrayValue,n)}}class Ny extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Is(this.value.arrayValue,n)}}class Ry extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!aa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Is(this.value.arrayValue,s))}}class xi{constructor(e,n){this.position=e,this.inclusive=n}}class ls{constructor(e,n="asc"){this.field=e,this.dir=n}}function Oy(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xl(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=xn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ur{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ly(t,e,n,s,i,r,o,a){return new ur(t,e,n,s,i,r,o,a)}function ua(t){return new ur(t)}function Vl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Py(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function My(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Uy(t){return t.collectionGroup!==null}function Ts(t){const e=oe(t);if(e._t===null){e._t=[];const n=My(e),s=Py(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new ls(n)),e._t.push(new ls(We.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ls(We.keyField(),r))}}}return e._t}function Ot(t){const e=oe(t);if(!e.wt)if(e.limitType==="F")e.wt=Ul(e.path,e.collectionGroup,Ts(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ts(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new ls(r.field,o))}const s=e.endAt?new xi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xi(e.startAt.position,e.startAt.inclusive):null;e.wt=Ul(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function mo(t,e,n){return new ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hr(t,e){return ca(Ot(t),Ot(e))&&t.limitType===e.limitType}function zh(t){return`${la(Ot(t))}|lt:${t.limitType}`}function go(t){return`Query(target=${Iy(Ot(t))}; limitType=${t.limitType})`}function ha(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=xl(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ts(n),s)||n.endAt&&!function(i,r,o){const a=xl(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ts(n),s))}(t,e)}function xy(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gh(t){return(e,n)=>{let s=!1;for(const i of Ts(t)){const r=Fy(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Fy(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?xn(a,l):ie()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ie()}}/**
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
 */function Wh(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(e)?"-0":e}}function Qh(t){return{integerValue:""+t}}function Vy(t,e){return wy(e)?Qh(e):Wh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class dr{constructor(){this._=void 0}}function By(t,e,n){return t instanceof Fi?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof As?Xh(t,e):t instanceof Ss?Jh(t,e):function(s,i){const r=Yh(s,i),o=Bl(r)+Bl(s.yt);return fo(r)&&fo(s.yt)?Qh(o):Wh(s.It,o)}(t,e)}function $y(t,e,n){return t instanceof As?Xh(t,e):t instanceof Ss?Jh(t,e):n}function Yh(t,e){return t instanceof Vi?fo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Fi extends dr{}class As extends dr{constructor(e){super(),this.elements=e}}function Xh(t,e){const n=Zh(e);for(const s of t.elements)n.some(i=>bt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ss extends dr{constructor(e){super(),this.elements=e}}function Jh(t,e){let n=Zh(e);for(const s of t.elements)n=n.filter(i=>!bt(i,s));return{arrayValue:{values:n}}}class Vi extends dr{constructor(e,n){super(),this.It=e,this.yt=n}}function Bl(t){return Le(t.integerValue||t.doubleValue)}function Zh(t){return aa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jy(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof As&&s instanceof As||n instanceof Ss&&s instanceof Ss?Mn(n.elements,s.elements,bt):n instanceof Vi&&s instanceof Vi?bt(n.yt,s.yt):n instanceof Fi&&s instanceof Fi}(t.transform,e.transform)}class qy{constructor(e,n){this.version=e,this.transformResults=n}}class _t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fr{}function ed(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nd(t.key,_t.none()):new Qs(t.key,t.data,_t.none());{const n=t.data,s=it.empty();let i=new Me(We.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Zt(t.key,s,new dt(i.toArray()),_t.none())}}function Hy(t,e,n){t instanceof Qs?function(s,i,r){const o=s.value.clone(),a=jl(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zt?function(s,i,r){if(!gi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=jl(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(td(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function cs(t,e,n,s){return t instanceof Qs?function(i,r,o,a){if(!gi(i.precondition,r))return o;const l=i.value.clone(),c=ql(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Zt?function(i,r,o,a){if(!gi(i.precondition,r))return o;const l=ql(i.fieldTransforms,a,r),c=r.data;return c.setAll(td(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return gi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Ky(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Yh(s.transform,i||null);r!=null&&(n===null&&(n=it.empty()),n.set(s.field,r))}return n||null}function $l(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Mn(n,s,(i,r)=>jy(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qs extends fr{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends fr{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function td(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function jl(t,e,n){const s=new Map;be(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,$y(o,a,n[i]))}return s}function ql(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,By(r,o,e))}return s}class nd extends fr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zy extends fr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gy{constructor(e){this.count=e}}/**
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
 */var Oe,pe;function Wy(t){switch(t){default:return ie();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function sd(t){if(t===void 0)return Rt("GRPC error has no .code"),P.UNKNOWN;switch(t){case Oe.OK:return P.OK;case Oe.CANCELLED:return P.CANCELLED;case Oe.UNKNOWN:return P.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return P.INTERNAL;case Oe.UNAVAILABLE:return P.UNAVAILABLE;case Oe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Oe.NOT_FOUND:return P.NOT_FOUND;case Oe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Oe.ABORTED:return P.ABORTED;case Oe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Oe.DATA_LOSS:return P.DATA_LOSS;default:return ie()}}(pe=Oe||(Oe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Gn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return $h(this.inner)}size(){return this.innerSize}}/**
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
 */const Qy=new Ue(W.comparator);function Lt(){return Qy}const id=new Ue(W.comparator);function ns(...t){let e=id;for(const n of t)e=e.insert(n.key,n);return e}function rd(t){let e=id;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function rn(){return us()}function od(){return us()}function us(){return new Gn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yy=new Ue(W.comparator),Xy=new Me(W.comparator);function fe(...t){let e=Xy;for(const n of t)e=e.add(n);return e}const Jy=new Me(ve);function ad(){return Jy}/**
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
 */class pr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new pr(de.min(),i,ad(),Lt(),fe())}}class Ys{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ys(s,n,fe(),fe(),fe())}}/**
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
 */class vi{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class ld{constructor(e,n){this.targetId=e,this.At=n}}class cd{constructor(e,n,s=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Hl{constructor(){this.Rt=0,this.bt=zl(),this.Pt=Ze.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=fe(),n=fe(),s=fe();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ie()}}),new Ys(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=zl()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Zy{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Lt(),this.qt=Kl(),this.Kt=new Me(ve)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(po(r))if(s===0){const o=new W(r.path);this.jt(n,o,je.newNoDocument(o,de.min()))}else be(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&po(a.target)){const l=new W(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,je.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=fe();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new pr(e,n,this.Kt,this.Ut,s);return this.Ut=Lt(),this.qt=Kl(),this.Kt=new Me(ve),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Hl,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Me(ve),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Hl),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Kl(){return new Ue(W.comparator)}function zl(){return new Ue(W.comparator)}/**
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
 */const e_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),t_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class n_{constructor(e,n){this.databaseId=e,this.gt=n}}function Bi(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ud(t,e){return t.gt?e.toBase64():e.toUint8Array()}function s_(t,e){return Bi(t,e.toTimestamp())}function St(t){return be(!!t),de.fromTimestamp(function(e){const n=Gt(e);return new Pe(n.seconds,n.nanos)}(t))}function da(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function hd(t){const e=De.fromString(t);return be(pd(e)),e}function vo(t,e){return da(t.databaseId,e.path)}function Vr(t,e){const n=hd(e);if(n.get(1)!==t.databaseId.projectId)throw new X(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(dd(n))}function yo(t,e){return da(t.databaseId,e)}function i_(t){const e=hd(t);return e.length===4?De.emptyPath():dd(e)}function _o(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dd(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gl(t,e,n){return{name:vo(t,e),fields:n.value.mapValue.fields}}function r_(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(be(c===void 0||typeof c=="string"),Ze.fromBase64String(c||"")):(be(c===void 0||c instanceof Uint8Array),Ze.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?P.UNKNOWN:sd(l.code);return new X(c,l.message||"")}(o);n=new cd(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Vr(t,s.document.name),r=St(s.document.updateTime),o=new it({mapValue:{fields:s.document.fields}}),a=je.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new vi(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Vr(t,s.document),r=s.readTime?St(s.readTime):de.min(),o=je.newNoDocument(i,r),a=s.removedTargetIds||[];n=new vi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Vr(t,s.document),r=s.removedTargetIds||[];n=new vi([],r,i,null)}else{if(!("filter"in e))return ie();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Gy(i),o=s.targetId;n=new ld(o,r)}}return n}function o_(t,e){let n;if(e instanceof Qs)n={update:Gl(t,e.key,e.value)};else if(e instanceof nd)n={delete:vo(t,e.key)};else if(e instanceof Zt)n={update:Gl(t,e.key,e.data),updateMask:g_(e.fieldMask)};else{if(!(e instanceof zy))return ie();n={verify:vo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Fi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof As)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ss)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vi)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:s_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie()}(t,e.precondition)),n}function a_(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?St(s.updateTime):St(i);return r.isEqual(de.min())&&(r=St(i)),new qy(r,s.transformResults||[])}(n,e))):[]}function l_(t,e){return{documents:[yo(t,e.path)]}}function c_(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=yo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(Ml(h.value))return{unaryFilter:{field:En(h.field),op:"IS_NAN"}};if(Pl(h.value))return{unaryFilter:{field:En(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ml(h.value))return{unaryFilter:{field:En(h.field),op:"IS_NOT_NAN"}};if(Pl(h.value))return{unaryFilter:{field:En(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(h.field),op:f_(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:En(u.field),direction:d_(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||cr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function u_(t){let e=i_(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){be(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=fd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ls(Sn(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,cr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new xi(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new xi(f,h)}(n.endAt)),Ly(e,i,o,r,a,"F",l,c)}function h_(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function fd(t){return t?t.unaryFilter!==void 0?[m_(t)]:t.fieldFilter!==void 0?[p_(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>fd(e)).reduce((e,n)=>e.concat(n)):ie():[]}function d_(t){return e_[t]}function f_(t){return t_[t]}function En(t){return{fieldPath:t.canonicalString()}}function Sn(t){return We.fromServerFormat(t.fieldPath)}function p_(t){return rt.create(Sn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function m_(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Sn(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Sn(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Sn(t.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Sn(t.unaryFilter.field);return rt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}function g_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class v_{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Hy(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=cs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=cs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=od();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=ed(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,(n,s)=>$l(n,s))&&Mn(this.baseMutations,e.baseMutations,(n,s)=>$l(n,s))}}class fa{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){be(e.mutations.length===s.length);let i=Yy;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new fa(e,n,s,i)}}/**
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
 */class y_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class cn{constructor(e,n,s,i,r=de.min(),o=de.min(),a=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class __{constructor(e){this.re=e}}function b_(t){const e=u_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mo(e,e.limit,"L"):e}/**
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
 */class w_{constructor(){this.Ye=new k_}addToCollectionParentIndex(e,n){return this.Ye.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(zt.min())}updateCollectionGroup(e,n,s){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class k_{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Me(De.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Me(De.comparator)).toArray()}}/**
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
 */class Fn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Fn(0)}static vn(){return new Fn(-1)}}/**
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
 */class E_{constructor(){this.changes=new Gn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?L.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class I_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class T_{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&cs(s.mutation,i,dt.empty(),Pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,fe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=fe()){const i=rn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ns();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=rn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,fe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Lt();const o=us(),a=us();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Zt)?r=r.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),cs(u.mutation,c,u.mutation.getFieldMask(),Pe.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new I_(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=us();let i=new Ue((o,a)=>o-a),r=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||dt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=od();u.forEach(f=>{if(!r.has(f)){const p=ed(n.get(f),s.get(f));p!==null&&h.set(f,p),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return L.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Uy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):L.resolve(rn());let a=-1,l=r;return o.next(c=>L.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?L.resolve():this.getBaseDocument(e,u,h).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,fe())).next(u=>({batchId:a,changes:rd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let i=ns();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ns();return this.indexManager.getCollectionParents(e,i).next(o=>L.forEach(o,a=>{const l=function(c,u){return new ur(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,je.newInvalidDocument(c)))});let o=ns();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&cs(c.mutation,l,dt.empty(),Pe.now()),ha(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):L.resolve(je.newInvalidDocument(n))}}/**
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
 */class A_{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:St(s.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:b_(s.bundledQuery),readTime:St(s.readTime)}}(n)),L.resolve()}}/**
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
 */class S_{constructor(){this.overlays=new Ue(W.comparator),this.es=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const s=rn();return L.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),L.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),L.resolve()}getOverlaysForCollection(e,n,s){const i=rn(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ue((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=rn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=rn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return L.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new y_(n,s));let r=this.es.get(n);r===void 0&&(r=fe(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class pa{constructor(){this.ns=new Me(xe.ss),this.rs=new Me(xe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new xe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new xe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new W(new De([])),s=new xe(n,e),i=new xe(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new W(new De([])),s=new xe(n,e),i=new xe(n,e+1);let r=fe();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new xe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return W.comparator(e.key,n.key)||ve(e._s,n._s)}static os(e,n){return ve(e._s,n._s)||W.comparator(e.key,n.key)}}/**
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
 */class C_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Me(xe.ss)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new v_(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new xe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Me(ve);return n.forEach(i=>{const r=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),L.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new xe(new W(r),0);let a=new Me(ve);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),L.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){be(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return L.forEach(n.mutations,i=>{const r=new xe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new xe(n,0),i=this.gs.firstAfterOrEqual(s);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class D_{constructor(e){this.Es=e,this.docs=new Ue(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return L.resolve(s?s.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let s=Lt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():je.newInvalidDocument(i))}),L.resolve(s)}getAllFromCollection(e,n,s){let i=Lt();const r=new W(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||gy(my(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,s,i){ie()}As(e,n){return L.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new N_(this)}getSize(e){return L.resolve(this.size)}}class N_ extends E_{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),L.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class R_{constructor(e){this.persistence=e,this.Rs=new Gn(n=>la(n),ca),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.bs=0,this.Ps=new pa,this.targetCount=0,this.vs=Fn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),L.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Fn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Dn(n),L.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(r).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return L.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),L.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),L.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return L.resolve(s)}containsKey(e,n){return L.resolve(this.Ps.containsKey(n))}}/**
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
 */class O_{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new oa(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new R_(this),this.indexManager=new w_,this.remoteDocumentCache=function(s){return new D_(s)}(s=>this.referenceDelegate.xs(s)),this.It=new __(n),this.Ns=new A_(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new S_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new C_(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){q("MemoryPersistence","Starting transaction:",e);const i=new L_(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return L.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class L_ extends yy{constructor(e){super(),this.currentSequenceNumber=e}}class ma{constructor(e){this.persistence=e,this.Fs=new pa,this.$s=null}static Bs(e){return new ma(e)}get Ls(){if(this.$s)return this.$s;throw ie()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),L.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),L.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Ls,s=>{const i=W.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,de.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return L.or([()=>L.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class ga{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=fe(),i=fe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ga(e,n.fromCache,s,i)}}/**
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
 */class P_{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Vl(n))return L.resolve(null);let s=Ot(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mo(n,null,"F"),s=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=fe(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,mo(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return Vl(n)||i.isEqual(de.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Nl()<=ge.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),go(n)),this.Bi(e,o,n,py(i,-1)))})}Fi(e,n){let s=new Me(Gh(e));return n.forEach((i,r)=>{ha(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Nl()<=ge.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",go(n)),this.Ni.getDocumentsMatchingQuery(e,n,zt.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class M_{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Ue(ve),this.qi=new Gn(r=>la(r),ca),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T_(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function U_(t,e,n,s){return new M_(t,e,n,s)}async function md(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=fe();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function x_(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=L.resolve();return h.forEach(p=>{f=f.next(()=>c.getEntry(a,p)).next(g=>{const v=l.docVersions.get(p);be(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=fe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function gd(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function F_(t,e){const n=oe(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let p=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ze.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(g,v,_){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,p,u)&&a.push(n.Cs.updateTargetData(r,p))});let l=Lt(),c=fe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(V_(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(de.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function V_(t,e,n){let s=fe(),i=fe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Lt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function B_(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function $_(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,L.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new cn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function bo(t,e,n){const s=oe(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ws(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Wl(t,e,n){const s=oe(t);let i=de.min(),r=fe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=oe(a),h=u.qi.get(c);return h!==void 0?L.resolve(u.Ui.get(h)):u.Cs.getTargetData(l,c)}(s,o,Ot(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:de.min(),n?r:fe())).next(a=>(j_(s,xy(e),a),{documents:a,Hi:r})))}function j_(t,e,n){let s=t.Ki.get(e)||de.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Ql{constructor(){this.activeTargetIds=ad()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q_{constructor(){this.Lr=new Ql,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ql,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class H_{qr(e){}shutdown(){}}/**
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
 */class Yl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const K_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class z_{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class G_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);q("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(q("RestConnection","Received: ",l),l),l=>{throw uo("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=K_[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new iy;a.setWithCredentials(!0),a.listenOnce(ty.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fr.NO_ERROR:const c=a.getResponseJson();q("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Fr.TIMEOUT:q("Connection",'RPC "'+e+'" timed out'),o(new X(P.DEADLINE_EXCEEDED,"Request time out"));break;case Fr.HTTP_ERROR:const u=a.getStatus();if(q("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(g)>=0?g:P.UNKNOWN}(h.status);o(new X(f,h.message))}else o(new X(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new X(P.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{q("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Zv(),o=ey(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new sy({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");q("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const f=new z_({Hr:g=>{h?q("Connection","Not sending because WebChannel is closed:",g):(u||(q("Connection","Opening WebChannel transport."),c.open(),u=!0),q("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),p=(g,v,_)=>{g.listen(v,w=>{try{_(w)}catch(b){setTimeout(()=>{throw b},0)}})};return p(c,oi.EventType.OPEN,()=>{h||q("Connection","WebChannel transport opened.")}),p(c,oi.EventType.CLOSE,()=>{h||(h=!0,q("Connection","WebChannel transport closed"),f.io())}),p(c,oi.EventType.ERROR,g=>{h||(h=!0,uo("Connection","WebChannel transport errored:",g),f.io(new X(P.UNAVAILABLE,"The operation could not be completed")))}),p(c,oi.EventType.MESSAGE,g=>{var v;if(!h){const _=g.data[0];be(!!_);const w=_,b=w.error||((v=w[0])===null||v===void 0?void 0:v.error);if(b){q("Connection","WebChannel received error:",b);const k=b.status;let C=function(T){const D=Oe[T];if(D!==void 0)return sd(D)}(k),I=b.message;C===void 0&&(C=P.INTERNAL,I="Unknown error status: "+k+" with message "+b.message),h=!0,f.io(new X(C,I)),c.close()}else q("Connection","WebChannel received:",_),f.ro(_)}}),p(o,ny.STAT_EVENT,g=>{g.stat===Cl.PROXY?q("Connection","Detected buffering proxy"):g.stat===Cl.NOPROXY&&q("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Br(){return typeof document<"u"?document:null}/**
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
 */function mr(t){return new n_(t,!0)}class vd{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class yd{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new vd(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(Rt(n.toString()),Rt("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new X(P.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W_ extends yd{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=r_(this.It,e),s=function(i){if(!("targetChange"in i))return de.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?de.min():r.readTime?St(r.readTime):de.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=_o(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=po(a)?{documents:l_(i,a)}:{query:c_(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ud(i,r.resumeToken):r.snapshotVersion.compareTo(de.min())>0&&(o.readTime=Bi(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=h_(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=_o(this.It),n.removeTarget=e,this.Lo(n)}}class Q_ extends yd{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=a_(e.writeResults,e.commitTime),s=St(e.commitTime);return this.listener.tu(s,n)}return be(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=_o(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>o_(this.It,s))};this.Lo(n)}}/**
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
 */class Y_ extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new X(P.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(P.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new X(P.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class X_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Rt(n),this.uu=!1):q("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class J_{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{bn(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=oe(a);l.wu.add(4),await Xs(l),l.yu.set("Unknown"),l.wu.delete(4),await gr(l)}(this))})}),this.yu=new X_(s,i)}}async function gr(t){if(bn(t))for(const e of t.mu)await e(!0)}async function Xs(t){for(const e of t.mu)await e(!1)}function _d(t,e){const n=oe(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),_a(n)?ya(n):Wn(n).Oo()&&va(n,e))}function bd(t,e){const n=oe(t),s=Wn(n);n._u.delete(e),s.Oo()&&wd(n,e),n._u.size===0&&(s.Oo()?s.$o():bn(n)&&n.yu.set("Unknown"))}function va(t,e){t.pu.Mt(e.targetId),Wn(t).Ho(e)}function wd(t,e){t.pu.Mt(e),Wn(t).Jo(e)}function ya(t){t.pu=new Zy({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Wn(t).start(),t.yu.cu()}function _a(t){return bn(t)&&!Wn(t).ko()&&t._u.size>0}function bn(t){return oe(t).wu.size===0}function kd(t){t.pu=void 0}async function Z_(t){t._u.forEach((e,n)=>{va(t,e)})}async function eb(t,e){kd(t),_a(t)?(t.yu.lu(e),ya(t)):t.yu.set("Unknown")}async function tb(t,e,n){if(t.yu.set("Online"),e instanceof cd&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $i(t,s)}else if(e instanceof vi?t.pu.Gt(e):e instanceof ld?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(de.min()))try{const s=await gd(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Ze.EMPTY_BYTE_STRING,l.snapshotVersion)),wd(i,a);const c=new cn(l.target,a,1,l.sequenceNumber);va(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){q("RemoteStore","Failed to raise snapshot:",s),await $i(t,s)}}async function $i(t,e,n){if(!Ws(e))throw e;t.wu.add(1),await Xs(t),t.yu.set("Offline"),n||(n=()=>gd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await gr(t)})}function Ed(t,e){return e().catch(n=>$i(t,n,e))}async function vr(t){const e=oe(t),n=Wt(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;nb(e);)try{const i=await B_(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,sb(e,i)}catch(i){await $i(e,i)}Id(e)&&Td(e)}function nb(t){return bn(t)&&t.du.length<10}function sb(t,e){t.du.push(e);const n=Wt(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Id(t){return bn(t)&&!Wt(t).ko()&&t.du.length>0}function Td(t){Wt(t).start()}async function ib(t){Wt(t).nu()}async function rb(t){const e=Wt(t);for(const n of t.du)e.Zo(n.mutations)}async function ob(t,e,n){const s=t.du.shift(),i=fa.from(s,e,n);await Ed(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vr(t)}async function ab(t,e){e&&Wt(t).Xo&&await async function(n,s){if(i=s.code,Wy(i)&&i!==P.ABORTED){const r=n.du.shift();Wt(n).Fo(),await Ed(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await vr(n)}var i}(t,e),Id(t)&&Td(t)}async function Xl(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const s=bn(n);n.wu.add(3),await Xs(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await gr(n)}async function lb(t,e){const n=oe(t);e?(n.wu.delete(2),await gr(n)):e||(n.wu.add(2),await Xs(n),n.yu.set("Unknown"))}function Wn(t){return t.Iu||(t.Iu=function(e,n,s){const i=oe(e);return i.iu(),new W_(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Z_.bind(null,t),Zr:eb.bind(null,t),zo:tb.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),_a(t)?ya(t):t.yu.set("Unknown")):(await t.Iu.stop(),kd(t))})),t.Iu}function Wt(t){return t.Tu||(t.Tu=function(e,n,s){const i=oe(e);return i.iu(),new Q_(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:ib.bind(null,t),Zr:ab.bind(null,t),eu:rb.bind(null,t),tu:ob.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await vr(t)):(await t.Tu.stop(),t.du.length>0&&(q("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class ba{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ba(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(t,e){if(Rt("AsyncQueue",`${e}: ${t}`),Ws(t))return new X(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class On{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=ns(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new On(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof On)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new On;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Jl{constructor(){this.Eu=new Ue(W.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):ie():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vn{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vn(e,n,On.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class cb{constructor(){this.Ru=void 0,this.listeners=[]}}class ub{constructor(){this.queries=new Gn(e=>zh(e),hr),this.onlineState="Unknown",this.bu=new Set}}async function hb(t,e){const n=oe(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new cb),i)try{r.Ru=await n.onListen(s)}catch(o){const a=wa(o,`Initialization of query '${go(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&ka(n)}async function db(t,e){const n=oe(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function fb(t,e){const n=oe(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&ka(n)}function pb(t,e,n){const s=oe(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function ka(t){t.bu.forEach(e=>{e.next()})}class mb{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Vn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class Ad{constructor(e){this.key=e}}class Sd{constructor(e){this.key=e}}class gb{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=fe(),this.mutatedKeys=fe(),this.Gu=Gh(e),this.Qu=new On(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Jl,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),p=ha(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?g!==v&&(s.track({type:3,doc:p}),_=!0):this.Hu(f,p)||(s.track({type:2,doc:p}),_=!0,(l&&this.Gu(p,l)>0||c&&this.Gu(p,c)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),_=!0):f&&!p&&(s.track({type:1,doc:f}),_=!0,(l||c)&&(a=!0)),_&&(p?(o=o.add(p),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,u)=>function(h,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return p(h)-p(f)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Vn(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Jl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=fe(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Sd(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Ad(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=fe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Vn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class vb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class yb{constructor(e){this.key=e,this.nc=!1}}class _b{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Gn(a=>zh(a),hr),this.rc=new Map,this.oc=new Set,this.uc=new Ue(W.comparator),this.cc=new Map,this.ac=new pa,this.hc={},this.lc=new Map,this.fc=Fn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function bb(t,e){const n=Nb(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await $_(n.localStore,Ot(e));n.isPrimaryClient&&_d(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await wb(n,e,s,a==="current",o.resumeToken)}return i}async function wb(t,e,n,s,i){t._c=(h,f,p)=>async function(g,v,_,w){let b=v.view.Wu(_);b.$i&&(b=await Wl(g.localStore,v.query,!1).then(({documents:I})=>v.view.Wu(I,b)));const k=w&&w.targetChanges.get(v.targetId),C=v.view.applyChanges(b,g.isPrimaryClient,k);return ec(g,v.targetId,C.Xu),C.snapshot}(t,h,f,p);const r=await Wl(t.localStore,e,!0),o=new gb(e,r.Hi),a=o.Wu(r.documents),l=Ys.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);ec(t,n,c.Xu);const u=new vb(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function kb(t,e){const n=oe(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!hr(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await bo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),bd(n.remoteStore,s.targetId),wo(n,s.targetId)}).catch(Gs)):(wo(n,s.targetId),await bo(n.localStore,s.targetId,!0))}async function Eb(t,e,n){const s=Rb(t);try{const i=await function(r,o){const a=oe(r),l=Pe.now(),c=o.reduce((f,p)=>f.add(p.key),fe());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Lt(),g=fe();return a.Gi.getEntries(f,c).next(v=>{p=v,p.forEach((_,w)=>{w.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{u=v;const _=[];for(const w of o){const b=Ky(w,u.get(w.key).overlayedDocument);b!=null&&_.push(new Zt(w.key,b,Hh(b.value.mapValue),_t.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:rd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Ue(ve)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Js(s,i.changes),await vr(s.remoteStore)}catch(i){const r=wa(i,"Failed to persist write");n.reject(r)}}async function Cd(t,e){const n=oe(t);try{const s=await F_(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?be(o.nc):i.removedDocuments.size>0&&(be(o.nc),o.nc=!1))}),await Js(n,s,e)}catch(s){await Gs(s)}}function Zl(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=oe(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&ka(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ib(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Ue(W.comparator);o=o.insert(r,je.newNoDocument(r,de.min()));const a=fe().add(r),l=new pr(de.min(),new Map,new Me(ve),o,a);await Cd(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Ea(s)}else await bo(s.localStore,e,!1).then(()=>wo(s,e,n)).catch(Gs)}async function Tb(t,e){const n=oe(t),s=e.batch.batchId;try{const i=await x_(n.localStore,e);Nd(n,s,null),Dd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Js(n,i)}catch(i){await Gs(i)}}async function Ab(t,e,n){const s=oe(t);try{const i=await function(r,o){const a=oe(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(be(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Nd(s,e,n),Dd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Js(s,i)}catch(i){await Gs(i)}}function Dd(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Nd(t,e,n){const s=oe(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function wo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Rd(t,s)})}function Rd(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(bd(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ea(t))}function ec(t,e,n){for(const s of n)s instanceof Ad?(t.ac.addReference(s.key,e),Sb(t,s)):s instanceof Sd?(q("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Rd(t,s.key)):ie()}function Sb(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(q("SyncEngine","New document in limbo: "+n),t.oc.add(s),Ea(t))}function Ea(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new W(De.fromString(e)),s=t.fc.next();t.cc.set(s,new yb(n)),t.uc=t.uc.insert(n,s),_d(t.remoteStore,new cn(Ot(ua(n.path)),s,2,oa.at))}}async function Js(t,e,n){const s=oe(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ga.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=oe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(l,h=>L.forEach(h.Si,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>L.forEach(h.Di,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ws(u))throw u;q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Ui.get(h),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);c.Ui=c.Ui.insert(h,g)}}}(s.localStore,r))}async function Cb(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const s=await md(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new X(P.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Js(n,s.ji)}}function Db(t,e){const n=oe(t),s=n.cc.get(e);if(s&&s.nc)return fe().add(s.key);{let i=fe();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Nb(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Db.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ib.bind(null,e),e.sc.zo=fb.bind(null,e.eventManager),e.sc.wc=pb.bind(null,e.eventManager),e}function Rb(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Tb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ab.bind(null,e),e}class Ob{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=mr(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return U_(this.persistence,new P_,e.initialUser,this.It)}yc(e){return new O_(ma.Bs,this.It)}gc(e){return new q_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cb.bind(null,this.syncEngine),await lb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ub}createDatastore(e){const n=mr(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new G_(i));var i;return function(r,o,a,l){return new Y_(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Zl(this.syncEngine,a,0),o=Yl.C()?new Yl:new H_,new J_(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new _b(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);q("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Xs(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Pb(t,e,n){if(!n)throw new X(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Mb(t,e,n,s){if(e===!0&&s===!0)throw new X(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tc(t){if(!W.isDocumentKey(t))throw new X(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new X(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const nc=new Map;class sc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new X(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Mb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ta{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ry;switch(n.type){case"gapi":const s=n.client;return new cy(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new X(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nc.get(e);n&&(q("ComponentProvider","Removing Datastore"),nc.delete(e),n.terminate())}(this),Promise.resolve()}}function Ub(t,e,n,s={}){var i;const r=(t=gn(t,Ta))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&uo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ge.MOCK_USER;else{o=xf(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new X(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ge(l)}t._authCredentials=new oy(new Vh(o,a))}}/**
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
 */class at{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class Aa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Aa(this.firestore,e,this._query)}}class Cs extends Aa{constructor(e,n,s){super(e,n,ua(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new W(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function Qt(t,e,...n){if(t=He(t),arguments.length===1&&(e=Bh.R()),Pb("doc","path",e),t instanceof Ta){const s=De.fromString(e,...n);return tc(s),new at(t,null,new W(s))}{if(!(t instanceof at||t instanceof Cs))throw new X(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return tc(s),new at(t.firestore,t instanceof Cs?t.converter:null,new W(s))}}/**
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
 *//**
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
 */class xb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Rt("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Fb{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=Bh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=wa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vb(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await md(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Bb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $b(t);q("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Xl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Xl(e.remoteStore,r)),t.onlineComponents=e}async function $b(t){return t.offlineComponents||(q("FirestoreClient","Using default OfflineComponentProvider"),await Vb(t,new Ob)),t.offlineComponents}async function Od(t){return t.onlineComponents||(q("FirestoreClient","Using default OnlineComponentProvider"),await Bb(t,new Lb)),t.onlineComponents}function jb(t){return Od(t).then(e=>e.syncEngine)}async function qb(t){const e=await Od(t),n=e.eventManager;return n.onListen=bb.bind(null,e.syncEngine),n.onUnlisten=kb.bind(null,e.syncEngine),n}function Hb(t,e,n={}){const s=new Kt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new xb({next:h=>{r.enqueueAndForget(()=>db(i,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new X(P.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new X(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new mb(ua(o.path),c,{includeMetadataChanges:!0,ku:!0});return hb(i,u)}(await qb(t),t.asyncQueue,e,n,s)),s.promise}class Kb{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new vd(this,"async_queue_retry"),this.Wc=()=>{const n=Br();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Br();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Br();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Kt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Ws(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Rt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=ba.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&ie()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class yr extends Ta{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Kb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pd(this),this._firestoreClient.terminate()}}function zb(t,e){const n=typeof t=="object"?t:iu(),s=typeof t=="string"?t:e||"(default)",i=Co(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Pf("firestore");r&&Ub(i,...r)}return i}function Ld(t){return t._firestoreClient||Pd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pd(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new by(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Fb(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class Bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bn(Ze.fromBase64String(e))}catch(n){throw new X(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bn(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _r{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sa{constructor(e){this._methodName=e}}/**
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
 */class Ca{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const Gb=/^__.*__$/;class Wb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Zt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(e,this.data,n,this.fieldTransforms)}}class Md{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Zt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ud(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Da{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Da(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ji(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ud(this.sa)&&Gb.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Qb{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||mr(e)}da(e,n,s,i=!1){return new Da({sa:e,methodName:n,fa:s,path:We.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function xd(t){const e=t._freezeSettings(),n=mr(t._databaseId);return new Qb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yb(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Na("Data must be an object, but it was:",o,s);const a=Fd(s,o);let l,c;if(r.merge)l=new dt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=ko(e,h,n);if(!o.contains(f))throw new X(P.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Bd(u,f)||u.push(f)}l=new dt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Wb(new it(a),l,c)}class br extends Sa{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof br}}function Xb(t,e,n,s){const i=t.da(1,e,n);Na("Data must be an object, but it was:",i,s);const r=[],o=it.empty();_n(s,(l,c)=>{const u=Ra(e,l,n);c=He(c);const h=i.ca(u);if(c instanceof br)r.push(u);else{const f=wr(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new dt(r);return new Md(o,a,i.fieldTransforms)}function Jb(t,e,n,s,i,r){const o=t.da(1,e,n),a=[ko(e,s,n)],l=[i];if(r.length%2!=0)throw new X(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(ko(e,r[f])),l.push(r[f+1]);const c=[],u=it.empty();for(let f=a.length-1;f>=0;--f)if(!Bd(c,a[f])){const p=a[f];let g=l[f];g=He(g);const v=o.ca(p);if(g instanceof br)c.push(p);else{const _=wr(g,v);_!=null&&(c.push(p),u.set(p,_))}}const h=new dt(c);return new Md(u,h,o.fieldTransforms)}function wr(t,e){if(Vd(t=He(t)))return Na("Unsupported field value:",e,t),Fd(t,e);if(t instanceof Sa)return function(n,s){if(!Ud(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=wr(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vy(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Pe.fromDate(n);return{timestampValue:Bi(s.It,i)}}if(n instanceof Pe){const i=new Pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bi(s.It,i)}}if(n instanceof Ca)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bn)return{bytesValue:ud(s.It,n._byteString)};if(n instanceof at){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:da(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ia(n)}`)}(t,e)}function Fd(t,e){const n={};return $h(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(t,(s,i)=>{const r=wr(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Vd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Ca||t instanceof Bn||t instanceof at||t instanceof Sa)}function Na(t,e,n){if(!Vd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ia(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function ko(t,e,n){if((e=He(e))instanceof _r)return e._internalPath;if(typeof e=="string")return Ra(t,e);throw ji("Field path arguments must be of type string or ",t,!1,void 0,n)}const Zb=new RegExp("[~\\*/\\[\\]]");function Ra(t,e,n){if(e.search(Zb)>=0)throw ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _r(...e.split("."))._internalPath}catch{throw ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ji(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new X(P.INVALID_ARGUMENT,a+t+l)}function Bd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $d{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e0 extends $d{data(){return super.data()}}function jd(t,e){return typeof e=="string"?Ra(t,e):e instanceof _r?e._internalPath:e._delegate._internalPath}/**
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
 */class t0{convertValue(e,n="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){const s={};return _n(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Ca(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=qh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ks(e));default:return null}}convertTimestamp(e){const n=Gt(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=De.fromString(e);be(pd(s));const i=new Es(s.get(1),s.get(3)),r=new W(s.popFirst(5));return i.isEqual(n)||Rt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function n0(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class s0{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qd extends $d{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new i0(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(jd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class i0 extends qd{data(e={}){return super.data(e)}}/**
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
 */function qi(t){t=gn(t,at);const e=gn(t.firestore,yr);return Hb(Ld(e),t._key).then(n=>o0(e,t,n))}class r0 extends t0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function Hd(t,e,n){t=gn(t,at);const s=gn(t.firestore,yr),i=n0(t.converter,e,n);return Kd(s,[Yb(xd(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_t.none())])}function kr(t,e,n,...s){t=gn(t,at);const i=gn(t.firestore,yr),r=xd(i);let o;return o=typeof(e=He(e))=="string"||e instanceof _r?Jb(r,"updateDoc",t._key,e,n,s):Xb(r,"updateDoc",t._key,e),Kd(i,[o.toMutation(t._key,_t.exists(!0))])}function Kd(t,e){return function(n,s){const i=new Kt;return n.asyncQueue.enqueueAndForget(async()=>Eb(await jb(n),s,i)),i.promise}(Ld(t),e)}function o0(t,e,n){const s=n.docs.get(e._key),i=new r0(t);return new qd(t,i,e._key,s,new s0(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){zn=n})(Os),Ln(new un("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new yr(new ay(n.getProvider("auth-internal")),new hy(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new X(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ht(Dl,"3.7.1",t),Ht(Dl,"3.7.1","esm2017")})();const In=[];function a0(t,e=le){let n;const s=new Set;function i(a){if(ke(t,a)&&(t=a,n)){const l=!In.length;for(const c of s)c[1](),In.push(c,t);if(l){for(let c=0;c<In.length;c+=2)In[c][0](In[c+1]);In.length=0}}}function r(a){i(a(t))}function o(a,l=le){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||le),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function l0(){const{subscribe:t,set:e,update:n}=a0(null);return{subscribe:t,set:s=>e(s),setEmail:s=>e(s),updateKids:s=>{n(i=>({...i,kids:s}))},updateKid:s=>{n(i=>{if(i&&i.isParent){let r=i&&i.kids.map(o=>s&&o&&o.name==s.name?s:o);return{...i,kids:r}}else if(i&&!i.isParent)return s;return null})},addKid:s=>n(i=>{if(i){let r=i.kids;return r.push(s),{...i,kids:r}}})}}const _e=l0();var c0="firebase",u0="9.12.1";/**
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
 */Ht(c0,u0,"app");const h0={apiKey:"AIzaSyBbUgt1Qe6dQAaKzAa9gKM2gM-oIbUZK88",authDomain:"bunnymoney-fdebe.firebaseapp.com",projectId:"bunnymoney-fdebe",storageBucket:"bunnymoney-fdebe.appspot.com",messagingSenderId:"562120247125",appId:"1:562120247125:web:4ba0ce2a53d198789d51dc"};let Eo=null;Eo==null&&(Eo=su(h0));const At=nv(Eo),Yt=zb();function d0(){jm(At,async t=>{let e=null;return t&&(e=localStorage.getItem("name")||null,await f0(t.uid,e)),e})}async function f0(t,e){if(t==null&&e==null)return null;const n=Qt(Yt,"parents",t);let i=(await qi(n)).data();if(e){if(i){const r=i.kids.find(o=>{if(o&&e&&o.name.toLowerCase()==e.toLowerCase())return o});_e.set({...r,uid:t})}}else i?_e.set({...i,uid:t}):Hd(n,{isParent:!0,kids:[],uid:t});return e&&i}async function p0(t){if(t){const e=Qt(Yt,"parents",t.uid);return await kr(e,t),!0}return!1}async function mt(t){const e=Qt(Yt,"parents",t.uid);let s=(await qi(e)).data();if(s){let i=s.kids.map(r=>r.kid==t.kid?t:r);s.kids=i,kr(e,s)}else return Promise.resolve(1);return Promise.resolve(0)}function on(t){let e=/([0-9]+\.?[0-9]{0,2})/,n=t.match(e);return n&&n[0]&&typeof n[0]=="string"?parseFloat(n[0]):!1}function Pt(t){let e=t.getFullYear(),n=t.getMonth()+1,s=t.getDate();return`${n}/${s}/${e}`}function zd(t){return new Date(t)}function m0(t){console.log(t);let e=Gd(t.checkingAccount.frequency)*24*60*60*1e3;if(console.log(e,new Date().valueOf(),t.dateOpened,t.dateOpened.valueOf()),new Date().valueOf()-t.dateOpened<e)return;console.log(" time to calculate");let n=t.checkingAccount.transactions.find(s=>{if(s.memo=="allowance")return s});if(n){let s=zd(n.date).valueOf();for(;s+e<new Date().valueOf();){s+=e,t.checkingAccount.balance+=t.checkingAccount.allowance;let i={amount:t.checkingAccount.allowance,currentBalance:t.checkingAccount.balance,date:Pt(new Date(s)),memo:"allowance"};t.checkingAccount.transactions=[i,...t.checkingAccount.transactions]}}else{t.checkingAccount.balance+=t.checkingAccount.allowance;let s={amount:t.checkingAccount.allowance,currentBalance:t.checkingAccount.balance,date:Pt(new Date),memo:"allowance"};console.log(s),t.checkingAccount.transactions=[s,...t.checkingAccount.transactions],mt(t),_e.updateKid(t)}return t.checkingAccount.transactions}function g0(t){let e=Gd(t.savingsAccount.compounded)*24*60*60*1e3;if(new Date().valueOf()-t.dateOpened<e)return;let n=t.savingsAccount.transactions.find(s=>{if(s.memo=="interest")return s});if(n){let s=zd(n.date).valueOf();if(s+e<new Date().valueOf()){for(;s+e<new Date().valueOf();){s+=e,t.savingsAccount.balance+=t.savingsAccount.balance*(t.savingsAccount.interest/100);let i={amount:t.savingsAccount.interest,currentBalance:t.savingsAccount.balance,date:Pt(new Date),memo:"interest"};t.savingsAccount.transactions=[i,...t.savingsAccount.transactions]}mt(t),_e.updateKid(t)}}else{t.savingsAccount.balance+=t.savingsAccount.balance*(t.savingsAccount.interest/100);let s={amount:t.savingsAccount.interest,currentBalance:t.savingsAccount.balance,date:Pt(new Date),memo:"interest"};t.savingsAccount.transactions=[s,...t.savingsAccount.transactions],mt(t),_e.updateKid(t)}return t.savingsAccount.transactions}function Gd(t){return t=="day"?1:t=="week"?7:t=="month"?30:365}function v0(t,e){return t.map(n=>e&&n&&n.name==e.name?e:n)}function ic(t){let e;function n(r,o){return r[5]?y0:_0}let s=n(t),i=s(t);return{c(){i.c(),e=tt()},m(r,o){i.m(r,o),S(r,e,o)},p(r,o){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&A(e)}}}function y0(t){let e,n,s,i,r,o,a,l,c,u,h,f,p,g,v,_,w,b,k,C;return{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("h3"),i.textContent="Request money",r=E(),o=y("div"),a=y("div"),l=y("input"),c=E(),u=y("label"),u.textContent="(to checking)",h=E(),f=y("div"),p=y("label"),p.textContent="Memo",g=E(),v=y("input"),_=E(),w=y("div"),b=y("button"),b.textContent="request",m(n,"class","link text-4xl pl-4 pr-4 svelte-1q4l842"),m(i,"class","text-3xl p-2"),m(l,"id","add"),m(l,"type","number"),m(l,"max","0"),m(l,"min","100000"),m(l,"placeholder","0"),m(l,"class","p-2 pl-4 pr-4 outline-none w-2/3 rounded-md col-start-1 bg-yellow shaded big-shade"),m(u,"for","add"),m(u,"class","text-left pl-4 italic col-start-2 pt-2"),m(a,"class","grid grid-cols-2 p-2"),m(p,"for","memo"),m(p,"class","col-start-1 pr-4 text-center pt-2"),m(v,"id","memo"),m(v,"type","text"),m(v,"placeholder","for movie tickets"),m(v,"class","p-2 pl-4 pr-4 outline-none w-full rounded-md items-end bg-green shaded big-shade"),m(f,"class","grid grid-cols-3 p-2"),m(b,"class","bg-pink border-black border-2 p-2 pr-4 pl-4 rounded-md w-full appearance-none mb-1 shaded big-shade col-start-3 hover:mb-0 hover:mt-1 action:mb-0 action:mt-1"),m(w,"class","grid grid-cols-3 p-2"),m(o,"class","flex flex-col"),m(e,"class","p-2 border-black border-2 rounded-xl")},m(I,T){S(I,e,T),d(e,n),d(e,s),d(e,i),d(e,r),d(e,o),d(o,a),d(a,l),he(l,t[1]),d(a,c),d(a,u),d(o,h),d(o,f),d(f,p),d(f,g),d(f,v),he(v,t[2]),d(o,_),d(o,w),d(w,b),k||(C=[U(n,"click",t[10]),U(l,"input",t[11]),U(v,"input",t[12]),U(b,"click",t[6])],k=!0)},p(I,T){T&2&&Xe(l.value)!==I[1]&&he(l,I[1]),T&4&&v.value!==I[2]&&he(v,I[2])},d(I){I&&A(e),k=!1,we(C)}}}function _0(t){let e,n,s;return{c(){e=y("button"),e.textContent="Request money",m(e,"class","link underline svelte-1q4l842")},m(i,r){S(i,e,r),n||(s=U(e,"click",t[9]),n=!0)},p:le,d(i){i&&A(e),n=!1,s()}}}function b0(t){let e,n,s,i,r,o;function a(h){t[7](h)}function l(h){t[8](h)}let c={};t[3]!==void 0&&(c.visible=t[3]),t[4]!==void 0&&(c.message=t[4]),n=new nt({props:c}),re.push(()=>ue(n,"visible",a)),re.push(()=>ue(n,"message",l));let u=t[0]&&ic(t);return{c(){e=y("div"),se(n.$$.fragment),r=E(),u&&u.c(),m(e,"class","max-w-lg w-80 pt-2 pb-2")},m(h,f){S(h,e,f),Z(n,e,null),d(e,r),u&&u.m(e,null),o=!0},p(h,[f]){const p={};!s&&f&8&&(s=!0,p.visible=h[3],ce(()=>s=!1)),!i&&f&16&&(i=!0,p.message=h[4],ce(()=>i=!1)),n.$set(p),h[0]?u?u.p(h,f):(u=ic(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(h){o||(M(n.$$.fragment,h),o=!0)},o(h){F(n.$$.fragment,h),o=!1},d(h){h&&A(e),ee(n),u&&u.d()}}}function w0(t,e,n){let{kid:s=null}=e,i,r,o=!1,a="",l=!1;async function c(){if(i<=0&&(n(4,a="Request must be bigger than 0"),n(3,o=!0)),s)if(i){let _=on(i.toString());_&&(s.pending.push({date:Pt(new Date),amount:_,memo:r,for:"parent"}),mt(s),n(4,a=`Requested $${_} successfully!`),n(3,o=!0))}else n(4,a="invalid request!"),n(3,o=!0),n(1,i=0)}function u(_){o=_,n(3,o)}function h(_){a=_,n(4,a)}const f=()=>n(5,l=!l),p=()=>n(5,l=!l);function g(){i=Xe(this.value),n(1,i)}function v(){r=this.value,n(2,r)}return t.$$set=_=>{"kid"in _&&n(0,s=_.kid)},[s,i,r,o,a,l,c,u,h,f,p,g,v]}class k0 extends Se{constructor(e){super(),Ae(this,e,w0,b0,ke,{kid:0})}}function rc(t){let e,n,s,i,r,o,a,l,c,u,h,f;return{c(){e=y("div"),n=y("h2"),s=V(t[1]),i=E(),r=y("div"),o=y("button"),o.textContent="OK",a=E(),l=y("p"),l.textContent="or",c=E(),u=y("button"),u.textContent="Cancel",m(n,"class","text-2xl m-4 "),m(o,"class","bg-green border-black border-2 shaded p-2 pl-6 pr-6 mr-4 rounded-md mb-1"),m(l,"class","middle"),m(u,"class","bg-amber border-black border-2 shaded p-2 pl-4 pr-4 rounded-md mb-1 ml-4"),m(r,"class","m-4 p-4 flex justify-evenly items-center"),m(e,"class","sticky w-1112 bg-pink rounded-xl p-2 flex flex-col items-center border-black border-2 shaded svelte-1nghv3d")},m(p,g){S(p,e,g),d(e,n),d(n,s),d(e,i),d(e,r),d(r,o),d(r,a),d(r,l),d(r,c),d(r,u),h||(f=[U(o,"click",t[2]),U(u,"click",t[4]),Hi(I0.call(null,e)),U(e,"click_outside",t[5])],h=!0)},p(p,g){g&2&&ae(s,p[1])},d(p){p&&A(e),h=!1,we(f)}}}function E0(t){let e,n=t[0]&&rc(t);return{c(){n&&n.c(),e=tt()},m(s,i){n&&n.m(s,i),S(s,e,i)},p(s,[i]){s[0]?n?n.p(s,i):(n=rc(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:le,o:le,d(s){n&&n.d(s),s&&A(e)}}}function I0(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function T0(t,e,n){let{boxOpen:s=!1}=e,{message:i=""}=e,{isConfirmed:r=!1}=e;function o(){n(3,r=!0),n(0,s=!1)}const a=()=>n(0,s=!1),l=()=>n(0,s=!1);return t.$$set=c=>{"boxOpen"in c&&n(0,s=c.boxOpen),"message"in c&&n(1,i=c.message),"isConfirmed"in c&&n(3,r=c.isConfirmed)},[s,i,o,r,a,l]}class Wd extends Se{constructor(e){super(),Ae(this,e,T0,E0,ke,{boxOpen:0,message:1,isConfirmed:3})}}function oc(t,e,n){const s=t.slice();return s[16]=e[n],s[18]=n,s}function ac(t){let e,n,s,i=[],r=new Map,o=t[0].pending;const a=l=>l[18];for(let l=0;l<o.length;l+=1){let c=oc(t,o,l),u=a(c);r.set(u,i[l]=cc(u,c))}return{c(){e=y("div"),n=y("h2"),n.textContent="Pending requests",s=E();for(let l=0;l<i.length;l+=1)i[l].c();m(n,"class","text-xl m-2"),m(e,"class","bg-green rounded-xl p-2 mt-6 border-black border-2 w-5/6 max-w-lg shaded big-shade")},m(l,c){S(l,e,c),d(e,n),d(e,s);for(let u=0;u<i.length;u+=1)i[u].m(e,null)},p(l,c){c&193&&(o=l[0].pending,i=vf(i,c,a,1,l,o,r,e,gf,cc,null,oc))},d(l){l&&A(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function lc(t){let e,n,s,i=Math.abs(t[16].amount).toFixed(2)+"",r,o,a,l=t[16].date+"",c,u,h,f=t[16].memo+"",p,g,v,_,w,b,k,C;function I(){return t[12](t[18])}function T(){return t[13](t[18])}return{c(){e=y("div"),n=y("p"),s=V("$ "),r=V(i),o=E(),a=y("p"),c=V(l),u=E(),h=y("p"),p=V(f),g=E(),v=y("button"),v.textContent="Accept",_=E(),w=y("button"),w.textContent="Deny",b=E(),m(n,"class","row-start-1 col-start-1 mb-2 bold"),m(a,"class","row-start-1 col-start-2 mb-2"),m(h,"class","row-start-2 col-start-1 col-end-3 mb-2 italic"),m(v,"class","bg-yellow p-2 pr-4 pl-4 mr-2 rounded-md row-start-3 col-start-1 border-black border-2 mb-1 shaded hover:mb-0 hover:mt-1 action:mb-0 action:mt-1 svelte-13ndr8f"),m(w,"class","bg-amber p-2 pr-4 pl-4 ml-2 rounded-md row-start-3 col-start-2 border-black border-2 mb-1 shaded svelte-13ndr8f"),m(e,"class","border-black border-b-2 grid grid-col-2 grid-row-3 pt-4 pb-4")},m(D,N){S(D,e,N),d(e,n),d(n,s),d(n,r),d(e,o),d(e,a),d(a,c),d(e,u),d(e,h),d(h,p),d(e,g),d(e,v),d(e,_),d(e,w),d(e,b),k||(C=[U(v,"click",I),U(w,"click",T)],k=!0)},p(D,N){t=D,N&1&&i!==(i=Math.abs(t[16].amount).toFixed(2)+"")&&ae(r,i),N&1&&l!==(l=t[16].date+"")&&ae(c,l),N&1&&f!==(f=t[16].memo+"")&&ae(p,f)},d(D){D&&A(e),k=!1,we(C)}}}function cc(t,e){let n,s,i=e[16].for!="parent"&&lc(e);return{key:t,first:null,c(){n=tt(),i&&i.c(),s=tt(),this.first=n},m(r,o){S(r,n,o),i&&i.m(r,o),S(r,s,o)},p(r,o){e=r,e[16].for!="parent"?i?i.p(e,o):(i=lc(e),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},d(r){r&&A(n),i&&i.d(r),r&&A(s)}}}function A0(t){let e,n,s,i,r,o,a,l,c,u;function h(b){t[8](b)}function f(b){t[9](b)}let p={};t[5]!==void 0&&(p.visible=t[5]),t[4]!==void 0&&(p.message=t[4]),e=new nt({props:p}),re.push(()=>ue(e,"visible",h)),re.push(()=>ue(e,"message",f));function g(b){t[10](b)}function v(b){t[11](b)}let _={message:t[2]};t[3]!==void 0&&(_.boxOpen=t[3]),t[1]!==void 0&&(_.isConfirmed=t[1]),r=new Wd({props:_}),re.push(()=>ue(r,"boxOpen",g)),re.push(()=>ue(r,"isConfirmed",v));let w=t[0].pending&&t[0].pending.length>0&&ac(t);return{c(){se(e.$$.fragment),i=E(),se(r.$$.fragment),l=E(),c=y("div"),w&&w.c(),m(c,"class","absolute flex flex-col items-center w-full h-full bg-black75 top-0 left-0")},m(b,k){Z(e,b,k),S(b,i,k),Z(r,b,k),S(b,l,k),S(b,c,k),w&&w.m(c,null),u=!0},p(b,[k]){const C={};!n&&k&32&&(n=!0,C.visible=b[5],ce(()=>n=!1)),!s&&k&16&&(s=!0,C.message=b[4],ce(()=>s=!1)),e.$set(C);const I={};k&4&&(I.message=b[2]),!o&&k&8&&(o=!0,I.boxOpen=b[3],ce(()=>o=!1)),!a&&k&2&&(a=!0,I.isConfirmed=b[1],ce(()=>a=!1)),r.$set(I),b[0].pending&&b[0].pending.length>0?w?w.p(b,k):(w=ac(b),w.c(),w.m(c,null)):w&&(w.d(1),w=null)},i(b){u||(M(e.$$.fragment,b),M(r.$$.fragment,b),u=!0)},o(b){F(e.$$.fragment,b),F(r.$$.fragment,b),u=!1},d(b){ee(e,b),b&&A(i),ee(r,b),b&&A(l),b&&A(c),w&&w.d()}}}function S0(t,e,n){let{kid:s}=e,i="",r=!1,o=!1,a=-1,l="",c=!1;_e.subscribe(k=>{k&&n(0,s=k)});function u(k){n(2,i=`Pay $${Math.abs(s==null?void 0:s.pending[k].amount)} ${s&&s.pending[k].memo}?`),n(3,r=!0),a=k}function h(k){if(s){let C=s.pending.filter((I,T)=>T!=k);n(4,l="request denied successfully"),_e.set({...s,pending:C}),mt({...s,pending:C}),n(5,c=!0)}}function f(){if(s){let k=s.pending.find((I,T)=>T==a),C=s.pending.filter((I,T)=>T!=a);if(k){let I={...k,currentBalance:s.checkingAccount.balance+k.amount};n(0,s.checkingAccount.transactions=[I,...s.checkingAccount.transactions],s),n(0,s.checkingAccount.balance=I.currentBalance||s.checkingAccount.balance,s),n(4,l="payment sent!");let T={...s,pending:C};mt(T),n(5,c=!0),_e.set(T),_e.subscribe(D=>n(0,s=D)),T=null,k=void 0,n(1,o=!1)}else n(4,l="Something went wrong. Refresh and try again"),n(5,c=!0)}}function p(k){c=k,n(5,c)}function g(k){l=k,n(4,l)}function v(k){r=k,n(3,r)}function _(k){o=k,n(1,o)}const w=k=>u(k),b=k=>h(k);return t.$$set=k=>{"kid"in k&&n(0,s=k.kid)},t.$$.update=()=>{t.$$.dirty&2&&o&&f()},[s,o,i,r,l,c,u,h,p,g,v,_,w,b]}class C0 extends Se{constructor(e){super(),Ae(this,e,S0,A0,ke,{kid:0})}}function uc(t,e,n){const s=t.slice();return s[4]=e[n],s}function hc(t){let e;function n(r,o){return r[1]?D0:N0}let s=n(t),i=s(t);return{c(){i.c(),e=tt()},m(r,o){i.m(r,o),S(r,e,o)},p(r,o){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&A(e)}}}function D0(t){let e,n,s,i,r=t[0].checkingAccount.transactions.length>0?"Transactions":"No transactions",o,a,l,c;function u(p,g){return p[0].checkingAccount.transactions.length>0?O0:R0}let h=u(t),f=h(t);return{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("h3"),o=V(r),a=E(),f.c(),m(n,"class","link text-4xl leading-none pl-4 pr-4"),m(i,"class","text-3xl p-2"),m(e,"class","border-black border-2 rounded-xl p-2 w-full")},m(p,g){S(p,e,g),d(e,n),d(e,s),d(e,i),d(i,o),d(e,a),f.m(e,null),l||(c=U(n,"click",t[3]),l=!0)},p(p,g){g&1&&r!==(r=p[0].checkingAccount.transactions.length>0?"Transactions":"No transactions")&&ae(o,r),h===(h=u(p))&&f?f.p(p,g):(f.d(1),f=h(p),f&&(f.c(),f.m(e,null)))},d(p){p&&A(e),f.d(),l=!1,c()}}}function N0(t){let e,n,s;return{c(){e=y("button"),e.textContent="See Checking Transactions",m(e,"class","underline hover:m-0")},m(i,r){S(i,e,r),n||(s=U(e,"click",t[2]),n=!0)},p:le,d(i){i&&A(e),n=!1,s()}}}function R0(t){let e;return{c(){e=y("div")},m(n,s){S(n,e,s)},p:le,d(n){n&&A(e)}}}function O0(t){let e,n,s,i=t[0].checkingAccount.transactions,r=[];for(let o=0;o<i.length;o+=1)r[o]=dc(uc(t,i,o));return{c(){e=y("table"),n=y("tr"),n.innerHTML=`<th></th> 
              <th class="text-left text-2xl"><h4>Amount</h4></th> 
              <th class="text-left text-2xl"><h4>Balance</h4></th>`,s=E();for(let o=0;o<r.length;o+=1)r[o].c();m(n,"class","sticky border-black border-b-2 svelte-1mtd5kf"),m(e,"class","w-full h-60 overflow-y-scroll")},m(o,a){S(o,e,a),d(e,n),d(e,s);for(let l=0;l<r.length;l+=1)r[l].m(e,null)},p(o,a){if(a&1){i=o[0].checkingAccount.transactions;let l;for(l=0;l<i.length;l+=1){const c=uc(o,i,l);r[l]?r[l].p(c,a):(r[l]=dc(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},d(o){o&&A(e),vn(r,o)}}}function dc(t){let e,n,s,i=t[4].date+"",r,o,a,l,c,u,h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[4].amount)+"",f,p,g,v,_=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[4].currentBalance)+"",w,b,k,C,I,T=(t[4].memo||"unknown")+"",D,N;return{c(){e=y("tr"),n=y("td"),s=y("date"),r=V(i),o=E(),a=y("tr"),l=y("td"),c=E(),u=y("td"),f=V(h),p=E(),g=y("td"),v=y("p"),w=V(_),b=E(),k=y("tr"),C=y("td"),I=y("h6"),D=V(T),N=E(),m(s,"class","text-sm"),m(n,"colspan","3"),m(l,"class","w-1/3"),m(v,"class","font-bold"),m(I,"class",""),m(C,"colspan","3"),m(C,"class","mb-6 border-black border-b-2 svelte-1mtd5kf"),m(k,"class","border-black border-b-2 svelte-1mtd5kf")},m(R,x){S(R,e,x),d(e,n),d(n,s),d(s,r),S(R,o,x),S(R,a,x),d(a,l),d(a,c),d(a,u),d(u,f),d(a,p),d(a,g),d(g,v),d(v,w),S(R,b,x),S(R,k,x),d(k,C),d(C,I),d(I,D),d(k,N)},p(R,x){x&1&&i!==(i=R[4].date+"")&&ae(r,i),x&1&&h!==(h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(R[4].amount)+"")&&ae(f,h),x&1&&_!==(_=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(R[4].currentBalance)+"")&&ae(w,_),x&1&&T!==(T=(R[4].memo||"unknown")+"")&&ae(D,T)},d(R){R&&A(e),R&&A(o),R&&A(a),R&&A(b),R&&A(k)}}}function L0(t){let e,n={kid:t[0]}&&hc(t);return{c(){e=y("div"),n&&n.c(),m(e,"class","w-full max-w-xl pt-2 pb-2")},m(s,i){S(s,e,i),n&&n.m(e,null)},p(s,[i]){s[0],n?n.p(s,i):(n=hc(s),n.c(),n.m(e,null))},i:le,o:le,d(s){s&&A(e),n&&n.d()}}}function P0(t,e,n){let{kid:s}=e,i=!1;const r=()=>n(1,i=!i),o=()=>n(1,i=!i);return t.$$set=a=>{"kid"in a&&n(0,s=a.kid)},[s,i,r,o]}class Qd extends Se{constructor(e){super(),Ae(this,e,P0,L0,ke,{kid:0})}}function fc(t,e,n){const s=t.slice();return s[4]=e[n],s}function pc(t){let e;function n(r,o){return r[1]?M0:U0}let s=n(t),i=s(t);return{c(){i.c(),e=tt()},m(r,o){i.m(r,o),S(r,e,o)},p(r,o){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&A(e)}}}function M0(t){let e,n,s,i,r=t[0].savingsAccount.transactions.length>0?"Transactions":"No transactions",o,a,l,c;function u(p,g){return p[0].savingsAccount.transactions.length>0?F0:x0}let h=u(t),f=h(t);return{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("h3"),o=V(r),a=E(),f.c(),m(n,"class","link text-4xl leading-none pl-4 pr-4"),m(i,"class","text-3xl p-2"),m(e,"class","border-black border-2 rounded-xl p-2 w-full")},m(p,g){S(p,e,g),d(e,n),d(e,s),d(e,i),d(i,o),d(e,a),f.m(e,null),l||(c=U(n,"click",t[3]),l=!0)},p(p,g){g&1&&r!==(r=p[0].savingsAccount.transactions.length>0?"Transactions":"No transactions")&&ae(o,r),h===(h=u(p))&&f?f.p(p,g):(f.d(1),f=h(p),f&&(f.c(),f.m(e,null)))},d(p){p&&A(e),f.d(),l=!1,c()}}}function U0(t){let e,n,s;return{c(){e=y("button"),e.textContent="See Checking Transactions",m(e,"class","underline hover:m-0")},m(i,r){S(i,e,r),n||(s=U(e,"click",t[2]),n=!0)},p:le,d(i){i&&A(e),n=!1,s()}}}function x0(t){let e;return{c(){e=y("div")},m(n,s){S(n,e,s)},p:le,d(n){n&&A(e)}}}function F0(t){let e,n,s,i=t[0].savingsAccount.transactions,r=[];for(let o=0;o<i.length;o+=1)r[o]=mc(fc(t,i,o));return{c(){e=y("table"),n=y("tr"),n.innerHTML=`<th></th> 
              <th class="text-left text-2xl"><h4>Amount</h4></th> 
              <th class="text-left text-2xl"><h4>Balance</h4></th>`,s=E();for(let o=0;o<r.length;o+=1)r[o].c();m(n,"class","sticky border-black border-b-2 svelte-1mtd5kf"),m(e,"class","w-full h-60 overflow-y-scroll")},m(o,a){S(o,e,a),d(e,n),d(e,s);for(let l=0;l<r.length;l+=1)r[l].m(e,null)},p(o,a){if(a&1){i=o[0].savingsAccount.transactions;let l;for(l=0;l<i.length;l+=1){const c=fc(o,i,l);r[l]?r[l].p(c,a):(r[l]=mc(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},d(o){o&&A(e),vn(r,o)}}}function mc(t){let e,n,s,i=t[4].date+"",r,o,a,l,c,u,h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[4].amount)+"",f,p,g,v,_=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[4].currentBalance)+"",w,b,k,C,I,T=(t[4].memo||"unknown")+"",D,N;return{c(){e=y("tr"),n=y("td"),s=y("date"),r=V(i),o=E(),a=y("tr"),l=y("td"),c=E(),u=y("td"),f=V(h),p=E(),g=y("td"),v=y("p"),w=V(_),b=E(),k=y("tr"),C=y("td"),I=y("h6"),D=V(T),N=E(),m(s,"class","text-sm"),m(n,"colspan","3"),m(l,"class","w-1/3"),m(v,"class","font-bold"),m(I,"class",""),m(C,"colspan","3"),m(C,"class","mb-6 border-black border-b-2 svelte-1mtd5kf"),m(k,"class","border-black border-b-2 svelte-1mtd5kf")},m(R,x){S(R,e,x),d(e,n),d(n,s),d(s,r),S(R,o,x),S(R,a,x),d(a,l),d(a,c),d(a,u),d(u,f),d(a,p),d(a,g),d(g,v),d(v,w),S(R,b,x),S(R,k,x),d(k,C),d(C,I),d(I,D),d(k,N)},p(R,x){x&1&&i!==(i=R[4].date+"")&&ae(r,i),x&1&&h!==(h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(R[4].amount)+"")&&ae(f,h),x&1&&_!==(_=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(R[4].currentBalance)+"")&&ae(w,_),x&1&&T!==(T=(R[4].memo||"unknown")+"")&&ae(D,T)},d(R){R&&A(e),R&&A(o),R&&A(a),R&&A(b),R&&A(k)}}}function V0(t){let e,n={kid:t[0]}&&pc(t);return{c(){e=y("div"),n&&n.c(),m(e,"class","w-full max-w-xl pt-2 pb-2")},m(s,i){S(s,e,i),n&&n.m(e,null)},p(s,[i]){s[0],n?n.p(s,i):(n=pc(s),n.c(),n.m(e,null))},i:le,o:le,d(s){s&&A(e),n&&n.d()}}}function B0(t,e,n){let{kid:s}=e,i=!1;const r=()=>n(1,i=!i),o=()=>n(1,i=!i);return t.$$set=a=>{"kid"in a&&n(0,s=a.kid)},[s,i,r,o]}class $0 extends Se{constructor(e){super(),Ae(this,e,B0,V0,ke,{kid:0})}}function j0(t){let e,n,s,i,r,o,a,l,c=t[1]?"checking":"savings",u,h,f,p,g,v,_=t[1]?"savings":"checking",w,b,k,C,I,T,D,N,R;return{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("h2"),i.textContent="Transfer money",r=E(),o=y("div"),a=y("p"),l=V("from: "),u=V(c),h=E(),f=y("button"),f.textContent="\u21C6",p=E(),g=y("p"),v=V("to: "),w=V(_),b=E(),k=y("label"),k.textContent="Amount",C=E(),I=y("input"),T=E(),D=y("button"),D.textContent="Transfer",m(n,"class","link text-4xl pt-0 lh-1"),m(i,"class","text-xl mb-4"),m(a,"class","col-start-1 self-center"),m(f,"class","bg-pink hover:mb-0 hover:mt-1 col-start-2 border-black border-2 rounded-md inline p-2 shaded big-shade mb-1 right"),m(g,"class","col-start-3 self-center"),m(k,"for","amount"),m(k,"class","col-start-1 row-start-2 self-center"),m(I,"type","number"),I.required=!0,m(I,"id","amount"),m(I,"class","outline-none col-start-2 col-end-4 mb-1 w-13 row-start-2 bg-yellow p-2 rounded-md shaded big-shade"),m(D,"class","col-start-3 row-start-3 rounded-md border-black border-2 shaded mb-1 bg-green p-2 hover:mb-0 hover:mt-1"),m(o,"class","grid grid-col-3 grid-row-3 gap-4"),m(e,"class","border-black border-2 rounded-xl p-2")},m(x,z){S(x,e,z),d(e,n),d(e,s),d(e,i),d(e,r),d(e,o),d(o,a),d(a,l),d(a,u),d(o,h),d(o,f),d(o,p),d(o,g),d(g,v),d(g,w),d(o,b),d(o,k),d(o,C),d(o,I),he(I,t[2]),d(o,T),d(o,D),N||(R=[U(n,"click",t[10]),U(f,"click",t[11]),U(I,"input",t[12]),U(D,"click",t[5])],N=!0)},p(x,z){z&2&&c!==(c=x[1]?"checking":"savings")&&ae(u,c),z&2&&_!==(_=x[1]?"savings":"checking")&&ae(w,_),z&4&&Xe(I.value)!==x[2]&&he(I,x[2])},d(x){x&&A(e),N=!1,we(R)}}}function q0(t){let e,n,s;return{c(){e=y("button"),e.textContent="Transfer money",m(e,"class","link underline")},m(i,r){S(i,e,r),n||(s=U(e,"click",t[9]),n=!0)},p:le,d(i){i&&A(e),n=!1,s()}}}function H0(t){let e,n,s,i,r,o;function a(p){t[7](p)}function l(p){t[8](p)}let c={};t[4]!==void 0&&(c.message=t[4]),t[3]!==void 0&&(c.visible=t[3]),n=new nt({props:c}),re.push(()=>ue(n,"message",a)),re.push(()=>ue(n,"visible",l));function u(p,g){return p[0]?j0:q0}let h=u(t),f=h(t);return{c(){e=y("div"),se(n.$$.fragment),r=E(),f.c(),m(e,"class","rounded-xl pt-2 pb-2")},m(p,g){S(p,e,g),Z(n,e,null),d(e,r),f.m(e,null),o=!0},p(p,[g]){const v={};!s&&g&16&&(s=!0,v.message=p[4],ce(()=>s=!1)),!i&&g&8&&(i=!0,v.visible=p[3],ce(()=>i=!1)),n.$set(v),h===(h=u(p))&&f?f.p(p,g):(f.d(1),f=h(p),f&&(f.c(),f.m(e,null)))},i(p){o||(M(n.$$.fragment,p),o=!0)},o(p){F(n.$$.fragment,p),o=!1},d(p){p&&A(e),ee(n),f.d()}}}function K0(t,e,n){let{kid:s=null}=e,i=!0,r=!0,o=0,a=!1,l="";function c(){if(o){if(r&&s.checkingAccount.balance>=o)n(6,s.checkingAccount.balance-=o,s),n(6,s.savingsAccount.balance+=o,s),n(6,s.savingsAccount.transactions=[{date:Pt(new Date),memo:"transfer from checking",amount:o,currentBalance:s.savingsAccount.balance},...s.savingsAccount.transactions],s);else if(!r&&s.savingsAccount.balance>=o)n(6,s.savingsAccount.balance-=o,s),n(6,s.checkingAccount.balance+=o,s),n(6,s.checkingAccount.transactions=[{date:Pt(new Date),memo:"transfer from savings",amount:o,currentBalance:s.checkingAccount.balance},...s.checkingAccount.transactions],s);else return n(4,l="amount must be available in account!"),n(3,a=!0);mt(s),_e.updateKid(s),n(4,l="transfered succcessfully"),n(3,a=!0)}else n(4,l="please try a valid amount"),n(3,a=!0)}function u(_){l=_,n(4,l)}function h(_){a=_,n(3,a)}const f=()=>n(0,i=!i),p=()=>n(0,i=!i),g=()=>n(1,r=!r);function v(){o=Xe(this.value),n(2,o)}return t.$$set=_=>{"kid"in _&&n(6,s=_.kid)},[i,r,o,a,l,c,s,u,h,f,p,g,v]}class gc extends Se{constructor(e){super(),Ae(this,e,K0,H0,ke,{kid:6})}}function z0(t){let e,n,s,i,r,o,a,l;function c(f){t[3](f)}function u(f){t[4](f)}let h={};return t[1]!==void 0&&(h.visible=t[1]),t[0]!==void 0&&(h.message=t[0]),e=new nt({props:h}),re.push(()=>ue(e,"visible",c)),re.push(()=>ue(e,"message",u)),{c(){se(e.$$.fragment),i=E(),r=y("button"),r.textContent="Log out",m(r,"class","rounded-md border-black border-2 p-2 pl-6 pr-6 bg-pink mb-1 shaded big-shade hover:mb-0 hover:mt-1")},m(f,p){Z(e,f,p),S(f,i,p),S(f,r,p),o=!0,a||(l=U(r,"click",t[5]),a=!0)},p(f,[p]){const g={};!n&&p&2&&(n=!0,g.visible=f[1],ce(()=>n=!1)),!s&&p&1&&(s=!0,g.message=f[0],ce(()=>s=!1)),e.$set(g)},i(f){o||(M(e.$$.fragment,f),o=!0)},o(f){F(e.$$.fragment,f),o=!1},d(f){ee(e,f),f&&A(i),f&&A(r),a=!1,l()}}}function G0(t,e,n){var s="signed out successfully";let i=!1;const r=()=>{n(1,i=!0),localStorage.clear(),At.signOut(),_e.set(null),window.scrollTo(0,0)};function o(c){i=c,n(1,i)}function a(c){s=c,n(0,s)}return[s,i,r,o,a,()=>r()]}class Oa extends Se{constructor(e){super(),Ae(this,e,G0,z0,ke,{})}}function vc(t){let e,n=(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[1])||"0.00")+"",s,i;return{c(){e=y("h3"),s=V(n),m(e,"class","text-6xl lh-4 text-center")},m(r,o){S(r,e,o),d(e,s)},p(r,o){o&2&&n!==(n=(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r[1])||"0.00")+"")&&ae(s,n)},i(r){i||Ct(()=>{i=mf(e,Kr,{y:-50}),i.start()})},o:le,d(r){r&&A(e)}}}function W0(t){let e,n,s,i,r,o,a,l=(t[0]&&t[0].name)+"",c,u,h,f,p,g,v,_,w,b,k,C,I=(t[0]&&t[0].checkingAccount.allowance)+"",T,D,N=(t[0]&&t[0].checkingAccount.frequency)+"",R,x,z,J,B,Q,O,H,Y,me,Ce,K,ye,Ve,ot,ft,wt=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[2])+"",Ee,st,Ie,j,Re,ht,en,wn,Zs,kn,Ut;e=new C0({props:{kid:t[0]}});let Be=t[1]&&vc(t);B=new k0({props:{kid:t[0]}}),O=new Qd({props:{kid:t[0]}});function Jd(ne){t[3](ne)}let La={};t[0]!==void 0&&(La.kid=t[0]),Y=new gc({props:La}),re.push(()=>ue(Y,"kid",Jd)),j=new $0({props:{kid:t[0]}});function Zd(ne){t[4](ne)}let Pa={};return t[0]!==void 0&&(Pa.kid=t[0]),ht=new gc({props:Pa}),re.push(()=>ue(ht,"kid",Zd)),kn=new Oa({}),{c(){se(e.$$.fragment),n=E(),s=y("div"),i=y("div"),r=y("h2"),o=V("Hello "),a=y("span"),c=V(l),u=V("!"),h=E(),f=y("div"),p=y("h2"),p.textContent="Checking Account",g=E(),Be&&Be.c(),v=E(),_=y("div"),w=y("h4"),w.textContent="Allowance",b=E(),k=y("h3"),C=V("$ "),T=V(I),D=V(" per "),R=V(N),x=E(),z=y("div"),J=y("div"),se(B.$$.fragment),Q=E(),se(O.$$.fragment),H=E(),se(Y.$$.fragment),Ce=E(),K=y("div"),ye=y("div"),Ve=y("h2"),Ve.textContent="Savings Account",ot=E(),ft=y("h3"),Ee=V(wt),st=E(),Ie=y("div"),se(j.$$.fragment),Re=E(),se(ht.$$.fragment),wn=E(),Zs=y("div"),se(kn.$$.fragment),m(a,"class","italic inline text-2xl"),m(r,"class","m-4 inline text-2xl"),m(p,"class","text-center mb-2 italic text-lg"),m(f,"class","bg-amber text-black rounded-full w-60 h-60 flex flex-col justify-center items-center mt-8 mb-8 circle "),m(w,"class","text-center italic p-2"),m(k,"class","text-center text-3xl"),m(_,"class","bg-amber w-full rounded-xl mb-4 mt-4 pb-4 pt-4 max-w-3xl"),m(J,"class","bg-red border-black border-2 rounded-xl p-2"),m(Ve,"class","text-center mb-2 italic text-lg"),m(ft,"class","text-6xl lh-4 text-center "),m(ye,"class","bg-green rounded-full w-60 h-60 flex flex-col items-center justify-center m-auto mt-8 mb-8 circle"),m(Ie,"class","bg-green rounded-xl border-black border-2 p-2"),m(Zs,"class","max-w-2xl flex flex-col items-center pt-4 pb-4 bg-pink rounded-xl mt-4 "),m(K,"class","center col"),m(z,"class","max-w-2xl w-full mb-4"),m(i,"class","p-2 pt-12 items-center flex flex-col max-w-2xl rounded-xl "),m(s,"class","w-full bg-yellow items-center flex flex-col pt-4 pb-4")},m(ne,ze){Z(e,ne,ze),S(ne,n,ze),S(ne,s,ze),d(s,i),d(i,r),d(r,o),d(r,a),d(a,c),d(a,u),d(i,h),d(i,f),d(f,p),d(f,g),Be&&Be.m(f,null),d(i,v),d(i,_),d(_,w),d(_,b),d(_,k),d(k,C),d(k,T),d(k,D),d(k,R),d(i,x),d(i,z),d(z,J),Z(B,J,null),d(J,Q),Z(O,J,null),d(J,H),Z(Y,J,null),d(z,Ce),d(z,K),d(K,ye),d(ye,Ve),d(ye,ot),d(ye,ft),d(ft,Ee),d(K,st),d(K,Ie),Z(j,Ie,null),d(Ie,Re),Z(ht,Ie,null),d(K,wn),d(K,Zs),Z(kn,Zs,null),Ut=!0},p(ne,[ze]){const Ma={};ze&1&&(Ma.kid=ne[0]),e.$set(Ma),(!Ut||ze&1)&&l!==(l=(ne[0]&&ne[0].name)+"")&&ae(c,l),ne[1]?Be?(Be.p(ne,ze),ze&2&&M(Be,1)):(Be=vc(ne),Be.c(),M(Be,1),Be.m(f,null)):Be&&(Be.d(1),Be=null),(!Ut||ze&1)&&I!==(I=(ne[0]&&ne[0].checkingAccount.allowance)+"")&&ae(T,I),(!Ut||ze&1)&&N!==(N=(ne[0]&&ne[0].checkingAccount.frequency)+"")&&ae(R,N);const Ua={};ze&1&&(Ua.kid=ne[0]),B.$set(Ua);const xa={};ze&1&&(xa.kid=ne[0]),O.$set(xa);const Fa={};!me&&ze&1&&(me=!0,Fa.kid=ne[0],ce(()=>me=!1)),Y.$set(Fa),(!Ut||ze&4)&&wt!==(wt=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(ne[2])+"")&&ae(Ee,wt);const Va={};ze&1&&(Va.kid=ne[0]),j.$set(Va);const Ba={};!en&&ze&1&&(en=!0,Ba.kid=ne[0],ce(()=>en=!1)),ht.$set(Ba)},i(ne){Ut||(M(e.$$.fragment,ne),M(Be),M(B.$$.fragment,ne),M(O.$$.fragment,ne),M(Y.$$.fragment,ne),M(j.$$.fragment,ne),M(ht.$$.fragment,ne),M(kn.$$.fragment,ne),Ut=!0)},o(ne){F(e.$$.fragment,ne),F(B.$$.fragment,ne),F(O.$$.fragment,ne),F(Y.$$.fragment,ne),F(j.$$.fragment,ne),F(ht.$$.fragment,ne),F(kn.$$.fragment,ne),Ut=!1},d(ne){ee(e,ne),ne&&A(n),ne&&A(s),Be&&Be.d(),ee(B),ee(O),ee(Y),ee(j),ee(ht),ee(kn)}}}function Q0(t,e,n){let s=null;_e.subscribe(u=>{u&&n(0,s=u)}),hf(()=>{s?(m0(s),s.savingsAccount.transactions.length>0&&g0(s)):Au(At),window.scroll({top:0,behavior:"smooth"})});let i=0,r=0;const o=setInterval(()=>{s.checkingAccount.balance>1e3&&i<s.checkingAccount.balance?n(1,i+=667.38):s.checkingAccount.balance>100&&i<s.checkingAccount.balance?n(1,i+=50.65):i<s.checkingAccount.balance?n(1,i+=.28):(n(1,i=s.checkingAccount.balance),clearInterval(o))},1),a=setInterval(()=>{r===s.savingsAccount.balance?clearInterval(a):r>s.savingsAccount.balance?n(2,r=s.savingsAccount.balance):s.savingsAccount.balance>1e4?n(2,r+=1015.65):s.savingsAccount.balance>1e3?n(2,r+=167.38):s.savingsAccount.balance>100?n(2,r+=74.65):r<s.savingsAccount.balance?n(2,r+=1.28):(n(1,i=s.savingsAccount.balance),clearInterval(a))},100);function l(u){s=u,n(0,s)}function c(u){s=u,n(0,s)}return[s,i,r,l,c]}class Y0 extends Se{constructor(e){super(),Ae(this,e,Q0,W0,ke,{})}}function X0(t){let e,n,s,i,r,o,a,l,c,u=t[0]===null?"numbers only please":"(to checking)",h,f,p,g,v,_,w,b,k;return{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("h2"),i.textContent="Add funds",r=E(),o=y("div"),a=y("input"),l=E(),c=y("label"),h=V(u),f=E(),p=y("label"),p.textContent="Memo",g=E(),v=y("input"),_=E(),w=y("button"),w.textContent="add",m(n,"class","link text-4xl pl-4 pr-4 svelte-9bah3o"),m(i,"class","p-2 text-3xl"),m(a,"class","p-2 outline-none text-center col-start-1 row-start-1 bg-pink rounded-md shaded big-shade w-88 right svelte-9bah3o"),m(a,"id","amount"),m(a,"placeholder","20"),m(a,"type","number"),m(c,"for","amount"),m(c,"class","text-center italic row-start-1 col-start-2 col-end-4 pt-2"),m(p,"for","memo"),m(p,"class","col-start-1 row-start-2 text-center pt-2"),m(v,"type","text"),m(v,"id","memo"),m(v,"placeholder","gift from grandma"),m(v,"class","p-2 outline-none row-start-2 col-start-2 col-end-4 bg-amber rounded-md shaded big-shade svelte-9bah3o"),m(w,"class","col-start-3 row-start-4 p-2 pr-6 pl-6 rounded-md bg-green border-black shaded big-shaded border-2 mb-1"),m(o,"class","grid grid-cols-3 grid-row-3 gap-4 p-2"),m(e,"class","border-black border-2 shaded rounded-xl p-2 mb-4")},m(C,I){S(C,e,I),d(e,n),d(e,s),d(e,i),d(e,r),d(e,o),d(o,a),he(a,t[0]),d(o,l),d(o,c),d(c,h),d(o,f),d(o,p),d(o,g),d(o,v),he(v,t[1]),d(o,_),d(o,w),b||(k=[U(n,"click",t[10]),U(a,"input",t[11]),U(a,"blur",t[12]),U(v,"input",t[13]),U(w,"click",t[14])],b=!0)},p(C,I){I&1&&Xe(a.value)!==C[0]&&he(a,C[0]),I&1&&u!==(u=C[0]===null?"numbers only please":"(to checking)")&&ae(h,u),I&2&&v.value!==C[1]&&he(v,C[1])},d(C){C&&A(e),b=!1,we(k)}}}function J0(t){let e,n,s;return{c(){e=y("button"),e.textContent="Add funds",m(e,"class","m-0 hover:m-0 underline pt-2 pb-2")},m(i,r){S(i,e,r),n||(s=U(e,"click",t[9]),n=!0)},p:le,d(i){i&&A(e),n=!1,s()}}}function Z0(t){let e,n,s,i,r,o,a,l;function c(v){t[7](v)}function u(v){t[8](v)}let h={};t[2]!==void 0&&(h.visible=t[2]),t[3]!==void 0&&(h.message=t[3]),e=new nt({props:h}),re.push(()=>ue(e,"visible",c)),re.push(()=>ue(e,"message",u));function f(v,_){return v[4]?X0:J0}let p=f(t),g=p(t);return{c(){se(e.$$.fragment),i=E(),r=y("div"),o=y("div"),g.c(),m(o,"class","w-full h-full w-full rounded-xl"),m(r,"class",a=t[0]===null?"bg-red rounded-xl":"bg-yellow")},m(v,_){Z(e,v,_),S(v,i,_),S(v,r,_),d(r,o),g.m(o,null),l=!0},p(v,[_]){const w={};!n&&_&4&&(n=!0,w.visible=v[2],ce(()=>n=!1)),!s&&_&8&&(s=!0,w.message=v[3],ce(()=>s=!1)),e.$set(w),p===(p=f(v))&&g?g.p(v,_):(g.d(1),g=p(v),g&&(g.c(),g.m(o,null))),(!l||_&1&&a!==(a=v[0]===null?"bg-red rounded-xl":"bg-yellow"))&&m(r,"class",a)},i(v){l||(M(e.$$.fragment,v),l=!0)},o(v){F(e.$$.fragment,v),l=!1},d(v){ee(e,v),v&&A(i),v&&A(r),g.d()}}}function ew(t,e,n){let{name:s="Eda"}=e,i,r="",o,a=!1,l="",c=!1;_e.subscribe(k=>o=k);async function u(k){if(k.preventDefault(),i<0){n(3,l="Amount must be higher than 0"),n(2,a=!0),n(0,i=0);return}let C=null;if(o&&(C=o.kids.find(I=>{if(I&&I.name==s)return I})),i){let I=on(i.toString());if(I&&C){let T={amount:I,currentBalance:C.checkingAccount.balance+I,date:Pt(new Date),memo:r};if(C.checkingAccount.transactions=[T,...C.checkingAccount.transactions],C.checkingAccount.balance=C.checkingAccount.balance+I,o){mt(C);let D=v0(o.kids,C);_e.updateKids(D),n(3,l="sent money successfully"),n(2,a=!0),n(4,c=!1)}else n(3,l="something went wrong. reload and try again"),n(2,a=!0);n(0,i=0),n(1,r="")}}else n(3,l="Please put a valid number!"),n(2,a=!0),n(0,i=0),n(1,r="")}function h(k){a=k,n(2,a)}function f(k){l=k,n(3,l)}const p=()=>n(4,c=!c),g=()=>n(4,c=!c);function v(){i=Xe(this.value),n(0,i)}const _=()=>n(0,i=parseFloat(Number.parseFloat(i.toString()).toFixed(2)));function w(){r=this.value,n(1,r)}const b=k=>u(k);return t.$$set=k=>{"name"in k&&n(6,s=k.name)},[i,r,a,l,c,u,s,h,f,p,g,v,_,w,b]}class tw extends Se{constructor(e){super(),Ae(this,e,ew,Z0,ke,{name:6})}}function nw(t){let e,n,s,i,r,o,a,l=t[0]===null?"Numbers only please":"(from checking)",c,u,h,f,p,g,v,_,w;return{c(){e=y("div"),n=y("h3"),n.textContent="Request payment",s=E(),i=y("div"),r=y("input"),o=E(),a=y("label"),c=V(l),u=E(),h=y("label"),h.textContent="Memo",f=E(),p=y("input"),g=E(),v=y("button"),v.textContent="request",m(n,"class","text-3xl p-2"),m(r,"tabindex","0"),m(r,"id","add"),m(r,"type","number"),m(r,"max","0"),m(r,"min","100000"),m(r,"step",".01"),m(r,"placeholder","0.00"),m(r,"class","p-2 outline-none pl-2 col-start-1 row-start-1 bg-pink rounded-md shaded big-shade w-88 right svelte-1vxqpag"),m(a,"for","add"),m(a,"class","text-center italic row-start-1 col-start-2 col-end-4 pt-2"),m(h,"for","memo"),m(h,"class","col-start-1 row-start-2 text-center pt-2"),m(p,"id","memo"),m(p,"type","text"),m(p,"maxlength","50"),m(p,"placeholder","for movie tickets"),m(p,"class","p-2 outline-none row-start-2 col-start-2 col-end-4 bg-amber rounded-md shaded big-shade svelte-1vxqpag"),m(v,"class","bg-green border-black shaded border-2 p-2 pl-4 pr-4 rounded-md col-start-3 row-start-3 mb-1 hover:mb-0 hover:mt-1"),m(i,"class","grid grid-cols-3 grid-row-3 gap-4 p-2"),m(e,"class","border-black border-2 rounded-xl shaded p-2 mb-4 mt-4")},m(b,k){S(b,e,k),d(e,n),d(e,s),d(e,i),d(i,r),he(r,t[0]),d(i,o),d(i,a),d(a,c),d(i,u),d(i,h),d(i,f),d(i,p),he(p,t[1]),d(i,g),d(i,v),_||(w=[U(r,"input",t[10]),U(r,"blur",t[11]),U(p,"input",t[12]),U(v,"click",t[5])],_=!0)},p(b,k){k&1&&Xe(r.value)!==b[0]&&he(r,b[0]),k&1&&l!==(l=b[0]===null?"Numbers only please":"(from checking)")&&ae(c,l),k&2&&p.value!==b[1]&&he(p,b[1])},d(b){b&&A(e),_=!1,we(w)}}}function sw(t){let e,n,s;return{c(){e=y("button"),e.textContent="Request payment",m(e,"class","link underline pt-2 pb-2 svelte-1vxqpag")},m(i,r){S(i,e,r),n||(s=U(e,"click",t[9]),n=!0)},p:le,d(i){i&&A(e),n=!1,s()}}}function iw(t){let e,n,s,i,r,o,a;function l(g){t[7](g)}function c(g){t[8](g)}let u={};t[2]!==void 0&&(u.visible=t[2]),t[3]!==void 0&&(u.message=t[3]),n=new nt({props:u}),re.push(()=>ue(n,"visible",l)),re.push(()=>ue(n,"message",c));function h(g,v){return g[4]?nw:sw}let f=h(t),p=f(t);return{c(){e=y("div"),se(n.$$.fragment),r=E(),p.c(),m(e,"class",o=t[0]===null?"bg-red rounded-xl":"bg-yellow")},m(g,v){S(g,e,v),Z(n,e,null),d(e,r),p.m(e,null),a=!0},p(g,[v]){const _={};!s&&v&4&&(s=!0,_.visible=g[2],ce(()=>s=!1)),!i&&v&8&&(i=!0,_.message=g[3],ce(()=>i=!1)),n.$set(_),f===(f=h(g))&&p?p.p(g,v):(p.d(1),p=f(g),p&&(p.c(),p.m(e,null))),(!a||v&1&&o!==(o=g[0]===null?"bg-red rounded-xl":"bg-yellow"))&&m(e,"class",o)},i(g){a||(M(n.$$.fragment,g),a=!0)},o(g){F(n.$$.fragment,g),a=!1},d(g){g&&A(e),ee(n),p.d()}}}function rw(t,e,n){let{kid:s=null}=e,i,r="",o,a=!1,l="",c=!1;_e.subscribe(w=>o=w);async function u(){if(i<=0){n(3,l="Request more than 0."),n(2,a=!0),n(0,i=0);return}if(s&&(s.pending.push({date:Pt(new Date),amount:i*-1,memo:r}),o)){let w=o.kids.map(k=>k&&s&&k.name==s.name?s:k);const b=Qt(Yt,"parents",o.uid);await kr(b,{kids:w}),_e.updateKids(w),_e.subscribe(k=>o=k),n(3,l=`Requested $${i} from ${s.name}`),n(2,a=!0),n(0,i=0),n(1,r=""),n(4,c=!1)}}function h(w){a=w,n(2,a)}function f(w){l=w,n(3,l)}const p=()=>n(4,c=!c);function g(){i=Xe(this.value),n(0,i)}const v=()=>n(0,i=parseFloat(Number.parseFloat(i.toString()).toFixed(2)));function _(){r=this.value,n(1,r)}return t.$$set=w=>{"kid"in w&&n(6,s=w.kid)},[i,r,a,l,c,u,s,h,f,p,g,v,_]}class ow extends Se{constructor(e){super(),Ae(this,e,rw,iw,ke,{kid:6})}}function yc(t){let e,n,s,i,r,o,a,l,c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[0].checkingAccount.balance)+"",u,h,f,p,g,v,_,w,b,k,C;f=new ow({props:{kid:t[0]}});function I(D){t[3](D)}let T={};return t[0].name!==void 0&&(T.name=t[0].name),g=new tw({props:T}),re.push(()=>ue(g,"name",I)),w=new Qd({props:{kid:t[0]}}),{c(){e=y("div"),n=y("div"),s=y("div"),i=y("div"),r=y("button"),r.textContent="\xD7",o=E(),a=y("h3"),l=V("Current balance: "),u=V(c),h=E(),se(f.$$.fragment),p=E(),se(g.$$.fragment),_=E(),se(w.$$.fragment),m(r,"class","bg-amber leading-6 rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex justify-center px-2 col-start-12 hover:mt-1 hover:mb-0"),m(i,"class","w-full flex flex-col justify-center items-end"),m(a,"class","text-2xl text-center"),m(s,"class","bg-yellow border-black border-2 pb-6 pl-4 pr-4 pt-2 rounded-xl shaded w-full m-4 "),m(n,"class","flex flex-col items-center w-full h-full max-w-xl pb-6"),m(e,"class","absolute flex flex-col items-center w-full h-full bg-black75 top-0 left-0 pb-6")},m(D,N){S(D,e,N),d(e,n),d(n,s),d(s,i),d(i,r),d(s,o),d(s,a),d(a,l),d(a,u),d(s,h),Z(f,s,null),d(s,p),Z(g,s,null),d(s,_),Z(w,s,null),b=!0,k||(C=[U(r,"click",t[2]),Hi(lw.call(null,s)),U(s,"click_outside",t[4])],k=!0)},p(D,N){(!b||N&1)&&c!==(c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(D[0].checkingAccount.balance)+"")&&ae(u,c);const R={};N&1&&(R.kid=D[0]),f.$set(R);const x={};!v&&N&1&&(v=!0,x.name=D[0].name,ce(()=>v=!1)),g.$set(x);const z={};N&1&&(z.kid=D[0]),w.$set(z)},i(D){b||(M(f.$$.fragment,D),M(g.$$.fragment,D),M(w.$$.fragment,D),b=!0)},o(D){F(f.$$.fragment,D),F(g.$$.fragment,D),F(w.$$.fragment,D),b=!1},d(D){D&&A(e),ee(f),ee(g),ee(w),k=!1,we(C)}}}function aw(t){let e,n,s=t[1]&&t[0]&&yc(t);return{c(){s&&s.c(),e=tt()},m(i,r){s&&s.m(i,r),S(i,e,r),n=!0},p(i,[r]){i[1]&&i[0]?s?(s.p(i,r),r&3&&M(s,1)):(s=yc(i),s.c(),M(s,1),s.m(e.parentNode,e)):s&&(lt(),F(s,1,1,()=>{s=null}),ct())},i(i){n||(M(s),n=!0)},o(i){F(s),n=!1},d(i){s&&s.d(i),i&&A(e)}}}function lw(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function cw(t,e,n){window.scroll({top:0,behavior:"smooth"});let{kid:s}=e,{openChecking:i=!1}=e;const r=()=>n(1,i=!1);function o(l){t.$$.not_equal(s.name,l)&&(s.name=l,n(0,s))}const a=()=>n(1,i=!1);return t.$$set=l=>{"kid"in l&&n(0,s=l.kid),"openChecking"in l&&n(1,i=l.openChecking)},[s,i,r,o,a]}class uw extends Se{constructor(e){super(),Ae(this,e,cw,aw,ke,{kid:0,openChecking:1})}}function _c(t,e,n){const s=t.slice();return s[10]=e[n],s}function bc(t){let e,n,s,i,r,o,a,l,c,u=(t[4]?t[4].toFixed(2):"no interest")+"",h,f,p=t[0].savingsAccount.compounded+"",g,v,_=t[0].savingsAccount.compounded=="day"?`, or ~${(t[4]*365).toFixed(2)} per year`:"",w,b,k=t[0].savingsAccount.compounded=="week"?`, or ~${(t[4]*52).toFixed(2)} per year`:"",C,I,T=t[0].savingsAccount.compounded=="month"?`, or ~${(t[4]*12).toFixed(2)} per year`:"",D,N,R,x,z=t[5],J=[];for(let B=0;B<z.length;B+=1)J[B]=wc(_c(t,z,B));return{c(){e=y("div"),n=y("input"),s=E(),i=y("p"),i.textContent="% per",r=E(),o=y("select");for(let B=0;B<J.length;B+=1)J[B].c();a=E(),l=y("p"),c=V("(that's "),h=V(u),f=V(" per "),g=V(p),v=E(),w=V(_),b=E(),C=V(k),I=E(),D=V(T),N=V(`
		)`),m(n,"id","int"),m(n,"type","number"),m(n,"min","0.01"),m(n,"max","100"),m(n,"class","col-start-1 outline-none text-center mr-3 p-2 bg-pink shaded big-shade rounded-md w-2/3 svelte-nalmyc"),m(i,"class","text-center col-start-2 self-center svelte-nalmyc"),m(o,"class","w-13 bg-pink shaded rounded-md p-2 ml-3 col-start-3 svelte-nalmyc"),t[0].savingsAccount.compounded===void 0&&Ct(()=>t[9].call(o)),m(e,"class","line-between mt-4 mb-4 grid grid-col-3 svelte-nalmyc"),m(l,"class","text-center svelte-nalmyc")},m(B,Q){S(B,e,Q),d(e,n),he(n,t[1]),d(e,s),d(e,i),d(e,r),d(e,o);for(let O=0;O<J.length;O+=1)J[O].m(o,null);yi(o,t[0].savingsAccount.compounded),S(B,a,Q),S(B,l,Q),d(l,c),d(l,h),d(l,f),d(l,g),d(l,v),d(l,w),d(l,b),d(l,C),d(l,I),d(l,D),d(l,N),R||(x=[U(n,"input",t[8]),U(o,"change",t[9])],R=!0)},p(B,Q){if(Q&2&&Xe(n.value)!==B[1]&&he(n,B[1]),Q&33){z=B[5];let O;for(O=0;O<z.length;O+=1){const H=_c(B,z,O);J[O]?J[O].p(H,Q):(J[O]=wc(H),J[O].c(),J[O].m(o,null))}for(;O<J.length;O+=1)J[O].d(1);J.length=z.length}Q&33&&yi(o,B[0].savingsAccount.compounded),Q&16&&u!==(u=(B[4]?B[4].toFixed(2):"no interest")+"")&&ae(h,u),Q&1&&p!==(p=B[0].savingsAccount.compounded+"")&&ae(g,p),Q&17&&_!==(_=B[0].savingsAccount.compounded=="day"?`, or ~${(B[4]*365).toFixed(2)} per year`:"")&&ae(w,_),Q&17&&k!==(k=B[0].savingsAccount.compounded=="week"?`, or ~${(B[4]*52).toFixed(2)} per year`:"")&&ae(C,k),Q&17&&T!==(T=B[0].savingsAccount.compounded=="month"?`, or ~${(B[4]*12).toFixed(2)} per year`:"")&&ae(D,T)},d(B){B&&A(e),vn(J,B),B&&A(a),B&&A(l),R=!1,we(x)}}}function hw(t){let e,n=t[10]+"",s;return{c(){e=y("option"),s=V(n),e.__value=t[10],e.value=e.__value,m(e,"class","svelte-nalmyc")},m(i,r){S(i,e,r),d(e,s)},p:le,d(i){i&&A(e)}}}function dw(t){let e,n=t[10]+"",s;return{c(){e=y("option"),s=V(n),e.__value=t[10],e.value=e.__value,m(e,"default",""),m(e,"class","svelte-nalmyc")},m(i,r){S(i,e,r),d(e,s)},p:le,d(i){i&&A(e)}}}function wc(t){let e;function n(r,o){return r[10]==r[0].savingsAccount.compounded?dw:hw}let s=n(t),i=s(t);return{c(){i.c(),e=tt()},m(r,o){i.m(r,o),S(r,e,o)},p(r,o){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&A(e)}}}function fw(t){let e,n,s,i,r,o;function a(h){t[6](h)}function l(h){t[7](h)}let c={};t[2]!==void 0&&(c.message=t[2]),t[3]!==void 0&&(c.visible=t[3]),e=new nt({props:c}),re.push(()=>ue(e,"message",a)),re.push(()=>ue(e,"visible",l));let u=t[0]&&bc(t);return{c(){se(e.$$.fragment),i=E(),u&&u.c(),r=tt()},m(h,f){Z(e,h,f),S(h,i,f),u&&u.m(h,f),S(h,r,f),o=!0},p(h,[f]){const p={};!n&&f&4&&(n=!0,p.message=h[2],ce(()=>n=!1)),!s&&f&8&&(s=!0,p.visible=h[3],ce(()=>s=!1)),e.$set(p),h[0]?u?u.p(h,f):(u=bc(h),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null)},i(h){o||(M(e.$$.fragment,h),o=!0)},o(h){F(e.$$.fragment,h),o=!1},d(h){ee(e,h),h&&A(i),u&&u.d(h),h&&A(r)}}}function pw(t,e,n){let s,{kid:i=null}=e,{amount:r=(i==null?void 0:i.savingsAccount.interest)||0}=e;const o=["day","week","month","year"];let a="",l=!1;function c(p){a=p,n(2,a)}function u(p){l=p,n(3,l)}function h(){r=Xe(this.value),n(1,r)}function f(){i.savingsAccount.compounded=zc(this),n(0,i),n(5,o)}return t.$$set=p=>{"kid"in p&&n(0,i=p.kid),"amount"in p&&n(1,r=p.amount)},t.$$.update=()=>{t.$$.dirty&3&&n(4,s=r*(i.savingsAccount.balance/100))},[i,r,a,l,s,o,c,u,h,f]}class Yd extends Se{constructor(e){super(),Ae(this,e,pw,fw,ke,{kid:0,amount:1})}}function kc(t,e,n){const s=t.slice();return s[18]=e[n],s}function Ec(t){let e,n,s,i,r,o,a,l,c,u,h,f,p=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[0].savingsAccount.balance)+"",g,v,_,w,b,k,C,I;function T(O){t[8](O)}function D(O){t[9](O)}let N={};t[4]!==void 0&&(N.message=t[4]),t[6]!==void 0&&(N.visible=t[6]),e=new nt({props:N}),re.push(()=>ue(e,"message",T)),re.push(()=>ue(e,"visible",D));const R=[gw,mw],x=[];function z(O,H){return O[5]?0:1}_=z(t),w=x[_]=R[_](t);function J(O,H){return O[2]&&O[0].savingsAccount.transactions.length>0?_w:O[2]&&O[0].savingsAccount.transactions.length==0?yw:vw}let B=J(t),Q=B(t);return{c(){se(e.$$.fragment),i=E(),r=y("div"),o=y("div"),a=y("div"),l=y("div"),c=y("button"),c.textContent="\xD7",u=E(),h=y("h3"),f=V("Current balance: "),g=V(p),v=E(),w.c(),b=E(),Q.c(),m(c,"class","bg-amber rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex center px-2"),m(l,"class","w-full flex flex-row justify-end"),m(h,"class","text-2xl text-center"),m(a,"class","bg-yellow border-black border-2 p-2 rounded-xl shaded max-w-3xl w-full m-4"),m(o,"class","center h-full w-full max-w-3xl pt-6 flex flex-col items-center"),m(r,"class","absolute flex flex-col items-center w-full h-full bg-black75 top-0 left-0 ")},m(O,H){Z(e,O,H),S(O,i,H),S(O,r,H),d(r,o),d(o,a),d(a,l),d(l,c),d(a,u),d(a,h),d(h,f),d(h,g),d(a,v),x[_].m(a,null),d(a,b),Q.m(a,null),k=!0,C||(I=[U(c,"click",t[10]),Hi(ww.call(null,a)),U(a,"click_outside",t[17])],C=!0)},p(O,H){const Y={};!n&&H&16&&(n=!0,Y.message=O[4],ce(()=>n=!1)),!s&&H&64&&(s=!0,Y.visible=O[6],ce(()=>s=!1)),e.$set(Y),(!k||H&1)&&p!==(p=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(O[0].savingsAccount.balance)+"")&&ae(g,p);let me=_;_=z(O),_===me?x[_].p(O,H):(lt(),F(x[me],1,1,()=>{x[me]=null}),ct(),w=x[_],w?w.p(O,H):(w=x[_]=R[_](O),w.c()),M(w,1),w.m(a,b)),B===(B=J(O))&&Q?Q.p(O,H):(Q.d(1),Q=B(O),Q&&(Q.c(),Q.m(a,null)))},i(O){k||(M(e.$$.fragment,O),M(w),k=!0)},o(O){F(e.$$.fragment,O),F(w),k=!1},d(O){ee(e,O),O&&A(i),O&&A(r),x[_].d(),Q.d(),C=!1,we(I)}}}function mw(t){let e,n,s;return{c(){e=y("button"),e.textContent="Adjust Interest",m(e,"class","link underline bg-yellow p-2 ph-6 svelte-3mhq43")},m(i,r){S(i,e,r),n||(s=U(e,"click",t[13]),n=!0)},p:le,i:le,o:le,d(i){i&&A(e),n=!1,s()}}}function gw(t){let e,n,s,i,r,o,a,l,c,u,h,f;function p(v){t[12](v)}let g={kid:t[0]};return t[3]!==void 0&&(g.amount=t[3]),o=new Yd({props:g}),re.push(()=>ue(o,"amount",p)),{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("h4"),i.textContent="Adjust Interest",r=E(),se(o.$$.fragment),l=E(),c=y("button"),c.textContent="adjust",m(n,"class","link text-4xl bg-yellow svelte-3mhq43"),m(i,"class","text-xl"),m(c,"class","bg-green rounded-md border-black border-2 shaded mb-1 big-shade p-2 pl-6 pr-6 hover:mb-0 hover:mt-1"),m(e,"class","border-black border-2 p-2 rounded-xl mt-2")},m(v,_){S(v,e,_),d(e,n),d(e,s),d(e,i),d(e,r),Z(o,e,null),d(e,l),d(e,c),u=!0,h||(f=[U(n,"click",t[11]),U(c,"click",t[7])],h=!0)},p(v,_){const w={};_&1&&(w.kid=v[0]),!a&&_&8&&(a=!0,w.amount=v[3],ce(()=>a=!1)),o.$set(w)},i(v){u||(M(o.$$.fragment,v),u=!0)},o(v){F(o.$$.fragment,v),u=!1},d(v){v&&A(e),ee(o),h=!1,we(f)}}}function vw(t){let e,n,s;return{c(){e=y("button"),e.textContent="See previous transactions",m(e,"class","underline bg-yellow link p-2 svelte-3mhq43")},m(i,r){S(i,e,r),n||(s=U(e,"click",t[16]),n=!0)},p:le,d(i){i&&A(e),n=!1,s()}}}function yw(t){let e,n,s,i,r;return{c(){e=y("button"),e.textContent="\xD7",n=E(),s=y("div"),s.innerHTML='<p class="p-4">No Transactions... yet</p>',m(e,"class","bg-yellow link text-4xl svelte-3mhq43"),m(s,"class","p-2 border-black border-2 rounded-xl mt-2")},m(o,a){S(o,e,a),S(o,n,a),S(o,s,a),i||(r=U(e,"click",t[15]),i=!0)},p:le,d(o){o&&A(e),o&&A(n),o&&A(s),i=!1,r()}}}function _w(t){let e,n,s,i,r,o,a,l,c=t[0].savingsAccount.transactions,u=[];for(let h=0;h<c.length;h+=1)u[h]=Ic(kc(t,c,h));return{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("div"),i.innerHTML=`<p class="inline m-2 bold">Amount</p> 
              <p class="inline m-2 bold">Balance</p>`,r=E(),o=y("div");for(let h=0;h<u.length;h+=1)u[h].c();m(n,"class","border-black bg-pink border-2 rounded-md shaded p-2 ph-4 mb-1"),m(i,"class","w-full flex justify-evenly border-black border-b-2 mt-2"),m(o,"class","scroll-content small svelte-3mhq43")},m(h,f){S(h,e,f),d(e,n),d(e,s),d(e,i),d(e,r),d(e,o);for(let p=0;p<u.length;p+=1)u[p].m(o,null);a||(l=U(n,"click",t[14]),a=!0)},p(h,f){if(f&1){c=h[0].savingsAccount.transactions;let p;for(p=0;p<c.length;p+=1){const g=kc(h,c,p);u[p]?u[p].p(g,f):(u[p]=Ic(g),u[p].c(),u[p].m(o,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=c.length}},d(h){h&&A(e),vn(u,h),a=!1,l()}}}function Ic(t){let e,n,s,i=t[18].date+"",r,o,a,l,c=Number(t[18].amount).toFixed(2)+"",u,h,f,p,g=Number(t[18].currentBalance).toFixed(2)+"",v,_,w,b,k,C,I=t[18].memo+"",T,D;return{c(){e=y("div"),n=y("div"),s=y("p"),r=V(i),o=E(),a=y("div"),l=y("p"),u=V(c),f=E(),p=y("p"),v=V(g),w=E(),b=y("p"),k=y("span"),k.textContent="memo:",C=E(),T=V(I),D=E(),m(s,"class",""),m(n,"class","w-full line"),m(l,"class",h="inline m-2 "+(t[18].amount<0&&"text-pink")+" svelte-3mhq43"),m(p,"class",_="inline m-2 "+(t[18].amount<0&&"text-pink")+" svelte-3mhq43"),m(a,"class","w-full flex justify-evenly"),m(k,"class","bold"),m(b,"class","italic"),m(e,"class","border-pink border-b-2")},m(N,R){S(N,e,R),d(e,n),d(n,s),d(s,r),d(e,o),d(e,a),d(a,l),d(l,u),d(a,f),d(a,p),d(p,v),d(e,w),d(e,b),d(b,k),d(b,C),d(b,T),d(e,D)},p(N,R){R&1&&i!==(i=N[18].date+"")&&ae(r,i),R&1&&c!==(c=Number(N[18].amount).toFixed(2)+"")&&ae(u,c),R&1&&h!==(h="inline m-2 "+(N[18].amount<0&&"text-pink")+" svelte-3mhq43")&&m(l,"class",h),R&1&&g!==(g=Number(N[18].currentBalance).toFixed(2)+"")&&ae(v,g),R&1&&_!==(_="inline m-2 "+(N[18].amount<0&&"text-pink")+" svelte-3mhq43")&&m(p,"class",_),R&1&&I!==(I=N[18].memo+"")&&ae(T,I)},d(N){N&&A(e)}}}function bw(t){let e,n,s=t[1]&&t[0]&&Ec(t);return{c(){s&&s.c(),e=tt()},m(i,r){s&&s.m(i,r),S(i,e,r),n=!0},p(i,[r]){i[1]&&i[0]?s?(s.p(i,r),r&3&&M(s,1)):(s=Ec(i),s.c(),M(s,1),s.m(e.parentNode,e)):s&&(lt(),F(s,1,1,()=>{s=null}),ct())},i(i){n||(M(s),n=!0)},o(i){F(s),n=!1},d(i){s&&s.d(i),i&&A(e)}}}function ww(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function kw(t,e,n){let{kid:s}=e,{openSavings:i=!1}=e,r=!1,o=s.savingsAccount.interest||0,a="",l=!1,c;function u(){if(o){let I=on(o.toString());if(I<100)n(4,a="updated interest"),n(0,s.savingsAccount.interest=o,s),mt(s),n(6,c=!0);else return I>100?(n(4,a="please pick a more reasonable interest rate"),n(6,c=!0),n(3,o=0)):(n(4,a="please put a valid number"),n(6,c=!0),n(3,o=0))}else return n(4,a="numbers only please"),n(6,c=!0),n(3,o=0)}function h(I){a=I,n(4,a)}function f(I){c=I,n(6,c)}const p=()=>n(1,i=!1),g=()=>n(5,l=!1);function v(I){o=I,n(3,o)}const _=()=>n(5,l=!0),w=()=>n(2,r=!1),b=()=>n(2,r=!1),k=()=>n(2,r=!0),C=()=>n(1,i=!1);return t.$$set=I=>{"kid"in I&&n(0,s=I.kid),"openSavings"in I&&n(1,i=I.openSavings)},[s,i,r,o,a,l,c,u,h,f,p,g,v,_,w,b,k,C]}class Ew extends Se{constructor(e){super(),Ae(this,e,kw,bw,ke,{kid:0,openSavings:1})}}function Tc(t){let e,n,s,i,r,o,a,l,c,u,h,f,p,g,v,_,w,b,k=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[0].checkingAccount.balance)+"",C,I,T,D,N,R,x,z,J=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t[0].savingsAccount.balance)+"",B,Q,O,H,Y,me,Ce,K;function ye(j){t[7](j)}let Ve={kid:t[0]};t[5]!==void 0&&(Ve.openChecking=t[5]),e=new uw({props:Ve}),re.push(()=>ue(e,"openChecking",ye));function ot(j){t[8](j)}let ft={kid:t[0]};t[4]!==void 0&&(ft.openSavings=t[4]),i=new Ew({props:ft}),re.push(()=>ue(i,"openSavings",ot));function wt(j){t[9](j)}function Ee(j){t[10](j)}let st={};t[2]!==void 0&&(st.visible=t[2]),t[1]!==void 0&&(st.message=t[1]),a=new nt({props:st}),re.push(()=>ue(a,"visible",wt)),re.push(()=>ue(a,"message",Ee));let Ie=t[3]!=t[0].name&&Ac(t);return{c(){se(e.$$.fragment),s=E(),se(i.$$.fragment),o=E(),se(a.$$.fragment),u=E(),h=y("div"),f=y("div"),p=y("input"),g=E(),Ie&&Ie.c(),v=E(),_=y("div"),w=y("div"),b=y("h3"),C=V(k),I=E(),T=y("h6"),T.textContent="Checking Account",D=E(),N=y("button"),N.textContent="Edit",R=E(),x=y("div"),z=y("h3"),B=V(J),Q=E(),O=y("h6"),O.textContent="Savings Account",H=E(),Y=y("button"),Y.textContent="Edit",m(p,"tabindex","0"),m(p,"type","text"),m(p,"id","name"),m(p,"class","w-1/2 italic outline-none inline text-2xl text-center border-black border-b-2 p-2 bg-pink mr-6 ml-12"),m(f,"class","flex flex-col lg:flex-row line p-6 border-black border-b-2 carrot svelte-g9x4pe"),m(b,"class","text-3xl m-2"),m(T,"class","m-2"),m(N,"class","border-black border-2 rounded-md mb-1 bg-yellow shaded p-1 pl-4 pr-4"),m(w,"class","items-center flex flex-col p-4 pt-12 pb-8 pr-6 border-black border-r-2"),m(z,"class","text-3xl m-2"),m(O,"class","m-2"),m(Y,"class","border-black border-2 rounded-md mb-1 bg-green shaded p-1 pl-4 pr-4"),m(x,"class","items-center flex flex-col p-4 pt-12 pb-8"),m(_,"class","grid grid-rows-1 grid-cols-2 gap-4"),m(h,"class","bg-pink rounded-xl border-black border-2 shaded m-2 p-2 mb-4 mt-4 center flex flex-col shadow-md w-90 max-w-xl")},m(j,Re){Z(e,j,Re),S(j,s,Re),Z(i,j,Re),S(j,o,Re),Z(a,j,Re),S(j,u,Re),S(j,h,Re),d(h,f),d(f,p),he(p,t[3]),d(f,g),Ie&&Ie.m(f,null),d(h,v),d(h,_),d(_,w),d(w,b),d(b,C),d(w,I),d(w,T),d(w,D),d(w,N),d(_,R),d(_,x),d(x,z),d(z,B),d(x,Q),d(x,O),d(x,H),d(x,Y),me=!0,Ce||(K=[U(p,"input",t[11]),U(N,"click",t[12]),U(Y,"click",t[13])],Ce=!0)},p(j,Re){const ht={};Re&1&&(ht.kid=j[0]),!n&&Re&32&&(n=!0,ht.openChecking=j[5],ce(()=>n=!1)),e.$set(ht);const en={};Re&1&&(en.kid=j[0]),!r&&Re&16&&(r=!0,en.openSavings=j[4],ce(()=>r=!1)),i.$set(en);const wn={};!l&&Re&4&&(l=!0,wn.visible=j[2],ce(()=>l=!1)),!c&&Re&2&&(c=!0,wn.message=j[1],ce(()=>c=!1)),a.$set(wn),Re&8&&p.value!==j[3]&&he(p,j[3]),j[3]!=j[0].name?Ie?Ie.p(j,Re):(Ie=Ac(j),Ie.c(),Ie.m(f,null)):Ie&&(Ie.d(1),Ie=null),(!me||Re&1)&&k!==(k=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(j[0].checkingAccount.balance)+"")&&ae(C,k),(!me||Re&1)&&J!==(J=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(j[0].savingsAccount.balance)+"")&&ae(B,J)},i(j){me||(M(e.$$.fragment,j),M(i.$$.fragment,j),M(a.$$.fragment,j),me=!0)},o(j){F(e.$$.fragment,j),F(i.$$.fragment,j),F(a.$$.fragment,j),me=!1},d(j){ee(e,j),j&&A(s),ee(i,j),j&&A(o),ee(a,j),j&&A(u),j&&A(h),Ie&&Ie.d(),Ce=!1,we(K)}}}function Ac(t){let e,n,s,i,r;return{c(){e=y("button"),e.textContent="X",n=E(),s=y("button"),s.textContent="Change name",m(s,"class","bg-yellow border-black border-2 rounded-md p-2 pl-4 pr-4 mb-1 shaded hover:mb-0 hover:mt-1")},m(o,a){S(o,e,a),S(o,n,a),S(o,s,a),i||(r=U(s,"click",t[6]),i=!0)},p:le,d(o){o&&A(e),o&&A(n),o&&A(s),i=!1,r()}}}function Iw(t){let e,n,s=t[0]&&Tc(t);return{c(){s&&s.c(),e=tt()},m(i,r){s&&s.m(i,r),S(i,e,r),n=!0},p(i,[r]){i[0]?s?(s.p(i,r),r&1&&M(s,1)):(s=Tc(i),s.c(),M(s,1),s.m(e.parentNode,e)):s&&(lt(),F(s,1,1,()=>{s=null}),ct())},i(i){n||(M(s),n=!0)},o(i){F(s),n=!1},d(i){s&&s.d(i),i&&A(e)}}}function Tw(t,e,n){let{kid:s=null}=e,i;_e.subscribe(b=>i=b);let r="",o=!1,a=s.name,l=!1,c=!1;function u(){i&&(n(0,s.name=a,s),mt(s),n(1,r=`Name changed to ${s.name}`),n(2,o=!0),_e.updateKid(s))}function h(b){c=b,n(5,c)}function f(b){l=b,n(4,l)}function p(b){o=b,n(2,o)}function g(b){r=b,n(1,r)}function v(){a=this.value,n(3,a)}const _=()=>n(5,c=!0),w=()=>n(4,l=!0);return t.$$set=b=>{"kid"in b&&n(0,s=b.kid)},[s,r,o,a,l,c,u,h,f,p,g,v,_,w]}class Aw extends Se{constructor(e){super(),Ae(this,e,Tw,Iw,ke,{kid:0})}}function Sc(t,e,n){const s=t.slice();return s[11]=e[n],s}function Cc(t){let e,n,s,i,r,o,a,l,c,u,h,f,p;function g(k){t[5](k)}function v(k){t[6](k)}let _={};t[1]!==void 0&&(_.message=t[1]),t[2]!==void 0&&(_.visible=t[2]),e=new nt({props:_}),re.push(()=>ue(e,"message",g)),re.push(()=>ue(e,"visible",v));let w=t[4],b=[];for(let k=0;k<w.length;k+=1)b[k]=Dc(Sc(t,w,k));return{c(){se(e.$$.fragment),i=E(),r=y("div"),o=y("input"),a=E(),l=y("p"),l.textContent="per",c=E(),u=y("select");for(let k=0;k<b.length;k+=1)b[k].c();m(o,"type","number"),m(o,"min","0"),m(o,"class","outline-none text-center p-2 bg-green rounded-md shaded big-shade col-start-1 w-2/3"),m(l,"class","p-2 col-start-2 justify-self-center self-center w-full"),m(u,"class","bg-green shaded p-2 rounded-md ml-3 col-start-3"),t[0].checkingAccount.frequency===void 0&&Ct(()=>t[9].call(u)),m(r,"class","line-between mt-4 grid grid-col-3")},m(k,C){Z(e,k,C),S(k,i,C),S(k,r,C),d(r,o),he(o,t[3]),d(r,a),d(r,l),d(r,c),d(r,u);for(let I=0;I<b.length;I+=1)b[I].m(u,null);yi(u,t[0].checkingAccount.frequency),h=!0,f||(p=[U(o,"input",t[7]),U(o,"blur",t[8]),U(u,"change",t[9])],f=!0)},p(k,C){const I={};if(!n&&C&2&&(n=!0,I.message=k[1],ce(()=>n=!1)),!s&&C&4&&(s=!0,I.visible=k[2],ce(()=>s=!1)),e.$set(I),C&8&&Xe(o.value)!==k[3]&&he(o,k[3]),C&16){w=k[4];let T;for(T=0;T<w.length;T+=1){const D=Sc(k,w,T);b[T]?b[T].p(D,C):(b[T]=Dc(D),b[T].c(),b[T].m(u,null))}for(;T<b.length;T+=1)b[T].d(1);b.length=w.length}C&17&&yi(u,k[0].checkingAccount.frequency)},i(k){h||(M(e.$$.fragment,k),h=!0)},o(k){F(e.$$.fragment,k),h=!1},d(k){ee(e,k),k&&A(i),k&&A(r),vn(b,k),f=!1,we(p)}}}function Dc(t){let e,n=t[11]+"",s;return{c(){e=y("option"),s=V(n),e.__value=t[11],e.value=e.__value},m(i,r){S(i,e,r),d(e,s)},p:le,d(i){i&&A(e)}}}function Sw(t){let e,n,s=t[0]&&Cc(t);return{c(){s&&s.c(),e=tt()},m(i,r){s&&s.m(i,r),S(i,e,r),n=!0},p(i,[r]){i[0]?s?(s.p(i,r),r&1&&M(s,1)):(s=Cc(i),s.c(),M(s,1),s.m(e.parentNode,e)):s&&(lt(),F(s,1,1,()=>{s=null}),ct())},i(i){n||(M(s),n=!0)},o(i){F(s),n=!1},d(i){s&&s.d(i),i&&A(e)}}}function Cw(t,e,n){const s=["day","week","month","year"];let{kid:i=null}=e,r="",o=!1,a=i==null?void 0:i.checkingAccount.allowance;function l(p){r=p,n(1,r)}function c(p){o=p,n(2,o)}function u(){a=Xe(this.value),n(3,a)}const h=()=>n(3,a=parseFloat(Number.parseFloat(a.toString()).toFixed(2)));function f(){i.checkingAccount.frequency=zc(this),n(0,i),n(4,s)}return t.$$set=p=>{"kid"in p&&n(0,i=p.kid)},[i,r,o,a,s,l,c,u,h,f]}class Dw extends Se{constructor(e){super(),Ae(this,e,Cw,Sw,ke,{kid:0})}}function Nc(t){let e,n,s,i,r,o,a,l,c,u,h,f,p,g,v,_,w,b,k,C,I,T,D,N,R,x,z,J,B,Q,O,H,Y,me,Ce,K,ye,Ve,ot,ft,wt;return T=new Dw({props:{kid:t[4]}}),Ce=new Yd({props:{kid:t[4]}}),{c(){e=y("div"),n=y("div"),s=y("div"),i=y("button"),i.textContent="\xD7",r=E(),o=y("div"),a=y("label"),a.textContent="Kid's name",l=E(),c=y("input"),u=E(),h=y("div"),f=y("h2"),f.textContent="Checking Account",p=E(),g=y("div"),v=y("label"),v.textContent="Initial Amount",_=E(),w=y("input"),b=E(),k=y("h3"),k.textContent="set up allowance (optional)",C=E(),I=y("div"),se(T.$$.fragment),D=E(),N=y("div"),R=y("h2"),R.textContent="Savings Account",x=E(),z=y("div"),J=y("label"),J.textContent="Initial Amount",B=E(),Q=y("input"),O=E(),H=y("div"),H.innerHTML='<h3 class="text-xl p-4 col-start-1 col-span-2 row-start-2">set up interest (optional)</h3>',Y=E(),me=y("div"),se(Ce.$$.fragment),K=E(),ye=y("div"),Ve=y("button"),Ve.textContent="Create new Account",m(i,"class","bg-amber rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex center px-2 hover:mb-0 hover:mt-1 action:mb-0 action:mt-1"),m(s,"class","m-4 p-4 flex flex-row items-center justify-end "),m(a,"for","name"),m(a,"class","p-2 w-13 col-start-1 justify-self-center self-center"),m(c,"type","text"),m(c,"class","bg-pink w-23 rounded-md shaded middle big-shade m-4 outline-none p-2 col-start-2"),m(o,"class","line border-black border-2 shaded rounded-xl mb-4 w-full grid grid-cols-2"),m(f,"class","text-3xl pl-2 pr-2 pt-2 col-start-1 col-span-2 rows-start-1"),m(v,"for","initialChecking"),m(v,"class","col-start-1 justify-self-center self-center h-fit"),m(w,"type","number"),m(w,"class","bg-green rounded-md shaded big-shade p-2 outline-none m-4 col-start-2"),m(g,"class","grid grid-cols-2"),m(k,"class","text-xl col-start-1 col-span-2 row-start-3 p-2 self-center"),m(I,"class","col-start-1 col-span-2 row-start-4"),m(h,"class","border-black border-2 shaded rounded-xl mb-4 w-full flex flex-col p-2"),m(R,"class","text-3xl pl-2 pt-2 pr-2"),m(J,"for","initialChecking"),m(J,"class","w-13 m-4"),m(Q,"type","number"),m(Q,"class","bg-pink w-23 m-4 rounded-md shaded big-shade p-2 col-start-2 row-start-1 w-1/2 outline-none"),m(me,"class","p-2 mb-0 col-start-1 col-span-2 row-start-3 row-end-5"),m(N,"class","border-black border-2 shaded rounded-xl mb-4 w-full flex flex-col p-2 "),m(Ve,"class","text-black rounded-md bg-amber border-black border-2 mb-1 shaded big-shade p-2 pl-4 pr-4 hover:mb-0 hover:mt-1"),m(ye,"class","center justify-end w-full"),m(n,"class","bg-yellow border-black border-2 pb-6 pl-4 pr-4 pt-2 rounded-xl max-w-xl shaded w-full m-4 "),m(e,"class","absolute flex flex-col items-center w-full h-full bg-black75 top-0 left-0")},m(Ee,st){S(Ee,e,st),d(e,n),d(n,s),d(s,i),d(n,r),d(n,o),d(o,a),d(o,l),d(o,c),he(c,t[4].name),d(n,u),d(n,h),d(h,f),d(h,p),d(h,g),d(g,v),d(g,_),d(g,w),he(w,t[4].checkingAccount.balance),d(h,b),d(h,k),d(h,C),d(h,I),Z(T,I,null),d(n,D),d(n,N),d(N,R),d(N,x),d(N,z),d(z,J),d(z,B),d(z,Q),he(Q,t[4].savingsAccount.balance),d(N,O),d(N,H),d(N,Y),d(N,me),Z(Ce,me,null),d(n,K),d(n,ye),d(ye,Ve),ot=!0,ft||(wt=[U(i,"click",t[8]),U(c,"input",t[9]),U(w,"input",t[10]),U(Q,"input",t[11]),U(Ve,"click",t[5]),Hi(Rw.call(null,n)),U(n,"click_outside",t[12])],ft=!0)},p(Ee,st){st&16&&c.value!==Ee[4].name&&he(c,Ee[4].name),st&16&&Xe(w.value)!==Ee[4].checkingAccount.balance&&he(w,Ee[4].checkingAccount.balance);const Ie={};st&16&&(Ie.kid=Ee[4]),T.$set(Ie),st&16&&Xe(Q.value)!==Ee[4].savingsAccount.balance&&he(Q,Ee[4].savingsAccount.balance);const j={};st&16&&(j.kid=Ee[4]),Ce.$set(j)},i(Ee){ot||(M(T.$$.fragment,Ee),M(Ce.$$.fragment,Ee),ot=!0)},o(Ee){F(T.$$.fragment,Ee),F(Ce.$$.fragment,Ee),ot=!1},d(Ee){Ee&&A(e),ee(T),ee(Ce),ft=!1,we(wt)}}}function Nw(t){let e,n,s,i,r,o;function a(h){t[6](h)}function l(h){t[7](h)}let c={};t[2]!==void 0&&(c.visible=t[2]),t[1]!==void 0&&(c.message=t[1]),e=new nt({props:c}),re.push(()=>ue(e,"visible",a)),re.push(()=>ue(e,"message",l));let u=t[4]&&Nc(t);return{c(){se(e.$$.fragment),i=E(),u&&u.c(),r=tt()},m(h,f){Z(e,h,f),S(h,i,f),u&&u.m(h,f),S(h,r,f),o=!0},p(h,[f]){const p={};!n&&f&4&&(n=!0,p.visible=h[2],ce(()=>n=!1)),!s&&f&2&&(s=!0,p.message=h[1],ce(()=>s=!1)),e.$set(p),h[4]?u?(u.p(h,f),f&16&&M(u,1)):(u=Nc(h),u.c(),M(u,1),u.m(r.parentNode,r)):u&&(lt(),F(u,1,1,()=>{u=null}),ct())},i(h){o||(M(e.$$.fragment,h),M(u),o=!0)},o(h){F(e.$$.fragment,h),F(u),o=!1},d(h){ee(e,h),h&&A(i),u&&u.d(h),h&&A(r)}}}function Rw(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function Ow(t,e,n){let{value:s=!0}=e;window.scroll({top:0,behavior:"smooth"});let i="",r=!1,o=!0,a=null;_e.subscribe(w=>a=w),console.log(a.kids.length);let l={name:"",dateOpened:new Date().valueOf(),kid:a.kids.length>0?a.kids[a.kids.length-1].kid+1:1,isParent:!1,uid:a.uid||"",checkingAccount:{balance:0,allowance:0,frequency:"week",transactions:[]},savingsAccount:{balance:0,interest:0,compounded:"week",transactions:[]},pending:[]};async function c(w){if(w.preventDefault(),l&&l.name.length<=1){n(1,i="Name is too short!"),n(2,r=!0),n(4,l.name="",l),n(4,l.kid=a.kids.length+1,l);return}if(l&&(n(4,l.checkingAccount.balance=on(l.checkingAccount.balance.toString())||0,l),n(4,l.checkingAccount.allowance=on(l.checkingAccount.allowance.toString())||0,l),n(4,l.savingsAccount.balance=on(l.savingsAccount.balance.toString())||0,l),n(4,l.savingsAccount.interest=on(l.savingsAccount.interest.toString())||0,l),a&&a.uid)){a.kids.push(l);const b=Qt(Yt,"parents",a.uid);await kr(b,a),_e.set(a),n(0,s=!1)}}function u(w){r=w,n(2,r)}function h(w){i=w,n(1,i)}const f=()=>n(0,s=!1);function p(){l.name=this.value,n(4,l)}function g(){l.checkingAccount.balance=Xe(this.value),n(4,l)}function v(){l.savingsAccount.balance=Xe(this.value),n(4,l)}const _=()=>n(3,o=!1);return t.$$set=w=>{"value"in w&&n(0,s=w.value)},[s,i,r,o,l,c,u,h,f,p,g,v,_]}class Lw extends Se{constructor(e){super(),Ae(this,e,Ow,Nw,ke,{value:0})}}function Rc(t,e,n){const s=t.slice();return s[11]=e[n],s}function Oc(t){let e,n,s,i=t[0],r=[];for(let o=0;o<i.length;o+=1)r[o]=Lc(Rc(t,i,o));return{c(){e=y("div"),n=y("h2"),n.textContent="Requests",s=E();for(let o=0;o<r.length;o+=1)r[o].c();m(n,"class","text-2xl pb-4"),m(e,"class","bg-yellow border-black border-2 shaded rounded-xl m-2 p-2")},m(o,a){S(o,e,a),d(e,n),d(e,s);for(let l=0;l<r.length;l+=1)r[l].m(e,null)},p(o,a){if(a&25){i=o[0];let l;for(l=0;l<i.length;l+=1){const c=Rc(o,i,l);r[l]?r[l].p(c,a):(r[l]=Lc(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},d(o){o&&A(e),vn(r,o)}}}function Lc(t){let e,n,s=t[11].date+"",i,r,o,a,l=t[11].name+"",c,u,h,f=Number(t[11].amount).toFixed(2)+"",p,g,v,_,w,b,k=t[11].memo+"",C,I,T,D,N,R,x,z,J;function B(){return t[8](t[11])}function Q(){return t[9](t[11])}return{c(){e=y("div"),n=y("p"),i=V(s),r=E(),o=y("p"),a=V("from: "),c=V(l),u=E(),h=y("p"),p=V(f),g=E(),v=y("div"),_=y("p"),w=y("span"),w.textContent="memo:",b=E(),C=V(k),I=E(),T=y("div"),D=y("button"),D.textContent="Accept",N=E(),R=y("button"),R.textContent="Deny",x=E(),m(n,"class","p-2"),m(o,"class","p-2"),m(h,"class","p-2 inline m-2"),m(e,"class","w-full flex justify-evenly"),m(w,"class","bold"),m(_,"class","italic pl-8"),m(v,"class","w-full line border-black mt-4 mb-4"),m(D,"class","text-black bg-green p-2 pr-6 pl-6 rounded-md border-black border-2 shaded mb-1"),m(R,"class","text-black bg-pink p-2 pr-6 pl-6 rounded-md mb-1 border-black border-2 shaded"),m(T,"class","flex justify-evenly border-b-2 p-2 mb-4")},m(O,H){S(O,e,H),d(e,n),d(n,i),d(e,r),d(e,o),d(o,a),d(o,c),d(e,u),d(e,h),d(h,p),S(O,g,H),S(O,v,H),d(v,_),d(_,w),d(_,b),d(_,C),S(O,I,H),S(O,T,H),d(T,D),d(T,N),d(T,R),d(T,x),z||(J=[U(D,"click",B),U(R,"click",Q)],z=!0)},p(O,H){t=O,H&1&&s!==(s=t[11].date+"")&&ae(i,s),H&1&&l!==(l=t[11].name+"")&&ae(c,l),H&1&&f!==(f=Number(t[11].amount).toFixed(2)+"")&&ae(p,f),H&1&&k!==(k=t[11].memo+"")&&ae(C,k)},d(O){O&&A(e),O&&A(g),O&&A(v),O&&A(I),O&&A(T),z=!1,we(J)}}}function Pw(t){let e,n,s,i,r,o;function a(h){t[6](h)}function l(h){t[7](h)}let c={};t[2]!==void 0&&(c.message=t[2]),t[1]!==void 0&&(c.visible=t[1]),n=new nt({props:c}),re.push(()=>ue(n,"message",a)),re.push(()=>ue(n,"visible",l));let u=t[0]&&t[0].length>0&&Oc(t);return{c(){e=y("div"),se(n.$$.fragment),r=E(),u&&u.c()},m(h,f){S(h,e,f),Z(n,e,null),d(e,r),u&&u.m(e,null),o=!0},p(h,[f]){const p={};!s&&f&4&&(s=!0,p.message=h[2],ce(()=>s=!1)),!i&&f&2&&(i=!0,p.visible=h[1],ce(()=>i=!1)),n.$set(p),h[0]&&h[0].length>0?u?u.p(h,f):(u=Oc(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(h){o||(M(n.$$.fragment,h),o=!0)},o(h){F(n.$$.fragment,h),o=!1},d(h){h&&A(e),ee(n),u&&u.d()}}}function Mw(t,e,n){let{user:s=null}=e,i=[],r=!1,o="";function a(){s&&s.kids.forEach(g=>{g.pending.filter(v=>{if(v.for&&v.for=="parent"){let _={kid:g.kid,name:g.name,...v};return i.push(_),_}})})}s&&a();function l(g){let v=null,_=s.kids.find(b=>b.kid==g.kid),w=_.pending.filter(b=>{if(b.amount==g.amount&&b.date==g.date)v=b;else return b});v?(delete v.for,v.currentBalance=_.checkingAccount.balance+v.amount,_.checkingAccount.balance=v.currentBalance,_.pending=w,_.checkingAccount.transactions=[v,..._.checkingAccount.transactions],mt(_),_e.updateKid(_),n(0,i=w),n(2,o="updated successfully"),n(1,r=!0)):(n(2,o="whoops something went wrong. reload and try again"),n(1,r=!0))}function c(g){let v=s.kids.find(_=>_.kid==g.kid);if(v){let _=v.pending.filter(b=>b.memo!=g.memo&&b.amount!=g.amount);v.pending=_,n(5,s.kids=s.kids.filter(b=>b.name==v.name?v:b),s),p0(s)&&(n(2,o="request denied!"),n(0,i=_),n(1,r=!0)),_e.set(s)}else n(2,o="reload the page and try again"),n(1,r=!0)}function u(g){o=g,n(2,o)}function h(g){r=g,n(1,r)}const f=g=>l(g),p=g=>c(g);return t.$$set=g=>{"user"in g&&n(5,s=g.user)},[i,r,o,l,c,s,u,h,f,p]}class Uw extends Se{constructor(e){super(),Ae(this,e,Mw,Pw,ke,{user:5})}}function Pc(t,e,n){const s=t.slice();return s[5]=e[n],s}function Mc(t){let e,n,s;function i(o){t[2](o)}let r={};return t[1]!==void 0&&(r.value=t[1]),e=new Lw({props:r}),re.push(()=>ue(e,"value",i)),{c(){se(e.$$.fragment)},m(o,a){Z(e,o,a),s=!0},p(o,a){const l={};!n&&a&2&&(n=!0,l.value=o[1],ce(()=>n=!1)),e.$set(l)},i(o){s||(M(e.$$.fragment,o),s=!0)},o(o){F(e.$$.fragment,o),s=!1},d(o){ee(e,o)}}}function xw(t){let e,n,s,i,r,o,a,l,c,u,h;e=new Uw({props:{user:t[0]}});let f=t[0].kids,p=[];for(let v=0;v<f.length;v+=1)p[v]=Uc(Pc(t,f,v));const g=v=>F(p[v],1,1,()=>{p[v]=null});return l=new Oa({}),{c(){se(e.$$.fragment),n=E();for(let v=0;v<p.length;v+=1)p[v].c();s=E(),i=y("div"),r=y("button"),r.textContent="Create another account",o=E(),a=y("div"),se(l.$$.fragment),m(r,"class","border-black border-2 rounded-md shaded mb-1 p-2 pl-6 pr-6 bg-yellow hover:mb-0 hover:mt-1"),m(i,"class","bg-pink border-black border-2 shaded rounded-xl m-2 p-2 pt-8 pb-8 mb-4 mt-4 flex flex-col items-center"),m(a,"class","flex flex-col items-center")},m(v,_){Z(e,v,_),S(v,n,_);for(let w=0;w<p.length;w+=1)p[w].m(v,_);S(v,s,_),S(v,i,_),d(i,r),S(v,o,_),S(v,a,_),Z(l,a,null),c=!0,u||(h=U(r,"click",t[4]),u=!0)},p(v,_){const w={};if(_&1&&(w.user=v[0]),e.$set(w),_&1){f=v[0].kids;let b;for(b=0;b<f.length;b+=1){const k=Pc(v,f,b);p[b]?(p[b].p(k,_),M(p[b],1)):(p[b]=Uc(k),p[b].c(),M(p[b],1),p[b].m(s.parentNode,s))}for(lt(),b=f.length;b<p.length;b+=1)g(b);ct()}},i(v){if(!c){M(e.$$.fragment,v);for(let _=0;_<f.length;_+=1)M(p[_]);M(l.$$.fragment,v),c=!0}},o(v){F(e.$$.fragment,v),p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)F(p[_]);F(l.$$.fragment,v),c=!1},d(v){ee(e,v),v&&A(n),vn(p,v),v&&A(s),v&&A(i),v&&A(o),v&&A(a),ee(l),u=!1,h()}}}function Fw(t){let e,n,s,i,r,o,a,l,c,u;return a=new Oa({}),{c(){e=y("div"),n=y("p"),n.textContent="No kids accounts set up yet.",s=E(),i=y("button"),i.textContent="Create now",r=E(),o=y("div"),se(a.$$.fragment),m(n,"class","mt-4 mb-4"),m(i,"class","bg-yellow rounded-md border-black border-2 shaded big-shade mb-1 p-2 pl-4 pr-4 hover:mb-0 hover:mt-1"),m(e,"class","center col p2"),m(o,"class","center mt-6")},m(h,f){S(h,e,f),d(e,n),d(e,s),d(e,i),S(h,r,f),S(h,o,f),Z(a,o,null),l=!0,c||(u=U(i,"click",t[3]),c=!0)},p:le,i(h){l||(M(a.$$.fragment,h),l=!0)},o(h){F(a.$$.fragment,h),l=!1},d(h){h&&A(e),h&&A(r),h&&A(o),ee(a),c=!1,u()}}}function Uc(t){let e,n,s;return n=new Aw({props:{kid:t[5]}}),{c(){e=y("div"),se(n.$$.fragment),m(e,"class","border-b-2 border-yellow")},m(i,r){S(i,e,r),Z(n,e,null),s=!0},p(i,r){const o={};r&1&&(o.kid=i[5]),n.$set(o)},i(i){s||(M(n.$$.fragment,i),s=!0)},o(i){F(n.$$.fragment,i),s=!1},d(i){i&&A(e),ee(n)}}}function Vw(t){let e,n,s,i,r,o,a,l,c,u,h,f,p,g=t[1]&&Mc(t);const v=[Fw,xw],_=[];function w(b,k){return b[0]&&b[0].kids.length==0?0:b[0]?1:-1}return~(h=w(t))&&(f=_[h]=v[h](t)),{c(){e=y("div"),g&&g.c(),n=E(),s=y("div"),i=y("h3"),r=V(`Welcome,
			`),o=y("p"),a=V("parental unit "),l=y("img"),u=E(),f&&f.c(),ef(l.src,c=Bw)||m(l,"src",c),m(l,"class","h-5 inline middle"),m(l,"alt","generic user icon"),m(o,"class","underline"),m(i,"class","m-6"),m(s,"class","p-2 max-w-2xl"),m(e,"class","bg-green cover scroll-content flex flex-col items-center")},m(b,k){S(b,e,k),g&&g.m(e,null),d(e,n),d(e,s),d(s,i),d(i,r),d(i,o),d(o,a),d(o,l),d(s,u),~h&&_[h].m(s,null),p=!0},p(b,[k]){b[1]?g?(g.p(b,k),k&2&&M(g,1)):(g=Mc(b),g.c(),M(g,1),g.m(e,n)):g&&(lt(),F(g,1,1,()=>{g=null}),ct());let C=h;h=w(b),h===C?~h&&_[h].p(b,k):(f&&(lt(),F(_[C],1,1,()=>{_[C]=null}),ct()),~h?(f=_[h],f?f.p(b,k):(f=_[h]=v[h](b),f.c()),M(f,1),f.m(s,null)):f=null)},i(b){p||(M(g),M(f),p=!0)},o(b){F(g),F(f),p=!1},d(b){b&&A(e),g&&g.d(),~h&&_[h].d()}}}let Bw="/images/user-circle.svg";function $w(t,e,n){let s=null;_e.subscribe(l=>n(0,s=l)),s==null&&d0();let i=!1;window.scroll(0,0);function r(l){i=l,n(1,i)}return[s,i,r,()=>n(1,i=!i),()=>n(1,i=!i)]}class jw extends Se{constructor(e){super(),Ae(this,e,$w,Vw,ke,{})}}function qw(t){let e,n,s,i,r,o,a,l,c,u,h,f,p,g,v,_,w,b,k,C,I,T,D,N,R,x,z,J,B;function Q(Y){t[6](Y)}function O(Y){t[7](Y)}let H={};return t[4]!==void 0&&(H.visible=t[4]),t[3]!==void 0&&(H.message=t[3]),e=new nt({props:H}),re.push(()=>ue(e,"visible",Q)),re.push(()=>ue(e,"message",O)),{c(){se(e.$$.fragment),i=E(),r=y("div"),o=y("div"),a=y("form"),l=y("label"),l.textContent="E-mail",c=E(),u=y("input"),h=E(),f=y("label"),f.textContent="Password",p=E(),g=y("input"),v=E(),_=y("label"),_.textContent="Confirm password",w=E(),b=y("input"),k=E(),C=y("label"),C.innerHTML="Send email validation? <sup>*</sup>",I=E(),T=y("input"),D=E(),N=y("button"),N.textContent="Register",R=E(),x=y("p"),x.textContent=`*if you verify your email, you can reset your password should you forget
      it.`,m(l,"for","email"),m(l,"class","inline-block col-start-1 col-span-2 row-start-2"),m(u,"type","email"),m(u,"autocapitalize","off"),m(u,"class","p-2 rounded-md col-start-2 col-span-3 row-start-2 bg-pink shaded big-shade w-90 outline-none"),m(u,"name","email"),m(u,"id","email"),u.required=!0,m(f,"for","password"),m(f,"class","inline-block col-start-1 col-span-2 row-start-3"),m(g,"type","password"),m(g,"autocapitalize","off"),m(g,"minlength","6"),m(g,"maxlength","32"),m(g,"class","p-2 rounded-md col-start-2 col-span-3 row-start-3 bg-pink shaded big-shade stretch outline-none"),m(g,"name","password"),m(g,"id","password"),g.required=!0,m(_,"for","confirmPassword"),m(_,"class","row-start-4 col-start-1 col-span-2"),m(b,"type","password"),m(b,"class","p-2 rounded-md col-start-2 col-span-3 row-start-4 bg-pink shaded big-shade stretch outline-none"),m(b,"name","confirmPassword"),m(b,"id","confirmPassword"),b.required=!0,m(C,"for","checkbox"),m(C,"class","row-start-5 col-start-1 col-span-2"),m(T,"type","checkbox"),m(T,"class","row-start-5 col-start-2 col-span-1 outline-none"),m(N,"class","p-2 pl-6 pr-6 rounded-md outline-none border-black border-2 mb-1 bg-yellow shaded big-shade row-start-6 col-start-1 col-span-2 hover:mb-0 hover:mt-1"),m(N,"type","submit"),m(a,"class","grid grid-row-6 grid-col-6 gap-4 stretch"),m(x,"class","p-6"),m(o,"class","bg-amber rounded-xl p-2 pt-4 mb-8 w-90"),m(r,"class","center col w-full")},m(Y,me){Z(e,Y,me),S(Y,i,me),S(Y,r,me),d(r,o),d(o,a),d(a,l),d(a,c),d(a,u),he(u,t[0]),d(a,h),d(a,f),d(a,p),d(a,g),he(g,t[1]),d(a,v),d(a,_),d(a,w),d(a,b),he(b,t[2]),d(a,k),d(a,C),d(a,I),d(a,T),d(a,D),d(a,N),d(o,R),d(o,x),z=!0,J||(B=[U(u,"input",t[8]),U(g,"input",t[9]),U(b,"input",t[10]),U(a,"submit",Kc(t[5]))],J=!0)},p(Y,[me]){const Ce={};!n&&me&16&&(n=!0,Ce.visible=Y[4],ce(()=>n=!1)),!s&&me&8&&(s=!0,Ce.message=Y[3],ce(()=>s=!1)),e.$set(Ce),me&1&&u.value!==Y[0]&&he(u,Y[0]),me&2&&g.value!==Y[1]&&he(g,Y[1]),me&4&&b.value!==Y[2]&&he(b,Y[2])},i(Y){z||(M(e.$$.fragment,Y),z=!0)},o(Y){F(e.$$.fragment,Y),z=!1},d(Y){ee(e,Y),Y&&A(i),Y&&A(r),J=!1,we(B)}}}let Hw=!0;function Kw(t,e,n){let s="",i="",r="",o="",a=!1;const l=async g=>{if(g.preventDefault(),s&&i)try{let v=await Fm(At,s,i);const _=Qt(Yt,"parents",v.user.uid);Hd(_,{isParent:!0,kids:[],uid:v.user.uid}),Hw&&(Vm(At.currentUser),n(3,o="email sent! now loggin in"),n(4,a=!0)),setTimeout(()=>{_e.set({isParent:!0,kids:[],uid:v.user.uid})},5e3)}catch(v){v.code=="auth/email-already-in-use"&&n(3,o="This email address already has an account!"),n(4,a=!0),n(0,s=""),n(1,i="")}else n(3,o="Make sure both the email and password fields are set"),n(4,a=!0)};function c(g){a=g,n(4,a)}function u(g){o=g,n(3,o)}function h(){s=this.value,n(0,s)}function f(){i=this.value,n(1,i)}function p(){r=this.value,n(2,r)}return[s,i,r,o,a,l,c,u,h,f,p]}class zw extends Se{constructor(e){super(),Ae(this,e,Kw,qw,ke,{})}}function Gw(t){let e,n,s,i,r,o,a,l,c;return{c(){e=y("label"),n=y("input"),s=V("Parent login"),i=E(),r=y("label"),o=y("input"),a=V("Kid login"),m(n,"type","radio"),m(n,"class","hidden svelte-3d1du"),n.__value=!0,n.value=n.__value,t[10][0].push(n),m(e,"class","clickable col-start-1 col-end-3 row-start-1 mb-4"),m(o,"type","radio"),m(o,"class","hidden svelte-3d1du"),o.__value=!1,o.value=o.__value,t[10][0].push(o),m(r,"class","border-black border-b-2 italic selected clickable col-start-3 col-end-6 row-start-1 mb-4 svelte-3d1du")},m(u,h){S(u,e,h),d(e,n),n.checked=n.__value===t[6],d(e,s),S(u,i,h),S(u,r,h),d(r,o),o.checked=o.__value===t[6],d(r,a),l||(c=[U(n,"change",t[12]),U(o,"change",t[13])],l=!0)},p(u,h){h&64&&(n.checked=n.__value===u[6]),h&64&&(o.checked=o.__value===u[6])},d(u){u&&A(e),t[10][0].splice(t[10][0].indexOf(n),1),u&&A(i),u&&A(r),t[10][0].splice(t[10][0].indexOf(o),1),l=!1,we(c)}}}function Ww(t){let e,n,s,i,r,o,a,l,c;return{c(){e=y("label"),n=y("input"),s=V("Parent login"),i=E(),r=y("label"),o=y("input"),a=V("Kid login"),m(n,"type","radio"),m(n,"class","hidden svelte-3d1du"),n.__value=!0,n.value=n.__value,t[10][0].push(n),m(e,"class","border-black border-b-2 italic selected clickable col-start-1 col-end-3 row-start-1 mb-4 svelte-3d1du"),m(o,"type","radio"),m(o,"class","hidden svelte-3d1du"),o.__value=!1,o.value=o.__value,t[10][0].push(o),m(r,"class","clickable col-start-3 col-end-6 row-start-1 mb-4")},m(u,h){S(u,e,h),d(e,n),n.checked=n.__value===t[6],d(e,s),S(u,i,h),S(u,r,h),d(r,o),o.checked=o.__value===t[6],d(r,a),l||(c=[U(n,"change",t[9]),U(o,"change",t[11])],l=!0)},p(u,h){h&64&&(n.checked=n.__value===u[6]),h&64&&(o.checked=o.__value===u[6])},d(u){u&&A(e),t[10][0].splice(t[10][0].indexOf(n),1),u&&A(i),u&&A(r),t[10][0].splice(t[10][0].indexOf(o),1),l=!1,we(c)}}}function xc(t){let e,n,s,i,r;return{c(){e=y("label"),e.textContent="Kid's name",n=E(),s=y("input"),m(e,"for","name"),m(e,"class","inline-block col-start-1 row-start-4"),m(s,"type","text"),m(s,"minlength","1"),m(s,"maxlength","32"),m(s,"class","p-2 rounded-md col-start-2 col-end-6 row-start-4 bg-pink shaded big-shade w-90 outline-none svelte-3d1du"),m(s,"name","name"),m(s,"id","name"),s.required=!0},m(o,a){S(o,e,a),S(o,n,a),S(o,s,a),he(s,t[5]),i||(r=U(s,"input",t[16]),i=!0)},p(o,a){a&32&&s.value!==o[5]&&he(s,o[5])},d(o){o&&A(e),o&&A(n),o&&A(s),i=!1,r()}}}function Qw(t){let e,n,s,i,r,o,a,l,c,u,h,f,p,g,v,_,w,b,k,C,I,T,D,N,R,x;function z(K){t[8](K)}let J={message:t[0]};t[2]!==void 0&&(J.boxOpen=t[2]),e=new Wd({props:J}),re.push(()=>ue(e,"boxOpen",z));function B(K,ye){return K[6]?Ww:Gw}let Q=B(t),O=Q(t),H=!t[6]&&xc(t);function Y(K){t[17](K)}function me(K){t[18](K)}let Ce={};return t[1]!==void 0&&(Ce.visible=t[1]),t[0]!==void 0&&(Ce.message=t[0]),I=new nt({props:Ce}),re.push(()=>ue(I,"visible",Y)),re.push(()=>ue(I,"message",me)),{c(){se(e.$$.fragment),s=E(),i=y("div"),r=y("div"),o=y("form"),O.c(),a=E(),l=y("label"),l.textContent="E-mail",c=E(),u=y("input"),h=E(),f=y("label"),f.textContent="Password",p=E(),g=y("input"),v=E(),H&&H.c(),_=E(),w=y("button"),w.textContent="Login",b=E(),k=y("div"),k.innerHTML='<a href="/reset-password" class="p-2 underline">Forgot password?</a>',C=E(),se(I.$$.fragment),m(l,"for","email"),m(l,"class","inline-block col-start-1 col-end-3 row-start-2"),m(u,"type","email"),m(u,"autocapitalize","off"),m(u,"class","p-2 rounded-md col-start-2 col-end-6 row-start-2 bg-pink shaded big-shade w-90 outline-none svelte-3d1du"),m(u,"name","email"),m(u,"id","email"),u.required=!0,m(f,"for","password"),m(f,"class","inline-block col-start-1 row-start-3"),m(g,"type","password"),m(g,"autocapitalize","off"),m(g,"minlength","6"),m(g,"maxlength","32"),m(g,"class","p-2 rounded-md col-start-2 col-end-6 row-start-3 bg-pink shaded big-shade w-90 outline-none svelte-3d1du"),m(g,"name","password"),m(g,"id","password"),g.required=!0,m(w,"type","submit"),m(w,"class","p-2 row-start-5 col-start-1 col-end-3 rounded-md border-black mb-1 border-2 bg-yellow shaded single-line pl-6 pr-6 mr-4 hover:mb-0 hover:mt-1"),m(k,"class","col-start-3 row-start-5 flex justify-center items-center"),m(o,"class","grid grid-row-5 grid-col-6 gap-4 w-full stretch"),m(r,"id","login"),m(r,"class","bg-amber rounded-r-xl rounded-b-xl p-2 pt-8 mb-8"),m(i,"class","center col w-full")},m(K,ye){Z(e,K,ye),S(K,s,ye),S(K,i,ye),d(i,r),d(r,o),O.m(o,null),d(o,a),d(o,l),d(o,c),d(o,u),he(u,t[3]),d(o,h),d(o,f),d(o,p),d(o,g),he(g,t[4]),d(o,v),H&&H.m(o,null),d(o,_),d(o,w),d(o,b),d(o,k),S(K,C,ye),Z(I,K,ye),N=!0,R||(x=[U(u,"input",t[14]),U(g,"input",t[15]),U(o,"submit",Kc(t[7]))],R=!0)},p(K,[ye]){const Ve={};ye&1&&(Ve.message=K[0]),!n&&ye&4&&(n=!0,Ve.boxOpen=K[2],ce(()=>n=!1)),e.$set(Ve),Q===(Q=B(K))&&O?O.p(K,ye):(O.d(1),O=Q(K),O&&(O.c(),O.m(o,a))),ye&8&&u.value!==K[3]&&he(u,K[3]),ye&16&&g.value!==K[4]&&he(g,K[4]),K[6]?H&&(H.d(1),H=null):H?H.p(K,ye):(H=xc(K),H.c(),H.m(o,_));const ot={};!T&&ye&2&&(T=!0,ot.visible=K[1],ce(()=>T=!1)),!D&&ye&1&&(D=!0,ot.message=K[0],ce(()=>D=!1)),I.$set(ot)},i(K){N||(M(e.$$.fragment,K),M(I.$$.fragment,K),N=!0)},o(K){F(e.$$.fragment,K),F(I.$$.fragment,K),N=!1},d(K){ee(e,K),K&&A(s),K&&A(i),O.d(),H&&H.d(),K&&A(C),ee(I,K),R=!1,we(x)}}}function Yw(t,e,n){let s="a little message",i=!1,r=!1,o="",a="",l="",c=!0;const u=async()=>{n(0,s="Logging in..."),n(1,i=!0),c?await ol(At,o,a).then(async T=>{const D=Qt(Yt,"parents",T.user.uid);let N=await qi(D);if(N){let R=N.data();_e.set({...R})}}).catch(T=>{T.code==="auth/user-not-found"?(n(0,s="Account not found. Is it a typo?"),n(1,i=!0)):(n(0,s="Something went wrong. Please try again."),n(1,i=!0))}):(l&&localStorage.setItem("name",l),await ol(At,o,a).then(async T=>{const D=Qt(Yt,"parents",T.user.uid);let N=await qi(D);if(N){let R=N.data();R.isParent=!1;let x=R.kids.find(z=>{if(z&&z.name.toLowerCase()==l.toLowerCase())return z});x?_e.set(x):(n(0,s="That kid account does not seem to exist"),n(1,i=!0),At.signOut(),Au(At),localStorage.clear())}}))},h=[[]];function f(T){r=T,n(2,r)}function p(){c=this.__value,n(6,c)}function g(){c=this.__value,n(6,c)}function v(){c=this.__value,n(6,c)}function _(){c=this.__value,n(6,c)}function w(){o=this.value,n(3,o)}function b(){a=this.value,n(4,a)}function k(){l=this.value,n(5,l)}function C(T){i=T,n(1,i)}function I(T){s=T,n(0,s)}return[s,i,r,o,a,l,c,u,f,p,h,g,v,_,w,b,k,C,I]}class Xw extends Se{constructor(e){super(),Ae(this,e,Yw,Qw,ke,{})}}function Jw(t){let e,n,s,i,r,o,a,l,c,u,h,f,p,g,v,_;return p=new zw({}),{c(){e=y("div"),n=y("div"),s=y("label"),i=y("input"),r=E(),o=y("h2"),o.textContent="Login",a=E(),l=y("label"),c=y("input"),u=E(),h=y("h2"),h.textContent="Register",f=E(),se(p.$$.fragment),m(i,"type","radio"),m(i,"name","switchForm"),i.__value=!0,i.value=i.__value,m(i,"class","hidden"),t[2][0].push(i),m(o,"class","text-xl inline-block p-4"),m(s,"class","pt-2 pb-2 inline-block w-half"),m(c,"type","radio"),m(c,"name","switchForm"),c.__value=!1,c.value=c.__value,m(c,"class","hidden"),t[2][0].push(c),m(h,"class","text-xl inline-block p-4"),m(l,"class","bg-amber inline-block pt-2 pb-2 rounded-t-xl w-half"),m(n,"class","w-90 reverse"),m(e,"class","pt-8 p-2 w-full flex flex-col max-w-xl")},m(w,b){S(w,e,b),d(e,n),d(n,s),d(s,i),i.checked=i.__value===t[0],d(s,r),d(s,o),d(n,a),d(n,l),d(l,c),c.checked=c.__value===t[0],d(l,u),d(l,h),d(e,f),Z(p,e,null),g=!0,v||(_=[U(i,"change",t[4]),U(c,"change",t[5])],v=!0)},p(w,b){b&1&&(i.checked=i.__value===w[0]),b&1&&(c.checked=c.__value===w[0])},i(w){g||(M(p.$$.fragment,w),g=!0)},o(w){F(p.$$.fragment,w),g=!1},d(w){w&&A(e),t[2][0].splice(t[2][0].indexOf(i),1),t[2][0].splice(t[2][0].indexOf(c),1),ee(p),v=!1,we(_)}}}function Zw(t){let e,n,s,i,r,o,a,l,c,u,h,f,p,g,v,_;return p=new Xw({}),{c(){e=y("div"),n=y("div"),s=y("label"),i=y("input"),r=E(),o=y("h2"),o.textContent="Login",a=E(),l=y("label"),c=y("input"),u=E(),h=y("h2"),h.textContent="Register",f=E(),se(p.$$.fragment),m(i,"type","radio"),m(i,"name","switchForm"),i.__value=!0,i.value=i.__value,m(i,"class","hidden"),t[2][0].push(i),m(o,"class","text-xl inline-block p-4 rounded-t-md"),m(s,"class","bg-amber inline-block pt-2 pb-2 rounded-t-xl w-half"),m(c,"type","radio"),m(c,"name","switchForm"),c.__value=!1,c.value=c.__value,m(c,"class","hidden"),t[2][0].push(c),m(h,"class","text-xl inline-block p-4 rounded-t-md "),m(l,"class","pt-2 pb-2 inline-block w-half"),m(n,"class","w-90"),m(e,"class","pt-8 p-2 w-full flex flex-col max-w-xl")},m(w,b){S(w,e,b),d(e,n),d(n,s),d(s,i),i.checked=i.__value===t[0],d(s,r),d(s,o),d(n,a),d(n,l),d(l,c),c.checked=c.__value===t[0],d(l,u),d(l,h),d(e,f),Z(p,e,null),g=!0,v||(_=[U(i,"change",t[1]),U(c,"change",t[3])],v=!0)},p(w,b){b&1&&(i.checked=i.__value===w[0]),b&1&&(c.checked=c.__value===w[0])},i(w){g||(M(p.$$.fragment,w),g=!0)},o(w){F(p.$$.fragment,w),g=!1},d(w){w&&A(e),t[2][0].splice(t[2][0].indexOf(i),1),t[2][0].splice(t[2][0].indexOf(c),1),ee(p),v=!1,we(_)}}}function e1(t){let e,n,s,i,r,o,a,l,c,u;const h=[Zw,Jw],f=[];function p(g,v){return g[0]?0:1}return o=p(t),a=f[o]=h[o](t),{c(){e=y("div"),n=y("div"),n.innerHTML=`<div class="rounded-full bg-amber w-60 h-60"></div> 
    <div class="bunnay svelte-zshd4i"></div>`,s=E(),i=y("div"),i.innerHTML=`<h1 class="text-5xl m-5">Bunny</h1> 
    <h2 class="text-5xl m-5">Money</h2>`,r=E(),a.c(),l=E(),c=y("div"),c.innerHTML=`<h1 class="text-3xl m-4">The banking* app for kids</h1> 
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"><li class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center svelte-zshd4i"><h3>Teach your kid financial literacy</h3> 
        <p>Let them control their account, while being the bank behind the scene</p></li> 
      <li class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center svelte-zshd4i"><h2>Easy to use</h2> 
        <p>No credit cards. No paper work. Just virtual accounts</p></li> 
      <li class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center svelte-zshd4i"><h2>Download on your phone</h2> 
        <p>Save to your homescreen and access it anywhere</p></li> 
      <li class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center svelte-zshd4i"><h2>No ads! Ever</h2> 
        <p>Ads on kids apps should be illegal</p></li> 
      <li class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center svelte-zshd4i"><h2>Set custom interest rates on savings</h2> 
        <p>You control the amount and the time frame</p></li> 
      <li class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center svelte-zshd4i"><h2>It&#39;s not real</h2> 
        <p>It&#39;s basically a sim, where the parent is the bank. Don&#39;t overthing it</p></li></ul> 

    <h1 class="text-3xl m-4 text-center">Parents have the power</h1> 
    <h3 class="text-2xl m-4 text-center">You are the bank!</h3>`,m(n,"class","w-100 bg-pink flex justify-center pt-32 pb-16 self-stretch"),m(i,"class","bg-yellow pt-36 pb-36 self-stretch flex flex-col items-center flex-wrap"),m(c,"class","p-4 max-w-5xl "),m(e,"class","flex flex-col bg-green align-center items-center")},m(g,v){S(g,e,v),d(e,n),d(e,s),d(e,i),d(e,r),f[o].m(e,null),d(e,l),d(e,c),u=!0},p(g,[v]){let _=o;o=p(g),o===_?f[o].p(g,v):(lt(),F(f[_],1,1,()=>{f[_]=null}),ct(),a=f[o],a?a.p(g,v):(a=f[o]=h[o](g),a.c()),M(a,1),a.m(e,l))},i(g){u||(M(a),u=!0)},o(g){F(a),u=!1},d(g){g&&A(e),f[o].d()}}}function t1(t,e,n){let s=!0;const i=[[]];function r(){s=this.__value,n(0,s)}function o(){s=this.__value,n(0,s)}function a(){s=this.__value,n(0,s)}function l(){s=this.__value,n(0,s)}return[s,r,i,o,a,l]}class Xd extends Se{constructor(e){super(),Ae(this,e,t1,e1,ke,{})}}function n1(t){let e;return{c(){e=y("footer"),e.innerHTML=`<h3 class="">created by <a href="https://tijana.me" class="underline">tijana.me</a></h3> 
    <a href="https://github.com/elsalvadordali/bunny-money" class="underline"><h6 class="">View source</h6></a>`,m(e,"class","flex flex-col items-center bg-yellow p-12")},m(n,s){S(n,e,s)},p:le,i:le,o:le,d(n){n&&A(e)}}}class s1 extends Se{constructor(e){super(),Ae(this,e,null,n1,ke,{})}}function i1(t){let e,n;return e=new Xd({}),{c(){se(e.$$.fragment)},m(s,i){Z(e,s,i),n=!0},p:le,i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){ee(e,s)}}}function r1(t){let e,n,s,i;const r=[l1,a1,o1],o=[];function a(l,c){return l[2].uid&&l[2].isParent==!1?0:l[2].uid&&l[2].isParent?1:l[2].uid?2:-1}return~(e=a(t))&&(n=o[e]=r[e](t)),{c(){n&&n.c(),s=tt()},m(l,c){~e&&o[e].m(l,c),S(l,s,c),i=!0},p(l,c){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(n&&(lt(),F(o[u],1,1,()=>{o[u]=null}),ct()),~e?(n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),M(n,1),n.m(s.parentNode,s)):n=null)},i(l){i||(M(n),i=!0)},o(l){F(n),i=!1},d(l){~e&&o[e].d(l),l&&A(s)}}}function o1(t){let e,n,s,i,r,o;function a(u){t[3](u)}function l(u){t[4](u)}let c={};return t[1]!==void 0&&(c.visible=t[1]),t[0]!==void 0&&(c.message=t[0]),e=new nt({props:c}),re.push(()=>ue(e,"visible",a)),re.push(()=>ue(e,"message",l)),r=new Xd({}),{c(){se(e.$$.fragment),i=E(),se(r.$$.fragment)},m(u,h){Z(e,u,h),S(u,i,h),Z(r,u,h),o=!0},p(u,h){const f={};!n&&h&2&&(n=!0,f.visible=u[1],ce(()=>n=!1)),!s&&h&1&&(s=!0,f.message=u[0],ce(()=>s=!1)),e.$set(f)},i(u){o||(M(e.$$.fragment,u),M(r.$$.fragment,u),o=!0)},o(u){F(e.$$.fragment,u),F(r.$$.fragment,u),o=!1},d(u){ee(e,u),u&&A(i),ee(r,u)}}}function a1(t){let e,n;return e=new jw({}),{c(){se(e.$$.fragment)},m(s,i){Z(e,s,i),n=!0},p:le,i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){ee(e,s)}}}function l1(t){let e,n;return e=new Y0({}),{c(){se(e.$$.fragment)},m(s,i){Z(e,s,i),n=!0},p:le,i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),n=!1},d(s){ee(e,s)}}}function c1(t){let e,n,s,i,r;const o=[r1,i1],a=[];function l(c,u){return c[2]?0:1}return e=l(t),n=a[e]=o[e](t),i=new s1({}),{c(){n.c(),s=E(),se(i.$$.fragment)},m(c,u){a[e].m(c,u),S(c,s,u),Z(i,c,u),r=!0},p(c,[u]){let h=e;e=l(c),e===h?a[e].p(c,u):(lt(),F(a[h],1,1,()=>{a[h]=null}),ct(),n=a[e],n?n.p(c,u):(n=a[e]=o[e](c),n.c()),M(n,1),n.m(s.parentNode,s))},i(c){r||(M(n),M(i.$$.fragment,c),r=!0)},o(c){F(n),F(i.$$.fragment,c),r=!1},d(c){a[e].d(c),c&&A(s),ee(i,c)}}}function u1(t,e,n){let s="",i=!1,r=null;_e.subscribe(l=>n(2,r=l));function o(l){i=l,n(1,i)}function a(l){s=l,n(0,s)}return[s,i,r,o,a]}class h1 extends Se{constructor(e){super(),Ae(this,e,u1,c1,ke,{})}}new h1({target:document.body,props:{}});
