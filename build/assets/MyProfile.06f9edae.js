import{b as E,u as P,aj as L,r as t,A as u,a as o,j as e,V as D,L as p,an as M,W as k}from"./index.286d7f97.js";import{u as N,F as h}from"./FormTextField.9310df81.js";import{g as U}from"./mui-tel-input.es.05a90aa6.js";import{C as f,a as j}from"./Card.6f5b1270.js";import{c as v,H as B,d as H,e as T}from"./Wrappers.aa57e128.js";import{F as m,A as G,a as I}from"./Form.bf7ae0d3.js";import{F as V,G as _}from"./Grid.43b92e73.js";import{C as q}from"./Tags.e07c1ecf.js";import{F as g,b as R}from"./Style.ced39dc3.js";import{p as W}from"./Position.module.ff7b7fa6.js";import{L as X}from"./LeftArrow.c067a303.js";import"./TextField.3f547d15.js";import"./Select.a628664b.js";import"./useFormControl.14cf7bab.js";import"./isMuiElement.1e9ba36c.js";import"./Menu.beea8aa9.js";import"./List.12557ecb.js";import"./useControlled.6e207072.js";import"./ListItemText.7f41854e.js";import"./listItemTextClasses.cda4af54.js";import"./InputAdornment.85efb26d.js";import"./MenuItem.25444359.js";import"./dividerClasses.7e07a65e.js";import"./Card.24e39f91.js";import"./CardContent.23caf9fc.js";import"./ArrowRight.7576e371.js";import"./toConsumableArray.52b4c8e6.js";import"./ListItem.d5cef95a.js";import"./listItemButtonClasses.9fc53cf6.js";import"./styled.e7b57bd4.js";const Y="hCD5",z={ChangePasswordLink:Y},J=()=>{const{selectedBusiness:n}=E(),{isMobile:c}=P(),{setErrorMessage:b,setSuccessMessage:w}=L(),{control:d,watch:C,setValue:i,handleSubmit:F,reset:x}=N({defaultValues:{name:"",number:"",email:""}}),{number:y}=C(),S=t.exports.useRef(async()=>{try{const r=await u.authUserDetails();if(r.errors)throw Error(r.errors.pop().message);if(!r.success&&r.message)throw Error(r.message);const{name:a,mobile_number:l,email:s}=r.payload;i("name",a),i("number",l),i("email",s)}catch(r){console.log(r)}}),A=async r=>{try{const{name:a,email:l}=r,s=await u.updateUserDetails({name:a,email:l});if(s.errors)throw Error(s.errors.pop().message);if(!s.success&&s.message)throw Error(s.message);console.log(s),s.status===200?(w("User details updated successfully"),x(r)):b("Something went wrong")}catch(a){console.log(a)}};return t.exports.useEffect(()=>{S.current()},[]),o(t.exports.Fragment,{children:[c&&o(v,{children:[e(D,{component:p,to:n&&n.default_url?n.default_url:"/engage/chat",className:"icon-md-button",children:e(X,{})}),e(B,{children:"My Profile"})]}),o(t.exports.Suspense,{fallback:e(f,{className:W.AbsCenter,children:e(M,{height:72,width:72})}),children:[e(H,{children:e(T,{onSubmit:F(A),children:e(f,{elevation:0,children:o(j,{children:[e(q,{children:"Personal Details"}),e(V,{children:o(_,{children:[e(m,{children:e(h,{control:d,name:"name",label:"Name",placeholder:"Name",required:!0,sx:g})}),e(m,{children:e(U,{label:"Mobile",placeholder:"Enter mobile no.",fullWidth:!0,defaultCountry:"IN",value:y,onChange:r=>{i("number",r)},variant:"filled",sx:R,disabled:!0})}),e(m,{children:e(h,{control:d,name:"email",label:"Email",placeholder:"Email",required:!0,sx:g})})]})}),e(G,{children:e(I,{type:"submit",children:"Save"})})]})})})}),c&&o(p,{className:z.ChangePasswordLink,to:"/user/change-password",children:["Change Your Password >"," "]})]})]})},Ee=()=>o(t.exports.Fragment,{children:[e(k,{children:e("title",{children:"My Profile"})}),e(J,{})]});export{Ee as default};