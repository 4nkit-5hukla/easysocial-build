var s=Object.defineProperty;var n=(e,a,t)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var i=(e,a,t)=>(n(e,typeof a!="symbol"?a+"":a,t),t);import{ap as r}from"./index.6650ed15.js";class c{}i(c,"fileUpload",async(a,t)=>await r(`/asset?directory=${a}`,"POST",{data:t})),i(c,"fileDelete",async a=>await r(`/files/${a}`,"DELETE")),i(c,"fileRemove",async a=>await r("/asset","DELETE",{data:{id:a}})),i(c,"fileRemoveByURL",async a=>await r("/asset","DELETE",{data:{url:a}}));export{c as A};