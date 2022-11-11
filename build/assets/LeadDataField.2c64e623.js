import{$ as k,aw as I,r as o,a,j as e,a0 as x,as as O,at as X,au as z,av as V,e as v,ax as L,ay as M,ar as j,u as q,W as P,L as G}from"./index.e3f0bed6.js";import{L as H}from"./LeftArrow.6b9df4e8.js";import{S as _}from"./Search.84059973.js";import{c as S,D as $,d as K,e as U,f as J,F as Q,G as Y,g as D,b as Z}from"./CommonComponents.bdd24ec0.js";import{L as ee}from"./ListItem.7171109a.js";import{a as ae,L as te}from"./ListItemText.7368081e.js";import{M as re}from"./MoreVert.82365302.js";import{M as ie}from"./Menu.a9e9a192.js";import{M as b}from"./MenuItem.7658b5bd.js";import{T as le,A as se,D as oe,E as ne,I as de,J as ce,K as B,L as A,M as W,w as me,v as N,Z as pe,m as he,N as ue,H as fe,n as ge,O as xe,P as ye,Q as Fe,q as be,r as Ce,R as De,U as we,V as Le,X as _e,Y as Se}from"./Tags.f65b3ae3.js";import{C as R}from"./Clear.ee6db896.js";import{C as Te,u as ke,F as T}from"./FormTextField.a6bf6d35.js";import{F as E}from"./FormIOSSwitch.a17b8f69.js";import{A as Ie}from"./Autocomplete.7180dac4.js";import{T as ve}from"./TextField.05a88446.js";import{D as Ne}from"./Drawer.83c2585d.js";import{C as Ee}from"./Card.d99ba1fd.js";import{C as Me}from"./CardContent.8e9c9589.js";import{D as He}from"./Divider.ee3fd026.js";import"./List.f7b67727.js";import"./listItemButtonClasses.567c0e0b.js";import"./isMuiElement.60ad7b03.js";import"./listItemTextClasses.eb8a14b4.js";import"./withStyles.d25af336.js";import"./Switch.d0fdbf12.js";import"./SwitchBase.28558142.js";import"./Select.3aab61a2.js";import"./useControlled.af948729.js";import"./Close.1288db0f.js";import"./Popper.cdc1b82f.js";import"./Chip.03cbfcee.js";const Be=({display_name:n,field_name:d,field_type:m,id:p})=>{const{setErrorMessage:s,setSuccessMessage:l}=k(),{setEditLeadDataId:h,setShowLeadDataForm:u}=I(),[c,f]=o.exports.useState(null),[w,y]=o.exports.useState(!1),g=()=>{y(!0)},C=()=>{y(!1)},F=i=>{f(i.currentTarget)},r=()=>{f(null)},t=async()=>{try{const i=await L.deleteLeadDataField(p);if(!i.success)throw Error(i.message);l(i.message),setTimeout(()=>window.location.reload(),1e3)}catch(i){s(i.message)}finally{C()}};return a(o.exports.Fragment,{children:[a(ee,{component:"div",sx:{px:{xs:0,md:2}},children:[e(ae,{primary:a("div",{className:"primary-block",children:[e("h2",{className:"list-title",children:n}),e("h2",{className:"type",children:m==="string"?"Text":m})]}),secondary:`[${d}]`,sx:{"& .primary-block":{alignItems:"center",display:"flex",flexWrap:"wrap",gap:1.25,marginBottom:.75,"& .list-title":{color:"text.primary",fontSize:15,fontWeight:500,lineHeight:"18px"},"& .type":{color:"#767676b3",fontSize:12,fontWeight:400,lineHeight:1,textTransform:"uppercase"}},"& .MuiListItemText-secondary":{color:"text.primary",fontSize:12,maxWidth:290,fontWeight:400,lineHeight:"15px"}}}),e(te,{children:e(x,{onClick:F,children:e(re,{})})})]}),Boolean(c)&&a(ie,{anchorEl:c,open:Boolean(c),onClose:r,keepMounted:!0,MenuListProps:{"aria-labelledby":"Options"},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiPaper-root":{minWidth:120}},children:[e(b,{onClick:()=>{h(p),u(!0),r()},children:"Edit"}),e(b,{onClick:()=>{g(),r()},children:"Delete"})]}),a(O,{open:w,"aria-labelledby":"responsive-dialog-title",children:[e(X,{id:"responsive-dialog-title",children:"Delete"}),e(z,{children:"Are you sure you want to delete?"}),a(V,{children:[e(v,{color:"secondary",onClick:()=>{C()},children:"Cancel"}),e(v,{onClick:async()=>{await t()},autoFocus:!0,children:"Delete"})]})]})]})},Ae=({isSearchActive:n,setSearchActive:d})=>{const{setLeadDataFilter:m,setShowLeadDataForm:p}=I();return a(le,{children:[e(se,{children:e(S,{disableIcon:!0,type:"button",onClick:()=>p(!0),sx:{py:0,px:.625,height:36,mt:0},children:"New Lead Data Field"})}),a(oe,{children:[!n&&e(ne,{children:e(de,{children:"Lead Data Fields"})}),a(ce,{children:[n&&e(B,{children:a(A,{children:[e(x,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(_,{})}),e(W,{onChange:({target:{value:s}})=>m(s),placeholder:"Search Field"}),e(x,{onClick:()=>{m(""),d(!n)},sx:{position:"absolute",right:0,top:0},children:e(R,{})})]})}),!n&&e(x,{onClick:()=>d(s=>!s),children:e(_,{})})]})]})]})},We=({control:n,defaultValue:d,rules:m,name:p,children:s,setValue:l,...h})=>e(Te,{rules:m,control:n,name:p,render:({field:u})=>e(Ie,{multiple:!0,options:d,onChange:(c,f)=>{l(u.name,f)},freeSolo:!0,renderInput:c=>e(ve,{...c,variant:"filled",label:h.label,sx:h.sx})})}),Re=({open:n,closeDrawer:d})=>{const{setErrorMessage:m,setSuccessMessage:p}=k(),{editLeadDataId:s}=M(),{control:l,handleSubmit:h,watch:u,reset:c,setValue:f}=ke({defaultValues:{field_type:"",display_name:"",field_name:"",display_in_filter:!1,use_lead_title:!1}}),{field_type:w,display_name:y,field_options:g}=u(),C=async t=>{try{if(console.log(t),s){const i=await L.updateLeadDataField(s,t);if(!i.success)throw Error(i.message);p(i.message),setTimeout(()=>window.location.reload(),1e3)}else{const i=await L.createLeadDataField(t);if(!i.success)throw Error(i.message);p(i.message),setTimeout(()=>window.location.reload(),1e3)}}catch(i){m(i.message)}finally{d()}},F=o.exports.useCallback(()=>f("field_name",y.toLowerCase().replaceAll(" ","_")),[y]),r=o.exports.useCallback(async()=>{try{if(s){const t=await L.getLeadDataField(s);if(!t.success)throw Error(t.message);c({field_type:t.payload.field_type,display_name:t.payload.display_name,field_name:t.payload.field_name,display_in_filter:t.payload.display_in_filter,use_lead_title:t.payload.mark_as_lead_title,field_options:t.payload.field_options?t.payload.field_options:[]})}}catch(t){console.error(t.message)}},[s]);return o.exports.useEffect(()=>{F()},[F]),o.exports.useEffect(()=>{r()},[r]),e(Ne,{anchor:"right",open:n,onClose:(t,i)=>!j(i)&&d(),sx:{zIndex:"modal"},children:a($,{sx:{width:{xs:"100vw",md:360}},children:[a(K,{children:[e(x,{onClick:d,className:"icon-md-button",children:e(H,{})}),e(U,{children:`${s?"Edit":"Create a"} Data Field`})]}),a(J,{onSubmit:h(C),children:[e(Q,{children:a(Y,{children:[e(D,{children:a(T,{select:!0,control:l,label:"Data Field Type",name:"field_type",sx:me,required:!0,defaultValue:w,children:[e(b,{value:"",disabled:!0,children:"Select Data Field Type"}),e(b,{value:"numeric",children:"Number"}),e(b,{value:"string",children:"Text"}),e(b,{value:"boolean",children:"Boolean"}),e(b,{value:"date",children:"Date"})]})}),e(D,{children:e(T,{control:l,name:"display_name",label:"Display Name",placeholder:"Display Name",required:!0,sx:N})}),e(D,{children:e(T,{control:l,name:"field_name",label:"Field Name",placeholder:"Field Name",required:!0,sx:N})}),e(D,{children:e(We,{control:l,setValue:f,defaultValue:g!=null?g:[],name:"field_options",label:"Options",sx:pe})}),e(D,{children:a("div",{className:"d-flex justify-content-between",children:[a("div",{className:"grow",children:[e("h5",{className:"field-title",children:"Display Field in Filters & Analytics?"}),e("small",{className:"field-subtitle",children:"This field will be displayed in filter option and analytics can be drawn on this field."})]}),e(E,{control:l,name:"display_in_filter"})]})}),e(D,{children:a("div",{className:"d-flex justify-content-between",children:[a("div",{className:"grow",children:[e("h5",{className:"field-title",children:"Use as Lead Title"}),e("small",{className:"field-subtitle",children:"If a value is available in the field it will show as the default title instead of the phone number in the Chat section."})]}),e(E,{control:l,name:"use_lead_title"})]})})]})}),e(Z,{children:e(S,{type:"submit",children:"Save"})})]})]})})},Oe=()=>{const{isMobile:n,isTablet:d}=q(),{setErrorMessage:m}=k(),[p,s]=o.exports.useState(!0),[l,h]=o.exports.useState(!1),{leadDataFields:u,leadDataFilter:c,showLeadDataForm:f}=M(),{setLeadDataFields:w,setLeadDataFilter:y,setShowLeadDataForm:g,setEditLeadDataId:C}=I(),F=o.exports.useCallback(async()=>{try{const r=await L.getLeadDataFields();if(!r.success)throw Error(r.message);w(r.payload),s(!1)}catch(r){m(r.message)}},[]);return o.exports.useEffect(()=>{F()},[F]),a(o.exports.Fragment,{children:[e(P,{children:e("title",{children:"Lead Data Fields"})}),n&&a(he,{sx:ue,children:[!l&&e(x,{component:G,to:"/business-settings",className:"icon-md-button",children:e(H,{})}),!l&&e(fe,{children:"Lead Data Fields"}),l&&e(B,{children:a(A,{children:[e(x,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(_,{})}),e(W,{onChange:({target:{value:r}})=>y(r),placeholder:"Search Field"}),e(x,{onClick:()=>{y(""),h(!l)},sx:{position:"absolute",right:0,top:0},children:e(R,{})})]})}),!l&&u.length>0&&e(x,{onClick:()=>h(r=>!r),children:e(_,{})})]}),e(ge,{sx:xe,children:e(ye,{sx:Fe,children:!p&&e(Ee,{elevation:0,sx:be,children:e(Me,{sx:Ce,children:u.length===0?a(De,{children:[e(we,{children:e(S,{disableIcon:!0,onClick:()=>g(!0),sx:{borderRadius:2,boxShadow:"0px 8px 8px rgba(50, 197, 255, 0.1)",fontSize:16,fontWeight:700,height:36,lineHeight:"19px",margin:"auto",textTransform:"capitalize"},children:"New Lead Data Field"})}),e(Le,{children:e(_e,{children:"Lead Data Field creates an input field for your user, where the value input by a user can be stored and be later retrieved for different users to draw an analytical comparison or as a future reference."})})]}):a(o.exports.Fragment,{children:[d&&e(Ae,{isSearchActive:l,setSearchActive:h}),d&&e(He,{}),u.filter(r=>{var t;return(t=r==null?void 0:r.display_name)==null?void 0:t.toLowerCase().includes(c==null?void 0:c.toLowerCase())}).reverse().map((r,t)=>e(Be,{...r},t))]})})})})}),n&&u.length>0&&e(Se,{children:e(S,{onClick:()=>g(!0),variant:"outlined",color:"primary",disableIcon:!0,children:"New Lead Data Field"})}),e(Re,{open:f,closeDrawer:()=>{C(void 0),g(!1)}})]})},xa=()=>e(o.exports.Fragment,{children:e(Oe,{})});export{xa as default};
