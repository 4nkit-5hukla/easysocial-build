import{r as t,j as r,n as v,as as D,a as R,B as K,R as E,a0 as F}from"./index.be83498f.js";import{L as T}from"./List.52405447.js";import{L as z}from"./ListItem.f4e4c30f.js";import{L as J}from"./ListItemText.411df549.js";import{S as U}from"./Search.24b19a7d.js";import{d as Y}from"./Select.10d84ef4.js";import{d as k}from"./index.f3d48750.js";import"./listItemButtonClasses.f171b0ff.js";import"./isMuiElement.06135e34.js";import"./listItemTextClasses.22edd101.js";import"./useFormControl.62e75b61.js";import"./Menu.9e38a63f.js";import"./useControlled.0fd5f443.js";function q(){const e=t.exports.useRef(!1);return t.exports.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.exports.useCallback(()=>e.current,[])}const H="GgRS",V="jPPX",W="_5-J2",X="UTL7",Q="DlNT",S={List:H,ListItem:V,secondary:W,Active:X,CustomButton:Q},Z=({predictions:e,google:u,onChange:c,recenterMap:a,isOpen:i,closeList:C})=>{const[g,m]=t.exports.useState(null),b=({place:n,main_text:d,secondary_text:o})=>{new u.maps.Geocoder().geocode({placeId:n.place_id},(l,h)=>{if(h!=="OK"&&l)return;const y=l[0].geometry.location,{lat:B,lng:_}=y;c({lng:_(),lat:B(),address:o,name:d}),m(null),C()})},f=({place:n})=>{new u.maps.Geocoder().geocode({placeId:n.place_id},(o,x)=>{if(x!=="OK"&&o)return;const l=o[0].geometry.location,{lat:h,lng:y}=l;a({lat:h(),lng:y()}),m(o[0].place_id)})};return r(T,{sx:{display:i&&e&&e.length>0?"block":"none"},classes:{root:S.List},children:e.map((n,d)=>{const{structured_formatting:o}=n;return r(z,{button:!0,classes:{root:v(S.ListItem,g===n.place_id&&S.Active)},onClick:()=>{f({place:n}),b({place:n,main_text:o.main_text,secondary_text:o.secondary_text})},children:r(J,{classes:{root:v(S.root),secondary:v(S.secondary)},primary:o.main_text,secondary:o.secondary_text||""})},n.place_id)})})},ee="SAhR",te="n2Ln",oe="A48M",A={Search_Box:ee,Input_Container:te,InputField:oe};const se=({google:e,onChange:u,initialCenter:c})=>{var _;const a=q(),[i,C]=t.exports.useState({lat:Number(c.lat)||20.5937,lng:Number(c.lng)||78.9629}),[g,m]=t.exports.useState(!1),b=t.exports.useRef(),f=t.exports.useRef(),[n,d]=t.exports.useState([{lat:Number(c.lat)||20.5937,lng:Number(c.lat)||78.9629}]),[o,x]=t.exports.useState([]),l=t.exports.useCallback(({lat:s,lng:p})=>{a()&&(d(()=>[{lat:s,lng:p}]),C({lat:s,lng:p}))},[a]);t.exports.useEffect(()=>{l(c)},[]);const h=t.exports.useCallback((s,p,{latLng:N})=>{const{lat:w,lng:M}=N,G=new e.maps.Geocoder,P={lat:w(),lng:M()},O=new e.maps.places.PlacesService(p);G.geocode({location:P}).then(I=>{if(I.results[0]){const $={placeId:I.results[0].place_id,fields:["name","formatted_address","place_id","geometry"]};O.getDetails($,(L,j)=>{j===e.maps.places.PlacesServiceStatus.OK&&L&&L.geometry&&L.geometry.location&&u({...P,name:L.name,address:L.formatted_address})})}}).catch(I=>window.alert("Geocoder failed due to: "+I)),a()&&d(()=>[{lat:w(),lng:M()}])},[a]),y=t.exports.useCallback(()=>{i&&new e.maps.places.SearchBox(f.current)},[i,e.maps]),B=function(s,p){return p!==e.maps.places.PlacesServiceStatus.OK||!s?a()&&x([]):a()&&x(s)};return i&&r(D,{children:R("div",{style:{width:"100%",position:"relative",height:"300px",display:"flex"},children:[r(K,{sx:{width:"100%",position:"relative",height:"100%","& div[aria-roledescription='map']":{cursor:"crosshair !important"}},children:r(k.Map,{ref:b,google:e,zoom:15,initialCenter:i,centerAroundCurrentLocation:!0,onClick:h,onBoundsChanged:y,center:i,panControl:!0,draggable:!0,mapTypeControl:!1,fullscreenControl:!1,zoomControl:!0,streetViewControl:!1,children:n.map(s=>r(k.Marker,{position:s},`${s.lat}-${s.lng}`))})}),r("div",{className:v(A.Search_Box),children:R("div",{className:A.Input_Container,children:[R(E,{sx:{p:"5px 10px",display:"flex",alignItems:"center",width:"95%",borderRadius:"8px",margin:"2% auto"},children:[r(F,{sx:{p:"10px"},"aria-label":"search",children:r(U,{})}),r(Y,{onFocus:()=>m(!0),onInput:({target:s})=>{new e.maps.places.AutocompleteService().getPlacePredictions({input:s.value},B)},inputRef:f,sx:{ml:1,flex:1},placeholder:"Search your Location",inputProps:{"aria-label":"Search Your Location"}})]}),g&&r(Z,{isOpen:g&&((_=f.current)==null?void 0:_.value.length)>=1,recenterMap:l,google:e,predictions:o,onChange:u,closeList:()=>m(!1)})]})})]})})},ye=k.GoogleApiWrapper({apiKey:"AIzaSyDJfxykafBBE2rkeU5EHbkl7j2DmcGfNYA"})(se);export{ye as default};
