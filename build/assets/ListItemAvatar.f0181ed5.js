import{_ as o,r as i,e as x,c as I,j as u,g}from"./index.ca4653e7.js";import{a as p}from"./List.c558af58.js";import{g as f,a as v,s as L,c as A}from"./styled.0e1c85d3.js";function d(t){return f("MuiListItemAvatar",t)}v("MuiListItemAvatar",["root","alignItemsFlexStart"]);const C=["className"],S=t=>{const{alignItems:s,classes:e}=t;return A({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},d,e)},h=L("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>o({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),w=i.exports.forwardRef(function(s,e){const a=x({props:s,name:"MuiListItemAvatar"}),{className:n}=a,l=I(a,C),m=i.exports.useContext(p),r=o({},a,{alignItems:m.alignItems}),c=S(r);return u(h,o({className:g(c.root,n),ownerState:r,ref:e},l))}),U=w;export{U as L};
