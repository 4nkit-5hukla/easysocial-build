import{e as x,g as I,s as u,_ as o,r as n,l as p,c as g,j as v,p as L,q as f}from"./index.0f332f5b.js";import{a as A}from"./List.b0c9e76e.js";function d(t){return x("MuiListItemAvatar",t)}I("MuiListItemAvatar",["root","alignItemsFlexStart"]);const C=["className"],S=t=>{const{alignItems:s,classes:e}=t;return f({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},d,e)},h=u("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>o({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),w=n.exports.forwardRef(function(s,e){const a=p({props:s,name:"MuiListItemAvatar"}),{className:i}=a,l=g(a,C),m=n.exports.useContext(A),r=o({},a,{alignItems:m.alignItems}),c=S(r);return v(h,o({className:L(c.root,i),ownerState:r,ref:e},l))}),R=w;export{R as L};