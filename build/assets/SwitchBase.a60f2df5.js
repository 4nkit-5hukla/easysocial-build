import{k as $,i as D,s as x,D as W,g as d,r as A,_ as G,a as H,j as J,m as K,p as M,q as Q}from"./index.b6939ac4.js";import{u as T}from"./useFormControl.d77c63c8.js";import{u as V}from"./useControlled.4ac3feb9.js";function X(e){return $("PrivateSwitchBase",e)}D("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:a,checked:i,disabled:l,edge:o}=e,r={root:["root",i&&"checked",l&&"disabled",o&&`edge${M(o)}`],input:["input"]};return Q(r,X,a)},ee=x(W)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=x("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=A.exports.forwardRef(function(a,i){const{autoFocus:l,checked:o,checkedIcon:r,className:F,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:w=!1,icon:S,id:R,inputProps:I,inputRef:P,name:j,onBlur:f,onChange:m,onFocus:g,readOnly:q,required:z,tabIndex:N,type:c,value:b}=a,U=G(a,Y),[k,_]=V({controlled:o,default:Boolean(h),name:"SwitchBase",state:"checked"}),t=T(),v=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},L=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;_(C),m&&m(s,C)};let n=y;t&&typeof n>"u"&&(n=t.disabled);const E=c==="checkbox"||c==="radio",u=d({},a,{checked:k,disabled:n,disableFocusRipple:p,edge:w}),B=Z(u);return H(ee,d({component:"span",className:K(B.root,F),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:v,onBlur:L,ownerState:u,ref:i},U,{children:[J(se,d({autoFocus:l,checked:o,defaultChecked:h,className:B.input,disabled:n,id:E&&R,name:j,onChange:O,readOnly:q,ref:P,required:z,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&b===void 0?{}:{value:b},I)),k?r:S]}))}),ce=te;export{ce as S};