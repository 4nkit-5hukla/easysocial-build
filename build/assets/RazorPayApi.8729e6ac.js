var s=Object.defineProperty;var c=(r,a,t)=>a in r?s(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t;var e=(r,a,t)=>(c(r,typeof a!="symbol"?a+"":a,t),t);import{ap as o}from"./index.cec7120b.js";class i{}e(i,"createOrder",async a=>await o("/razorpay/order","POST",{data:a}));export{i as R};