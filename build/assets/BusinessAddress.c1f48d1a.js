import{c7 as y,cb as b,r as h,j as e,a as s}from"./index.be83498f.js";import{S as A}from"./SettingsApi.5a3e8f49.js";import{F as a}from"./FormTextField.3dcd98ea.js";import{h as v}from"./Tags.fac649bb.js";import{F as g,G as q,a as f,H as d}from"./Grid.5628e4ec.js";import{F as l}from"./Form.d5d9dee7.js";import{C as P,g as w}from"./Card.6b3a2e58.js";import{F as n,b as x}from"./Style.57c2f24e.js";import{M as o}from"./MenuItem.a8e6b436.js";import"./index.esm.d5c830c3.js";import"./TextField.966cb2e6.js";import"./Select.10d84ef4.js";import"./useFormControl.62e75b61.js";import"./isMuiElement.06135e34.js";import"./Menu.9e38a63f.js";import"./List.52405447.js";import"./useControlled.0fd5f443.js";import"./withStyles.5199bd64.js";import"./ListItem.f4e4c30f.js";import"./listItemButtonClasses.f171b0ff.js";import"./styled.b1d02db7.js";import"./ArrowRight.f8a10dde.js";import"./Card.095d38fe.js";import"./CardContent.52d68517.js";import"./listItemTextClasses.22edd101.js";import"./dividerClasses.ba5b8194.js";const ee=({control:t,watch:C})=>{const{countriesList:p,provinces:m}=y(),{setProvinces:F}=b(),{country:i,state:c}=C(),S=h.exports.useRef(async()=>{const r=await A.getCountryProvinces(i);F(r)});return h.exports.useEffect(()=>{i&&S.current()},[i]),e(P,{elevation:0,children:s(w,{children:[e(v,{children:"Business Address"}),e(g,{children:e(q,{children:e(l,{children:e(a,{control:t,name:"address",label:"Address",placeholder:"Address",required:!0,sx:n})})})}),s(f,{children:[e(d,{children:e(l,{children:s(a,{select:!0,control:t,label:"Country",name:"country",sx:x,required:!0,defaultValue:i!=null?i:"",children:[e(o,{value:"",disabled:!0,children:"Select Country"}),Array.isArray(p)&&p.map((r,u)=>e(o,{value:r.name,children:r.name},u))]})})}),e(d,{children:e(l,{children:m.length>0?s(a,{select:!0,control:t,label:"State",name:"state",sx:x,required:!0,defaultValue:c!=null?c:"",children:[e(o,{value:"",disabled:!0,children:"Select State"}),Array.isArray(m)&&m.map((r,u)=>e(o,{value:r.name,children:r.name},u))]}):e(a,{control:t,name:"state",label:"State",placeholder:"State",required:!0,sx:n})})})]}),s(f,{children:[e(d,{children:e(l,{children:e(a,{control:t,name:"city",label:"City",placeholder:"City",required:!0,sx:n})})}),e(d,{children:e(l,{children:e(a,{control:t,name:"pin_code",label:"Pincode",placeholder:"Pincode",required:!0,sx:n})})})]})]})})};export{ee as default};