import{_ as r,r as y,e as h,c as L,j as u,g as v,a as w}from"./index.ca4653e7.js";import{s as C,c as b}from"./styled.0e1c85d3.js";import{g as $,l as T,a as _}from"./MenuItem.95488629.js";import{a as N}from"./List.c558af58.js";import{T as d}from"./Typography.a45e4cf2.js";const j=["className"],M=t=>{const{alignItems:s,classes:e}=t;return b({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},$,e)},U=C("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({theme:t,ownerState:s})=>r({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},s.alignItems==="flex-start"&&{marginTop:8})),k=y.exports.forwardRef(function(s,e){const o=h({props:s,name:"MuiListItemIcon"}),{className:c}=o,l=L(o,j),a=y.exports.useContext(N),m=r({},o,{alignItems:a.alignItems}),p=M(m);return u(U,r({className:v(p.root,c),ownerState:m,ref:e},l))}),H=k,W=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],B=t=>{const{classes:s,inset:e,primary:o,secondary:c,dense:l}=t;return b({root:["root",e&&"inset",l&&"dense",o&&c&&"multiline"],primary:["primary"],secondary:["secondary"]},_,s)},F=C("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[{[`& .${T.primary}`]:s.primary},{[`& .${T.secondary}`]:s.secondary},s.root,e.inset&&s.inset,e.primary&&e.secondary&&s.multiline,e.dense&&s.dense]}})(({ownerState:t})=>r({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),q=y.exports.forwardRef(function(s,e){const o=h({props:s,name:"MuiListItemText"}),{children:c,className:l,disableTypography:a=!1,inset:m=!1,primary:p,primaryTypographyProps:x,secondary:P,secondaryTypographyProps:R}=o,S=L(o,W),{dense:f}=y.exports.useContext(N);let n=p!=null?p:c,i=P;const g=r({},o,{disableTypography:a,inset:m,primary:!!n,secondary:!!i,dense:f}),I=B(g);return n!=null&&n.type!==d&&!a&&(n=u(d,r({variant:f?"body2":"body1",className:I.primary,component:x!=null&&x.variant?void 0:"span",display:"block"},x,{children:n}))),i!=null&&i.type!==d&&!a&&(i=u(d,r({variant:"body2",className:I.secondary,color:"text.secondary",display:"block"},R,{children:i}))),w(F,r({className:v(I.root,l),ownerState:g,ref:e},S,{children:[n,i]}))}),J=q;export{H as L,J as a};
