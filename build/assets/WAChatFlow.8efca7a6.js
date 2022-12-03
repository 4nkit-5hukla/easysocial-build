import{j as e,S as Z,r as s,u as I,aj as M,aJ as K,a as o,V as S,aa as Y,ab as Q,ac as ee,ad as te,U as _,aO as w,ax as v,an as re,aH as oe,c as ae,W as se}from"./index.286d7f97.js";import{L as T}from"./LeftArrow.c067a303.js";import ne from"./LinkPlatForm.20cd80a8.js";import{I as le,h as ie,c as ce,H as de,d as he}from"./Wrappers.aa57e128.js";import{F as E,G as P,C as me}from"./Grid.43b92e73.js";import{b as pe,d as ue,e as Ce,f as we,c as fe,C as B,a as ge}from"./Card.6f5b1270.js";import{A as Fe}from"./CommonComponents.e038aedb.js";import{p as be}from"./Position.module.ff7b7fa6.js";import{L as xe}from"./ListItem.d5cef95a.js";import{a as ye,L as De}from"./ListItemText.7f41854e.js";import{M as Se}from"./MoreVert.7ce596cb.js";import{M as Le}from"./Menu.beea8aa9.js";import{M as f}from"./MenuItem.25444359.js";import{a as N,F as y,A as W}from"./Form.bf7ae0d3.js";import{D as ke}from"./Divider.9b80a928.js";import{u as H,F as D}from"./FormTextField.9310df81.js";import{D as O,a as R,b as q,c as V}from"./Drawer.ae83be17.js";import{a as j,d as z}from"./Style.ced39dc3.js";import{D as $}from"./Drawer.dc7d68f1.js";import"./Styles.3864ecd6.js";import"./Tags.e07c1ecf.js";import"./toConsumableArray.52b4c8e6.js";import"./styled.e7b57bd4.js";import"./List.12557ecb.js";import"./Card.24e39f91.js";import"./CardContent.23caf9fc.js";import"./listItemTextClasses.cda4af54.js";import"./dividerClasses.7e07a65e.js";import"./listItemButtonClasses.9fc53cf6.js";import"./isMuiElement.1e9ba36c.js";import"./ArrowRight.7576e371.js";import"./Styles.c059562f.js";import"./TextField.3f547d15.js";import"./Select.a628664b.js";import"./useFormControl.14cf7bab.js";import"./useControlled.6e207072.js";const Ae=({className:l,sx:a})=>e(Z,{viewBox:"0 0 12 12",fill:"none",...l?{className:l}:{},sx:a||{},children:e("path",{d:"M11.9733 4.54201C11.9091 4.33529 11.7384 4.18464 11.5329 4.15343L9.10155 3.78374C8.44291 3.6836 7.87738 3.26207 7.59323 2.6595L6.48922 0.31828C6.39731 0.123399 6.20764 0 6 0C5.79233 0 5.60266 0.123399 5.51079 0.31828L4.40687 2.65942C4.12273 3.26201 3.55719 3.68356 2.89853 3.7837L0.467118 4.15339C0.261626 4.18464 0.0908684 4.33529 0.0267114 4.54197C-0.0374455 4.74869 0.016055 4.97558 0.164773 5.12726L1.9772 6.97597C2.42317 7.43087 2.62576 8.071 2.5227 8.69965L2.09108 11.3325C2.05598 11.5468 2.14011 11.7632 2.3081 11.891C2.40314 11.9632 2.5157 12 2.62881 12C2.71563 12 2.80281 11.9783 2.88264 11.9344L5.03589 10.7498C5.63618 10.4195 6.36375 10.4195 6.96404 10.7498L9.11725 11.9344C9.19756 11.9786 9.2855 11.9997 9.37261 12C9.67357 11.9995 9.91739 11.7441 9.91739 11.4291C9.91739 11.3852 9.91267 11.3425 9.90372 11.3015L9.47724 8.69966C9.3742 8.07103 9.57678 7.43091 10.0227 6.97603L11.8352 5.12726C11.9839 4.97558 12.0374 4.74869 11.9733 4.54201Z"})}),Ie={px:{xs:0,md:2}},Me="IgqU",Te="_9w-D",Ne="o-vx",x={TeamMemberItem:Me,OptionMenuPaper:Te,DefaultTag:Ne},_e=l=>{const{title:a,description:n,chatbotId:i,chatflowID:d,setChatflowID:h}=l,[m,C]=s.exports.useState(""),{isTablet:p}=I(),{setSuccessMessage:c,setErrorMessage:u}=M(),[t,g]=s.exports.useState(null),[L,F]=s.exports.useState(!1),b=()=>{F(!0)},k=()=>{F(!1)},G=r=>{g(r.currentTarget)},A=()=>{g(null)},U=async()=>{try{const r=await w.deleteChatFlow(d);if(!r.success){u(r.message);return}c("ChatFlow deleted successfully"),window.location.reload()}catch(r){console.log(r)}},X=async()=>{try{const r=await w.makeDefaultChatFlow(d);if(!r.success){u(r.message);return}c("ChatFlow set as default successfully"),window.location.reload()}catch(r){console.log(r)}},J=s.exports.useRef(async()=>{try{const r=await K.getWAPlatformDetails({platform:"WHATSAPP",product:"engage"});if(r.errors)throw Error(r.errors.pop().message);if(!r.success&&r.message)throw Error(r.message);C(r.payload.whatsapp.phone_number)}catch(r){console.log(r)}});return s.exports.useEffect(()=>{J.current()},[]),o(s.exports.Fragment,{children:[o(xe,{component:"div",sx:Ie,children:[e(ye,{primary:e("div",{className:"primary-block",children:e("h2",{className:"list-title",children:a})}),secondary:n,className:x.TeamMemberItem}),i&&o("span",{className:x.DefaultTag,children:[e(Ae,{}),p&&e("h5",{children:"Default"})]}),e(De,{children:e(S,{onClick:G,children:e(Se,{})})})]}),Boolean(t)&&o(Le,{anchorEl:t,open:Boolean(t),onClose:A,keepMounted:!0,MenuListProps:{"aria-labelledby":"Options"},className:x.OptionMenu,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},classes:{paper:x.OptionMenuPaper},children:[e(f,{disabled:!!i,onClick:()=>{b(),A()},children:"Delete"}),e(f,{disabled:!!i,onClick:()=>{X(),A()},children:"Make Primary"}),e(f,{onClick:()=>{window.open(`/chat-flow/${d}`,"_blank")},children:"Edit ChatFlow"}),e(f,{disabled:!i,onClick:()=>{window.open(`https://api.whatsapp.com/send?phone=+${m}&text=0`,"_blank")},children:"Test on WhatsApp"}),e(f,{onClick:()=>{h(d)},children:"Rename"})]}),o(Y,{open:L,"aria-labelledby":"responsive-dialog-title",children:[e(Q,{id:"responsive-dialog-title",children:"Delete"}),e(ee,{children:"Are you sure you want to delete?"}),o(te,{children:[e(_,{color:"secondary",onClick:()=>{k()},children:"Cancel"}),e(_,{onClick:async()=>{await U()},autoFocus:!0,children:"Delete"})]})]})]})},Be="_0lZ7",ve="Wn4Y",Ee="TDcJ",Pe={pd_none:Be,pd_block_1:ve,pd_block_2:Ee},We=l=>{const{open:a,totalChatFLows:n}=l;return e(s.exports.Fragment,{children:o(pe,{children:[e(ue,{children:e(Ce,{children:e(we,{children:"ChatFlow"})})}),e(ke,{}),e(fe,{children:e("div",{className:Pe.pd_block_2,children:e(N,{disabled:n>=5,disableIcon:!0,type:"button",onClick:()=>{a()},className:"small",children:"New ChatFlow"})})})]})})},He=({open:l,onClose:a})=>{const{setErrorMessage:n,setSuccessMessage:i}=M(),{control:d,handleSubmit:h,reset:m}=H({defaultValues:{name:"",description:""}});return e($,{anchor:"right",open:l,onClose:(p,c)=>!v(c)&&a(),sx:{zIndex:"modal"},children:o(O,{children:[o(R,{children:[e(S,{onClick:a,className:"icon-md-button",children:e(T,{})}),e(q,{children:"Create a new Chatbot"})]}),o(V,{onSubmit:h(async p=>{try{const c=await w.createNewChatFLow({...p,platform:"WHATSAPP"});c.success?(i("New ChatFlow Created"),setTimeout(()=>window.location.reload(),1e3)):n(c.message),m()}catch{n("Something went wrong")}finally{a()}}),children:[e(E,{children:o(P,{children:[e(y,{children:e(D,{control:d,label:"Name",name:"name",sx:j,required:!0,defaultValue:name})}),e(y,{children:e(D,{control:d,name:"description",label:"Description",placeholder:"Description",required:!0,sx:z,rows:5,inputProps:{maxLength:50},multiline:!0})})]})}),e(W,{children:e(N,{type:"submit",children:"Save"})})]})]})})},Oe=({open:l,onClose:a,chatflowID:n})=>{const{setErrorMessage:i,setSuccessMessage:d}=M(),{control:h,handleSubmit:m,reset:C}=H({defaultValues:{name:"",description:""}}),p=s.exports.useRef(async u=>{try{const t=await w.getChatFlowById(u);if(!t.success)throw Error(t.message);C({name:t.payload.name,description:t.payload.description})}catch(t){i(t.message)}});return s.exports.useEffect(()=>{n!==null&&p.current(n)},[n]),e($,{anchor:"right",open:l,onClose:(u,t)=>!v(t)&&a(),sx:{zIndex:"modal"},children:o(O,{children:[o(R,{children:[e(S,{onClick:a,className:"icon-md-button",children:e(T,{})}),e(q,{children:"Rename your ChatFlow"})]}),o(V,{onSubmit:m(async u=>{try{if(n===null)throw Error("Chatflow ID is not available");const t=await w.updateChatFlow({...u,platform:"WHATSAPP"},n);t.success?(d("Chatflow updated successfully"),setTimeout(()=>window.location.reload(),500)):i(t.message),C()}catch{i("Something went wrong")}finally{a()}}),children:[e(E,{children:o(P,{children:[e(y,{children:e(D,{control:h,label:"Name",name:"name",sx:j,required:!0})}),e(y,{children:e(D,{control:h,name:"description",label:"Description",placeholder:"Description",required:!0,sx:z,rows:5,inputProps:{maxLength:50},multiline:!0})})]})}),e(W,{children:e(N,{type:"submit",children:"Save"})})]})]})})},Re=()=>{const{isMobile:l,isTablet:a}=I(),[n,i]=s.exports.useState(!1),[d,h]=s.exports.useState(!1),[m,C]=s.exports.useState([]),[p,c]=s.exports.useState(null),u=s.exports.useRef(async()=>{try{i(!0);const t=await w.getAllChatFlow();if(!t.success)throw Error(t.message);C(t.payload),i(!1)}catch{C([]),i(!1)}});return s.exports.useEffect(()=>{u.current()},[]),n?e(B,{className:be.AbsCenter,children:e(re,{height:72,width:72})}):o(s.exports.Fragment,{children:[e(le,{children:!n&&e(B,{elevation:0,children:e(ge,{children:o(s.exports.Fragment,{children:[a&&e(We,{open:()=>{h(!0)},totalChatFLows:m.length}),m.map(({name:t,description:g,chatbot_id:L,id:F},b)=>e(_e,{title:t,description:g,chatbotId:L,index:b,chatflowID:F,setChatflowID:k=>{c(k)}},b))]})})})}),l&&m.length>0&&e(ie,{children:e(Fe,{onClick:()=>{h(!0)},variant:"outlined",color:"primary",disableIcon:!0,children:"New ChatFlow"})}),e(He,{open:d,onClose:()=>h(!1)}),e(Oe,{open:p!==null,onClose:()=>c(null),chatflowID:p})]})},qe=()=>{const{isMobile:l}=I(),{platformExist:a}=oe();return o(s.exports.Fragment,{children:[l&&o(ce,{children:[e(S,{component:ae,to:"/business-settings",className:"icon-md-button",children:e(T,{})}),e(de,{children:"WhatsApp ChatFlow"})]}),e(he,{children:typeof a=="boolean"&&a===!1?e(me,{children:e(ne,{})}):e(Re,{})})]})},St=()=>o(s.exports.Fragment,{children:[e(se,{children:e("title",{children:"WhatsApp Chat FLow"})}),e(qe,{})]});export{St as default};