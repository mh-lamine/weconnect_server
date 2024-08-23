import{H as J,r as c,m as A,j as e,D as S,n as D,B as t,o as k,p as T,q as z,s as E,I as w,t as O,v as F,L as g,w as L,x as M,y as I,z as U,A as P,C as R,F as $,G as H,l as K,u as W,a as X,b as Y}from"./index-DB1PN_Fa.js";import{L as N}from"./label-ZiDOauRb.js";import{C as V,a as q}from"./circle-plus-DK9h3n7g.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Z=({createCategory:j})=>{const[m,h]=c.useState(!1),[r,i]=c.useState(),[n,l]=c.useState(!1),[d,o]=c.useState(),u=A("(min-width: 768px)"),v=f=>{const{name:C,value:y}=f.target;i({[C]:y})},x=async f=>{if(f.preventDefault(),!(r!=null&&r.name)){o("Veuillez renseigner le nom de la catégorie.");return}l(!0);try{await j(r)}catch{o("Une erreur est survenue, veuillez réessayer plus tard.")}l(!1),h(!1)};return c.useEffect(()=>{m||i()},[m]),u?e.jsxs(S,{open:m,onOpenChange:h,children:[e.jsx(D,{asChild:!0,children:e.jsx(t,{variant:"link",className:"p-0 h-min",children:"Ajouter une catégorie"})}),e.jsxs(k,{className:"sm:max-w-[425px]",children:[e.jsxs(T,{children:[e.jsx(z,{children:"Ajouter une catégorie"}),e.jsx(E,{children:"Définissez un nom pour ajouter une catégorie."})]}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs("div",{children:[e.jsx(N,{htmlFor:"name",children:"Nom"}),e.jsx(w,{id:"name",name:"name",type:"text",onChange:v})]})}),d&&setTimeout(()=>o(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:d}),e.jsx(O,{className:"sm:justify-start",children:e.jsx(F,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(t,{variant:"outline",onClick:()=>i(),children:"Annuler"}),e.jsx(t,{onClick:x,disabled:n&&!0,children:n?e.jsx(g,{className:"animate-spin"}):"Ajouter"})]})})})]})]}):e.jsxs(L,{open:m,onOpenChange:h,children:[e.jsx(M,{asChild:!0,children:e.jsx(t,{variant:"link",className:"p-0 h-min",children:"Ajouter une catégorie"})}),e.jsxs(I,{children:[e.jsxs(U,{className:"text-left",children:[e.jsx(P,{children:"Ajouter une categorie"}),e.jsx(R,{children:"Définissez un nom pour ajouter une categorie."})]}),e.jsx("div",{className:"flex flex-col px-4 gap-2",children:e.jsxs("div",{children:[e.jsx(N,{htmlFor:"name",children:"Nom"}),e.jsx(w,{id:"name",name:"name",type:"text",onChange:v})]})}),e.jsxs($,{className:"pt-2",children:[d&&setTimeout(()=>o(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:d}),e.jsx(H,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"w-full",onClick:x,disabled:n&&!0,children:n?e.jsx(g,{className:"animate-spin"}):"Ajouter"}),e.jsx(t,{className:"w-full",variant:"outline",onClick:()=>i(),children:"Annuler"})]})})]})]})]})},G=c.forwardRef(({className:j,...m},h)=>e.jsx("textarea",{className:K("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",j),ref:h,...m}));G.displayName="Textarea";const _=({providerCategoryId:j,createService:m})=>{const[h,r]=c.useState(!1),[i,n]=c.useState(),[l,d]=c.useState(!1),[o,u]=c.useState(),v=A("(min-width: 768px)"),x=C=>{const{name:y,value:b}=C.target,s=y==="price"||y==="duration"?parseFloat(b):b;n({...i,[y]:s})},f=async C=>{if(C.preventDefault(),!(i!=null&&i.name)||!(i!=null&&i.price)||!(i!=null&&i.duration)){u("Veuillez renseigner tous les champs.");return}d(!0);try{await m({providerCategoryId:j,...i})}catch{u("Une erreur est survenue, veuillez réessayer plus tard.")}d(!1),r(!1)};return c.useEffect(()=>{h||n()},[h]),v?e.jsxs(S,{open:h,onOpenChange:r,children:[e.jsx(D,{asChild:!0,children:e.jsx(t,{variant:"outline",children:e.jsx(V,{})})}),e.jsxs(k,{className:"sm:max-w-[425px]",children:[e.jsxs(T,{children:[e.jsx(z,{children:"Ajouter une prestation"}),e.jsx(E,{children:"Définissez un nom, un prix et une durée pour ajouter une prestation."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx(N,{htmlFor:"name",children:"Nom"}),e.jsx(w,{id:"name",name:"name",type:"text",onChange:x})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:"price",children:"Prix (en €)"}),e.jsx(w,{id:"price",name:"price",type:"number",onChange:x})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:"duration",children:"Durée (en minutes)"}),e.jsx(w,{id:"duration",name:"duration",type:"number",onChange:x})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:"description",children:"Description"}),e.jsx(G,{id:"description",name:"description",className:"resize-none",onChange:x})]})]}),o&&setTimeout(()=>u(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:o}),e.jsx(O,{className:"sm:justify-start",children:e.jsx(F,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(t,{variant:"outline",onClick:()=>n(),children:"Annuler"}),e.jsx(t,{onClick:f,disabled:l&&!0,children:l?e.jsx(g,{className:"animate-spin"}):"Ajouter"})]})})})]})]}):e.jsxs(L,{open:h,onOpenChange:r,children:[e.jsx(M,{asChild:!0,children:e.jsx(t,{variant:"outline",children:e.jsx(V,{})})}),e.jsxs(I,{children:[e.jsxs(U,{className:"text-left",children:[e.jsx(P,{children:"Ajouter une prestation"}),e.jsx(R,{children:"Définissez un nom, un prix et une durée pour ajouter une prestation."})]}),e.jsxs("div",{className:"flex flex-col px-4 gap-2",children:[e.jsxs("div",{children:[e.jsx(N,{htmlFor:"name",children:"Nom"}),e.jsx(w,{id:"name",name:"name",type:"text",onChange:x})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:"price",children:"Prix"}),e.jsx(w,{id:"price",name:"price",type:"number",onChange:x})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:"duration",children:"Durée"}),e.jsx(w,{id:"duration",name:"duration",type:"number",onChange:x})]})]}),e.jsxs($,{className:"pt-2",children:[o&&setTimeout(()=>u(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:o}),e.jsx(H,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"w-full",onClick:f,disabled:l&&!0,children:l?e.jsx(g,{className:"animate-spin"}):"Ajouter"}),e.jsx(t,{className:"w-full",variant:"outline",onClick:()=>n(),children:"Annuler"})]})})]})]})]})},ee=({id:j,name:m,disableCategory:h})=>{const[r,i]=c.useState(!1),[n,l]=c.useState(!1),[d,o]=c.useState(),u=A("(min-width: 768px)"),v=async x=>{x.preventDefault(),l(!0);try{await h(j)}catch{o("Une erreur est survenue, veuillez réessayer plus tard.")}l(!1),i(!1)};return u?e.jsxs(S,{open:r,onOpenChange:i,children:[e.jsx(D,{asChild:!0,children:e.jsx(t,{variant:"ghost",className:"ml-2",children:e.jsx(B,{className:"text-destructive"})})}),e.jsxs(k,{className:"sm:max-w-[425px]",children:[e.jsxs(T,{children:[e.jsxs(z,{className:"text-destructive",children:["Retirer la catégorie ",m.toUpperCase()]}),e.jsx(E,{children:"Toutes les prestations associées seront retirées."})]}),d&&setTimeout(()=>o(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:d}),e.jsx(O,{className:"sm:justify-start",children:e.jsx(F,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(t,{variant:"outline",children:"Annuler"}),e.jsx(t,{onClick:v,variant:"destructive",disabled:n&&!0,children:n?e.jsx(g,{className:"animate-spin"}):"Supprimer"})]})})})]})]}):e.jsxs(L,{open:r,onOpenChange:i,children:[e.jsx(M,{asChild:!0,children:e.jsx(t,{variant:"ghost",className:"ml-2",children:e.jsx(B,{className:"text-destructive"})})}),e.jsxs(I,{children:[e.jsxs(U,{className:"text-left",children:[e.jsxs(P,{className:"text-destructive",children:["Retirer la catégorie ",m.toUpperCase()]}),e.jsx(R,{children:"Toutes les prestations associées seront retirées."})]}),e.jsxs($,{className:"pt-2",children:[d&&setTimeout(()=>o(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:d}),e.jsx(H,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"w-full",onClick:v,variant:"destructive",disabled:n&&!0,children:n?e.jsx(g,{className:"animate-spin"}):"Supprimer"}),e.jsx(t,{className:"w-full",variant:"outline",children:"Annuler"})]})})]})]})]})},se=({id:j,providerCategoryId:m,disableService:h})=>{const[r,i]=c.useState(!1),[n,l]=c.useState(!1),[d,o]=c.useState(),u=A("(min-width: 768px)"),v=async x=>{x.preventDefault(),l(!0);try{await h(j,m)}catch{o("Une erreur est survenue, veuillez réessayer plus tard.")}l(!1),i(!1)};return u?e.jsxs(S,{open:r,onOpenChange:i,children:[e.jsx(D,{asChild:!0,children:e.jsx(t,{variant:"ghost",className:"ml-4",children:e.jsx(q,{className:"text-destructive"})})}),e.jsxs(k,{className:"sm:max-w-[425px]",children:[e.jsxs(T,{children:[e.jsx(z,{className:"text-destructive",children:"Supprimer une prestation"}),e.jsx(E,{children:"Êtes-vous sûr de vouloir supprimer cette prestation ?"})]}),d&&setTimeout(()=>o(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:d}),e.jsx(O,{className:"sm:justify-start",children:e.jsx(F,{asChild:!0,children:e.jsxs("div",{className:"w-full flex items-center justify-between",children:[e.jsx(t,{variant:"outline",children:"Annuler"}),e.jsx(t,{onClick:v,variant:"destructive",disabled:n&&!0,children:n?e.jsx(g,{className:"animate-spin"}):"Supprimer"})]})})})]})]}):e.jsxs(L,{open:r,onOpenChange:i,children:[e.jsx(M,{asChild:!0,children:e.jsx(t,{variant:"ghost",className:"ml-4",children:e.jsx(q,{className:"text-destructive"})})}),e.jsxs(I,{children:[e.jsxs(U,{className:"text-left",children:[e.jsx(P,{className:"text-destructive",children:"Supprimer une prestation"}),e.jsx(R,{children:"Êtes-vous sûr de vouloir supprimer cette prestation ?"})]}),e.jsxs($,{className:"pt-2",children:[d&&setTimeout(()=>o(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:d}),e.jsx(H,{asChild:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{className:"w-full",onClick:v,variant:"destructive",disabled:n&&!0,children:n?e.jsx(g,{className:"animate-spin"}):"Supprimer"}),e.jsx(t,{className:"w-full",variant:"outline",children:"Annuler"})]})})]})]})]})},re=()=>{const[j,m]=c.useState(),[h,r]=c.useState(),[i,n]=c.useState(!0),l=W(),d=X(),o=Y();c.useEffect(()=>{u()},[]);async function u(){var s;try{const a=await l.get("/api/providerCategory/me");m(a.data.sort((p,Q)=>p.name.localeCompare(Q.name)))}catch(a){((s=a.response)==null?void 0:s.status)===401?d("/login",{state:{from:o},replace:!0}):setError(a)}n(!1)}async function v(s){try{await l.post("/api/providerService",s),u()}catch(a){r(a)}}async function x(s){try{await l.post("/api/providerCategory",s),u()}catch(a){r(a)}}async function f(s){try{await l.put(`/api/providerCategory/${s}`,{isActive:!0}),u()}catch(a){r(a)}}async function C(s){try{await l.put(`/api/providerService/${s}`,{isActive:!0}),u()}catch(a){r(a)}}async function y(s){try{await l.put(`/api/providerCategory/${s}`,{isActive:!1}),u()}catch(a){r(a)}}async function b(s,a){try{await l.put(`/api/providerService/${s}`,{isActive:!1,providerCategoryId:a}),u()}catch(p){r(p)}}return i?e.jsx(g,{className:"w-8 h-8 animate-spin flex-1"}):e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col space-y-4",children:[e.jsx(t,{variant:"link",className:"justify-start h-0 p-0",onClick:()=>d(-1),children:"Retour"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes prestations"}),e.jsx(Z,{createCategory:x})]}),j==null?void 0:j.map(s=>s.isActive&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-2xl font-medium",children:s.name}),e.jsxs("div",{children:[e.jsx(_,{providerCategoryId:s.id,createService:v}),e.jsx(ee,{id:s.id,name:s.name,disableCategory:y})]})]}),e.jsx("ul",{className:"space-y-2",children:s.services.map(a=>a.isActive&&e.jsx("li",{className:"flex items-center justify-between gap-4",children:e.jsxs("div",{className:"w-full rounded-md p-4 pr-0 bg-gray-100",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{children:a.name}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("p",{children:[a.duration,"mn"]}),e.jsx("div",{className:"divider divider-horizontal"}),e.jsxs("p",{children:[a.price,"€"]}),e.jsx(se,{id:a.id,providerCategoryId:s.id,disableService:b})]})]}),e.jsx("p",{children:a.description})]})},a.id))})]},s.id)),e.jsx("div",{className:"divider divider-start text-muted",children:"Inactives"}),j.map(s=>(s.services.some(p=>!p.isActive)||!s.isActive)&&e.jsxs("div",{className:"space-y-2 text-muted",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-2xl font-medium",children:s.name}),!s.isActive&&e.jsx(t,{variant:"link",onClick:()=>f(s.id),children:"Activer la catégorie"})]}),e.jsx("ul",{className:"space-y-2",children:s.services.map(p=>(!p.isActive||!s.isActive)&&e.jsx("li",{className:"flex items-center justify-between gap-4",children:e.jsxs("div",{className:"w-full rounded-md p-4 bg-gray-100",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{children:p.name}),s.isActive&&!p.isActive&&e.jsx(t,{variant:"link",onClick:()=>C(p.id),children:"Activer le service"}),!s.isActive&&e.jsxs("div",{className:"flex items-center",children:[e.jsxs("p",{children:[p.duration,"mn"]}),e.jsx("div",{className:"divider divider-horizontal"}),e.jsxs("p",{children:[p.price,"€"]})]})]}),e.jsx("p",{children:p.description})]})},p.id))})]},s.id))]})};export{re as default};
