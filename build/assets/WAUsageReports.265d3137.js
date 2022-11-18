import{r as e,ak as o,u as _,Z as h,aC as g,a as i,j as t,W as x,a0 as S,d as A,al as L}from"./index.a8b2df7b.js";import{L as E}from"./LeftArrow.a1fcfefa.js";import{C as R}from"./Card.21db2d5b.js";import{C as c}from"./Grid.9f4e5ba1.js";import{c as W,H as b,d as p}from"./Wrappers.0103b44b.js";import{W as y}from"./WAUsageApi.3efa2a8d.js";import{p as C}from"./Position.module.ff7b7fa6.js";import"./Card.bd9c7588.js";import"./CardContent.da5f0df4.js";const P=e.exports.lazy(()=>o(()=>import("./LinkPlatForm.5408514c.js"),["assets/LinkPlatForm.5408514c.js","assets/index.a8b2df7b.js","assets/index.1e78a582.css","assets/Styles.fb254e6e.js","assets/Tags.59ea193f.js","assets/withStyles.7c05d18e.js","assets/MenuItem.311c4d23.js","assets/List.e9d0b826.js","assets/listItemTextClasses.0d2d954f.js","assets/ListItem.912ff118.js","assets/listItemButtonClasses.07cb6408.js","assets/isMuiElement.42abfbfb.js","assets/styled.3f21e940.js","assets/CommonComponents.8623c86c.js","assets/ArrowRight.4ddcb545.js","assets/Styles.ab1c376b.js","assets/Card.bd9c7588.js","assets/CardContent.da5f0df4.js"])),U=e.exports.lazy(()=>o(()=>import("./LiveStatus.45b143a2.js"),["assets/LiveStatus.45b143a2.js","assets/index.a8b2df7b.js","assets/index.1e78a582.css","assets/Card.21db2d5b.js","assets/Card.bd9c7588.js","assets/CardContent.da5f0df4.js","assets/Card.fb089c80.css","assets/WhatsApp.0df87c02.js","assets/WAUsageApi.3efa2a8d.js","assets/LiveStatus.0eed651a.css"])),k=e.exports.lazy(()=>o(()=>import("./UtilizationReport.b7eb9de0.js"),["assets/UtilizationReport.b7eb9de0.js","assets/index.a8b2df7b.js","assets/index.1e78a582.css","assets/WAUsageApi.3efa2a8d.js","assets/Form.9bbb4da7.js","assets/ArrowRight.4ddcb545.js","assets/Form.22a18028.css","assets/Card.21db2d5b.js","assets/Card.bd9c7588.js","assets/CardContent.da5f0df4.js","assets/Card.fb089c80.css","assets/DatePicker.d8a7426c.js","assets/usePickerState.50d91eeb.js","assets/Grid.599f3dbe.js","assets/useControlled.e7b8947c.js","assets/InputAdornment.b97a990b.js","assets/Select.a83a6cc9.js","assets/isMuiElement.42abfbfb.js","assets/Menu.58d7bdb3.js","assets/List.e9d0b826.js","assets/Popper.0ded0039.js","assets/TextField.f1851448.js","assets/TableRow.8990a2cb.js","assets/Link.59aaed31.js","assets/UtilizationReport.7dbaaf0e.css"])),v=e.exports.lazy(()=>o(()=>import("./Utilization.6a09a21a.js"),["assets/Utilization.6a09a21a.js","assets/index.a8b2df7b.js","assets/index.1e78a582.css","assets/WAUsageApi.3efa2a8d.js","assets/Card.21db2d5b.js","assets/Card.bd9c7588.js","assets/CardContent.da5f0df4.js","assets/Card.fb089c80.css","assets/Grid.9f4e5ba1.js","assets/Grid.6523dca6.css","assets/RangePopUp.a3e1f399.js","assets/index.eb4aa1c1.js","assets/TextField.f1851448.js","assets/Select.a83a6cc9.js","assets/isMuiElement.42abfbfb.js","assets/Menu.58d7bdb3.js","assets/List.e9d0b826.js","assets/useControlled.e7b8947c.js","assets/usePickerState.50d91eeb.js","assets/Grid.599f3dbe.js","assets/InputAdornment.b97a990b.js","assets/StaticDateRangePicker.7b2d6f25.js","assets/PickersToolbarButton.527dc5a1.js","assets/RangePopUp.f24ba555.css","assets/Link.59aaed31.js"])),z=()=>{const{isMobile:d}=_(),{showSnack:u}=h(),{platformExist:s}=g(),[a,r]=e.exports.useState(!0),[l,m]=e.exports.useState(!1),f=e.exports.useRef(async()=>{const n=await y.getWaStatus();if(!n.success)return r(!1),u(n.message,"error");m(n.success),r(!1)});return e.exports.useEffect(()=>{typeof s=="boolean"&&s?f.current():typeof s=="boolean"&&s===!1&&r(!1)},[s]),i(e.exports.Fragment,{children:[t(x,{children:t("title",{children:"Usage and Reports"})}),d&&i(W,{children:[t(S,{component:A,to:"/business-settings",className:"icon-md-button",children:t(E,{})}),t(b,{children:"Usage and Reports"})]}),!l&&!a&&typeof s=="boolean"&&s===!1&&t(p,{children:t(c,{children:t(P,{})})}),l&&t(e.exports.Suspense,{fallback:t(R,{className:C.AbsCenter,children:t(L,{height:72,width:72})}),children:t(p,{children:i(c,{children:[t(U,{loadingStatus:a}),t(v,{loadingStatus:a}),t(k,{loadingStatus:a})]})})})]})},N=()=>t(z,{});export{N as default};
