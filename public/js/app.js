!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e){t.exports=jQuery},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.unitRegexEmail=e.unitRegexName=e.unitMaskPhone=void 0;var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};var r=e.unitMaskPhone=function(){(0,o.default)('input[type="tel"]').inputmask({mask:"+7 (999) 999 99 99",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-phone"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-phone"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_phone").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})};e.unitRegexName=function(){(0,o.default)('input[name="name"]').inputmask({regex:"[А-Яа-яЁё]{2,20}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-name"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_name").addClass("error").html("Укажите имя используя кириллицу"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-name"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_name").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})},e.unitRegexEmail=function(){(0,o.default)('input[name="mail"]').inputmask({regex:"[0-9A-Za-z!#$.%&'*+/=?^_`{|}~-]{2,20}@[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,10}.[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]{2,6}",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-email"),(0,o.default)(this).addClass("input--error"),(0,o.default)(this).siblings(".error_email").addClass("error").html("Укажите имя используя кириллицу"),(0,o.default)(this).removeClass("input--success")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-email"),(0,o.default)(this).removeClass("input--error"),(0,o.default)(this).siblings(".error_email").removeClass("error").html(""),(0,o.default)(this).addClass("input--success")}})};(0,o.default)((function(){(0,o.default)('input[type="tel"]').length>0&&r()})),(0,o.default)("input").on("keydown",(function(t){if(13===t.keyCode&&!(0,o.default)(this).inputmask("isComplete"))return t.preventDefault(),(0,o.default)(this).blur(),!1}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};a(1),a(3),a(4),a(5),a(6),a(7),a(8),a(9),a(10),(0,o.default)((function(){(0,o.default)(document).on("click",'[data-trigger="scroll"]',(function(t){return t.preventDefault(),(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,o.default)(document).on("click",'[data-trigger="click"]',(function(t){t.preventDefault()})),(0,o.default)(".heading-screen .heading-screen__col .btn").mouseenter((function(t){(0,o.default)(this).parent().find(".heading-screen__card").find(".item").addClass("item--hover")})).mouseleave((function(t){(0,o.default)(".item.item--hover").removeClass("item--hover")}))}))},function(t,e,a){"use strict";var i,n=a(0);(0,((i=n)&&i.__esModule?i:{default:i}).default)(document).on("mouseup",(function(t){}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i},r=a(1);(0,o.default)((function(){window.ajaxLoaderHandler=function(e){if(e.preventDefault(),e.isPropagationStopped())return!1;e.stopPropagation();var a=(0,o.default)(this),i=a.data("href"),n=a.data("target");return(0,o.default)(n).load(i,t),!1};var t=function(){(0,o.default)('[data-loader="ajax"]').off("click",window.ajaxLoaderHandler).on("click",window.ajaxLoaderHandler),(0,o.default)('input[type="tel"]').length>0&&(0,r.unitMaskPhone)()};t()}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initCompanyPart=function(){if(!window.initCompanyPartDone){window.initCompanyPartDone=!0,window.drawActiveCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__title.item_company__subtotal").empty().html("$"+e.priceAtStart.usd);var i=parseFloat(e.totalAtStart.rur.replace(/[^0-9.]/g,"")),n=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(i).toFixed(2));a.find(".item__title.item_company__total .item__value").empty().html(n.replace(",","."))}},window.loadNextCompanies=function(){for(var t=window.companydata.active,e=[],a=0;a<window.companydata.available.length;a++)t.includes(a)||e.push(a);!function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}}(e),window.companydata.active=e.slice(0,2),console.log("maxActiveCompanies",2,"window.companydata.active",window.companydata.active),drawActiveCompanies()},window.initNextCompany=function(){(0,o.default)(document).on("click",".nextcompany",(function(t){return t.preventDefault(),console.log("$('.nextcompany').click"),loadNextCompanies(),!1}))},window.getTotalSharesRur=function(){for(var t=0,e=0;e<window.companydata.active.length;e++){var a=""+window.companydata.available[window.companydata.active[e]].totalAtStart.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(t).toFixed(2)).replace(",",".")},window.showTotalSharesRur=function(t){(0,o.default)(t).empty().html(window.getTotalSharesRur())},window.showCurrentCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company.item_company-inside[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__subtotal").empty().html("$"+e.priceAtStart.usd)}},window.showLostProfitRur=function(t){for(var e=0,a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]],n=""+i.sumPricesRUR[i.sumPricesRUR.length-1][1];e+=parseFloat(n.replace(/[^0-9.]/g,""))}var r=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(e).toFixed(2));(0,o.default)(t).empty().html(r.replace(",","."))};try{initNextCompany(),loadNextCompanies(),drawActiveCompanies()}catch(t){}}},(0,o.default)(window.initCompanyPart)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initProductPart=function(){window.drawActiveProducts=function(){for(var t=0;t<window.productdata.active.length;t++){var e=window.productdata.available[window.productdata.active[t]],a=(0,o.default)(".item.item_product[data-id="+t+"]").first();a.find(".item_product__type").empty().html(e.type),a.find(".item_product__name").empty().html(e.name),a.find(".item_product__img img").attr("src",e.icon),a.find(".item__title.item_product__price .item__value").empty().html(e.price.rur)}},window.loadNextProducts=function(){for(var t=window.productdata.active,e=t[0],a=0;a<t.length;a++)e<t[a]&&(e=t[a]);window.productdata.active=[];for(var i=2*window.productdata.available.length,n=e+1;n<i;n++){var o=n%window.productdata.available.length;if(t.includes(o)||window.productdata.active.push(o),window.productdata.active.length>=2)break}drawActiveProducts()},window.initNextCompany=function(){(0,o.default)(".nextproduct").click((function(t){return t.preventDefault(),loadNextProducts(),!1}))},window.getTotalProductsRur=function(){for(var t=0,e=0;e<window.productdata.active.length;e++){var a=""+window.productdata.available[window.productdata.active[e]].price.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return t},window.showTotalProductsRur=function(t){(0,o.default)(t).empty().html(window.getTotalProductsRur())};try{window.initNextCompany(),window.drawActiveProducts()}catch(t){}},(0,o.default)(window.initProductPart)},function(t,e,a){"use strict";var i,n,o,r,l;i=CanvasRenderingContext2D.prototype,n=document.createElement("canvas").getContext("2d"),o=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,1!==(l=(window.devicePixelRatio||1)/o)&&(function(t,e){for(var a in t)t.hasOwnProperty(a)&&e(t[a],a)}({fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all"},(function(t,e){var a;i[e]=(a=i[e],function(){var e,i,n=Array.prototype.slice.call(arguments);if("all"===t)n=n.map((function(t){return t*l}));else if(Array.isArray(t))for(e=0,i=t.length;e<i;e++)n[t[e]]*=l;return a.apply(this,n)})})),i.stroke=(r=i.stroke,function(){this.lineWidth*=l,r.apply(this,arguments),this.lineWidth/=l}),i.fillText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.fillText),i.strokeText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.strokeText)),function(t){t.getContext=function(t){return function(e){var a,i,n=t.call(this,e);return"2d"===e&&(a=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,(i=(window.devicePixelRatio||1)/a)>1&&(this.style.height=this.height+"px",this.style.width=this.width+"px",this.width*=i,this.height*=i)),n}}(t.getContext)}(HTMLCanvasElement.prototype)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.plotImages=[],window.plotMaxYear=!1,(0,o.default)((function(){window.drawActiveStocks=function(t){for(var e=0;e<window.companydata.active.length;e++){var a=window.companydata.available[window.companydata.active[e]],i=(0,o.default)(".stocks__company[data-id="+e+"]").first();i.find(".item_stocks__count").empty().html(a.numberOfShares+"&nbsp;шт."),i.find(".item_stocks__title").empty().html(a.shareCode),i.find(".item_stocks__subtitle").empty().html(a.name);var n=a.pricesUSD.filter((function(e){return e[0]==t}));n=n[0]?n[0][1]:a.pricesUSD[1][1],i.find(".item_stocks__title#subtotal").empty().html("$"+n);var r=a.sumPricesRUR.filter((function(e){return e[0]==t}));r=""+(r=r[0]?r[0][1]:a.sumPricesRUR[1][1]);var l=parseFloat(r.replace(/[^0-9.]/g,"")),d=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(l).toFixed(2));i.find(".item_stocks__title#total").empty().html(d.replace(",",".")+" ₽")}},window.drawStocksPlot=function(t,e){for(var a=(0,o.default)(t),i=1,n=[],r=!1,l=!1,d=!1,s=!1,c=0;c<window.companydata.active.length;c++)for(var u=window.companydata.available[window.companydata.active[c]],w=0;w<u.pricesUSD.length;w++)(!1===r||r>u.pricesUSD[w][0])&&(r=u.pricesUSD[w][0]),(!1===l||l<u.pricesUSD[w][0])&&(l=u.pricesUSD[w][0]);window.plotMinYear=u.pricesUSD[0][0],!1===e&&(e=u.pricesUSD[1][0]),window.plotMaxYear=e,window.maxYearDrawn=!0;for(var f=0;f<window.companydata.active.length;f++){u=window.companydata.available[window.companydata.active[f]];for(var m=[],p=0;p<u.pricesUSD.length;p++)u.pricesUSD[p][0]<=e?((!1===d||d>u.pricesUSD[p][1])&&(d=u.pricesUSD[p][1]),(!1===s||s<u.pricesUSD[p][1])&&(s=u.pricesUSD[p][1]),m.push({X:u.pricesUSD[p][0],Y:u.pricesUSD[p][1]})):window.maxYearDrawn=!1;var h,v;(i=Math.round(100*(m[m.length-1].Y/m[m.length-2].Y-1)))>0?(h="+ "+i+"% ↑",v="#47AF34"):i<0?(h=i+"% ↓",v="#FA633F"):(h="=",v="#47AF34");n.push({values:m,icon:u.icon,dataLabel:h,dataLabelBg:v,dataLabelColor:"#FFFFFF"})}n[0].color="#5f49f2",n[1].color="#5cc728";for(var g=[],y=r;y<=l;y++)g.push(y);s+=100-s%100;for(var x=[],_=d=0;_<=s;_+=100)x.push(_);if(!window.drawStocksPlotOptions){var b=a.parent().innerWidth(),P=Math.round(b/2);window.drawStocksPlotOptions={canvasWidth:2*b,canvasHeight:2*P,css:{width:b+"px",height:P+"px",maxWidth:b+"px",maxHeight:P+"px"},xPadding:280,xShift:-140,yShift:60,yPadding:80,wLabel:90,hLabel:60,lineWidth:16,lineWidthAxes:8,xAxisTicks:g,yAxisTicks:x,font:{style:"normal",size:32,unit:"px",family:"Theinhardt Pan"},dataLabelFont:{style:"normal",size:26,unit:"px",family:"Theinhardt Pan"},maxYear:window.plotMaxYear},b<=768&&(window.drawStocksPlotOptions.xPadding=160,window.drawStocksPlotOptions.xShift=-40,window.drawStocksPlotOptions.yShift=30,window.drawStocksPlotOptions.yPadding=40,window.drawStocksPlotOptions.wLabel=80,window.drawStocksPlotOptions.hLabel=52,window.drawStocksPlotOptions.font={style:"normal",size:28,unit:"px",family:"Theinhardt Pan"},window.drawStocksPlotOptions.dataLabelFont={style:"normal",size:20,unit:"px",family:"Theinhardt Pan"},window.drawStocksPlotOptions.lineWidth=16,window.drawStocksPlotOptions.lineWidthAxes=8),b<=576&&(window.drawStocksPlotOptions.xPadding=160,window.drawStocksPlotOptions.xShift=-60,window.drawStocksPlotOptions.yShift=30,window.drawStocksPlotOptions.yPadding=20,window.drawStocksPlotOptions.wLabel=66,window.drawStocksPlotOptions.hLabel=44,window.drawStocksPlotOptions.font={style:"normal",size:16,unit:"px",family:"Theinhardt Pan"},window.drawStocksPlotOptions.dataLabelFont={style:"normal",size:16,unit:"px",family:"Theinhardt Pan"},window.drawStocksPlotOptions.lineWidth=16,window.drawStocksPlotOptions.lineWidthAxes=8)}window.drawStocksPlotOptions.maxYear=window.plotMaxYear,window.drawStocksPlotOptions.yAxisTicks=x,function(t,e,a){var i=document.createElement("canvas");function n(t,e){for(var a=10,i=t*e;a<=i;)a+=10;return a}function r(t,e){return e>1?Math.round(t*e):t}i.width=a.canvasWidth,i.height=a.canvasHeight,(0,o.default)(i).attr("width",a.canvasWidth).attr("height",a.canvasHeight).css({width:a.canvasWidth+"px",height:a.canvasHeight+"px"});for(var l={canvasWidth:r(a.canvasWidth,window.devicePixelRatio),canvasHeight:r(a.canvasHeight,window.devicePixelRatio),xPadding:r(a.xPadding,window.devicePixelRatio),xShift:r(a.xShift,window.devicePixelRatio),yPadding:Math.round(a.yPadding*window.devicePixelRatio),yShift:Math.round(a.yShift*window.devicePixelRatio),wLabel:r(a.wLabel,window.devicePixelRatio),hLabel:r(a.hLabel,window.devicePixelRatio),lineWidth:r(a.lineWidth,window.devicePixelRatio),lineWidthAxes:r(a.lineWidthAxes,window.devicePixelRatio),font:{style:a.font.style,size:n(a.font.size,window.devicePixelRatio),unit:a.font.unit,family:a.font.family},dataLabelFont:{style:a.dataLabelFont.style,size:n(a.dataLabelFont.size,window.devicePixelRatio),unit:a.dataLabelFont.unit,family:a.dataLabelFont.family},css:a.css,yAxisTicks:a.yAxisTicks,xAxisTicks:a.xAxisTicks,maxYear:a.maxYear},d=l.yAxisTicks[l.yAxisTicks.length-1],s=!1,c=!1,u=0;u<l.xAxisTicks.length;u++)(!1===s||s>l.xAxisTicks[u])&&(s=l.xAxisTicks[u]),(!1===c||c<l.xAxisTicks[u])&&(c=l.xAxisTicks[u]);function w(t){return(l.canvasWidth-l.xShift-2*l.xPadding)/(c-s- -.1)*(t-s- -.1)+l.xShift+l.xPadding}function f(t){return l.canvasHeight-((t-0)*(l.canvasHeight-l.yShift-2*l.yPadding)/(d-0)+l.yShift+l.yPadding)}function m(t){return t.size+t.unit+" "+t.family}(0,o.default)("#canvas-graph").empty().append(i);var p=(0,o.default)(t).css(l.css),h=i.getContext("2d");h.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),h.clearRect(0,0,l.canvasWidth,l.canvasHeight),h.textAlign="right",h.textBaseline="middle",h.strokeStyle="#333",h.fillStyle="#808080";for(var v=0;v<l.yAxisTicks.length;v++)h.font=m(l.font),h.fillText("$"+l.yAxisTicks[v],w(s-.2),f(l.yAxisTicks[v]));for(h.lineWidth=l.lineWidthAxes,h.textAlign="center",u=0;u<l.xAxisTicks.length;u++){h.font=m(l.font),l.xAxisTicks[u]==l.maxYear?(h.fillStyle="#ffffff",h.strokeStyle="#4F5074"):(h.fillStyle="#68697a",h.strokeStyle="#343550");var g=w(l.xAxisTicks[u]);h.fillText(l.xAxisTicks[u],g,l.canvasHeight-.9*l.yPadding),h.beginPath(),h.moveTo(g,f(0)+5),h.lineTo(g,f(d)-5),h.stroke()}var y=function(t,e,a,n,o,r){return function(){t.drawImage(e,a,n,o,r),p.attr("src",i.toDataURL())}},x=e[0].values,_=e[1].values;x[x.length-1].Y-_[_.length-1].Y>.5*l.hLabel||_[_.length-1].Y-x[x.length-1].Y>.3*l.hLabel?(e[0].labelShift=0,e[1].labelShift=0):x[x.length-1].Y-_[_.length-1].Y>0?(e[0].labelShift=-.5,e[1].labelShift=.5):x[x.length-1].Y-_[_.length-1].Y<=0&&(e[0].labelShift=.5,e[1].labelShift=-.5);for(var b=0;b<e.length;b++){var P=e[b];h.strokeStyle=P.color,h.lineWidth=l.lineWidth,h.beginPath(),h.moveTo(w(P.values[0].X),f(P.values[0].Y));for(var k=1;k<P.values.length;k++)h.lineTo(w(P.values[k].X),f(P.values[k].Y));h.stroke(),h.fillStyle=P.color;for(k=0;k<P.values.length;k++){var S=w(P.values[k].X),R=f(P.values[k].Y);h.beginPath(),h.arc(S,R,l.lineWidth/2,0,2*Math.PI,!0),h.fill()}var C=P.values[P.values.length-1];h.fillStyle=P.dataLabelBg;var M=w(C.X)+1.5*l.hLabel,A=f(C.Y)-l.hLabel/2+P.labelShift*l.hLabel;h.fillRect(M,A,l.wLabel,l.hLabel),h.beginPath(),h.arc(M,A+l.hLabel/2,l.hLabel/2,0,2*Math.PI,!0),h.fill(),h.beginPath(),h.arc(M+l.wLabel,A+l.hLabel/2,l.hLabel/2,0,2*Math.PI,!0),h.fill(),h.fillStyle="#ffffff",h.beginPath();var T=l.hLabel/1.5;h.arc(M-1.5*l.hLabel,A+l.hLabel/2,T,0,2*Math.PI,!0),h.fill();var L=new Image;L.src=P.icon;var F=.8*T;L.onload=y(h,L,(M-1.5*l.hLabel-F)*window.devicePixelRatio,(A+l.hLabel/2-F)*window.devicePixelRatio,2*F*window.devicePixelRatio,2*F*window.devicePixelRatio),window.plotImages.push(L),h.font=m(l.dataLabelFont),h.textAlign="center",h.fillStyle=P.dataLabelColor,h.fillText(P.dataLabel,M+l.wLabel/2,A+l.hLabel/2)}p.attr("src",i.toDataURL())}(t,n,window.drawStocksPlotOptions),window.maxYearDrawn&&((0,o.default)("#oneMoreYear").parent().addClass("d-none"),(0,o.default)("#saleShares").removeClass("btn_secondary").addClass("btn_action"),(0,o.default)(".stocks__btns").addClass("stocks__btns--last"))},window.drawChatMessages=function(t,e){if(!window.chatMessages){window.chatMessages={};for(var a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]];!1===e&&(e=i.pricesUSD[1][0]);for(var n=0;n<i.pricesUSD.length;n++)window.chatMessages[i.pricesUSD[n][0]]||(window.chatMessages[i.pricesUSD[n][0]]=[]),i.pricesUSD[n][2]&&window.chatMessages[i.pricesUSD[n][0]].push(i.pricesUSD[n][2])}for(var r in window.chatMessages){var l=window.chatMessages[r],d=Math.floor(Math.random()*l.length);window.chatMessages[r]=l[d]}}var s=(0,o.default)(t),c=s.children().first().detach();for(var u in s.empty(),window.plotMaxYear=e,window.chatMessages)if(u<=e&&window.chatMessages[u]){var w=c.clone();w.find(".stocks__message-date").empty().html(u+" год"),w.find(".stocks__message-text").empty().html(window.chatMessages[u]),s.prepend(w)}},window.activateNextBtn=function(){(0,o.default)("#oneMoreYear").click((function(t){t.preventDefault();var e=window.plotMaxYear+1;return window.drawActiveStocks(e),window.drawStocksPlot("#flot-graph",e),window.drawChatMessages(".stocks__chat-body",e),!1}))},window.showResults=function(t,e){var a=window.plotMaxYear-window.plotMinYear;1==a?(0,o.default)(t).empty().html(a+" год"):a>1&&a<=4?(0,o.default)(t).empty().html(a+" года"):(0,o.default)(t).empty().html(a+" лет");for(var i=0,n=0;n<window.companydata.active.length;n++){var r=""+window.companydata.available[window.companydata.active[n]].sumPricesRUR[0][1];i+=parseFloat(r.replace(/[^0-9.]/g,""))}for(var l,d=0,s=0;s<window.companydata.active.length;s++){l=function(t){return t[0]==window.plotMaxYear};var c=""+window.companydata.available[window.companydata.active[s]].sumPricesRUR.filter(l)[0][1];d+=parseFloat(c.replace(/[^0-9.]/g,""))}var u=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(d-i).toFixed(2));(0,o.default)(e).empty().html(u.replace(",","."))},window.showStart=function(t){for(var e=0,a=0;a<window.companydata.active.length;a++){var i=""+window.companydata.available[window.companydata.active[a]].sumPricesRUR[0][1];e+=parseFloat(i.replace(/[^0-9.]/g,""))}var n=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(e).toFixed(2));(0,o.default)(t).empty().html(n.replace(",","."))}}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.stockChat=function(){if(0==(0,o.default)(".stocks__info").length&&0==(0,o.default)(".stocks__chat").length)return!1;if((0,o.default)(window).width()>1280||!window.matchMedia("screen and (max-width: 1280px)").matches){var t=Math.ceil((0,o.default)(".stocks__info").outerHeight(!0));t>Math.ceil((0,o.default)(".stocks__chat").outerHeight(!0))&&(0,o.default)(".stocks__chat").css("min-height",t)}else(0,o.default)(".stocks__chat").removeAttr("style")},(0,o.default)(window.stockChat),(0,o.default)(window).on("resize",(function(){(0,o.default)(".stocks__info").length>0&&(0,o.default)(".stocks__chat").length>0&&(window.stockChat(),window.drawStocksPlot("#flot-graph",window.plotMaxYear))}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};(0,o.default)(window).on("load",(function(){(0,o.default)(".preloader").fadeOut("slow"),(0,o.default)("body").delay(100).removeClass("not-ready")}))}]);