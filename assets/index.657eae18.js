(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function pe(){}const Vc=t=>t;function xc(t){return t()}function Fa(){return Object.create(null)}function ke(t){t.forEach(xc)}function Ds(t){return typeof t=="function"}function Te(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Zs;function Xd(t,e){return Zs||(Zs=document.createElement("a")),Zs.href=e,t===Zs.href}function Jd(t){return Object.keys(t).length===0}function Gt(t){return t==null?"":t}function qi(t){return t&&Ds(t.destroy)?t.destroy:pe}const Bc=typeof window<"u";let jc=Bc?()=>window.performance.now():()=>Date.now(),Eo=Bc?t=>requestAnimationFrame(t):pe;const Sn=new Set;function $c(t){Sn.forEach(e=>{e.c(t)||(Sn.delete(e),e.f())}),Sn.size!==0&&Eo($c)}function qc(t){let e;return Sn.size===0&&Eo($c),{promise:new Promise(n=>{Sn.add(e={c:t,f:n})}),abort(){Sn.delete(e)}}}function f(t,e){t.appendChild(e)}function Hc(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Zd(t){const e=y("style");return ef(Hc(t),e),e.sheet}function ef(t,e){return f(t.head||t,e),e.sheet}function N(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function vn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function E(){return F(" ")}function Ye(){return F("")}function U(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Kc(t){return function(e){return e.preventDefault(),t.call(this,e)}}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xe(t){return t===""?null:+t}function tf(t){return Array.from(t.childNodes)}function Z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e){t.value=e==null?"":e}function vi(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function zc(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function nf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}const yi=new Map;let _i=0;function sf(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function rf(t,e){const n={stylesheet:Zd(e),rules:{}};return yi.set(t,n),n}function Br(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let w=0;w<=1;w+=l){const b=e+(n-e)*r(w);c+=w*100+`%{${o(b,1-b)}}
`}const u=c+`100% {${o(n,1-n)}}
}`,h=`__svelte_${sf(u)}_${a}`,d=Hc(t),{stylesheet:m,rules:g}=yi.get(d)||rf(d,t);g[h]||(g[h]=!0,m.insertRule(`@keyframes ${h} ${u}`,m.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${h} ${s}ms linear ${i}ms 1 both`,_i+=1,h}function jr(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),_i-=i,_i||of())}function of(){Eo(()=>{_i||(yi.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&D(e)}),yi.clear())})}let hs;function ss(t){hs=t}function af(){if(!hs)throw new Error("Function called outside component initialization");return hs}function lf(t){af().$$.on_mount.push(t)}const Xn=[],re=[],li=[],$r=[],cf=Promise.resolve();let qr=!1;function uf(){qr||(qr=!0,cf.then(Gc))}function Nt(t){li.push(t)}function oe(t){$r.push(t)}const kr=new Set;let ei=0;function Gc(){const t=hs;do{for(;ei<Xn.length;){const e=Xn[ei];ei++,ss(e),hf(e.$$)}for(ss(null),Xn.length=0,ei=0;re.length;)re.pop()();for(let e=0;e<li.length;e+=1){const n=li[e];kr.has(n)||(kr.add(n),n())}li.length=0}while(Xn.length);for(;$r.length;)$r.pop()();qr=!1,kr.clear(),ss(t)}function hf(t){if(t.fragment!==null){t.update(),ke(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Nt)}}let Qn;function Wc(){return Qn||(Qn=Promise.resolve(),Qn.then(()=>{Qn=null})),Qn}function is(t,e,n){t.dispatchEvent(nf(`${e?"intro":"outro"}${n}`))}const ci=new Set;let Et;function at(){Et={r:0,c:[],p:Et}}function lt(){Et.r||ke(Et.c),Et=Et.p}function L(t,e){t&&t.i&&(ci.delete(t),t.i(e))}function V(t,e,n,s){if(t&&t.o){if(ci.has(t))return;ci.add(t),Et.c.push(()=>{ci.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Qc={duration:0};function df(t,e,n){let s=e(t,n),i=!1,r,o,a=0;function l(){r&&jr(t,r)}function c(){const{delay:h=0,duration:d=300,easing:m=Vc,tick:g=pe,css:_}=s||Qc;_&&(r=Br(t,0,1,d,h,m,_,a++)),g(0,1);const w=jc()+h,b=w+d;o&&o.abort(),i=!0,Nt(()=>is(t,!0,"start")),o=qc(v=>{if(i){if(v>=b)return g(1,0),is(t,!0,"end"),l(),i=!1;if(v>=w){const k=m((v-w)/d);g(k,1-k)}}return i})}let u=!1;return{start(){u||(u=!0,jr(t),Ds(s)?(s=s(),Wc().then(c)):c())},invalidate(){u=!1},end(){i&&(l(),i=!1)}}}function Va(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&jr(t,l)}function u(d,m){const g=d.b-r;return m*=Math.abs(g),{a:r,b:d.b,d:g,duration:m,start:d.start,end:d.start+m,group:d.group}}function h(d){const{delay:m=0,duration:g=300,easing:_=Vc,tick:w=pe,css:b}=i||Qc,v={start:jc()+m,b:d};d||(v.group=Et,Et.r+=1),o||a?a=v:(b&&(c(),l=Br(t,r,d,g,m,_,b)),d&&w(0,1),o=u(v,g),Nt(()=>is(t,d,"start")),qc(k=>{if(a&&k>a.start&&(o=u(a,g),a=null,is(t,o.b,"start"),b&&(c(),l=Br(t,r,o.b,o.duration,0,_,i.css))),o){if(k>=o.end)w(r=o.b,1-r),is(t,o.b,"end"),a||(o.b?c():--o.group.r||ke(o.group.c)),o=null;else if(k>=o.start){const A=k-o.start;r=o.a+o.d*_(A/o.duration),w(r,1-r)}}return!!(o||a)}))}return{run(d){Ds(i)?Wc().then(()=>{i=i(),h(d)}):h(d)},end(){c(),o=a=null}}}function ff(t,e){t.d(1),e.delete(t.key)}function pf(t,e,n,s,i,r,o,a,l,c,u,h){let d=t.length,m=r.length,g=d;const _={};for(;g--;)_[t[g].key]=g;const w=[],b=new Map,v=new Map;for(g=m;g--;){const I=h(i,r,g),P=n(I);let C=o.get(P);C?s&&C.p(I,e):(C=c(P,I),C.c()),b.set(P,w[g]=C),P in _&&v.set(P,Math.abs(g-_[P]))}const k=new Set,A=new Set;function T(I){L(I,1),I.m(a,u),o.set(I.key,I),u=I.first,m--}for(;d&&m;){const I=w[m-1],P=t[d-1],C=I.key,S=P.key;I===P?(u=I.first,d--,m--):b.has(S)?!o.has(C)||k.has(C)?T(I):A.has(S)?d--:v.get(C)>v.get(S)?(A.add(C),T(I)):(k.add(S),d--):(l(P,o),d--)}for(;d--;){const I=t[d];b.has(I.key)||l(I,o)}for(;m;)T(w[m-1]);return w}function ae(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ie(t){t&&t.c()}function ee(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Nt(()=>{const o=t.$$.on_mount.map(xc).filter(Ds);t.$$.on_destroy?t.$$.on_destroy.push(...o):ke(o),t.$$.on_mount=[]}),r.forEach(Nt)}function te(t,e){const n=t.$$;n.fragment!==null&&(ke(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mf(t,e){t.$$.dirty[0]===-1&&(Xn.push(t),uf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,s,i,r,o,a=[-1]){const l=hs;ss(t);const c=t.$$={fragment:null,ctx:[],props:r,update:pe,not_equal:i,bound:Fa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Fa(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...m)=>{const g=m.length?m[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&mf(t,h)),d}):[],c.update(),u=!0,ke(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=tf(e.target);c.fragment&&c.fragment.l(h),h.forEach(D)}else c.fragment&&c.fragment.c();e.intro&&L(t.$$.fragment),ee(t,e.target,e.anchor,e.customElement),Gc()}ss(l)}class Ne{$destroy(){te(this,1),this.$destroy=pe}$on(e,n){if(!Ds(n))return pe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Jd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function gf(t){const e=t-1;return e*e*e+1}function Hr(t,{delay:e=0,duration:n=400,easing:s=gf,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o);return{delay:e,duration:n,easing:s,css:(h,d)=>`
			transform: ${c} translate(${(1-h)*i}px, ${(1-h)*r}px);
			opacity: ${l-u*d}`}}function xa(t){let e,n,s,i,r,o,a,l,c;return{c(){e=y("div"),n=y("p"),s=F(t[1]),i=E(),r=y("button"),r.textContent="X",p(n,"class","m-4"),p(r,"class","text-black bg-yellow rounded-md pl-6 pr-6 mb-1 border-black border-2 shaded big-shade"),p(e,"class","sticky m-4 p-6 rounded-xl m-2 bg-pink center border-black border-2 shaded svelte-10r27dr")},m(u,h){N(u,e,h),f(e,n),f(n,s),f(e,i),f(e,r),a=!0,l||(c=U(r,"click",t[2]),l=!0)},p(u,h){(!a||h&2)&&Z(s,u[1])},i(u){a||(Nt(()=>{o||(o=Va(e,Hr,{x:-300,duration:700},!0)),o.run(1)}),a=!0)},o(u){o||(o=Va(e,Hr,{x:-300,duration:700},!1)),o.run(0),a=!1},d(u){u&&D(e),u&&o&&o.end(),l=!1,c()}}}function vf(t){let e,n,s=t[0]&&xa(t);return{c(){s&&s.c(),e=Ye()},m(i,r){s&&s.m(i,r),N(i,e,r),n=!0},p(i,[r]){i[0]?s?(s.p(i,r),r&1&&L(s,1)):(s=xa(i),s.c(),L(s,1),s.m(e.parentNode,e)):s&&(at(),V(s,1,1,()=>{s=null}),lt())},i(i){n||(L(s),n=!0)},o(i){V(s),n=!1},d(i){s&&s.d(i),i&&D(e)}}}function yf(t,e,n){let{message:s="default"}=e,{visible:i=!1}=e;const r=()=>n(0,i=!1);return t.$$set=o=>{"message"in o&&n(1,s=o.message),"visible"in o&&n(0,i=o.visible)},t.$$.update=()=>{t.$$.dirty&1&&i&&setTimeout(()=>{n(0,i=!1),n(1,s="")},5e3)},[i,s,r]}class nt extends Ne{constructor(e){super(),De(this,e,yf,vf,Te,{message:1,visible:0})}}/**
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
 */const Yc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_f=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_f(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bf=function(t){const e=Yc(t);return Xc.encodeByteArray(e,!0)},bi=function(t){return bf(t).replace(/\./g,"")},Jc=function(t){try{return Xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function kf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function If(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tf(){return typeof indexedDB=="object"}function Af(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Sf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cf=()=>Sf().__FIREBASE_DEFAULTS__,Df=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jc(t[1]);return e&&JSON.parse(e)},Io=()=>{try{return Cf()||Df()||Nf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zc=t=>{var e,n;return(n=(e=Io())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rf=t=>{const e=Zc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Of=()=>{var t;return(t=Io())===null||t===void 0?void 0:t.config},eu=t=>{var e;return(e=Io())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Lf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Pf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[bi(JSON.stringify(n)),bi(JSON.stringify(o)),a].join(".")}/**
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
 */const Mf="FirebaseError";class Ft extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Mf,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Uf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ft(i,a,s)}}function Uf(t,e){return t.replace(Ff,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ff=/\{\$([^}]+)}/g;function Vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ba(r)&&Ba(o)){if(!wi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ba(t){return t!==null&&typeof t=="object"}/**
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
 */function Rs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Zn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xf(t,e){const n=new Bf(t,e);return n.subscribe.bind(n)}class Bf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Er),i.error===void 0&&(i.error=Er),i.complete===void 0&&(i.complete=Er);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Er(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class $f{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Lf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hf(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qf(t){return t===nn?void 0:t}function Hf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $f(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const zf={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Gf=me.INFO,Wf={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Qf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Wf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class To{constructor(e){this.name=e,this._logLevel=Gf,this._logHandler=Qf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Yf=(t,e)=>e.some(n=>t instanceof n);let ja,$a;function Xf(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jf(){return $a||($a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tu=new WeakMap,Kr=new WeakMap,nu=new WeakMap,Ir=new WeakMap,Ao=new WeakMap;function Zf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tu.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function ep(t){if(Kr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Kr.set(t,e)}let zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tp(t){zr=t(zr)}function np(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Tr(this),e,...n);return nu.set(s,e.sort?e.sort():[e]),qt(s)}:Jf().includes(t)?function(...e){return t.apply(Tr(this),e),qt(tu.get(this))}:function(...e){return qt(t.apply(Tr(this),e))}}function sp(t){return typeof t=="function"?np(t):(t instanceof IDBTransaction&&ep(t),Yf(t,Xf())?new Proxy(t,zr):t)}function qt(t){if(t instanceof IDBRequest)return Zf(t);if(Ir.has(t))return Ir.get(t);const e=sp(t);return e!==t&&(Ir.set(t,e),Ao.set(e,t)),e}const Tr=t=>Ao.get(t);function ip(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=qt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(qt(o.result),l.oldVersion,l.newVersion,qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const rp=["get","getKey","getAll","getAllKeys","count"],op=["put","add","delete","clear"],Ar=new Map;function qa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ar.get(e))return Ar.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=op.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ar.set(e,r),r}tp(t=>({...t,get:(e,n,s)=>qa(e,n)||t.get(e,n,s),has:(e,n)=>!!qa(e,n)||t.has(e,n)}));/**
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
 */class ap{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gr="@firebase/app",Ha="0.8.2";/**
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
 */const hn=new To("@firebase/app"),cp="@firebase/app-compat",up="@firebase/analytics-compat",hp="@firebase/analytics",dp="@firebase/app-check-compat",fp="@firebase/app-check",pp="@firebase/auth",mp="@firebase/auth-compat",gp="@firebase/database",vp="@firebase/database-compat",yp="@firebase/functions",_p="@firebase/functions-compat",bp="@firebase/installations",wp="@firebase/installations-compat",kp="@firebase/messaging",Ep="@firebase/messaging-compat",Ip="@firebase/performance",Tp="@firebase/performance-compat",Ap="@firebase/remote-config",Sp="@firebase/remote-config-compat",Cp="@firebase/storage",Dp="@firebase/storage-compat",Np="@firebase/firestore",Rp="@firebase/firestore-compat",Op="firebase",Lp="9.12.1";/**
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
 */const Wr="[DEFAULT]",Pp={[Gr]:"fire-core",[cp]:"fire-core-compat",[hp]:"fire-analytics",[up]:"fire-analytics-compat",[fp]:"fire-app-check",[dp]:"fire-app-check-compat",[pp]:"fire-auth",[mp]:"fire-auth-compat",[gp]:"fire-rtdb",[vp]:"fire-rtdb-compat",[yp]:"fire-fn",[_p]:"fire-fn-compat",[bp]:"fire-iid",[wp]:"fire-iid-compat",[kp]:"fire-fcm",[Ep]:"fire-fcm-compat",[Ip]:"fire-perf",[Tp]:"fire-perf-compat",[Ap]:"fire-rc",[Sp]:"fire-rc-compat",[Cp]:"fire-gcs",[Dp]:"fire-gcs-compat",[Np]:"fire-fst",[Rp]:"fire-fst-compat","fire-js":"fire-js",[Op]:"fire-js-all"};/**
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
 */const ki=new Map,Qr=new Map;function Mp(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Qr.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Qr.set(e,t);for(const n of ki.values())Mp(n,t);return!0}function So(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Up={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new Ns("app","Firebase",Up);/**
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
 */class Fp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=Lp;function su(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=Of()),!n)throw Ht.create("no-options");const r=ki.get(i);if(r){if(wi(n,r.options)&&wi(s,r.config))return r;throw Ht.create("duplicate-app",{appName:i})}const o=new Kf(i);for(const l of Qr.values())o.addComponent(l);const a=new Fp(n,s,o);return ki.set(i,a),a}function iu(t=Wr){const e=ki.get(t);if(!e&&t===Wr)return su();if(!e)throw Ht.create("no-app",{appName:t});return e}function Kt(t,e,n){var s;let i=(s=Pp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}On(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vp="firebase-heartbeat-database",xp=1,ds="firebase-heartbeat-store";let Sr=null;function ru(){return Sr||(Sr=ip(Vp,xp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),Sr}async function Bp(t){var e;try{return(await ru()).transaction(ds).objectStore(ds).get(ou(t))}catch(n){if(n instanceof Ft)hn.warn(n.message);else{const s=Ht.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});hn.warn(s.message)}}}async function Ka(t,e){var n;try{const i=(await ru()).transaction(ds,"readwrite");return await i.objectStore(ds).put(e,ou(t)),i.done}catch(s){if(s instanceof Ft)hn.warn(s.message);else{const i=Ht.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});hn.warn(i.message)}}}function ou(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jp=1024,$p=30*24*60*60*1e3;class qp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=za();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=$p}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=za(),{heartbeatsToSend:n,unsentEntries:s}=Hp(this._heartbeatsCache.heartbeats),i=bi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function za(){return new Date().toISOString().substring(0,10)}function Hp(t,e=jp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ga(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ga(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tf()?Af().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ga(t){return bi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zp(t){On(new un("platform-logger",e=>new ap(e),"PRIVATE")),On(new un("heartbeat",e=>new qp(e),"PRIVATE")),Kt(Gr,Ha,t),Kt(Gr,Ha,"esm2017"),Kt("fire-js","")}zp("");function Co(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function au(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gp=au,lu=new Ns("auth","Firebase",au());/**
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
 */const Wa=new To("@firebase/auth");function ui(t,...e){Wa.logLevel<=me.ERROR&&Wa.error(`Auth (${Os}): ${t}`,...e)}/**
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
 */function ft(t,...e){throw Do(t,...e)}function gt(t,...e){return Do(t,...e)}function Wp(t,e,n){const s=Object.assign(Object.assign({},Gp()),{[e]:n});return new Ns("auth","Firebase",s).create(e,{appName:t.name})}function Do(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return lu.create(t,...e)}function G(t,e,...n){if(!t)throw Do(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ui(e),new Error(e)}function Rt(t,e){t||It(e)}/**
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
 */const Qa=new Map;function Tt(t){Rt(t instanceof Function,"Expected a class definition");let e=Qa.get(t);return e?(Rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qa.set(t,e),e)}/**
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
 */function Qp(t,e){const n=So(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(wi(r,e!=null?e:{}))return i;ft(i,"already-initialized")}return n.initialize({options:e})}function Yp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Yr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xp(){return Ya()==="http:"||Ya()==="https:"}function Ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Jp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xp()||kf()||"connection"in navigator)?navigator.onLine:!0}function Zp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=wf()||Ef()}get(){return Jp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function No(t,e){Rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const em={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const tm=new Ls(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,s,i={}){return uu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),cu.fetch()(hu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function uu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},em),e);try{const i=new nm(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ti(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ti(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ti(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Wp(t,u,c);ft(t,u)}}catch(i){if(i instanceof Ft)throw i;ft(t,"network-request-failed")}}async function Ps(t,e,n,s,i={}){const r=await jn(t,e,n,s,i);return"mfaPendingCredential"in r&&ft(t,"multi-factor-auth-required",{_serverResponse:r}),r}function hu(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?No(t.config,i):`${t.config.apiScheme}://${i}`}class nm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gt(this.auth,"network-request-failed")),tm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ti(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=gt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function sm(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function im(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function rs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rm(t,e=!1){const n=qe(t),s=await n.getIdToken(e),i=Ro(s);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:rs(Cr(i.auth_time)),issuedAtTime:rs(Cr(i.iat)),expirationTime:rs(Cr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Cr(t){return Number(t)*1e3}function Ro(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return ui("JWT malformed, contained fewer than 3 sections"),null;try{const r=Jc(s);return r?JSON.parse(r):(ui("Failed to decode base64 JWT payload"),null)}catch(r){return ui("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function om(t){const e=Ro(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ft&&am(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function am({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Ei(t){var e;const n=t.auth,s=await t.getIdToken(),i=await fs(t,im(n,{idToken:s}));G(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?hm(r.providerUserInfo):[],a=um(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new du(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cm(t){const e=qe(t);await Ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function um(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function hm(t){return t.map(e=>{var{providerId:n}=e,s=Co(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function dm(t,e){const n=await uu(t,{},async()=>{const s=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=hu(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await dm(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ps;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Vt(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new du(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await fs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rm(this,e)}reload(){return cm(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ei(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fs(this,sm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:A,isAnonymous:T,providerData:I,stsTokenManager:P}=n;G(k&&P,e,"internal-error");const C=ps.fromJSON(this.name,P);G(typeof k=="string",e,"internal-error"),Vt(h,e.name),Vt(d,e.name),G(typeof A=="boolean",e,"internal-error"),G(typeof T=="boolean",e,"internal-error"),Vt(m,e.name),Vt(g,e.name),Vt(_,e.name),Vt(w,e.name),Vt(b,e.name),Vt(v,e.name);const S=new an({uid:k,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:m,tenantId:_,stsTokenManager:C,createdAt:b,lastLoginAt:v});return I&&Array.isArray(I)&&(S.providerData=I.map(M=>Object.assign({},M))),w&&(S._redirectEventId=w),S}static async _fromIdTokenResponse(e,n,s=!1){const i=new ps;i.updateFromServerResponse(n);const r=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ei(r),r}}/**
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
 */class fu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fu.type="NONE";const Xa=fu;/**
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
 */function hi(t,e,n){return`firebase:${t}:${e}:${n}`}class Cn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=hi(this.userKey,i.apiKey,r),this.fullPersistenceKey=hi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Cn(Tt(Xa),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Tt(Xa);const o=hi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=an._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Cn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Cn(r,e,s))}}/**
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
 */function Ja(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yu(e))return"Blackberry";if(_u(e))return"Webos";if(Oo(e))return"Safari";if((e.includes("chrome/")||mu(e))&&!e.includes("edge/"))return"Chrome";if(vu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pu(t=Je()){return/firefox\//i.test(t)}function Oo(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mu(t=Je()){return/crios\//i.test(t)}function gu(t=Je()){return/iemobile/i.test(t)}function vu(t=Je()){return/android/i.test(t)}function yu(t=Je()){return/blackberry/i.test(t)}function _u(t=Je()){return/webos/i.test(t)}function Hi(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fm(t=Je()){var e;return Hi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pm(){return If()&&document.documentMode===10}function bu(t=Je()){return Hi(t)||vu(t)||_u(t)||yu(t)||/windows phone/i.test(t)||gu(t)}function mm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wu(t,e=[]){let n;switch(t){case"Browser":n=Ja(Je());break;case"Worker":n=`${Ja(Je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${s}`}/**
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
 */class gm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class vm{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Za(this),this.idTokenSubscription=new Za(this),this.beforeStateQueue=new gm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ei(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ms(t){return qe(t)}class Za{constructor(e){this.auth=e,this.observer=null,this.addObserver=xf(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ym(t,e,n){const s=Ms(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=ku(e),{host:o,port:a}=_m(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bm()}function ku(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _m(t){const e=ku(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:el(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:el(o)}}}function el(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function wm(t,e){return jn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function km(t,e){return Ps(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}async function Em(t,e){return jn(t,"POST","/v1/accounts:sendOobCode",Bn(t,e))}async function Im(t,e){return Em(t,e)}/**
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
 */async function Tm(t,e){return Ps(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function Am(t,e){return Ps(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
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
 */class ms extends Lo{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ms(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ms(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return km(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tm(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Am(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Dn(t,e){return Ps(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
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
 */const Sm="http://localhost";class dn extends Lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Co(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new dn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Dn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dn(e,n)}buildRequest(){const e={requestUri:Sm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
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
 */function Cm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dm(t){const e=Jn(Zn(t)).link,n=e?Jn(Zn(e)).deep_link_id:null,s=Jn(Zn(t)).deep_link_id;return(s?Jn(Zn(s)).link:null)||s||n||e||t}class Po{constructor(e){var n,s,i,r,o,a;const l=Jn(Zn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Cm((i=l.mode)!==null&&i!==void 0?i:null);G(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Dm(e);try{return new Po(n)}catch{return null}}}/**
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
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(e,n){return ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Po.parseLink(n);return G(s,"argument-error"),ms._fromEmailAndCode(e,s.code,s.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xt extends Us{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Bt.credential(n,s)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class jt extends Us{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */async function Nm(t,e){return Ps(t,"POST","/v1/accounts:signUp",Bn(t,e))}/**
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
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await an._fromIdTokenResponse(e,s,i),o=tl(s);return new fn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=tl(s);return new fn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function tl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ii extends Ft{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ii.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ii(e,n,s,i)}}function Iu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ii._fromErrorAndOperation(t,r,e,s):r})}async function Rm(t,e,n=!1){const s=await fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",s)}/**
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
 */async function Om(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await fs(t,Iu(i,r,e,t),n);G(o.idToken,i,"internal-error");const a=Ro(o.idToken);G(a,i,"internal-error");const{sub:l}=a;return G(t.uid===l,i,"user-mismatch"),fn._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ft(i,"user-mismatch"),o}}/**
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
 */async function Tu(t,e,n=!1){const s="signIn",i=await Iu(t,s,e),r=await fn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Lm(t,e){return Tu(Ms(t),e)}/**
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
 */function Pm(t,e,n){var s;G(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),G(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(G(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(G(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function Mm(t,e,n){const s=Ms(t),i=await Nm(s,{returnSecureToken:!0,email:e,password:n}),r=await fn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function nl(t,e,n){return Lm(qe(t),$n.credential(e,n))}async function Um(t,e){const n=qe(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Pm(n.auth,i,e);const{email:r}=await Im(n.auth,i);r!==t.email&&await t.reload()}function Fm(t,e,n,s){return qe(t).onIdTokenChanged(e,n,s)}function Vm(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function xm(t,e,n,s){return qe(t).onAuthStateChanged(e,n,s)}function Au(t){return qe(t).signOut()}const Ti="__sak";/**
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
 */class Su{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Bm(){const t=Je();return Oo(t)||Hi(t)}const jm=1e3,$m=10;class Cu extends Su{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bm()&&mm(),this.fallbackToPolling=bu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);pm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$m):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},jm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cu.type="LOCAL";const qm=Cu;/**
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
 */function Hm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ki(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Hm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ki.receivers=[];/**
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
 */function Mo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Km{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Mo("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vt(){return window}function zm(t){vt().location.href=t}/**
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
 */function Ru(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function Gm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qm(){return Ru()?self:null}/**
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
 */const Ou="firebaseLocalStorageDb",Ym=1,Ai="firebaseLocalStorage",Lu="fbase_key";class Fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zi(t,e){return t.transaction([Ai],e?"readwrite":"readonly").objectStore(Ai)}function Xm(){const t=indexedDB.deleteDatabase(Ou);return new Fs(t).toPromise()}function Xr(){const t=indexedDB.open(Ou,Ym);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ai,{keyPath:Lu})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ai)?e(s):(s.close(),await Xm(),e(await Xr()))})})}async function sl(t,e,n){const s=zi(t,!0).put({[Lu]:e,value:n});return new Fs(s).toPromise()}async function Jm(t,e){const n=zi(t,!1).get(e),s=await new Fs(n).toPromise();return s===void 0?null:s.value}function il(t,e){const n=zi(t,!0).delete(e);return new Fs(n).toPromise()}const Zm=800,eg=3;class Pu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>eg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ru()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ki._getInstance(Qm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gm(),!this.activeServiceWorker)return;this.sender=new Km(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xr();return await sl(e,Ti,"1"),await il(e,Ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Jm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>il(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=zi(i,!1).getAll();return new Fs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pu.type="LOCAL";const tg=Pu;/**
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
 */function ng(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",ng().appendChild(s)})}function ig(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ls(3e4,6e4);/**
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
 */function rg(t,e){return e?Tt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uo extends Lo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function og(t){return Tu(t.auth,new Uo(t),t.bypassAuthState)}function ag(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Om(n,new Uo(t),t.bypassAuthState)}async function lg(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Rm(n,new Uo(t),t.bypassAuthState)}/**
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
 */class Mu{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return og;case"linkViaPopup":case"linkViaRedirect":return lg;case"reauthViaPopup":case"reauthViaRedirect":return ag;default:ft(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cg=new Ls(2e3,1e4);class In extends Mu{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cg.get())};e()}}In.currentPopupAction=null;/**
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
 */const ug="pendingRedirect",di=new Map;class hg extends Mu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=di.get(this.auth._key());if(!e){try{const s=await dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}di.set(this.auth._key(),e)}return this.bypassAuthState||di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dg(t,e){const n=mg(e),s=pg(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function fg(t,e){di.set(t._key(),e)}function pg(t){return Tt(t._redirectPersistence)}function mg(t){return hi(ug,t.config.apiKey,t.name)}async function gg(t,e,n=!1){const s=Ms(t),i=rg(s,e),o=await new hg(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const vg=10*60*1e3;class yg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_g(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Uu(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vg&&this.cachedEventUids.clear(),this.cachedEventUids.has(rl(e))}saveEventToCache(e){this.cachedEventUids.add(rl(e)),this.lastProcessedEventTime=Date.now()}}function rl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _g(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uu(t);default:return!1}}/**
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
 */async function bg(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
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
 */const wg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kg=/^https?/;async function Eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bg(t);for(const n of e)try{if(Ig(n))return}catch{}ft(t,"unauthorized-domain")}function Ig(t){const e=Yr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!kg.test(n))return!1;if(wg.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Tg=new Ls(3e4,6e4);function ol(){const t=vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ag(t){return new Promise((e,n)=>{var s,i,r;function o(){ol(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ol(),n(gt(t,"network-request-failed"))},timeout:Tg.get()})}if(!((i=(s=vt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=vt().gapi)===null||r===void 0)&&r.load)o();else{const a=ig("iframefcb");return vt()[a]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},sg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fi=null,e})}let fi=null;function Sg(t){return fi=fi||Ag(t),fi}/**
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
 */const Cg=new Ls(5e3,15e3),Dg="__/auth/iframe",Ng="emulator/auth/iframe",Rg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lg(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?No(e,Ng):`https://${t.config.authDomain}/${Dg}`,s={apiKey:e.apiKey,appName:t.name,v:Os},i=Og.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Rs(s).slice(1)}`}async function Pg(t){const e=await Sg(t),n=vt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Lg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rg,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),a=vt().setTimeout(()=>{r(o)},Cg.get());function l(){vt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Mg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ug=500,Fg=600,Vg="_blank",xg="http://localhost";class al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bg(t,e,n,s=Ug,i=Fg){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Mg),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Je().toLowerCase();n&&(a=mu(c)?Vg:n),pu(c)&&(e=e||xg,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(fm(c)&&a!=="_self")return jg(e||"",a),new al(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new al(h)}function jg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const $g="__/auth/handler",qg="emulator/auth/handler";function ll(t,e,n,s,i,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Os,eventId:i};if(e instanceof Eu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Us){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Hg(t)}?${Rs(a).slice(1)}`}function Hg({config:t}){return t.emulator?No(t,qg):`https://${t.authDomain}/${$g}`}/**
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
 */const Dr="webStorageSupport";class Kg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nu,this._completeRedirectFn=gg,this._overrideRedirectResult=fg}async _openPopup(e,n,s,i){var r;Rt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ll(e,n,s,Yr(),i);return Bg(e,o,Mo())}async _openRedirect(e,n,s,i){return await this._originValidation(e),zm(ll(e,n,s,Yr(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Rt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Pg(e),s=new yg(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dr,{type:Dr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Dr];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bu()||Oo()||Hi()}}const zg=Kg;var cl="@firebase/auth",ul="0.20.10";/**
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
 */class Gg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qg(t){On(new un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{G(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wu(t)},u=new vm(a,l,c);return Yp(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),On(new un("auth-internal",e=>{const n=Ms(e.getProvider("auth").getImmediate());return(s=>new Gg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(cl,ul,Wg(t)),Kt(cl,ul,"esm2017")}/**
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
 */const Yg=5*60,Xg=eu("authIdTokenMaxAge")||Yg;let hl=null;const Jg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Xg)return;const i=n==null?void 0:n.token;hl!==i&&(hl=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zg(t=iu()){const e=So(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Qp(t,{popupRedirectResolver:zg,persistence:[tg,qm,Nu]}),s=eu("authTokenSyncURL");if(s){const r=Jg(s);Vm(n,r,()=>r(n.currentUser)),Fm(n,o=>r(o))}const i=Zc("auth");return i&&ym(n,`http://${i}`),n}Qg("Browser");var ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Fo=Fo||{},X=ev||self;function Si(){}function Gi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tv(t){return Object.prototype.hasOwnProperty.call(t,Nr)&&t[Nr]||(t[Nr]=++nv)}var Nr="closure_uid_"+(1e9*Math.random()>>>0),nv=0;function sv(t,e,n){return t.call.apply(t.bind,arguments)}function iv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=sv:We=iv,We.apply(null,arguments)}function ni(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function He(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Zt(){this.s=this.s,this.o=this.o}var rv=0;Zt.prototype.s=!1;Zt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rv!=0)&&tv(this)};Zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function dl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Gi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var ov=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",Si,e),X.removeEventListener("test",Si,e)}catch{}return t}();function Ci(t){return/^[\s\xa0]*$/.test(t)}var fl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rr(t,e){return t<e?-1:t>e?1:0}function Wi(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function mt(t){return Wi().indexOf(t)!=-1}function xo(t){return xo[" "](t),t}xo[" "]=Si;function av(t){var e=uv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lv=mt("Opera"),Ln=mt("Trident")||mt("MSIE"),Vu=mt("Edge"),Jr=Vu||Ln,xu=mt("Gecko")&&!(Wi().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),cv=Wi().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function Bu(){var t=X.document;return t?t.documentMode:void 0}var Di;e:{var Or="",Lr=function(){var t=Wi();if(xu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vu)return/Edge\/([\d\.]+)/.exec(t);if(Ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cv)return/WebKit\/(\S+)/.exec(t);if(lv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lr&&(Or=Lr?Lr[1]:""),Ln){var Pr=Bu();if(Pr!=null&&Pr>parseFloat(Or)){Di=String(Pr);break e}}Di=Or}var uv={};function hv(){return av(function(){let t=0;const e=fl(String(Di)).split("."),n=fl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Rr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Rr(i[2].length==0,r[2].length==0)||Rr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Zr;if(X.document&&Ln){var pl=Bu();Zr=pl||parseInt(Di,10)||void 0}else Zr=void 0;var dv=Zr;function gs(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xu){e:{try{xo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gs.X.h.call(this)}}He(gs,Qe);var fv={2:"touch",3:"pen",4:"mouse"};gs.prototype.h=function(){gs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xs="closure_listenable_"+(1e6*Math.random()|0),pv=0;function mv(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++pv,this.ba=this.ea=!1}function Qi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ju(t){const e={};for(const n in t)e[n]=t[n];return e}const ml="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $u(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ml.length;r++)n=ml[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Yi(t){this.src=t,this.g={},this.h=0}Yi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=to(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new mv(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function eo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Fu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Qi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function to(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var jo="closure_lm_"+(1e6*Math.random()|0),Mr={};function qu(t,e,n,s,i){if(s&&s.once)return Ku(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)qu(t,e[r],n,s,i);return null}return n=Ho(n),t&&t[xs]?t.N(e,n,Vs(s)?!!s.capture:!!s,i):Hu(t,e,n,!1,s,i)}function Hu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Vs(i)?!!i.capture:!!i,a=qo(t);if(a||(t[jo]=a=new Yi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=gv(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ov||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Gu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gv(){function t(n){return e.call(t.src,t.listener,n)}const e=vv;return t}function Ku(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ku(t,e[r],n,s,i);return null}return n=Ho(n),t&&t[xs]?t.O(e,n,Vs(s)?!!s.capture:!!s,i):Hu(t,e,n,!0,s,i)}function zu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)zu(t,e[r],n,s,i);else s=Vs(s)?!!s.capture:!!s,n=Ho(n),t&&t[xs]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=to(r,n,s,i),-1<n&&(Qi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=qo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=to(e,n,s,i)),(n=-1<t?e[t]:null)&&$o(n))}function $o(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[xs])eo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Gu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qo(e))?(eo(n,t),n.h==0&&(n.src=null,e[jo]=null)):Qi(t)}}}function Gu(t){return t in Mr?Mr[t]:Mr[t]="on"+t}function vv(t,e){if(t.ba)t=!0;else{e=new gs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&$o(t),t=n.call(s,e)}return t}function qo(t){return t=t[jo],t instanceof Yi?t:null}var Ur="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(t){return typeof t=="function"?t:(t[Ur]||(t[Ur]=function(e){return t.handleEvent(e)}),t[Ur])}function xe(){Zt.call(this),this.i=new Yi(this),this.P=this,this.I=null}He(xe,Zt);xe.prototype[xs]=!0;xe.prototype.removeEventListener=function(t,e,n,s){zu(this,t,e,n,s)};function $e(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var i=e;e=new Qe(s,t),$u(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=si(o,s,!0,e)&&i}if(o=e.g=t,i=si(o,s,!0,e)&&i,i=si(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=si(o,s,!1,e)&&i}xe.prototype.M=function(){if(xe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Qi(n[s]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function si(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&eo(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ko=X.JSON.stringify;function yv(){var t=Yu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _v{constructor(){this.h=this.g=null}add(e,n){const s=Wu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Wu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bv,t=>t.reset());class bv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wv(t){X.setTimeout(()=>{throw t},0)}function Qu(t,e){no||kv(),so||(no(),so=!0),Yu.add(t,e)}var no;function kv(){var t=X.Promise.resolve(void 0);no=function(){t.then(Ev)}}var so=!1,Yu=new _v;function Ev(){for(var t;t=yv();){try{t.h.call(t.g)}catch(n){wv(n)}var e=Wu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}so=!1}function Xi(t,e){xe.call(this),this.h=t||1,this.g=e||X,this.j=We(this.lb,this),this.l=Date.now()}He(Xi,xe);x=Xi.prototype;x.ca=!1;x.R=null;x.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$e(this,"tick"),this.ca&&(zo(this),this.start()))}};x.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}x.M=function(){Xi.X.M.call(this),zo(this),delete this.g};function Go(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Xu(t){t.g=Go(()=>{t.g=null,t.i&&(t.i=!1,Xu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Iv extends Zt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xu(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(t){Zt.call(this),this.h=t,this.g={}}He(vs,Zt);var gl=[];function Ju(t,e,n,s){Array.isArray(n)||(n&&(gl[0]=n.toString()),n=gl);for(var i=0;i<n.length;i++){var r=qu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Zu(t){Bo(t.g,function(e,n){this.g.hasOwnProperty(n)&&$o(e)},t),t.g={}}vs.prototype.M=function(){vs.X.M.call(this),Zu(this)};vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ji(){this.g=!0}Ji.prototype.Aa=function(){this.g=!1};function Tv(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Av(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Tn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Cv(t,n)+(s?" "+s:"")})}function Sv(t,e){t.info(function(){return"TIMEOUT: "+e})}Ji.prototype.info=function(){};function Cv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ko(n)}catch{return e}}var yn={},vl=null;function Zi(){return vl=vl||new xe}yn.Pa="serverreachability";function eh(t){Qe.call(this,yn.Pa,t)}He(eh,Qe);function ys(t){const e=Zi();$e(e,new eh(e))}yn.STAT_EVENT="statevent";function th(t,e){Qe.call(this,yn.STAT_EVENT,t),this.stat=e}He(th,Qe);function tt(t){const e=Zi();$e(e,new th(e,t))}yn.Qa="timingevent";function nh(t,e){Qe.call(this,yn.Qa,t),this.size=e}He(nh,Qe);function Bs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var er={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},sh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Wo(){}Wo.prototype.h=null;function yl(t){return t.h||(t.h=t.i())}function ih(){}var js={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qo(){Qe.call(this,"d")}He(Qo,Qe);function Yo(){Qe.call(this,"c")}He(Yo,Qe);var io;function tr(){}He(tr,Wo);tr.prototype.g=function(){return new XMLHttpRequest};tr.prototype.i=function(){return{}};io=new tr;function $s(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new vs(this),this.O=Dv,t=Jr?125:void 0,this.T=new Xi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rh}function rh(){this.i=null,this.g="",this.h=!1}var Dv=45e3,ro={},Ni={};x=$s.prototype;x.setTimeout=function(t){this.O=t};function oo(t,e,n){t.K=1,t.v=sr(Ot(e)),t.s=n,t.P=!0,oh(t,null)}function oh(t,e){t.F=Date.now(),qs(t),t.A=Ot(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ph(n.i,"t",s),t.C=0,n=t.l.H,t.h=new rh,t.g=Mh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Iv(We(t.La,t,t.g),t.N)),Ju(t.S,t.g,"readystatechange",t.ib),e=t.H?ju(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ys(),Tv(t.j,t.u,t.A,t.m,t.U,t.s)}x.ib=function(t){t=t.target;const e=this.L;e&&At(t)==3?e.l():this.La(t)};x.La=function(t){try{if(t==this.g)e:{const u=At(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Jr||this.g&&(this.h.h||this.g.fa()||kl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ys(3):ys(2)),nr(this);var n=this.g.aa();this.Y=n;t:if(ah(this)){var s=kl(this.g);t="";var i=s.length,r=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),os(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Av(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(a)){var c=a;break t}}c=null}if(n=c)Tn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ao(this,n);else{this.i=!1,this.o=3,tt(12),sn(this),os(this);break e}}this.P?(lh(this,u,o),Jr&&this.i&&u==3&&(Ju(this.S,this.T,"tick",this.hb),this.T.start())):(Tn(this.j,this.m,o,null),ao(this,o)),u==4&&sn(this),this.i&&!this.I&&(u==4?Rh(this.l,this):(this.i=!1,qs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),sn(this),os(this)}}}catch{}finally{}};function ah(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function lh(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Nv(t,n),i==Ni){e==4&&(t.o=4,tt(14),s=!1),Tn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ro){t.o=4,tt(15),Tn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Tn(t.j,t.m,i,null),ao(t,i);ah(t)&&i!=Ni&&i!=ro&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sa(e),e.K=!0,tt(11))):(Tn(t.j,t.m,n,"[Invalid Chunked Response]"),sn(t),os(t))}x.hb=function(){if(this.g){var t=At(this.g),e=this.g.fa();this.C<e.length&&(nr(this),lh(this,t,e),this.i&&t!=4&&qs(this))}};function Nv(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ni:(n=Number(e.substring(n,s)),isNaN(n)?ro:(s+=1,s+n>e.length?Ni:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.I=!0,sn(this)};function qs(t){t.V=Date.now()+t.O,ch(t,t.O)}function ch(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bs(We(t.gb,t),e)}function nr(t){t.B&&(X.clearTimeout(t.B),t.B=null)}x.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Sv(this.j,this.A),this.K!=2&&(ys(),tt(17)),sn(this),this.o=2,os(this)):ch(this,this.V-t)};function os(t){t.l.G==0||t.I||Rh(t.l,t)}function sn(t){nr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,zo(t.T),Zu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ao(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||lo(n.h,t))){if(!t.J&&lo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Li(n),or(n);else break e;na(n),tt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Bs(We(n.cb,n),6e3));if(1>=vh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else rn(n,11)}else if((t.J||n.g==t)&&Li(n),!Ci(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Xo(r,r.h),r.h=null))}if(s.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Ie(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ph(s,s.H?s.ka:null,s.V),o.J){yh(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(nr(a),qs(a)),s.g=o}else Dh(s);0<n.i.length&&ar(n)}else c[0]!="stop"&&c[0]!="close"||rn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?rn(n,7):ta(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ys(4)}catch{}}function Rv(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Gi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ov(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Gi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function uh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Gi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ov(t),s=Rv(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ln(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ln){this.h=e!==void 0?e:t.h,Ri(this,t.j),this.s=t.s,this.g=t.g,Oi(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_l(this,n),this.o=t.o}else t&&(n=String(t).match(hh))?(this.h=!!e,Ri(this,n[1]||"",!0),this.s=es(n[2]||""),this.g=es(n[3]||"",!0),Oi(this,n[4]),this.l=es(n[5]||"",!0),_l(this,n[6]||"",!0),this.o=es(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ts(e,bl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ts(e,bl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ts(n,n.charAt(0)=="/"?Uv:Mv,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ts(n,Vv)),t.join("")};function Ot(t){return new ln(t)}function Ri(t,e,n){t.j=n?es(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _l(t,e,n){e instanceof _s?(t.i=e,xv(t.i,t.h)):(n||(e=ts(e,Fv)),t.i=new _s(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function sr(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function es(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ts(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Pv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Pv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bl=/[#\/\?@]/g,Mv=/[#\?:]/g,Uv=/[#\?]/g,Fv=/[#\?@]/g,Vv=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function en(t){t.g||(t.g=new Map,t.h=0,t.i&&Lv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=_s.prototype;x.add=function(t,e){en(this),this.i=null,t=qn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dh(t,e){en(t),e=qn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fh(t,e){return en(t),e=qn(t,e),t.g.has(e)}x.forEach=function(t,e){en(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};x.oa=function(){en(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};x.W=function(t){en(this);let e=[];if(typeof t=="string")fh(this,t)&&(e=e.concat(this.g.get(qn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return en(this),this.i=null,t=qn(this,t),fh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ph(t,e,n){dh(t,e),0<n.length&&(t.i=null,t.g.set(qn(t,e),Vo(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function qn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xv(t,e){e&&!t.j&&(en(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(dh(this,s),ph(this,i,n))},t)),t.j=e}var Bv=class{constructor(t,e){this.h=t,this.g=e}};function mh(t){this.l=t||jv,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jv=10;function gh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vh(t){return t.h?1:t.g?t.g.size:0}function lo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xo(t,e){t.g?t.g.add(e):t.h=e}function yh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mh.prototype.cancel=function(){if(this.i=_h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _h(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vo(t.i)}function Jo(){}Jo.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Jo.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function $v(){this.g=new Jo}function qv(t,e,n){const s=n||"";try{uh(t,function(i,r){let o=i;Vs(i)&&(o=Ko(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Hv(t,e){const n=new Ji;if(X.Image){const s=new Image;s.onload=ni(ii,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ni(ii,n,s,"TestLoadImage: error",!1,e),s.onabort=ni(ii,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ni(ii,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ii(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Hs(t){this.l=t.ac||null,this.j=t.jb||!1}He(Hs,Wo);Hs.prototype.g=function(){return new ir(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function ir(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(ir,xe);var Zo=0;x=ir.prototype;x.open=function(t,e){if(this.readyState!=Zo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=Zo};x.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bh(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function bh(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}x.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ks(this):bs(this),this.readyState==3&&bh(this)}};x.Va=function(t){this.g&&(this.response=this.responseText=t,Ks(this))};x.Ua=function(t){this.g&&(this.response=t,Ks(this))};x.ga=function(){this.g&&Ks(this)};function Ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Kv=X.JSON.parse;function Ce(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wh,this.K=this.L=!1}He(Ce,xe);var wh="",zv=/^https?$/i,Gv=["POST","PUT"];x=Ce.prototype;x.Ka=function(t){this.L=t};x.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():io.g(),this.C=this.u?yl(this.u):yl(io),this.g.onreadystatechange=We(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){wl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=Fu(Gv,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ih(this),0<this.B&&((this.K=Wv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.qa,this)):this.A=Go(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wl(this,r)}};function Wv(t){return Ln&&hv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.qa=function(){typeof Fo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function wl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kh(t),rr(t)}function kh(t){t.D||(t.D=!0,$e(t,"complete"),$e(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),rr(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rr(this,!0)),Ce.X.M.call(this)};x.Ha=function(){this.s||(this.F||this.v||this.l?Eh(this):this.fb())};x.fb=function(){Eh(this)};function Eh(t){if(t.h&&typeof Fo<"u"&&(!t.C[1]||At(t)!=4||t.aa()!=2)){if(t.v&&At(t)==4)Go(t.Ha,0,t);else if($e(t,"readystatechange"),At(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(hh)[1]||null;if(!i&&X.self&&X.self.location){var r=X.self.location.protocol;i=r.substr(0,r.length-1)}s=!zv.test(i?i.toLowerCase():"")}n=s}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var o=2<At(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",kh(t)}}finally{rr(t)}}}}function rr(t,e){if(t.g){Ih(t);const n=t.g,s=t.C[0]?Si:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ih(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function At(t){return t.g?t.g.readyState:0}x.aa=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}};x.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Kv(e)}};function kl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ea=function(){return this.m};x.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Th(t){let e="";return Bo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ea(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Th(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function Yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ah(t){this.Ca=0,this.i=[],this.j=new Ji,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Yn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Yn("baseRetryDelayMs",5e3,t),this.bb=Yn("retryDelaySeedMs",1e4,t),this.$a=Yn("forwardChannelMaxRetries",2,t),this.ta=Yn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mh(t&&t.concurrentRequestLimit),this.Fa=new $v,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}x=Ah.prototype;x.ma=8;x.G=1;function ta(t){if(Sh(t),t.G==3){var e=t.U++,n=Ot(t.F);Ie(n,"SID",t.I),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),zs(t,n),e=new $s(t,t.j,e,void 0),e.K=2,e.v=sr(Ot(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mh(e.l,null),e.g.da(e.v)),e.F=Date.now(),qs(e)}Lh(t)}function or(t){t.g&&(sa(t),t.g.cancel(),t.g=null)}function Sh(t){or(t),t.u&&(X.clearTimeout(t.u),t.u=null),Li(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function ar(t){gh(t.h)||t.m||(t.m=!0,Qu(t.Ja,t),t.C=0)}function Qv(t,e){return vh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Bs(We(t.Ja,t,e),Oh(t,t.C)),t.C++,!0)}x.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new $s(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ju(r),$u(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ch(this,i,e),n=Ot(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),zs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Th(r)))+"&"+e:this.o&&ea(n,this.o,r)),Xo(this.h,i),this.Ya&&Ie(n,"TYPE","init"),this.O?(Ie(n,"$req",e),Ie(n,"SID","null"),i.Z=!0,oo(i,n,null)):oo(i,n,e),this.G=2}}else this.G==3&&(t?El(this,t):this.i.length==0||gh(this.h)||El(this))};function El(t,e){var n;e?n=e.m:n=t.U++;const s=Ot(t.F);Ie(s,"SID",t.I),Ie(s,"RID",n),Ie(s,"AID",t.T),zs(t,s),t.o&&t.s&&ea(s,t.o,t.s),n=new $s(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ch(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Xo(t.h,n),oo(n,s,e)}function zs(t,e){t.ia&&Bo(t.ia,function(n,s){Ie(e,s,n)}),t.l&&uh({},function(n,s){Ie(e,s,n)})}function Ch(t,e,n){n=Math.min(t.i.length,n);var s=t.l?We(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{qv(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Dh(t){t.g||t.u||(t.Z=1,Qu(t.Ia,t),t.A=0)}function na(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Bs(We(t.Ia,t),Oh(t,t.A)),t.A++,!0)}x.Ia=function(){if(this.u=null,Nh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Bs(We(this.eb,this),t)}};x.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),or(this),Nh(this))};function sa(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function Nh(t){t.g=new $s(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ot(t.sa);Ie(e,"RID","rpc"),Ie(e,"SID",t.I),Ie(e,"CI",t.L?"0":"1"),Ie(e,"AID",t.T),Ie(e,"TYPE","xmlhttp"),zs(t,e),t.o&&t.s&&ea(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=sr(Ot(e)),n.s=null,n.P=!0,oh(n,t)}x.cb=function(){this.v!=null&&(this.v=null,or(this),na(this),tt(19))};function Li(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function Rh(t,e){var n=null;if(t.g==e){Li(t),sa(t),t.g=null;var s=2}else if(lo(t.h,e))n=e.D,yh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Zi(),$e(s,new nh(s,n)),ar(t)}else Dh(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Qv(t,e)||s==2&&na(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:rn(t,5);break;case 4:rn(t,10);break;case 3:rn(t,6);break;default:rn(t,2)}}}function Oh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function rn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=We(t.kb,t);n||(n=new ln("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Ri(n,"https"),sr(n)),Hv(n.toString(),s)}else tt(2);t.G=0,t.l&&t.l.va(e),Lh(t),Sh(t)}x.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Lh(t){if(t.G=0,t.la=[],t.l){const e=_h(t.h);(e.length!=0||t.i.length!=0)&&(dl(t.la,e),dl(t.la,t.i),t.h.i.length=0,Vo(t.i),t.i.length=0),t.l.ua()}}function Ph(t,e,n){var s=n instanceof ln?Ot(n):new ln(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Oi(s,s.m);else{var i=X.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ln(null,void 0);s&&Ri(r,s),e&&(r.g=e),i&&Oi(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ie(s,n,e),Ie(s,"VER",t.ma),zs(t,s),s}function Mh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ce(new Hs({jb:!0})):new Ce(t.ra),e.Ka(t.H),e}function Uh(){}x=Uh.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Ra=function(){};function Pi(){if(Ln&&!(10<=Number(dv)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){xe.call(this),this.g=new Ah(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ci(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ci(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hn(this)}He(ct,xe);ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ph(t,null,t.V),ar(t)};ct.prototype.close=function(){ta(this.g)};ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ko(t),t=n);e.i.push(new Bv(e.ab++,t)),e.G==3&&ar(e)};ct.prototype.M=function(){this.g.l=null,delete this.j,ta(this.g),delete this.g,ct.X.M.call(this)};function Fh(t){Qo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(Fh,Qo);function Vh(){Yo.call(this),this.status=1}He(Vh,Yo);function Hn(t){this.g=t}He(Hn,Uh);Hn.prototype.xa=function(){$e(this.g,"a")};Hn.prototype.wa=function(t){$e(this.g,new Fh(t))};Hn.prototype.va=function(t){$e(this.g,new Vh)};Hn.prototype.ua=function(){$e(this.g,"b")};Pi.prototype.createWebChannel=Pi.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;er.NO_ERROR=0;er.TIMEOUT=8;er.HTTP_ERROR=6;sh.COMPLETE="complete";ih.EventType=js;js.OPEN="a";js.CLOSE="b";js.ERROR="c";js.MESSAGE="d";xe.prototype.listen=xe.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var Yv=function(){return new Pi},Xv=function(){return Zi()},Fr=er,Jv=sh,Zv=yn,Il={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ey=Hs,ri=ih,ty=Ce;const Tl="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let Kn="9.12.1";/**
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
 */const pn=new To("@firebase/firestore");function Al(){return pn.logLevel}function j(t,...e){if(pn.logLevel<=me.DEBUG){const n=e.map(ia);pn.debug(`Firestore (${Kn}): ${t}`,...n)}}function Lt(t,...e){if(pn.logLevel<=me.ERROR){const n=e.map(ia);pn.error(`Firestore (${Kn}): ${t}`,...n)}}function co(t,...e){if(pn.logLevel<=me.WARN){const n=e.map(ia);pn.warn(`Firestore (${Kn}): ${t}`,...n)}}function ia(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: `+t;throw Lt(e),new Error(e)}function we(t,e){t||ne()}function se(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class xh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ny{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class sy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iy{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(we(typeof s.accessToken=="string"),new xh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new ze(e)}}class ry{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(we(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class oy{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new ry(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ay{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ly{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.A=n.token,new ay(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function cy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Bh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=cy(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ve(t,e){return t<e?-1:t>e?1:0}function Pn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Me(0,0))}static max(){return new ce(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ws{constructor(e,n,s){n===void 0?n=0:n>e.length&&ne(),s===void 0?s=e.length-n:s>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ws?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ws{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const uy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends ws{construct(e,n,s){return new Ge(e,n,s)}static isValidIdentifier(e){return uy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Se.fromString(e))}static fromName(e){return new W(Se.fromString(e).popFirst(5))}static empty(){return new W(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Se(e.slice()))}}function hy(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(s===1e9?new Me(n+1,0):new Me(n,s));return new Wt(i,W.empty(),e)}function dy(t){return new Wt(t.readTime,t.key,-1)}class Wt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Wt(ce.min(),W.empty(),-1)}static max(){return new Wt(ce.max(),W.empty(),-1)}}function fy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const py="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class my{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==py)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(i=>i?R.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new R((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new R((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ra{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Sl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _n(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */ra.at=-1;class Fe{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oi(this.root,e,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oi(this.root,e,this.comparator,!0)}}class oi{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Be.RED,this.left=i!=null?i:Be.EMPTY,this.right=r!=null?r:Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Be(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cl(this.data.getIterator())}getIteratorFrom(e){return new Cl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Cl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new dt([])}unionWith(e){let n=new Ue(Ge.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const gy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(t){if(we(!!t),typeof t=="string"){let e=0;const n=gy.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function $h(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qh(t){const e=t.mapValue.fields.__previous_value__;return $h(e)?qh(e):e}function ks(t){const e=Qt(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class vy{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Es{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Es&&e.projectId===this.projectId&&e.database===this.database}}function lr(t){return t==null}function Mi(t){return t===0&&1/t==-1/0}function yy(t){return typeof t=="number"&&Number.isInteger(t)&&!Mi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$h(t)?4:_y(t)?9007199254740991:10:ne()}function _t(t,e){if(t===e)return!0;const n=mn(t);if(n!==mn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ks(t).isEqual(ks(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Qt(s.timestampValue),o=Qt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Le(s.doubleValue),o=Le(i.doubleValue);return r===o?Mi(r)===Mi(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Pn(t.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Sl(r)!==Sl(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!_t(r[a],o[a])))return!1;return!0}(t,e);default:return ne()}}function Is(t,e){return(t.values||[]).find(n=>_t(n,e))!==void 0}function Un(t,e){if(t===e)return 0;const n=mn(t),s=mn(e);if(n!==s)return ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Le(i.integerValue||i.doubleValue),a=Le(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Dl(t.timestampValue,e.timestampValue);case 4:return Dl(ks(t),ks(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Mn(i),a=Mn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ve(o[l],a[l]);if(c!==0)return c}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ve(Le(i.latitude),Le(r.latitude));return o!==0?o:ve(Le(i.longitude),Le(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Un(o[l],a[l]);if(c)return c}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ai.mapValue&&r===ai.mapValue)return 0;if(i===ai.mapValue)return 1;if(r===ai.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ve(a[u],c[u]);if(h!==0)return h;const d=Un(o[a[u]],l[c[u]]);if(d!==0)return d}return ve(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Dl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Qt(t),s=Qt(e),i=ve(n.seconds,s.seconds);return i!==0?i:ve(n.nanos,s.nanos)}function Nn(t){return uo(t)}function uo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Qt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=uo(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${uo(s.fields[a])}`;return r+"}"}(t.mapValue):ne();var e,n}function ho(t){return!!t&&"integerValue"in t}function oa(t){return!!t&&"arrayValue"in t}function Nl(t){return!!t&&"nullValue"in t}function Rl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pi(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _n(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _y(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!pi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=Ge.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());pi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];pi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){_n(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new st(as(this.value))}}function Hh(t){const e=[];return _n(t.fields,(n,s)=>{const i=new Ge([n]);if(pi(s)){const r=Hh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new dt(e)}/**
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
 */class je{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new je(e,0,ce.min(),ce.min(),st.empty(),0)}static newFoundDocument(e,n,s){return new je(e,1,n,ce.min(),s,0)}static newNoDocument(e,n){return new je(e,2,n,ce.min(),st.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,ce.min(),st.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class by{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Ol(t,e=null,n=[],s=[],i=null,r=null,o=null){return new by(t,e,n,s,i,r,o)}function aa(t){const e=se(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Nn(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),lr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Nn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Nn(s)).join(",")),e.ht=n}return e.ht}function wy(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Nn(s.value)}`;var s}).join(", ")}]`),lr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Nn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Nn(n)).join(",")),`Target(${e})`}function la(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Dy(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!_t(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pl(t.startAt,e.startAt)&&Pl(t.endAt,e.endAt)}function fo(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class it extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new ky(e,n,s):n==="array-contains"?new Ty(e,s):n==="in"?new Ay(e,s):n==="not-in"?new Sy(e,s):n==="array-contains-any"?new Cy(e,s):new it(e,n,s)}static lt(e,n,s){return n==="in"?new Ey(e,s):new Iy(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Un(n,this.value)):n!==null&&mn(this.value)===mn(n)&&this.ft(Un(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ky extends it{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.ft(n)}}class Ey extends it{constructor(e,n){super(e,"in",n),this.keys=Kh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Iy extends it{constructor(e,n){super(e,"not-in",n),this.keys=Kh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class Ty extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oa(n)&&Is(n.arrayValue,this.value)}}class Ay extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Is(this.value.arrayValue,n)}}class Sy extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Is(this.value.arrayValue,n)}}class Cy extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Is(this.value.arrayValue,s))}}class Ui{constructor(e,n){this.position=e,this.inclusive=n}}class ls{constructor(e,n="asc"){this.field=e,this.dir=n}}function Dy(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ll(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=Un(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Pl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class cr{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ny(t,e,n,s,i,r,o,a){return new cr(t,e,n,s,i,r,o,a)}function ca(t){return new cr(t)}function Ml(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ry(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Oy(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ly(t){return t.collectionGroup!==null}function Ts(t){const e=se(t);if(e._t===null){e._t=[];const n=Oy(e),s=Ry(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new ls(n)),e._t.push(new ls(Ge.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ls(Ge.keyField(),r))}}}return e._t}function Pt(t){const e=se(t);if(!e.wt)if(e.limitType==="F")e.wt=Ol(e.path,e.collectionGroup,Ts(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ts(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new ls(r.field,o))}const s=e.endAt?new Ui(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ui(e.startAt.position,e.startAt.inclusive):null;e.wt=Ol(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function po(t,e,n){return new cr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ur(t,e){return la(Pt(t),Pt(e))&&t.limitType===e.limitType}function zh(t){return`${aa(Pt(t))}|lt:${t.limitType}`}function mo(t){return`Query(target=${wy(Pt(t))}; limitType=${t.limitType})`}function ua(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ll(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ts(n),s)||n.endAt&&!function(i,r,o){const a=Ll(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ts(n),s))}(t,e)}function Py(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gh(t){return(e,n)=>{let s=!1;for(const i of Ts(t)){const r=My(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function My(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Un(a,l):ne()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ne()}}/**
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
 */function Wh(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(e)?"-0":e}}function Qh(t){return{integerValue:""+t}}function Uy(t,e){return yy(e)?Qh(e):Wh(t,e)}/**
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
 */class hr{constructor(){this._=void 0}}function Fy(t,e,n){return t instanceof Fi?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof As?Xh(t,e):t instanceof Ss?Jh(t,e):function(s,i){const r=Yh(s,i),o=Ul(r)+Ul(s.yt);return ho(r)&&ho(s.yt)?Qh(o):Wh(s.It,o)}(t,e)}function Vy(t,e,n){return t instanceof As?Xh(t,e):t instanceof Ss?Jh(t,e):n}function Yh(t,e){return t instanceof Vi?ho(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Fi extends hr{}class As extends hr{constructor(e){super(),this.elements=e}}function Xh(t,e){const n=Zh(e);for(const s of t.elements)n.some(i=>_t(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ss extends hr{constructor(e){super(),this.elements=e}}function Jh(t,e){let n=Zh(e);for(const s of t.elements)n=n.filter(i=>!_t(i,s));return{arrayValue:{values:n}}}class Vi extends hr{constructor(e,n){super(),this.It=e,this.yt=n}}function Ul(t){return Le(t.integerValue||t.doubleValue)}function Zh(t){return oa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xy(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof As&&s instanceof As||n instanceof Ss&&s instanceof Ss?Pn(n.elements,s.elements,_t):n instanceof Vi&&s instanceof Vi?_t(n.yt,s.yt):n instanceof Fi&&s instanceof Fi}(t.transform,e.transform)}class By{constructor(e,n){this.version=e,this.transformResults=n}}class yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dr{}function ed(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nd(t.key,yt.none()):new Qs(t.key,t.data,yt.none());{const n=t.data,s=st.empty();let i=new Ue(Ge.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new tn(t.key,s,new dt(i.toArray()),yt.none())}}function jy(t,e,n){t instanceof Qs?function(s,i,r){const o=s.value.clone(),a=Vl(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof tn?function(s,i,r){if(!mi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Vl(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(td(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function cs(t,e,n,s){return t instanceof Qs?function(i,r,o,a){if(!mi(i.precondition,r))return o;const l=i.value.clone(),c=xl(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof tn?function(i,r,o,a){if(!mi(i.precondition,r))return o;const l=xl(i.fieldTransforms,a,r),c=r.data;return c.setAll(td(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return mi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function $y(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Yh(s.transform,i||null);r!=null&&(n===null&&(n=st.empty()),n.set(s.field,r))}return n||null}function Fl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pn(n,s,(i,r)=>xy(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qs extends dr{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tn extends dr{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function td(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Vl(t,e,n){const s=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Vy(o,a,n[i]))}return s}function xl(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Fy(r,o,e))}return s}class nd extends dr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qy extends dr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hy{constructor(e){this.count=e}}/**
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
 */var Oe,fe;function Ky(t){switch(t){default:return ne();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function sd(t){if(t===void 0)return Lt("GRPC error has no .code"),O.UNKNOWN;switch(t){case Oe.OK:return O.OK;case Oe.CANCELLED:return O.CANCELLED;case Oe.UNKNOWN:return O.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return O.INTERNAL;case Oe.UNAVAILABLE:return O.UNAVAILABLE;case Oe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Oe.NOT_FOUND:return O.NOT_FOUND;case Oe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Oe.ABORTED:return O.ABORTED;case Oe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Oe.DATA_LOSS:return O.DATA_LOSS;default:return ne()}}(fe=Oe||(Oe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return jh(this.inner)}size(){return this.innerSize}}/**
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
 */const zy=new Fe(W.comparator);function Mt(){return zy}const id=new Fe(W.comparator);function ns(...t){let e=id;for(const n of t)e=e.insert(n.key,n);return e}function rd(t){let e=id;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function on(){return us()}function od(){return us()}function us(){return new zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Gy=new Fe(W.comparator),Wy=new Ue(W.comparator);function he(...t){let e=Wy;for(const n of t)e=e.add(n);return e}const Qy=new Ue(ve);function ad(){return Qy}/**
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
 */class fr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new fr(ce.min(),i,ad(),Mt(),he())}}class Ys{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ys(s,n,he(),he(),he())}}/**
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
 */class gi{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class ld{constructor(e,n){this.targetId=e,this.At=n}}class cd{constructor(e,n,s=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Bl{constructor(){this.Rt=0,this.bt=$l(),this.Pt=Ze.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=he(),n=he(),s=he();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ne()}}),new Ys(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=$l()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Yy{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Mt(),this.qt=jl(),this.Kt=new Ue(ve)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(fo(r))if(s===0){const o=new W(r.path);this.jt(n,o,je.newNoDocument(o,ce.min()))}else we(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&fo(a.target)){const l=new W(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,je.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=he();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new fr(e,n,this.Kt,this.Ut,s);return this.Ut=Mt(),this.qt=jl(),this.Kt=new Ue(ve),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Bl,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ue(ve),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Bl),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function jl(){return new Fe(W.comparator)}function $l(){return new Fe(W.comparator)}/**
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
 */const Xy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Zy{constructor(e,n){this.databaseId=e,this.gt=n}}function xi(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ud(t,e){return t.gt?e.toBase64():e.toUint8Array()}function e_(t,e){return xi(t,e.toTimestamp())}function Dt(t){return we(!!t),ce.fromTimestamp(function(e){const n=Qt(e);return new Me(n.seconds,n.nanos)}(t))}function ha(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function hd(t){const e=Se.fromString(t);return we(pd(e)),e}function go(t,e){return ha(t.databaseId,e.path)}function Vr(t,e){const n=hd(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(dd(n))}function vo(t,e){return ha(t.databaseId,e)}function t_(t){const e=hd(t);return e.length===4?Se.emptyPath():dd(e)}function yo(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dd(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ql(t,e,n){return{name:go(t,e),fields:n.value.mapValue.fields}}function n_(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(we(c===void 0||typeof c=="string"),Ze.fromBase64String(c||"")):(we(c===void 0||c instanceof Uint8Array),Ze.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?O.UNKNOWN:sd(l.code);return new Y(c,l.message||"")}(o);n=new cd(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Vr(t,s.document.name),r=Dt(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=je.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new gi(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Vr(t,s.document),r=s.readTime?Dt(s.readTime):ce.min(),o=je.newNoDocument(i,r),a=s.removedTargetIds||[];n=new gi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Vr(t,s.document),r=s.removedTargetIds||[];n=new gi([],r,i,null)}else{if(!("filter"in e))return ne();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Hy(i),o=s.targetId;n=new ld(o,r)}}return n}function s_(t,e){let n;if(e instanceof Qs)n={update:ql(t,e.key,e.value)};else if(e instanceof nd)n={delete:go(t,e.key)};else if(e instanceof tn)n={update:ql(t,e.key,e.data),updateMask:f_(e.fieldMask)};else{if(!(e instanceof qy))return ne();n={verify:go(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Fi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof As)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ss)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vi)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw ne()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:e_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function i_(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Dt(s.updateTime):Dt(i);return r.isEqual(ce.min())&&(r=Dt(i)),new By(r,s.transformResults||[])}(n,e))):[]}function r_(t,e){return{documents:[vo(t,e.path)]}}function o_(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=vo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(Rl(h.value))return{unaryFilter:{field:kn(h.field),op:"IS_NAN"}};if(Nl(h.value))return{unaryFilter:{field:kn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Rl(h.value))return{unaryFilter:{field:kn(h.field),op:"IS_NOT_NAN"}};if(Nl(h.value))return{unaryFilter:{field:kn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(h.field),op:u_(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:kn(u.field),direction:c_(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||lr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function a_(t){let e=t_(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){we(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=fd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ls(An(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,lr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ui(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ui(d,h)}(n.endAt)),Ny(e,i,o,r,a,"F",l,c)}function l_(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ne()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function fd(t){return t?t.unaryFilter!==void 0?[d_(t)]:t.fieldFilter!==void 0?[h_(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>fd(e)).reduce((e,n)=>e.concat(n)):ne():[]}function c_(t){return Xy[t]}function u_(t){return Jy[t]}function kn(t){return{fieldPath:t.canonicalString()}}function An(t){return Ge.fromServerFormat(t.fieldPath)}function h_(t){return it.create(An(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}function d_(t){switch(t.unaryFilter.op){case"IS_NAN":const e=An(t.unaryFilter.field);return it.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=An(t.unaryFilter.field);return it.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=An(t.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=An(t.unaryFilter.field);return it.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}function f_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class p_{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&jy(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=cs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=cs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=od();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=ed(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Pn(this.mutations,e.mutations,(n,s)=>Fl(n,s))&&Pn(this.baseMutations,e.baseMutations,(n,s)=>Fl(n,s))}}class da{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){we(e.mutations.length===s.length);let i=Gy;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new da(e,n,s,i)}}/**
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
 */class m_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cn{constructor(e,n,s,i,r=ce.min(),o=ce.min(),a=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class g_{constructor(e){this.re=e}}function v_(t){const e=a_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?po(e,e.limit,"L"):e}/**
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
 */class y_{constructor(){this.Ye=new __}addToCollectionParentIndex(e,n){return this.Ye.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Wt.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Wt.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class __{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Ue(Se.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ue(Se.comparator)).toArray()}}/**
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
 */class b_{constructor(){this.changes=new zn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class w_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class k_{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&cs(s.mutation,i,dt.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,he()).next(()=>s))}getLocalViewOfDocuments(e,n,s=he()){const i=on();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ns();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=on();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,he()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Mt();const o=us(),a=us();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof tn)?r=r.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),cs(u.mutation,c,u.mutation.getFieldMask(),Me.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new w_(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=us();let i=new Fe((o,a)=>o-a),r=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||dt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||he()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=od();u.forEach(d=>{if(!r.has(d)){const m=ed(n.get(d),s.get(d));m!==null&&h.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ly(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):R.resolve(on());let a=-1,l=r;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?R.resolve():this.getBaseDocument(e,u,h).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,he())).next(u=>({batchId:a,changes:rd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let i=ns();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ns();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(c,u){return new cr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,je.newInvalidDocument(c)))});let o=ns();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&cs(c.mutation,l,dt.empty(),Me.now()),ua(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):R.resolve(je.newInvalidDocument(n))}}/**
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
 */class E_{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Dt(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:v_(s.bundledQuery),readTime:Dt(s.readTime)}}(n)),R.resolve()}}/**
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
 */class I_{constructor(){this.overlays=new Fe(W.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=on();return R.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const i=on(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Fe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=on(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=on(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return R.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new m_(n,s));let r=this.es.get(n);r===void 0&&(r=he(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class fa{constructor(){this.ns=new Ue(Ve.ss),this.rs=new Ue(Ve.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ve(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ve(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new W(new Se([])),s=new Ve(n,e),i=new Ve(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new W(new Se([])),s=new Ve(n,e),i=new Ve(n,e+1);let r=he();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ve(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ve{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return W.comparator(e.key,n.key)||ve(e._s,n._s)}static os(e,n){return ve(e._s,n._s)||W.comparator(e.key,n.key)}}/**
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
 */class T_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ue(Ve.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new p_(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ve(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ue(ve);return n.forEach(i=>{const r=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),R.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new Ve(new W(r),0);let a=new Ue(ve);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return R.forEach(n.mutations,i=>{const r=new Ve(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ve(n,0),i=this.gs.firstAfterOrEqual(s);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class A_{constructor(e){this.Es=e,this.docs=new Fe(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let s=Mt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():je.newInvalidDocument(i))}),R.resolve(s)}getAllFromCollection(e,n,s){let i=Mt();const r=new W(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||fy(dy(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,s,i){ne()}As(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new S_(this)}getSize(e){return R.resolve(this.size)}}class S_ extends b_{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class C_{constructor(e){this.persistence=e,this.Rs=new zn(n=>aa(n),la),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.bs=0,this.Ps=new fa,this.targetCount=0,this.vs=Fn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Fn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(r).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
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
 */class D_{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ra(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new C_(this),this.indexManager=new y_,this.remoteDocumentCache=function(s){return new A_(s)}(s=>this.referenceDelegate.xs(s)),this.It=new g_(n),this.Ns=new E_(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new I_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new T_(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const i=new N_(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return R.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class N_ extends my{constructor(e){super(),this.currentSequenceNumber=e}}class pa{constructor(e){this.persistence=e,this.Fs=new fa,this.$s=null}static Bs(e){return new pa(e)}get Ls(){if(this.$s)return this.$s;throw ne()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,s=>{const i=W.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,ce.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class ma{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=he(),i=he();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ma(e,n.fromCache,s,i)}}/**
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
 */class R_{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Ml(n))return R.resolve(null);let s=Pt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=po(n,null,"F"),s=Pt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=he(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,po(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return Ml(n)||i.isEqual(ce.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Al()<=me.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mo(n)),this.Bi(e,o,n,hy(i,-1)))})}Fi(e,n){let s=new Ue(Gh(e));return n.forEach((i,r)=>{ua(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Al()<=me.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",mo(n)),this.Ni.getDocumentsMatchingQuery(e,n,Wt.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class O_{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Fe(ve),this.qi=new zn(r=>aa(r),la),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new k_(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function L_(t,e,n,s){return new O_(t,e,n,s)}async function md(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=he();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function P_(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=R.resolve();return h.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(g=>{const _=l.docVersions.get(m);we(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=he();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function gd(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function M_(t,e){const n=se(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Ze.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),i=i.insert(h,m),function(g,_,w){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,m,u)&&a.push(n.Cs.updateTargetData(r,m))});let l=Mt(),c=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(U_(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(ce.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function U_(t,e,n){let s=he(),i=he();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Mt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function F_(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function V_(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,R.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new cn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function _o(t,e,n){const s=se(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ws(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Hl(t,e,n){const s=se(t);let i=ce.min(),r=he();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=se(a),h=u.qi.get(c);return h!==void 0?R.resolve(u.Ui.get(h)):u.Cs.getTargetData(l,c)}(s,o,Pt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:ce.min(),n?r:he())).next(a=>(x_(s,Py(e),a),{documents:a,Hi:r})))}function x_(t,e,n){let s=t.Ki.get(e)||ce.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Kl{constructor(){this.activeTargetIds=ad()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class B_{constructor(){this.Lr=new Kl,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Kl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class j_{qr(e){}shutdown(){}}/**
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
 */class zl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const $_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class q_{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class H_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);j("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(j("RestConnection","Received: ",l),l),l=>{throw co("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Kn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=$_[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new ty;a.setWithCredentials(!0),a.listenOnce(Jv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fr.NO_ERROR:const c=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Fr.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case Fr.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(g)>=0?g:O.UNKNOWN}(h.status);o(new Y(d,h.message))}else o(new Y(O.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Y(O.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Yv(),o=Xv(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ey({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");j("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new q_({Hr:g=>{h?j("Connection","Not sending because WebChannel is closed:",g):(u||(j("Connection","Opening WebChannel transport."),c.open(),u=!0),j("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),m=(g,_,w)=>{g.listen(_,b=>{try{w(b)}catch(v){setTimeout(()=>{throw v},0)}})};return m(c,ri.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),m(c,ri.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),d.io())}),m(c,ri.EventType.ERROR,g=>{h||(h=!0,co("Connection","WebChannel transport errored:",g),d.io(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),m(c,ri.EventType.MESSAGE,g=>{var _;if(!h){const w=g.data[0];we(!!w);const b=w,v=b.error||((_=b[0])===null||_===void 0?void 0:_.error);if(v){j("Connection","WebChannel received error:",v);const k=v.status;let A=function(I){const P=Oe[I];if(P!==void 0)return sd(P)}(k),T=v.message;A===void 0&&(A=O.INTERNAL,T="Unknown error status: "+k+" with message "+v.message),h=!0,d.io(new Y(A,T)),c.close()}else j("Connection","WebChannel received:",w),d.ro(w)}}),m(o,Zv.STAT_EVENT,g=>{g.stat===Il.PROXY?j("Connection","Detected buffering proxy"):g.stat===Il.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function xr(){return typeof document<"u"?document:null}/**
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
 */function pr(t){return new Zy(t,!0)}class vd{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class yd{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new vd(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Lt(n.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new Y(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class K_ extends yd{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=n_(this.It,e),s=function(i){if(!("targetChange"in i))return ce.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?ce.min():r.readTime?Dt(r.readTime):ce.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=yo(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=fo(a)?{documents:r_(i,a)}:{query:o_(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ud(i,r.resumeToken):r.snapshotVersion.compareTo(ce.min())>0&&(o.readTime=xi(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=l_(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=yo(this.It),n.removeTarget=e,this.Lo(n)}}class z_ extends yd{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=i_(e.writeResults,e.commitTime),s=Dt(e.commitTime);return this.listener.tu(s,n)}return we(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=yo(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>s_(this.It,s))};this.Lo(n)}}/**
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
 */class G_ extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(O.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Y(O.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class W_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Lt(n),this.uu=!1):j("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class Q_{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{bn(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=se(a);l.wu.add(4),await Xs(l),l.yu.set("Unknown"),l.wu.delete(4),await mr(l)}(this))})}),this.yu=new W_(s,i)}}async function mr(t){if(bn(t))for(const e of t.mu)await e(!0)}async function Xs(t){for(const e of t.mu)await e(!1)}function _d(t,e){const n=se(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),ya(n)?va(n):Gn(n).Oo()&&ga(n,e))}function bd(t,e){const n=se(t),s=Gn(n);n._u.delete(e),s.Oo()&&wd(n,e),n._u.size===0&&(s.Oo()?s.$o():bn(n)&&n.yu.set("Unknown"))}function ga(t,e){t.pu.Mt(e.targetId),Gn(t).Ho(e)}function wd(t,e){t.pu.Mt(e),Gn(t).Jo(e)}function va(t){t.pu=new Yy({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Gn(t).start(),t.yu.cu()}function ya(t){return bn(t)&&!Gn(t).ko()&&t._u.size>0}function bn(t){return se(t).wu.size===0}function kd(t){t.pu=void 0}async function Y_(t){t._u.forEach((e,n)=>{ga(t,e)})}async function X_(t,e){kd(t),ya(t)?(t.yu.lu(e),va(t)):t.yu.set("Unknown")}async function J_(t,e,n){if(t.yu.set("Online"),e instanceof cd&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Bi(t,s)}else if(e instanceof gi?t.pu.Gt(e):e instanceof ld?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ce.min()))try{const s=await gd(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Ze.EMPTY_BYTE_STRING,l.snapshotVersion)),wd(i,a);const c=new cn(l.target,a,1,l.sequenceNumber);ga(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Bi(t,s)}}async function Bi(t,e,n){if(!Ws(e))throw e;t.wu.add(1),await Xs(t),t.yu.set("Offline"),n||(n=()=>gd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await mr(t)})}function Ed(t,e){return e().catch(n=>Bi(t,n,e))}async function gr(t){const e=se(t),n=Yt(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Z_(e);)try{const i=await F_(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,eb(e,i)}catch(i){await Bi(e,i)}Id(e)&&Td(e)}function Z_(t){return bn(t)&&t.du.length<10}function eb(t,e){t.du.push(e);const n=Yt(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Id(t){return bn(t)&&!Yt(t).ko()&&t.du.length>0}function Td(t){Yt(t).start()}async function tb(t){Yt(t).nu()}async function nb(t){const e=Yt(t);for(const n of t.du)e.Zo(n.mutations)}async function sb(t,e,n){const s=t.du.shift(),i=da.from(s,e,n);await Ed(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gr(t)}async function ib(t,e){e&&Yt(t).Xo&&await async function(n,s){if(i=s.code,Ky(i)&&i!==O.ABORTED){const r=n.du.shift();Yt(n).Fo(),await Ed(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await gr(n)}var i}(t,e),Id(t)&&Td(t)}async function Gl(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=bn(n);n.wu.add(3),await Xs(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await mr(n)}async function rb(t,e){const n=se(t);e?(n.wu.delete(2),await mr(n)):e||(n.wu.add(2),await Xs(n),n.yu.set("Unknown"))}function Gn(t){return t.Iu||(t.Iu=function(e,n,s){const i=se(e);return i.iu(),new K_(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Y_.bind(null,t),Zr:X_.bind(null,t),zo:J_.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),ya(t)?va(t):t.yu.set("Unknown")):(await t.Iu.stop(),kd(t))})),t.Iu}function Yt(t){return t.Tu||(t.Tu=function(e,n,s){const i=se(e);return i.iu(),new z_(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:tb.bind(null,t),Zr:ib.bind(null,t),eu:nb.bind(null,t),tu:sb.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await gr(t)):(await t.Tu.stop(),t.du.length>0&&(j("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class _a{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new _a(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ba(t,e){if(Lt("AsyncQueue",`${e}: ${t}`),Ws(t))return new Y(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=ns(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Wl{constructor(){this.Eu=new Fe(W.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):ne():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vn{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vn(e,n,Rn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ur(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class ob{constructor(){this.Ru=void 0,this.listeners=[]}}class ab{constructor(){this.queries=new zn(e=>zh(e),ur),this.onlineState="Unknown",this.bu=new Set}}async function lb(t,e){const n=se(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ob),i)try{r.Ru=await n.onListen(s)}catch(o){const a=ba(o,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&wa(n)}async function cb(t,e){const n=se(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ub(t,e){const n=se(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&wa(n)}function hb(t,e,n){const s=se(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function wa(t){t.bu.forEach(e=>{e.next()})}class db{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Vn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class Ad{constructor(e){this.key=e}}class Sd{constructor(e){this.key=e}}class fb{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=he(),this.mutatedKeys=he(),this.Gu=Gh(e),this.Qu=new Rn(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Wl,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),m=ua(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;d&&m?d.data.isEqual(m.data)?g!==_&&(s.track({type:3,doc:m}),w=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),w=!0,(l&&this.Gu(m,l)>0||c&&this.Gu(m,c)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),w=!0):d&&!m&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(m?(o=o.add(m),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,u)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return m(h)-m(d)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Vn(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Wl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=he(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Sd(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Ad(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=he();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Vn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class pb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class mb{constructor(e){this.key=e,this.nc=!1}}class gb{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new zn(a=>zh(a),ur),this.rc=new Map,this.oc=new Set,this.uc=new Fe(W.comparator),this.cc=new Map,this.ac=new fa,this.hc={},this.lc=new Map,this.fc=Fn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function vb(t,e){const n=Sb(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await V_(n.localStore,Pt(e));n.isPrimaryClient&&_d(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await yb(n,e,s,a==="current",o.resumeToken)}return i}async function yb(t,e,n,s,i){t._c=(h,d,m)=>async function(g,_,w,b){let v=_.view.Wu(w);v.$i&&(v=await Hl(g.localStore,_.query,!1).then(({documents:T})=>_.view.Wu(T,v)));const k=b&&b.targetChanges.get(_.targetId),A=_.view.applyChanges(v,g.isPrimaryClient,k);return Yl(g,_.targetId,A.Xu),A.snapshot}(t,h,d,m);const r=await Hl(t.localStore,e,!0),o=new fb(e,r.Hi),a=o.Wu(r.documents),l=Ys.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Yl(t,n,c.Xu);const u=new pb(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function _b(t,e){const n=se(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!ur(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),bd(n.remoteStore,s.targetId),bo(n,s.targetId)}).catch(Gs)):(bo(n,s.targetId),await _o(n.localStore,s.targetId,!0))}async function bb(t,e,n){const s=Cb(t);try{const i=await function(r,o){const a=se(r),l=Me.now(),c=o.reduce((d,m)=>d.add(m.key),he());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Mt(),g=he();return a.Gi.getEntries(d,c).next(_=>{m=_,m.forEach((w,b)=>{b.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(_=>{u=_;const w=[];for(const b of o){const v=$y(b,u.get(b.key).overlayedDocument);v!=null&&w.push(new tn(b.key,v,Hh(v.value.mapValue),yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(_=>{h=_;const w=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,w)})}).then(()=>({batchId:h.batchId,changes:rd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Fe(ve)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Js(s,i.changes),await gr(s.remoteStore)}catch(i){const r=ba(i,"Failed to persist write");n.reject(r)}}async function Cd(t,e){const n=se(t);try{const s=await M_(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?we(o.nc):i.removedDocuments.size>0&&(we(o.nc),o.nc=!1))}),await Js(n,s,e)}catch(s){await Gs(s)}}function Ql(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=se(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&wa(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wb(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Fe(W.comparator);o=o.insert(r,je.newNoDocument(r,ce.min()));const a=he().add(r),l=new fr(ce.min(),new Map,new Ue(ve),o,a);await Cd(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),ka(s)}else await _o(s.localStore,e,!1).then(()=>bo(s,e,n)).catch(Gs)}async function kb(t,e){const n=se(t),s=e.batch.batchId;try{const i=await P_(n.localStore,e);Nd(n,s,null),Dd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Js(n,i)}catch(i){await Gs(i)}}async function Eb(t,e,n){const s=se(t);try{const i=await function(r,o){const a=se(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(we(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Nd(s,e,n),Dd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Js(s,i)}catch(i){await Gs(i)}}function Dd(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Nd(t,e,n){const s=se(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function bo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Rd(t,s)})}function Rd(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(bd(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ka(t))}function Yl(t,e,n){for(const s of n)s instanceof Ad?(t.ac.addReference(s.key,e),Ib(t,s)):s instanceof Sd?(j("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Rd(t,s.key)):ne()}function Ib(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.oc.add(s),ka(t))}function ka(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new W(Se.fromString(e)),s=t.fc.next();t.cc.set(s,new mb(n)),t.uc=t.uc.insert(n,s),_d(t.remoteStore,new cn(Pt(ca(n.path)),s,2,ra.at))}}async function Js(t,e,n){const s=se(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ma.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(l,h=>R.forEach(h.Si,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>R.forEach(h.Di,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ws(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ui.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(h,g)}}}(s.localStore,r))}async function Tb(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await md(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new Y(O.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Js(n,s.ji)}}function Ab(t,e){const n=se(t),s=n.cc.get(e);if(s&&s.nc)return he().add(s.key);{let i=he();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Sb(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wb.bind(null,e),e.sc.zo=ub.bind(null,e.eventManager),e.sc.wc=hb.bind(null,e.eventManager),e}function Cb(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Eb.bind(null,e),e}class Db{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=pr(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return L_(this.persistence,new R_,e.initialUser,this.It)}yc(e){return new D_(pa.Bs,this.It)}gc(e){return new B_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ql(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tb.bind(null,this.syncEngine),await rb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ab}createDatastore(e){const n=pr(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new H_(i));var i;return function(r,o,a,l){return new G_(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Ql(this.syncEngine,a,0),o=zl.C()?new zl:new j_,new Q_(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new gb(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);j("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Xs(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Rb(t,e,n){if(!n)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ob(t,e,n,s){if(e===!0&&s===!0)throw new Y(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xl(t){if(!W.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ea(t);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Jl=new Map;class Zl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ob("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ia{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ny;switch(n.type){case"gapi":const s=n.client;return new oy(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Jl.get(e);n&&(j("ComponentProvider","Removing Datastore"),Jl.delete(e),n.terminate())}(this),Promise.resolve()}}function Lb(t,e,n,s={}){var i;const r=(t=gn(t,Ia))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&co("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ze.MOCK_USER;else{o=Pf(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new Y(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ze(l)}t._authCredentials=new sy(new xh(o,a))}}/**
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
 */class ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Ta{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ta(this.firestore,e,this._query)}}class Cs extends Ta{constructor(e,n,s){super(e,n,ca(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new W(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function Xt(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Bh.R()),Rb("doc","path",e),t instanceof Ia){const s=Se.fromString(e,...n);return Xl(s),new ot(t,null,new W(s))}{if(!(t instanceof ot||t instanceof Cs))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return Xl(s),new ot(t.firestore,t instanceof Cs?t.converter:null,new W(s))}}/**
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
 */class Pb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Mb{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=Bh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{j("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(j("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ba(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ub(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await md(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Fb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vb(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Gl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Gl(e.remoteStore,r)),t.onlineComponents=e}async function Vb(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await Ub(t,new Db)),t.offlineComponents}async function Od(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await Fb(t,new Nb)),t.onlineComponents}function xb(t){return Od(t).then(e=>e.syncEngine)}async function Bb(t){const e=await Od(t),n=e.eventManager;return n.onListen=vb.bind(null,e.syncEngine),n.onUnlisten=_b.bind(null,e.syncEngine),n}function jb(t,e,n={}){const s=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Pb({next:h=>{r.enqueueAndForget(()=>cb(i,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new Y(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new Y(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new db(ca(o.path),c,{includeMetadataChanges:!0,ku:!0});return lb(i,u)}(await Bb(t),t.asyncQueue,e,n,s)),s.promise}class $b{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new vd(this,"async_queue_retry"),this.Wc=()=>{const n=xr();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=xr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=xr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new zt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Ws(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Lt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=_a.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&ne()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class vr extends Ia{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new $b,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pd(this),this._firestoreClient.terminate()}}function qb(t,e){const n=typeof t=="object"?t:iu(),s=typeof t=="string"?t:e||"(default)",i=So(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Rf("firestore");r&&Lb(i,...r)}return i}function Ld(t){return t._firestoreClient||Pd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pd(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new vy(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Mb(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Ze.fromBase64String(e))}catch(n){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xn(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Aa{constructor(e){this._methodName=e}}/**
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
 */class Sa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const Hb=/^__.*__$/;class Kb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new tn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(e,this.data,n,this.fieldTransforms)}}class Md{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new tn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ud(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Ca{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ji(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ud(this.sa)&&Hb.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class zb{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||pr(e)}da(e,n,s,i=!1){return new Ca({sa:e,methodName:n,fa:s,path:Ge.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Fd(t){const e=t._freezeSettings(),n=pr(t._databaseId);return new zb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Gb(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Da("Data must be an object, but it was:",o,s);const a=Vd(s,o);let l,c;if(r.merge)l=new dt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=wo(e,h,n);if(!o.contains(d))throw new Y(O.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Bd(u,d)||u.push(d)}l=new dt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Kb(new st(a),l,c)}class _r extends Aa{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _r}}function Wb(t,e,n,s){const i=t.da(1,e,n);Da("Data must be an object, but it was:",i,s);const r=[],o=st.empty();_n(s,(l,c)=>{const u=Na(e,l,n);c=qe(c);const h=i.ca(u);if(c instanceof _r)r.push(u);else{const d=br(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new dt(r);return new Md(o,a,i.fieldTransforms)}function Qb(t,e,n,s,i,r){const o=t.da(1,e,n),a=[wo(e,s,n)],l=[i];if(r.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(wo(e,r[d])),l.push(r[d+1]);const c=[],u=st.empty();for(let d=a.length-1;d>=0;--d)if(!Bd(c,a[d])){const m=a[d];let g=l[d];g=qe(g);const _=o.ca(m);if(g instanceof _r)c.push(m);else{const w=br(g,_);w!=null&&(c.push(m),u.set(m,w))}}const h=new dt(c);return new Md(u,h,o.fieldTransforms)}function br(t,e){if(xd(t=qe(t)))return Da("Unsupported field value:",e,t),Vd(t,e);if(t instanceof Aa)return function(n,s){if(!Ud(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=br(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=qe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Uy(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Me.fromDate(n);return{timestampValue:xi(s.It,i)}}if(n instanceof Me){const i=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xi(s.It,i)}}if(n instanceof Sa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xn)return{bytesValue:ud(s.It,n._byteString)};if(n instanceof ot){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ha(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ea(n)}`)}(t,e)}function Vd(t,e){const n={};return jh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(t,(s,i)=>{const r=br(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function xd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Sa||t instanceof xn||t instanceof ot||t instanceof Aa)}function Da(t,e,n){if(!xd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ea(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function wo(t,e,n){if((e=qe(e))instanceof yr)return e._internalPath;if(typeof e=="string")return Na(t,e);throw ji("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yb=new RegExp("[~\\*/\\[\\]]");function Na(t,e,n){if(e.search(Yb)>=0)throw ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yr(...e.split("."))._internalPath}catch{throw ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ji(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new Y(O.INVALID_ARGUMENT,a+t+l)}function Bd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($d("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Xb extends jd{data(){return super.data()}}function $d(t,e){return typeof e=="string"?Na(t,e):e instanceof yr?e._internalPath:e._delegate._internalPath}/**
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
 */class Jb{convertValue(e,n="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){const s={};return _n(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Sa(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=qh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ks(e));default:return null}}convertTimestamp(e){const n=Qt(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);we(pd(s));const i=new Es(s.get(1),s.get(3)),r=new W(s.popFirst(5));return i.isEqual(n)||Lt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Zb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class e0{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qd extends jd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new t0(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field($d("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class t0 extends qd{data(e={}){return super.data(e)}}/**
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
 */function $i(t){t=gn(t,ot);const e=gn(t.firestore,vr);return jb(Ld(e),t._key).then(n=>s0(e,t,n))}class n0 extends Jb{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Hd(t,e,n){t=gn(t,ot);const s=gn(t.firestore,vr),i=Zb(t.converter,e,n);return Kd(s,[Gb(Fd(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,yt.none())])}function wr(t,e,n,...s){t=gn(t,ot);const i=gn(t.firestore,vr),r=Fd(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof yr?Qb(r,"updateDoc",t._key,e,n,s):Wb(r,"updateDoc",t._key,e),Kd(i,[o.toMutation(t._key,yt.exists(!0))])}function Kd(t,e){return function(n,s){const i=new zt;return n.asyncQueue.enqueueAndForget(async()=>bb(await xb(n),s,i)),i.promise}(Ld(t),e)}function s0(t,e,n){const s=n.docs.get(e._key),i=new n0(t);return new qd(t,i,e._key,s,new e0(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Kn=n})(Os),On(new un("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new vr(new iy(n.getProvider("auth-internal")),new ly(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Kt(Tl,"3.7.1",t),Kt(Tl,"3.7.1","esm2017")})();const En=[];function i0(t,e=pe){let n;const s=new Set;function i(a){if(Te(t,a)&&(t=a,n)){const l=!En.length;for(const c of s)c[1](),En.push(c,t);if(l){for(let c=0;c<En.length;c+=2)En[c][0](En[c+1]);En.length=0}}}function r(a){i(a(t))}function o(a,l=pe){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||pe),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function r0(){const{subscribe:t,set:e,update:n}=i0(null);return{subscribe:t,set:s=>e(s),setEmail:s=>e(s),updateKids:s=>{n(i=>({...i,kids:s}))},updateKid:s=>{n(i=>{if(i&&i.isParent){let r=i&&i.kids.map(o=>s&&o&&o.name==s.name?s:o);return{...i,kids:r}}else if(i&&!i.isParent)return s;return null})},addKid:s=>n(i=>{if(i){let r=i.kids;return r.push(s),{...i,kids:r}}})}}const _e=r0();var o0="firebase",a0="9.12.1";/**
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
 */Kt(o0,a0,"app");const l0={apiKey:"AIzaSyBbUgt1Qe6dQAaKzAa9gKM2gM-oIbUZK88",authDomain:"bunnymoney-fdebe.firebaseapp.com",projectId:"bunnymoney-fdebe",storageBucket:"bunnymoney-fdebe.appspot.com",messagingSenderId:"562120247125",appId:"1:562120247125:web:4ba0ce2a53d198789d51dc"};let ko=null;ko==null&&(ko=su(l0));const St=Zg(ko),Jt=qb();function c0(){xm(St,async t=>{let e=null;return t&&(e=localStorage.getItem("name")||null,await u0(t.uid,e)),e})}async function u0(t,e){if(t==null&&e==null)return null;const n=Xt(Jt,"parents",t);let i=(await $i(n)).data();if(e){if(i){const r=i.kids.find(o=>{if(o&&e&&o.name.toLowerCase()==e.toLowerCase())return o});_e.set({...r,uid:t})}}else i?_e.set({...i,uid:t}):Hd(n,{isParent:!0,kids:[],uid:t});return e&&i}async function h0(t){if(t){const e=Xt(Jt,"parents",t.uid);return await wr(e,t),!0}return!1}async function pt(t){const e=Xt(Jt,"parents",t.uid);let s=(await $i(e)).data();if(s){let i=s.kids.map(r=>r.kid==t.kid?t:r);s.kids=i,wr(e,s)}else return Promise.resolve(1);return Promise.resolve(0)}function Ct(t){let e=/([0-9]+\.?[0-9]{0,2})/,n=t.match(e);return n&&n[0]&&typeof n[0]=="string"?parseFloat(n[0]):!1}function Ut(t){let e=t.getFullYear(),n=t.getMonth()+1,s=t.getDate();return`${n}/${s}/${e}`}function zd(t){return new Date(t)}function d0(t){console.log(t);let e=Gd(t.checkingAccount.frequency)*24*60*60*1e3;if(console.log(e,new Date().valueOf(),t.dateOpened,t.dateOpened.valueOf()),new Date().valueOf()-t.dateOpened<e)return;console.log(" time to calculate");let n=t.checkingAccount.transactions.find(s=>{if(s.memo=="allowance")return s});if(n){let s=zd(n.date).valueOf();for(;s+e<new Date().valueOf();){s+=e,t.checkingAccount.balance+=t.checkingAccount.allowance;let i={amount:t.checkingAccount.allowance,currentBalance:t.checkingAccount.balance,date:Ut(new Date(s)),memo:"allowance"};t.checkingAccount.transactions=[i,...t.checkingAccount.transactions]}}else{t.checkingAccount.balance+=t.checkingAccount.allowance;let s={amount:t.checkingAccount.allowance,currentBalance:t.checkingAccount.balance,date:Ut(new Date),memo:"allowance"};console.log(s),t.checkingAccount.transactions=[s,...t.checkingAccount.transactions],pt(t),_e.updateKid(t)}return t.checkingAccount.transactions}function f0(t){let e=Gd(t.savingsAccount.compounded)*24*60*60*1e3;if(new Date().valueOf()-t.dateOpened<e)return;let n=t.savingsAccount.transactions.find(s=>{if(s.memo=="interest")return s});if(n){let s=zd(n.date).valueOf();if(s+e<new Date().valueOf()){for(;s+e<new Date().valueOf();){s+=e,t.savingsAccount.balance+=t.savingsAccount.balance*(t.savingsAccount.interest/100);let i={amount:t.savingsAccount.interest,currentBalance:t.savingsAccount.balance,date:Ut(new Date),memo:"interest"};t.savingsAccount.transactions=[i,...t.savingsAccount.transactions]}pt(t),_e.updateKid(t)}}else{t.savingsAccount.balance+=t.savingsAccount.balance*(t.savingsAccount.interest/100);let s={amount:t.savingsAccount.interest,currentBalance:t.savingsAccount.balance,date:Ut(new Date),memo:"interest"};t.savingsAccount.transactions=[s,...t.savingsAccount.transactions],pt(t),_e.updateKid(t)}return t.savingsAccount.transactions}function Gd(t){return t=="day"?1:t=="week"?7:t=="month"?30:365}function p0(t,e){return t.map(n=>e&&n&&n.name==e.name?e:n)}function ec(t){let e,n=t[5]?"\xD7":"request money",s,i,r,o,a,l,c=t[5]&&tc(t);return{c(){e=y("button"),s=F(n),r=E(),c&&c.c(),o=Ye(),p(e,"class",i=Gt(t[5]?"link text-4xl pt-0 bg-green lh-1":"link underline bg-green")+" svelte-mlg7th")},m(u,h){N(u,e,h),f(e,s),N(u,r,h),c&&c.m(u,h),N(u,o,h),a||(l=U(e,"click",t[9]),a=!0)},p(u,h){h&32&&n!==(n=u[5]?"\xD7":"request money")&&Z(s,n),h&32&&i!==(i=Gt(u[5]?"link text-4xl pt-0 bg-green lh-1":"link underline bg-green")+" svelte-mlg7th")&&p(e,"class",i),u[5]?c?c.p(u,h):(c=tc(u),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},d(u){u&&D(e),u&&D(r),c&&c.d(u),u&&D(o),a=!1,l()}}}function tc(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_;return{c(){e=y("div"),n=y("h3"),n.textContent="Request money",s=E(),i=y("div"),r=y("input"),o=E(),a=y("label"),a.textContent="(to checking)",l=E(),c=y("label"),c.textContent="Memo",u=E(),h=y("input"),d=E(),m=y("button"),m.textContent="request",p(n,"class","text-xl mb-8"),p(r,"id","add"),p(r,"type","number"),p(r,"max","0"),p(r,"min","100000"),p(r,"placeholder","0"),p(r,"class","rounded-md bg-yellow p-2 outline-none text-center col-start-1 row-start-1 shaded big-shade w-56"),p(a,"for","add"),p(a,"class","text-left pl-4 italic row-start-1 col-start-2 col-end-4 pt-2"),p(c,"for","memo"),p(c,"class","col-start-1 pr-4 row-start-2 text-right pt-2"),p(h,"id","memo"),p(h,"type","text"),p(h,"placeholder","for movie tickets"),p(h,"class","w-56 p-2 pl-4 pr-4 outline-none w-full rounded-md row-start-2 col-start-2 col-span-2 bg-yellow shaded big-shade"),p(m,"class","bg-yellow border-black border-2 p-2 pr-4 pl-4 rounded-md appearance-none mb-1 shaded big-shade col-start-3 row-start-3"),p(i,"class","grid grid-cols-3 grid-row-3 gap-4"),p(e,"class","border-black border-2 rounded-xl p-2")},m(w,b){N(w,e,b),f(e,n),f(e,s),f(e,i),f(i,r),le(r,t[1]),f(i,o),f(i,a),f(i,l),f(i,c),f(i,u),f(i,h),le(h,t[2]),f(i,d),f(i,m),g||(_=[U(r,"input",t[10]),U(h,"input",t[11]),U(m,"click",t[6])],g=!0)},p(w,b){b&2&&Xe(r.value)!==w[1]&&le(r,w[1]),b&4&&h.value!==w[2]&&le(h,w[2])},d(w){w&&D(e),g=!1,ke(_)}}}function m0(t){let e,n,s,i,r,o;function a(h){t[7](h)}function l(h){t[8](h)}let c={};t[3]!==void 0&&(c.visible=t[3]),t[4]!==void 0&&(c.message=t[4]),n=new nt({props:c}),re.push(()=>ae(n,"visible",a)),re.push(()=>ae(n,"message",l));let u=t[0]&&ec(t);return{c(){e=y("div"),ie(n.$$.fragment),r=E(),u&&u.c(),p(e,"class","bg-green rounded-xl p-2 ")},m(h,d){N(h,e,d),ee(n,e,null),f(e,r),u&&u.m(e,null),o=!0},p(h,[d]){const m={};!s&&d&8&&(s=!0,m.visible=h[3],oe(()=>s=!1)),!i&&d&16&&(i=!0,m.message=h[4],oe(()=>i=!1)),n.$set(m),h[0]?u?u.p(h,d):(u=ec(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(h){o||(L(n.$$.fragment,h),o=!0)},o(h){V(n.$$.fragment,h),o=!1},d(h){h&&D(e),te(n),u&&u.d()}}}function g0(t,e,n){let{kid:s=null}=e,i=0,r="",o=!1,a="",l=!1;async function c(){if(i<=0&&(n(4,a="Request must be bigger than 0"),n(3,o=!0)),s)if(i){let _=Ct(i.toString());_&&(s.pending.push({date:Ut(new Date),amount:_,memo:r,for:"parent"}),pt(s),n(4,a=`Requested $${_} successfully!`),n(3,o=!0))}else n(4,a="invalid request!"),n(3,o=!0),n(1,i=0)}function u(_){o=_,n(3,o)}function h(_){a=_,n(4,a)}const d=()=>n(5,l=!l);function m(){i=Xe(this.value),n(1,i)}function g(){r=this.value,n(2,r)}return t.$$set=_=>{"kid"in _&&n(0,s=_.kid)},[s,i,r,o,a,l,c,u,h,d,m,g]}class v0 extends Ne{constructor(e){super(),De(this,e,g0,m0,Te,{kid:0})}}function nc(t){let e,n,s,i,r,o,a,l,c,u,h,d;return{c(){e=y("div"),n=y("h2"),s=F(t[1]),i=E(),r=y("div"),o=y("button"),o.textContent="OK",a=E(),l=y("p"),l.textContent="or",c=E(),u=y("button"),u.textContent="Cancel",p(n,"class","text-2xl m-4 "),p(o,"class","bg-green border-black border-2 shaded p-2 pl-6 pr-6 mr-4 rounded-md mb-1"),p(l,"class","middle"),p(u,"class","bg-green border-black border-2 shaded p-2 pl-4 pr-4 rounded-md mb-1 ml-4"),p(r,"class","m-4 p-4 flex justify-evenly items-center"),p(e,"class","sticky w-1112 bg-pink rounded-xl p-2 flex flex-col items-center border-black border-2 shaded svelte-so5o6x")},m(m,g){N(m,e,g),f(e,n),f(n,s),f(e,i),f(e,r),f(r,o),f(r,a),f(r,l),f(r,c),f(r,u),h||(d=[U(o,"click",t[2]),U(u,"click",t[4]),qi(_0.call(null,e)),U(e,"click_outside",t[5])],h=!0)},p(m,g){g&2&&Z(s,m[1])},d(m){m&&D(e),h=!1,ke(d)}}}function y0(t){let e,n=t[0]&&nc(t);return{c(){n&&n.c(),e=Ye()},m(s,i){n&&n.m(s,i),N(s,e,i)},p(s,[i]){s[0]?n?n.p(s,i):(n=nc(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:pe,o:pe,d(s){n&&n.d(s),s&&D(e)}}}function _0(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function b0(t,e,n){let{boxOpen:s=!1}=e,{message:i=""}=e,{isConfirmed:r=!1}=e;function o(){n(3,r=!0),n(0,s=!1)}const a=()=>n(0,s=!1),l=()=>n(0,s=!1);return t.$$set=c=>{"boxOpen"in c&&n(0,s=c.boxOpen),"message"in c&&n(1,i=c.message),"isConfirmed"in c&&n(3,r=c.isConfirmed)},[s,i,o,r,a,l]}class Wd extends Ne{constructor(e){super(),De(this,e,b0,y0,Te,{boxOpen:0,message:1,isConfirmed:3})}}function sc(t,e,n){const s=t.slice();return s[16]=e[n],s[18]=n,s}function ic(t){let e,n,s,i=[],r=new Map,o=t[0].pending;const a=l=>l[18];for(let l=0;l<o.length;l+=1){let c=sc(t,o,l),u=a(c);r.set(u,i[l]=oc(u,c))}return{c(){e=y("div"),n=y("h2"),n.textContent="Pending requests",s=E();for(let l=0;l<i.length;l+=1)i[l].c();p(n,"class","text-xl m-2"),p(e,"class","bg-green rounded-xl p-2 mb-4")},m(l,c){N(l,e,c),f(e,n),f(e,s);for(let u=0;u<i.length;u+=1)i[u].m(e,null)},p(l,c){c&193&&(o=l[0].pending,i=pf(i,c,a,1,l,o,r,e,ff,oc,null,sc))},d(l){l&&D(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function rc(t){let e,n,s,i=Math.abs(t[16].amount).toFixed(2)+"",r,o,a,l=t[16].date+"",c,u,h,d=t[16].memo+"",m,g,_,w,b,v,k,A;function T(){return t[12](t[18])}function I(){return t[13](t[18])}return{c(){e=y("div"),n=y("p"),s=F("$ "),r=F(i),o=E(),a=y("p"),c=F(l),u=E(),h=y("p"),m=F(d),g=E(),_=y("button"),_.textContent="Accept",w=E(),b=y("button"),b.textContent="Deny",v=E(),p(n,"class","row-start-1 col-start-1 mb-2 bold"),p(a,"class","row-start-1 col-start-2 mb-2"),p(h,"class","row-start-2 col-start-1 col-end-3 mb-2 italic"),p(_,"class","bg-yellow p-2 pr-4 pl-4 mr-2 rounded-md row-start-3 col-start-1 border-black border-2 mb-1 shaded svelte-1qh3y0j"),p(b,"class","bg-pink p-2 pr-4 pl-4 ml-2 rounded-md row-start-3 col-start-2 border-black border-2 mb-1 shaded svelte-1qh3y0j"),p(e,"class","border-black border-b-2 grid grid-col-2 grid-row-3 pt-4 pb-4")},m(P,C){N(P,e,C),f(e,n),f(n,s),f(n,r),f(e,o),f(e,a),f(a,c),f(e,u),f(e,h),f(h,m),f(e,g),f(e,_),f(e,w),f(e,b),f(e,v),k||(A=[U(_,"click",T),U(b,"click",I)],k=!0)},p(P,C){t=P,C&1&&i!==(i=Math.abs(t[16].amount).toFixed(2)+"")&&Z(r,i),C&1&&l!==(l=t[16].date+"")&&Z(c,l),C&1&&d!==(d=t[16].memo+"")&&Z(m,d)},d(P){P&&D(e),k=!1,ke(A)}}}function oc(t,e){let n,s,i=e[16].for!="parent"&&rc(e);return{key:t,first:null,c(){n=Ye(),i&&i.c(),s=Ye(),this.first=n},m(r,o){N(r,n,o),i&&i.m(r,o),N(r,s,o)},p(r,o){e=r,e[16].for!="parent"?i?i.p(e,o):(i=rc(e),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},d(r){r&&D(n),i&&i.d(r),r&&D(s)}}}function w0(t){let e,n,s,i,r,o,a,l,c,u;function h(v){t[8](v)}function d(v){t[9](v)}let m={};t[5]!==void 0&&(m.visible=t[5]),t[4]!==void 0&&(m.message=t[4]),n=new nt({props:m}),re.push(()=>ae(n,"visible",h)),re.push(()=>ae(n,"message",d));function g(v){t[10](v)}function _(v){t[11](v)}let w={message:t[2]};t[3]!==void 0&&(w.boxOpen=t[3]),t[1]!==void 0&&(w.isConfirmed=t[1]),o=new Wd({props:w}),re.push(()=>ae(o,"boxOpen",g)),re.push(()=>ae(o,"isConfirmed",_));let b=t[0].pending&&t[0].pending.length>0&&ic(t);return{c(){e=y("div"),ie(n.$$.fragment),r=E(),ie(o.$$.fragment),c=E(),b&&b.c()},m(v,k){N(v,e,k),ee(n,e,null),f(e,r),ee(o,e,null),f(e,c),b&&b.m(e,null),u=!0},p(v,[k]){const A={};!s&&k&32&&(s=!0,A.visible=v[5],oe(()=>s=!1)),!i&&k&16&&(i=!0,A.message=v[4],oe(()=>i=!1)),n.$set(A);const T={};k&4&&(T.message=v[2]),!a&&k&8&&(a=!0,T.boxOpen=v[3],oe(()=>a=!1)),!l&&k&2&&(l=!0,T.isConfirmed=v[1],oe(()=>l=!1)),o.$set(T),v[0].pending&&v[0].pending.length>0?b?b.p(v,k):(b=ic(v),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i(v){u||(L(n.$$.fragment,v),L(o.$$.fragment,v),u=!0)},o(v){V(n.$$.fragment,v),V(o.$$.fragment,v),u=!1},d(v){v&&D(e),te(n),te(o),b&&b.d()}}}function k0(t,e,n){let{kid:s}=e,i="",r=!1,o=!1,a=-1,l="",c=!1;_e.subscribe(k=>{k&&n(0,s=k)});function u(k){n(2,i=`Pay $${Math.abs(s==null?void 0:s.pending[k].amount)} ${s&&s.pending[k].memo}?`),n(3,r=!0),a=k}function h(k){if(s){let A=s.pending.filter((T,I)=>I!=k);n(4,l="request denied successfully"),_e.set({...s,pending:A}),pt({...s,pending:A}),n(5,c=!0)}}function d(){if(s){let k=s.pending.find((T,I)=>I==a),A=s.pending.filter((T,I)=>I!=a);if(k){let T={...k,currentBalance:s.checkingAccount.balance+k.amount};n(0,s.checkingAccount.transactions=[T,...s.checkingAccount.transactions],s),n(0,s.checkingAccount.balance=T.currentBalance||s.checkingAccount.balance,s),n(4,l="payment sent!");let I={...s,pending:A};pt(I),n(5,c=!0),_e.set(I),_e.subscribe(P=>n(0,s=P)),I=null,k=void 0,n(1,o=!1)}else n(4,l="Something went wrong. Refresh and try again"),n(5,c=!0)}}function m(k){c=k,n(5,c)}function g(k){l=k,n(4,l)}function _(k){r=k,n(3,r)}function w(k){o=k,n(1,o)}const b=k=>u(k),v=k=>h(k);return t.$$set=k=>{"kid"in k&&n(0,s=k.kid)},t.$$.update=()=>{t.$$.dirty&2&&o&&d()},[s,o,i,r,l,c,u,h,m,g,_,w,b,v]}class E0 extends Ne{constructor(e){super(),De(this,e,k0,w0,Te,{kid:0})}}function ac(t,e,n){const s=t.slice();return s[4]=e[n],s}function lc(t){let e,n,s=t[2]?"\xD7":`see ${t[1]} transactions`,i,r,o,a,l,c=t[2]&&cc(t);return{c(){e=y("div"),n=y("button"),i=F(s),o=E(),c&&c.c(),p(n,"class",r=Gt(t[2]?"link text-4xl lh-1 bg-green":"link underline bg-green")+" svelte-tar5rh"),p(e,"class","bg-green w-full rounded-xl mb-4 mt-4 p-2")},m(u,h){N(u,e,h),f(e,n),f(n,i),f(e,o),c&&c.m(e,null),a||(l=U(n,"click",t[3]),a=!0)},p(u,h){h&6&&s!==(s=u[2]?"\xD7":`see ${u[1]} transactions`)&&Z(i,s),h&4&&r!==(r=Gt(u[2]?"link text-4xl lh-1 bg-green":"link underline bg-green")+" svelte-tar5rh")&&p(n,"class",r),u[2]?c?c.p(u,h):(c=cc(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(u){u&&D(e),c&&c.d(),a=!1,l()}}}function cc(t){let e;function n(r,o){return r[0]&&r[0].length>0?T0:I0}let s=n(t),i=s(t);return{c(){i.c(),e=Ye()},m(r,o){i.m(r,o),N(r,e,o)},p(r,o){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&D(e)}}}function I0(t){let e;return{c(){e=y("div"),e.innerHTML="<p>no transactions</p>",p(e,"class","w-full pb-8 pt-4 w-full")},m(n,s){N(n,e,s)},p:pe,d(n){n&&D(e)}}}function T0(t){let e,n,s,i,r,o,a,l,c=t[0],u=[];for(let h=0;h<c.length;h+=1)u[h]=uc(ac(t,c,h));return{c(){e=y("div"),n=y("h2"),s=F(t[1]),i=F(" transactions"),r=E(),o=y("div"),o.innerHTML=`<p class="bold ">Amount</p> 
					<p class="bold">Current</p>`,a=E(),l=y("div");for(let h=0;h<u.length;h+=1)u[h].c();p(n,"class","p-2 text-xl"),p(o,"class","w-full flex justify-evenly border-black border-b-2 svelte-tar5rh"),p(l,"class","h-60 scroll-content"),p(e,"class","border-black border-2 rounded-xl p-2")},m(h,d){N(h,e,d),f(e,n),f(n,s),f(n,i),f(e,r),f(e,o),f(e,a),f(e,l);for(let m=0;m<u.length;m+=1)u[m].m(l,null)},p(h,d){if(d&2&&Z(s,h[1]),d&1){c=h[0];let m;for(m=0;m<c.length;m+=1){const g=ac(h,c,m);u[m]?u[m].p(g,d):(u[m]=uc(g),u[m].c(),u[m].m(l,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=c.length}},d(h){h&&D(e),vn(u,h)}}}function uc(t){let e,n,s,i=t[4].date+"",r,o,a,l,c=Number(t[4].amount).toFixed(2)+"",u,h,d,m,g=Number(t[4].currentBalance).toFixed(2)+"",_,w,b,v,k,A,T=t[4].memo+"",I,P;return{c(){e=y("div"),n=y("div"),s=y("p"),r=F(i),o=E(),a=y("div"),l=y("p"),u=F(c),d=E(),m=y("p"),_=F(g),b=E(),v=y("p"),k=y("span"),k.textContent="memo:",A=E(),I=F(T),P=E(),p(s,"class",""),p(n,"class","w-full line"),p(l,"class",h="inline m-2 "+(t[4].amount<0&&"text-pink")+" svelte-tar5rh"),p(m,"class",w="inline m-2 "+(t[4].amount<0&&"text-pink")+" svelte-tar5rh"),p(a,"class","w-full flex justify-evenly"),p(k,"class","bold"),p(v,"class","italic"),p(e,"class","border-black border-b-2 svelte-tar5rh")},m(C,S){N(C,e,S),f(e,n),f(n,s),f(s,r),f(e,o),f(e,a),f(a,l),f(l,u),f(a,d),f(a,m),f(m,_),f(e,b),f(e,v),f(v,k),f(v,A),f(v,I),f(e,P)},p(C,S){S&1&&i!==(i=C[4].date+"")&&Z(r,i),S&1&&c!==(c=Number(C[4].amount).toFixed(2)+"")&&Z(u,c),S&1&&h!==(h="inline m-2 "+(C[4].amount<0&&"text-pink")+" svelte-tar5rh")&&p(l,"class",h),S&1&&g!==(g=Number(C[4].currentBalance).toFixed(2)+"")&&Z(_,g),S&1&&w!==(w="inline m-2 "+(C[4].amount<0&&"text-pink")+" svelte-tar5rh")&&p(m,"class",w),S&1&&T!==(T=C[4].memo+"")&&Z(I,T)},d(C){C&&D(e)}}}function A0(t){let e,n=t[0]&&lc(t);return{c(){n&&n.c(),e=Ye()},m(s,i){n&&n.m(s,i),N(s,e,i)},p(s,[i]){s[0]?n?n.p(s,i):(n=lc(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:pe,o:pe,d(s){n&&n.d(s),s&&D(e)}}}function S0(t,e,n){let{transactions:s=null}=e,{accountType:i=null}=e,r=!1;const o=()=>n(2,r=!r);return t.$$set=a=>{"transactions"in a&&n(0,s=a.transactions),"accountType"in a&&n(1,i=a.accountType)},[s,i,r,o]}class hc extends Ne{constructor(e){super(),De(this,e,S0,A0,Te,{transactions:0,accountType:1})}}function dc(t){let e,n,s,i,r,o,a=t[1]?"checking":"savings",l,c,u,h,d,m,g=t[1]?"savings":"checking",_,w,b,v,k,A,T,I,P;return{c(){e=y("div"),n=y("h2"),n.textContent="Transfer money",s=E(),i=y("div"),r=y("p"),o=F("from: "),l=F(a),c=E(),u=y("button"),u.textContent="\u21C6",h=E(),d=y("p"),m=F("to: "),_=F(g),w=E(),b=y("label"),b.textContent="Amount",v=E(),k=y("input"),A=E(),T=y("button"),T.textContent="Transfer",p(n,"class","text-xl mb-4"),p(r,"class","col-start-1 row-start-1"),p(u,"class","col-start-2 row-start-1 border-black border-2 rounded-md bg-yellow inline p-2 pl-6 pr-6 shaded big-shade mb-1 right"),p(d,"class","col-start-3 row-start-1"),p(b,"for","amount"),p(b,"class","col-start-1 row-start-2"),p(k,"type","number"),k.required=!0,p(k,"id","amount"),p(k,"class","col-start-2 col-end-4 mb-1 w-13 row-start-2 bg-yellow rounded-md shaded big-shade"),p(T,"class","col-start-3 row-start-3 bg-pink rounded-md border-black border-2 shaded mb-1"),p(i,"class","grid grid-col-3 grid-row-3 gap-4"),p(e,"class","border-black border-2 rounded-xl p-2")},m(C,S){N(C,e,S),f(e,n),f(e,s),f(e,i),f(i,r),f(r,o),f(r,l),f(i,c),f(i,u),f(i,h),f(i,d),f(d,m),f(d,_),f(i,w),f(i,b),f(i,v),f(i,k),le(k,t[2]),f(i,A),f(i,T),I||(P=[U(u,"click",t[10]),U(k,"input",t[11]),U(T,"click",t[5])],I=!0)},p(C,S){S&2&&a!==(a=C[1]?"checking":"savings")&&Z(l,a),S&2&&g!==(g=C[1]?"savings":"checking")&&Z(_,g),S&4&&Xe(k.value)!==C[2]&&le(k,C[2])},d(C){C&&D(e),I=!1,ke(P)}}}function C0(t){let e,n,s,i,r,o,a=t[0]?"\xD7":"transfer money",l,c,u,h,d,m;function g(v){t[7](v)}function _(v){t[8](v)}let w={};t[4]!==void 0&&(w.message=t[4]),t[3]!==void 0&&(w.visible=t[3]),n=new nt({props:w}),re.push(()=>ae(n,"message",g)),re.push(()=>ae(n,"visible",_));let b=t[0]&&dc(t);return{c(){e=y("div"),ie(n.$$.fragment),r=E(),o=y("button"),l=F(a),u=E(),b&&b.c(),p(o,"class",c=t[0]?"link text-4xl pt-0 bg-green lh-1":"link underline bg-green"),p(e,"class","bg-green rounded-xl mb-4 mt-4 p-2")},m(v,k){N(v,e,k),ee(n,e,null),f(e,r),f(e,o),f(o,l),f(e,u),b&&b.m(e,null),h=!0,d||(m=U(o,"click",t[9]),d=!0)},p(v,[k]){const A={};!s&&k&16&&(s=!0,A.message=v[4],oe(()=>s=!1)),!i&&k&8&&(i=!0,A.visible=v[3],oe(()=>i=!1)),n.$set(A),(!h||k&1)&&a!==(a=v[0]?"\xD7":"transfer money")&&Z(l,a),(!h||k&1&&c!==(c=v[0]?"link text-4xl pt-0 bg-green lh-1":"link underline bg-green"))&&p(o,"class",c),v[0]?b?b.p(v,k):(b=dc(v),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i(v){h||(L(n.$$.fragment,v),h=!0)},o(v){V(n.$$.fragment,v),h=!1},d(v){v&&D(e),te(n),b&&b.d(),d=!1,m()}}}function D0(t,e,n){let{kid:s=null}=e,i=!0,r=!0,o=0,a=!1,l="";function c(){if(o){if(r&&s.checkingAccount.balance>=o)n(6,s.checkingAccount.balance-=o,s),n(6,s.savingsAccount.balance+=o,s),n(6,s.savingsAccount.transactions=[{date:Ut(new Date),memo:"transfer from checking",amount:o,currentBalance:s.savingsAccount.balance},...s.savingsAccount.transactions],s);else if(!r&&s.savingsAccount.balance>=o)n(6,s.savingsAccount.balance-=o,s),n(6,s.checkingAccount.balance+=o,s),n(6,s.checkingAccount.transactions=[{date:Ut(new Date),memo:"transfer from savings",amount:o,currentBalance:s.checkingAccount.balance},...s.checkingAccount.transactions],s);else return n(4,l="amount must be available in account!"),n(3,a=!0);pt(s),_e.updateKid(s),n(4,l="transfered succcessfully"),n(3,a=!0)}else n(4,l="please try a valid amount"),n(3,a=!0)}function u(_){l=_,n(4,l)}function h(_){a=_,n(3,a)}const d=()=>n(0,i=!i),m=()=>n(1,r=!r);function g(){o=Xe(this.value),n(2,o)}return t.$$set=_=>{"kid"in _&&n(6,s=_.kid)},[i,r,o,a,l,c,s,u,h,d,m,g]}class N0 extends Ne{constructor(e){super(),De(this,e,D0,C0,Te,{kid:6})}}function R0(t){let e,n,s,i,r,o,a,l;function c(d){t[3](d)}function u(d){t[4](d)}let h={};return t[1]!==void 0&&(h.visible=t[1]),t[0]!==void 0&&(h.message=t[0]),e=new nt({props:h}),re.push(()=>ae(e,"visible",c)),re.push(()=>ae(e,"message",u)),{c(){ie(e.$$.fragment),i=E(),r=y("button"),r.textContent="Log out",p(r,"class","rounded-md border-black border-2 p-2 pl-6 pr-6 bg-pink mb-1 shaded big-shade")},m(d,m){ee(e,d,m),N(d,i,m),N(d,r,m),o=!0,a||(l=U(r,"click",t[5]),a=!0)},p(d,[m]){const g={};!n&&m&2&&(n=!0,g.visible=d[1],oe(()=>n=!1)),!s&&m&1&&(s=!0,g.message=d[0],oe(()=>s=!1)),e.$set(g)},i(d){o||(L(e.$$.fragment,d),o=!0)},o(d){V(e.$$.fragment,d),o=!1},d(d){te(e,d),d&&D(i),d&&D(r),a=!1,l()}}}function O0(t,e,n){var s="signed out successfully";let i=!1;const r=()=>{n(1,i=!0),localStorage.clear(),St.signOut(),_e.set(null)};function o(c){i=c,n(1,i)}function a(c){s=c,n(0,s)}return[s,i,r,o,a,()=>r()]}class Ra extends Ne{constructor(e){super(),De(this,e,O0,R0,Te,{})}}function fc(t){let e,n,s=t[1].toFixed(2)+"",i,r;return{c(){e=y("h3"),n=F("$"),i=F(s),p(e,"class","text-4xl lh-4 text-center")},m(o,a){N(o,e,a),f(e,n),f(e,i)},p(o,a){a&2&&s!==(s=o[1].toFixed(2)+"")&&Z(i,s)},i(o){r||Nt(()=>{r=df(e,Hr,{y:-50}),r.start()})},o:pe,d(o){o&&D(e)}}}function L0(t){let e,n,s,i,r,o=(t[0]&&t[0].name)+"",a,l,c,u,h,d,m,g,_,w,b,v,k=(t[0]&&t[0].checkingAccount.allowance)+"",A,T,I=(t[0]&&t[0].checkingAccount.frequency)+"",P,C,S,M,$,z,q,J,H,Q,ue,Ae,ge,B,ye,et,Ke,bt,wt=(t[2].toFixed(2)||0)+"",Ee,ut,ht,kt,Pe,K,be,Re=t[1]&&fc(t);M=new E0({props:{kid:t[0]}}),z=new v0({props:{kid:t[0]}}),J=new hc({props:{accountType:"checking",transactions:t[0].checkingAccount.transactions}});function Wn(de){t[3](de)}let wn={};return t[0]!==void 0&&(wn.kid=t[0]),Q=new N0({props:wn}),re.push(()=>ae(Q,"kid",Wn)),ht=new hc({props:{accountType:"savings",transactions:t[0].savingsAccount.transactions}}),K=new Ra({}),{c(){e=y("div"),n=y("div"),s=y("h2"),i=F("Hello "),r=y("span"),a=F(o),l=F("!"),c=E(),u=y("div"),h=y("h2"),h.textContent="checking account",d=E(),Re&&Re.c(),m=E(),g=y("div"),_=y("h4"),_.textContent="allowance",w=E(),b=y("h3"),v=F("$ "),A=F(k),T=F(" per "),P=F(I),C=E(),S=y("div"),ie(M.$$.fragment),$=E(),ie(z.$$.fragment),q=E(),ie(J.$$.fragment),H=E(),ie(Q.$$.fragment),Ae=E(),ge=y("div"),B=y("div"),ye=y("h2"),ye.textContent="savings account",et=E(),Ke=y("h3"),bt=F("$"),Ee=F(wt),ut=E(),ie(ht.$$.fragment),kt=E(),Pe=y("div"),ie(K.$$.fragment),p(r,"class","italic inline text-2xl"),p(s,"class","m-4 inline text-2xl"),p(h,"class","text-center mb-2 italic"),p(u,"class","bg-yellow text-black rounded-full w-60 h-60 center col mt-8 mb-8 circle"),p(_,"class","text-center italic p-2"),p(b,"class","text-center text-3xl"),p(g,"class","bg-green rounded-xl w-full mb-4 mt-4 pb-4 pt-4"),p(ye,"class","text-center mb-2 italic"),p(Ke,"class","text-4xl lh-4 text-center "),p(B,"class","bg-green rounded-full w-60 h-60 center col m-auto mt-8 mb-8 circle"),p(Pe,"class","w-full center pt-4 pb-4 bg-pink rounded-xl mt-4"),p(ge,"class","center col"),p(S,"class","w-full mb-4"),p(n,"class","bg-pink p-2 pt-12 center col w-full rounded-xl"),p(e,"class","w-full bg-black center col pt-4 pb-4")},m(de,rt){N(de,e,rt),f(e,n),f(n,s),f(s,i),f(s,r),f(r,a),f(r,l),f(n,c),f(n,u),f(u,h),f(u,d),Re&&Re.m(u,null),f(n,m),f(n,g),f(g,_),f(g,w),f(g,b),f(b,v),f(b,A),f(b,T),f(b,P),f(n,C),f(n,S),ee(M,S,null),f(S,$),ee(z,S,null),f(S,q),ee(J,S,null),f(S,H),ee(Q,S,null),f(S,Ae),f(S,ge),f(ge,B),f(B,ye),f(B,et),f(B,Ke),f(Ke,bt),f(Ke,Ee),f(ge,ut),ee(ht,ge,null),f(ge,kt),f(ge,Pe),ee(K,Pe,null),be=!0},p(de,[rt]){(!be||rt&1)&&o!==(o=(de[0]&&de[0].name)+"")&&Z(a,o),de[1]?Re?(Re.p(de,rt),rt&2&&L(Re,1)):(Re=fc(de),Re.c(),L(Re,1),Re.m(u,null)):Re&&(Re.d(1),Re=null),(!be||rt&1)&&k!==(k=(de[0]&&de[0].checkingAccount.allowance)+"")&&Z(A,k),(!be||rt&1)&&I!==(I=(de[0]&&de[0].checkingAccount.frequency)+"")&&Z(P,I);const Oa={};rt&1&&(Oa.kid=de[0]),M.$set(Oa);const La={};rt&1&&(La.kid=de[0]),z.$set(La);const Pa={};rt&1&&(Pa.transactions=de[0].checkingAccount.transactions),J.$set(Pa);const Ma={};!ue&&rt&1&&(ue=!0,Ma.kid=de[0],oe(()=>ue=!1)),Q.$set(Ma),(!be||rt&4)&&wt!==(wt=(de[2].toFixed(2)||0)+"")&&Z(Ee,wt);const Ua={};rt&1&&(Ua.transactions=de[0].savingsAccount.transactions),ht.$set(Ua)},i(de){be||(L(Re),L(M.$$.fragment,de),L(z.$$.fragment,de),L(J.$$.fragment,de),L(Q.$$.fragment,de),L(ht.$$.fragment,de),L(K.$$.fragment,de),be=!0)},o(de){V(M.$$.fragment,de),V(z.$$.fragment,de),V(J.$$.fragment,de),V(Q.$$.fragment,de),V(ht.$$.fragment,de),V(K.$$.fragment,de),be=!1},d(de){de&&D(e),Re&&Re.d(),te(M),te(z),te(J),te(Q),te(ht),te(K)}}}function P0(t,e,n){let s=null;_e.subscribe(c=>{c&&n(0,s=c)}),lf(()=>{s?(d0(s),s.savingsAccount.transactions.length>0&&f0(s)):Au(St)});let i=0,r=0;const o=setInterval(()=>{s.checkingAccount.balance>1e3&&i<s.checkingAccount.balance?n(1,i+=667.38):s.checkingAccount.balance>100&&i<s.checkingAccount.balance?n(1,i+=50.65):i<s.checkingAccount.balance?n(1,i+=.28):(n(1,i=s.checkingAccount.balance),clearInterval(o))},1),a=setInterval(()=>{console.log("hello"),r===s.savingsAccount.balance?clearInterval(a):r>s.savingsAccount.balance?n(2,r=s.savingsAccount.balance):s.savingsAccount.balance>1e4?n(2,r+=1015.65):s.savingsAccount.balance>1e3?n(2,r+=167.38):s.savingsAccount.balance>100?n(2,r+=74.65):r<s.savingsAccount.balance?n(2,r+=1.28):(n(1,i=s.savingsAccount.balance),clearInterval(a))},100);function l(c){s=c,n(0,s)}return[s,i,r,l]}class M0 extends Ne{constructor(e){super(),De(this,e,P0,L0,Te,{})}}function pc(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_;return{c(){e=y("div"),n=y("h2"),n.textContent="Add funds",s=E(),i=y("div"),r=y("input"),o=E(),a=y("label"),a.textContent="(to checking)",l=E(),c=y("label"),c.textContent="Memo",u=E(),h=y("input"),d=E(),m=y("button"),m.textContent="add",p(n,"class","p-2 text-xl"),p(r,"class","p-2 outline-none text-center col-start-1 row-start-1 bg-pink rounded-md shaded big-shade w-88 right"),p(r,"id","amount"),p(r,"placeholder","20"),p(r,"type","number"),p(a,"for","amount"),p(a,"class","text-center italic row-start-1 col-start-2 col-end-4 pt-2"),p(c,"for","memo"),p(c,"class","col-start-1 row-start-2 text-center pt-2"),p(h,"type","text"),p(h,"id","memo"),p(h,"placeholder","gift from grandma"),p(h,"class","p-2 outline-none row-start-2 col-start-2 col-end-4 bg-pink rounded-md shaded big-shade"),p(m,"class","col-start-3 row-start-4 p-2 pr-6 pl-6 rounded-md bg-green border-black shaded big-shaded border-2 mb-1"),p(i,"class","grid grid-cols-3 grid-row-3 gap-4 p-2"),p(e,"class","w-full border-black border-2 rounded-xl shaded p-2 mb-4")},m(w,b){N(w,e,b),f(e,n),f(e,s),f(e,i),f(i,r),le(r,t[0]),f(i,o),f(i,a),f(i,l),f(i,c),f(i,u),f(i,h),le(h,t[1]),f(i,d),f(i,m),g||(_=[U(r,"input",t[10]),U(h,"input",t[11]),U(m,"click",t[12])],g=!0)},p(w,b){b&1&&Xe(r.value)!==w[0]&&le(r,w[0]),b&2&&h.value!==w[1]&&le(h,w[1])},d(w){w&&D(e),g=!1,ke(_)}}}function U0(t){let e,n,s,i,r,o,a,l=t[4]?"\xD7":"Add funds",c,u,h,d,m,g;function _(k){t[7](k)}function w(k){t[8](k)}let b={};t[2]!==void 0&&(b.visible=t[2]),t[3]!==void 0&&(b.message=t[3]),n=new nt({props:b}),re.push(()=>ae(n,"visible",_)),re.push(()=>ae(n,"message",w));let v=t[4]&&pc(t);return{c(){e=y("div"),ie(n.$$.fragment),r=E(),o=y("div"),a=y("button"),c=F(l),h=E(),v&&v.c(),p(a,"class",u=Gt(t[4]?"link text-4xl bg-yellow":"underline bg-yellow link")+" svelte-lcmlq9"),p(o,"class","w-full h-full pt-6"),p(e,"class","w-full")},m(k,A){N(k,e,A),ee(n,e,null),f(e,r),f(e,o),f(o,a),f(a,c),f(o,h),v&&v.m(o,null),d=!0,m||(g=U(a,"click",t[9]),m=!0)},p(k,[A]){const T={};!s&&A&4&&(s=!0,T.visible=k[2],oe(()=>s=!1)),!i&&A&8&&(i=!0,T.message=k[3],oe(()=>i=!1)),n.$set(T),(!d||A&16)&&l!==(l=k[4]?"\xD7":"Add funds")&&Z(c,l),(!d||A&16&&u!==(u=Gt(k[4]?"link text-4xl bg-yellow":"underline bg-yellow link")+" svelte-lcmlq9"))&&p(a,"class",u),k[4]?v?v.p(k,A):(v=pc(k),v.c(),v.m(o,null)):v&&(v.d(1),v=null)},i(k){d||(L(n.$$.fragment,k),d=!0)},o(k){V(n.$$.fragment,k),d=!1},d(k){k&&D(e),te(n),v&&v.d(),m=!1,g()}}}function F0(t,e,n){let{name:s="Eda"}=e,i=0,r="",o,a=!1,l="",c=!1;_e.subscribe(b=>o=b);async function u(b){if(b.preventDefault(),i<0){n(3,l="Amount must be higher than 0"),n(2,a=!0),n(0,i=0);return}let v=null;if(o&&(v=o.kids.find(k=>{if(k&&k.name==s)return k})),i){let k=Ct(i.toString());if(k&&v){let A={amount:k,currentBalance:v.checkingAccount.balance+k,date:Ut(new Date),memo:r};if(v.checkingAccount.transactions=[A,...v.checkingAccount.transactions],v.checkingAccount.balance=v.checkingAccount.balance+k,o){pt(v);let T=p0(o.kids,v);_e.updateKids(T),n(3,l="sent money successfully"),n(2,a=!0),n(4,c=!1)}else n(3,l="something went wrong. reload and try again"),n(2,a=!0);n(0,i=0),n(1,r="")}}else n(3,l="Please put a valid number!"),n(2,a=!0),n(0,i=0),n(1,r="")}function h(b){a=b,n(2,a)}function d(b){l=b,n(3,l)}const m=()=>n(4,c=!c);function g(){i=Xe(this.value),n(0,i)}function _(){r=this.value,n(1,r)}const w=b=>u(b);return t.$$set=b=>{"name"in b&&n(6,s=b.name)},[i,r,a,l,c,u,s,h,d,m,g,_,w]}class V0 extends Ne{constructor(e){super(),De(this,e,F0,U0,Te,{name:6})}}function x0(t){let e,n,s;return{c(){e=y("button"),e.textContent="Request payment",p(e,"class","link underline bg-yellow svelte-lcmlq9")},m(i,r){N(i,e,r),n||(s=U(e,"click",t[10]),n=!0)},p:pe,d(i){i&&D(e),n=!1,s()}}}function B0(t){let e,n=t[4]?"\xD7":"request money",s,i,r,o;return{c(){e=y("button"),s=F(n),p(e,"class",i=Gt(t[4]?"link text-4xl pt-0 bg-yellow lh-1":"link underline bg-yellow")+" svelte-lcmlq9")},m(a,l){N(a,e,l),f(e,s),r||(o=U(e,"click",t[9]),r=!0)},p(a,l){l&16&&n!==(n=a[4]?"\xD7":"request money")&&Z(s,n),l&16&&i!==(i=Gt(a[4]?"link text-4xl pt-0 bg-yellow lh-1":"link underline bg-yellow")+" svelte-lcmlq9")&&p(e,"class",i)},d(a){a&&D(e),r=!1,o()}}}function mc(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_;return{c(){e=y("div"),n=y("h3"),n.textContent="Request payment",s=E(),i=y("div"),r=y("input"),o=E(),a=y("label"),a.textContent="(from checking)",l=E(),c=y("label"),c.textContent="Memo",u=E(),h=y("input"),d=E(),m=y("button"),m.textContent="request",p(n,"class","text-xl p-2"),p(r,"id","add"),p(r,"type","number"),p(r,"max","0"),p(r,"min","100000"),p(r,"placeholder","0"),p(r,"class","p-2 outline-none text-center col-start-1 row-start-1 bg-pink rounded-md shaded big-shade w-88 right"),p(a,"for","add"),p(a,"class","text-center italic row-start-1 col-start-2 col-end-4 pt-2"),p(c,"for","memo"),p(c,"class","col-start-1 row-start-2 text-center pt-2"),p(h,"id","memo"),p(h,"type","text"),p(h,"maxlength","50"),p(h,"placeholder","for movie tickets"),p(h,"class","p-2 outline-none row-start-2 col-start-2 col-end-4 bg-pink rounded-md shaded big-shade"),p(m,"class","bg-green border-black shaded border-2 p-2 pl-6 pr-6 rounded-md col-start-3 row-start-3 mb-1 h-5"),p(i,"class","grid grid-cols-3 grid-row-3 gap-4"),p(e,"class","border-black border-2 rounded-xl shaded p-2 mb-4")},m(w,b){N(w,e,b),f(e,n),f(e,s),f(e,i),f(i,r),le(r,t[0]),f(i,o),f(i,a),f(i,l),f(i,c),f(i,u),f(i,h),le(h,t[1]),f(i,d),f(i,m),g||(_=[U(r,"input",t[11]),U(h,"input",t[12]),U(m,"click",t[5])],g=!0)},p(w,b){b&1&&Xe(r.value)!==w[0]&&le(r,w[0]),b&2&&h.value!==w[1]&&le(h,w[1])},d(w){w&&D(e),g=!1,ke(_)}}}function j0(t){let e,n,s,i,r,o,a;function l(_){t[7](_)}function c(_){t[8](_)}let u={};t[2]!==void 0&&(u.visible=t[2]),t[3]!==void 0&&(u.message=t[3]),n=new nt({props:u}),re.push(()=>ae(n,"visible",l)),re.push(()=>ae(n,"message",c));function h(_,w){return _[4]?B0:x0}let d=h(t),m=d(t),g=t[4]&&mc(t);return{c(){e=y("div"),ie(n.$$.fragment),r=E(),m.c(),o=E(),g&&g.c(),p(e,"class","")},m(_,w){N(_,e,w),ee(n,e,null),f(e,r),m.m(e,null),f(e,o),g&&g.m(e,null),a=!0},p(_,[w]){const b={};!s&&w&4&&(s=!0,b.visible=_[2],oe(()=>s=!1)),!i&&w&8&&(i=!0,b.message=_[3],oe(()=>i=!1)),n.$set(b),d===(d=h(_))&&m?m.p(_,w):(m.d(1),m=d(_),m&&(m.c(),m.m(e,o))),_[4]?g?g.p(_,w):(g=mc(_),g.c(),g.m(e,null)):g&&(g.d(1),g=null)},i(_){a||(L(n.$$.fragment,_),a=!0)},o(_){V(n.$$.fragment,_),a=!1},d(_){_&&D(e),te(n),m.d(),g&&g.d()}}}function $0(t,e,n){let{kid:s=null}=e,i=0,r="",o,a=!1,l="",c=!1;_e.subscribe(b=>o=b);async function u(){if(i<=0){n(3,l="Request more than 0."),n(2,a=!0),n(0,i=0);return}if(s&&(s.pending.push({date:Ut(new Date),amount:i*-1,memo:r}),o)){let b=o.kids.map(k=>k&&s&&k.name==s.name?s:k);const v=Xt(Jt,"parents",o.uid);await wr(v,{kids:b}),_e.updateKids(b),_e.subscribe(k=>o=k),n(3,l=`Requested $${i} from ${s.name}`),n(2,a=!0),n(0,i=0),n(1,r=""),n(4,c=!1)}}function h(b){a=b,n(2,a)}function d(b){l=b,n(3,l)}const m=()=>n(4,c=!c),g=()=>n(4,c=!c);function _(){i=Xe(this.value),n(0,i)}function w(){r=this.value,n(1,r)}return t.$$set=b=>{"kid"in b&&n(6,s=b.kid)},[i,r,a,l,c,u,s,h,d,m,g,_,w]}class q0 extends Ne{constructor(e){super(),De(this,e,$0,j0,Te,{kid:6})}}function gc(t,e,n){const s=t.slice();return s[9]=e[n],s}function vc(t){let e,n,s,i,r,o,a,l,c=t[0].checkingAccount.balance.toFixed(2)+"",u,h,d,m,g,_,w,b,v,k;d=new q0({props:{kid:t[0]}});function A(S){t[4](S)}let T={};t[0].name!==void 0&&(T.name=t[0].name),g=new V0({props:T}),re.push(()=>ae(g,"name",A));function I(S,M){return S[2]&&S[0].checkingAccount.transactions.length>0?z0:S[2]&&S[0].checkingAccount.transactions.length==0?K0:H0}let P=I(t),C=P(t);return{c(){e=y("div"),n=y("div"),s=y("div"),i=y("div"),r=y("button"),r.textContent="\xD7",o=E(),a=y("h3"),l=F("Current balance: $"),u=F(c),h=E(),ie(d.$$.fragment),m=E(),ie(g.$$.fragment),w=E(),C.c(),p(r,"class","bg-pink rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex center px-2"),p(i,"class","w-full flex flex-row justify-end"),p(a,"class","text-2xl text-center"),p(s,"class","bg-yellow border-black border-2 p-2 rounded-xl shaded w-full m-4"),p(n,"class","center w-full h-full pt-6 w-360"),p(e,"class","absolute center w-full h-full bg-black75 top-0 left-0 ")},m(S,M){N(S,e,M),f(e,n),f(n,s),f(s,i),f(i,r),f(s,o),f(s,a),f(a,l),f(a,u),f(s,h),ee(d,s,null),f(s,m),ee(g,s,null),f(s,w),C.m(s,null),b=!0,v||(k=[U(r,"click",t[3]),qi(W0.call(null,s)),U(s,"click_outside",t[8])],v=!0)},p(S,M){(!b||M&1)&&c!==(c=S[0].checkingAccount.balance.toFixed(2)+"")&&Z(u,c);const $={};M&1&&($.kid=S[0]),d.$set($);const z={};!_&&M&1&&(_=!0,z.name=S[0].name,oe(()=>_=!1)),g.$set(z),P===(P=I(S))&&C?C.p(S,M):(C.d(1),C=P(S),C&&(C.c(),C.m(s,null)))},i(S){b||(L(d.$$.fragment,S),L(g.$$.fragment,S),b=!0)},o(S){V(d.$$.fragment,S),V(g.$$.fragment,S),b=!1},d(S){S&&D(e),te(d),te(g),C.d(),v=!1,ke(k)}}}function H0(t){let e,n,s;return{c(){e=y("button"),e.textContent="See previous transactions",p(e,"class","underline bg-yellow link svelte-sxavsn")},m(i,r){N(i,e,r),n||(s=U(e,"click",t[7]),n=!0)},p:pe,d(i){i&&D(e),n=!1,s()}}}function K0(t){let e,n,s,i,r;return{c(){e=y("button"),e.textContent="\xD7",n=E(),s=y("div"),s.innerHTML="<p>No transactions... yet</p>",p(e,"class","link text-4xl bg-yellow svelte-sxavsn"),p(s,"class","p-2 border-black border-2 rounded-xl")},m(o,a){N(o,e,a),N(o,n,a),N(o,s,a),i||(r=U(e,"click",t[6]),i=!0)},p:pe,d(o){o&&D(e),o&&D(n),o&&D(s),i=!1,r()}}}function z0(t){let e,n,s,i,r,o,a,l,c,u=t[0].checkingAccount.transactions,h=[];for(let d=0;d<u.length;d+=1)h[d]=yc(gc(t,u,d));return{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("div"),r=y("div"),r.innerHTML=`<p class="inline m-2 bold">Amount</p> 

                        <p class="inline m-2 bold">Balance</p>`,o=E(),a=y("div");for(let d=0;d<h.length;d+=1)h[d].c();p(n,"class","link text-4xl bg-yellow svelte-sxavsn"),p(r,"class","w-full flex justify-evenly border-black border-b-2"),p(a,"class","scroll-content small svelte-sxavsn"),p(i,"class","border-black border-2 rounded-xl shaded p-2")},m(d,m){N(d,e,m),f(e,n),f(e,s),f(e,i),f(i,r),f(i,o),f(i,a);for(let g=0;g<h.length;g+=1)h[g].m(a,null);l||(c=U(n,"click",t[5]),l=!0)},p(d,m){if(m&1){u=d[0].checkingAccount.transactions;let g;for(g=0;g<u.length;g+=1){const _=gc(d,u,g);h[g]?h[g].p(_,m):(h[g]=yc(_),h[g].c(),h[g].m(a,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=u.length}},d(d){d&&D(e),vn(h,d),l=!1,c()}}}function yc(t){let e,n,s,i=t[9].date+"",r,o,a,l,c=Number(t[9].amount).toFixed(2)+"",u,h,d,m,g=Number(t[9].currentBalance).toFixed(2)+"",_,w,b,v,k,A,T=t[9].memo+"",I,P;return{c(){e=y("div"),n=y("div"),s=y("p"),r=F(i),o=E(),a=y("div"),l=y("p"),u=F(c),d=E(),m=y("p"),_=F(g),b=E(),v=y("p"),k=y("span"),k.textContent="memo:",A=E(),I=F(T),P=E(),p(s,"class",""),p(n,"class","w-full line"),p(l,"class",h="inline bold m-2 "+(t[9].amount<0&&"text-pink")+" svelte-sxavsn"),p(m,"class",w="inline m-2 "+(t[9].amount<0&&"text-pink")+" svelte-sxavsn"),p(a,"class","w-full flex justify-evenly"),p(k,"class","bold"),p(v,"class","italic"),p(e,"class","border-pink border-b-2")},m(C,S){N(C,e,S),f(e,n),f(n,s),f(s,r),f(e,o),f(e,a),f(a,l),f(l,u),f(a,d),f(a,m),f(m,_),f(e,b),f(e,v),f(v,k),f(v,A),f(v,I),f(e,P)},p(C,S){S&1&&i!==(i=C[9].date+"")&&Z(r,i),S&1&&c!==(c=Number(C[9].amount).toFixed(2)+"")&&Z(u,c),S&1&&h!==(h="inline bold m-2 "+(C[9].amount<0&&"text-pink")+" svelte-sxavsn")&&p(l,"class",h),S&1&&g!==(g=Number(C[9].currentBalance).toFixed(2)+"")&&Z(_,g),S&1&&w!==(w="inline m-2 "+(C[9].amount<0&&"text-pink")+" svelte-sxavsn")&&p(m,"class",w),S&1&&T!==(T=C[9].memo+"")&&Z(I,T)},d(C){C&&D(e)}}}function G0(t){let e,n,s=t[1]&&t[0]&&vc(t);return{c(){s&&s.c(),e=Ye()},m(i,r){s&&s.m(i,r),N(i,e,r),n=!0},p(i,[r]){i[1]&&i[0]?s?(s.p(i,r),r&3&&L(s,1)):(s=vc(i),s.c(),L(s,1),s.m(e.parentNode,e)):s&&(at(),V(s,1,1,()=>{s=null}),lt())},i(i){n||(L(s),n=!0)},o(i){V(s),n=!1},d(i){s&&s.d(i),i&&D(e)}}}function W0(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function Q0(t,e,n){let{kid:s}=e,{openChecking:i=!1}=e,r=!1;const o=()=>n(1,i=!1);function a(d){t.$$.not_equal(s.name,d)&&(s.name=d,n(0,s))}const l=()=>n(2,r=!1),c=()=>n(2,r=!1),u=()=>n(2,r=!0),h=()=>n(1,i=!1);return t.$$set=d=>{"kid"in d&&n(0,s=d.kid),"openChecking"in d&&n(1,i=d.openChecking)},[s,i,r,o,a,l,c,u,h]}class Y0 extends Ne{constructor(e){super(),De(this,e,Q0,G0,Te,{kid:0,openChecking:1})}}function _c(t,e,n){const s=t.slice();return s[10]=e[n],s}function bc(t){let e,n,s,i,r,o,a,l,c,u=(t[4]?t[4].toFixed(2):"no interest")+"",h,d,m=t[0].savingsAccount.compounded+"",g,_,w=t[0].savingsAccount.compounded=="day"?`, or ~${(t[4]*365).toFixed(2)} per year`:"",b,v,k=t[0].savingsAccount.compounded=="week"?`, or ~${(t[4]*52).toFixed(2)} per year`:"",A,T,I=t[0].savingsAccount.compounded=="month"?`, or ~${(t[4]*12).toFixed(2)} per year`:"",P,C,S,M,$=t[5],z=[];for(let q=0;q<$.length;q+=1)z[q]=wc(_c(t,$,q));return{c(){e=y("div"),n=y("input"),s=E(),i=y("p"),i.textContent="% per",r=E(),o=y("select");for(let q=0;q<z.length;q+=1)z[q].c();a=E(),l=y("p"),c=F("(that's "),h=F(u),d=F(" per "),g=F(m),_=E(),b=F(w),v=E(),A=F(k),T=E(),P=F(I),C=F(`
		)`),p(n,"id","int"),p(n,"type","number"),p(n,"min","0.01"),p(n,"max","100"),p(n,"class","w-13 outline-none text-center mr-3 p-2 bg-pink shaded big-shade rounded-md svelte-lfg5lk"),p(i,"class","text-center svelte-lfg5lk"),p(o,"class","w-13 bg-pink shaded rounded-md p-2 ml-3 svelte-lfg5lk"),t[0].savingsAccount.compounded===void 0&&Nt(()=>t[9].call(o)),p(e,"class","line-between mt-4 mb-4 svelte-lfg5lk"),p(l,"class","text-center svelte-lfg5lk")},m(q,J){N(q,e,J),f(e,n),le(n,t[1]),f(e,s),f(e,i),f(e,r),f(e,o);for(let H=0;H<z.length;H+=1)z[H].m(o,null);vi(o,t[0].savingsAccount.compounded),N(q,a,J),N(q,l,J),f(l,c),f(l,h),f(l,d),f(l,g),f(l,_),f(l,b),f(l,v),f(l,A),f(l,T),f(l,P),f(l,C),S||(M=[U(n,"input",t[8]),U(o,"change",t[9])],S=!0)},p(q,J){if(J&2&&Xe(n.value)!==q[1]&&le(n,q[1]),J&33){$=q[5];let H;for(H=0;H<$.length;H+=1){const Q=_c(q,$,H);z[H]?z[H].p(Q,J):(z[H]=wc(Q),z[H].c(),z[H].m(o,null))}for(;H<z.length;H+=1)z[H].d(1);z.length=$.length}J&33&&vi(o,q[0].savingsAccount.compounded),J&16&&u!==(u=(q[4]?q[4].toFixed(2):"no interest")+"")&&Z(h,u),J&1&&m!==(m=q[0].savingsAccount.compounded+"")&&Z(g,m),J&17&&w!==(w=q[0].savingsAccount.compounded=="day"?`, or ~${(q[4]*365).toFixed(2)} per year`:"")&&Z(b,w),J&17&&k!==(k=q[0].savingsAccount.compounded=="week"?`, or ~${(q[4]*52).toFixed(2)} per year`:"")&&Z(A,k),J&17&&I!==(I=q[0].savingsAccount.compounded=="month"?`, or ~${(q[4]*12).toFixed(2)} per year`:"")&&Z(P,I)},d(q){q&&D(e),vn(z,q),q&&D(a),q&&D(l),S=!1,ke(M)}}}function X0(t){let e,n=t[10]+"",s;return{c(){e=y("option"),s=F(n),e.__value=t[10],e.value=e.__value,p(e,"class","svelte-lfg5lk")},m(i,r){N(i,e,r),f(e,s)},p:pe,d(i){i&&D(e)}}}function J0(t){let e,n=t[10]+"",s;return{c(){e=y("option"),s=F(n),e.__value=t[10],e.value=e.__value,p(e,"default",""),p(e,"class","svelte-lfg5lk")},m(i,r){N(i,e,r),f(e,s)},p:pe,d(i){i&&D(e)}}}function wc(t){let e;function n(r,o){return r[10]==r[0].savingsAccount.compounded?J0:X0}let s=n(t),i=s(t);return{c(){i.c(),e=Ye()},m(r,o){i.m(r,o),N(r,e,o)},p(r,o){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&D(e)}}}function Z0(t){let e,n,s,i,r,o;function a(h){t[6](h)}function l(h){t[7](h)}let c={};t[2]!==void 0&&(c.message=t[2]),t[3]!==void 0&&(c.visible=t[3]),e=new nt({props:c}),re.push(()=>ae(e,"message",a)),re.push(()=>ae(e,"visible",l));let u=t[0]&&bc(t);return{c(){ie(e.$$.fragment),i=E(),u&&u.c(),r=Ye()},m(h,d){ee(e,h,d),N(h,i,d),u&&u.m(h,d),N(h,r,d),o=!0},p(h,[d]){const m={};!n&&d&4&&(n=!0,m.message=h[2],oe(()=>n=!1)),!s&&d&8&&(s=!0,m.visible=h[3],oe(()=>s=!1)),e.$set(m),h[0]?u?u.p(h,d):(u=bc(h),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null)},i(h){o||(L(e.$$.fragment,h),o=!0)},o(h){V(e.$$.fragment,h),o=!1},d(h){te(e,h),h&&D(i),u&&u.d(h),h&&D(r)}}}function ew(t,e,n){let s,{kid:i=null}=e,{amount:r=(i==null?void 0:i.savingsAccount.interest)||0}=e;const o=["day","week","month","year"];let a="",l=!1;function c(m){a=m,n(2,a)}function u(m){l=m,n(3,l)}function h(){r=Xe(this.value),n(1,r)}function d(){i.savingsAccount.compounded=zc(this),n(0,i),n(5,o)}return t.$$set=m=>{"kid"in m&&n(0,i=m.kid),"amount"in m&&n(1,r=m.amount)},t.$$.update=()=>{t.$$.dirty&3&&n(4,s=r*(i.savingsAccount.balance/100))},[i,r,a,l,s,o,c,u,h,d]}class Qd extends Ne{constructor(e){super(),De(this,e,ew,Z0,Te,{kid:0,amount:1})}}function kc(t,e,n){const s=t.slice();return s[18]=e[n],s}function Ec(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_,w;function b(M){t[8](M)}function v(M){t[9](M)}let k={};t[4]!==void 0&&(k.message=t[4]),t[6]!==void 0&&(k.visible=t[6]),e=new nt({props:k}),re.push(()=>ae(e,"message",b)),re.push(()=>ae(e,"visible",v));const A=[nw,tw],T=[];function I(M,$){return M[5]?0:1}h=I(t),d=T[h]=A[h](t);function P(M,$){return M[2]&&M[0].savingsAccount.transactions.length>0?rw:M[2]&&M[0].savingsAccount.transactions.length==0?iw:sw}let C=P(t),S=C(t);return{c(){ie(e.$$.fragment),i=E(),r=y("div"),o=y("div"),a=y("div"),l=y("div"),c=y("button"),c.textContent="\xD7",u=E(),d.c(),m=E(),S.c(),p(c,"class","bg-pink rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex center px-2"),p(l,"class","w-full flex flex-row justify-end"),p(a,"class","bg-yellow border-black border-2 p-2 rounded-xl shaded w-full m-4"),p(o,"class","center w-full h-full pt-6"),p(r,"class","absolute center w-full h-full bg-black75 top-0 left-0 ")},m(M,$){ee(e,M,$),N(M,i,$),N(M,r,$),f(r,o),f(o,a),f(a,l),f(l,c),f(a,u),T[h].m(a,null),f(a,m),S.m(a,null),g=!0,_||(w=[U(c,"click",t[10]),qi(aw.call(null,a)),U(a,"click_outside",t[17])],_=!0)},p(M,$){const z={};!n&&$&16&&(n=!0,z.message=M[4],oe(()=>n=!1)),!s&&$&64&&(s=!0,z.visible=M[6],oe(()=>s=!1)),e.$set(z);let q=h;h=I(M),h===q?T[h].p(M,$):(at(),V(T[q],1,1,()=>{T[q]=null}),lt(),d=T[h],d?d.p(M,$):(d=T[h]=A[h](M),d.c()),L(d,1),d.m(a,m)),C===(C=P(M))&&S?S.p(M,$):(S.d(1),S=C(M),S&&(S.c(),S.m(a,null)))},i(M){g||(L(e.$$.fragment,M),L(d),g=!0)},o(M){V(e.$$.fragment,M),V(d),g=!1},d(M){te(e,M),M&&D(i),M&&D(r),T[h].d(),S.d(),_=!1,ke(w)}}}function tw(t){let e,n,s;return{c(){e=y("button"),e.textContent="Adjust Interest",p(e,"class","link underline bg-yellow svelte-1li98ir")},m(i,r){N(i,e,r),n||(s=U(e,"click",t[13]),n=!0)},p:pe,i:pe,o:pe,d(i){i&&D(e),n=!1,s()}}}function nw(t){let e,n,s,i,r,o=t[0].savingsAccount.balance.toFixed(2)+"",a,l,c,u,h,d,m,g,_,w,b;function v(A){t[12](A)}let k={kid:t[0]};return t[3]!==void 0&&(k.amount=t[3]),h=new Qd({props:k}),re.push(()=>ae(h,"amount",v)),{c(){e=y("button"),e.textContent="\xD7",n=E(),s=y("div"),i=y("h3"),r=F("Current balance: $"),a=F(o),l=E(),c=y("h4"),c.textContent="Adjust Interest",u=E(),ie(h.$$.fragment),m=E(),g=y("button"),g.textContent="adjust",p(e,"class","link text-4xl bg-yellow svelte-1li98ir"),p(i,"class","text-2xl text-center"),p(g,"class","bg-green rounded-md border-black border-2 shaded mb-1 big-shade"),p(s,"class","border-black border-2 p-2 rounded-xl mt-2")},m(A,T){N(A,e,T),N(A,n,T),N(A,s,T),f(s,i),f(i,r),f(i,a),f(s,l),f(s,c),f(s,u),ee(h,s,null),f(s,m),f(s,g),_=!0,w||(b=[U(e,"click",t[11]),U(g,"click",t[7])],w=!0)},p(A,T){(!_||T&1)&&o!==(o=A[0].savingsAccount.balance.toFixed(2)+"")&&Z(a,o);const I={};T&1&&(I.kid=A[0]),!d&&T&8&&(d=!0,I.amount=A[3],oe(()=>d=!1)),h.$set(I)},i(A){_||(L(h.$$.fragment,A),_=!0)},o(A){V(h.$$.fragment,A),_=!1},d(A){A&&D(e),A&&D(n),A&&D(s),te(h),w=!1,ke(b)}}}function sw(t){let e,n,s;return{c(){e=y("button"),e.textContent="See previous transactions",p(e,"class","underline bg-yellow link p-4 svelte-1li98ir")},m(i,r){N(i,e,r),n||(s=U(e,"click",t[16]),n=!0)},p:pe,d(i){i&&D(e),n=!1,s()}}}function iw(t){let e,n,s,i,r;return{c(){e=y("button"),e.textContent="\xD7",n=E(),s=y("div"),s.innerHTML='<p class="p-4">No Transactions... yet</p>',p(e,"class","bg-yellow link text-4xl svelte-1li98ir"),p(s,"class","p-2 border-black border-2 rounded-xl mt-2")},m(o,a){N(o,e,a),N(o,n,a),N(o,s,a),i||(r=U(e,"click",t[15]),i=!0)},p:pe,d(o){o&&D(e),o&&D(n),o&&D(s),i=!1,r()}}}function rw(t){let e,n,s,i,r,o,a,l,c=t[0].savingsAccount.transactions,u=[];for(let h=0;h<c.length;h+=1)u[h]=Ic(kc(t,c,h));return{c(){e=y("div"),n=y("button"),n.textContent="\xD7",s=E(),i=y("div"),i.innerHTML=`<p class="inline m-2 bold">Amount</p> 
                    <p class="inline m-2 bold">Balance</p>`,r=E(),o=y("div");for(let h=0;h<u.length;h+=1)u[h].c();p(n,"class","border-black bg-pink border-2 rounded-md shaded p-2 pl-4 pr-4 mb-1"),p(i,"class","w-full flex justify-evenly border-black border-b-2 mt-2"),p(o,"class","scroll-content small svelte-1li98ir")},m(h,d){N(h,e,d),f(e,n),f(e,s),f(e,i),f(e,r),f(e,o);for(let m=0;m<u.length;m+=1)u[m].m(o,null);a||(l=U(n,"click",t[14]),a=!0)},p(h,d){if(d&1){c=h[0].savingsAccount.transactions;let m;for(m=0;m<c.length;m+=1){const g=kc(h,c,m);u[m]?u[m].p(g,d):(u[m]=Ic(g),u[m].c(),u[m].m(o,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=c.length}},d(h){h&&D(e),vn(u,h),a=!1,l()}}}function Ic(t){let e,n,s,i=t[18].date+"",r,o,a,l,c=Number(t[18].amount).toFixed(2)+"",u,h,d,m,g=Number(t[18].currentBalance).toFixed(2)+"",_,w,b,v,k,A,T=t[18].memo+"",I,P;return{c(){e=y("div"),n=y("div"),s=y("p"),r=F(i),o=E(),a=y("div"),l=y("p"),u=F(c),d=E(),m=y("p"),_=F(g),b=E(),v=y("p"),k=y("span"),k.textContent="memo:",A=E(),I=F(T),P=E(),p(s,"class",""),p(n,"class","w-full line"),p(l,"class",h="inline m-2 "+(t[18].amount<0&&"text-pink")+" svelte-1li98ir"),p(m,"class",w="inline m-2 "+(t[18].amount<0&&"text-pink")+" svelte-1li98ir"),p(a,"class","w-full flex justify-evenly"),p(k,"class","bold"),p(v,"class","italic"),p(e,"class","border-pink border-b-2")},m(C,S){N(C,e,S),f(e,n),f(n,s),f(s,r),f(e,o),f(e,a),f(a,l),f(l,u),f(a,d),f(a,m),f(m,_),f(e,b),f(e,v),f(v,k),f(v,A),f(v,I),f(e,P)},p(C,S){S&1&&i!==(i=C[18].date+"")&&Z(r,i),S&1&&c!==(c=Number(C[18].amount).toFixed(2)+"")&&Z(u,c),S&1&&h!==(h="inline m-2 "+(C[18].amount<0&&"text-pink")+" svelte-1li98ir")&&p(l,"class",h),S&1&&g!==(g=Number(C[18].currentBalance).toFixed(2)+"")&&Z(_,g),S&1&&w!==(w="inline m-2 "+(C[18].amount<0&&"text-pink")+" svelte-1li98ir")&&p(m,"class",w),S&1&&T!==(T=C[18].memo+"")&&Z(I,T)},d(C){C&&D(e)}}}function ow(t){let e,n,s=t[1]&&t[0]&&Ec(t);return{c(){s&&s.c(),e=Ye()},m(i,r){s&&s.m(i,r),N(i,e,r),n=!0},p(i,[r]){i[1]&&i[0]?s?(s.p(i,r),r&3&&L(s,1)):(s=Ec(i),s.c(),L(s,1),s.m(e.parentNode,e)):s&&(at(),V(s,1,1,()=>{s=null}),lt())},i(i){n||(L(s),n=!0)},o(i){V(s),n=!1},d(i){s&&s.d(i),i&&D(e)}}}function aw(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function lw(t,e,n){let{kid:s}=e,{openSavings:i=!1}=e,r=!1,o=s.savingsAccount.interest||0,a="",l=!1,c;function u(){if(o){let T=Ct(o.toString());if(T<100)n(4,a="updated interest"),n(0,s.savingsAccount.interest=o,s),pt(s),n(6,c=!0);else return T>100?(n(4,a="please pick a more reasonable interest rate"),n(6,c=!0),n(3,o=0)):(n(4,a="please put a valid number"),n(6,c=!0),n(3,o=0))}else return n(4,a="numbers only please"),n(6,c=!0),n(3,o=0)}function h(T){a=T,n(4,a)}function d(T){c=T,n(6,c)}const m=()=>n(1,i=!1),g=()=>n(5,l=!1);function _(T){o=T,n(3,o)}const w=()=>n(5,l=!0),b=()=>n(2,r=!1),v=()=>n(2,r=!1),k=()=>n(2,r=!0),A=()=>n(1,i=!1);return t.$$set=T=>{"kid"in T&&n(0,s=T.kid),"openSavings"in T&&n(1,i=T.openSavings)},[s,i,r,o,a,l,c,u,h,d,m,g,_,w,b,v,k,A]}class cw extends Ne{constructor(e){super(),De(this,e,lw,ow,Te,{kid:0,openSavings:1})}}function Tc(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_,w,b,v,k,A=t[0].checkingAccount.balance.toFixed(2)+"",T,I,P,C,S,M,$,z,q,J=t[0].savingsAccount.balance.toFixed(2)+"",H,Q,ue,Ae,ge,B,ye,et;function Ke(K){t[7](K)}let bt={kid:t[0]};t[5]!==void 0&&(bt.openChecking=t[5]),e=new Y0({props:bt}),re.push(()=>ae(e,"openChecking",Ke));function wt(K){t[8](K)}let Ee={kid:t[0]};t[4]!==void 0&&(Ee.openSavings=t[4]),i=new cw({props:Ee}),re.push(()=>ae(i,"openSavings",wt));function ut(K){t[9](K)}function ht(K){t[10](K)}let kt={};t[2]!==void 0&&(kt.visible=t[2]),t[1]!==void 0&&(kt.message=t[1]),a=new nt({props:kt}),re.push(()=>ae(a,"visible",ut)),re.push(()=>ae(a,"message",ht));let Pe=t[3]!=t[0].name&&Ac(t);return{c(){ie(e.$$.fragment),s=E(),ie(i.$$.fragment),o=E(),ie(a.$$.fragment),u=E(),h=y("div"),d=y("div"),m=y("input"),g=E(),Pe&&Pe.c(),_=E(),w=y("div"),b=y("div"),v=y("h3"),k=F("$"),T=F(A),I=E(),P=y("h6"),P.textContent="Checking Account",C=E(),S=y("button"),S.textContent="Edit",M=E(),$=y("div"),z=y("h3"),q=F("$"),H=F(J),Q=E(),ue=y("h6"),ue.textContent="Savings Account",Ae=E(),ge=y("button"),ge.textContent="Edit",p(m,"type","text"),p(m,"id","name"),p(m,"class","w-25 italic outline-none inline text-2xl text-center border-black border-b-2 bg-pink mr-6"),p(d,"class","w-full row line p-6 border-black border-b-2"),p(v,"class","text-2xl"),p(S,"class","border-black border-2 rounded-md mb-1 bg-yellow shaded"),p(b,"class","w-full center col p-4 pt-12 pb-8 pr-6 border-black border-r-2"),p(z,"class","text-2xl"),p(ge,"class","border-black border-2 rounded-md mb-1 bg-green shaded"),p($,"class","w-full center col p-4 pt-12 pb-8"),p(w,"class","w-full grid grid-rows-1 grid-col-2 gap-4"),p(h,"class","bg-pink rounded-xl border-black border-2 shaded m-2 p-2 mb-4 mt-4 center col shadow-md")},m(K,be){ee(e,K,be),N(K,s,be),ee(i,K,be),N(K,o,be),ee(a,K,be),N(K,u,be),N(K,h,be),f(h,d),f(d,m),le(m,t[3]),f(d,g),Pe&&Pe.m(d,null),f(h,_),f(h,w),f(w,b),f(b,v),f(v,k),f(v,T),f(b,I),f(b,P),f(b,C),f(b,S),f(w,M),f(w,$),f($,z),f(z,q),f(z,H),f($,Q),f($,ue),f($,Ae),f($,ge),B=!0,ye||(et=[U(m,"input",t[11]),U(S,"click",t[12]),U(ge,"click",t[13])],ye=!0)},p(K,be){const Re={};be&1&&(Re.kid=K[0]),!n&&be&32&&(n=!0,Re.openChecking=K[5],oe(()=>n=!1)),e.$set(Re);const Wn={};be&1&&(Wn.kid=K[0]),!r&&be&16&&(r=!0,Wn.openSavings=K[4],oe(()=>r=!1)),i.$set(Wn);const wn={};!l&&be&4&&(l=!0,wn.visible=K[2],oe(()=>l=!1)),!c&&be&2&&(c=!0,wn.message=K[1],oe(()=>c=!1)),a.$set(wn),be&8&&m.value!==K[3]&&le(m,K[3]),K[3]!=K[0].name?Pe?Pe.p(K,be):(Pe=Ac(K),Pe.c(),Pe.m(d,null)):Pe&&(Pe.d(1),Pe=null),(!B||be&1)&&A!==(A=K[0].checkingAccount.balance.toFixed(2)+"")&&Z(T,A),(!B||be&1)&&J!==(J=K[0].savingsAccount.balance.toFixed(2)+"")&&Z(H,J)},i(K){B||(L(e.$$.fragment,K),L(i.$$.fragment,K),L(a.$$.fragment,K),B=!0)},o(K){V(e.$$.fragment,K),V(i.$$.fragment,K),V(a.$$.fragment,K),B=!1},d(K){te(e,K),K&&D(s),te(i,K),K&&D(o),te(a,K),K&&D(u),K&&D(h),Pe&&Pe.d(),ye=!1,ke(et)}}}function Ac(t){let e,n,s;return{c(){e=y("button"),e.textContent="Save Changes",p(e,"class","bg-yellow border-black border-2 rounded-md p-2 pl-6 pr-6 mb-1 shaded")},m(i,r){N(i,e,r),n||(s=U(e,"click",t[6]),n=!0)},p:pe,d(i){i&&D(e),n=!1,s()}}}function uw(t){let e,n,s=t[0]&&Tc(t);return{c(){s&&s.c(),e=Ye()},m(i,r){s&&s.m(i,r),N(i,e,r),n=!0},p(i,[r]){i[0]?s?(s.p(i,r),r&1&&L(s,1)):(s=Tc(i),s.c(),L(s,1),s.m(e.parentNode,e)):s&&(at(),V(s,1,1,()=>{s=null}),lt())},i(i){n||(L(s),n=!0)},o(i){V(s),n=!1},d(i){s&&s.d(i),i&&D(e)}}}function hw(t,e,n){let{kid:s=null}=e,i;_e.subscribe(v=>i=v);let r="",o=!1,a=s.name,l=!1,c=!1;function u(){i&&(n(0,s.name=a,s),pt(s),n(1,r=`Name changed to ${s.name}`),n(2,o=!0),_e.updateKid(s))}function h(v){c=v,n(5,c)}function d(v){l=v,n(4,l)}function m(v){o=v,n(2,o)}function g(v){r=v,n(1,r)}function _(){a=this.value,n(3,a)}const w=()=>n(5,c=!0),b=()=>n(4,l=!0);return t.$$set=v=>{"kid"in v&&n(0,s=v.kid)},[s,r,o,a,l,c,u,h,d,m,g,_,w,b]}class dw extends Ne{constructor(e){super(),De(this,e,hw,uw,Te,{kid:0})}}function Sc(t,e,n){const s=t.slice();return s[11]=e[n],s}function Cc(t){let e,n,s,i,r,o,a,l,c,u,h,d,m;function g(k){t[6](k)}function _(k){t[7](k)}let w={};t[1]!==void 0&&(w.message=t[1]),t[2]!==void 0&&(w.visible=t[2]),n=new nt({props:w}),re.push(()=>ae(n,"message",g)),re.push(()=>ae(n,"visible",_));let b=t[4],v=[];for(let k=0;k<b.length;k+=1)v[k]=Dc(Sc(t,b,k));return{c(){e=y("div"),ie(n.$$.fragment),r=E(),o=y("input"),a=E(),l=y("p"),l.textContent="per",c=E(),u=y("select");for(let k=0;k<v.length;k+=1)v[k].c();p(o,"type","number"),p(o,"min","0"),p(o,"class","w-13 outline-none text-center p-2 bg-green rounded-md shaded big-shade"),p(l,"class","p-2"),p(u,"class","bg-green shaded p-2 rounded-md w-13 ml-3"),t[0].checkingAccount.frequency===void 0&&Nt(()=>t[10].call(u)),p(e,"class","line-between mt-4")},m(k,A){N(k,e,A),ee(n,e,null),f(e,r),f(e,o),le(o,t[3]),f(e,a),f(e,l),f(e,c),f(e,u);for(let T=0;T<v.length;T+=1)v[T].m(u,null);vi(u,t[0].checkingAccount.frequency),h=!0,d||(m=[U(o,"input",t[8]),U(o,"change",t[9]),U(u,"change",t[10])],d=!0)},p(k,A){const T={};if(!s&&A&2&&(s=!0,T.message=k[1],oe(()=>s=!1)),!i&&A&4&&(i=!0,T.visible=k[2],oe(()=>i=!1)),n.$set(T),A&8&&Xe(o.value)!==k[3]&&le(o,k[3]),A&16){b=k[4];let I;for(I=0;I<b.length;I+=1){const P=Sc(k,b,I);v[I]?v[I].p(P,A):(v[I]=Dc(P),v[I].c(),v[I].m(u,null))}for(;I<v.length;I+=1)v[I].d(1);v.length=b.length}A&17&&vi(u,k[0].checkingAccount.frequency)},i(k){h||(L(n.$$.fragment,k),h=!0)},o(k){V(n.$$.fragment,k),h=!1},d(k){k&&D(e),te(n),vn(v,k),d=!1,ke(m)}}}function Dc(t){let e,n=t[11]+"",s;return{c(){e=y("option"),s=F(n),e.__value=t[11],e.value=e.__value},m(i,r){N(i,e,r),f(e,s)},p:pe,d(i){i&&D(e)}}}function fw(t){let e,n,s=t[0]&&Cc(t);return{c(){s&&s.c(),e=Ye()},m(i,r){s&&s.m(i,r),N(i,e,r),n=!0},p(i,[r]){i[0]?s?(s.p(i,r),r&1&&L(s,1)):(s=Cc(i),s.c(),L(s,1),s.m(e.parentNode,e)):s&&(at(),V(s,1,1,()=>{s=null}),lt())},i(i){n||(L(s),n=!0)},o(i){V(s),n=!1},d(i){s&&s.d(i),i&&D(e)}}}function pw(t,e,n){const s=["day","week","month","year"];let{kid:i=null}=e,r="",o=!1,a=i==null?void 0:i.checkingAccount.allowance;function l(g){typeof g=="number"?g!==Ct(g.toString())?(n(1,r="valid numbers only, thanks"),n(2,o=!0)):i&&n(0,i.checkingAccount.allowance=Ct(g.toString())||0,i):(n(1,r="valid numbers only, thanks"),n(2,o=!0))}function c(g){r=g,n(1,r)}function u(g){o=g,n(2,o)}function h(){a=Xe(this.value),n(3,a)}const d=()=>l(a||0);function m(){i.checkingAccount.frequency=zc(this),n(0,i),n(4,s)}return t.$$set=g=>{"kid"in g&&n(0,i=g.kid)},[i,r,o,a,s,l,c,u,h,d,m]}class mw extends Ne{constructor(e){super(),De(this,e,pw,fw,Te,{kid:0})}}function Nc(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_,w,b,v,k,A,T,I,P,C,S,M,$,z,q,J,H,Q,ue,Ae,ge,B,ye,et,Ke,bt,wt;return I=new mw({props:{kid:t[4]}}),ge=new Qd({props:{kid:t[4]}}),{c(){e=y("div"),n=y("div"),s=y("div"),i=y("button"),i.textContent="\xD7",r=E(),o=y("div"),a=y("label"),a.textContent="Kid's name",l=E(),c=y("input"),u=E(),h=y("div"),d=y("h2"),d.textContent="Checking Account",m=E(),g=y("div"),_=y("label"),_.textContent="Initial Amount",w=E(),b=y("input"),v=E(),k=y("div"),A=y("h3"),A.textContent="set up allowance (optional)",T=E(),ie(I.$$.fragment),P=E(),C=y("div"),S=y("h2"),S.textContent="Savings Account",M=E(),$=y("div"),z=y("label"),z.textContent="Initial Amount",q=E(),J=y("input"),H=E(),Q=y("h3"),Q.textContent="set up interest (optional)",ue=E(),Ae=y("div"),ie(ge.$$.fragment),B=E(),ye=y("div"),et=y("button"),et.textContent="Create new Account",p(i,"class","bg-pink rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex center px-2"),p(s,"class","m-4 p-4 mt-8 m-8 center justify-end w-full"),p(a,"for","name"),p(a,"class","p-2 w-13"),p(c,"type","text"),p(c,"class","bg-green w-23 rounded-md shaded middle big-shade m-4"),p(o,"class","line border-black border-2 shaded rounded-xl mb-4 w-full"),p(d,"class","text-3xl p-2"),p(_,"for","initialChecking"),p(_,"class","w-13 "),p(b,"type","number"),p(b,"class","bg-green w-50 rounded-md shaded big-shade"),p(g,"class","line p-2 justify-between"),p(A,"class","text-xl"),p(k,"class","p-2"),p(h,"class","border-black border-2 shaded rounded-xl mb-4 w-full"),p(S,"class","text-3xl p-4"),p(z,"for","initialChecking"),p(z,"class","w-13 m-4"),p(J,"type","number"),p(J,"class","bg-pink w-23 m-4 rounded-md shaded big-shade"),p($,"class","line mb-4 mt-4"),p(Q,"class","text-xl p-4"),p(Ae,"class","p-2 mb-0"),p(C,"class","border-black border-2 shaded rounded-xl mb-4 w-full"),p(et,"class","text-black rounded-md bg-yellow border-black border-2 mb-1 shaded big-shade"),p(ye,"class","center justify-end w-full"),p(n,"class","bg-yellow border-black border-2 p-2 rounded-xl shaded w-full m-4"),p(e,"class","absolute center w-full h-full bg-black75 top-0 left-0")},m(Ee,ut){N(Ee,e,ut),f(e,n),f(n,s),f(s,i),f(n,r),f(n,o),f(o,a),f(o,l),f(o,c),le(c,t[4].name),f(n,u),f(n,h),f(h,d),f(h,m),f(h,g),f(g,_),f(g,w),f(g,b),le(b,t[4].checkingAccount.balance),f(h,v),f(h,k),f(k,A),f(k,T),ee(I,k,null),f(n,P),f(n,C),f(C,S),f(C,M),f(C,$),f($,z),f($,q),f($,J),le(J,t[4].savingsAccount.balance),f(C,H),f(C,Q),f(C,ue),f(C,Ae),ee(ge,Ae,null),f(n,B),f(n,ye),f(ye,et),Ke=!0,bt||(wt=[U(i,"click",t[8]),U(c,"input",t[9]),U(b,"input",t[10]),U(J,"input",t[11]),U(et,"click",t[5]),qi(vw.call(null,n)),U(n,"click_outside",t[12])],bt=!0)},p(Ee,ut){ut&16&&c.value!==Ee[4].name&&le(c,Ee[4].name),ut&16&&Xe(b.value)!==Ee[4].checkingAccount.balance&&le(b,Ee[4].checkingAccount.balance);const ht={};ut&16&&(ht.kid=Ee[4]),I.$set(ht),ut&16&&Xe(J.value)!==Ee[4].savingsAccount.balance&&le(J,Ee[4].savingsAccount.balance);const kt={};ut&16&&(kt.kid=Ee[4]),ge.$set(kt)},i(Ee){Ke||(L(I.$$.fragment,Ee),L(ge.$$.fragment,Ee),Ke=!0)},o(Ee){V(I.$$.fragment,Ee),V(ge.$$.fragment,Ee),Ke=!1},d(Ee){Ee&&D(e),te(I),te(ge),bt=!1,ke(wt)}}}function gw(t){let e,n,s,i,r,o;function a(h){t[6](h)}function l(h){t[7](h)}let c={};t[2]!==void 0&&(c.visible=t[2]),t[1]!==void 0&&(c.message=t[1]),e=new nt({props:c}),re.push(()=>ae(e,"visible",a)),re.push(()=>ae(e,"message",l));let u=t[4]&&Nc(t);return{c(){ie(e.$$.fragment),i=E(),u&&u.c(),r=Ye()},m(h,d){ee(e,h,d),N(h,i,d),u&&u.m(h,d),N(h,r,d),o=!0},p(h,[d]){const m={};!n&&d&4&&(n=!0,m.visible=h[2],oe(()=>n=!1)),!s&&d&2&&(s=!0,m.message=h[1],oe(()=>s=!1)),e.$set(m),h[4]?u?(u.p(h,d),d&16&&L(u,1)):(u=Nc(h),u.c(),L(u,1),u.m(r.parentNode,r)):u&&(at(),V(u,1,1,()=>{u=null}),lt())},i(h){o||(L(e.$$.fragment,h),L(u),o=!0)},o(h){V(e.$$.fragment,h),V(u),o=!1},d(h){te(e,h),h&&D(i),u&&u.d(h),h&&D(r)}}}function vw(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function yw(t,e,n){let{value:s=!0}=e,i="",r=!1,o=!0,a=null;_e.subscribe(b=>a=b),console.log(a.kids.length);let l={name:"",dateOpened:new Date().valueOf(),kid:a.kids.length>0?a.kids[a.kids.length-1].kid+1:1,isParent:!1,uid:a.uid||"",checkingAccount:{balance:0,allowance:0,frequency:"week",transactions:[]},savingsAccount:{balance:0,interest:0,compounded:"week",transactions:[]},pending:[]};async function c(b){if(b.preventDefault(),l&&l.name.length<=1){n(1,i="Name is too short!"),n(2,r=!0),n(4,l.name="",l),n(4,l.kid=a.kids.length+1,l);return}if(l&&(n(4,l.checkingAccount.balance=Ct(l.checkingAccount.balance.toString())||0,l),n(4,l.checkingAccount.allowance=Ct(l.checkingAccount.allowance.toString())||0,l),n(4,l.savingsAccount.balance=Ct(l.savingsAccount.balance.toString())||0,l),n(4,l.savingsAccount.interest=Ct(l.savingsAccount.interest.toString())||0,l),a&&a.uid)){a.kids.push(l);const v=Xt(Jt,"parents",a.uid);await wr(v,a),_e.set(a),n(0,s=!1)}}function u(b){r=b,n(2,r)}function h(b){i=b,n(1,i)}const d=()=>n(0,s=!1);function m(){l.name=this.value,n(4,l)}function g(){l.checkingAccount.balance=Xe(this.value),n(4,l)}function _(){l.savingsAccount.balance=Xe(this.value),n(4,l)}const w=()=>n(3,o=!1);return t.$$set=b=>{"value"in b&&n(0,s=b.value)},[s,i,r,o,l,c,u,h,d,m,g,_,w]}class _w extends Ne{constructor(e){super(),De(this,e,yw,gw,Te,{value:0})}}function Rc(t,e,n){const s=t.slice();return s[11]=e[n],s}function Oc(t){let e,n,s,i=t[0],r=[];for(let o=0;o<i.length;o+=1)r[o]=Lc(Rc(t,i,o));return{c(){e=y("div"),n=y("h2"),n.textContent="Requests",s=E();for(let o=0;o<r.length;o+=1)r[o].c();p(n,"class","text-2xl pb-4"),p(e,"class","bg-yellow border-black border-2 shaded rounded-xl m-2 p-2")},m(o,a){N(o,e,a),f(e,n),f(e,s);for(let l=0;l<r.length;l+=1)r[l].m(e,null)},p(o,a){if(a&25){i=o[0];let l;for(l=0;l<i.length;l+=1){const c=Rc(o,i,l);r[l]?r[l].p(c,a):(r[l]=Lc(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},d(o){o&&D(e),vn(r,o)}}}function Lc(t){let e,n,s=t[11].date+"",i,r,o,a,l=t[11].name+"",c,u,h,d=Number(t[11].amount).toFixed(2)+"",m,g,_,w,b,v,k=t[11].memo+"",A,T,I,P,C,S,M,$,z;function q(){return t[8](t[11])}function J(){return t[9](t[11])}return{c(){e=y("div"),n=y("p"),i=F(s),r=E(),o=y("p"),a=F("from: "),c=F(l),u=E(),h=y("p"),m=F(d),g=E(),_=y("div"),w=y("p"),b=y("span"),b.textContent="memo:",v=E(),A=F(k),T=E(),I=y("div"),P=y("button"),P.textContent="Accept",C=E(),S=y("button"),S.textContent="Deny",M=E(),p(n,"class","p-2"),p(o,"class","p-2"),p(h,"class","p-2 inline m-2"),p(e,"class","w-full flex justify-evenly"),p(b,"class","bold"),p(w,"class","italic pl-8"),p(_,"class","w-full line border-black mt-4 mb-4"),p(P,"class","text-black bg-green p-2 pr-6 pl-6 rounded-md border-black border-2 shaded mb-1"),p(S,"class","text-black bg-pink p-2 pr-6 pl-6 rounded-md mb-1 border-black border-2 shaded"),p(I,"class","flex justify-evenly border-b-2 p-2 mb-4")},m(H,Q){N(H,e,Q),f(e,n),f(n,i),f(e,r),f(e,o),f(o,a),f(o,c),f(e,u),f(e,h),f(h,m),N(H,g,Q),N(H,_,Q),f(_,w),f(w,b),f(w,v),f(w,A),N(H,T,Q),N(H,I,Q),f(I,P),f(I,C),f(I,S),f(I,M),$||(z=[U(P,"click",q),U(S,"click",J)],$=!0)},p(H,Q){t=H,Q&1&&s!==(s=t[11].date+"")&&Z(i,s),Q&1&&l!==(l=t[11].name+"")&&Z(c,l),Q&1&&d!==(d=Number(t[11].amount).toFixed(2)+"")&&Z(m,d),Q&1&&k!==(k=t[11].memo+"")&&Z(A,k)},d(H){H&&D(e),H&&D(g),H&&D(_),H&&D(T),H&&D(I),$=!1,ke(z)}}}function bw(t){let e,n,s,i,r,o;function a(h){t[6](h)}function l(h){t[7](h)}let c={};t[2]!==void 0&&(c.message=t[2]),t[1]!==void 0&&(c.visible=t[1]),n=new nt({props:c}),re.push(()=>ae(n,"message",a)),re.push(()=>ae(n,"visible",l));let u=t[0]&&t[0].length>0&&Oc(t);return{c(){e=y("div"),ie(n.$$.fragment),r=E(),u&&u.c()},m(h,d){N(h,e,d),ee(n,e,null),f(e,r),u&&u.m(e,null),o=!0},p(h,[d]){const m={};!s&&d&4&&(s=!0,m.message=h[2],oe(()=>s=!1)),!i&&d&2&&(i=!0,m.visible=h[1],oe(()=>i=!1)),n.$set(m),h[0]&&h[0].length>0?u?u.p(h,d):(u=Oc(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(h){o||(L(n.$$.fragment,h),o=!0)},o(h){V(n.$$.fragment,h),o=!1},d(h){h&&D(e),te(n),u&&u.d()}}}function ww(t,e,n){let{user:s=null}=e,i=[],r=!1,o="";function a(){s&&s.kids.forEach(g=>{g.pending.filter(_=>{if(_.for&&_.for=="parent"){let w={kid:g.kid,name:g.name,..._};return i.push(w),w}})})}s&&a();function l(g){let _=null,w=s.kids.find(v=>v.kid==g.kid),b=w.pending.filter(v=>{if(v.amount==g.amount&&v.date==g.date)_=v;else return v});_?(delete _.for,_.currentBalance=w.checkingAccount.balance+_.amount,w.checkingAccount.balance=_.currentBalance,w.pending=b,w.checkingAccount.transactions=[_,...w.checkingAccount.transactions],pt(w),_e.updateKid(w),n(0,i=b),n(2,o="updated successfully"),n(1,r=!0)):(n(2,o="whoops something went wrong. reload and try again"),n(1,r=!0))}function c(g){let _=s.kids.find(w=>w.kid==g.kid);if(_){let w=_.pending.filter(v=>v.memo!=g.memo&&v.amount!=g.amount);_.pending=w,n(5,s.kids=s.kids.filter(v=>v.name==_.name?_:v),s),h0(s)&&(n(2,o="request denied!"),n(0,i=w),n(1,r=!0)),_e.set(s)}else n(2,o="reload the page and try again"),n(1,r=!0)}function u(g){o=g,n(2,o)}function h(g){r=g,n(1,r)}const d=g=>l(g),m=g=>c(g);return t.$$set=g=>{"user"in g&&n(5,s=g.user)},[i,r,o,l,c,s,u,h,d,m]}class kw extends Ne{constructor(e){super(),De(this,e,ww,bw,Te,{user:5})}}function Pc(t,e,n){const s=t.slice();return s[5]=e[n],s}function Mc(t){let e,n,s;function i(o){t[2](o)}let r={};return t[1]!==void 0&&(r.value=t[1]),e=new _w({props:r}),re.push(()=>ae(e,"value",i)),{c(){ie(e.$$.fragment)},m(o,a){ee(e,o,a),s=!0},p(o,a){const l={};!n&&a&2&&(n=!0,l.value=o[1],oe(()=>n=!1)),e.$set(l)},i(o){s||(L(e.$$.fragment,o),s=!0)},o(o){V(e.$$.fragment,o),s=!1},d(o){te(e,o)}}}function Ew(t){let e,n,s,i,r,o,a,l,c,u,h;e=new kw({props:{user:t[0]}});let d=t[0].kids,m=[];for(let _=0;_<d.length;_+=1)m[_]=Uc(Pc(t,d,_));const g=_=>V(m[_],1,1,()=>{m[_]=null});return l=new Ra({}),{c(){ie(e.$$.fragment),n=E();for(let _=0;_<m.length;_+=1)m[_].c();s=E(),i=y("div"),r=y("button"),r.textContent="Create another account",o=E(),a=y("div"),ie(l.$$.fragment),p(r,"class","border-black border-2 rounded-md shaded mb-1 p-2 pl-6 pr-6 bg-yellow"),p(i,"class","bg-pink border-black border-2 shaded rounded-xl m-2 p-2 pt-8 pb-8 mb-4 mt-4 center"),p(a,"class","center")},m(_,w){ee(e,_,w),N(_,n,w);for(let b=0;b<m.length;b+=1)m[b].m(_,w);N(_,s,w),N(_,i,w),f(i,r),N(_,o,w),N(_,a,w),ee(l,a,null),c=!0,u||(h=U(r,"click",t[4]),u=!0)},p(_,w){const b={};if(w&1&&(b.user=_[0]),e.$set(b),w&1){d=_[0].kids;let v;for(v=0;v<d.length;v+=1){const k=Pc(_,d,v);m[v]?(m[v].p(k,w),L(m[v],1)):(m[v]=Uc(k),m[v].c(),L(m[v],1),m[v].m(s.parentNode,s))}for(at(),v=d.length;v<m.length;v+=1)g(v);lt()}},i(_){if(!c){L(e.$$.fragment,_);for(let w=0;w<d.length;w+=1)L(m[w]);L(l.$$.fragment,_),c=!0}},o(_){V(e.$$.fragment,_),m=m.filter(Boolean);for(let w=0;w<m.length;w+=1)V(m[w]);V(l.$$.fragment,_),c=!1},d(_){te(e,_),_&&D(n),vn(m,_),_&&D(s),_&&D(i),_&&D(o),_&&D(a),te(l),u=!1,h()}}}function Iw(t){let e,n,s,i,r,o,a,l,c,u;return a=new Ra({}),{c(){e=y("div"),n=y("p"),n.textContent="No kids accounts set up yet.",s=E(),i=y("button"),i.textContent="Create now",r=E(),o=y("div"),ie(a.$$.fragment),p(n,"class","m-4"),p(i,"class","bg-yellow rounded-md border-black border-2 shaded big-shade mb-1"),p(e,"class","center col p-4 m-4"),p(o,"class","center")},m(h,d){N(h,e,d),f(e,n),f(e,s),f(e,i),N(h,r,d),N(h,o,d),ee(a,o,null),l=!0,c||(u=U(i,"click",t[3]),c=!0)},p:pe,i(h){l||(L(a.$$.fragment,h),l=!0)},o(h){V(a.$$.fragment,h),l=!1},d(h){h&&D(e),h&&D(r),h&&D(o),te(a),c=!1,u()}}}function Uc(t){let e,n,s;return n=new dw({props:{kid:t[5]}}),{c(){e=y("div"),ie(n.$$.fragment),p(e,"class","border-b-2 border-yellow")},m(i,r){N(i,e,r),ee(n,e,null),s=!0},p(i,r){const o={};r&1&&(o.kid=i[5]),n.$set(o)},i(i){s||(L(n.$$.fragment,i),s=!0)},o(i){V(n.$$.fragment,i),s=!1},d(i){i&&D(e),te(n)}}}function Tw(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g=t[1]&&Mc(t);const _=[Iw,Ew],w=[];function b(v,k){return v[0]&&v[0].kids.length==0?0:v[0]?1:-1}return~(h=b(t))&&(d=w[h]=_[h](t)),{c(){e=y("div"),g&&g.c(),n=E(),s=y("div"),i=y("h3"),r=F(`Welcome,
			`),o=y("p"),a=F("parental unit "),l=y("img"),u=E(),d&&d.c(),Xd(l.src,c=Aw)||p(l,"src",c),p(l,"class","h-5 inline middle"),p(l,"alt","generic user icon"),p(o,"class","underline"),p(i,"class","m-6"),p(s,"class","p-2"),p(e,"class","bg-green cover scroll-content")},m(v,k){N(v,e,k),g&&g.m(e,null),f(e,n),f(e,s),f(s,i),f(i,r),f(i,o),f(o,a),f(o,l),f(s,u),~h&&w[h].m(s,null),m=!0},p(v,[k]){v[1]?g?(g.p(v,k),k&2&&L(g,1)):(g=Mc(v),g.c(),L(g,1),g.m(e,n)):g&&(at(),V(g,1,1,()=>{g=null}),lt());let A=h;h=b(v),h===A?~h&&w[h].p(v,k):(d&&(at(),V(w[A],1,1,()=>{w[A]=null}),lt()),~h?(d=w[h],d?d.p(v,k):(d=w[h]=_[h](v),d.c()),L(d,1),d.m(s,null)):d=null)},i(v){m||(L(g),L(d),m=!0)},o(v){V(g),V(d),m=!1},d(v){v&&D(e),g&&g.d(),~h&&w[h].d()}}}let Aw="/images/user-circle.svg";function Sw(t,e,n){let s=null;_e.subscribe(l=>n(0,s=l)),s==null&&c0();let i=!1;function r(l){i=l,n(1,i)}return[s,i,r,()=>n(1,i=!i),()=>n(1,i=!i)]}class Cw extends Ne{constructor(e){super(),De(this,e,Sw,Tw,Te,{})}}function Dw(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_,w,b,v,k,A,T,I,P,C,S,M,$,z,q;function J(ue){t[6](ue)}function H(ue){t[7](ue)}let Q={};return t[4]!==void 0&&(Q.visible=t[4]),t[3]!==void 0&&(Q.message=t[3]),e=new nt({props:Q}),re.push(()=>ae(e,"visible",J)),re.push(()=>ae(e,"message",H)),{c(){ie(e.$$.fragment),i=E(),r=y("div"),o=y("div"),a=y("form"),l=y("label"),l.textContent="E-mail",c=E(),u=y("input"),h=E(),d=y("label"),d.textContent="Password",m=E(),g=y("input"),_=E(),w=y("label"),w.textContent="Confirm password",b=E(),v=y("input"),k=E(),A=y("label"),A.textContent="Send email validation",T=E(),I=y("input"),P=E(),C=y("button"),C.textContent="Register",S=E(),M=y("p"),M.textContent="*if you verify your email, you can reset your password should you forget it.",p(l,"for","email"),p(l,"class","inline-block col-start-1 row-start-2"),p(u,"type","email"),p(u,"autocapitalize","off"),p(u,"class","p-2 rounded-md col-start-2 col-end-4 h-12 row-start-2 bg-pink shaded big-shade stretch"),p(u,"name","email"),p(u,"id","email"),u.required=!0,p(d,"for","password"),p(d,"class","inline-block col-start-1 row-start-3"),p(g,"type","password"),p(g,"autocapitalize","off"),p(g,"minlength","6"),p(g,"maxlength","32"),p(g,"class","p-2 rounded-md col-start-2 col-end-4 row-start-3 bg-pink shaded big-shade stretch"),p(g,"name","password"),p(g,"id","password"),g.required=!0,p(w,"for","confirmPassword"),p(w,"class","row-start-4 col-start-1 "),p(v,"type","password"),p(v,"class","p-2 rounded-md col-start-2 col-end-4 row-start-4 bg-pink shaded big-shade stretch"),p(v,"name","confirmPassword"),p(v,"id","confirmPassword"),v.required=!0,p(A,"for","checkbox"),p(A,"class","row-start-5 col-start-2 col-end-4"),p(I,"type","checkbox"),p(I,"class","row-start-5 col-start-1"),p(C,"class","p-2 pl-6 pr-6 rounded-md outline-none border-black border-2 mb-1 bg-green shaded big-shade row-start-6 col-start-1"),p(C,"type","submit"),p(a,"class","grid grid-row-6 grid-col-3 gap-4 stretch"),p(M,"class","p-6"),p(o,"class","bg-yellow rounded-lt-xl rounded-b-xl p-2 mb-8 w-90"),p(r,"class","center col w-full")},m(ue,Ae){ee(e,ue,Ae),N(ue,i,Ae),N(ue,r,Ae),f(r,o),f(o,a),f(a,l),f(a,c),f(a,u),le(u,t[0]),f(a,h),f(a,d),f(a,m),f(a,g),le(g,t[1]),f(a,_),f(a,w),f(a,b),f(a,v),le(v,t[2]),f(a,k),f(a,A),f(a,T),f(a,I),f(a,P),f(a,C),f(o,S),f(o,M),$=!0,z||(q=[U(u,"input",t[8]),U(g,"input",t[9]),U(v,"input",t[10]),U(a,"submit",Kc(t[5]))],z=!0)},p(ue,[Ae]){const ge={};!n&&Ae&16&&(n=!0,ge.visible=ue[4],oe(()=>n=!1)),!s&&Ae&8&&(s=!0,ge.message=ue[3],oe(()=>s=!1)),e.$set(ge),Ae&1&&u.value!==ue[0]&&le(u,ue[0]),Ae&2&&g.value!==ue[1]&&le(g,ue[1]),Ae&4&&v.value!==ue[2]&&le(v,ue[2])},i(ue){$||(L(e.$$.fragment,ue),$=!0)},o(ue){V(e.$$.fragment,ue),$=!1},d(ue){te(e,ue),ue&&D(i),ue&&D(r),z=!1,ke(q)}}}let Nw=!0;function Rw(t,e,n){let s="",i="",r="",o="",a=!1;const l=async g=>{if(g.preventDefault(),s&&i)try{let _=await Mm(St,s,i);const w=Xt(Jt,"parents",_.user.uid);Hd(w,{isParent:!0,kids:[],uid:_.user.uid}),Nw&&(Um(St.currentUser),n(3,o="email sent! now loggin in"),n(4,a=!0)),setTimeout(()=>{_e.set({isParent:!0,kids:[],uid:_.user.uid})},5e3)}catch(_){_.code=="auth/email-already-in-use"&&n(3,o="This email address already has an account!"),n(4,a=!0),n(0,s=""),n(1,i="")}else n(3,o="Make sure both the email and password fields are set"),n(4,a=!0)};function c(g){a=g,n(4,a)}function u(g){o=g,n(3,o)}function h(){s=this.value,n(0,s)}function d(){i=this.value,n(1,i)}function m(){r=this.value,n(2,r)}return[s,i,r,o,a,l,c,u,h,d,m]}class Ow extends Ne{constructor(e){super(),De(this,e,Rw,Dw,Te,{})}}function Lw(t){let e,n,s,i,r,o,a,l,c;return{c(){e=y("label"),n=y("input"),s=F("Parent login"),i=E(),r=y("label"),o=y("input"),a=F("Kid login"),p(n,"type","radio"),p(n,"class","hidden"),n.__value=!0,n.value=n.__value,t[10][0].push(n),p(e,"class","clickable col-start-1 row-start-1"),p(o,"type","radio"),p(o,"class","hidden"),o.__value=!1,o.value=o.__value,t[10][0].push(o),p(r,"class","border-black border-b-2 italic selected clickable col-start-2 row-start-1 svelte-jjdm9")},m(u,h){N(u,e,h),f(e,n),n.checked=n.__value===t[6],f(e,s),N(u,i,h),N(u,r,h),f(r,o),o.checked=o.__value===t[6],f(r,a),l||(c=[U(n,"change",t[12]),U(o,"change",t[13])],l=!0)},p(u,h){h&64&&(n.checked=n.__value===u[6]),h&64&&(o.checked=o.__value===u[6])},d(u){u&&D(e),t[10][0].splice(t[10][0].indexOf(n),1),u&&D(i),u&&D(r),t[10][0].splice(t[10][0].indexOf(o),1),l=!1,ke(c)}}}function Pw(t){let e,n,s,i,r,o,a,l,c;return{c(){e=y("label"),n=y("input"),s=F("Parent login"),i=E(),r=y("label"),o=y("input"),a=F("Kid login"),p(n,"type","radio"),p(n,"class","hidden"),n.__value=!0,n.value=n.__value,t[10][0].push(n),p(e,"class","border-black border-b-2 italic selected clickable col-start-1 row-start-1  svelte-jjdm9"),p(o,"type","radio"),p(o,"class","hidden"),o.__value=!1,o.value=o.__value,t[10][0].push(o),p(r,"class","clickable col-end-2 row-start-1 ")},m(u,h){N(u,e,h),f(e,n),n.checked=n.__value===t[6],f(e,s),N(u,i,h),N(u,r,h),f(r,o),o.checked=o.__value===t[6],f(r,a),l||(c=[U(n,"change",t[9]),U(o,"change",t[11])],l=!0)},p(u,h){h&64&&(n.checked=n.__value===u[6]),h&64&&(o.checked=o.__value===u[6])},d(u){u&&D(e),t[10][0].splice(t[10][0].indexOf(n),1),u&&D(i),u&&D(r),t[10][0].splice(t[10][0].indexOf(o),1),l=!1,ke(c)}}}function Fc(t){let e,n,s,i,r;return{c(){e=y("label"),e.textContent="Kid's name",n=E(),s=y("input"),p(e,"for","name"),p(e,"class","inline-block col-start-1 row-start-4"),p(s,"type","text"),p(s,"class","p-2 rounded-md rounded-md col-start-2 row-start-4 bg-pink shaded big-shade stretch w-90 rounded-md svelte-jjdm9"),p(s,"name","name"),p(s,"id","name"),s.required=!0},m(o,a){N(o,e,a),N(o,n,a),N(o,s,a),le(s,t[5]),i||(r=U(s,"input",t[16]),i=!0)},p(o,a){a&32&&s.value!==o[5]&&le(s,o[5])},d(o){o&&D(e),o&&D(n),o&&D(s),i=!1,r()}}}function Mw(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_,w,b,v,k,A,T,I,P,C,S,M;function $(B){t[8](B)}let z={message:t[0]};t[2]!==void 0&&(z.boxOpen=t[2]),e=new Wd({props:z}),re.push(()=>ae(e,"boxOpen",$));function q(B,ye){return B[6]?Pw:Lw}let J=q(t),H=J(t),Q=!t[6]&&Fc(t);function ue(B){t[17](B)}function Ae(B){t[18](B)}let ge={};return t[1]!==void 0&&(ge.visible=t[1]),t[0]!==void 0&&(ge.message=t[0]),T=new nt({props:ge}),re.push(()=>ae(T,"visible",ue)),re.push(()=>ae(T,"message",Ae)),{c(){ie(e.$$.fragment),s=E(),i=y("div"),r=y("div"),o=y("form"),H.c(),a=E(),l=y("label"),l.textContent="E-mail",c=E(),u=y("input"),h=E(),d=y("label"),d.textContent="Password",m=E(),g=y("input"),_=E(),Q&&Q.c(),w=E(),b=y("button"),b.textContent="Login",v=E(),k=y("div"),k.innerHTML='<a href="/reset-password" class="p-2 underline">Forgot password?</a>',A=E(),ie(T.$$.fragment),p(l,"for","email"),p(l,"class","inline-block col-start-1 row-start-2"),p(u,"type","email"),p(u,"autocapitalize","off"),p(u,"class","p-2 rounded-md col-start-2 h-12 row-start-2 bg-pink shaded big-shade stretch w-90"),p(u,"name","email"),p(u,"id","email"),u.required=!0,p(d,"for","password"),p(d,"class","inline-block col-start-1 row-start-3"),p(g,"type","password"),p(g,"autocapitalize","off"),p(g,"minlength","6"),p(g,"maxlength","32"),p(g,"class","p-2 rounded-md col-start-2 row-start-3 bg-pink shaded big-shade stretch w-90"),p(g,"name","password"),p(g,"id","password"),g.required=!0,p(b,"type","submit"),p(b,"class","p-2 row-start-5 col-start-1 rounded-md border-black mb-1 border-2 bg-green shaded single-line pl-6 pr-6 mr-4"),p(k,"class","col-start-2 row-start-5"),p(o,"class","grid grid-row-5 grid-col-4 gap-4 w-full stretch"),p(r,"id","login"),p(r,"class","bg-yellow rounded-r-xl rounded-b-xl p-2 mb-8 w-90"),p(i,"class","center col w-full")},m(B,ye){ee(e,B,ye),N(B,s,ye),N(B,i,ye),f(i,r),f(r,o),H.m(o,null),f(o,a),f(o,l),f(o,c),f(o,u),le(u,t[3]),f(o,h),f(o,d),f(o,m),f(o,g),le(g,t[4]),f(o,_),Q&&Q.m(o,null),f(o,w),f(o,b),f(o,v),f(o,k),N(B,A,ye),ee(T,B,ye),C=!0,S||(M=[U(u,"input",t[14]),U(g,"input",t[15]),U(o,"submit",Kc(t[7]))],S=!0)},p(B,[ye]){const et={};ye&1&&(et.message=B[0]),!n&&ye&4&&(n=!0,et.boxOpen=B[2],oe(()=>n=!1)),e.$set(et),J===(J=q(B))&&H?H.p(B,ye):(H.d(1),H=J(B),H&&(H.c(),H.m(o,a))),ye&8&&u.value!==B[3]&&le(u,B[3]),ye&16&&g.value!==B[4]&&le(g,B[4]),B[6]?Q&&(Q.d(1),Q=null):Q?Q.p(B,ye):(Q=Fc(B),Q.c(),Q.m(o,w));const Ke={};!I&&ye&2&&(I=!0,Ke.visible=B[1],oe(()=>I=!1)),!P&&ye&1&&(P=!0,Ke.message=B[0],oe(()=>P=!1)),T.$set(Ke)},i(B){C||(L(e.$$.fragment,B),L(T.$$.fragment,B),C=!0)},o(B){V(e.$$.fragment,B),V(T.$$.fragment,B),C=!1},d(B){te(e,B),B&&D(s),B&&D(i),H.d(),Q&&Q.d(),B&&D(A),te(T,B),S=!1,ke(M)}}}function Uw(t,e,n){let s="a little message",i=!1,r=!1,o="",a="",l="",c=!0;const u=async()=>{n(0,s="Logging in..."),n(1,i=!0),c?await nl(St,o,a).then(async I=>{const P=Xt(Jt,"parents",I.user.uid);let C=await $i(P);if(C){let S=C.data();_e.set({...S})}}).catch(I=>{I.code==="auth/user-not-found"?(n(0,s="Account not found. Is it a typo?"),n(1,i=!0)):(n(0,s="Something went wrong. Please try again."),n(1,i=!0))}):(l&&localStorage.setItem("name",l),await nl(St,o,a).then(async I=>{const P=Xt(Jt,"parents",I.user.uid);let C=await $i(P);if(C){let S=C.data();S.isParent=!1;let M=S.kids.find($=>{if($&&$.name.toLowerCase()==l.toLowerCase())return $});M?_e.set(M):(n(0,s="That kid account does not seem to exist"),n(1,i=!0),St.signOut(),Au(St),localStorage.clear())}}))},h=[[]];function d(I){r=I,n(2,r)}function m(){c=this.__value,n(6,c)}function g(){c=this.__value,n(6,c)}function _(){c=this.__value,n(6,c)}function w(){c=this.__value,n(6,c)}function b(){o=this.value,n(3,o)}function v(){a=this.value,n(4,a)}function k(){l=this.value,n(5,l)}function A(I){i=I,n(1,i)}function T(I){s=I,n(0,s)}return[s,i,r,o,a,l,c,u,d,m,h,g,_,w,b,v,k,A,T]}class Fw extends Ne{constructor(e){super(),De(this,e,Uw,Mw,Te,{})}}function Vw(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_,w;return m=new Ow({}),{c(){e=y("div"),n=y("div"),s=y("label"),i=y("input"),r=E(),o=y("h2"),o.textContent="Login",a=E(),l=y("label"),c=y("input"),u=E(),h=y("h2"),h.textContent="Register",d=E(),ie(m.$$.fragment),p(i,"type","radio"),p(i,"name","switchForm"),i.__value=!0,i.value=i.__value,p(i,"class","hidden"),t[2][0].push(i),p(o,"class","text-xl inline-block p-4"),p(s,"class","pt-2 pb-2 inline-block w-half"),p(c,"type","radio"),p(c,"name","switchForm"),c.__value=!1,c.value=c.__value,p(c,"class","hidden"),t[2][0].push(c),p(h,"class","text-xl inline-block p-4"),p(l,"class","bg-yellow inline-block pt-2 pb-2 rounded-t-xl w-half"),p(n,"class","w-90 reverse"),p(e,"class","pt-8 p-2 w-full col center")},m(b,v){N(b,e,v),f(e,n),f(n,s),f(s,i),i.checked=i.__value===t[0],f(s,r),f(s,o),f(n,a),f(n,l),f(l,c),c.checked=c.__value===t[0],f(l,u),f(l,h),f(e,d),ee(m,e,null),g=!0,_||(w=[U(i,"change",t[4]),U(c,"change",t[5])],_=!0)},p(b,v){v&1&&(i.checked=i.__value===b[0]),v&1&&(c.checked=c.__value===b[0])},i(b){g||(L(m.$$.fragment,b),g=!0)},o(b){V(m.$$.fragment,b),g=!1},d(b){b&&D(e),t[2][0].splice(t[2][0].indexOf(i),1),t[2][0].splice(t[2][0].indexOf(c),1),te(m),_=!1,ke(w)}}}function xw(t){let e,n,s,i,r,o,a,l,c,u,h,d,m,g,_,w;return m=new Fw({}),{c(){e=y("div"),n=y("div"),s=y("label"),i=y("input"),r=E(),o=y("h2"),o.textContent="Login",a=E(),l=y("label"),c=y("input"),u=E(),h=y("h2"),h.textContent="Register",d=E(),ie(m.$$.fragment),p(i,"type","radio"),p(i,"name","switchForm"),i.__value=!0,i.value=i.__value,p(i,"class","hidden"),t[2][0].push(i),p(o,"class","text-xl inline-block pt-4 pb-4 rounded-t-md"),p(s,"class","bg-yellow inline-block pt-2 pb-2 rounded-t-xl w-half"),p(c,"type","radio"),p(c,"name","switchForm"),c.__value=!1,c.value=c.__value,p(c,"class","hidden"),t[2][0].push(c),p(h,"class","text-xl inline-block p-4 rounded-t-md "),p(l,"class","pt-2 pb-2 inline-block w-half"),p(n,"class","w-90"),p(e,"class","pt-8 p-2 w-full col center")},m(b,v){N(b,e,v),f(e,n),f(n,s),f(s,i),i.checked=i.__value===t[0],f(s,r),f(s,o),f(n,a),f(n,l),f(l,c),c.checked=c.__value===t[0],f(l,u),f(l,h),f(e,d),ee(m,e,null),g=!0,_||(w=[U(i,"change",t[1]),U(c,"change",t[3])],_=!0)},p(b,v){v&1&&(i.checked=i.__value===b[0]),v&1&&(c.checked=c.__value===b[0])},i(b){g||(L(m.$$.fragment,b),g=!0)},o(b){V(m.$$.fragment,b),g=!1},d(b){b&&D(e),t[2][0].splice(t[2][0].indexOf(i),1),t[2][0].splice(t[2][0].indexOf(c),1),te(m),_=!1,ke(w)}}}function Bw(t){let e,n,s,i,r,o,a,l;const c=[xw,Vw],u=[];function h(d,m){return d[0]?0:1}return i=h(t),r=u[i]=c[i](t),{c(){e=y("div"),n=y("div"),n.innerHTML=`<div class="rounded-full m-8 bg-black w-60 h-60 center col text-white"><h2 class="italic text-4xl">Bunny</h2> 
			<h1 class="text-5xl">Money!</h1></div>`,s=E(),r.c(),o=E(),a=y("div"),a.innerHTML=`<h1 class="text-3xl m-4">The banking* app for kids</h1> 

		<h3 class="text-2xl m-4">What is it?</h3> 
		<p class="ml-4 mr-4">Bunny Money is a progressive web app for your phone that enables your child to learn to save money.</p> 
		<h4 class="text-xl m-4">Parent Component</h4> 
		<p class="m-4">Parents can &#39;transfer&#39; money to their kid&#39;s checking account. When the kid wants to buy
			something, they use the app to request it in cash, thus turning the parents into atms
			essentially.</p> 
		<p class="m-4">You can, add/remove kids, adjust the allowance amount and period, as well as set up a savings
			account interest rate, and compound period.</p> 
		<h4 class="text-xl m-4">Kid Component</h4> 
		<p class="m-4">When a kid logs into their (parent-created) account, they can see how much money they have in
			their checking and/or savings accounts. From their checking account, they can request money,
			or withdraw money, as well as see the past 30 transactions. Make sure not to withdraw more
			than you have, or you&#39;ll have a negative balance, which accumulates penalties!</p> 
		<p class="m-4">In their savings account, they can watch their money grow by accumulating interest. They can
			also transfer money to their checking accounts. Money in savings cannot be directly withdrawn
			by kid or parent.</p> 

		<h5 class="text-sm m-4 italic">*not a real bank, more of a sim, really</h5> 

		<h2 class="text-3xl m-4">Download now!</h2> 
		<p class="m-4">Open this site on safari or your iPhone or iPad, press the &#39;share&#39; button at the bottom, then &#39;Add to Homescreen&#39;.</p>`,p(n,"class","w-100 bg-pink center"),p(a,"class","p-4 w-360 "),p(e,"class","center col bg-green")},m(d,m){N(d,e,m),f(e,n),f(e,s),u[i].m(e,null),f(e,o),f(e,a),l=!0},p(d,[m]){let g=i;i=h(d),i===g?u[i].p(d,m):(at(),V(u[g],1,1,()=>{u[g]=null}),lt(),r=u[i],r?r.p(d,m):(r=u[i]=c[i](d),r.c()),L(r,1),r.m(e,o))},i(d){l||(L(r),l=!0)},o(d){V(r),l=!1},d(d){d&&D(e),u[i].d()}}}function jw(t,e,n){let s=!0;const i=[[]];function r(){s=this.__value,n(0,s)}function o(){s=this.__value,n(0,s)}function a(){s=this.__value,n(0,s)}function l(){s=this.__value,n(0,s)}return[s,r,i,o,a,l]}class Yd extends Ne{constructor(e){super(),De(this,e,jw,Bw,Te,{})}}function $w(t){let e,n;return e=new Yd({}),{c(){ie(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},p:pe,i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){V(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function qw(t){let e,n,s,i;const r=[zw,Kw,Hw],o=[];function a(l,c){return l[2].uid&&l[2].isParent==!1?0:l[2].uid&&l[2].isParent?1:l[2].uid?2:-1}return~(e=a(t))&&(n=o[e]=r[e](t)),{c(){n&&n.c(),s=Ye()},m(l,c){~e&&o[e].m(l,c),N(l,s,c),i=!0},p(l,c){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(n&&(at(),V(o[u],1,1,()=>{o[u]=null}),lt()),~e?(n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),L(n,1),n.m(s.parentNode,s)):n=null)},i(l){i||(L(n),i=!0)},o(l){V(n),i=!1},d(l){~e&&o[e].d(l),l&&D(s)}}}function Hw(t){let e,n,s,i,r,o;function a(u){t[3](u)}function l(u){t[4](u)}let c={};return t[1]!==void 0&&(c.visible=t[1]),t[0]!==void 0&&(c.message=t[0]),e=new nt({props:c}),re.push(()=>ae(e,"visible",a)),re.push(()=>ae(e,"message",l)),r=new Yd({}),{c(){ie(e.$$.fragment),i=E(),ie(r.$$.fragment)},m(u,h){ee(e,u,h),N(u,i,h),ee(r,u,h),o=!0},p(u,h){const d={};!n&&h&2&&(n=!0,d.visible=u[1],oe(()=>n=!1)),!s&&h&1&&(s=!0,d.message=u[0],oe(()=>s=!1)),e.$set(d)},i(u){o||(L(e.$$.fragment,u),L(r.$$.fragment,u),o=!0)},o(u){V(e.$$.fragment,u),V(r.$$.fragment,u),o=!1},d(u){te(e,u),u&&D(i),te(r,u)}}}function Kw(t){let e,n;return e=new Cw({}),{c(){ie(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},p:pe,i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){V(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function zw(t){let e,n;return e=new M0({}),{c(){ie(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},p:pe,i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){V(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function Gw(t){let e,n,s,i;const r=[qw,$w],o=[];function a(l,c){return l[2]?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=Ye()},m(l,c){o[e].m(l,c),N(l,s,c),i=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(at(),V(o[u],1,1,()=>{o[u]=null}),lt(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),L(n,1),n.m(s.parentNode,s))},i(l){i||(L(n),i=!0)},o(l){V(n),i=!1},d(l){o[e].d(l),l&&D(s)}}}function Ww(t,e,n){let s="",i=!1,r=null;_e.subscribe(l=>n(2,r=l));function o(l){i=l,n(1,i)}function a(l){s=l,n(0,s)}return[s,i,r,o,a]}class Qw extends Ne{constructor(e){super(),De(this,e,Ww,Gw,Te,{})}}new Qw({target:document.body,props:{}});
