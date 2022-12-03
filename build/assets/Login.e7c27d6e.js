import{j as o,I as N,u as I,aj as k,r as l,a as t,V as G,c as f,A as V,W}from"./index.286d7f97.js";import{u as $,F}from"./FormTextField.9310df81.js";import{g as M}from"./mui-tel-input.es.05a90aa6.js";import{I as m,P as a}from"./Auth.bb306ec0.js";import{F as O,G as D}from"./Grid.43b92e73.js";import{F as b,a as R}from"./Form.bf7ae0d3.js";import{F as S,b as _}from"./Style.ced39dc3.js";import{C as j}from"./Card.24e39f91.js";import{I as z}from"./InputAdornment.85efb26d.js";import{V as B}from"./Visibility.8410e375.js";import{V as U}from"./VisibilityOff.cb223919.js";import"./TextField.3f547d15.js";import"./Select.a628664b.js";import"./useFormControl.14cf7bab.js";import"./isMuiElement.1e9ba36c.js";import"./Menu.beea8aa9.js";import"./List.12557ecb.js";import"./useControlled.6e207072.js";import"./ListItemText.7f41854e.js";import"./listItemTextClasses.cda4af54.js";import"./MenuItem.25444359.js";import"./dividerClasses.7e07a65e.js";import"./ArrowRight.7576e371.js";const X="_48mr",q="aEbD",H="NzPd",J="-oSe",K="HEnC",Q="Aeze",Y="poGz",Z="OC8M",e={LoginGfx:X,LoginForm:q,LoginFormCard:H,LoginTitle:J,SignIn:K,ForgotPassword:Q,LoginCaption:Y,LoginCaptionLink:Z},oo=()=>o("div",{className:e.LoginGfx,children:o(N,{src:"/static/images/svg/login.svg",alt:"Login Graphics",width:455,height:478})}),eo=()=>{const{country:c,callingCode:d,setAccessToken:w}=I(),{setErrorMessage:C}=k(),x=`+${d}`.length,[P,g]=l.exports.useState(m.EMAIL),u=6,[p,A]=l.exports.useState(a.PASSWORD),{control:h,handleSubmit:T,watch:E,setValue:i}=$({defaultValues:{email:"",password:""}}),{email:s,mobile_number:r}=E(),y=()=>{A(p===a.PASSWORD?a.TEXT:a.PASSWORD)},v=async L=>{const n=await V.doSignIn(L);if(!n.success)return C(n.message);w(n.payload.token),console.log(n.message)};return l.exports.useEffect(()=>{s&&s.length===u+1&&`${parseInt(s)}`.length===s.length&&(g(m.MOBILE),i("mobile_number",`+${d}${s}`),i("email",void 0))},[s]),l.exports.useEffect(()=>{r&&r.length===u+x&&(g(m.EMAIL),i("email",r.replace(`+${d}`,"")),i("mobile_number",void 0))},[r]),t("div",{className:e.LoginForm,children:[t(j,{component:"form",className:e.LoginFormCard,onSubmit:T(v),children:[o("h1",{className:e.LoginTitle,children:"Sign In, to get started!"}),o(O,{children:t(D,{children:[o(b,{children:P===m.EMAIL?o(F,{control:h,name:"email",label:"Email",placeholder:"Email",required:!0,sx:S,autoFocus:!0}):o(M,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:c,value:r,onChange:(L,n)=>{i("mobile_number",n.numberValue)},variant:"filled",sx:_,autoFocus:!0})}),o(b,{children:o(F,{control:h,name:"password",label:"Password",placeholder:"Password",type:p,required:!0,sx:S,InputLabelProps:{shrink:!0},InputProps:{endAdornment:o(z,{position:"end",children:o(G,{onClick:y,children:p===a.PASSWORD?o(B,{}):o(U,{})})})}})}),o(R,{type:"submit",className:e.SignIn,children:"Sign In"}),o(f,{to:"/forgot-password",className:e.ForgotPassword,children:"Forgot Password?"})]})})]}),t("div",{className:e.LoginCaption,children:["Don\u2019t have an account? ",o(f,{to:"/sign-up",className:e.LoginCaptionLink,children:"Sign Up"})]})]})},so="zdw2",no={LoginWrapper:so},Eo=()=>{const{isTablet:c}=I();return t(l.exports.Fragment,{children:[o(W,{children:o("title",{children:"Login"})}),t("div",{className:no.LoginWrapper,children:[c&&o(oo,{}),o(eo,{})]})]})};export{Eo as default};