import{l as U,m as _,n as R,i as o,r as m,p as j,_ as P,j as y,q as I,w as E,H as x,h as X,f as Z,a as B,t as F,P as tt}from"./index.9a4b9227.js";import{a as L}from"./List.671cc99b.js";import{l as et}from"./listItemButtonClasses.b0b5b044.js";import{i as st}from"./isMuiElement.1252cd52.js";function ot(t){return _("MuiListItem",t)}const at=U("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),u=at;function nt(t){return _("MuiListItemSecondaryAction",t)}U("MuiListItemSecondaryAction",["root","disableGutters"]);const it=["className"],rt=t=>{const{disableGutters:e,classes:s}=t;return E({root:["root",e&&"disableGutters"]},nt,s)},ct=R("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),T=m.exports.forwardRef(function(e,s){const a=j({props:e,name:"MuiListItemSecondaryAction"}),{className:c}=a,n=P(a,it),l=m.exports.useContext(L),d=o({},a,{disableGutters:l.disableGutters}),b=rt(d);return y(ct,o({className:I(b.root,c),ownerState:d,ref:s},n))});T.muiName="ListItemSecondaryAction";const lt=T,dt=["className"],pt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],ut=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},mt=t=>{const{alignItems:e,button:s,classes:a,dense:c,disabled:n,disableGutters:l,disablePadding:d,divider:b,hasSecondaryAction:f,selected:A}=t;return E({root:["root",c&&"dense",!l&&"gutters",!d&&"padding",b&&"divider",n&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",A&&"selected"],container:["container"]},ot,a)},bt=R("div",{name:"MuiListItem",slot:"Root",overridesResolver:ut})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${et.root}`]:{paddingRight:48}},{[`&.${u.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${u.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${u.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),ft=R("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),gt=m.exports.forwardRef(function(e,s){const a=j({props:e,name:"MuiListItem"}),{alignItems:c="center",autoFocus:n=!1,button:l=!1,children:d,className:b,component:f,components:A={},componentsProps:N={},ContainerComponent:G="li",ContainerProps:{className:D}={},dense:H=!1,disabled:O=!1,disableGutters:h=!1,disablePadding:q=!1,divider:z=!1,focusVisibleClassName:W,secondaryAction:k,selected:Y=!1}=a,J=P(a.ContainerProps,dt),K=P(a,pt),Q=m.exports.useContext(L),S={dense:H||Q.dense||!1,alignItems:c,disableGutters:h},$=m.exports.useRef(null);X(()=>{n&&$.current&&$.current.focus()},[n]);const p=m.exports.Children.toArray(d),M=p.length&&st(p[p.length-1],["ListItemSecondaryAction"]),g=o({},a,{alignItems:c,autoFocus:n,button:l,dense:S.dense,disabled:O,disableGutters:h,disablePadding:q,divider:z,hasSecondaryAction:M,selected:Y}),w=mt(g),V=Z($,s),C=A.Root||bt,v=N.root||{},i=o({className:I(w.root,v.className,b),disabled:O},K);let r=f||"li";return l&&(i.component=f||"div",i.focusVisibleClassName=I(u.focusVisible,W),r=tt),M?(r=!i.component&&!f?"div":r,G==="li"&&(r==="li"?r="div":i.component==="li"&&(i.component="div")),y(L.Provider,{value:S,children:B(ft,o({as:G,className:I(w.container,D),ref:V,ownerState:g},J,{children:[y(C,o({},v,!F(C)&&{as:r,ownerState:o({},g,v.ownerState)},i,{children:p})),p.pop()]}))})):y(L.Provider,{value:S,children:B(C,o({},v,{as:r,ref:V,ownerState:g},!F(C)&&{ownerState:o({},g,v.ownerState)},i,{children:[p,k&&y(lt,{children:k})]}))})}),It=gt;export{It as L};
