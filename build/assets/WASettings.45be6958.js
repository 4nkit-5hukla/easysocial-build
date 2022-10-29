import{a as o,Z as f,j as e,r as s,$ as A,aG as w,aH as E,I as P,a0 as k,T as H,u as X,ar as U,W as R}from"./index.be9654c3.js";import{W as T}from"./WASettingsApi.f07a18b6.js";import{L as N}from"./LeftArrow.7303e2ae.js";import{g as Z,h as W,F as C,G,j as S,l as $,R as j,U as v,V as B,X as _,N as O,b as V,H as Y,c as q,Y as z,e as J,f as K}from"./Tags.2f8b9de5.js";import{u as Q,F as ee}from"./FormTextField.1b6766b0.js";import{A as F,g as te,h as oe,b as se}from"./CommonComponents.e402a32f.js";import{O as ae}from"./LayoutComponents.47a91eb5.js";import{T as ne}from"./Tooltip.2b15d992.js";import{C as L}from"./CardContent.9878e4e7.js";import{I as re,C as ie}from"./Info.1c754268.js";import{L as ce}from"./LoadingButton.5f50428b.js";import{W as le}from"./WAUsageApi.6d843477.js";import{C as D}from"./Card.575c8934.js";import{L as pe}from"./Link.82014b51.js";import"./TextField.a295446e.js";import"./Select.e4773e53.js";import"./isMuiElement.c36edbd6.js";import"./Menu.df47d1c7.js";import"./List.338bfb98.js";import"./Popper.7608b53b.js";import"./CircularProgress.52603bb1.js";const de=()=>o(f,{viewBox:"0 0 16 12",fill:"none",children:[e("path",{opacity:"0.3",d:"M10.5 6C10.5 6.66304 10.2366 7.29893 9.76777 7.76777C9.29893 8.23661 8.66304 8.5 8 8.5C7.33696 8.5 6.70107 8.23661 6.23223 7.76777C5.76339 7.29893 5.5 6.66304 5.5 6C5.5 5.33696 5.76339 4.70107 6.23223 4.23223C6.70107 3.76339 7.33696 3.5 8 3.5C8.66304 3.5 9.29893 3.76339 9.76777 4.23223C10.2366 4.70107 10.5 5.33696 10.5 6Z",fill:"#24272C"}),e("path",{opacity:"0.3",d:"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C8.92826 9.5 9.8185 9.13125 10.4749 8.47487C11.1313 7.8185 11.5 6.92826 11.5 6C11.5 5.07174 11.1313 4.1815 10.4749 3.52513C9.8185 2.86875 8.92826 2.5 8 2.5C7.07174 2.5 6.1815 2.86875 5.52513 3.52513C4.86875 4.1815 4.5 5.07174 4.5 6C4.5 6.92826 4.86875 7.8185 5.52513 8.47487C6.1815 9.13125 7.07174 9.5 8 9.5Z",fill:"#24272C"})]}),me=()=>e(f,{viewBox:"0 0 17 15",fill:"none",children:e("path",{d:"M16.6602 11.2817L10.7043 1.24369C9.73154 -0.414562 7.27153 -0.414562 6.30222 1.24369L0.342906 11.2817C-0.6299 12.94 0.580859 15 2.54397 15H14.4381C16.4012 15 17.633 12.9195 16.6602 11.2817ZM8.49978 12.7731C7.98189 12.7731 7.55147 12.3543 7.55147 11.8503C7.55147 11.3464 7.98189 10.9276 8.49978 10.9276C9.01768 10.9276 9.4481 11.3464 9.4271 11.8742C9.45159 12.3543 8.99669 12.7731 8.49978 12.7731ZM9.36411 6.8075C9.32212 7.52256 9.27663 8.23421 9.23464 8.94926C9.21364 9.18081 9.21364 9.39192 9.21364 9.62006C9.19265 9.99801 8.88821 10.2908 8.49978 10.2908C8.11136 10.2908 7.81042 10.0184 7.78593 9.64049C7.72294 8.52704 7.65645 7.43403 7.59346 6.32058C7.57247 6.02775 7.55147 5.73151 7.52698 5.43868C7.52698 4.95517 7.80692 4.55678 8.26183 4.43079C8.71674 4.32524 9.16815 4.53635 9.36411 4.95517C9.4306 5.10158 9.4516 5.248 9.4516 5.41825C9.4306 5.88474 9.38511 6.34782 9.36411 6.8075Z"})}),he=({title:c,children:l})=>{const[p,n]=s.exports.useState(!1);return e(ne,{title:c,placement:"right-end",PopperProps:{sx:ae},open:p,onClose:()=>n(!1),onOpen:()=>n(!0),arrow:!0,children:l})},ue=()=>{const{setErrorMessage:c,setSuccessMessage:l}=A(),{platformID:p}=w(),{setPlatformID:n,setBusinessAuth_key:h}=E(),[r,a]=s.exports.useState(!1),[i,m]=s.exports.useState("Save"),{control:g,handleSubmit:x,reset:d}=Q({defaultValues:{phone_number_id:"",waba_id:"",app_id:"",phone_number:"",access_token:""}}),u=[{name:"phone_number_id",label:"Phone Number ID",toolTipImg:"/static/images/gif/video-to-gif-converter.gif"},{name:"waba_id",label:"WABA ID",toolTipImg:"https://via.placeholder.com/400x200?text=Tool+Tip"},{name:"app_id",label:"Facebook App ID",toolTipImg:"https://via.placeholder.com/400x200?text=Tool+Tip"},{name:"phone_number",label:"WhatsApp Number",toolTipImg:"https://via.placeholder.com/400x200?text=Tool+Tip"},{name:"access_token",label:"Access Token",toolTipImg:"https://via.placeholder.com/400x200?text=Tool+Tip"}],I=s.exports.useCallback(async()=>{try{a(!0);const t=await T.getWAPlatformDetails();if(t.errors)throw Error(t.errors.pop().message);if(!t.success&&t.message)throw Error(t.message);d(t.payload.platform.whatsapp),t.payload.platform.id&&n(t.payload.platform.id),t.payload.business_auth_key.auth_key&&h(t.payload.business_auth_key.auth_key),m("Update Details"),a(!1)}catch{a(!1)}},[p]),M=async t=>{a(!0),m("Saving");const b={...t,phone_number:`+${t.phone_number}`};try{const y=await T.saveWAPlatformDetails(b);y.status===200?(l("WhatsApp Settings updated successfully"),d(t),n(y.payload.platform.id)):c("Something went wrong")}catch{c("Something went wrong")}a(!1),m("Update Details")};return s.exports.useEffect(()=>{I()},[I]),o(L,{component:"form",onSubmit:x(M),sx:Z,children:[e(W,{children:"WhatsApp Settings"}),u.map((t,b)=>o(C,{sx:{alignItems:"center"},children:[e(G,{children:e(S,{children:e(ee,{control:g,label:t.label,name:t.name,sx:$})})}),e(he,{title:e(s.exports.Fragment,{children:e(P,{src:t.toolTipImg,alt:"Phone Number ID"})}),children:e(k,{sx:{width:24,height:24,opacity:.7,marginBottom:4,color:"#24272C"},children:e(re,{})})})]},b)),e(F,{children:e(ce,{loading:r,loadingPosition:"end",endIcon:e(te,{color:"#ffffff"}),variant:"contained",sx:oe,type:"submit",children:i})})]})},Ce=()=>{const{setErrorMessage:c,setSuccessMessage:l}=A(),{platformID:p,businessAuth_key:n}=w(),[h,r]=s.exports.useState({}),[a,i]=s.exports.useState("Test Connection"),[m,g]=s.exports.useState(!0),x=async()=>{try{const d=await le.getWaHealthReport();if(!d.success)throw Error(d.message);const{account_status:u}=d.payload;switch(console.log("account_status",u),u){case"connected":r({backgroundColor:"#1BB954",color:"#fff"}),i(o(s.exports.Fragment,{children:[e(f,{component:ie}),"Connected"]})),setTimeout(()=>{r({}),i("Test Connection")},3e3);break;default:r({backgroundColor:"#F7B500",color:"#fff"}),i(o(s.exports.Fragment,{children:[e(f,{component:me}),"Not Connected"]})),setTimeout(()=>{r({}),i("Test Connection")},3e3);break}}catch(d){c(d.message)}};return e(D,{elevation:0,children:o(L,{sx:j,children:[e(W,{children:"Copy Credentials to your Facebook App"}),o(S,{children:[e(v,{sx:{marginBlockEnd:"9px"},children:"Callback URL"}),o(C,{sx:{alignItems:{xs:"flex-start",sm:"center"},flexDirection:{xs:"column",sm:"row"}},children:[e(B,{sx:{width:"100%",flexGrow:1},children:`https://app.easysocial.in/api/v1/chatbot/chat-service/whatsapp/${p}`}),e(_,{sx:{width:{xs:"100%",sm:"70px"}},onClick:()=>{navigator.clipboard&&(navigator.clipboard?navigator.clipboard.writeText(`https://app.easysocial.in/api/v1/chatbot/chat-service/whatsapp/${p}`):document.execCommand("Copy"),l("Callback URL copied to your clipboard"))},children:"Copy"})]})]}),o(S,{children:[e(v,{sx:{marginBlockEnd:"9px"},children:"Access Token"}),o(C,{sx:{alignItems:{xs:"flex-start",sm:"center"},flexDirection:{xs:"column",sm:"row"}},children:[o(B,{sx:{width:"100%",flexGrow:1},children:[m?"***********":n,e(k,{sx:{padding:0,minWidth:"inherit",marginLeft:"auto"},onClick:()=>{g(!m)},children:e(de,{})})]}),e(_,{sx:{width:{xs:"100%",sm:"70px"}},onClick:()=>{navigator.clipboard&&(navigator.clipboard?navigator.clipboard.writeText(n):document.execCommand("Copy"),l("Access Token copied to your clipboard"))},children:"Copy"})]})]}),o(C,{sx:{alignItems:{xs:"flex-start",sm:"center"},flexDirection:{xs:"column",sm:"row"},marginTop:"50px"},children:[e(O,{children:e(H,{children:"After Updating Callback URL & Access Token perform a test to validate connection between WhatsApp & Easy Social."})}),e(F,{children:e(se,{disableIcon:"true",component:pe,sx:{marginTop:"0px",...h},onClick:()=>{x()},children:a})})]})]})})},fe=()=>{const{isMobile:c}=X(),{setErrorMessage:l}=A(),{platformID:p}=w(),[n,h]=s.exports.useState(void 0),r=s.exports.useCallback(async()=>{try{if(n===void 0){const a=await T.getWAChatBots();if(!a.success)throw Error(a.message);const[i]=a.payload;i&&h(i.id)}}catch(a){l(a.message)}},[p]);return s.exports.useEffect(()=>{r()},[r]),o(s.exports.Fragment,{children:[c&&o(V,{children:[e(k,{component:U,to:"/business-settings",sx:{width:32,height:32},children:e(N,{})}),e(Y,{children:"WhatsApp Settings"})]}),e(q,{children:e(z,{sx:J,children:o(D,{elevation:0,sx:K,children:[e(ue,{}),n&&e(Ce,{})]})})})]})},Xe=()=>o(s.exports.Fragment,{children:[e(R,{children:e("title",{children:"WhatsApp Settings"})}),e(fe,{})]});export{Xe as default};
