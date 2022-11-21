import{u as X,Z,aB as z,aC as O,aD as $,r as o,aE as f,j as e,aj as q,a as s,a0 as J,L as A,aF as B,T as K,S as Q,W as Y}from"./index.be83498f.js";import{u as ee}from"./index.esm.d5c830c3.js";import{F as te,s as se}from"./FormFileField.78701bec.js";import{F as l}from"./FormTextField.3dcd98ea.js";import{L as ae}from"./LeftArrow.9ba8f037.js";import re from"./LinkPlatForm.958bde55.js";import{d as ie,b as g,F as S}from"./Style.57c2f24e.js";import{c as oe,H as ne,d as le,e as ce}from"./Wrappers.ad1642ee.js";import{F as c,A as me,a as L}from"./Form.d5d9dee7.js";import{C as y,g as de,h as pe,B as he,i as ue,j as fe}from"./Card.6b3a2e58.js";import{C as ge,F as m,G as d,S as be,a as xe,H as v}from"./Grid.5628e4ec.js";import{p as Ce}from"./Position.module.ff7b7fa6.js";import{M as W}from"./MenuItem.a8e6b436.js";import"./Select.10d84ef4.js";import"./useFormControl.62e75b61.js";import"./isMuiElement.06135e34.js";import"./Menu.9e38a63f.js";import"./List.52405447.js";import"./useControlled.0fd5f443.js";import"./TextField.966cb2e6.js";import"./Styles.3864ecd6.js";import"./Tags.fac649bb.js";import"./withStyles.5199bd64.js";import"./ListItem.f4e4c30f.js";import"./listItemButtonClasses.f171b0ff.js";import"./styled.b1d02db7.js";import"./CommonComponents.bb9b8afb.js";import"./ArrowRight.f8a10dde.js";import"./Styles.ab1c376b.js";import"./Card.095d38fe.js";import"./CardContent.52d68517.js";import"./listItemTextClasses.22edd101.js";import"./dividerClasses.ba5b8194.js";const Fe=()=>{const{isMobile:P,isTablet:E,navigate:I}=X(),{setErrorMessage:p,setSuccessMessage:V}=Z(),{allowedVerticals:H,chatbotNumber:h}=z(),{platformExist:r}=O(),{setChatBotNumber:j}=$(),[M,b]=o.exports.useState(!0),[T,_]=o.exports.useState("Submit"),{control:n,handleSubmit:k,watch:R,reset:x,setValue:C}=ee({defaultValues:{address:"",description:"",email:"",file:void 0,profile_picture_url:"",websites:[],messaging_product:"",vertical:""}}),U=R(),{profile_picture_url:D,vertical:u}=U,G=({target:{files:t}})=>{if(t&&t.length>0){const[a]=t;C("file",a),C("profile_picture_url",URL.createObjectURL(a))}},N=async t=>{try{const a=se.serialize(t),i=await f.saveWAProfile(a);if(i.errors)throw Error(i.errors.pop().message);if(!i.success&&i.message)throw Error(i.message);V(i.message),I(0)}catch(a){p(a.message)}},F=o.exports.useCallback(async()=>{try{if(typeof r=="boolean"&&r){const t=await f.getWAProfile();if(!t.success)throw Error(t.message);_("Update Business Information"),x(t.payload)}}catch(t){p(t.message)}finally{b(!1)}},[r,x]),w=o.exports.useCallback(async()=>{try{if(typeof r=="boolean"&&r&&h===void 0){const t=await f.getWAChatBots();if(!t.success)throw Error(t.message);const[a]=t.payload;a&&j(a.id)}}catch(t){p(t.message)}finally{b(!1)}},[r]);return o.exports.useEffect(()=>{w()},[w]),o.exports.useEffect(()=>{F()},[F]),M?e(y,{className:Ce.AbsCenter,children:e(q,{height:72,width:72})}):s(o.exports.Fragment,{children:[P&&s(oe,{children:[e(J,{component:A,to:"/business-settings",sx:{width:32,height:32},children:e(ae,{})}),e(ne,{children:"WhatsApp Profile"})]}),e(le,{children:typeof r=="boolean"&&r===!1?e(ge,{children:e(re,{})}):s(ce,{onSubmit:k(N),children:[e(y,{elevation:0,children:s(de,{children:[e(pe,{children:"Business Information"}),s(m,{children:[e(d,{children:e(c,{sx:{mb:0,height:"100%"},children:e(l,{control:n,name:"description",label:"Business Description",rows:5,sx:ie,inputProps:{maxLength:256},multiline:!0})})}),e(be,{children:e(te,{control:n,name:"file",defaultValue:D,onChange:G,previewAlt:"Profile Image",label:"Upload Profile Image"})})]}),e(m,{sx:{mt:3.75},children:e(d,{children:e(c,{children:s(l,{select:!0,control:n,label:"Business Vertical",name:"vertical",sx:g,defaultValue:u!=null?u:"",children:[e(W,{value:"",disabled:!0,children:"Select Vertical"}),H.map(({label:t,value:a},i)=>e(W,{value:a,children:t},i))]})})})}),e(m,{children:e(d,{children:e(c,{children:e(l,{control:n,label:"Business Address",name:"address",inputProps:{maxLength:256},sx:g})})})}),e(m,{children:e(d,{children:e(c,{children:e(l,{control:n,label:"Email",name:"email",inputProps:{maxLength:256},sx:g})})})}),s(xe,{children:[e(v,{children:e(c,{children:e(l,{control:n,name:"websites[0]",label:"Website 1",placeholder:"Website 1",inputProps:{maxLength:256},sx:S})})}),e(v,{children:e(c,{children:e(l,{control:n,name:"websites[1]",label:"Website 2",placeholder:"Website 2",inputProps:{maxLength:256},sx:S})})})]}),e(me,{children:e(L,{type:"submit",children:T})})]})}),h&&s(he,{elevation:0,children:[e(B,{component:"img",image:"/static/images/svg/bot.svg",alt:"bot",className:"bot-img"}),s(ue,{children:[s(K,{component:"h3",children:["Start building your WhatsApp Chatbot in seconds. Use the advanced ",e("strong",{children:"Chatflow"})," tool by EasySocial, and build complex conversations in a jiffy."]}),s(fe,{children:[s(L,{component:A,to:`/chat-flow/${h}`,disableIcon:!0,children:[e("span",{children:"Build Chatbot"}),e(Q,{viewBox:"0 0 14 10",fill:"none",sx:{width:14,height:10},children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3692 4.19223L8.28352 1.00205L9.25275 0L14 4.90798L9.43077 10L8.46154 8.99796L11.3692 5.62372H0V4.19223H11.3692Z",fill:"#12B0EE"})})]}),E&&e(B,{component:"img",image:"/static/images/svg/messages.svg",alt:"messages"})]})]})]})]})})]})},et=()=>s(o.exports.Fragment,{children:[e(Y,{children:e("title",{children:"WhatsApp Profile"})}),e(Fe,{})]});export{et as default};