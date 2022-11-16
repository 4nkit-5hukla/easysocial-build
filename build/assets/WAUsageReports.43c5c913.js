import{r as e,ak as o,u as _,Z as h,aE as g,a as i,j as t,W as x,a0 as S,d as A,an as E}from"./index.2958bef2.js";import{L}from"./LeftArrow.316bef59.js";import{C as R}from"./Card.24f108f0.js";import{C as l}from"./Grid.8988d240.js";import{c as W,H as b,d as p}from"./Wrappers.e9ae8295.js";import{W as y}from"./WAUsageApi.d7b9fe1c.js";import{p as C}from"./Position.module.ff7b7fa6.js";import"./Card.52f5ce0c.js";import"./CardContent.49a60cfe.js";const P=e.exports.lazy(()=>o(()=>import("./LinkPlatForm.83d1e2cb.js"),["assets/LinkPlatForm.83d1e2cb.js","assets/index.2958bef2.js","assets/index.6e2e3c06.css","assets/Tags.2e2b143c.js","assets/withStyles.11e0ec01.js","assets/MenuItem.9aa4227e.js","assets/List.cd814327.js","assets/listItemTextClasses.a3a32652.js","assets/ListItem.05aff9be.js","assets/listItemButtonClasses.f50f9b7b.js","assets/isMuiElement.999642a1.js","assets/CommonComponents.0fef1ef5.js","assets/ArrowRight.c56f0d14.js","assets/Styles.3fefcec0.js","assets/Card.52f5ce0c.js","assets/CardContent.49a60cfe.js"])),U=e.exports.lazy(()=>o(()=>import("./LiveStatus.9cf9c1e7.js"),["assets/LiveStatus.9cf9c1e7.js","assets/index.2958bef2.js","assets/index.6e2e3c06.css","assets/Card.24f108f0.js","assets/Card.52f5ce0c.js","assets/CardContent.49a60cfe.js","assets/Card.fb089c80.css","assets/WhatsApp.0df87c02.js","assets/WAUsageApi.d7b9fe1c.js","assets/LiveStatus.0eed651a.css"])),k=e.exports.lazy(()=>o(()=>import("./UtilizationReport.93a0b22c.js"),["assets/UtilizationReport.93a0b22c.js","assets/index.2958bef2.js","assets/index.6e2e3c06.css","assets/WAUsageApi.d7b9fe1c.js","assets/Form.b82e313e.js","assets/ArrowRight.c56f0d14.js","assets/Form.22a18028.css","assets/Card.24f108f0.js","assets/Card.52f5ce0c.js","assets/CardContent.49a60cfe.js","assets/Card.fb089c80.css","assets/DatePicker.50af96c7.js","assets/usePickerState.757cdb2a.js","assets/Grid.d27646e2.js","assets/useControlled.cdbc527e.js","assets/InputAdornment.bc882924.js","assets/Select.6f6db623.js","assets/isMuiElement.999642a1.js","assets/Menu.beae184f.js","assets/List.cd814327.js","assets/Popper.f4245168.js","assets/TextField.3e2fefcc.js","assets/TableRow.adf4499e.js","assets/Link.70d58981.js","assets/UtilizationReport.7dbaaf0e.css"])),v=e.exports.lazy(()=>o(()=>import("./Utilization.59c73f44.js"),["assets/Utilization.59c73f44.js","assets/index.2958bef2.js","assets/index.6e2e3c06.css","assets/WAUsageApi.d7b9fe1c.js","assets/Card.24f108f0.js","assets/Card.52f5ce0c.js","assets/CardContent.49a60cfe.js","assets/Card.fb089c80.css","assets/Grid.8988d240.js","assets/Grid.6523dca6.css","assets/RangePopUp.9578ad46.js","assets/TextField.3e2fefcc.js","assets/Select.6f6db623.js","assets/isMuiElement.999642a1.js","assets/Menu.beae184f.js","assets/List.cd814327.js","assets/useControlled.cdbc527e.js","assets/usePickerState.757cdb2a.js","assets/Grid.d27646e2.js","assets/InputAdornment.bc882924.js","assets/StaticDateRangePicker.84c9f374.js","assets/PickersToolbarButton.b6ac2d3e.js","assets/RangePopUp.f24ba555.css","assets/Link.70d58981.js"])),z=()=>{const{isMobile:d}=_(),{showSnack:u}=h(),{platformExist:s}=g(),[a,r]=e.exports.useState(!0),[c,m]=e.exports.useState(!1),f=e.exports.useRef(async()=>{const n=await y.getWaStatus();if(!n.success)return r(!1),u(n.message,"error");m(n.success),r(!1)});return e.exports.useEffect(()=>{typeof s=="boolean"&&s?f.current():typeof s=="boolean"&&s===!1&&r(!1)},[s]),i(e.exports.Fragment,{children:[t(x,{children:t("title",{children:"Usage and Reports"})}),d&&i(W,{children:[t(S,{component:A,to:"/business-settings",className:"icon-md-button",children:t(L,{})}),t(b,{children:"Usage and Reports"})]}),!c&&!a&&typeof s=="boolean"&&s===!1&&t(p,{children:t(l,{children:t(P,{})})}),c&&t(e.exports.Suspense,{fallback:t(R,{className:C.AbsCenter,children:t(E,{height:72,width:72})}),children:t(p,{children:i(l,{children:[t(U,{loadingStatus:a}),t(v,{loadingStatus:a}),t(k,{loadingStatus:a})]})})})]})},N=()=>t(z,{});export{N as default};
