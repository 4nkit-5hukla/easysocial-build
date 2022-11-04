var U=Object.defineProperty;var Y=(r,s,i)=>s in r?U(r,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[s]=i;var v=(r,s,i)=>(Y(r,typeof s!="symbol"?s+"":s,i),i);import{r as a,j as e,aj as E,$ as k,a as l,a0 as B,at as J,au as Z,av as ee,aw as te,e as _,az as ae,as as se,T as re,u as oe,ax as ie,ay as ne,W as le,L as ce}from"./index.9a4b9227.js";import{a as de,u as ue,B as me}from"./BizParticipantsProvider.9aec0d94.js";import{L as W}from"./LeftArrow.2e87ced0.js";import{c as I,D as pe,d as he,e as ge,f as fe,F as xe,G as De,g as P,b as Le}from"./CommonComponents.e083e3cb.js";import{L as be}from"./ListItem.ea367b35.js";import{a as Ce,L as we}from"./ListItemText.d6b576b5.js";import{C as ye}from"./Chip.231cd874.js";import{M as Te}from"./MoreVert.c45137f2.js";import{M as Re}from"./Menu.3bdb3fdc.js";import{M as F}from"./MenuItem.d11e0320.js";import{T as Fe,A as Se,D as Me,E as ve,I as Ie,w as Ee,v as Pe,m as ke,N as Be,H as Ae,n as He,O as ze,P as _e,Q as Oe,q as Ne,r as We,R as qe,U as Xe,V as Ve,X as $e,_ as je,Y as Ge}from"./Tags.974990a4.js";import{u as Ke,F as O}from"./FormTextField.c63af494.js";import{B as N}from"./BizParticipantsApi.bb1dd14b.js";import{D as Qe}from"./Drawer.f247827d.js";import{A as Ue}from"./Autocomplete.fc543bba.js";import{T as Ye}from"./TextField.d436da01.js";import{C as Je}from"./CircularProgress.a624b794.js";import{C as Ze}from"./Card.b65a8b47.js";import{C as et}from"./CardContent.8c4ac1b9.js";import{D as tt}from"./Divider.19a2959b.js";import{L as at}from"./LoadingButton.4904c0b1.js";import"./List.671cc99b.js";import"./listItemButtonClasses.b0b5b044.js";import"./isMuiElement.1252cd52.js";import"./listItemTextClasses.e5e32395.js";import"./withStyles.e9fde612.js";import"./Select.0e7195d9.js";import"./useControlled.7a6cf206.js";import"./Close.25e4a596.js";import"./Popper.1ba5f35a.js";const q=a.exports.createContext(void 0),X=a.exports.createContext(void 0),st=({children:r})=>{const[s,i]=a.exports.useState([]),[p,d]=a.exports.useState(!1),[h,u]=a.exports.useState(0),m={leadDistRules:s,showLeadDistRuleForm:p,totalLeadDistRules:h},D=a.exports.useMemo(()=>({setLeadDistRules:i,setShowLeadDistRuleForm:d,setTotalLeadDistRules:u}),[]);return e(q.Provider,{value:m,children:e(X.Provider,{value:D,children:r})})},V=()=>{const r=a.exports.useContext(q);if(r===void 0)throw Error("Item must be used inside of LeadDistRulesProvider, otherwise it will not function correctly.");return r},$=()=>{const r=a.exports.useContext(X);if(r===void 0)throw Error("Item must be used inside of LeadDistRulesProvider, otherwise it will not function correctly.");return r};class y{}v(y,"getLeadDistRules",async(s=1,i=20)=>await E(`/lms-rules?page=${s}&limit=${i}`,"GET")),v(y,"createLeadDistRule",async s=>await E("/lms-rules","POST",{data:s})),v(y,"deleteLeadDistRule",async s=>await E(`/lms-rules/${s}`,"DELETE"));const rt=r=>{const{setErrorMessage:s,setSuccessMessage:i}=k(),{title:p,description:d,ruleId:h}=r,[u,m]=a.exports.useState(null),[D,g]=a.exports.useState(!1),L=()=>{g(!0)},f=()=>{g(!1)},b=c=>{m(c.currentTarget)},C=()=>{m(null)},x=async()=>{try{const c=await y.deleteLeadDistRule(h);if(!c.success)throw Error(c.message);i(c.message),setTimeout(()=>window.location.reload(),1e3)}catch(c){s(c.message)}finally{f()}};return l(a.exports.Fragment,{children:[l(be,{component:"div",sx:{px:{xs:0,md:2}},children:[e(Ce,{primary:l("div",{className:"primary-block",children:[e("h2",{className:"list-title",children:p}),e(ye,{label:d,size:"small",sx:{backgroundColor:"#12B0EE",alignItems:"center",color:"#FFFFFF",borderRadius:1,height:20,"& .MuiChip-label":{px:.5,fontSize:10,fontWeight:900,lineHeight:"12px"}}})]}),sx:{"& .primary-block":{alignItems:"center",display:"flex",flexWrap:"wrap",gap:1.25,marginBottom:.75,"& .list-title":{color:"text.secondary",fontSize:15,fontWeight:500,lineHeight:"18px"}}}}),e(we,{children:e(B,{onClick:b,children:e(Te,{})})})]}),Boolean(u)&&e(Re,{anchorEl:u,open:Boolean(u),onClose:C,keepMounted:!0,MenuListProps:{"aria-labelledby":"Options"},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiPaper-root":{minWidth:120}},children:e(F,{onClick:()=>{L(),C()},children:"Delete"})}),l(J,{open:D,"aria-labelledby":"responsive-dialog-title",children:[e(Z,{id:"responsive-dialog-title",children:"Delete"}),e(ee,{children:"Are you sure you want to delete?"}),l(te,{children:[e(_,{color:"secondary",onClick:()=>{f()},children:"Cancel"}),e(_,{onClick:async()=>{await x()},autoFocus:!0,children:"Delete"})]})]})]})},ot=()=>{const{totalLeadDistRules:r}=V(),{setShowLeadDistRuleForm:s}=$();return l(Fe,{children:[e(Se,{children:e(I,{disableIcon:!0,type:"button",onClick:()=>s(!0),sx:{py:0,px:.625,height:36,mt:0},children:"New Lead Distribution Rule"})}),e(Me,{children:e(ve,{children:e(Ie,{children:`${r} Lead Distribution Rules`})})})]})},j=a.exports.forwardRef((r,s)=>{const{children:i,...p}=r,d=a.exports.useRef(null);return a.exports.useImperativeHandle(s,()=>d.current),e("ul",{...p,ref:d,role:"list-box",children:i})});j.displayName="ListBox";const it=({open:r,closeDrawer:s})=>{const{setErrorMessage:i,setSuccessMessage:p}=k(),{leadDataFields:d}=ae(),{teamMembers:h,teamMembersTotal:u}=de(),{setTeamMembers:m,setTeamMembersTotal:D}=ue(),[g,L]=a.exports.useState(!1),[f,b]=a.exports.useState(!0),[C,x]=a.exports.useState(""),c=a.exports.useDeferredValue(C),[S,T]=a.exports.useState(1),{control:n,handleSubmit:R,watch:A,setValue:M}=Ke({defaultValues:{param_name:"",rule:{},assign_to:"",param_type:"",logic:"match"}}),{param_name:w}=A(),G=async o=>{try{T(o);const t=await N.getTeamMembers(c,o);if(!t.success)throw Error(t.message);m([...h,...t.payload.data])}catch(t){i(t.message)}},H=a.exports.useCallback(async()=>{try{if(r){b(!0),T(1);const t=await N.getTeamMembers(c,1);if(!t.success)throw Error(t.message);m(t.payload.data),D(t.payload.meta.total),b(!1)}}catch(o){i(o.message)}},[r,c]),z=a.exports.useCallback(()=>{if(w!==""){const[o]=d.filter(t=>t.field_name===w);o&&M("param_type",o.field_type)}},[w]),K=async o=>{try{const t=await y.createLeadDistRule(o);if(!t.success)throw Error(t.message);p(t.message),setTimeout(()=>window.location.reload(),1e3)}catch(t){i(t.message)}finally{setTimeout(()=>s(),1e3)}};return a.exports.useEffect(()=>{H()},[H]),a.exports.useEffect(()=>{z()},[z]),e(Qe,{anchor:"right",open:r,onClose:(o,t)=>!se(t)&&s(),sx:{zIndex:"modal"},children:l(pe,{sx:{width:{xs:"100vw",md:360}},children:[l(he,{children:[e(B,{onClick:s,sx:{width:32,height:32},children:e(W,{})}),e(ge,{children:"Create New Rule"})]}),l(fe,{onSubmit:R(K),autoComplete:"off",children:[e(re,{component:"p",color:"#24272C",fontSize:18,lineHeight:"21px",marginBottom:3,children:"Assign enquiry to team member when lead data field matches value."}),e(xe,{children:l(De,{children:[e(P,{children:l(O,{select:!0,control:n,label:"Lead Data Field",name:"param_name",sx:Ee,required:!0,defaultValue:w,children:[d.length===0?e(F,{value:"",disabled:!0,children:"No Lead Data Field Available"}):e(F,{value:"",disabled:!0,children:"Select Lead Data Field"}),d.map(({id:o,display_name:t,field_name:Q})=>e(F,{value:Q,children:t},o))]})}),e(P,{children:e(O,{control:n,name:"rule.value",label:"Match Value",placeholder:"Match Value",required:!0,sx:Pe})}),e(P,{children:e(Ue,{open:g,onOpen:()=>{L(!0)},onClose:()=>{x(""),L(!1)},noOptionsText:"Team Member not found.",isOptionEqualToValue:(o,t)=>o.user.name===t.user.name,getOptionLabel:o=>o.user.name,options:h,loading:f,onChange:(o,t)=>{t&&M("assign_to",t.user.id)},onInputChange:(o,t)=>{x(t.length>2?t:"")},ListboxComponent:j,ListboxProps:{onScroll:o=>{const t=o.currentTarget;t.scrollTop+t.clientHeight===t.scrollHeight&&u&&u>h.length&&G(S+1)}},renderOption:(o,t)=>a.exports.createElement(F,{...o,value:t.user.id,key:t.user_id},t.user.name),renderInput:o=>e(Ye,{...o,label:"Assign To",required:!0,InputProps:{...o.InputProps,endAdornment:l(a.exports.Fragment,{children:[f?e(Je,{color:"inherit",size:20}):null,o.InputProps.endAdornment]})}})})})]})}),e(Le,{children:e(I,{type:"submit",children:"Save"})})]})]})})},nt=()=>{const{isMobile:r,isTablet:s}=oe(),{setErrorMessage:i}=k(),[p,d]=a.exports.useState(!0),[h,u]=a.exports.useState(!1),[m,D]=a.exports.useState(1),{leadDistRules:g,showLeadDistRuleForm:L,totalLeadDistRules:f}=V(),{setLeadDataFields:b}=ie(),{setLeadDistRules:C,setShowLeadDistRuleForm:x,setTotalLeadDistRules:c}=$(),S=a.exports.useCallback(async()=>{try{const n=await y.getLeadDistRules(m);if(!n.success)throw Error(n.message);C(R=>R.concat(n.payload.data)),f===0&&c(n.payload.meta.total),d(!1),u(!1)}catch(n){i(n.message)}},[m]),T=a.exports.useCallback(async()=>{try{const n=await ne.getLeadDataFields();if(!n.success)throw Error(n.message);b(n.payload)}catch(n){i(n.message)}},[]);return a.exports.useEffect(()=>{T()},[T]),a.exports.useEffect(()=>{S()},[S]),l(a.exports.Fragment,{children:[e(le,{children:e("title",{children:"Lead Distribution Rules"})}),r&&l(ke,{sx:Be,children:[e(B,{component:ce,to:"/business-settings",sx:{width:32,height:32},children:e(W,{})}),e(Ae,{children:"Lead Distribution Rules"})]}),e(He,{sx:ze,children:e(_e,{sx:Oe,children:!p&&e(Ze,{elevation:0,sx:Ne,children:e(et,{sx:We,children:g.length===0?l(qe,{children:[e(Xe,{children:e(I,{disableIcon:!0,onClick:()=>x(!0),sx:{borderRadius:2,boxShadow:"0px 8px 8px rgba(50, 197, 255, 0.1)",fontSize:16,fontWeight:700,height:36,lineHeight:"19px",margin:"auto",textTransform:"capitalize"},children:"New Lead Distribution Rule"})}),e(Ve,{children:e($e,{children:"Create logical rules, based on which an enquiry is automatically assigned to a team member."})})]}):l(a.exports.Fragment,{children:[s&&e(ot,{}),s&&e(tt,{}),g.map(({rule:n,user:R,param_name:A,id:M},w)=>e(rt,{title:R.name,description:n.value,ruleId:M},w)),f>g.length&&e(je,{children:e(at,{variant:"contained",color:"primary",onClick:()=>{D(n=>n+1),u(!0)},loading:h,children:"Load More"})})]})})})})}),r&&g.length>0&&e(Ge,{children:e(I,{onClick:()=>x(!0),variant:"outlined",color:"primary",disableIcon:!0,children:"New Lead Distribution Rule"})}),e(it,{open:L,closeDrawer:()=>{x(!1)}})]})},Ot=()=>e(st,{children:e(me,{children:e(nt,{})})});export{Ot as default};
