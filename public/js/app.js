!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=jQuery},function(e,t,o){"use strict";var a,n=o(0),s=(a=n)&&a.__esModule?a:{default:a};o(2),o(3),o(4),o(5),o(6),(0,s.default)((function(){(0,s.default)(document).on("click",'[data-trigger="scroll"]',(function(e){return e.preventDefault(),(0,s.default)("html, body").animate({scrollTop:(0,s.default)((0,s.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,s.default)(document).on("click",'[data-trigger="modal"]',(function(e){return e.preventDefault(),(0,s.default)("html, body").animate({scrollTop:(0,s.default)((0,s.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,s.default)(document).on("click",'[data-trigger="click"]',(function(e){e.preventDefault()})),Fancybox.bind("[data-fancybox]",{dragToClose:!1,groupAll:!1})}))},function(e,t,o){"use strict";var a,n=o(0),s=(a=n)&&a.__esModule?a:{default:a};(0,s.default)((function(){var e=(0,s.default)(".figure_one"),t=(0,s.default)("#preipo"),o=!1,a=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,n=e.offset().top,r=t.offset().top,l=Math.ceil(n-a);a>r?(o=!0,e.attr("transform","translate(0,195)"),(0,s.default)(".figure").each((function(){(0,s.default)(this).addClass("color")})),setTimeout((function(){e.addClass("transition")}),300)):e.addClass("transition");var i=0;(0,s.default)(window).on("scroll",(function(t){var r=(0,s.default)(this).scrollTop();r>i?(a=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,n=e.offset().top,(l=Math.ceil(n-a))>=0&&l<=40&&!o&&(o=!0,e.attr("transform","translate(0,195)"),setTimeout((function(){(0,s.default)(".figure").each((function(){(0,s.default)(this).addClass("color")}))}),300))):(a=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,n=e.offset().top,(l=Math.ceil(n-a))>=60&&o&&(o=!1,e.attr("transform","translate(0,0)"),setTimeout((function(){(0,s.default)(".figure").each((function(){(0,s.default)(this).removeClass("color")}))}),300))),i=r}))}))},function(e,t,o){"use strict";var a,n=o(0),s=(a=n)&&a.__esModule?a:{default:a};(0,s.default)((function(){(0,s.default)(".header__toggle-item").on("click",(function(){(0,s.default)(this).addClass("header__toggle-item--active"),(0,s.default)(".header__nav").toggleClass("header__nav--active"),(0,s.default)("body").toggleClass("hidden"),(0,s.default)(".overlay").toggleClass("overlay--active")}))})),(0,s.default)(document).on("mouseup",(function(e){var t=(0,s.default)(".header__nav");t.is(e.target)||0!==t.has(e.target).length||!(0,s.default)("body").hasClass("hidden")||(0,s.default)(".header__toggle-item").is(e.target)||((0,s.default)(".header__nav").removeClass("header__nav--active"),(0,s.default)("body").removeClass("hidden"),(0,s.default)(".overlay").removeClass("overlay--active"))}))},function(e,t,o){"use strict";var a,n=o(0),s=(a=n)&&a.__esModule?a:{default:a};(0,s.default)((function(){(0,s.default)(".item").mouseenter((function(e){var t=(0,s.default)(this).find(".item__open-modal"),o=(0,s.default)(this).find(".btn_action"),a=(0,s.default)(this).find(".btn_secondary");t.hasClass("item_preipo__open-modal")&&t.addClass("item_preipo__open-modal--hover"),t.hasClass("item_preipo-soon__open-modal")&&t.addClass("item_preipo-soon__open-modal--hover"),t.hasClass("item_preipo-prev__open-modal")&&t.addClass("item_preipo-prev__open-modal--hover"),o.addClass("btn_action--hover"),a.addClass("btn_secondary--hover")})).mouseleave((function(e){(0,s.default)(".item_preipo__open-modal.item_preipo__open-modal--hover").removeClass("item_preipo__open-modal--hover"),(0,s.default)(".item_preipo-soon__open-modal.item_preipo-soon__open-modal--hover").removeClass("item_preipo-soon__open-modal--hover"),(0,s.default)(".item_preipo-prev__open-modal.item_preipo-prev__open-modal--hover").removeClass("item_preipo-prev__open-modal--hover"),(0,s.default)(".btn_action.btn_action--hover").removeClass("btn_action--hover"),(0,s.default)(".btn_secondary.btn_secondary--hover").removeClass("btn_secondary--hover")}))}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unitRegexEmail=t.unitRegexName=t.unitMaskPhone=void 0;var a,n=o(0),s=(a=n)&&a.__esModule?a:{default:a};var r=t.unitMaskPhone=function(){(0,s.default)('input[type="tel"]').inputmask({mask:"+9 999 999 99 99",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,s.default)(this).closest("form").addClass("error-phone"),(0,s.default)(this).addClass("input--error"),(0,s.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер"),(0,s.default)(this).removeClass("input--success")},oncomplete:function(){(0,s.default)(this).closest("form").removeClass("error-phone"),(0,s.default)(this).removeClass("input--error"),(0,s.default)(this).siblings(".error_phone").removeClass("error").html(""),(0,s.default)(this).addClass("input--success")}})},l=t.unitRegexName=function(){(0,s.default)('input[name="name"]').inputmask({regex:"[А-Яа-яЁё]{2,20}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,s.default)(this).closest("form").addClass("error-name"),(0,s.default)(this).addClass("input--error"),(0,s.default)(this).siblings(".error_name").addClass("error").html("Укажите имя используя кириллицу"),(0,s.default)(this).removeClass("input--success")},oncomplete:function(){(0,s.default)(this).closest("form").removeClass("error-name"),(0,s.default)(this).removeClass("input--error"),(0,s.default)(this).siblings(".error_name").removeClass("error").html(""),(0,s.default)(this).addClass("input--success")}})},i=t.unitRegexEmail=function(){(0,s.default)('input[name="mail"]').inputmask({regex:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,20}@[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,10}.[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,6}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,s.default)(this).closest("form").addClass("error-email"),(0,s.default)(this).addClass("input--error"),(0,s.default)(this).siblings(".error_email").addClass("error").html("Укажите имя используя кириллицу"),(0,s.default)(this).removeClass("input--success")},oncomplete:function(){(0,s.default)(this).closest("form").removeClass("error-email"),(0,s.default)(this).removeClass("input--error"),(0,s.default)(this).siblings(".error_email").removeClass("error").html(""),(0,s.default)(this).addClass("input--success")}})};(0,s.default)((function(){(0,s.default)('input[type="tel"]').length>0&&r(),(0,s.default)('input[name="name"]').length>0&&l(),(0,s.default)('input[name="mail"]').length>0&&i()})),(0,s.default)("input").on("keydown",(function(e){if(13===e.keyCode&&!(0,s.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,s.default)(this).blur(),!1}))},function(e,t,o){"use strict";var a,n=o(0),s=(a=n)&&a.__esModule?a:{default:a};var r=function(e){(0,s.default)(e).length>0&&((0,s.default)(window).width()<769||window.matchMedia("screen and (max-width: 768x)").matches?(0,s.default)(e).each((function(){var e;if(e=(0,s.default)(this),(0,s.default)(e).addClass("swiper"),(0,s.default)(e).find(".content__slider-wrapper").addClass("swiper-wrapper"),(0,s.default)(e).find(".content__slider-slide").addClass("swiper-slide"),console.log((0,s.default)(this).hasClass("swiper-initialized")),!(0,s.default)(this).hasClass("swiper-initialized"))new Swiper(this,{loop:!1,slidesPerView:1,spaceBetween:10,breakpoints:{576:{spaceBetween:20}}})})):(0,s.default)(e).each((function(){var e;(0,s.default)(this).hasClass("swiper-initialized")&&this.swiper.destroy(!0,!0),e=(0,s.default)(this),(0,s.default)(e).removeClass("swiper"),(0,s.default)(e).find(".content__slider-wrapper").removeClass("swiper-wrapper"),(0,s.default)(e).find(".content__slider-slide").removeClass("swiper-slide")})))};(0,s.default)((function(){r(".content .content__slider")})),(0,s.default)(window).on("resize",(function(){r(".content .content__slider")}))}]);