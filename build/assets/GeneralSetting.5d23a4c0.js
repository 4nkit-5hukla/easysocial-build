var I=Object.defineProperty;var V=(a,s,n)=>s in a?I(a,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[s]=n;var m=(a,s,n)=>(V(a,typeof s!="symbol"?s+"":s,n),n);import{ai as b,aj as j,r,ak as h,u as k,Z as B,al as F,am as N,a as p,j as t,a0 as O,L as Z,an as y,W as H}from"./index.406b108e.js";import{u as q}from"./index.esm.2aab6df4.js";import{L as U}from"./LeftArrow.1929b5c9.js";import{c as $,H as K,d as W,e as J}from"./Wrappers.a19a0174.js";import{C as _}from"./Card.2f464abd.js";import{A as Q,a as X}from"./Form.e8e4afd6.js";import{p as S}from"./Position.module.ff7b7fa6.js";import"./Card.cd1015dd.js";import"./CardContent.c3b7b4e1.js";import"./ArrowRight.96d15e0a.js";class i{}m(i,"getGeneralSettings",async()=>await b("/business","GET")),m(i,"putGeneralSettings",async(s,n)=>await b(`/business/${s}`,"PUT",{data:n})),m(i,"getCountryProvinces",async s=>await j(`/countries/${s}.json`,"GET"));const Y=r.exports.lazy(()=>h(()=>import("./BusinessDetails.5b8dd4cb.js"),["assets/BusinessDetails.5b8dd4cb.js","assets/mui-tel-input.es.c0c8a924.js","assets/index.406b108e.js","assets/index.6e2e3c06.css","assets/ListItemIcon.b29c167a.js","assets/listItemTextClasses.198283a0.js","assets/List.90013459.js","assets/ListItemText.b9a6f519.js","assets/TextField.871d729d.js","assets/Select.faf7fc1d.js","assets/isMuiElement.204b9160.js","assets/Menu.f7251f44.js","assets/useControlled.1c86ebca.js","assets/InputAdornment.47527c66.js","assets/MenuItem.bceeb030.js","assets/FormTextField.4c9bafa4.js","assets/index.esm.2aab6df4.js","assets/FileUpload.b259c714.js","assets/index.1cd65546.js","assets/AssetsApi.10489d0c.js","assets/FileUpload.a55168fb.css","assets/Tags.f1ff3942.js","assets/withStyles.0f295abb.js","assets/ListItem.a763bec7.js","assets/listItemButtonClasses.86609c12.js","assets/Grid.26400928.js","assets/Grid.6523dca6.css","assets/Form.e8e4afd6.js","assets/ArrowRight.96d15e0a.js","assets/Form.22a18028.css","assets/Card.2f464abd.js","assets/Card.cd1015dd.js","assets/CardContent.c3b7b4e1.js","assets/Card.fb089c80.css","assets/Style.d96d560c.js"])),ee=r.exports.lazy(()=>h(()=>import("./BusinessAddress.22f2ea46.js"),["assets/BusinessAddress.22f2ea46.js","assets/index.406b108e.js","assets/index.6e2e3c06.css","assets/FormTextField.4c9bafa4.js","assets/index.esm.2aab6df4.js","assets/TextField.871d729d.js","assets/Select.faf7fc1d.js","assets/isMuiElement.204b9160.js","assets/Menu.f7251f44.js","assets/List.90013459.js","assets/useControlled.1c86ebca.js","assets/Tags.f1ff3942.js","assets/withStyles.0f295abb.js","assets/MenuItem.bceeb030.js","assets/listItemTextClasses.198283a0.js","assets/ListItem.a763bec7.js","assets/listItemButtonClasses.86609c12.js","assets/Grid.26400928.js","assets/Grid.6523dca6.css","assets/Form.e8e4afd6.js","assets/ArrowRight.96d15e0a.js","assets/Form.22a18028.css","assets/Card.2f464abd.js","assets/Card.cd1015dd.js","assets/CardContent.c3b7b4e1.js","assets/Card.fb089c80.css","assets/Style.d96d560c.js"])),te=r.exports.lazy(()=>h(()=>import("./BusinessLocation.cca2bc52.js"),["assets/BusinessLocation.cca2bc52.js","assets/index.406b108e.js","assets/index.6e2e3c06.css","assets/FormTextField.4c9bafa4.js","assets/index.esm.2aab6df4.js","assets/TextField.871d729d.js","assets/Select.faf7fc1d.js","assets/isMuiElement.204b9160.js","assets/Menu.f7251f44.js","assets/List.90013459.js","assets/useControlled.1c86ebca.js","assets/ListItem.a763bec7.js","assets/listItemButtonClasses.86609c12.js","assets/ListItemText.b9a6f519.js","assets/listItemTextClasses.198283a0.js","assets/Search.bcae155e.js","assets/index.f3d48750.js","assets/Tags.f1ff3942.js","assets/withStyles.0f295abb.js","assets/MenuItem.bceeb030.js","assets/Grid.26400928.js","assets/Grid.6523dca6.css","assets/Form.e8e4afd6.js","assets/ArrowRight.96d15e0a.js","assets/Form.22a18028.css","assets/Styles.3fefcec0.js","assets/Card.cd1015dd.js","assets/CardContent.c3b7b4e1.js","assets/BusinessLocation.30a18e82.css"])),se=()=>{const{isMobile:a}=k(),{setErrorMessage:s,setSuccessMessage:n}=B(),{timeZoneList:x}=F(),{setProvinces:w}=N(),[E,v]=r.exports.useState(!0),[L,G]=r.exports.useState(Math.random()),{control:f,handleSubmit:A,watch:d,reset:C,setValue:c}=q({defaultValues:{business_name:"",mobile_number:"",industry:"",website:"",logo:"",address:"",city:"",state:"",country:"",pin_code:"",latitude:20.5937,longitude:78.9629,timezone:{label:"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",value:5.5}}}),{country:g,timezone:u}=d(),P=e=>{c("address",typeof e.address=="function"?e.address():e.address),c("latitude",typeof e.lat=="function"?e.lat():e.lat),c("longitude",typeof e.lng=="function"?e.lng():e.lng)},T=async e=>{try{const{id:l,mobile_number:D}=e,o=await i.putGeneralSettings(l,{...e,number:D,timezoneLabel:u.label,timezoneValue:u.value});if(o.errors)throw Error(o.errors.pop().message);if(!o.success&&o.message)throw Error(o.message);n(o.message),G(Math.random())}catch(l){s(l.message)}},z=r.exports.useRef(async()=>{try{const e=await i.getGeneralSettings();if(e.errors)throw Error(e.errors.pop().message);if(!e.success)throw Error(e.message);C(e.payload),v(!1)}catch(e){s(e.message)}}),R=r.exports.useRef(async()=>{const e=await i.getCountryProvinces(g);w(e)}),M=r.exports.useRef(async()=>{const[e]=x.filter(({label:l})=>l===u.label);e&&c("timezone.value",parseFloat(e.value))});return r.exports.useEffect(()=>{u.value&&M.current()},[u.value]),r.exports.useEffect(()=>{g&&R.current()},[g]),r.exports.useEffect(()=>{z.current()},[L]),p(r.exports.Fragment,{children:[a&&p($,{children:[t(O,{component:Z,to:"/business-settings",className:"icon-md-button",children:t(U,{})}),t(K,{children:"General Settings"})]}),E?t(_,{className:S.AbsCenter,children:t(y,{height:72,width:72})}):t(r.exports.Suspense,{fallback:t(_,{className:S.AbsCenter,children:t(y,{height:72,width:72})}),children:t(W,{children:p(J,{onSubmit:A(T),children:[t(Y,{control:f,watch:d,setValue:c}),t(ee,{control:f,watch:d}),t(te,{control:f,watch:d,updatePlace:P}),t(Q,{children:t(X,{type:"submit",children:"Save"})})]})})})]})},fe=()=>p(r.exports.Fragment,{children:[t(H,{children:t("title",{children:"General Settings"})}),t(se,{})]});export{fe as default};
