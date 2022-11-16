import{r as c,j as e,p as w,ao as M,au as K,a as v,B as X,X as j,a0 as z,al as q}from"./index.2958bef2.js";import{F as U}from"./FormTextField.4727a3f8.js";import{L as V}from"./List.cd814327.js";import{L as Z}from"./ListItem.05aff9be.js";import{L as H}from"./ListItemText.3f02ea4b.js";import{S as J}from"./Search.83606af7.js";import{e as Y}from"./Select.6f6db623.js";import{d as B}from"./index.f3d48750.js";import{C as E,l as W,p as Q}from"./Tags.2e2b143c.js";import{F as ee,G as te}from"./Grid.8988d240.js";import{F as A}from"./Form.b82e313e.js";import{d as oe}from"./Styles.3fefcec0.js";import{C as ae}from"./Card.52f5ce0c.js";import{C as re}from"./CardContent.49a60cfe.js";import{M as T}from"./MenuItem.9aa4227e.js";import"./index.esm.f465a5ab.js";import"./TextField.3e2fefcc.js";import"./listItemButtonClasses.f50f9b7b.js";import"./isMuiElement.999642a1.js";import"./listItemTextClasses.a3a32652.js";import"./Menu.beae184f.js";import"./useControlled.cdbc527e.js";import"./withStyles.11e0ec01.js";import"./ArrowRight.c56f0d14.js";const se="SAhR",ne="n2Ln",ce="A48M",k={Search_Box:se,Input_Container:ne,InputField:ce};const ie="GgRS",le="jPPX",de="_5-J2",me="UTL7",pe="DlNT",_={List:ie,ListItem:le,secondary:de,Active:me,CustomButton:pe},ue=({predictions:t,google:m,onChange:s,recenterMap:n,isOpen:p,closeList:i})=>{const[l,u]=c.exports.useState(null),d=({place:r,main_text:C,secondary_text:a})=>{new m.maps.Geocoder().geocode({placeId:r.place_id},(h,L)=>{if(L!=="OK"&&h)return;const g=h[0].geometry.location,{lat:b,lng:o}=g;s({lng:o(),lat:b(),address:a,name:C}),u(null),i()})},x=({place:r})=>{new m.maps.Geocoder().geocode({placeId:r.place_id},(a,S)=>{if(S!=="OK"&&a)return;const h=a[0].geometry.location,{lat:L,lng:g}=h;n({lat:L(),lng:g()}),u(a[0].place_id)})};return e(V,{sx:{display:p&&t&&t.length>0?"block":"none"},classes:{root:_.List},children:t.map((r,C)=>{const{structured_formatting:a}=r;return e(Z,{button:!0,classes:{root:w(_.ListItem,l===r.place_id&&_.Active)},onClick:()=>{x({place:r}),d({place:r,main_text:a.main_text,secondary_text:a.secondary_text})},children:e(H,{classes:{root:w(_.root),secondary:w(_.secondary)},primary:a.main_text,secondary:a.secondary_text||""})},r.place_id)})})},fe=({google:t,onChange:m,initialCenter:s})=>{var b;const[n,p]=c.exports.useState({lat:Number(s.lat)||20.5937,lng:Number(s.lng)||78.9629}),[i,l]=c.exports.useState(!1),u=M.useRef(),d=M.useRef(),[x,r]=c.exports.useState([{lat:Number(s.lat)||20.5937,lng:Number(s.lat)||78.9629}]),[C,a]=c.exports.useState([]),S=c.exports.useCallback(({lat:o,lng:f})=>{r(()=>[{lat:o,lng:f}]),p({lat:o,lng:f})},[t.maps]);c.exports.useEffect(()=>{S(s)},[]);const h=c.exports.useCallback((o,f,{latLng:G})=>{const{lat:F,lng:R}=G,N=new t.maps.Geocoder,P={lat:F(),lng:R()},O=new t.maps.places.PlacesService(f);N.geocode({location:P}).then(I=>{if(I.results[0]){const $={placeId:I.results[0].place_id,fields:["name","formatted_address","place_id","geometry"]};O.getDetails($,(y,D)=>{D===t.maps.places.PlacesServiceStatus.OK&&y&&y.geometry&&y.geometry.location&&m({...P,name:y.name,address:y.formatted_address})})}}).catch(I=>window.alert("Geocoder failed due to: "+I)),r(()=>[{lat:F(),lng:R()}])},[]),L=c.exports.useCallback(()=>{n&&new t.maps.places.SearchBox(d.current)},[n,t.maps]),g=function(o,f){return f!==t.maps.places.PlacesServiceStatus.OK||!o?a([]):a(o)};return n&&e(K,{children:v("div",{style:{width:"100%",position:"relative",height:"300px",display:"flex"},children:[e(X,{sx:{width:"100%",position:"relative",height:"100%","& div[aria-roledescription='map']":{cursor:"crosshair !important"}},children:e(B.Map,{ref:u,google:t,zoom:15,initialCenter:n,centerAroundCurrentLocation:!0,onClick:h,onBoundsChanged:L,center:n,panControl:!0,draggable:!0,mapTypeControl:!1,fullscreenControl:!1,zoomControl:!0,streetViewControl:!1,children:x.map(o=>e(B.Marker,{position:o},`${o.lat}-${o.lng}`))})}),e("div",{className:w(k.Search_Box),children:v("div",{className:k.Input_Container,children:[v(j,{sx:{p:"5px 10px",display:"flex",alignItems:"center",width:"95%",borderRadius:"8px",margin:"2% auto"},children:[e(z,{sx:{p:"10px"},"aria-label":"search",children:e(J,{})}),e(Y,{onFocus:()=>l(!0),onInput:({target:o})=>{new t.maps.places.AutocompleteService().getPlacePredictions({input:o.value},g)},inputRef:d,sx:{ml:1,flex:1},placeholder:"Search your Location",inputProps:{"aria-label":"Search Your Location"}})]}),i&&e(ue,{isOpen:i&&((b=d.current)==null?void 0:b.value.length)>=1,recenterMap:S,google:t,predictions:C,onChange:m,closeList:()=>l(!1)})]})})]})})},he=B.GoogleApiWrapper({apiKey:"AIzaSyDeJHLt1lNrBenb-50Uuz-VBRslc8FqYcU"})(fe),Ke=({control:t,watch:m,updatePlace:s})=>{var u;const{timeZoneList:n}=q(),{latitude:p,longitude:i,timezone:l}=m();return e(ae,{elevation:0,sx:E,children:v(re,{sx:W,children:[e(Q,{children:"Location Tagging & Timezone"}),e(A,{children:e(he,{onChange:s,initialCenter:{lat:p!=null?p:20.5937,lng:i!=null?i:78.9629}})}),e(ee,{children:e(te,{children:e(A,{children:v(U,{select:!0,control:t,label:"Time Zone",name:"timezone.label",sx:oe,required:!0,defaultValue:(u=l==null?void 0:l.label)!=null?u:"",children:[e(T,{value:"",disabled:!0,children:"Select Time Zone"}),n.map((d,x)=>e(T,{value:d.label,children:d.label},x))]})})})})]})})};export{Ke as default};
