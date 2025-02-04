import{u as se,a as Oe,k as j,e as ae,g as ie,p as at,b as O,r as y,d as it,D as st,c as lt,M as ct,f as ut,h as dt,i as V,j as A,l as ft,B as C,m as Ie,n as ze,o as ht,I as pt,q as He,s as Me,t as We,U as mt,w as vt,v as gt,A as bt}from"./ActivitiesContex-BoMGjC-E.js";import{r as h,n as c,a as wt,M as yt,L as St,S as xt,o as Ct,N as ce,O as $t,p as jt}from"./chunk-IR6S3I6Y-B-FaP476.js";import{u as we}from"./use-isomorphic-effect-Cdi6Bh97.js";import{c as Et}from"./create-safe-context-Cm2rZqCq.js";import{m as kt,u as Nt}from"./use-uncontrolled-kZRlGaLa.js";var R=function(){return R=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},R.apply(this,arguments)};function De(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function Rt(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,o;t<a;t++)(o||!(t in n))&&(o||(o=Array.prototype.slice.call(n,0,t)),o[t]=n[t]);return e.concat(o||Array.prototype.slice.call(n))}var ne="right-scroll-bar-position",re="width-before-scroll-bar",At="with-scroll-bars-hidden",Pt="--removed-body-scroll-bar-size";function ue(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function Tt(e,n){var r=h.useState(function(){return{value:e,callback:n,facade:{get current(){return r.value},set current(t){var a=r.value;a!==t&&(r.value=t,r.callback(t,a))}}}})[0];return r.callback=n,r.facade}var Vt=typeof window<"u"?h.useLayoutEffect:h.useEffect,Re=new WeakMap;function _t(e,n){var r=Tt(null,function(t){return e.forEach(function(a){return ue(a,t)})});return Vt(function(){var t=Re.get(r);if(t){var a=new Set(t),o=new Set(e),i=r.current;a.forEach(function(s){o.has(s)||ue(s,null)}),o.forEach(function(s){a.has(s)||ue(s,i)})}Re.set(r,e)},[e]),r}function Lt(e){return e}function Bt(e,n){n===void 0&&(n=Lt);var r=[],t=!1,a={read:function(){if(t)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(o){var i=n(o,t);return r.push(i),function(){r=r.filter(function(s){return s!==i})}},assignSyncMedium:function(o){for(t=!0;r.length;){var i=r;r=[],i.forEach(o)}r={push:function(s){return o(s)},filter:function(){return r}}},assignMedium:function(o){t=!0;var i=[];if(r.length){var s=r;r=[],s.forEach(o),i=r}var u=function(){var f=i;i=[],f.forEach(o)},p=function(){return Promise.resolve().then(u)};p(),r={push:function(f){i.push(f),p()},filter:function(f){return i=i.filter(f),r}}}};return a}function Ot(e){e===void 0&&(e={});var n=Bt(null);return n.options=R({async:!0,ssr:!1},e),n}var Fe=function(e){var n=e.sideCar,r=De(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var t=n.read();if(!t)throw new Error("Sidecar medium not found");return h.createElement(t,R({},r))};Fe.isSideCarExport=!0;function It(e,n){return e.useMedium(n),Fe}var Xe=Ot(),de=function(){},le=h.forwardRef(function(e,n){var r=h.useRef(null),t=h.useState({onScrollCapture:de,onWheelCapture:de,onTouchMoveCapture:de}),a=t[0],o=t[1],i=e.forwardProps,s=e.children,u=e.className,p=e.removeScrollBar,f=e.enabled,l=e.shards,b=e.sideCar,m=e.noIsolation,v=e.inert,d=e.allowPinchZoom,g=e.as,w=g===void 0?"div":g,$=e.gapMode,x=De(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=b,S=_t([r,n]),P=R(R({},x),a);return h.createElement(h.Fragment,null,f&&h.createElement(E,{sideCar:Xe,removeScrollBar:p,shards:l,noIsolation:m,inert:v,setCallbacks:o,allowPinchZoom:!!d,lockRef:r,gapMode:$}),i?h.cloneElement(h.Children.only(s),R(R({},P),{ref:S})):h.createElement(w,R({},P,{className:u,ref:S}),s))});le.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};le.classNames={fullWidth:re,zeroRight:ne};var zt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Ht(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=zt();return n&&e.setAttribute("nonce",n),e}function Mt(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function Wt(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var Dt=function(){var e=0,n=null;return{add:function(r){e==0&&(n=Ht())&&(Mt(n,r),Wt(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},Ft=function(){var e=Dt();return function(n,r){h.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&r])}},Ye=function(){var e=Ft(),n=function(r){var t=r.styles,a=r.dynamic;return e(t,a),null};return n},Xt={left:0,top:0,right:0,gap:0},fe=function(e){return parseInt(e||"",10)||0},Yt=function(e){var n=window.getComputedStyle(document.body),r=n[e==="padding"?"paddingLeft":"marginLeft"],t=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[fe(r),fe(t),fe(a)]},Zt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Xt;var n=Yt(e),r=document.documentElement.clientWidth,t=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,t-r+n[2]-n[0])}},Ut=Ye(),W="data-scroll-locked",qt=function(e,n,r,t){var a=e.left,o=e.top,i=e.right,s=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(At,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(s,"px ").concat(t,`;
  }
  body[`).concat(W,`] {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(t,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(t,`;
    `),r==="padding"&&"padding-right: ".concat(s,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ne,` {
    right: `).concat(s,"px ").concat(t,`;
  }
  
  .`).concat(re,` {
    margin-right: `).concat(s,"px ").concat(t,`;
  }
  
  .`).concat(ne," .").concat(ne,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(re," .").concat(re,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body[`).concat(W,`] {
    `).concat(Pt,": ").concat(s,`px;
  }
`)},Ae=function(){var e=parseInt(document.body.getAttribute(W)||"0",10);return isFinite(e)?e:0},Gt=function(){h.useEffect(function(){return document.body.setAttribute(W,(Ae()+1).toString()),function(){var e=Ae()-1;e<=0?document.body.removeAttribute(W):document.body.setAttribute(W,e.toString())}},[])},Qt=function(e){var n=e.noRelative,r=e.noImportant,t=e.gapMode,a=t===void 0?"margin":t;Gt();var o=h.useMemo(function(){return Zt(a)},[a]);return h.createElement(Ut,{styles:qt(o,!n,a,r?"":"!important")})},ge=!1;if(typeof window<"u")try{var K=Object.defineProperty({},"passive",{get:function(){return ge=!0,!0}});window.addEventListener("test",K,K),window.removeEventListener("test",K,K)}catch{ge=!1}var I=ge?{passive:!1}:!1,Jt=function(e){return e.tagName==="TEXTAREA"},Ze=function(e,n){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[n]!=="hidden"&&!(r.overflowY===r.overflowX&&!Jt(e)&&r[n]==="visible")},Kt=function(e){return Ze(e,"overflowY")},en=function(e){return Ze(e,"overflowX")},Pe=function(e,n){var r=n.ownerDocument,t=n;do{typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&(t=t.host);var a=Ue(e,t);if(a){var o=qe(e,t),i=o[1],s=o[2];if(i>s)return!0}t=t.parentNode}while(t&&t!==r.body);return!1},tn=function(e){var n=e.scrollTop,r=e.scrollHeight,t=e.clientHeight;return[n,r,t]},nn=function(e){var n=e.scrollLeft,r=e.scrollWidth,t=e.clientWidth;return[n,r,t]},Ue=function(e,n){return e==="v"?Kt(n):en(n)},qe=function(e,n){return e==="v"?tn(n):nn(n)},rn=function(e,n){return e==="h"&&n==="rtl"?-1:1},on=function(e,n,r,t,a){var o=rn(e,window.getComputedStyle(n).direction),i=o*t,s=r.target,u=n.contains(s),p=!1,f=i>0,l=0,b=0;do{var m=qe(e,s),v=m[0],d=m[1],g=m[2],w=d-g-o*v;(v||w)&&Ue(e,s)&&(l+=w,b+=v),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!u&&s!==document.body||u&&(n.contains(s)||n===s));return(f&&Math.abs(l)<1||!f&&Math.abs(b)<1)&&(p=!0),p},ee=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Te=function(e){return[e.deltaX,e.deltaY]},Ve=function(e){return e&&"current"in e?e.current:e},an=function(e,n){return e[0]===n[0]&&e[1]===n[1]},sn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ln=0,z=[];function cn(e){var n=h.useRef([]),r=h.useRef([0,0]),t=h.useRef(),a=h.useState(ln++)[0],o=h.useState(Ye)[0],i=h.useRef(e);h.useEffect(function(){i.current=e},[e]),h.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var d=Rt([e.lockRef.current],(e.shards||[]).map(Ve),!0).filter(Boolean);return d.forEach(function(g){return g.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),d.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var s=h.useCallback(function(d,g){if("touches"in d&&d.touches.length===2||d.type==="wheel"&&d.ctrlKey)return!i.current.allowPinchZoom;var w=ee(d),$=r.current,x="deltaX"in d?d.deltaX:$[0]-w[0],E="deltaY"in d?d.deltaY:$[1]-w[1],S,P=d.target,k=Math.abs(x)>Math.abs(E)?"h":"v";if("touches"in d&&k==="h"&&P.type==="range")return!1;var L=Pe(k,P);if(!L)return!0;if(L?S=k:(S=k==="v"?"h":"v",L=Pe(k,P)),!L)return!1;if(!t.current&&"changedTouches"in d&&(x||E)&&(t.current=S),!S)return!0;var J=t.current||S;return on(J,g,d,J==="h"?x:E)},[]),u=h.useCallback(function(d){var g=d;if(!(!z.length||z[z.length-1]!==o)){var w="deltaY"in g?Te(g):ee(g),$=n.current.filter(function(S){return S.name===g.type&&(S.target===g.target||g.target===S.shadowParent)&&an(S.delta,w)})[0];if($&&$.should){g.cancelable&&g.preventDefault();return}if(!$){var x=(i.current.shards||[]).map(Ve).filter(Boolean).filter(function(S){return S.contains(g.target)}),E=x.length>0?s(g,x[0]):!i.current.noIsolation;E&&g.cancelable&&g.preventDefault()}}},[]),p=h.useCallback(function(d,g,w,$){var x={name:d,delta:g,target:w,should:$,shadowParent:un(w)};n.current.push(x),setTimeout(function(){n.current=n.current.filter(function(E){return E!==x})},1)},[]),f=h.useCallback(function(d){r.current=ee(d),t.current=void 0},[]),l=h.useCallback(function(d){p(d.type,Te(d),d.target,s(d,e.lockRef.current))},[]),b=h.useCallback(function(d){p(d.type,ee(d),d.target,s(d,e.lockRef.current))},[]);h.useEffect(function(){return z.push(o),e.setCallbacks({onScrollCapture:l,onWheelCapture:l,onTouchMoveCapture:b}),document.addEventListener("wheel",u,I),document.addEventListener("touchmove",u,I),document.addEventListener("touchstart",f,I),function(){z=z.filter(function(d){return d!==o}),document.removeEventListener("wheel",u,I),document.removeEventListener("touchmove",u,I),document.removeEventListener("touchstart",f,I)}},[]);var m=e.removeScrollBar,v=e.inert;return h.createElement(h.Fragment,null,v?h.createElement(o,{styles:sn(a)}):null,m?h.createElement(Qt,{gapMode:e.gapMode}):null)}function un(e){for(var n=null;e!==null;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}const dn=It(Xe,cn);var ye=h.forwardRef(function(e,n){return h.createElement(le,R({},e,{ref:n,sideCar:dn}))});ye.classNames=le.classNames;function fn(e){var n;return typeof e!="string"||!e.includes("var(--mantine-scale)")?e:(n=e.match(/^calc\((.*?)\)$/))==null?void 0:n[1].split("*")[0].trim()}function be(e){const n=fn(e);return typeof n=="number"?n:typeof n=="string"?n.includes("calc")||n.includes("var")?n:n.includes("px")?Number(n.replace("px","")):n.includes("rem")?Number(n.replace("rem",""))*16:n.includes("em")?Number(n.replace("em",""))*16:Number(n):NaN}const hn={app:100,modal:200,popover:300,overlay:400,max:9999};function pn(e){return hn[e]}function Se(e,n){return e in n?be(n[e]):be(e)}function _e(e,n){const r=e.map(t=>({value:t,px:Se(t,n)}));return r.sort((t,a)=>t.px-a.px),r}function mn(e,n,r){h.useEffect(()=>(window.addEventListener(e,n,r),()=>window.removeEventListener(e,n,r)),[e,n])}function Le(e){return e==="auto"||e==="dark"||e==="light"}function vn({key:e="mantine-color-scheme-value"}={}){let n;return{get:r=>{if(typeof window>"u")return r;try{const t=window.localStorage.getItem(e);return Le(t)?t:r}catch{return r}},set:r=>{try{window.localStorage.setItem(e,r)}catch(t){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",t)}},subscribe:r=>{n=t=>{t.storageArea===window.localStorage&&t.key===e&&Le(t.newValue)&&r(t.newValue)},window.addEventListener("storage",n)},unsubscribe:()=>{window.removeEventListener("storage",n)},clear:()=>{window.localStorage.removeItem(e)}}}function gn(){const e=se(),n=Oe(),r=j(e.breakpoints).reduce((t,a)=>{const o=e.breakpoints[a].includes("px"),i=be(e.breakpoints[a]),s=o?`${i-.1}px`:ae(i-.1),u=o?`${i}px`:ae(i);return`${t}@media (max-width: ${s}) {.mantine-visible-from-${a} {display: none !important;}}@media (min-width: ${u}) {.mantine-hidden-from-${a} {display: none !important;}}`},"");return c.jsx("style",{"data-mantine-styles":"classes",nonce:n==null?void 0:n(),dangerouslySetInnerHTML:{__html:r}})}function he(e){return Object.entries(e).map(([n,r])=>`${n}: ${r};`).join("")}function Y(e,n){return(Array.isArray(e)?e:[e]).reduce((t,a)=>`${a}{${t}}`,n)}function bn(e,n){const r=he(e.variables),t=r?Y(n,r):"",a=he(e.dark),o=he(e.light),i=a?Y(n===":host"?`${n}([data-mantine-color-scheme="dark"])`:`${n}[data-mantine-color-scheme="dark"]`,a):"",s=o?Y(n===":host"?`${n}([data-mantine-color-scheme="light"])`:`${n}[data-mantine-color-scheme="light"]`,o):"";return`${t}${i}${s}`}function wn({color:e,theme:n,autoContrast:r}){return n.autoContrast&&at({color:e||n.primaryColor,theme:n}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function Be(e,n){return wn({color:e.colors[e.primaryColor][ie(e,n)],theme:e,autoContrast:null})}function te({theme:e,color:n,colorScheme:r,name:t=n,withColorValues:a=!0}){if(!e.colors[n])return{};if(r==="light"){const s=ie(e,"light"),u={[`--mantine-color-${t}-text`]:`var(--mantine-color-${t}-filled)`,[`--mantine-color-${t}-filled`]:`var(--mantine-color-${t}-${s})`,[`--mantine-color-${t}-filled-hover`]:`var(--mantine-color-${t}-${s===9?8:s+1})`,[`--mantine-color-${t}-light`]:O(e.colors[n][s],.1),[`--mantine-color-${t}-light-hover`]:O(e.colors[n][s],.12),[`--mantine-color-${t}-light-color`]:`var(--mantine-color-${t}-${s})`,[`--mantine-color-${t}-outline`]:`var(--mantine-color-${t}-${s})`,[`--mantine-color-${t}-outline-hover`]:O(e.colors[n][s],.05)};return a?{[`--mantine-color-${t}-0`]:e.colors[n][0],[`--mantine-color-${t}-1`]:e.colors[n][1],[`--mantine-color-${t}-2`]:e.colors[n][2],[`--mantine-color-${t}-3`]:e.colors[n][3],[`--mantine-color-${t}-4`]:e.colors[n][4],[`--mantine-color-${t}-5`]:e.colors[n][5],[`--mantine-color-${t}-6`]:e.colors[n][6],[`--mantine-color-${t}-7`]:e.colors[n][7],[`--mantine-color-${t}-8`]:e.colors[n][8],[`--mantine-color-${t}-9`]:e.colors[n][9],...u}:u}const o=ie(e,"dark"),i={[`--mantine-color-${t}-text`]:`var(--mantine-color-${t}-4)`,[`--mantine-color-${t}-filled`]:`var(--mantine-color-${t}-${o})`,[`--mantine-color-${t}-filled-hover`]:`var(--mantine-color-${t}-${o===9?8:o+1})`,[`--mantine-color-${t}-light`]:O(e.colors[n][Math.max(0,o-2)],.15),[`--mantine-color-${t}-light-hover`]:O(e.colors[n][Math.max(0,o-2)],.2),[`--mantine-color-${t}-light-color`]:`var(--mantine-color-${t}-${Math.max(o-5,0)})`,[`--mantine-color-${t}-outline`]:`var(--mantine-color-${t}-${Math.max(o-4,0)})`,[`--mantine-color-${t}-outline-hover`]:O(e.colors[n][Math.max(o-4,0)],.05)};return a?{[`--mantine-color-${t}-0`]:e.colors[n][0],[`--mantine-color-${t}-1`]:e.colors[n][1],[`--mantine-color-${t}-2`]:e.colors[n][2],[`--mantine-color-${t}-3`]:e.colors[n][3],[`--mantine-color-${t}-4`]:e.colors[n][4],[`--mantine-color-${t}-5`]:e.colors[n][5],[`--mantine-color-${t}-6`]:e.colors[n][6],[`--mantine-color-${t}-7`]:e.colors[n][7],[`--mantine-color-${t}-8`]:e.colors[n][8],[`--mantine-color-${t}-9`]:e.colors[n][9],...i}:i}function yn(e){return!!e&&typeof e=="object"&&"mantine-virtual-color"in e}function H(e,n,r){j(n).forEach(t=>Object.assign(e,{[`--mantine-${r}-${t}`]:n[t]}))}const Ge=e=>{const n=ie(e,"light"),r=e.defaultRadius in e.radius?e.radius[e.defaultRadius]:y(e.defaultRadius),t={variables:{"--mantine-scale":e.scale.toString(),"--mantine-cursor-type":e.cursorType,"--mantine-color-scheme":"light dark","--mantine-webkit-font-smoothing":e.fontSmoothing?"antialiased":"unset","--mantine-moz-font-smoothing":e.fontSmoothing?"grayscale":"unset","--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-line-height":e.lineHeights.md,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":e.headings.fontWeight,"--mantine-heading-text-wrap":e.headings.textWrap,"--mantine-radius-default":r,"--mantine-primary-color-filled":`var(--mantine-color-${e.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${e.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${e.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${e.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${e.primaryColor}-light-color)`},light:{"--mantine-primary-color-contrast":Be(e,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":e.black,"--mantine-color-body":e.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-${n})`,"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)","--mantine-color-dimmed":"var(--mantine-color-gray-6)"},dark:{"--mantine-primary-color-contrast":Be(e,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-4)`,"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)","--mantine-color-dimmed":"var(--mantine-color-dark-2)"}};H(t.variables,e.breakpoints,"breakpoint"),H(t.variables,e.spacing,"spacing"),H(t.variables,e.fontSizes,"font-size"),H(t.variables,e.lineHeights,"line-height"),H(t.variables,e.shadows,"shadow"),H(t.variables,e.radius,"radius"),e.colors[e.primaryColor].forEach((o,i)=>{t.variables[`--mantine-primary-color-${i}`]=`var(--mantine-color-${e.primaryColor}-${i})`}),j(e.colors).forEach(o=>{const i=e.colors[o];if(yn(i)){Object.assign(t.light,te({theme:e,name:i.name,color:i.light,colorScheme:"light",withColorValues:!0})),Object.assign(t.dark,te({theme:e,name:i.name,color:i.dark,colorScheme:"dark",withColorValues:!0}));return}i.forEach((s,u)=>{t.variables[`--mantine-color-${o}-${u}`]=s}),Object.assign(t.light,te({theme:e,color:o,colorScheme:"light",withColorValues:!1})),Object.assign(t.dark,te({theme:e,color:o,colorScheme:"dark",withColorValues:!1}))});const a=e.headings.sizes;return j(a).forEach(o=>{t.variables[`--mantine-${o}-font-size`]=a[o].fontSize,t.variables[`--mantine-${o}-line-height`]=a[o].lineHeight,t.variables[`--mantine-${o}-font-weight`]=a[o].fontWeight||e.headings.fontWeight}),t};function Sn({theme:e,generator:n}){const r=Ge(e),t=n==null?void 0:n(e);return t?it(r,t):r}const pe=Ge(st);function xn(e){const n={variables:{},light:{},dark:{}};return j(e.variables).forEach(r=>{pe.variables[r]!==e.variables[r]&&(n.variables[r]=e.variables[r])}),j(e.light).forEach(r=>{pe.light[r]!==e.light[r]&&(n.light[r]=e.light[r])}),j(e.dark).forEach(r=>{pe.dark[r]!==e.dark[r]&&(n.dark[r]=e.dark[r])}),n}function Cn(e){return`
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}function Qe({cssVariablesSelector:e,deduplicateCssVariables:n}){const r=se(),t=Oe(),a=lt(),o=Sn({theme:r,generator:a}),i=e===":root"&&n,s=i?xn(o):o,u=bn(s,e);return u?c.jsx("style",{"data-mantine-styles":!0,nonce:t==null?void 0:t(),dangerouslySetInnerHTML:{__html:`${u}${i?"":Cn(e)}`}}):null}Qe.displayName="@mantine/CssVariables";function $n(){const e=console.error;console.error=(...n)=>{n.length>1&&typeof n[0]=="string"&&n[0].toLowerCase().includes("extra attributes from the server")&&typeof n[1]=="string"&&n[1].toLowerCase().includes("data-mantine-color-scheme")||e(...n)}}function M(e,n){var a,o;const r=typeof window<"u"&&"matchMedia"in window&&((a=window.matchMedia("(prefers-color-scheme: dark)"))==null?void 0:a.matches),t=e!=="auto"?e:r?"dark":"light";(o=n())==null||o.setAttribute("data-mantine-color-scheme",t)}function jn({manager:e,defaultColorScheme:n,getRootElement:r,forceColorScheme:t}){const a=h.useRef(null),[o,i]=h.useState(()=>e.get(n)),s=t||o,u=h.useCallback(f=>{t||(M(f,r),i(f),e.set(f))},[e.set,s,t]),p=h.useCallback(()=>{i(n),M(n,r),e.clear()},[e.clear,n]);return h.useEffect(()=>(e.subscribe(u),e.unsubscribe),[e.subscribe,e.unsubscribe]),we(()=>{M(e.get(n),r)},[]),h.useEffect(()=>{var l;if(t)return M(t,r),()=>{};t===void 0&&M(o,r),typeof window<"u"&&"matchMedia"in window&&(a.current=window.matchMedia("(prefers-color-scheme: dark)"));const f=b=>{o==="auto"&&M(b.matches?"dark":"light",r)};return(l=a.current)==null||l.addEventListener("change",f),()=>{var b;return(b=a.current)==null?void 0:b.removeEventListener("change",f)}},[o,t]),{colorScheme:s,setColorScheme:u,clearColorScheme:p}}function En({respectReducedMotion:e,getRootElement:n}){we(()=>{var r;e&&((r=n())==null||r.setAttribute("data-respect-reduced-motion","true"))},[e])}$n();function Je({theme:e,children:n,getStyleNonce:r,withStaticClasses:t=!0,withGlobalClasses:a=!0,deduplicateCssVariables:o=!0,withCssVariables:i=!0,cssVariablesSelector:s=":root",classNamesPrefix:u="mantine",colorSchemeManager:p=vn(),defaultColorScheme:f="light",getRootElement:l=()=>document.documentElement,cssVariablesResolver:b,forceColorScheme:m,stylesTransform:v}){const{colorScheme:d,setColorScheme:g,clearColorScheme:w}=jn({defaultColorScheme:f,forceColorScheme:m,manager:p,getRootElement:l});return En({respectReducedMotion:(e==null?void 0:e.respectReducedMotion)||!1,getRootElement:l}),c.jsx(ct.Provider,{value:{colorScheme:d,setColorScheme:g,clearColorScheme:w,getRootElement:l,classNamesPrefix:u,getStyleNonce:r,cssVariablesResolver:b,cssVariablesSelector:s,withStaticClasses:t,stylesTransform:v},children:c.jsxs(ut,{theme:e,children:[i&&c.jsx(Qe,{cssVariablesSelector:s,deduplicateCssVariables:o}),a&&c.jsx(gn,{}),n]})})}Je.displayName="@mantine/core/MantineProvider";const kn=({defaultColorScheme:e,localStorageKey:n,forceColorScheme:r})=>r?`document.documentElement.setAttribute("data-mantine-color-scheme", '${r}');`:`try {
  var _colorScheme = window.localStorage.getItem("${n}");
  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "${e}";
  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
} catch (e) {}
`;function Nn({defaultColorScheme:e="light",localStorageKey:n="mantine-color-scheme-value",forceColorScheme:r,...t}){const a=["light","dark","auto"].includes(e)?e:"light";return c.jsx("script",{...t,"data-mantine-script":!0,dangerouslySetInnerHTML:{__html:kn({defaultColorScheme:a,localStorageKey:n,forceColorScheme:r})}})}const Rn={suppressHydrationWarning:!0,"data-mantine-color-scheme":"light"};function Ke(e,n){return Array.isArray(e)?[...e].reduce((r,t)=>({...r,...Ke(t,n)}),{}):typeof e=="function"?e(n):e??{}}function An(e){if(!e||typeof e=="string")return 0;const n=e/36;return Math.round((4+15*n**.25+n/5)*10)}function me(e){return e!=null&&e.current?e.current.scrollHeight:"auto"}const Z=typeof window<"u"&&window.requestAnimationFrame;function Pn({transitionDuration:e,transitionTimingFunction:n="ease",onTransitionEnd:r=()=>{},opened:t}){const a=h.useRef(null),o=0,i={display:"none",height:0,overflow:"hidden"},[s,u]=h.useState(t?{}:i),p=v=>{wt.flushSync(()=>u(v))},f=v=>{p(d=>({...d,...v}))};function l(v){const d=e||An(v);return{transition:`height ${d}ms ${n}, opacity ${d}ms ${n}`}}dt(()=>{typeof Z=="function"&&Z(t?()=>{f({willChange:"height",display:"block",overflow:"hidden"}),Z(()=>{const v=me(a);f({...l(v),height:v})})}:()=>{const v=me(a);f({...l(v),willChange:"height",height:v}),Z(()=>f({height:o,overflow:"hidden"}))})},[t]);const b=v=>{if(!(v.target!==a.current||v.propertyName!=="height"))if(t){const d=me(a);d===s.height?p({}):f({height:d}),r()}else s.height===o&&(p(i),r())};function m({style:v={},refKey:d="ref",...g}={}){const w=g[d];return{"aria-hidden":!t,...g,[d]:kt(a,w),onTransitionEnd:b,style:{boxSizing:"border-box",...v,...s}}}return m}const Tn={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},et=V((e,n)=>{const{children:r,in:t,transitionDuration:a,transitionTimingFunction:o,style:i,onTransitionEnd:s,animateOpacity:u,...p}=A("Collapse",Tn,e),f=se(),l=ft(),m=(f.respectReducedMotion?l:!1)?0:a,v=Pn({opened:t,transitionDuration:m,transitionTimingFunction:o,onTransitionEnd:s});return m===0?t?c.jsx(C,{...p,children:r}):null:c.jsx(C,{...v({style:{opacity:t||!u?1:0,transition:u?`opacity ${m}ms ${o}`:"none",...Ke(i,f)},ref:n,...p}),children:r})});et.displayName="@mantine/core/Collapse";function tt({style:e,size:n=16,...r}){return c.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:y(n),height:y(n),display:"block"},...r,children:c.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}tt.displayName="@mantine/core/AccordionChevron";const[Vn,D]=Et("AppShell was not found in tree");var _={root:"m_89ab340",navbar:"m_45252eee",aside:"m_9cdde9a",header:"m_3b16f56b",main:"m_8983817",footer:"m_3840c879",section:"m_6dcfc7c7"};const _n={},xe=V((e,n)=>{const r=A("AppShellAside",_n,e),{classNames:t,className:a,style:o,styles:i,unstyled:s,vars:u,withBorder:p,zIndex:f,mod:l,...b}=r,m=D();return m.disabled?null:c.jsx(C,{component:"aside",ref:n,mod:[{"with-border":p??m.withBorder},l],...m.getStyles("aside",{className:a,classNames:t,styles:i,style:o}),...b,__vars:{"--app-shell-aside-z-index":`calc(${f??m.zIndex} + 1)`}})});xe.classes=_;xe.displayName="@mantine/core/AppShellAside";const Ln={},Ce=V((e,n)=>{var v;const r=A("AppShellFooter",Ln,e),{classNames:t,className:a,style:o,styles:i,unstyled:s,vars:u,withBorder:p,zIndex:f,mod:l,...b}=r,m=D();return m.disabled?null:c.jsx(C,{component:"footer",ref:n,mod:[{"with-border":p??m.withBorder},l],...m.getStyles("footer",{className:Ie({[ye.classNames.zeroRight]:m.offsetScrollbars},a),classNames:t,styles:i,style:o}),...b,__vars:{"--app-shell-footer-z-index":(v=f??m.zIndex)==null?void 0:v.toString()}})});Ce.classes=_;Ce.displayName="@mantine/core/AppShellFooter";const Bn={},$e=V((e,n)=>{var v;const r=A("AppShellHeader",Bn,e),{classNames:t,className:a,style:o,styles:i,unstyled:s,vars:u,withBorder:p,zIndex:f,mod:l,...b}=r,m=D();return m.disabled?null:c.jsx(C,{component:"header",ref:n,mod:[{"with-border":p??m.withBorder},l],...m.getStyles("header",{className:Ie({[ye.classNames.zeroRight]:m.offsetScrollbars},a),classNames:t,styles:i,style:o}),...b,__vars:{"--app-shell-header-z-index":(v=f??m.zIndex)==null?void 0:v.toString()}})});$e.classes=_;$e.displayName="@mantine/core/AppShellHeader";const On={},je=V((e,n)=>{const r=A("AppShellMain",On,e),{classNames:t,className:a,style:o,styles:i,vars:s,...u}=r,p=D();return c.jsx(C,{component:"main",ref:n,...p.getStyles("main",{className:a,style:o,classNames:t,styles:i}),...u})});je.classes=_;je.displayName="@mantine/core/AppShellMain";function q(e){return typeof e=="object"?e.base:e}function G(e){const n=typeof e=="object"&&e!==null&&typeof e.base<"u"&&Object.keys(e).length===1;return typeof e=="number"||typeof e=="string"||n}function Q(e){return!(typeof e!="object"||e===null||Object.keys(e).length===1&&"base"in e)}function In({baseStyles:e,minMediaStyles:n,maxMediaStyles:r,aside:t,theme:a}){var u,p,f;const o=t==null?void 0:t.width,i="translateX(var(--app-shell-aside-width))",s="translateX(calc(var(--app-shell-aside-width) * -1))";if(t!=null&&t.breakpoint&&!((u=t==null?void 0:t.collapsed)!=null&&u.mobile)&&(r[t==null?void 0:t.breakpoint]=r[t==null?void 0:t.breakpoint]||{},r[t==null?void 0:t.breakpoint]["--app-shell-aside-width"]="100%",r[t==null?void 0:t.breakpoint]["--app-shell-aside-offset"]="0px"),G(o)){const l=y(q(o));e["--app-shell-aside-width"]=l,e["--app-shell-aside-offset"]=l}if(Q(o)&&(typeof o.base<"u"&&(e["--app-shell-aside-width"]=y(o.base),e["--app-shell-aside-offset"]=y(o.base)),j(o).forEach(l=>{l!=="base"&&(n[l]=n[l]||{},n[l]["--app-shell-aside-width"]=y(o[l]),n[l]["--app-shell-aside-offset"]=y(o[l]))})),(p=t==null?void 0:t.collapsed)!=null&&p.desktop){const l=t.breakpoint;n[l]=n[l]||{},n[l]["--app-shell-aside-transform"]=i,n[l]["--app-shell-aside-transform-rtl"]=s,n[l]["--app-shell-aside-offset"]="0px !important"}if((f=t==null?void 0:t.collapsed)!=null&&f.mobile){const l=Se(t.breakpoint,a.breakpoints)-.1;r[l]=r[l]||{},r[l]["--app-shell-aside-width"]="100%",r[l]["--app-shell-aside-offset"]="0px",r[l]["--app-shell-aside-transform"]=i,r[l]["--app-shell-aside-transform-rtl"]=s}}function zn({baseStyles:e,minMediaStyles:n,footer:r}){const t=r==null?void 0:r.height,a="translateY(var(--app-shell-footer-height))",o=(r==null?void 0:r.offset)??!0;if(G(t)){const i=y(q(t));e["--app-shell-footer-height"]=i,o&&(e["--app-shell-footer-offset"]=i)}Q(t)&&(typeof t.base<"u"&&(e["--app-shell-footer-height"]=y(t.base),o&&(e["--app-shell-footer-offset"]=y(t.base))),j(t).forEach(i=>{i!=="base"&&(n[i]=n[i]||{},n[i]["--app-shell-footer-height"]=y(t[i]),o&&(n[i]["--app-shell-footer-offset"]=y(t[i])))})),r!=null&&r.collapsed&&(e["--app-shell-footer-transform"]=a,e["--app-shell-footer-offset"]="0px !important")}function Hn({baseStyles:e,minMediaStyles:n,header:r}){const t=r==null?void 0:r.height,a="translateY(calc(var(--app-shell-header-height) * -1))",o=(r==null?void 0:r.offset)??!0;if(G(t)){const i=y(q(t));e["--app-shell-header-height"]=i,o&&(e["--app-shell-header-offset"]=i)}Q(t)&&(typeof t.base<"u"&&(e["--app-shell-header-height"]=y(t.base),o&&(e["--app-shell-header-offset"]=y(t.base))),j(t).forEach(i=>{i!=="base"&&(n[i]=n[i]||{},n[i]["--app-shell-header-height"]=y(t[i]),o&&(n[i]["--app-shell-header-offset"]=y(t[i])))})),r!=null&&r.collapsed&&(e["--app-shell-header-transform"]=a,e["--app-shell-header-offset"]="0px !important")}function Mn({baseStyles:e,minMediaStyles:n,maxMediaStyles:r,navbar:t,theme:a}){var u,p,f;const o=t==null?void 0:t.width,i="translateX(calc(var(--app-shell-navbar-width) * -1))",s="translateX(var(--app-shell-navbar-width))";if(t!=null&&t.breakpoint&&!((u=t==null?void 0:t.collapsed)!=null&&u.mobile)&&(r[t==null?void 0:t.breakpoint]=r[t==null?void 0:t.breakpoint]||{},r[t==null?void 0:t.breakpoint]["--app-shell-navbar-width"]="100%",r[t==null?void 0:t.breakpoint]["--app-shell-navbar-offset"]="0px"),G(o)){const l=y(q(o));e["--app-shell-navbar-width"]=l,e["--app-shell-navbar-offset"]=l}if(Q(o)&&(typeof o.base<"u"&&(e["--app-shell-navbar-width"]=y(o.base),e["--app-shell-navbar-offset"]=y(o.base)),j(o).forEach(l=>{l!=="base"&&(n[l]=n[l]||{},n[l]["--app-shell-navbar-width"]=y(o[l]),n[l]["--app-shell-navbar-offset"]=y(o[l]))})),(p=t==null?void 0:t.collapsed)!=null&&p.desktop){const l=t.breakpoint;n[l]=n[l]||{},n[l]["--app-shell-navbar-transform"]=i,n[l]["--app-shell-navbar-transform-rtl"]=s,n[l]["--app-shell-navbar-offset"]="0px !important"}if((f=t==null?void 0:t.collapsed)!=null&&f.mobile){const l=Se(t.breakpoint,a.breakpoints)-.1;r[l]=r[l]||{},r[l]["--app-shell-navbar-width"]="100%",r[l]["--app-shell-navbar-offset"]="0px",r[l]["--app-shell-navbar-transform"]=i,r[l]["--app-shell-navbar-transform-rtl"]=s}}function ve(e){return Number(e)===0?"0px":ze(e)}function Wn({padding:e,baseStyles:n,minMediaStyles:r}){G(e)&&(n["--app-shell-padding"]=ve(q(e))),Q(e)&&(e.base&&(n["--app-shell-padding"]=ve(e.base)),j(e).forEach(t=>{t!=="base"&&(r[t]=r[t]||{},r[t]["--app-shell-padding"]=ve(e[t]))}))}function Dn({navbar:e,header:n,footer:r,aside:t,padding:a,theme:o}){const i={},s={},u={};Mn({baseStyles:u,minMediaStyles:i,maxMediaStyles:s,navbar:e,theme:o}),In({baseStyles:u,minMediaStyles:i,maxMediaStyles:s,aside:t,theme:o}),Hn({baseStyles:u,minMediaStyles:i,header:n}),zn({baseStyles:u,minMediaStyles:i,footer:r}),Wn({baseStyles:u,minMediaStyles:i,padding:a});const p=_e(j(i),o.breakpoints).map(b=>({query:`(min-width: ${ae(b.px)})`,styles:i[b.value]})),f=_e(j(s),o.breakpoints).map(b=>({query:`(max-width: ${ae(b.px)})`,styles:s[b.value]})),l=[...p,...f];return{baseStyles:u,media:l}}function Fn({navbar:e,header:n,aside:r,footer:t,padding:a}){const o=se(),i=ht(),{media:s,baseStyles:u}=Dn({navbar:e,header:n,footer:t,aside:r,padding:a,theme:o});return c.jsx(pt,{media:s,styles:u,selector:i.cssVariablesSelector})}const Xn={},Ee=V((e,n)=>{const r=A("AppShellNavbar",Xn,e),{classNames:t,className:a,style:o,styles:i,unstyled:s,vars:u,withBorder:p,zIndex:f,mod:l,...b}=r,m=D();return m.disabled?null:c.jsx(C,{component:"nav",ref:n,mod:[{"with-border":p??m.withBorder},l],...m.getStyles("navbar",{className:a,classNames:t,styles:i,style:o}),...b,__vars:{"--app-shell-navbar-z-index":`calc(${f??m.zIndex} + 1)`}})});Ee.classes=_;Ee.displayName="@mantine/core/AppShellNavbar";const Yn={},ke=He((e,n)=>{const r=A("AppShellSection",Yn,e),{classNames:t,className:a,style:o,styles:i,vars:s,grow:u,mod:p,...f}=r,l=D();return c.jsx(C,{ref:n,mod:[{grow:u},p],...l.getStyles("section",{className:a,style:o,classNames:t,styles:i}),...f})});ke.classes=_;ke.displayName="@mantine/core/AppShellSection";function Zn({transitionDuration:e,disabled:n}){const[r,t]=h.useState(!0),a=h.useRef(-1),o=h.useRef(-1);return mn("resize",()=>{t(!0),clearTimeout(a.current),a.current=window.setTimeout(()=>h.startTransition(()=>{t(!1)}),200)}),we(()=>{t(!0),clearTimeout(o.current),o.current=window.setTimeout(()=>h.startTransition(()=>{t(!1)}),e||0)},[n,e]),r}const Un={withBorder:!0,padding:0,transitionDuration:200,transitionTimingFunction:"ease",zIndex:pn("app")},qn=We((e,{transitionDuration:n,transitionTimingFunction:r})=>({root:{"--app-shell-transition-duration":`${n}ms`,"--app-shell-transition-timing-function":r}})),N=V((e,n)=>{const r=A("AppShell",Un,e),{classNames:t,className:a,style:o,styles:i,unstyled:s,vars:u,navbar:p,withBorder:f,padding:l,transitionDuration:b,transitionTimingFunction:m,header:v,zIndex:d,layout:g,disabled:w,aside:$,footer:x,offsetScrollbars:E=g!=="alt",mod:S,...P}=r,k=Me({name:"AppShell",classes:_,props:r,className:a,style:o,classNames:t,styles:i,unstyled:s,vars:u,varsResolver:qn}),L=Zn({disabled:w,transitionDuration:b});return c.jsxs(Vn,{value:{getStyles:k,withBorder:f,zIndex:d,disabled:w,offsetScrollbars:E},children:[c.jsx(Fn,{navbar:p,header:v,aside:$,footer:x,padding:l}),c.jsx(C,{ref:n,...k("root"),mod:[{resizing:L,layout:g,disabled:w},S],...P})]})});N.classes=_;N.displayName="@mantine/core/AppShell";N.Navbar=Ee;N.Header=$e;N.Main=je;N.Aside=xe;N.Footer=Ce;N.Section=ke;var nt={root:"m_f0824112",description:"m_57492dcc",section:"m_690090b5",label:"m_1f6ac4c4",body:"m_f07af9d2",children:"m_e17b862f",chevron:"m_1fd8a00b"};const Gn={},Qn=We((e,{variant:n,color:r,childrenOffset:t,autoContrast:a})=>{const o=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:n||"light",autoContrast:a});return{root:{"--nl-bg":r||n?o.background:void 0,"--nl-hover":r||n?o.hover:void 0,"--nl-color":r||n?o.color:void 0},children:{"--nl-offset":ze(t)}}}),U=He((e,n)=>{const r=A("NavLink",Gn,e),{classNames:t,className:a,style:o,styles:i,unstyled:s,vars:u,opened:p,defaultOpened:f,onChange:l,children:b,onClick:m,active:v,disabled:d,leftSection:g,rightSection:w,label:$,description:x,disableRightSectionRotation:E,noWrap:S,childrenOffset:P,onKeyDown:k,autoContrast:L,mod:J,...rt}=r,T=Me({name:"NavLink",props:r,classes:nt,className:a,style:o,classNames:t,styles:i,unstyled:s,vars:u,varsResolver:Qn}),[F,Ne]=Nt({value:p,defaultValue:f,finalValue:!1,onChange:l}),X=!!b,ot=B=>{m==null||m(B),X&&(B.preventDefault(),Ne(!F))};return c.jsxs(c.Fragment,{children:[c.jsxs(mt,{...T("root"),component:"a",ref:n,onClick:ot,onKeyDown:B=>{k==null||k(B),B.nativeEvent.code==="Space"&&X&&(B.preventDefault(),Ne(!F))},unstyled:s,mod:[{disabled:d,active:v,expanded:F},J],...rt,children:[g&&c.jsx(C,{component:"span",...T("section"),mod:{position:"left"},children:g}),c.jsxs(C,{...T("body"),mod:{"no-wrap":S},children:[c.jsx(C,{component:"span",...T("label"),children:$}),c.jsx(C,{component:"span",mod:{active:v},...T("description"),children:x})]}),(X||w)&&c.jsx(C,{...T("section"),component:"span",mod:{rotate:F&&!E,position:"right"},children:X?w||c.jsx(tt,{...T("chevron")}):w})]}),X&&c.jsx(et,{in:F,...T("collapse"),children:c.jsx("div",{...T("children"),children:b})})]})});U.classes=nt;U.displayName="@mantine/core/NavLink";const Jn={},oe=V((e,n)=>{const{w:r,h:t,miw:a,mih:o,...i}=A("Space",Jn,e);return c.jsx(C,{ref:n,...i,w:r,miw:a??r,h:t,mih:o??t})});oe.displayName="@mantine/core/Space";const or=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}];function ar({children:e}){return c.jsxs("html",{lang:"en",...Rn,children:[c.jsxs("head",{children:[c.jsx("meta",{charSet:"utf-8"}),c.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c.jsx(Nn,{}),c.jsx(yt,{}),c.jsx(St,{})]}),c.jsxs("body",{children:[c.jsx(Je,{children:e}),c.jsx(xt,{}),c.jsx(Ct,{})]})]})}const ir=vt(function(){return c.jsx(bt,{children:c.jsxs(N,{navbar:{width:300,breakpoint:"sm",collapsed:{mobile:!1}},padding:"md",children:[c.jsxs(N.Navbar,{p:"md",children:[c.jsx("div",{style:{width:35,height:35,borderRadius:8,backgroundColor:"#339af0"}}),c.jsx(oe,{h:"xs"}),c.jsx(U,{href:"/",label:"Página inicial",renderRoot:n=>c.jsx(ce,{to:"/",...n})}),c.jsx(oe,{h:"xs"}),c.jsx(U,{label:"Adicionar atividade",renderRoot:n=>c.jsx(ce,{to:"/add",...n})}),c.jsx(oe,{h:"xs"}),c.jsx(U,{label:"Histórico de atividades",renderRoot:n=>c.jsx(ce,{to:"/history",...n})})]}),c.jsx(N.Main,{children:c.jsx($t,{})})]})})}),sr=gt(function({error:n}){let r="Oops!",t="An unexpected error occurred.",a;return jt(n)&&(r=n.status===404?"404":"Error",t=n.status===404?"The requested page could not be found.":n.statusText||t),c.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[c.jsx("h1",{children:r}),c.jsx("p",{children:t}),a]})});export{sr as ErrorBoundary,ar as Layout,ir as default,or as links};
