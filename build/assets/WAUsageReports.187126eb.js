import{r as e,ak as o,u as _,al as h,aH as g,a as i,j as t,W as x,V as S,c as A,am as L}from"./index.bfa623cc.js";import{L as E}from"./LeftArrow.61a8d5d2.js";import{C as R}from"./Card.e0029d12.js";import{C as l}from"./Grid.c8f2a98b.js";import{c as W,H as b,d as p}from"./Wrappers.6c316bad.js";import{W as y}from"./WAUsageApi.25235382.js";import{p as C}from"./Position.module.ff7b7fa6.js";import"./Card.abe49e25.js";import"./CardContent.949b1861.js";const P=e.exports.lazy(()=>o(()=>import("./LinkPlatForm.ffdf31b8.js"),["assets/LinkPlatForm.ffdf31b8.js","assets/index.bfa623cc.js","assets/index.f7c92409.css","assets/Styles.3864ecd6.js","assets/Tags.71f4d261.js","assets/toConsumableArray.52b4c8e6.js","assets/MenuItem.187583e5.js","assets/List.75916aa4.js","assets/listItemTextClasses.d967c514.js","assets/dividerClasses.3c2fdfe8.js","assets/ListItem.15023e4e.js","assets/listItemButtonClasses.0f8ddc31.js","assets/isMuiElement.3b8cd457.js","assets/styled.faae2066.js","assets/CommonComponents.033563ee.js","assets/ArrowRight.8a242020.js","assets/Styles.c059562f.js","assets/Card.abe49e25.js","assets/CardContent.949b1861.js"])),U=e.exports.lazy(()=>o(()=>import("./LiveStatus.9d6ff319.js"),["assets/LiveStatus.9d6ff319.js","assets/index.bfa623cc.js","assets/index.f7c92409.css","assets/Card.e0029d12.js","assets/Card.abe49e25.js","assets/CardContent.949b1861.js","assets/Card.874463a3.css","assets/WhatsApp.0df87c02.js","assets/WAUsageApi.25235382.js","assets/LiveStatus.d8c00dc9.css"])),k=e.exports.lazy(()=>o(()=>import("./UtilizationReport.e1aa3160.js"),["assets/UtilizationReport.e1aa3160.js","assets/index.bfa623cc.js","assets/index.f7c92409.css","assets/WAUsageApi.25235382.js","assets/Form.11ee3229.js","assets/ArrowRight.8a242020.js","assets/Form.b7fd193c.css","assets/Card.e0029d12.js","assets/Card.abe49e25.js","assets/CardContent.949b1861.js","assets/Card.874463a3.css","assets/PureDateInput.da02c26d.js","assets/usePickerState.2089f3d3.js","assets/Grid.77afb416.js","assets/useControlled.1a2fa378.js","assets/InputAdornment.57a49ff0.js","assets/useFormControl.ad463314.js","assets/TextField.cbe65db4.js","assets/Select.97ce6d09.js","assets/isMuiElement.3b8cd457.js","assets/Menu.a16588c0.js","assets/List.75916aa4.js","assets/DatePicker.890da427.js","assets/Popper.3207cefc.js","assets/TableRow.b1b1a371.js","assets/Link.7cc7e9aa.js","assets/UtilizationReport.fe4cbe25.css"])),v=e.exports.lazy(()=>o(()=>import("./Utilization.8dc18ef7.js"),["assets/Utilization.8dc18ef7.js","assets/index.bfa623cc.js","assets/index.f7c92409.css","assets/WAUsageApi.25235382.js","assets/Card.e0029d12.js","assets/Card.abe49e25.js","assets/CardContent.949b1861.js","assets/Card.874463a3.css","assets/Grid.c8f2a98b.js","assets/Grid.d3cac9d9.css","assets/RangePopUp.0635fa08.js","assets/index.eb4aa1c1.js","assets/TextField.cbe65db4.js","assets/Select.97ce6d09.js","assets/useFormControl.ad463314.js","assets/isMuiElement.3b8cd457.js","assets/Menu.a16588c0.js","assets/List.75916aa4.js","assets/useControlled.1a2fa378.js","assets/usePickerState.2089f3d3.js","assets/Grid.77afb416.js","assets/InputAdornment.57a49ff0.js","assets/StaticDateRangePicker.b4441b08.js","assets/PickersToolbarButton.ff020289.js","assets/RangePopUp.607498c4.css","assets/Link.7cc7e9aa.js"])),z=()=>{const{isMobile:u}=_(),{showSnack:d}=h(),{platformExist:s}=g(),[a,r]=e.exports.useState(!0),[c,m]=e.exports.useState(!1),f=e.exports.useRef(async()=>{const n=await y.getWaStatus();if(!n.success)return r(!1),d(n.message,"error");m(n.success),r(!1)});return e.exports.useEffect(()=>{typeof s=="boolean"&&s?f.current():typeof s=="boolean"&&s===!1&&r(!1)},[s]),i(e.exports.Fragment,{children:[t(x,{children:t("title",{children:"Usage and Reports"})}),u&&i(W,{children:[t(S,{component:A,to:"/business-settings",className:"icon-md-button",children:t(E,{})}),t(b,{children:"Usage and Reports"})]}),!c&&!a&&typeof s=="boolean"&&s===!1&&t(p,{children:t(l,{children:t(P,{})})}),c&&t(e.exports.Suspense,{fallback:t(R,{className:C.AbsCenter,children:t(L,{height:72,width:72})}),children:t(p,{children:i(l,{children:[t(U,{loadingStatus:a}),t(v,{loadingStatus:a}),t(k,{loadingStatus:a})]})})})]})},N=()=>t(z,{});export{N as default};
