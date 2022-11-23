import{r as t,ah as c,u as C,ai as v,a,j as e,$ as z,L as M,aj as d,W as I}from"./index.f4b1475f.js";import{u as V}from"./index.esm.01fad23a.js";import{S as p}from"./SettingsApi.1a0eef47.js";import{L as B}from"./LeftArrow.8a2b2f7e.js";import{c as D,H as P,d as T,e as j}from"./Wrappers.bf4cd818.js";import{C as h}from"./Card.1ebeff23.js";import{A as k,a as F}from"./Form.e46ee134.js";import{p as g}from"./Position.module.ff7b7fa6.js";import"./Card.a6a996dd.js";import"./CardContent.f9109da8.js";import"./ArrowRight.3b0b34f3.js";const N=t.exports.lazy(()=>c(()=>import("./BusinessDetails.ec16bceb.js"),["assets/BusinessDetails.ec16bceb.js","assets/mui-tel-input.es.b501262d.js","assets/index.f4b1475f.js","assets/index.159876a6.css","assets/ListItemIcon.f33bf963.js","assets/listItemTextClasses.5c126781.js","assets/List.fc9de2b8.js","assets/ListItemText.b4b9fe4e.js","assets/TextField.cefb14e5.js","assets/Select.be951174.js","assets/useFormControl.75866ec7.js","assets/isMuiElement.62abf40c.js","assets/Menu.0fd5621c.js","assets/useControlled.82bc185c.js","assets/InputAdornment.7997c36b.js","assets/MenuItem.0660692a.js","assets/dividerClasses.3d19f506.js","assets/FormTextField.cd35e9b4.js","assets/index.esm.01fad23a.js","assets/FileUpload.c4121c36.js","assets/FileType.118a3b25.js","assets/AssetsApi.4da0ab05.js","assets/index.765970f4.js","assets/tslib.es6.61e9e735.js","assets/FileUpload.a55168fb.css","assets/Tags.709f5396.js","assets/withStyles.0b8a44c4.js","assets/ListItem.214d79ed.js","assets/listItemButtonClasses.f6719ad5.js","assets/styled.4f5a3753.js","assets/Grid.58370c23.js","assets/Grid.6523dca6.css","assets/Form.e46ee134.js","assets/ArrowRight.3b0b34f3.js","assets/Form.83ea0429.css","assets/Card.1ebeff23.js","assets/Card.a6a996dd.js","assets/CardContent.f9109da8.js","assets/Card.0c204cfb.css","assets/Style.57c2f24e.js"])),R=t.exports.lazy(()=>c(()=>import("./BusinessAddress.f3cb8014.js"),["assets/BusinessAddress.f3cb8014.js","assets/index.f4b1475f.js","assets/index.159876a6.css","assets/SettingsApi.1a0eef47.js","assets/FormTextField.cd35e9b4.js","assets/index.esm.01fad23a.js","assets/TextField.cefb14e5.js","assets/Select.be951174.js","assets/useFormControl.75866ec7.js","assets/isMuiElement.62abf40c.js","assets/Menu.0fd5621c.js","assets/List.fc9de2b8.js","assets/useControlled.82bc185c.js","assets/Tags.709f5396.js","assets/withStyles.0b8a44c4.js","assets/MenuItem.0660692a.js","assets/listItemTextClasses.5c126781.js","assets/dividerClasses.3d19f506.js","assets/ListItem.214d79ed.js","assets/listItemButtonClasses.f6719ad5.js","assets/styled.4f5a3753.js","assets/Grid.58370c23.js","assets/Grid.6523dca6.css","assets/Form.e46ee134.js","assets/ArrowRight.3b0b34f3.js","assets/Form.83ea0429.css","assets/Card.1ebeff23.js","assets/Card.a6a996dd.js","assets/CardContent.f9109da8.js","assets/Card.0c204cfb.css","assets/Style.57c2f24e.js"])),H=t.exports.lazy(()=>c(()=>import("./BusinessLocation.8755a617.js"),["assets/BusinessLocation.8755a617.js","assets/index.f4b1475f.js","assets/index.159876a6.css","assets/FormTextField.cd35e9b4.js","assets/index.esm.01fad23a.js","assets/TextField.cefb14e5.js","assets/Select.be951174.js","assets/useFormControl.75866ec7.js","assets/isMuiElement.62abf40c.js","assets/Menu.0fd5621c.js","assets/List.fc9de2b8.js","assets/useControlled.82bc185c.js","assets/Tags.709f5396.js","assets/withStyles.0b8a44c4.js","assets/MenuItem.0660692a.js","assets/listItemTextClasses.5c126781.js","assets/dividerClasses.3d19f506.js","assets/ListItem.214d79ed.js","assets/listItemButtonClasses.f6719ad5.js","assets/styled.4f5a3753.js","assets/Grid.58370c23.js","assets/Grid.6523dca6.css","assets/Form.e46ee134.js","assets/ArrowRight.3b0b34f3.js","assets/Form.83ea0429.css","assets/Styles.3864ecd6.js","assets/Styles.ab1c376b.js","assets/Card.a6a996dd.js","assets/CardContent.f9109da8.js"])),O=()=>{const{isMobile:b}=C(),{setErrorMessage:l,setSuccessMessage:f}=v(),[_,S]=t.exports.useState(!0),[x,w]=t.exports.useState(Math.random()),{control:n,handleSubmit:y,watch:o,reset:A,setValue:m}=V({defaultValues:{business_name:"",mobile_number:"",industry:"",website:"",logo:"",address:"",city:"",state:"",country:"",pin_code:"",latitude:20.5937,longitude:78.9629,timezone:{label:"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",value:5.5}}}),{timezone:u}=o(),E=async s=>{try{const{id:i,mobile_number:G}=s,r=await p.putGeneralSettings(i,{...s,number:G,timezoneLabel:u.label,timezoneValue:u.value});if(r.errors)throw Error(r.errors.pop().message);if(!r.success&&r.message)throw Error(r.message);f(r.message),w(Math.random())}catch(i){l(i.message)}},L=t.exports.useRef(async()=>{try{const s=await p.getGeneralSettings();if(s.errors)throw Error(s.errors.pop().message);if(!s.success)throw Error(s.message);A(s.payload),S(!1)}catch(s){l(s.message)}});return t.exports.useEffect(()=>{L.current()},[x]),a(t.exports.Fragment,{children:[b&&a(D,{children:[e(z,{component:M,to:"/business-settings",className:"icon-md-button",children:e(B,{})}),e(P,{children:"General Settings"})]}),_?e(h,{className:g.AbsCenter,children:e(d,{height:72,width:72})}):e(t.exports.Suspense,{fallback:e(h,{className:g.AbsCenter,children:e(d,{height:72,width:72})}),children:e(T,{children:a(j,{onSubmit:y(E),children:[e(N,{control:n,watch:o,setValue:m}),e(R,{control:n,watch:o}),e(H,{control:n,watch:o,setValue:m}),e(k,{children:e(F,{type:"submit",children:"Save"})})]})})})]})},se=()=>a(t.exports.Fragment,{children:[e(I,{children:e("title",{children:"General Settings"})}),e(O,{})]});export{se as default};
