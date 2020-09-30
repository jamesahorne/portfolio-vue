(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);_&&_(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var _=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("main",{staticClass:"l-main"},[a("Home"),a("About"),a("Technologies"),a("Projects"),a("Cv"),a("Contact")],1),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("Brand"),a("Nav")],1)},r=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand"},[a("a",{staticClass:"brand__link",attrs:{href:"https://www.jamesahorne.dev"}},[t._v("james"),a("span",{staticClass:"brand__link--highlighted"},[t._v("a")]),t._v("horne"),a("span",{staticClass:"brand__link--highlighted brand__link--colour"},[t._v(".")]),t._v("dev")])])}],_={name:"Brand"},u=_,d=a("2877"),v=Object(d["a"])(u,c,l,!1,null,null,null),m=v.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav"},[a("ul",{staticClass:"nav__list"},[a("li",{staticClass:"nav__item nav__item--home"},[a("a",{staticClass:"nav__link",attrs:{href:"#home"}},[t._v("Home")])]),a("li",{staticClass:"nav__item nav__item--about"},[a("a",{staticClass:"nav__link",attrs:{href:"#about"}},[t._v("About")])]),a("li",{staticClass:"nav__item nav__item--projects"},[a("a",{staticClass:"nav__link",attrs:{href:"#projects"}},[t._v("projects")])]),a("li",{staticClass:"nav__item nav__item--cv"},[a("a",{staticClass:"nav__link",attrs:{href:"#cv"}},[t._v("CV")])]),a("li",{staticClass:"nav__item nav__item--contact"},[a("a",{staticClass:"nav__link",attrs:{href:"#contact"}},[t._v("Contact")])])])])}],f={name:"Nav"},g=f,b=Object(d["a"])(g,p,h,!1,null,null,null),C=b.exports,y={name:"Header",components:{Brand:m,Nav:C}},w=y,x=Object(d["a"])(w,o,r,!1,null,null,null),j=x.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",attrs:{id:"home"}},[a("div",{staticClass:"l-spacing"},[a("h1",{staticClass:"home__title"},[a("span",{staticClass:"home__text home__text--primary"},[t._v("Hi, I'm James"),a("span",{staticClass:"home__text--full-stop"},[t._v(".")])]),a("span",{staticClass:"home__block home__block--primary"}),a("span",{staticClass:"home__text home__text--secondary"},[t._v("I build websites"),a("span",{staticClass:"home__text--full-stop"},[t._v(".")])]),a("span",{staticClass:"home__block home__block--secondary"})])])])}],D={name:"Home"},I=D,S=Object(d["a"])(I,k,E,!1,null,null,null),O=S.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"about",attrs:{id:"about"}},[a("div",{staticClass:"l-spacing"},[a("h2",{staticClass:"u-heading-1"},[t._v("Who am I?")]),a("p",{staticClass:"u-text"},[t._v(" Hi, I'm James. I build websites and I like being creative with code. ")]),a("p",{staticClass:"u-text"},[t._v(" After finishing my Diploma in Software Development in 2019, I spent 6 months working as a web developer for a small agency building front-end solutions. ")]),a("p",{staticClass:"u-text"},[t._v(" Now I'm looking for my next role as a front-end developer. I'm familiar with React and Vue and am practising my React skills while looking for work. I have some backend knowledge/experience too. ")]),a("p",{staticClass:"u-text u-text--highlighted"},[t._v(" In my free time I'm a keen musician, having played acoustic guitar for over a decade and performing at various events. I also sing and play piano too. ")])])])}],$={name:"About"},L=$,H=Object(d["a"])(L,A,N,!1,null,null,null),P=H.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"technologies"},[a("div",{staticClass:"l-spacing"},[a("h2",{staticClass:"u-heading-1"},[t._v("What are my tools and tech?")]),t._m(0),a("div",{staticClass:"technologies__accordion"},[a("Accordion",{attrs:{technologies:t.technologies}})],1)])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"u-text"},[t._v(" Here's a list of some the main tools and tech that I use. "),a("br"),t._v(" For more info see my CV. ")])}],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion",attrs:{id:"accordion"}},[t._l(t.technologies,(function(e){return a("div",{key:"accordion__technology--"+e.id,staticClass:"accordion__section"},[a("h3",{staticClass:"accordion__heading"},[a("button",{staticClass:"accordion__button",attrs:{id:"accordion__button--"+e.id,"aria-expanded":"false","aria-controls":"accordion__panel--"+e.id}},[t._v(" "+t._s(e.heading)+" ")])]),a("div",{staticClass:"accordion__panel",attrs:{id:"accordion__panel--"+e.id,role:"region","aria-labelledby":"accordion__button--"+e.id}},[a("p",{staticClass:"accordion__contents"},[t._v(t._s(e.contents))])])])})),a("p",{staticClass:"accordion__description"},[t._v("Click on a technology for more info.")])],2)},M=[],V=a("b85c"),F={name:"Accordion",props:["technologies"],mounted:function(){for(var t=document.getElementsByClassName("accordion__button"),e=document.getElementsByClassName("accordion__button accordion__button--is-active"),a=t[0],s=a.scrollHeight,i=0;i<t.length;i++)t[i].addEventListener("click",(function(){var t=this.classList.contains("accordion__button--is-active"),i=this.parentNode.parentNode,n=this.parentNode.nextElementSibling,o=e[0]||a,r=o.parentNode.parentNode,c=o.parentNode.nextElementSibling,l=document.getElementsByClassName("accordion__border");t?(o.classList.remove("accordion__button--is-active"),o.setAttribute("aria-expanded","false"),c.style.maxHeight=null,r.style.height=s+"px"):(o.classList.remove("accordion__button--is-active"),c.style.maxHeight=null,r.style.height=s+"px",o.setAttribute("aria-expanded","false"),this.classList.toggle("accordion__button--is-active"),this.setAttribute("aria-expanded","true"),n.style.maxHeight=n.scrollHeight+24+"px",i.style.height=n.scrollHeight+s+"px");var _,u=Object(V["a"])(l);try{for(u.s();!(_=u.n()).done;){var d=_.value;d.style.height=s-32+"px"}}catch(v){u.e(v)}finally{u.f()}}))}},J=F,U=Object(d["a"])(J,R,M,!1,null,null,null),W=U.exports,G={name:"Techonologies",components:{Accordion:W},data:function(){return{technologies:[{id:"react",heading:"React.js",contents:"I'm learning React while looking for work. For my first project, I'm rebuilding my portfolio site with React, so watch this space."},{id:"vue",heading:"Vue.js",contents:"This site is built with Vue! This will become a secondary version of my portfolio site as the main version, once built, will be built with React."},{id:"pattern-lab",heading:"Pattern Lab",contents:"I build a pattern library for every major project I do, using Gulp and Browsersync for tasks such as watching files and compiling SCSS into minified, autoprefixed CSS."}]}}},K=G,q=Object(d["a"])(K,B,T,!1,null,null,null),z=q.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"projects",attrs:{id:"projects"}},[a("div",{staticClass:"l-spacing"},[a("h2",{staticClass:"u-heading-1"},[t._v("Enjoy my previous work:")]),a("div",{staticClass:"projects__grid projects__grid--1"},t._l(t.projects,(function(e){return a("div",{key:"project__"+e.id,staticClass:"project-card"},[a("h3",{staticClass:"u-heading-3 u-heading-3--center"},[t._v(t._s(e.heading))]),a("figure",{staticClass:"project-card__figure"},[a("picture",[a("source",{attrs:{srcset:t.getProjectImage(e.image_webp),media:"(min-width: 320px)",type:"image/webp"}}),a("img",{staticClass:"project-card__image",attrs:{src:t.getProjectImage(e.image_other),alt:"A screenshot of "+e.image_alt}})]),a("figcaption",{staticClass:"project-card__caption"},[a("p",{staticClass:"u-text u-text--center"},[t._v(t._s(e.description))]),a("p",{staticClass:"u-text u-text--center"},[a("a",{staticClass:"project-card__link",attrs:{href:e.link}},[t._v("See for yourself")])])])])])})),0)])])},X=[],Y={name:"Projects",data:function(){return{projects:[{id:"my-portfolio",heading:"My portfolio site",description:"This is my personal site. It doesn't do very much, but it looks nice!",image_webp:"my-portfolio.webp",image_other:"my-portfolio.png",image_alt:"my portfolio site",link:"https://www.jamesahorne.dev"}]}},methods:{getProjectImage:function(t){return a("8763")("./".concat(t))}}},Z=Y,tt=Object(d["a"])(Z,Q,X,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"cv",attrs:{id:"cv"}},[a("div",{staticClass:"l-spacing"},[a("h2",{staticClass:"u-heading-1"},[t._v("Wanna see my CV?")]),a("div",{staticClass:"cv__main"},[t._m(0),a("div",{staticClass:"cv__layout"},[a("section",{staticClass:"cv__primary"},[t._m(1),a("article",{staticClass:"cv__section cv__section--projects"},[a("h3",{staticClass:"cv__heading-1"},[t._v("Projects")]),a("div",{staticClass:"cv__content"},[a("ul",{staticClass:"cv__list cv__list--bullets"},t._l(t.projects,(function(e,s){return a("li",{key:e.id+s},[t._v(t._s(e.item))])})),0)])]),a("article",{staticClass:"cv__section cv__section--experience"},[a("h3",{staticClass:"cv__heading-1"},[t._v("Experience")]),a("div",{staticClass:"cv__content"},t._l(t.experiences,(function(e){return a("article",{key:"cv__experience--"+e.id,staticClass:"cv__experience-block"},[a("h4",{staticClass:"cv__heading-2"},[t._v(" "+t._s(e.title)+" "),e.endDate?a("span",{staticClass:"cv__date"},[t._v(t._s(e.startDate)+" - "+t._s(e.endDate))]):a("span",{staticClass:"cv__date"},[t._v(t._s(e.startDate)+" - present")])]),a("h5",{staticClass:"cv__heading-3"},[t._v(t._s(e.company))]),a("p",[t._v(t._s(e.description))]),a("ul",{staticClass:"cv__list cv__list--bullets"},t._l(e.details,(function(e){return a("li",{key:"cv__experience-details--"+e.id},[t._v(t._s(e.item))])})),0)])})),0)])]),a("section",{staticClass:"cv__secondary"},[t._m(2),a("article",{staticClass:"cv__section cv__section--skills"},[a("h3",{staticClass:"cv__heading-1"},[t._v("Skills")]),a("div",{staticClass:"cv__content"},[a("ul",{staticClass:"cv__list cv__list--skills"},t._l(t.skills,(function(e){return a("li",{key:"cv__skill--"+e.id},[t._v(" "+t._s(e.item)+" "),a("div",{staticClass:"cv__star"},t._l(e.starNumber,(function(s){return a("span",{key:"cv__skill-star--"+e.id+s},[t._v("★")])})),0)])})),0)])]),t._m(3)])])])])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"cv__header"},[a("h1",{staticClass:"cv__title"},[t._v("James Horne")]),a("h2",{staticClass:"cv__subtitle"},[t._v("Front-End Developer")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"cv__section cv__section--summary"},[a("h3",{staticClass:"cv__heading-1"},[t._v("Summary")]),a("div",{staticClass:"cv__content"},[a("p",[t._v("Driven and enthusiastic front-end developer with a desire to deliver a high-quality front-end, looking to gain experience and keep learning and growing.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"cv__section cv__section--contact"},[a("h3",{staticClass:"cv__heading-1"},[t._v("Contact")]),a("div",{staticClass:"cv__content"},[a("ul",{staticClass:"cv__list cv__list--icons"},[a("li",{staticClass:"cv__portfolio"},[a("a",{staticClass:"u-link u-link--cv",attrs:{href:"https://www.jamesahorne.dev"}},[t._v("www.jamesahorne.dev")])]),a("li",{staticClass:"cv__linked-in"},[a("a",{staticClass:"u-link u-link--cv",attrs:{href:"https://www.linkedin.com/in/jamesahorne/"}},[t._v("jamesahorne")])]),a("li",{staticClass:"cv__github"},[a("a",{staticClass:"u-link u-link--cv",attrs:{href:"https://github.com/jamesahorne/"}},[t._v("jamesahorne")])]),a("li",{staticClass:"cv__email"},[a("a",{staticClass:"u-link u-link--cv",attrs:{href:"mailto:james99h39@gmail.com"}},[t._v("james99h39@gmail.com")])]),a("li",{staticClass:"cv__phone"},[t._v("07531 180950")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"cv__section cv__section--education"},[a("h3",{staticClass:"cv__heading-1"},[t._v("Education")]),a("div",{staticClass:"cv__content"},[a("ul",{staticClass:"cv__list"},[a("li",[t._v("Diploma in Software Development")]),a("li",{staticClass:"cv__sublist"},[t._v(" A Levels "),a("ul",[a("li",[t._v("A (maths)")]),a("li",[t._v("B (further maths)")]),a("li",[t._v("C (biology)")])])]),a("li",{staticClass:"cv__sublist"},[t._v(" GCSEs "),a("ul",[a("li",[t._v("7 As")]),a("li",[t._v("4 Bs")])])])])])])}],it={name:"Cv",data:function(){return{projects:[{id:Date.now(),item:"My portfolio site is made with Vue, which I use for list rendering and passing data with props"},{id:Date.now(),item:"I built a todo app in Vue, with full CRUD functionality"},{id:Date.now(),item:"I made a pattern library for my portfolio site with Pattern Lab. I also used Gulp and Browsersync"}],experiences:[{id:Date.now(),title:"Web developer",company:"Daughter",startDate:"Sep 19",endDate:"Mar 20",description:"Front-end builds, usually in the form of a pattern library.",details:[{id:Date.now(),item:"Build the frontend for a charity whose Twitter hashtag reached #5 in the UK on their fundraiser's launch day"},{id:Date.now()+1,item:"Work on ongoing development for one of the UK's leading car leasing companies"},{id:Date.now()+2,item:"Lead small and medium-size projects"},{id:Date.now()+3,item:"Support and liaise with clients"},{id:Date.now()+4,item:"Agile development"},{id:Date.now()+5,item:"Use Trello and Jira for project management"}]}],skills:[{id:Date.now(),item:"HTML & CSS",starNumber:4},{id:Date.now()+1,item:"JavaScript",starNumber:3},{id:Date.now()+2,item:"SASS (SCSS)",starNumber:3},{id:Date.now()+3,item:"REST APIs",starNumber:3},{id:Date.now()+4,item:"Git",starNumber:3},{id:Date.now()+5,item:"React",starNumber:2},{id:Date.now()+6,item:"Vue",starNumber:2},{id:Date.now()+7,item:"jQuery",starNumber:2}]}}},nt=it,ot=Object(d["a"])(nt,at,st,!1,null,null,null),rt=ot.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"contact",attrs:{id:"contact"}},[a("div",{staticClass:"l-spacing"},[a("h2",{staticClass:"u-heading-1"},[t._v("Let's chat!")]),a("p",{staticClass:"u-text"},[t._v(" If you're interested in a conversation, "),a("a",{staticClass:"u-link",attrs:{href:"mailto:james99h39@gmail.com"}},[t._v("email me")]),t._v(". I'm looking for a "),a("button",{staticClass:"contact__role",attrs:{id:"contact__role","aria-expanded":"false","aria-controls":"contact__role-details"}},[t._v(" permanent role ")]),t._v(". "),a("span",{staticClass:"contact__role-details",attrs:{id:"contact__role-details",role:"region","aria-labelledby":"contact__role"}},[a("span",[t._v("Junior front-end developer, around the Reading area.")])])])])])}],_t={name:"Contact",mounted:function(){var t=document.getElementById("contact__role").parentNode,e=document.getElementById("contact__role");t.style.position="relative",e.addEventListener("focus",(function(){e.setAttribute("aria-expanded","true")})),e.addEventListener("mouseover",(function(){e.setAttribute("aria-expanded","true")})),e.addEventListener("focusout",(function(){e.setAttribute("aria-expanded","false")})),e.addEventListener("mouseout",(function(){e.setAttribute("aria-expanded","false")}))}},ut=_t,dt=Object(d["a"])(ut,ct,lt,!1,null,null,null),vt=dt.exports,mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer",attrs:{id:"footer","aria-expanded":"false","aria-controls":"footer__info",tabindex:"0"}},[a("div",{staticClass:"footer__content"},[a("span",[t._v("©")]),a("p",{attrs:{id:"footer__info",role:"region","aria-labelledby":"footer"}},[t._v(" Copyright © 2020 jamesahorne.dev ")])])])}],ht={name:"Footer",mounted:function(){var t=document.getElementById("footer");t.addEventListener("focus",(function(){t.setAttribute("aria-expanded","true")})),t.addEventListener("mouseover",(function(){t.setAttribute("aria-expanded","true")})),t.addEventListener("focusout",(function(){t.setAttribute("aria-expanded","false")})),t.addEventListener("mouseout",(function(){t.setAttribute("aria-expanded","false")}))}},ft=ht,gt=Object(d["a"])(ft,mt,pt,!1,null,null,null),bt=gt.exports,Ct={name:"App",components:{Header:j,Home:O,About:P,Technologies:z,Projects:et,Cv:rt,Contact:vt,Footer:bt}},yt=Ct,wt=(a("5c0b"),Object(d["a"])(yt,i,n,!1,null,null,null)),xt=wt.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(xt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},8763:function(t,e,a){var s={"./my-portfolio.png":"9ba8","./my-portfolio.webp":"88de"};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="8763"},"88de":function(t,e,a){t.exports=a.p+"img/my-portfolio.fbd0fab3.webp"},"9ba8":function(t,e,a){t.exports=a.p+"img/my-portfolio.6b709c21.png"},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.57d3ca1d.js.map