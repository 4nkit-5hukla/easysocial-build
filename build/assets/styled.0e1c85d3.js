import{C as I,c as $,q as F,s as K,t as N,v as U,_,w as W,l as z}from"./index.ca4653e7.js";function ie(e,t,r){const n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((a,i)=>(i&&(a.push(t(i)),r&&r[i]&&a.push(r[i])),a),[]).join(" ")}),n}const G={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function L(e,t,r="Mui"){const n=G[t];return n?`${r}-${n}`:`${I.generate(e)}-${t}`}function ae(e,t,r="Mui"){const n={};return t.forEach(o=>{n[o]=L(e,o,r)}),n}const B=["variant"];function j(e){return e.length===0}function T(e){const{variant:t}=e,r=$(e,B);let n=t||"";return Object.keys(r).sort().forEach(o=>{o==="color"?n+=j(n)?e[o]:F(e[o]):n+=`${j(n)?o:F(o)}${F(e[o].toString())}`}),n}const H=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],J=["theme"],Q=["theme"];function x(e){return Object.keys(e).length===0}function X(e){return typeof e=="string"&&e.charCodeAt(0)>96}const Y=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Z=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);const n={};return r.forEach(o=>{const a=T(o.props);n[a]=o.style}),n},A=(e,t,r,n)=>{var o,a;const{ownerState:i={}}=e,f=[],d=r==null||(o=r.components)==null||(a=o[n])==null?void 0:a.variants;return d&&d.forEach(u=>{let v=!0;Object.keys(u.props).forEach(m=>{i[m]!==u.props[m]&&e[m]!==u.props[m]&&(v=!1)}),v&&f.push(t[T(u.props)])}),f};function w(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ee=W();function te(e={}){const{defaultTheme:t=ee,rootShouldForwardProp:r=w,slotShouldForwardProp:n=w,styleFunctionSx:o=K}=e,a=i=>{const f=x(i.theme)?t:i.theme;return o(_({},i,{theme:f}))};return a.__mui_systemSx=!0,(i,f={})=>{N(i,l=>l.filter(p=>!(p!=null&&p.__mui_systemSx)));const{name:d,slot:u,skipVariantsResolver:v,skipSx:m,overridesResolver:E}=f,V=$(f,H),k=v!==void 0?v:u&&u!=="Root"||!1,M=m||!1;let q,y=w;u==="Root"?y=r:u?y=n:X(i)&&(y=void 0);const O=U(i,_({shouldForwardProp:y,label:q},V)),P=(l,...p)=>{const S=p?p.map(s=>typeof s=="function"&&s.__emotion_real!==s?c=>{let{theme:h}=c,b=$(c,J);return s(_({theme:x(h)?t:h},b))}:s):[];let C=l;d&&E&&S.push(s=>{const c=x(s.theme)?t:s.theme,h=Y(d,c);if(h){const b={};return Object.entries(h).forEach(([D,R])=>{b[D]=typeof R=="function"?R(_({},s,{theme:c})):R}),E(s,b)}return null}),d&&!k&&S.push(s=>{const c=x(s.theme)?t:s.theme;return A(s,Z(d,c),c,d)}),M||S.push(a);const g=S.length-p.length;if(Array.isArray(l)&&g>0){const s=new Array(g).fill("");C=[...l,...s],C.raw=[...l.raw,...s]}else typeof l=="function"&&l.__emotion_real!==l&&(C=s=>{let{theme:c}=s,h=$(s,Q);return l(_({theme:x(c)?t:c},h))});return O(C,...S)};return O.withConfig&&(P.withConfig=O.withConfig),P}}const ne=e=>w(e)&&e!=="classes",ce=w,oe=te({defaultTheme:z,rootShouldForwardProp:ne}),le=oe;export{ae as a,te as b,ie as c,ce as d,L as g,ne as r,le as s};
