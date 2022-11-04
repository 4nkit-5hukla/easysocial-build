import{ae as yt,r as m,ad as Te,aA as Pt,i as u,m as ct,l as dt,n as F,v as Fe,p as ft,_ as gt,j as v,q as ce,w as bt,a0 as ht,Y as mt,H as Xe,a as De}from"./index.9a4b9227.js";import{i as Ze,d as Me,o as lt,e as Ne,A as St}from"./Select.0e7195d9.js";import{C as $t}from"./Close.25e4a596.js";import{P as xt}from"./Popper.1ba5f35a.js";import{u as et}from"./useControlled.7a6cf206.js";import{C as vt}from"./Chip.231cd874.js";function st(o){return typeof o.normalize<"u"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function At(o={}){const{ignoreAccents:n=!0,ignoreCase:p=!0,limit:x,matchFrom:y="any",stringify:P,trim:S=!1}=o;return(g,{inputValue:G,getOptionLabel:K})=>{let A=S?G.trim():G;p&&(A=A.toLowerCase()),n&&(A=st(A));const j=A?g.filter(X=>{let z=(P||K)(X);return p&&(z=z.toLowerCase()),n&&(z=st(z)),y==="start"?z.indexOf(A)===0:z.indexOf(A)>-1}):g;return typeof x=="number"?j.slice(0,x):j}}function tt(o,n){for(let p=0;p<o.length;p+=1)if(n(o[p]))return p;return-1}const Lt=At(),it=5;function kt(o){const{autoComplete:n=!1,autoHighlight:p=!1,autoSelect:x=!1,blurOnSelect:y=!1,clearOnBlur:P=!o.freeSolo,clearOnEscape:S=!1,componentName:g="useAutocomplete",defaultValue:G=o.multiple?[]:null,disableClearable:K=!1,disableCloseOnSelect:A=!1,disabled:j,disabledItemsFocusable:X=!1,disableListWrap:z=!1,filterOptions:ze=Lt,filterSelectedOptions:Ee=!1,freeSolo:re=!1,getOptionDisabled:Z,getOptionLabel:de=t=>{var e;return(e=t.label)!=null?e:t},groupBy:k,handleHomeEndKeys:He=!o.freeSolo,id:Ve,includeInputInList:We=!1,inputValue:ee,isOptionEqualToValue:ae=(t,e)=>t===e,multiple:f=!1,onChange:fe,onClose:Be,onHighlightChange:ge,onInputChange:V,onOpen:ye,open:Ge,openOnFocus:Pe=!1,options:Ue,readOnly:be=!1,selectOnFocus:ot=!o.freeSolo,value:he}=o,R=yt(Ve);let U=de;U=t=>{const e=de(t);return typeof e!="string"?String(e):e};const le=m.exports.useRef(!1),me=m.exports.useRef(!0),I=m.exports.useRef(null),D=m.exports.useRef(null),[Se,$e]=m.exports.useState(null),[E,xe]=m.exports.useState(-1),ve=p?0:-1,w=m.exports.useRef(ve),[l,_e]=et({controlled:he,default:G,name:g}),[d,te]=et({controlled:ee,default:"",name:g,state:"inputValue"}),[Ie,se]=m.exports.useState(!1),ie=m.exports.useCallback((t,e)=>{if(!(f?l.length<e.length:e!==null)&&!P)return;let a;if(f)a="";else if(e==null)a="";else{const c=U(e);a=typeof c=="string"?c:""}d!==a&&(te(a),V&&V(t,a,"reset"))},[U,d,f,V,te,P,l]),Oe=m.exports.useRef();m.exports.useEffect(()=>{const t=l!==Oe.current;Oe.current=l,!(Ie&&!t)&&(re&&!t||ie(null,l))},[l,ie,Ie,Oe,re]);const[Y,Ae]=et({controlled:Ge,default:!1,name:g,state:"open"}),[qe,Le]=m.exports.useState(!0),ke=!f&&l!=null&&d===U(l),T=Y&&!be,O=T?ze(Ue.filter(t=>!(Ee&&(f?l:[l]).some(e=>e!==null&&ae(t,e)))),{inputValue:ke&&qe?"":d,getOptionLabel:U}):[],oe=Y&&O.length>0&&!be,pe=Te(t=>{t===-1?I.current.focus():Se.querySelector(`[data-tag-index="${t}"]`).focus()});m.exports.useEffect(()=>{f&&E>l.length-1&&(xe(-1),pe(-1))},[l,f,E,pe]);function Ke(t,e){if(!D.current||t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===O.length||e==="previous"&&r===-1)return-1;const a=D.current.querySelector(`[data-option-index="${r}"]`),c=X?!1:!a||a.disabled||a.getAttribute("aria-disabled")==="true";if(a&&!a.hasAttribute("tabindex")||c)r+=e==="next"?1:-1;else return r}}const H=Te(({event:t,index:e,reason:r="auto"})=>{if(w.current=e,e===-1?I.current.removeAttribute("aria-activedescendant"):I.current.setAttribute("aria-activedescendant",`${R}-option-${e}`),ge&&ge(t,e===-1?null:O[e],r),!D.current)return;const a=D.current.querySelector('[role="option"].Mui-focused');a&&(a.classList.remove("Mui-focused"),a.classList.remove("Mui-focusVisible"));const c=D.current.parentElement.querySelector('[role="listbox"]');if(!c)return;if(e===-1){c.scrollTop=0;return}const C=D.current.querySelector(`[data-option-index="${e}"]`);if(!!C&&(C.classList.add("Mui-focused"),r==="keyboard"&&C.classList.add("Mui-focusVisible"),c.scrollHeight>c.clientHeight&&r!=="mouse")){const h=C,B=c.clientHeight+c.scrollTop,at=h.offsetTop+h.offsetHeight;at>B?c.scrollTop=at-c.clientHeight:h.offsetTop-h.offsetHeight*(k?1.3:0)<c.scrollTop&&(c.scrollTop=h.offsetTop-h.offsetHeight*(k?1.3:0))}}),M=Te(({event:t,diff:e,direction:r="next",reason:a="auto"})=>{if(!T)return;const C=Ke((()=>{const h=O.length-1;if(e==="reset")return ve;if(e==="start")return 0;if(e==="end")return h;const B=w.current+e;return B<0?B===-1&&We?-1:z&&w.current!==-1||Math.abs(e)>1?0:h:B>h?B===h+1&&We?-1:z||Math.abs(e)>1?h:0:B})(),r);if(H({index:C,reason:a,event:t}),n&&e!=="reset")if(C===-1)I.current.value=d;else{const h=U(O[C]);I.current.value=h,h.toLowerCase().indexOf(d.toLowerCase())===0&&d.length>0&&I.current.setSelectionRange(d.length,h.length)}}),Ce=m.exports.useCallback(()=>{if(!T)return;const t=f?l[0]:l;if(O.length===0||t==null){M({diff:"reset"});return}if(!!D.current){if(t!=null){const e=O[w.current];if(f&&e&&tt(l,a=>ae(e,a))!==-1)return;const r=tt(O,a=>ae(a,t));r===-1?M({diff:"reset"}):H({index:r});return}if(w.current>=O.length-1){H({index:O.length-1});return}H({index:w.current})}},[O.length,f?!1:l,Ee,M,H,T,d,f]),ue=Te(t=>{Pt(D,t),t&&Ce()});m.exports.useEffect(()=>{Ce()},[Ce]);const _=t=>{Y||(Ae(!0),Le(!0),ye&&ye(t))},ne=(t,e)=>{!Y||(Ae(!1),Be&&Be(t,e))},W=(t,e,r,a)=>{if(f){if(l.length===e.length&&l.every((c,C)=>c===e[C]))return}else if(l===e)return;fe&&fe(t,e,r,a),_e(e)},J=m.exports.useRef(!1),q=(t,e,r="selectOption",a="options")=>{let c=r,C=e;if(f){C=Array.isArray(l)?l.slice():[];const h=tt(C,B=>ae(e,B));h===-1?C.push(e):a!=="freeSolo"&&(C.splice(h,1),c="removeOption")}ie(t,C),W(t,C,c,{option:e}),!A&&(!t||!t.ctrlKey&&!t.metaKey)&&ne(t,c),(y===!0||y==="touch"&&J.current||y==="mouse"&&!J.current)&&I.current.blur()};function $(t,e){if(t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===l.length||e==="previous"&&r===-1)return-1;const a=Se.querySelector(`[data-tag-index="${r}"]`);if(!a||!a.hasAttribute("tabindex")||a.disabled||a.getAttribute("aria-disabled")==="true")r+=e==="next"?1:-1;else return r}}const b=(t,e)=>{if(!f)return;d===""&&ne(t,"toggleInput");let r=E;E===-1?d===""&&e==="previous"&&(r=l.length-1):(r+=e==="next"?1:-1,r<0&&(r=0),r===l.length&&(r=-1)),r=$(r,e),xe(r),pe(r)},N=t=>{le.current=!0,te(""),V&&V(t,"","clear"),W(t,f?[]:null,"clear")},nt=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(E!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(xe(-1),pe(-1)),e.which!==229))switch(e.key){case"Home":T&&He&&(e.preventDefault(),M({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":T&&He&&(e.preventDefault(),M({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),M({diff:-it,direction:"previous",reason:"keyboard",event:e}),_(e);break;case"PageDown":e.preventDefault(),M({diff:it,direction:"next",reason:"keyboard",event:e}),_(e);break;case"ArrowDown":e.preventDefault(),M({diff:1,direction:"next",reason:"keyboard",event:e}),_(e);break;case"ArrowUp":e.preventDefault(),M({diff:-1,direction:"previous",reason:"keyboard",event:e}),_(e);break;case"ArrowLeft":b(e,"previous");break;case"ArrowRight":b(e,"next");break;case"Enter":if(w.current!==-1&&T){const r=O[w.current],a=Z?Z(r):!1;if(e.preventDefault(),a)return;q(e,r,"selectOption"),n&&I.current.setSelectionRange(I.current.value.length,I.current.value.length)}else re&&d!==""&&ke===!1&&(f&&e.preventDefault(),q(e,d,"createOption","freeSolo"));break;case"Escape":T?(e.preventDefault(),e.stopPropagation(),ne(e,"escape")):S&&(d!==""||f&&l.length>0)&&(e.preventDefault(),e.stopPropagation(),N(e));break;case"Backspace":if(f&&!be&&d===""&&l.length>0){const r=E===-1?l.length-1:E,a=l.slice();a.splice(r,1),W(e,a,"removeOption",{option:l[r]})}break}},je=t=>{se(!0),Pe&&!le.current&&_(t)},Ye=t=>{if(D.current!==null&&D.current.parentElement.contains(document.activeElement)){I.current.focus();return}se(!1),me.current=!0,le.current=!1,x&&w.current!==-1&&T?q(t,O[w.current],"blur"):x&&re&&d!==""?q(t,d,"blur","freeSolo"):P&&ie(t,l),ne(t,"blur")},Je=t=>{const e=t.target.value;d!==e&&(te(e),Le(!1),V&&V(t,e,"input")),e===""?!K&&!f&&W(t,null,"clear"):_(t)},Re=t=>{H({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},i=()=>{J.current=!0},L=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));q(t,O[e],"selectOption"),J.current=!1},Q=t=>e=>{const r=l.slice();r.splice(t,1),W(e,r,"removeOption",{option:l[t]})},we=t=>{Y?ne(t,"toggleInput"):_(t)},It=t=>{t.target.getAttribute("id")!==R&&t.preventDefault()},Ot=()=>{I.current.focus(),ot&&me.current&&I.current.selectionEnd-I.current.selectionStart===0&&I.current.select(),me.current=!1},Ct=t=>{(d===""||!Y)&&we(t)};let Qe=re&&d.length>0;Qe=Qe||(f?l.length>0:l!==null);let rt=O;return k&&(rt=O.reduce((t,e,r)=>{const a=k(e);return t.length>0&&t[t.length-1].group===a?t[t.length-1].options.push(e):t.push({key:r,index:r,group:a,options:[e]}),t},[])),j&&Ie&&Ye(),{getRootProps:(t={})=>u({"aria-owns":oe?`${R}-listbox`:null},t,{onKeyDown:nt(t),onMouseDown:It,onClick:Ot}),getInputLabelProps:()=>({id:`${R}-label`,htmlFor:R}),getInputProps:()=>({id:R,value:d,onBlur:Ye,onFocus:je,onChange:Je,onMouseDown:Ct,"aria-activedescendant":T?"":null,"aria-autocomplete":n?"both":"list","aria-controls":oe?`${R}-listbox`:void 0,"aria-expanded":oe,autoComplete:"off",ref:I,autoCapitalize:"none",spellCheck:"false",role:"combobox"}),getClearProps:()=>({tabIndex:-1,onClick:N}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:we}),getTagProps:({index:t})=>u({key:t,"data-tag-index":t,tabIndex:-1},!be&&{onDelete:Q(t)}),getListboxProps:()=>({role:"listbox",id:`${R}-listbox`,"aria-labelledby":`${R}-label`,ref:ue,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const r=(f?l:[l]).some(c=>c!=null&&ae(e,c)),a=Z?Z(e):!1;return{key:U(e),tabIndex:-1,role:"option",id:`${R}-option-${t}`,onMouseOver:Re,onClick:L,onTouchStart:i,"data-option-index":t,"aria-disabled":a,"aria-selected":r}},id:R,inputValue:d,value:l,dirty:Qe,popupOpen:T,focused:Ie||E!==-1,anchorEl:Se,setAnchorEl:$e,focusedTag:E,groupedOptions:rt}}function Rt(o){return ct("MuiListSubheader",o)}dt("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const wt=["className","color","component","disableGutters","disableSticky","inset"],Tt=o=>{const{classes:n,color:p,disableGutters:x,inset:y,disableSticky:P}=o,S={root:["root",p!=="default"&&`color${Fe(p)}`,!x&&"gutters",y&&"inset",!P&&"sticky"]};return bt(S,Rt,n)},Dt=F("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:p}=o;return[n.root,p.color!=="default"&&n[`color${Fe(p.color)}`],!p.disableGutters&&n.gutters,p.inset&&n.inset,!p.disableSticky&&n.sticky]}})(({theme:o,ownerState:n})=>u({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(o.vars||o).palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},n.color==="primary"&&{color:(o.vars||o).palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(o.vars||o).palette.background.paper})),Mt=m.exports.forwardRef(function(n,p){const x=ft({props:n,name:"MuiListSubheader"}),{className:y,color:P="default",component:S="li",disableGutters:g=!1,disableSticky:G=!1,inset:K=!1}=x,A=gt(x,wt),j=u({},x,{color:P,component:S,disableGutters:g,disableSticky:G,inset:K}),X=Tt(j);return v(Dt,u({as:S,className:ce(X.root,y),ref:p,ownerState:j},A))}),Nt=Mt;function Ft(o){return ct("MuiAutocomplete",o)}const zt=dt("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),s=zt;var pt,ut;const Et=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"],Ht=o=>{const{classes:n,disablePortal:p,focused:x,fullWidth:y,hasClearIcon:P,hasPopupIcon:S,inputFocused:g,popupOpen:G,size:K}=o,A={root:["root",x&&"focused",y&&"fullWidth",P&&"hasClearIcon",S&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",g&&"inputFocused"],tag:["tag",`tagSize${Fe(K)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",G&&"popupIndicatorOpen"],popper:["popper",p&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return bt(A,Ft,n)},Vt=F("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:p}=o,{fullWidth:x,hasClearIcon:y,hasPopupIcon:P,inputFocused:S,size:g}=p;return[{[`& .${s.tag}`]:n.tag},{[`& .${s.tag}`]:n[`tagSize${Fe(g)}`]},{[`& .${s.inputRoot}`]:n.inputRoot},{[`& .${s.input}`]:n.input},{[`& .${s.input}`]:S&&n.inputFocused},n.root,x&&n.fullWidth,P&&n.hasPopupIcon,y&&n.hasClearIcon]}})(({ownerState:o})=>u({[`&.${s.focused} .${s.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${s.clearIndicator}`]:{visibility:"visible"}}},o.fullWidth&&{width:"100%"},{[`& .${s.tag}`]:u({margin:3,maxWidth:"calc(100% - 6px)"},o.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${s.inputRoot}`]:{flexWrap:"wrap",[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4},[`& .${s.input}`]:{width:0,minWidth:30}},[`& .${Ze.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${Ze.root}.${Me.sizeSmall}`]:{[`& .${Ze.input}`]:{padding:"2px 4px 3px 0"}},[`& .${lt.root}`]:{padding:9,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${s.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${lt.root}.${Me.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${s.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${Ne.root}`]:{paddingTop:19,paddingLeft:8,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Ne.input}`]:{padding:"7px 4px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${Ne.root}.${Me.sizeSmall}`]:{paddingBottom:1,[`& .${Ne.input}`]:{padding:"2.5px 4px"}},[`& .${Me.hiddenLabel}`]:{paddingTop:8},[`& .${s.input}`]:u({flexGrow:1,textOverflow:"ellipsis",opacity:0},o.inputFocused&&{opacity:1})})),Wt=F("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,n)=>n.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),Bt=F(ht,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Gt=F(ht,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},n)=>u({},n.popupIndicator,o.popupOpen&&n.popupIndicatorOpen)})(({ownerState:o})=>u({padding:2,marginRight:-2},o.popupOpen&&{transform:"rotate(180deg)"})),Ut=F(xt,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,n)=>{const{ownerState:p}=o;return[{[`& .${s.option}`]:n.option},n.popper,p.disablePortal&&n.popperDisablePortal]}})(({theme:o,ownerState:n})=>u({zIndex:(o.vars||o).zIndex.modal},n.disablePortal&&{position:"absolute"})),_t=F(mt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,n)=>n.paper})(({theme:o})=>u({},o.typography.body1,{overflow:"auto"})),qt=F("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,n)=>n.loading})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),Kt=F("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,n)=>n.noOptions})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),jt=F("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,n)=>n.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",[`& .${s.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${s.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${s.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:Xe(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${s.focused}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:Xe(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${s.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:Xe(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),Yt=F(Nt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,n)=>n.groupLabel})(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8})),Jt=F("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,n)=>n.groupUl})({padding:0,[`& .${s.option}`]:{paddingLeft:24}}),Qt=m.exports.forwardRef(function(n,p){var x,y,P,S;const g=ft({props:n,name:"MuiAutocomplete"}),{autoComplete:G=!1,autoHighlight:K=!1,autoSelect:A=!1,blurOnSelect:j=!1,ChipProps:X,className:z,clearIcon:ze=pt||(pt=v($t,{fontSize:"small"})),clearOnBlur:Ee=!g.freeSolo,clearOnEscape:re=!1,clearText:Z="Clear",closeText:de="Close",componentsProps:k={},defaultValue:He=g.multiple?[]:null,disableClearable:Ve=!1,disableCloseOnSelect:We=!1,disabled:ee=!1,disabledItemsFocusable:ae=!1,disableListWrap:f=!1,disablePortal:fe=!1,filterSelectedOptions:Be=!1,forcePopupIcon:ge="auto",freeSolo:V=!1,fullWidth:ye=!1,getLimitTagsText:Ge=i=>`+${i}`,getOptionLabel:Pe=i=>{var L;return(L=i.label)!=null?L:i},groupBy:Ue,handleHomeEndKeys:be=!g.freeSolo,includeInputInList:ot=!1,limitTags:he=-1,ListboxComponent:R="ul",ListboxProps:U,loading:le=!1,loadingText:me="Loading\u2026",multiple:I=!1,noOptionsText:D="No options",openOnFocus:Se=!1,openText:$e="Open",PaperComponent:E=mt,PopperComponent:xe=xt,popupIcon:ve=ut||(ut=v(St,{})),readOnly:w=!1,renderGroup:l,renderInput:_e,renderOption:d,renderTags:te,selectOnFocus:Ie=!g.freeSolo,size:se="medium"}=g,ie=gt(g,Et),{getRootProps:Oe,getInputProps:Y,getInputLabelProps:Ae,getPopupIndicatorProps:qe,getClearProps:Le,getTagProps:ke,getListboxProps:T,getOptionProps:O,value:oe,dirty:pe,id:Ke,popupOpen:H,focused:M,focusedTag:Ce,anchorEl:ue,setAnchorEl:_,inputValue:ne,groupedOptions:W}=kt(u({},g,{componentName:"Autocomplete"})),J=!Ve&&!ee&&pe&&!w,q=(!V||ge===!0)&&ge!==!1,$=u({},g,{disablePortal:fe,focused:M,fullWidth:ye,hasClearIcon:J,hasPopupIcon:q,inputFocused:Ce===-1,popupOpen:H,size:se}),b=Ht($);let N;if(I&&oe.length>0){const i=L=>u({className:b.tag,disabled:ee},ke(L));te?N=te(oe,i,$):N=oe.map((L,Q)=>v(vt,u({label:Pe(L),size:se},i({index:Q}),X)))}if(he>-1&&Array.isArray(N)){const i=N.length-he;!M&&i>0&&(N=N.splice(0,he),N.push(v("span",{className:b.tag,children:Ge(i)},N.length)))}const je=l||(i=>De("li",{children:[v(Yt,{className:b.groupLabel,ownerState:$,component:"div",children:i.group}),v(Jt,{className:b.groupUl,ownerState:$,children:i.children})]},i.key)),Je=d||((i,L)=>v("li",u({},i,{children:Pe(L)}))),Re=(i,L)=>{const Q=O({option:i,index:L});return Je(u({},Q,{className:b.option}),i,{selected:Q["aria-selected"],inputValue:ne})};return De(m.exports.Fragment,{children:[v(Vt,u({ref:p,className:ce(b.root,z),ownerState:$},Oe(ie),{children:_e({id:Ke,disabled:ee,fullWidth:!0,size:se==="small"?"small":void 0,InputLabelProps:Ae(),InputProps:u({ref:_,className:b.inputRoot,startAdornment:N},(J||q)&&{endAdornment:De(Wt,{className:b.endAdornment,ownerState:$,children:[J?v(Bt,u({},Le(),{"aria-label":Z,title:Z,ownerState:$},k.clearIndicator,{className:ce(b.clearIndicator,(x=k.clearIndicator)==null?void 0:x.className),children:ze})):null,q?v(Gt,u({},qe(),{disabled:ee,"aria-label":H?de:$e,title:H?de:$e,ownerState:$},k.popupIndicator,{className:ce(b.popupIndicator,(y=k.popupIndicator)==null?void 0:y.className),children:ve})):null]})}),inputProps:u({className:b.input,disabled:ee,readOnly:w},Y())})})),ue?v(Ut,u({as:xe,disablePortal:fe,style:{width:ue?ue.clientWidth:null},ownerState:$,role:"presentation",anchorEl:ue,open:H},k.popper,{className:ce(b.popper,(P=k.popper)==null?void 0:P.className),children:De(_t,u({ownerState:$,as:E},k.paper,{className:ce(b.paper,(S=k.paper)==null?void 0:S.className),children:[le&&W.length===0?v(qt,{className:b.loading,ownerState:$,children:me}):null,W.length===0&&!V&&!le?v(Kt,{className:b.noOptions,ownerState:$,role:"presentation",onMouseDown:i=>{i.preventDefault()},children:D}):null,W.length>0?v(jt,u({as:R,className:b.listbox,ownerState:$},T(),U,{children:W.map((i,L)=>Ue?je({key:i.key,group:i.group,children:i.options.map((Q,we)=>Re(Q,i.index+we))}):Re(i,L))})):null]}))})):null]})}),ro=Qt;export{ro as A};
