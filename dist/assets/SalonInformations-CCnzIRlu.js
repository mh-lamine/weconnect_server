import{l as B,r as a,m as V,n as H,j as e,P as z,o as F,p as O,q as U,s as R,u as X,b as $,t as D,v as A,E as G,B as E,w,x as M}from"./index-CtwV1XUq.js";var P="Switch",[W,te]=B(P),[J,K]=W(P),I=a.forwardRef((t,i)=>{const{__scopeSwitch:n,name:u,checked:p,defaultChecked:f,required:s,disabled:r,value:m="on",onCheckedChange:d,...v}=t,[o,x]=a.useState(null),k=V(i,h=>x(h)),b=a.useRef(!1),g=o?!!o.closest("form"):!0,[l=!1,N]=H({prop:p,defaultProp:f,onChange:d});return e.jsxs(J,{scope:n,checked:l,disabled:r,children:[e.jsx(z.button,{type:"button",role:"switch","aria-checked":l,"aria-required":s,"data-state":T(l),"data-disabled":r?"":void 0,disabled:r,value:m,...v,ref:k,onClick:F(t.onClick,h=>{N(C=>!C),g&&(b.current=h.isPropagationStopped(),b.current||h.stopPropagation())})}),g&&e.jsx(Q,{control:o,bubbles:!b.current,name:u,value:m,checked:l,required:s,disabled:r,style:{transform:"translateX(-100%)"}})]})});I.displayName=P;var L="SwitchThumb",_=a.forwardRef((t,i)=>{const{__scopeSwitch:n,...u}=t,p=K(L,n);return e.jsx(z.span,{"data-state":T(p.checked),"data-disabled":p.disabled?"":void 0,...u,ref:i})});_.displayName=L;var Q=t=>{const{control:i,checked:n,bubbles:u=!0,...p}=t,f=a.useRef(null),s=O(n),r=U(i);return a.useEffect(()=>{const m=f.current,d=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(d,"checked").set;if(s!==n&&o){const x=new Event("click",{bubbles:u});o.call(m,n),m.dispatchEvent(x)}},[s,n,u]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...p,tabIndex:-1,ref:f,style:{...t.style,...r,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function T(t){return t?"checked":"unchecked"}var q=I,Y=_;const S=a.forwardRef(({className:t,...i},n)=>e.jsx(q,{className:R("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...i,ref:n,children:e.jsx(Y,{className:R("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));S.displayName=q.displayName;const Z=/^(?:(?:\+|00)33\s?[1-9](?:[\s.-]?\d{2}){4}|0[1-9](?:[\s.-]?\d{2}){4})$/,ee=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;function ae(){const[t,i]=a.useState(),[n,u]=a.useState(),[p,f]=a.useState(!0),[s,r]=a.useState(),[m,d]=a.useState(!1),[v,o]=a.useState(!1),x=X(),k=$(),b=D();async function g(){var c;try{const j=await x.get("/api/users");i(j.data)}catch(j){u(j),((c=j.response)==null?void 0:c.status)===401&&k("/login",{state:{from:b},replace:!0})}f(!1)}a.useEffect(()=>{g()},[]);const l=c=>{r({...s,[c.target.id]:c.target.value})},N=async c=>{if(c.preventDefault(),d(!0),!Object.keys(s).some(y=>s[y]!==t[y])){r(),d(!1);return}if(s.phoneNumber&&!Z.test(s.phoneNumber)){o("Le numéro de téléphone n'est pas valide"),d(!1);return}if(s.email&&!ee.test(s.email)){o("L'adresse email n'est pas valide"),d(!1);return}try{await x.patch("/api/users",s),await g()}catch(y){y.response?o(y.response.data.message):o("Une erreur est survenue, veuillez réessayer plus tard")}r(),d(!1)},h=a.useRef(null),C=()=>{h.current&&(h.current.reset(),r())};return p?e.jsx(A,{className:"w-8 h-8 animate-spin flex-1"}):n?e.jsx(G,{errMsg:n}):e.jsxs("main",{className:"w-full max-w-screen-md mx-auto p-6 flex flex-1 flex-col gap-4",children:[e.jsx(E,{variant:"link",className:"justify-start h-0 p-0",onClick:()=>k(-1),children:"Retour"}),e.jsx("h1",{className:"text-3xl font-semibold",children:"Mes informations"}),e.jsxs("form",{className:"space-y-2",ref:h,children:[e.jsxs("div",{className:"space-y-2 md:space-y-0 md:grid grid-cols-2 md:gap-4",children:[e.jsx(w,{id:"providerName",label:"Nom du salon",type:"text",defaultValue:t.providerName,handleChange:l}),e.jsx(w,{id:"phoneNumber",label:"Téléphone",type:"tel",defaultValue:t.phoneNumber,handleChange:l}),e.jsx(w,{id:"address",label:"Adresse",type:"text",defaultValue:t.address,handleChange:l}),e.jsx(w,{id:"email",label:"Email",type:"email",defaultValue:t.email,handleChange:l})]}),e.jsxs("div",{children:[e.jsx(M,{htmlFor:"autoAccept",children:"Confirmation automatique"}),e.jsxs("div",{className:"bg-white rounded-md px-3 py-2 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("p",{children:"Choisissez ou non d'accepter automatiquement les demandes de rendez-vous."}),e.jsx(S,{id:"autoAccept",checked:(s==null?void 0:s.autoAcceptAppointments)??t.autoAcceptAppointments,onCheckedChange:c=>{r({...s,autoAcceptAppointments:c})}})]}),e.jsxs("p",{className:"text-muted",children:["Si vous choisissez de ne pas accepter automatiquement les demandes de rendez-vous, elles auront le status ",e.jsx("b",{children:"En attente"})," tant que vous ne les aurez pas confirmées ou refusées."]})]})]}),e.jsxs("div",{children:[e.jsx(M,{htmlFor:"vacancyMode",className:"text-destructive",children:"Mode vacances"}),e.jsxs("div",{className:"bg-white rounded-md px-3 py-2 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("p",{children:"Passez en mode vacances pour ne plus recevoir de demandes de rendez-vous."}),e.jsx(S,{id:"vacancyMode",checked:(s==null?void 0:s.isInVacancyMode)??t.isInVacancyMode,onCheckedChange:c=>{r({...s,isInVacancyMode:c})},className:"data-[state=checked]:bg-destructive"})]}),e.jsx("p",{className:"text-muted",children:"En cas de fermerture temporaire de votre salon, vous pouvez activer le mode vacances pour ne plus recevoir de demandes de rendez-vous pendant un certain temps."})]})]}),v&&setTimeout(()=>o(null),3e3)&&e.jsx("p",{className:"text-destructive text-sm",children:v}),s&&e.jsxs(e.Fragment,{children:[e.jsx(E,{onClick:N,disabled:m&&!0,children:m?e.jsx(A,{className:"animate-spin"}):"Enregistrer les modifications"}),e.jsx(E,{variant:"outline",className:"block",onClick:C,children:"Annuler les modifications"})]})]})]})}export{ae as default};
