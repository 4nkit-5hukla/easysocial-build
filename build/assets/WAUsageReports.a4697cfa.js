import{r as e,ah as o,u as _,ai as h,aC as g,a as i,j as t,W as x,$ as S,c as A,aj as L}from"./index.f42b544b.js";import{L as E}from"./LeftArrow.62a3fa4d.js";import{C as R}from"./Card.1c94ce7e.js";import{C as l}from"./Grid.88343ef7.js";import{c as W,H as b,d as p}from"./Wrappers.0745b8d8.js";import{W as y}from"./WAUsageApi.836085ca.js";import{p as C}from"./Position.module.ff7b7fa6.js";import"./Card.394defe5.js";import"./CardContent.9e9e57e4.js";const P=e.exports.lazy(()=>o(()=>import("./LinkPlatForm.aa34d7ff.js"),["assets/LinkPlatForm.aa34d7ff.js","assets/index.f42b544b.js","assets/index.159876a6.css","assets/Styles.3864ecd6.js","assets/Tags.4d2d5bca.js","assets/withStyles.d2028c8a.js","assets/MenuItem.8689cb1e.js","assets/List.b6176302.js","assets/listItemTextClasses.59466d3b.js","assets/dividerClasses.a17f7f33.js","assets/ListItem.49c02632.js","assets/listItemButtonClasses.e4888797.js","assets/isMuiElement.3c4e2635.js","assets/styled.b600943f.js","assets/CommonComponents.917ac77c.js","assets/ArrowRight.d30f42bd.js","assets/Styles.ab1c376b.js","assets/Card.394defe5.js","assets/CardContent.9e9e57e4.js"])),U=e.exports.lazy(()=>o(()=>import("./LiveStatus.cdbb0463.js"),["assets/LiveStatus.cdbb0463.js","assets/index.f42b544b.js","assets/index.159876a6.css","assets/Card.1c94ce7e.js","assets/Card.394defe5.js","assets/CardContent.9e9e57e4.js","assets/Card.0c204cfb.css","assets/WhatsApp.0df87c02.js","assets/WAUsageApi.836085ca.js","assets/LiveStatus.0eed651a.css"])),v=e.exports.lazy(()=>o(()=>import("./UtilizationReport.ae7a38eb.js"),["assets/UtilizationReport.ae7a38eb.js","assets/index.f42b544b.js","assets/index.159876a6.css","assets/WAUsageApi.836085ca.js","assets/Form.08e1be77.js","assets/ArrowRight.d30f42bd.js","assets/Form.83ea0429.css","assets/Card.1c94ce7e.js","assets/Card.394defe5.js","assets/CardContent.9e9e57e4.js","assets/Card.0c204cfb.css","assets/DatePicker.387018f2.js","assets/usePickerState.23a17b54.js","assets/Grid.fa6c062e.js","assets/useControlled.c17368a9.js","assets/InputAdornment.ed9d17ff.js","assets/useFormControl.9673694a.js","assets/Popper.206bd5a1.js","assets/Menu.177000ba.js","assets/List.b6176302.js","assets/TextField.a2283cc7.js","assets/Select.28b63049.js","assets/isMuiElement.3c4e2635.js","assets/TableRow.b60c6b3d.js","assets/Link.dd676c51.js","assets/UtilizationReport.7dbaaf0e.css"])),z=e.exports.lazy(()=>o(()=>import("./Utilization.0861e7f0.js"),["assets/Utilization.0861e7f0.js","assets/index.f42b544b.js","assets/index.159876a6.css","assets/WAUsageApi.836085ca.js","assets/Card.1c94ce7e.js","assets/Card.394defe5.js","assets/CardContent.9e9e57e4.js","assets/Card.0c204cfb.css","assets/Grid.88343ef7.js","assets/Grid.6523dca6.css","assets/RangePopUp.c54e1a61.js","assets/index.eb4aa1c1.js","assets/TextField.a2283cc7.js","assets/Select.28b63049.js","assets/useFormControl.9673694a.js","assets/isMuiElement.3c4e2635.js","assets/Menu.177000ba.js","assets/List.b6176302.js","assets/useControlled.c17368a9.js","assets/usePickerState.23a17b54.js","assets/Grid.fa6c062e.js","assets/InputAdornment.ed9d17ff.js","assets/StaticDateRangePicker.c410860a.js","assets/PickersToolbarButton.69b02692.js","assets/RangePopUp.f24ba555.css","assets/Link.dd676c51.js"])),I=()=>{const{isMobile:u}=_(),{showSnack:d}=h(),{platformExist:s}=g(),[a,r]=e.exports.useState(!0),[c,m]=e.exports.useState(!1),f=e.exports.useRef(async()=>{const n=await y.getWaStatus();if(!n.success)return r(!1),d(n.message,"error");m(n.success),r(!1)});return e.exports.useEffect(()=>{typeof s=="boolean"&&s?f.current():typeof s=="boolean"&&s===!1&&r(!1)},[s]),i(e.exports.Fragment,{children:[t(x,{children:t("title",{children:"Usage and Reports"})}),u&&i(W,{children:[t(S,{component:A,to:"/business-settings",className:"icon-md-button",children:t(E,{})}),t(b,{children:"Usage and Reports"})]}),!c&&!a&&typeof s=="boolean"&&s===!1&&t(p,{children:t(l,{children:t(P,{})})}),c&&t(e.exports.Suspense,{fallback:t(R,{className:C.AbsCenter,children:t(L,{height:72,width:72})}),children:t(p,{children:i(l,{children:[t(U,{loadingStatus:a}),t(z,{loadingStatus:a}),t(v,{loadingStatus:a})]})})})]})},N=()=>t(I,{});export{N as default};
