!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=1)}([function(e,o){e.exports=jQuery},function(e,o,t){"use strict";var n,r=t(0),a=(n=r)&&n.__esModule?n:{default:n};t(2),t(3),(0,a.default)((function(){(0,a.default)(document).on("click",'[data-trigger="scroll"]',(function(e){return e.preventDefault(),(0,a.default)("html, body").animate({scrollTop:(0,a.default)((0,a.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,a.default)(document).on("click",'[data-trigger="click"]',(function(e){e.preventDefault()})),Fancybox.bind("[data-fancybox]",{}),(0,a.default)(".header__toggle-item").on("click",(function(){(0,a.default)(".header__nav").toggleClass("header__nav--active"),(0,a.default)("body").toggleClass("hidden"),(0,a.default)(".overlay").toggleClass("overlay--active")}))}))},function(e,o,t){"use strict";window.onload=function(){document.querySelector("body");var e=document.querySelector(".figure_one"),o=document.querySelectorAll(".figure"),t=document.querySelector(".heading-screen__title"),n=!1;window.addEventListener("scroll",(function(r){console.log(t.offsetTop);var a=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;if(a>=30&&!n)n=!0,e.setAttribute("transform","translate(0,195)"),setTimeout((function(){for(var e=0;e<o.length;e++)o[e].classList.add("color")}),300);else if(0==a&&n){n=!1;for(var l=0;l<o.length;l++)o[l].classList.remove("color");e.setAttribute("transform","translate(0,0)")}}))}},function(e,o,t){"use strict";var n,r=t(0),a=(n=r)&&n.__esModule?n:{default:n};(0,a.default)((function(){(0,a.default)(".item").mouseenter((function(e){var o=(0,a.default)(this).find(".item__open-modal"),t=(0,a.default)(this).find(".btn_action"),n=(0,a.default)(this).find(".btn_secondary");o.hasClass("item_preipo__open-modal")&&o.addClass("item_preipo__open-modal--hover"),o.hasClass("item_preipo-soon__open-modal")&&o.addClass("item_preipo-soon__open-modal--hover"),o.hasClass("item_preipo-prev__open-modal")&&o.addClass("item_preipo-prev__open-modal--hover"),t.addClass("btn_action--hover"),n.addClass("btn_secondary--hover")})).mouseleave((function(e){(0,a.default)(".item_preipo__open-modal.item_preipo__open-modal--hover").removeClass("item_preipo__open-modal--hover"),(0,a.default)(".item_preipo-soon__open-modal.item_preipo-soon__open-modal--hover").removeClass("item_preipo-soon__open-modal--hover"),(0,a.default)(".item_preipo-prev__open-modal.item_preipo-prev__open-modal--hover").removeClass("item_preipo-prev__open-modal--hover"),(0,a.default)(".btn_action.btn_action--hover").removeClass("btn_action--hover"),(0,a.default)(".btn_secondary.btn_secondary--hover").removeClass("btn_secondary--hover")}))}))}]);