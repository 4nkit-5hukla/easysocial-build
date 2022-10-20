var Ue=Object.defineProperty;var Ye=(o,n,a)=>n in o?Ue(o,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[n]=a;var z=(o,n,a)=>(Ye(o,typeof n!="symbol"?n+"":n,a),a);import{g as je,f as Ge,D as _,j as e,s as Y,U as Xe,z as Me,aB as pe,aA as ge,_ as O,r as i,n as Ae,b as ke,a as c,a0 as N,q as qe,t as Qe,aP as Ze,aR as he,aQ as ne,b1 as Ke,E as Je,b2 as et,b3 as tt,ai as Z,b4 as ot,ao as j,B as D,T,b5 as De,I as te,aF as L,b6 as ee,a9 as nt,aZ as at,a_ as it,C as st,aU as rt,ar as lt,X as $,aC as ue,aV as ct,as as Ie,at as Ee,au as Fe,av as Te,b7 as ae,W as dt}from"./index.6d7cebbf.js";import{m as pt,D as gt,c as ht,L as ut,d as mt,W as ft,n as xt,o as me,M as fe,p as vt,q as Ct,r as bt,s as wt,t as ie}from"./CommonComponents.07d1ab3a.js";import{O as yt,Q as xe,e as Be,t as Re}from"./LayoutComponents.4c7c1ee5.js";import{s as M}from"./styled.3765d5b8.js";import{T as St,a as Mt}from"./Tabs.8c035ac2.js";import{L as At}from"./List.7f34a280.js";import{C as kt,A as Dt,M as It}from"./PopupBoxes.7e842f40.js";import{L as Le}from"./ListItem.c0b1dbb4.js";import{C as We}from"./Checkbox.4ebffd65.js";import{L as Et}from"./ListItemButton.694df44d.js";import{C as Ne}from"./Chip.5e5e8094.js";import{M as le}from"./Menu.c568f487.js";import{M as U}from"./MenuItem.e5daf721.js";import{S as E}from"./Skeleton.54bb524d.js";import{T as ce}from"./TextField.78e0843d.js";import{I as re}from"./InputAdornment.43f87b86.js";import{S as ve}from"./Search.f5de6aa7.js";import{M as Ft}from"./MoreVert.4bd4b070.js";import{C as Tt}from"./Close.c4664791.js";import{D as Bt}from"./Drawer.2c9c85b1.js";import{S as Rt,W as Lt}from"./WATemplatesApi.2434eb19.js";import{d as K}from"./WhatsApp.c407ea69.js";import{P as Wt,a as Nt}from"./Play.4a9a16a5.js";import{L as V}from"./Link.c8914208.js";import{L as Pe,M as He}from"./PickersToolbarButton.8d3e6d2b.js";import{L as de}from"./LoadingButton.242af9d4.js";import{D as Pt}from"./DatePicker.cf2084eb.js";import{b as Ht}from"./Select.373439ca.js";import"./Popper.9b3bf2fd.js";import"./listItemButtonClasses.fe0c8da4.js";import"./isMuiElement.d504a926.js";import"./SwitchBase.caaee060.js";import"./listItemTextClasses.25e89b82.js";import"./Grid.f7c5dc8c.js";import"./CircularProgress.f1a59e6f.js";function zt(o){return Ge("MuiAlert",o)}const Ot=je("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Ce=Ot,_t=_(e("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),$t=_(e("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Vt=_(e("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Ut=_(e("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var be;const Yt=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],jt=o=>{const{variant:n,color:a,severity:r,classes:t}=o,h={root:["root",`${n}${Me(a||r)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return Qe(h,zt,t)},Gt=Y(Xe,{name:"MuiAlert",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:a}=o;return[n.root,n[a.variant],n[`${a.variant}${Me(a.color||a.severity)}`]]}})(({theme:o,ownerState:n})=>{const a=o.palette.mode==="light"?pe:ge,r=o.palette.mode==="light"?ge:pe,t=n.color||n.severity;return O({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&n.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:a(o.palette[t].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${t}StandardBg`]:r(o.palette[t].light,.9),[`& .${Ce.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette.mode==="dark"?o.palette[t].main:o.palette[t].light}},t&&n.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:a(o.palette[t].light,.6),border:`1px solid ${(o.vars||o).palette[t].light}`,[`& .${Ce.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette.mode==="dark"?o.palette[t].main:o.palette[t].light}},t&&n.variant==="filled"&&O({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${t}FilledColor`],backgroundColor:o.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main,color:o.palette.getContrastText(o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main)}))}),Xt=Y("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),qt=Y("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,n)=>n.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),we=Y("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),ye={success:e(_t,{fontSize:"inherit"}),warning:e($t,{fontSize:"inherit"}),error:e(Vt,{fontSize:"inherit"}),info:e(Ut,{fontSize:"inherit"})},Qt=i.exports.forwardRef(function(n,a){const r=Ae({props:n,name:"MuiAlert"}),{action:t,children:h,className:x,closeText:b="Close",color:l,icon:s,iconMapping:w=ye,onClose:f,role:g="alert",severity:u="success",variant:d="standard"}=r,A=ke(r,Yt),m=O({},r,{color:l,severity:u,variant:d}),F=jt(m);return c(Gt,O({role:g,elevation:0,ownerState:m,className:qe(F.root,x),ref:a},A,{children:[s!==!1?e(Xt,{ownerState:m,className:F.icon,children:s||w[u]||ye[u]}):null,e(qt,{ownerState:m,className:F.message,children:h}),t!=null?e(we,{ownerState:m,className:F.action,children:t}):null,t==null&&f?e(we,{ownerState:m,className:F.action,children:e(N,{size:"small","aria-label":b,title:b,color:"inherit",onClick:f,children:be||(be=e(Tt,{fontSize:"small"}))})}):null]}))}),Zt=Qt,Kt=["component","direction","spacing","divider","children"];function Jt(o,n){const a=i.exports.Children.toArray(o).filter(Boolean);return a.reduce((r,t,h)=>(r.push(t),h<a.length-1&&r.push(i.exports.cloneElement(n,{key:`separator-${h}`})),r),[])}const eo=o=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[o],to=({ownerState:o,theme:n})=>{let a=O({display:"flex",flexDirection:"column"},he({theme:n},ne({values:o.direction,breakpoints:n.breakpoints.values}),r=>({flexDirection:r})));if(o.spacing){const r=Ke(n),t=Object.keys(n.breakpoints.values).reduce((l,s)=>((typeof o.spacing=="object"&&o.spacing[s]!=null||typeof o.direction=="object"&&o.direction[s]!=null)&&(l[s]=!0),l),{}),h=ne({values:o.direction,base:t}),x=ne({values:o.spacing,base:t});typeof h=="object"&&Object.keys(h).forEach((l,s,w)=>{if(!h[l]){const g=s>0?h[w[s-1]]:"column";h[l]=g}}),a=Je(a,he({theme:n},x,(l,s)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${eo(s?h[s]:o.direction)}`]:tt(r,l)}})))}return a=et(n.breakpoints,a),a},oo=Y("div",{name:"MuiStack",slot:"Root",overridesResolver:(o,n)=>[n.root]})(to),no=i.exports.forwardRef(function(n,a){const r=Ae({props:n,name:"MuiStack"}),t=Ze(r),{component:h="div",direction:x="column",spacing:b=0,divider:l,children:s}=t,w=ke(t,Kt);return e(oo,O({as:h,ownerState:{direction:x,spacing:b},ref:a},w,{children:l?Jt(s,l):s}))}),ao=no,io=_(e("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy"),so=_(e("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download"),ro=o=>{const[n,a]=i.exports.useState(o),r=i.exports.useCallback(g=>{a(u=>[...u,...Array.isArray(g)?g:[g]])},[]),t=i.exports.useCallback(g=>a(u=>[...Array.isArray(g)?g:[g],...u]),[]),h=i.exports.useCallback(()=>a(g=>g.slice(0,-1)),[]),x=i.exports.useCallback(()=>a(g=>g.slice(1)),[]),b=i.exports.useCallback((g,u)=>a(d=>{const A=d.slice();return A.splice(u<0?A.length+u:u,0,A.splice(g,1)[0]),A}),[]),l=i.exports.useCallback(()=>a(()=>[]),[]),s=i.exports.useCallback(()=>a(o),[]),w=i.exports.useCallback(g=>a(u=>{const d=u.slice();return d.splice(g,1),d}),[]),f=i.exports.useMemo(()=>({setValue:a,add:r,unshift:t,push:r,move:b,clear:l,reset:s,removeIndex:w,pop:h,shift:x}),[r,t,b,l,s,w,h,x]);return[n,f]},ze=i.exports.createContext(void 0),Oe=i.exports.createContext(void 0),lo=({children:o})=>{const[n,a]=i.exports.useState(null),r=Boolean(n),[t,h]=ro([]),[x,b]=i.exports.useState(void 0),[l,s]=i.exports.useState(),[w,f]=i.exports.useState(null),g=Boolean(w),[u,d]=i.exports.useState(!1),A={moreOptEl:n,openMoreOpt:r,campaigns:t,activeCampaign:l,currentCampaign:x,bulkActionEl:w,openBulkAction:g,showNewCampaignFrom:u},m=i.exports.useMemo(()=>({setMoreOptEl:a,campaignActions:h,setActiveCampaign:s,setCurrentCampaign:b,setBulkActionEl:f,toggleNewCampaignFrom:d}),[]);return e(ze.Provider,{value:A,children:e(Oe.Provider,{value:m,children:o})})},P=()=>{const o=i.exports.useContext(ze);if(o===void 0)throw Error("Item must be used inside of CampaignsProvider, otherwise it will not function correctly.");return o},H=()=>{const o=i.exports.useContext(Oe);if(o===void 0)throw Error("Item must be used inside of CampaignsProvider, otherwise it will not function correctly.");return o},co=({children:o})=>e(lo,{children:e(pt,{children:o})});class B{}z(B,"getCampaignsData",async()=>await Z("/campaigns","GET")),z(B,"getCampaignById",async n=>await Z(`/campaigns/${n}`,"GET")),z(B,"updateCampaignProgress",async(n,a)=>await Z(`/campaigns/status/${n}`,"PUT",{data:{progress:a}})),z(B,"updateCampaignSchedule",async(n,a)=>await Z(`/campaigns/schedule-date/${n}`,"PUT",{data:{schedule_date:a}})),z(B,"downloadCampaignReport",async(n,a)=>await ot(`/campaigns/report/download/${n}`,"POST",{data:{month:a}}));const po={maxWidth:{md:380,xl:560}},go={minHeight:46,"& .MuiTabScrollButton-root":{alignSelf:"center",borderRadius:4,height:32,width:32},"& .MuiTabs-indicator":{height:4}},_e={"& .MuiPaper-root":{minWidth:140,"& .MuiList-root":{p:0,"& .MuiMenuItem-root":{color:"#12B0EE",justifyContent:"center",minHeight:40,fontSize:16,fontWeight:500,lineHeight:"19px","&:not(:last-of-type)":{borderBottom:1,borderBottomColor:"#0000000D"}}}}},$e={"&:not(:last-of-type)":{borderBottom:"1px solid #24272C1A"},"& .MuiListItemButton-root":{alignItems:"stretch",flexDirection:"column",py:1.5,rowGap:1,"&:hover, &.active":{bgcolor:"#EDFAFF"}},"& .above, & .below":{display:"flex",flexWrap:"wrap",gap:1.25,justifyContent:"space-between","& .above-start, & .below-start, & .above-end, & .below-end":{alignItems:"center",display:"flex",flexWrap:"wrap",gap:1.25}}},ho={"&.MuiCollapse-hidden":{width:"0!important"},"&.MuiCollapse-entered":{width:"100%!important"},"& .MuiCollapse-wrapper, & .MuiCollapse-wrapperInner":{width:"100%"},"& .MuiCollapse-wrapperInner":{pr:1.75}},se={width:42,height:42},uo={width:42,height:42},mo=_e,fo=M("div")({backgroundColor:"#FFFFFF",borderRight:1,borderRightStyle:"solid",borderRightColor:"#0000000D",display:"flex",flexDirection:"column",width:"100%",transition:"max-width 0.2s ease-in-out"}),xo=M("div")({borderBottom:1,borderBottomStyle:"solid",borderBottomColor:"#0000000D",display:"flex",alignItems:"center"}),vo=M(St)({flexGrow:1,minHeight:46,paddingLeft:14}),J=M(Mt)({fontSize:16,fontWeight:500,lineHeight:"19px",minHeight:46,minWidth:"unset",paddingLeft:10,paddingRight:10,textTransform:"inherit"}),Co=M("div")({display:"flex",flexDirection:"column",flexGrow:1}),bo=M("div")({display:"flex",flex:"0 1 0",paddingLeft:14}),wo=M("div")({flex:"1 0 0",overflow:"auto"}),Se=M(At)({padding:0,"& .MuiListItem-root":{"& > .MuiListItemButton-root":{paddingLeft:64,paddingRight:20},"& .MuiListItemSecondaryAction-root":{right:"unset",left:14}}}),yo=M("div")({backgroundColor:"#F7F8FA",flexGrow:1,display:"flex",position:"relative"}),So=M("div")({display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%","& .top":{alignItems:"center",display:"inline-flex",flexDirection:"column",marginTop:"80px",rowGap:"5px",textAlign:"center","& .info":{"& .heading":{color:"#24272C",fontSize:"20px",fontWeight:500,lineHeight:"42px"}},"& .MuiButton-root":{backgroundColor:"#12B0EE",borderRadius:"8px",boxShadow:"none",height:"42px"}},"& .bottom":{display:"flex",justifyContent:"flex-end","& .image":{marginRight:"36px",marginBottom:"20px"}}}),Mo=M("div")({display:"flex",height:"100%",width:"100%"}),Ao=M("div")({display:"flex",flex:"1 1 0",flexDirection:"column"}),ko=M("div")({backgroundColor:"#FFFFFF",borderBottom:"1px solid #0000000D",display:"flex",justifyContent:"space-between",padding:"12px 20px"}),Do=M("div")({display:"flex",flexDirection:"column",flexGrow:1,gap:"10px","& h3.MuiTypography-root":{color:"#24272C",fontSize:"18px",fontWeight:500,lineHeight:"21px"}}),Io=M("div")({flexShrink:1}),Eo=M("div")({flex:"1 1 0",overflow:"auto","& .linked-template, & .linked-users, & .schedule, & .users, & .api":{padding:"20px","& h4.MuiTypography-root":{color:"#24272C",fontSize:"15px",fontWeight:700,lineHeight:"40px"},"& .MuiLink-root":{alignItems:"center",color:"#12B0EE",display:"flex",fontSize:"12px",fontWeight:400,lineHeight:"12px",columnGap:"7px"},"& .MuiFilledInput-root":{backgroundColor:"#12B0EE1A",borderRadius:"8px",height:"40px",width:"100%","&::before, &:after":{display:"none"},"& *::-moz-selection, & *::selection":{backgroundColor:"transparent",color:"#24272C80"},"& .MuiFilledInput-input":{color:"#24272C80",fontSize:"12px",fontWeight:500,height:"100%",lineHeight:"14px",padding:"0 12px"}},"& .template":{alignItems:"baseline",display:"flex",gap:"0 10px"},"& .name, & .at":{color:"#767676B3",fontSize:"14px",fontWeight:400,lineHeight:"15px"}}}),Fo=M("div")({padding:20}),To=M("div")({display:"flex",justifyContent:"space-between",marginBottom:16,"& h4.MuiTypography-root":{color:"#24272C",fontSize:15,fontWeight:700,lineHeight:"40px"},"& button.MuiLink-root":{alignItems:"baseline",color:"#12B0EE",display:"flex",fontSize:"14px",fontWeight:500,gap:"8px",lineHeight:"40px"}}),Bo=M("div")({display:"flex",flexWrap:"wrap",gap:"30px 15px","& .report-item":{background:"#FFFFFF",boxShadow:"0px 0px 20px rgba(50, 197, 255, 0.15)",borderRadius:"8px",display:"flex",flex:"1 1 calc((100% / 3) - (15px * 2))",flexDirection:"column",gap:"30px 0",padding:"7px",minWidth:"138px","&:hover":{boxShadow:"0px 0px 20px 5px rgba(50, 197, 255, 0.15), inset 0 0 0 1px #12B0EE"},"& .top":{display:"flex",justifyContent:"space-between","& .item-title":{color:"#24272C",fontSize:"16px",fontWeight:500,lineHeight:"14px"}},"& .bottom":{"& .item-value":{color:"#24272C",fontSize:"20px",fontWeight:700,lineHeight:"23px"},"& .item-unit":{color:"#24272C80",fontSize:"12px",fontWeight:500,lineHeight:"14px"}}}}),Ro=M("div")({columnGap:"15px",display:"flex",justifyContent:"flex-end",padding:"20px","& .MuiButton-root":{alignItems:"center",borderRadius:"8px",boxShadow:"none",fontSize:"15px",fontWeight:500,height:"43px",lineHeight:"18px",textTransform:"capitalize","& .MuiLoadingButton-loadingIndicator":{color:"#ffffff"},"&.MuiButton-containedPrimary":{backgroundColor:"#12B0EE"},"&.MuiButton-containedSecondary":{backgroundColor:"#BEBEBE","&.btn-resume":{backgroundColor:"#47C055"}}}}),Lo=M("div")({backgroundColor:"#ffffff",borderLeft:"1px solid #0000000D",flexDirection:"column",flex:"0 1 auto",height:"100%",width:"100%",maxWidth:300,padding:"0 20px","& .header":{padding:"12px 0","& .heading":{color:"#24272C",fontSize:"18px",fontWeight:500,lineHeight:"21px"}},"& .preview-content":{flex:"1 1 0","& .preview-card":{backgroundColor:"#FFFFFF",border:"1px solid #DEE2EA",boxShadow:"0 0 20px rgba(0, 0, 0, 0.1)",borderRadius:"4px",margin:"0 auto 20px",maxWidth:"300px",padding:"15px",height:"max-content","& .media-wrapper":{alignItems:"center",backgroundColor:"#C4C4C4",borderRadius:"4px 4px 0 0",display:"flex",justifyContent:"center",marginBottom:"24px",minHeight:"130px",overflow:"hidden",position:"relative",width:"100%","&.doc":{backgroundColor:"#F5F5F5",color:"#A1AEB4",fontSize:"90px",fontWeight:900,lineHeight:"96px"},"&.vdo":{"&::after":{borderLeft:"32px solid #ffffff",borderTop:"16px solid transparent",borderBottom:"16px solid transparent",content:'""',cursor:"pointer",display:"block",filter:"drop-shadow(0px 5px 2px #00000040)",left:"50%",top:"50%",transform:"translate(-50%,-50%)",position:"absolute"},"&.playing":{"&:hover":{"&::after":{display:"block"}},"&::after":{borderTop:"none",borderBottom:"none",borderLeft:"12px solid #ffffff",borderRight:"12px solid #ffffff",content:'""',cursor:"pointer",display:"none",height:"32px",left:"50%",top:"50%",transform:"translate(-50%,-50%)",position:"absolute",width:"8px"}}},"& .image, & .video":{objectFit:"cover",objectPosition:"center",width:"100%"},"& .video":{height:"130px"}},"& .header":{color:"#767676",fontSize:"16px",fontWeight:700,lineHeight:"16px",marginBottom:"5px",minHeight:"unset!important",padding:"0!important"},"& .body":{color:"#767676",fontSize:"14px",fontWeight:400,lineHeight:"16px",marginBottom:"12px","& >":{"& *":{"&:not(:last-child)":{marginBottom:"16px"}}}},"& .footer":{alignItems:"flex-start!important",border:"none!important",color:"#76767680",fontSize:"12px",fontWeight:500,lineHeight:"16px",marginBottom:"20px",minHeight:"unset!important",padding:"0!important"},"& .preview-actions":{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"16px","& .btn-action":{backgroundColor:"#ffffff",border:"1px solid #DEE2EA",borderRadius:"8px",color:"#767676",flex:"1 1 auto",fontSize:"14px",fontWeight:500,height:"40px",lineHeight:"16px",padding:"0 5px",textTransform:"initial",minWidth:"calc(50% - 8px)","& .label":{overflow:"hidden",textAlign:"left",textOverflow:"ellipsis",whiteSpace:"nowrap"}}}}}}),Wo=({data:o,index:n,checked:a,doCheck:r})=>{const{setErrorMessage:t,setSuccessMessage:h}=j(),{activeCampaign:x}=P(),{setActiveCampaign:b,campaignActions:l}=H(),[s,w]=i.exports.useState(null),[f,g]=i.exports.useState(!1),u=async()=>{const m=await B.updateCampaignProgress(o.id,ee.REMOVED);if(!m.success)return t(m.message);b(void 0),l.setValue(F=>F.filter(W=>W.id!==o.id)),h("Campaign Deleted Successfully")},d=m=>{m.preventDefault(),w(s===null?{mouseX:m.clientX+2,mouseY:m.clientY-6}:null)},A=()=>{w(null)};return c(i.exports.Fragment,{children:[e(Le,{secondaryAction:e(We,{edge:"end",onChange:r(n),checked:a.indexOf(n)!==-1}),disablePadding:!0,sx:$e,children:c(Et,{onClick:()=>b(x!==o.id?o.id:void 0),onContextMenu:d,className:x&&x===o.id?"active":"",children:[c(D,{className:"above",children:[e(D,{className:"above-start",children:e(T,{component:"span",sx:{fontSize:16,fontWeight:500,lineHeight:"13px"},children:o.name})}),e(D,{className:"above-end",children:e(Ne,{label:o.progress,size:"small",sx:{bgcolor:De(o.progress),alignItems:"center",color:"#FFFFFF",height:16,gap:.5,px:1,"& .MuiChip-label":{fontSize:9,fontWeight:900,lineHeight:1,px:0}}})})]}),e(D,{className:"below",children:c(D,{className:"below-start",children:[e(te,{src:(o==null?void 0:o.type)==="API"?"/static/images/png/link-icon.png":"/static/images/png/calendar-icon.png",alt:(o==null?void 0:o.type)==="API"?"api":"ongoing",sx:{width:"auto"}}),e(T,{component:"span",sx:{color:"#24272CB3",fontSize:13,fontWeight:500,lineHeight:"12px"},children:(o==null?void 0:o.type)==="API"?o==null?void 0:o.type:L(o==null?void 0:o.schedule_date).format("Do MMM YY, h:mm A")})]})})]})}),e(le,{open:s!==null,onClose:A,onClick:A,anchorReference:"anchorPosition",anchorPosition:s!==null?{top:s.mouseY,left:s.mouseX}:void 0,children:e(U,{onClick:()=>g(!0),children:"Delete"})}),e(kt,{title:"Delete",open:f,setOpen:g,onConfirm:u,positiveLabel:"Delete",negativeLabel:"Cancel",children:"Are you sure you want to delete?"})]})},No=()=>c(Le,{secondaryAction:e(E,{variant:"rectangular",width:18,height:18}),disablePadding:!0,sx:{...$e,flexDirection:"column",rowGap:1,py:1.5,pl:8,pr:2.5,"& .MuiListItemSecondaryAction-root":{left:"26px !important"}},children:[c(D,{className:"above",width:"100%",children:[e(D,{className:"above-start",flexGrow:1,children:e(E,{variant:"rounded",width:100,height:13})}),e(D,{className:"above-end",children:e(E,{variant:"rounded",width:70,height:16,sx:{borderRadius:4}})})]}),e(D,{className:"below",width:"100%",children:e(D,{className:"below-start",flexGrow:1,children:e(E,{variant:"rounded",width:32,height:12})})})]}),Po=()=>{const{showSnack:o}=j(),{setHeaderContent:n}=nt(),{campaigns:a}=P(),{campaignActions:r,setMoreOptEl:t,setBulkActionEl:h}=H(),[x,b]=at(),l=x.get("tab"),[s,w]=i.exports.useState(!0),[f,g]=i.exports.useState(!1),[u,d]=i.exports.useState(l!=null?l:"all"),[A,m]=i.exports.useState(""),[F,W]=i.exports.useState(!1),[p,y]=i.exports.useState([]),v=i.exports.useRef(),I=i.exports.useDeferredValue(A),R=a.filter(C=>u==="all"?!0:u===(C==null?void 0:C.progress.toLowerCase())).filter(C=>C.name.toLowerCase().includes(I.toLowerCase())),G=(C,S)=>{d(S),b({tab:S})},X=C=>{W(C.target.checked),C.target.checked?y(Array.from({length:R.length},(S,k)=>k)):y([])},q=C=>()=>{const S=p.indexOf(C),k=[...p];S===-1?k.push(C):k.splice(S,1),y(k),W(!1)},Q=i.exports.useRef(async()=>{const C=await B.getCampaignsData();if(!C.success)return w(!1),o(C.message,"error");r.setValue(C.payload),w(!1)});return i.exports.useEffect(()=>{Q.current()},[]),i.exports.useEffect(()=>{l&&l!==u&&d(l)},[u,l]),i.exports.useEffect(()=>(n(c(D,{display:"flex",alignItems:"center",gap:.5,children:[e(T,{component:"span",sx:yt,children:s?e(E,{variant:"text",width:144}):it(R.length,"Campaign")}),e(T,{component:"span",sx:xe,children:"/"}),c(T,{component:"span",sx:xe,children:[I!==""?`"${I}" in `:"",u]})]})),()=>{n(null)}),[s,u,I,R.length]),c(fo,{sx:po,children:[c(xo,{children:[c(vo,{value:u,onChange:G,variant:"scrollable",orientation:"horizontal",scrollButtons:"auto",allowScrollButtonsMobile:!0,sx:go,children:[e(J,{label:"All",value:"all"}),e(J,{label:"Active",value:"active"}),e(J,{label:"Paused",value:"paused"}),e(J,{label:"Completed",value:"completed"})]}),e(N,{onClick:C=>t(C.currentTarget),sx:uo,children:e(Dt,{})})]}),c(Co,{children:[c(bo,{children:[e(We,{checked:F,onChange:X,inputProps:{"aria-label":"Check All"}}),e(st,{in:f,orientation:"horizontal",sx:ho,children:e(ce,{placeholder:"Search Campaigns...",onChange:({currentTarget:{value:C}})=>m(C),InputProps:{disableUnderline:!1,startAdornment:f?e(re,{position:"start",children:e(ve,{})}):void 0,endAdornment:f?e(re,{position:"end",children:e(N,{sx:se,onClick:()=>{m(""),g(!1)},children:e(rt,{})})}):void 0,sx:{borderRadius:0,minHeight:42}},inputProps:{ref:v,disabled:!f},variant:"standard"})}),!f&&e(N,{sx:{...se,ml:"auto"},onClick:()=>{g(!0),setTimeout(()=>{var C;(C=v.current)==null||C.focus()},0)},children:e(ve,{})}),!f&&e(N,{onClick:C=>h(C.currentTarget),sx:se,children:e(Ft,{})})]}),e(wo,{children:s?e(Se,{children:Array(5).fill(void 0).map((C,S)=>e(No,{},S))}):R.length>0?e(Se,{children:R.reverse().map((C,S)=>e(Wo,{data:C,index:S,doCheck:q,checked:p},S))}):e(Zt,{variant:"filled",severity:"warning",sx:{mx:2.5},children:"0 campaigns found."})})]})]})},Ho=({open:o,anchorEl:n,doClose:a})=>{const{toggleNewCampaignFrom:r}=H();return c(le,{anchorEl:n,open:o,onClose:a,onClick:a,keepMounted:!1,MenuListProps:{"aria-labelledby":"Options"},anchorOrigin:Be,transformOrigin:Re,sx:_e,children:[e(U,{onClick:()=>r(!0),children:"New Campaign"}),e(U,{children:"Manage Tabs"})]})},zo=({open:o,anchorEl:n,doClose:a})=>c(le,{anchorEl:n,open:o,onClose:a,onClick:a,keepMounted:!1,MenuListProps:{"aria-labelledby":"Bulk Actions"},anchorOrigin:Be,transformOrigin:Re,sx:mo,children:[e(U,{children:"Action 1"}),e(U,{children:"Action 2"})]}),Oo=({open:o,closeDrawer:n})=>e(Bt,{anchor:"right",open:o,onClose:(a,r)=>!lt(r)&&n(),sx:{zIndex:"modal"},children:e(gt,{sx:{width:{xs:"100vw",md:360}},children:c(ht,{children:[e(N,{onClick:n,sx:{width:32,height:32},children:e(ut,{})}),e(mt,{children:"Create Campaign"})]})})}),_o=()=>{const{moreOptEl:o,openMoreOpt:n,bulkActionEl:a,openBulkAction:r,showNewCampaignFrom:t}=P(),{setMoreOptEl:h,setBulkActionEl:x,toggleNewCampaignFrom:b}=H();return c(i.exports.Fragment,{children:[e(Po,{}),e(Ho,{open:n,anchorEl:o,doClose:()=>h(null)}),e(zo,{open:r,anchorEl:a,doClose:()=>x(null)}),e(Oo,{open:t,closeDrawer:()=>b(!1)})]})},$o=()=>{const{toggleNewCampaignFrom:o}=H();return c(So,{children:[c("div",{className:"top",children:[c("div",{className:"info",children:[e("h3",{className:"heading",children:"Click on a campaign to see details."}),e("h3",{className:"heading",children:"or"}),e("h3",{className:"heading",children:"Create a new campaign"})]}),e($,{type:"button",variant:"contained",onClick:()=>o(!0),children:"New Campaign"})]}),e("div",{className:"bottom",children:e("div",{className:"image",children:e(te,{src:"/static/images/svg/create-or-select.svg",alt:"Create or Select",sx:{width:201,height:"auto"}})})})]})},Vo=({components:o})=>{const n=structuredClone(o),a=i.exports.useRef(null),[r,t]=i.exports.useState(!1),[h,x]=i.exports.useState(!1),[b,l]=i.exports.useState(""),s=n.find(({type:p})=>p===K.HEADER),w=n.find(({type:p})=>p===K.BODY),f=n.find(({type:p})=>p===K.FOOTER),g=n.find(({type:p})=>p===K.BUTTONS),u=(p=>{if(p){const{example:y}=p;if(y){const{header_text:v}=y;return v||[]}else return[]}else return[]})(s),d=(p=>{if(p){const{example:y}=p;if(y){const{header_handle:v}=y;if(v&&v.length>0){const[I]=v;return I}else return""}else return""}else return""})(s),A=(p=>{if(p){const{example:y}=p;if(y){const{header_files:v}=y;if(v&&v.length>0){const[I]=v;return I}else return""}else return""}else return""})(s),m=(p=>{if(p){const{example:y}=p;if(y){const{body_text:v}=y;return v?v.length===1&&Array.isArray(v[0])?v.pop():v:[]}else return[]}else return[]})(w),F=(p=>s?p.reduce((y,v,I)=>v&&v!==""?y.replace(`{{${I+1}}}`,v):y,s.text):"")(u),W=(p=>w?p.reduce((y,v,I)=>v&&v!==""?y.replace(`{{${I+1}}}`,v):y,w.text):"")(m);return i.exports.useEffect(()=>{a.current&&(a.current.addEventListener("playing",()=>{l("playing")}),a.current.addEventListener("pause",()=>{l("")}),a.current.addEventListener("ended",()=>{l("")}),r?a.current.play():a.current.pause())},[r]),c(ft,{children:[s&&s.format==="IMAGE"&&e(xt,{children:d&&d!==""&&e(ue,{component:"img",alt:"header-img",image:d,sx:me})}),s&&s.format==="VIDEO"&&c(V,{underline:"none",component:"button",type:"button",onClick:()=>t(!r),onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),sx:fe,children:[e(ue,{component:"video",ref:a,className:"video",disablePictureInPicture:!0,sx:{...me,height:130},children:d&&d!==""&&e("source",{src:d,type:"video/mp4"})}),c(D,{position:"absolute",display:"flex",children:[b===""&&e(Wt,{}),h&&b==="playing"&&e(Nt,{})]})]}),s&&s.format==="DOCUMENT"&&e(V,{underline:"none",className:"media-wrapper doc",href:d,target:"_blank",sx:{...fe,backgroundColor:"#F5F5F5",color:"#A1AEB4",fontSize:90,fontWeight:900,lineHeight:"96px"},children:d&&d!==""?A.split(".").pop().slice(0,4).toUpperCase():""}),s&&s.format==="TEXT"&&e(vt,{children:F}),e(Ct,{children:ct(W)}),f&&f.text!==""&&e(bt,{children:f.text}),g&&g.buttons.length>0&&e(wt,{children:g.buttons.map((p,y)=>e(i.exports.Fragment,{children:p.type==="QUICK_REPLY"?e($,{variant:"outlined",type:"button",sx:{...ie,color:"#767676",minWidth:"calc(50% - 8px)"},children:p.text}):p.type==="PHONE_NUMBER"?e($,{href:`tel:${p.phone_number}`,variant:"outlined",sx:{...ie,color:"#32C5FF",minWidth:"100%"},children:p.text}):c($,{href:p.example?p.example.reduce((v,I,R)=>I&&I!==""?v.replace(`{{${R+1}}}`,I):v,p.url):"",variant:"outlined",target:"_blank",rel:"noreferrer",sx:{...ie,color:"#32C5FF",minWidth:"100%"},children:[e(Rt,{}),p.text]})},y))})]})},Uo=({loading:o,title:n,icon:a,value:r,unit:t})=>c("div",{className:"report-item",children:[c("div",{className:"top",children:[e("h3",{className:"item-title",children:n}),e("img",{src:a,alt:"icon"})]}),c("div",{className:"bottom",children:[o?e(E,{className:"item-value",animation:"wave"}):e("h3",{className:"item-value",children:n==="Reply Rate"?r>0?`${r}%`:"N.A.":Intl.NumberFormat("en-US").format(r)}),o?e(E,{className:"item-unit",animation:"wave"}):e("h4",{className:"item-unit",children:n==="Reply Rate"?r>0?t:"":t})]})]}),Yo=({open:o,closeDialog:n,campaignScheduleDate:a})=>{const{setSuccessMessage:r,setErrorMessage:t}=j(),{activeCampaign:h,currentCampaign:x}=P(),{campaignActions:b,setCurrentCampaign:l}=H(),[s,w]=i.exports.useState(L(a).local()),[f,g]=i.exports.useState(!1),u=async()=>{if(h&&x&&s){g(!0);const d=await B.updateCampaignSchedule(h,s.local().valueOf());if(!d.success)return t(d.message);l({...x,schedule_date:s.toDate()}),b.setValue(A=>A.map(m=>m.id===h?{...m,schedule_date:s.toDate()}:m)),r(d.message),g(!1),n()}};return c(Ie,{open:o,onClose:n,maxWidth:"xs",sx:{"& .MuiDialog-paper":{m:{xs:.75,sm:4},minWidth:320,"& .MuiDialogContent-root, & .MuiDialogActions-root":{px:{xs:2.5,sm:3},py:2.5}}},children:[e(Ee,{children:"Modify Scheduled Date"}),e(Fe,{children:e(Pe,{dateAdapter:He,children:e(It,{value:s.toDate(),onChange:d=>{w(L(d))},minDateTime:L(),renderInput:d=>e(ce,{...d,variant:"filled",label:"Scheduled At",placeholder:"Set Scheduled At"})})})}),e(Te,{children:e(de,{loading:f,variant:"contained",type:"button",className:"btn-update",onClick:u,children:"Update"})})]})},jo=({open:o,closeDialog:n})=>{const{setSuccessMessage:a,setErrorMessage:r}=j(),{activeCampaign:t,currentCampaign:h}=P(),[x,b]=i.exports.useState(L().local()),[l,s]=i.exports.useState(!1),w=async()=>{var f;if(t&&h&&x){s(!0),console.log(x.format("MMM_YYYY"));const g=await B.downloadCampaignReport(t,x.format("YYYY-MM"));if(typeof g.success<"u"&&!g.success)r(g.message),s(!1);else{const u=window.URL.createObjectURL(new Blob([g])),d=document.createElement("a");d.href=u,d.setAttribute("download",`${h.name.replace(" ","_")}Report_${x.format("MMM_YYYY")}.pdf`),document.body.appendChild(d),d.style.display="none",d.click(),(f=d==null?void 0:d.parentNode)==null||f.removeChild(d),a("Report Downloaded"),s(!1),n()}}};return c(Ie,{open:o,onClose:n,maxWidth:"xs",children:[e(Ee,{children:"Select Month"}),e(Fe,{children:e(Pe,{dateAdapter:He,children:e(Pt,{views:["year","month"],openTo:"year",label:"Year and Month",value:x.toDate(),onChange:f=>{b(L(f))},minDate:L("2021-01-01","YYYY-MM-DD"),maxDate:L(),renderInput:f=>e(ce,{...f,variant:"filled"})})})}),e(Te,{children:e(de,{loading:l,variant:"contained",type:"button",loadingPosition:"start",startIcon:e(so,{}),onClick:w,children:l?"Downloading":"Download"})})]})},Go=()=>{var R,G,X,q,Q,C;const{setErrorMessage:n,setSuccessMessage:a}=j(),{activeCampaign:r,currentCampaign:t}=P(),{campaignActions:h,setActiveCampaign:x,setCurrentCampaign:b}=H(),[l,s]=i.exports.useState(!0),[w,f]=i.exports.useState(!1),[g,u]=i.exports.useState(!1),[d,A]=i.exports.useState(!1),[m,F]=i.exports.useState(),W=[{title:"Sent",icon:"/static/images/svg/sent.svg",value:t!=null&&t.statistics?parseInt((R=t==null?void 0:t.statistics)==null?void 0:R.sent):0,unit:"messages"},{title:"Replied",icon:"/static/images/svg/replied.svg",value:t!=null&&t.statistics?parseInt((G=t==null?void 0:t.statistics)==null?void 0:G.responded):0,unit:"messages"},{title:"Reply Rate",icon:"/static/images/svg/reply-rate.svg",value:t!=null&&t.statistics?(X=t==null?void 0:t.statistics)==null?void 0:X.response_rate:0,unit:`${(t==null?void 0:t.statistics)&&t.statistics.response_rate<31?"lower":"higher"} than avg. ${31}%`},{title:"Delivered",icon:"/static/images/svg/delivered.svg",value:t!=null&&t.statistics?parseInt((q=t==null?void 0:t.statistics)==null?void 0:q.delivered):0,unit:"messages"},{title:"Read",icon:"/static/images/svg/read.svg",value:t!=null&&t.statistics?parseInt((Q=t==null?void 0:t.statistics)==null?void 0:Q.read):0,unit:"messages"},{title:"Failed",icon:"/static/images/svg/failed.svg",value:t!=null&&t.statistics?parseInt(t.statistics.failed):0,unit:"messages"}],p=i.exports.useRef(),y=async()=>{if(f(!0),r&&t){const S=(t==null?void 0:t.progress)==="ACTIVE"?ee.PAUSED:ee.ACTIVE,k=await B.updateCampaignProgress(r,S);if(!k.success)return n(k.message);b({...t,progress:S}),h.setValue(Ve=>Ve.map(oe=>oe.id===r?{...oe,progress:S}:oe)),a(k.message),f(!1)}},v=i.exports.useRef(async S=>{if(S){s(!0);const k=await B.getCampaignById(S);if(!k.success)return x(void 0),n(k.message);b(k.payload),s(!1)}}),I=i.exports.useRef(async S=>{if(S){const k=await Lt.getWaTemplateMessage(S);if(!k.success)return F(void 0),n(k.message);F(k.payload)}});return i.exports.useEffect(()=>{v.current(r)},[r]),i.exports.useEffect(()=>{I.current(t==null?void 0:t.wa_template_id)},[r,t==null?void 0:t.wa_template_id]),c(i.exports.Fragment,{children:[c(Mo,{children:[c(Ao,{children:[c(ko,{children:[e(Do,{children:e(T,{component:"h3",children:l?e(E,{animation:"wave",width:"40%"}):t==null?void 0:t.name})}),e(Io,{children:l?e(E,{variant:"rectangular",animation:"wave",width:53,height:16,sx:{borderRadius:4}}):e(Ne,{label:t==null?void 0:t.progress,className:"badge",size:"small",sx:{backgroundColor:De((C=t==null?void 0:t.progress)!=null?C:ee.REMOVED),alignItems:"center",justifyContent:"center",height:16,"& .MuiChip-label":{color:"#FFFFFF",fontSize:10,fontWeight:900,lineHeight:"12px"}}})})]}),c(Eo,{children:[!l&&(t==null?void 0:t.progress)!=="COMPLETED"&&c(Ro,{children:[e(de,{loading:w,color:"secondary",onClick:y,className:(t==null?void 0:t.progress)==="ACTIVE"?"":"btn-resume",variant:"contained",children:`${(t==null?void 0:t.progress)==="ACTIVE"?"Pause":"Resume"} Campaign`}),(t==null?void 0:t.type)!=="API"&&e($,{variant:"contained",color:"primary",onClick:()=>A(!0),children:"Modify Campaign"})]}),c(Fo,{children:[c(To,{children:[e(T,{component:"h4",children:"Statistics"}),c(V,{component:"button",underline:"none",className:"download",disabled:l,onClick:()=>u(!0),children:[e(te,{src:"/static/images/svg/download.svg",alt:"down",sx:{width:"auto"}}),e(D,{component:"span",children:"Download Report"})]})]}),e(Bo,{children:W.map((S,k)=>e(Uo,{loading:l,...S},k))})]}),c(D,{className:"linked-template",children:[e(T,{component:"h4",children:"Linked Template"}),c(D,{className:"template",children:[e("span",{className:"name",children:l?e(E,{animation:"wave",variant:"text",width:"70px"}):m==null?void 0:m.name}),m&&e(V,{href:`/business/wa/template-messages?previewTemplate=${m==null?void 0:m.id}`,target:"_blank",underline:"none",children:e("img",{src:"/static/images/svg/link.svg",alt:"link"})})]})]}),(t==null?void 0:t.type)===ae.API&&c("div",{className:"api",children:[e(T,{component:"h4",children:"API"}),l?e(E,{animation:"wave",variant:"rectangular",sx:{backgroundColor:"#12B0EE1A",borderRadius:2,height:40}}):e(Ht,{value:t==null?void 0:t.api_url,inputProps:{readOnly:!0,ref:p},endAdornment:e(re,{position:"end",children:e(N,{onClick:()=>{p.current&&(p.current.select(),navigator.clipboard?navigator.clipboard.writeText(p.current.value):document.execCommand("Copy"),a("API copied to your clipboard"))},children:e(io,{})})})})]}),t&&t.type===ae.UPLOAD&&t.file_url&&t.total_rows&&c(D,{className:"users",children:[e(T,{component:"h4",children:l?e(E,{animation:"wave",variant:"text",width:120}):`${t.total_rows} Users Selected`}),e(V,{href:t.file_url,underline:"none",download:!0,children:l?e(E,{animation:"wave",variant:"text",width:150}):c(i.exports.Fragment,{children:[e(te,{src:"/static/images/svg/download.svg",alt:"down",sx:{width:"auto"}}),e(D,{component:"span",className:"label",children:"Download User Data"})]})})]}),t&&t.type===ae.UPLOAD&&c(D,{className:"schedule",children:[e(T,{component:"h4",children:"Scheduled At"}),e(T,{component:"p",className:"at",children:l?e(E,{animation:"wave",variant:"text",width:150}):L(t.schedule_date).format("Do MMMM YYYY [at] h:mmA")})]})]})]}),c(Lo,{children:[e(D,{className:"header",children:e(T,{component:"h3",className:"heading",children:l?e(E,{variant:"text",animation:"wave",width:145,height:22}):"Preview Message"})}),l?e("div",{className:"preview-content",children:e("div",{className:"preview-card",children:c(ao,{spacing:.7,children:[e(E,{variant:"rectangular",width:"100%",height:130}),e(E,{}),e(E,{width:"60%"})]})})}):m&&e(Vo,{components:m.components})]})]}),t&&e(Yo,{open:d,closeDialog:()=>A(!1),campaignScheduleDate:t==null?void 0:t.schedule_date}),e(jo,{open:g,closeDialog:()=>u(!1)})]})},Xo=()=>{const{activeCampaign:o}=P();return c(yo,{children:[!o&&e($o,{}),o&&e(Go,{})]})},Bn=()=>c(co,{children:[e(dt,{children:e("title",{children:"Engage Campaigns"})}),e(_o,{}),e(Xo,{})]});export{Bn as default};
