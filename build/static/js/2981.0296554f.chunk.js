"use strict";(self.webpackChunkeasysocial=self.webpackChunkeasysocial||[]).push([[2981],{141:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4165),a=n(5861),i=n(3144),s=n(5671),l=n(6138),o=(0,i.Z)((function e(){(0,s.Z)(this,e)}));o.getLeadDataFields=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.ln)("/lead-data-fields","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),o.getLeadDataField=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.ln)("/lead-data-fields/edit/".concat(t),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.createLeadDataField=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.ln)("/lead-data-fields/","POST",{data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.updateLeadDataField=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.ln)("/lead-data-fields/update/".concat(t),"PUT",{data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.deleteLeadDataField=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.ln)("/lead-data-fields/delete/".concat(t),"DELETE");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6759:function(e,t,n){n.d(t,{IO:function(){return c},Zb:function(){return o}});var r=n(9439),a=n(2791),i=n(184),s=(0,a.createContext)(void 0),l=(0,a.createContext)(void 0),o=function(){var e=(0,a.useContext)(s);if(void 0===e)throw Error("Item must be used inside of LeadDataFieldsProvider, otherwise it will not function correctly.");return e},c=function(){var e=(0,a.useContext)(l);if(void 0===e)throw Error("Item must be used inside of LeadDataFieldsProvider, otherwise it will not function correctly.");return e};t.ZP=function(e){var t=e.children,n=(0,a.useState)([]),o=(0,r.Z)(n,2),c=o[0],d=o[1],u=(0,a.useState)(""),h=(0,r.Z)(u,2),f=h[0],x=h[1],p=(0,a.useState)(),m=(0,r.Z)(p,2),j=m[0],Z=m[1],v=(0,a.useState)(!1),b=(0,r.Z)(v,2),g=b[0],w=b[1],y={leadDataFields:c,leadDataFilter:f,showLeadDataForm:g,editLeadDataId:j},k=(0,a.useMemo)((function(){return{setLeadDataFields:d,setLeadDataFilter:x,setShowLeadDataForm:w,setEditLeadDataId:Z}}),[]);return(0,i.jsx)(s.Provider,{value:y,children:(0,i.jsx)(l.Provider,{value:k,children:t})})}},2981:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(6759),a=n(1413),i=n(4165),s=n(5861),l=n(9439),o=n(2791),c=n(6907),d=n(3504),u=n(3400),h=n(7621),f=n(9504),x=n(4721),p=n(8940),m=n(141),j=n(3821),Z=n(4094),v=n(3355),b=n(90),g=n(3559),w=n(9862),y=n(5021),k=n(9900),D=n(7064),F=n(1715),_=n(3786),L=n(5574),S=n(5661),C=n(9157),E=n(7123),M=n(6151),N=n(7235),I=n(184),T=function(e){var t=e.display_name,n=e.field_name,a=e.field_type,c=e.id,d=(0,Z.s)(),h=d.setErrorMessage,f=d.setSuccessMessage,x=(0,r.IO)(),p=x.setEditLeadDataId,j=x.setShowLeadDataForm,v=(0,o.useState)(null),b=(0,l.Z)(v,2),g=b[0],w=b[1],T=(0,o.useState)(!1),V=(0,l.Z)(T,2),P=V[0],O=V[1],W=function(){O(!1)},z=function(){w(null)},R=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.deleteLeadDataField(c);case 3:if((t=e.sent).success){e.next=6;break}throw Error(t.message);case 6:f(t.message),setTimeout((function(){return window.location.reload()}),1e3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),h(e.t0.message);case 13:return e.prev=13,W(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return(0,I.jsxs)(o.Fragment,{children:[(0,I.jsxs)(y.ZP,{component:"div",sx:{px:{xs:0,md:2}},children:[(0,I.jsx)(k.Z,{primary:(0,I.jsxs)("div",{className:"primary-block",children:[(0,I.jsx)("h2",{className:"list-title",children:t}),(0,I.jsx)("h2",{className:"type",children:"string"===a?"Text":a})]}),secondary:"[".concat(n,"]"),sx:{"& .primary-block":{alignItems:"center",display:"flex",flexWrap:"wrap",gap:1.25,marginBottom:.75,"& .list-title":{color:"text.primary",fontSize:15,fontWeight:500,lineHeight:"18px"},"& .type":{color:"#767676b3",fontSize:12,fontWeight:400,lineHeight:1,textTransform:"uppercase"}},"& .MuiListItemText-secondary":{color:"text.primary",fontSize:12,maxWidth:290,fontWeight:400,lineHeight:"15px"}}}),(0,I.jsx)(D.Z,{children:(0,I.jsx)(u.Z,{onClick:function(e){w(e.currentTarget)},children:(0,I.jsx)(N.Z,{})})})]}),Boolean(g)&&(0,I.jsxs)(F.Z,{anchorEl:g,open:Boolean(g),onClose:z,keepMounted:!0,MenuListProps:{"aria-labelledby":"Options"},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiPaper-root":{minWidth:120}},children:[(0,I.jsx)(_.Z,{onClick:function(){p(c),j(!0),z()},children:"Edit"}),(0,I.jsx)(_.Z,{onClick:function(){O(!0),z()},children:"Delete"})]}),(0,I.jsxs)(L.Z,{open:P,"aria-labelledby":"responsive-dialog-title",children:[(0,I.jsx)(S.Z,{id:"responsive-dialog-title",children:"Delete"}),(0,I.jsx)(C.Z,{children:"Are you sure you want to delete?"}),(0,I.jsxs)(E.Z,{children:[(0,I.jsx)(M.Z,{color:"secondary",onClick:function(){W()},children:"Cancel"}),(0,I.jsx)(M.Z,{onClick:(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:case"end":return e.stop()}}),e)}))),autoFocus:!0,children:"Delete"})]})]})]})},V=function(e){var t=e.isSearchActive,n=e.setSearchActive,a=(0,r.IO)(),i=a.setLeadDataFilter,s=a.setShowLeadDataForm;return(0,I.jsxs)(w.sm,{children:[(0,I.jsx)(w.vd,{children:(0,I.jsx)(g.Kk,{disableIcon:!0,type:"button",onClick:function(){return s(!0)},sx:{py:0,px:.625,height:36,mt:0},children:"New Lead Data Field"})}),(0,I.jsxs)(w.DU,{children:[!t&&(0,I.jsx)(w.yE,{children:(0,I.jsx)(w.og,{children:"Lead Data Fields"})}),(0,I.jsxs)(w.sv,{children:[t&&(0,I.jsx)(w._8,{children:(0,I.jsxs)(w.w2,{children:[(0,I.jsx)(u.Z,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:(0,I.jsx)(b.o,{})}),(0,I.jsx)(w.Mj,{onChange:function(e){var t=e.target.value;return i(t)},placeholder:"Search Field"}),(0,I.jsx)(u.Z,{onClick:function(){i(""),n(!t)},sx:{position:"absolute",right:0,top:0},children:(0,I.jsx)(p.Z,{})})]})}),!t&&(0,I.jsx)(u.Z,{onClick:function(){return n((function(e){return!e}))},children:(0,I.jsx)(b.o,{})})]})]})]})},P=n(3974),O=n(1134),W=n(341),z=n(3956),R=n(5641),A=n(5987),B=n(2343),q=n(4280),G=["control","defaultValue","rules","name","children","setValue"],H=function(e){var t=e.control,n=e.defaultValue,r=e.rules,i=e.name,s=(e.children,e.setValue),l=(0,A.Z)(e,G);return(0,I.jsx)(O.Qr,{rules:r,control:t,name:i,render:function(e){var t=e.field;return(0,I.jsx)(B.Z,{multiple:!0,options:n,onChange:function(e,n){s(t.name,n)},freeSolo:!0,renderInput:function(e){return(0,I.jsx)(q.Z,(0,a.Z)((0,a.Z)({},e),{},{variant:"filled",label:l.label,sx:l.sx}))}})}})},K=function(e){var t=e.open,n=e.closeDrawer,a=(0,Z.s)(),l=a.setErrorMessage,c=a.setSuccessMessage,d=(0,r.Zb)().editLeadDataId,h=(0,O.cI)({defaultValues:{field_type:"",display_name:"",field_name:"",display_in_filter:!1,use_lead_title:!1}}),f=h.control,x=h.handleSubmit,p=h.watch,j=h.reset,b=h.setValue,y=p(),k=y.field_type,D=y.display_name,F=y.field_options,L=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(t),!d){e.next=12;break}return e.next=5,m.Z.updateLeadDataField(d,t);case 5:if((r=e.sent).success){e.next=8;break}throw Error(r.message);case 8:c(r.message),setTimeout((function(){return window.location.reload()}),1e3),e.next=19;break;case 12:return e.next=14,m.Z.createLeadDataField(t);case 14:if((a=e.sent).success){e.next=17;break}throw Error(a.message);case 17:c(a.message),setTimeout((function(){return window.location.reload()}),1e3);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),l(e.t0.message);case 24:return e.prev=24,n(),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[0,21,24,27]])})));return function(t){return e.apply(this,arguments)}}(),S=(0,o.useCallback)((function(){return b("field_name",D.toLowerCase().replaceAll(" ","_"))}),[D]),C=(0,o.useCallback)((0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!d){e.next=8;break}return e.next=4,m.Z.getLeadDataField(d);case 4:if((t=e.sent).success){e.next=7;break}throw Error(t.message);case 7:j({field_type:t.payload.field_type,display_name:t.payload.display_name,field_name:t.payload.field_name,display_in_filter:t.payload.display_in_filter,use_lead_title:t.payload.mark_as_lead_title,field_options:t.payload.field_options?t.payload.field_options:[]});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[d]);return(0,o.useEffect)((function(){S()}),[S]),(0,o.useEffect)((function(){C()}),[C]),(0,I.jsx)(P.ZP,{anchor:"right",open:t,onClose:function(e,t){return!(0,W.MF)(t)&&n()},sx:{zIndex:"modal"},children:(0,I.jsxs)(w.Dj,{sx:{width:{xs:"100vw",md:360}},children:[(0,I.jsxs)(w.yW,{children:[(0,I.jsx)(u.Z,{onClick:n,sx:{width:32,height:32},children:(0,I.jsx)(v.I,{})}),(0,I.jsx)(w.Gh,{children:"".concat(d?"Edit":"Create a"," Data Field")})]}),(0,I.jsxs)(w.aN,{onSubmit:x(L),children:[(0,I.jsx)(w.gq,{children:(0,I.jsxs)(w.mn,{children:[(0,I.jsx)(w.gN,{children:(0,I.jsxs)(R.Z,{select:!0,control:f,label:"Data Field Type",name:"field_type",sx:w.Br,required:!0,defaultValue:k,children:[(0,I.jsx)(_.Z,{value:"",disabled:!0,children:"Select Data Field Type"}),(0,I.jsx)(_.Z,{value:"numeric",children:"Number"}),(0,I.jsx)(_.Z,{value:"string",children:"Text"}),(0,I.jsx)(_.Z,{value:"boolean",children:"Boolean"}),(0,I.jsx)(_.Z,{value:"date",children:"Date"})]})}),(0,I.jsx)(w.gN,{children:(0,I.jsx)(R.Z,{control:f,name:"display_name",label:"Display Name",placeholder:"Display Name",required:!0,sx:w.ey})}),(0,I.jsx)(w.gN,{children:(0,I.jsx)(R.Z,{control:f,name:"field_name",label:"Field Name",placeholder:"Field Name",required:!0,sx:w.ey})}),(0,I.jsx)(w.gN,{children:(0,I.jsx)(H,{control:f,setValue:b,defaultValue:null!==F&&void 0!==F?F:[],name:"field_options",label:"Options",sx:w.Lx})}),(0,I.jsx)(w.gN,{children:(0,I.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,I.jsxs)("div",{className:"grow",children:[(0,I.jsx)("h5",{className:"field-title",children:"Display Field in Filters & Analytics?"}),(0,I.jsx)("small",{className:"field-subtitle",children:"This field will be displayed in filter option and analytics can be drawn on this field."})]}),(0,I.jsx)(z.Z,{control:f,name:"display_in_filter"})]})}),(0,I.jsx)(w.gN,{children:(0,I.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,I.jsxs)("div",{className:"grow",children:[(0,I.jsx)("h5",{className:"field-title",children:"Use as Lead Title"}),(0,I.jsx)("small",{className:"field-subtitle",children:"If a value is available in the field it will show as the default title instead of the phone number in the Chat section."})]}),(0,I.jsx)(z.Z,{control:f,name:"use_lead_title"})]})})]})}),(0,I.jsx)(g.W9,{children:(0,I.jsx)(g.Kk,{type:"submit",children:"Save"})})]})]})})},U=function(){var e=(0,j.O)(),t=e.isMobile,n=e.isTablet,y=(0,Z.s)().setErrorMessage,k=(0,o.useState)(!0),D=(0,l.Z)(k,2),F=D[0],_=D[1],L=(0,o.useState)(!1),S=(0,l.Z)(L,2),C=S[0],E=S[1],M=(0,r.Zb)(),N=M.leadDataFields,P=M.leadDataFilter,O=M.showLeadDataForm,W=(0,r.IO)(),z=W.setLeadDataFields,R=W.setLeadDataFilter,A=W.setShowLeadDataForm,B=W.setEditLeadDataId,q=(0,o.useCallback)((0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.getLeadDataFields();case 3:if((t=e.sent).success){e.next=6;break}throw Error(t.message);case 6:z(t.payload),_(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),y(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]);return(0,o.useEffect)((function(){q()}),[q]),(0,I.jsxs)(o.Fragment,{children:[(0,I.jsx)(c.ql,{children:(0,I.jsx)("title",{children:"Lead Data Fields"})}),(0,I.jsxs)(w.VY,{children:[t&&(0,I.jsxs)(w.yW,{sx:w.jo,children:[!C&&(0,I.jsx)(u.Z,{component:d.rU,to:"/business-settings",sx:{width:32,height:32},children:(0,I.jsx)(v.I,{})}),!C&&(0,I.jsx)(w.Gh,{children:"Lead Data Fields"}),C&&(0,I.jsx)(w._8,{children:(0,I.jsxs)(w.w2,{children:[(0,I.jsx)(u.Z,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:(0,I.jsx)(b.o,{})}),(0,I.jsx)(w.Mj,{onChange:function(e){var t=e.target.value;return R(t)},placeholder:"Search Field"}),(0,I.jsx)(u.Z,{onClick:function(){R(""),E(!C)},sx:{position:"absolute",right:0,top:0},children:(0,I.jsx)(p.Z,{})})]})}),!C&&N.length>0&&(0,I.jsx)(u.Z,{onClick:function(){return E((function(e){return!e}))},children:(0,I.jsx)(b.o,{})})]}),(0,I.jsx)(w.hm,{sx:w.q7,children:(0,I.jsx)(w.Ip,{sx:w._e,children:!F&&(0,I.jsx)(h.Z,{elevation:0,sx:w.we,children:(0,I.jsx)(f.Z,{sx:w.ny,children:0===N.length?(0,I.jsxs)(w.rV,{children:[(0,I.jsx)(w._D,{children:(0,I.jsx)(g.Kk,{disableIcon:!0,onClick:function(){return A(!0)},sx:{borderRadius:2,boxShadow:"0px 8px 8px rgba(50, 197, 255, 0.1)",fontSize:16,fontWeight:700,height:36,lineHeight:"19px",margin:"auto",textTransform:"capitalize"},children:"New Lead Data Field"})}),(0,I.jsx)(w.iC,{children:(0,I.jsx)(w.y7,{children:"Lead Data Field creates an input field for your user, where the value input by a user can be stored and be later retrieved for different users to draw an analytical comparison or as a future reference."})})]}):(0,I.jsxs)(o.Fragment,{children:[n&&(0,I.jsx)(V,{isSearchActive:C,setSearchActive:E}),n&&(0,I.jsx)(x.Z,{}),N.filter((function(e){var t;return null===e||void 0===e||null===(t=e.display_name)||void 0===t?void 0:t.toLowerCase().includes(null===P||void 0===P?void 0:P.toLowerCase())})).reverse().map((function(e,t){return(0,I.jsx)(T,(0,a.Z)({},e),t)}))]})})})})}),t&&N.length>0&&(0,I.jsx)(w.jB,{children:(0,I.jsx)(g.Kk,{onClick:function(){return A(!0)},variant:"outlined",color:"primary",disableIcon:!0,children:"New Lead Data Field"})})]}),(0,I.jsx)(K,{open:O,closeDrawer:function(){B(void 0),A(!1)}})]})},Q=function(){return(0,I.jsx)(r.ZP,{children:(0,I.jsx)(U,{})})}},3956:function(e,t,n){var r=n(1413),a=n(5987),i=n(1134),s=n(6920),l=n(184),o=["control","defaultValue","rules","name"];t.Z=function(e){var t=e.control,n=(e.defaultValue,e.rules),c=e.name,d=(0,a.Z)(e,o);return(0,l.jsx)(i.Qr,{rules:n,control:t,name:c,render:function(e){var t=e.field;return(0,l.jsx)(s.k,(0,r.Z)((0,r.Z)({},d),{},{checked:t.value,onChange:t.onChange}))}})}},6920:function(e,t,n){n.d(t,{k:function(){return l}});var r=n(1413),a=n(9955),i=n(6934),s=n(184),l=(0,i.ZP)((function(e){return(0,s.jsx)(a.Z,(0,r.Z)({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0},e))}))((function(e){var t=e.theme;return{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:t.palette.primary,opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:t.palette.primary,border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===t.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===t.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}}))}}]);
//# sourceMappingURL=2981.0296554f.chunk.js.map