import{c as z,j as e,B as C,a as n,M as g,r as j,u as P,b as L,T,d as c,e as w,f as p,L as V,A as M,g as A,h as E,i as y}from"./index-C0y5ghfn.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),I=({appointment:s,acceptAppointment:o,cancelAppointment:f,today:u=!1,past:t=!1})=>e.jsxs("div",{className:`flex flex-col gap-2 py-2 ${t&&"text-muted"}`,children:[e.jsx("div",{className:"divider divider-start my-0",children:e.jsxs("h2",{className:"text-xl font-semibold",children:[s.client.firstName," ",s.client.lastName]})}),e.jsx("div",{className:"flex flex-col md:flex-row md:gap-4",children:e.jsx(C,{variant:"link",className:`w-fit p-0 h-min ${t&&"text-muted"}`,children:e.jsx("a",{href:`tel:${s.client.phoneNumber}`,children:s.client.phoneNumber.replace(/(\d{2})(?=\d)/g,"$1 ")})})}),e.jsxs("h3",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:s.service.name})," ",e.jsx("br",{}),!u&&e.jsxs(e.Fragment,{children:["le"," ",e.jsxs("span",{className:"font-medium",children:[new Date(s.date).toLocaleDateString("fr-FR",{weekday:"long",month:"long",day:"numeric"}).toUpperCase()," "]})]}),"à"," ",e.jsx("span",{className:"font-medium",children:new Date(s.date).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]}),s.status==="PENDING"&&e.jsx(n,{variant:"outline",className:t&&"bg-muted",children:"En attente de confirmation"}),s.status==="ACCEPTED"&&e.jsx(n,{variant:"success",className:t&&"bg-muted",children:"Confirmé"}),s.status==="COMPLETED"&&e.jsx(n,{variant:"success",className:t&&"bg-muted",children:"Passé"}),s.status==="CANCELLED"&&e.jsx(n,{variant:"destructive",className:t&&"bg-muted",children:"Annulé"}),e.jsxs("div",{className:"flex justify-between",children:[s.status==="PENDING"&&e.jsx(g,{id:s.id,action:o,actionLabel:"Accepter",title:"Accepter le rendez-vous",description:"Êtes-vous sûr de vouloir accepter ce rendez-vous ?",trigger:"Accepter",variant:"success"}),(s.status==="PENDING"||s.status==="ACCEPTED")&&e.jsx(g,{id:s.id,action:f,actionLabel:"Refuser",title:"Refuser le rendez-vous",description:"Êtes-vous sûr de vouloir refuser ce rendez-vous ?",trigger:"Refuser",variant:"destructive"})]})]}),d=I;function S(){const[s,o]=j.useState(),[f,u]=j.useState(!0),t=P(),D=L();async function x(){try{const a=await t.get("/api/appointments/provider");o(a.data)}catch(a){console.error(a)}finally{u(!1)}}async function N(a){try{await t.patch(`/api/appointments/${a}`,{status:"ACCEPTED"}),x()}catch(r){console.error(r)}}async function m(a){try{await t.patch(`/api/appointments/${a}`,{status:"CANCELLED"}),x()}catch(r){console.error(r)}}const i=(a,r)=>a.filter(v=>v.status===r).sort((v,b)=>new Date(v.date)-new Date(b.date));j.useEffect(()=>{x()},[]);const l=(s==null?void 0:s.todaysAppointments)||[],h=(s==null?void 0:s.futureAppointments)||[];return e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4",children:[e.jsx(C,{variant:"link",className:"justify-start h-0 p-0",onClick:()=>D(-1),children:"Retour"}),e.jsxs(T,{defaultValue:"today",className:"space-y-4",children:[e.jsx(c,{value:"today",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes rendez-vous de la journée"})}),e.jsx(c,{value:"incoming",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes rendez-vous à venir"})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(w,{children:[e.jsx(p,{value:"today",children:"Aujourd'hui"}),e.jsx(p,{value:"incoming",children:"À venir"})]}),e.jsx(V,{to:"/salon",children:e.jsx(k,{size:24,className:"text-primary"})})]}),e.jsx(c,{value:"today",className:"space-y-4",children:l.length?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-muted",children:["Vous avez ",l.length," rendez-vous aujourd'hui."]}),i(l,"ACCEPTED").map(a=>e.jsx(d,{appointment:a,cancelAppointment:m,today:!0},a.id)),e.jsx("div",{className:"divider divider-start text-muted",children:"Mes rendez-vous passés"}),i(l,"COMPLETED").map(a=>e.jsx(d,{appointment:a,past:!0,today:!0},a.id))]}):e.jsxs("p",{className:"text-muted",children:[" ","Vous n'avez aucun rendez-vous aujourd'hui."]})}),e.jsx(c,{value:"incoming",children:h.length?e.jsxs(M,{type:"single",collapsible:!0,defaultValue:"item-0",className:"w-full",children:[e.jsxs(A,{value:"item-0",children:[e.jsx(E,{children:e.jsxs("p",{className:"text-muted",children:["Vous avez"," ",s.futureAppointments.filter(a=>a.status==="PENDING").length," ","demande(s) en attente."]})}),e.jsx(y,{children:i(h,"PENDING").map(a=>e.jsx(d,{appointment:a,acceptAppointment:N,cancelAppointment:m},a.id))})]}),e.jsxs(A,{value:"item-1",children:[e.jsx(E,{children:e.jsxs("p",{className:"text-muted",children:["Vous avez"," ",s.futureAppointments.filter(a=>a.status==="ACCEPTED").length," ","rendez-vous à venir."]})}),e.jsx(y,{children:i(h,"ACCEPTED").map(a=>e.jsx(d,{appointment:a,acceptAppointment:N,cancelAppointment:m},a.id))})]})]}):e.jsx("p",{className:"text-muted",children:"Vous n'avez aucun rendez-vous à venir."})})]})]})}export{S as default};
