import{r as e,ai as o,u as _,Z as h,aC as g,a as i,j as t,W as x,a0 as S,d as A,aj as L}from"./index.be83498f.js";import{L as E}from"./LeftArrow.9ba8f037.js";import{C as R}from"./Card.6b3a2e58.js";import{C as l}from"./Grid.5628e4ec.js";import{c as W,H as b,d as p}from"./Wrappers.ad1642ee.js";import{W as y}from"./WAUsageApi.1648d19a.js";import{p as C}from"./Position.module.ff7b7fa6.js";import"./Card.095d38fe.js";import"./CardContent.52d68517.js";const P=e.exports.lazy(()=>o(()=>import("./LinkPlatForm.958bde55.js"),["assets/LinkPlatForm.958bde55.js","assets/index.be83498f.js","assets/index.d604c3d9.css","assets/Styles.3864ecd6.js","assets/Tags.fac649bb.js","assets/withStyles.5199bd64.js","assets/MenuItem.a8e6b436.js","assets/List.52405447.js","assets/listItemTextClasses.22edd101.js","assets/dividerClasses.ba5b8194.js","assets/ListItem.f4e4c30f.js","assets/listItemButtonClasses.f171b0ff.js","assets/isMuiElement.06135e34.js","assets/styled.b1d02db7.js","assets/CommonComponents.bb9b8afb.js","assets/ArrowRight.f8a10dde.js","assets/Styles.ab1c376b.js","assets/Card.095d38fe.js","assets/CardContent.52d68517.js"])),U=e.exports.lazy(()=>o(()=>import("./LiveStatus.8082a4b7.js"),["assets/LiveStatus.8082a4b7.js","assets/index.be83498f.js","assets/index.d604c3d9.css","assets/Card.6b3a2e58.js","assets/Card.095d38fe.js","assets/CardContent.52d68517.js","assets/Card.a21d7bc3.css","assets/WhatsApp.0df87c02.js","assets/WAUsageApi.1648d19a.js","assets/LiveStatus.d8c00dc9.css"])),v=e.exports.lazy(()=>o(()=>import("./UtilizationReport.11cab3ba.js"),["assets/UtilizationReport.11cab3ba.js","assets/index.be83498f.js","assets/index.d604c3d9.css","assets/WAUsageApi.1648d19a.js","assets/Form.d5d9dee7.js","assets/ArrowRight.f8a10dde.js","assets/Form.dea8dfcd.css","assets/Card.6b3a2e58.js","assets/Card.095d38fe.js","assets/CardContent.52d68517.js","assets/Card.a21d7bc3.css","assets/DatePicker.2158fe67.js","assets/usePickerState.78039cc2.js","assets/Grid.bf78bcfb.js","assets/useControlled.0fd5f443.js","assets/InputAdornment.2641cb81.js","assets/useFormControl.62e75b61.js","assets/Popper.ab61836e.js","assets/Menu.9e38a63f.js","assets/List.52405447.js","assets/TextField.966cb2e6.js","assets/Select.10d84ef4.js","assets/isMuiElement.06135e34.js","assets/TableRow.bab20141.js","assets/Link.c8642aac.js","assets/UtilizationReport.fe4cbe25.css"])),z=e.exports.lazy(()=>o(()=>import("./Utilization.80a7f6de.js"),["assets/Utilization.80a7f6de.js","assets/index.be83498f.js","assets/index.d604c3d9.css","assets/WAUsageApi.1648d19a.js","assets/Card.6b3a2e58.js","assets/Card.095d38fe.js","assets/CardContent.52d68517.js","assets/Card.a21d7bc3.css","assets/Grid.5628e4ec.js","assets/Grid.90a2a259.css","assets/RangePopUp.e3ebbd69.js","assets/index.eb4aa1c1.js","assets/TextField.966cb2e6.js","assets/Select.10d84ef4.js","assets/useFormControl.62e75b61.js","assets/isMuiElement.06135e34.js","assets/Menu.9e38a63f.js","assets/List.52405447.js","assets/useControlled.0fd5f443.js","assets/usePickerState.78039cc2.js","assets/Grid.bf78bcfb.js","assets/InputAdornment.2641cb81.js","assets/StaticDateRangePicker.98db8f9a.js","assets/PickersToolbarButton.721eb14e.js","assets/RangePopUp.607498c4.css","assets/Link.c8642aac.js"])),I=()=>{const{isMobile:d}=_(),{showSnack:u}=h(),{platformExist:s}=g(),[a,r]=e.exports.useState(!0),[c,m]=e.exports.useState(!1),f=e.exports.useRef(async()=>{const n=await y.getWaStatus();if(!n.success)return r(!1),u(n.message,"error");m(n.success),r(!1)});return e.exports.useEffect(()=>{typeof s=="boolean"&&s?f.current():typeof s=="boolean"&&s===!1&&r(!1)},[s]),i(e.exports.Fragment,{children:[t(x,{children:t("title",{children:"Usage and Reports"})}),d&&i(W,{children:[t(S,{component:A,to:"/business-settings",className:"icon-md-button",children:t(E,{})}),t(b,{children:"Usage and Reports"})]}),!c&&!a&&typeof s=="boolean"&&s===!1&&t(p,{children:t(l,{children:t(P,{})})}),c&&t(e.exports.Suspense,{fallback:t(R,{className:C.AbsCenter,children:t(L,{height:72,width:72})}),children:t(p,{children:i(l,{children:[t(U,{loadingStatus:a}),t(z,{loadingStatus:a}),t(v,{loadingStatus:a})]})})})]})},N=()=>t(I,{});export{N as default};