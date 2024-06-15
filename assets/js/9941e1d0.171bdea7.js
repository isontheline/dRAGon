"use strict";(self.webpackChunkdragon_docs=self.webpackChunkdragon_docs||[]).push([[746],{9308:(n,e,i)=>{i.d(e,{Ay:()=>r,RM:()=>s});var t=i(4848),o=i(8453),c=i(7293);const s=[];function a(n){const e={p:"p",...(0,o.R)(),...n.components};return(0,t.jsx)(c.A,{type:"note",icon:"\ud83d\udea7",title:n.title?n.title:"Work In Progress",children:(0,t.jsx)(e.p,{children:"This section lacks useful information. It is a work in progress and will be updated soon."})})}function r(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},4907:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(4848),o=i(8453),c=i(9308);const s={},a="Introduction",r={id:"api/introduction",title:"Introduction",description:"OpenAPI",source:"@site/docs/api/introduction.mdx",sourceDirName:"api",slug:"/api/introduction",permalink:"/docs/api/introduction",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718460287e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Specification",permalink:"/docs/api/specification/"}},l={},d=[...c.RM,{value:"OpenAPI",id:"openapi",level:2},{value:"Swagger UI",id:"swagger-ui",level:3},{value:"Specification",id:"specification",level:3},{value:"Documentation",id:"documentation",level:4},{value:"Spec Files",id:"spec-files",level:4}];function h(n){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(e.h2,{id:"openapi",children:"OpenAPI"}),"\n",(0,t.jsx)(e.h3,{id:"swagger-ui",children:"Swagger UI"}),"\n",(0,t.jsxs)(e.p,{children:["When dRAGon is launched, the API documentation is available here : ",(0,t.jsx)(e.a,{href:"http://localhost:1985/api/swagger-ui/index.html",children:"http://localhost:1985/api/swagger-ui/index.html"})]}),"\n",(0,t.jsx)(e.h3,{id:"specification",children:"Specification"}),"\n",(0,t.jsx)(e.h4,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/api/specification",children:"API Endpoints"})}),"\n",(0,t.jsx)(e.h4,{id:"spec-files",children:"Spec Files"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(1691).A+"",children:"App"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(4e3).A+"",children:"Backend"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(597).A+"",children:"RaaG"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(6714).A+"",children:"Rag"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},7293:(n,e,i)=>{i.d(e,{A:()=>z});var t=i(6540),o=i(4848);function c(n){const{mdxAdmonitionTitle:e,rest:i}=function(n){const e=t.Children.toArray(n),i=e.find((n=>t.isValidElement(n)&&"mdxAdmonitionTitle"===n.type)),c=e.filter((n=>n!==i)),s=i?.props.children;return{mdxAdmonitionTitle:s,rest:c.length>0?(0,o.jsx)(o.Fragment,{children:c}):null}}(n.children),c=n.title??e;return{...n,...c&&{title:c},children:i}}var s=i(4164),a=i(1312),r=i(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(n){let{type:e,className:i,children:t}=n;return(0,o.jsx)("div",{className:(0,s.A)(r.G.common.admonition,r.G.common.admonitionType(e),l.admonition,i),children:t})}function h(n){let{icon:e,title:i}=n;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:e}),i]})}function u(n){let{children:e}=n;return e?(0,o.jsx)("div",{className:l.admonitionContent,children:e}):null}function p(n){const{type:e,icon:i,title:t,children:c,className:s}=n;return(0,o.jsxs)(d,{type:e,className:s,children:[t||i?(0,o.jsx)(h,{title:t,icon:i}):null,(0,o.jsx)(u,{children:c})]})}function m(n){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(m,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(n){return(0,o.jsx)(p,{...f,...n,className:(0,s.A)("alert alert--secondary",n.className),children:n.children})}function j(n){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(n){return(0,o.jsx)(p,{...g,...n,className:(0,s.A)("alert alert--success",n.className),children:n.children})}function A(n){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(n){return(0,o.jsx)(p,{...k,...n,className:(0,s.A)("alert alert--info",n.className),children:n.children})}function w(n){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,o.jsx)(w,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(n){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const I={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const y={icon:(0,o.jsx)(w,{}),title:(0,o.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const R={...{note:x,tip:v,info:b,warning:function(n){return(0,o.jsx)(p,{...N,...n,className:(0,s.A)("alert alert--warning",n.className),children:n.children})},danger:function(n){return(0,o.jsx)(p,{...I,...n,className:(0,s.A)("alert alert--danger",n.className),children:n.children})}},...{secondary:n=>(0,o.jsx)(x,{title:"secondary",...n}),important:n=>(0,o.jsx)(b,{title:"important",...n}),success:n=>(0,o.jsx)(v,{title:"success",...n}),caution:function(n){return(0,o.jsx)(p,{...y,...n,className:(0,s.A)("alert alert--warning",n.className),children:n.children})}}};function z(n){const e=c(n),i=(t=e.type,R[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),R.info));var t;return(0,o.jsx)(i,{...e})}},1691:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/files/swagger-app-826f688dbe589ce473c5384f0e35cc2a.json"},4e3:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/files/swagger-backend-b48589166a5035f15ec37aec8e27f8cc.json"},597:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/files/swagger-raag-24989d4d770b8b97140779fc419009bc.json"},6714:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/files/swagger-rag-4d1f7e6d34948284ea8be5bb840c4c5f.json"},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>a});var t=i(6540);const o={},c=t.createContext(o);function s(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);