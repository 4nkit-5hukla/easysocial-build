"use strict";(self.webpackChunkeasysocial=self.webpackChunkeasysocial||[]).push([[3602],{3355:function(e,n,t){t.d(n,{I:function(){return r}});var s=t(184),r=function(){return(0,s.jsx)("svg",{width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"//www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M8 1L2 7L8 13",stroke:"#24272C",strokeWidth:2})})}},6057:function(e,n,t){t.d(n,{F:function(){return u}});var s=t(1413),r=t(5987),o=t(533),i=t(2791),a=t(3504),l=t(184),c=["to","className","children"],u=(0,i.forwardRef)((function(e,n){var t=e.to,i=e.className,u=e.children,d=(0,r.Z)(e,c);return(0,l.jsx)(o.Z,(0,s.Z)((0,s.Z)({component:a.rU,underline:"none",color:"inherit",ref:n,to:t,className:i},d),{},{children:u}))}))},3602:function(e,n,t){t.r(n),t.d(n,{default:function(){return ie}});var s=t(4165),r=t(5861),o=t(9439),i=t(2791),a=t(6907),l=t(3400),c=t(3144),u=t(5671),d=t(6138),x=(0,c.Z)((function e(){(0,u.Z)(this,e)}));x.getWaStatus=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ln)("/platforms/wa/status","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),x.getWaHealthReport=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ln)("/whatsapp-usage/health-report","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),x.getWaMonthlyReport=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ln)("/whatsapp-usage/monthly-utilization","GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),x.downloadWaMonthWiseReport=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ln)("/whatsapp-usage/download-consumed-report","POST",{data:n,responseType:"blob"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x.getRangeUtilization=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n,t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ln)("/whatsapp-usage/utilization?from=".concat(n.getTime(),"&to=").concat(t.getTime()),"GET");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();var h,p=t(3821),f=t(4094),j=t(6057),g=t(773),w=t(3355),Z=t(1413),m=t(7047),v=t(7621),b=t(9504),C=t(7049),k=t(184),F=function(e){var n=e.loadingStatus,t=(0,f.s)().setErrorMessage,a=(0,i.useState)(),l=(0,o.Z)(a,2),c=l[0],u=l[1],d=(0,i.useState)(),h=(0,o.Z)(d,2),p=h[0],j=h[1],w=(0,i.useState)(),F=(0,o.Z)(w,2),M=F[0],E=F[1],R=function(){return c?(0,k.jsxs)(g.pw,{children:[(0,k.jsxs)("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"//www.w3.org/2000/svg",children:[(0,k.jsx)("circle",{cx:"5.5",cy:"5.5",r:.5+c.size,fill:c.statusColor}),(0,k.jsx)("circle",{cx:"5.5",cy:"5.5",r:"5",stroke:"#B9B9B9"})]}),(0,k.jsx)(g.iw,{children:c.name})]}):(0,k.jsx)(g.pw,{children:(0,k.jsx)(m.Z,{width:58})})},y=function(){return M?(0,k.jsxs)(g.pw,{children:["GREEN"===M.health&&(0,k.jsx)("svg",{width:"14",height:"12",viewBox:"0 0 14 12",fill:"none",xmlns:"//www.w3.org/2000/svg",children:(0,k.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.0134 3.10551L4.11073 11.2663L0.767578 6.44966L3.2321 4.73908L4.61622 6.73324L10.9863 0.894043L13.0134 3.10551Z",fill:M.statusColor})}),(0,k.jsx)(g.iw,{children:M.status})]}):(0,k.jsx)(g.pw,{children:(0,k.jsx)(m.Z,{width:55})})},S=function(){return p?(0,k.jsxs)(g.pw,{children:["connected"===p.status?(0,k.jsx)("svg",{width:"14",height:"12",viewBox:"0 0 14 12",fill:"none",xmlns:"//www.w3.org/2000/svg",children:(0,k.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.0134 3.10551L4.11073 11.2663L0.767578 6.44966L3.2321 4.73908L4.61622 6.73324L10.9863 0.894043L13.0134 3.10551Z",fill:p.statusColor})}):(0,k.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"//www.w3.org/2000/svg",children:[(0,k.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.62882 1.98772L2.62882 9.98772L0.371094 8.01221L7.37109 0.012207L9.62882 1.98772Z",fill:p.statusColor}),(0,k.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.371176 1.98772L7.37118 9.98772L9.62891 8.01221L2.62891 0.012207L0.371176 1.98772Z",fill:p.statusColor})]}),(0,k.jsx)(g.iw,{children:"connected"===p.status?"Connected":"Not Connected"})]}):(0,k.jsx)(g.pw,{children:(0,k.jsx)(m.Z,{width:88})})},T=(0,i.useCallback)((0,r.Z)((0,s.Z)().mark((function e(){var n,r,o,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getWaHealthReport();case 3:if((n=e.sent).success){e.next=6;break}throw Error(n.message);case 6:r=n.payload,o=r.account_status,i=r.health,u(C.bo.TIER1),e.t0=i,e.next="GREY"===e.t0?11:"RED"===e.t0?13:"ORANGE"===e.t0?15:"GREEN"===e.t0?17:19;break;case 11:return E(C.YU.GREY),e.abrupt("break",19);case 13:return E(C.YU.RED),e.abrupt("break",19);case 15:return E(C.YU.ORANGE),e.abrupt("break",19);case 17:return E(C.YU.GREEN),e.abrupt("break",19);case 19:e.t1=o,e.next="connected"===e.t1?22:24;break;case 22:return j(C.sw.Connected),e.abrupt("break",26);case 24:return j(C.sw.NotConnected),e.abrupt("break",26);case 26:e.next=31;break;case 28:e.prev=28,e.t2=e.catch(0),t(e.t2.message);case 31:case"end":return e.stop()}}),e,null,[[0,28]])}))),[]);return(0,i.useEffect)((function(){T()}),[T]),(0,k.jsx)(v.Z,{elevation:0,sx:(0,Z.Z)((0,Z.Z)({},g.we),{},{"& .MuiCardContent-root":{pb:"10px !important"}}),children:(0,k.jsxs)(b.Z,{sx:g.ny,children:[(0,k.jsx)(g.fN,{children:n?(0,k.jsx)(m.Z,{width:90}):"Live Status"}),(0,k.jsxs)(g.KT,{sx:{margin:{xs:"-20px -36px 20px",sm:"-20px -20px 0"},padding:{xs:"20px 36px",sm:"20px"}},children:[(0,k.jsxs)(g.bQ,{statusColor:null===c||void 0===c?void 0:c.statusColor,children:[(0,k.jsx)(g.bi,{children:"Messaging Tier"}),(0,k.jsx)(R,{})]}),(0,k.jsxs)(g.bQ,{statusColor:null===M||void 0===M?void 0:M.statusColor,children:[(0,k.jsx)(g.bi,{children:"WhatsApp Health"}),(0,k.jsx)(y,{})]}),(0,k.jsxs)(g.bQ,{statusColor:null===p||void 0===p?void 0:p.statusColor,children:[(0,k.jsx)(g.bi,{children:"Account Status"}),(0,k.jsx)(S,{})]})]}),(0,k.jsx)(g.av,{children:c?c.message:(0,k.jsx)(m.Z,{width:"95%"})})]})})},M=t(2169),E=t(533),R=function(){return(0,k.jsx)(v.Z,{elevation:0,sx:g.we,children:(0,k.jsxs)(b.Z,{sx:(0,Z.Z)((0,Z.Z)({},g.ny),{},{pt:0,alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",rowGap:5.25,textAlign:"center"}),children:[(0,k.jsx)(M.Z,{component:"img",image:"/static/images/svg/inactive.svg",alt:"inactive-wa",sx:{width:"auto",mx:"auto"}}),(0,k.jsxs)(g.tg,{children:[(0,k.jsx)(g.y7,{children:"Your WhatsApp Business API account is not active yet. It usually takes upto 72 business hours for activation."}),(0,k.jsxs)(g.y7,{children:["Please contact us on ",(0,k.jsx)(E.Z,{href:"mailto:support@easysocial.io",underline:"hover",children:"support@easysocial.io"})," in case it is taking longer than expected."]})]})]})})},y=t(9281),S=t(9836),T=t(6890),D=t(5855),Y=t(3994),B=t(3382),L=t(341),I=t(5987),O=t(5574),N=t(5661),A=t(9157),U=t(4280),W=t(7123),H=t(6151),V=t(2426),G=t.n(V),z=t(9783),P=t(6571),_=t(3066),K=["inputProps"],Q=function(e){var n=e.open,t=e.closeDialog,s=e.downloadReport,r=e.downloading,a=e.setDownloading,l=(0,i.useState)(null),c=(0,o.Z)(l,2),u=c[0],d=c[1];return(0,k.jsxs)(O.Z,{open:n,onClose:t,children:[(0,k.jsx)(N.Z,{children:"Select Month"}),(0,k.jsx)(A.Z,{sx:{pt:"20px !important"},children:(0,k.jsx)(P._,{dateAdapter:z.Z,children:(0,k.jsx)(_.M,{views:["year","month"],openTo:"year",label:"Year and Month",minDate:new Date("2021-01-01"),maxDate:new Date,value:u,onChange:function(e){d(e)},renderInput:function(e){var n=e.inputProps,t=(0,I.Z)(e,K);return(0,k.jsx)(U.Z,(0,Z.Z)((0,Z.Z)({},t),{},{helperText:null,inputProps:(0,Z.Z)((0,Z.Z)({},n),u?{value:G()(u).local().format("MMM YYYY")}:{}),autoComplete:"off"}))}})})}),(0,k.jsx)(W.Z,{children:(0,k.jsx)(H.Z,{disabled:r,onClick:function(){a(!0),s(G()(u).local().format("YYYY-MM"))},children:"Download"})})]})},X=function(e){var n=e.loadingStatus,t=(0,f.s)(),a=t.setErrorMessage,l=t.setSuccessMessage,c=(0,i.useState)(!1),u=(0,o.Z)(c,2),d=u[0],h=u[1],p=(0,i.useState)(!1),j=(0,o.Z)(p,2),w=j[0],Z=j[1],C=(0,i.useState)(!0),F=(0,o.Z)(C,2),M=F[0],R=F[1],I=(0,i.useState)([]),O=(0,o.Z)(I,2),N=O[0],A=O[1],U=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){var t,r,o,i,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.downloadWaMonthWiseReport({month:n});case 3:if(!(t=e.sent)){e.next=17;break}o=new Date(n),i=window.URL.createObjectURL(new Blob([t])),(c=document.createElement("a")).href=i,c.setAttribute("download","SessionReport_".concat(o.toLocaleString("en-us",{month:"short"}),"_").concat(o.getFullYear(),".pdf")),document.body.appendChild(c),c.style.display="none",c.click(),null===c||void 0===c||null===(r=c.parentNode)||void 0===r||r.removeChild(c),l("Report Downloaded"),e.next=18;break;case 17:throw new Error("Internal Server Error");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),a(e.t0.message);case 23:return e.prev=23,Z(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[0,20,23,26]])})));return function(n){return e.apply(this,arguments)}}(),W=(0,i.useCallback)((0,r.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getWaMonthlyReport();case 3:if((n=e.sent).success){e.next=6;break}throw Error(n.message);case 6:A(n.payload),R(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]);return(0,i.useEffect)((function(){W()}),[W]),(0,k.jsxs)(i.Fragment,{children:[(0,k.jsx)(v.Z,{elevation:0,sx:g.we,children:(0,k.jsxs)(b.Z,{sx:g.ny,children:[(0,k.jsx)(g.fN,{children:n?(0,k.jsx)(m.Z,{width:214}):"Monthly Utilization Report"}),(0,k.jsx)(y.Z,{children:(0,k.jsxs)(S.Z,{"aria-label":"Monthly Report",className:"reports",sx:{"& .MuiTableCell-root":{borderBottom:"none",color:"#3B414A",fontSize:"14px",lineHeight:"16px"},"& .MuiLink-root":{alignItems:"center",color:"#32C5FF",display:"inline-flex",fontSize:"14px",fontWeight:500,lineHeight:"16px"},"& .MuiTableHead-root":{"& .MuiTableCell-root":{fontWeight:700,opacity:.7,padding:{xs:"0 0 14px",sm:"8px"}}},"& .MuiTableBody-root":{"& .MuiTableRow-root":{"&.MuiTableRow-hover":{"&:hover":{backgroundColor:"transparent","& .MuiTableCell-root":{backgroundColor:"#C4C4C433","&:first-of-type":{borderRadius:"10px 0 0 10px"},"&:last-of-type":{borderRadius:"0 10px 10px 0"}}}},"& .MuiTableCell-root":{borderBottom:"none",fontWeight:400,height:"32px",opacity:.9,"&:not(.loading)":{padding:0},"&:last-of-type":{"& .MuiSkeleton-root":{backgroundColor:"#32C5FF80"}},"& .MuiSkeleton-root":{backgroundColor:"#3B414A",margin:"0 auto"}}}}},children:[(0,k.jsx)(T.Z,{children:(0,k.jsxs)(D.Z,{children:[(0,k.jsx)(Y.Z,{align:"center",children:"Duration"}),(0,k.jsxs)(Y.Z,{align:"center",children:["Customer",(0,k.jsx)("br",{}),"Initiated Sessions"]}),(0,k.jsxs)(Y.Z,{align:"center",children:["Business",(0,k.jsx)("br",{}),"Initiated Sessions"]}),(0,k.jsx)(Y.Z,{align:"center",children:"Report"})]})}),M?(0,k.jsxs)(B.Z,{children:[(0,k.jsxs)(D.Z,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},hover:!0,children:[(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:60})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:24})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:24})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:74})})]}),(0,k.jsxs)(D.Z,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},hover:!0,children:[(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:60})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:24})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:24})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:74})})]}),(0,k.jsxs)(D.Z,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},hover:!0,children:[(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:60})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:24})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:24})}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsx)(m.Z,{width:74})})]})]}):N&&0===N.length?(0,k.jsx)(B.Z,{children:(0,k.jsx)(D.Z,{children:(0,k.jsx)(Y.Z,{colSpan:4,align:"center",children:"No Reports Available"})})}):(0,k.jsx)(B.Z,{children:N&&N.map((function(e,n){return(0,k.jsxs)(D.Z,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},hover:!0,children:[(0,k.jsx)(Y.Z,{align:"center",children:(0,L.E)(e.month)}),(0,k.jsx)(Y.Z,{align:"center",children:e.cis}),(0,k.jsx)(Y.Z,{align:"center",children:e.bis}),(0,k.jsx)(Y.Z,{align:"center",children:(0,k.jsxs)(E.Z,{component:"button",underline:"none",className:"report-download",onClick:function(){return U(e.month)},children:[(0,k.jsx)("img",{src:"/static/images/svg/download.svg",alt:"download"}),(0,k.jsx)("span",{className:"ms-1",children:"Download"})]})})]},n)}))})]})}),(0,k.jsx)(g.W9,{sx:{my:2.5},children:M?(0,k.jsx)(m.Z,{width:180,sx:{backgroundColor:"#32C5FF80"}}):(0,k.jsx)(E.Z,{component:"button",underline:"none",sx:{color:"#32C5FF",fontSize:16,fontWeight:600,lineHeight:1.1875},onClick:function(){return Z(!0)},children:"Download older reports"})})]})}),(0,k.jsx)(Q,{open:w,closeDialog:function(){Z(!1)},downloading:d,setDownloading:h,downloadReport:U})]})},q=function(){return(0,k.jsxs)("svg",{className:"icon",width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"//www.w3.org/2000/svg",children:[(0,k.jsx)("circle",{cx:"11.5",cy:"11.5",r:"11.5",fill:"#B0E9FF"}),(0,k.jsx)("path",{d:"M11.6525 11.5217C12.9011 11.5217 13.9133 10.5095 13.9133 9.26087C13.9133 8.01223 12.9011 7 11.6525 7C10.4038 7 9.3916 8.01223 9.3916 9.26087C9.3916 10.5095 10.4038 11.5217 11.6525 11.5217Z",stroke:"#FFFFFF",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,k.jsx)("path",{d:"M8 14.9997C8 13.2606 9.3913 11.5215 11.6522 11.5215C13.913 11.5215 15.3043 13.2606 15.3043 14.9997",stroke:"#FFFFFF",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]})},J=function(){return(0,k.jsxs)("svg",{className:"icon",width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"//www.w3.org/2000/svg",children:[(0,k.jsx)("circle",{cx:"11.5",cy:"11.5",r:"11.5",fill:"#B0E9FF"}),(0,k.jsx)("path",{d:"M10.3076 10.0218C10.5826 10.0218 10.8056 9.79887 10.8056 9.52382V8.89302C10.8056 8.61801 10.5826 8.39502 10.3076 8.39502C10.0325 8.39502 9.80957 8.61798 9.80957 8.89302V9.52382C9.80957 9.79887 10.0326 10.0218 10.3076 10.0218Z",fill:"#FFFFFF"}),(0,k.jsx)("path",{d:"M12.167 10.0218C12.442 10.0218 12.665 9.79887 12.665 9.52382V8.89302C12.665 8.61801 12.442 8.39502 12.167 8.39502C11.8919 8.39502 11.6689 8.61798 11.6689 8.89302V9.52382C11.6689 9.79887 11.8919 10.0218 12.167 10.0218Z",fill:"#FFFFFF"}),(0,k.jsx)("path",{d:"M10.3076 12.8768C10.5826 12.8768 10.8056 12.6538 10.8056 12.3788V11.748C10.8056 11.473 10.5826 11.25 10.3076 11.25C10.0325 11.25 9.80957 11.473 9.80957 11.748V12.3788C9.80957 12.6538 10.0326 12.8768 10.3076 12.8768Z",fill:"#FFFFFF"}),(0,k.jsx)("path",{d:"M12.167 12.8768C12.442 12.8768 12.665 12.6538 12.665 12.3788V11.748C12.665 11.473 12.442 11.25 12.167 11.25C11.8919 11.25 11.6689 11.473 11.6689 11.748V12.3788C11.6689 12.6538 11.8919 12.8768 12.167 12.8768Z",fill:"#FFFFFF"}),(0,k.jsx)("path",{d:"M15.7476 16.0855C13.6731 16.0855 17.2129 16.0855 14.3495 16.0855V6.49801C14.3495 6.22299 14.1265 6 13.8515 6H8.62277C8.34775 6 8.12476 6.22296 8.12476 6.49801V16.0855C4.71899 16.0855 9.89447 16.0855 6.49801 16.0855C6.22296 16.0855 6 16.3085 6 16.5835C6 16.8586 6.22296 17.0815 6.49801 17.0815H8.6228H13.8515H15.7476C16.0226 17.0815 16.2456 16.8586 16.2456 16.5835C16.2456 16.3085 16.0226 16.0855 15.7476 16.0855ZM11.7218 16.0855H10.8024V15.1661H11.7218V16.0855ZM13.3535 16.0855H12.7178V14.6681C12.7178 14.3931 12.4948 14.1701 12.2198 14.1701H10.3044C10.0294 14.1701 9.80638 14.3931 9.80638 14.6681V16.0855H9.1208V6.99601H13.3535L13.3535 16.0855Z",fill:"#FFFFFF"})]})},$=function(){return(0,k.jsxs)("svg",{className:"icon",width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"//www.w3.org/2000/svg",children:[(0,k.jsx)("circle",{cx:"11.5",cy:"11.5",r:"11.5",fill:"#B0E9FF"}),(0,k.jsx)("path",{d:"M10.3111 10.3669L10.3117 8.48321C10.3117 8.28781 10.1941 8.11161 10.0136 8.03682C9.83313 7.96204 9.62527 8.00326 9.48703 8.1414L7.14159 10.4856C6.95289 10.6743 6.95279 10.9801 7.14139 11.1688L9.48562 13.5143C9.57802 13.6068 9.70166 13.656 9.8274 13.656C9.88962 13.656 9.95233 13.6439 10.012 13.6192C10.1926 13.5445 10.3103 13.3684 10.3104 13.173L10.3109 11.3382C12.4041 11.5783 14.0352 13.3606 14.0352 15.517C14.0352 15.7839 14.2515 16.0002 14.5183 16.0002C14.7851 16.0002 15.0014 15.7839 15.0014 15.517C15.0014 12.8275 12.938 10.6111 10.3111 10.3669Z",fill:"#FFFFFF"})]})};!function(e){e.TODAY="TODAY",e.CUSTOM="CUSTOM"}(h||(h={}));var ee=t(4554),ne=t(6276),te=t(7131),se=function(e){var n=e.open,t=e.closeDialog,s=e.range,r=e.setRange,a=e.wrapper,l=void 0===a?"mobile":a;return(0,k.jsx)(O.Z,{open:n,onClose:function(e,n){return t(n)},maxWidth:"md",children:(0,k.jsx)(A.Z,{sx:{"& .MuiPickerStaticWrapper-content":{"& > div":{"& > div:first-of-type":{display:"none"}}}},children:(0,k.jsx)(P._,{dateAdapter:ne.H,children:(0,k.jsx)(te.u,{displayStaticWrapperAs:l,value:s,onChange:function(e){r(e);var n=(0,o.Z)(e,2),s=n[0],i=n[1];null!==s&&null!==i&&t("closeButtonClick")},maxDate:new Date,minDate:new Date("2021-01-01"),renderInput:function(e,n){return(0,k.jsxs)(i.Fragment,{children:[(0,k.jsx)(U.Z,(0,Z.Z)({},e)),(0,k.jsx)(ee.Z,{sx:{mx:2},children:" to "}),(0,k.jsx)(U.Z,(0,Z.Z)({},n))]})}})})})})},re=function(e){var n=e.loadingStatus,t=(0,p.O)().isMobile,a=(0,f.s)().setErrorMessage,l=h.TODAY,c=h.CUSTOM,u=(0,i.useState)(!0),d=(0,o.Z)(u,2),j=d[0],w=d[1],Z=(0,i.useState)(0),C=(0,o.Z)(Z,2),F=C[0],M=C[1],R=(0,i.useState)(0),y=(0,o.Z)(R,2),S=y[0],T=y[1],D=(0,i.useState)(0),Y=(0,o.Z)(D,2),B=Y[0],L=Y[1],I=(0,i.useState)(l),O=(0,o.Z)(I,2),N=O[0],A=O[1],U=(0,i.useState)(!1),W=(0,o.Z)(U,2),H=W[0],V=W[1],z=(0,i.useState)([null,null]),P=(0,o.Z)(z,2),_=P[0],K=P[1],Q=(0,o.Z)(_,2),X=Q[0],ee=Q[1],ne=(0,i.useCallback)((0,r.Z)((0,s.Z)().mark((function e(){var n,t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=N===c&&X?X:N===l?new Date:null,t=N===c&&ee?ee:N===l?new Date:null,n&&n.setHours(0,0,0,0),t&&t.setHours(23,59,59,999),!n||!t){e.next=15;break}return w(!0),e.next=9,x.getRangeUtilization(n,t);case 9:if((r=e.sent).success){e.next=12;break}throw Error(r.message);case 12:M(r.payload.cis),T(r.payload.bis),L(r.payload.replyRate);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),a(e.t0.message);case 20:return e.prev=20,w(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,17,20,23]])}))),[N,X,ee]);return(0,i.useEffect)((function(){ne()}),[ne]),(0,k.jsxs)(i.Fragment,{children:[(0,k.jsx)(v.Z,{elevation:0,sx:g.we,children:(0,k.jsxs)(b.Z,{sx:g.ny,children:[(0,k.jsxs)(g.Ol,{sx:{mb:{xs:1.875,sm:3.75}},children:[(0,k.jsxs)(g.mn,{sx:{alignItems:"baseline",display:"flex",flexDirection:{xs:"column",lg:"row"},gap:.625},children:[(0,k.jsx)(g.fN,{sx:{mb:0},children:n?(0,k.jsx)(m.Z,{width:90}):"Utilization"}),"TODAY"===N&&(0,k.jsx)(g.UW,{children:G()().format("Do MMM YYYY")}),"CUSTOM"===N&&X&&ee&&(0,k.jsxs)(g.UW,{children:[G()(X).format("Do MMM YYYY")," to ",G()(ee).format("Do MMM YYYY")]})]}),(0,k.jsxs)(g.aV,{sx:{display:"flex",alignItems:"center",gap:1.75},children:[(0,k.jsx)(E.Z,{component:"button",underline:"none",onClick:function(){A(l),K([null,null])},sx:{color:"#82858B",fontSize:12,fontWeight:500,lineHeight:"12px",borderBottom:N===l?"2px solid #12B0EE":"2px solid transparent"},children:"TODAY"}),(0,k.jsx)(E.Z,{className:"change-period ".concat("CUSTOM"===N?"active":""),component:"button",underline:"none",onClick:function(){return K([null,null]),V(!0),void setTimeout((function(){console.clear()}),100)},sx:{color:"#82858B",fontSize:12,fontWeight:500,lineHeight:"12px",borderBottom:N===c?"2px solid #12B0EE":"2px solid transparent"},children:"CUSTOM"})]})]}),(0,k.jsxs)(g.nv,{sx:{py:{xs:0,sm:2.5},px:{xs:2.5},mt:{lg:-2.5},mx:{lg:-2.5},flexDirection:{xs:"column",lg:"row"}},children:[(0,k.jsxs)(g.xz,{children:[(0,k.jsxs)(g.fI,{children:[(0,k.jsx)(g.Vo,{children:"Customer Initiated Sessions"}),(0,k.jsx)(q,{})]}),(0,k.jsxs)(g.be,{children:[(0,k.jsx)(g.Xi,{children:j?(0,k.jsx)(m.Z,{}):F}),(0,k.jsx)(g.kh,{children:j?(0,k.jsx)(m.Z,{}):"Sessions"})]})]}),(0,k.jsxs)(g.xz,{children:[(0,k.jsxs)(g.fI,{children:[(0,k.jsx)(g.Vo,{children:"Business Initiated Sessions"}),(0,k.jsx)(J,{})]}),(0,k.jsxs)(g.be,{children:[(0,k.jsx)(g.Xi,{children:j?(0,k.jsx)(m.Z,{}):S}),(0,k.jsx)(g.kh,{children:j?(0,k.jsx)(m.Z,{}):"Sessions"})]})]}),(0,k.jsxs)(g.xz,{children:[(0,k.jsxs)(g.fI,{children:[(0,k.jsx)(g.Vo,{children:"Business Initiated Sessions - Reply %"}),(0,k.jsx)($,{})]}),(0,k.jsx)(g.be,{children:(0,k.jsx)(g.Xi,{children:j?(0,k.jsx)(m.Z,{}):B})})]})]})]})}),(0,k.jsx)(se,{open:H,closeDialog:function(e){A("escapeKeyDown"===e||"backdropClick"===e?l:c),V(!1)},range:_,setRange:K,wrapper:t?"mobile":"desktop"})]})},oe=function(){var e=(0,p.O)().isMobile,n=(0,f.s)().setErrorMessage,t=(0,i.useState)(!0),c=(0,o.Z)(t,2),u=c[0],d=c[1],h=(0,i.useState)(!1),Z=(0,o.Z)(h,2),m=Z[0],v=Z[1],b=(0,i.useCallback)((0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getWaStatus();case 3:if((t=e.sent).success){e.next=6;break}throw Error(t.message);case 6:v(t.success),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0.message);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[]);return(0,i.useEffect)((function(){b()}),[b]),(0,k.jsxs)(i.Fragment,{children:[(0,k.jsx)(a.ql,{children:(0,k.jsx)("title",{children:"Usage and Reports"})}),(0,k.jsxs)(g.VY,{children:[e&&(0,k.jsxs)(g.yW,{children:[(0,k.jsx)(l.Z,{component:j.F,to:"/business-settings",sx:{width:32,height:32},children:(0,k.jsx)(w.I,{})}),(0,k.jsx)(g.Gh,{children:"Usage and Reports"})]}),(0,k.jsx)(g.hm,{children:(0,k.jsxs)(g.vs,{children:[!m&&!u&&(0,k.jsx)(R,{}),m&&(0,k.jsx)(F,{loadingStatus:u}),m&&(0,k.jsx)(re,{loadingStatus:u}),m&&(0,k.jsx)(X,{loadingStatus:u})]})})]})]})},ie=function(){return(0,k.jsx)(oe,{})}},7049:function(e,n,t){t.d(n,{YU:function(){return c},bo:function(){return l},rU:function(){return s},sB:function(){return o},sw:function(){return u}});var s,r,o,i=t(3144),a=t(5671);!function(e){e.HEADER="HEADER",e.BODY="BODY",e.FOOTER="FOOTER",e.BUTTONS="BUTTONS"}(s||(s={})),function(e){e.APPROVED="APPROVED",e.DRAFT="DRAFT",e.SUBMITTED="SUBMITTED"}(r||(r={})),function(e){e.APPROVED="#25ba00",e.DRAFT="#ffad33",e.SUBMITTED="#04c4ee"}(o||(o={}));var l=(0,i.Z)((function e(n,t,s,r){(0,a.Z)(this,e),this.name=n,this.size=t,this.statusColor=s,this.message=r}));l.TIER1=new l("TIER 1",1,"#FF8719","TIER 1 allows 1000 outgoing messages to be sent in 24hrs. To reach next tier send 1000 messages for consecutive 3 days."),l.TIER2=new l("TIER 2",2,"#32C5FF","TIER 1 allows 1000 outgoing messages to be sent in 24hrs. To reach next tier send 1000 messages for consecutive 3 days."),l.TIER3=new l("TIER 3",3,"#00CD39","TIER 1 allows 1000 outgoing messages to be sent in 24hrs. To reach next tier send 1000 messages for consecutive 3 days.");var c=(0,i.Z)((function e(n,t,s){(0,a.Z)(this,e),this.status=n,this.statusColor=t,this.health=s}));c.GREY=new c("Unable to Connect","#82868B","GREY"),c.RED=new c("Poor","#E02020","RED"),c.ORANGE=new c("Moderate","#FF8719","ORANGE"),c.GREEN=new c("Good","#5ECF70","GREEN");var u=(0,i.Z)((function e(n,t){(0,a.Z)(this,e),this.status=n,this.statusColor=t}));u.NotConnected=new u("not-connected","#E02020"),u.Connected=new u("connected","#5ECF70")},341:function(e,n,t){t.d(n,{E:function(){return l},MF:function(){return a},bw:function(){return c},mr:function(){return o},pv:function(){return u},qt:function(){return i}});var s=t(2426),r=t.n(s);function o(){for(var e=[],n=0;n<3;n++)e.push(Math.floor(255*Math.random()));return"rgb("+e.join(",")+", 0.5)"}function i(e){e=Number(e);var n=Math.floor(e/3600),t=Math.floor(e%3600/60),s=Math.floor(e%3600%60);return(n>0?n+(1===n?" hour ":" hours "):"")+(t>0?t+(1===t?" minute ":" minutes "):"")+(s>0?s+(1===s?" second":" seconds"):"")}var a=function(e){return"backdropClick"===e||"escapeKeyDown"===e},l=function(e){return r()(e).format("MMM YYYY")},c=function(e){var n=[];return e.includes("facebook")&&(n=e.filter((function(e){return"facebook"!==e}))),e.includes("instagram")&&(n=n.filter((function(e){return"instagram"!==e}))),(e.includes("facebook")||e.includes("instagram"))&&n.unshift("facebook and instagram"),e.includes("facebook and instagram")&&!n.includes("facebook and instagram")&&n.push("facebook and instagram"),e.includes("twitter")&&!n.includes("twitter")&&n.push("twitter"),e.includes("linkedin")&&!n.includes("linkedin")&&n.push("linkedin"),n},u=function(e){return{children:"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0])}}}}]);
//# sourceMappingURL=3602.f7cd3d7e.chunk.js.map