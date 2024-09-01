import{c as q,r as d,y as k,j as e,D as S,z as F,B as i,C as z,F as M,G as E,H as O,x as j,I as v,J as T,K as V,v as b,N as R,O as L,Q as P,R as I,S as U,U as $,V as H,W as B,s as J,u as K,b as W,t as X,M as Y,X as Z,Y as _,$ as ee}from"./index-C0y5ghfn.js";import{C as Q}from"./circle-plus-686ATquU.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=q("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=q("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),re=({createCategory:c})=>{const[f,m]=d.useState(!1),[t,a]=d.useState(),[o,n]=d.useState(!1),[h,x]=d.useState(),u=k("(min-width: 768px)"),y=N=>{const{name:C,value:g}=N.target;a({[C]:g})},l=async N=>{if(N.preventDefault(),!(t!=null&&t.name)){x("Veuillez renseigner le nom de la catégorie.");return}n(!0);try{await c(t),m(!1)}catch{x("Une erreur est survenue, veuillez réessayer plus tard.")}n(!1)};return d.useEffect(()=>{f||a()},[f]),u?e.jsxs(S,{open:f,onOpenChange:m,children:[e.jsx(F,{asChild:!0,children:e.jsx(i,{variant:"link",className:"p-0 h-min",children:"Ajouter une catégorie"})}),e.jsxs(z,{className:"sm:max-w-[425px]",children:[e.jsxs(M,{children:[e.jsx(E,{children:"Ajouter une catégorie"}),e.jsx(O,{children:"Définissez un nom pour ajouter une catégorie."})]}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs("div",{children:[e.jsx(j,{htmlFor:"name",children:"Nom"}),e.jsx(v,{id:"name",name:"name",type:"text",onChange:y})]})}),h&&setTimeout(()=>x(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:h}),e.jsx(T,{className:"sm:justify-start",children:e.jsx(V,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(i,{variant:"outline",onClick:()=>a(),children:"Annuler"}),e.jsx(i,{onClick:l,disabled:o&&!0,children:o?e.jsx(b,{className:"animate-spin"}):"Ajouter"})]})})})]})]}):e.jsxs(R,{open:f,onOpenChange:m,children:[e.jsx(L,{asChild:!0,children:e.jsx(i,{variant:"link",className:"p-0 h-min",children:"Ajouter une catégorie"})}),e.jsxs(P,{children:[e.jsxs(I,{children:[e.jsx(U,{children:"Ajouter une categorie"}),e.jsx($,{children:"Définissez un nom pour ajouter une categorie."})]}),e.jsx("div",{className:"flex flex-col px-4 gap-2",children:e.jsxs("div",{children:[e.jsx(j,{htmlFor:"name",children:"Nom"}),e.jsx(v,{id:"name",name:"name",type:"text",onChange:y})]})}),e.jsxs(H,{className:"pt-2",children:[h&&setTimeout(()=>x(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:h}),e.jsx(B,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{className:"w-full",onClick:l,disabled:o&&!0,children:o?e.jsx(b,{className:"animate-spin"}):"Ajouter"}),e.jsx(i,{className:"w-full",variant:"outline",onClick:()=>a(),children:"Annuler"})]})})]})]})]})},D=d.forwardRef(({className:c,...f},m)=>e.jsx("textarea",{className:J("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",c),ref:m,...f}));D.displayName="Textarea";const ae=({providerCategoryId:c,createService:f})=>{const[m,t]=d.useState(!1),[a,o]=d.useState(),[n,h]=d.useState(!1),[x,u]=d.useState(),y=k("(min-width: 768px)"),l=C=>{const{name:g,value:w}=C.target,A=g==="price"||g==="duration"?parseFloat(w):w;o({...a,[g]:A})},N=async C=>{if(C.preventDefault(),!(a!=null&&a.name)||!(a!=null&&a.price)||!(a!=null&&a.duration)){u("Veuillez renseigner tous les champs.");return}h(!0);try{await f({providerCategoryId:c,...a}),t(!1)}catch{u("Une erreur est survenue, veuillez réessayer plus tard.")}h(!1)};return d.useEffect(()=>{m||o()},[m]),y?e.jsxs(S,{open:m,onOpenChange:t,children:[e.jsx(F,{asChild:!0,children:e.jsx(i,{variant:"outline",children:e.jsx(Q,{})})}),e.jsxs(z,{className:"sm:max-w-[425px]",children:[e.jsxs(M,{children:[e.jsx(E,{children:"Ajouter une prestation"}),e.jsx(O,{children:"Définissez un nom, un prix et une durée pour ajouter une prestation."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx(j,{htmlFor:"name",children:"Nom"}),e.jsx(v,{id:"name",name:"name",type:"text",onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"price",children:"Prix (en €)"}),e.jsx(v,{id:"price",name:"price",type:"number",onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"duration",children:"Durée (en minutes)"}),e.jsx(v,{id:"duration",name:"duration",type:"number",onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"description",children:"Description"}),e.jsx(D,{id:"description",name:"description",className:"resize-none",onChange:l})]})]}),x&&setTimeout(()=>u(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:x}),e.jsx(T,{className:"sm:justify-start",children:e.jsx(V,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(i,{variant:"outline",onClick:()=>o(),children:"Annuler"}),e.jsx(i,{onClick:N,disabled:n&&!0,children:n?e.jsx(b,{className:"animate-spin"}):"Ajouter"})]})})})]})]}):e.jsxs(R,{open:m,onOpenChange:t,children:[e.jsx(L,{asChild:!0,children:e.jsx(i,{variant:"outline",children:e.jsx(Q,{})})}),e.jsxs(P,{children:[e.jsxs(I,{children:[e.jsx(U,{children:"Ajouter une prestation"}),e.jsx($,{children:"Définissez un nom, un prix et une durée pour ajouter une prestation."})]}),e.jsxs("div",{className:"flex flex-col px-4 gap-2",children:[e.jsxs("div",{children:[e.jsx(j,{htmlFor:"name",children:"Nom"}),e.jsx(v,{id:"name",name:"name",type:"text",onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"price",children:"Prix (en €)"}),e.jsx(v,{id:"price",name:"price",type:"number",onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"duration",children:"Durée (en minutes)"}),e.jsx(v,{id:"duration",name:"duration",type:"number",onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"description",children:"Description"}),e.jsx(D,{id:"description",name:"description",className:"resize-none",onChange:l})]})]}),e.jsxs(H,{className:"pt-2",children:[x&&setTimeout(()=>u(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:x}),e.jsx(B,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{className:"w-full",onClick:N,disabled:n&&!0,children:n?e.jsx(b,{className:"animate-spin"}):"Ajouter"}),e.jsx(i,{className:"w-full",variant:"outline",onClick:()=>o(),children:"Annuler"})]})})]})]})]})},te=({id:c,providerCategoryId:f,disableService:m})=>{const[t,a]=d.useState(!1),[o,n]=d.useState(!1),[h,x]=d.useState(),u=k("(min-width: 768px)"),y=async l=>{l.preventDefault(),n(!0);try{await m(c,f),a(!1)}catch{x("Une erreur est survenue, veuillez réessayer plus tard.")}n(!1)};return u?e.jsxs(S,{open:t,onOpenChange:a,children:[e.jsx(F,{asChild:!0,children:e.jsx(i,{variant:"destructive",children:"Retirer"})}),e.jsxs(z,{className:"sm:max-w-[425px]",children:[e.jsxs(M,{children:[e.jsx(E,{className:"text-destructive",children:"Retirer la prestation"}),e.jsx(O,{children:"Êtes-vous sûr de vouloir retirer cette prestation ?"})]}),h&&setTimeout(()=>x(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:h}),e.jsx(T,{className:"sm:justify-start",children:e.jsx(V,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(i,{variant:"outline",children:"Annuler"}),e.jsx(i,{onClick:y,variant:"destructive",disabled:o&&!0,children:o?e.jsx(b,{className:"animate-spin"}):"Retirer"})]})})})]})]}):e.jsxs(R,{open:t,onOpenChange:a,children:[e.jsx(L,{asChild:!0,children:e.jsx(i,{variant:"destructive",children:"Retirer"})}),e.jsxs(P,{children:[e.jsxs(I,{children:[e.jsx(U,{className:"text-destructive",children:"Retirer la prestation"}),e.jsx($,{children:"Êtes-vous sûr de vouloir retirer cette prestation ?"})]}),e.jsxs(H,{className:"pt-2",children:[h&&setTimeout(()=>x(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:h}),e.jsx(B,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{className:"w-full",onClick:y,variant:"destructive",disabled:o&&!0,children:o?e.jsx(b,{className:"animate-spin"}):"Retirer"}),e.jsx(i,{className:"w-full",variant:"outline",children:"Annuler"})]})})]})]})]})},ne=({prevService:c,updateService:f})=>{const[m,t]=d.useState(!1),[a,o]=d.useState(),[n,h]=d.useState(!1),[x,u]=d.useState(),y=k("(min-width: 768px)"),l=C=>{const{name:g,value:w}=C.target,A=g==="price"||g==="duration"?parseFloat(w):w;o({...a,[g]:A})},N=async C=>{if(C.preventDefault(),h(!0),!Object.keys(a).some(w=>a[w]!==c[w])){h(!1),t(!1);return}try{await f(c.id,a),t(!1)}catch{u("Une erreur est survenue, veuillez réessayer plus tard.")}h(!1)};return d.useEffect(()=>{m||o()},[m]),y?e.jsxs(S,{open:m,onOpenChange:t,children:[e.jsx(F,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Modifier"})}),e.jsxs(z,{className:"sm:max-w-[425px]",children:[e.jsxs(M,{children:[e.jsx(E,{children:"Modifier la prestation"}),e.jsx(O,{children:"Modifiez les détails de la prestation."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx(j,{htmlFor:"name",children:"Nom"}),e.jsx(v,{id:"name",name:"name",type:"text",defaultValue:c.name,onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"price",children:"Prix (en €)"}),e.jsx(v,{id:"price",name:"price",type:"number",defaultValue:c.price,onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"duration",children:"Durée (en minutes)"}),e.jsx(v,{id:"duration",name:"duration",type:"number",defaultValue:c.duration,onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"description",children:"Description"}),e.jsx(D,{id:"description",name:"description",className:"resize-none",defaultValue:c.description,onChange:l})]})]}),x&&setTimeout(()=>u(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:x}),e.jsx(T,{className:"sm:justify-start",children:e.jsx(V,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(i,{variant:"outline",onClick:()=>o(),children:"Annuler"}),e.jsx(i,{onClick:N,disabled:n&&!0,children:n?e.jsx(b,{className:"animate-spin"}):"Modifier"})]})})})]})]}):e.jsxs(R,{open:m,onOpenChange:t,children:[e.jsx(L,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Modifier"})}),e.jsxs(P,{children:[e.jsxs(I,{children:[e.jsx(U,{children:" Modifier la prestation"}),e.jsx($,{children:"Modifiez les détails de la prestation."})]}),e.jsxs("div",{className:"flex flex-col px-4 gap-2",children:[e.jsxs("div",{children:[e.jsx(j,{htmlFor:"name",children:"Nom"}),e.jsx(v,{id:"name",name:"name",type:"text",defaultValue:c.name,onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"price",children:"Prix (en €)"}),e.jsx(v,{id:"price",name:"price",type:"number",defaultValue:c.price,onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"duration",children:"Durée (en minutes)"}),e.jsx(v,{id:"duration",name:"duration",type:"number",defaultValue:c.duration,onChange:l})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"description",children:"Description"}),e.jsx(D,{id:"description",name:"description",className:"resize-none",defaultValue:c.description,onChange:l})]})]}),e.jsxs(H,{className:"pt-2",children:[x&&setTimeout(()=>u(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:x}),e.jsx(B,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{className:"w-full",onClick:N,disabled:n&&!0,children:n?e.jsx(b,{className:"animate-spin"}):"Modifier"}),e.jsx(i,{className:"w-full",variant:"outline",onClick:()=>o(),children:"Annuler"})]})})]})]})]})},de=()=>{const[c,f]=d.useState(),[m,t]=d.useState(),[a,o]=d.useState(!0),n=K(),h=W(),x=X();d.useEffect(()=>{u()},[]);async function u(){var s;try{const r=await n.get("/api/providerCategory/me");f(r.data.sort((p,G)=>p.name.localeCompare(G.name)))}catch(r){((s=r.response)==null?void 0:s.status)===401?h("/login",{state:{from:x},replace:!0}):setError(r)}o(!1)}async function y(s){try{await n.post("/api/providerService",s),u()}catch(r){t(r)}}async function l(s){try{await n.post("/api/providerCategory",s),u()}catch(r){t(r)}}async function N(s){try{await n.put(`/api/providerService/${s}`,{isActive:!0}),u()}catch(r){t(r)}}async function C(s){try{await n.put(`/api/providerCategory/${s}`,{isActive:!0}),u()}catch(r){t(r)}}async function g(s,r){try{await n.put(`/api/providerService/${s}`,r),u()}catch(p){t(p)}}async function w(s,r){try{await n.put(`/api/providerService/${s}`,{isActive:!1,providerCategoryId:r}),u()}catch(p){t(p)}}async function A(s){try{await n.put(`/api/providerCategory/${s}`,{isActive:!1}),u()}catch(r){t(r)}}return a?e.jsx(b,{className:"w-8 h-8 animate-spin flex-1"}):e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col space-y-4",children:[e.jsx(i,{variant:"link",className:"justify-start h-0 p-0",onClick:()=>h(-1),children:"Retour"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes prestations"}),e.jsx(re,{createCategory:l})]}),c==null?void 0:c.map(s=>s.isActive&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-2xl font-medium",children:s.name}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(ae,{providerCategoryId:s.id,createService:y}),e.jsx(Y,{id:s.id,action:A,actionLabel:"Retirer",variant:"destructive",title:"Retirer la catégorie",description:"Toutes les prestations associées seront retirées.",trigger:e.jsx(ie,{className:"text-destructive"}),triggerVariant:"ghost"})]})]}),e.jsx("ul",{className:"space-y-2",children:s.services.map(r=>r.isActive&&e.jsxs("li",{className:"flex items-start justify-between gap-10 w-full rounded-md p-4 pr-0 bg-gray-100",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl",children:r.name}),e.jsx("p",{children:r.description})]}),e.jsxs("div",{className:"flex flex-col-reverse gap-2 items-center md:flex-row md:gap-0",children:[e.jsxs("p",{children:[r.duration,"mn"]}),e.jsx("div",{className:"divider divider-horizontal"}),e.jsxs("p",{children:[r.price,"€"]}),e.jsxs(Z,{children:[e.jsx(_,{children:e.jsx(i,{variant:"ghost",className:"ml-4",children:e.jsx(se,{})})}),e.jsxs(ee,{className:"w-fit flex flex-col gap-2",children:[e.jsx(ne,{prevService:r,updateService:g}),e.jsx(te,{id:r.id,providerCategoryId:s.id,disableService:w})]})]})]})]},r.id))})]},s.id)),e.jsx("div",{className:"divider divider-start text-muted",children:"Inactives"}),c.map(s=>(s.services.some(p=>!p.isActive)||!s.isActive)&&e.jsxs("div",{className:"space-y-2 text-muted",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-2xl font-medium",children:s.name}),!s.isActive&&e.jsx(i,{variant:"link",onClick:()=>C(s.id),children:"Activer la catégorie"})]}),e.jsx("ul",{className:"space-y-2",children:s.services.map(p=>(!p.isActive||!s.isActive)&&e.jsx("li",{className:"flex items-center justify-between gap-4",children:e.jsxs("div",{className:"w-full rounded-md p-4 bg-gray-100",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{children:p.name}),s.isActive&&!p.isActive&&e.jsx(i,{variant:"link",onClick:()=>N(p.id),children:"Activer le service"}),!s.isActive&&e.jsxs("div",{className:"flex items-center",children:[e.jsxs("p",{children:[p.duration,"mn"]}),e.jsx("div",{className:"divider divider-horizontal"}),e.jsxs("p",{children:[p.price,"€"]})]})]}),e.jsx("p",{children:p.description})]})},p.id))})]},s.id)),e.jsxs("p",{className:"text-sm text-muted",children:["La suppression des catégories et services est restreinte afin d'améliorer l'analyse de l'activité. ",e.jsx("br",{})," Pour supprimer définitivement une catégorie ou un service, veuillez"," ",e.jsxs(i,{variant:"link",className:"pl-0",children:[e.jsx("a",{href:"mailto:mlamins.ngom@gmail.com",children:"contacter le support"}),"."]})]})]})};export{de as default};