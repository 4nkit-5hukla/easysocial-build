import{D,j as s,p as I,n as M,q as m,_ as i,r as g,t as S,d as P,v as j,y as z,a as b,Y as A}from"./index.2dec61c5.js";const F=D(s("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function N(e){return I("MuiAvatar",e)}M("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const U=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],_=e=>{const{classes:a,variant:t,colorDefault:r}=e;return z({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},N,a)},q=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(({theme:e,ownerState:a})=>i({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.variant==="square"&&{borderRadius:0},a.colorDefault&&i({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),B=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),L=m(F,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function H({crossOrigin:e,referrerPolicy:a,src:t,srcSet:r}){const[l,n]=g.exports.useState(!1);return g.exports.useEffect(()=>{if(!t&&!r)return;n(!1);let c=!0;const o=new Image;return o.onload=()=>{!c||n("loaded")},o.onerror=()=>{!c||n("error")},o.crossOrigin=e,o.referrerPolicy=a,o.src=t,r&&(o.srcset=r),()=>{c=!1}},[e,a,t,r]),l}const T=g.exports.forwardRef(function(a,t){const r=S({props:a,name:"MuiAvatar"}),{alt:l,children:n,className:c,component:o="div",imgProps:h,sizes:y,src:u,srcSet:f,variant:w="circular"}=r,k=P(r,U);let d=null;const R=H(i({},h,{src:u,srcSet:f})),C=u||f,x=C&&R!=="error",v=i({},r,{colorDefault:!x,component:o,variant:w}),p=_(v);return x?d=s(B,i({alt:l,src:u,srcSet:f,sizes:y,ownerState:v,className:p.img},h)):n!=null?d=n:C&&l?d=l[0]:d=s(L,{className:p.fallback}),s(q,i({as:o,ownerState:v,className:j(p.root,c),ref:t},k,{children:d}))}),E=T,W=({sx:e})=>b(A,{viewBox:"0 0 20 20",fill:"none",sx:e||{},children:[s("rect",{width:"25",height:"3",rx:"1",transform:"matrix(-0.707107 -0.707107 -0.707107 0.707107 19.799 17.6777)"}),s("rect",{width:"25",height:"3",rx:"1",transform:"matrix(-0.707107 0.707107 0.707107 0.707107 17.6776 0)"})]}),Y=({sx:e})=>b(A,{viewBox:"0 0 17 18",fill:"none",sx:e||{},children:[s("path",{d:"M11.4366 1.30901C10.6547 0.464864 9.56265 0 8.3573 0C7.14552 0 6.04985 0.462051 5.2716 1.30097C4.48491 2.14914 4.10161 3.30186 4.19161 4.54658C4.37 7.00228 6.23869 8.99995 8.3573 8.99995C10.4759 8.99995 12.3414 7.00268 12.5226 4.54739C12.6138 3.31391 12.2281 2.1636 11.4366 1.30901Z"}),s("path",{d:"M15.4287 17.9999H1.28594C1.10082 18.0023 0.917496 17.9634 0.7493 17.8861C0.581105 17.8087 0.432269 17.6948 0.313621 17.5527C0.0524616 17.2405 -0.0528056 16.8142 0.0251404 16.3831C0.364246 14.502 1.42254 12.9217 3.08593 11.8124C4.56369 10.8277 6.43559 10.2856 8.35732 10.2856C10.2791 10.2856 12.151 10.8281 13.6287 11.8124C15.2921 12.9213 16.3504 14.5016 16.6895 16.3827C16.7675 16.8138 16.6622 17.2401 16.401 17.5523C16.2824 17.6945 16.1336 17.8084 15.9654 17.8859C15.7972 17.9633 15.6139 18.0022 15.4287 17.9999Z"})]});export{E as A,W as D,Y as U};
