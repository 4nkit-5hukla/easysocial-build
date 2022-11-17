import{r as e,ak as o,u as _,Z as h,aE as g,a as i,j as t,W as x,a0 as S,d as A,an as E}from"./index.406b108e.js";import{L}from"./LeftArrow.1929b5c9.js";import{C as R}from"./Card.2f464abd.js";import{C as l}from"./Grid.26400928.js";import{c as W,H as b,d as p}from"./Wrappers.a19a0174.js";import{W as y}from"./WAUsageApi.9b3711a5.js";import{p as C}from"./Position.module.ff7b7fa6.js";import"./Card.cd1015dd.js";import"./CardContent.c3b7b4e1.js";const P=e.exports.lazy(()=>o(()=>import("./LinkPlatForm.07224e92.js"),["assets/LinkPlatForm.07224e92.js","assets/index.406b108e.js","assets/index.6e2e3c06.css","assets/Tags.f1ff3942.js","assets/withStyles.0f295abb.js","assets/MenuItem.bceeb030.js","assets/List.90013459.js","assets/listItemTextClasses.198283a0.js","assets/ListItem.a763bec7.js","assets/listItemButtonClasses.86609c12.js","assets/isMuiElement.204b9160.js","assets/CommonComponents.5d68fc16.js","assets/ArrowRight.96d15e0a.js","assets/Styles.3fefcec0.js","assets/Card.cd1015dd.js","assets/CardContent.c3b7b4e1.js"])),U=e.exports.lazy(()=>o(()=>import("./LiveStatus.3e4a090f.js"),["assets/LiveStatus.3e4a090f.js","assets/index.406b108e.js","assets/index.6e2e3c06.css","assets/Card.2f464abd.js","assets/Card.cd1015dd.js","assets/CardContent.c3b7b4e1.js","assets/Card.fb089c80.css","assets/WhatsApp.0df87c02.js","assets/WAUsageApi.9b3711a5.js","assets/LiveStatus.0eed651a.css"])),k=e.exports.lazy(()=>o(()=>import("./UtilizationReport.6ed3dfc6.js"),["assets/UtilizationReport.6ed3dfc6.js","assets/index.406b108e.js","assets/index.6e2e3c06.css","assets/WAUsageApi.9b3711a5.js","assets/Form.e8e4afd6.js","assets/ArrowRight.96d15e0a.js","assets/Form.22a18028.css","assets/Card.2f464abd.js","assets/Card.cd1015dd.js","assets/CardContent.c3b7b4e1.js","assets/Card.fb089c80.css","assets/DatePicker.fce0d9a4.js","assets/usePickerState.be18c206.js","assets/Grid.768c705c.js","assets/useControlled.1c86ebca.js","assets/InputAdornment.47527c66.js","assets/Select.faf7fc1d.js","assets/isMuiElement.204b9160.js","assets/Menu.f7251f44.js","assets/List.90013459.js","assets/Popper.a60e2904.js","assets/TextField.871d729d.js","assets/TableRow.5e4bf4fd.js","assets/Link.f76dae57.js","assets/UtilizationReport.7dbaaf0e.css"])),v=e.exports.lazy(()=>o(()=>import("./Utilization.4038938d.js"),["assets/Utilization.4038938d.js","assets/index.406b108e.js","assets/index.6e2e3c06.css","assets/WAUsageApi.9b3711a5.js","assets/Card.2f464abd.js","assets/Card.cd1015dd.js","assets/CardContent.c3b7b4e1.js","assets/Card.fb089c80.css","assets/Grid.26400928.js","assets/Grid.6523dca6.css","assets/RangePopUp.bfd5d39e.js","assets/TextField.871d729d.js","assets/Select.faf7fc1d.js","assets/isMuiElement.204b9160.js","assets/Menu.f7251f44.js","assets/List.90013459.js","assets/useControlled.1c86ebca.js","assets/usePickerState.be18c206.js","assets/Grid.768c705c.js","assets/InputAdornment.47527c66.js","assets/StaticDateRangePicker.27f05229.js","assets/PickersToolbarButton.90033b2d.js","assets/RangePopUp.f24ba555.css","assets/Link.f76dae57.js"])),z=()=>{const{isMobile:d}=_(),{showSnack:u}=h(),{platformExist:s}=g(),[a,r]=e.exports.useState(!0),[c,m]=e.exports.useState(!1),f=e.exports.useRef(async()=>{const n=await y.getWaStatus();if(!n.success)return r(!1),u(n.message,"error");m(n.success),r(!1)});return e.exports.useEffect(()=>{typeof s=="boolean"&&s?f.current():typeof s=="boolean"&&s===!1&&r(!1)},[s]),i(e.exports.Fragment,{children:[t(x,{children:t("title",{children:"Usage and Reports"})}),d&&i(W,{children:[t(S,{component:A,to:"/business-settings",className:"icon-md-button",children:t(L,{})}),t(b,{children:"Usage and Reports"})]}),!c&&!a&&typeof s=="boolean"&&s===!1&&t(p,{children:t(l,{children:t(P,{})})}),c&&t(e.exports.Suspense,{fallback:t(R,{className:C.AbsCenter,children:t(E,{height:72,width:72})}),children:t(p,{children:i(l,{children:[t(U,{loadingStatus:a}),t(v,{loadingStatus:a}),t(k,{loadingStatus:a})]})})})]})},N=()=>t(z,{});export{N as default};
