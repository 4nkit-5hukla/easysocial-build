import{aj as w,j as e,ax as z,a as r,V as h,r as p,aa as V,ab as W,ac as j,ad as U,U as F,u as G,an as X,L as q,W as _}from"./index.286d7f97.js";import{u as E,a as K,B as Y}from"./BizParticipantsProvider.077aa1f8.js";import{B as k}from"./BizParticipantsApi.45e74ce5.js";import{L as N}from"./LeftArrow.c067a303.js";import{S as x}from"./Search.639f0d82.js";import{u as $,F as S}from"./FormTextField.9310df81.js";import{g as J}from"./mui-tel-input.es.05a90aa6.js";import{F as v,A as Q,a as M}from"./Form.bf7ae0d3.js";import{D as Z,a as ee,b as re,c as te}from"./Drawer.ae83be17.js";import{F as ae,G as oe}from"./Grid.43b92e73.js";import{F as D,b as se}from"./Style.ced39dc3.js";import{D as ie}from"./Drawer.dc7d68f1.js";import{S as P,a as H,b as A}from"./Search.15250336.js";import{b as ne,c as le,d as ce,e as me,f as de,g as pe,C as B,a as he}from"./Card.6f5b1270.js";import{C as O}from"./Clear.cbc04d66.js";import{L as ue}from"./ListItem.d5cef95a.js";import{a as be,L as ge}from"./ListItemText.7f41854e.js";import{M as fe}from"./MoreVert.7ce596cb.js";import{M as Ce}from"./Menu.beea8aa9.js";import{M as L}from"./MenuItem.25444359.js";import{f as Ie,H as Me,d as xe,I as Te,g as ve,h as ye}from"./Wrappers.aa57e128.js";import{C as we,a as ke,b as Fe}from"./Cta.8e3e7ba2.js";import{p as Se}from"./Position.module.ff7b7fa6.js";import{D as De}from"./Divider.9b80a928.js";import"./TextField.3f547d15.js";import"./Select.a628664b.js";import"./useFormControl.14cf7bab.js";import"./isMuiElement.1e9ba36c.js";import"./useControlled.6e207072.js";import"./InputAdornment.85efb26d.js";import"./ArrowRight.7576e371.js";import"./Card.24e39f91.js";import"./CardContent.23caf9fc.js";import"./List.12557ecb.js";import"./listItemButtonClasses.9fc53cf6.js";import"./listItemTextClasses.cda4af54.js";import"./dividerClasses.7e07a65e.js";const Be=({open:s,closeDrawer:o})=>{const{setErrorMessage:b,setSuccessMessage:c}=w(),{control:i,handleSubmit:n,watch:g,setValue:l}=$({defaultValues:{name:"",number:"",email:"",plan_category:["engage"]}}),{number:C}=g();return e(ie,{anchor:"right",open:s,onClose:(m,a)=>!z(a)&&o(),sx:{zIndex:"modal"},children:r(Z,{children:[r(ee,{children:[e(h,{onClick:o,className:"icon-md-button",children:e(N,{})}),e(re,{children:"Invite a Team Member"})]}),r(te,{onSubmit:n(async m=>{try{const a=await k.sendUserInvite(m);if(!a.success)throw Error(a.messages?a.messages.errors[0].message:a.message);c(a.message),setTimeout(()=>window.location.reload(),1e3)}catch(a){b(a.message)}finally{o()}}),children:[e(ae,{children:r(oe,{children:[e(v,{children:e(S,{control:i,name:"name",label:"Name",placeholder:"Name",required:!0,sx:D})}),e(v,{children:e(S,{control:i,name:"email",label:"Email",placeholder:"Email",required:!0,sx:D})}),e(v,{children:e(J,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:"IN",value:C,onChange:(m,a)=>{var u;l("number",(u=a.numberValue)!=null?u:m),console.log(a.numberValue)},variant:"filled",sx:se})})]})}),r(Q,{children:[e(M,{disableIcon:!0,color:"secondary",onClick:o,children:"Cancel"}),e(M,{type:"submit",children:"Send Invite"})]})]})]})})},Le=({isSearchActive:s,setSearchActive:o})=>{const{setShowInviteForm:b,setInvitedMemberFilter:c}=E();return r(ne,{children:[e(le,{children:e(M,{disableIcon:!0,type:"button",onClick:()=>b(!0),className:"small",children:"Invite Team Member"})}),r(ce,{children:[!s&&e(me,{children:e(de,{children:"Team Members"})}),r(pe,{children:[s&&e(P,{children:r(H,{children:[e(h,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute",left:0,top:0},children:e(x,{})}),e(A,{onChange:({target:{value:i}})=>c(i),placeholder:"Search People"}),e(h,{onClick:()=>{c(""),o(!s)},sx:{position:"absolute",right:0,top:0},children:e(O,{})})]})}),!s&&e(h,{onClick:()=>o(i=>!i),children:e(x,{})})]})]})]})},Ee="z5df",Ne="AMgb",y={TeamMemberItem:Ee,OptionMenuPaper:Ne},Pe={px:{xs:3.75,md:2},"&:hover":{bgcolor:"#edfaff"}},He=s=>{const{setErrorMessage:o,setSuccessMessage:b}=w(),{title:c,description:i,invitationId:n,status:g}=s,[l,C]=p.exports.useState(null),[I,m]=p.exports.useState(!1),a=()=>{m(!0)},u=()=>{m(!1)},T=d=>{C(d.currentTarget)},t=()=>{C(null)},f=async()=>{try{const d=await k.deleteUserInvite(n);if(!d.success)throw Error(d.message);b(d.payload.message),setTimeout(()=>window.location.reload(),1e3)}catch(d){o(d.message)}finally{u()}};return r(p.exports.Fragment,{children:[r(ue,{component:"div",sx:Pe,children:[e(be,{primary:e("div",{className:"primary-block",children:e("h2",{className:"list-title",children:c})}),secondary:i,className:y.TeamMemberItem}),e(ge,{children:e(h,{onClick:T,children:e(fe,{})})})]}),Boolean(l)&&r(Ce,{anchorEl:l,open:Boolean(l),onClose:t,keepMounted:!0,MenuListProps:{"aria-labelledby":"Options"},className:y.OptionMenu,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},classes:{paper:y.OptionMenuPaper},children:[e(L,{onClick:()=>{a(),t()},children:"Delete"}),!g&&e(L,{onClick:()=>{t()},children:"Resend"})]}),r(V,{open:I,"aria-labelledby":"responsive-dialog-title",children:[e(W,{id:"responsive-dialog-title",children:"Delete"}),e(j,{children:"Are you sure you want to delete?"}),r(U,{children:[e(F,{color:"secondary",onClick:()=>{u()},children:"Cancel"}),e(F,{onClick:async()=>{await f()},autoFocus:!0,children:"Delete"})]})]})]})},Ae=()=>{const{isMobile:s,isTablet:o}=G(),{setErrorMessage:b}=w(),[c,i]=p.exports.useState(!0),[n,g]=p.exports.useState(!1),{invitedMembers:l,showInviteForm:C,invitedMemberFilter:I}=K(),{setInvitedMembers:m,setShowInviteForm:a,setInvitedMemberFilter:u}=E(),T=p.exports.useRef(async()=>{try{const t=await k.getUserInvites();if(!t.success)throw Error(t.message);m(t.payload.data),i(!1)}catch(t){b(t.message)}});return p.exports.useEffect(()=>{T.current()},[]),c?e(B,{className:Se.AbsCenter,children:e(X,{height:72,width:72})}):r(p.exports.Fragment,{children:[s&&r(Ie,{children:[!n&&e(h,{component:q,to:"/business-settings",sx:{width:32,height:32},children:e(N,{})}),!n&&e(Me,{children:"Team Members"}),n&&e(P,{children:r(H,{children:[e(h,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(x,{})}),e(A,{onChange:({target:{value:t}})=>u(t),placeholder:"Search People"}),e(h,{onClick:()=>{u(""),g(!n)},sx:{position:"absolute",right:0,top:0},children:e(O,{})})]})}),!n&&l.length>0&&e(h,{onClick:()=>g(t=>!t),children:e(x,{})})]}),e(xe,{children:e(Te,{children:!c&&e(B,{elevation:0,children:e(he,{sx:{mx:{xs:-3.75,md:0}},children:l.length===0?r(ve,{children:[e(we,{children:e(M,{disableIcon:!0,onClick:()=>a(!0),className:"small",children:"Invite Team Member"})}),e(ke,{children:e(Fe,{children:"You don\u2019t have any team members yet. Invite a team member and start working in collaboration."})})]}):r(p.exports.Fragment,{children:[o&&e(Le,{isSearchActive:n,setSearchActive:g}),o&&e(De,{}),l.filter(t=>{var f;return(f=t==null?void 0:t.name)==null?void 0:f.toLowerCase().includes(I==null?void 0:I.toLowerCase())}).map(({name:t,status:f,id:d},R)=>e(He,{title:t,description:f,invitationId:d,status:f},R))]})})})})}),s&&l.length>0&&e(ye,{children:e(M,{onClick:()=>a(!0),variant:"outlined",color:"primary",disableIcon:!0,children:"Invite Team Member"})}),e(Be,{open:C,closeDrawer:()=>a(!1)})]})},Mr=()=>r(Y,{children:[e(_,{children:e("title",{children:"Team Members"})}),e(Ae,{})]});export{Mr as default};