import{n as F,P as G,z as N,i as u,H as d,r as p,p as P,_ as V,h as w,f as j,j as y,q as I,w as S}from"./index.b186592b.js";import{a as $}from"./List.1f5dafa3.js";import{l as n,g as _}from"./listItemButtonClasses.0f0ff00e.js";const M=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],T=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters]},z=t=>{const{alignItems:e,classes:s,dense:a,disabled:o,disableGutters:l,divider:c,selected:f}=t,r=S({root:["root",a&&"dense",!l&&"gutters",c&&"divider",o&&"disabled",e==="flex-start"&&"alignItemsFlexStart",f&&"selected"]},_,s);return u({},s,r)},D=F(G,{shouldForwardProp:t=>N(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:T})(({theme:t,ownerState:e})=>u({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:d(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:d(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:d(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:d(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${n.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),E=p.exports.forwardRef(function(e,s){const a=P({props:e,name:"MuiListItemButton"}),{alignItems:o="center",autoFocus:l=!1,component:c="div",children:f,dense:v=!1,disableGutters:r=!1,divider:B=!1,focusVisibleClassName:O,selected:L=!1,className:k}=a,i=V(a,M),x=p.exports.useContext($),m=p.exports.useMemo(()=>({dense:v||x.dense||!1,alignItems:o,disableGutters:r}),[o,x.dense,v,r]),g=p.exports.useRef(null);w(()=>{l&&g.current&&g.current.focus()},[l]);const C=u({},a,{alignItems:o,dense:m.dense,disableGutters:r,divider:B,selected:L}),b=z(C),R=j(g,s);return y($.Provider,{value:m,children:y(D,u({ref:R,href:i.href||i.to,component:(i.href||i.to)&&c==="div"?"a":c,focusVisibleClassName:I(b.focusVisible,O),ownerState:C,className:I(b.root,k)},i,{classes:b,children:f}))})}),A=E;export{A as L};
