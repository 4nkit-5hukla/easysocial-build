var h=Object.defineProperty;var I=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var i=(e,t,r)=>(I(e,typeof t!="symbol"?t+"":t,r),r);import{r as s,j as c,A as a}from"./index.38d3e2dd.js";const m=s.exports.createContext(void 0),u=s.exports.createContext(void 0),E=({children:e})=>{const[t,r]=s.exports.useState(!1),[n,v]=s.exports.useState([]),[d,l]=s.exports.useState(""),[x,p]=s.exports.useState([]),[b,w]=s.exports.useState(),M={showInviteForm:t,invitedMembers:n,invitedMemberFilter:d,teamMembers:x,teamMembersTotal:b},P=s.exports.useMemo(()=>({setShowInviteForm:r,setInvitedMembers:v,setTeamMembers:p,setInvitedMemberFilter:l,setTeamMembersTotal:w}),[]);return c(m.Provider,{value:M,children:c(u.Provider,{value:P,children:e})})},S=()=>{const e=s.exports.useContext(m);if(e===void 0)throw Error("Item must be used inside of BizParticipantsProvider, otherwise it will not function correctly.");return e},y=()=>{const e=s.exports.useContext(u);if(e===void 0)throw Error("Item must be used inside of BizParticipantsProvider, otherwise it will not function correctly.");return e};class o{}i(o,"getTeamMembers",async(t="",r=1,n=20)=>await a(`/team-members?search=${t}&page=${r}&limit=${n}`,"GET")),i(o,"getUserInvites",async()=>await a("/invitation/all","GET")),i(o,"sendUserInvite",async t=>await a("/invitation","POST",{data:t})),i(o,"deleteUserInvite",async t=>await a(`/invitation/${t}`,"DELETE"));export{o as B,S as a,E as b,y as u};
