var mr=Object.defineProperty;var gr=(e,r,t)=>r in e?mr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var q=(e,r,t)=>(gr(e,typeof r!="symbol"?r+"":r,t),t);import{D as vr,j as Qe,A as me,aj as p,r as f}from"./index.0f332f5b.js";const vt=vr(Qe("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"}),"InsertDriveFileOutlined");var yr=(e=>(e.ASSETS="Assets",e.SENT="Sent",e.Received="Received",e.ENGAGE_ASSETS="Engage-assets",e.POST="Post",e.CURATE_ASSETS="Curate-assets",e.WEB="Web",e))(yr||{});class ge{}q(ge,"fileUpload",async(r,t)=>await me(`/asset?directory=${r}`,"POST",{data:t})),q(ge,"fileRemove",async r=>await me("/asset","DELETE",{data:{id:r}})),q(ge,"fileRemoveByURL",async r=>await me("/asset","DELETE",{data:{url:r}}));var br=(e=>(e.image="image/png,image/jpeg,image/jpg",e.video="video/mp4,video/3gp",e.file="application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/vnd.ms-powerpoint,.ppt,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,text/plain,application/pdf,application/x-zip-compressed",e))(br||{}),hr=(e=>(e.VIDEO="video",e.IMAGE="image",e.FILE="file",e))(hr||{});function P(e,r,t,n){function i(o){return o instanceof t?o:new t(function(c){c(o)})}return new(t||(t=Promise))(function(o,c){function l(g){try{s(n.next(g))}catch(b){c(b)}}function m(g){try{s(n.throw(g))}catch(b){c(b)}}function s(g){g.done?o(g.value):i(g.value).then(l,m)}s((n=n.apply(e,r||[])).next())})}function T(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,c;return c={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function l(s){return function(g){return m([s,g])}}function m(s){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,i&&(o=s[0]&2?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1],o=s;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(s);break}o[2]&&t.ops.pop(),t.trys.pop();continue}s=r.call(e,t)}catch(g){s=[6,g],i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function $e(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],c;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(l){c={error:l}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return o}function Ke(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}var xr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function H(e,r){var t=Dr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Dr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=xr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var wr=[".DS_Store","Thumbs.db"];function Er(e){return P(this,void 0,void 0,function(){return T(this,function(r){return Q(e)&&Ar(e.dataTransfer)?[2,jr(e.dataTransfer,e.type)]:Or(e)?[2,Fr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,_r(e)]:[2,[]]})})}function Ar(e){return Q(e)}function Or(e){return Q(e)&&Q(e.target)}function Q(e){return typeof e=="object"&&e!==null}function Fr(e){return ye(e.target.files).map(function(r){return H(r)})}function _r(e){return P(this,void 0,void 0,function(){var r;return T(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return H(n)})]}})})}function jr(e,r){return P(this,void 0,void 0,function(){var t,n;return T(this,function(i){switch(i.label){case 0:return e.items?(t=ye(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Sr))]):[3,2];case 1:return n=i.sent(),[2,He(Xe(n))];case 2:return[2,He(ye(e.files).map(function(o){return H(o)}))]}})})}function He(e){return e.filter(function(r){return wr.indexOf(r.name)===-1})}function ye(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Sr(e){if(typeof e.webkitGetAsEntry!="function")return We(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Ze(r):We(e)}function Xe(e){return e.reduce(function(r,t){return Ke(Ke([],$e(r),!1),$e(Array.isArray(t)?Xe(t):[t]),!1)},[])}function We(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=H(r);return Promise.resolve(t)}function Cr(e){return P(this,void 0,void 0,function(){return T(this,function(r){return[2,e.isDirectory?Ze(e):Pr(e)]})})}function Ze(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function o(){var c=this;r.readEntries(function(l){return P(c,void 0,void 0,function(){var m,s,g;return T(this,function(b){switch(b.label){case 0:if(l.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=b.sent(),t(m),[3,4];case 3:return s=b.sent(),n(s),[3,4];case 4:return[3,6];case 5:g=Promise.all(l.map(Cr)),i.push(g),o(),b.label=6;case 6:return[2]}})})},function(l){n(l)})}o()})}function Pr(e){return P(this,void 0,void 0,function(){return T(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var o=H(i,e.fullPath);t(o)},function(i){n(i)})})]})})}var Tr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return t.some(function(c){var l=c.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?o===l.replace(/\/.*$/,""):i===l})}return!0};function Be(e){return kr(e)||Rr(e)||rr(e)||Ir()}function Ir(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kr(e){if(Array.isArray(e))return be(e)}function Ne(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Ge(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ne(Object(t),!0).forEach(function(n){er(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ne(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function er(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function K(e,r){return Mr(e)||Lr(e,r)||rr(e,r)||zr()}function zr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(e,r){if(!!e){if(typeof e=="string")return be(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return be(e,r)}}function be(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Lr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,c,l;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(m){o=!0,l=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw l}}return n}}function Mr(e){if(Array.isArray(e))return e}var $r="file-invalid-type",Kr="file-too-large",Hr="file-too-small",Wr="too-many-files",Br=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:$r,message:"File type must be ".concat(t)}},Ue=function(r){return{code:Kr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ye=function(r){return{code:Hr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Nr={code:Wr,message:"Too many files"};function tr(e,r){var t=e.type==="application/x-moz-file"||Tr(e,r);return[t,t?null:Br(r)]}function nr(e,r,t){if(F(e.size))if(F(r)&&F(t)){if(e.size>t)return[!1,Ue(t)];if(e.size<r)return[!1,Ye(r)]}else{if(F(r)&&e.size<r)return[!1,Ye(r)];if(F(t)&&e.size>t)return[!1,Ue(t)]}return[!0,null]}function F(e){return e!=null}function Gr(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,c=e.maxFiles,l=e.validator;return!o&&r.length>1||o&&c>=1&&r.length>c?!1:r.every(function(m){var s=tr(m,t),g=K(s,1),b=g[0],I=nr(m,n,i),R=K(I,1),k=R[0],z=l?l(m):null;return b&&k&&!z})}function X(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function J(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ve(e){e.preventDefault()}function Ur(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Yr(e){return e.indexOf("Edge/")!==-1}function Vr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Ur(e)||Yr(e)}function E(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];return r.some(function(l){return!X(n)&&l&&l.apply(void 0,[n].concat(o)),X(n)})}}function qr(){return"showOpenFilePicker"in window}function Jr(e){if(F(e)){var r=Object.entries(e).filter(function(t){var n=K(t,2),i=n[0],o=n[1],c=!0;return or(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(o)||!o.every(ir))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,n){var i=K(n,2),o=i[0],c=i[1];return Ge(Ge({},t),{},er({},o,c))},{});return[{accept:r}]}return e}function Qr(e){if(F(e))return Object.entries(e).reduce(function(r,t){var n=K(t,2),i=n[0],o=n[1];return[].concat(Be(r),[i],Be(o))},[]).filter(function(r){return or(r)||ir(r)}).join(",")}function Xr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Zr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function or(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function ir(e){return/^.*\.[\w]+$/.test(e)}var et=["children"],rt=["open"],tt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],nt=["refKey","onChange","onClick"];function ot(e){return ut(e)||at(e)||ar(e)||it()}function it(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function at(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ut(e){if(Array.isArray(e))return he(e)}function ve(e,r){return lt(e)||st(e,r)||ar(e,r)||ct()}function ct(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(e,r){if(!!e){if(typeof e=="string")return he(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return he(e,r)}}function he(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function st(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,c,l;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(m){o=!0,l=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw l}}return n}}function lt(e){if(Array.isArray(e))return e}function qe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?qe(Object(t),!0).forEach(function(n){xe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function xe(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e,r){if(e==null)return{};var t=ft(e,r),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(t[n]=e[n]))}return t}function ft(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var we=f.exports.forwardRef(function(e,r){var t=e.children,n=Z(e,et),i=pt(n),o=i.open,c=Z(i,rt);return f.exports.useImperativeHandle(r,function(){return{open:o}},[o]),Qe(f.exports.Fragment,{children:t(d(d({},c),{},{open:o}))})});we.displayName="Dropzone";var ur={disabled:!1,getFilesFromEvent:Er,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};we.defaultProps=ur;we.propTypes={children:p.exports.func,accept:p.exports.objectOf(p.exports.arrayOf(p.exports.string)),multiple:p.exports.bool,preventDropOnDocument:p.exports.bool,noClick:p.exports.bool,noKeyboard:p.exports.bool,noDrag:p.exports.bool,noDragEventsBubbling:p.exports.bool,minSize:p.exports.number,maxSize:p.exports.number,maxFiles:p.exports.number,disabled:p.exports.bool,getFilesFromEvent:p.exports.func,onFileDialogCancel:p.exports.func,onFileDialogOpen:p.exports.func,useFsAccessApi:p.exports.bool,autoFocus:p.exports.bool,onDragEnter:p.exports.func,onDragLeave:p.exports.func,onDragOver:p.exports.func,onDrop:p.exports.func,onDropAccepted:p.exports.func,onDropRejected:p.exports.func,onError:p.exports.func,validator:p.exports.func};var De={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function pt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=d(d({},ur),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,o=r.maxSize,c=r.minSize,l=r.multiple,m=r.maxFiles,s=r.onDragEnter,g=r.onDragLeave,b=r.onDragOver,I=r.onDrop,R=r.onDropAccepted,k=r.onDropRejected,z=r.onFileDialogCancel,ee=r.onFileDialogOpen,Ee=r.useFsAccessApi,Ae=r.autoFocus,re=r.preventDropOnDocument,Oe=r.noClick,te=r.noKeyboard,Fe=r.noDrag,A=r.noDragEventsBubbling,ne=r.onError,L=r.validator,M=f.exports.useMemo(function(){return Qr(t)},[t]),_e=f.exports.useMemo(function(){return Jr(t)},[t]),oe=f.exports.useMemo(function(){return typeof ee=="function"?ee:Je},[ee]),W=f.exports.useMemo(function(){return typeof z=="function"?z:Je},[z]),h=f.exports.useRef(null),w=f.exports.useRef(null),cr=f.exports.useReducer(dt,De),je=ve(cr,2),ie=je[0],x=je[1],sr=ie.isFocused,Se=ie.isFileDialogActive,B=f.exports.useRef(typeof window<"u"&&window.isSecureContext&&Ee&&qr()),Ce=function(){!B.current&&Se&&setTimeout(function(){if(w.current){var u=w.current.files;u.length||(x({type:"closeDialog"}),W())}},300)};f.exports.useEffect(function(){return window.addEventListener("focus",Ce,!1),function(){window.removeEventListener("focus",Ce,!1)}},[w,Se,W,B]);var _=f.exports.useRef([]),Pe=function(u){h.current&&h.current.contains(u.target)||(u.preventDefault(),_.current=[])};f.exports.useEffect(function(){return re&&(document.addEventListener("dragover",Ve,!1),document.addEventListener("drop",Pe,!1)),function(){re&&(document.removeEventListener("dragover",Ve),document.removeEventListener("drop",Pe))}},[h,re]),f.exports.useEffect(function(){return!n&&Ae&&h.current&&h.current.focus(),function(){}},[h,Ae,n]);var O=f.exports.useCallback(function(a){ne?ne(a):console.error(a)},[ne]),Te=f.exports.useCallback(function(a){a.preventDefault(),a.persist(),Y(a),_.current=[].concat(ot(_.current),[a.target]),J(a)&&Promise.resolve(i(a)).then(function(u){if(!(X(a)&&!A)){var v=u.length,y=v>0&&Gr({files:u,accept:M,minSize:c,maxSize:o,multiple:l,maxFiles:m,validator:L}),D=v>0&&!y;x({isDragAccept:y,isDragReject:D,isDragActive:!0,type:"setDraggedFiles"}),s&&s(a)}}).catch(function(u){return O(u)})},[i,s,O,A,M,c,o,l,m,L]),Ie=f.exports.useCallback(function(a){a.preventDefault(),a.persist(),Y(a);var u=J(a);if(u&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return u&&b&&b(a),!1},[b,A]),Re=f.exports.useCallback(function(a){a.preventDefault(),a.persist(),Y(a);var u=_.current.filter(function(y){return h.current&&h.current.contains(y)}),v=u.indexOf(a.target);v!==-1&&u.splice(v,1),_.current=u,!(u.length>0)&&(x({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),J(a)&&g&&g(a))},[h,g,A]),N=f.exports.useCallback(function(a,u){var v=[],y=[];a.forEach(function(D){var $=tr(D,M),C=ve($,2),ue=C[0],ce=C[1],se=nr(D,c,o),V=ve(se,2),le=V[0],fe=V[1],pe=L?L(D):null;if(ue&&le&&!pe)v.push(D);else{var de=[ce,fe];pe&&(de=de.concat(pe)),y.push({file:D,errors:de.filter(function(dr){return dr})})}}),(!l&&v.length>1||l&&m>=1&&v.length>m)&&(v.forEach(function(D){y.push({file:D,errors:[Nr]})}),v.splice(0)),x({acceptedFiles:v,fileRejections:y,type:"setFiles"}),I&&I(v,y,u),y.length>0&&k&&k(y,u),v.length>0&&R&&R(v,u)},[x,l,M,c,o,m,I,R,k,L]),G=f.exports.useCallback(function(a){a.preventDefault(),a.persist(),Y(a),_.current=[],J(a)&&Promise.resolve(i(a)).then(function(u){X(a)&&!A||N(u,a)}).catch(function(u){return O(u)}),x({type:"reset"})},[i,N,O,A]),j=f.exports.useCallback(function(){if(B.current){x({type:"openDialog"}),oe();var a={multiple:l,types:_e};window.showOpenFilePicker(a).then(function(u){return i(u)}).then(function(u){N(u,null),x({type:"closeDialog"})}).catch(function(u){Xr(u)?(W(u),x({type:"closeDialog"})):Zr(u)?(B.current=!1,w.current?(w.current.value=null,w.current.click()):O(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):O(u)});return}w.current&&(x({type:"openDialog"}),oe(),w.current.value=null,w.current.click())},[x,oe,W,Ee,N,O,_e,l]),ke=f.exports.useCallback(function(a){!h.current||!h.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),j())},[h,j]),ze=f.exports.useCallback(function(){x({type:"focus"})},[]),Le=f.exports.useCallback(function(){x({type:"blur"})},[]),Me=f.exports.useCallback(function(){Oe||(Vr()?setTimeout(j,0):j())},[Oe,j]),S=function(u){return n?null:u},ae=function(u){return te?null:S(u)},U=function(u){return Fe?null:S(u)},Y=function(u){A&&u.stopPropagation()},lr=f.exports.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=a.refKey,v=u===void 0?"ref":u,y=a.role,D=a.onKeyDown,$=a.onFocus,C=a.onBlur,ue=a.onClick,ce=a.onDragEnter,se=a.onDragOver,V=a.onDragLeave,le=a.onDrop,fe=Z(a,tt);return d(d(xe({onKeyDown:ae(E(D,ke)),onFocus:ae(E($,ze)),onBlur:ae(E(C,Le)),onClick:S(E(ue,Me)),onDragEnter:U(E(ce,Te)),onDragOver:U(E(se,Ie)),onDragLeave:U(E(V,Re)),onDrop:U(E(le,G)),role:typeof y=="string"&&y!==""?y:"presentation"},v,h),!n&&!te?{tabIndex:0}:{}),fe)}},[h,ke,ze,Le,Me,Te,Ie,Re,G,te,Fe,n]),fr=f.exports.useCallback(function(a){a.stopPropagation()},[]),pr=f.exports.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=a.refKey,v=u===void 0?"ref":u,y=a.onChange,D=a.onClick,$=Z(a,nt),C=xe({accept:M,multiple:l,type:"file",style:{display:"none"},onChange:S(E(y,G)),onClick:S(E(D,fr)),tabIndex:-1},v,w);return d(d({},C),$)}},[w,t,l,G,n]);return d(d({},ie),{},{isFocused:sr&&!n,getRootProps:lr,getInputProps:pr,rootRef:h,inputRef:w,open:S(j)})}function dt(e,r){switch(r.type){case"focus":return d(d({},e),{},{isFocused:!0});case"blur":return d(d({},e),{},{isFocused:!1});case"openDialog":return d(d({},De),{},{isFileDialogActive:!0});case"closeDialog":return d(d({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return d(d({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return d(d({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return d({},De);default:return e}}function Je(){}export{ge as A,hr as F,vt as I,br as a,yr as b,pt as u};