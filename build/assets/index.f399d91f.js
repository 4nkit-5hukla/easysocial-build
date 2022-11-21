import{w as pr,j as Ve,aO as p,r as l}from"./index.be83498f.js";import{_ as P,a as I,b as ze,c as Me}from"./tslib.es6.61e9e735.js";const pt=pr(Ve("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"}),"InsertDriveFileOutlined");var fr=(e=>(e.ASSETS="Assets",e.SENT="Sent",e.Received="Received",e.ENGAGE_ASSETS="Engage-assets",e.POST="Post",e.CURATE_ASSETS="Curate-assets",e.WEB="Web",e))(fr||{}),dr=(e=>(e.image="image/png,image/jpeg,image/jpg",e.video="video/mp4,video/3gp",e.file="application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/vnd.ms-powerpoint,.ppt,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,text/plain,application/pdf,application/x-zip-compressed",e))(dr||{}),mr=(e=>(e.VIDEO="video",e.IMAGE="image",e.FILE="file",e))(mr||{}),gr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function H(e,r){var t=vr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function vr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=gr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var yr=[".DS_Store","Thumbs.db"];function br(e){return P(this,void 0,void 0,function(){return I(this,function(r){return J(e)&&hr(e.dataTransfer)?[2,Ar(e.dataTransfer,e.type)]:xr(e)?[2,Dr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Er(e)]:[2,[]]})})}function hr(e){return J(e)}function xr(e){return J(e)&&J(e.target)}function J(e){return typeof e=="object"&&e!==null}function Dr(e){return me(e.target.files).map(function(r){return H(r)})}function Er(e){return P(this,void 0,void 0,function(){var r;return I(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return H(n)})]}})})}function Ar(e,r){return P(this,void 0,void 0,function(){var t,n;return I(this,function(i){switch(i.label){case 0:return e.items?(t=me(e.items).filter(function(s){return s.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(wr))]):[3,2];case 1:return n=i.sent(),[2,Le(qe(n))];case 2:return[2,Le(me(e.files).map(function(s){return H(s)}))]}})})}function Le(e){return e.filter(function(r){return yr.indexOf(r.name)===-1})}function me(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function wr(e){if(typeof e.webkitGetAsEntry!="function")return Ke(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Je(r):Ke(e)}function qe(e){return e.reduce(function(r,t){return ze(ze([],Me(r),!1),Me(Array.isArray(t)?qe(t):[t]),!1)},[])}function Ke(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=H(r);return Promise.resolve(t)}function Or(e){return P(this,void 0,void 0,function(){return I(this,function(r){return[2,e.isDirectory?Je(e):Fr(e)]})})}function Je(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function s(){var c=this;r.readEntries(function(u){return P(c,void 0,void 0,function(){var g,E,A;return I(this,function(h){switch(h.label){case 0:if(u.length)return[3,5];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return g=h.sent(),t(g),[3,4];case 3:return E=h.sent(),n(E),[3,4];case 4:return[3,6];case 5:A=Promise.all(u.map(Or)),i.push(A),s(),h.label=6;case 6:return[2]}})})},function(u){n(u)})}s()})}function Fr(e){return P(this,void 0,void 0,function(){return I(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var s=H(i,e.fullPath);t(s)},function(i){n(i)})})]})})}var _r=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),s=i.replace(/\/.*$/,"");return t.some(function(c){var u=c.trim().toLowerCase();return u.charAt(0)==="."?n.toLowerCase().endsWith(u):u.endsWith("/*")?s===u.replace(/\/.*$/,""):i===u})}return!0};function $e(e){return Cr(e)||Sr(e)||Xe(e)||jr()}function jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cr(e){if(Array.isArray(e))return ge(e)}function He(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function We(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?He(Object(t),!0).forEach(function(n){Qe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):He(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Qe(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function $(e,r){return Tr(e)||Ir(e,r)||Xe(e,r)||Pr()}function Pr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xe(e,r){if(!!e){if(typeof e=="string")return ge(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ge(e,r)}}function ge(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ir(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,s=!1,c,u;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(g){s=!0,u=g}finally{try{!i&&t.return!=null&&t.return()}finally{if(s)throw u}}return n}}function Tr(e){if(Array.isArray(e))return e}var Rr="file-invalid-type",kr="file-too-large",zr="file-too-small",Mr="too-many-files",Lr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Rr,message:"File type must be ".concat(t)}},Be=function(r){return{code:kr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ne=function(r){return{code:zr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Kr={code:Mr,message:"Too many files"};function Ze(e,r){var t=e.type==="application/x-moz-file"||_r(e,r);return[t,t?null:Lr(r)]}function er(e,r,t){if(F(e.size))if(F(r)&&F(t)){if(e.size>t)return[!1,Be(t)];if(e.size<r)return[!1,Ne(r)]}else{if(F(r)&&e.size<r)return[!1,Ne(r)];if(F(t)&&e.size>t)return[!1,Be(t)]}return[!0,null]}function F(e){return e!=null}function $r(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,s=e.multiple,c=e.maxFiles,u=e.validator;return!s&&r.length>1||s&&c>=1&&r.length>c?!1:r.every(function(g){var E=Ze(g,t),A=$(E,1),h=A[0],T=er(g,n,i),R=$(T,1),k=R[0],z=u?u(g):null;return h&&k&&!z})}function Q(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function q(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ge(e){e.preventDefault()}function Hr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Wr(e){return e.indexOf("Edge/")!==-1}function Br(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Hr(e)||Wr(e)}function D(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,s=new Array(i>1?i-1:0),c=1;c<i;c++)s[c-1]=arguments[c];return r.some(function(u){return!Q(n)&&u&&u.apply(void 0,[n].concat(s)),Q(n)})}}function Nr(){return"showOpenFilePicker"in window}function Gr(e){if(F(e)){var r=Object.entries(e).filter(function(t){var n=$(t,2),i=n[0],s=n[1],c=!0;return rr(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(s)||!s.every(tr))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,n){var i=$(n,2),s=i[0],c=i[1];return We(We({},t),{},Qe({},s,c))},{});return[{description:"Files",accept:r}]}return e}function Ur(e){if(F(e))return Object.entries(e).reduce(function(r,t){var n=$(t,2),i=n[0],s=n[1];return[].concat($e(r),[i],$e(s))},[]).filter(function(r){return rr(r)||tr(r)}).join(",")}function Yr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Vr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function rr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function tr(e){return/^.*\.[\w]+$/.test(e)}var qr=["children"],Jr=["open"],Qr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Xr=["refKey","onChange","onClick"];function Zr(e){return tt(e)||rt(e)||nr(e)||et()}function et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tt(e){if(Array.isArray(e))return ve(e)}function de(e,r){return it(e)||ot(e,r)||nr(e,r)||nt()}function nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nr(e,r){if(!!e){if(typeof e=="string")return ve(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ve(e,r)}}function ve(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ot(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,s=!1,c,u;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(g){s=!0,u=g}finally{try{!i&&t.return!=null&&t.return()}finally{if(s)throw u}}return n}}function it(e){if(Array.isArray(e))return e}function Ue(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ue(Object(t),!0).forEach(function(n){ye(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ue(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ye(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function X(e,r){if(e==null)return{};var t=at(e,r),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(t[n]=e[n]))}return t}function at(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var he=l.exports.forwardRef(function(e,r){var t=e.children,n=X(e,qr),i=st(n),s=i.open,c=X(i,Jr);return l.exports.useImperativeHandle(r,function(){return{open:s}},[s]),Ve(l.exports.Fragment,{children:t(f(f({},c),{},{open:s}))})});he.displayName="Dropzone";var or={disabled:!1,getFilesFromEvent:br,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};he.defaultProps=or;he.propTypes={children:p.exports.func,accept:p.exports.objectOf(p.exports.arrayOf(p.exports.string)),multiple:p.exports.bool,preventDropOnDocument:p.exports.bool,noClick:p.exports.bool,noKeyboard:p.exports.bool,noDrag:p.exports.bool,noDragEventsBubbling:p.exports.bool,minSize:p.exports.number,maxSize:p.exports.number,maxFiles:p.exports.number,disabled:p.exports.bool,getFilesFromEvent:p.exports.func,onFileDialogCancel:p.exports.func,onFileDialogOpen:p.exports.func,useFsAccessApi:p.exports.bool,autoFocus:p.exports.bool,onDragEnter:p.exports.func,onDragLeave:p.exports.func,onDragOver:p.exports.func,onDrop:p.exports.func,onDropAccepted:p.exports.func,onDropRejected:p.exports.func,onError:p.exports.func,validator:p.exports.func};var be={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function st(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=f(f({},or),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,s=r.maxSize,c=r.minSize,u=r.multiple,g=r.maxFiles,E=r.onDragEnter,A=r.onDragLeave,h=r.onDragOver,T=r.onDrop,R=r.onDropAccepted,k=r.onDropRejected,z=r.onFileDialogCancel,Z=r.onFileDialogOpen,xe=r.useFsAccessApi,De=r.autoFocus,ee=r.preventDropOnDocument,Ee=r.noClick,re=r.noKeyboard,Ae=r.noDrag,w=r.noDragEventsBubbling,te=r.onError,M=r.validator,L=l.exports.useMemo(function(){return Ur(t)},[t]),we=l.exports.useMemo(function(){return Gr(t)},[t]),ne=l.exports.useMemo(function(){return typeof Z=="function"?Z:Ye},[Z]),W=l.exports.useMemo(function(){return typeof z=="function"?z:Ye},[z]),v=l.exports.useRef(null),x=l.exports.useRef(null),ir=l.exports.useReducer(ut,be),Oe=de(ir,2),oe=Oe[0],y=Oe[1],ar=oe.isFocused,Fe=oe.isFileDialogActive,B=l.exports.useRef(typeof window<"u"&&window.isSecureContext&&xe&&Nr()),_e=function(){!B.current&&Fe&&setTimeout(function(){if(x.current){var a=x.current.files;a.length||(y({type:"closeDialog"}),W())}},300)};l.exports.useEffect(function(){return window.addEventListener("focus",_e,!1),function(){window.removeEventListener("focus",_e,!1)}},[x,Fe,W,B]);var _=l.exports.useRef([]),je=function(a){v.current&&v.current.contains(a.target)||(a.preventDefault(),_.current=[])};l.exports.useEffect(function(){return ee&&(document.addEventListener("dragover",Ge,!1),document.addEventListener("drop",je,!1)),function(){ee&&(document.removeEventListener("dragover",Ge),document.removeEventListener("drop",je))}},[v,ee]),l.exports.useEffect(function(){return!n&&De&&v.current&&v.current.focus(),function(){}},[v,De,n]);var O=l.exports.useCallback(function(o){te?te(o):console.error(o)},[te]),Se=l.exports.useCallback(function(o){o.preventDefault(),o.persist(),Y(o),_.current=[].concat(Zr(_.current),[o.target]),q(o)&&Promise.resolve(i(o)).then(function(a){if(!(Q(o)&&!w)){var d=a.length,m=d>0&&$r({files:a,accept:L,minSize:c,maxSize:s,multiple:u,maxFiles:g,validator:M}),b=d>0&&!m;y({isDragAccept:m,isDragReject:b,isDragActive:!0,type:"setDraggedFiles"}),E&&E(o)}}).catch(function(a){return O(a)})},[i,E,O,w,L,c,s,u,g,M]),Ce=l.exports.useCallback(function(o){o.preventDefault(),o.persist(),Y(o);var a=q(o);if(a&&o.dataTransfer)try{o.dataTransfer.dropEffect="copy"}catch{}return a&&h&&h(o),!1},[h,w]),Pe=l.exports.useCallback(function(o){o.preventDefault(),o.persist(),Y(o);var a=_.current.filter(function(m){return v.current&&v.current.contains(m)}),d=a.indexOf(o.target);d!==-1&&a.splice(d,1),_.current=a,!(a.length>0)&&(y({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),q(o)&&A&&A(o))},[v,A,w]),N=l.exports.useCallback(function(o,a){var d=[],m=[];o.forEach(function(b){var K=Ze(b,L),C=de(K,2),ae=C[0],se=C[1],ue=er(b,c,s),V=de(ue,2),ce=V[0],le=V[1],pe=M?M(b):null;if(ae&&ce&&!pe)d.push(b);else{var fe=[se,le];pe&&(fe=fe.concat(pe)),m.push({file:b,errors:fe.filter(function(lr){return lr})})}}),(!u&&d.length>1||u&&g>=1&&d.length>g)&&(d.forEach(function(b){m.push({file:b,errors:[Kr]})}),d.splice(0)),y({acceptedFiles:d,fileRejections:m,type:"setFiles"}),T&&T(d,m,a),m.length>0&&k&&k(m,a),d.length>0&&R&&R(d,a)},[y,u,L,c,s,g,T,R,k,M]),G=l.exports.useCallback(function(o){o.preventDefault(),o.persist(),Y(o),_.current=[],q(o)&&Promise.resolve(i(o)).then(function(a){Q(o)&&!w||N(a,o)}).catch(function(a){return O(a)}),y({type:"reset"})},[i,N,O,w]),j=l.exports.useCallback(function(){if(B.current){y({type:"openDialog"}),ne();var o={multiple:u,types:we};window.showOpenFilePicker(o).then(function(a){return i(a)}).then(function(a){N(a,null),y({type:"closeDialog"})}).catch(function(a){Yr(a)?(W(a),y({type:"closeDialog"})):Vr(a)?(B.current=!1,x.current?(x.current.value=null,x.current.click()):O(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):O(a)});return}x.current&&(y({type:"openDialog"}),ne(),x.current.value=null,x.current.click())},[y,ne,W,xe,N,O,we,u]),Ie=l.exports.useCallback(function(o){!v.current||!v.current.isEqualNode(o.target)||(o.key===" "||o.key==="Enter"||o.keyCode===32||o.keyCode===13)&&(o.preventDefault(),j())},[v,j]),Te=l.exports.useCallback(function(){y({type:"focus"})},[]),Re=l.exports.useCallback(function(){y({type:"blur"})},[]),ke=l.exports.useCallback(function(){Ee||(Br()?setTimeout(j,0):j())},[Ee,j]),S=function(a){return n?null:a},ie=function(a){return re?null:S(a)},U=function(a){return Ae?null:S(a)},Y=function(a){w&&a.stopPropagation()},sr=l.exports.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.refKey,d=a===void 0?"ref":a,m=o.role,b=o.onKeyDown,K=o.onFocus,C=o.onBlur,ae=o.onClick,se=o.onDragEnter,ue=o.onDragOver,V=o.onDragLeave,ce=o.onDrop,le=X(o,Qr);return f(f(ye({onKeyDown:ie(D(b,Ie)),onFocus:ie(D(K,Te)),onBlur:ie(D(C,Re)),onClick:S(D(ae,ke)),onDragEnter:U(D(se,Se)),onDragOver:U(D(ue,Ce)),onDragLeave:U(D(V,Pe)),onDrop:U(D(ce,G)),role:typeof m=="string"&&m!==""?m:"presentation"},d,v),!n&&!re?{tabIndex:0}:{}),le)}},[v,Ie,Te,Re,ke,Se,Ce,Pe,G,re,Ae,n]),ur=l.exports.useCallback(function(o){o.stopPropagation()},[]),cr=l.exports.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.refKey,d=a===void 0?"ref":a,m=o.onChange,b=o.onClick,K=X(o,Xr),C=ye({accept:L,multiple:u,type:"file",style:{display:"none"},onChange:S(D(m,G)),onClick:S(D(b,ur)),tabIndex:-1},d,x);return f(f({},C),K)}},[x,t,u,G,n]);return f(f({},oe),{},{isFocused:ar&&!n,getRootProps:sr,getInputProps:cr,rootRef:v,inputRef:x,open:S(j)})}function ut(e,r){switch(r.type){case"focus":return f(f({},e),{},{isFocused:!0});case"blur":return f(f({},e),{},{isFocused:!1});case"openDialog":return f(f({},be),{},{isFileDialogActive:!0});case"closeDialog":return f(f({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return f(f({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return f(f({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return f({},be);default:return e}}function Ye(){}export{fr as A,mr as F,pt as I,dr as a,st as u};