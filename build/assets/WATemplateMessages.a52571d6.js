import{_ as se,r as i,e as Ze,c as Je,j as e,a,g as et,B as tt,W as at,L as rt}from"./index.2ac26d62.js";import{W as q,S as st}from"./WATemplatesApi.2fd55d0f.js";import{g as le,h as he,c as ot}from"./WASettingsProvider.4c1d231e.js";import{a as ue}from"./Global.7d5c0e55.js";import{u as ie,i as Pe}from"./SnackProvider.63ea6bb4.js";import{c as Y,D as nt,d as lt,e as it,f as ct,F as ae,G as re,g as N,S as dt,b as ye}from"./CommonComponents.f8da72ee.js";import{L as Se}from"./LeftArrow.973d3ff6.js";import{S as me}from"./Search.e4a28a99.js";import{L as pt}from"./LinkPlatForm.4c31c5b6.js";import{c as mt,d as B}from"./WhatsApp.00540be5.js";import{L as ht}from"./ListItem.b22a2aea.js";import{a as ut,L as ft}from"./ListItemText.badb6005.js";import{C as gt}from"./Chip.21749336.js";import{I as $}from"./IconButton.eeefb18e.js";import{M as xt}from"./MoreVert.d60b5c8e.js";import{M as Ct}from"./Menu.27611023.js";import{M as P}from"./MenuItem.2efbaa58.js";import{D as bt,a as Tt,b as yt}from"./DialogContent.1b35b7a4.js";import{D as vt}from"./DialogTitle.93723217.js";import{B as ne}from"./Button.e8551cb9.js";import{T as wt,A as St,D as Et,E as Wt,I as Ft,J as Mt,K as De,L as Oe,M as ke,u as z,v as K,w as Z,x as Rt,ar as de,as as ve,at as pe,au as J,a9 as ce,a1 as xe,av as Bt,aw as It,ax as Re,ay as Be,az as Lt,aA as Ht,aB as At,aC as Pt,aD as Ce,aE as Ie,m as Ne,H as $e,aF as Dt,N as Ot,n as kt,O as Nt,$ as $t,a0 as Ut,P as Vt,Q as _t,q as Xt,r as zt,R as qt,U as Yt,V as Qt,X as Kt,Y as jt}from"./Tags.5ebd31c8.js";import{C as Ue}from"./Clear.ebc745d6.js";import{F as D,u as Ve}from"./FormTextField.ff4adfc7.js";import{i as _e,f as Gt}from"./index.f57a859a.js";import{F as be}from"./FormIOSSwitch.9bdc9daf.js";import{C as Ee}from"./Card.0389bc19.js";import{a as Zt,g as Jt,s as fe,c as ea}from"./styled.464ae4bf.js";import{T as oe}from"./Typography.b652ddae.js";import{g as ta}from"./mui-tel-input.es.782610c1.js";import{D as Xe}from"./Drawer.fb83cb2f.js";import{T as aa}from"./TextField.a029fd0f.js";import{F as ra}from"./FileUpload.43a1534a.js";import{F as Te}from"./index.69ec329e.js";import{P as sa,a as oa}from"./Play.f6cc7fda.js";import{C as Le}from"./Img.62018d31.js";import{L as we}from"./Link.b7098a58.js";import{C as na}from"./CardContent.24e67874.js";import{D as la}from"./Divider.40173f78.js";import"./Axios.d864dcf9.js";import"./useEnhancedEffect.11d5cdb5.js";import"./ButtonBase.1587db6c.js";import"./styled.de2dfd0b.js";import"./listItemButtonClasses.150bb5f7.js";import"./isMuiElement.62f51c4f.js";import"./Modal.75468f7c.js";import"./useId.2ef831bc.js";import"./moment.9709ab41.js";import"./Switch.857e2d22.js";import"./SwitchBase.f534641e.js";import"./Select.8739a14e.js";import"./InputAdornment.7744f2f9.js";import"./AssetsApi.b7a7de0e.js";function ia(s){return Jt("MuiCardHeader",s)}const ca=Zt("MuiCardHeader",["root","avatar","action","content","title","subheader"]),He=ca,da=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],pa=s=>{const{classes:n}=s;return ea({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},ia,n)},ma=fe("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(s,n)=>se({[`& .${He.title}`]:n.title,[`& .${He.subheader}`]:n.subheader},n.root)})({display:"flex",alignItems:"center",padding:16}),ha=fe("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(s,n)=>n.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),ua=fe("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(s,n)=>n.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),fa=fe("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(s,n)=>n.content})({flex:"1 1 auto"}),ga=i.exports.forwardRef(function(n,h){const E=Ze({props:n,name:"MuiCardHeader"}),{action:I,avatar:g,className:y,component:C="div",disableTypography:d=!1,subheader:w,subheaderTypographyProps:v,title:M,titleTypographyProps:S}=E,x=Je(E,da),b=se({},E,{component:C,disableTypography:d}),W=pa(b);let L=M;L!=null&&L.type!==oe&&!d&&(L=e(oe,se({variant:g?"body2":"h5",className:W.title,component:"span",display:"block"},S,{children:L})));let T=w;return T!=null&&T.type!==oe&&!d&&(T=e(oe,se({variant:g?"body2":"body1",className:W.subheader,color:"text.secondary",component:"span",display:"block"},v,{children:T}))),a(ma,se({className:et(W.root,y),as:C,ref:h,ownerState:b},x,{children:[g&&e(ha,{className:W.avatar,ownerState:b,children:g}),a(fa,{className:W.content,ownerState:b,children:[L,T]}),I&&e(ua,{className:W.action,ownerState:b,children:I})]}))}),ze=ga,xa=({color:s="#4D4D4D"})=>e("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"//www.w3.org/2000/svg",children:e("path",{d:"M12.537 9.457H9.366C9.18035 9.457 9.0023 9.53075 8.87103 9.66203C8.73975 9.7933 8.666 9.97135 8.666 10.157C8.666 10.3427 8.73975 10.5207 8.87103 10.652C9.0023 10.7832 9.18035 10.857 9.366 10.857H11.046C10.2739 11.6639 9.27808 12.2215 8.18661 12.4582C7.09515 12.6948 5.95785 12.5997 4.92084 12.1851C3.88384 11.7704 2.99451 11.0552 2.36711 10.1312C1.73972 9.20727 1.40292 8.11683 1.4 7C1.4 6.81435 1.32625 6.6363 1.19497 6.50503C1.0637 6.37375 0.885652 6.3 0.7 6.3C0.514348 6.3 0.336301 6.37375 0.205025 6.50503C0.0737498 6.6363 0 6.81435 0 7C0.00370066 8.36696 0.407555 9.70292 1.16172 10.843C1.91589 11.9831 2.98737 12.8775 4.24392 13.4157C5.50047 13.9539 6.88711 14.1124 8.23271 13.8716C9.57831 13.6309 10.824 13.0015 11.816 12.061V13.3C11.816 13.4857 11.8897 13.6637 12.021 13.795C12.1523 13.9263 12.3303 14 12.516 14C12.7017 14 12.8797 13.9263 13.011 13.795C13.1423 13.6637 13.216 13.4857 13.216 13.3V10.15C13.2143 9.96914 13.1426 9.79598 13.016 9.66679C12.8895 9.5376 12.7178 9.46242 12.537 9.457ZM7 0C5.20547 0.00511853 3.48144 0.69924 2.184 1.939V0.7C2.184 0.514348 2.11025 0.336301 1.97897 0.205025C1.8477 0.0737498 1.66965 0 1.484 0C1.29835 0 1.1203 0.0737498 0.989025 0.205025C0.85775 0.336301 0.784 0.514348 0.784 0.7V3.85C0.784 4.03565 0.85775 4.2137 0.989025 4.34497C1.1203 4.47625 1.29835 4.55 1.484 4.55H4.634C4.81965 4.55 4.9977 4.47625 5.12897 4.34497C5.26025 4.2137 5.334 4.03565 5.334 3.85C5.334 3.66435 5.26025 3.4863 5.12897 3.35503C4.9977 3.22375 4.81965 3.15 4.634 3.15H2.954C3.72573 2.34351 4.72086 1.78605 5.81168 1.54918C6.90249 1.3123 8.03921 1.40682 9.07592 1.8206C10.1126 2.23439 11.002 2.94855 11.63 3.87142C12.2579 4.7943 12.5957 5.88377 12.6 7C12.6 7.18565 12.6737 7.3637 12.805 7.49497C12.9363 7.62625 13.1143 7.7 13.3 7.7C13.4857 7.7 13.6637 7.62625 13.795 7.49497C13.9263 7.3637 14 7.18565 14 7C14 6.08075 13.8189 5.17049 13.4672 4.32122C13.1154 3.47194 12.5998 2.70026 11.9497 2.05025C11.2997 1.40024 10.5281 0.884626 9.67878 0.532843C8.8295 0.18106 7.91925 0 7 0Z",fill:s})}),Ca=({template_status:s,name:n,id:h,description:E})=>{const{setErrorMessage:I,setSuccessMessage:g}=ie(),{setEditWaTemplateId:y,setShowWaTemplateForm:C,setPreviewWaTemplateId:d,setShowWaTemplatePreview:w}=le(),[v,M]=i.exports.useState(null),[S,x]=i.exports.useState(!1),b=()=>{x(!0)},W=()=>{x(!1)},L=c=>{M(c.currentTarget)},T=()=>{M(null)},o=async()=>{try{const c=await q.deleteWaTemplateMessage(h);if(!c.success)throw Error(c.message);g(c.message),setTimeout(()=>window.location.reload(),1e3)}catch(c){I(c.message)}finally{W()}};return a(i.exports.Fragment,{children:[a(ht,{component:"div",sx:{px:{xs:0,md:2}},children:[e(ut,{primary:a("div",{className:"primary-block",children:[e("h2",{className:"list-title",children:n}),e(gt,{label:s,size:"small",sx:{bgcolor:mt[s],alignItems:"center",color:"#FFFFFF",borderRadius:1,height:20,"& .MuiChip-label":{px:.5,fontSize:10,fontWeight:900,lineHeight:"12px"}}})]}),secondary:E,sx:{"& .primary-block":{alignItems:"center",display:"flex",flexWrap:"wrap",gap:1.25,marginBottom:.75,"& .list-title":{color:"text.secondary",fontSize:15,fontWeight:500,lineHeight:"18px"}},"& .MuiListItemText-secondary":{color:"text.secondary",fontSize:12,fontWeight:400,lineHeight:"15px"}}}),e(ft,{children:e($,{onClick:L,children:e(xt,{})})})]}),Boolean(v)&&a(Ct,{anchorEl:v,open:Boolean(v),onClose:T,keepMounted:!0,MenuListProps:{"aria-labelledby":"Options"},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiPaper-root":{minWidth:120}},children:[s==="DRAFT"&&e(P,{onClick:()=>{y(h),C(!0),T()},children:"Edit"}),(s==="SUBMITTED"||s==="APPROVED")&&e(P,{onClick:()=>{d(h),w(!0),T()},children:"Preview"}),e(P,{onClick:()=>{b(),T()},children:"Delete"})]}),a(bt,{open:S,"aria-labelledby":"responsive-dialog-title",children:[e(vt,{id:"responsive-dialog-title",children:"Delete"}),e(Tt,{children:"Are you sure you want to delete?"}),a(yt,{children:[e(ne,{color:"secondary",onClick:()=>{W()},children:"Cancel"}),e(ne,{onClick:async()=>{await o()},autoFocus:!0,children:"Delete"})]})]})]})},ba=({isSearchActive:s,setSearchActive:n})=>{const{setErrorMessage:h,setSuccessMessage:E}=ie(),{totalWaTemplates:I}=he(),{setWaTemplateFilter:g,setShowWaTemplateForm:y,setTotalWaTemplates:C,setWaTemplatesData:d}=le(),[w,v]=i.exports.useState(!1),M=async()=>{try{v(!0);const S=await q.syncWaTemplateMessage();if(S.success){const x=await q.getWaTemplateMessages();if(!x.success)throw Error(S.message);C(x.payload.length),d(x.payload),E(S.message)}else h(S.message)}catch(S){h(S.message)}finally{v(!1)}};return a(wt,{children:[e(St,{children:e(Y,{disableIcon:!0,type:"button",onClick:()=>y(!0),sx:{py:0,px:2,height:36,mt:0},children:"New Template Message"})}),a(Et,{children:[!s&&e(Wt,{children:e(Ft,{children:`${I} Template Messages`})}),a(Mt,{children:[s&&e(De,{children:a(Oe,{children:[e($,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(me,{})}),e(ke,{onChange:({target:{value:S}})=>g(S),placeholder:"Search Template"}),e($,{onClick:()=>{g(""),n(!s)},sx:{position:"absolute",right:0,top:0},children:e(Ue,{})})]})}),!s&&e($,{onClick:()=>n(S=>!S),children:e(me,{})}),!s&&e(Y,{icon:e(xa,{color:w?"#00000042":"#4D4D4D"}),variant:"outlined",type:"button",disabled:w,onClick:()=>M(),sx:{alignSelf:"center",borderRadius:4,borderColor:"#0000003b",color:"#000000de",flexDirection:"row-reverse",fontSize:14,fontWeight:400,letterSpacing:"0.02857em",lineHeight:"16px",gap:1,height:30,py:.625,px:1.875,textTransform:"capitalize"},children:w?"Syncing...":"Sync Messages"})]})]})]})},Ta=({index:s,control:n,removeQuickReply:h})=>a(Ee,{sx:{border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:4,boxShadow:"0px 0px 20px 1px rgba(0, 0, 0, 0.1)",mb:3,p:2,pb:3},elevation:0,children:[e(ze,{title:`Quick Reply ${s+1}`,action:e($,{"aria-label":`Remove Quick Reply ${s+1}`,onClick:()=>h(s),children:e(Pe,{})}),sx:{p:0,"& .MuiCardHeader-title":{fontSize:16,fontWeight:500,lineHeight:"22px"}}}),e(z,{sx:{my:2},children:e(D,{control:n,name:`components[3].buttons[${s}].text`,label:"Label",required:!0,sx:K})})]},s),ya=({index:s,type:n,url:h,phone_number:E,waTemplateButtonCtaTypes:I,control:g,setValue:y,removeCallAction:C})=>{const{country:d}=ue(),w=/[{][{]\d{1,3}[}][}]/gm,[v,M]=i.exports.useState(0),S=()=>{if(v===1)return;const b=`${h}{{${1}}}`;y(`components[3].buttons[${s}].url`,b),M(1)},x=i.exports.useCallback(()=>{if(h){const b=h.match(w);b&&b.length>0?M(1):M(0)}},[h]);return i.exports.useEffect(()=>{x()},[x]),a(Ee,{sx:{border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:4,boxShadow:"0px 0px 20px 1px rgba(0, 0, 0, 0.1)",mb:3,p:2,pb:3},elevation:0,children:[e(ze,{title:`Call to Action ${s+1}`,action:e($,{"aria-label":`Remove Call to Action ${s+1}`,onClick:()=>C(s),children:e(Pe,{})}),sx:{p:0,"& .MuiCardHeader-title":{fontSize:16,fontWeight:500,lineHeight:"22px"}}}),e(z,{sx:{my:2},children:a(D,{select:!0,control:g,label:"Action Type",name:`components[3].buttons[${s}].type`,sx:Z,required:!0,defaultValue:n,children:[e(P,{value:"",disabled:!0,children:"Select Action Type"}),I.map(({value:b,name:W},L)=>e(P,{value:b,children:W},L))]})}),n!==""&&e(z,{sx:{my:2},children:e(D,{control:g,name:`components[3].buttons[${s}].text`,label:"Label",required:!0,sx:K})}),n==="PHONE_NUMBER"&&e(z,{sx:{my:2},children:e(ta,{label:"Phone",placeholder:"Phone",required:!0,fullWidth:!0,defaultCountry:d,value:E!=null?E:"",onChange:b=>{y(`components[3].buttons[${s}].phone_number`,b.replaceAll(" ",""))},variant:"filled",sx:Rt})}),n==="URL"&&a(z,{sx:{my:2},children:[a(de,{children:[e(D,{control:g,name:`components[3].buttons[${s}].url`,label:"URL",required:!0,sx:{...K,pb:2,height:"auto"}}),e(ve,{size:"small",focusRipple:!1,className:"add-variable",disabled:v===1,onClick:S,children:"ADD VARIABLE"})]}),a(pe,{children:[a(J,{children:[h?h.length:0,"/60 Characters"]}),a(J,{children:[v,"/1 Variable"]})]})]})]},s)},va=({open:s,closeDrawer:n})=>{const h=/[{][{]\d{1,3}[}][}]/gm,{setErrorMessage:E,setSuccessMessage:I}=ie(),{businessId:g}=ue(),{editWaTemplateId:y,waTemplatesData:C,waTemplateCategories:d,waTemplateLanguages:w,waTemplateTypes:v,waTemplateHeaderTypes:M,waTemplateButtonTypes:S,waTemplateButtonCtaTypes:x}=he(),{setWaTemplatesData:b,setShowWaPreviewForm:W,setPreviewWaTemplateId:L}=le(),T={name:"",category:"",language:"",template_type:"",businessId:g,components:[{format:"",text:"",type:B.HEADER,active:!1},{text:"",type:B.BODY},{text:"",type:B.FOOTER,active:!1},{buttons:[],type:B.BUTTONS,active:!1}]},{control:o,handleSubmit:c,watch:l,reset:f,setValue:r}=Ve({defaultValues:T}),{name:O,category:V,language:ee,template_type:A,components:j}=l(),H=j.find(({type:t})=>t===B.HEADER),_=j.find(({type:t})=>t===B.BODY),Q=j.find(({type:t})=>t===B.FOOTER),k=j.find(({type:t})=>t===B.BUTTONS),[G,X]=i.exports.useState(0),[m,F]=i.exports.useState(""),R=i.exports.useCallback(()=>{const p=O.match(/^[A-Za-z0-9_]+$/g)===null?O.slice(0,-1):O.replace(/\s/g,"").toLowerCase();r("name",p)},[O]),te=()=>{if(G===1)return;const t=`${H.text}{{${1}}}`;r("components[0].text",t),X(1)},ge=()=>{const t=_.text.match(h),p=t&&t.length>0?`${_.text}{{${t.length+1}}}`:`${_.text}{{${1}}}`;r("components[1].text",p)},We=i.exports.useCallback(()=>{const t=H.text.match(h);t&&t.length>0?X(1):X(0)},[H.text]),Fe=i.exports.useCallback(()=>{const t=H.text.match(h);if(t===null){X(0);return}if(t.length===0){X(0);return}r("components[0].text",t.reduce((p,u,U)=>U===0?p.replace(u,`{{${U+1}}}`):p.replace(u,""),t.reduce((p,u,U)=>p.replace(u,`{{${U+1}}}`),H.text))),X(1)},[H.text]),qe=()=>{const t=_.text.match(h);t!==null&&t.length!==0&&r("components[1].text",t.reduce((p,u,U)=>p.replace(u,`{{${U+1}}}`),_.text))},Ye=t=>{F(t.target.value)},Qe=()=>{if(m===""&&E("Please Select button Type"),m==="QUICK_REPLY")if(k.buttons.length<3){const t=k.buttons;t.push({type:"QUICK_REPLY",text:""}),r("components[3].buttons",t)}else E("Limit exceeded");if(m==="CALL_TO_ACTION")if(k.buttons.length<2){const t=k.buttons;t.push({type:"",text:""}),r("components[3].buttons",t)}else E("Limit exceeded")},Ke=t=>{const p=k.buttons;p.splice(t,1),r("components[3].buttons",p)},je=t=>{const p=k.buttons;p.splice(t,1),r("components[3].buttons",p)},Ge=async t=>{var p;try{if(y){const u=await q.updateWaTemplateMessage(y,t);if(!u.success)throw Error(u.message);I(u.message),L((p=u.payload.id)!=null?p:y),f(T),n(),W(!0)}else{const u=await q.createWaTemplateMessage(t);if(!u.success)throw Error(u.message);I(u.message),b([u.payload,...C]),L(u.payload.id),f(T),n(),W(!0)}}catch(u){E(u.message)}},Me=i.exports.useCallback(async()=>{try{if(y){const t=await q.getWaTemplateMessage(y);if(!t.success)throw Error(t.message);f(t.payload),t.payload.components[0].format!==""&&t.payload.components[0].text!==""&&r("components[0].active",!0),t.payload.components[2].text!==""&&r("components[2].active",!0),t.payload.components[3].buttons.length>0&&r("components[3].active",!0),t.payload.components[3].buttons[0]&&(t.payload.components[3].buttons[0].type==="QUICK_REPLY"?F("QUICK_REPLY"):(t.payload.components[3].buttons[0].type==="URL"||t.payload.components[3].buttons[0].type==="PHONE_NUMBER")&&F("CALL_TO_ACTION"))}}catch(t){E(t.message)}},[y]);return i.exports.useEffect(()=>{Me()},[Me]),i.exports.useEffect(()=>{R()},[R]),i.exports.useEffect(()=>{Fe()},[Fe]),i.exports.useEffect(()=>{We()},[We]),i.exports.useEffect(()=>{H.active||r("components[0].format","")},[H.active]),i.exports.useEffect(()=>{Q.active||r("components[2].text","")},[Q.active]),e(Xe,{anchor:"right",open:s,onClose:(t,p)=>{_e(p)||(f(T),n())},sx:{zIndex:"modal"},children:a(nt,{sx:{width:{xs:"100vw",md:360}},children:[a(lt,{children:[e($,{onClick:()=>{f(T),n()},sx:{width:32,height:32},children:e(Se,{})}),e(it,{children:`${y?"Update":"Create New"} Template`})]}),a(ct,{onSubmit:c(Ge),onReset:()=>{f(T),n()},children:[e(ae,{children:a(re,{children:[e(N,{children:e(D,{control:o,name:"name",label:"Template Name",placeholder:"Template Name",required:!0,sx:K})}),e(N,{children:a(D,{select:!0,control:o,label:"Template Category",name:"category",sx:Z,required:!0,defaultValue:V,children:[e(P,{value:"",disabled:!0,children:"Select Template Category"}),d.map(({value:t,name:p},u)=>e(P,{value:t,children:p},u))]})}),e(N,{children:a(D,{select:!0,control:o,label:"Language",name:"language",sx:Z,required:!0,defaultValue:ee,children:[e(P,{value:"",disabled:!0,children:"Select Language"}),w.map(({code:t,name:p},u)=>e(P,{value:t,children:p},u))]})}),e(N,{children:a(D,{select:!0,control:o,label:"Template Type",name:"template_type",sx:Z,required:!0,defaultValue:A,children:[e(P,{value:"",disabled:!0,children:"Select Template Type"}),v.map(({value:t,label:p},u)=>e(P,{value:t,children:p},u))]})}),A==="media"&&e(N,{children:a(ae,{sx:{justifyContent:"space-between"},children:[e(re,{children:e(ce,{children:"Header"})}),e(be,{control:o,name:"components[0].active"})]})}),A==="media"&&H.active&&e(N,{children:a(D,{select:!0,control:o,label:"Header Type",name:"components[0].format",sx:Z,required:!0,defaultValue:H.format,children:[e(P,{value:"",disabled:!0,children:"Select Header Type"}),M.map(({value:t,name:p},u)=>e(P,{value:t,children:p},u))]})}),A==="media"&&H.active&&H.format==="TEXT"&&a(N,{children:[a(de,{children:[e(D,{control:o,rows:5,multiline:!0,name:"components[0].text",placeholder:"Message",required:!0,inputProps:{maxLength:60},sx:xe}),e(ve,{size:"small",focusRipple:!1,className:"add-variable",disabled:G===1,onClick:te,children:"ADD VARIABLE"})]}),a(pe,{children:[a(J,{children:[H.text.length,"/60 Characters"]}),a(J,{children:[G,"/1 Variable"]})]})]}),A!==""&&e(N,{children:e(ce,{children:"Body"})}),A!==""&&a(N,{children:[a(de,{children:[e(D,{control:o,rows:5,multiline:!0,name:"components[1].text",placeholder:"Message",required:!0,onBlur:qe,inputProps:{maxLength:1024},sx:xe}),e(ve,{size:"small",focusRipple:!1,className:"add-variable",onClick:ge,children:"ADD VARIABLE"})]}),e(pe,{children:a(J,{children:[_.text.length,"/1024 Characters"]})})]}),A==="media"&&e(N,{children:a(ae,{sx:{justifyContent:"space-between"},children:[e(re,{children:e(ce,{children:"Footer"})}),e(be,{control:o,name:"components[2].active"})]})}),A==="media"&&Q.active&&a(N,{children:[e(de,{children:e(D,{control:o,rows:5,multiline:!0,name:"components[2].text",placeholder:"Message",required:!0,inputProps:{maxLength:60},sx:xe})}),e(pe,{children:a(J,{children:[Q.text.length,"/60 Characters"]})})]}),A==="media"&&e(N,{children:a(ae,{sx:{justifyContent:"space-between"},children:[e(re,{children:e(ce,{children:"Buttons"})}),e(be,{control:o,name:"components[3].active"})]})}),A==="media"&&k.active&&a(N,{children:[a(ae,{sx:{alignItems:"center",columnGap:2,justifyContent:"space-between",mb:2.5},children:[e(re,{children:a(aa,{select:!0,label:"Button Type",sx:Z,required:!0,value:m,onChange:Ye,disabled:k.buttons.length>0,children:[e(P,{value:"",disabled:!0,children:"Select Button Type"}),S.map(({label:t,name:p},u)=>e(P,{value:p,children:t},u))]})}),e(dt,{children:e(Y,{variant:"outlined",color:"primary",onClick:Qe,disableIcon:!0,children:"Add a Button"})})]}),A==="media"&&k.active&&k.buttons.length>0&&e(i.exports.Fragment,{children:k.buttons.map(({type:t,url:p,phone_number:u},U)=>{switch(t){case"QUICK_REPLY":return e(Ta,{index:U,removeQuickReply:Ke,control:o},U);default:return e(ya,{index:U,type:t,url:p,phone_number:u,waTemplateButtonCtaTypes:x,control:o,setValue:r,removeCallAction:je},U)}})})]})]})}),a(ye,{children:[e(Y,{type:"reset",variant:"outlined",color:"primary",sx:{height:48},disableIcon:!0,children:"Cancel"}),e(Y,{type:"submit",children:"Preview & Save"})]})]})]})})},Ae=({components:s})=>{const n=i.exports.useRef(null),[h,E]=i.exports.useState(!1),[I,g]=i.exports.useState(!1),[y,C]=i.exports.useState(""),d=s.find(({type:o})=>o===B.HEADER),w=s.find(({type:o})=>o===B.BODY),v=s.find(({type:o})=>o===B.FOOTER),M=s.find(({type:o})=>o===B.BUTTONS),S=(o=>{if(o){const{example:c}=o;if(c){const{header_text:l}=c;return l||[]}else return[]}else return[]})(d),x=(o=>{if(o){const{example:c}=o;if(c){const{header_handle:l}=c;if(l&&l.length>0){const[f]=l;return f}else return""}else return""}else return""})(d),b=(o=>{if(o){const{example:c}=o;if(c){const{header_files:l}=c;if(l&&l.length>0){const[f]=l;return f}else return""}else return""}else return""})(d),W=(o=>{if(o){const{example:c}=o;if(c){console.log(c);const{body_text:l}=c;return l?l.length===1&&Array.isArray(l[0])?l.pop():l:[]}else return[]}else return[]})(w),L=(o=>d?o.reduce((c,l,f)=>l&&l!==""?c.replace(`{{${f+1}}}`,l):c,d.text):"")(S),T=(o=>w?o.reduce((c,l,f)=>l&&l!==""?c.replace(`{{${f+1}}}`,l):c,w.text):"")(W);return i.exports.useEffect(()=>{n.current&&(n.current.addEventListener("playing",()=>{C("playing")}),n.current.addEventListener("pause",()=>{C("")}),n.current.addEventListener("ended",()=>{C("")}),h?n.current.play():n.current.pause())},[h]),a(Bt,{children:[d&&d.format==="IMAGE"&&e(It,{children:x&&x!==""&&e(Le,{component:"img",alt:"header-img",image:x,sx:Re})}),d&&d.format==="VIDEO"&&a(we,{underline:"none",component:"button",type:"button",onClick:()=>E(!h),onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),sx:Be,children:[e(Le,{component:"video",ref:n,className:"video",disablePictureInPicture:!0,sx:{...Re,height:130},children:x&&x!==""&&e("source",{src:x,type:"video/mp4"})}),a(tt,{position:"absolute",display:"flex",children:[y===""&&e(sa,{}),I&&y==="playing"&&e(oa,{})]})]}),d&&d.format==="DOCUMENT"&&e(we,{underline:"none",className:"media-wrapper doc",href:x,target:"_blank",sx:{...Be,backgroundColor:"#F5F5F5",color:"#A1AEB4",fontSize:90,fontWeight:900,lineHeight:"96px"},children:x&&x!==""?b.split(".").pop().slice(0,4).toUpperCase():""}),d&&d.format==="TEXT"&&e(Lt,{children:L}),e(Ht,{children:Gt(T)}),v&&v.text!==""&&e(At,{children:v.text}),M&&M.buttons.length>0&&e(Pt,{children:M.buttons.map((o,c)=>e(i.exports.Fragment,{children:o.type==="QUICK_REPLY"?e(ne,{variant:"outlined",type:"button",sx:{...Ce,color:"#767676",minWidth:"calc(50% - 8px)"},children:o.text}):o.type==="PHONE_NUMBER"?e(ne,{href:`tel:${o.phone_number}`,variant:"outlined",sx:{...Ce,color:"#32C5FF",minWidth:"100%"},children:o.text}):a(ne,{href:o.example?o.example.reduce((l,f,r)=>f&&f!==""?l.replace(`{{${r+1}}}`,f):l,o.url):"",variant:"outlined",target:"_blank",rel:"noreferrer",sx:{...Ce,color:"#32C5FF",minWidth:"100%"},children:[e(st,{}),o.text]})},c))})]})},wa=({open:s,closeDrawer:n})=>{var Q,k,G,X;const{isMobile:h,isTablet:E}=ue(),I=/[{][{]\d{1,3}[}][}]/gm,{setErrorMessage:g,setSuccessMessage:y}=ie(),{previewWaTemplateId:C,previewWaTemplateData:d,showWaPreviewForm:w,showWaTemplatePreview:v}=he(),{setPreviewWaTemplateData:M,setEditWaTemplateId:S,setShowWaTemplateForm:x}=le(),[b,W]=i.exports.useState([]),L={components:[{format:"",text:"",type:B.HEADER},{text:"",type:B.BODY},{text:"",type:B.FOOTER},{buttons:[],type:B.BUTTONS}]},{control:T,handleSubmit:o,watch:c,setValue:l}=Ve({defaultValues:L}),{components:f}=c(),r=f.find(({type:m})=>m===B.HEADER),O=f.find(({type:m})=>m===B.BODY),V=f.find(({type:m})=>m===B.BUTTONS),ee=(k=(Q=r==null?void 0:r.example)==null?void 0:Q.header_handle)==null?void 0:k[0],A=[r&&r.format!=="TEXT",r&&r.format==="TEXT"&&r.text&&r.text!==""?r.text.includes("{{1}}"):!1,O&&O.text&&O.text!==""&&O.text.includes("{{1}}"),V&&V.buttons.length>0&&((G=V.buttons[0])==null?void 0:G.type)==="URL"&&((X=V.buttons[0])==null?void 0:X.url.includes("{{1}}"))].reduce((m,F)=>m||F,!1),j=async m=>{try{const F=m.components.map(R=>{var te;return R==null||delete R.active,R.type==="HEADER"&&((te=R==null?void 0:R.example)==null||delete te.header_files),R});if(C){console.log(F);const R=await q.updateWaTemplateComponents(C,{components:F});if(!R.success)throw Error(R.message);y(R.message),n()}}catch(F){g(F.message)}},H=i.exports.useCallback(()=>{f.length>0&&f.forEach(({type:m,text:F})=>{if(m==="BODY"){const R=F.match(I);R&&W(R.map((te,ge)=>ge+1))}})},[f]),_=i.exports.useCallback(async()=>{try{if(C&&d===null){const m=await q.getWaTemplateMessage(C);if(!m.success)throw Error(m.message);M(m.payload),l("components",m.payload.components)}}catch(m){g(m.message)}},[C]);return i.exports.useEffect(()=>{_()},[_]),i.exports.useEffect(()=>{H()},[H]),a(Xe,{anchor:"right",open:s,onClose:(m,F)=>{(!_e(F)||v)&&n()},sx:{zIndex:"modal","& .MuiPaper-root.MuiDrawer-paper":{flexDirection:"row-reverse"}},children:[a(Ie,{sx:{width:{xs:"100vw",md:360}},children:[s&&a(Ne,{children:[e($,{onClick:()=>{n()},sx:{width:32,height:32},children:e(Se,{})}),e($e,{children:A&&!v?"Enter Sample Values":"Preview Template"})]}),s&&a(Dt,{onSubmit:o(j),children:[(!A||v||h)&&d&&e(Ae,{components:d.components}),w&&r&&(r.format==="IMAGE"||r.format==="VIDEO"||r.format==="DOCUMENT")&&e(z,{children:e(ra,{setValue:l,control:T,fileTypes:r.format==="IMAGE"?Te.IMAGE:r.format==="VIDEO"?Te.VIDEO:Te.FILE,label:`Drag & Drop ${r.format.charAt(0).toUpperCase()}${r.format.slice(1).toLowerCase()}`,defaultFieldName:"components[0].example.header_handle[0]",fileNameField:"components[0].example.header_files[0]",fileURL:ee!=null?ee:"",width:"100%"})}),w&&r&&r.format==="TEXT"&&r.text.includes("{{1}}")&&e(z,{children:e(D,{control:T,name:"components[0].example.header_text[0]",label:"Header Variable 1",placeholder:"Header {{1}}",required:!0,sx:K})}),w&&b.length>0&&b.map((m,F)=>e(z,{children:e(D,{control:T,name:`components[1].example.body_text[${F}]`,label:`Body Variable ${m}`,placeholder:`Body ${m}`,required:!0,sx:K})},`bodyVar{{${m}}}`)),w&&V&&V.buttons&&V.buttons.length>0&&V.buttons.map((m,F)=>(console.log(m.url),m.type==="URL"&&m.url.match(I)?e(z,{children:e(D,{control:T,name:`components[3].buttons[${F}].example[0]`,label:`URL Button ${F+1}`,placeholder:`Url button ${F+1} variable 1`,required:!0,sx:K})},F):null)),w&&e(ye,{children:e(Y,{type:"submit",children:"Submit for Approval"})}),w&&a(ye,{sx:{alignItems:"center",justifyContent:"center",gap:.625,my:2},children:[e(oe,{component:"p",sx:{color:"#686C72",fontSize:14,fontWeight:400,lineHeight:"16px"},children:"Not happy?"}),e(we,{type:"button",component:"button",variant:"body2",underline:"none",onClick:()=>{S(C),x(!0),n()},children:"Continue Editing"})]})]})]}),!v&&s&&A&&E&&e(Ie,{sx:{borderRight:"1px solid #24272c1a",py:11.25,px:6.25,width:360},children:e(Ae,{components:f})})]})},Sa=()=>{const{isMobile:s,isTablet:n}=ue(),{setErrorMessage:h}=ie(),[E,I]=i.exports.useState(!0),[g,y]=i.exports.useState(!1),{waTemplatesData:C,waTemplateFilter:d,showWaTemplateForm:w,showWaPreviewForm:v,showWaTemplatePreview:M}=he(),{setWaTemplatesData:S,setTotalWaTemplates:x,setWaTemplateFilter:b,setShowWaTemplateForm:W,setShowWaPreviewForm:L,setShowWaTemplatePreview:T,setEditWaTemplateId:o,setPreviewWaTemplateId:c}=le(),{platformExist:l}=ot(),f=i.exports.useCallback(async()=>{try{if(typeof l=="boolean"&&l){const r=await q.getWaTemplateMessages();if(!r.success)throw Error(r.message);x(r.payload.length),S(r.payload)}}catch(r){h(r.message)}finally{I(!1)}},[l]);return i.exports.useEffect(()=>{f()},[f]),a(i.exports.Fragment,{children:[e(at,{children:e("title",{children:"WhatsApp Template Messages"})}),s&&a(Ne,{sx:Ot,children:[!g&&e($,{component:rt,to:"/business-settings",sx:{width:32,height:32},children:e(Se,{})}),!g&&e($e,{children:"Template Messages"}),g&&e(De,{children:a(Oe,{children:[e($,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(me,{})}),e(ke,{onChange:({target:{value:r}})=>b(r),placeholder:"Search Template"}),e($,{onClick:()=>{b(""),y(!g)},sx:{position:"absolute",right:0,top:0},children:e(Ue,{})})]})}),!g&&C.length>0&&e($,{onClick:()=>y(r=>!r),children:e(me,{})})]}),e(kt,{sx:Nt,children:typeof l=="boolean"&&l===!1?e($t,{sx:Ut,children:e(pt,{})}):e(Vt,{sx:_t,children:!E&&e(Ee,{elevation:0,sx:Xt,children:e(na,{sx:zt,children:C.length===0?a(qt,{children:[e(Yt,{children:e(Y,{disableIcon:!0,onClick:()=>W(!0),sx:{borderRadius:2,boxShadow:"0px 8px 8px rgba(50, 197, 255, 0.1)",fontSize:16,fontWeight:700,height:36,lineHeight:"19px",margin:"auto",textTransform:"capitalize"},children:"New Template Message"})}),e(Qt,{children:a(Kt,{children:["In order to initiate a conversation message your customers. Create a new template message. Send a template message to masses from ",e("strong",{children:"Broadcast"})," option in ",e("strong",{children:"Engage"})," workspace."]})})]}):a(i.exports.Fragment,{children:[n&&e(ba,{isSearchActive:g,setSearchActive:y}),n&&e(la,{}),C.filter(r=>{var O;return(O=r==null?void 0:r.name)==null?void 0:O.toLowerCase().includes(d==null?void 0:d.toLowerCase())}).map((r,O)=>e(Ca,{...r},O))]})})})})}),s&&C.length>0&&e(jt,{children:e(Y,{onClick:()=>W(!0),variant:"outlined",color:"primary",disableIcon:!0,children:"New Template Message"})}),e(va,{open:w,closeDrawer:()=>{o(void 0),W(!1)}}),e(wa,{open:v||M,closeDrawer:()=>{c(void 0),L(!1),T(!1)}})]})},wr=()=>e(Sa,{});export{wr as default};
