import{a as t,Z as f,j as e,u as T,ao as v,r as h,a0 as s,L as D,T as M,W as E}from"./index.6d7cebbf.js";import{u as G,F as o}from"./FormTextField.e00bf294.js";import{s as N,W as Z}from"./WASettingsApi.063ed4ed.js";import{L as H,A as m,b as C}from"./CommonComponents.07d1ab3a.js";import{b as P,H as X,c as U,d as V,e as j,f as R,g as _,h as g,F as n,G as l,j as a,l as c,R as z,U as x,V as u,X as A,N as q}from"./Tags.bbeae880.js";import{C as b,a as J}from"./CardContent.26c3c0b8.js";import"./TextField.78e0843d.js";import"./Select.373439ca.js";import"./isMuiElement.d504a926.js";import"./Menu.c568f487.js";import"./List.7f34a280.js";import"./styled.3765d5b8.js";const K=()=>t(f,{viewBox:"0 0 16 12",fill:"none",children:[e("path",{opacity:"0.3",d:"M10.5 6C10.5 6.66304 10.2366 7.29893 9.76777 7.76777C9.29893 8.23661 8.66304 8.5 8 8.5C7.33696 8.5 6.70107 8.23661 6.23223 7.76777C5.76339 7.29893 5.5 6.66304 5.5 6C5.5 5.33696 5.76339 4.70107 6.23223 4.23223C6.70107 3.76339 7.33696 3.5 8 3.5C8.66304 3.5 9.29893 3.76339 9.76777 4.23223C10.2366 4.70107 10.5 5.33696 10.5 6Z",fill:"#24272C"}),e("path",{opacity:"0.3",d:"M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C8.92826 9.5 9.8185 9.13125 10.4749 8.47487C11.1313 7.8185 11.5 6.92826 11.5 6C11.5 5.07174 11.1313 4.1815 10.4749 3.52513C9.8185 2.86875 8.92826 2.5 8 2.5C7.07174 2.5 6.1815 2.86875 5.52513 3.52513C4.86875 4.1815 4.5 5.07174 4.5 6C4.5 6.92826 4.86875 7.8185 5.52513 8.47487C6.1815 9.13125 7.07174 9.5 8 9.5Z",fill:"#24272C"})]}),d=()=>e(f,{viewBox:"0 0 24 24",fill:"none",children:e("path",{d:"M12 0C5.37261 0 0 5.37261 0 12C0 18.6274 5.37261 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0ZM14 19.6883C14 20.141 13.633 20.508 13.1803 20.508H10.9316C10.4789 20.508 10.1119 20.141 10.1119 19.6883V10.564C10.1119 10.1114 10.4789 9.74436 10.9316 9.74436H13.1803C13.633 9.74436 14 10.1113 14 10.564V19.6883ZM12 8.1913C10.8762 8.1913 9.96522 7.2803 9.96522 6.15652C9.96522 5.03275 10.8762 4.12174 12 4.12174C13.1238 4.12174 14.0348 5.03275 14.0348 6.15652C14.0348 7.2803 13.1238 8.1913 12 8.1913Z"})}),O=()=>{const{isMobile:I,isTablet:Q,navigate:S}=T(),{setErrorMessage:B,setSuccessMessage:F}=v(),[y,Y]=h.exports.useState(!1),[w,$]=h.exports.useState("Save"),{control:i,handleSubmit:W,watch:ee,reset:te,setValue:ne}=G({defaultValues:{PhoneNumberID:"",WABA_ID:"",FBAppID:"",WANumber:""}}),k=async L=>{try{const p=N.serialize(L),r=await Z.saveWABasicSettings(p);if(r.errors)throw Error(r.errors.pop().message);if(!r.success&&r.message)throw Error(r.message);F(r.message),S(0)}catch(p){B(p.message)}};return t(h.exports.Fragment,{children:[I&&t(P,{children:[e(s,{component:D,to:"/business-settings",sx:{width:32,height:32},children:e(H,{})}),e(X,{children:"WhatsApp Settings"})]}),e(U,{children:e(V,{onSubmit:W(k),sx:j,children:t(b,{elevation:0,sx:R,children:[t(J,{sx:_,children:[e(g,{children:"WhatsApp Settings"}),t(n,{sx:{alignItems:"center"},children:[e(l,{children:e(a,{children:e(o,{control:i,label:"Phone Number ID",name:"PhoneNumberID",sx:c})})}),e(s,{sx:{width:24,height:24,opacity:.7,marginBottom:4,color:"#24272C"},children:e(d,{})})]}),t(n,{sx:{alignItems:"center"},children:[e(l,{children:e(a,{children:e(o,{control:i,label:"WABA ID",name:"WABA_ID",sx:c})})}),e(s,{sx:{width:24,height:24,opacity:.7,marginBottom:4,color:"#24272C"},children:e(d,{})})]}),t(n,{sx:{alignItems:"center"},children:[e(l,{children:e(a,{children:e(o,{control:i,label:"Facebook App ID",name:"FBAppID",sx:c})})}),e(s,{sx:{width:24,height:24,opacity:.7,marginBottom:4,color:"#24272C"},children:e(d,{})})]}),t(n,{sx:{alignItems:"center"},children:[e(l,{children:e(a,{children:e(o,{control:i,label:"WhatsApp Number",name:"WANumber",sx:c})})}),e(s,{sx:{width:24,height:24,opacity:.7,marginBottom:4,color:"#24272C"},children:e(d,{})})]}),e(m,{children:!y&&e(C,{type:"submit",children:w})})]}),t(b,{elevation:0,sx:z,children:[e(g,{children:"Copy Credentials to your Facebook App"}),t(a,{children:[e(x,{sx:{marginBlockEnd:"9px"},children:"Callback URL"}),t(n,{sx:{alignItems:"center",columnGap:"20px"},children:[e(u,{sx:{flexGrow:1},children:"api.easysocial.in/v1dfs/callback/234137849823"}),e(A,{children:"Copy"})]})]}),t(a,{children:[e(x,{sx:{marginBlockEnd:"9px"},children:"Access Token"}),t(n,{sx:{alignItems:"center",columnGap:"20px"},children:[t(u,{sx:{flexGrow:1},children:["**************",e(s,{sx:{padding:0,minWidth:"inherit",marginLeft:"auto"},children:e(K,{})})]}),e(A,{children:"Copy"})]})]}),t(n,{sx:{alignItems:"center",marginTop:"50px"},children:[e(q,{children:e(M,{children:"After Updating Callback URL & Access Token perform a test to validate connection between WhatsApp & Easy Social."})}),e(m,{children:e(C,{disableIcon:"true",component:"button",sx:{marginTop:"0px"},children:"Test Connection"})})]})]})]})})})]})},ge=()=>t(h.exports.Fragment,{children:[e(E,{children:e("title",{children:"WhatsApp Settings"})}),e(O,{})]});export{ge as default};
