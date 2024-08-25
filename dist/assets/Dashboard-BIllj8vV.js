import{r as c,u as w,j as e,D as E,a as T,B as l,b,c as P,d as L,e as z,f as k,g as M,h as S,i as F,k as R,L as $,l as h,m as O,n as V,T as B,o as j,p as G,q as D}from"./index-X6B2dVZn.js";const A=({id:s,appointmentAction:d,actionText:u,dialogTitle:o,dialogDescription:t,buttonText:x,variant:n})=>{const[m,i]=c.useState(!1),[a,r]=c.useState(!1),[v,p]=c.useState(),y=w("(min-width: 768px)"),C=async f=>{f.preventDefault(),r(!0);try{await d(s),i(!1)}catch{p("Une erreur est survenue, veuillez réessayer plus tard.")}finally{r(!1)}},N=({onClose:f})=>e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsx(S,{className:n==="destructive"?"text-destructive":"",children:o}),e.jsx(F,{children:t})]}),v&&setTimeout(()=>p(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:v}),e.jsx(R,{children:e.jsxs("div",{className:"w-full flex flex-col md:flex-row gap-2",children:[e.jsx(l,{variant:"outline",onClick:f,children:"Annuler"}),e.jsx(l,{onClick:C,variant:n,disabled:a,children:a?e.jsx($,{className:"animate-spin"}):u})]})})]});return y?e.jsxs(E,{open:m,onOpenChange:i,children:[e.jsx(T,{asChild:!0,children:e.jsx(l,{variant:n,children:x})}),e.jsx(b,{className:"sm:max-w-[425px]",children:e.jsx(N,{onClose:()=>i(!1)})})]}):e.jsxs(P,{open:m,onOpenChange:i,children:[e.jsx(L,{asChild:!0,children:e.jsx(l,{variant:n,children:x})}),e.jsx(z,{children:e.jsx(k,{children:e.jsx(N,{onClose:()=>i(!1)})})})]})},H=({appointment:s,acceptAppointment:d,cancelAppointment:u,today:o=!1,past:t=!1})=>e.jsxs("div",{className:`flex flex-col gap-2 py-2 ${t&&"text-muted"}`,children:[e.jsx("div",{className:"divider divider-start my-0",children:e.jsxs("h2",{className:"text-xl font-semibold",children:[s.client.firstName," ",s.client.lastName]})}),e.jsx("div",{className:"flex flex-col md:flex-row md:gap-4",children:e.jsx(l,{variant:"link",className:`w-fit p-0 h-min ${t&&"text-muted"}`,children:e.jsx("a",{href:`tel:${s.client.phoneNumber}`,children:s.client.phoneNumber.replace(/(\d{2})(?=\d)/g,"$1 ")})})}),e.jsxs("h3",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:s.service.name})," ",e.jsx("br",{}),!o&&e.jsxs(e.Fragment,{children:["le"," ",e.jsxs("span",{className:"font-medium",children:[new Date(s.date).toLocaleDateString("fr-FR",{weekday:"long",month:"long",day:"numeric"}).toUpperCase()," "]})]}),"à"," ",e.jsx("span",{className:"font-medium",children:new Date(s.date).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]}),s.status==="PENDING"&&e.jsx(h,{variant:"outline",className:t&&"bg-muted",children:"En attente de confirmation"}),s.status==="ACCEPTED"&&e.jsx(h,{variant:"success",className:t&&"bg-muted",children:"Confirmé"}),s.status==="COMPLETED"&&e.jsx(h,{variant:"success",className:t&&"bg-muted",children:"Passé"}),s.status==="CANCELLED"&&e.jsx(h,{variant:"destructive",className:t&&"bg-muted",children:"Annulé"}),e.jsxs("div",{className:"flex justify-between",children:[s.status==="PENDING"&&e.jsx(A,{id:s.id,appointmentAction:d,actionText:"Accepter",dialogTitle:"Accepter le rendez-vous",dialogDescription:"Êtes-vous sûr de vouloir accepter ce rendez-vous ?",buttonText:"Accepter",variant:"success"}),(s.status==="PENDING"||s.status==="ACCEPTED")&&e.jsx(A,{id:s.id,appointmentAction:u,actionText:"Refuser",dialogTitle:"Refuser le rendez-vous",dialogDescription:"Êtes-vous sûr de vouloir refuser ce rendez-vous ?",buttonText:"Refuser",variant:"destructive"})]})]}),g=H;function q(){const[s,d]=c.useState(),[u,o]=c.useState(!0),t=O(),x=V();async function n(){try{const a=await t.get("/api/appointments/provider");d(a.data)}catch(a){console.error(a)}finally{o(!1)}}async function m(a){try{await t.patch(`/api/appointments/${a}`,{status:"ACCEPTED"}),n()}catch(r){console.error(r)}}async function i(a){try{await t.patch(`/api/appointments/${a}`,{status:"CANCELLED"}),n()}catch(r){console.error(r)}}return c.useEffect(()=>{n()},[]),e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4",children:[e.jsx(l,{variant:"link",className:"justify-start h-0 p-0",onClick:()=>x(-1),children:"Retour"}),e.jsxs(B,{defaultValue:"today",className:"space-y-4",children:[e.jsx(j,{value:"today",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes rendez-vous de la journée"})}),e.jsx(j,{value:"incoming",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes demandes en attente"})}),e.jsxs(G,{children:[e.jsx(D,{value:"today",children:"Aujourd'hui"}),e.jsx(D,{value:"incoming",children:"À venir"})]}),e.jsx(j,{value:"today",className:"space-y-4",children:s!=null&&s.todaysAppointments.length?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-muted",children:["Vous avez ",s==null?void 0:s.todaysAppointments.length," rendez-vous aujourd'hui."]}),s.todaysAppointments.filter(a=>a.status==="ACCEPTED").sort((a,r)=>new Date(a.date)-new Date(r.date)).map(a=>e.jsx(g,{appointment:a,cancelAppointment:i,today:!0},a.id)),e.jsx("div",{className:"divider divider-start text-muted",children:"Mes rendez-vous passés"}),s.todaysAppointments.filter(a=>a.status==="COMPLETED").sort((a,r)=>new Date(r.date)-new Date(a.date)).map(a=>e.jsx(g,{appointment:a,past:!0,today:!0},a.id))]}):e.jsxs("p",{className:"text-muted",children:[" ","Vous n'avez aucun rendez-vous aujourd'hui."]})}),e.jsx(j,{value:"incoming",children:s!=null&&s.futureAppointments.length?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-muted",children:["Vous avez ",s==null?void 0:s.futureAppointments.length," demandes en attente"]}),s.futureAppointments.map(a=>e.jsx(g,{appointment:a,acceptAppointment:m,cancelAppointment:i},a.id))]}):e.jsx("p",{className:"text-muted",children:"Vous n'avez aucune demande en attente."})})]})]})}export{q as default};
