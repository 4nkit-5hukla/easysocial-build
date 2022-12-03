import{r as l,a as n,aa as k,j as e,ab as A,ac as F,b0 as D,ad as L,U,aj as E,a2 as r,ci as W}from"./index.286d7f97.js";import{W as M}from"./WAUsageApi.f6d611fe.js";import{A as j}from"./Form.bf7ae0d3.js";import{C as N,a as z,h as B}from"./Card.6f5b1270.js";import{M as H}from"./index.esm.6b918f21.js";import{T as I}from"./TextField.3f547d15.js";import{L as O}from"./usePickerState.0d2e367d.js";import{D as P}from"./DatePicker.bdd17cd4.js";import{T as _,a as $,b as G,c,d as t,e as R}from"./TableRow.888a3c44.js";import{L as S}from"./Link.c452b4c6.js";import"./ArrowRight.7576e371.js";import"./Card.24e39f91.js";import"./CardContent.23caf9fc.js";import"./Select.a628664b.js";import"./useFormControl.14cf7bab.js";import"./isMuiElement.1e9ba36c.js";import"./Menu.beea8aa9.js";import"./List.12557ecb.js";import"./useControlled.6e207072.js";import"./Grid.4d3f89c9.js";import"./InputAdornment.85efb26d.js";import"./MobileDatePicker.652e61c8.js";import"./Popper.d028232a.js";const K=({open:u,closeDialog:h,downloadReport:f,downloading:w,setDownloading:b})=>{const[i,d]=l.exports.useState(null);return n(k,{open:u,onClose:h,children:[e(A,{children:"Select Month"}),e(F,{sx:{pt:"20px !important"},children:e(O,{dateAdapter:H,children:e(P,{views:["year","month"],openTo:"year",label:"Year and Month",minDate:new Date("2021-01-01"),maxDate:new Date,value:i,onChange:s=>{d(s)},renderInput:({inputProps:s,...y})=>e(I,{...y,helperText:null,inputProps:{...s,...i?{value:D(i).local().format("MMM YYYY")}:{}},autoComplete:"off"})})})}),e(L,{children:e(U,{disabled:w,onClick:()=>{b(!0),f(D(i).local().format("YYYY-MM"))},children:"Download"})})]})},q="HG5K",J={Reports:q},ye=({loadingStatus:u})=>{const{setErrorMessage:h,setSuccessMessage:f}=E(),[w,b]=l.exports.useState(!1),[i,d]=l.exports.useState(!1),[s,y]=l.exports.useState(!0),[p,v]=l.exports.useState([]),x=async o=>{var m;try{const g=await M.downloadWaMonthWiseReport({month:o});if(g){const C=new Date(o),Y=window.URL.createObjectURL(new Blob([g])),a=document.createElement("a");a.href=Y,a.setAttribute("download",`SessionReport_${C.toLocaleString("en-us",{month:"short"})}_${C.getFullYear()}.pdf`),document.body.appendChild(a),a.style.display="none",a.click(),(m=a==null?void 0:a.parentNode)==null||m.removeChild(a),f("Report Downloaded")}else throw new Error("Internal Server Error")}catch(g){h(g.message)}finally{d(!1)}},T=l.exports.useRef(async()=>{try{const o=await M.getWaMonthlyReport();if(!o.success)throw Error(o.message);v(o.payload),y(!1)}catch(o){h(o.message)}});return l.exports.useEffect(()=>{T.current()},[]),n(l.exports.Fragment,{children:[e(N,{elevation:0,children:n(z,{children:[e(B,{children:u?e(r,{width:214}):"Monthly Utilization Report"}),e(_,{className:J.Reports,children:n($,{"aria-label":"Monthly Report",children:[e(G,{children:n(c,{children:[e(t,{align:"center",children:"Duration"}),n(t,{align:"center",children:["Customer",e("br",{}),"Initiated Sessions"]}),n(t,{align:"center",children:["Business",e("br",{}),"Initiated Sessions"]}),e(t,{align:"center",children:"Report"})]})}),s?n(R,{children:[n(c,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},hover:!0,children:[e(t,{align:"center",children:e(r,{width:60})}),e(t,{align:"center",children:e(r,{width:24})}),e(t,{align:"center",children:e(r,{width:24})}),e(t,{align:"center",children:e(r,{width:74})})]}),n(c,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},hover:!0,children:[e(t,{align:"center",children:e(r,{width:60})}),e(t,{align:"center",children:e(r,{width:24})}),e(t,{align:"center",children:e(r,{width:24})}),e(t,{align:"center",children:e(r,{width:74})})]}),n(c,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},hover:!0,children:[e(t,{align:"center",children:e(r,{width:60})}),e(t,{align:"center",children:e(r,{width:24})}),e(t,{align:"center",children:e(r,{width:24})}),e(t,{align:"center",children:e(r,{width:74})})]})]}):p&&p.length===0?e(R,{children:e(c,{children:e(t,{colSpan:4,align:"center",children:"No Reports Available"})})}):e(R,{children:p&&p.map((o,m)=>n(c,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},hover:!0,children:[e(t,{align:"center",children:W(o.month)}),e(t,{align:"center",children:o.cis}),e(t,{align:"center",children:o.bis}),e(t,{align:"center",children:n(S,{component:"button",underline:"none",className:"report-download",onClick:()=>x(o.month),children:[e("img",{src:"/static/images/svg/download.svg",alt:"download"}),e("span",{className:"ms-1",children:"Download"})]})})]},m))})]})}),e(j,{sx:{my:2.5},children:s?e(r,{width:180,sx:{backgroundColor:"#32C5FF80"}}):e(S,{component:"button",underline:"none",sx:{color:"#32C5FF",fontSize:16,fontWeight:600,lineHeight:1.1875},onClick:()=>d(!0),children:"Download older reports"})})]})}),e(K,{open:i,closeDialog:()=>{d(!1)},downloading:w,setDownloading:b,downloadReport:x})]})};export{ye as default};
