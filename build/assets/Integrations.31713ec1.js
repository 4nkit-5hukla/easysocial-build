var x=Object.defineProperty;var L=(r,e,a)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var u=(r,e,a)=>(L(r,typeof e!="symbol"?e+"":e,a),a);import{ao as S,a as o,j as t,I as N,L as g,aq as P,u as T,r as i,V as w,am as A,W as b}from"./index.ece9aff6.js";import{c as F,H as G,d as v}from"./Wrappers.be76913d.js";import{C as k,a as y,h as B}from"./Card.7c9ff246.js";import{L as E}from"./LeftArrow.be0f8108.js";import{C as R}from"./Grid.393e72af.js";import{F as W}from"./Form.16c5bf1c.js";import{A as D}from"./ArrowRight.50946729.js";import{T as H}from"./TextField.a574cfa5.js";import"./Wrappers.module.1d569f64.js";import"./Card.f4c87cf9.js";import"./CardContent.0f5272a0.js";import"./Select.03464598.js";import"./useFormControl.d2abdcc0.js";import"./isMuiElement.80cc5cad.js";import"./Menu.41d358f2.js";import"./List.c81063c5.js";import"./useControlled.1f67ff79.js";class C{}u(C,"getAllIntegrations",async()=>await S("/integrations","GET"));const j="_8RZD",O="QlmL",$="CySu",q="seN-",J="gGGl",Q="Ylei",z="J-yO",M="PGOm",V="vnlQ",X="ftGF",s={IntegrationBlock:j,CardItem:O,CardIcon:$,Icon:q,CardTitle:J,CardSubtitle:Q,CardDescription:z,CardStatus:M,CardLink:V,CardPrice:X},Y=r=>{const{name:e,description:a,amount:c,slug:l,logo:d,status:p}=r;return o("div",{className:s.CardItem,children:[t("div",{className:s.CardIcon,children:t(N,{src:d,alt:e,className:s.Icon})}),t("p",{className:s.CardTitle,children:e}),t("p",{className:s.CardDescription,children:a}),o("div",{className:s.CardStatus,children:[t("p",{className:s.CardPrice,children:c===0?"FREE":`${c}/month`}),t(g,{to:`/integrations/${l}`,className:s.CardLink,children:p==="Published"?o(P,{children:[t("span",{children:"GET NOW"}),t(D,{color:"#adbbc5",sx:{width:"8px",height:"6px"}})]}):"Coming Soon"})]})]})},Z="Xg8r",_="JzpP",K="x3AG",U="nWL5",tt="IG19",h={SearchInput:Z,SearchInputText:_,InputAdornment:K,IconButton:U,relPosition:tt},et=()=>{const{isMobile:r}=T(),[e,a]=i.exports.useState([]),[c,l]=i.exports.useState(!1),d=i.exports.useRef(async()=>{try{l(!0);const n=await C.getAllIntegrations();if(!n.success)throw Error(n.message);a(n.payload.data),l(!1)}catch(n){console.log(n)}}),p=n=>{const{value:m}=n.target;if(m.length>0){const I=e.filter(f=>f.name.toLowerCase().includes(m.toLowerCase()));a(I)}else d.current()};return i.exports.useEffect(()=>{d.current()},[]),o(i.exports.Fragment,{children:[r&&o(F,{children:[t(w,{component:g,to:"/business-settings",className:"icon-md-button",children:t(E,{})}),t(G,{children:"Integrations"})]}),t(v,{children:t(R,{children:t(k,{elevation:0,children:o(y,{children:[t(B,{children:"Integrations"}),t(W,{children:t(H,{variant:"standard",inputProps:{className:h.SearchInput},InputProps:{classes:{input:h.SearchInputText}},placeholder:"Search for an integration",onChange:n=>{p(n)}})}),c?t(A,{height:72,width:72,className:h.relPosition}):t("div",{className:s.IntegrationBlock,children:e.map((n,m)=>t(Y,{...n},m))})]})})})})]})},Lt=()=>o(i.exports.Fragment,{children:[t(b,{children:t("title",{children:"WhatsApp Chat FLow"})}),t(et,{})]});export{Lt as default};
