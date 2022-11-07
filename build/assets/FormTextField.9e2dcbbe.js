import{an as V,j as pe}from"./index.dca5aa37.js";import{T as hr}from"./TextField.bccde5ae.js";var te=e=>e.type==="checkbox",X=e=>e instanceof Date,O=e=>e==null;const Ge=e=>typeof e=="object";var C=e=>!O(e)&&!Array.isArray(e)&&Ge(e)&&!X(e),ze=e=>C(e)&&e.target?te(e.target)?e.target.checked:e.target.value:e,gr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Je=(e,t)=>e.has(gr(t)),se=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,c=(e,t,r)=>{if(!t||!C(e))return r;const i=se(t.split(/[,[\].]+?/)).reduce((a,o)=>O(a)?a:a[o],e);return k(i)||i===e?k(e[t])?r:e[t]:i};const fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},N={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},H={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},vr=V.createContext(null),Ee=()=>V.useContext(vr);var Qe=(e,t,r,i=!0)=>{const a={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(a,o,{get:()=>{const h=o;return t._proxyFormState[h]!==N.all&&(t._proxyFormState[h]=!i||N.all),r&&(r[h]=!0),e[h]}});return a},M=e=>C(e)&&!Object.keys(e).length,Xe=(e,t,r)=>{const{name:i,...a}=e;return M(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(o=>t[o]===(!r||N.all))},ue=e=>Array.isArray(e)?e:[e],Ye=(e,t,r)=>r&&t?e===t:!e||!t||e===t||ue(e).some(i=>i&&(i.startsWith(t)||t.startsWith(i)));function Ce(e){const t=V.useRef(e);t.current=e,V.useEffect(()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}},[e.disabled])}function _r(e){const t=Ee(),{control:r=t.control,disabled:i,name:a,exact:o}=e||{},[h,g]=V.useState(r._formState),m=V.useRef(!0),F=V.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),x=V.useRef(a);return x.current=a,Ce({disabled:i,callback:V.useCallback(v=>m.current&&Ye(x.current,v.name,o)&&Xe(v,F.current)&&g({...r._formState,...v}),[r,o]),subject:r._subjects.state}),V.useEffect(()=>(m.current=!0,()=>{m.current=!1}),[]),Qe(h,r,F.current,!1)}var I=e=>typeof e=="string",Ze=(e,t,r,i)=>{const a=Array.isArray(e);return I(e)?(i&&t.watch.add(e),c(r,e)):a?e.map(o=>(i&&t.watch.add(o),c(r,o))):(i&&(t.watchAll=!0),r)},de=e=>typeof e=="function",Te=e=>{for(const t in e)if(de(e[t]))return!0;return!1};function br(e){const t=Ee(),{control:r=t.control,name:i,defaultValue:a,disabled:o,exact:h}=e||{},g=V.useRef(i);g.current=i,Ce({disabled:o,subject:r._subjects.watch,callback:V.useCallback(x=>{if(Ye(g.current,x.name,h)){const v=Ze(g.current,r._names,x.values||r._formValues);F(k(g.current)||C(v)&&!Te(v)?{...v}:Array.isArray(v)?[...v]:k(v)?a:v)}},[r,h,a])});const[m,F]=V.useState(k(a)?r._getWatch(i):a);return V.useEffect(()=>r._removeUnmounted()),m}function Fr(e){const t=Ee(),{name:r,control:i=t.control,shouldUnregister:a}=e,o=Je(i._names.array,r),h=br({control:i,name:r,defaultValue:c(i._formValues,r,c(i._defaultValues,r,e.defaultValue)),exact:!0}),g=_r({control:i,name:r}),m=V.useRef(i.register(r,{...e.rules,value:h}));return V.useEffect(()=>{const F=(x,v)=>{const _=c(i._fields,x);_&&(_._f.mount=v)};return F(r,!0),()=>{const x=i._options.shouldUnregister||a;(o?x&&!i._stateFlags.action:x)?i.unregister(r):F(r,!1)}},[r,i,o,a]),{field:{name:r,value:h,onChange:V.useCallback(F=>m.current.onChange({target:{value:ze(F),name:r},type:fe.CHANGE}),[r]),onBlur:V.useCallback(()=>m.current.onBlur({target:{value:c(i._formValues,r),name:r},type:fe.BLUR}),[r,i]),ref:F=>{const x=c(i._fields,r);x&&F&&(x._f.ref={focus:()=>F.focus(),select:()=>F.select(),setCustomValidity:v=>F.setCustomValidity(v),reportValidity:()=>F.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(g.errors,r)},isDirty:{enumerable:!0,get:()=>!!c(g.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!c(g.touchedFields,r)},error:{enumerable:!0,get:()=>c(g.errors,r)}})}}const Ar=e=>e.render(Fr(e));var mr=(e,t,r,i,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:a||!0}}:{},Re=e=>/^\w*$/.test(e),er=e=>se(e.replace(/["|']|\]/g,"").split(/\.|\[/));function w(e,t,r){let i=-1;const a=Re(t)?[t]:er(t),o=a.length,h=o-1;for(;++i<o;){const g=a[i];let m=r;if(i!==h){const F=e[g];m=C(F)||Array.isArray(F)?F:isNaN(+a[i+1])?{}:[]}e[g]=m,e=e[g]}return e}const ke=(e,t,r)=>{for(const i of r||Object.keys(e)){const a=c(e,i);if(a){const{_f:o,...h}=a;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else C(h)&&ke(h,t)}}};var Ne=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length)))),xr=(e,t,r)=>{const i=se(c(e,r));return w(i,"root",t[r]),w(e,r,i),e},ye=e=>typeof e=="boolean",Oe=e=>e.type==="file",ce=e=>I(e)||V.isValidElement(e),Le=e=>e.type==="radio",he=e=>e instanceof RegExp;const Ie={value:!1,isValid:!1},qe={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?qe:{value:e[0].value,isValid:!0}:qe:Ie}return Ie};const We={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,We):We;function He(e,t,r="validate"){if(ce(e)||Array.isArray(e)&&e.every(ce)||ye(e)&&!e)return{type:r,message:ce(e)?e:"",ref:t}}var Q=e=>C(e)&&!he(e)?e:{value:e,message:""},je=async(e,t,r,i,a)=>{const{ref:o,refs:h,required:g,maxLength:m,minLength:F,min:x,max:v,pattern:_,validate:j,name:B,valueAsNumber:ie,mount:_e,disabled:$}=e._f;if(!_e||$)return{};const q=h?h[0]:o,W=b=>{i&&q.reportValidity&&(q.setCustomValidity(ye(b)?"":b||" "),q.reportValidity())},S={},Z=Le(o),ne=te(o),K=Z||ne,z=(ie||Oe(o))&&!o.value||t===""||Array.isArray(t)&&!t.length,P=mr.bind(null,B,r,S),ae=(b,A,E,T=H.maxLength,p=H.minLength)=>{const U=b?A:E;S[B]={type:b?T:p,message:U,ref:o,...P(b?T:p,U)}};if(a?!Array.isArray(t)||!t.length:g&&(!K&&(z||O(t))||ye(t)&&!t||ne&&!rr(h).isValid||Z&&!tr(h).isValid)){const{value:b,message:A}=ce(g)?{value:!!g,message:g}:Q(g);if(b&&(S[B]={type:H.required,message:A,ref:q,...P(H.required,A)},!r))return W(A),S}if(!z&&(!O(x)||!O(v))){let b,A;const E=Q(v),T=Q(x);if(!O(t)&&!isNaN(t)){const p=o.valueAsNumber||t&&+t;O(E.value)||(b=p>E.value),O(T.value)||(A=p<T.value)}else{const p=o.valueAsDate||new Date(t),U=le=>new Date(new Date().toDateString()+" "+le),ee=o.type=="time",J=o.type=="week";I(E.value)&&t&&(b=ee?U(t)>U(E.value):J?t>E.value:p>new Date(E.value)),I(T.value)&&t&&(A=ee?U(t)<U(T.value):J?t<T.value:p<new Date(T.value))}if((b||A)&&(ae(!!b,E.message,T.message,H.max,H.min),!r))return W(S[B].message),S}if((m||F)&&!z&&(I(t)||a&&Array.isArray(t))){const b=Q(m),A=Q(F),E=!O(b.value)&&t.length>b.value,T=!O(A.value)&&t.length<A.value;if((E||T)&&(ae(E,b.message,A.message),!r))return W(S[B].message),S}if(_&&!z&&I(t)){const{value:b,message:A}=Q(_);if(he(b)&&!t.match(b)&&(S[B]={type:H.pattern,message:A,ref:o,...P(H.pattern,A)},!r))return W(A),S}if(j){if(de(j)){const b=await j(t),A=He(b,q);if(A&&(S[B]={...A,...P(H.validate,A.message)},!r))return W(A.message),S}else if(C(j)){let b={};for(const A in j){if(!M(b)&&!r)break;const E=He(await j[A](t),q,A);E&&(b={...E,...P(A,E.message)},W(E.message),r&&(S[B]=b))}if(!M(b)&&(S[B]={ref:q,...b},!r))return S}}return W(!0),S},wr=e=>{const t=e.constructor&&e.constructor.prototype;return C(t)&&t.hasOwnProperty("isPrototypeOf")},De=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(De&&(e instanceof Blob||e instanceof FileList))&&(r||C(e)))if(t=r?[]:{},!Array.isArray(e)&&!wr(e))t=e;else for(const i in e)t[i]=G(e[i]);else return e;return t}var $e=e=>({isOnSubmit:!e||e===N.onSubmit,isOnBlur:e===N.onBlur,isOnChange:e===N.onChange,isOnAll:e===N.all,isOnTouch:e===N.onTouched});function Vr(e,t){const r=t.slice(0,-1).length;let i=0;for(;i<r;)e=k(e)?i++:e[t[i++]];return e}function kr(e){for(const t in e)if(!k(e[t]))return!1;return!0}function R(e,t){const r=Re(t)?[t]:er(t),i=r.length==1?e:Vr(e,r),a=r[r.length-1];let o;i&&delete i[a];for(let h=0;h<r.slice(0,-1).length;h++){let g=-1,m;const F=r.slice(0,-(h+1)),x=F.length-1;for(h>0&&(o=e);++g<F.length;){const v=F[g];m=m?m[v]:e[v],x===g&&(C(m)&&M(m)||Array.isArray(m)&&kr(m))&&(o?delete o[v]:delete e[v]),o=m}}return e}function me(){let e=[];return{get observers(){return e},next:a=>{for(const o of e)o.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(o=>o!==a)}}),unsubscribe:()=>{e=[]}}}var ge=e=>O(e)||!Ge(e);function Y(e,t){if(ge(e)||ge(t))return e===t;if(X(e)&&X(t))return e.getTime()===t.getTime();const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(const a of r){const o=e[a];if(!i.includes(a))return!1;if(a!=="ref"){const h=t[a];if(X(o)&&X(h)||C(o)&&C(h)||Array.isArray(o)&&Array.isArray(h)?!Y(o,h):o!==h)return!1}}return!0}var Se=e=>{const t=e?e.ownerDocument:0,r=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof r},sr=e=>e.type==="select-multiple",Dr=e=>Le(e)||te(e),xe=e=>Se(e)&&e.isConnected;function ve(e,t={}){const r=Array.isArray(e);if(C(e)||r)for(const i in e)Array.isArray(e[i])||C(e[i])&&!Te(e[i])?(t[i]=Array.isArray(e[i])?[]:{},ve(e[i],t[i])):O(e[i])||(t[i]=!0);return t}function ir(e,t,r){const i=Array.isArray(e);if(C(e)||i)for(const a in e)Array.isArray(e[a])||C(e[a])&&!Te(e[a])?k(t)||ge(r[a])?r[a]=Array.isArray(e[a])?ve(e[a],[]):{...ve(e[a])}:ir(e[a],O(t)?{}:t[a],r[a]):r[a]=!Y(e[a],t[a]);return r}var we=(e,t)=>ir(e,t,ve(t)),nr=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>k(e)?e:t?e===""?NaN:e&&+e:r&&I(e)?new Date(e):i?i(e):e;function Ve(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return Oe(t)?t.files:Le(t)?tr(e.refs).value:sr(t)?[...t.selectedOptions].map(({value:r})=>r):te(t)?rr(e.refs).value:nr(k(t.value)?e.ref.value:t.value,e)}var Sr=(e,t,r,i)=>{const a={};for(const o of e){const h=c(t,o);h&&w(a,o,h._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:i}},re=e=>k(e)?void 0:he(e)?e.source:C(e)?he(e.value)?e.value.source:e.value:e,Er=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ke(e,t,r){const i=c(e,r);if(i||Re(r))return{error:i,name:r};const a=r.split(".");for(;a.length;){const o=a.join("."),h=c(t,o),g=c(e,o);if(h&&!Array.isArray(h)&&r!==o)return{name:r};if(g&&g.type)return{name:o,error:g};a.pop()}return{name:r}}var Cr=(e,t,r,i,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?i.isOnBlur:a.isOnBlur)?!e:(r?i.isOnChange:a.isOnChange)?e:!0,Tr=(e,t)=>!se(c(e,t)).length&&R(e,t);const Rr={mode:N.onSubmit,reValidateMode:N.onChange,shouldFocusError:!0};function Or(e={}){let t={...Rr,...e},r={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},a=G(t.defaultValues)||{},o=t.shouldUnregister?{}:G(a),h={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,F=0,x={};const v={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={watch:me(),array:me(),state:me()},j=$e(t.mode),B=$e(t.reValidateMode),ie=t.criteriaMode===N.all,_e=s=>n=>{clearTimeout(F),F=window.setTimeout(s,n)},$=async s=>{let n=!1;return v.isValid&&(n=t.resolver?M((await K()).errors):await P(i,!0),!s&&n!==r.isValid&&(r.isValid=n,_.state.next({isValid:n}))),n},q=(s,n=[],l,f,d=!0,u=!0)=>{if(f&&l){if(h.action=!0,u&&Array.isArray(c(i,s))){const y=l(c(i,s),f.argA,f.argB);d&&w(i,s,y)}if(v.errors&&u&&Array.isArray(c(r.errors,s))){const y=l(c(r.errors,s),f.argA,f.argB);d&&w(r.errors,s,y),Tr(r.errors,s)}if(v.touchedFields&&u&&Array.isArray(c(r.touchedFields,s))){const y=l(c(r.touchedFields,s),f.argA,f.argB);d&&w(r.touchedFields,s,y)}v.dirtyFields&&(r.dirtyFields=we(a,o)),_.state.next({isDirty:b(s,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(o,s,n)},W=(s,n)=>{w(r.errors,s,n),_.state.next({errors:r.errors})},S=(s,n,l,f)=>{const d=c(i,s);if(d){const u=c(o,s,k(l)?c(a,s):l);k(u)||f&&f.defaultChecked||n?w(o,s,n?u:Ve(d._f)):T(s,u),h.mount&&$()}},Z=(s,n,l,f,d)=>{let u=!1;const y={name:s},D=c(r.touchedFields,s);if(v.isDirty){const L=r.isDirty;r.isDirty=y.isDirty=b(),u=L!==y.isDirty}if(v.dirtyFields&&(!l||f)){const L=c(r.dirtyFields,s);Y(c(a,s),n)?R(r.dirtyFields,s):w(r.dirtyFields,s,!0),y.dirtyFields=r.dirtyFields,u=u||L!==c(r.dirtyFields,s)}return l&&!D&&(w(r.touchedFields,s,l),y.touchedFields=r.touchedFields,u=u||v.touchedFields&&D!==l),u&&d&&_.state.next(y),u?y:{}},ne=async(s,n,l,f)=>{const d=c(r.errors,s),u=v.isValid&&r.isValid!==n;if(e.delayError&&l?(m=_e(()=>W(s,l)),m(e.delayError)):(clearTimeout(F),m=null,l?w(r.errors,s,l):R(r.errors,s)),(l?!Y(d,l):d)||!M(f)||u){const y={...f,...u?{isValid:n}:{},errors:r.errors,name:s};r={...r,...y},_.state.next(y)}x[s]--,v.isValidating&&!Object.values(x).some(y=>y)&&(_.state.next({isValidating:!1}),x={})},K=async s=>t.resolver?await t.resolver({...o},t.context,Sr(s||g.mount,i,t.criteriaMode,t.shouldUseNativeValidation)):{},z=async s=>{const{errors:n}=await K();if(s)for(const l of s){const f=c(n,l);f?w(r.errors,l,f):R(r.errors,l)}else r.errors=n;return n},P=async(s,n,l={valid:!0})=>{for(const f in s){const d=s[f];if(d){const{_f:u,...y}=d;if(u){const D=g.array.has(u.name),L=await je(d,c(o,u.name),ie,t.shouldUseNativeValidation,D);if(L[u.name]&&(l.valid=!1,n))break;!n&&(c(L,u.name)?D?xr(r.errors,L,u.name):w(r.errors,u.name,L[u.name]):R(r.errors,u.name))}y&&await P(y,n,l)}}return l.valid},ae=()=>{for(const s of g.unMount){const n=c(i,s);n&&(n._f.refs?n._f.refs.every(l=>!xe(l)):!xe(n._f.ref))&&be(s)}g.unMount=new Set},b=(s,n)=>(s&&n&&w(o,s,n),!Y(le(),a)),A=(s,n,l)=>{const f={...h.mount?o:k(n)?a:I(s)?{[s]:n}:n};return Ze(s,g,f,l)},E=s=>se(c(h.mount?o:a,s,e.shouldUnregister?c(a,s,[]):[])),T=(s,n,l={})=>{const f=c(i,s);let d=n;if(f){const u=f._f;u&&(!u.disabled&&w(o,s,nr(n,u)),d=De&&Se(u.ref)&&O(n)?"":n,sr(u.ref)?[...u.ref.options].forEach(y=>y.selected=d.includes(y.value)):u.refs?te(u.ref)?u.refs.length>1?u.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(d)?!!d.find(D=>D===y.value):d===y.value)):u.refs[0]&&(u.refs[0].checked=!!d):u.refs.forEach(y=>y.checked=y.value===d):Oe(u.ref)?u.ref.value="":(u.ref.value=d,u.ref.type||_.watch.next({name:s})))}(l.shouldDirty||l.shouldTouch)&&Z(s,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&J(s)},p=(s,n,l)=>{for(const f in n){const d=n[f],u=`${s}.${f}`,y=c(i,u);(g.array.has(s)||!ge(d)||y&&!y._f)&&!X(d)?p(u,d,l):T(u,d,l)}},U=(s,n,l={})=>{const f=c(i,s),d=g.array.has(s),u=G(n);w(o,s,u),d?(_.array.next({name:s,values:o}),(v.isDirty||v.dirtyFields)&&l.shouldDirty&&(r.dirtyFields=we(a,o),_.state.next({name:s,dirtyFields:r.dirtyFields,isDirty:b(s,u)}))):f&&!f._f&&!O(u)?p(s,u,l):T(s,u,l),Ne(s,g)&&_.state.next({}),_.watch.next({name:s})},ee=async s=>{const n=s.target;let l=n.name;const f=c(i,l);if(f){let d,u;const y=n.type?Ve(f._f):ze(s),D=s.type===fe.BLUR||s.type===fe.FOCUS_OUT,L=!Er(f._f)&&!t.resolver&&!c(r.errors,l)&&!f._f.deps||Cr(D,c(r.touchedFields,l),r.isSubmitted,B,j),oe=Ne(l,g,D);w(o,l,y),D?(f._f.onBlur&&f._f.onBlur(s),m&&m(0)):f._f.onChange&&f._f.onChange(s);const Ae=Z(l,y,D,!1),dr=!M(Ae)||oe;if(!D&&_.watch.next({name:l,type:s.type}),L)return dr&&_.state.next({name:l,...oe?{}:Ae});if(!D&&oe&&_.state.next({}),x[l]=(x[l],1),_.state.next({isValidating:!0}),t.resolver){const{errors:Be}=await K([l]),yr=Ke(r.errors,i,l),Pe=Ke(Be,i,yr.name||l);d=Pe.error,l=Pe.name,u=M(Be)}else d=(await je(f,c(o,l),ie,t.shouldUseNativeValidation))[l],u=await $(!0);f._f.deps&&J(f._f.deps),ne(l,u,d,Ae)}},J=async(s,n={})=>{let l,f;const d=ue(s);if(_.state.next({isValidating:!0}),t.resolver){const u=await z(k(s)?s:d);l=M(u),f=s?!d.some(y=>c(u,y)):l}else s?(f=(await Promise.all(d.map(async u=>{const y=c(i,u);return await P(y&&y._f?{[u]:y}:y)}))).every(Boolean),!(!f&&!r.isValid)&&$()):f=l=await P(i);return _.state.next({...!I(s)||v.isValid&&l!==r.isValid?{}:{name:s},...t.resolver||!s?{isValid:l}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!f&&ke(i,u=>u&&c(r.errors,u),s?d:g.mount),f},le=s=>{const n={...a,...h.mount?o:{}};return k(s)?n:I(s)?c(n,s):s.map(l=>c(n,l))},Ue=(s,n)=>({invalid:!!c((n||r).errors,s),isDirty:!!c((n||r).dirtyFields,s),isTouched:!!c((n||r).touchedFields,s),error:c((n||r).errors,s)}),ar=s=>{s?ue(s).forEach(n=>R(r.errors,n)):r.errors={},_.state.next({errors:r.errors})},lr=(s,n,l)=>{const f=(c(i,s,{_f:{}})._f||{}).ref;w(r.errors,s,{...n,ref:f}),_.state.next({name:s,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&f&&f.focus&&f.focus()},or=(s,n)=>de(s)?_.watch.subscribe({next:l=>s(A(void 0,n),l)}):A(s,n,!0),be=(s,n={})=>{for(const l of s?ue(s):g.mount)g.mount.delete(l),g.array.delete(l),c(i,l)&&(n.keepValue||(R(i,l),R(o,l)),!n.keepError&&R(r.errors,l),!n.keepDirty&&R(r.dirtyFields,l),!n.keepTouched&&R(r.touchedFields,l),!t.shouldUnregister&&!n.keepDefaultValue&&R(a,l));_.watch.next({}),_.state.next({...r,...n.keepDirty?{isDirty:b()}:{}}),!n.keepIsValid&&$()},Fe=(s,n={})=>{let l=c(i,s);const f=ye(n.disabled);return w(i,s,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:s}},name:s,mount:!0,...n}}),g.mount.add(s),l?f&&w(o,s,n.disabled?void 0:c(o,s,Ve(l._f))):S(s,!0,n.value),{...f?{disabled:n.disabled}:{},...t.shouldUseNativeValidation?{required:!!n.required,min:re(n.min),max:re(n.max),minLength:re(n.minLength),maxLength:re(n.maxLength),pattern:re(n.pattern)}:{},name:s,onChange:ee,onBlur:ee,ref:d=>{if(d){Fe(s,n),l=c(i,s);const u=k(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,y=Dr(u),D=l._f.refs||[];if(y?D.find(L=>L===u):u===l._f.ref)return;w(i,s,{_f:{...l._f,...y?{refs:[...D.filter(xe),u,...Array.isArray(c(a,s))?[{}]:[]],ref:{type:u.type,name:s}}:{ref:u}}}),S(s,!1,void 0,u)}else l=c(i,s,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(Je(g.array,s)&&h.action)&&g.unMount.add(s)}}},Me=()=>t.shouldFocusError&&ke(i,s=>s&&c(r.errors,s),g.mount),ur=(s,n)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let f=!0,d=G(o);_.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:u,values:y}=await K();r.errors=u,d=y}else await P(i);M(r.errors)?(_.state.next({errors:{},isSubmitting:!0}),await s(d,l)):(n&&await n({...r.errors},l),Me())}catch(u){throw f=!1,u}finally{r.isSubmitted=!0,_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(r.errors)&&f,submitCount:r.submitCount+1,errors:r.errors})}},cr=(s,n={})=>{c(i,s)&&(k(n.defaultValue)?U(s,c(a,s)):(U(s,n.defaultValue),w(a,s,n.defaultValue)),n.keepTouched||R(r.touchedFields,s),n.keepDirty||(R(r.dirtyFields,s),r.isDirty=n.defaultValue?b(s,c(a,s)):b()),n.keepError||(R(r.errors,s),v.isValid&&$()),_.state.next({...r}))},fr=(s,n={})=>{const l=s||a,f=G(l),d=s&&!M(s)?f:a;if(n.keepDefaultValues||(a=l),!n.keepValues){if(n.keepDirtyValues)for(const u of g.mount)c(r.dirtyFields,u)?w(d,u,c(o,u)):U(u,c(d,u));else{if(De&&k(s))for(const u of g.mount){const y=c(i,u);if(y&&y._f){const D=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;try{if(Se(D)){D.closest("form").reset();break}}catch{}}}i={}}o=e.shouldUnregister?n.keepDefaultValues?G(a):{}:f,_.array.next({values:d}),_.watch.next({values:d})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!v.isValid||!!n.keepIsValid,h.watch=!!e.shouldUnregister,_.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty||n.keepDirtyValues?r.isDirty:!!(n.keepDefaultValues&&!Y(s,a)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirty||n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&s?we(a,s):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:Fe,unregister:be,getFieldState:Ue,_executeSchema:K,_focusError:Me,_getWatch:A,_getDirty:b,_updateValid:$,_removeUnmounted:ae,_updateFieldArray:q,_getFieldArray:E,_subjects:_,_proxyFormState:v,get _fields(){return i},get _formValues(){return o},get _stateFlags(){return h},set _stateFlags(s){h=s},get _defaultValues(){return a},get _names(){return g},set _names(s){g=s},get _formState(){return r},set _formState(s){r=s},get _options(){return t},set _options(s){t={...t,...s}}},trigger:J,register:Fe,handleSubmit:ur,watch:or,setValue:U,getValues:le,reset:(s,n)=>fr(de(s)?s(o):s,n),resetField:cr,clearErrors:ar,unregister:be,setError:lr,setFocus:(s,n={})=>{const l=c(i,s),f=l&&l._f;if(f){const d=f.refs?f.refs[0]:f.ref;d.focus&&(d.focus(),n.shouldSelect&&d.select())}},getFieldState:Ue}}function Pr(e={}){const t=V.useRef(),[r,i]=V.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...Or(e),formState:r});const a=t.current.control;return a._options=e,Ce({subject:a._subjects.state,callback:V.useCallback(o=>{Xe(o,a._proxyFormState,!0)&&(a._formState={...a._formState,...o},i({...a._formState}))},[a])}),V.useEffect(()=>{a._stateFlags.mount||(a._proxyFormState.isValid&&a._updateValid(),a._stateFlags.mount=!0),a._stateFlags.watch&&(a._stateFlags.watch=!1,a._subjects.state.next({})),a._removeUnmounted()}),V.useEffect(()=>{r.submitCount&&a._focusError()},[a,r.submitCount]),t.current.formState=Qe(r,a),t.current}const pr=({control:e,rules:t,name:r,children:i,...a})=>pe(Ar,{rules:t,control:e,name:r,render:({field:o})=>{var h;return pe(hr,{...a,value:(h=o.value)!=null?h:"",onChange:o.onChange,children:i})}});export{Ar as C,pr as F,Fr as a,Pr as u};