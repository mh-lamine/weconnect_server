import{c as w,r as c,u as E,j as e,D as T,a as b,B as i,b as z,d as L,e as P,f as k,g as S,h as M,i as F,k as R,l as V,L as $,m as h,n as O,o as I,T as B,p as j,q as G,s as D,t as H}from"./index-DKD_o7jf.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=w("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),y=({id:s,appointmentAction:d,actionText:u,dialogTitle:o,dialogDescription:t,buttonText:x,variant:l})=>{const[m,n]=c.useState(!1),[a,r]=c.useState(!1),[g,p]=c.useState(),A=E("(min-width: 768px)"),C=async f=>{f.preventDefault(),r(!0);try{await d(s),n(!1)}catch{p("Une erreur est survenue, veuillez réessayer plus tard.")}finally{r(!1)}},N=({onClose:f})=>e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsx(F,{className:l==="destructive"?"text-destructive":"",children:o}),e.jsx(R,{children:t})]}),g&&setTimeout(()=>p(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:g}),e.jsx(V,{children:e.jsxs("div",{className:"w-full flex flex-col md:flex-row gap-2",children:[e.jsx(i,{variant:"outline",onClick:f,children:"Annuler"}),e.jsx(i,{onClick:C,variant:l,disabled:a,children:a?e.jsx($,{className:"animate-spin"}):u})]})})]});return A?e.jsxs(T,{open:m,onOpenChange:n,children:[e.jsx(b,{asChild:!0,children:e.jsx(i,{variant:l,children:x})}),e.jsx(z,{className:"sm:max-w-[425px]",children:e.jsx(N,{onClose:()=>n(!1)})})]}):e.jsxs(L,{open:m,onOpenChange:n,children:[e.jsx(P,{asChild:!0,children:e.jsx(i,{variant:l,children:x})}),e.jsx(k,{children:e.jsx(S,{children:e.jsx(N,{onClose:()=>n(!1)})})})]})},U=({appointment:s,acceptAppointment:d,cancelAppointment:u,today:o=!1,past:t=!1})=>e.jsxs("div",{className:`flex flex-col gap-2 py-2 ${t&&"text-muted"}`,children:[e.jsx("div",{className:"divider divider-start my-0",children:e.jsxs("h2",{className:"text-xl font-semibold",children:[s.client.firstName," ",s.client.lastName]})}),e.jsx("div",{className:"flex flex-col md:flex-row md:gap-4",children:e.jsx(i,{variant:"link",className:`w-fit p-0 h-min ${t&&"text-muted"}`,children:e.jsx("a",{href:`tel:${s.client.phoneNumber}`,children:s.client.phoneNumber.replace(/(\d{2})(?=\d)/g,"$1 ")})})}),e.jsxs("h3",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:s.service.name})," ",e.jsx("br",{}),!o&&e.jsxs(e.Fragment,{children:["le"," ",e.jsxs("span",{className:"font-medium",children:[new Date(s.date).toLocaleDateString("fr-FR",{weekday:"long",month:"long",day:"numeric"}).toUpperCase()," "]})]}),"à"," ",e.jsx("span",{className:"font-medium",children:new Date(s.date).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]}),s.status==="PENDING"&&e.jsx(h,{variant:"outline",className:t&&"bg-muted",children:"En attente de confirmation"}),s.status==="ACCEPTED"&&e.jsx(h,{variant:"success",className:t&&"bg-muted",children:"Confirmé"}),s.status==="COMPLETED"&&e.jsx(h,{variant:"success",className:t&&"bg-muted",children:"Passé"}),s.status==="CANCELLED"&&e.jsx(h,{variant:"destructive",className:t&&"bg-muted",children:"Annulé"}),e.jsxs("div",{className:"flex justify-between",children:[s.status==="PENDING"&&e.jsx(y,{id:s.id,appointmentAction:d,actionText:"Accepter",dialogTitle:"Accepter le rendez-vous",dialogDescription:"Êtes-vous sûr de vouloir accepter ce rendez-vous ?",buttonText:"Accepter",variant:"success"}),(s.status==="PENDING"||s.status==="ACCEPTED")&&e.jsx(y,{id:s.id,appointmentAction:u,actionText:"Refuser",dialogTitle:"Refuser le rendez-vous",dialogDescription:"Êtes-vous sûr de vouloir refuser ce rendez-vous ?",buttonText:"Refuser",variant:"destructive"})]})]}),v=U;function K(){const[s,d]=c.useState(),[u,o]=c.useState(!0),t=O(),x=I();async function l(){try{const a=await t.get("/api/appointments/provider");d(a.data)}catch(a){console.error(a)}finally{o(!1)}}async function m(a){try{await t.patch(`/api/appointments/${a}`,{status:"ACCEPTED"}),l()}catch(r){console.error(r)}}async function n(a){try{await t.patch(`/api/appointments/${a}`,{status:"CANCELLED"}),l()}catch(r){console.error(r)}}return c.useEffect(()=>{l()},[]),e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4",children:[e.jsx(i,{variant:"link",className:"justify-start h-0 p-0",onClick:()=>x(-1),children:"Retour"}),e.jsxs(B,{defaultValue:"today",className:"space-y-4",children:[e.jsx(j,{value:"today",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes rendez-vous de la journée"})}),e.jsx(j,{value:"incoming",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes demandes en attente"})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(G,{children:[e.jsx(D,{value:"today",children:"Aujourd'hui"}),e.jsx(D,{value:"incoming",children:"À venir"})]}),e.jsx(H,{to:"/salon",children:e.jsx(q,{size:24,className:"text-primary"})})]}),e.jsx(j,{value:"today",className:"space-y-4",children:s!=null&&s.todaysAppointments.length?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-muted",children:["Vous avez ",s==null?void 0:s.todaysAppointments.length," rendez-vous aujourd'hui."]}),s.todaysAppointments.filter(a=>a.status==="ACCEPTED").sort((a,r)=>new Date(a.date)-new Date(r.date)).map(a=>e.jsx(v,{appointment:a,cancelAppointment:n,today:!0},a.id)),e.jsx("div",{className:"divider divider-start text-muted",children:"Mes rendez-vous passés"}),s.todaysAppointments.filter(a=>a.status==="COMPLETED").sort((a,r)=>new Date(r.date)-new Date(a.date)).map(a=>e.jsx(v,{appointment:a,past:!0,today:!0},a.id))]}):e.jsxs("p",{className:"text-muted",children:[" ","Vous n'avez aucun rendez-vous aujourd'hui."]})}),e.jsx(j,{value:"incoming",children:s!=null&&s.futureAppointments.length?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-muted",children:["Vous avez ",s==null?void 0:s.futureAppointments.length," demandes en attente"]}),s.futureAppointments.map(a=>e.jsx(v,{appointment:a,acceptAppointment:m,cancelAppointment:n},a.id))]}):e.jsx("p",{className:"text-muted",children:"Vous n'avez aucune demande en attente."})})]})]})}export{K as default};