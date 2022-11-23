import{ae as yt,r as m,ad as Ee,aw as Pt,g as u,k as gt,i as bt,s as N,p as We,l as ht,_ as mt,j as v,m as ce,q as xt,$ as It,Q as Ot,E as tt,a as ze}from"./index.f42b544b.js";import{i as ot,b as He,o as pt,c as Ve,A as St}from"./Select.28b63049.js";import{C as $t}from"./Close.b3832e43.js";import{P as Ct}from"./Popper.206bd5a1.js";import{u as nt}from"./useControlled.c17368a9.js";import{C as vt}from"./Chip.82b6534b.js";function ut(o){return typeof o.normalize<"u"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function At(o={}){const{ignoreAccents:n=!0,ignoreCase:p=!0,limit:x,matchFrom:y="any",stringify:P,trim:$=!1}=o;return(g,{inputValue:B,getOptionLabel:j})=>{let A=$?B.trim():B;p&&(A=A.toLowerCase()),n&&(A=ut(A));const Q=A?g.filter(Z=>{let F=(P||j)(Z);return p&&(F=F.toLowerCase()),n&&(F=ut(F)),y==="start"?F.indexOf(A)===0:F.indexOf(A)>-1}):g;return typeof x=="number"?Q.slice(0,x):Q}}function rt(o,n){for(let p=0;p<o.length;p+=1)if(n(o[p]))return p;return-1}const Lt=At(),ct=5;function kt(o){const{autoComplete:n=!1,autoHighlight:p=!1,autoSelect:x=!1,blurOnSelect:y=!1,clearOnBlur:P=!o.freeSolo,clearOnEscape:$=!1,componentName:g="useAutocomplete",defaultValue:B=o.multiple?[]:null,disableClearable:j=!1,disableCloseOnSelect:A=!1,disabled:Q,disabledItemsFocusable:Z=!1,disableListWrap:F=!1,filterOptions:Be=Lt,filterSelectedOptions:Ge=!1,freeSolo:ae=!1,getOptionDisabled:ee,getOptionLabel:de=t=>{var e;return(e=t.label)!=null?e:t},groupBy:G,handleHomeEndKeys:Ue=!o.freeSolo,id:_e,includeInputInList:qe=!1,inputValue:te,isOptionEqualToValue:le=(t,e)=>t===e,multiple:f=!1,onChange:fe,onClose:Ke,onHighlightChange:ge,onInputChange:H,onOpen:ve,open:je,openOnFocus:Ae=!1,options:Qe,readOnly:be=!1,selectOnFocus:at=!o.freeSolo,value:he}=o,R=yt(_e);let U=de;U=t=>{const e=de(t);return typeof e!="string"?String(e):e};const se=m.exports.useRef(!1),me=m.exports.useRef(!0),I=m.exports.useRef(null),D=m.exports.useRef(null),[Le,ke]=m.exports.useState(null),[E,xe]=m.exports.useState(-1),Re=p?0:-1,w=m.exports.useRef(Re),[l,Je]=nt({controlled:he,default:B,name:g}),[d,oe]=nt({controlled:te,default:"",name:g,state:"inputValue"}),[Ie,ie]=m.exports.useState(!1),_=m.exports.useCallback((t,e)=>{if(!(f?l.length<e.length:e!==null)&&!P)return;let a;if(f)a="";else if(e==null)a="";else{const c=U(e);a=typeof c=="string"?c:""}d!==a&&(oe(a),H&&H(t,a,"reset"))},[U,d,f,H,oe,P,l]),Oe=m.exports.useRef();m.exports.useEffect(()=>{const t=l!==Oe.current;Oe.current=l,!(Ie&&!t)&&(ae&&!t||_(null,l))},[l,_,Ie,Oe,ae]);const[J,we]=nt({controlled:je,default:!1,name:g,state:"open"}),[Xe,Te]=m.exports.useState(!0),De=!f&&l!=null&&d===U(l),T=J&&!be,O=T?Be(Qe.filter(t=>!(Ge&&(f?l:[l]).some(e=>e!==null&&le(t,e)))),{inputValue:De&&Xe?"":d,getOptionLabel:U}):[],Ce=J&&O.length>0&&!be,X=Ee(t=>{t===-1?I.current.focus():Le.querySelector(`[data-tag-index="${t}"]`).focus()});m.exports.useEffect(()=>{f&&E>l.length-1&&(xe(-1),X(-1))},[l,f,E,X]);function Ye(t,e){if(!D.current||t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===O.length||e==="previous"&&r===-1)return-1;const a=D.current.querySelector(`[data-option-index="${r}"]`),c=Z?!1:!a||a.disabled||a.getAttribute("aria-disabled")==="true";if(a&&!a.hasAttribute("tabindex")||c)r+=e==="next"?1:-1;else return r}}const Y=Ee(({event:t,index:e,reason:r="auto"})=>{if(w.current=e,e===-1?I.current.removeAttribute("aria-activedescendant"):I.current.setAttribute("aria-activedescendant",`${R}-option-${e}`),ge&&ge(t,e===-1?null:O[e],r),!D.current)return;const a=D.current.querySelector('[role="option"].Mui-focused');a&&(a.classList.remove("Mui-focused"),a.classList.remove("Mui-focusVisible"));const c=D.current.parentElement.querySelector('[role="listbox"]');if(!c)return;if(e===-1){c.scrollTop=0;return}const C=D.current.querySelector(`[data-option-index="${e}"]`);if(!!C&&(C.classList.add("Mui-focused"),r==="keyboard"&&C.classList.add("Mui-focusVisible"),c.scrollHeight>c.clientHeight&&r!=="mouse")){const h=C,W=c.clientHeight+c.scrollTop,it=h.offsetTop+h.offsetHeight;it>W?c.scrollTop=it-c.clientHeight:h.offsetTop-h.offsetHeight*(G?1.3:0)<c.scrollTop&&(c.scrollTop=h.offsetTop-h.offsetHeight*(G?1.3:0))}}),L=Ee(({event:t,diff:e,direction:r="next",reason:a="auto"})=>{if(!T)return;const C=Ye((()=>{const h=O.length-1;if(e==="reset")return Re;if(e==="start")return 0;if(e==="end")return h;const W=w.current+e;return W<0?W===-1&&qe?-1:F&&w.current!==-1||Math.abs(e)>1?0:h:W>h?W===h+1&&qe?-1:F||Math.abs(e)>1?h:0:W})(),r);if(Y({index:C,reason:a,event:t}),n&&e!=="reset")if(C===-1)I.current.value=d;else{const h=U(O[C]);I.current.value=h,h.toLowerCase().indexOf(d.toLowerCase())===0&&d.length>0&&I.current.setSelectionRange(d.length,h.length)}}),pe=m.exports.useCallback(()=>{if(!T)return;const t=f?l[0]:l;if(O.length===0||t==null){L({diff:"reset"});return}if(!!D.current){if(t!=null){const e=O[w.current];if(f&&e&&rt(l,a=>le(e,a))!==-1)return;const r=rt(O,a=>le(a,t));r===-1?L({diff:"reset"}):Y({index:r});return}if(w.current>=O.length-1){Y({index:O.length-1});return}Y({index:w.current})}},[O.length,f?!1:l,Ge,L,Y,T,d,f]),Ze=Ee(t=>{Pt(D,t),t&&pe()});m.exports.useEffect(()=>{pe()},[pe]);const M=t=>{J||(we(!0),Te(!0),ve&&ve(t))},ne=(t,e)=>{!J||(we(!1),Ke&&Ke(t,e))},re=(t,e,r,a)=>{if(f){if(l.length===e.length&&l.every((c,C)=>c===e[C]))return}else if(l===e)return;fe&&fe(t,e,r,a),Je(e)},q=m.exports.useRef(!1),K=(t,e,r="selectOption",a="options")=>{let c=r,C=e;if(f){C=Array.isArray(l)?l.slice():[];const h=rt(C,W=>le(e,W));h===-1?C.push(e):a!=="freeSolo"&&(C.splice(h,1),c="removeOption")}_(t,C),re(t,C,c,{option:e}),!A&&(!t||!t.ctrlKey&&!t.metaKey)&&ne(t,c),(y===!0||y==="touch"&&q.current||y==="mouse"&&!q.current)&&I.current.blur()};function ye(t,e){if(t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===l.length||e==="previous"&&r===-1)return-1;const a=Le.querySelector(`[data-tag-index="${r}"]`);if(!a||!a.hasAttribute("tabindex")||a.disabled||a.getAttribute("aria-disabled")==="true")r+=e==="next"?1:-1;else return r}}const S=(t,e)=>{if(!f)return;d===""&&ne(t,"toggleInput");let r=E;E===-1?d===""&&e==="previous"&&(r=l.length-1):(r+=e==="next"?1:-1,r<0&&(r=0),r===l.length&&(r=-1)),r=ye(r,e),xe(r),X(r)},b=t=>{se.current=!0,oe(""),H&&H(t,"","clear"),re(t,f?[]:null,"clear")},z=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(E!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(xe(-1),X(-1)),e.which!==229))switch(e.key){case"Home":T&&Ue&&(e.preventDefault(),L({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":T&&Ue&&(e.preventDefault(),L({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),L({diff:-ct,direction:"previous",reason:"keyboard",event:e}),M(e);break;case"PageDown":e.preventDefault(),L({diff:ct,direction:"next",reason:"keyboard",event:e}),M(e);break;case"ArrowDown":e.preventDefault(),L({diff:1,direction:"next",reason:"keyboard",event:e}),M(e);break;case"ArrowUp":e.preventDefault(),L({diff:-1,direction:"previous",reason:"keyboard",event:e}),M(e);break;case"ArrowLeft":S(e,"previous");break;case"ArrowRight":S(e,"next");break;case"Enter":if(w.current!==-1&&T){const r=O[w.current],a=ee?ee(r):!1;if(e.preventDefault(),a)return;K(e,r,"selectOption"),n&&I.current.setSelectionRange(I.current.value.length,I.current.value.length)}else ae&&d!==""&&De===!1&&(f&&e.preventDefault(),K(e,d,"createOption","freeSolo"));break;case"Escape":T?(e.preventDefault(),e.stopPropagation(),ne(e,"escape")):$&&(d!==""||f&&l.length>0)&&(e.preventDefault(),e.stopPropagation(),b(e));break;case"Backspace":if(f&&!be&&d===""&&l.length>0){const r=E===-1?l.length-1:E,a=l.slice();a.splice(r,1),re(e,a,"removeOption",{option:l[r]})}break}},lt=t=>{ie(!0),Ae&&!se.current&&M(t)},Me=t=>{if(D.current!==null&&D.current.parentElement.contains(document.activeElement)){I.current.focus();return}ie(!1),me.current=!0,se.current=!1,x&&w.current!==-1&&T?K(t,O[w.current],"blur"):x&&ae&&d!==""?K(t,d,"blur","freeSolo"):P&&_(t,l),ne(t,"blur")},st=t=>{const e=t.target.value;d!==e&&(oe(e),Te(!1),H&&H(t,e,"input")),e===""?!j&&!f&&re(t,null,"clear"):M(t)},et=t=>{Y({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},Ne=()=>{q.current=!0},Pe=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));K(t,O[e],"selectOption"),q.current=!1},Se=t=>e=>{const r=l.slice();r.splice(t,1),re(e,r,"removeOption",{option:l[t]})},ue=t=>{J?ne(t,"toggleInput"):M(t)},$e=t=>{t.target.getAttribute("id")!==R&&t.preventDefault()},i=()=>{I.current.focus(),at&&me.current&&I.current.selectionEnd-I.current.selectionStart===0&&I.current.select(),me.current=!1},k=t=>{(d===""||!J)&&ue(t)};let V=ae&&d.length>0;V=V||(f?l.length>0:l!==null);let Fe=O;return G&&(Fe=O.reduce((t,e,r)=>{const a=G(e);return t.length>0&&t[t.length-1].group===a?t[t.length-1].options.push(e):t.push({key:r,index:r,group:a,options:[e]}),t},[])),Q&&Ie&&Me(),{getRootProps:(t={})=>u({"aria-owns":Ce?`${R}-listbox`:null},t,{onKeyDown:z(t),onMouseDown:$e,onClick:i}),getInputLabelProps:()=>({id:`${R}-label`,htmlFor:R}),getInputProps:()=>({id:R,value:d,onBlur:Me,onFocus:lt,onChange:st,onMouseDown:k,"aria-activedescendant":T?"":null,"aria-autocomplete":n?"both":"list","aria-controls":Ce?`${R}-listbox`:void 0,"aria-expanded":Ce,autoComplete:"off",ref:I,autoCapitalize:"none",spellCheck:"false",role:"combobox"}),getClearProps:()=>({tabIndex:-1,onClick:b}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:ue}),getTagProps:({index:t})=>u({key:t,"data-tag-index":t,tabIndex:-1},!be&&{onDelete:Se(t)}),getListboxProps:()=>({role:"listbox",id:`${R}-listbox`,"aria-labelledby":`${R}-label`,ref:Ze,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const r=(f?l:[l]).some(c=>c!=null&&le(e,c)),a=ee?ee(e):!1;return{key:U(e),tabIndex:-1,role:"option",id:`${R}-option-${t}`,onMouseOver:et,onClick:Pe,onTouchStart:Ne,"data-option-index":t,"aria-disabled":a,"aria-selected":r}},id:R,inputValue:d,value:l,dirty:V,popupOpen:T,focused:Ie||E!==-1,anchorEl:Le,setAnchorEl:ke,focusedTag:E,groupedOptions:Fe}}function Rt(o){return gt("MuiListSubheader",o)}bt("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const wt=["className","color","component","disableGutters","disableSticky","inset"],Tt=o=>{const{classes:n,color:p,disableGutters:x,inset:y,disableSticky:P}=o,$={root:["root",p!=="default"&&`color${We(p)}`,!x&&"gutters",y&&"inset",!P&&"sticky"]};return xt($,Rt,n)},Dt=N("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:p}=o;return[n.root,p.color!=="default"&&n[`color${We(p.color)}`],!p.disableGutters&&n.gutters,p.inset&&n.inset,!p.disableSticky&&n.sticky]}})(({theme:o,ownerState:n})=>u({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(o.vars||o).palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},n.color==="primary"&&{color:(o.vars||o).palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(o.vars||o).palette.background.paper})),Mt=m.exports.forwardRef(function(n,p){const x=ht({props:n,name:"MuiListSubheader"}),{className:y,color:P="default",component:$="li",disableGutters:g=!1,disableSticky:B=!1,inset:j=!1}=x,A=mt(x,wt),Q=u({},x,{color:P,component:$,disableGutters:g,disableSticky:B,inset:j}),Z=Tt(Q);return v(Dt,u({as:$,className:ce(Z.root,y),ref:p,ownerState:Q},A))}),Nt=Mt;function Ft(o){return gt("MuiAutocomplete",o)}const Et=bt("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),s=Et;var dt,ft;const zt=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],Ht=o=>{const{classes:n,disablePortal:p,focused:x,fullWidth:y,hasClearIcon:P,hasPopupIcon:$,inputFocused:g,popupOpen:B,size:j}=o,A={root:["root",x&&"focused",y&&"fullWidth",P&&"hasClearIcon",$&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",g&&"inputFocused"],tag:["tag",`tagSize${We(j)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",B&&"popupIndicatorOpen"],popper:["popper",p&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return xt(A,Ft,n)},Vt=N("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:p}=o,{fullWidth:x,hasClearIcon:y,hasPopupIcon:P,inputFocused:$,size:g}=p;return[{[`& .${s.tag}`]:n.tag},{[`& .${s.tag}`]:n[`tagSize${We(g)}`]},{[`& .${s.inputRoot}`]:n.inputRoot},{[`& .${s.input}`]:n.input},{[`& .${s.input}`]:$&&n.inputFocused},n.root,x&&n.fullWidth,P&&n.hasPopupIcon,y&&n.hasClearIcon]}})(({ownerState:o})=>u({[`&.${s.focused} .${s.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${s.clearIndicator}`]:{visibility:"visible"}}},o.fullWidth&&{width:"100%"},{[`& .${s.tag}`]:u({margin:3,maxWidth:"calc(100% - 6px)"},o.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${s.inputRoot}`]:{flexWrap:"wrap",[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4},[`& .${s.input}`]:{width:0,minWidth:30}},[`& .${ot.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${ot.root}.${He.sizeSmall}`]:{[`& .${ot.input}`]:{padding:"2px 4px 3px 0"}},[`& .${pt.root}`]:{padding:9,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${s.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${pt.root}.${He.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${s.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${Ve.root}`]:{paddingTop:19,paddingLeft:8,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Ve.input}`]:{padding:"7px 4px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${Ve.root}.${He.sizeSmall}`]:{paddingBottom:1,[`& .${Ve.input}`]:{padding:"2.5px 4px"}},[`& .${He.hiddenLabel}`]:{paddingTop:8},[`& .${s.input}`]:u({flexGrow:1,textOverflow:"ellipsis",opacity:0},o.inputFocused&&{opacity:1})})),Wt=N("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,n)=>n.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),Bt=N(It,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Gt=N(It,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},n)=>u({},n.popupIndicator,o.popupOpen&&n.popupIndicatorOpen)})(({ownerState:o})=>u({padding:2,marginRight:-2},o.popupOpen&&{transform:"rotate(180deg)"})),Ut=N(Ct,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,n)=>{const{ownerState:p}=o;return[{[`& .${s.option}`]:n.option},n.popper,p.disablePortal&&n.popperDisablePortal]}})(({theme:o,ownerState:n})=>u({zIndex:(o.vars||o).zIndex.modal},n.disablePortal&&{position:"absolute"})),_t=N(Ot,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,n)=>n.paper})(({theme:o})=>u({},o.typography.body1,{overflow:"auto"})),qt=N("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,n)=>n.loading})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),Kt=N("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,n)=>n.noOptions})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),jt=N("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,n)=>n.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",[`& .${s.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${s.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${s.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:tt(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${s.focused}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:tt(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${s.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:tt(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),Qt=N(Nt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,n)=>n.groupLabel})(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8})),Jt=N("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,n)=>n.groupUl})({padding:0,[`& .${s.option}`]:{paddingLeft:24}}),Xt=m.exports.forwardRef(function(n,p){var x,y,P,$;const g=ht({props:n,name:"MuiAutocomplete"}),{autoComplete:B=!1,autoHighlight:j=!1,autoSelect:A=!1,blurOnSelect:Q=!1,ChipProps:Z,className:F,clearIcon:Be=dt||(dt=v($t,{fontSize:"small"})),clearOnBlur:Ge=!g.freeSolo,clearOnEscape:ae=!1,clearText:ee="Clear",closeText:de="Close",componentsProps:G={},defaultValue:Ue=g.multiple?[]:null,disableClearable:_e=!1,disableCloseOnSelect:qe=!1,disabled:te=!1,disabledItemsFocusable:le=!1,disableListWrap:f=!1,disablePortal:fe=!1,filterSelectedOptions:Ke=!1,forcePopupIcon:ge="auto",freeSolo:H=!1,fullWidth:ve=!1,getLimitTagsText:je=i=>`+${i}`,getOptionLabel:Ae=i=>{var k;return(k=i.label)!=null?k:i},groupBy:Qe,handleHomeEndKeys:be=!g.freeSolo,includeInputInList:at=!1,limitTags:he=-1,ListboxComponent:R="ul",ListboxProps:U,loading:se=!1,loadingText:me="Loading\u2026",multiple:I=!1,noOptionsText:D="No options",openOnFocus:Le=!1,openText:ke="Open",PaperComponent:E=Ot,PopperComponent:xe=Ct,popupIcon:Re=ft||(ft=v(St,{})),readOnly:w=!1,renderGroup:l,renderInput:Je,renderOption:d,renderTags:oe,selectOnFocus:Ie=!g.freeSolo,size:ie="medium",slotProps:_={}}=g,Oe=mt(g,zt),{getRootProps:J,getInputProps:we,getInputLabelProps:Xe,getPopupIndicatorProps:Te,getClearProps:De,getTagProps:T,getListboxProps:O,getOptionProps:Ce,value:X,dirty:Ye,id:Y,popupOpen:L,focused:pe,focusedTag:Ze,anchorEl:M,setAnchorEl:ne,inputValue:re,groupedOptions:q}=kt(u({},g,{componentName:"Autocomplete"})),K=!_e&&!te&&Ye&&!w,ye=(!H||ge===!0)&&ge!==!1,S=u({},g,{disablePortal:fe,focused:pe,fullWidth:ve,hasClearIcon:K,hasPopupIcon:ye,inputFocused:Ze===-1,popupOpen:L,size:ie}),b=Ht(S);let z;if(I&&X.length>0){const i=k=>u({className:b.tag,disabled:te},T(k));oe?z=oe(X,i,S):z=X.map((k,V)=>v(vt,u({label:Ae(k),size:ie},i({index:V}),Z)))}if(he>-1&&Array.isArray(z)){const i=z.length-he;!pe&&i>0&&(z=z.splice(0,he),z.push(v("span",{className:b.tag,children:je(i)},z.length)))}const Me=l||(i=>ze("li",{children:[v(Qt,{className:b.groupLabel,ownerState:S,component:"div",children:i.group}),v(Jt,{className:b.groupUl,ownerState:S,children:i.children})]},i.key)),et=d||((i,k)=>v("li",u({},i,{children:Ae(k)}))),Ne=(i,k)=>{const V=Ce({option:i,index:k});return et(u({},V,{className:b.option}),i,{selected:V["aria-selected"],inputValue:re})},Pe=(x=_.clearIndicator)!=null?x:G.clearIndicator,Se=(y=_.paper)!=null?y:G.paper,ue=(P=_.popper)!=null?P:G.popper,$e=($=_.popupIndicator)!=null?$:G.popupIndicator;return ze(m.exports.Fragment,{children:[v(Vt,u({ref:p,className:ce(b.root,F),ownerState:S},J(Oe),{children:Je({id:Y,disabled:te,fullWidth:!0,size:ie==="small"?"small":void 0,InputLabelProps:Xe(),InputProps:u({ref:ne,className:b.inputRoot,startAdornment:z},(K||ye)&&{endAdornment:ze(Wt,{className:b.endAdornment,ownerState:S,children:[K?v(Bt,u({},De(),{"aria-label":ee,title:ee,ownerState:S},Pe,{className:ce(b.clearIndicator,Pe==null?void 0:Pe.className),children:Be})):null,ye?v(Gt,u({},Te(),{disabled:te,"aria-label":L?de:ke,title:L?de:ke,ownerState:S},$e,{className:ce(b.popupIndicator,$e==null?void 0:$e.className),children:Re})):null]})}),inputProps:u({className:b.input,disabled:te,readOnly:w},we())})})),M?v(Ut,u({as:xe,disablePortal:fe,style:{width:M?M.clientWidth:null},ownerState:S,role:"presentation",anchorEl:M,open:L},ue,{className:ce(b.popper,ue==null?void 0:ue.className),children:ze(_t,u({ownerState:S,as:E},Se,{className:ce(b.paper,Se==null?void 0:Se.className),children:[se&&q.length===0?v(qt,{className:b.loading,ownerState:S,children:me}):null,q.length===0&&!H&&!se?v(Kt,{className:b.noOptions,ownerState:S,role:"presentation",onMouseDown:i=>{i.preventDefault()},children:D}):null,q.length>0?v(jt,u({as:R,className:b.listbox,ownerState:S},O(),U,{children:q.map((i,k)=>Qe?Me({key:i.key,group:i.group,children:i.options.map((V,Fe)=>Ne(V,i.index+Fe))}):Ne(i,k))})):null]}))})):null]})}),ro=Xt;export{ro as A};
