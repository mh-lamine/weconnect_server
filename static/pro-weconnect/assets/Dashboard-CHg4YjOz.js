import{c as Z,j as e,a as R,b as Ne,B as ye,d as ee,r as m,u as $,P as y,e as te,f as we,g as se,h as Pe,R as v,i as Ee,k as Ie,L as Q}from"./index-Bra0CkXf.js";import{M as W,u as re}from"./ModalAction-CUCvdTRX.js";import{c as Re,u as De,T as _e,a as w,b as Te,d as X}from"./tabs-KCs-wQTv.js";import{B as Se,a as Le,b as ke,c as ze}from"./breadcrumb-DffEUiIy.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=Z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Ve=Ne("inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm w-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-light",outline:"border-transparent bg-dark/10",success:"border-transparent bg-success text-light"}},defaultVariants:{variant:"default"}});function P({className:t,variant:n,...s}){return e.jsx("div",{className:R(Ve({variant:n}),t),...s})}const $e=({appointment:t,acceptAppointment:n,cancelAppointment:s,today:a=!1,past:r=!1})=>e.jsxs("div",{className:`flex flex-col gap-2 py-2 ${r&&"text-muted"}`,children:[e.jsx("div",{className:"divider divider-start my-0",children:e.jsxs("h2",{className:"text-xl font-semibold",children:[t.client.firstName," ",t.client.lastName]})}),e.jsx("div",{className:"flex flex-col md:flex-row md:gap-4",children:e.jsx(ye,{variant:"link",className:`w-fit p-0 h-min ${r&&"text-muted"}`,children:e.jsx("a",{href:`tel:${t.client.phoneNumber}`,children:t.client.phoneNumber.replace(/(\d{2})(?=\d)/g,"$1 ")})})}),e.jsxs("h3",{className:"text-lg",children:[e.jsx("span",{className:"font-medium",children:t.service.name})," ",e.jsx("br",{}),!a&&e.jsxs(e.Fragment,{children:["le"," ",e.jsxs("span",{className:"font-medium",children:[new Date(t.date).toLocaleDateString("fr-FR",{weekday:"long",month:"long",day:"numeric"}).toUpperCase()," "]})]}),"à"," ",e.jsx("span",{className:"font-medium",children:new Date(t.date).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]}),t.status==="PENDING"&&e.jsx(P,{variant:"outline",className:r&&"bg-muted",children:"En attente de confirmation"}),t.status==="ACCEPTED"&&e.jsx(P,{variant:"success",className:r&&"bg-muted",children:"Confirmé"}),t.status==="COMPLETED"&&e.jsx(P,{variant:"success",className:r&&"bg-muted",children:"Passé"}),t.status==="CANCELLED"&&e.jsx(P,{variant:"destructive",className:r&&"bg-muted",children:"Annulé"}),e.jsxs("div",{className:"flex justify-between",children:[t.status==="PENDING"&&e.jsx(W,{id:t.id,action:n,actionLabel:"Accepter",title:"Accepter le rendez-vous",description:"Êtes-vous sûr de vouloir accepter ce rendez-vous ?",trigger:"Accepter",variant:"success"}),(t.status==="PENDING"||t.status==="ACCEPTED")&&e.jsx(W,{id:t.id,action:s,actionLabel:"Refuser",title:"Refuser le rendez-vous",description:"Êtes-vous sûr de vouloir refuser ce rendez-vous ?",trigger:"Refuser",variant:"destructive"})]})]}),E=$e;var B="Collapsible",[Be,ae]=ee(B),[Ge,G]=Be(B),oe=m.forwardRef((t,n)=>{const{__scopeCollapsible:s,open:a,defaultOpen:r,disabled:i,onOpenChange:c,...l}=t,[u=!1,p]=$({prop:a,defaultProp:r,onChange:c});return e.jsx(Ge,{scope:s,disabled:i,contentId:re(),open:u,onOpenToggle:m.useCallback(()=>p(f=>!f),[p]),children:e.jsx(y.div,{"data-state":H(u),"data-disabled":i?"":void 0,...l,ref:n})})});oe.displayName=B;var ne="CollapsibleTrigger",ie=m.forwardRef((t,n)=>{const{__scopeCollapsible:s,...a}=t,r=G(ne,s);return e.jsx(y.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":H(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...a,ref:n,onClick:te(t.onClick,r.onOpenToggle)})});ie.displayName=ne;var F="CollapsibleContent",ce=m.forwardRef((t,n)=>{const{forceMount:s,...a}=t,r=G(F,t.__scopeCollapsible);return e.jsx(we,{present:s||r.open,children:({present:i})=>e.jsx(Fe,{...a,ref:n,present:i})})});ce.displayName=F;var Fe=m.forwardRef((t,n)=>{const{__scopeCollapsible:s,present:a,children:r,...i}=t,c=G(F,s),[l,u]=m.useState(a),p=m.useRef(null),f=se(n,p),o=m.useRef(0),x=o.current,h=m.useRef(0),A=h.current,b=c.open||l,C=m.useRef(b),j=m.useRef();return m.useEffect(()=>{const d=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(d)},[]),Pe(()=>{const d=p.current;if(d){j.current=j.current||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const N=d.getBoundingClientRect();o.current=N.height,h.current=N.width,C.current||(d.style.transitionDuration=j.current.transitionDuration,d.style.animationName=j.current.animationName),u(a)}},[c.open,a]),e.jsx(y.div,{"data-state":H(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!b,...i,ref:f,style:{"--radix-collapsible-content-height":x?`${x}px`:void 0,"--radix-collapsible-content-width":A?`${A}px`:void 0,...t.style},children:b&&r})});function H(t){return t?"open":"closed"}var He=oe,Ke=ie,qe=ce,g="Accordion",Ue=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[K,Ye,Je]=Re(g),[D,dt]=ee(g,[Je,ae]),q=ae(),le=v.forwardRef((t,n)=>{const{type:s,...a}=t,r=a,i=a;return e.jsx(K.Provider,{scope:t.__scopeAccordion,children:s==="multiple"?e.jsx(Ze,{...i,ref:n}):e.jsx(Xe,{...r,ref:n})})});le.displayName=g;var[de,Qe]=D(g),[ue,We]=D(g,{collapsible:!1}),Xe=v.forwardRef((t,n)=>{const{value:s,defaultValue:a,onValueChange:r=()=>{},collapsible:i=!1,...c}=t,[l,u]=$({prop:s,defaultProp:a,onChange:r});return e.jsx(de,{scope:t.__scopeAccordion,value:l?[l]:[],onItemOpen:u,onItemClose:v.useCallback(()=>i&&u(""),[i,u]),children:e.jsx(ue,{scope:t.__scopeAccordion,collapsible:i,children:e.jsx(pe,{...c,ref:n})})})}),Ze=v.forwardRef((t,n)=>{const{value:s,defaultValue:a,onValueChange:r=()=>{},...i}=t,[c=[],l]=$({prop:s,defaultProp:a,onChange:r}),u=v.useCallback(f=>l((o=[])=>[...o,f]),[l]),p=v.useCallback(f=>l((o=[])=>o.filter(x=>x!==f)),[l]);return e.jsx(de,{scope:t.__scopeAccordion,value:c,onItemOpen:u,onItemClose:p,children:e.jsx(ue,{scope:t.__scopeAccordion,collapsible:!0,children:e.jsx(pe,{...i,ref:n})})})}),[et,_]=D(g),pe=v.forwardRef((t,n)=>{const{__scopeAccordion:s,disabled:a,dir:r,orientation:i="vertical",...c}=t,l=v.useRef(null),u=se(l,n),p=Ye(s),o=De(r)==="ltr",x=te(t.onKeyDown,h=>{var Y;if(!Ue.includes(h.key))return;const A=h.target,b=p().filter(k=>{var J;return!((J=k.ref.current)!=null&&J.disabled)}),C=b.findIndex(k=>k.ref.current===A),j=b.length;if(C===-1)return;h.preventDefault();let d=C;const N=0,T=j-1,S=()=>{d=C+1,d>T&&(d=N)},L=()=>{d=C-1,d<N&&(d=T)};switch(h.key){case"Home":d=N;break;case"End":d=T;break;case"ArrowRight":i==="horizontal"&&(o?S():L());break;case"ArrowDown":i==="vertical"&&S();break;case"ArrowLeft":i==="horizontal"&&(o?L():S());break;case"ArrowUp":i==="vertical"&&L();break}const Ae=d%j;(Y=b[Ae].ref.current)==null||Y.focus()});return e.jsx(et,{scope:s,disabled:a,direction:r,orientation:i,children:e.jsx(K.Slot,{scope:s,children:e.jsx(y.div,{...c,"data-orientation":i,ref:u,onKeyDown:a?void 0:x})})})}),I="AccordionItem",[tt,U]=D(I),me=v.forwardRef((t,n)=>{const{__scopeAccordion:s,value:a,...r}=t,i=_(I,s),c=Qe(I,s),l=q(s),u=re(),p=a&&c.value.includes(a)||!1,f=i.disabled||t.disabled;return e.jsx(tt,{scope:s,open:p,disabled:f,triggerId:u,children:e.jsx(He,{"data-orientation":i.orientation,"data-state":be(p),...l,...r,ref:n,disabled:f,open:p,onOpenChange:o=>{o?c.onItemOpen(a):c.onItemClose(a)}})})});me.displayName=I;var fe="AccordionHeader",xe=v.forwardRef((t,n)=>{const{__scopeAccordion:s,...a}=t,r=_(g,s),i=U(fe,s);return e.jsx(y.h3,{"data-orientation":r.orientation,"data-state":be(i.open),"data-disabled":i.disabled?"":void 0,...a,ref:n})});xe.displayName=fe;var z="AccordionTrigger",ve=v.forwardRef((t,n)=>{const{__scopeAccordion:s,...a}=t,r=_(g,s),i=U(z,s),c=We(z,s),l=q(s);return e.jsx(K.ItemSlot,{scope:s,children:e.jsx(Ke,{"aria-disabled":i.open&&!c.collapsible||void 0,"data-orientation":r.orientation,id:i.triggerId,...l,...a,ref:n})})});ve.displayName=z;var he="AccordionContent",ge=v.forwardRef((t,n)=>{const{__scopeAccordion:s,...a}=t,r=_(g,s),i=U(he,s),c=q(s);return e.jsx(qe,{role:"region","aria-labelledby":i.triggerId,"data-orientation":r.orientation,...c,...a,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});ge.displayName=he;function be(t){return t?"open":"closed"}var st=le,rt=me,at=xe,Ce=ve,je=ge;const ot=st,M=m.forwardRef(({className:t,...n},s)=>e.jsx(rt,{ref:s,className:R("border-b",t),...n}));M.displayName="AccordionItem";const O=m.forwardRef(({className:t,children:n,...s},a)=>e.jsx(at,{className:"flex",children:e.jsxs(Ce,{ref:a,className:R("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...s,children:[n,e.jsx(Me,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));O.displayName=Ce.displayName;const V=m.forwardRef(({className:t,children:n,...s},a)=>e.jsx(je,{ref:a,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...s,children:e.jsx("div",{className:R("pb-4 pt-0",t),children:n})}));V.displayName=je.displayName;function ut(){const[t,n]=m.useState(),[s,a]=m.useState(!0),r=Ee();Ie();async function i(){try{const o=await r.get("/api/appointments/provider");n(o.data)}catch(o){console.error(o)}finally{a(!1)}}async function c(o){try{await r.patch(`/api/appointments/${o}`,{status:"ACCEPTED"}),i()}catch(x){console.error(x)}}async function l(o){try{await r.patch(`/api/appointments/${o}`,{status:"CANCELLED"}),i()}catch(x){console.error(x)}}const u=(o,x)=>o.filter(h=>h.status===x).sort((h,A)=>new Date(h.date)-new Date(A.date));m.useEffect(()=>{i()},[]);const p=(t==null?void 0:t.todaysAppointments)||[],f=(t==null?void 0:t.futureAppointments)||[];return e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4",children:[e.jsx(Se,{className:"h-0 p-0",children:e.jsx(Le,{children:e.jsx(ke,{children:e.jsx(ze,{asChild:!0,children:e.jsx(Q,{to:"/",children:"Tableau de bord"})})})})}),e.jsxs(_e,{defaultValue:"today",className:"space-y-4",children:[e.jsx(w,{value:"today",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes rendez-vous de la journée"})}),e.jsx(w,{value:"incoming",children:e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes rendez-vous à venir"})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(Te,{children:[e.jsx(X,{value:"today",children:"Aujourd'hui"}),e.jsx(X,{value:"incoming",children:"À venir"})]}),e.jsx(Q,{to:"/salon",children:e.jsx(Oe,{size:24,className:"text-primary"})})]}),e.jsx(w,{value:"today",className:"space-y-4",children:p.length?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-muted",children:["Vous avez ",p.length," rendez-vous aujourd'hui."]}),u(p,"ACCEPTED").map(o=>e.jsx(E,{appointment:o,cancelAppointment:l,today:!0},o.id)),e.jsx("div",{className:"divider divider-start text-muted",children:"Mes rendez-vous passés"}),u(p,"COMPLETED").map(o=>e.jsx(E,{appointment:o,past:!0,today:!0},o.id))]}):e.jsxs("p",{className:"text-muted",children:[" ","Vous n'avez aucun rendez-vous aujourd'hui."]})}),e.jsx(w,{value:"incoming",children:f.length?e.jsxs(ot,{type:"single",collapsible:!0,defaultValue:"item-0",className:"w-full",children:[e.jsxs(M,{value:"item-0",children:[e.jsx(O,{children:e.jsxs("p",{className:"text-muted",children:["Vous avez"," ",t.futureAppointments.filter(o=>o.status==="PENDING").length," ","demande(s) en attente."]})}),e.jsx(V,{children:u(f,"PENDING").map(o=>e.jsx(E,{appointment:o,acceptAppointment:c,cancelAppointment:l},o.id))})]}),e.jsxs(M,{value:"item-1",children:[e.jsx(O,{children:e.jsxs("p",{className:"text-muted",children:["Vous avez"," ",t.futureAppointments.filter(o=>o.status==="ACCEPTED").length," ","rendez-vous à venir."]})}),e.jsx(V,{children:u(f,"ACCEPTED").map(o=>e.jsx(E,{appointment:o,acceptAppointment:c,cancelAppointment:l},o.id))})]})]}):e.jsx("p",{className:"text-muted",children:"Vous n'avez aucun rendez-vous à venir."})})]})]})}export{ut as default};
