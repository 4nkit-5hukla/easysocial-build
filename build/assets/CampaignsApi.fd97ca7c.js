var x=Object.defineProperty;var P=(t,e,a)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var i=(t,e,a)=>(P(t,typeof e!="symbol"?e+"":e,a),a);import{m as V,r as m,n as j,bl as w,_ as D,j as h,h as v,bm as f,bn as g,bo as S,z as R,bp as T,bq as $,x as B,ai as d,aO as O}from"./index.2958bef2.js";const C=["component","direction","spacing","divider","children"];function E(t,e){const a=m.exports.Children.toArray(t).filter(Boolean);return a.reduce((o,c,r)=>(o.push(c),r<a.length-1&&o.push(m.exports.cloneElement(e,{key:`separator-${r}`})),o),[])}const M=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],_=({ownerState:t,theme:e})=>{let a=v({display:"flex",flexDirection:"column"},f({theme:e},g({values:t.direction,breakpoints:e.breakpoints.values}),o=>({flexDirection:o})));if(t.spacing){const o=S(e),c=Object.keys(e.breakpoints.values).reduce((n,s)=>((typeof t.spacing=="object"&&t.spacing[s]!=null||typeof t.direction=="object"&&t.direction[s]!=null)&&(n[s]=!0),n),{}),r=g({values:t.direction,base:c}),u=g({values:t.spacing,base:c});typeof r=="object"&&Object.keys(r).forEach((n,s,p)=>{if(!r[n]){const k=s>0?r[p[s-1]]:"column";r[n]=k}}),a=R(a,f({theme:e},u,(n,s)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${M(s?r[s]:t.direction)}`]:$(o,n)}})))}return a=T(e.breakpoints,a),a},q=V("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>[e.root]})(_),z=m.exports.forwardRef(function(e,a){const o=j({props:e,name:"MuiStack"}),c=w(o),{component:r="div",direction:u="column",spacing:y=0,divider:n,children:s}=c,p=D(c,C);return h(q,v({as:r,ownerState:{direction:u,spacing:y},ref:a},p,{children:n?E(s,n):s}))}),I=z,U=B(h("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");class l{}i(l,"createNewCampaign",async e=>await d("/campaigns","POST",{data:e})),i(l,"getCampaignsData",async()=>await d("/campaigns","GET")),i(l,"getCampaignById",async e=>await d(`/campaigns/${e}`,"GET")),i(l,"updateCampaignProgress",async(e,a)=>await d(`/campaigns/status/${e}`,"PUT",{data:{progress:a}})),i(l,"updateCampaignSchedule",async(e,a)=>await d(`/campaigns/schedule-date/${e}`,"PUT",{data:{schedule_date:a}})),i(l,"downloadCampaignReport",async(e,a)=>await O(`/campaigns/report/download/${e}`,"POST",{data:{month:a}}));export{l as C,U as D,I as S};
