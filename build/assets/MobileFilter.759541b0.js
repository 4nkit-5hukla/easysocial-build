import{u as k,r as c,a as s,j as e,ca as T,a$ as D,V as d}from"./index.2d98d0ad.js";import{S as b}from"./Search.26123050.js";import{C as B}from"./Clear.67340fe3.js";import{R as f}from"./RangePopUp.99e60bd1.js";import{L as H}from"./Link.c30ec873.js";const v="pFUu",x="_4fLm",I="w1bA",F="uPi-",M="fFWg",W="IAcK",Y="Bqcg",L="LRiX",o={SearchWrapper:v,HeaderTop:x,HeaderBtm:I,HeaderBottomLeft:F,HeaderTitle:M,HeadBottomRight:W,SearchBlock:Y,SearchInput:L},w="_2SAn",P="HeS8",A="BaRI",O="oRw8",$="aZR0",j="xhKo",_="mYFL",K="h3lN",U="kJtb",z="zjT5",E="muaN",Q="XrSo",X={ContentInner:w,InnerWrapper:P,Card:A,CardContent:O,NoData:$,TableOuter:j,TableContainer:_,"MuiTable-root":"g-ax","MuiTableCell-root":"LQzF","MuiTableBody-root":"aw3W",TableHead:K,OrderDate:U,Particulars:z,OrderNumber:E,DateRange:Q},N=({from:p,to:l,setStartDate:i,setEndDate:h})=>{const{isMobile:u}=k(),[m,n]=c.exports.useState(!1),[r,a]=c.exports.useState([new Date(new Date().getFullYear(),0,1),new Date(new Date().getFullYear(),11,31)]),[t,S]=r;t&&i(t),S&&h(S);const R=()=>{a([null,null]),n(!0),setTimeout(()=>{console.clear()},100)},C=()=>{!t&&!S&&a([p,l]),n(!1)};return s(c.exports.Fragment,{children:[s(H,{className:X.DateRange,component:"button",underline:"none",onClick:()=>R(),children:[e(T,{}),s("span",{children:[D(t).format("Do MMM YYYY")," - ",D(S).format("Do MMM YYYY")]})]}),e(f,{open:m,closeDialog:C,range:r,setRange:a,wrapper:u?"mobile":"desktop"})]})},re=({title:p,placeholder:l,setSearch:i,from:h,to:u,setStartDate:m,setEndDate:n})=>{const[r,a]=c.exports.useState(!1);return e(c.exports.Fragment,{children:e("div",{className:o.HeaderTop,children:s("div",{className:o.HeaderBtm,children:[!r&&e("div",{className:o.HeaderBottomLeft,children:e("div",{className:o.HeaderTitle,children:p})}),s("div",{className:o.HeadBottomRight,children:[r&&e("div",{className:o.SearchWrapper,children:s("div",{className:o.SearchBlock,children:[e(d,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(b,{})}),e("input",{className:o.SearchInput,onChange:({target:{value:t}})=>i(t),placeholder:l}),e(d,{onClick:()=>{i(""),a(!1)},sx:{position:"absolute",right:0,top:0},children:e(B,{})})]})}),!r&&e(d,{onClick:()=>a(t=>!t),children:e(b,{})})]}),e(N,{from:h,to:u,setStartDate:t=>m(t),setEndDate:t=>n(t)})]})})})},q="_7vWQ",y="WUTf",G="Nj6N",J="_9nKN",g={SearchBar:q,SearchWrapper:y,SearchBlock:G,SearchInput:J},oe=({placeholder:p,setSearch:l,from:i,to:h,setStartDate:u,setEndDate:m})=>{const[n,r]=c.exports.useState(!1);return e(c.exports.Fragment,{children:s("div",{className:g.SearchBar,children:[!n&&e(N,{from:i,to:h,setStartDate:a=>u(a),setEndDate:a=>m(a)}),n&&e("div",{className:g.SearchWrapper,children:s("div",{className:g.SearchBlock,children:[e(d,{disableTouchRipple:!0,disableFocusRipple:!0,disableRipple:!0,sx:{position:"absolute"},children:e(b,{})}),e("div",{className:g.SearchInput,onChange:({target:{value:a}})=>l(a),placeholder:p}),e(d,{onClick:()=>{l(""),r(!1)},sx:{position:"absolute",right:0,top:0},children:e(B,{})})]})}),e(d,{onClick:()=>r(!0),children:e(b,{})})]})})};export{re as D,oe as M,X as c};
