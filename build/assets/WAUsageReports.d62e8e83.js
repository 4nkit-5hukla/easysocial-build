import{r as e,ah as o,u as _,ai as h,aC as g,a as i,j as t,W as x,$ as S,c as A,aj as L}from"./index.f4b1475f.js";import{L as E}from"./LeftArrow.8a2b2f7e.js";import{C as R}from"./Card.1ebeff23.js";import{C as l}from"./Grid.58370c23.js";import{c as W,H as b,d as p}from"./Wrappers.bf4cd818.js";import{W as y}from"./WAUsageApi.cdf8d9d6.js";import{p as C}from"./Position.module.ff7b7fa6.js";import"./Card.a6a996dd.js";import"./CardContent.f9109da8.js";const P=e.exports.lazy(()=>o(()=>import("./LinkPlatForm.adcbecbc.js"),["assets/LinkPlatForm.adcbecbc.js","assets/index.f4b1475f.js","assets/index.159876a6.css","assets/Styles.3864ecd6.js","assets/Tags.709f5396.js","assets/withStyles.0b8a44c4.js","assets/MenuItem.0660692a.js","assets/List.fc9de2b8.js","assets/listItemTextClasses.5c126781.js","assets/dividerClasses.3d19f506.js","assets/ListItem.214d79ed.js","assets/listItemButtonClasses.f6719ad5.js","assets/isMuiElement.62abf40c.js","assets/styled.4f5a3753.js","assets/CommonComponents.3a5054be.js","assets/ArrowRight.3b0b34f3.js","assets/Styles.ab1c376b.js","assets/Card.a6a996dd.js","assets/CardContent.f9109da8.js"])),U=e.exports.lazy(()=>o(()=>import("./LiveStatus.6a154ef9.js"),["assets/LiveStatus.6a154ef9.js","assets/index.f4b1475f.js","assets/index.159876a6.css","assets/Card.1ebeff23.js","assets/Card.a6a996dd.js","assets/CardContent.f9109da8.js","assets/Card.0c204cfb.css","assets/WhatsApp.0df87c02.js","assets/WAUsageApi.cdf8d9d6.js","assets/LiveStatus.0eed651a.css"])),v=e.exports.lazy(()=>o(()=>import("./UtilizationReport.6f3dea89.js"),["assets/UtilizationReport.6f3dea89.js","assets/index.f4b1475f.js","assets/index.159876a6.css","assets/WAUsageApi.cdf8d9d6.js","assets/Form.e46ee134.js","assets/ArrowRight.3b0b34f3.js","assets/Form.83ea0429.css","assets/Card.1ebeff23.js","assets/Card.a6a996dd.js","assets/CardContent.f9109da8.js","assets/Card.0c204cfb.css","assets/DatePicker.43f41936.js","assets/usePickerState.64bcbd39.js","assets/Grid.1655cb4c.js","assets/useControlled.82bc185c.js","assets/InputAdornment.7997c36b.js","assets/useFormControl.75866ec7.js","assets/Popper.07bd7eb1.js","assets/Menu.0fd5621c.js","assets/List.fc9de2b8.js","assets/TextField.cefb14e5.js","assets/Select.be951174.js","assets/isMuiElement.62abf40c.js","assets/TableRow.2e31fd68.js","assets/Link.4f240bbd.js","assets/UtilizationReport.7dbaaf0e.css"])),z=e.exports.lazy(()=>o(()=>import("./Utilization.0d10111d.js"),["assets/Utilization.0d10111d.js","assets/index.f4b1475f.js","assets/index.159876a6.css","assets/WAUsageApi.cdf8d9d6.js","assets/Card.1ebeff23.js","assets/Card.a6a996dd.js","assets/CardContent.f9109da8.js","assets/Card.0c204cfb.css","assets/Grid.58370c23.js","assets/Grid.6523dca6.css","assets/RangePopUp.4070c034.js","assets/index.eb4aa1c1.js","assets/TextField.cefb14e5.js","assets/Select.be951174.js","assets/useFormControl.75866ec7.js","assets/isMuiElement.62abf40c.js","assets/Menu.0fd5621c.js","assets/List.fc9de2b8.js","assets/useControlled.82bc185c.js","assets/usePickerState.64bcbd39.js","assets/Grid.1655cb4c.js","assets/InputAdornment.7997c36b.js","assets/StaticDateRangePicker.b15256f5.js","assets/PickersToolbarButton.5a9f338d.js","assets/RangePopUp.f24ba555.css","assets/Link.4f240bbd.js"])),I=()=>{const{isMobile:u}=_(),{showSnack:d}=h(),{platformExist:s}=g(),[a,r]=e.exports.useState(!0),[c,m]=e.exports.useState(!1),f=e.exports.useRef(async()=>{const n=await y.getWaStatus();if(!n.success)return r(!1),d(n.message,"error");m(n.success),r(!1)});return e.exports.useEffect(()=>{typeof s=="boolean"&&s?f.current():typeof s=="boolean"&&s===!1&&r(!1)},[s]),i(e.exports.Fragment,{children:[t(x,{children:t("title",{children:"Usage and Reports"})}),u&&i(W,{children:[t(S,{component:A,to:"/business-settings",className:"icon-md-button",children:t(E,{})}),t(b,{children:"Usage and Reports"})]}),!c&&!a&&typeof s=="boolean"&&s===!1&&t(p,{children:t(l,{children:t(P,{})})}),c&&t(e.exports.Suspense,{fallback:t(R,{className:C.AbsCenter,children:t(L,{height:72,width:72})}),children:t(p,{children:i(l,{children:[t(U,{loadingStatus:a}),t(z,{loadingStatus:a}),t(v,{loadingStatus:a})]})})})]})},N=()=>t(I,{});export{N as default};