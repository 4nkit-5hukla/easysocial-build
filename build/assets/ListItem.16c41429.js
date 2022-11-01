import{_ as o,r as m,e as U,c as P,j as y,g as I,x,a as w}from"./index.ca4653e7.js";import{a as _,g as j,s as R,c as E}from"./styled.0e1c85d3.js";import{a as L}from"./List.c558af58.js";import{l as X}from"./listItemButtonClasses.39d1e949.js";import{u as Z}from"./useEnhancedEffect.b8f5feb9.js";import{i as tt}from"./isMuiElement.c37f6e76.js";import{i as F}from"./Typography.a45e4cf2.js";import{u as et,B as st}from"./ButtonBase.4773acc8.js";function ot(t){return j("MuiListItem",t)}const at=_("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),u=at;function nt(t){return j("MuiListItemSecondaryAction",t)}_("MuiListItemSecondaryAction",["root","disableGutters"]);const it=["className"],rt=t=>{const{disableGutters:e,classes:s}=t;return E({root:["root",e&&"disableGutters"]},nt,s)},ct=R("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),T=m.exports.forwardRef(function(e,s){const a=U({props:e,name:"MuiListItemSecondaryAction"}),{className:c}=a,n=P(a,it),l=m.exports.useContext(L),d=o({},a,{disableGutters:l.disableGutters}),f=rt(d);return y(ct,o({className:I(f.root,c),ownerState:d,ref:s},n))});T.muiName="ListItemSecondaryAction";const lt=T,dt=["className"],pt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],ut=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},mt=t=>{const{alignItems:e,button:s,classes:a,dense:c,disabled:n,disableGutters:l,disablePadding:d,divider:f,hasSecondaryAction:b,selected:A}=t;return E({root:["root",c&&"dense",!l&&"gutters",!d&&"padding",f&&"divider",n&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",b&&"secondaryAction",A&&"selected"],container:["container"]},ot,a)},ft=R("div",{name:"MuiListItem",slot:"Root",overridesResolver:ut})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${X.root}`]:{paddingRight:48}},{[`&.${u.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${u.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${u.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),bt=R("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),gt=m.exports.forwardRef(function(e,s){const a=U({props:e,name:"MuiListItem"}),{alignItems:c="center",autoFocus:n=!1,button:l=!1,children:d,className:f,component:b,components:A={},componentsProps:N={},ContainerComponent:G="li",ContainerProps:{className:D}={},dense:z=!1,disabled:O=!1,disableGutters:h=!1,disablePadding:H=!1,divider:W=!1,focusVisibleClassName:Y,secondaryAction:k,selected:q=!1}=a,J=P(a.ContainerProps,dt),K=P(a,pt),Q=m.exports.useContext(L),S={dense:z||Q.dense||!1,alignItems:c,disableGutters:h},$=m.exports.useRef(null);Z(()=>{n&&$.current&&$.current.focus()},[n]);const p=m.exports.Children.toArray(d),M=p.length&&tt(p[p.length-1],["ListItemSecondaryAction"]),g=o({},a,{alignItems:c,autoFocus:n,button:l,dense:S.dense,disabled:O,disableGutters:h,disablePadding:H,divider:W,hasSecondaryAction:M,selected:q}),B=mt(g),V=et($,s),C=A.Root||ft,v=N.root||{},i=o({className:I(B.root,v.className,f),disabled:O},K);let r=b||"li";return l&&(i.component=b||"div",i.focusVisibleClassName=I(u.focusVisible,Y),r=st),M?(r=!i.component&&!b?"div":r,G==="li"&&(r==="li"?r="div":i.component==="li"&&(i.component="div")),y(L.Provider,{value:S,children:w(bt,o({as:G,className:I(B.container,D),ref:V,ownerState:g},J,{children:[y(C,o({},v,!F(C)&&{as:r,ownerState:o({},g,v.ownerState)},i,{children:p})),p.pop()]}))})):y(L.Provider,{value:S,children:w(C,o({},v,{as:r,ref:V,ownerState:g},!F(C)&&{ownerState:o({},g,v.ownerState)},i,{children:[p,k&&y(lt,{children:k})]}))})}),$t=gt;export{$t as L};
