import{k as G,i as N,s as F,Q as X,g as p,l as _,r as a,d as w,_ as M,j as P,bw as q,a as K,q as Y,af as J,z as b,bx as Z}from"./index.6650ed15.js";import{u as ee,d as oe,D as te,M as ne}from"./MobileDatePicker.1e10395a.js";import{i as re,W as se,k as ce,g as ae,K as pe,C as ie}from"./usePickerState.cfeb5b05.js";import{P as ue}from"./Popper.780e2812.js";import{G as le}from"./Menu.813c3834.js";function de(o){return G("MuiPickersPopper",o)}N("MuiPickersPopper",["root","paper"]);const Pe=["onClick","onTouchStart"],fe=o=>{const{classes:t}=o;return Y({root:["root"],paper:["paper"]},de,t)},me=F(ue,{name:"MuiPickersPopper",slot:"Root",overridesResolver:(o,t)=>t.root})(({theme:o})=>({zIndex:o.zIndex.modal})),ke=F(X,{name:"MuiPickersPopper",slot:"Paper",overridesResolver:(o,t)=>t.paper})(({ownerState:o})=>p({transformOrigin:"top center",outline:0},o.placement==="top"&&{transformOrigin:"bottom center"}));function Ce(o,t){return t.documentElement.clientWidth<o.clientX||t.documentElement.clientHeight<o.clientY}function he(o,t){const r=a.exports.useRef(!1),n=a.exports.useRef(!1),s=a.exports.useRef(null),l=a.exports.useRef(!1);a.exports.useEffect(()=>{if(!o)return;function e(){l.current=!0}return document.addEventListener("mousedown",e,!0),document.addEventListener("touchstart",e,!0),()=>{document.removeEventListener("mousedown",e,!0),document.removeEventListener("touchstart",e,!0),l.current=!1}},[o]);const c=J(e=>{if(!l.current)return;const d=n.current;n.current=!1;const k=b(s.current);if(!s.current||"clientX"in e&&Ce(e,k))return;if(r.current){r.current=!1;return}let f;e.composedPath?f=e.composedPath().indexOf(s.current)>-1:f=!k.documentElement.contains(e.target)||s.current.contains(e.target),!f&&!d&&t(e)}),i=()=>{n.current=!0};return a.exports.useEffect(()=>{if(o){const e=b(s.current),d=()=>{r.current=!0};return e.addEventListener("touchstart",c),e.addEventListener("touchmove",d),()=>{e.removeEventListener("touchstart",c),e.removeEventListener("touchmove",d)}}},[o,c]),a.exports.useEffect(()=>{if(o){const e=b(s.current);return e.addEventListener("click",c),()=>{e.removeEventListener("click",c),n.current=!1}}},[o,c]),[s,i,i]}function De(o){var t;const r=_({props:o,name:"MuiPickersPopper"}),{anchorEl:n,children:s,containerRef:l=null,onBlur:c,onClose:i,onClear:e,onAccept:d,onCancel:k,onSetToday:f,open:u,PopperProps:C,role:m,TransitionComponent:h=le,TrapFocusProps:v,PaperProps:g={},components:R,componentsProps:y}=r;a.exports.useEffect(()=>{function D(x){u&&(x.key==="Escape"||x.key==="Esc")&&i()}return document.addEventListener("keydown",D),()=>{document.removeEventListener("keydown",D)}},[i,u]);const E=a.exports.useRef(null);a.exports.useEffect(()=>{m!=="tooltip"&&(u?E.current=document.activeElement:E.current&&E.current instanceof HTMLElement&&setTimeout(()=>{E.current instanceof HTMLElement&&E.current.focus()}))},[u,m]);const[B,O,W]=he(u,c!=null?c:i),j=a.exports.useRef(null),z=w(j,l),Q=w(z,B),L=r,A=fe(L),{onClick:S,onTouchStart:I}=g,U=M(g,Pe),H=D=>{D.key==="Escape"&&(D.stopPropagation(),i())},V=(t=R==null?void 0:R.ActionBar)!=null?t:re,$=(R==null?void 0:R.PaperContent)||a.exports.Fragment;return P(me,p({transition:!0,role:m,open:u,anchorEl:n,onKeyDown:H,className:A.root},C,{children:({TransitionProps:D,placement:x})=>P(q,p({open:u,disableAutoFocus:!0,disableRestoreFocus:!0,disableEnforceFocus:m==="tooltip",isEnabled:()=>!0},v,{children:P(h,p({},D,{children:P(ke,p({tabIndex:-1,elevation:8,ref:Q,onClick:T=>{O(T),S&&S(T)},onTouchStart:T=>{W(T),I&&I(T)},ownerState:p({},L,{placement:x}),className:A.paper},U,{children:K($,p({},y==null?void 0:y.paperContent,{children:[s,P(V,p({onAccept:d,onClear:e,onCancel:k,onSetToday:f,actions:[]},y==null?void 0:y.actionBar))]}))}))}))}))}))}function Ee(o){const{children:t,DateInputProps:r,KeyboardDateInputComponent:n,onClear:s,onDismiss:l,onCancel:c,onAccept:i,onSetToday:e,open:d,PopperProps:k,PaperProps:f,TransitionComponent:u,components:C,componentsProps:m}=o,h=a.exports.useRef(null),v=w(r.inputRef,h);return K(se.Provider,{value:"desktop",children:[P(n,p({},r,{inputRef:v})),P(De,{role:"dialog",open:d,anchorEl:h.current,TransitionComponent:u,PopperProps:k,PaperProps:f,onClose:l,onCancel:c,onClear:s,onAccept:i,onSetToday:e,components:C,componentsProps:m,children:t})]})}const Te=["onChange","PopperProps","PaperProps","ToolbarComponent","TransitionComponent","value","components","componentsProps"],Re=a.exports.forwardRef(function(t,r){const n=ee(t,"MuiDesktopDatePicker"),s=ce(n)!==null,{pickerProps:l,inputProps:c,wrapperProps:i}=ae(n,oe),{PopperProps:e,PaperProps:d,ToolbarComponent:k=te,TransitionComponent:f,components:u,componentsProps:C}=n,m=M(n,Te),h=p({},c,m,{components:u,componentsProps:C,ref:r,validationError:s});return P(Ee,p({},i,{DateInputProps:h,KeyboardDateInputComponent:pe,PopperProps:e,PaperProps:d,TransitionComponent:f,components:u,componentsProps:C,children:P(ie,p({},l,{autoFocus:!0,toolbarTitle:n.label||n.toolbarTitle,ToolbarComponent:k,DateInputProps:h,components:u,componentsProps:C},m))}))}),ye=["desktopModeMediaQuery","DialogProps","PopperProps","TransitionComponent"],ge=a.exports.forwardRef(function(t,r){const n=_({props:t,name:"MuiDatePicker"}),{desktopModeMediaQuery:s="@media (pointer: fine)",DialogProps:l,PopperProps:c,TransitionComponent:i}=n,e=M(n,ye);return Z(s,{defaultMatches:!0})?P(Re,p({ref:r,PopperProps:c,TransitionComponent:i},e)):P(ne,p({ref:r,DialogProps:l},e))});export{ge as D};