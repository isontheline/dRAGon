"use strict";(self.webpackChunkdragon_docs=self.webpackChunkdragon_docs||[]).push([[6571],{9308:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var i=t(4848),o=t(8453),r=t(7293);const a=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(r.A,{type:"note",icon:"\ud83d\udea7",title:e.title?e.title:"Work In Progress",children:(0,i.jsx)(n.p,{children:"This section lacks useful information. It is a work in progress and will be updated soon."})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},3291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=t(4848),o=t(8453),r=t(9308);const a={keywords:["tutorial","rag","api","silo","create","query"]},s="Create and Query a Silo",c={id:"tutorials/rag-api/rag-api-create-query-silo",title:"Create and Query a Silo",description:"Create a Silo",source:"@site/docs/tutorials/rag-api/rag-api-create-query-silo.mdx",sourceDirName:"tutorials/rag-api",slug:"/tutorials/rag-api/rag-api-create-query-silo",permalink:"/docs/tutorials/rag-api/rag-api-create-query-silo",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718801956e3,frontMatter:{keywords:["tutorial","rag","api","silo","create","query"]},sidebar:"tutorialSidebar",previous:{title:"FAQ : SQL Ingestor as a RAG Data Provider",permalink:"/docs/tutorials/raag-api/raag-faq-sql-ingestor"}},l={},d=[...r.RM,{value:"Create a Silo",id:"create-a-silo",level:2},{value:"Index a directory",id:"index-a-directory",level:2},{value:"Query a Silo",id:"query-a-silo",level:2}];function u(e){const n={h1:"h1",h2:"h2",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-and-query-a-silo",children:"Create and Query a Silo"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"create-a-silo",children:"Create a Silo"}),"\n",(0,i.jsx)(n.h2,{id:"index-a-directory",children:"Index a directory"}),"\n",(0,i.jsx)(n.h2,{id:"query-a-silo",children:"Query a Silo"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},7293:(e,n,t)=>{t.d(n,{A:()=>T});var i=t(6540),o=t(4848);function r(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,o.jsx)(o.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:t}}var a=t(4164),s=t(1312),c=t(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,o.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(n),l.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function h(e){let{children:n}=e;return n?(0,o.jsx)("div",{className:l.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:i,children:r,className:a}=e;return(0,o.jsxs)(d,{type:n,className:a,children:[i||t?(0,o.jsx)(u,{title:i,icon:t}):null,(0,o.jsx)(h,{children:r})]})}function x(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(x,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function p(e){return(0,o.jsx)(m,{...f,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,o.jsx)(m,{...g,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function y(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const A={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function C(e){return(0,o.jsx)(m,{...A,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function N(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,o.jsx)(N,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function z(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const M={icon:(0,o.jsx)(z,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const b={icon:(0,o.jsx)(N,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const R={...{note:p,tip:v,info:C,warning:function(e){return(0,o.jsx)(m,{...w,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(m,{...M,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(p,{title:"secondary",...e}),important:e=>(0,o.jsx)(C,{title:"important",...e}),success:e=>(0,o.jsx)(v,{title:"success",...e}),caution:function(e){return(0,o.jsx)(m,{...b,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function T(e){const n=r(e),t=(i=n.type,R[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),R.info));var i;return(0,o.jsx)(t,{...n})}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);