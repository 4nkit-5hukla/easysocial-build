import{r as o,j as d,_ as x,g as u,k as C,i as g,s as w,l as y,m as $,q as M}from"./index.f42b544b.js";import{T as E}from"./Tabs.8a3576f6.js";const f=o.exports.createContext(null);function N(){const[e,t]=o.exports.useState(null);return o.exports.useEffect(()=>{t(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),e}function V(e){const{children:t,value:n}=e,s=N(),i=o.exports.useMemo(()=>({idPrefix:s,value:n}),[s,n]);return d(f.Provider,{value:i,children:t})}function b(){return o.exports.useContext(f)}function T(e,t){const{idPrefix:n}=e;return n===null?null:`${e.idPrefix}-P-${t}`}function P(e,t){const{idPrefix:n}=e;return n===null?null:`${e.idPrefix}-T-${t}`}const R=["children"],U=o.exports.forwardRef(function(t,n){const{children:s}=t,i=x(t,R),r=b();if(r===null)throw new TypeError("No TabContext provided");const a=o.exports.Children.map(s,l=>o.exports.isValidElement(l)?o.exports.cloneElement(l,{"aria-controls":T(r,l.props.value),id:P(r,l.props.value)}):null);return d(E,u({},i,{ref:n,value:r.value,children:a}))}),W=U;function _(e){return C("MuiTabPanel",e)}g("MuiTabPanel",["root"]);const I=["children","className","value"],L=e=>{const{classes:t}=e;return M({root:["root"]},_,t)},j=w("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(3)})),S=o.exports.forwardRef(function(t,n){const s=y({props:t,name:"MuiTabPanel"}),{children:i,className:r,value:a}=s,l=x(s,I),p=u({},s),m=L(p),c=b();if(c===null)throw new TypeError("No TabContext provided");const h=T(c,a),v=P(c,a);return d(j,u({"aria-labelledby":v,className:$(m.root,r),hidden:a!==c.value,id:h,ref:n,role:"tabpanel",ownerState:p},l,{children:a===c.value&&i}))}),z=S;export{V as T,W as a,z as b};