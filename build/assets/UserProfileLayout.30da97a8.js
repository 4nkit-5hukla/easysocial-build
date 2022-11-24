import{a as b,b as A,S as I,F as W,C as N}from"./Wrappers.0413203c.js";import{a as n,S as V,j as e,b as v,r as B,c as M,C as E,L as k,u as H,O as F}from"./index.1216e28e.js";import{U as P,a as y}from"./UserAvatar.6a8fa1ef.js";import{B as O}from"./BrandLogo.ba01d096.js";import{L as d}from"./List.8f8744c2.js";import{L as u}from"./ListItemButton.fceea06c.js";import{L}from"./ListItemIcon.50311155.js";import{L as m}from"./ListItemText.d3103614.js";import{E as U}from"./ExpandLess.20282cee.js";import{E as D}from"./ExpandMore.69da7d7c.js";import{D as Z}from"./Divider.4f3dc1ba.js";import"./User.14fd954e.js";import"./Drawer.4b449f09.js";import"./MenuItem.51acc6a3.js";import"./listItemTextClasses.477e07f5.js";import"./dividerClasses.24ea718d.js";import"./Menu.b5c2af2b.js";import"./listItemButtonClasses.7ee5290a.js";const j=()=>n(V,{viewBox:"0 0 16 22",fill:"none",children:[e("path",{d:"M14.3314 8.09959H12.7824V5.15878C12.7824 2.31224 10.4657 0 7.62367 0C4.78163 0 2.4649 2.31224 2.4649 5.15878V8.09959H0.915918C0.408571 8.09959 0 8.50816 0 9.01551V14.3763C0 18.5788 3.42122 22 7.62367 22C11.8261 22 15.2473 18.5788 15.2473 14.3763V9.01551C15.2473 8.51265 14.8388 8.09959 14.3314 8.09959ZM4.30122 5.15878C4.30122 3.32694 5.79184 1.83184 7.62367 1.83184C9.45551 1.83184 10.9506 3.32245 10.9506 5.15878V8.09959H4.30122V5.15878ZM13.4155 14.3763C13.4155 17.5686 10.8159 20.1682 7.62367 20.1682C4.43143 20.1682 1.83184 17.5686 1.83184 14.3763V9.93143H13.4155V14.3763Z"}),e("path",{d:"M7.62295 18.4579C8.1303 18.4579 8.53887 18.0493 8.53887 17.5419V15.0546C8.53887 14.5472 8.1303 14.1387 7.62295 14.1387C7.1156 14.1387 6.70703 14.5472 6.70703 15.0546V17.5419C6.70703 18.0448 7.1156 18.4579 7.62295 18.4579Z"})]}),_=()=>e(b,{children:e(A,{children:e(P,{})})}),G=[{enable:!0,hasChildren:!1,path:"/user/profile",label:"My Profile",Icon:y},{enable:!0,hasChildren:!1,path:"/user/change-password",label:"Change Password",Icon:j}],T="F2Ad",q="Xp9A",z="VLL5",J="J1I1",Q="eH48",R="UA8c",X="G9LC",Y="EWNm",K="Ql7o",$="_6qAx",ee="pwfi",se="v6sz",a={SideMenuWrapper:T,SideMenuBrandWrap:q,SideMenuBrand:z,BrandLabel:J,BusinessSwitcher:Q,BusinessSelector:R,BusinessItem:X,BusinessImage:Y,BusinessName:K,SideMenu:$,SideMenuActions:ee,SideMenuAction:se},ne=()=>{const{selectedBusiness:i}=v(),[p,o]=B.exports.useState(!1),w=r=>{o(t=>t===!1||t!==r?r:!1)};return n("div",{className:a.SideMenuWrapper,children:[e("div",{className:a.SideMenuBrandWrap,children:n("div",{className:a.SideMenuBrand,children:[e(O,{}),e("h4",{className:a.BrandLabel,children:"MY PROFILE"})]})}),e(d,{className:a.SideMenu,children:G.map(({enable:r,hasChildren:t,path:s,label:c,Icon:h,children:l},S)=>t?r&&n(B.exports.Fragment,{children:[n(u,{onClick:()=>w(s),selected:window.location.pathname.includes(s),children:[e(L,{children:e(h,{})}),e(m,{primary:c}),p===s||window.location.pathname.includes(s)?e(U,{}):e(D,{})]}),e(E,{in:p===s||window.location.pathname.includes(s),timeout:"auto",className:"submenu",unmountOnExit:!0,sx:{pl:2.5},children:e(d,{component:"div",disablePadding:!0,children:l==null?void 0:l.map(({subEnable:g,subPath:f,subLabel:C},x)=>g&&e(M,{to:f,"aria-label":C,children:e(u,{selected:window.location.pathname.includes(f),onClick:()=>o(s),children:e(m,{primary:C})})},x))})})]},S):r&&e(M,{to:s,"aria-label":c,children:n(u,{onClick:()=>o(!1),selected:window.location.pathname.includes(s),children:[e(L,{children:e(h,{})}),e(m,{primary:c})]})},S))}),e(Z,{variant:"fullWidth"}),e(d,{className:a.SideMenuActions,children:e(k,{to:i&&i.default_url?i.default_url:"/engage/chat",className:a.SideMenuAction,children:"Exit Profile"})})]})},ae=()=>e(I,{children:e(ne,{})}),ge=()=>{const{isTablet:i}=H();return n(W,{children:[i&&e(ae,{}),n(N,{children:[i&&e(_,{}),e(F,{})]})]})};export{ge as default};
