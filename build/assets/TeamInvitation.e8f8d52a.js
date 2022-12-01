var _=Object.defineProperty;var E=(s,r,o)=>r in s?_(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o;var f=(s,r,o)=>(E(s,typeof r!="symbol"?r+"":r,o),o);import{j as e,r as m,a as n,I as q,ap as S,c4 as k,am as D,u as v,V as G,W as M,c6 as X}from"./index.cec7120b.js";import{A as j}from"./AuthProvider.6cb162cc.js";import{u as B,F as u}from"./FormTextField.019c4658.js";import{g as $}from"./mui-tel-input.es.906b34ab.js";import{P as i}from"./Auth.bb306ec0.js";import{F as H,G as J}from"./Grid.4237a7b2.js";import{F as l,a as K}from"./Form.eda6b8a2.js";import{b as U,F as g}from"./Style.ced39dc3.js";import{C as Z}from"./Card.f238ca4f.js";import{I as z}from"./InputAdornment.ebd1d839.js";import{V as L}from"./Visibility.efa22b68.js";import{V as Q}from"./VisibilityOff.ec050b88.js";import"./tslib.es6.61e9e735.js";import"./TextField.9a0b3901.js";import"./Select.ed33f368.js";import"./useFormControl.2e215265.js";import"./isMuiElement.d9d5f399.js";import"./Menu.ad604829.js";import"./List.f61e1c40.js";import"./useControlled.5f64f480.js";import"./ListItemText.81891b6a.js";import"./listItemTextClasses.1b518b65.js";import"./MenuItem.d46dccf0.js";import"./dividerClasses.25d8e604.js";import"./ArrowRight.1466b508.js";const Y="Zrbq",ee={ImgWrapper:Y},re=()=>e(m.exports.Fragment,{children:e("div",{className:ee.ImgWrapper,children:n("div",{style:{position:"fixed"},children:[n("h1",{children:["Sign up and unbox ",e("br",{}),"a pandora of marketing tools."]}),e(q,{src:"/static/images/svg/login.svg",alt:"Signup"})]})})});class h{}f(h,"getInvitation",async r=>await S(`/invitation/${r}`,"GET")),f(h,"Signup",async r=>await S("/auth/invited-sign-up","POST",{data:r}));const se="Hd2F",te="VOpp",F={Form:se,Title:te},ae=()=>{const{invitation_id:s}=k(),{setErrorMessage:r,setSuccessMessage:o}=D(),{country:P,countryName:w,setAccessToken:x,setUserId:I}=v(),[c,W]=m.exports.useState(i.PASSWORD),{control:p,handleSubmit:T,watch:O,setValue:d}=B({defaultValues:{name:"",mobile_number:"",email:"",country:w,password:"",confirm_password:""}}),{name:R,mobile_number:A}=O(),C=async t=>{const a=await h.Signup(t);if(!a.success)return r(a.messages?a.messages.errors[0].message:a.message);x(a.payload.token),I(a.payload.user_id),o(a.message)},V=()=>{W(c===i.PASSWORD?i.TEXT:i.PASSWORD)},N=async()=>{const t=await h.getInvitation(s);t.success?(d("mobile_number",t.payload.number),d("name",t.payload.name),d("email",t.payload.email)):r(t.message)};return m.exports.useEffect(()=>{N()},[]),n(Z,{component:"form",onSubmit:T(C),className:F.Form,children:[e("div",{className:F.Title,children:"Register & Accept"}),e(H,{children:n(J,{children:[e(l,{children:e($,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:P,value:A,onChange:(t,a)=>{var y;d("mobile_number",(y=a.numberValue)!=null?y:t)},variant:"filled",sx:U,inputProps:{readOnly:!0}})}),e(l,{children:e(u,{control:p,name:"name",label:"Name",placeholder:"Name",value:R,required:!0,sx:g,inputProps:{readOnly:!0}})}),e(l,{children:e(u,{control:p,name:"email",label:"Email",placeholder:"Email",required:!0,sx:g,inputProps:{readOnly:!0}})}),e(l,{children:e(u,{control:p,name:"password",label:"Password",placeholder:"Password",type:c,required:!0,sx:g})}),e(l,{children:e(u,{control:p,name:"confirm_password",label:"Confirm Password",placeholder:"Confirm Password",type:c,required:!0,sx:g,InputProps:{endAdornment:e(z,{position:"end",children:e(G,{onClick:V,children:c===i.PASSWORD?e(L,{}):e(Q,{})})})}})}),e(K,{type:"submit",children:"Register"})]})})]})},oe=()=>e(m.exports.Fragment,{children:e(ae,{})}),ne="oBgf",ie="-KEX",le="-MVJ",b={OuterWrapper:ne,InnerWrapper:ie,RightWrapper:le},Ee=()=>{const{isTablet:s}=v();return n(m.exports.Fragment,{children:[e(M,{children:e("title",{children:"Signup"})}),e(X,{children:e(j,{children:e("div",{className:b.OuterWrapper,children:n("div",{className:b.InnerWrapper,children:[s&&e(re,{}),e("div",{className:b.RightWrapper,children:e(oe,{})})]})})})})]})};export{Ee as default};