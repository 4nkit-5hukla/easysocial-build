import{l as A,m as C,n as I,i as c,r as b,p as E,_ as L,j as r,q as $,T as z,a as T,v as m,w as R}from"./index.dca5aa37.js";import{u as _,c as j}from"./Select.6e7e8ac7.js";function w(n){return C("MuiInputAdornment",n)}const F=A("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=F;var g;const M=["children","className","component","disablePointerEvents","disableTypography","position","variant"],N=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},S=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:a,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",a&&`size${m(a)}`]};return R(d,w,t)},U=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:N})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),q=b.exports.forwardRef(function(t,e){const o=E({props:t,name:"MuiInputAdornment"}),{children:s,className:a,component:l="div",disablePointerEvents:d=!1,disableTypography:x=!1,position:u,variant:v}=o,P=L(o,M),i=_()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),y=S(h);return r(j.Provider,{value:null,children:r(U,c({as:l,ownerState:h,className:$(y.root,a),ref:e},P,{children:typeof s=="string"&&!x?r(z,{color:"text.secondary",children:s}):T(b.exports.Fragment,{children:[u==="start"?g||(g=r("span",{className:"notranslate",children:"\u200B"})):null,s]})}))})}),W=q;export{W as I};