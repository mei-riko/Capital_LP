!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e){t.exports=jQuery},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.unitRegexEmail=e.unitRegexName=e.unitMaskPhone=void 0;var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};var r=e.unitMaskPhone=function(){(0,o.default)('input[type="tel"]').inputmask({mask:"+9 999 999 99 99",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-phone"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-phone"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_phone").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})},l=e.unitRegexName=function(){(0,o.default)('input[name="name"]').inputmask({regex:"[А-Яа-яЁё]{2,20}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-name"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_name").addClass("error").html("Укажите имя используя кириллицу"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-name"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_name").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})},d=e.unitRegexEmail=function(){(0,o.default)('input[name="mail"]').inputmask({regex:"[0-9A-Za-z!#$.%&'*+/=?^_`{|}~-]{2,20}@[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,10}.[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,6}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-email"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_email").addClass("error").html("Укажите имя используя кириллицу"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-email"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_email").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})};(0,o.default)((function(){(0,o.default)('input[type="tel"]').length>0&&r(),(0,o.default)('input[name="name"]').length>0&&l(),(0,o.default)('input[name="mail"]').length>0&&d()})),(0,o.default)("input").on("keydown",(function(t){if(13===t.keyCode&&!(0,o.default)(this).inputmask("isComplete"))return t.preventDefault(),(0,o.default)(this).blur(),!1}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};a(1),a(3),a(4),a(5),a(6),a(7),a(8),(0,o.default)((function(){(0,o.default)(document).on("click",'[data-trigger="scroll"]',(function(t){return t.preventDefault(),(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,o.default)(document).on("click",'[data-trigger="click"]',(function(t){t.preventDefault()})),(0,o.default)(".heading-screen .heading-screen__col .btn").mouseenter((function(t){(0,o.default)(this).parent().find(".heading-screen__card").find(".item").addClass("item--hover")})).mouseleave((function(t){(0,o.default)(".item.item--hover").removeClass("item--hover")}))}))},function(t,e,a){"use strict";var i,n=a(0);(0,((i=n)&&i.__esModule?i:{default:i}).default)(document).on("mouseup",(function(t){}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i},r=a(1);(0,o.default)((function(){!function t(){(0,o.default)('a[data-loader="ajax"]').click((function(e){e.preventDefault();var a=(0,o.default)(this),i=a.attr("href"),n=a.data("target");return(0,o.default)(n).load(i,t),!1})),(0,o.default)('input[type="tel"]').length>0&&(0,r.unitMaskPhone)()}()}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initCompanyPart=function(){window.drawActiveCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__title.item_company__subtotal").empty().html("$"+e.priceAtStart.usd);var i=parseFloat(e.totalAtStart.rur.replace(/[^0-9.]/g,"")),n=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(i).toFixed(2));a.find(".item__title.item_company__total .item__value").empty().html(n)}},window.loadNextCompanies=function(){for(var t=window.companydata.active,e=[],a=0;a<window.companydata.available.length;a++)t.includes(a)||e.push(a);!function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}}(e),window.companydata.active=e.slice(0,2),drawActiveCompanies()},window.initNextCompany=function(){(0,o.default)(".nextcompany").click((function(t){return t.preventDefault(),loadNextCompanies(),!1}))},window.getTotalSharesRur=function(){for(var t=0,e=0;e<window.companydata.active.length;e++){var a=""+window.companydata.available[window.companydata.active[e]].totalAtStart.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(t).toFixed(2))},window.showTotalSharesRur=function(t){(0,o.default)(t).empty().html(window.getTotalSharesRur())},window.showCurrentCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company.item_company-inside[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__subtotal").empty().html("$"+e.priceAtStart.usd)}},window.showLostProfitRur=function(t){for(var e=0,a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]],n=""+i.sumPricesRUR[i.sumPricesRUR.length-1][1];e+=parseFloat(n.replace(/[^0-9.]/g,""))}var r=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(e).toFixed(2));(0,o.default)(t).empty().html(r)};try{initNextCompany(),loadNextCompanies(),drawActiveCompanies()}catch(t){}},(0,o.default)(window.initCompanyPart)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initProductPart=function(){window.drawActiveProducts=function(){for(var t=0;t<window.productdata.active.length;t++){var e=window.productdata.available[window.productdata.active[t]],a=(0,o.default)(".item.item_product[data-id="+t+"]").first();a.find(".item_product__type").empty().html(e.type),a.find(".item_product__name").empty().html(e.name),a.find(".item_product__img img").attr("src",e.icon),a.find(".item__title.item_product__price .item__value").empty().html(e.price.rur)}},window.loadNextProducts=function(){for(var t=window.productdata.active,e=t[0],a=0;a<t.length;a++)e<t[a]&&(e=t[a]);window.productdata.active=[];for(var i=2*window.productdata.available.length,n=e+1;n<i;n++){var o=n%window.productdata.available.length;if(t.includes(o)||window.productdata.active.push(o),window.productdata.active.length>=2)break}drawActiveProducts()},window.initNextCompany=function(){(0,o.default)(".nextproduct").click((function(t){return t.preventDefault(),loadNextProducts(),!1}))},window.getTotalProductsRur=function(){for(var t=0,e=0;e<window.productdata.active.length;e++){var a=""+window.productdata.available[window.productdata.active[e]].price.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return t},window.showTotalProductsRur=function(t){(0,o.default)(t).empty().html(window.getTotalProductsRur())};try{window.initNextCompany(),window.drawActiveProducts()}catch(t){}},(0,o.default)(window.initProductPart)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.plotImages=[],window.plotMaxYear=!1,(0,o.default)((function(){window.drawActiveStocks=function(t){for(var e=0;e<window.companydata.active.length;e++){var a=window.companydata.available[window.companydata.active[e]];console.log(e,window.companydata);var i=(0,o.default)(".stocks__company[data-id="+e+"]").first();i.find(".item_stocks__count").empty().html(a.numberOfShares+"&nbsp;шт."),i.find(".item_stocks__title").empty().html(a.shareCode),i.find(".item_stocks__subtitle").empty().html(a.name);var n=a.pricesUSD.filter((function(e){return e[0]==t}));n=n[0]?n[0][1]:a.pricesUSD[1][1],i.find(".item_stocks__title#subtotal").empty().html("$"+n);var r=a.sumPricesRUR.filter((function(e){return e[0]==t}));r=""+(r=r[0]?r[0][1]:a.sumPricesRUR[1][1]);var l=parseFloat(r.replace(/[^0-9.]/g,"")),d=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(l).toFixed(2));i.find(".item_stocks__title#total").empty().html(d)}},window.drawStocksPlot=function(t,e){for(var a=1,i=[],n=!1,r=!1,l=!1,d=!1,s=0;s<window.companydata.active.length;s++)for(var c=window.companydata.available[window.companydata.active[s]],u=0;u<c.pricesUSD.length;u++)(!1===n||n>c.pricesUSD[u][0])&&(n=c.pricesUSD[u][0]),(!1===r||r<c.pricesUSD[u][0])&&(r=c.pricesUSD[u][0]);window.plotMinYear=c.pricesUSD[0][0],!1===e&&(e=c.pricesUSD[1][0]),window.plotMaxYear=e,window.maxYearDrawn=!0;for(var f=0;f<window.companydata.active.length;f++){c=window.companydata.available[window.companydata.active[f]];for(var m=[],h=0;h<c.pricesUSD.length;h++)c.pricesUSD[h][0]<=e?((!1===l||l>c.pricesUSD[h][1])&&(l=c.pricesUSD[h][1]),(!1===d||d<c.pricesUSD[h][1])&&(d=c.pricesUSD[h][1]),m.push({X:c.pricesUSD[h][0],Y:c.pricesUSD[h][1]})):window.maxYearDrawn=!1;var p,w;(a=Math.round(100*(m[m.length-1].Y/m[m.length-2].Y-1)))>0?(p="+ "+a+"% ↑",w="#47AF34"):a<0?(p=a+"% ↓",w="#FA633F"):(p="=",w="#47AF34");i.push({values:m,icon:c.icon,dataLabel:p,dataLabelBg:w,dataLabelColor:"#FFFFFF"})}i[0].color="#5f49f2",i[1].color="#5cc728";var v=(0,o.default)(t);v.attr("width",v.parent().innerWidth()),v.attr("height",Math.round(v.attr("width")/2));for(var g=[],_=n;_<=r;_++)g.push(_);d+=100-d%100;for(var y=[],x=l=0;x<=d;x+=100)y.push(x);var b={xPadding:150,yPadding:40,xShift:-80,yShift:30,wLabel:44,hLabel:28,lineWidth:8,lineWidthAxes:4,xAxisTicks:g,yAxisTicks:y,font:"18px/18px Theinhardt Pan",dataLabelFont:"16px/2em Theinhardt Pan",maxYear:window.plotMaxYear};1*v.attr("width")<580&&(b.xPadding=80,b.yPadding=20,b.xShift=-20,b.yShift=20,b.lineWidth=6,b.lineWidthAxes=2,b.font="14px/14px Theinhardt Pan",b.dataLabelFont="12px/2em Theinhardt Pan",b.wLabel=34,b.hLabel=20),1*v.attr("width")<420&&(b.xPadding=60,b.yPadding=20,b.xShift=0,b.yShift=20,b.font="11px/11px Theinhardt Pan",b.dataLabelFont="10px/2em Theinhardt Pan",b.wLabel=26,b.hLabel=16),v.attr("width",v.parent().innerWidth()),v.attr("height",Math.round(v.attr("width")/2)),function(t,e,a){for(var i=(0,o.default)(t),n=a.xShift,r=a.yShift,l=a.yAxisTicks[a.yAxisTicks.length-1],d=!1,s=!1,c=0;c<a.xAxisTicks.length;c++)(!1===d||d>a.xAxisTicks[c])&&(d=a.xAxisTicks[c]),(!1===s||s<a.xAxisTicks[c])&&(s=a.xAxisTicks[c]);function u(t,e,n,o){return(i.width()-o-2*a.xPadding)/(n-e)*(t-e)+o+a.xPadding}function f(t,e,n,o){return i.height()-((t-e)*(i.height()-o-2*a.yPadding)/(n-e)+o+a.yPadding)}var m=i[0].getContext("2d");m.clearRect(0,0,i.width(),i.height()),m.lineWidth=a.lineWidthAxes,m.strokeStyle="#9394A0",m.font=a.font,m.textAlign="center",m.textAlign="right",m.textBaseline="middle";for(var h=0;h<a.yAxisTicks.length;h++)m.fillStyle="#9394A0",m.fillText("$"+a.yAxisTicks[h],50,f(a.yAxisTicks[h],0,l,r));for(m.textAlign="center",c=0;c<a.xAxisTicks.length;c++){a.xAxisTicks[c]==a.maxYear?(m.fillStyle="#ffffff",m.strokeStyle="#4F5074"):(m.fillStyle="#68697a",m.strokeStyle="#343550");var p=u(a.xAxisTicks[c],d,s,n);m.fillText(a.xAxisTicks[c],p,i.height()-a.yPadding+5),m.beginPath(),m.moveTo(p,f(0,0,l,r)+5),m.lineTo(p,f(l,0,l,r)-5),m.stroke()}var w=function(t,e,a,i,n,o){return function(){t.drawImage(e,a-2*o+.05*o,i+.05*o,.9*o,.9*o)}},v=a.wLabel||60,g=a.hLabel||30,_=e[0].values,y=e[1].values;_[_.length-1].Y-y[y.length-1].Y>.8*g||y[y.length-1].Y-_[_.length-1].Y>.8*g?(e[0].labelShift=0,e[1].labelShift=0):_[_.length-1].Y-y[y.length-1].Y>0?(e[0].labelShift=-.5,e[1].labelShift=.5):_[_.length-1].Y-y[y.length-1].Y<=0&&(e[0].labelShift=.5,e[1].labelShift=-.5);for(var x=0;x<e.length;x++){var b=e[x];m.strokeStyle=b.color,m.lineWidth=a.lineWidth,m.beginPath(),m.moveTo(u(b.values[0].X,d,s,n),f(b.values[0].Y,0,l,r));for(var S=1;S<b.values.length;S++)m.lineTo(u(b.values[S].X,d,s,n),f(b.values[S].Y,0,l,r));m.stroke(),m.fillStyle=b.color;for(S=0;S<b.values.length;S++){var k=u(b.values[S].X,d,s,n),P=f(b.values[S].Y,0,l,r);m.beginPath(),m.arc(k,P,4,0,2*Math.PI,!0),m.fill()}var M=b.values[b.values.length-1];m.fillStyle=b.dataLabelBg;var C=u(M.X,d,s,n)+1.5*g,A=f(M.Y,0,l,r)-g/2+b.labelShift*g;m.fillRect(C,A,v,g),m.beginPath(),m.arc(C,A+g/2,g/2,0,2*Math.PI,!0),m.fill(),m.beginPath(),m.arc(C+v,A+g/2,g/2,0,2*Math.PI,!0),m.fill(),m.fillStyle="#ffffff",m.beginPath(),m.arc(C-1.5*g,A+g/2,g/1.5,0,2*Math.PI,!0),m.fill();var D=new Image;D.src=b.icon,D.onload=w(m,D,C,A,0,g),window.plotImages.push(D),m.font=a.dataLabelFont,m.textAlign="center",m.fillStyle=b.dataLabelColor,m.fillText(b.dataLabel,C+v/2,A+g/2),m.font=a.font}}(t,i,b),window.maxYearDrawn&&((0,o.default)("#oneMoreYear").parent().addClass("d-none"),(0,o.default)("#saleShares").removeClass("btn_secondary").addClass("btn_action"),(0,o.default)(".stocks__btns").addClass("stocks__btns--last"))},window.drawChatMessages=function(t,e){if(!window.chatMessages){window.chatMessages={};for(var a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]];!1===e&&(e=i.pricesUSD[1][0]);for(var n=0;n<i.pricesUSD.length;n++)window.chatMessages[i.pricesUSD[n][0]]||(window.chatMessages[i.pricesUSD[n][0]]=[]),i.pricesUSD[n][2]&&window.chatMessages[i.pricesUSD[n][0]].push(i.pricesUSD[n][2])}for(var r in window.chatMessages){var l=window.chatMessages[r],d=Math.floor(Math.random()*l.length);window.chatMessages[r]=l[d]}}var s=(0,o.default)(t),c=s.children().first().detach();for(var u in s.empty(),window.plotMaxYear=e,window.chatMessages)if(u<=e&&window.chatMessages[u]){var f=c.clone();f.find(".stocks__message-date").empty().html(u+" год"),f.find(".stocks__message-text").empty().html(window.chatMessages[u]),s.prepend(f)}},window.activateNextBtn=function(){(0,o.default)("#oneMoreYear").click((function(t){t.preventDefault();var e=window.plotMaxYear+1;return window.drawActiveStocks(e),window.drawStocksPlot("#flot-graph",e),window.drawChatMessages(".stocks__chat-body",e),!1}))},window.showResults=function(t,e){var a=window.plotMaxYear-window.plotMinYear;1==a?(0,o.default)(t).empty().html(a+" год"):a>1&&a<=4?(0,o.default)(t).empty().html(a+" года"):(0,o.default)(t).empty().html(a+" лет");for(var i=0,n=0;n<window.companydata.active.length;n++){var r=""+window.companydata.available[window.companydata.active[n]].sumPricesRUR[0][1];i+=parseFloat(r.replace(/[^0-9.]/g,""))}for(var l,d=0,s=0;s<window.companydata.active.length;s++){l=function(t){return t[0]==window.plotMaxYear};var c=""+window.companydata.available[window.companydata.active[s]].sumPricesRUR.filter(l)[0][1];d+=parseFloat(c.replace(/[^0-9.]/g,""))}var u=new Intl.NumberFormat("ru-RU",{useGrouping:!0}).format(Number(d-i).toFixed(2));(0,o.default)(e).empty().html(u)}}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.stockChat=function(){if(0==(0,o.default)(".stocks__info").length&&0==(0,o.default)(".stocks__chat").length)return!1;if((0,o.default)(window).width()>1280||!window.matchMedia("screen and (max-width: 1280px)").matches){var t=Math.ceil((0,o.default)(".stocks__info").outerHeight(!0));t>Math.ceil((0,o.default)(".stocks__chat").outerHeight(!0))&&(0,o.default)(".stocks__chat").css("min-height",t)}else(0,o.default)(".stocks__chat").removeAttr("style")},(0,o.default)(window.stockChat),(0,o.default)(window).on("resize",(function(){(0,o.default)(".stocks__info").length>0&&(0,o.default)(".stocks__chat").length>0&&(window.stockChat(),window.drawStocksPlot("#flot-graph",window.plotMaxYear))}))}]);