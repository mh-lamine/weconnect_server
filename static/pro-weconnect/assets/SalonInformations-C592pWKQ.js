import{c as le,j as e,I as B,d as O,r as o,P as M,n as de,h as D,a as E,B as g,g as ue,u as me,e as he,o as pe,p as fe,l as xe,m as ve,q as ge,s as q,L as R}from"./index-t8RmQASG.js";import{L as C}from"./label-BS2yuv7O.js";import{g as je}from"./formatting-BKpwSQEA.js";import{P as be,a as ye,b as Ne}from"./popover-BN_JEPVt.js";import{B as we,a as Ce,b as T,c as _,d as H}from"./breadcrumb-DRsLRhfI.js";import{T as ke}from"./textarea-DVWwjjKP.js";import"./index-BzTY0Uhy.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=le("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Ae=({id:a,name:r="",label:t,type:n,defaultValue:i,placeholder:d=null,handleChange:s})=>e.jsxs("div",{children:[e.jsx(C,{htmlFor:a,children:t}),e.jsx(B,{id:a,type:n,name:r,defaultValue:i,placeholder:d,onChange:s,className:"text-lg"})]}),A=Ae,Ee=()=>e.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-2",children:[e.jsx("h1",{className:"text-3xl text-destructive",children:"Oops!"}),e.jsx("p",{children:"Une erreur s'est produite."})]}),Me=Ee;var z="Avatar",[Pe,We]=O(z),[Ie,U]=Pe(z),G=o.forwardRef((a,r)=>{const{__scopeAvatar:t,...n}=a,[i,d]=o.useState("idle");return e.jsx(Ie,{scope:t,imageLoadingStatus:i,onImageLoadingStatusChange:d,children:e.jsx(M.span,{...n,ref:r})})});G.displayName=z;var X="AvatarImage",K=o.forwardRef((a,r)=>{const{__scopeAvatar:t,src:n,onLoadingStatusChange:i=()=>{},...d}=a,s=U(X,t),c=Le(n),l=de(p=>{i(p),s.onImageLoadingStatusChange(p)});return D(()=>{c!=="idle"&&l(c)},[c,l]),c==="loaded"?e.jsx(M.img,{...d,ref:r,src:n}):null});K.displayName=X;var W="AvatarFallback",J=o.forwardRef((a,r)=>{const{__scopeAvatar:t,delayMs:n,...i}=a,d=U(W,t),[s,c]=o.useState(n===void 0);return o.useEffect(()=>{if(n!==void 0){const l=window.setTimeout(()=>c(!0),n);return()=>window.clearTimeout(l)}},[n]),s&&d.imageLoadingStatus!=="loaded"?e.jsx(M.span,{...i,ref:r}):null});J.displayName=W;function Le(a){const[r,t]=o.useState("idle");return D(()=>{if(!a){t("error");return}let n=!0;const i=new window.Image,d=s=>()=>{n&&t(s)};return t("loading"),i.onload=d("loaded"),i.onerror=d("error"),i.src=a,()=>{n=!1}},[a]),r}var Q=G,Y=K,Z=J;const ee=o.forwardRef(({className:a,...r},t)=>e.jsx(Q,{ref:t,className:E("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...r}));ee.displayName=Q.displayName;const ae=o.forwardRef(({className:a,...r},t)=>e.jsx(Y,{ref:t,className:E("aspect-square h-full w-full",a),...r}));ae.displayName=Y.displayName;const te=o.forwardRef(({className:a,...r},t)=>e.jsx(Z,{ref:t,className:E("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...r}));te.displayName=Z.displayName;function Re({name:a,address:r,profilePicture:t,coverImage:n,rmprofile:i,rmcover:d}){const s=async c=>{try{c==="profile"&&await i(),c==="cover"&&await d()}catch(l){console.error(l)}};return e.jsxs("div",{className:"hero w-full aspect-video relative max-h-[40vh] sm:max-h-[20vh] rounded-md overflow-hidden",style:{backgroundImage:`url(${n&&n})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"hero-overlay bg-opacity-40"}),e.jsx("div",{className:"hero-content text-neutral-content mt-auto mr-auto",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs(ee,{className:"w-14 h-14",children:[e.jsx(ae,{src:t,className:"border-2 rounded-full border-primary-800"}),e.jsx(te,{className:"text-xl",children:a&&je(a)})]}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h1",{className:"text-3xl font-semibold",children:a}),e.jsx("p",{children:r})]})]})}),e.jsx("div",{className:"absolute top-3 right-3",children:e.jsxs(be,{children:[e.jsx(ye,{asChild:!0,children:e.jsx(g,{variant:"destructive",children:e.jsx(Se,{})})}),e.jsxs(Ne,{align:"end",className:"w-fit flex flex-col gap-2",children:[e.jsx(g,{variant:"outline",onClick:()=>s("profile"),children:"Supprimer la photo de profil"}),e.jsx(g,{variant:"outline",onClick:()=>s("cover"),children:"Supprimer la photo de couverture"})]})]})})]})}var V="Switch",[Te,Je]=O(V),[_e,Be]=Te(V),se=o.forwardRef((a,r)=>{const{__scopeSwitch:t,name:n,checked:i,defaultChecked:d,required:s,disabled:c,value:l="on",onCheckedChange:p,...k}=a,[h,j]=o.useState(null),b=ue(r,N=>j(N)),x=o.useRef(!1),P=h?!!h.closest("form"):!0,[y=!1,v]=me({prop:i,defaultProp:d,onChange:p});return e.jsxs(_e,{scope:t,checked:y,disabled:c,children:[e.jsx(M.button,{type:"button",role:"switch","aria-checked":y,"aria-required":s,"data-state":oe(y),"data-disabled":c?"":void 0,disabled:c,value:l,...k,ref:b,onClick:he(a.onClick,N=>{v(I=>!I),P&&(x.current=N.isPropagationStopped(),x.current||N.stopPropagation())})}),P&&e.jsx(Fe,{control:h,bubbles:!x.current,name:n,value:l,checked:y,required:s,disabled:c,style:{transform:"translateX(-100%)"}})]})});se.displayName=V;var re="SwitchThumb",ne=o.forwardRef((a,r)=>{const{__scopeSwitch:t,...n}=a,i=Be(re,t);return e.jsx(M.span,{"data-state":oe(i.checked),"data-disabled":i.disabled?"":void 0,...n,ref:r})});ne.displayName=re;var Fe=a=>{const{control:r,checked:t,bubbles:n=!0,...i}=a,d=o.useRef(null),s=pe(t),c=fe(r);return o.useEffect(()=>{const l=d.current,p=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(p,"checked").set;if(s!==t&&h){const j=new Event("click",{bubbles:n});h.call(l,t),l.dispatchEvent(j)}},[s,t,n]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...i,tabIndex:-1,ref:d,style:{...a.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function oe(a){return a?"checked":"unchecked"}var ce=se,ze=ne;const F=o.forwardRef(({className:a,...r},t)=>e.jsx(ce,{className:E("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...r,ref:t,children:e.jsx(ze,{className:E("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));F.displayName=ce.displayName;const Ve=/^(?:(?:\+|00)33\s?[1-9](?:[\s.-]?\d{2}){4}|0[1-9](?:[\s.-]?\d{2}){4})$/,$e=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,qe=["image/jpeg","image/jpg","image/png"];function Qe(){const[a,r]=o.useState(),[t,n]=o.useState(),[i,d]=o.useState(!0),[s,c]=o.useState(),[l,p]=o.useState(),[k,h]=o.useState(!1),[j,b]=o.useState(!1),x=xe(),P=ve(),y=ge();async function v(){var u;try{const{data:m}=await x.get("/api/users");return r(m),m}catch(m){n(m),((u=m.response)==null?void 0:u.status)===401&&P("/login",{state:{from:y},replace:!0})}finally{d(!1)}}const N=async()=>{try{await x.delete("/api/users/profile",{profilePicture:null}),await v()}catch(u){console.log(u)}},I=async()=>{try{await x.delete("/api/users/cover",{coverImage:null}),await v()}catch(u){console.log(u)}};o.useEffect(()=>{async function u(){const m=await v();p(m.contactMethods)}u()},[]);const w=u=>{const{id:m,name:f,value:S}=u.target;if(f==="contactMethod"){p(L=>({...L,[m]:S}));return}c({...s,[m]:S})},ie=async u=>{if(u.preventDefault(),h(!0),!s&&!l){h(!1);return}if(s&&!Object.keys(s).some(f=>s[f]!==a[f])){c(),h(!1);return}if(l&&!Object.keys(l).some(f=>l[f]!==a.contactMethods[f])){p(a.contactMethods),h(!1);return}if(l.phoneNumber&&!Ve.test(l.phoneNumber)){b("Le numéro de téléphone n'est pas valide"),h(!1);return}if(l.email&&!$e.test(l.email)){b("L'adresse email n'est pas valide"),h(!1);return}try{await x.patch("/api/users",{...s,contactMethods:l}),await v()}catch(m){m.response?console.error(m.response.data.message):b("Une erreur est survenue, veuillez réessayer plus tard")}c(),h(!1)},$=async u=>{const{id:m,files:f}=u.target;if(!qe.includes(f[0].type))return alert("Invalid file type");const S=new FormData;S.append(m,f[0]);try{await x.post(`/api/users/${m}`,S,{headers:{"Content-Type":"multipart/form-data"}}),v()}catch(L){console.error(L)}};return i?e.jsx(q,{className:"w-8 h-8 animate-spin flex-1"}):t?e.jsx(Me,{errMsg:t}):e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4",children:[e.jsx(we,{children:e.jsxs(Ce,{children:[e.jsx(T,{children:e.jsx(_,{asChild:!0,children:e.jsx(R,{to:"/",children:"Tableau de bord"})})}),e.jsx(H,{}),e.jsx(T,{children:e.jsx(_,{asChild:!0,children:e.jsx(R,{to:"/salon",children:"Salon"})})}),e.jsx(H,{}),e.jsx(T,{children:e.jsx(_,{asChild:!0,children:e.jsx(R,{to:"/salon/informations",children:"Informations"})})})]})}),e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes informations"}),e.jsx(Re,{name:a.providerName,address:a.address,profilePicture:a.profilePicture,coverImage:a.coverImage,rmprofile:N,rmcover:I}),e.jsxs("div",{className:"space-y-2 md:space-y-0 md:grid grid-cols-2 md:gap-4",children:[e.jsx(g,{asChild:!0,children:e.jsx(C,{htmlFor:"profile",className:" w-full",children:"Changer ma photo de profil"})}),e.jsx(B,{className:"hidden",type:"file",id:"profile",onChange:$}),e.jsx(g,{asChild:!0,children:e.jsx(C,{htmlFor:"cover",className:" w-full",children:"Changer ma photo de couverture"})}),e.jsx(B,{className:"hidden",type:"file",id:"cover",onChange:$})]}),e.jsxs("form",{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-2 md:space-y-0 md:grid grid-cols-2 md:gap-4 mb-8",children:[e.jsx(A,{id:"providerName",label:"Nom du salon",type:"text",defaultValue:a.providerName,handleChange:w}),e.jsx(A,{id:"address",label:"Adresse",type:"text",defaultValue:a.address,handleChange:w})]}),e.jsx("div",{className:"divider divider-start text-muted",children:"Par quels moyens vos clients peuvent vous contacter ?"}),e.jsxs("div",{className:"space-y-2 md:space-y-0 md:grid grid-cols-2 md:gap-4",children:[e.jsx(A,{id:"phoneNumber",name:"contactMethod",label:"Téléphone du salon",type:"tel",defaultValue:a.contactMethods.phoneNumber,handleChange:w}),e.jsx(A,{id:"instagram",name:"contactMethod",label:"Instagram",type:"text",defaultValue:a.contactMethods.instagram,placeholder:"@weconnect_off",handleChange:w}),e.jsx(A,{id:"email",name:"contactMethod",label:"Email",type:"email",defaultValue:a.contactMethods.email,handleChange:w})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{children:[e.jsx(C,{htmlFor:"autoAccept",children:"Confirmation automatique"}),e.jsxs("div",{className:"bg-white rounded-md px-3 py-2 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("p",{children:"Choisissez ou non d'accepter automatiquement les demandes de rendez-vous."}),e.jsx(F,{id:"autoAccept",checked:(s==null?void 0:s.autoAcceptAppointments)??a.autoAcceptAppointments,onCheckedChange:u=>{c({...s,autoAcceptAppointments:u})}})]}),e.jsxs("p",{className:"text-muted",children:["Si vous choisissez de ne pas accepter automatiquement les demandes de rendez-vous, elles auront le status ",e.jsx("b",{children:"En attente"})," tant que vous ne les aurez pas confirmées ou refusées."]})]})]}),e.jsxs("div",{children:[e.jsx(C,{htmlFor:"vacancyMode",className:"text-destructive",children:"Mode vacances"}),e.jsxs("div",{className:"bg-white rounded-md px-3 py-2 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("p",{children:"Passez en mode vacances pour ne plus recevoir de demandes de rendez-vous."}),e.jsx(F,{id:"vacancyMode",checked:(s==null?void 0:s.isInVacancyMode)??a.isInVacancyMode,onCheckedChange:u=>{c({...s,isInVacancyMode:u})},className:"data-[state=checked]:bg-destructive"})]}),e.jsx("p",{className:"text-muted",children:"En cas de fermerture temporaire de votre salon, vous pouvez activer le mode vacances pour ne plus recevoir de demandes de rendez-vous pendant un certain temps."})]})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(C,{htmlFor:"terms",children:"Conditions de réservation"}),e.jsx(ke,{id:"bookingTerms",type:"text",defaultValue:a.bookingTerms,onChange:w,className:"text-lg whitespace-pre-line"})]}),j&&setTimeout(()=>b(null),1e4)&&e.jsx("p",{className:"text-destructive text-sm",children:j}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(g,{onClick:ie,disabled:k&&!0,children:k?e.jsx(q,{className:"animate-spin"}):"Enregistrer les modifications"}),e.jsx(g,{variant:"outline",type:"reset",onClick:()=>{c(),p(a.contactMethods)},children:"Annuler"})]})]})]})}export{Qe as default};
