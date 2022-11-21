import{Z as S,u,r as i,a9 as N,aV as o,a as s,j as a,I as P,ca as l,W as b}from"./index.be83498f.js";import{P as T,a as g,b as D}from"./PaymentStatusRight.19ffa015.js";import{A as f}from"./AllPaymentsApi.a8858557.js";import{a as x}from"./Form.d5d9dee7.js";import"./ArrowRight.f8a10dde.js";const W="nk-u",B="_9UHr",M="rB7T",A="V92r",I="lqHD",R="_56Wm",_="i-Az",Y="_6-wv",H="BRiH",k="_5GQf",w="rrA6",e={PaymentSuccessWrapper:W,SuccessDivWrapper:B,SuccessTitle:M,SubTitleWrapper:A,SubTitle:I,SecondHalf:R,MainTitle:_,Box:Y,PaymentDetailsWrapper:H,PurchaseWrapper:k,UnSubTitle:w},U=()=>{const{setErrorMessage:n}=S(),{navigate:m}=u(),[c,d]=i.exports.useState(""),p=N().search,h=i.exports.useRef(async()=>{const v=new URLSearchParams(p).get("id"),t=await f.getInvoiceById(Number(v));if(!t.success)return n(t.message);const y=o(t.payload.bill_to).format("DD/MMM/YYYY");let r=t.payload.created_at;r=new Date(r*1e3),d({...c,amount:t.payload.billing_amount.payable_amount,paymentDate:o(r).format("DD/MMM/YYYY"),nextPaymentDate:y,currency:t.payload.currency,nexPaymentAmt:t.payload.billing_amount.net_amount})});return i.exports.useEffect(()=>{h.current()},[]),s("div",{className:e.PaymentSuccessWrapper,children:[a("div",{className:e.FirstHalf,children:s("div",{className:e.SuccessDivWrapper,children:[a("div",{className:e.SuccessDivIcon,children:a(P,{src:"/static/images/svg/success.svg",alt:" success badge",className:e.successBadge})}),a("div",{className:e.SuccessTitle,children:"Congratulations!"}),s("div",{className:e.SubTitleWrapper,children:[a("div",{className:e.SubTitle,children:"Thank you for subscribing"}),s("div",{className:e.subTitle,children:["Payment received for ",c.currency==="INR"?"\u20B9":"$"," ",c&&l(c.amount)]})]}),a(x,{type:"button",onClick:()=>m("enagage/chat"),children:"Let\u2019s Get Started"})]})}),s("div",{className:e.SecondHalf,children:[a("div",{className:e.PaymentDetailsWrapper,children:s("div",{className:e.PurchaseWrapper,children:[a("div",{className:e.MainTitle,children:"Purchase Details :"}),s("div",{className:e.Box,children:[a("div",{children:"Amount Paid"}),s("div",{children:[c.currency==="INR"?"\u20B9":"$"," ",c&&l(c.amount)]})]})]})}),c.amount>0&&a("div",{className:e.RecurringtDetailsWrapper,children:s("div",{className:e.PurchaseWrapper,children:[a("div",{className:e.MainTitle,children:"Next Recurring :"}),s("div",{className:e.Box,children:[a("div",{className:e.Title,children:"Date"}),a("div",{className:e.value,children:c.nextPaymentDate})]}),s("div",{className:e.Box,children:[a("div",{className:e.title,children:"Amount"}),s("div",{className:e.value,children:[c.currency==="INR"?"\u20B9":"$"," ",l(c.nexPaymentAmt),c.currency==="INR"&&"(Tax Extra)"]})]})]})}),s("div",{className:e.UnSubTitle,children:["You can cancel subscrption anytime later",a("br",{}),"send out an email on cancel@easysocial.io"]})]})]})},C=()=>{const{isTablet:n}=u();return s(T,{children:[a(b,{children:a("title",{children:"Payment Success"})}),n&&a(g,{}),a(D,{children:a(U,{})})]})};export{C as default};
