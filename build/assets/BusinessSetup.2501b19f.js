var Ce=Object.defineProperty;var Ne=(s,o,n)=>o in s?Ce(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n;var se=(s,o,n)=>(Ne(s,typeof o!="symbol"?o+"":o,n),n);import{r,j as e,a as t,I as Pe,u as O,Z as G,c7 as U,cb as ne,aH as H,a0 as Be,ca as q,al as _e,n as we,C as Ie,aY as Te,ao as Fe,ap as Le,aq as De,ar as Ae,$ as re,aV as oe,a9 as ke,W as Me,cc as Ee,c8 as We,cd as $e}from"./index.be83498f.js";import{u as K}from"./index.esm.d5c830c3.js";import{g as ie}from"./mui-tel-input.es.85ec8179.js";import{S as ce}from"./SettingsApi.5a3e8f49.js";import{F as j,G as Z}from"./Grid.5628e4ec.js";import{F as b,a as Y}from"./Form.d5d9dee7.js";import{F as x}from"./FormTextField.3dcd98ea.js";import{F as D,a as le,b as V}from"./Style.57c2f24e.js";import{C as J}from"./Card.095d38fe.js";import{M as A}from"./MenuItem.a8e6b436.js";import qe from"./MapContainer.92fc41aa.js";import{L as Ve}from"./LeftArrow.9ba8f037.js";import{F as Oe}from"./FormControlLabel.1db4b169.js";import{C as Re}from"./Checkbox.53f2c7e9.js";import{R as ze}from"./RazorPayApi.ea2ee807.js";import{A as Ge}from"./CommonComponents.bb9b8afb.js";import{E as He}from"./ExpandLess.fefdc04b.js";import{E as je}from"./ExpandMore.23a71908.js";import{D as Ze}from"./Divider.8d1c721f.js";import"./ListItemIcon.7da16a64.js";import"./listItemTextClasses.22edd101.js";import"./List.52405447.js";import"./ListItemText.411df549.js";import"./TextField.966cb2e6.js";import"./Select.10d84ef4.js";import"./useFormControl.62e75b61.js";import"./isMuiElement.06135e34.js";import"./Menu.9e38a63f.js";import"./useControlled.0fd5f443.js";import"./InputAdornment.2641cb81.js";import"./ArrowRight.f8a10dde.js";import"./dividerClasses.ba5b8194.js";import"./ListItem.f4e4c30f.js";import"./listItemButtonClasses.f171b0ff.js";import"./Search.24b19a7d.js";import"./index.f3d48750.js";import"./SwitchBase.70bdd830.js";import"./Styles.ab1c376b.js";import"./styled.b1d02db7.js";const de=r.exports.createContext(void 0),ue=r.exports.createContext(void 0),Je=({children:s})=>{const[o,n]=r.exports.useState(1),[h,_]=r.exports.useState("/static/images/svg/login.svg"),[w,f]=r.exports.useState({firstLine:"Sign Up Successful !",secondLine:"Enter your business details to start your journey."}),g={step:o,leftImg:h,leftText:w},S=r.exports.useMemo(()=>({setStep:n,setLeftImg:_,setLeftText:f}),[]);return e(de.Provider,{value:g,children:e(ue.Provider,{value:S,children:s})})},Q=()=>{const s=r.exports.useContext(de);if(s===void 0)throw Error("Item must be used inside of BusinessSetupProvider, otherwise it will not function correctly.");return s},R=()=>{const s=r.exports.useContext(ue);if(s===void 0)throw Error("Item must be used inside of BusinessSetupProvider, otherwise it will not function correctly.");return s},Xe=()=>{const{leftImg:s,leftText:o}=Q();return t(r.exports.Fragment,{children:[o.firstLine?t("h1",{children:[o.firstLine,e("br",{}),o.secondLine]}):"",e(Pe,{src:s,alt:"Business Setup",width:455,height:478})]})},Ue="AoW5",Ke="SeZ1",Ye="_5mZs",Qe="_012o",et="bKmh",tt="gJF3",st="JwIV",rt="_8Aao",at="ze9y",nt="k3eu",ot="KXUS",it="vsMk",ct="MIhE",lt="CORl",dt="V1WY",ut="NE2E",mt="_7nix",pt="Yvkz",ht="zoN5",a={BusiSetupTitle:Ue,Form:Ke,CheckBoxlabel:Ye,OrderSummary:Qe,Head:et,Heading:tt,Duration:st,Particulars:rt,Particular:at,DiscountInput:nt,CheckPromoBtn:ot,DiscountCard:it,BillingWrapper:ct,Billingheader:lt,BillingAddress:dt,PlanDetailWrapper:ut,Info:mt,ActionBtn:pt,PlanDetail:ht},gt=()=>{const{country:s,countryName:o}=O(),{setStep:n}=R(),{setErrorMessage:h,setSuccessMessage:_}=G(),{industryList:w,countriesList:f,provinces:g}=U(),{setProvinces:S}=ne(),{control:c,handleSubmit:L,watch:d,setValue:I}=K({defaultValues:{business_name:"",industry:"",mobile_number:"",address:"",pin_code:"",city:"",state:"",country:o}}),{industry:P,mobile_number:C,state:N,country:T}=d(),i=r.exports.useCallback(async()=>{if(T){const v=await ce.getCountryProvinces(T);S(v)}},[T]);return r.exports.useEffect(()=>{i()},[i]),t(J,{component:"form",onSubmit:L(async v=>{try{const y=await H.createBusiness(v);y.success||h(y.message),_(y.message),localStorage.setItem("businessId",y.payload.businessId),n(2)}catch(y){h(y.message)}}),className:a.Form,children:[e("div",{className:a.BusiSetupTitle,children:"Connect your business"}),e(j,{children:t(Z,{children:[e(b,{children:e(x,{control:c,name:"business_name",label:"Business Name",placeholder:"Business Name",required:!0,sx:D})}),e(b,{children:t(x,{select:!0,control:c,label:"Industry",name:"industry",sx:D,required:!0,defaultValue:P!=null?P:"",children:[e(A,{value:"",disabled:!0,children:"Select Industry"}),w.map((v,y)=>e(A,{value:v,children:v},y))]})}),e(b,{children:e(ie,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:s,value:C,onChange:(v,y)=>{var E;I("mobile_number",(E=y.numberValue)!=null?E:v)},variant:"filled",sx:le})}),e(b,{children:e(x,{control:c,name:"address",label:"Address",placeholder:"Address",required:!0,sx:D})}),e(b,{children:t(x,{select:!0,control:c,label:"Country",name:"country",sx:V,required:!0,defaultValue:T!=null?T:"",children:[e(A,{value:"",disabled:!0,children:"Select Country"}),f.map((v,y)=>e(A,{value:v.name,children:v.name},y))]})}),e(b,{children:g.length>0?t(x,{select:!0,control:c,label:"State",name:"state",sx:V,required:!0,defaultValue:N!=null?N:"",children:[e(A,{value:"",disabled:!0,children:"Select State"}),g.map((v,y)=>e(A,{value:v.name,children:v.name},y))]}):e(x,{control:c,name:"state",label:"State",placeholder:"State",required:!0,sx:V})}),e(b,{children:e(x,{control:c,name:"city",label:"City",placeholder:"City",required:!0,sx:D})}),e(b,{children:e(x,{control:c,name:"pin_code",label:"Pincode",placeholder:"Pincode",required:!0,sx:D})}),e(Y,{type:"submit",children:"Save & Tag Location"})]})})]})},yt="mtuX",bt="WjCW",ae={MainWrapper:yt,Title:bt},ee=({title:s})=>{const{setStep:o}=R(),{step:n}=Q();return e(r.exports.Fragment,{children:t("div",{className:ae.MainWrapper,children:[e(Be,{onClick:()=>o(n-1),sx:{width:32,height:32},children:e(Ve,{})}),e("div",{className:ae.Title,children:s})]})})},ft=()=>{var T;const{isMobile:s,isTablet:o}=O(),{setStep:n,setLeftText:h}=R(),{setErrorMessage:_,setSuccessMessage:w}=G(),{timeZoneList:f}=U();r.exports.useEffect(()=>{h({firstLine:"",secongLine:""})},[]);const{control:g,handleSubmit:S,watch:c,setValue:L}=K({defaultValues:{latitude:20.5937,longitude:78.9629,timezone:{label:"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",value:5.5}}}),{latitude:d,longitude:I,timezone:P}=c(),C=i=>{L("latitude",typeof i.lat=="function"?i.lat():i.lat),L("longitude",typeof i.lng=="function"?i.lng():i.lng)},N=async i=>{try{const p=await H.updateLocation(i);p.success||_(p.messages?p.messages.errors[0].message:p.message),w(p.message),n(3)}catch(p){_(p.message)}};return t(r.exports.Fragment,{children:[s&&e(ee,{title:"Save Location"}),t(J,{component:"form",onSubmit:S(N),className:a.Form,children:[o&&e("div",{className:a.BusiSetupTitle,children:"Save Location"}),e(j,{children:t(Z,{children:[e(b,{children:e(qe,{onChange:C,initialCenter:{lat:d!=null?d:20.5937,lng:I!=null?I:78.9629}})}),e(b,{children:t(x,{select:!0,control:g,label:"Time Zone",name:"timezone.label",sx:V,required:!0,defaultValue:(T=P==null?void 0:P.label)!=null?T:"",children:[e(A,{value:"",disabled:!0,children:"Select Time Zone"}),f.map((i,p)=>e(A,{value:i.label,children:i.label},p))]})}),e(Y,{type:"submit",children:"Save & Select Plan"})]})})]})]})},St=({setBillingDetail:s})=>{const{isMobile:o,isTablet:n}=O(),{setErrorMessage:h,setSuccessMessage:_}=G(),{countriesList:w,provinces:f}=U(),{setProvinces:g}=ne(),{setLeftText:S,setStep:c}=R(),L={company_name:"",email:"",number:"",address:"",city:"",state:"",country:"",pin_code:"",gst_number:"",pan_number:""},{control:d,handleSubmit:I,watch:P,reset:C,setValue:N}=K({defaultValues:L}),{number:T,state:i,country:p}=P(),v=r.exports.useCallback(async()=>{if(p){const l=await ce.getCountryProvinces(p);g(l)}},[p]);r.exports.useEffect(()=>{v()},[v]),r.exports.useEffect(()=>{S({firstLine:"",secongLine:""})},[]);const y=async l=>{try{const B=await H.updateBillingDetail(l);if(!B.success)throw Error(B.messages?B.messages.errors[0].message:B.message);_(B.message),s(l),c(5)}catch(B){h(B.message)}},E=async l=>{const B=l.target.checked;try{if(B){const u=await H.getBusinessById(Number(localStorage.getItem("businessId")));if(u.errors)throw Error(u.errors.pop().message);if(!u.success)throw Error(u.message);console.log("res.payload.mobile_number",u.payload.mobile_number),C({company_name:u.payload.business_name,number:u.payload.mobile_number,address:u.payload.address,city:u.payload.city,state:u.payload.state,country:u.payload.country,pin_code:u.payload.pin_code})}else C(L)}catch(u){h(u.message)}};return t(r.exports.Fragment,{children:[o&&e(ee,{title:"Billing Detail"}),t(J,{component:"form",onSubmit:I(y),className:a.Form,children:[n&&e("div",{className:a.BusiSetupTitle,children:"Billing Detail"}),e(j,{children:t(Z,{children:[e(Oe,{className:a.CheckBoxlabel,control:e(Re,{onChange:l=>E(l)}),label:"Billing Details are same as Business Details"}),e(b,{children:e(x,{control:d,name:"company_name",label:"Company Name",placeholder:"Company Name",required:!0,sx:D})}),e(b,{children:e(x,{control:d,name:"email",label:"Email",placeholder:"Email",required:!0,sx:D})}),e(b,{children:e(ie,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:"IN",value:T,onChange:(l,B)=>{var u;N("number",(u=B.numberValue)!=null?u:l)},variant:"filled",sx:le})}),e(b,{children:e(x,{control:d,name:"address",label:"Address",placeholder:"Address",required:!0,sx:D})}),e(b,{children:t(x,{select:!0,control:d,label:"Country",name:"country",sx:V,required:!0,defaultValue:p!=null?p:"",children:[e(A,{value:"",disabled:!0,children:"Select Country"}),w.map((l,B)=>e(A,{value:l.name,children:l.name},B))]})}),e(b,{children:f.length>0?t(x,{select:!0,control:d,label:"State",name:"state",sx:V,required:!0,defaultValue:i!=null?i:"",children:[e(A,{value:"",disabled:!0,children:"Select State"}),f.map((l,B)=>e(A,{value:l.name,children:l.name},B))]}):e(x,{control:d,name:"state",label:"State",placeholder:"State",required:!0,sx:D})}),e(b,{children:e(x,{control:d,name:"city",label:"City",placeholder:"City",required:!0,sx:D})}),e(b,{children:e(x,{control:d,name:"pin_code",label:"Pincode",placeholder:"Pincode",required:!0,sx:D})}),e(b,{children:e(x,{control:d,name:"gst_number",label:"GST Number",placeholder:"GST Number",sx:D})}),e(b,{children:e(x,{control:d,name:"pan_number",label:"PAN Number",placeholder:"PAN Number",sx:D})}),e(Y,{type:"submit",children:"Verify & Pay"})]})})]})]})},vt=({currency:s,grandTotal:o,billingDetail:n,udf2:h,description:_})=>{const[w,f]=r.exports.useState(!0);return r.exports.useEffect(()=>{const S=document.createElement("script");S.src="https://checkout.razorpay.com/v1/checkout.js",S.async=!0,document.body.appendChild(S)},[]),e(Ge,{type:"button",variant:"contained",className:"mt-5 ms-0 pay-btn",onClick:async()=>{var I,P;f(!0);const S=await ze.createOrder({amount:parseFloat(o.toFixed(2)),notes:{businessId:localStorage.getItem("businessId"),plans:h==null?void 0:h.join(","),gst:n.gst_number,pan:n.pan_number}}),c={key:"rzp_test_RRNQ95mWTINe0J",name:"Easy Social",description:_,order_id:S.payload.order.id,prefill:{name:n.company_name,email:n.email,contact:n.number},notes:{billing_name:n.company_name,billing_address:n.address,billing_city:n.city,billing_state:n.state,billing_zip:(I=n.pin_code)==null?void 0:I.toString(),billing_country:n.country,billing_tel:(P=n.number)==null?void 0:P.toString(),billing_email:n.email},theme:{color:"#686CFD"},modal:{confirm_close:!0,ondismiss:function(){f(!1)}},callback_url:`https://api.easysocial.in${S.payload.url}`,redirect:!0,handler:function(){f(!1)}},L=window;new L.Razorpay(c).open()},showLoader:w,children:`Pay ${s}${q(o)}`})};class me{}se(me,"validatePromoCode",async o=>await _e("/promocode/validate","POST",{data:o}));const xt=({plans:s,setPlans:o})=>{G();const[n,h]=r.exports.useState(""),[_,w]=r.exports.useState(!1),f=()=>{w(!1)},[g,S]=r.exports.useState(),[c,L]=r.exports.useState([!1,!1]),d=C=>{const N=c.map((T,i)=>i===C?c[i]=!0:c[i]=!1);L(N)},I=()=>{w(!0)},P=async()=>{const C=s.filter(N=>N.id!==g);localStorage.setItem("selectedPlan",JSON.stringify(C)),o(C)};return t(r.exports.Fragment,{children:[e("div",{className:we(a.PlanDetailWrapper,"col-10 col-sm-6 col-md-12"),children:t("div",{className:a.BillingWrapper,children:[e("div",{className:a.Billingheader,children:e("h5",{children:"Plan Detail"})}),s&&s.map((C,N)=>{const T=q(C.amount);return t("div",{children:[t("div",{className:a.Billingheader,children:[t("div",{className:a.Info,children:[e("h6",{children:C.title}),e("small",{className:"price",children:`${n}${T}/Month`})]}),t("div",{className:a.ActionBtn,children:[s.length>1&&e("button",{type:"button",onClick:()=>{S(C.id),I()},children:"Remove"}),t("button",{onClick:()=>d(N),type:"button",children:["Details ",c[N]?e(He,{}):e(je,{})]})]})]}),e(Ie,{in:c[N],className:"data",children:e("div",{className:a.PlanDetail,children:Te(C.plan_detail)})})]},`${N}`)})]})}),t(Fe,{open:_,"aria-labelledby":"responsive-dialog-title",children:[e(Le,{id:"responsive-dialog-title",children:"Delete"}),e(De,{children:"Are you sure you want to delete?"}),t(Ae,{children:[e(re,{color:"secondary",onClick:()=>{f()},children:"Cancel"}),e(re,{onClick:async()=>{await P(),f()},autoFocus:!0,children:"Delete"})]})]})]})},Ct=oe(new Date).format("Do MMM"),Nt=({billingDetail:s})=>{const{setErrorMessage:o}=G(),{isMobile:n,isTablet:h}=O(),{setStep:_,setLeftText:w,setLeftImg:f}=R(),[g,S]=r.exports.useState([]),[,c]=r.exports.useState(0),[L,d]=r.exports.useState(""),[I,P]=r.exports.useState(""),[C,N]=r.exports.useState(0),[T,i]=r.exports.useState(0),[p,v]=r.exports.useState(0),[y,E]=r.exports.useState(0),[l,B]=r.exports.useState(""),[u,pe]=r.exports.useState(""),[he,ge]=r.exports.useState([]),[ye,be]=r.exports.useState();r.exports.useEffect(()=>{f("/static/images/svg/order_summary.svg"),w({firstLine:"",secongLine:""})},[]),r.exports.useEffect(()=>{const m=[],k=localStorage.getItem("selectedPlan");if(k){const F=JSON.parse(k),M=new Date;let W=M.setDate(M.getDate()+F[0].validity-1);W=oe(W).format("Do MMM"),be(W),S(F),B(F[0].currency==="INR"?"\u20B9":"$"),pe(F[0].currency);let te=0;const xe=0;for(let $=0;$<F.length;$++)te+=F[$].has_discount?F[$].discount_amount:F[$].amount,m.push(F[$].slug);X(te,xe,F[0].currency),ge(m)}},[]);const X=async(m,k,F)=>{let M=m-k;M<1&&(M=0);const W=F==="INR"?M*.18:0;i(W),N(M),E(m),v(M+W)},fe=()=>{c(0),P(""),d(""),X(y,0,u)},Se=()=>{_(4)},ve=async()=>{const m=L,k=await me.validatePromoCode({promocode:m,total_amount:y,currency:u});if(!k.success)o(k.message);else{const F=k.payload.promo_discount;c(F),P(m),X(y,F,u)}};return t(r.exports.Fragment,{children:[n&&e(ee,{title:"Order Summary"}),t(J,{className:a.Form,children:[h&&e("div",{className:a.BusiSetupTitle,children:"Order Summary"}),e(j,{children:e(Z,{children:t("div",{className:a.OrderSummary,children:[t("div",{className:a.Head,children:[e("h5",{className:a.Heading,children:"Details"}),e("small",{className:a.Duration,children:`${Ct} to ${ye}`})]}),t("div",{className:a.Particulars,children:[g&&g.map((m,k)=>t("div",{className:a.Particular,children:[t("p",{className:a.Title,children:[`${m.category} - ${m.name} - ${m.validity} Days `,m.has_discount&&t("s",{children:[l,m.amount]})]}),t("p",{children:[l,q(m.has_discount?m.discount_amount:m.amount)]})]},`${k}`)),t("div",{className:a.Particular,children:[e("p",{children:"Discount Promo"}),e("div",{children:I===""?t(r.exports.Fragment,{children:[e("input",{type:"text",placeholder:"Enter Code",name:"discount",className:a.DiscountInput,onChange:m=>d(m.target.value)}),e("button",{className:a.CheckPromoBtn,onClick:ve,children:"Check"})]}):e("span",{className:"discount-value",children:" "})})]}),e("div",{className:a.Particular,children:I!==""&&t("div",{className:a.DiscountCard,children:[e("small",{children:String(I).toUpperCase()}),e("button",{type:"button",onClick:fe,children:e("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"//www.w3.org/2000/svg",children:t("g",{opacity:"0.7",children:[e("path",{d:"M1 1L9.5 9.5",stroke:"#24272C"}),e("path",{d:"M9.5 1L1 9.5",stroke:"#24272C"})]})})})]})}),u==="INR"&&t(r.exports.Fragment,{children:[t("div",{className:a.Particular,children:[e("p",{className:"title",children:"Taxable Amount"}),e("p",{className:"amount",children:`${l}${q(C)}`})]}),t("div",{className:a.Particular,children:[e("p",{className:"title",children:"GST Amount"}),e("p",{className:"amount",children:`${l}${q(T)}`})]}),t("div",{className:a.Particular,children:[e("p",{className:"title",children:"GST No."}),e("p",{className:"number",children:s.gst_number})]})]}),e(Ze,{style:{margin:"10px 0"}}),t("div",{className:a.Particular,children:[e("p",{className:a.Title,children:e("strong",{children:"Total Payable Amount"})}),e("p",{className:"amount",children:e("strong",{children:`${l}${q(p)}`})})]})]}),e("div",{className:"col-10 col-sm-6 col-md-12",children:t("div",{className:a.BillingWrapper,children:[t("div",{className:a.Billingheader,children:[e("h5",{children:s.company_name}),e("button",{type:"button",onClick:()=>Se(),children:"Edit Billing Address"})]}),e("div",{className:a.BillingAddress,children:`${s.address}, ${s.city}, ${s.state}-${s.pin_code}`})]})}),e(xt,{plans:g,setPlans:m=>S(m)}),p&&e(vt,{currency:l,grandTotal:p,billingDetail:s,udf2:he,description:g[0].name})]})})})]})]})},Pt=()=>{const s=ke(),{navigate:o,isMobile:n}=O(),{step:h}=Q(),{setStep:_}=R(),[w,f]=r.exports.useState("");if(h===3&&o("/choose-plan"),s.state){const{name:g}=s.state&&s.state;g==="redirectBusi"&&(o("/business-setup",{replace:!0}),h!==4&&_(4))}return e(r.exports.Fragment,{children:(()=>{switch(h){case 1:return e(gt,{});case 2:return e(ft,{});case 4:return e(St,{setBillingDetail:g=>f(g)});case 5:return e(Nt,{billingDetail:w})}})()})},Bt="ighc",_t="onBD",wt="a-wS",It="Ty1D",Tt="_6yu3",z={OuterWrapper:Bt,InnerWrapper:_t,LeftWrapper:wt,LeftFixed:It,RightWrapper:Tt},ys=()=>{const{isTablet:s}=O();return t(r.exports.Fragment,{children:[e(Me,{children:e("title",{children:"Business Setup"})}),e(Ee,{children:e(We,{children:t(Je,{children:[e($e,{}),e("div",{className:z.OuterWrapper,children:t("div",{className:z.InnerWrapper,children:[s&&e("div",{className:z.LeftWrapper,children:e("div",{className:z.LeftFixed,children:e(Xe,{})})}),e("div",{className:z.RightWrapper,children:e(Pt,{})})]})})]})})})]})};export{ys as default};
