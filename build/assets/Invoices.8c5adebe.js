import{u as R,Z as g,r as t,a as n,j as r,c9 as m,as as X,aV as _,ca as k,W as F}from"./index.be83498f.js";import{B as H}from"./BizParticipantsProvider.23575c9f.js";import{A as p}from"./AllPaymentsApi.a8858557.js";import{g as Y,I as P,T as j}from"./Tags.14afa6dc.js";import{C as L,I as W,a as $,b as z,T as G,c as U,d as V,O as y}from"./Styles.623f0960.js";import{S as Z}from"./ServiceExpiryAlert.444bdfd2.js";import{M as q,a as J,D as K}from"./DeskHeader.9e836c6c.js";import{C as Q}from"./Card.095d38fe.js";import{C as ee}from"./CardContent.52d68517.js";import{T as re,a as te,b as oe,c as I,d as s,e as se}from"./TableRow.bab20141.js";import{L as ae}from"./Link.c8642aac.js";import"./withStyles.5199bd64.js";import"./ListItem.f4e4c30f.js";import"./List.52405447.js";import"./listItemButtonClasses.f171b0ff.js";import"./isMuiElement.06135e34.js";import"./styled.b1d02db7.js";import"./LeftArrow.9ba8f037.js";import"./Search.e8235d91.js";import"./Clear.35265845.js";import"./RangePopUp.e3ebbd69.js";import"./index.eb4aa1c1.js";import"./TextField.966cb2e6.js";import"./Select.10d84ef4.js";import"./useFormControl.62e75b61.js";import"./Menu.9e38a63f.js";import"./useControlled.0fd5f443.js";import"./usePickerState.78039cc2.js";import"./Grid.bf78bcfb.js";import"./InputAdornment.2641cb81.js";import"./StaticDateRangePicker.98db8f9a.js";import"./PickersToolbarButton.721eb14e.js";const ne=()=>{const{isMobile:h,isTablet:D}=R(),{showSnack:u}=g(),{setErrorMessage:v,setSuccessMessage:T}=g(),[f,E]=t.exports.useState([]),[x,S]=t.exports.useState(""),[b,N]=t.exports.useState(0),[l,w]=t.exports.useState(new Date(new Date().getFullYear(),0,1)),[d,C]=t.exports.useState(new Date(new Date().getFullYear(),11,31)),B=t.exports.useRef(async(e,i,c)=>{e&&e.setHours(0,0,0,0),i&&i.setHours(23,59,59,999);const o=await p.getAllInvoices(e,i,c);if(!o.success)return u(o.message,"error");E(o.payload)});t.exports.useEffect(()=>{B.current(l,d,x)},[l,d,x]);const M=t.exports.useRef(async()=>{const e=await p.getExpiryBusinessCount();if(!e.success)return u(e.message,"error");N(e.payload)});t.exports.useEffect(()=>{M.current()},[]);const O=async(e,i)=>{var c;try{const o=await p.downloadInvoice(e);if(o){const A=window.URL.createObjectURL(new Blob([o])),a=document.createElement("a");a.href=A,a.setAttribute("download",`${i}.pdf`),document.body.appendChild(a),a.style.display="none",a.click(),(c=a==null?void 0:a.parentNode)==null||c.removeChild(a),T("Report Downloaded")}else throw new Error("Internal Server Error")}catch(o){v(o.message)}};return n(t.exports.Fragment,{children:[h&&r(q,{title:"Invoices"}),r(Y,{sx:L,children:n(P,{sx:W,children:[h&&r(J,{placeholder:"Search Invoice No.",setSearch:e=>S(e),from:l,to:d,setStartDate:e=>w(e),setEndDate:e=>C(e)}),b>0&&r(Z,{noOfBusi:b}),r(Q,{elevation:0,sx:$,children:n(ee,{sx:z,children:[D&&r(K,{title:"Invoices",placeholder:"Search Invoice No.",setSearch:e=>S(e),from:l,to:d,setStartDate:e=>w(e),setEndDate:e=>C(e)}),r(j,{sx:G,children:r(re,{sx:U,children:n(te,{children:[r(oe,{children:n(I,{sx:V,children:[r(s,{component:"th",children:"Date"}),r(s,{component:"th",children:"Inv No."}),r(s,{component:"th",children:"Order No."}),r(s,{component:"th",children:"Amount"}),r(s,{component:"th",children:"Download"})]})}),r(se,{children:f&&f.map(e=>{let i="";e.order_array.forEach(o=>{i+=m(o)+", "});const c=m(e.invoice_number);return r(X,{children:n(I,{children:[r(s,{sx:y,children:_(e.created_at).format("D MMM YYYY")}),r(s,{children:m(e.invoice_number)}),r(s,{children:i.replace(/,(?=\s*$)/,"")}),n(s,{sx:y,children:[e.currency==="INR"?"\u20B9":"$",k(Number(e.billing_amount.payable_amount))]}),r(s,{children:n(ae,{component:"button",underline:"none",className:"report-download",onClick:()=>O(e.id,c),children:[r("img",{src:"/static/images/svg/download.svg",alt:"download"}),r("span",{className:"ms-1",children:"Download"})]})})]})})})})]})})})]})})]})})]})},Ye=()=>n(t.exports.Fragment,{children:[r(F,{children:r("title",{children:"Invoices"})}),r(H,{children:r(ne,{})})]});export{Ye as default};