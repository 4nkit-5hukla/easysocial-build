import{g as c,_ as h,U as P,V as S,r as w,X as T,j as _}from"./index.f4b1475f.js";function j(l){const{theme:t,name:e,props:r}=l;if(!t||!t.components||!t.components[e]||!t.components[e].defaultProps)return r;const o=c({},r),s=t.components[e].defaultProps;let a;for(a in s)o[a]===void 0&&(o[a]=s[a]);return o}const N=["defaultTheme","withTheme","name"],g=["classes"],W=(l,t={})=>e=>{const{defaultTheme:r,withTheme:o=!1,name:s}=t,a=h(t,N);let p=s;const d=P(l,c({defaultTheme:r,Component:e,name:s||e.displayName,classNamePrefix:p},a)),f=w.exports.forwardRef(function(m,y){const u=h(m,g),x=d(c({},e.defaultProps,m));let i,n=u;return(typeof s=="string"||o)&&(i=T()||r,s&&(n=j({theme:i,name:s,props:u})),o&&!n.theme&&(n.theme=i)),_(e,c({ref:y,classes:x},n))});return S(f,e),f},k=W;export{k as w};