import{u as t,j as e,a as c,I as i,W as r}from"./index.be83498f.js";import{P as n,a as l,b as o}from"./PaymentStatusRight.19ffa015.js";import{a as p}from"./Form.d5d9dee7.js";import"./ArrowRight.f8a10dde.js";const d="leu3",u="qsxI",m="EjPa",h="Nitg",g="zvRV",a={MainWrapper:d,SuccessDivWrapper:u,Title:m,SubTitleWrapper:h,SubTitle:g},v=()=>{const{navigate:s}=t();return e("div",{className:a.MainWrapper,children:c("div",{className:a.SuccessDivWrapper,children:[e("div",{className:a.SuccessDivIcon,children:e(i,{src:"/static/images/svg/success.svg",alt:" success badge",className:a.successBadge})}),e("div",{className:a.Title,children:"Oops! Payment did not go through!"}),e("div",{className:a.SubTitleWrapper,children:"Don\u2019t worry. You can try again, select a different payment method."}),e(p,{type:"button",onClick:()=>s("/choose-plan"),children:"Retry Payment"})]})})},W=()=>{const{isTablet:s}=t();return c(n,{children:[e(r,{children:e("title",{children:"Payment Failed"})}),s&&e(l,{}),e(o,{children:e(v,{})})]})};export{W as default};
