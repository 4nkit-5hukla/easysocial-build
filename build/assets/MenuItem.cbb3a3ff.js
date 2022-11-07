import{l as N,m as T,n as F,P as G,z as L,i as n,H as c,r as b,p as j,_ as H,h as S,f as U,j as y,q as C,w as _}from"./index.dca5aa37.js";import{a as x}from"./List.971b372d.js";import{c as $,d as I,l as M}from"./listItemTextClasses.c75d2cb6.js";function z(e){return T("MuiMenuItem",e)}const D=N("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),o=D,E=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(e,s)=>{const{ownerState:a}=e;return[s.root,a.dense&&s.dense,a.divider&&s.divider,!a.disableGutters&&s.gutters]},q=e=>{const{disabled:s,dense:a,divider:t,disableGutters:i,selected:d,classes:r}=e,l=_({root:["root",a&&"dense",s&&"disabled",!i&&"gutters",t&&"divider",d&&"selected"]},z,r);return n({},r,l)},A=F(G,{shouldForwardProp:e=>L(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:s})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${o.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${o.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${o.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${o.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${I.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${I.inset}`]:{marginLeft:52},[`& .${M.root}`]:{marginTop:0,marginBottom:0},[`& .${M.inset}`]:{paddingLeft:36},[`& .${$.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${$.root} svg`]:{fontSize:"1.25rem"}}))),J=b.exports.forwardRef(function(s,a){const t=j({props:s,name:"MuiMenuItem"}),{autoFocus:i=!1,component:d="li",dense:r=!1,divider:f=!1,disableGutters:l=!1,focusVisibleClassName:O,role:k="menuitem",tabIndex:g,className:R}=t,B=H(t,E),P=b.exports.useContext(x),v={dense:r||P.dense||!1,disableGutters:l},p=b.exports.useRef(null);S(()=>{i&&p.current&&p.current.focus()},[i]);const V=n({},t,{dense:v.dense,divider:f,disableGutters:l}),u=q(t),w=U(p,a);let m;return t.disabled||(m=g!==void 0?g:-1),y(x.Provider,{value:v,children:y(A,n({ref:w,role:k,tabIndex:m,component:d,focusVisibleClassName:C(u.focusVisible,O),className:C(u.root,R)},B,{ownerState:V,classes:u}))})}),Y=J;export{Y as M};