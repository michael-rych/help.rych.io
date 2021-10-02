"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8610],{6165:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),s=a(4260),o=a(6742),c="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",f=a(4973);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(571),v=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,r.Z)(e,v),i=t&&t.items.length>0;return n.createElement(s.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},i&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},n.createElement(p.Z,{toc:a})))))}},4884:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(7294),n=a(6010),l=a(3905),s=a(4973),o=a(6742),c=a(4996),i=a(941),m=a(6845),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",f="blogPostDetailsFull_3kfx",h=a(7682),p="image_1yU8";var v=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:p,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},E="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",E),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,p,v,E=(p=(0,i.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,c.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,y=e.metadata,T=e.truncated,P=e.isBlogPostPage,L=void 0!==P&&P,w=y.date,C=y.formattedDate,U=y.permalink,M=y.tags,I=y.readingTime,A=y.title,R=y.editUrl,x=y.authors,B=null!=(t=k.image)?t:Z.image;return r.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=L?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:d,itemProp:"headline"},L?A:r.createElement(o.Z,{itemProp:"url",to:U},A)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},C),void 0!==I&&r.createElement(r.Fragment,null," \xb7 ",E(I))),r.createElement(b,{authors:x,assets:k}))),B&&r.createElement("meta",{itemProp:"image",content:_(B,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:m.Z},N)),(M.length>0||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[f]=L,a))},M.length>0&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":!L})},r.createElement(h.Z,{tags:M})),L&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:R})),!L&&T&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(o.Z,{to:y.permalink,"aria-label":"Read more about "+A},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(7294),n=a(6742),l=a(6165),s=a(4884),o=a(4973),c=a(941);function i(e){var t,a=e.metadata,i=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,f=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(g),tagName:d});return r.createElement(l.Z,{title:h,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:u},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),i.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(4973),l=a(7462),s=a(3366),o=a(6010),c="iconEdit_2_ui",i=["className"],m=function(e){var t=e.className,a=(0,s.Z)(e,i);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(941);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return f}});var r=a(7294),n=a(6010),l=a(941);function s(e){var t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=r.find((function(e){return s(e).top>=a}));return n?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:null!=(t=r[r.indexOf(n)-1])?t:null:r[r.length-1]}function c(){var e=(0,r.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var i=function(e){var t=(0,r.useRef)(void 0),a=c();(0,r.useEffect)((function(){var r=e.linkClassName,n=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=o({anchorTopOffset:a.current}),s=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(n)),e.classList.add(n),t.current=e}else e.classList.remove(n)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return i(d),r.createElement("div",{className:(0,n.Z)(m,"thin-scrollbar")},r.createElement(g,{toc:t}))}},7211:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(6010),l=a(6742),s="tag_1Okp",o="tagRegular_3MiF",c="tagWithCount_1HU1";var i=function(e){var t,a=e.permalink,i=e.name,m=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(s,(t={},t[o]=!m,t[c]=m,t))},i,m&&r.createElement("span",null,m))}},7682:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(6010),l=a(4973),s=a(7211),o="tags_2ga9",c="tag_11ep";function i(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:c},r.createElement(s.Z,{name:t,permalink:a}))}))))}},546:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(7462),n=a(3366),l=a(7294),s=a(6010),o=a(6742),c=a(941),i=a(4996),m=a(3919),u="footerLogoLink_qW4Z",d=a(8465),g=a(8617),f=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,a=e.href,s=e.label,c=e.prependBaseUrlToHref,u=(0,n.Z)(e,f),d=(0,i.Z)(t),h=(0,i.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,r.Z)({className:"footer__link-item"},a?{href:c?h:a}:{to:d},u),a&&!(0,m.Z)(a)?l.createElement("span",null,s,l.createElement(g.Z,null)):s)}var p=function(e){var t=e.sources,a=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};var v=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,r=t.links,n=void 0===r?[]:r,m=t.logo,d=void 0===m?{}:m,g={light:(0,i.Z)(d.src),dark:(0,i.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},n&&n.length>0&&l.createElement("div",{className:"row footer__links"},n.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(h,e))}))):null)}))),(d||a)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(o.Z,{href:d.href,className:u},l.createElement(p,{alt:d.alt,sources:g})):l.createElement(p,{alt:d.alt,sources:g})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);