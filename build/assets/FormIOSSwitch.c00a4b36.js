import{C as c}from"./index.esm.d5c830c3.js";import{s,j as t}from"./index.be83498f.js";import{S as l}from"./Switch.399d99d8.js";const u=s(i=>t(l,{focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,...i}))(({theme:i})=>({width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:i.palette.primary,opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:i.palette.primary,border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:i.palette.mode==="light"?i.palette.grey[100]:i.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:i.palette.mode==="light"?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:26/2,backgroundColor:i.palette.mode==="light"?"#E9E9EA":"#39393D",opacity:1,transition:i.transitions.create(["background-color"],{duration:500})}})),b=({control:i,defaultValue:d,rules:o,name:a,...e})=>t(c,{rules:o,control:i,name:a,render:({field:r})=>t(u,{...e,checked:r.value,onChange:r.onChange})});export{b as F,u as I};