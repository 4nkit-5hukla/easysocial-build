import{ai as R,u as P,c7 as j,r as F,j as e,a as s,$ as G,A as L,B as X,W as z,c8 as $,I as H}from"./index.b6939ac4.js";import{u as O}from"./index.esm.0195c433.js";import{g as M}from"./mui-tel-input.es.4c2f29f7.js";import{P as g}from"./Auth.bb306ec0.js";import{F as E,G as k}from"./Grid.c94a65f1.js";import{F as i,a as B}from"./Form.d6354f4c.js";import{F as d}from"./FormTextField.02b305ff.js";import{a as q,F as S}from"./Style.57c2f24e.js";import{C as D}from"./Card.693f787f.js";import{M as T}from"./MenuItem.61818f9c.js";import{I as Q}from"./InputAdornment.740865a9.js";import{V as Y}from"./Visibility.f0994eff.js";import{V as J}from"./VisibilityOff.80a3930e.js";import{u as _,a as K,R as U,A as Z}from"./AuthProvider.d84b9e9f.js";import{L as ee}from"./Link.e4e78548.js";import"./ListItemIcon.a766ad45.js";import"./listItemTextClasses.ceb65530.js";import"./List.cdccc7e3.js";import"./ListItemText.8189d4ac.js";import"./TextField.d30c805e.js";import"./Select.479df9cf.js";import"./useFormControl.d77c63c8.js";import"./isMuiElement.b8c25462.js";import"./Menu.ebd65fdc.js";import"./useControlled.4ac3feb9.js";import"./ArrowRight.60cb55a6.js";import"./dividerClasses.5f8b1a07.js";import"./tslib.es6.61e9e735.js";const re="_37-t",te="QXWC",se="ch5p",W={Form:re,SignupBtm:te,FormSelectField:se,"MuiFilledInput-root":"ARHM","Mui-focused":"jjzt"},ne=({number:n})=>{const{setErrorMessage:o,setSuccessMessage:h}=R(),{setAccessToken:f,navigate:v}=P(),{country:m,countryName:u}=P(),{countriesList:A}=j(),[p,V]=F.exports.useState(g.PASSWORD),{control:c,handleSubmit:C,watch:y,setValue:x}=O({defaultValues:{mobile_number:n,name:"",country:u!=null?u:"",email:"",password:"",confirm_password:""}}),{mobile_number:I,country:b}=y(),a=async t=>{const r=await L.Signup(t);if(!r.success)return o(r.messages?r.messages.errors[0].message:r.message);f(r.payload.token),h(r.message),v("business-setup")},l=()=>{V(p===g.PASSWORD?g.TEXT:g.PASSWORD)};return e(D,{component:"form",onSubmit:C(a),className:W.Form,children:e(E,{children:s(k,{children:[e(i,{children:e(M,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:m,value:I,onChange:(t,r)=>{var N;x("mobile_number",(N=r.numberValue)!=null?N:t)},variant:"filled",sx:q})}),e(i,{children:e(d,{control:c,name:"name",label:"Name",placeholder:"Name",required:!0,sx:S})}),e(i,{children:e(d,{control:c,name:"email",label:"Email",placeholder:"Email",required:!0,sx:S})}),e(i,{children:s(d,{select:!0,control:c,label:"Country",name:"country",className:W.FormSelectField,required:!0,defaultValue:b!=null?b:"",children:[e(T,{value:"",disabled:!0,children:"Select Country"}),A.map((t,r)=>e(T,{value:t.name,children:t.name},r))]})}),e(i,{children:e(d,{control:c,name:"password",label:"Password",placeholder:"Password",type:p,required:!0,sx:S})}),e(i,{children:e(d,{control:c,name:"confirm_password",label:"Confirm Password",placeholder:"Confirm Password",type:p,required:!0,sx:S,InputProps:{endAdornment:e(Q,{position:"end",children:e(G,{onClick:l,children:p===g.PASSWORD?e(Y,{}):e(J,{})})})}})}),e(B,{type:"submit",children:"Register"})]})})})},oe=({setNumber:n})=>{const{setErrorMessage:o,setSuccessMessage:h}=R(),{country:f}=P(),{auth:v,isOTPSent:m}=_(),{sendOTP:u,otpVerification:A}=K(),{control:p,handleSubmit:V,watch:c,setValue:C}=O({defaultValues:{number:"",otp:""}}),{number:y}=c(),x=window,I=async a=>{const l=a.number,t=a.otp;if(!m){if(!l)return o("Enter mobile number");const r=await u(l);r.success?h(r.message):o(r.message)}if(m){if(!t)return o("Enter OTP");const r=await A(t);!r.success&&o(r.message),n(l)}},b=()=>{x.recaptchaVerifier=new U("captcha-container",{size:"invisible",callback:async function(){const a=await u(y);x.confirmationResult=a},"expired-callback":function(){alert("try again!")}},v)};return F.exports.useEffect(()=>{b()},[]),s(D,{component:"form",onSubmit:V(I),className:W.Form,children:[e(E,{children:s(k,{children:[e(i,{children:e(M,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:f,value:y,onChange:(a,l)=>{var t;C("number",(t=l.numberValue)!=null?t:a)},variant:"filled",sx:q,inputProps:{required:!0}})}),m&&e(i,{children:e(d,{control:p,name:"otp",label:"otp",type:"number",placeholder:"otp",required:!0,sx:S})}),e(B,{type:"submit",id:"sign-in-button",children:m?"Verify":"Get OTP"})]})}),s(X,{className:W.SignupBtm,children:["Already have an account? ",e(ee,{href:"/login",children:"Sign In"})]}),e("div",{id:"captcha-container"})]})},ae=()=>{const{otpVerified:n}=_(),[o,h]=F.exports.useState("");return s(F.exports.Fragment,{children:[!n&&e(oe,{setNumber:f=>h(f)}),n&&e(ne,{number:o})]})},ie="Cdk4",ce="Y2Lj",le="x0BD",me="NIxP",w={OuterWrapper:ie,InnerWrapper:ce,ImgWrapper:le,RightWrapper:me},De=()=>{const{isTablet:n}=P();return s(F.exports.Fragment,{children:[e(z,{children:e("title",{children:"Signup"})}),e($,{children:e(Z,{children:e("div",{className:w.OuterWrapper,children:s("div",{className:w.InnerWrapper,children:[n&&e("div",{className:w.ImgWrapper,children:s("div",{style:{position:"fixed"},children:[s("h1",{children:["Sign up and unbox",e("br",{}),"a pandora of marketing tools."]}),e(H,{src:"static/images/svg/login.svg",alt:"Login Graphics"})]})}),e("div",{className:w.RightWrapper,children:e(ae,{})})]})})})})]})};export{De as default};