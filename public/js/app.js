!function(t){var e={};function a(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(i,o,function(e){return t[e]}.bind(null,o));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e){t.exports=jQuery},function(t,e,a){"use strict";var i,o=a(0),n=(i=o)&&i.__esModule?i:{default:i};a(2),a(3),a(4),a(5),a(6),a(7),a(8),a(9),(0,n.default)((function(){(0,n.default)(document).on("click",'[data-trigger="scroll"]',(function(t){return t.preventDefault(),(0,n.default)("html, body").animate({scrollTop:(0,n.default)((0,n.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,n.default)(document).on("click",'[data-trigger="click"]',(function(t){t.preventDefault()}))}))},function(t,e,a){"use strict";var i,o=a(0);(0,((i=o)&&i.__esModule?i:{default:i}).default)(document).on("mouseup",(function(t){}))},function(t,e,a){"use strict";var i,o=a(0),n=(i=o)&&i.__esModule?i:{default:i};(0,n.default)((function(){!function t(){(0,n.default)('a[data-loader="ajax"]').click((function(e){e.preventDefault();var a=(0,n.default)(this),i=a.attr("href"),o=a.data("target");return(0,n.default)(o).load(i,t),!1}))}()}))},function(t,e,a){"use strict";window.companydata={active:[],available:[{icon:"./icon/apple.svg",name:"Apple",shareCode:"APLE",priceAtStart:{usd:"27.34"},totalAtStart:{rur:"18 317.80"},numberOfShares:10,pricesUSD:[[2016,27.34,"","wait"],[2017,39.38,"Apple message 0001","wait"],[2018,54.4,"Apple message 0002","wait"],[2019,51.63,"Apple message 0003","wait"],[2020,124.37,"Apple message 0004","wait"],[2021,150.19,"Apple message 0005","wait"]],sumPricesRUR:[[2016,18317.8],[2017,22849.4],[2018,35904],[2019,33559.5],[2020,90790.1],[2021,109638.7]]},{icon:"./icon/netflix.svg",name:"Netflix",shareCode:"NFLX",priceAtStart:{usd:"95.87"},totalAtStart:{rur:"19 269.87"},numberOfShares:3,pricesUSD:[[2016,95.87,"",""],[2017,166.54,"Netflix Message 001","wait"],[2018,316.78,"Netflix Message 002","wait"],[2019,302.8,"Netflix Message 003","wait"],[2020,492.31,"Netflix Message 004","wait"],[2021,518.91,"Netflix Message 005","wait"]],sumPricesRUR:[[2016,19269.87],[2017,28977.96],[2018,62722.44],[2019,59046],[2020,107815.89],[2021,113641.29]]},{icon:"./icon/yandex.svg",name:"Yandex",shareCode:"YNDX",priceAtStart:{usd:"22.48"},totalAtStart:{rur:"18 073.92"},numberOfShares:12,pricesUSD:[[2016,22.48,"",""],[2017,29.81,"Yandex Message 001","sell"],[2018,31.27,"Yandex Message 002","sell"],[2019,36.48,"Yandex Message 003","sell"],[2020,63.57,"Yandex Message 004","sell"],[2021,69.07,"Yandex Message 005","sell"]],sumPricesRUR:[[2016,18073.92],[2017,20747.76],[2018,24765.84],[2019,28454.4],[2020,55687.32],[2021,60505.32]]},{icon:"./icon/tesla.svg",name:"Tesla",shareCode:"TSLA",priceAtStart:{usd:"45.00"},totalAtStart:{rur:"18 090.00"},numberOfShares:6,pricesUSD:[[2016,45,""],[2017,69.49,"Tesla Message 001","sell"],[2018,61.1,"Tesla Message 002","sell"],[2019,43.99,"Tesla Message 003","sell"],[2020,410,"Tesla Message 004","sell"],[2021,665.71,"Tesla Message 005","sell"]],sumPricesRUR:[[2016,18090],[2017,24182.52],[2018,24195.6],[2019,17156.1],[2020,179580],[2021,291580.98]]}]}},function(t,e,a){"use strict";var i,o=a(0),n=(i=o)&&i.__esModule?i:{default:i};window.initCompanyPart=function(){window.drawActiveCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,n.default)(".item.item_company[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__title.item_company__subtotal").empty().html("$"+e.priceAtStart.usd);var i=parseFloat(e.totalAtStart.rur.replace(/[^0-9.]/g,"")),o=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(i).toFixed(2));a.find(".item__title.item_company__total .item__value").empty().html(o)}},window.loadNextCompanies=function(){for(var t=window.companydata.active,e=[],a=0;a<window.companydata.available.length;a++)t.includes(a)||e.push(a);!function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}}(e),window.companydata.active=e.slice(0,2),drawActiveCompanies()},window.initNextCompany=function(){(0,n.default)(".nextcompany").click((function(t){return t.preventDefault(),loadNextCompanies(),!1}))},window.getTotalSharesRur=function(){for(var t=0,e=0;e<window.companydata.active.length;e++){var a=""+window.companydata.available[window.companydata.active[e]].totalAtStart.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(t).toFixed(2))},window.showTotalSharesRur=function(t){(0,n.default)(t).empty().html(window.getTotalSharesRur())},window.showCurrentCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,n.default)(".item.item_company.item_company-inside[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__subtotal").empty().html("$"+e.priceAtStart.usd)}},window.showLostProfitRur=function(t){for(var e=0,a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]],o=""+i.sumPricesRUR[i.sumPricesRUR.length-1][1];e+=parseFloat(o.replace(/[^0-9.]/g,""))}var r=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(e).toFixed(2));(0,n.default)(t).empty().html(r)};try{initNextCompany(),loadNextCompanies(),drawActiveCompanies()}catch(t){}},(0,n.default)(window.initCompanyPart)},function(t,e,a){"use strict";window.productdata={active:[2,3],available:[{icon:"./img/clock.png",name:"Apple Watch Series 2x",type:"Умные часы",price:{rur:"34 000"}},{icon:"./img/clock.png",name:"Samsung Galaxy S7x",type:"Смартфон",price:{rur:"54 000"}},{icon:"./img/clock.png",name:"Apple Watch Series 2",type:"Умные часы",price:{rur:"34 000"}},{icon:"./img/clock.png",name:"Samsung Galaxy S7",type:"Смартфон",price:{rur:"54 000"}}]}},function(t,e,a){"use strict";var i,o=a(0),n=(i=o)&&i.__esModule?i:{default:i};window.initProductPart=function(){window.drawActiveProducts=function(){for(var t=0;t<window.productdata.active.length;t++){var e=window.productdata.available[window.productdata.active[t]],a=(0,n.default)(".item.item_product[data-id="+t+"]").first();a.find(".item_product__type").empty().html(e.type),a.find(".item_product__name").empty().html(e.name),a.find(".item_product__img img").attr("src",e.icon),a.find(".item__title.item_product__price .item__value").empty().html(e.price.rur)}},window.loadNextProducts=function(){for(var t=window.productdata.active,e=t[0],a=0;a<t.length;a++)e<t[a]&&(e=t[a]);window.productdata.active=[];for(var i=2*window.productdata.available.length,o=e+1;o<i;o++){var n=o%window.productdata.available.length;if(t.includes(n)||window.productdata.active.push(n),window.productdata.active.length>=2)break}drawActiveProducts()},window.initNextCompany=function(){(0,n.default)(".nextproduct").click((function(t){return t.preventDefault(),loadNextProducts(),!1}))},window.getTotalProductsRur=function(){for(var t=0,e=0;e<window.productdata.active.length;e++){var a=""+window.productdata.available[window.productdata.active[e]].price.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return t},window.showTotalProductsRur=function(t){(0,n.default)(t).empty().html(window.getTotalProductsRur())};try{window.initNextCompany(),window.drawActiveProducts()}catch(t){}},(0,n.default)(window.initProductPart)},function(t,e,a){"use strict";var i,o,n,r,l;i=CanvasRenderingContext2D.prototype,o=document.createElement("canvas").getContext("2d"),n=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1,1!==(l=(window.devicePixelRatio||1)/n)&&(function(t,e){for(var a in t)t.hasOwnProperty(a)&&e(t[a],a)}({fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all"},(function(t,e){var a;i[e]=(a=i[e],function(){var e,i,o=Array.prototype.slice.call(arguments);if("all"===t)o=o.map((function(t){return t*l}));else if(Array.isArray(t))for(e=0,i=t.length;e<i;e++)o[t[e]]*=l;return a.apply(this,o)})})),i.stroke=(r=i.stroke,function(){this.lineWidth*=l,r.apply(this,arguments),this.lineWidth/=l}),i.fillText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.fillText),i.strokeText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.strokeText)),function(t){t.getContext=function(t){return function(e){var a,i,o=t.call(this,e);return"2d"===e&&(a=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1,(i=(window.devicePixelRatio||1)/a)>1&&(this.style.height=this.height+"px",this.style.width=this.width+"px",this.width*=i,this.height*=i)),o}}(t.getContext)}(HTMLCanvasElement.prototype)},function(t,e,a){"use strict";var i,o=a(0),n=(i=o)&&i.__esModule?i:{default:i};window.plotImages=[],window.plotMaxYear=!1,(0,n.default)((function(){window.drawActiveStocks=function(t){for(var e=0;e<window.companydata.active.length;e++){var a=window.companydata.available[window.companydata.active[e]];console.log(e,window.companydata);var i=(0,n.default)(".stocks__company[data-id="+e+"]").first();i.find(".item_stocks__count").empty().html(a.numberOfShares+"&nbsp;шт."),i.find(".item_stocks__title").empty().html(a.shareCode),i.find(".item_stocks__subtitle").empty().html(a.name);var o=a.pricesUSD.filter((function(e){return e[0]==t}));o=o[0]?o[0][1]:a.pricesUSD[1][1],i.find(".item_stocks__title#subtotal").empty().html("$"+o);var r=a.sumPricesRUR.filter((function(e){return e[0]==t}));r=""+(r=r[0]?r[0][1]:a.sumPricesRUR[1][1]);var l=parseFloat(r.replace(/[^0-9.]/g,"")),s=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(l).toFixed(2));i.find(".item_stocks__title#total").empty().html(s)}},window.drawStocksPlot=function(t,e){for(var a=1,i=[],o=!1,r=!1,l=!1,s=!1,d=0;d<window.companydata.active.length;d++)for(var c=window.companydata.available[window.companydata.active[d]],w=0;w<c.pricesUSD.length;w++)(!1===o||o>c.pricesUSD[w][0])&&(o=c.pricesUSD[w][0]),(!1===r||r<c.pricesUSD[w][0])&&(r=c.pricesUSD[w][0]);window.plotMinYear=c.pricesUSD[0][0],!1===e&&(e=c.pricesUSD[1][0]),window.plotMaxYear=e,window.maxYearDrawn=!0;for(var u=0;u<window.companydata.active.length;u++){c=window.companydata.available[window.companydata.active[u]];for(var p=[],f=0;f<c.pricesUSD.length;f++)c.pricesUSD[f][0]<=e?((!1===l||l>c.pricesUSD[f][1])&&(l=c.pricesUSD[f][1]),(!1===s||s<c.pricesUSD[f][1])&&(s=c.pricesUSD[f][1]),p.push({X:c.pricesUSD[f][0],Y:c.pricesUSD[f][1]})):window.maxYearDrawn=!1;var m,h;(a=Math.round(100*(p[p.length-1].Y/p[p.length-2].Y-1)))>0?(m="+ "+a+"% ↑",h="#47AF34"):a<0?(m=a+"% ↓",h="#FA633F"):(m="=",h="#47AF34");i.push({values:p,icon:c.icon,dataLabel:m,dataLabelBg:h,dataLabelColor:"#FFFFFF"})}i[0].color="#2A4269",i[1].color="rgb(101, 181, 178)";for(var g=(0,n.default)(t),v=[],y=o;y<=r;y++)v.push(y);s+=100-s%100;for(var x=[],S=l=0;S<=s;S+=100)x.push(S);if(!window.drawStocksPlotOptions){window.drawStocksPlotOptions={xPadding:140,xShift:-80,yShift:30,yPadding:40,wLabel:45,hLabel:30,lineWidth:8,lineWidthAxes:4,xAxisTicks:v,yAxisTicks:x,font:"italic 14pt sans-serif",dataLabelFont:"italic 10pt sans-serif",maxYear:window.plotMaxYear,devicePixelRatio:2},1*g.attr("width")<400&&(window.drawStocksPlotOptions.xPadding=80,window.drawStocksPlotOptions.xShift=-20,window.drawStocksPlotOptions.yShift=10,window.drawStocksPlotOptions.yPadding=10,window.drawStocksPlotOptions.wLabel=40,window.drawStocksPlotOptions.hLabel=20,window.drawStocksPlotOptions.dataLabelFont="italic 9pt sans-serif",window.drawStocksPlotOptions.font="italic 10pt sans-serif",window.drawStocksPlotOptions.lineWidth=8,window.drawStocksPlotOptions.lineWidthAxes=4);var P=g.parent().innerWidth(),k=Math.round(P/2);window.drawStocksPlotOptions.devicePixelRatio>1?(g.attr("width",P*window.drawStocksPlotOptions.devicePixelRatio),g.attr("height",k*window.drawStocksPlotOptions.devicePixelRatio),g.css({width:P+"px",height:k+"px"}),window.drawStocksPlotOptions.xPadding*=window.drawStocksPlotOptions.devicePixelRatio,window.drawStocksPlotOptions.xShift*=window.drawStocksPlotOptions.devicePixelRatio,window.drawStocksPlotOptions.yShift*=window.drawStocksPlotOptions.devicePixelRatio,window.drawStocksPlotOptions.yPadding*=window.drawStocksPlotOptions.devicePixelRatio,window.drawStocksPlotOptions.dataLabelFont="italic 18pt sans-serif",window.drawStocksPlotOptions.font="italic 20pt sans-serif",window.drawStocksPlotOptions.hLabel*=window.drawStocksPlotOptions.devicePixelRatio,window.drawStocksPlotOptions.wLabel*=window.drawStocksPlotOptions.devicePixelRatio,window.drawStocksPlotOptions.lineWidth*=window.drawStocksPlotOptions.devicePixelRatio,window.drawStocksPlotOptions.lineWidthAxes*=window.drawStocksPlotOptions.devicePixelRatio):(g.attr("width",P),g.attr("height",k))}window.drawStocksPlotOptions.yAxisTicks=x,function(t,e,a){for(var i=(0,n.default)(t),o=parseInt(i.attr("width")),r=parseInt(i.attr("height")),l=a.xShift,s=a.yShift,d=a.yAxisTicks[a.yAxisTicks.length-1],c=!1,w=!1,u=0;u<a.xAxisTicks.length;u++)(!1===c||c>a.xAxisTicks[u])&&(c=a.xAxisTicks[u]),(!1===w||w<a.xAxisTicks[u])&&(w=a.xAxisTicks[u]);function p(t,e,i,n){return(o-n-2*a.xPadding)/(i-e)*(t-e)+n+a.xPadding}function f(t,e,i,o){return r-((t-e)*(r-o-2*a.yPadding)/(i-e)+o+a.yPadding)}var m=i[0].getContext("2d");m.clearRect(0,0,o,r),m.lineWidth=a.lineWidthAxes,m.strokeStyle="#333",m.font=a.font,m.textAlign="center",m.textAlign="right",m.textBaseline="middle";for(var h=0;h<a.yAxisTicks.length;h++)m.fillStyle="#808080",m.fillText("$"+a.yAxisTicks[h],50*a.devicePixelRatio,f(a.yAxisTicks[h],0,d,s));for(m.textAlign="center",u=0;u<a.xAxisTicks.length;u++){a.xAxisTicks[u]==a.maxYear?(m.fillStyle="#ffffff",m.strokeStyle="#ffffff"):(m.fillStyle="#808080",m.strokeStyle="#333");var g=p(a.xAxisTicks[u],c,w,l);m.fillText(a.xAxisTicks[u],g,r-a.yPadding+5),m.beginPath(),m.moveTo(g,f(0,0,d,s)+5),m.lineTo(g,f(d,0,d,s)-5),m.stroke()}var v=function(t,e,a,i,o,n){return function(){t.drawImage(e,a-2*n+.05*n,i+.05*n,.9*n,.9*n)}},y=a.wLabel||60,x=a.hLabel||30,S=e[0].values,P=e[1].values;S[S.length-1].Y-P[P.length-1].Y>.8*x||P[P.length-1].Y-S[S.length-1].Y>.8*x?(e[0].labelShift=0,e[1].labelShift=0):S[S.length-1].Y-P[P.length-1].Y>0?(e[0].labelShift=-.5,e[1].labelShift=.5):S[S.length-1].Y-P[P.length-1].Y<=0&&(e[0].labelShift=.5,e[1].labelShift=-.5);for(var k=0;k<e.length;k++){var _=e[k];m.strokeStyle=_.color,m.lineWidth=a.lineWidth,m.beginPath(),m.moveTo(p(_.values[0].X,c,w,l),f(_.values[0].Y,0,d,s));for(var b=1;b<_.values.length;b++)m.lineTo(p(_.values[b].X,c,w,l),f(_.values[b].Y,0,d,s));m.stroke(),m.fillStyle=_.color;for(b=0;b<_.values.length;b++){var R=p(_.values[b].X,c,w,l),A=f(_.values[b].Y,0,d,s);m.beginPath(),m.arc(R,A,4,0,2*Math.PI,!0),m.fill()}var M=_.values[_.values.length-1];m.fillStyle=_.dataLabelBg;var O=p(M.X,c,w,l)+1.5*x,T=f(M.Y,0,d,s)-x/2+_.labelShift*x;m.fillRect(O,T,y,x),m.beginPath(),m.arc(O,T+x/2,x/2,0,2*Math.PI,!0),m.fill(),m.beginPath(),m.arc(O+y,T+x/2,x/2,0,2*Math.PI,!0),m.fill(),m.fillStyle="#ffffff",m.beginPath(),m.arc(O-1.5*x,T+x/2,x/1.5,0,2*Math.PI,!0),m.fill();var D=new Image;D.src=_.icon,D.onload=v(m,D,O,T,0,x),window.plotImages.push(D),m.font=a.dataLabelFont,m.textAlign="center",m.fillStyle=_.dataLabelColor,m.fillText(_.dataLabel,O+y/2,T+x/2),m.font=a.font}}(t,i,window.drawStocksPlotOptions),window.maxYearDrawn&&(0,n.default)("#oneMoreYear").parent().addClass("d-none")},window.drawChatMessages=function(t,e){if(!window.chatMessages){window.chatMessages={};for(var a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]];!1===e&&(e=i.pricesUSD[1][0]);for(var o=0;o<i.pricesUSD.length;o++)window.chatMessages[i.pricesUSD[o][0]]||(window.chatMessages[i.pricesUSD[o][0]]=[]),i.pricesUSD[o][2]&&window.chatMessages[i.pricesUSD[o][0]].push(i.pricesUSD[o][2])}for(var r in window.chatMessages){var l=window.chatMessages[r],s=Math.floor(Math.random()*l.length);window.chatMessages[r]=l[s]}}var d=(0,n.default)(t),c=d.children().first().detach();for(var w in d.empty(),window.plotMaxYear=e,window.chatMessages)if(w<=e&&window.chatMessages[w]){var u=c.clone();u.find(".stocks__message-date").empty().html(w+" год"),u.find(".stocks__message-text").empty().html(window.chatMessages[w]),d.prepend(u)}},window.activateNextBtn=function(){(0,n.default)("#oneMoreYear").click((function(t){t.preventDefault();var e=window.plotMaxYear+1;return window.drawActiveStocks(e),window.drawStocksPlot("#flot-graph",e),window.drawChatMessages(".stocks__chat-body",e),!1}))},window.showResults=function(t,e){var a=window.plotMaxYear-window.plotMinYear;1==a?(0,n.default)(t).empty().html(a+" год"):a>1&&a<=4?(0,n.default)(t).empty().html(a+" года"):(0,n.default)(t).empty().html(a+" лет");for(var i=0,o=0;o<window.companydata.active.length;o++){var r=""+window.companydata.available[window.companydata.active[o]].sumPricesRUR[0][1];i+=parseFloat(r.replace(/[^0-9.]/g,""))}for(var l,s=0,d=0;d<window.companydata.active.length;d++){l=function(t){return t[0]==window.plotMaxYear};var c=""+window.companydata.available[window.companydata.active[d]].sumPricesRUR.filter(l)[0][1];s+=parseFloat(c.replace(/[^0-9.]/g,""))}var w=new Intl.NumberFormat("ru-RU",{useGrouping:!0}).format(Number(s-i).toFixed(2));(0,n.default)(e).empty().html(w)}}))}]);