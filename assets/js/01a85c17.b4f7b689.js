"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8209],{19:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(6540),r=a(53),l=a(1293),s=a(4676);const c={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var o=a(4798);function i(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.A)(c.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.A)(c.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:c.sidebarItemList},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c.sidebarItem},n.createElement(s.A,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title))))))}var m=a(1461);const u=function(e){const{sidebar:t,toc:a,children:s,...c}=e,o=t&&t.items.length>0;return n.createElement(l.A,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(i,{sidebar:t})),n.createElement("main",{className:(0,r.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(m.A,{toc:a})))))}},5776:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(6540),r=a(19),l=a(8853),s=a(9777);const c=function(e){const{tags:t,sidebar:a}=e,c=(0,s.bi)();return n.createElement(r.A,{title:c,wrapperClassName:s.GN.wrapper.blogPages,pageClassName:s.GN.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,c),n.createElement(l.A,{tags:Object.values(t)}))}},1461:(e,t,a)=>{a.d(t,{m:()=>f,A:()=>E});var n=a(6540),r=a(53),l=a(9777);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>s(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:a[a.indexOf(n)-1]??null}return a[a.length-1]}function o(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.pN)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,n.useRef)(void 0),a=o();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=c({anchorTopOffset:a.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(f,{isChild:!0,toc:e.children}))))):null}const E=function(e){let{toc:t}=e;return i(d),n.createElement("div",{className:(0,r.A)(m,"thin-scrollbar")},n.createElement(f,{toc:t}))}},3373:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(53),l=a(4676);const s="tag_WK-t",c="tagRegular_LXbV",o="tagWithCount_S5Zl";const i=function(e){const{permalink:t,name:a,count:i}=e;return n.createElement(l.A,{href:t,className:(0,r.A)(s,{[c]:!i,[o]:i})},a,i&&n.createElement("span",null,i))}},8853:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),r=a(3373),l=a(9777);const s={tag:"tag_7kA+"};function c(e){let{letterEntry:t}=e;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((e=>n.createElement("li",{key:e.permalink,className:s.tag},n.createElement(r.A,e))))),n.createElement("hr",null))}const o=function(e){let{tags:t}=e;const a=(0,l.QW)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((e=>n.createElement(c,{key:e.letter,letterEntry:e}))))}},2981:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(8168),r=a(6540),l=a(53),s=a(4676),c=a(9777),o=a(6025),i=a(6654);const m="footerLogoLink_94kH";var u=a(1101),d=a(6359);function f(e){let{to:t,href:a,label:l,prependBaseUrlToHref:c,...m}=e;const u=(0,o.A)(t),f=(0,o.A)(a,{forcePrependBaseUrl:!0});return r.createElement(s.A,(0,n.A)({className:"footer__link-item"},a?{href:c?f:a}:{to:u},m),a&&!(0,i.A)(a)?r.createElement("span",null,l,r.createElement(d.A,null)):l)}const E=e=>{let{sources:t,alt:a}=e;return r.createElement(u.A,{className:"footer__logo",alt:a,sources:t})};const b=function(){const{footer:e}=(0,c.pN)(),{copyright:t,links:a=[],logo:n={}}=e||{},i={light:(0,o.A)(n.src),dark:(0,o.A)(n.srcDark||n.src)};return e?r.createElement("footer",{className:(0,l.A)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},a&&a.length>0&&r.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(f,e))))):null)))),(n||t)&&r.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},n.href?r.createElement(s.A,{href:n.href,className:m},r.createElement(E,{alt:n.alt,sources:i})):r.createElement(E,{alt:n.alt,sources:i})),t?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);