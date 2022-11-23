import{r as t,ah as c,u as C,ai as v,a,j as e,$ as z,L as M,aj as d,W as I}from"./index.f42b544b.js";import{u as V}from"./index.esm.e4e55aa9.js";import{S as p}from"./SettingsApi.047dc7e5.js";import{L as B}from"./LeftArrow.62a3fa4d.js";import{c as D,H as P,d as T,e as j}from"./Wrappers.0745b8d8.js";import{C as h}from"./Card.1c94ce7e.js";import{A as k,a as F}from"./Form.08e1be77.js";import{p as g}from"./Position.module.ff7b7fa6.js";import"./Card.394defe5.js";import"./CardContent.9e9e57e4.js";import"./ArrowRight.d30f42bd.js";const N=t.exports.lazy(()=>c(()=>import("./BusinessDetails.3512241e.js"),["assets/BusinessDetails.3512241e.js","assets/mui-tel-input.es.e52c0e2e.js","assets/index.f42b544b.js","assets/index.159876a6.css","assets/ListItemIcon.94842ead.js","assets/listItemTextClasses.59466d3b.js","assets/List.b6176302.js","assets/ListItemText.b0ff4f76.js","assets/TextField.a2283cc7.js","assets/Select.28b63049.js","assets/useFormControl.9673694a.js","assets/isMuiElement.3c4e2635.js","assets/Menu.177000ba.js","assets/useControlled.c17368a9.js","assets/InputAdornment.ed9d17ff.js","assets/MenuItem.8689cb1e.js","assets/dividerClasses.a17f7f33.js","assets/FormTextField.c9980551.js","assets/index.esm.e4e55aa9.js","assets/FileUpload.b4757903.js","assets/FileType.118a3b25.js","assets/AssetsApi.6e7cfbcb.js","assets/index.b3ae9195.js","assets/tslib.es6.61e9e735.js","assets/FileUpload.a55168fb.css","assets/Tags.4d2d5bca.js","assets/withStyles.d2028c8a.js","assets/ListItem.49c02632.js","assets/listItemButtonClasses.e4888797.js","assets/styled.b600943f.js","assets/Grid.88343ef7.js","assets/Grid.6523dca6.css","assets/Form.08e1be77.js","assets/ArrowRight.d30f42bd.js","assets/Form.83ea0429.css","assets/Card.1c94ce7e.js","assets/Card.394defe5.js","assets/CardContent.9e9e57e4.js","assets/Card.0c204cfb.css","assets/Style.57c2f24e.js"])),R=t.exports.lazy(()=>c(()=>import("./BusinessAddress.f7ee5a3d.js"),["assets/BusinessAddress.f7ee5a3d.js","assets/index.f42b544b.js","assets/index.159876a6.css","assets/SettingsApi.047dc7e5.js","assets/FormTextField.c9980551.js","assets/index.esm.e4e55aa9.js","assets/TextField.a2283cc7.js","assets/Select.28b63049.js","assets/useFormControl.9673694a.js","assets/isMuiElement.3c4e2635.js","assets/Menu.177000ba.js","assets/List.b6176302.js","assets/useControlled.c17368a9.js","assets/Tags.4d2d5bca.js","assets/withStyles.d2028c8a.js","assets/MenuItem.8689cb1e.js","assets/listItemTextClasses.59466d3b.js","assets/dividerClasses.a17f7f33.js","assets/ListItem.49c02632.js","assets/listItemButtonClasses.e4888797.js","assets/styled.b600943f.js","assets/Grid.88343ef7.js","assets/Grid.6523dca6.css","assets/Form.08e1be77.js","assets/ArrowRight.d30f42bd.js","assets/Form.83ea0429.css","assets/Card.1c94ce7e.js","assets/Card.394defe5.js","assets/CardContent.9e9e57e4.js","assets/Card.0c204cfb.css","assets/Style.57c2f24e.js"])),H=t.exports.lazy(()=>c(()=>import("./BusinessLocation.c98bc7dd.js"),["assets/BusinessLocation.c98bc7dd.js","assets/index.f42b544b.js","assets/index.159876a6.css","assets/FormTextField.c9980551.js","assets/index.esm.e4e55aa9.js","assets/TextField.a2283cc7.js","assets/Select.28b63049.js","assets/useFormControl.9673694a.js","assets/isMuiElement.3c4e2635.js","assets/Menu.177000ba.js","assets/List.b6176302.js","assets/useControlled.c17368a9.js","assets/Tags.4d2d5bca.js","assets/withStyles.d2028c8a.js","assets/MenuItem.8689cb1e.js","assets/listItemTextClasses.59466d3b.js","assets/dividerClasses.a17f7f33.js","assets/ListItem.49c02632.js","assets/listItemButtonClasses.e4888797.js","assets/styled.b600943f.js","assets/Grid.88343ef7.js","assets/Grid.6523dca6.css","assets/Form.08e1be77.js","assets/ArrowRight.d30f42bd.js","assets/Form.83ea0429.css","assets/Styles.3864ecd6.js","assets/Styles.ab1c376b.js","assets/Card.394defe5.js","assets/CardContent.9e9e57e4.js"])),O=()=>{const{isMobile:b}=C(),{setErrorMessage:l,setSuccessMessage:f}=v(),[_,S]=t.exports.useState(!0),[x,w]=t.exports.useState(Math.random()),{control:n,handleSubmit:y,watch:o,reset:A,setValue:m}=V({defaultValues:{business_name:"",mobile_number:"",industry:"",website:"",logo:"",address:"",city:"",state:"",country:"",pin_code:"",latitude:20.5937,longitude:78.9629,timezone:{label:"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",value:5.5}}}),{timezone:u}=o(),E=async s=>{try{const{id:i,mobile_number:G}=s,r=await p.putGeneralSettings(i,{...s,number:G,timezoneLabel:u.label,timezoneValue:u.value});if(r.errors)throw Error(r.errors.pop().message);if(!r.success&&r.message)throw Error(r.message);f(r.message),w(Math.random())}catch(i){l(i.message)}},L=t.exports.useRef(async()=>{try{const s=await p.getGeneralSettings();if(s.errors)throw Error(s.errors.pop().message);if(!s.success)throw Error(s.message);A(s.payload),S(!1)}catch(s){l(s.message)}});return t.exports.useEffect(()=>{L.current()},[x]),a(t.exports.Fragment,{children:[b&&a(D,{children:[e(z,{component:M,to:"/business-settings",className:"icon-md-button",children:e(B,{})}),e(P,{children:"General Settings"})]}),_?e(h,{className:g.AbsCenter,children:e(d,{height:72,width:72})}):e(t.exports.Suspense,{fallback:e(h,{className:g.AbsCenter,children:e(d,{height:72,width:72})}),children:e(T,{children:a(j,{onSubmit:y(E),children:[e(N,{control:n,watch:o,setValue:m}),e(R,{control:n,watch:o}),e(H,{control:n,watch:o,setValue:m}),e(k,{children:e(F,{type:"submit",children:"Save"})})]})})})]})},se=()=>a(t.exports.Fragment,{children:[e(I,{children:e("title",{children:"General Settings"})}),e(O,{})]});export{se as default};