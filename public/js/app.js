!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e){t.exports=jQuery},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.unitRegexEmail=e.unitRegexName=e.unitMaskPhone=void 0;var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};var r=e.unitMaskPhone=function(){(0,o.default)('input[type="tel"]').inputmask({mask:"+9 999 999 99 99",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-phone"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-phone"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_phone").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})},l=e.unitRegexName=function(){(0,o.default)('input[name="name"]').inputmask({regex:"[А-Яа-яЁё]{2,20}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-name"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_name").addClass("error").html("Укажите имя используя кириллицу"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-name"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_name").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})},s=e.unitRegexEmail=function(){(0,o.default)('input[name="mail"]').inputmask({regex:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,20}@[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,10}.[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,6}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-email"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_email").addClass("error").html("Укажите имя используя кириллицу"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-email"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_email").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})};(0,o.default)((function(){(0,o.default)('input[type="tel"]').length>0&&r(),(0,o.default)('input[name="name"]').length>0&&l(),(0,o.default)('input[name="mail"]').length>0&&s()})),(0,o.default)("input").on("keydown",(function(t){if(13===t.keyCode&&!(0,o.default)(this).inputmask("isComplete"))return t.preventDefault(),(0,o.default)(this).blur(),!1}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};a(1),a(3),a(4),a(5),a(6),a(7),a(8),(0,o.default)((function(){(0,o.default)(document).on("click",'[data-trigger="scroll"]',(function(t){return t.preventDefault(),(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,o.default)(document).on("click",'[data-trigger="click"]',(function(t){t.preventDefault()})),(0,o.default)(".heading-screen .heading-screen__col .btn").mouseenter((function(t){(0,o.default)(this).parent().find(".heading-screen__card").find(".item").addClass("item--hover")})).mouseleave((function(t){(0,o.default)(".item.item--hover").removeClass("item--hover")})),window.initCompanyPart(),window.initProductPart()}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i},r=a(1);(0,o.default)((function(){!function t(){(0,o.default)('a[data-loader="ajax"]').click((function(e){e.preventDefault();var a=(0,o.default)(this),i=a.attr("href"),n=a.data("target");return(0,o.default)(n).load(i,t),!1})),(0,o.default)('input[type="tel"]').length>0&&(0,r.unitMaskPhone)(),(0,o.default)('input[name="name"]').length>0&&(0,r.unitRegexName)(),(0,o.default)('input[name="mail"]').length>0&&(0,r.unitRegexEmail)()}()}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initCompanyPart=function(){window.drawActiveCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__title.item_company__subtotal").empty().html("$"+e.priceAtStart.usd);var i=parseFloat(e.totalAtStart.rur.replace(/[^0-9.]/g,"")),n=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(i).toFixed(2));a.find(".item__title.item_company__total .item__value").empty().html(n)}},window.loadNextCompanies=function(){for(var t=window.companydata.active,e=[],a=0;a<window.companydata.available.length;a++)t.includes(a)||e.push(a);!function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}}(e),window.companydata.active=e.slice(0,2),drawActiveCompanies()},window.initNextCompany=function(){(0,o.default)(".nextcompany").click((function(t){return t.preventDefault(),loadNextCompanies(),!1}))},window.getTotalSharesRur=function(){for(var t=0,e=0;e<window.companydata.active.length;e++){var a=""+window.companydata.available[window.companydata.active[e]].totalAtStart.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(t).toFixed(2))},window.showTotalSharesRur=function(t){(0,o.default)(t).empty().html(window.getTotalSharesRur())},window.showCurrentCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company.item_company-inside[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__subtotal").empty().html("$"+e.priceAtStart.usd)}},window.showLostProfitRur=function(t){for(var e=0,a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]],n=""+i.sumPricesRUR[i.sumPricesRUR.length-1][1];e+=parseFloat(n.replace(/[^0-9.]/g,""))}var r=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(e).toFixed(2));(0,o.default)(t).empty().html(r)};try{initNextCompany(),loadNextCompanies(),drawActiveCompanies()}catch(t){}},(0,o.default)(window.initCompanyPart)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initProductPart=function(){window.drawActiveProducts=function(){for(var t=0;t<window.productdata.active.length;t++){var e=window.productdata.available[window.productdata.active[t]],a=(0,o.default)(".item.item_product[data-id="+t+"]").first();a.find(".item_product__type").empty().html(e.type),a.find(".item_product__name").empty().html(e.name),a.find(".item_product__img img").attr("src",e.icon),a.find(".item__title.item_product__price .item__value").empty().html(e.price.rur)}},window.loadNextProducts=function(){for(var t=window.productdata.active,e=t[0],a=0;a<t.length;a++)e<t[a]&&(e=t[a]);window.productdata.active=[];for(var i=2*window.productdata.available.length,n=e+1;n<i;n++){var o=n%window.productdata.available.length;if(t.includes(o)||window.productdata.active.push(o),window.productdata.active.length>=2)break}drawActiveProducts()},window.initNextCompany=function(){(0,o.default)(".nextproduct").click((function(t){return t.preventDefault(),loadNextProducts(),!1}))},window.getTotalProductsRur=function(){for(var t=0,e=0;e<window.productdata.active.length;e++){var a=""+window.productdata.available[window.productdata.active[e]].price.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return t},window.showTotalProductsRur=function(t){(0,o.default)(t).empty().html(window.getTotalProductsRur())};try{window.initNextCompany(),window.drawActiveProducts()}catch(t){}},(0,o.default)(window.initProductPart)},function(t,e,a){"use strict";var i,n,o,r,l;i=CanvasRenderingContext2D.prototype,n=document.createElement("canvas").getContext("2d"),o=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,1!==(l=(window.devicePixelRatio||1)/o)&&(function(t,e){for(var a in t)t.hasOwnProperty(a)&&e(t[a],a)}({fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all"},(function(t,e){var a;i[e]=(a=i[e],function(){var e,i,n=Array.prototype.slice.call(arguments);if("all"===t)n=n.map((function(t){return t*l}));else if(Array.isArray(t))for(e=0,i=t.length;e<i;e++)n[t[e]]*=l;return a.apply(this,n)})})),i.stroke=(r=i.stroke,function(){this.lineWidth*=l,r.apply(this,arguments),this.lineWidth/=l}),i.fillText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.fillText),i.strokeText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.strokeText)),function(t){t.getContext=function(t){return function(e){var a,i,n=t.call(this,e);return"2d"===e&&(a=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,(i=(window.devicePixelRatio||1)/a)>1&&(this.style.height=this.height+"px",this.style.width=this.width+"px",this.width*=i,this.height*=i)),n}}(t.getContext)}(HTMLCanvasElement.prototype)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.plotImages=[],window.plotMaxYear=!1,(0,o.default)((function(){window.drawActiveStocks=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".stocks__company[data-id="+t+"]").first();a.find(".item_stocks__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_stocks__title").empty().html(e.shareCode),a.find(".item_stocks__subtitle").empty().html(e.name),a.find(".item_stocks__title#subtotal").empty().html("$"+e.priceAtStart.usd);var i=parseFloat(e.totalAtStart.rur.replace(/[^0-9.]/g,"")),n=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(i).toFixed(2));a.find(".item_stocks__title#total").empty().html(n)}},window.drawActiveStocks(),window.drawStocksPlot=function(t,e){for(var a=1,i=[],n=!1,r=!1,l=!1,s=!1,d=0;d<window.companydata.active.length;d++)for(var c=window.companydata.available[window.companydata.active[d]],u=0;u<c.pricesUSD.length;u++)(!1===n||n>c.pricesUSD[u][0])&&(n=c.pricesUSD[u][0]),(!1===r||r<c.pricesUSD[u][0])&&(r=c.pricesUSD[u][0]);window.plotMinYear=c.pricesUSD[0][0],!1===e&&(e=c.pricesUSD[1][0]),window.plotMaxYear=e,window.maxYearDrawn=!0;for(var f=0;f<window.companydata.active.length;f++){c=window.companydata.available[window.companydata.active[f]];for(var m=[],p=0;p<c.pricesUSD.length;p++)c.pricesUSD[p][0]<=e?((!1===l||l>c.pricesUSD[p][1])&&(l=c.pricesUSD[p][1]),(!1===s||s<c.pricesUSD[p][1])&&(s=c.pricesUSD[p][1]),m.push({X:c.pricesUSD[p][0],Y:c.pricesUSD[p][1]})):window.maxYearDrawn=!1;var h,w;(a=Math.round(100*(m[m.length-1].Y/m[m.length-2].Y-1)))>0?(h="+ "+a+"% ↑",w="#19AE31"):a<0?(h=a+"% ↓",w="#FB6232"):(h="=",w="#19AE31");i.push({values:m,icon:c.icon,dataLabel:h,dataLabelBg:w,dataLabelColor:"#FFFFFF"})}i[0].color="#5CE21B",i[1].color="#6542D5";var v=(0,o.default)(t);v.attr("width",v.parent().innerWidth()),v.attr("height",Math.round(v.attr("width")/1.8));for(var g=[],y=n;y<=r;y++)g.push(y);s+=100-s%100;for(var _=[],x=l=0;x<=s;x+=100)_.push(x);var b={xPadding:140,xShift:-80,yPadding:40,wLabel:45,hLabel:30,lineWidth:8,lineWidthAxes:4,xAxisTicks:g,yAxisTicks:_,font:"italic 14pt sans-serif",dataLabelFont:"italic 10pt sans-serif",drawLogo:!0};1*v.attr("width")<400&&(v.attr("height",Math.round(v.attr("width"))),b.drawLogo=!1,b.xPadding=80,b.xShift=-20,b.yPadding=40,b.dataLabelFont="italic 9pt sans-serif",b.font="italic 10pt sans-serif",b.wLabel=40),function(t,e,a){for(var i=(0,o.default)(t),n=a.xShift,r=a.yAxisTicks[a.yAxisTicks.length-1],l=!1,s=!1,d=0;d<a.xAxisTicks.length;d++)(!1===l||l>a.xAxisTicks[d])&&(l=a.xAxisTicks[d]),(!1===s||s<a.xAxisTicks[d])&&(s=a.xAxisTicks[d]);function c(t,e,n,o){return(i.width()-o-2*a.xPadding)/(n-e)*(t-e)+o+a.xPadding}function u(t,e,n,o){return i.height()-((t-e)*(i.height()-o-2*a.yPadding)/(n-e)+o+a.yPadding)}var f=i[0].getContext("2d");f.clearRect(0,0,i.width(),i.height()),f.lineWidth=a.lineWidthAxes,f.strokeStyle="#343550",f.font=a.font,f.textAlign="center",f.textAlign="right",f.textBaseline="middle";for(var m=0;m<a.yAxisTicks.length;m++)f.fillStyle="#9394A0",f.fillText("$"+a.yAxisTicks[m],50,u(a.yAxisTicks[m],0,r,30));for(f.textAlign="center",d=0;d<a.xAxisTicks.length;d++){f.fillStyle="#9394A0";var p=c(a.xAxisTicks[d],l,s,n);f.fillText(a.xAxisTicks[d],p,i.height()-a.yPadding+5),f.beginPath(),f.moveTo(p,u(0,0,r,30)+5),f.lineTo(p,u(r,0,r,30)-5),f.stroke()}var h=function(t,e,a,i,n,o){return function(){t.drawImage(e,a-1.8*o,i+.08*o,.9*o,.9*o)}},w=a.wLabel||60,v=a.hLabel||30,g=e[0].values,y=e[1].values;g[g.length-1].Y-y[y.length-1].Y>.8*v||y[y.length-1].Y-g[g.length-1].Y>.8*v?(e[0].labelShift=0,e[1].labelShift=0):g[g.length-1].Y-y[y.length-1].Y>0?(e[0].labelShift=-.5,e[1].labelShift=.5):g[g.length-1].Y-y[y.length-1].Y<=0&&(e[0].labelShift=.5,e[1].labelShift=-.5);for(var _=0;_<e.length;_++){var x=e[_];f.strokeStyle=x.color,f.lineWidth=a.lineWidth,f.beginPath(),f.moveTo(c(x.values[0].X,l,s,n),u(x.values[0].Y,0,r,30));for(var b=1;b<x.values.length;b++)f.lineTo(c(x.values[b].X,l,s,n),u(x.values[b].Y,0,r,30));f.stroke(),f.fillStyle=x.color;for(b=0;b<x.values.length;b++){var k=c(x.values[b].X,l,s,n),S=u(x.values[b].Y,0,r,30);f.beginPath(),f.arc(k,S,4,0,2*Math.PI,!0),f.fill()}var P=x.values[x.values.length-1];f.fillStyle=x.dataLabelBg;var C=c(P.X,l,s,n);a.drawLogo?C+=2.5*v:C+=.8*v;var M=u(P.Y,0,r,30)-v/2+x.labelShift*v;if(f.fillRect(C,M,w,v),f.beginPath(),f.arc(C,M+v/2,v/2,0,2*Math.PI,!0),f.fill(),f.beginPath(),f.arc(C+w,M+v/2,v/2,0,2*Math.PI,!0),f.fill(),a.drawLogo){f.fillStyle="#ffffff",f.beginPath(),f.arc(C-v-10,M+v/2,v/1.5,0,2*Math.PI,!0),f.fill();var R=new Image;R.src=x.icon,R.onload=h(f,R,C,M,0,v),window.plotImages.push(R)}f.font=a.dataLabelFont,f.textAlign="center",f.fillStyle=x.dataLabelColor,f.fillText(x.dataLabel,C+w/2,M+v/2),f.font=a.font}}(t,i,b),window.maxYearDrawn&&((0,o.default)("#oneMoreYear").parent().addClass("d-none"),(0,o.default)("#saleShares").removeClass("btn_secondary").addClass("btn_action"),(0,o.default)(".stocks__btns").addClass("stocks__btns--last"))},window.drawChatMessages=function(t,e){if(!window.chatMessages){window.chatMessages={};for(var a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]];!1===e&&(e=i.pricesUSD[1][0]);for(var n=0;n<i.pricesUSD.length;n++)window.chatMessages[i.pricesUSD[n][0]]||(window.chatMessages[i.pricesUSD[n][0]]=[]),i.pricesUSD[n][2]&&window.chatMessages[i.pricesUSD[n][0]].push(i.pricesUSD[n][2])}for(var r in window.chatMessages){var l=window.chatMessages[r],s=Math.floor(Math.random()*l.length);window.chatMessages[r]=l[s]}}var d=(0,o.default)(t),c=d.children().first().detach();for(var u in d.empty(),window.plotMaxYear=e,window.chatMessages)if(u<=e&&window.chatMessages[u]){var f=c.clone();f.find(".stocks__message-date").empty().html(u+" год"),f.find(".stocks__message-text").empty().html(window.chatMessages[u]),d.prepend(f)}},window.activateNextBtn=function(){(0,o.default)("#oneMoreYear").click((function(t){t.preventDefault();var e=window.plotMaxYear+1;return window.drawStocksPlot("#flot-graph",e),window.drawChatMessages(".stocks__chat-body",e),!1}))},window.showResults=function(t,e){var a=window.plotMaxYear-window.plotMinYear;1==a?(0,o.default)(t).empty().html(a+" год"):a>1&&a<=4?(0,o.default)(t).empty().html(a+" года"):(0,o.default)(t).empty().html(a+" лет");for(var i=0,n=0;n<window.companydata.active.length;n++){var r=""+window.companydata.available[window.companydata.active[n]].sumPricesRUR[0][1];i+=parseFloat(r.replace(/[^0-9.]/g,""))}for(var l,s=0,d=0;d<window.companydata.active.length;d++){l=function(t){return t[0]==window.plotMaxYear};var c=""+window.companydata.available[window.companydata.active[d]].sumPricesRUR.filter(l)[0][1];s+=parseFloat(c.replace(/[^0-9.]/g,""))}var u=new Intl.NumberFormat("ru-RU",{useGrouping:!0}).format(Number(s-i).toFixed(2));(0,o.default)(e).empty().html(u)}}))},function(t,e,a){"use strict";var i,n=a(0);(0,((i=n)&&i.__esModule?i:{default:i}).default)(document).on("mouseup",(function(t){}))}]);