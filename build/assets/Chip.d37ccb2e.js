import{D as H,j as R,g as q,e as G,s as S,y as e,k as s,_ as p,r as u,l as J,c as Q,o as X,f as M,p as g,a as Y,q as Z}from"./index.0f332f5b.js";const h=H(R("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function w(a){return G("MuiChip",a)}const aa=q("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),l=aa,oa=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],la=a=>{const{classes:o,disabled:t,size:r,color:c,onDelete:b,clickable:n,variant:d}=a,f={root:["root",d,t&&"disabled",`size${e(r)}`,`color${e(c)}`,n&&"clickable",n&&`clickableColor${e(c)}`,b&&"deletable",b&&`deletableColor${e(c)}`,`${d}${e(c)}`],label:["label",`label${e(r)}`],avatar:["avatar",`avatar${e(r)}`,`avatarColor${e(c)}`],icon:["icon",`icon${e(r)}`,`iconColor${e(c)}`],deleteIcon:["deleteIcon",`deleteIcon${e(r)}`,`deleteIconColor${e(c)}`,`deleteIcon${e(d)}Color${e(c)}`]};return Z(f,w,o)},ea=S("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:t}=a,{color:r,clickable:c,onDelete:b,size:n,variant:d}=t;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${e(n)}`]},{[`& .${l.avatar}`]:o[`avatarColor${e(r)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${e(n)}`]},{[`& .${l.icon}`]:o[`iconColor${e(r)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${e(n)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${e(r)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIcon${e(d)}Color${e(r)}`]},o.root,o[`size${e(n)}`],o[`color${e(r)}`],c&&o.clickable,c&&r!=="default"&&o[`clickableColor${e(r)})`],b&&o.deletable,b&&r!=="default"&&o[`deletableColor${e(r)}`],o[d],o[`${d}${e(r)}`]]}})(({theme:a,ownerState:o})=>{const t=s(a.palette.text.primary,.26),r=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return p({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:r,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:p({color:a.vars?a.vars.palette.Chip.defaultIconColor:r,marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.color!=="default"&&{color:"inherit"}),[`& .${l.deleteIcon}`]:p({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:t,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:s(t,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:s(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.focusOpacity}))`:s(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>p({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.hoverOpacity}))`:s(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.focusOpacity}))`:s(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>p({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:s(a.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:s(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:s(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:s(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),ra=S("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:t}=a,{size:r}=t;return[o.label,o[`label${e(r)}`]]}})(({ownerState:a})=>p({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.size==="small"&&{paddingLeft:8,paddingRight:8}));function K(a){return a.key==="Backspace"||a.key==="Delete"}const ca=u.exports.forwardRef(function(o,t){const r=J({props:o,name:"MuiChip"}),{avatar:c,className:b,clickable:n,color:d="default",component:f,deleteIcon:$,disabled:O=!1,icon:y,label:E,onClick:P,onDelete:v,onKeyDown:D,onKeyUp:L,size:U="medium",variant:j="filled"}=r,F=Q(r,oa),k=u.exports.useRef(null),B=X(k,t),m=i=>{i.stopPropagation(),v&&v(i)},W=i=>{i.currentTarget===i.target&&K(i)&&i.preventDefault(),D&&D(i)},_=i=>{i.currentTarget===i.target&&(v&&K(i)?v(i):i.key==="Escape"&&k.current&&k.current.blur()),L&&L(i)},x=n!==!1&&P?!0:n,I=x||v?M:f||"div",z=p({},r,{component:I,disabled:O,size:U,color:d,onDelete:!!v,clickable:x,variant:j}),C=la(z),A=I===M?p({component:f||"div",focusVisibleClassName:C.focusVisible},v&&{disableRipple:!0}):{};let T=null;v&&(T=$&&u.exports.isValidElement($)?u.exports.cloneElement($,{className:g($.props.className,C.deleteIcon),onClick:m}):R(h,{className:g(C.deleteIcon),onClick:m}));let N=null;c&&u.exports.isValidElement(c)&&(N=u.exports.cloneElement(c,{className:g(C.avatar,c.props.className)}));let V=null;return y&&u.exports.isValidElement(y)&&(V=u.exports.cloneElement(y,{className:g(C.icon,y.props.className)})),Y(ea,p({as:I,className:g(C.root,b),disabled:x&&O?!0:void 0,onClick:P,onKeyDown:W,onKeyUp:_,ref:B,ownerState:z},A,F,{children:[N||V,R(ra,{className:g(C.label),ownerState:z,children:E}),T]}))}),ta=ca;export{ta as C};