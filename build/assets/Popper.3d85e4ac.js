import{r as H,c as rt,j as be,_,n as yt,e as bt}from"./index.ca4653e7.js";import{g as wt,a as xt,c as Ot,s as Pt}from"./styled.0e1c85d3.js";import{o as Et}from"./SnackProvider.08a64b2a.js";import{P as Rt,u as At}from"./Modal.658ef5c2.js";import{u as Xe}from"./ButtonBase.4773acc8.js";import{u as Ye}from"./useEnhancedEffect.b8f5feb9.js";var T="top",M="bottom",L="right",$="left",Ce="auto",le=[T,M,L,$],ee="start",fe="end",Dt="clippingParents",ot="viewport",ie="popper",jt="reference",ze=le.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+fe])},[]),nt=[].concat(le,[Ce]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+fe])},[]),Ct="beforeRead",Bt="read",Tt="afterRead",$t="beforeMain",St="main",kt="afterMain",Mt="beforeWrite",Lt="write",Wt="afterWrite",Ht=[Ct,Bt,Tt,$t,St,kt,Mt,Lt,Wt];function V(e){return e?(e.nodeName||"").toLowerCase():null}function W(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=W(e).Element;return e instanceof t||e instanceof Element}function k(e){var t=W(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=W(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ut(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!k(a)||!V(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(f){var s=n[f];s===!1?a.removeAttribute(f):a.setAttribute(f,s===!0?"":s)}))})}function Vt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},f=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=f.reduce(function(i,c){return i[c]="",i},{});!k(n)||!V(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const Nt={name:"applyStyles",enabled:!0,phase:"write",fn:Ut,effect:Vt,requires:["computeStyles"]};function U(e){return e.split("-")[0]}var K=Math.max,we=Math.min,te=Math.round;function Ae(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function at(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&k(e)&&(n=e.offsetWidth>0&&te(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&te(o.height)/e.offsetHeight||1);var f=Q(e)?W(e):window,s=f.visualViewport,i=!at()&&r,c=(o.left+(i&&s?s.offsetLeft:0))/n,p=(o.top+(i&&s?s.offsetTop:0))/a,m=o.width/n,b=o.height/a;return{width:m,height:b,top:p,right:c+m,bottom:p+b,left:c,x:c,y:p}}function Te(e){var t=re(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function it(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function q(e){return W(e).getComputedStyle(e)}function Ft(e){return["table","td","th"].indexOf(V(e))>=0}function Y(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function xe(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||Y(e)}function Ge(e){return!k(e)||q(e).position==="fixed"?null:e.offsetParent}function qt(e){var t=/firefox/i.test(Ae()),r=/Trident/i.test(Ae());if(r&&k(e)){var o=q(e);if(o.position==="fixed")return null}var n=xe(e);for(Be(n)&&(n=n.host);k(n)&&["html","body"].indexOf(V(n))<0;){var a=q(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function ue(e){for(var t=W(e),r=Ge(e);r&&Ft(r)&&q(r).position==="static";)r=Ge(r);return r&&(V(r)==="html"||V(r)==="body"&&q(r).position==="static")?t:r||qt(e)||t}function $e(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function se(e,t,r){return K(e,we(t,r))}function It(e,t,r){var o=se(e,t,r);return o>r?r:o}function st(){return{top:0,right:0,bottom:0,left:0}}function pt(e){return Object.assign({},st(),e)}function ft(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Xt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,pt(typeof t!="number"?t:ft(t,le))};function Yt(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,f=r.modifiersData.popperOffsets,s=U(r.placement),i=$e(s),c=[$,L].indexOf(s)>=0,p=c?"height":"width";if(!(!a||!f)){var m=Xt(n.padding,r),b=Te(a),l=i==="y"?T:$,w=i==="y"?M:L,u=r.rects.reference[p]+r.rects.reference[i]-f[i]-r.rects.popper[p],v=f[i]-r.rects.reference[i],g=ue(a),x=g?i==="y"?g.clientHeight||0:g.clientWidth||0:0,O=u/2-v/2,d=m[l],h=x-b[p]-m[w],y=x/2-b[p]/2+O,P=se(d,y,h),E=i;r.modifiersData[o]=(t={},t[E]=P,t.centerOffset=P-y,t)}}function zt(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!it(t.elements.popper,n)||(t.elements.arrow=n))}const Gt={name:"arrow",enabled:!0,phase:"main",fn:Yt,effect:zt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var Jt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Kt(e){var t=e.x,r=e.y,o=window,n=o.devicePixelRatio||1;return{x:te(t*n)/n||0,y:te(r*n)/n||0}}function Je(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,f=e.offsets,s=e.position,i=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,m=e.isFixed,b=f.x,l=b===void 0?0:b,w=f.y,u=w===void 0?0:w,v=typeof p=="function"?p({x:l,y:u}):{x:l,y:u};l=v.x,u=v.y;var g=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),O=$,d=T,h=window;if(c){var y=ue(r),P="clientHeight",E="clientWidth";if(y===W(r)&&(y=Y(r),q(y).position!=="static"&&s==="absolute"&&(P="scrollHeight",E="scrollWidth")),y=y,n===T||(n===$||n===L)&&a===fe){d=M;var A=m&&y===h&&h.visualViewport?h.visualViewport.height:y[P];u-=A-o.height,u*=i?1:-1}if(n===$||(n===T||n===M)&&a===fe){O=L;var R=m&&y===h&&h.visualViewport?h.visualViewport.width:y[E];l-=R-o.width,l*=i?1:-1}}var D=Object.assign({position:s},c&&Jt),S=p===!0?Kt({x:l,y:u}):{x:l,y:u};if(l=S.x,u=S.y,i){var C;return Object.assign({},D,(C={},C[d]=x?"0":"",C[O]=g?"0":"",C.transform=(h.devicePixelRatio||1)<=1?"translate("+l+"px, "+u+"px)":"translate3d("+l+"px, "+u+"px, 0)",C))}return Object.assign({},D,(t={},t[d]=x?u+"px":"",t[O]=g?l+"px":"",t.transform="",t))}function Qt(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,f=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,c={placement:U(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Je(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Je(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Qt,data:{}};var ge={passive:!0};function _t(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,f=o.resize,s=f===void 0?!0:f,i=W(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(p){p.addEventListener("scroll",r.update,ge)}),s&&i.addEventListener("resize",r.update,ge),function(){a&&c.forEach(function(p){p.removeEventListener("scroll",r.update,ge)}),s&&i.removeEventListener("resize",r.update,ge)}}const er={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:_t,data:{}};var tr={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(e){return e.replace(/left|right|bottom|top/g,function(t){return tr[t]})}var rr={start:"end",end:"start"};function Ke(e){return e.replace(/start|end/g,function(t){return rr[t]})}function Se(e){var t=W(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function ke(e){return re(Y(e)).left+Se(e).scrollLeft}function or(e,t){var r=W(e),o=Y(e),n=r.visualViewport,a=o.clientWidth,f=o.clientHeight,s=0,i=0;if(n){a=n.width,f=n.height;var c=at();(c||!c&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:f,x:s+ke(e),y:i}}function nr(e){var t,r=Y(e),o=Se(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),f=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+ke(e),i=-o.scrollTop;return q(n||r).direction==="rtl"&&(s+=K(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:f,x:s,y:i}}function Me(e){var t=q(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function ct(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:k(e)&&Me(e)?e:ct(xe(e))}function pe(e,t){var r;t===void 0&&(t=[]);var o=ct(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=W(o),f=n?[a].concat(a.visualViewport||[],Me(o)?o:[]):o,s=t.concat(f);return n?s:s.concat(pe(xe(f)))}function De(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ar(e,t){var r=re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Qe(e,t,r){return t===ot?De(or(e,r)):Q(t)?ar(t,r):De(nr(Y(e)))}function ir(e){var t=pe(xe(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,o=r&&k(e)?ue(e):e;return Q(o)?t.filter(function(n){return Q(n)&&it(n,o)&&V(n)!=="body"}):[]}function sr(e,t,r,o){var n=t==="clippingParents"?ir(e):[].concat(t),a=[].concat(n,[r]),f=a[0],s=a.reduce(function(i,c){var p=Qe(e,c,o);return i.top=K(p.top,i.top),i.right=we(p.right,i.right),i.bottom=we(p.bottom,i.bottom),i.left=K(p.left,i.left),i},Qe(e,f,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function lt(e){var t=e.reference,r=e.element,o=e.placement,n=o?U(o):null,a=o?oe(o):null,f=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(n){case T:i={x:f,y:t.y-r.height};break;case M:i={x:f,y:t.y+t.height};break;case L:i={x:t.x+t.width,y:s};break;case $:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var c=n?$e(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(a){case ee:i[c]=i[c]-(t[p]/2-r[p]/2);break;case fe:i[c]=i[c]+(t[p]/2-r[p]/2);break}}return i}function ce(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,f=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?Dt:s,c=r.rootBoundary,p=c===void 0?ot:c,m=r.elementContext,b=m===void 0?ie:m,l=r.altBoundary,w=l===void 0?!1:l,u=r.padding,v=u===void 0?0:u,g=pt(typeof v!="number"?v:ft(v,le)),x=b===ie?jt:ie,O=e.rects.popper,d=e.elements[w?x:b],h=sr(Q(d)?d:d.contextElement||Y(e.elements.popper),i,p,f),y=re(e.elements.reference),P=lt({reference:y,element:O,strategy:"absolute",placement:n}),E=De(Object.assign({},O,P)),A=b===ie?E:y,R={top:h.top-A.top+g.top,bottom:A.bottom-h.bottom+g.bottom,left:h.left-A.left+g.left,right:A.right-h.right+g.right},D=e.modifiersData.offset;if(b===ie&&D){var S=D[n];Object.keys(R).forEach(function(C){var N=[L,M].indexOf(C)>=0?1:-1,F=[T,M].indexOf(C)>=0?"y":"x";R[C]+=S[F]*N})}return R}function pr(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,f=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?nt:i,p=oe(o),m=p?s?ze:ze.filter(function(w){return oe(w)===p}):le,b=m.filter(function(w){return c.indexOf(w)>=0});b.length===0&&(b=m);var l=b.reduce(function(w,u){return w[u]=ce(e,{placement:u,boundary:n,rootBoundary:a,padding:f})[U(u)],w},{});return Object.keys(l).sort(function(w,u){return l[w]-l[u]})}function fr(e){if(U(e)===Ce)return[];var t=ye(e);return[Ke(e),t,Ke(t)]}function cr(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,f=r.altAxis,s=f===void 0?!0:f,i=r.fallbackPlacements,c=r.padding,p=r.boundary,m=r.rootBoundary,b=r.altBoundary,l=r.flipVariations,w=l===void 0?!0:l,u=r.allowedAutoPlacements,v=t.options.placement,g=U(v),x=g===v,O=i||(x||!w?[ye(v)]:fr(v)),d=[v].concat(O).reduce(function(Z,X){return Z.concat(U(X)===Ce?pr(t,{placement:X,boundary:p,rootBoundary:m,padding:c,flipVariations:w,allowedAutoPlacements:u}):X)},[]),h=t.rects.reference,y=t.rects.popper,P=new Map,E=!0,A=d[0],R=0;R<d.length;R++){var D=d[R],S=U(D),C=oe(D)===ee,N=[T,M].indexOf(S)>=0,F=N?"width":"height",j=ce(t,{placement:D,boundary:p,rootBoundary:m,altBoundary:b,padding:c}),B=N?C?L:$:C?M:T;h[F]>y[F]&&(B=ye(B));var I=ye(B),z=[];if(a&&z.push(j[S]<=0),s&&z.push(j[B]<=0,j[I]<=0),z.every(function(Z){return Z})){A=D,E=!1;break}P.set(D,z)}if(E)for(var de=w?3:1,Oe=function(X){var ae=d.find(function(me){var G=P.get(me);if(G)return G.slice(0,X).every(function(Pe){return Pe})});if(ae)return A=ae,"break"},ne=de;ne>0;ne--){var ve=Oe(ne);if(ve==="break")break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}}const lr={name:"flip",enabled:!0,phase:"main",fn:cr,requiresIfExists:["offset"],data:{_skip:!1}};function Ze(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function _e(e){return[T,L,M,$].some(function(t){return e[t]>=0})}function ur(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,f=ce(t,{elementContext:"reference"}),s=ce(t,{altBoundary:!0}),i=Ze(f,o),c=Ze(s,n,a),p=_e(i),m=_e(c);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}const dr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ur};function vr(e,t,r){var o=U(e),n=[$,T].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=a[0],s=a[1];return f=f||0,s=(s||0)*n,[$,L].indexOf(o)>=0?{x:s,y:f}:{x:f,y:s}}function mr(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,f=nt.reduce(function(p,m){return p[m]=vr(m,t.rects,a),p},{}),s=f[t.placement],i=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=f}const hr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:mr};function gr(e){var t=e.state,r=e.name;t.modifiersData[r]=lt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const yr={name:"popperOffsets",enabled:!0,phase:"read",fn:gr,data:{}};function br(e){return e==="x"?"y":"x"}function wr(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,f=r.altAxis,s=f===void 0?!1:f,i=r.boundary,c=r.rootBoundary,p=r.altBoundary,m=r.padding,b=r.tether,l=b===void 0?!0:b,w=r.tetherOffset,u=w===void 0?0:w,v=ce(t,{boundary:i,rootBoundary:c,padding:m,altBoundary:p}),g=U(t.placement),x=oe(t.placement),O=!x,d=$e(g),h=br(d),y=t.modifiersData.popperOffsets,P=t.rects.reference,E=t.rects.popper,A=typeof u=="function"?u(Object.assign({},t.rects,{placement:t.placement})):u,R=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(!!y){if(a){var C,N=d==="y"?T:$,F=d==="y"?M:L,j=d==="y"?"height":"width",B=y[d],I=B+v[N],z=B-v[F],de=l?-E[j]/2:0,Oe=x===ee?P[j]:E[j],ne=x===ee?-E[j]:-P[j],ve=t.elements.arrow,Z=l&&ve?Te(ve):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:st(),ae=X[N],me=X[F],G=se(0,P[j],Z[j]),Pe=O?P[j]/2-de-G-ae-R.mainAxis:Oe-G-ae-R.mainAxis,ut=O?-P[j]/2+de+G+me+R.mainAxis:ne+G+me+R.mainAxis,Ee=t.elements.arrow&&ue(t.elements.arrow),dt=Ee?d==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,Le=(C=D==null?void 0:D[d])!=null?C:0,vt=B+Pe-Le-dt,mt=B+ut-Le,We=se(l?we(I,vt):I,B,l?K(z,mt):z);y[d]=We,S[d]=We-B}if(s){var He,ht=d==="x"?T:$,gt=d==="x"?M:L,J=y[h],he=h==="y"?"height":"width",Ue=J+v[ht],Ve=J-v[gt],Re=[T,$].indexOf(g)!==-1,Ne=(He=D==null?void 0:D[h])!=null?He:0,Fe=Re?Ue:J-P[he]-E[he]-Ne+R.altAxis,qe=Re?J+P[he]+E[he]-Ne-R.altAxis:Ve,Ie=l&&Re?It(Fe,J,qe):se(l?Fe:Ue,J,l?qe:Ve);y[h]=Ie,S[h]=Ie-J}t.modifiersData[o]=S}}const xr={name:"preventOverflow",enabled:!0,phase:"main",fn:wr,requiresIfExists:["offset"]};function Or(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Pr(e){return e===W(e)||!k(e)?Se(e):Or(e)}function Er(e){var t=e.getBoundingClientRect(),r=te(t.width)/e.offsetWidth||1,o=te(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Rr(e,t,r){r===void 0&&(r=!1);var o=k(t),n=k(t)&&Er(t),a=Y(t),f=re(e,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((V(t)!=="body"||Me(a))&&(s=Pr(t)),k(t)?(i=re(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=ke(a))),{x:f.left+s.scrollLeft-i.x,y:f.top+s.scrollTop-i.y,width:f.width,height:f.height}}function Ar(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&n(i)}}),o.push(a)}return e.forEach(function(a){r.has(a.name)||n(a)}),o}function Dr(e){var t=Ar(e);return Ht.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function jr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Cr(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var et={placement:"bottom",modifiers:[],strategy:"absolute"};function tt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Br(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?et:n;return function(s,i,c){c===void 0&&(c=a);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},et,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},m=[],b=!1,l={state:p,setOptions:function(g){var x=typeof g=="function"?g(p.options):g;u(),p.options=Object.assign({},a,p.options,x),p.scrollParents={reference:Q(s)?pe(s):s.contextElement?pe(s.contextElement):[],popper:pe(i)};var O=Dr(Cr([].concat(o,p.options.modifiers)));return p.orderedModifiers=O.filter(function(d){return d.enabled}),w(),l.update()},forceUpdate:function(){if(!b){var g=p.elements,x=g.reference,O=g.popper;if(!!tt(x,O)){p.rects={reference:Rr(x,ue(O),p.options.strategy==="fixed"),popper:Te(O)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(R){return p.modifiersData[R.name]=Object.assign({},R.data)});for(var d=0;d<p.orderedModifiers.length;d++){if(p.reset===!0){p.reset=!1,d=-1;continue}var h=p.orderedModifiers[d],y=h.fn,P=h.options,E=P===void 0?{}:P,A=h.name;typeof y=="function"&&(p=y({state:p,options:E,name:A,instance:l})||p)}}}},update:jr(function(){return new Promise(function(v){l.forceUpdate(),v(p)})}),destroy:function(){u(),b=!0}};if(!tt(s,i))return l;l.setOptions(c).then(function(v){!b&&c.onFirstUpdate&&c.onFirstUpdate(v)});function w(){p.orderedModifiers.forEach(function(v){var g=v.name,x=v.options,O=x===void 0?{}:x,d=v.effect;if(typeof d=="function"){var h=d({state:p,name:g,instance:l,options:O}),y=function(){};m.push(h||y)}})}function u(){m.forEach(function(v){return v()}),m=[]}return l}}var Tr=[er,yr,Zt,Nt,hr,lr,xr,Gt,dr],$r=Br({defaultModifiers:Tr});function Sr(e){return wt("MuiPopperUnstyled",e)}xt("MuiPopperUnstyled",["root"]);const kr=["anchorEl","children","component","components","componentsProps","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Mr=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Lr(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function je(e){return typeof e=="function"?e():e}const Wr=()=>Ot({root:["root"]},Sr,{}),Hr={},Ur=H.exports.forwardRef(function(t,r){var o;const{anchorEl:n,children:a,component:f,components:s={},componentsProps:i={},direction:c,disablePortal:p,modifiers:m,open:b,ownerState:l,placement:w,popperOptions:u,popperRef:v,TransitionProps:g}=t,x=rt(t,kr),O=H.exports.useRef(null),d=Xe(O,r),h=H.exports.useRef(null),y=Xe(h,v),P=H.exports.useRef(y);Ye(()=>{P.current=y},[y]),H.exports.useImperativeHandle(v,()=>h.current,[]);const E=Lr(w,c),[A,R]=H.exports.useState(E);H.exports.useEffect(()=>{h.current&&h.current.forceUpdate()}),Ye(()=>{if(!n||!b)return;const F=I=>{R(I.placement)};je(n);let j=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:I})=>{F(I)}}];m!=null&&(j=j.concat(m)),u&&u.modifiers!=null&&(j=j.concat(u.modifiers));const B=$r(je(n),O.current,_({placement:E},u,{modifiers:j}));return P.current(B),()=>{B.destroy(),P.current(null)}},[n,p,m,b,u,E]);const D={placement:A};g!==null&&(D.TransitionProps=g);const S=Wr(),C=(o=f!=null?f:s.Root)!=null?o:"div",N=At({elementType:C,externalSlotProps:i.root,externalForwardedProps:x,additionalProps:{role:"tooltip",ref:d},ownerState:_({},t,l),className:S.root});return be(C,_({},N,{children:typeof a=="function"?a(D):a}))}),Vr=H.exports.forwardRef(function(t,r){const{anchorEl:o,children:n,container:a,direction:f="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:c,open:p,placement:m="bottom",popperOptions:b=Hr,popperRef:l,style:w,transition:u=!1}=t,v=rt(t,Mr),[g,x]=H.exports.useState(!0),O=()=>{x(!1)},d=()=>{x(!0)};if(!i&&!p&&(!u||g))return null;const h=a||(o?Et(je(o)).body:void 0);return be(Rt,{disablePortal:s,container:h,children:be(Ur,_({anchorEl:o,direction:f,disablePortal:s,modifiers:c,ref:r,open:u?!g:p,placement:m,popperOptions:b,popperRef:l},v,{style:_({position:"fixed",top:0,left:0,display:!p&&i&&(!u||g)?"none":null},w),TransitionProps:u?{in:p,onEnter:O,onExited:d}:null,children:n}))})}),Nr=Vr,Fr=Pt(Nr,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),qr=H.exports.forwardRef(function(t,r){const o=yt(),n=bt({props:t,name:"MuiPopper"});return be(Fr,_({direction:o==null?void 0:o.direction},n,{ref:r}))}),Kr=qr;export{Kr as P};
