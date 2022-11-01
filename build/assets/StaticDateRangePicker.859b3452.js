import{e as Z,c as $,r as y,j as h,a as G,_ as c,g as ge,x as ke,S as Ce}from"./index.ca4653e7.js";import{D as Ue,P as We,W as Te,d as Ke,e as je,a as X,u as me,i as we,j as pe,k as qe,l as Xe,b as ye,m as Ye,n as Ee,q as ze,r as be,o as Me,s as Ge,t as Ze,v as Je,w as Oe,x as Qe,y as et,z as tt,A as nt,B as Ie,p as Se,h as rt}from"./PickersToolbarButton.1f705e32.js";import{g as ee,a as te,s as k,c as ne}from"./styled.0e1c85d3.js";import{T as at}from"./Typography.a45e4cf2.js";const he=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();function ot(e){return ee("MuiPickerStaticWrapper",e)}te("MuiPickerStaticWrapper",["root","content"]);const it=["displayStaticWrapperAs","onAccept","onClear","onCancel","onDismiss","onSetToday","open","children","components","componentsProps","className"],st=e=>{const{classes:t}=e;return ne({root:["root"],content:["content"]},ot,t)},lt=k("div",{name:"MuiPickerStaticWrapper",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column"}),ct=k("div",{name:"MuiPickerStaticWrapper",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e})=>({overflow:"hidden",minWidth:Ue,display:"flex",flexDirection:"column",backgroundColor:e.palette.background.paper}));function dt(e){var t;const n=Z({props:e,name:"MuiPickerStaticWrapper"}),{displayStaticWrapperAs:r,onAccept:i,onClear:a,onCancel:o,onSetToday:s,children:d,components:l,componentsProps:f,className:u}=n,v=$(n,it),m=st(n),D=(t=l==null?void 0:l.ActionBar)!=null?t:We,g=(l==null?void 0:l.PaperContent)||y.exports.Fragment;return h(Te.Provider,{value:r,children:G(lt,c({className:ge(m.root,u)},v,{children:[h(ct,{className:m.content,children:h(g,c({},f==null?void 0:f.paperContent,{children:d}))}),h(D,c({onAccept:i,onClear:a,onCancel:o,onSetToday:s,actions:r==="desktop"?[]:["cancel","accept"]},f==null?void 0:f.actionBar))]}))})}const Ve=[];let q=0;for(;q<64;)Ve[q]=0|Math.sin(++q%Math.PI)*4294967296;function ut(e){const t=[];let n,r,i,a=unescape(encodeURI(e))+"\x80",o=a.length;const s=[n=1732584193,r=4023233417,~n,~r];for(e=--o/4+2|15,t[--e]=o*8;~o;)t[o>>2]|=a.charCodeAt(o)<<8*o--;for(q=a=0;q<e;q+=16){for(o=s;a<64;o=[i=o[3],n+((i=o[0]+[n&r|~n&i,i&n|~i&r,n^r^i,r^(n|~i)][o=a>>4]+Ve[a]+~~t[q|[a,5*a+1,3*a+5,7*a][o]&15])<<(o=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*o+a++%4])|i>>>-o),n,r])n=o[1]|0,r=o[2];for(a=4;a;)s[--a]+=o[a]}for(e="";a<32;)e+=(s[a>>3]>>(1^a++)*4&15).toString(16);return e}const ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Ne=e=>{let t="",n,r,i,a,o,s,d,l=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<e.length;)a=ie.indexOf(e.charAt(l++)),o=ie.indexOf(e.charAt(l++)),s=ie.indexOf(e.charAt(l++)),d=ie.indexOf(e.charAt(l++)),n=a<<2|o>>4,r=(o&15)<<4|s>>2,i=(s&3)<<6|d,t=t+String.fromCharCode(n),s!=64&&(t=t+String.fromCharCode(r)),d!=64&&(t=t+String.fromCharCode(i));return t},gt=["pro","premium"],pt=["perpetual","subscription"];function ve(e){console.error(["*************************************************************","",...e,"","*************************************************************"].join(`
`))}function ht(){ve(["MUI: Invalid license key.","","Your MUI X license key isn't valid. Please check your license key installation https://mui.com/r/x-license-key-installation.","","To purchase a license, please visit https://mui.com/r/x-get-license."])}function ft({plan:e,packageName:t}){ve([`MUI: License key not found for ${t}.`,"",`This is a trial-only version of MUI X ${e}.`,"See the conditons here: https://mui.com/r/x-license-trial.","","To purchase a license, please visit https://mui.com/r/x-get-license."])}function Dt(){ve(["MUI: License key expired.","","Please visit https://mui.com/r/x-get-license to renew your subscription of MUI X."])}he.__MUI_LICENSE_INFO__=he.__MUI_LICENSE_INFO__||{key:void 0};class ue{static getLicenseInfo(){return he.__MUI_LICENSE_INFO__}static getLicenseKey(){return ue.getLicenseInfo().key}static setLicenseKey(t){const n=ue.getLicenseInfo();n.key=t}}var P;(function(e){e.NotFound="NotFound",e.Invalid="Invalid",e.Expired="Expired",e.Valid="Valid"})(P||(P={}));const mt=/^.*EXPIRY=([0-9]+),.*$/,yt=e=>{let t;try{t=parseInt(e.match(mt)[1],10),(!t||Number.isNaN(t))&&(t=null)}catch{t=null}return{scope:"pro",licensingModel:"perpetual",expiryTimestamp:t}},vt=e=>{const t={scope:null,licensingModel:null,expiryTimestamp:null};return e.split(",").map(n=>n.split("=")).filter(n=>n.length===2).forEach(([n,r])=>{if(n==="S"&&(t.scope=r),n==="LM"&&(t.licensingModel=r),n==="E"){const i=parseInt(r,10);i&&!Number.isNaN(i)&&(t.expiryTimestamp=i)}}),t},Pt=e=>{const t=Ne(e);return t.includes("KEYVERSION=1")?yt(t):t.includes("KV=2")?vt(t):null};function xt({releaseInfo:e,licenseKey:t,acceptedScopes:n,isProduction:r}){if(!e)throw new Error("MUI: The release information is missing. Not able to validate license.");if(!t)return P.NotFound;const i=t.substr(0,32),a=t.substr(32);if(i!==ut(a))return P.Invalid;const o=Pt(a);if(o==null)return console.error("Error checking license. Key version not found!"),P.Invalid;if(o.licensingModel==null||!pt.includes(o.licensingModel))return console.error("Error checking license. Sales model not found or invalid!"),P.Invalid;if(o.expiryTimestamp==null)return console.error("Error checking license. Expiry timestamp not found or invalid!"),P.Invalid;if(o.licensingModel==="perpetual"||r){const s=parseInt(Ne(e),10);if(Number.isNaN(s))throw new Error("MUI: The release information is invalid. Not able to validate license.");if(o.expiryTimestamp<s)return P.Expired}else if(o.licensingModel==="subscription"&&o.expiryTimestamp<new Date().getTime())return P.Expired;return o.scope==null||!gt.includes(o.scope)?(console.error("Error checking license. scope not found or invalid!"),P.Invalid):n.includes(o.scope)?P.Valid:P.Invalid}const se={};function Pe(e,t){return y.exports.useMemo(()=>{const n=ue.getLicenseKey();if(se[e]&&se[e].key===n)return se[e].status;const r=e.includes("premium")?["premium"]:["pro","premium"],i=e.includes("premium")?"Premium":"Pro",a=xt({releaseInfo:t,licenseKey:n,acceptedScopes:r,isProduction:!0});return se[e]={key:n,status:a},a===P.Invalid?ht():a===P.NotFound?ft({plan:i,packageName:`@mui/${e}`}):a===P.Expired&&Dt(),a},[e,t])}function Rt(e){switch(e){case P.Expired:return"MUI X: License key expired";case P.Invalid:return"MUI X: Invalid license key";case P.NotFound:return"MUI X: Missing license key";default:throw new Error("MUI: Unhandled MUI X license status.")}}function wt(e){const{packageName:t,releaseInfo:n}=e,r=Pe(t,n);return r===P.Valid?null:h("div",{style:{position:"absolute",pointerEvents:"none",color:"#8282829e",zIndex:1e5,width:"100%",textAlign:"center",bottom:"50%",right:0,letterSpacing:5,fontSize:24},children:Rt(r)})}const xe=()=>"MTY2NjIxNjgwMDAwMA==",Ae=(e,t=[null,null])=>t.map(n=>n===null||!e.isValid(n)?null:e.startOfDay(e.date(n))),re=(e,t)=>Boolean(t&&t[0]&&t[1]&&!e.isBefore(t[1],t[0])),le=(e,t,n)=>re(e,n)&&e.isWithinRange(t,n),fe=(e,t,n)=>re(e,n)&&e.isSameDay(t,n[0]),De=(e,t,n)=>re(e,n)&&e.isSameDay(t,n[1]);function _e({utils:e,range:t,newDate:n,currentlySelectingRangeEnd:r}){const[i,a]=t;return r==="start"?Boolean(a)&&e.isAfter(n,a)?{nextSelection:"end",newRange:[n,null]}:{nextSelection:"end",newRange:[n,a]}:Boolean(i)&&e.isBefore(n,i)?{nextSelection:"end",newRange:[n,null]}:{nextSelection:"start",newRange:[i,n]}}function bt(e){if(!e.newDate)return[null,null];const[t,n]=e.range,{newRange:r}=_e(e);if(!t||!n)return r;const[i,a]=r;return e.currentlySelectingRangeEnd==="end"?[n,a]:[i,t]}function Mt(e){return ee("MuiDateRangePickerToolbar",e)}te("MuiDateRangePickerToolbar",["root","container"]);const It=e=>{const{classes:t}=e;return ne({root:["root"],container:["container"]},Mt,t)},St=k(Ke,{name:"MuiDateRangePickerToolbar",slot:"Root",overridesResolver:(e,t)=>t.root})({[`& .${je.penIconButton}`]:{position:"relative",top:4}}),kt=k("div",{name:"MuiDateRangePickerToolbar",slot:"Container",overridesResolver:(e,t)=>t.container})({display:"flex"}),Ct=y.exports.forwardRef(function(t,n){const r=X(),i=Z({props:t,name:"MuiDateRangePickerToolbar"}),{currentlySelectingRangeEnd:a,parsedValue:[o,s],endText:d,isMobileKeyboardViewOpen:l,setCurrentlySelectingRangeEnd:f,startText:u,toggleMobileKeyboardView:v,toolbarFormat:m,toolbarTitle:D}=i,g=me(),w=D!=null?D:g.dateRangePickerDefaultToolbarTitle,C=o?r.formatByString(o,m||r.formats.shortDate):u,E=s?r.formatByString(s,m||r.formats.shortDate):d,x=i,b=It(x);return h(St,{toolbarTitle:w,isMobileKeyboardViewOpen:l,toggleMobileKeyboardView:v,isLandscape:!1,className:b.root,ownerState:x,ref:n,children:G(kt,{className:b.container,children:[h(we,{variant:o!==null?"h5":"h6",value:C,selected:a==="start",onClick:()=>f("start")}),G(at,{variant:"h5",children:["\xA0","\u2013","\xA0"]}),h(we,{variant:s!==null?"h5":"h6",value:E,selected:a==="end",onClick:()=>f("end")})]})})}),He=()=>{};function Tt(e){return ee("MuiDateRangePickerDay",e)}const T=te("MuiDateRangePickerDay",["root","rangeIntervalDayHighlight","rangeIntervalDayHighlightStart","rangeIntervalDayHighlightEnd","rangeIntervalPreview","rangeIntervalDayPreview","rangeIntervalDayPreviewStart","rangeIntervalDayPreviewEnd","day","dayOutsideRangeInterval","dayInsideRangeInterval","notSelectedDate"]),Et=["className","day","outsideCurrentMonth","isEndOfHighlighting","isEndOfPreviewing","isHighlighting","isPreviewing","isStartOfHighlighting","isStartOfPreviewing","selected"],Ot=xe(),Vt=e=>{const{isHighlighting:t,outsideCurrentMonth:n,isStartOfHighlighting:r,isStartOfMonth:i,isEndOfHighlighting:a,isEndOfMonth:o,isPreviewing:s,isStartOfPreviewing:d,isEndOfPreviewing:l,selected:f,classes:u}=e;return ne({root:["root",t&&!n&&"rangeIntervalDayHighlight",(r||i)&&"rangeIntervalDayHighlightStart",(a||o)&&"rangeIntervalDayHighlightEnd"],rangeIntervalPreview:["rangeIntervalPreview",s&&!n&&"rangeIntervalDayPreview",(d||i)&&"rangeIntervalDayPreviewStart",(l||o)&&"rangeIntervalDayPreviewEnd"],day:["day",!f&&"notSelectedDate",!t&&"dayOutsideRangeInterval",!f&&t&&"dayInsideRangeInterval"]},Tt,u)},ce={borderTopRightRadius:"50%",borderBottomRightRadius:"50%"},de={borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"},Be=k("div",{name:"MuiDateRangePickerDay",slot:"Root",overridesResolver:(e,t)=>[{[`&.${T.rangeIntervalDayHighlight}`]:t.rangeIntervalDayHighlight},{[`&.${T.rangeIntervalDayHighlightStart}`]:t.rangeIntervalDayHighlightStart},{[`&.${T.rangeIntervalDayHighlightEnd}`]:t.rangeIntervalDayHighlightEnd},t.root]})(({theme:e,ownerState:t})=>c({[`&:first-of-type .${T.rangeIntervalDayPreview}`]:c({},de,{borderLeftColor:e.palette.divider}),[`&:last-of-type .${T.rangeIntervalDayPreview}`]:c({},ce,{borderRightColor:e.palette.divider})},t.isHighlighting&&!t.outsideCurrentMonth&&{borderRadius:0,color:e.palette.primary.contrastText,backgroundColor:ke(e.palette.primary.light,.6),"&:first-of-type":de,"&:last-of-type":ce},(t.isStartOfHighlighting||t.isStartOfMonth)&&c({},de,{paddingLeft:0,marginLeft:pe/2}),(t.isEndOfHighlighting||t.isEndOfMonth)&&c({},ce,{paddingRight:0,marginRight:pe/2})));Be.propTypes={ownerState:Ce.exports.object.isRequired};const Le=k("div",{name:"MuiDateRangePickerDay",slot:"RangeIntervalPreview",overridesResolver:(e,t)=>[{[`&.${T.rangeIntervalDayPreview}`]:t.rangeIntervalDayPreview},{[`&.${T.rangeIntervalDayPreviewStart}`]:t.rangeIntervalDayPreviewStart},{[`&.${T.rangeIntervalDayPreviewEnd}`]:t.rangeIntervalDayPreviewEnd},t.rangeIntervalPreview]})(({theme:e,ownerState:t})=>c({border:"2px solid transparent"},t.isPreviewing&&!t.outsideCurrentMonth&&c({borderRadius:0,border:`2px dashed ${e.palette.divider}`,borderLeftColor:"transparent",borderRightColor:"transparent"},(t.isStartOfPreviewing||t.isStartOfMonth)&&c({borderLeftColor:e.palette.divider},de),(t.isEndOfPreviewing||t.isEndOfMonth)&&c({borderRightColor:e.palette.divider},ce))));Le.propTypes={ownerState:Ce.exports.object.isRequired};const Nt=k(qe,{name:"MuiDateRangePickerDay",slot:"Day",overridesResolver:(e,t)=>[{[`&.${T.dayInsideRangeInterval}`]:t.dayInsideRangeInterval},{[`&.${T.dayOutsideRangeInterval}`]:t.dayOutsideRangeInterval},{[`&.${T.notSelectedDate}`]:t.notSelectedDate},t.day]})(({theme:e,ownerState:t})=>c({transform:"scale(1.1)","& > *":{transform:"scale(0.9)"}},!t.selected&&{backgroundColor:"transparent"},!t.isHighlighting&&{"&:hover":{border:`1px solid ${e.palette.grey[500]}`}},!t.selected&&t.isHighlighting&&{color:e.palette.getContrastText(ke(e.palette.primary.light,.6))})),At=y.exports.forwardRef(function(t,n){const r=Z({props:t,name:"MuiDateRangePickerDay"}),{className:i,day:a,outsideCurrentMonth:o,isHighlighting:s,isPreviewing:d,selected:l=!1}=r,f=$(r,Et);Pe("x-date-pickers-pro",Ot);const u=X(),v=u.isSameDay(a,u.endOfMonth(a)),m=u.isSameDay(a,u.startOfMonth(a)),D=c({},r,{selected:l,isStartOfMonth:m,isEndOfMonth:v}),g=Vt(D);return h(Be,{className:ge(g.root,i),ownerState:D,children:h(Le,{className:g.rangeIntervalPreview,ownerState:D,children:h(Nt,c({},f,{ref:n,disableMargin:!0,day:a,selected:l,outsideCurrentMonth:o,className:g.day,ownerState:D}))})})}),_t=(e,t)=>e.isHighlighting===t.isHighlighting&&e.isEndOfHighlighting===t.isEndOfHighlighting&&e.isStartOfHighlighting===t.isStartOfHighlighting&&e.isPreviewing===t.isPreviewing&&e.isEndOfPreviewing===t.isEndOfPreviewing&&e.isStartOfPreviewing===t.isStartOfPreviewing&&Xe(e,t),Fe=y.exports.memo(At,_t),Ht=["changeMonth","components","componentsProps","parsedValue","leftArrowButtonText","maxDate","minDate","onSelectedDaysChange","renderDay","rightArrowButtonText","disabled","readOnly","classes"],Bt=["day"];function Lt(e){const{changeMonth:t,components:n,componentsProps:r,parsedValue:i,leftArrowButtonText:a,maxDate:o,minDate:s,onSelectedDaysChange:d,renderDay:l=(p,O)=>h(Fe,c({},O)),rightArrowButtonText:f,disabled:u,readOnly:v}=e,m=$(e,Ht),D=X(),g=ye(),w=s!=null?s:g.minDate,C=o!=null?o:g.maxDate,[E,x]=i,b=u&&E||w,N=u&&x||C;return G(y.exports.Fragment,{children:[h(Ye,c({components:n,componentsProps:r,leftArrowButtonText:a,maxDate:N,minDate:b,onMonthChange:t,openView:"day",rightArrowButtonText:f,views:Bt,disabled:u},m)),h(Ee,c({},m,{minDate:w,maxDate:C,disabled:u,readOnly:v,selectedDays:i,onSelectedDaysChange:d,onFocusedDayChange:He,renderDay:(p,O,A)=>l(p,c({isPreviewing:!1,isStartOfPreviewing:!1,isEndOfPreviewing:!1,isHighlighting:le(D,p,i),isStartOfHighlighting:fe(D,p,i),isEndOfHighlighting:De(D,p,i)},A))}))]})}function Ft(e){return ee("MuiDateRangePickerInput",e)}te("MuiDateRangePickerInput",["root"]);const $t=["currentlySelectingRangeEnd","disableOpenPicker","endText","onBlur","onChange","open","openPicker","rawValue","rawValue","readOnly","renderInput","setCurrentlySelectingRangeEnd","startText","TextFieldProps","validationError","className"],Ut=e=>{const{classes:t}=e;return ne({root:["root"]},Ft,t)},Wt=k("div",{name:"MuiDateRangePickerInput",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"flex",alignItems:"baseline",[e.breakpoints.down("xs")]:{flexDirection:"column",alignItems:"center"}})),Kt=y.exports.forwardRef(function(t,n){const r=Z({props:t,name:"MuiDateRangePickerInput"}),{currentlySelectingRangeEnd:i,disableOpenPicker:a,endText:o,onBlur:s,onChange:d,open:l,openPicker:f,rawValue:[u,v],readOnly:m,renderInput:D,setCurrentlySelectingRangeEnd:g,startText:w,TextFieldProps:C,validationError:[E,x],className:b}=r,N=$(r,$t),p=X(),O=y.exports.useRef(null),A=y.exports.useRef(null),Y=Ut(r);y.exports.useEffect(()=>{if(!!l){if(i==="start"){var S;(S=O.current)==null||S.focus()}else if(i==="end"){var V;(V=A.current)==null||V.focus()}}},[i,l]);const U=y.exports.useCallback((...S)=>ze(()=>d(...S)),[d]),M=(S,V)=>{U([S,p.date(v)],V)},I=(S,V)=>{U([p.date(u),S],V)},W=()=>{g&&g("start"),!m&&!a&&f()},L=()=>{g&&g("end"),!m&&!a&&f()},_=()=>{l&&g&&g("end")},z=()=>{l&&g&&g("start")},K=be(c({},N,{readOnly:m,rawValue:u,onChange:M,label:w,validationError:E!==null,TextFieldProps:c({},C,{ref:O,focused:l&&i==="start"}),inputProps:{onClick:W,onKeyDown:Me(W),onFocus:z}})),J=be(c({},N,{readOnly:m,label:o,rawValue:v,onChange:I,validationError:x!==null,TextFieldProps:c({},C,{ref:A,focused:l&&i==="end"}),inputProps:{onClick:L,onKeyDown:Me(L),onFocus:_}}));return h(Wt,{onBlur:s,ref:n,className:ge(Y.root,b),children:D(K,J)})});function jt(e){return ee("MuiDateRangePickerViewDesktop",e)}te("MuiDateRangePickerViewDesktop",["root","container"]);const qt=["calendars","changeMonth","components","componentsProps","currentlySelectingRangeEnd","currentMonth","parsedValue","disableFuture","disablePast","leftArrowButtonText","maxDate","minDate","onSelectedDaysChange","renderDay","rightArrowButtonText","className","classes"],Xt=e=>{const{classes:t}=e;return ne({root:["root"],container:["container"]},jt,t)},Yt=k("div",{name:"MuiDateRangePickerViewDesktop",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"row"}),zt=k("div",{name:"MuiDateRangePickerViewDesktop",slot:"Container",overridesResolver:(e,t)=>t.container})(({theme:e})=>({"&:not(:last-of-type)":{borderRight:`2px solid ${e.palette.divider}`}})),Gt=40,Zt=(Gt+pe*2)*6,Jt=k(Ee)({minWidth:312,minHeight:Zt}),Qt=k(Ge)({padding:"16px 16px 8px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"});function en(e){switch(e){case 1:return[0];case 2:return[0,0];case 3:return[0,0,0];default:return new Array(e).fill(0)}}const tn=Oe();function nn(e){const t=Z({props:e,name:"MuiDateRangePickerViewDesktop"}),{calendars:n,changeMonth:r,components:i,componentsProps:a,currentlySelectingRangeEnd:o,currentMonth:s,parsedValue:d,disableFuture:l,disablePast:f,leftArrowButtonText:u,maxDate:v,minDate:m,onSelectedDaysChange:D,renderDay:g=(F,H)=>h(Fe,c({},H)),rightArrowButtonText:w,className:C}=t,E=$(t,qt);tn({leftArrowButtonText:u,rightArrowButtonText:w});const x=me(),b=u!=null?u:x.previousMonth,N=w!=null?w:x.nextMonth,p=X(),O=Xt(t),A=ye(),Y=m!=null?m:A.minDate,U=v!=null?v:A.maxDate,[M,I]=y.exports.useState(null),W=Ze(s,{disableFuture:l,maxDate:U}),L=Je(s,{disablePast:f,minDate:Y}),_=bt({utils:p,range:d,newDate:M,currentlySelectingRangeEnd:o}),z=y.exports.useCallback(F=>{I(null),D(F)},[D]),K=F=>{le(p,F,d)?I(null):I(F)},J=y.exports.useMemo(()=>({onMouseLeave:()=>I(null)}),[]),S=y.exports.useCallback(()=>{r(p.getNextMonth(s))},[r,s,p]),V=y.exports.useCallback(()=>{r(p.getPreviousMonth(s))},[r,s,p]);return h(Yt,{className:ge(C,O.root),children:en(n).map((F,H)=>{const ae=p.setMonth(s,p.getMonth(s)+H);return G(zt,{className:O.container,children:[h(Qt,{onLeftClick:V,onRightClick:S,isLeftHidden:H!==0,isRightHidden:H!==n-1,isLeftDisabled:L,isRightDisabled:W,leftArrowButtonText:b,components:i,componentsProps:a,rightArrowButtonText:N,children:p.format(ae,"monthAndYear")}),y.exports.createElement(Jt,c({},E,{minDate:Y,maxDate:U,disablePast:f,disableFuture:l,key:H,selectedDays:d,onFocusedDayChange:He,onSelectedDaysChange:z,currentMonth:ae,TransitionProps:J,renderDay:(B,R,j)=>g(B,c({isPreviewing:le(p,B,_),isStartOfPreviewing:fe(p,B,_),isEndOfPreviewing:De(p,B,_),isHighlighting:le(p,B,d),isStartOfHighlighting:fe(p,B,d),isEndOfHighlighting:De(p,B,d),onMouseEnter:()=>K(B)},j))}))]},H)})})}const rn=["calendars","className","currentlySelectingRangeEnd","parsedValue","DateInputProps","defaultCalendarMonth","disableAutoMonthSwitching","disableFuture","disableHighlightToday","disablePast","endText","isMobileKeyboardViewOpen","maxDate","minDate","onDateChange","onMonthChange","open","reduceAnimations","setCurrentlySelectingRangeEnd","shouldDisableDate","showToolbar","startText","toggleMobileKeyboardView","toolbarFormat","toolbarTitle"],an=xe();function on(e){const{calendars:t,className:n,currentlySelectingRangeEnd:r,parsedValue:i,DateInputProps:a,defaultCalendarMonth:o,disableAutoMonthSwitching:s=!1,disableFuture:d,disableHighlightToday:l,disablePast:f,endText:u,isMobileKeyboardViewOpen:v,maxDate:m,minDate:D,onDateChange:g,onMonthChange:w,open:C,reduceAnimations:E=Qe,setCurrentlySelectingRangeEnd:x,shouldDisableDate:b,showToolbar:N,startText:p,toggleMobileKeyboardView:O,toolbarFormat:A,toolbarTitle:Y}=e,U=$(e,rn),M=X(),I=y.exports.useContext(Te),W=b&&(R=>b==null?void 0:b(R,r)),[L,_]=i,{changeMonth:z,calendarState:K,isDateDisabled:J,onMonthSwitchingAnimationEnd:S,changeFocusedDay:V}=et({date:L||_,defaultCalendarMonth:o,disableFuture:d,disablePast:f,disableSwitchToMonthOnDayFocus:!0,maxDate:m,minDate:D,onMonthChange:w,reduceAnimations:E,shouldDisableDate:W}),F=N!=null?N:I!=="desktop",H=R=>{if(!R||!M.isValid(R)||J(R))return;const j=r==="start"?L:_;if(j===null)return;const Q=I==="mobile"?0:t-1,oe=M.getMonth(K.currentMonth),Re=M.getMonth(R);if(!M.isSameYear(K.currentMonth,R)||Re<oe||Re>oe+Q){const $e=r==="start"?j:M.addMonths(j,-Q);z($e)}};y.exports.useEffect(()=>{s||!C||H(r==="start"?L:_)},[r,i]);const ae=y.exports.useCallback(R=>{const{nextSelection:j,newRange:Q}=_e({newDate:R,utils:M,range:i,currentlySelectingRangeEnd:r});x(j);const oe=r==="end"&&re(M,Q);g(Q,I,oe?"finish":"partial")},[r,i,g,x,M,I]);return G("div",{className:n,children:[h(wt,{packageName:"x-date-pickers-pro",releaseInfo:an}),F&&h(Ct,{parsedValue:i,isMobileKeyboardViewOpen:v,toggleMobileKeyboardView:O,currentlySelectingRangeEnd:r,setCurrentlySelectingRangeEnd:x,startText:p,endText:u,toolbarTitle:Y,toolbarFormat:A}),v?h(tt,{children:h(Kt,c({disableOpenPicker:!0,ignoreInvalidInputs:!0},a))}):(()=>{const R=c({parsedValue:i,changeFocusedDay:V,onSelectedDaysChange:ae,reduceAnimations:E,disableHighlightToday:l,onMonthSwitchingAnimationEnd:S,changeMonth:z,currentlySelectingRangeEnd:r,disableFuture:d,disablePast:f,minDate:D,maxDate:m,shouldDisableDate:W},K,U);switch(I){case"desktop":return h(nn,c({calendars:t},R));default:return h(Lt,c({},R))}})()]})}const sn=on,ln=["shouldDisableDate"],cn=({props:e,value:t,adapter:n})=>{const[r,i]=t;if(r===null||i===null)return[null,null];const{shouldDisableDate:a}=e,o=$(e,ln),s=[Ie({adapter:n,value:r,props:c({},o,{shouldDisableDate:d=>!!(a!=null&&a(d,"start"))})}),Ie({adapter:n,value:i,props:c({},o,{shouldDisableDate:d=>!!(a!=null&&a(d,"end"))})})];return s[0]||s[1]?s:re(n.utils,Ae(n.utils,t))?[null,null]:["invalidRange","invalidRange"]},dn=(e,t)=>t!==null&&e[1]===t[1]&&e[0]===t[0],un=e=>nt(e,cn,dn),gn=Oe();function pn(e,t){var n,r;const i=X(),a=ye(),o=Z({props:e,name:t});gn({startText:o.startText,endText:o.endText});const s=me(),d=(n=o.startText)!=null?n:s.start,l=(r=o.endText)!=null?r:s.end;return c({disableFuture:!1,disablePast:!1,calendars:2,inputFormat:i.formats.keyboardDate},o,{endText:l,startText:d,minDate:Se(i,o.minDate,a.minDate),maxDate:Se(i,o.maxDate,a.maxDate)})}const hn={emptyValue:[null,null],getTodayValue:e=>[e.date(),e.date()],parseInput:Ae,areValuesEqual:(e,t,n)=>e.isEqual(t[0],n[0])&&e.isEqual(t[1],n[1])},fn=["displayStaticWrapperAs","value","onChange","components","componentsProps","className"],Dn=xe(),xn=y.exports.forwardRef(function(t,n){Pe("x-date-pickers-pro",Dn);const r=pn(t,"MuiStaticDateRangePicker"),[i,a]=y.exports.useState("start"),o=un(r),{pickerProps:s,inputProps:d,wrapperProps:l}=rt(r,hn),{displayStaticWrapperAs:f="mobile",components:u,componentsProps:v,className:m}=r,D=$(r,fn),g=c({},d,D,{currentlySelectingRangeEnd:i,setCurrentlySelectingRangeEnd:a,validationError:o,components:u,componentsProps:v,ref:n});return h(dt,c({displayStaticWrapperAs:f,components:u,componentsProps:v,className:m},l,{children:h(sn,c({open:l.open,DateInputProps:g,currentlySelectingRangeEnd:i,setCurrentlySelectingRangeEnd:a,components:u,componentsProps:v},s,D))}))});export{xn as S};
