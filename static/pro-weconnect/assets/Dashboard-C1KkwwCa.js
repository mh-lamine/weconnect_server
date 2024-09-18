import{c as Z,j as e,a as R,b as ye,B as ee,d as te,r as u,u as $,P as y,e as oe,f as we,g as se,h as Pe,R as h,i as Ee,k as Ie,l as Re,m as De,L as Q}from"./index-t8RmQASG.js";import{M as W}from"./ModalAction-cdnmXePr.js";import{c as _e,u as Te,T as Le,a as w,b as Se,d as X}from"./tabs-BF4jM54h.js";import{u as ae}from"./index-BzTY0Uhy.js";import{B as ke,a as ze,b as Me,c as Oe}from"./breadcrumb-DRsLRhfI.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=Z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Be=ye("inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm w-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-light",outline:"border-transparent bg-dark/10",success:"border-transparent bg-success text-light"}},defaultVariants:{variant:"default"}});function P({className:t,variant:r,...o}){return e.jsx("div",{className:R(Be({variant:r}),t),...o})}const Ge=({appointment:t,acceptAppointment:r,cancelAppointment:o,today:s=!1,past:a=!1})=>e.jsxs("div",{className:`flex flex-col gap-2 py-2 ${a&&"text-muted"}`,children:[e.jsx("div",{className:"divider divider-start my-0",children:e.jsxs("h2",{className:"text-xl font-semibold",children:[t.client.firstName," ",t.client.lastName]})}),e.jsx("div",{className:"flex flex-col md:flex-row md:gap-4",children:e.jsx(ee,{variant:"link",className:`w-fit py-0 ${a&&"text-muted"}`,children:e.jsx("a",{href:`tel:${t.client.phoneNumber}`,children:t.client.phoneNumber.replace(/(\d{2})(?=\d)/g,"$1 ")})})}),e.jsxs("h3",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:t.service.name})," ",e.jsx("br",{}),!s&&e.jsxs(e.Fragment,{children:["le"," ",e.jsxs("span",{className:"font-medium",children:[new Date(t.date).toLocaleDateString("fr-FR",{weekday:"long",month:"long",day:"numeric"}).toUpperCase()," "]})]}),"à"," ",e.jsx("span",{className:"font-medium",children:new Date(t.date).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]}),t.status==="PENDING"&&e.jsx(P,{variant:"outline",className:a&&"bg-muted",children:"En attente de confirmation"}),t.status==="ACCEPTED"&&e.jsx(P,{variant:"success",className:a&&"bg-muted",children:"Confirmé"}),t.status==="COMPLETED"&&e.jsx(P,{variant:"success",className:a&&"bg-muted",children:"Passé"}),t.status==="CANCELLED"&&e.jsx(P,{variant:"destructive",className:a&&"bg-muted",children:"Annulé"}),e.jsxs("div",{className:"flex justify-between",children:[t.status==="PENDING"&&e.jsx(W,{id:t.id,action:r,actionLabel:"Accepter",title:"Accepter le rendez-vous",description:"Êtes-vous sûr de vouloir accepter ce rendez-vous ?",trigger:"Accepter",variant:"success"}),(t.status==="PENDING"||t.status==="ACCEPTED")&&e.jsx(W,{id:t.id,action:o,actionLabel:"Refuser",title:"Refuser le rendez-vous",description:"Êtes-vous sûr de vouloir refuser ce rendez-vous ?",trigger:"Refuser",variant:"destructive"})]})]}),E=Ge;var B="Collapsible",[Fe,re]=te(B),[He,G]=Fe(B),ne=u.forwardRef((t,r)=>{const{__scopeCollapsible:o,open:s,defaultOpen:a,disabled:n,onOpenChange:c,...l}=t,[p=!1,m]=$({prop:s,defaultProp:a,onChange:c});return e.jsx(He,{scope:o,disabled:n,contentId:ae(),open:p,onOpenToggle:u.useCallback(()=>m(f=>!f),[m]),children:e.jsx(y.div,{"data-state":H(p),"data-disabled":n?"":void 0,...l,ref:r})})});ne.displayName=B;var ie="CollapsibleTrigger",ce=u.forwardRef((t,r)=>{const{__scopeCollapsible:o,...s}=t,a=G(ie,o);return e.jsx(y.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":H(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...s,ref:r,onClick:oe(t.onClick,a.onOpenToggle)})});ce.displayName=ie;var F="CollapsibleContent",le=u.forwardRef((t,r)=>{const{forceMount:o,...s}=t,a=G(F,t.__scopeCollapsible);return e.jsx(we,{present:o||a.open,children:({present:n})=>e.jsx(Ke,{...s,ref:r,present:n})})});le.displayName=F;var Ke=u.forwardRef((t,r)=>{const{__scopeCollapsible:o,present:s,children:a,...n}=t,c=G(F,o),[l,p]=u.useState(s),m=u.useRef(null),f=se(r,m),x=u.useRef(0),g=x.current,b=u.useRef(0),i=b.current,v=c.open||l,C=u.useRef(v),j=u.useRef();return u.useEffect(()=>{const d=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(d)},[]),Pe(()=>{const d=m.current;if(d){j.current=j.current||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const N=d.getBoundingClientRect();x.current=N.height,b.current=N.width,C.current||(d.style.transitionDuration=j.current.transitionDuration,d.style.animationName=j.current.animationName),p(s)}},[c.open,s]),e.jsx(y.div,{"data-state":H(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!v,...n,ref:f,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":i?`${i}px`:void 0,...t.style},children:v&&a})});function H(t){return t?"open":"closed"}var qe=ne,Ue=ce,Ye=le,A="Accordion",Je=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[K,Qe,We]=_e(A),[D,xt]=te(A,[We,re]),q=re(),de=h.forwardRef((t,r)=>{const{type:o,...s}=t,a=s,n=s;return e.jsx(K.Provider,{scope:t.__scopeAccordion,children:o==="multiple"?e.jsx(tt,{...n,ref:r}):e.jsx(et,{...a,ref:r})})});de.displayName=A;var[ue,Xe]=D(A),[pe,Ze]=D(A,{collapsible:!1}),et=h.forwardRef((t,r)=>{const{value:o,defaultValue:s,onValueChange:a=()=>{},collapsible:n=!1,...c}=t,[l,p]=$({prop:o,defaultProp:s,onChange:a});return e.jsx(ue,{scope:t.__scopeAccordion,value:l?[l]:[],onItemOpen:p,onItemClose:h.useCallback(()=>n&&p(""),[n,p]),children:e.jsx(pe,{scope:t.__scopeAccordion,collapsible:n,children:e.jsx(me,{...c,ref:r})})})}),tt=h.forwardRef((t,r)=>{const{value:o,defaultValue:s,onValueChange:a=()=>{},...n}=t,[c=[],l]=$({prop:o,defaultProp:s,onChange:a}),p=h.useCallback(f=>l((x=[])=>[...x,f]),[l]),m=h.useCallback(f=>l((x=[])=>x.filter(g=>g!==f)),[l]);return e.jsx(ue,{scope:t.__scopeAccordion,value:c,onItemOpen:p,onItemClose:m,children:e.jsx(pe,{scope:t.__scopeAccordion,collapsible:!0,children:e.jsx(me,{...n,ref:r})})})}),[ot,_]=D(A),me=h.forwardRef((t,r)=>{const{__scopeAccordion:o,disabled:s,dir:a,orientation:n="vertical",...c}=t,l=h.useRef(null),p=se(l,r),m=Qe(o),x=Te(a)==="ltr",g=oe(t.onKeyDown,b=>{var Y;if(!Je.includes(b.key))return;const i=b.target,v=m().filter(k=>{var J;return!((J=k.ref.current)!=null&&J.disabled)}),C=v.findIndex(k=>k.ref.current===i),j=v.length;if(C===-1)return;b.preventDefault();let d=C;const N=0,T=j-1,L=()=>{d=C+1,d>T&&(d=N)},S=()=>{d=C-1,d<N&&(d=T)};switch(b.key){case"Home":d=N;break;case"End":d=T;break;case"ArrowRight":n==="horizontal"&&(x?L():S());break;case"ArrowDown":n==="vertical"&&L();break;case"ArrowLeft":n==="horizontal"&&(x?S():L());break;case"ArrowUp":n==="vertical"&&S();break}const Ne=d%j;(Y=v[Ne].ref.current)==null||Y.focus()});return e.jsx(ot,{scope:o,disabled:s,direction:a,orientation:n,children:e.jsx(K.Slot,{scope:o,children:e.jsx(y.div,{...c,"data-orientation":n,ref:p,onKeyDown:s?void 0:g})})})}),I="AccordionItem",[st,U]=D(I),fe=h.forwardRef((t,r)=>{const{__scopeAccordion:o,value:s,...a}=t,n=_(I,o),c=Xe(I,o),l=q(o),p=ae(),m=s&&c.value.includes(s)||!1,f=n.disabled||t.disabled;return e.jsx(st,{scope:o,open:m,disabled:f,triggerId:p,children:e.jsx(qe,{"data-orientation":n.orientation,"data-state":Ce(m),...l,...a,ref:r,disabled:f,open:m,onOpenChange:x=>{x?c.onItemOpen(s):c.onItemClose(s)}})})});fe.displayName=I;var xe="AccordionHeader",ve=h.forwardRef((t,r)=>{const{__scopeAccordion:o,...s}=t,a=_(A,o),n=U(xe,o);return e.jsx(y.h3,{"data-orientation":a.orientation,"data-state":Ce(n.open),"data-disabled":n.disabled?"":void 0,...s,ref:r})});ve.displayName=xe;var z="AccordionTrigger",he=h.forwardRef((t,r)=>{const{__scopeAccordion:o,...s}=t,a=_(A,o),n=U(z,o),c=Ze(z,o),l=q(o);return e.jsx(K.ItemSlot,{scope:o,children:e.jsx(Ue,{"aria-disabled":n.open&&!c.collapsible||void 0,"data-orientation":a.orientation,id:n.triggerId,...l,...s,ref:r})})});he.displayName=z;var ge="AccordionContent",be=h.forwardRef((t,r)=>{const{__scopeAccordion:o,...s}=t,a=_(A,o),n=U(ge,o),c=q(o);return e.jsx(Ye,{role:"region","aria-labelledby":n.triggerId,"data-orientation":a.orientation,...c,...s,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});be.displayName=ge;function Ce(t){return t?"open":"closed"}var at=de,rt=fe,nt=ve,je=he,Ae=be;const it=at,M=u.forwardRef(({className:t,...r},o)=>e.jsx(rt,{ref:o,className:R("border-b",t),...r}));M.displayName="AccordionItem";const O=u.forwardRef(({className:t,children:r,...o},s)=>e.jsx(nt,{className:"flex",children:e.jsxs(je,{ref:s,className:R("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...o,children:[r,e.jsx(Ve,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));O.displayName=je.displayName;const V=u.forwardRef(({className:t,children:r,...o},s)=>e.jsx(Ae,{ref:s,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:e.jsx("div",{className:R("pb-4 pt-0",t),children:r})}));V.displayName=Ae.displayName;const ct=()=>{const{setAuth:t}=Ee();return async()=>{t(null);try{await Ie.get("/api/auth/logout",{withCredentials:!0})}catch(o){console.error(o)}}},lt=ct;function vt(){const[t,r]=u.useState(),[o,s]=u.useState(!0),a=lt(),n=Re(),c=De();async function l(){try{const i=await n.get("/api/appointments/provider");r(i.data)}catch(i){console.error(i)}finally{s(!1)}}async function p(i){try{await n.patch(`/api/appointments/${i}`,{status:"ACCEPTED"}),l()}catch(v){console.error(v)}}async function m(i){try{await n.patch(`/api/appointments/${i}`,{status:"CANCELLED"}),l()}catch(v){console.error(v)}}const f=(i,v)=>i.filter(C=>C.status===v).sort((C,j)=>new Date(C.date)-new Date(j.date)),x=async()=>{await a(),c("/login")};u.useEffect(()=>{l()},[]);const g=(t==null?void 0:t.todaysAppointments)||[],b=(t==null?void 0:t.futureAppointments)||[];return e.jsxs("main",{className:"w-full h-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4",children:[e.jsx(ke,{className:"h-0 p-0",children:e.jsx(ze,{children:e.jsx(Me,{children:e.jsx(Oe,{asChild:!0,children:e.jsx(Q,{to:"/",children:"Tableau de bord"})})})})}),e.jsxs(Le,{defaultValue:"today",className:"space-y-4",children:[e.jsx(w,{value:"today",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes rendez-vous de la journée"})}),e.jsx(w,{value:"incoming",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes rendez-vous à venir"})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(Se,{children:[e.jsx(X,{value:"today",children:"Aujourd'hui"}),e.jsx(X,{value:"incoming",children:"À venir"})]}),e.jsx(Q,{to:"/salon",children:e.jsx($e,{size:24,className:"text-primary"})})]}),e.jsx(w,{value:"today",className:"space-y-4",children:g.length?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-muted",children:["Vous avez ",g.length," rendez-vous aujourd'hui."]}),f(g,"ACCEPTED").map(i=>e.jsx(E,{appointment:i,cancelAppointment:m,today:!0},i.id)),e.jsx("div",{className:"divider divider-start text-muted",children:"Mes rendez-vous passés"}),f(g,"COMPLETED").map(i=>e.jsx(E,{appointment:i,past:!0,today:!0},i.id))]}):e.jsxs("p",{className:"text-muted",children:[" ","Vous n'avez aucun rendez-vous aujourd'hui."]})}),e.jsx(w,{value:"incoming",children:b.length?e.jsxs(it,{type:"single",collapsible:!0,defaultValue:"item-0",className:"w-full",children:[e.jsxs(M,{value:"item-0",children:[e.jsx(O,{children:e.jsxs("p",{className:"text-muted",children:["Vous avez"," ",t.futureAppointments.filter(i=>i.status==="PENDING").length," ","demande(s) en attente."]})}),e.jsx(V,{children:f(b,"PENDING").map(i=>e.jsx(E,{appointment:i,acceptAppointment:p,cancelAppointment:m},i.id))})]}),e.jsxs(M,{value:"item-1",children:[e.jsx(O,{children:e.jsxs("p",{className:"text-muted",children:["Vous avez"," ",t.futureAppointments.filter(i=>i.status==="ACCEPTED").length," ","rendez-vous à venir."]})}),e.jsx(V,{children:f(b,"ACCEPTED").map(i=>e.jsx(E,{appointment:i,acceptAppointment:p,cancelAppointment:m},i.id))})]})]}):e.jsx("p",{className:"text-muted",children:"Vous n'avez aucun rendez-vous à venir."})})]}),e.jsx(ee,{variant:"destructive",onClick:x,className:"w-fit mt-auto",children:"Se déconnecter"})]})}export{vt as default};