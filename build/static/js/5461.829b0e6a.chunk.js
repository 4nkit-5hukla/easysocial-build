(self.webpackChunkeasysocial=self.webpackChunkeasysocial||[]).push([[5461],{3355:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var r=n(184),i=function(){return(0,r.jsx)("svg",{width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"//www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M8 1L2 7L8 13",stroke:"#24272C",strokeWidth:2})})}},4972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(1413),i=n(4165),s=n(5861),a=n(885),o=n(2791),l=n(6907),c=n(3504),u=n(3400),d=n(7621),h=n(9504),f=n(3786),p=n(2169),x=n(890),m=n(9259),g=n(1134),v=n(4430),b=n(3144),Z=n(5671),j=n(6138),w=(0,b.Z)((function e(){(0,Z.Z)(this,e)}));w.getWABasicSettings=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.ln)("/whatsapp/business-profile","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),w.saveWABasicSettings=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.ln)("/whatsapp/profile-update","POST",{data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w.getWAChatBots=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.ln)("/chatbots","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));var y=n(5641),C=n(5987),k=n(4554),I=n(4110),A=n(184),S=["control","defaultValue","onChange","rules","name","accept","allowedTypes","previewAlt","label","width","height","children"],M=function(e){var t=e.control,n=e.defaultValue,i=e.onChange,s=e.rules,a=e.name,o=e.accept,l=void 0===o?"image/png, image/jpeg":o,c=e.allowedTypes,u=void 0===c?"png or jpg format":c,d=e.previewAlt,h=void 0===d?"Profile Image":d,f=e.label,m=e.width,v=void 0===m?157:m,b=e.height,Z=void 0===b?157:b,j=(e.children,(0,C.Z)(e,S));return(0,A.jsx)(g.Qr,{rules:s,control:t,name:a,render:function(e){var t=e.field;return(0,A.jsxs)(k.Z,{sx:{display:"flex",position:"relative",margin:"auto",width:v,height:Z},children:[n&&""!==n&&(0,A.jsx)(k.Z,{sx:{backgroundColor:"#F2F3F7",borderRadius:"15px",boxShadow:"0px 0px 5px 1px rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",height:"100%",left:0,overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,width:"100%",zIndex:2},children:(0,A.jsx)(p.Z,{component:"img",image:n,alt:h})}),(0,A.jsxs)(k.Z,{sx:{alignItems:"center",backgroundColor:"#F2F3F7",borderRadius:"15px",display:"flex",height:"100%",justifyContent:"center",flexDirection:"column",position:"relative",textAlign:"center",width:"100%"},children:[(0,A.jsx)(I.Z,(0,r.Z)((0,r.Z)({},j),{},{inputProps:{accept:l,type:"file",title:h,sx:{backgroundColor:"transparent",borderRadius:"5px",height:"100%",margin:0,opacity:0,padding:0,position:"absolute",top:0,width:"100%",zIndex:0}},name:t.name,onChange:i,sx:{height:"100%",position:"absolute",left:0,m:0,opacity:0,p:0,top:0,width:"100%",zIndex:1}})),(0,A.jsx)(x.Z,{sx:{color:"#616C7D",fontSize:15,fontWeight:500,lineHeight:"18px",maxWidth:v},children:f}),(0,A.jsx)(x.Z,{className:"allowed-types",sx:{color:"#758399",fontSize:10,fontWeight:400,lineHeight:"12px",marginBottom:0},children:u})]})]})}})},W=n(3821),B=n(4094),E=n(9959),N=n(773),F=n(3355),V=function(){var e=(0,W.O)(),t=e.isMobile,n=e.isTablet,b=e.navigate,Z=(0,B.s)(),j=Z.setErrorMessage,C=Z.setSuccessMessage,k=(0,E.CS)(),I=k.allowedVerticals,S=k.chatbotNumber,V=(0,E.qH)().setChatBotNumber,L=(0,o.useState)(!0),O=(0,a.Z)(L,2),R=O[0],z=O[1],T=(0,o.useState)("Submit"),U=(0,a.Z)(T,2),q=U[0],P=U[1],D=(0,g.cI)({defaultValues:{address:"",description:"",email:"",file:void 0,profile_picture_url:"",websites:[],messaging_product:"",vertical:""}}),H=D.control,_=D.handleSubmit,G=D.watch,Q=D.reset,Y=D.setValue,K=G(),X=K.profile_picture_url,$=K.vertical,J=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,v.serialize)(t),e.next=4,w.saveWABasicSettings(n);case 4:if(!(r=e.sent).errors){e.next=7;break}throw Error(r.errors.pop().message);case 7:if(r.success||!r.message){e.next=9;break}throw Error(r.message);case 9:C(r.message),b(0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),j(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),ee=(0,o.useCallback)((0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.getWABasicSettings();case 3:if((t=e.sent).success){e.next=6;break}throw Error(t.message);case 6:P("Update Business Information"),Q(t.payload),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),j(e.t0.message);case 13:return e.prev=13,z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])}))),[Q]),te=(0,o.useCallback)((0,s.Z)((0,i.Z)().mark((function e(){var t,n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,void 0!==S){e.next=9;break}return e.next=4,w.getWAChatBots();case 4:if((t=e.sent).success){e.next=7;break}throw Error(t.message);case 7:n=(0,a.Z)(t.payload,1),(r=n[0])&&V(r.id);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),j(e.t0.message);case 14:return e.prev=14,z(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])}))),[]);return(0,o.useEffect)((function(){te()}),[te]),(0,o.useEffect)((function(){ee()}),[ee]),(0,A.jsxs)(o.Fragment,{children:[(0,A.jsx)(l.ql,{children:(0,A.jsx)("title",{children:"WhatsApp Basic Settings"})}),(0,A.jsxs)(N.VY,{children:[t&&(0,A.jsxs)(N.yW,{children:[(0,A.jsx)(u.Z,{component:c.rU,to:"/business-settings",sx:{width:32,height:32},children:(0,A.jsx)(F.I,{})}),(0,A.jsx)(N.Gh,{children:"Business Information"})]}),(0,A.jsx)(N.hm,{children:(0,A.jsxs)(N.oX,{onSubmit:_(J),children:[(0,A.jsx)(d.Z,{elevation:0,sx:N.we,children:(0,A.jsxs)(h.Z,{sx:N.ny,children:[(0,A.jsx)(N.fN,{children:"Business Information"}),(0,A.jsxs)(N.gq,{sx:N.aq,children:[(0,A.jsx)(N.mn,{children:(0,A.jsx)(N.gN,{sx:{mb:0,height:"100%"},children:(0,A.jsx)(y.Z,{control:H,name:"description",label:"Business Description",rows:5,sx:N.FO,multiline:!0})})}),(0,A.jsx)(N.aV,{children:(0,A.jsx)(M,{control:H,name:"file",defaultValue:X,onChange:function(e){var t=e.target.files;if(t&&t.length>0){var n=(0,a.Z)(t,1)[0];Y("file",n),Y("profile_picture_url",URL.createObjectURL(n))}},previewAlt:"Profile Image",label:"Upload Profile Image"})})]}),(0,A.jsx)(N.gq,{sx:(0,r.Z)((0,r.Z)({},N.aq),{},{mt:3.75}),children:(0,A.jsx)(N.mn,{children:(0,A.jsx)(N.gN,{children:(0,A.jsxs)(y.Z,{select:!0,control:H,label:"Business Vertical",name:"vertical",sx:N.Br,defaultValue:null!==$&&void 0!==$?$:"",children:[(0,A.jsx)(f.Z,{value:"",disabled:!0,children:"Select Vertical"}),I.map((function(e,t){var n=e.label,r=e.value;return(0,A.jsx)(f.Z,{value:r,children:n},t)}))]})})})}),(0,A.jsx)(N.gq,{children:(0,A.jsx)(N.mn,{children:(0,A.jsx)(N.gN,{children:(0,A.jsx)(y.Z,{control:H,label:"Business Address",name:"address",sx:N.Br})})})}),(0,A.jsx)(N.gq,{children:(0,A.jsx)(N.mn,{children:(0,A.jsx)(N.gN,{children:(0,A.jsx)(y.Z,{control:H,label:"Email",name:"email",sx:N.Br})})})}),(0,A.jsxs)(N.gq,{sx:N.sQ,children:[(0,A.jsx)(N.T9,{sx:N.YH,children:(0,A.jsx)(N.gN,{children:(0,A.jsx)(y.Z,{control:H,name:"websites[0]",label:"Website 1",placeholder:"Website 1",sx:N.ey})})}),(0,A.jsx)(N.T9,{sx:N.YH,children:(0,A.jsx)(N.gN,{children:(0,A.jsx)(y.Z,{control:H,name:"websites[1]",label:"Website 2",placeholder:"Website 2",sx:N.ey})})})]}),(0,A.jsx)(N.W9,{children:!R&&(0,A.jsx)(N.Kk,{type:"submit",children:q})})]})}),S&&(0,A.jsxs)(d.Z,{elevation:0,sx:N.$5,children:[(0,A.jsx)(p.Z,{component:"img",image:"/static/images/svg/bot.svg",alt:"bot",sx:{display:"flex",flexShrink:1,height:"auto",maxWidth:"100%",width:{xs:194,md:"calc(100% - 200px)"}}}),(0,A.jsxs)(N.r3,{children:[(0,A.jsxs)(x.Z,{component:"h3",sx:{color:"#ffffff",fontSize:14,fontWeight:400,lineHeight:"18px"},children:["Start building your WhatsApp Chatbot in seconds. Use the advanced ",(0,A.jsx)("strong",{children:"Chatflow"})," tool by EasySocial, and build complex conversations in a jiffy."]}),(0,A.jsxs)(N.je,{sx:N.ub,children:[(0,A.jsxs)(N.Kk,{component:c.rU,to:"/chat-flow/".concat(S),sx:N.fW,disableIcon:!0,children:[(0,A.jsx)("span",{children:"Build Chatbot"}),(0,A.jsx)(m.Z,{viewBox:"0 0 14 10",fill:"none",sx:{width:14,height:10},children:(0,A.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3692 4.19223L8.28352 1.00205L9.25275 0L14 4.90798L9.43077 10L8.46154 8.99796L11.3692 5.62372H0V4.19223H11.3692Z",fill:"#12B0EE"})})]}),n&&(0,A.jsx)(p.Z,{component:"img",image:"/static/images/svg/messages.svg",alt:"messages",sx:{width:"auto"}})]})]})]})]})})]})]})},L=function(){return(0,A.jsx)(V,{})}},5641:function(e,t,n){"use strict";var r=n(1413),i=n(5987),s=n(4280),a=n(1134),o=n(184),l=["control","defaultValue","rules","name","children"];t.Z=function(e){var t=e.control,n=(e.defaultValue,e.rules),c=e.name,u=e.children,d=(0,i.Z)(e,l);return(0,o.jsx)(a.Qr,{rules:n,control:t,name:c,render:function(e){var t,n=e.field;return(0,o.jsx)(s.Z,(0,r.Z)((0,r.Z)({},d),{},{value:null!==(t=n.value)&&void 0!==t?t:"",onChange:n.onChange,children:u}))}})}},2169:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(3366),i=n(7462),s=n(2791),a=n(8182),o=n(4419),l=n(3736),c=n(6934),u=n(1217);function d(e){return(0,u.Z)("MuiCardMedia",e)}(0,n(5878).Z)("MuiCardMedia",["root","media","img"]);var h=n(184),f=["children","className","component","image","src","style"],p=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.isMediaComponent,i=n.isImageComponent;return[t.root,r&&t.media,i&&t.img]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),x=["video","audio","picture","iframe","img"],m=["picture","img"],g=s.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCardMedia"}),s=n.children,c=n.className,u=n.component,g=void 0===u?"div":u,v=n.image,b=n.src,Z=n.style,j=(0,r.Z)(n,f),w=-1!==x.indexOf(g),y=!w&&v?(0,i.Z)({backgroundImage:'url("'.concat(v,'")')},Z):Z,C=(0,i.Z)({},n,{component:g,isMediaComponent:w,isImageComponent:-1!==m.indexOf(g)}),k=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,o.Z)(n,d,t)}(C);return(0,h.jsx)(p,(0,i.Z)({className:(0,a.Z)(k.root,c),as:g,role:!w&&v?"img":void 0,ref:t,style:y,ownerState:C,src:w?v||b:void 0},j,{children:s}))}))},133:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(1217);function i(e){return(0,r.Z)("MuiDivider",e)}var s=(0,n(5878).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=s},6014:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});var r=n(1217);function i(e){return(0,r.Z)("MuiListItemIcon",e)}var s=(0,n(5878).Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=s},9849:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(1217);function i(e){return(0,r.Z)("MuiListItemText",e)}var s=(0,n(5878).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=s},3457:function(e,t,n){"use strict";var r=(0,n(4046).ZP)();t.Z=r},4430:function(e){function t(e){return void 0===e}function n(e){return e===Object(e)}function r(e){return Array.isArray(e)}function i(e,r){return r?n(e)&&!t(e.uri):n(e)&&"number"===typeof e.size&&"string"===typeof e.type&&"function"===typeof e.slice}function s(e){return!t(e)&&e}e.exports={serialize:function e(a,o,l,c){o=o||{},l=l||new FormData,o.indices=s(o.indices),o.nullsAsUndefineds=s(o.nullsAsUndefineds),o.booleansAsIntegers=s(o.booleansAsIntegers),o.allowEmptyArrays=s(o.allowEmptyArrays),o.noFilesWithArrayNotation=s(o.noFilesWithArrayNotation),o.dotsForObjectNotation=s(o.dotsForObjectNotation);var u="function"===typeof l.getParts;return t(a)||(null===a?o.nullsAsUndefineds||l.append(c,""):!function(e){return"boolean"===typeof e}(a)?r(a)?a.length?a.forEach((function(t,r){var s=c+"["+(o.indices?r:"")+"]";o.noFilesWithArrayNotation&&function(e,t){return i(e,t)&&"string"===typeof e.name&&(n(e.lastModifiedDate)||"number"===typeof e.lastModified)}(t,u)&&(s=c),e(t,o,l,s)})):o.allowEmptyArrays&&l.append(c+"[]",""):!function(e){return e instanceof Date}(a)?n(a)&&!i(a,u)?Object.keys(a).forEach((function(t){var n=a[t];if(r(n))for(;t.length>2&&t.lastIndexOf("[]")===t.length-2;)t=t.substring(0,t.length-2);var i=c?o.dotsForObjectNotation?c+"."+t:c+"["+t+"]":t;e(n,o,l,i)})):l.append(c,a):l.append(c,a.toISOString()):o.booleansAsIntegers?l.append(c,a?1:0):l.append(c,a)),l}}}}]);
//# sourceMappingURL=5461.829b0e6a.chunk.js.map