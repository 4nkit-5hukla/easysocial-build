import{i as _,k as j,s as M,p as h,g as p,r as C,l as S,_ as U,T as P,j as w,m as y,a as D,q as E}from"./index.f4b1475f.js";import{f as W}from"./Select.be951174.js";import{u as k}from"./useFormControl.75866ec7.js";function q(o){return j("MuiFormControlLabel",o)}const z=_("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),c=z,A=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],B=o=>{const{classes:e,disabled:t,labelPlacement:s,error:l}=o,m={root:["root",t&&"disabled",`labelPlacement${h(s)}`,l&&"error"],label:["label",t&&"disabled"]};return E(m,q,e)},H=M("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${c.label}`]:e.label},e.root,e[`labelPlacement${h(t.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>p({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${c.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${c.label}`]:{[`&.${c.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),I=C.exports.forwardRef(function(e,t){var s;const l=S({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:L={},control:n,disabled:x,disableTypography:F,label:v,labelPlacement:$="end",slotProps:R={}}=l,T=U(l,A),d=k();let a=x;typeof a>"u"&&typeof n.props.disabled<"u"&&(a=n.props.disabled),typeof a>"u"&&d&&(a=d.disabled);const f={disabled:a};["checked","name","onChange","value","inputRef"].forEach(i=>{typeof n.props[i]>"u"&&typeof l[i]<"u"&&(f[i]=l[i])});const N=W({props:l,muiFormControl:d,states:["error"]}),u=p({},l,{disabled:a,labelPlacement:$,error:N.error}),g=B(u),b=(s=R.typography)!=null?s:L.typography;let r=v;return r!=null&&r.type!==P&&!F&&(r=w(P,p({component:"span"},b,{className:y(g.label,b==null?void 0:b.className),children:r}))),D(H,p({className:y(g.root,m),ownerState:u,ref:t},T,{children:[C.exports.cloneElement(n,f),r]}))}),O=I;export{O as F};