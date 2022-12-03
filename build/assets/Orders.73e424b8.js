import{bN as M,u as D,aj as A,c8 as P,r as i,a,j as e,b0 as p,ae as S,c9 as b,ca as _,W as Y}from"./index.286d7f97.js";import{B}from"./BizParticipantsProvider.077aa1f8.js";import{A as N}from"./AllPaymentsApi.4ecdeac7.js";import{c as t,M as k,D as w}from"./MobileFilter.58b53323.js";import{M as E}from"./MobileHeader.fa029a9a.js";import{S as F}from"./ServiceExpiryAlert.853ee37b.js";import{C as $}from"./Card.24e39f91.js";import{C as j}from"./CardContent.23caf9fc.js";import{T as H,a as I,b as R,c as C,d as s,e as z}from"./TableRow.888a3c44.js";import{L as G}from"./Link.c452b4c6.js";import"./Search.639f0d82.js";import"./Clear.cbc04d66.js";import"./Divider.9b80a928.js";import"./dividerClasses.7e07a65e.js";import"./CommonComponents.e038aedb.js";import"./ArrowRight.7576e371.js";import"./Styles.c059562f.js";import"./styled.e7b57bd4.js";import"./Stack.4e282e3c.js";import"./index.esm.6b918f21.js";import"./TextField.3f547d15.js";import"./Select.a628664b.js";import"./useFormControl.14cf7bab.js";import"./isMuiElement.1e9ba36c.js";import"./Menu.beea8aa9.js";import"./List.12557ecb.js";import"./useControlled.6e207072.js";import"./Check.66084e63.js";import"./usePickerState.0d2e367d.js";import"./Grid.4d3f89c9.js";import"./InputAdornment.85efb26d.js";import"./StaticDateRangePicker.c6d18c51.js";import"./PickersToolbarButton.978ecb8f.js";import"./LeftArrow.c067a303.js";import"./Wrappers.aa57e128.js";const L=()=>{const x=M(),{isMobile:d,isTablet:y}=D(),{showSnack:h}=A(),{dateFilter:l,search:u}=P(),[m,O]=i.exports.useState([]),[f,g]=i.exports.useState(0),T=i.exports.useRef(async(r,n,c)=>{const o=await N.getAllOrders(r,n,c);if(!o.success)return h(o.message,"error");O(o.payload)}),v=i.exports.useRef(async()=>{const r=await N.getExpiryBusinessCount();if(!r.success)return h(r.message,"error");g(r.payload)});return i.exports.useEffect(()=>{T.current(l.from,l.to,u)},[u,l]),i.exports.useEffect(()=>{v.current()},[]),a(i.exports.Fragment,{children:[d&&e(E,{title:"Orders"}),e("div",{className:t.ContentInner,children:a("div",{className:t.InnerWrapper,children:[d&&e(k,{placeholder:"Search Order No."}),f>0&&e(F,{noOfBusi:f}),e($,{elevation:0,className:t.Card,children:a(j,{className:t.CardContent,children:[y&&e(w,{title:"Orders",placeholder:"Search Order No."}),m.length>0?e("div",{className:t.TableOuter,children:e(H,{className:t.TableContainer,children:a(I,{children:[e(R,{children:a(C,{className:t.TableHead,children:[e(s,{component:"th",children:"Date"}),e(s,{component:"th",children:"Particulars"}),e(s,{component:"th",children:"Order No."}),e(s,{component:"th",children:"Amount"}),e(s,{component:"th",children:"Inv No."})]})}),e(z,{children:m&&m.map(r=>{var o;let n="",c="";return r.order_type==="plan"&&(n=`${p(r.start_date).format("D")} - ${p(r.expiry_date).format("D MMM YYYY")}`,c=` Plan Code: ${(o=r.plan)==null?void 0:o.slug}`),e(S,{children:a(C,{children:[e(s,{className:t.OrderDate,children:p(r.created_at).format("D MMM YYYY")}),a(s,{className:t.Particulars,children:[e("p",{children:r.business.business_name}),a("span",{children:[r.particulars.charAt(0).toUpperCase()+r.particulars.slice(1)," -"," ",r.short_desc&&r.short_desc]}),e("br",{}),e("span",{children:n}),e("label",{children:c})]}),e(s,{className:t.OrderNumber,children:e(G,{onClick:()=>{x(`${r.id}`)},children:b(r.id)})}),a(s,{className:t.OrderDate,children:[r.currency==="INR"?"\u20B9":"$",_(r.paid_amount)]}),e(s,{children:b(r.invoice_number)})]})})})})]})})}):a("div",{className:t.NoData,children:["There is no order to show for this duration.",e("br",{}),"Try to select a different date range."]})]})})]})})]})},De=()=>a(i.exports.Fragment,{children:[e(Y,{children:e("title",{children:"Orders"})}),e(B,{children:e(L,{})})]});export{De as default};