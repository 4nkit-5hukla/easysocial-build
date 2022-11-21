import{u as P,Z as _,r as t,a,j as r,aV as p,as as w,c9 as C,ca as A,W as B}from"./index.be83498f.js";import{B as E}from"./BizParticipantsProvider.23575c9f.js";import{A as O}from"./AllPaymentsApi.a8858557.js";import{g as I,I as F,T as H}from"./Tags.14afa6dc.js";import{C as N,I as v,a as k,b as R,T as $,c as j,d as W,O as D,P as z,e as G}from"./Styles.623f0960.js";import{S as U}from"./ServiceExpiryAlert.444bdfd2.js";import{M as V,a as Z,D as q}from"./DeskHeader.9e836c6c.js";import{C as J}from"./Card.095d38fe.js";import{C as K}from"./CardContent.52d68517.js";import{T as L,a as Q,b as ee,c as T,d as s,e as re}from"./TableRow.bab20141.js";import"./withStyles.5199bd64.js";import"./ListItem.f4e4c30f.js";import"./List.52405447.js";import"./listItemButtonClasses.f171b0ff.js";import"./isMuiElement.06135e34.js";import"./styled.b1d02db7.js";import"./LeftArrow.9ba8f037.js";import"./Search.e8235d91.js";import"./Clear.35265845.js";import"./RangePopUp.e3ebbd69.js";import"./index.eb4aa1c1.js";import"./TextField.966cb2e6.js";import"./Select.10d84ef4.js";import"./useFormControl.62e75b61.js";import"./Menu.9e38a63f.js";import"./useControlled.0fd5f443.js";import"./usePickerState.78039cc2.js";import"./Grid.bf78bcfb.js";import"./InputAdornment.2641cb81.js";import"./StaticDateRangePicker.98db8f9a.js";import"./PickersToolbarButton.721eb14e.js";import"./Link.c8642aac.js";const te=()=>{const{isMobile:m,isTablet:y}=P(),{showSnack:d}=_(),[h,g]=t.exports.useState([]),[u,x]=t.exports.useState(""),[f,M]=t.exports.useState(0),[i,S]=t.exports.useState(new Date(new Date().getFullYear(),0,1)),[c,b]=t.exports.useState(new Date(new Date().getFullYear(),11,31)),X=t.exports.useRef(async(e,n,l)=>{e&&e.setHours(0,0,0,0),n&&n.setHours(23,59,59,999);const o=await O.getAllOrders(e,n,l);if(!o.success)return d(o.message,"error");g(o.payload)});t.exports.useEffect(()=>{X.current(i,c,u)},[i,c,u]);const Y=t.exports.useRef(async()=>{const e=await O.getExpiryBusinessCount();if(!e.success)return d(e.message,"error");M(e.payload)});return t.exports.useEffect(()=>{Y.current()},[]),a(t.exports.Fragment,{children:[m&&r(V,{title:"Orders"}),r(I,{sx:N,children:a(F,{sx:v,children:[m&&r(Z,{placeholder:"Search Order No.",setSearch:e=>x(e),from:i,to:c,setStartDate:e=>S(e),setEndDate:e=>b(e)}),f>0&&r(U,{noOfBusi:f}),r(J,{elevation:0,sx:k,children:a(K,{sx:R,children:[y&&r(q,{title:"Orders",placeholder:"Search Order No.",setSearch:e=>x(e),from:i,to:c,setStartDate:e=>S(e),setEndDate:e=>b(e)}),r(H,{sx:$,children:r(L,{sx:j,children:a(Q,{children:[r(ee,{children:a(T,{sx:W,children:[r(s,{component:"th",children:"Date"}),r(s,{component:"th",children:"Particulars"}),r(s,{component:"th",children:"Order No."}),r(s,{component:"th",children:"Amount"}),r(s,{component:"th",children:"Inv No."})]})}),r(re,{children:h&&h.map(e=>{var o;let n="",l="";return e.order_type==="plan"&&(n=`${p(e.start_date).format("D")} - ${p(e.expiry_date).format("D MMM YYYY")}`,l=` Plan Code: ${(o=e.plan)==null?void 0:o.slug}`),r(w,{children:a(T,{children:[r(s,{sx:D,children:p(e.created_at).format("D MMM YYYY")}),a(s,{sx:z,children:[r("p",{children:e.business.business_name}),a("span",{children:[e.particulars.charAt(0).toUpperCase()+e.particulars.slice(1)," -"," ",e.short_desc&&e.short_desc]}),r("br",{}),r("span",{children:n}),r("label",{children:l})]}),r(s,{sx:G,children:C(e.id)}),a(s,{sx:D,children:[e.currency==="INR"?"\u20B9":"$",A(e.paid_amount)]}),r(s,{children:C(e.invoice_number)})]})})})})]})})})]})})]})})]})},Fe=()=>a(t.exports.Fragment,{children:[r(B,{children:r("title",{children:"Orders"})}),r(E,{children:r(te,{})})]});export{Fe as default};