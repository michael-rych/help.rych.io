"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4013],{6165:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),r=n(6010),l=n(4260),s=n(6742);const c="sidebar_2ahu",o="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",m="sidebarItem_2UVv",u="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM";var f=n(4973);function E(e){let{sidebar:t}=e;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.Z)(c,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),a.createElement("ul",{className:i},t.items.map((e=>a.createElement("li",{key:e.permalink,className:m},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}var h=n(571);const g=function(e){const{sidebar:t,toc:n,children:s,...c}=e,o=t&&t.items.length>0;return a.createElement(l.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},o&&a.createElement("aside",{className:"col col--3"},a.createElement(E,{sidebar:t})),a.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),n&&a.createElement("div",{className:"col col--2"},a.createElement(h.Z,{toc:n})))))}},94:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),r=n(6165),l=n(6584),s=n(941);const c=function(e){const{tags:t,sidebar:n}=e,c=(0,s.MA)();return a.createElement(r.Z,{title:c,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,c),a.createElement(l.Z,{tags:Object.values(t)}))}},571:(e,t,n)=>{n.d(t,{r:()=>f,Z:()=>E});var a=n(7294),r=n(6010),l=n(941);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:null!=(r=n[n.indexOf(a)-1])?r:null;var r}return n[n.length-1]}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,a.useRef)(void 0),n=o();(0,a.useEffect)((()=>{const{linkClassName:a,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=c({anchorTopOffset:n.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){let{toc:t,isChild:n}=e;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(f,{isChild:!0,toc:e.children}))))):null}const E=function(e){let{toc:t}=e;return i(d),a.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},a.createElement(f,{toc:t}))}},7211:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010),l=n(6742);const s="tag_1Okp",c="tagRegular_3MiF",o="tagWithCount_1HU1";const i=function(e){const{permalink:t,name:n,count:i}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)(s,{[c]:!i,[o]:i})},n,i&&a.createElement("span",null,i))}},6584:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(7211),l=n(941);const s="tag_21yA";function c(e){let{letterEntry:t}=e;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((e=>a.createElement("li",{key:e.permalink,className:s},a.createElement(r.Z,e))))),a.createElement("hr",null))}const o=function(e){let{tags:t}=e;const n=(0,l.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((e=>a.createElement(c,{key:e.letter,letterEntry:e}))))}},546:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),l=n(6010),s=n(6742),c=n(941),o=n(4996),i=n(3919);const m="footerLogoLink_qW4Z";var u=n(8465),d=n(8617);function f(e){let{to:t,href:n,label:l,prependBaseUrlToHref:c,...m}=e;const u=(0,o.Z)(t),f=(0,o.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(s.Z,(0,a.Z)({className:"footer__link-item"},n?{href:c?f:n}:{to:u},m),n&&!(0,i.Z)(n)?r.createElement("span",null,l,r.createElement(d.Z,null)):l)}const E=e=>{let{sources:t,alt:n}=e;return r.createElement(u.Z,{className:"footer__logo",alt:n,sources:t})};const h=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:a={}}=e||{},i={light:(0,o.Z)(a.src),dark:(0,o.Z)(a.srcDark||a.src)};return e?r.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},n&&n.length>0&&r.createElement("div",{className:"row footer__links"},n.map(((e,t)=>r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(f,e))))):null)))),(a||t)&&r.createElement("div",{className:"footer__bottom text--center"},a&&(a.src||a.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},a.href?r.createElement(s.Z,{href:a.href,className:m},r.createElement(E,{alt:a.alt,sources:i})):r.createElement(E,{alt:a.alt,sources:i})),t?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);