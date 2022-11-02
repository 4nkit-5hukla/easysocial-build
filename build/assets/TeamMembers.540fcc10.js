import{B as w,u as B,a as R,b as A}from"./BizParticipantsApi.ba6fd643.js";import{j as e,a as t,r as d,W as X,L as N}from"./index.40731ccf.js";import{a as O}from"./Global.df2e642b.js";import{u as v}from"./SnackProvider.c23b45d0.js";import{D as V,d as U,e as j,f as q,F as G,G as K,g as y,b as Y,c as I}from"./CommonComponents.2907f096.js";import{L}from"./LeftArrow.f0eb0d15.js";import{S as M}from"./Search.7932f6b8.js";import{u as _,F as S}from"./FormTextField.e8a8d831.js";import{g as J}from"./mui-tel-input.es.a5bf7af1.js";import{i as Q}from"./index.78496bd8.js";import{v as k,x as Z,T as $,A as ee,D as re,E as te,I as oe,J as ae,K as H,L as E,M as z,m as ie,N as ne,H as se,n as le,O as ce,P as me,Q as de,q as pe,r as he,R as ue,U as ge,V as be,X as fe,Y as xe}from"./Tags.8173da82.js";import{D as Ce}from"./Drawer.aaa0e533.js";import{I as p}from"./IconButton.32052684.js";import{C as W}from"./Clear.45f1d488.js";import{L as Ie}from"./ListItem.470bc43f.js";import{a as Te,L as Me}from"./ListItemText.dd66d6c2.js";import{M as ye}from"./MoreVert.521b3f8a.js";import{M as we}from"./Menu.c8609563.js";import{M as F}from"./MenuItem.993e792e.js";import{D as ve,a as Se,b as ke}from"./DialogContent.09e0d138.js";import{D as Fe}from"./DialogTitle.478ec786.js";import{B as D}from"./Button.23e9af97.js";import{C as De}from"./Card.7abb454b.js";import{C as Be}from"./CardContent.5ff8b118.js";import{D as Le}from"./Divider.67fd8281.js";import"./Axios.d864dcf9.js";import"./useEnhancedEffect.687c8d79.js";import"./styled.d8987ece.js";import"./ButtonBase.5b7c04ce.js";import"./styled.0e116553.js";import"./Typography.6cce9393.js";import"./TextField.5c68a002.js";import"./Select.993207b0.js";import"./isMuiElement.70284bb2.js";import"./useId.009d26ce.js";import"./InputAdornment.d2079f1c.js";import"./Modal.765cd3a5.js";import"./listItemButtonClasses.8ac37410.js";const He=({open:i,closeDrawer:a})=>{const{setErrorMessage:g,setSuccessMessage:h}=v(),{control:n,handleSubmit:s,watch:b,setValue:l}=_({defaultValues:{name:"",number:"",email:"",plan_category:["engage"]}}),{number:x}=b();return e(Ce,{anchor:"right",open:i,onClose:(c,o)=>!Q(o)&&a(),sx:{zIndex:"modal"},children:t(V,{sx:{width:{xs:"100vw",md:360}},children:[t(U,{children:[e(p,{onClick:a,sx:{width:32,height:32},children:e(L,{})}),e(j,{children:"Invite a Team Member"})]}),t(q,{onSubmit:s(async c=>{try{const o=await w.sendUserInvite(c);if(!o.success)throw Error(o.message);h(o.message),setTimeout(()=>window.location.reload(),1e3)}catch(o){g(o.message)}finally{a()}}),children:[e(G,{children:t(K,{children:[e(y,{children:e(S,{control:n,name:"name",label:"Name",placeholder:"Name",required:!0,sx:k})}),e(y,{children:e(S,{control:n,name:"email",label:"Email",placeholder:"Email",required:!0,sx:k})}),e(y,{children:e(J,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:"IN",value:x,onChange:(c,o)=>{var u;l("number",(u=o.numberValue)!=null?u:c),console.log(o.numberValue)},variant:"filled",sx:Z})})]})}),t(Y,{children:[e(I,{disableIcon:!0,color:"secondary",onClick:a,children:"Cancel"}),e(I,{type:"submit",children:"Send Invite"})]})]})]})})},Ee=({isSearchActive:i,setSearchActive:a})=>{const{setShowInviteForm:g,setInvitedMemberFilter:h}=B();return t($,{children:[e(ee,{children:e(I,{disableIcon:!0,type:"button",onClick:()=>g(!0),sx:{py:0,px:.625,height:36,mt:0},children:"Invite Team Member"})}),t(re,{children:[!i&&e(te,{children:e(oe,{children:"Team Members"})}),t(ae,{children:[i&&e(H,{children:t(E,{children:[e(p,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(M,{})}),e(z,{onChange:({target:{value:n}})=>h(n),placeholder:"Search People"}),e(p,{onClick:()=>{h(""),a(!i)},sx:{position:"absolute",right:0,top:0},children:e(W,{})})]})}),!i&&e(p,{onClick:()=>a(n=>!n),children:e(M,{})})]})]})]})},ze=i=>{const{setErrorMessage:a,setSuccessMessage:g}=v(),{title:h,description:n,invitationId:s,status:b}=i,[l,x]=d.exports.useState(null),[C,c]=d.exports.useState(!1),o=()=>{c(!0)},u=()=>{c(!1)},T=m=>{x(m.currentTarget)},r=()=>{x(null)},f=async()=>{try{const m=await w.deleteUserInvite(s);if(!m.success)throw Error(m.message);g(m.payload.message),setTimeout(()=>window.location.reload(),1e3)}catch(m){a(m.message)}finally{u()}};return t(d.exports.Fragment,{children:[t(Ie,{component:"div",sx:{px:{xs:0,md:2}},children:[e(Te,{primary:e("div",{className:"primary-block",children:e("h2",{className:"list-title",children:h})}),secondary:n,sx:{"& .primary-block":{alignItems:"center",display:"flex",flexWrap:"wrap",gap:10,marginBottom:.75,"& .list-title":{color:"text.secondary",fontSize:15,fontWeight:500,lineHeight:"18px"}},"& .MuiListItemText-secondary":{color:"#767676b3",fontSize:10,maxWidth:290,fontWeight:400,lineHeight:"15px",textTransform:"capitalize"}}}),e(Me,{children:e(p,{onClick:T,children:e(ye,{})})})]}),Boolean(l)&&t(we,{anchorEl:l,open:Boolean(l),onClose:r,keepMounted:!0,MenuListProps:{"aria-labelledby":"Options"},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiPaper-root":{minWidth:120}},children:[e(F,{onClick:()=>{o(),r()},children:"Delete"}),!b&&e(F,{onClick:()=>{r()},children:"Resend"})]}),t(ve,{open:C,"aria-labelledby":"responsive-dialog-title",children:[e(Fe,{id:"responsive-dialog-title",children:"Delete"}),e(Se,{children:"Are you sure you want to delete?"}),t(ke,{children:[e(D,{color:"secondary",onClick:()=>{u()},children:"Cancel"}),e(D,{onClick:async()=>{await f()},autoFocus:!0,children:"Delete"})]})]})]})},We=()=>{const{isMobile:i,isTablet:a}=O(),{setErrorMessage:g}=v(),[h,n]=d.exports.useState(!0),[s,b]=d.exports.useState(!1),{invitedMembers:l,showInviteForm:x,invitedMemberFilter:C}=R(),{setInvitedMembers:c,setShowInviteForm:o,setInvitedMemberFilter:u}=B(),T=d.exports.useCallback(async()=>{try{const r=await w.getUserInvites();if(!r.success)throw Error(r.message);c(r.payload.data),n(!1)}catch(r){g(r.message)}},[]);return d.exports.useEffect(()=>{T()},[T]),t(d.exports.Fragment,{children:[e(X,{children:e("title",{children:"Team Members"})}),i&&t(ie,{sx:ne,children:[!s&&e(p,{component:N,to:"/business-settings",sx:{width:32,height:32},children:e(L,{})}),!s&&e(se,{children:"Team Members"}),s&&e(H,{children:t(E,{children:[e(p,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(M,{})}),e(z,{onChange:({target:{value:r}})=>u(r),placeholder:"Search People"}),e(p,{onClick:()=>{u(""),b(!s)},sx:{position:"absolute",right:0,top:0},children:e(W,{})})]})}),!s&&l.length>0&&e(p,{onClick:()=>b(r=>!r),children:e(M,{})})]}),e(le,{sx:ce,children:e(me,{sx:de,children:!h&&e(De,{elevation:0,sx:pe,children:e(Be,{sx:he,children:l.length===0?t(ue,{children:[e(ge,{children:e(I,{disableIcon:!0,onClick:()=>o(!0),sx:{borderRadius:2,boxShadow:"0px 8px 8px rgba(50, 197, 255, 0.1)",fontSize:16,fontWeight:700,height:36,lineHeight:"19px",margin:"auto",textTransform:"capitalize"},children:"Invite Team Member"})}),e(be,{children:e(fe,{children:"You don\u2019t have any team members yet. Invite a team member and start working in collaboration."})})]}):t(d.exports.Fragment,{children:[a&&e(Ee,{isSearchActive:s,setSearchActive:b}),a&&e(Le,{}),l.filter(r=>{var f;return(f=r==null?void 0:r.name)==null?void 0:f.toLowerCase().includes(C==null?void 0:C.toLowerCase())}).map(({name:r,status:f,id:m},P)=>e(ze,{title:r,description:f,invitationId:m,status:f},P))]})})})})}),i&&l.length>0&&e(xe,{children:e(I,{onClick:()=>o(!0),variant:"outlined",color:"primary",disableIcon:!0,children:"Invite Team Member"})}),e(He,{open:x,closeDrawer:()=>o(!1)})]})},Ir=()=>e(A,{children:e(We,{})});export{Ir as default};
