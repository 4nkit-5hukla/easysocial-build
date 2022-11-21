import{s as f,h as a,F as w,r as A,m as D,_ as C,j as v,n as R,t as W}from"./index.be83498f.js";import{g as $}from"./dividerClasses.ba5b8194.js";const I=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],L=i=>{const{absolute:t,children:r,classes:n,flexItem:s,light:l,orientation:e,textAlign:o,variant:c}=i;return W({root:["root",t&&"absolute",c,l&&"light",e==="vertical"&&"vertical",s&&"flexItem",r&&"withChildren",r&&e==="vertical"&&"withChildrenVertical",o==="right"&&e!=="vertical"&&"textAlignRight",o==="left"&&e!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",e==="vertical"&&"wrapperVertical"]},$,n)},T=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:r}=i;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,r.orientation==="vertical"&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&r.orientation==="vertical"&&t.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&t.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>a({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:w(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:i,ownerState:t})=>a({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:i,ownerState:t})=>a({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(i.vars||i).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:i})=>a({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),B=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:r}=i;return[t.wrapper,r.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>a({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),N=A.exports.forwardRef(function(t,r){const n=D({props:t,name:"MuiDivider"}),{absolute:s=!1,children:l,className:e,component:o=l?"div":"hr",flexItem:c=!1,light:p=!1,orientation:x="horizontal",role:h=o!=="hr"?"separator":void 0,textAlign:b="center",variant:m="fullWidth"}=n,u=C(n,I),d=a({},n,{absolute:s,component:o,flexItem:c,light:p,orientation:x,role:h,textAlign:b,variant:m}),g=L(d);return v(T,a({as:o,className:R(g.root,e),role:h,ref:r,ownerState:d},u,{children:l?v(B,{className:g.wrapper,ownerState:d,children:l}):null}))}),j=N;export{j as D};