var te=Object.defineProperty;var se=(e,s,i)=>s in e?te(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i;var F=(e,s,i)=>(se(e,typeof s!="symbol"?s+"":s,i),i);import{A as E,j as t,a as r,B as v,T as k,u as ie,b as ne,av as ae,aw as oe,r as u,W as re,$ as le,L as D,Y as ce}from"./index.38d3e2dd.js";import{C as de,u as he,F as g}from"./FormTextField.3be4b1b3.js";import{C as R}from"./CardMedia.a1784c14.js";import{a as me}from"./Select.68c58a58.js";import{H as M,a as P,A as ue,b as G}from"./CommonComponents.4b14a98c.js";import{b as pe,H as fe,c as ge,d as xe,e as be,f as ye,g as Se,h as we,F as S,i as V,G as C,j as x,N as Fe,S as Ce,l as L,n as Be,k as _,O as Ae,P as We,Q as Ie,R as Ee,U as ve}from"./LayoutComponents.281bca3c.js";import{L as Le}from"./LeftArrow.79d13e8d.js";import{C as j,a as ke}from"./CardContent.840d963f.js";import{M as $}from"./MenuItem.e4a73d64.js";import"./TextField.23840b04.js";import"./useFormControl.318bb611.js";import"./isMuiElement.7c1115e8.js";import"./Menu.e94f9734.js";import"./List.7ef95385.js";import"./styled.9bec237d.js";import"./listItemTextClasses.a01ad07e.js";function N(e){return e===void 0}function Re(e){return e===null}function He(e){return typeof e=="boolean"}function B(e){return e===Object(e)}function q(e){return Array.isArray(e)}function Ne(e){return e instanceof Date}function Q(e,s){return s?B(e)&&!N(e.uri):B(e)&&typeof e.size=="number"&&typeof e.type=="string"&&typeof e.slice=="function"}function Xe(e,s){return Q(e,s)&&typeof e.name=="string"&&(B(e.lastModifiedDate)||typeof e.lastModified=="number")}function b(e){return N(e)?!1:e}function H(e,s,i,a){s=s||{},i=i||new FormData,s.indices=b(s.indices),s.nullsAsUndefineds=b(s.nullsAsUndefineds),s.booleansAsIntegers=b(s.booleansAsIntegers),s.allowEmptyArrays=b(s.allowEmptyArrays),s.noFilesWithArrayNotation=b(s.noFilesWithArrayNotation),s.dotsForObjectNotation=b(s.dotsForObjectNotation);const p=typeof i.getParts=="function";return N(e)||(Re(e)?s.nullsAsUndefineds||i.append(a,""):He(e)?s.booleansAsIntegers?i.append(a,e?1:0):i.append(a,e):q(e)?e.length?e.forEach((o,c)=>{let d=a+"["+(s.indices?c:"")+"]";s.noFilesWithArrayNotation&&Xe(o,p)&&(d=a),H(o,s,i,d)}):s.allowEmptyArrays&&i.append(a+"[]",""):Ne(e)?i.append(a,e.toISOString()):B(e)&&!Q(e,p)?Object.keys(e).forEach(o=>{const c=e[o];if(q(c))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);const d=a?s.dotsForObjectNotation?a+"."+o:a+"["+o+"]":o;H(c,s,i,d)}):i.append(a,e)),i}var Oe={serialize:H};class y{}F(y,"getWABasicSettings",async()=>await E("/whatsapp/business-profile","GET")),F(y,"saveWABasicSettings",async s=>await E("/whatsapp/profile-update","POST",{data:s})),F(y,"getWAChatBots",async()=>await E("/chatbots","GET"));const Ue=({control:e,defaultValue:s,onChange:i,rules:a,name:p,accept:o="image/png, image/jpeg",allowedTypes:c="png or jpg format",previewAlt:d="Profile Image",label:A,width:f,height:w,children:X,...h})=>t(de,{rules:a,control:e,name:p,render:({field:W})=>r(v,{sx:{display:"flex",position:"relative",margin:"auto",transition:"all 0.2s ease-in-out",width:f||{xs:157,lg:180,xl:200},height:w||{xs:157,lg:180,xl:200}},children:[s&&s!==""&&t(v,{sx:{backgroundColor:"#F2F3F7",borderRadius:"15px",boxShadow:"0px 0px 5px 1px rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",height:"100%",left:0,overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,width:"100%",zIndex:2},children:t(R,{component:"img",image:s,alt:d})}),r(v,{sx:{alignItems:"center",backgroundColor:"#F2F3F7",borderRadius:"15px",display:"flex",height:"100%",justifyContent:"center",flexDirection:"column",position:"relative",textAlign:"center",width:"100%"},children:[t(me,{...h,inputProps:{accept:o,type:"file",title:d,sx:{backgroundColor:"transparent",borderRadius:"5px",height:"100%",margin:0,opacity:0,padding:0,position:"absolute",top:0,width:"100%",zIndex:0}},name:W.name,onChange:i,sx:{height:"100%",position:"absolute",left:0,m:0,opacity:0,p:0,top:0,width:"100%",zIndex:1}}),t(k,{sx:{color:"#616C7D",fontSize:15,fontWeight:500,lineHeight:"18px",maxWidth:f},children:A}),t(k,{className:"allowed-types",sx:{color:"#758399",fontSize:10,fontWeight:400,lineHeight:"12px",marginBottom:0},children:c})]})]})}),Te=()=>{const{isMobile:e,isTablet:s,navigate:i}=ie(),{setErrorMessage:a,setSuccessMessage:p}=ne(),{allowedVerticals:o,chatbotNumber:c}=ae(),{setChatBotNumber:d}=oe(),[A,f]=u.exports.useState(!0),[w,X]=u.exports.useState("Submit"),{control:h,handleSubmit:W,watch:Y,reset:O,setValue:U}=he({defaultValues:{address:"",description:"",email:"",file:void 0,profile_picture_url:"",websites:[],messaging_product:"",vertical:""}}),Z=Y(),{profile_picture_url:J,vertical:I}=Z,K=({target:{files:n}})=>{if(n&&n.length>0){const[l]=n;U("file",l),U("profile_picture_url",URL.createObjectURL(l))}},ee=async n=>{try{const l=Oe.serialize(n),m=await y.saveWABasicSettings(l);if(m.errors)throw Error(m.errors.pop().message);if(!m.success&&m.message)throw Error(m.message);p(m.message),i(0)}catch(l){a(l.message)}},T=u.exports.useCallback(async()=>{try{const n=await y.getWABasicSettings();if(!n.success)throw Error(n.message);X("Update Business Information"),O(n.payload)}catch(n){a(n.message)}finally{f(!1)}},[O]),z=u.exports.useCallback(async()=>{try{if(c===void 0){const n=await y.getWAChatBots();if(!n.success)throw Error(n.message);const[l]=n.payload;l&&d(l.id)}}catch(n){a(n.message)}finally{f(!1)}},[]);return u.exports.useEffect(()=>{z()},[z]),u.exports.useEffect(()=>{T()},[T]),r(u.exports.Fragment,{children:[t(re,{children:t("title",{children:"WhatsApp Basic Settings"})}),e&&r(pe,{children:[t(le,{component:D,to:"/business-settings",sx:{width:32,height:32},children:t(Le,{})}),t(fe,{children:"Business Information"})]}),t(ge,{children:r(xe,{onSubmit:W(ee),sx:be,children:[t(j,{elevation:0,sx:ye,children:r(ke,{sx:Se,children:[t(we,{children:"Business Information"}),r(S,{sx:V,children:[t(C,{children:t(x,{sx:{mb:0,height:"100%"},children:t(g,{control:h,name:"description",label:"Business Description",rows:5,sx:Fe,multiline:!0})})}),t(Ce,{children:t(Ue,{control:h,name:"file",defaultValue:J,onChange:K,previewAlt:"Profile Image",label:"Upload Profile Image"})})]}),t(S,{sx:{...V,mt:3.75},children:t(C,{children:t(x,{children:r(g,{select:!0,control:h,label:"Business Vertical",name:"vertical",sx:L,defaultValue:I!=null?I:"",children:[t($,{value:"",disabled:!0,children:"Select Vertical"}),o.map(({label:n,value:l},m)=>t($,{value:l,children:n},m))]})})})}),t(S,{children:t(C,{children:t(x,{children:t(g,{control:h,label:"Business Address",name:"address",sx:L})})})}),t(S,{children:t(C,{children:t(x,{children:t(g,{control:h,label:"Email",name:"email",sx:L})})})}),r(S,{sx:Be,children:[t(M,{sx:P,children:t(x,{children:t(g,{control:h,name:"websites[0]",label:"Website 1",placeholder:"Website 1",sx:_})})}),t(M,{sx:P,children:t(x,{children:t(g,{control:h,name:"websites[1]",label:"Website 2",placeholder:"Website 2",sx:_})})})]}),t(ue,{children:!A&&t(G,{type:"submit",children:w})})]})}),c&&r(j,{elevation:0,sx:Ae,children:[t(R,{component:"img",image:"/static/images/svg/bot.svg",alt:"bot",sx:{display:"flex",flexShrink:1,height:"auto",maxWidth:196,width:{xs:194,md:"calc(100% - 200px)"}}}),r(We,{sx:{maxWidth:420},children:[r(k,{component:"h3",sx:{color:"#FFFFFF",fontSize:14,fontWeight:400,lineHeight:"18px"},children:["Start building your WhatsApp Chatbot in seconds. Use the advanced ",t("strong",{children:"Chatflow"})," tool by EasySocial, and build complex conversations in a jiffy."]}),r(Ie,{sx:Ee,children:[r(G,{component:D,to:`/chat-flow/${c}`,sx:ve,disableIcon:!0,children:[t("span",{children:"Build Chatbot"}),t(ce,{viewBox:"0 0 14 10",fill:"none",sx:{width:14,height:10},children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3692 4.19223L8.28352 1.00205L9.25275 0L14 4.90798L9.43077 10L8.46154 8.99796L11.3692 5.62372H0V4.19223H11.3692Z",fill:"#12B0EE"})})]}),s&&t(R,{component:"img",image:"/static/images/svg/messages.svg",alt:"messages",sx:{width:"auto"}})]})]})]})]})})]})},st=()=>t(Te,{});export{st as default};
