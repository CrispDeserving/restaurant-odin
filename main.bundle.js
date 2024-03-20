(()=>{"use strict";var e={189:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),c=n.n(o)()(a());c.push([e.id,".ContactWrapper {\n\t--content-to-icon-gap: 1.5rem;\n\t--content-gap: calc(var(--content-to-icon-gap) * 4);\n\t--content-header-gap: calc(var(--content-gap) * 2);\n\t--content-wrapper-gap: calc(var(--content-header-gap));\n\t--icon-width: 4rem;\n\n\tdisplay: grid;\n\tgap: var(--content-header-gap);\n\tplace-content: stretch center;\n\tpadding: var(--content-wrapper-gap) 0;\n}\n\n.ContactWrapper h2 {\n\tfont-size: 3rem;\n\tjustify-self: center;\n}\n\n.Contact {\n\twidth: min(100ch, 60vw);\n\tdisplay: flex;\n\tflex-flow: column;\n\tjustify-content: space-evenly;\n\tgap: var(--content-gap);\n\tlist-style-type: none;\n}\n\n.ContactWrapper .Detail {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: var(--content-to-icon-gap);\n\ttext-align: left;\n}\n\n.Contact img {\n\twidth: var(--icon-width);\n\taspect-ratio: 1;\n}\n\n.Contact .Detail:nth-child(2n) {\n\ttext-align: right;\n\tflex-direction: row-reverse;\n}\n\n.ContactFooter {\n\tmin-height: 5rem;\n\tmin-width: 100ch;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tgap: 5rem;\n\tbackground: lightblue;\n}\n\n.ContactFooter h2,\n.ContactFooter p {\n\tdisplay: grid;\n\tplace-content: center;\n}\n",""]);const i=c},652:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),c=n.n(o)()(a());c.push([e.id,".Footer {\n\tmin-height: 5rem;\n\tmin-width: 150ch;\n\tdisplay: flex;\n\tgap: 1rem;\n\tpadding: 0.5rem;\n\talign-items: center;\n\tbackground-color: lightblue;\n}\n\n.Footer>div,\n.Footer .Detail {\n\tpadding: 0 3rem;\n}\n\n.Footer ul {\n\tflex: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tlist-style-type: none;\n}\n\n.Footer .Detail {\n\tdisplay: grid;\n\tplace-content: center;\n\ttext-align: center;\n}\n\n.Footer .Detail div {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1ch;\n}\n\n.Footer .Detail img {\n\twidth: 1rem;\n\taspect-ratio: 1;\n}\n",""]);const i=c},24:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),c=n.n(o)()(a());c.push([e.id,"#home {\n\t--home-content-gap: 0.5rem;\n\t--content-to-image-gap: calc(var(--home-content-gap) * 4);\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: var(--content-to-image-gap);\n}\n\n#home .content {\n\twidth: 30vw;\n\tdisplay: grid;\n\tgap: var(--home-content-gap);\n}\n\n#home .content h1 {\n\tfont-size: var(--heading-font-size);\n}\n\n.restaurant-image {\n\taspect-ratio: 16 / 9;\n\twidth: 30vw;\n\tdisplay: grid;\n\tbackground-color: lightblue;\n\tplace-content: center;\n}\n",""]);const i=c},576:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),c=n.n(o)()(a());c.push([e.id,".wrapper {\n\t--menu-desc-to-img-gap: 1rem;\n\t--menu-item-to-heading-gap: calc(var(--menu-desc-to-img-gap) * 2.5);\n\t--menu-gap: calc(var(--menu-item-to-heading-gap) * 5);\n\t--menu-content-padding-vertical: calc(var(--menu-gap) / 2);\n\n\tdisplay: grid;\n\tplace-content: stretch center;\n\tgap: var(--menu-gap);\n\tpadding: var(--menu-content-padding-vertical) 0;\n\tpadding-bottom: calc(var(--menu-content-padding-vertical) * 2);\n}\n\n.wrapper h2 {\n\tdisplay: grid;\n\tplace-content: center;\n\tfont-size: 3rem;\n}\n\n.Menu {\n\tdisplay: flex;\n\tflex-flow: column;\n\tgap: var(--menu-gap);\n\twidth: 60vw;\n\tlist-style-type: none;\n\tmargin: 0;\n}\n\n.Menu img {\n\twidth: 30vw;\n}\n\n.MenuItem {\n\tdisplay: grid;\n\tgap: var(--menu-item-to-heading-gap);\n}\n\n.MenuItem h3 {\n\tfont-size: 2rem;\n\ttext-align: center;\n}\n\n.MenuItem div {\n\tdisplay: flex;\n\tgap: var(--menu-desc-to-img-gap);\n\talign-items: center;\n}\n\n.MenuItem div p {\n\ttext-align: center;\n\tfont-size: 1rem;\n}\n",""]);const i=c},866:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),c=n.n(o)()(a());c.push([e.id,":root {\n\t--stone-100: #f5f5f4;\n\t--stone-200: #e7e5e4;\n\t--stone-800: #292524;\n\t--amber-200: #fde68a;\n\n\t--heading-font-size: 2rem;\n}\n\n/* TODO: Brand name letter spacing  */\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: var(--stone-800);\n\tbox-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tline-height: 1.3;\n\tfont-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\nspan,\np {\n\tline-height: 1.5;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n",""]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=a(p,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{function e(e,...t){return 0===t.length||null==t?e:t.flat().reduce(((e,t)=>(e.appendChild(t),e)),e)}function t(e,t){e.innerHTML="",e.appendChild(t)}function r(e,t){const n=e.parentNode;n.insertBefore(t,e),n.removeChild(e)}var a=n(72),o=n.n(a),c=n(825),i=n.n(c),s=n(659),l=n.n(s),d=n(56),u=n.n(d),m=n(540),p=n.n(m),h=n(113),g=n.n(h),f=n(24),y={};y.styleTagTransform=g(),y.setAttributes=u(),y.insert=l().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),o()(f.A,y),f.A&&f.A.locals&&f.A.locals;const v=n.p+"c53afbef04b7c6bf0980.jpg",b=function(){const t="replace-me",n=e(document.createElement("div"),document.createElement(t),e(document.createElement("div"),document.createElement("h1"),document.createElement("p")));n.setAttribute("id","home"),n.querySelector("div").classList.add("content");{const e=new Image;e.classList.add("restaurant-image"),e.setAttribute("src",v),e.setAttribute("alt","An image of an italian restaurant"),r(n.querySelector(`${t}`),e)}return n.querySelector("div h1").innerText="Restaurant Odin",n.querySelector("div p").innerText="Has the finest cuisine on the land. Farm fresh ingredients, good quality service, hospitable crew. Overall, a good time.",n}(),A=n.p+"cc9321f39f428ec6a96c.jpg",S=n.p+"f03d49cb34b86d50d499.jpg",w=n.p+"e6882b5c4062664b8235.jpg";var x=n(576),q={};q.styleTagTransform=g(),q.setAttributes=u(),q.insert=l().bind(null,"head"),q.domAPI=i(),q.insertStyleElement=p(),o()(x.A,q),x.A&&x.A.locals&&x.A.locals;const E=function(){const t="replace-me",n=e(document.createElement("div"),document.createElement("h2"),e(document.createElement("ul"),["Stylish Tiramisu","Marked up Lasagna","Java Baked Lobster"].map(((n,r)=>{const a=e(document.createElement("li"),document.createElement("h3"),e(document.createElement("div"),document.createElement(t),document.createElement("p")));return a.querySelector("h3").innerText=n,a.setAttribute("data-index",r),a}))));n.classList.add("wrapper"),n.querySelector("h2").innerText="Menu",n.querySelector("ul").classList.add("Menu"),n.querySelectorAll("li").forEach((e=>{e.classList.add("MenuItem")}));{const e=new Image;e.setAttribute("src",A),e.setAttribute("alt","A serving of tiramisu, topped with mint, presented in a white table in a brick wall background, with wine on the side.");const a=n.querySelector('li[data-index="0"]');r(a.querySelector(`${t}`),e),a.querySelector("p").innerText="Mint flavoured tiramisu for the daring. Balances the richness of the cream. So much cascading flavours, so much style."}{const e=new Image;e.setAttribute("src",S),e.setAttribute("alt","Delectable lasagna, topped with basil, presented in a wooden table with bread on the side.");const a=n.querySelector('li[data-index="1"]');r(a.querySelector(`${t}`),e),a.querySelector("p").innerText="Lasagna with layers of pasta complimenting each other. Pasta lined up with pasta, marked up for your pleasure."}{const e=new Image;e.setAttribute("src",w),e.setAttribute("alt","Lobster served with corn, cucumbers, tomatoes, on a illustrated plate, then placed on a wooden table.");const a=n.querySelector('li[data-index="2"]');r(a.querySelector(`${t}`),e),a.querySelector("p").innerText="Inspired by the Java, the lobster is baked with various mix-ins and delectable soup things. Very tasty and dangerous."}return n}(),T=n.p+"8c41fcd32a6421026061.svg",L=n.p+"22904118b466d50710a6.svg",D=n.p+"410a9d14144a81054233.svg";var I=n(652),C={};C.styleTagTransform=g(),C.setAttributes=u(),C.insert=l().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=p(),o()(I.A,C),I.A&&I.A.locals&&I.A.locals;const M=function(){const t="replace-me",n=e(document.createElement("footer"),e(document.createElement("div"),document.createElement(t),document.createElement("h2")),e(document.createElement("ul"),["Twitter","Contact Number","Location"].map(((n,r)=>{const a=e(document.createElement("li"),e(document.createElement("div"),document.createElement(t),document.createElement("span")),document.createElement("p"));return a.classList.add("Detail"),a.setAttribute("data-index",r),a.querySelector("div > span").classList.add("DetailName"),a.querySelector("div > span").innerText=`${n}: `,a.querySelector("p").classList.add("Details"),a}))));n.classList.add("Footer"),n.querySelector("h2").innerText="Restaurant Odin";{const e=n.querySelector('.Detail[data-index="0"]');e.querySelector(".Details").innerText="@resto-odin-unofficial";const a=new Image;a.setAttribute("src",D),a.setAttribute("alt","A brand icon from the website formerly called Twitter."),r(e.querySelector(`${t}`),a)}{const e=n.querySelector('.Detail[data-index="1"]');e.querySelector(".Details").innerText="(+00)973 786 6346 (09-RESTO-ODIN)";const a=new Image;a.setAttribute("src",L),a.setAttribute("alt","A phone icon."),r(e.querySelector(`${t}`),a)}{const e=n.querySelector('.Detail[data-index="2"]');e.querySelector(".Details").innerText="Olympus, Land of the Demigods";const a=new Image;a.setAttribute("src",T),a.setAttribute("alt","An icon signifying a pinned location in a map."),r(e.querySelector(`${t}`),a)}return n}(),F=n.p+"1ca6c258ab69c5aa417a.svg",O=n.p+"f5cc00966ad4fe5f0b25.svg";var j=n(189),$={};$.styleTagTransform=g(),$.setAttributes=u(),$.insert=l().bind(null,"head"),$.domAPI=i(),$.insertStyleElement=p(),o()(j.A,$),j.A&&j.A.locals&&j.A.locals;const _=function(){const t="replace-me",n=e(document.createElement("div"),document.createElement("h2"),e(document.createElement("ul"),["Twitter","Contact Number","Location","Images credited to","Icons credited to"].map(((n,r)=>{const a=e(document.createElement("li"),document.createElement(t),e(document.createElement("div"),document.createElement("p"),document.createElement("p")));return a.classList.add("Detail"),a.setAttribute("data-index",r),a.querySelector("p:nth-child(1)").classList.add("DetailName"),a.querySelector("p:nth-child(1)").innerText=`${n}: `,a.querySelector("p:nth-child(2)").classList.add("Details"),a}))));n.classList.add("ContactWrapper"),n.querySelector("h2").innerText="Restaurant Odin",n.querySelector("ul").classList.add("Contact");{const e=n.querySelector('.Detail[data-index="0"]');e.querySelector(".Details").innerText="@resto-odin-unofficial";const a=new Image;a.setAttribute("src",D),a.setAttribute("alt","A brand icon from the website formerly called Twitter."),r(e.querySelector(`${t}`),a)}{const e=n.querySelector('.Detail[data-index="1"]');e.querySelector(".Details").innerText="(+00)973 786 6346 (09-RESTO-ODIN)";const a=new Image;a.setAttribute("src",L),a.setAttribute("alt","A phone icon."),r(e.querySelector(`${t}`),a)}{const e=n.querySelector('.Detail[data-index="2"]');e.querySelector(".Details").innerText="Olympus, Land of the Demigods";const a=new Image;a.setAttribute("src",T),a.setAttribute("alt","An icon signifying a pinned location in a map."),r(e.querySelector(`${t}`),a)}{const e=n.querySelector('.Detail[data-index="3"]');e.querySelector(".Details").innerText="Pixabay (https://pixabay.com/)";const a=new Image;a.setAttribute("src",O),a.setAttribute("alt","An icon signifying an image."),r(e.querySelector(`${t}`),a)}{const e=n.querySelector('.Detail[data-index="4"]');e.querySelector(".Details").innerText="FeatherIcons (https://feathericons.com/)";const a=new Image;a.setAttribute("src",F),a.setAttribute("alt","An icon signifying a medal."),r(e.querySelector(`${t}`),a)}return n}(),k=function(){const t=e(document.createElement("footer"),document.createElement("h2"),document.createElement("p"),document.createElement("p"));return t.classList.add("ContactFooter"),t.querySelector("h2").innerText="Restaurant Odin",t.querySelector(":nth-child(1 of p)").innerText="We're not Hiring...",t.querySelector(":nth-child(2 of p)").innerText="But come join us!",t}();var N=n(866),P={};P.styleTagTransform=g(),P.setAttributes=u(),P.insert=l().bind(null,"head"),P.domAPI=i(),P.insertStyleElement=p(),o()(N.A,P),N.A&&N.A.locals&&N.A.locals;const R=document.querySelector("#content");window.addEventListener("DOMContentLoaded",(()=>{console.log("hello world"),function({home_btn:e,menu_btn:n,contact_btn:r,dummy_footer:a}){const o=()=>{for(const t of[e,n,r])t.classList.remove("selected")};e.addEventListener("click",(()=>{t(R,b),o(),e.classList.add("selected"),null===a.querySelector(".Footer")&&t(a,M)})),n.addEventListener("click",(()=>{t(R,E),o(),n.classList.add("selected"),null===a.querySelector(".Footer")&&t(a,M)})),r.addEventListener("click",(()=>{t(R,_),o(),r.classList.add("selected"),null!==a.querySelector(".Footer")&&t(a,k)})),R.appendChild(b),e.classList.add("selected"),t(a,M)}({home_btn:document.querySelector("#home_btn"),menu_btn:document.querySelector("#menu_btn"),contact_btn:document.querySelector("#contact_btn"),dummy_footer:document.querySelector("#dummy_footer")})}))})()})();