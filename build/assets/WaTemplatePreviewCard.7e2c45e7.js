var X=Object.defineProperty;var K=(s,t,n)=>t in s?X(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var d=(s,t,n)=>(K(s,typeof t!="symbol"?t+"":t,n),n);import{a as u,j as a,ap as T,aT as j,u as Q,ax as E,ab as N,ac as H,ad as $,U as h,aa as Y,B as O,r as x,aK as S,aQ as q}from"./index.cec7120b.js";import{D as Z}from"./Drawer.ef286880.js";import{a as w}from"./WhatsApp.0df87c02.js";import{P as z,a as J}from"./Play.84bd0e9f.js";import{W as k,M as D,f as M}from"./Styles.c059562f.js";import{L as _}from"./Link.947db9d7.js";const A=()=>u("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"//www.w3.org/2000/svg",children:[a("path",{d:"M10.5378 1.11084H7.60995C7.35479 1.11084 7.14798 1.31765 7.14798 1.57281C7.14798 1.82797 7.35479 2.03478 7.60995 2.03478H9.42251L4.99274 6.46455C4.81232 6.64498 4.81232 6.93746 4.99274 7.11788C5.08298 7.20807 5.20119 7.25319 5.3194 7.25319C5.43762 7.25319 5.55583 7.20807 5.64607 7.11788L10.0758 2.68811V4.50072C10.0758 4.75588 10.2826 4.96269 10.5378 4.96269C10.793 4.96269 10.9998 4.75588 10.9998 4.50072V1.57286C10.9998 1.31765 10.793 1.11084 10.5378 1.11084Z",fill:"#32C5FF",stroke:"#32C5FF",strokeWidth:"0.5"}),a("path",{d:"M8.64816 6.53803C8.393 6.53803 8.18619 6.74484 8.18619 7V9.965H1.92394V3.70275H5.5C5.75516 3.70275 5.96197 3.49594 5.96197 3.24078C5.96197 2.98562 5.75516 2.77881 5.5 2.77881L1.46197 2.77881C1.20681 2.77881 1 2.98562 1 3.24078V10.427C1 10.6821 1.20681 10.8889 1.46197 10.8889H8.64816C8.90333 10.8889 9.11013 10.6821 9.11013 10.427V7C9.11013 6.74484 8.90333 6.53803 8.64816 6.53803Z",fill:"#32C5FF",stroke:"#32C5FF",strokeWidth:"0.5"})]});class m{}d(m,"getWaTemplateMessages",async()=>await T("/wa-templates","GET")),d(m,"getWaTemplateMessage",async t=>await T(`/wa-templates/${t}`,"GET")),d(m,"syncWaTemplateMessage",async()=>await T("/wa-templates/sync-templates","GET")),d(m,"createWaTemplateMessage",async t=>await T("/wa-templates/create-template","POST",{data:t})),d(m,"getTemplateJSON",async t=>await T(`/wa-templates/example-content?id=${t}`,"GET")),d(m,"getTemplateSampleFile",async t=>await j("/sheet/create-xlsx","POST",{data:t})),d(m,"updateWaTemplateMessage",async(t,n)=>await T(`/wa-templates/update-template-form/${t}`,"PUT",{data:n})),d(m,"updateWaTemplateComponents",async(t,n)=>await T(`/wa-templates/update/${t}`,"PUT",{data:n})),d(m,"deleteWaTemplateMessage",async t=>await T(`/wa-templates/delete/${t}`,"DELETE"));const ee="a6tA",te="Ef8H",L={ConfirmBox:ee,PromptBox:te},we=({title:s="Please Confirm",children:t,open:n,setOpen:l,onConfirm:f,positiveLabel:g="Yes",negativeLabel:W="No"})=>{const{isMobile:v}=Q();return v?u(Z,{open:n,onClose:(y,i)=>!E(i)&&l(!1),className:L.ConfirmBox,anchor:"bottom",children:[a(N,{children:s}),a(H,{children:t}),u($,{children:[a(h,{variant:"contained",onClick:()=>{l(!1),f&&f()},color:"primary",autoFocus:!0,children:g}),a(h,{variant:"contained",onClick:()=>l(!1),color:"secondary",children:W})]})]}):u(Y,{open:n,onClose:(y,i)=>!E(i)&&l(!1),className:L.ConfirmBox,children:[a(N,{children:s}),a(H,{children:t}),u($,{children:[a(h,{variant:"contained",onClick:()=>{l(!1),f&&f()},color:"primary",autoFocus:!0,children:g}),a(h,{variant:"contained",onClick:()=>l(!1),color:"secondary",children:W})]})]})},ae="n-79",re="Pyy5",se="_7T6-",ne="Whrl",oe="KXAG",ie="c6D9",ce="uQG8",le="rN3N",C={WaTPreviewCard:ae,WaTHeaderImgWrap:re,WaTHeaderCardMedia:se,WaTHeaderText:ne,WaTBodyText:oe,WaTFooterText:ie,WaTPreviewAction:ce,WhatsAppButton:le},de=({children:s})=>a("div",{className:C.WaTPreviewCard,children:s}),pe=({children:s})=>a("div",{className:C.WaTHeaderImgWrap,children:s}),me=({children:s})=>a("div",{className:C.WaTHeaderText,children:s}),ue=({children:s})=>a("div",{className:C.WaTBodyText,children:s}),Te=({children:s})=>a("div",{className:C.WaTFooterText,children:s}),he=({children:s,...t})=>a(O,{className:C.WaTPreviewAction,...t,children:s}),Fe=({components:s})=>{const t=structuredClone(s),n=x.exports.useRef(null),[l,f]=x.exports.useState(!1),[g,W]=x.exports.useState(!1),[v,y]=x.exports.useState(""),i=t.find(({type:e})=>e===w.HEADER),F=t.find(({type:e})=>e===w.BODY),P=t.find(({type:e})=>e===w.FOOTER),B=t.find(({type:e})=>e===w.BUTTONS),U=(e=>{if(e){const{example:o}=e;if(o){const{header_text:r}=o;return r||[]}else return[]}else return[]})(i),p=(e=>{if(e){const{example:o}=e;if(o){const{header_handle:r}=o;if(r&&r.length>0){const[c]=r;return c}else return""}else return""}else return""})(i),b=(e=>{if(e){const{example:o}=e;if(o){const{header_files:r}=o;if(r&&r.length>0){const[c]=r;return c}else return""}else return""}else return""})(i),G=(e=>{if(e){const{example:o}=e;if(o){const{body_text:r}=o;return r?r.length===1&&Array.isArray(r[0])?r.pop():r:[]}else return[]}else return[]})(F),I=(e=>i?e.reduce((o,r,c)=>r&&r!==""?o.replace(`{{${c+1}}}`,r):o,i.text):"")(U),R=(e=>F?e.reduce((o,r,c)=>r&&r!==""?o.replace(`{{${c+1}}}`,r):o,F.text):"")(G);return x.exports.useEffect(()=>{n.current&&(n.current.addEventListener("playing",()=>{y("playing")}),n.current.addEventListener("pause",()=>{y("")}),n.current.addEventListener("ended",()=>{y("")}),l?n.current.play():n.current.pause())},[l]),u(de,{children:[i&&i.format==="IMAGE"&&a(pe,{children:p&&p!==""&&a(S,{component:"img",alt:"header-img",image:p,sx:k})}),i&&i.format==="VIDEO"&&u(_,{underline:"none",component:"button",type:"button",onClick:()=>f(!l),onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),sx:D,children:[a(S,{component:"video",ref:n,className:"video",disablePictureInPicture:!0,sx:{...k,height:130},children:p&&p!==""&&a("source",{src:p,type:"video/mp4"})}),u(O,{position:"absolute",display:"flex",children:[v===""&&a(z,{}),g&&v==="playing"&&a(J,{})]})]}),i&&i.format==="DOCUMENT"&&a(_,{underline:"none",className:"media-wrapper doc",href:p,target:"_blank",sx:{...D,backgroundColor:"#F5F5F5",color:"#A1AEB4",fontSize:90,fontWeight:900,lineHeight:"96px"},children:p&&p!==""?b.split(".").pop().slice(0,4).toUpperCase():""}),i&&i.format==="TEXT"&&a(me,{children:I}),a(ue,{children:q(R)}),P&&P.text!==""&&a(Te,{children:P.text}),B&&B.buttons.length>0&&a(he,{children:B.buttons.map((e,o)=>a(x.exports.Fragment,{children:e.type==="QUICK_REPLY"?a(h,{variant:"outlined",type:"button",sx:{...M,color:"#767676",minWidth:"calc(50% - 8px)"},children:e.text}):e.type==="PHONE_NUMBER"?a(h,{href:`tel:${e.phone_number}`,variant:"outlined",sx:{...M,color:"#32C5FF",minWidth:"100%"},children:e.text}):u(h,{href:e.example?e.example.reduce((r,c,V)=>c&&c!==""?r.replace(`{{${V+1}}}`,c):r,e.url):"",variant:"outlined",target:"_blank",rel:"noreferrer",sx:{...M,color:"#32C5FF",minWidth:"100%"},children:[a(A,{}),e.text]})},o))})]})};export{we as C,m as W,Fe as a};
