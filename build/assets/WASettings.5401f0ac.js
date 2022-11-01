import{a as o,j as e,r as s,L as H,W as X}from"./index.ca4653e7.js";import{c as S,f as U,e as T}from"./WASettingsProvider.61f81f4c.js";import{a as W}from"./Global.54008107.js";import{u as w}from"./SnackProvider.08a64b2a.js";import{L as R}from"./LeftArrow.877c7df6.js";import{r as N,s as F,F as C,G as Z,u as A,w as G,a8 as $,a9 as v,aa as B,ab as _,a3 as j,m as O,H as q,n as V,$ as z,p as J,q as K}from"./Tags.2f698106.js";import{u as Q,F as Y}from"./FormTextField.dd7b3262.js";import{b as L,h as ee,i as te,c as oe}from"./CommonComponents.19f64604.js";import{I as se}from"./Img.54634c73.js";import{O as ae}from"./LayoutComponents.3f9bcd61.js";import{T as re}from"./Tooltip.e1192513.js";import{C as D}from"./CardContent.0479a1ff.js";import{S as g,I as k}from"./IconButton.e7dfb1ec.js";import{I as ne,C as ie}from"./Info.ee709857.js";import{L as ce}from"./LoadingButton.c9da20bc.js";import{W as le}from"./WAUsageApi.d615aa99.js";import{C as P}from"./Card.7631fdd5.js";import{T as pe}from"./Typography.a45e4cf2.js";import{L as me}from"./Link.4f89108c.js";import"./Axios.d864dcf9.js";import"./useEnhancedEffect.b8f5feb9.js";import"./styled.0e1c85d3.js";import"./ButtonBase.4773acc8.js";import"./MenuItem.95488629.js";import"./List.c558af58.js";import"./ListItem.16c41429.js";import"./listItemButtonClasses.39d1e949.js";import"./isMuiElement.c37f6e76.js";import"./styled.5343f2d4.js";import"./Button.2aa5cafc.js";import"./TextField.ce1d40b7.js";import"./Select.a7103252.js";import"./Menu.8fd80eea.js";import"./Modal.658ef5c2.js";import"./useId.cda5bee3.js";import"./Popper.3d85e4ac.js";import"./CircularProgress.72f217ab.js";const de=()=>o(g,{viewBox:"0 0 16 12",fill:"none",children:[e("path",{opacity:"0.3",d:"M10.5 6C10.5 6.66304 10.2366 7.29893 9.76777 7.76777C9.29893 8.23661 8.66304 8.5 8 8.5C7.33696 8.5 6.70107 8.23661 6.23223 7.76777C5.76339 7.29893 5.5 6.66304 5.5 6C5.5 5.33696 5.76339 4.70107 6.23223 4.23223C6.70107 3.76339 7.33696 3.5 8 3.5C8.66304 3.5 9.29893 3.76339 9.76777 4.23223C10.2366 4.70107 10.5 5.33696 10.5 6Z",fill:"#24272C"}),e("path",{opacity:"0.3",d:"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C8.92826 9.5 9.8185 9.13125 10.4749 8.47487C11.1313 7.8185 11.5 6.92826 11.5 6C11.5 5.07174 11.1313 4.1815 10.4749 3.52513C9.8185 2.86875 8.92826 2.5 8 2.5C7.07174 2.5 6.1815 2.86875 5.52513 3.52513C4.86875 4.1815 4.5 5.07174 4.5 6C4.5 6.92826 4.86875 7.8185 5.52513 8.47487C6.1815 9.13125 7.07174 9.5 8 9.5Z",fill:"#24272C"})]}),he=()=>e(g,{viewBox:"0 0 17 15",fill:"none",children:e("path",{d:"M16.6602 11.2817L10.7043 1.24369C9.73154 -0.414562 7.27153 -0.414562 6.30222 1.24369L0.342906 11.2817C-0.6299 12.94 0.580859 15 2.54397 15H14.4381C16.4012 15 17.633 12.9195 16.6602 11.2817ZM8.49978 12.7731C7.98189 12.7731 7.55147 12.3543 7.55147 11.8503C7.55147 11.3464 7.98189 10.9276 8.49978 10.9276C9.01768 10.9276 9.4481 11.3464 9.4271 11.8742C9.45159 12.3543 8.99669 12.7731 8.49978 12.7731ZM9.36411 6.8075C9.32212 7.52256 9.27663 8.23421 9.23464 8.94926C9.21364 9.18081 9.21364 9.39192 9.21364 9.62006C9.19265 9.99801 8.88821 10.2908 8.49978 10.2908C8.11136 10.2908 7.81042 10.0184 7.78593 9.64049C7.72294 8.52704 7.65645 7.43403 7.59346 6.32058C7.57247 6.02775 7.55147 5.73151 7.52698 5.43868C7.52698 4.95517 7.80692 4.55678 8.26183 4.43079C8.71674 4.32524 9.16815 4.53635 9.36411 4.95517C9.4306 5.10158 9.4516 5.248 9.4516 5.41825C9.4306 5.88474 9.38511 6.34782 9.36411 6.8075Z"})}),ue=({title:p,children:n})=>{const[l,r]=s.exports.useState(!1);return e(re,{title:p,placement:"right-end",PopperProps:{sx:ae},open:l,onClose:()=>r(!1),onOpen:()=>r(!0),arrow:!0,children:n})},fe=()=>{const{businessId:p}=W(),{setErrorMessage:n,setSuccessMessage:l}=w(),{platformID:r}=S(),{setPlatformID:d,setBusinessAuth_key:i}=U(),[c,a]=s.exports.useState(!1),[f,h]=s.exports.useState("Save"),{control:x,handleSubmit:m,reset:u}=Q({defaultValues:{phone_number_id:"",waba_id:"",app_id:"",phone_number:"",access_token:""}}),M=[{name:"phone_number_id",label:"Phone Number ID",toolTipImg:"/static/images/gif/video-to-gif-converter.gif"},{name:"waba_id",label:"WABA ID",toolTipImg:"https://via.placeholder.com/400x200?text=Tool+Tip"},{name:"app_id",label:"Facebook App ID",toolTipImg:"https://via.placeholder.com/400x200?text=Tool+Tip"},{name:"phone_number",label:"WhatsApp Number",toolTipImg:"https://via.placeholder.com/400x200?text=Tool+Tip"},{name:"access_token",label:"Access Token",toolTipImg:"https://via.placeholder.com/400x200?text=Tool+Tip"}],I=s.exports.useCallback(async()=>{try{a(!0);const t=await T.getWAPlatformDetails({platform:"WHATSAPP",product:"engage"});if(t.errors)throw Error(t.errors.pop().message);if(!t.success&&t.message)throw Error(t.message);u(t.payload.platform.whatsapp),t.payload.platform.id&&d(t.payload.platform.id),t.payload.business_auth_key.auth_key&&i(t.payload.business_auth_key.auth_key),h("Update Details"),a(!1)}catch{a(!1)}},[r]),E=async t=>{a(!0),h("Saving");const b={...t,phone_number:`+${t.phone_number}`};try{const y=await T.saveWAPlatformDetails({business_id:p,name:"WhatsApp",type:"WHATSAPP",product:"engage",whatsapp:{version:"v13.0",...b}});y.status===200?(l("WhatsApp Settings updated successfully"),u(t),d(y.payload.platform.id)):n("Something went wrong")}catch{n("Something went wrong")}a(!1),h("Update Details")};return s.exports.useEffect(()=>{I()},[I]),o(D,{component:"form",onSubmit:m(E),sx:N,children:[e(F,{children:"WhatsApp Settings"}),M.map((t,b)=>o(C,{sx:{alignItems:"center"},children:[e(Z,{children:e(A,{children:e(Y,{control:x,label:t.label,name:t.name,sx:G})})}),e(ue,{title:e(s.exports.Fragment,{children:e(se,{src:t.toolTipImg,alt:"Phone Number ID"})}),children:e(k,{sx:{width:24,height:24,opacity:.7,marginBottom:4,color:"#24272C"},children:e(ne,{})})})]},b)),e(L,{children:e(ce,{loading:c,loadingPosition:"end",endIcon:e(ee,{color:"#ffffff"}),variant:"contained",sx:te,type:"submit",children:f})})]})},Ce=()=>{const{setErrorMessage:p,setSuccessMessage:n}=w(),{platformID:l,businessAuth_key:r}=S(),[d,i]=s.exports.useState({}),[c,a]=s.exports.useState("Test Connection"),[f,h]=s.exports.useState(!0),x=async()=>{try{const m=await le.getWaHealthReport();if(!m.success)throw Error(m.message);const{account_status:u}=m.payload;switch(console.log("account_status",u),u){case"connected":i({backgroundColor:"#1BB954",color:"#fff"}),a(o(s.exports.Fragment,{children:[e(g,{component:ie}),"Connected"]})),setTimeout(()=>{i({}),a("Test Connection")},3e3);break;default:i({backgroundColor:"#F7B500",color:"#fff"}),a(o(s.exports.Fragment,{children:[e(g,{component:he}),"Not Connected"]})),setTimeout(()=>{i({}),a("Test Connection")},3e3);break}}catch(m){p(m.message)}};return e(P,{elevation:0,children:o(D,{sx:$,children:[e(F,{children:"Copy Credentials to your Facebook App"}),o(A,{children:[e(v,{sx:{marginBlockEnd:"9px"},children:"Callback URL"}),o(C,{sx:{alignItems:{xs:"flex-start",sm:"center"},flexDirection:{xs:"column",sm:"row"}},children:[e(B,{sx:{width:"100%",flexGrow:1},children:`https://app.easysocial.in/api/v1/chatbot/chat-service/whatsapp/${l}`}),e(_,{sx:{width:{xs:"100%",sm:"70px"}},onClick:()=>{navigator.clipboard&&(navigator.clipboard?navigator.clipboard.writeText(`https://app.easysocial.in/api/v1/chatbot/chat-service/whatsapp/${l}`):document.execCommand("Copy"),n("Callback URL copied to your clipboard"))},children:"Copy"})]})]}),o(A,{children:[e(v,{sx:{marginBlockEnd:"9px"},children:"Access Token"}),o(C,{sx:{alignItems:{xs:"flex-start",sm:"center"},flexDirection:{xs:"column",sm:"row"}},children:[o(B,{sx:{width:"100%",flexGrow:1},children:[f?"***********":r,e(k,{sx:{padding:0,minWidth:"inherit",marginLeft:"auto"},onClick:()=>{h(!f)},children:e(de,{})})]}),e(_,{sx:{width:{xs:"100%",sm:"70px"}},onClick:()=>{navigator.clipboard&&(navigator.clipboard?navigator.clipboard.writeText(r):document.execCommand("Copy"),n("Access Token copied to your clipboard"))},children:"Copy"})]})]}),o(C,{sx:{alignItems:{xs:"flex-start",sm:"center"},flexDirection:{xs:"column",sm:"row"},marginTop:"50px"},children:[e(j,{children:e(pe,{children:"After Updating Callback URL & Access Token perform a test to validate connection between WhatsApp & Easy Social."})}),e(L,{children:e(oe,{disableIcon:"true",component:me,sx:{marginTop:"0px",...d},onClick:()=>{x()},children:c})})]})]})})},ge=()=>{const{isMobile:p}=W(),{setErrorMessage:n}=w(),{platformID:l}=S(),[r,d]=s.exports.useState(void 0),i=s.exports.useCallback(async()=>{try{if(r===void 0){const c=await T.getWAChatBots();if(!c.success)throw Error(c.message);const[a]=c.payload;a&&d(a.id)}}catch(c){n(c.message)}},[l]);return s.exports.useEffect(()=>{i()},[i]),o(s.exports.Fragment,{children:[p&&o(O,{children:[e(k,{component:H,to:"/business-settings",sx:{width:32,height:32},children:e(R,{})}),e(q,{children:"WhatsApp Settings"})]}),e(V,{children:e(z,{sx:J,children:o(P,{elevation:0,sx:K,children:[e(fe,{}),r&&e(Ce,{})]})})})]})},tt=()=>o(s.exports.Fragment,{children:[e(X,{children:e("title",{children:"WhatsApp Settings"})}),e(ge,{})]});export{tt as default};
