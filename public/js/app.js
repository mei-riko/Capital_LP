!function(e){var t={};function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){e.exports=jQuery},function(e,t,a){"use strict";var o,n=a(0),l=(o=n)&&o.__esModule?o:{default:o};a(2),a(3),a(4),a(5),a(6),a(7),(0,l.default)((function(){(0,l.default)(document).on("click",'[data-trigger="scroll"]',(function(e){return e.preventDefault(),(0,l.default)("html, body").animate({scrollTop:(0,l.default)((0,l.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,l.default)(document).on("click",'[data-trigger="modal"]',(function(e){return e.preventDefault(),(0,l.default)("html, body").animate({scrollTop:(0,l.default)((0,l.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,l.default)(document).on("click",'[data-trigger="click"]',(function(e){e.preventDefault()}))}))},function(e,t,a){"use strict";var o,n=a(0),l=(o=n)&&o.__esModule?o:{default:o};(0,l.default)((function(){var e=(0,l.default)(".figure_one-desktop"),t=(0,l.default)(".figure_one-mobile"),a=e,o=!1,n=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;(0,l.default)(window).width()>768||!window.matchMedia("screen and (max-width: 768px)").matches?(r=195,a=e):(r=130,a=t),n<r?o=!1:(o=!0,a.addClass("figure--stop"));var s=0,r=0,i=Math.ceil(s-n),d=0;(0,l.default)(window).on("scroll",(function(u){var f=(0,l.default)(this).scrollTop();(0,l.default)(window).width()>768||!window.matchMedia("screen and (max-width: 768px)").matches?(r=195,a=e):(r=130,a=t),console.log("NextScroll: "+f+"; CurrentScroll: "+d),n=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,s=Math.ceil(a.offset().top),s+r,i=Math.ceil(s-n),f>d?(i>=0&&n<=r&&!o&&(a.removeClass("figure--stop"),a.attr("transform","translate(0,"+n+")")),i>=0&&n>r&&!o&&(o=!0,a.attr("transform","translate(0,"+r+")"),(0,l.default)(".figure").each((function(){(0,l.default)(this).addClass("color")})))):(i>=0&&n<r&&!a.hasClass("figure--stop")&&a.attr("transform","translate(0,"+n+")"),i>=0&&n<r&&o&&(o=!1,(0,l.default)(".figure").each((function(){(0,l.default)(this).removeClass("color")})))),d=f}))}))},function(e,t,a){"use strict";var o,n=a(0),l=(o=n)&&o.__esModule?o:{default:o};(0,l.default)((function(){(0,l.default)(".header__toggle-item").on("click",(function(){(0,l.default)(this).addClass("header__toggle-item--active"),(0,l.default)(".header__nav").toggleClass("header__nav--active"),(0,l.default)("body").toggleClass("hidden"),(0,l.default)(".overlay").toggleClass("overlay--active")}))})),(0,l.default)(document).on("mouseup",(function(e){(0,l.default)(".header__nav").is(e.target)||!(0,l.default)("body").hasClass("hidden")||(0,l.default)(".header__toggle-item").is(e.target)||((0,l.default)(".header__nav").removeClass("header__nav--active"),(0,l.default)("body").removeClass("hidden"),(0,l.default)(".overlay").removeClass("overlay--active"))}))},function(e,t,a){"use strict";var o,n=a(0),l=(o=n)&&o.__esModule?o:{default:o};(0,l.default)((function(){(0,l.default)(".item").mouseenter((function(e){var t=(0,l.default)(this).find(".item__open-modal"),a=(0,l.default)(this).find(".btn_action"),o=(0,l.default)(this).find(".btn_secondary");t.hasClass("item_preipo__open-modal")&&t.addClass("item_preipo__open-modal--hover"),t.hasClass("item_preipo-soon__open-modal")&&t.addClass("item_preipo-soon__open-modal--hover"),t.hasClass("item_preipo-prev__open-modal")&&t.addClass("item_preipo-prev__open-modal--hover"),a.addClass("btn_action--hover"),o.addClass("btn_secondary--hover")})).mouseleave((function(e){(0,l.default)(".item_preipo__open-modal.item_preipo__open-modal--hover").removeClass("item_preipo__open-modal--hover"),(0,l.default)(".item_preipo-soon__open-modal.item_preipo-soon__open-modal--hover").removeClass("item_preipo-soon__open-modal--hover"),(0,l.default)(".item_preipo-prev__open-modal.item_preipo-prev__open-modal--hover").removeClass("item_preipo-prev__open-modal--hover"),(0,l.default)(".btn_action.btn_action--hover").removeClass("btn_action--hover"),(0,l.default)(".btn_secondary.btn_secondary--hover").removeClass("btn_secondary--hover")}))}))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unitRegexEmail=t.unitRegexName=t.unitMaskPhone=void 0;var o,n=a(0),l=(o=n)&&o.__esModule?o:{default:o};var s=t.unitMaskPhone=function(){(0,l.default)('input[type="tel"]').inputmask({mask:"+7 (999) 999 99 99",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,l.default)(this).closest("form").addClass("error-phone"),(0,l.default)(this).addClass("input--error"),(0,l.default)(this).removeClass("input--success")},oncomplete:function(){(0,l.default)(this).closest("form").removeClass("error-phone"),(0,l.default)(this).removeClass("input--error"),(0,l.default)(this).addClass("input--success")}})};t.unitRegexName=function(){(0,l.default)('input[name="name"]').inputmask({regex:"[А-Яа-яЁёA-Za-z ]{2,20}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,l.default)(this).closest("form").addClass("error-name"),(0,l.default)(this).addClass("input--error"),(0,l.default)(this).siblings(".error_name").addClass("error").html("Укажите имя используя кириллицу"),(0,l.default)(this).removeClass("input--success")},oncomplete:function(){(0,l.default)(this).closest("form").removeClass("error-name"),(0,l.default)(this).removeClass("input--error"),(0,l.default)(this).siblings(".error_name").removeClass("error").html(""),(0,l.default)(this).addClass("input--success")}})},t.unitRegexEmail=function(){(0,l.default)('input[name="mail"]').inputmask({regex:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,20}@[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,10}.[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,6}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,l.default)(this).closest("form").addClass("error-email"),(0,l.default)(this).addClass("input--error"),(0,l.default)(this).siblings(".error_email").addClass("error").html("Укажите имя используя кириллицу"),(0,l.default)(this).removeClass("input--success")},oncomplete:function(){(0,l.default)(this).closest("form").removeClass("error-email"),(0,l.default)(this).removeClass("input--error"),(0,l.default)(this).siblings(".error_email").removeClass("error").html(""),(0,l.default)(this).addClass("input--success")}})};(0,l.default)((function(){(0,l.default)('input[type="tel"]').length>0&&s()})),(0,l.default)("input").on("keydown",(function(e){if(13===e.keyCode&&!(0,l.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,l.default)(this).blur(),!1}))},function(e,t,a){"use strict";var o,n=a(0),l=(o=n)&&o.__esModule?o:{default:o};var s=function(e){(0,l.default)(e).length>0&&(0,l.default)(e).each((function(){var e;if(e=(0,l.default)(this),(0,l.default)(e).addClass("swiper"),(0,l.default)(e).find(".content__slider-wrapper").addClass("swiper-wrapper"),(0,l.default)(e).find(".content__slider-slide").addClass("swiper-slide"),!(0,l.default)(this).hasClass("swiper-initialized"))new Swiper(this,{loop:!1,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".content__slider-next",prevEl:".content__slider-prev"},breakpoints:{577:{slidesPerView:1,spaceBetween:20},769:{slidesPerView:2,spaceBetween:20},1025:{slidesPerView:3,spaceBetween:20},1601:{slidesPerView:3,spaceBetween:60}}})}))};(0,l.default)((function(){s(".content .content__slider")})),(0,l.default)(window).on("resize",(function(){s(".content .content__slider")}))},function(e,t,a){"use strict";var o,n=a(0),l=(o=n)&&o.__esModule?o:{default:o};(0,l.default)((function(){(0,l.default)("[data-fancybox]").length>0&&(0,l.default)("[data-fancybox]").fancybox({autoFocus:!1,touch:!1}),(0,l.default)(".item.item_modal .item_modal__btn").on("click",(function(){var e=(0,l.default)(this).closest(".modal").find(".modal__form");(0,l.default)(".fancybox-slide").animate({scrollTop:(0,l.default)(document).height()},2e3),e.find("input:first-child").focus()})),(0,l.default)(".modal .modal__trigger").on("click",(function(e){e.preventDefault(),(0,l.default)(this).closest(".modal__track-container").find(".modal__track").addClass("modal__track--active")}))})),(0,l.default)(document).on("mouseup",(function(e){var t=(0,l.default)(".modal__track");t.is(e.target)||0!==t.has(e.target).length||(0,l.default)(".modal__track").removeClass("modal__track--active")}))}]);