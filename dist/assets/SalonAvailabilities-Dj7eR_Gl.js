import{m as $,r as d,n as A,j as e,D as S,o as T,B as n,p as b,q as k,s as E,t as M,I as N,v as O,w as L,L as v,x as z,y as Y,z as R,A as U,C as F,F as H,G as I,H as V,u as q,a as G,b as J,E as Q}from"./index-CZ0MA7bG.js";import{C as D}from"./circle-plus-BKEr5bOm.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=$("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]),W=({dayOfWeek:m,createAvailability:h})=>{const[s,u]=d.useState(!1),[t,i]=d.useState(),[r,l]=d.useState(!1),[o,x]=d.useState(),j=A("(min-width: 768px)"),p=f=>{i({...t,[f.target.name]:f.target.value})},g=async f=>{if(f.preventDefault(),!(t!=null&&t.startTime)||!(t!=null&&t.endTime)){x("Veuillez renseigner une heure de début et une heure de fin.");return}l(!0);try{await h({dayOfWeek:m,...t})}catch{x("Une erreur est survenue, veuillez réessayer plus tard.")}l(!1),u(!1)};return d.useEffect(()=>{s||i()},[s]),j?e.jsxs(S,{open:s,onOpenChange:u,children:[e.jsx(T,{asChild:!0,children:e.jsx(n,{children:e.jsx(D,{})})}),e.jsxs(b,{className:"sm:max-w-[425px]",children:[e.jsxs(k,{children:[e.jsx(E,{children:"Ajouter un créneau"}),e.jsx(M,{children:"Selectionnez une heure de début et une heure de fin pour créer un créneau de disponibilité."})]}),e.jsxs("div",{className:"flex items-center justify-center gap-4",children:["De",e.jsx(N,{className:"w-fit",name:"startTime",type:"time",onChange:p}),"à",e.jsx(N,{className:"w-fit",name:"endTime",type:"time",onChange:p})]}),o&&setTimeout(()=>x(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:o}),e.jsx(O,{className:"sm:justify-start",children:e.jsx(L,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(n,{variant:"outline",onClick:()=>i(),children:"Annuler"}),e.jsx(n,{onClick:g,disabled:r&&!0,children:r?e.jsx(v,{className:"animate-spin"}):"Ajouter"})]})})})]})]}):e.jsxs(z,{open:s,onOpenChange:u,children:[e.jsx(Y,{asChild:!0,children:e.jsx(n,{children:e.jsx(D,{})})}),e.jsxs(R,{children:[e.jsxs(U,{className:"text-left",children:[e.jsx(F,{children:"Ajouter un créneau"}),e.jsx(H,{children:"Selectionnez une heure de début et une heure de fin pour créer un créneau de disponibilité."})]}),e.jsxs("div",{className:"flex items-center justify-center gap-4 px-4",children:["De",e.jsx(N,{className:"w-fit",name:"startTime",type:"time",onChange:p}),"à",e.jsx(N,{className:"w-fit",name:"endTime",type:"time",onChange:p})]}),e.jsxs(I,{className:"pt-2",children:[o&&setTimeout(()=>x(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:o}),e.jsx(V,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{className:"w-full",onClick:g,disabled:r&&!0,children:r?e.jsx(v,{className:"animate-spin"}):"Ajouter"}),e.jsx(n,{className:"w-full",variant:"outline",onClick:()=>i(),children:"Annuler"})]})})]})]})]})},K=({id:m,removeAvailability:h})=>{const[s,u]=d.useState(!1),[t,i]=d.useState(!1),[r,l]=d.useState(),o=A("(min-width: 768px)"),x=async j=>{j.preventDefault(),i(!0);try{await h(m)}catch{l("Une erreur est survenue, veuillez réessayer plus tard.")}i(!1),u(!1)};return o?e.jsxs(S,{open:s,onOpenChange:u,children:[e.jsx(T,{asChild:!0,children:e.jsx(n,{variant:"outline",children:e.jsx(C,{className:"text-destructive"})})}),e.jsxs(b,{className:"sm:max-w-[425px]",children:[e.jsxs(k,{children:[e.jsx(E,{className:"text-destructive",children:"Supprimer un créneau"}),e.jsx(M,{children:"Êtes-vous sûr de vouloir supprimer ce créneau de disponibilité ?"})]}),r&&setTimeout(()=>l(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:r}),e.jsx(O,{className:"sm:justify-start",children:e.jsx(L,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(n,{variant:"outline",children:"Annuler"}),e.jsx(n,{onClick:x,variant:"destructive",disabled:t&&!0,children:t?e.jsx(v,{className:"animate-spin"}):"Supprimer"})]})})})]})]}):e.jsxs(z,{open:s,onOpenChange:u,children:[e.jsx(Y,{asChild:!0,children:e.jsx(n,{variant:"outline",children:e.jsx(C,{className:"text-destructive"})})}),e.jsxs(R,{children:[e.jsxs(U,{className:"text-left",children:[e.jsx(F,{className:"text-destructive",children:"Supprimer un créneau"}),e.jsx(H,{children:"Êtes-vous sûr de vouloir supprimer ce créneau de disponibilité ?"})]}),e.jsxs(I,{className:"pt-2",children:[r&&setTimeout(()=>l(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:r}),e.jsx(V,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{className:"w-full",onClick:x,variant:"destructive",disabled:t&&!0,children:t?e.jsx(v,{className:"animate-spin"}):"Supprimer"}),e.jsx(n,{className:"w-full",variant:"outline",children:"Annuler"})]})})]})]})]})},ee=()=>{const m={Lundi:"MONDAY",Mardi:"TUESDAY",Mercredi:"WEDNESDAY",Jeudi:"THURSDAY",Vendredi:"FRIDAY",Samedi:"SATURDAY",Dimanche:"SUNDAY"},[h,s]=d.useState(),[u,t]=d.useState(),[i,r]=d.useState(!0),l=q(),o=G(),x=J();d.useEffect(()=>{j()},[]);async function j(){var a;try{const c=await l.get("/api/availabilities");s(f(c.data))}catch(c){t(c),((a=c.response)==null?void 0:a.status)===401&&o("/login",{state:{from:x},replace:!0})}r(!1)}async function p(a){await l.post("/api/availabilities",a),j()}async function g(a){await l.delete(`/api/availabilities/${a}`),j()}function f(a){const c={};return a==null||a.forEach(({id:y,dayOfWeek:w,startTime:P,endTime:B})=>{c[w]||(c[w]=[]),c[w].push({id:y,start:P,end:B})}),c}return i?e.jsx(v,{className:"w-8 h-8 animate-spin flex-1"}):u?e.jsx(Q,{}):e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col space-y-4",children:[e.jsx(n,{variant:"link",className:"justify-start h-0 p-0",onClick:()=>o(-1),children:"Retour"}),e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes disponibilités"}),Object.entries(m).map(([a,c],y)=>e.jsxs("div",{children:[e.jsx(X,{dayFR:a,dayEN:c,availabilities:h[c],createAvailability:p,removeAvailability:g}),y!==Object.entries(m).length-1&&e.jsx("div",{className:"divider w-1/2 mx-auto"})]},y))]})},X=({dayFR:m,dayEN:h,availabilities:s,createAvailability:u,removeAvailability:t})=>e.jsxs("section",{className:`flex flex-col sm:flex-row gap-4 ${!(s!=null&&s.length)&&"text-muted sm:items-center"}`,children:[e.jsx("span",{className:"text-xl font-medium sm:flex-1",children:m}),s!=null&&s.length?e.jsx("div",{className:"space-y-2 sm:flex-2",children:s==null?void 0:s.map(({id:i,start:r,end:l},o)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(N,{disabled:!0,type:"time",defaultValue:r,className:"!opacity-100"}),e.jsx("div",{className:"divider divider-horizontal m-0"}),e.jsx(N,{disabled:!0,type:"time",defaultValue:l,className:"!opacity-100"}),e.jsx(K,{id:i,removeAvailability:t})]},i))}):e.jsx("div",{className:"sm:flex-2",children:"Fermé"}),e.jsx("div",{className:"flex sm:flex-1 justify-end",children:e.jsx(W,{dayOfWeek:h,createAvailability:u})})]});export{ee as default};
