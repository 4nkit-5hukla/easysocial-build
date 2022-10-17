var te=Object.defineProperty;var ae=(a,e,i)=>e in a?te(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var E=(a,e,i)=>(ae(a,typeof e!="symbol"?e+"":e,i),i);import{r as s,j as t,g as oe,e as se,s as V,V as $,_ as M,y as S,l as ie,c as ne,ad as re,a as d,q as le,A as k,b as z,$ as H,an as de,ao as ce,ap as ue,aq as me,at as ge,am as pe,T as he,u as fe,ar as xe,as as Le,W as be,L as De}from"./index.0f332f5b.js";import{a as Ce,u as Ie,B as N,b as ye}from"./BizParticipantsApi.bdf4643a.js";import{b as B,D as ve,c as Re,L as X,d as Te,e as Pe,F as Fe,G as Me,f as A,A as we}from"./CommonComponents.952db432.js";import{L as Ee}from"./ListItem.3c4c8f69.js";import{a as Se,L as Be}from"./ListItemText.b126ebda.js";import{C as ke}from"./Chip.d37ccb2e.js";import{M as Ae}from"./MoreVert.960332b6.js";import{M as $e}from"./Menu.a440cc3b.js";import{M as F}from"./MenuItem.9f3a5b75.js";import{T as ze,o as He,p as _e,q as We,r as Oe,l as Ne,k as qe,b as Ve,w as Xe,H as je,c as Ge,x as Ue,I as Ke,y as Je,f as Qe,g as Ye,z as Ze,A as et,B as tt,D as at,L as ot,E as st}from"./Tags.809d11a0.js";import{u as it,F as q}from"./FormTextField.388f2c02.js";import{D as nt}from"./Drawer.97f6b1b4.js";import{A as rt}from"./Autocomplete.60dd6b79.js";import{T as lt}from"./TextField.a41504df.js";import{C as j}from"./CircularProgress.6f17fa20.js";import{C as dt,a as ct}from"./CardContent.5f571a0e.js";import{D as ut}from"./Divider.ec1c93f1.js";import"./styled.fec32704.js";import"./List.b0c9e76e.js";import"./listItemButtonClasses.f19c762e.js";import"./isMuiElement.a4739e0e.js";import"./listItemTextClasses.37a4eef2.js";import"./Select.523a5fc8.js";import"./Close.8147fa81.js";import"./Popper.4a7152a2.js";const G=s.exports.createContext(void 0),U=s.exports.createContext(void 0),mt=({children:a})=>{const[e,i]=s.exports.useState([]),[c,l]=s.exports.useState(!1),[m,h]=s.exports.useState(0),g={leadDistRules:e,showLeadDistRuleForm:c,totalLeadDistRules:m},x=s.exports.useMemo(()=>({setLeadDistRules:i,setShowLeadDistRuleForm:l,setTotalLeadDistRules:h}),[]);return t(G.Provider,{value:g,children:t(U.Provider,{value:x,children:a})})},K=()=>{const a=s.exports.useContext(G);if(a===void 0)throw Error("Item must be used inside of LeadDistRulesProvider, otherwise it will not function correctly.");return a},J=()=>{const a=s.exports.useContext(U);if(a===void 0)throw Error("Item must be used inside of LeadDistRulesProvider, otherwise it will not function correctly.");return a};function gt(a){return se("MuiLoadingButton",a)}const pt=oe("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),I=pt,ht=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],ft=a=>{const{loading:e,loadingPosition:i,classes:c}=a,l={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${S(i)}`],endIcon:[e&&`endIconLoading${S(i)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${S(i)}`]},m=le(l,gt,c);return M({},c,m)},xt=a=>a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"&&a!=="classes",Lt=V($,{shouldForwardProp:a=>xt(a)||a==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(a,e)=>[e.root,e.startIconLoadingStart&&{[`& .${I.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${I.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})(({ownerState:a,theme:e})=>M({[`& .${I.startIconLoadingStart}, & .${I.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},a.loadingPosition==="center"&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${I.loading}`]:{color:"transparent"}},a.loadingPosition==="start"&&a.fullWidth&&{[`& .${I.startIconLoadingStart}, & .${I.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},a.loadingPosition==="end"&&a.fullWidth&&{[`& .${I.startIconLoadingStart}, & .${I.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}})),bt=V("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(a,e)=>{const{ownerState:i}=a;return[e.loadingIndicator,e[`loadingIndicator${S(i.loadingPosition)}`]]}})(({theme:a,ownerState:e})=>M({position:"absolute",visibility:"visible",display:"flex"},e.loadingPosition==="start"&&(e.variant==="outlined"||e.variant==="contained")&&{left:e.size==="small"?10:14},e.loadingPosition==="start"&&e.variant==="text"&&{left:6},e.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(a.vars||a).palette.action.disabled},e.loadingPosition==="end"&&(e.variant==="outlined"||e.variant==="contained")&&{right:e.size==="small"?10:14},e.loadingPosition==="end"&&e.variant==="text"&&{right:6},e.loadingPosition==="start"&&e.fullWidth&&{position:"relative",left:-10},e.loadingPosition==="end"&&e.fullWidth&&{position:"relative",right:-10})),Dt=s.exports.forwardRef(function(e,i){const c=ie({props:e,name:"MuiLoadingButton"}),{children:l,disabled:m=!1,id:h,loading:g=!1,loadingIndicator:x,loadingPosition:f="center",variant:b="text"}=c,L=ne(c,ht),D=re(h),C=x!=null?x:t(j,{"aria-labelledby":D,color:"inherit",size:16}),p=M({},c,{disabled:m,loading:g,loadingIndicator:C,loadingPosition:f,variant:b}),u=ft(p),y=g?t(bt,{className:u.loadingIndicator,ownerState:p,children:C}):null;return d(Lt,M({disabled:m||g,id:D,ref:i},L,{variant:b,classes:u,ownerState:p,children:[p.loadingPosition==="end"?l:y,p.loadingPosition==="end"?y:l]}))}),Ct=Dt;class R{}E(R,"getLeadDistRules",async(e=1,i=20)=>await k(`/lms-rules?page=${e}&limit=${i}`,"GET")),E(R,"createLeadDistRule",async e=>await k("/lms-rules","POST",{data:e})),E(R,"deleteLeadDistRule",async e=>await k(`/lms-rules/${e}`,"DELETE"));const It=a=>{const{setErrorMessage:e,setSuccessMessage:i}=z(),{title:c,description:l,ruleId:m}=a,[h,g]=s.exports.useState(null),[x,f]=s.exports.useState(!1),b=()=>{f(!0)},L=()=>{f(!1)},D=u=>{g(u.currentTarget)},C=()=>{g(null)},p=async()=>{try{const u=await R.deleteLeadDistRule(m);if(!u.success)throw Error(u.message);i(u.message),setTimeout(()=>window.location.reload(),1e3)}catch(u){e(u.message)}finally{L()}};return d(s.exports.Fragment,{children:[d(Ee,{component:"div",sx:{px:{xs:0,md:2}},children:[t(Se,{primary:d("div",{className:"primary-block",children:[t("h2",{className:"list-title",children:c}),t(ke,{label:l,size:"small",sx:{backgroundColor:"#12B0EE",alignItems:"center",color:"#FFFFFF",borderRadius:1,height:20,"& .MuiChip-label":{px:.5,fontSize:10,fontWeight:900,lineHeight:"12px"}}})]}),sx:{"& .primary-block":{alignItems:"center",display:"flex",flexWrap:"wrap",gap:1.25,marginBottom:.75,"& .list-title":{color:"text.secondary",fontSize:15,fontWeight:500,lineHeight:"18px"}}}}),t(Be,{children:t(H,{onClick:D,children:t(Ae,{})})})]}),Boolean(h)&&t($e,{anchorEl:h,open:Boolean(h),onClose:C,keepMounted:!0,MenuListProps:{"aria-labelledby":"Options"},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiPaper-root":{minWidth:120}},children:t(F,{onClick:()=>{b(),C()},children:"Delete"})}),d(de,{open:x,"aria-labelledby":"responsive-dialog-title",children:[t(ce,{id:"responsive-dialog-title",children:"Delete"}),t(ue,{children:"Are you sure you want to delete?"}),d(me,{children:[t($,{color:"secondary",onClick:()=>{L()},children:"Cancel"}),t($,{onClick:async()=>{await p()},autoFocus:!0,children:"Delete"})]})]})]})},yt=()=>{const{totalLeadDistRules:a}=K(),{setShowLeadDistRuleForm:e}=J();return d(ze,{children:[t(He,{children:t(B,{disableIcon:!0,type:"button",onClick:()=>e(!0),sx:{py:0,px:.625,height:36,mt:0},children:"New Lead Distribution Rule"})}),t(_e,{children:t(We,{children:t(Oe,{children:`${a} Lead Distribution Rules`})})})]})},Q=s.exports.forwardRef((a,e)=>{const{children:i,...c}=a,l=s.exports.useRef(null);return s.exports.useImperativeHandle(e,()=>l.current),t("ul",{...c,ref:l,role:"list-box",children:i})});Q.displayName="ListBox";const vt=({open:a,closeDrawer:e})=>{const{setErrorMessage:i,setSuccessMessage:c}=z(),{leadDataFields:l}=ge(),{teamMembers:m,teamMembersTotal:h}=Ce(),{setTeamMembers:g,setTeamMembersTotal:x}=Ie(),[f,b]=s.exports.useState(!1),[L,D]=s.exports.useState(!0),[C,p]=s.exports.useState(""),u=s.exports.useDeferredValue(C),[y,T]=s.exports.useState(1),{control:r,handleSubmit:P,watch:_,setValue:w}=it({defaultValues:{param_name:"",rule:{},assign_to:"",param_type:"",logic:"match"}}),{param_name:v}=_(),Y=async n=>{try{T(n);const o=await N.getTeamMembers(u,n);if(!o.success)throw Error(o.message);g([...m,...o.payload.data])}catch(o){i(o.message)}},W=s.exports.useCallback(async()=>{try{if(a){D(!0),T(1);const o=await N.getTeamMembers(u,1);if(!o.success)throw Error(o.message);g(o.payload.data),x(o.payload.meta.total),D(!1)}}catch(n){i(n.message)}},[a,u]),O=s.exports.useCallback(()=>{if(v!==""){const[n]=l.filter(o=>o.field_name===v);n&&w("param_type",n.field_type)}},[v]),Z=async n=>{try{const o=await R.createLeadDistRule(n);if(!o.success)throw Error(o.message);c(o.message),setTimeout(()=>window.location.reload(),1e3)}catch(o){i(o.message)}finally{setTimeout(()=>e(),1e3)}};return s.exports.useEffect(()=>{W()},[W]),s.exports.useEffect(()=>{O()},[O]),t(nt,{anchor:"right",open:a,onClose:(n,o)=>!pe(o)&&e(),sx:{zIndex:"modal"},children:d(ve,{sx:{width:{xs:"100vw",md:360}},children:[d(Re,{children:[t(H,{onClick:e,sx:{width:32,height:32},children:t(X,{})}),t(Te,{children:"Create New Rule"})]}),d(Pe,{onSubmit:P(Z),autoComplete:"off",children:[t(he,{component:"p",color:"#24272C",fontSize:18,lineHeight:"21px",marginBottom:3,children:"Assign enquiry to team member when lead data field matches value."}),t(Fe,{children:d(Me,{children:[t(A,{children:d(q,{select:!0,control:r,label:"Lead Data Field",name:"param_name",sx:Ne,required:!0,defaultValue:v,children:[l.length===0?t(F,{value:"",disabled:!0,children:"No Lead Data Field Available"}):t(F,{value:"",disabled:!0,children:"Select Lead Data Field"}),l.map(({id:n,display_name:o,field_name:ee})=>t(F,{value:ee,children:o},n))]})}),t(A,{children:t(q,{control:r,name:"rule.value",label:"Match Value",placeholder:"Match Value",required:!0,sx:qe})}),t(A,{children:t(rt,{open:f,onOpen:()=>{b(!0)},onClose:()=>{p(""),b(!1)},noOptionsText:"Team Member not found.",isOptionEqualToValue:(n,o)=>n.user.name===o.user.name,getOptionLabel:n=>n.user.name,options:m,loading:L,onChange:(n,o)=>{o&&w("assign_to",o.user.id)},onInputChange:(n,o)=>{p(o.length>2?o:"")},ListboxComponent:Q,ListboxProps:{onScroll:n=>{const o=n.currentTarget;o.scrollTop+o.clientHeight===o.scrollHeight&&h&&h>m.length&&Y(y+1)}},renderOption:(n,o)=>s.exports.createElement(F,{...n,value:o.user.id,key:o.user_id},o.user.name),renderInput:n=>t(lt,{...n,label:"Assign To",required:!0,InputProps:{...n.InputProps,endAdornment:d(s.exports.Fragment,{children:[L?t(j,{color:"inherit",size:20}):null,n.InputProps.endAdornment]})}})})})]})}),t(we,{children:t(B,{type:"submit",children:"Save"})})]})]})})},Rt=()=>{const{isMobile:a,isTablet:e}=fe(),{setErrorMessage:i}=z(),[c,l]=s.exports.useState(!0),[m,h]=s.exports.useState(!1),[g,x]=s.exports.useState(1),{leadDistRules:f,showLeadDistRuleForm:b,totalLeadDistRules:L}=K(),{setLeadDataFields:D}=xe(),{setLeadDistRules:C,setShowLeadDistRuleForm:p,setTotalLeadDistRules:u}=J(),y=s.exports.useCallback(async()=>{try{const r=await R.getLeadDistRules(g);if(!r.success)throw Error(r.message);C(P=>P.concat(r.payload.data)),L===0&&u(r.payload.meta.total),l(!1),h(!1)}catch(r){i(r.message)}},[g]),T=s.exports.useCallback(async()=>{try{const r=await Le.getLeadDataFields();if(!r.success)throw Error(r.message);D(r.payload)}catch(r){i(r.message)}},[]);return s.exports.useEffect(()=>{T()},[T]),s.exports.useEffect(()=>{y()},[y]),d(s.exports.Fragment,{children:[t(be,{children:t("title",{children:"Lead Distribution Rules"})}),a&&d(Ve,{sx:Xe,children:[t(H,{component:De,to:"/business-settings",sx:{width:32,height:32},children:t(X,{})}),t(je,{children:"Lead Distribution Rules"})]}),t(Ge,{sx:Ue,children:t(Ke,{sx:Je,children:!c&&t(dt,{elevation:0,sx:Qe,children:t(ct,{sx:Ye,children:f.length===0?d(Ze,{children:[t(et,{children:t(B,{disableIcon:!0,onClick:()=>p(!0),sx:{borderRadius:2,boxShadow:"0px 8px 8px rgba(50, 197, 255, 0.1)",fontSize:16,fontWeight:700,height:36,lineHeight:"19px",margin:"auto",textTransform:"capitalize"},children:"New Lead Distribution Rule"})}),t(tt,{children:t(at,{children:"Create logical rules, based on which an enquiry is automatically assigned to a team member."})})]}):d(s.exports.Fragment,{children:[e&&t(yt,{}),e&&t(ut,{}),f.map(({rule:r,user:P,param_name:_,id:w},v)=>t(It,{title:P.name,description:r.value,ruleId:w},v)),L>f.length&&t(ot,{children:t(Ct,{variant:"contained",color:"primary",onClick:()=>{x(r=>r+1),h(!0)},loading:m,children:"Load More"})})]})})})})}),a&&f.length>0&&t(st,{children:t(B,{onClick:()=>p(!0),variant:"outlined",color:"primary",disableIcon:!0,children:"New Lead Distribution Rule"})}),t(vt,{open:b,closeDrawer:()=>{p(!1)}})]})},Yt=()=>t(mt,{children:t(ye,{children:t(Rt,{})})});export{Yt as default};