var x=Object.defineProperty;var L=(r,e,a)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var u=(r,e,a)=>(L(r,typeof e!="symbol"?e+"":e,a),a);import{ao as S,a as o,j as t,I as N,L as g,aq as P,u as T,r as i,V as w,am as A,W as b}from"./index.2d98d0ad.js";import{c as F,H as G,d as v}from"./Wrappers.5defd22b.js";import{C as k,a as y,h as B}from"./Card.fd99c2fb.js";import{L as E}from"./LeftArrow.66d21ebf.js";import{C as R}from"./Grid.5a3112b8.js";import{F as W}from"./Form.0806766e.js";import{A as D}from"./ArrowRight.4a5b76be.js";import{T as H}from"./TextField.6d44061e.js";import"./Card.684874a8.js";import"./CardContent.619ddd1d.js";import"./Select.13473313.js";import"./useFormControl.d9d4270f.js";import"./isMuiElement.3299311e.js";import"./Menu.82d3cc2b.js";import"./List.17d248ed.js";import"./useControlled.a2954169.js";class C{}u(C,"getAllIntegrations",async()=>await S("/integrations","GET"));const j="_8RZD",O="QlmL",$="CySu",q="seN-",J="gGGl",Q="Ylei",z="J-yO",M="PGOm",V="vnlQ",X="ftGF",s={IntegrationBlock:j,CardItem:O,CardIcon:$,Icon:q,CardTitle:J,CardSubtitle:Q,CardDescription:z,CardStatus:M,CardLink:V,CardPrice:X},Y=r=>{const{name:e,description:a,amount:c,slug:l,logo:d,status:p}=r;return o("div",{className:s.CardItem,children:[t("div",{className:s.CardIcon,children:t(N,{src:d,alt:e,className:s.Icon})}),t("p",{className:s.CardTitle,children:e}),t("p",{className:s.CardDescription,children:a}),o("div",{className:s.CardStatus,children:[t("p",{className:s.CardPrice,children:c===0?"FREE":`${c}/month`}),t(g,{to:`/integrations/${l}`,className:s.CardLink,children:p==="Published"?o(P,{children:[t("span",{children:"GET NOW"}),t(D,{color:"#adbbc5",sx:{width:"8px",height:"6px"}})]}):"Coming Soon"})]})]})},Z="Xg8r",_="JzpP",K="x3AG",U="nWL5",tt="IG19",h={SearchInput:Z,SearchInputText:_,InputAdornment:K,IconButton:U,relPosition:tt},et=()=>{const{isMobile:r}=T(),[e,a]=i.exports.useState([]),[c,l]=i.exports.useState(!1),d=i.exports.useRef(async()=>{try{l(!0);const n=await C.getAllIntegrations();if(!n.success)throw Error(n.message);a(n.payload.data),l(!1)}catch(n){console.log(n)}}),p=n=>{const{value:m}=n.target;if(m.length>0){const I=e.filter(f=>f.name.toLowerCase().includes(m.toLowerCase()));a(I)}else d.current()};return i.exports.useEffect(()=>{d.current()},[]),o(i.exports.Fragment,{children:[r&&o(F,{children:[t(w,{component:g,to:"/business-settings",className:"icon-md-button",children:t(E,{})}),t(G,{children:"Integrations"})]}),t(v,{children:t(R,{children:t(k,{elevation:0,children:o(y,{children:[t(B,{children:"Integrations"}),t(W,{children:t(H,{variant:"standard",inputProps:{className:h.SearchInput},InputProps:{classes:{input:h.SearchInputText}},placeholder:"Search for an integration",onChange:n=>{p(n)}})}),c?t(A,{height:72,width:72,className:h.relPosition}):t("div",{className:s.IntegrationBlock,children:e.map((n,m)=>t(Y,{...n},m))})]})})})})]})},xt=()=>o(i.exports.Fragment,{children:[t(b,{children:t("title",{children:"WhatsApp Chat FLow"})}),t(et,{})]});export{xt as default};
