import{c as ne,r,u as V,j as e,D as F,a as P,B as d,b as Y,h as U,i as R,k as I,J as m,l as $,K as H,L as C,d as J,e as B,f as Q,g as W,M as q,N as G,O as K,Q as X,R as b,S as A,U as S,V as T,W as k,X as z,Y as M,Z,n as re,o as le,F as ce,T as de,q as ue,s as O,p as E,_}from"./index-Al805b9X.js";import{C as L}from"./circle-plus-Doo_DOHQ.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=ne("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]),oe=({dayOfWeek:g,createAvailability:x})=>{const[s,a]=r.useState(!1),[l,i]=r.useState(),[u,h]=r.useState(!1),[j,c]=r.useState(),p=V("(min-width: 768px)"),N=f=>{i({...l,[f.target.name]:f.target.value})},o=async f=>{if(f.preventDefault(),!(l!=null&&l.startTime)||!(l!=null&&l.endTime)){c("Veuillez renseigner une heure de début et une heure de fin.");return}h(!0);try{await x({dayOfWeek:g,...l}),a(!1)}catch{c("Une erreur est survenue, veuillez réessayer plus tard.")}h(!1)};return r.useEffect(()=>{s||i()},[s]),p?e.jsxs(F,{open:s,onOpenChange:a,children:[e.jsx(P,{asChild:!0,children:e.jsx(d,{children:e.jsx(L,{})})}),e.jsxs(Y,{className:"sm:max-w-[425px]",children:[e.jsxs(U,{children:[e.jsx(R,{children:"Ajouter un créneau"}),e.jsx(I,{children:"Selectionnez une heure de début et une heure de fin pour créer un créneau de disponibilité."})]}),e.jsxs("div",{className:"flex items-center justify-center gap-4",children:["De",e.jsx(m,{className:"w-fit",name:"startTime",type:"time",onChange:N}),"à",e.jsx(m,{className:"w-fit",name:"endTime",type:"time",onChange:N})]}),j&&setTimeout(()=>c(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:j}),e.jsx($,{className:"sm:justify-start",children:e.jsx(H,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(d,{variant:"outline",onClick:()=>i(),children:"Annuler"}),e.jsx(d,{onClick:o,disabled:u&&!0,children:u?e.jsx(C,{className:"animate-spin"}):"Ajouter"})]})})})]})]}):e.jsxs(J,{open:s,onOpenChange:a,children:[e.jsx(B,{asChild:!0,children:e.jsx(d,{children:e.jsx(L,{})})}),e.jsxs(Q,{children:[e.jsxs(W,{children:[e.jsx(q,{children:"Ajouter un créneau"}),e.jsx(G,{children:"Selectionnez une heure de début et une heure de fin pour créer un créneau de disponibilité."})]}),e.jsxs("div",{className:"flex items-center justify-center gap-4 px-4",children:["De",e.jsx(m,{className:"w-fit",name:"startTime",type:"time",onChange:N}),"à",e.jsx(m,{className:"w-fit",name:"endTime",type:"time",onChange:N})]}),e.jsxs(K,{className:"pt-2",children:[j&&setTimeout(()=>c(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:j}),e.jsx(X,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(d,{className:"w-full",onClick:o,disabled:u&&!0,children:u?e.jsx(C,{className:"animate-spin"}):"Ajouter"}),e.jsx(d,{className:"w-full",variant:"outline",onClick:()=>i(),children:"Annuler"})]})})]})]})]})},me=({createSpecialAvailability:g})=>{const[x,s]=r.useState(!1),[a,l]=r.useState(),[i,u]=r.useState(),[h,j]=r.useState(!1),[c,p]=r.useState(),N=V("(min-width: 768px)"),o=v=>{u({...i,[v.target.name]:v.target.value})},f=async v=>{if(v.preventDefault(),!a||!(i!=null&&i.startTime)||!(i!=null&&i.endTime)){p("Veuillez renseigner une date, une heure de début et une heure de fin.");return}j(!0);try{await g({date:Z.fromJSDate(a).toISODate(),...i}),s(!1)}catch{p("Une erreur est survenue, veuillez réessayer plus tard.")}j(!1)};return r.useEffect(()=>{x||u()},[x]),N?e.jsxs(F,{open:x,onOpenChange:s,children:[e.jsx(P,{asChild:!0,children:e.jsx(d,{variant:"link",className:"h-min p-0",children:"Ajouter une disponibilité"})}),e.jsxs(Y,{className:"sm:max-w-[425px]",children:[e.jsxs(U,{children:[e.jsx(R,{children:"Ajouter un créneau"}),e.jsx(I,{children:"Selectionnez une date, une heure de début et une heure de fin pour créer un créneau de disponibilité."})]}),e.jsxs(b,{children:[e.jsx(A,{asChild:!0,children:e.jsxs(d,{variant:"outline",className:"w-full",children:[a?e.jsx("span",{children:S(a)}):e.jsx("span",{children:"Choisir une date"}),e.jsx(T,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(k,{className:"w-auto p-0",align:"start",children:e.jsx(z,{mode:"single",selected:a,onSelect:l,initialFocus:!0,locale:M})})]}),e.jsxs("div",{className:"flex items-center justify-center gap-4",children:["De",e.jsx(m,{className:"w-fit",name:"startTime",type:"time",onChange:o}),"à",e.jsx(m,{className:"w-fit",name:"endTime",type:"time",onChange:o})]}),c&&setTimeout(()=>p(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:c}),e.jsx($,{className:"sm:justify-start",children:e.jsx(H,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(d,{variant:"outline",onClick:()=>u(),children:"Annuler"}),e.jsx(d,{onClick:f,disabled:h&&!0,children:h?e.jsx(C,{className:"animate-spin"}):"Ajouter"})]})})})]})]}):e.jsxs(J,{open:x,onOpenChange:s,children:[e.jsx(B,{asChild:!0,children:e.jsx(d,{variant:"link",children:"Ajouter une disponibilité"})}),e.jsxs(Q,{children:[e.jsxs(W,{children:[e.jsx(q,{children:"Ajouter un créneau"}),e.jsx(G,{children:"Selectionnez une date, une heure de début et une heure de fin pour créer un créneau de disponibilité."})]}),e.jsxs(b,{children:[e.jsx(A,{asChild:!0,children:e.jsxs(d,{variant:"outline",className:"w-full",children:[a?e.jsx("span",{children:S(a)}):e.jsx("span",{children:"Choisir une date"}),e.jsx(T,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(k,{className:"w-auto p-0",align:"start",children:e.jsx(z,{mode:"single",selected:a,onSelect:l,initialFocus:!0,locale:M})})]}),e.jsxs("div",{className:"flex items-center justify-center gap-4 px-4",children:["De",e.jsx(m,{className:"w-fit",name:"startTime",type:"time",onChange:o}),"à",e.jsx(m,{className:"w-fit",name:"endTime",type:"time",onChange:o})]}),e.jsxs(K,{className:"pt-2",children:[c&&setTimeout(()=>p(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:c}),e.jsx(X,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(d,{className:"w-full",onClick:f,disabled:h&&!0,children:h?e.jsx(C,{className:"animate-spin"}):"Ajouter"}),e.jsx(d,{className:"w-full",variant:"outline",onClick:()=>u(),children:"Annuler"})]})})]})]})]})},pe=()=>{const g={Lundi:"MONDAY",Mardi:"TUESDAY",Mercredi:"WEDNESDAY",Jeudi:"THURSDAY",Vendredi:"FRIDAY",Samedi:"SATURDAY",Dimanche:"SUNDAY"},[x,s]=r.useState(),[a,l]=r.useState(),[i,u]=r.useState(),[h,j]=r.useState(!0),c=re(),p=le(),N=ce();r.useEffect(()=>{o()},[]);async function o(){var t;try{const n=await c.get("/api/availabilities");console.log(n.data),s(ae(n.data.availabilities)),l(n.data.specialAvailabilities)}catch(n){u(n),((t=n.response)==null?void 0:t.status)===401&&p("/login",{state:{from:N},replace:!0})}j(!1)}async function f(t){await c.post("/api/availabilities",t),o()}async function v(t){await c.post("/api/availabilities/special",t),o()}async function D(t){await c.delete(`/api/availabilities/${t}`),o()}async function se(t){await c.delete(`/api/availabilities/special/${t}`),o()}function ae(t){const n={};return t==null||t.forEach(({id:y,dayOfWeek:w,startTime:te,endTime:ie})=>{n[w]||(n[w]=[]),n[w].push({id:y,start:te,end:ie})}),n}return h?e.jsx(C,{className:"w-8 h-8 animate-spin flex-1"}):e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col space-y-4",children:[e.jsx(d,{variant:"link",className:"justify-start h-0 p-0",onClick:()=>p(-1),children:"Retour"}),e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes disponibilités"}),e.jsxs(de,{defaultValue:"weekly",className:"space-y-4",children:[e.jsxs(ue,{children:[e.jsx(O,{value:"weekly",children:"Par semaine"}),e.jsx(O,{value:"daily",children:"Par jour"})]}),e.jsxs(E,{value:"weekly",children:[e.jsx("p",{className:"text-muted pb-4",children:"Gérez vos horaires de travail hebdomadaires."}),Object.entries(g).map(([t,n],y)=>e.jsxs("div",{children:[e.jsx(xe,{dayFR:t,dayEN:n,availabilities:x&&x[n],createAvailability:f,removeAvailability:D}),y!==Object.entries(g).length-1&&e.jsx("div",{className:"divider w-1/2 mx-auto"})]},y))]}),e.jsxs(E,{value:"daily",children:[e.jsx("p",{className:"text-muted pb-4",children:"Définissez des horaires spéciales pour des jours précis."}),e.jsx(me,{createSpecialAvailability:v}),a!=null&&a.length?a.map(({id:t,date:n,startTime:y,endTime:w})=>e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-2 pb-4",children:[e.jsx("span",{className:"flex-1",children:Z.fromISO(n).toFormat("DDDD")}),e.jsxs("div",{className:"flex flex-1 gap-2",children:[e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx(m,{disabled:!0,type:"time",defaultValue:y,className:"!opacity-100 w-min"}),e.jsx("div",{className:"divider divider-horizontal m-0"}),e.jsx(m,{disabled:!0,type:"time",defaultValue:w,className:"!opacity-100 w-min"})]}),e.jsx(_,{id:t,action:se,actionLabel:"Supprimer",buttonVariant:"ghost",title:"Supprimer une disponibilité spéciale",description:"Êtes-vous sûr de vouloir supprimer cette disponibilité spéciale ?",trigger:e.jsx(ee,{className:"text-destructive"})})]})]},t)):e.jsx("p",{className:"text-muted",children:"Aucune disponibilité spéciale"})]})]})]})},xe=({dayFR:g,dayEN:x,availabilities:s,createAvailability:a,removeAvailability:l})=>e.jsxs("section",{className:`flex flex-col sm:flex-row gap-4 ${!(s!=null&&s.length)&&"text-muted sm:items-center"}`,children:[e.jsx("span",{className:"text-xl font-medium sm:flex-1",children:g}),s!=null&&s.length?e.jsx("div",{className:"space-y-2 sm:flex-2",children:s==null?void 0:s.map(({id:i,start:u,end:h},j)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(m,{disabled:!0,type:"time",defaultValue:u,className:"!opacity-100 w-min"}),e.jsx("div",{className:"divider divider-horizontal m-0"}),e.jsx(m,{disabled:!0,type:"time",defaultValue:h,className:"!opacity-100 w-min"}),e.jsx(_,{id:i,action:l,actionLabel:"Supprimer",buttonVariant:"ghost",title:"Supprimer un créneau",description:"Êtes-vous sûr de vouloir supprimer ce créneau de disponibilité ?",trigger:e.jsx(ee,{className:"text-destructive"})})]},i))}):e.jsx("div",{className:"sm:flex-2",children:"Fermé"}),e.jsx("div",{className:"flex sm:flex-1 justify-end",children:e.jsx(oe,{dayOfWeek:x,createAvailability:a})})]});export{pe as default};
