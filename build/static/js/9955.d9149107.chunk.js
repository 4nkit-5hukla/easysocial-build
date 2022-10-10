"use strict";(self.webpackChunkeasysocial=self.webpackChunkeasysocial||[]).push([[9955],{9955:function(e,t,a){a.d(t,{Z:function(){return x}});var o=a(4942),c=a(63366),n=a(87462),r=a(72791),i=a(28182),s=a(94419),d=a(12065),l=a(14036),u=a(97278),h=a(93736),p=a(66934),v=a(21217);function m(e){return(0,v.Z)("MuiSwitch",e)}var g=(0,a(75878).Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),f=a(80184),b=["className","color","edge","size","sx"],Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat((0,l.Z)(a.edge))],t["size".concat((0,l.Z)(a.size))]]}})((function(e){var t,a=e.ownerState;return(0,n.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},(0,o.Z)(t,"& .".concat(g.thumb),{width:16,height:16}),(0,o.Z)(t,"& .".concat(g.switchBase),(0,o.Z)({padding:4},"&.".concat(g.checked),{transform:"translateX(16px)"})),t))})),k=(0,p.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,(0,o.Z)({},"& .".concat(g.input),t.input),"default"!==a.color&&t["color".concat((0,l.Z)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:"".concat("light"===a.palette.mode?a.palette.common.white:a.palette.grey[300]),transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},(0,o.Z)(t,"&.".concat(g.checked),{transform:"translateX(20px)"}),(0,o.Z)(t,"&.".concat(g.disabled),{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:"".concat("light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600])}),(0,o.Z)(t,"&.".concat(g.checked," + .").concat(g.track),{opacity:.5}),(0,o.Z)(t,"&.".concat(g.disabled," + .").concat(g.track),{opacity:a.vars?a.vars.opacity.switchTrackDisabled:"".concat("light"===a.palette.mode?.12:.2)}),(0,o.Z)(t,"& .".concat(g.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,c=e.ownerState;return(0,n.Z)({"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.activeChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==c.color&&(t={},(0,o.Z)(t,"&.".concat(g.checked),(0,o.Z)({color:(a.vars||a).palette[c.color].main,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[c.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(a.palette[c.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(g.disabled),{color:a.vars?a.vars.palette.Switch["".concat(c.color,"DisabledColor")]:"".concat("light"===a.palette.mode?(0,d.$n)(a.palette[c.color].main,.62):(0,d._j)(a.palette[c.color].main,.55))})),(0,o.Z)(t,"&.".concat(g.checked," + .").concat(g.track),{backgroundColor:(a.vars||a).palette[c.color].main}),t))})),w=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),S=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),x=r.forwardRef((function(e,t){var a=(0,h.Z)({props:e,name:"MuiSwitch"}),o=a.className,r=a.color,d=void 0===r?"primary":r,u=a.edge,p=void 0!==u&&u,v=a.size,g=void 0===v?"medium":v,x=a.sx,y=(0,c.Z)(a,b),C=(0,n.Z)({},a,{color:d,edge:p,size:g}),R=function(e){var t=e.classes,a=e.edge,o=e.size,c=e.color,r=e.checked,i=e.disabled,d={root:["root",a&&"edge".concat((0,l.Z)(a)),"size".concat((0,l.Z)(o))],switchBase:["switchBase","color".concat((0,l.Z)(c)),r&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,s.Z)(d,m,t);return(0,n.Z)({},t,u)}(C),z=(0,f.jsx)(S,{className:R.thumb,ownerState:C});return(0,f.jsxs)(Z,{className:(0,i.Z)(R.root,o),sx:x,ownerState:C,children:[(0,f.jsx)(k,(0,n.Z)({type:"checkbox",icon:z,checkedIcon:z,ref:t,ownerState:C},y,{classes:(0,n.Z)({},R,{root:R.switchBase})})),(0,f.jsx)(w,{className:R.track,ownerState:C})]})}))},97278:function(e,t,a){a.d(t,{Z:function(){return k}});var o=a(29439),c=a(63366),n=a(87462),r=a(72791),i=a(28182),s=a(94419),d=a(14036),l=a(66934),u=a(98278),h=a(52930),p=a(95080),v=a(21217);function m(e){return(0,v.Z)("PrivateSwitchBase",e)}(0,a(75878).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=a(80184),f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,l.ZP)(p.Z)((function(e){var t=e.ownerState;return(0,n.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),Z=(0,l.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),k=r.forwardRef((function(e,t){var a=e.autoFocus,r=e.checked,l=e.checkedIcon,p=e.className,v=e.defaultChecked,k=e.disabled,w=e.disableFocusRipple,S=void 0!==w&&w,x=e.edge,y=void 0!==x&&x,C=e.icon,R=e.id,z=e.inputProps,B=e.inputRef,F=e.name,P=e.onBlur,I=e.onChange,N=e.onFocus,j=e.readOnly,M=e.required,O=e.tabIndex,q=e.type,T=e.value,D=(0,c.Z)(e,f),E=(0,u.Z)({controlled:r,default:Boolean(v),name:"SwitchBase",state:"checked"}),A=(0,o.Z)(E,2),L=A[0],X=A[1],$=(0,h.Z)(),_=k;$&&"undefined"===typeof _&&(_=$.disabled);var G="checkbox"===q||"radio"===q,H=(0,n.Z)({},e,{checked:L,disabled:_,disableFocusRipple:S,edge:y}),J=function(e){var t=e.classes,a=e.checked,o=e.disabled,c=e.edge,n={root:["root",a&&"checked",o&&"disabled",c&&"edge".concat((0,d.Z)(c))],input:["input"]};return(0,s.Z)(n,m,t)}(H);return(0,g.jsxs)(b,(0,n.Z)({component:"span",className:(0,i.Z)(J.root,p),centerRipple:!0,focusRipple:!S,disabled:_,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),$&&$.onFocus&&$.onFocus(e)},onBlur:function(e){P&&P(e),$&&$.onBlur&&$.onBlur(e)},ownerState:H,ref:t},D,{children:[(0,g.jsx)(Z,(0,n.Z)({autoFocus:a,checked:r,defaultChecked:v,className:J.input,disabled:_,id:G&&R,name:F,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;X(t),I&&I(e,t)}},readOnly:j,ref:B,required:M,ownerState:H,tabIndex:O,type:q},"checkbox"===q&&void 0===T?{}:{value:T},z)),L?l:C]}))}))}}]);
//# sourceMappingURL=9955.d9149107.chunk.js.map