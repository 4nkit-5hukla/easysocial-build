import{s as I,g as a,r,l as x,_ as p,j as f,m as g,q as u}from"./index.f42b544b.js";import{g as L}from"./listItemTextClasses.59466d3b.js";import{a as d}from"./List.b6176302.js";const S=["className"],v=s=>{const{alignItems:t,classes:e}=s;return u({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},L,e)},C=I("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>a({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),h=r.exports.forwardRef(function(t,e){const o=x({props:t,name:"MuiListItemIcon"}),{className:i}=o,c=p(o,S),l=r.exports.useContext(d),n=a({},o,{alignItems:l.alignItems}),m=v(n);return f(C,a({className:g(m.root,i),ownerState:n,ref:e},c))}),j=h;export{j as L};
