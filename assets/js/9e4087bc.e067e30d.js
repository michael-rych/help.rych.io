"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3608],{3012:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(7294),l=r(4260),n=r(6742),c=r(4973);function o(e){var t=e.year,r=e.posts;return a.createElement(a.Fragment,null,a.createElement("h3",null,t),a.createElement("ul",null,r.map((function(e){return a.createElement("li",{key:e.metadata.date},a.createElement(n.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var t=e.years;return a.createElement("section",{className:"margin-vert--lg"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},a.createElement(o,e))})))))}function m(e){var t,r,n=e.archive,o=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),m=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=(t=n.blogPosts,r=t.reduceRight((function(e,t){var r=t.metadata.date.split("-")[0],a=e.get(r)||[];return e.set(r,[t].concat(a))}),new Map),Array.from(r,(function(e){return{year:e[0],posts:e[1]}})));return a.createElement(l.Z,{title:o,description:m},a.createElement("header",{className:"hero hero--primary"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},o),a.createElement("p",{className:"hero__subtitle"},m))),a.createElement("main",null,i.length>0&&a.createElement(s,{years:i})))}},546:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(7462),l=r(3366),n=r(7294),c=r(6010),o=r(6742),s=r(941),m=r(4996),i=r(3919),u="footerLogoLink_qW4Z",f=r(8465),h=r(8617),d=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,r=e.href,c=e.label,s=e.prependBaseUrlToHref,u=(0,l.Z)(e,d),f=(0,m.Z)(t),E=(0,m.Z)(r,{forcePrependBaseUrl:!0});return n.createElement(o.Z,(0,a.Z)({className:"footer__link-item"},r?{href:s?E:r}:{to:f},u),r&&!(0,i.Z)(r)?n.createElement("span",null,c,n.createElement(h.Z,null)):c)}var v=function(e){var t=e.sources,r=e.alt;return n.createElement(f.Z,{className:"footer__logo",alt:r,sources:t})};var p=function(){var e=(0,s.LU)().footer,t=e||{},r=t.copyright,a=t.links,l=void 0===a?[]:a,i=t.logo,f=void 0===i?{}:i,h={light:(0,m.Z)(f.src),dark:(0,m.Z)(f.srcDark||f.src)};return e?n.createElement("footer",{className:(0,c.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(E,e))}))):null)}))),(f||r)&&n.createElement("div",{className:"footer__bottom text--center"},f&&(f.src||f.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},f.href?n.createElement(o.Z,{href:f.href,className:u},n.createElement(v,{alt:f.alt,sources:h})):n.createElement(v,{alt:f.alt,sources:h})),r?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null))):null}}}]);