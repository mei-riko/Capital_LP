!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e){t.exports=jQuery},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};a(2),a(3),a(4),a(5),a(6),a(7),a(8),(0,o.default)((function(){(0,o.default)(document).on("click",'[data-trigger="scroll"]',(function(t){return t.preventDefault(),(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,o.default)(document).on("click",'[data-trigger="click"]',(function(t){t.preventDefault()})),(0,o.default)(".heading-screen .heading-screen__col .btn").mouseenter((function(t){(0,o.default)(this).parent().find(".heading-screen__card").find(".item").addClass("item--hover")})).mouseleave((function(t){(0,o.default)(".item.item--hover").removeClass("item--hover")})),window.initCompanyPart(),window.initProductPart()}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};(0,o.default)((function(){!function t(){(0,o.default)('a[data-loader="ajax"]').click((function(e){e.preventDefault();var a=(0,o.default)(this),i=a.attr("href"),n=a.data("target");return(0,o.default)(n).load(i,t),!1}))}()}))},function(t,e,a){"use strict";window.companydata={active:[],available:[{icon:"./icon/apple.svg",name:"Apple",shareCode:"APLE",priceAtStart:{usd:"27.34"},totalAtStart:{rur:"18 317.80"},numberOfShares:10,pricesUSD:[[2016,27.34,"","wait"],[2017,39.38,"Apple message 0001","wait"],[2018,54.4,"Apple message 0002","wait"],[2019,51.63,"Apple message 0003","wait"],[2020,124.37,"Apple message 0004","wait"],[2021,150.19,"Apple message 0005","wait"]],sumPricesRUR:[[2016,18317.8],[2017,22849.4],[2018,35904],[2019,33559.5],[2020,90790.1],[2021,109638.7]]},{icon:"./icon/netflix.svg",name:"Netflix",shareCode:"NFLX",priceAtStart:{usd:"95.87"},totalAtStart:{rur:"19 269.87"},numberOfShares:3,pricesUSD:[[2016,95.87,"",""],[2017,166.54,"Netflix Message 001","wait"],[2018,316.78,"Netflix Message 002","wait"],[2019,302.8,"Netflix Message 003","wait"],[2020,492.31,"Netflix Message 004","wait"],[2021,518.91,"Netflix Message 005","wait"]],sumPricesRUR:[[2016,19269.87],[2017,28977.96],[2018,62722.44],[2019,59046],[2020,107815.89],[2021,113641.29]]},{icon:"./icon/yandex.svg",name:"Yandex",shareCode:"YNDX",priceAtStart:{usd:"22.48"},totalAtStart:{rur:"18 073.92"},numberOfShares:12,pricesUSD:[[2016,22.48,"",""],[2017,29.81,"Yandex Message 001","sell"],[2018,31.27,"Yandex Message 002","sell"],[2019,36.48,"Yandex Message 003","sell"],[2020,63.57,"Yandex Message 004","sell"],[2021,69.07,"Yandex Message 005","sell"]],sumPricesRUR:[[2016,18073.92],[2017,20747.76],[2018,24765.84],[2019,28454.4],[2020,55687.32],[2021,60505.32]]},{icon:"./icon/tesla.svg",name:"Tesla",shareCode:"TSLA",priceAtStart:{usd:"45.00"},totalAtStart:{rur:"18 090.00"},numberOfShares:6,pricesUSD:[[2016,45,""],[2017,69.49,"Tesla Message 001","sell"],[2018,61.1,"Tesla Message 002","sell"],[2019,43.99,"Tesla Message 003","sell"],[2020,410,"Tesla Message 004","sell"],[2021,665.71,"Tesla Message 005","sell"]],sumPricesRUR:[[2016,18090],[2017,24182.52],[2018,24195.6],[2019,17156.1],[2020,179580],[2021,291580.98]]}],tips:{"":"",wait:"Советуем подождать.",sell:"Советуем продавать.",waitwait:"Советуем купить больше акций.",sellwait:"Советуем подождать.",waitsell:"Советуем подождать.",sellsell:"Советуем продавать."}}},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initCompanyPart=function(){window.drawActiveCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__title.item_company__subtotal").empty().html("$"+e.priceAtStart.usd),a.find(".item__title.item_company__total .item__value").empty().html(e.totalAtStart.rur)}},window.loadNextCompanies=function(){for(var t=window.companydata.active,e=[],a=0;a<window.companydata.available.length;a++)t.includes(a)||e.push(a);!function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}}(e),window.companydata.active=e.slice(0,2),drawActiveCompanies()},window.initNextCompany=function(){(0,o.default)(".nextcompany").click((function(t){return t.preventDefault(),loadNextCompanies(),!1}))},window.getTotalSharesRur=function(){for(var t=0,e=0;e<window.companydata.active.length;e++){var a=""+window.companydata.available[window.companydata.active[e]].totalAtStart.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return t},window.showTotalSharesRur=function(t){(0,o.default)(t).empty().html(window.getTotalSharesRur())},window.showCurrentCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company.item_company-inside[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item_subtotal").empty().html("$"+e.priceAtStart.usd)}},window.showLostProfitRur=function(t){for(var e=0,a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]],n=""+i.sumPricesRUR[i.sumPricesRUR.length-1][1],r=parseFloat(n.replace(/[^0-9.]/g,""));e+=r,console.log(i,n,r,e)}(0,o.default)(t).empty().html(e)};try{initNextCompany(),loadNextCompanies(),drawActiveCompanies()}catch(t){}},(0,o.default)(window.initCompanyPart)},function(t,e,a){"use strict";window.productdata={active:[2,3],available:[{icon:"./img/clock.png",name:"Apple Watch Series 2x",type:"Умные часы",price:{rur:"34 000"}},{icon:"./img/clock.png",name:"Samsung Galaxy S7x",type:"Смартфон",price:{rur:"54 000"}},{icon:"./img/clock.png",name:"Apple Watch Series 2",type:"Умные часы",price:{rur:"34 000"}},{icon:"./img/clock.png",name:"Samsung Galaxy S7",type:"Смартфон",price:{rur:"54 000"}}]}},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initProductPart=function(){window.drawActiveProducts=function(){for(var t=0;t<window.productdata.active.length;t++){var e=window.productdata.available[window.productdata.active[t]],a=(0,o.default)(".item.item_product[data-id="+t+"]").first();a.find(".item_product__type").empty().html(e.type),a.find(".item_product__name").empty().html(e.name),a.find(".item_product__img img").attr("src",e.icon),a.find(".item__title.item_product__price .item__value").empty().html(e.price.rur)}},window.loadNextProducts=function(){for(var t=window.productdata.active,e=t[0],a=0;a<t.length;a++)e<t[a]&&(e=t[a]);window.productdata.active=[];for(var i=2*window.productdata.available.length,n=e+1;n<i;n++){var o=n%window.productdata.available.length;if(t.includes(o)||window.productdata.active.push(o),window.productdata.active.length>=2)break}drawActiveProducts()},window.initNextCompany=function(){(0,o.default)(".nextproduct").click((function(t){return t.preventDefault(),loadNextProducts(),!1}))},window.getTotalProductsRur=function(){for(var t=0,e=0;e<window.productdata.active.length;e++){var a=""+window.productdata.available[window.productdata.active[e]].price.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return t},window.showTotalProductsRur=function(t){(0,o.default)(t).empty().html(window.getTotalProductsRur())};try{window.initNextCompany(),window.drawActiveProducts()}catch(t){}},(0,o.default)(window.initProductPart)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.plotImages=[],window.plotMaxYear=!1,(0,o.default)((function(){window.drawActiveStocks=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".stocks__company[data-id="+t+"]").first();a.find(".item_stocks__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_stocks__title").empty().html(e.shareCode),a.find(".item_stocks__subtitle").empty().html(e.name),a.find(".item_stocks__title#subtotal").empty().html("$"+e.priceAtStart.usd),a.find(".item_stocks__title#total").empty().html(e.totalAtStart.rur)}},window.drawActiveStocks(),window.drawStocksPlot=function(t,e){var a=1,i=[],n=!1,r=!1,l=!1,c=!1,d=(0,o.default)(t);d.attr("width",d.parent().innerWidth()),d.attr("height",Math.round(d.attr("width")/1.8));for(var s=0;s<window.companydata.active.length;s++)for(var u=window.companydata.available[window.companydata.active[s]],p=0;p<u.pricesUSD.length;p++)(!1===n||n>u.pricesUSD[p][0])&&(n=u.pricesUSD[p][0]),(!1===r||r<u.pricesUSD[p][0])&&(r=u.pricesUSD[p][0]);!1===e&&(e=u.pricesUSD[1][0]),window.plotMaxYear=e;for(var f=0;f<window.companydata.active.length;f++){u=window.companydata.available[window.companydata.active[f]];for(var m=[],w=0;w<u.pricesUSD.length;w++)u.pricesUSD[w][0]<=e&&((!1===l||l>u.pricesUSD[w][1])&&(l=u.pricesUSD[w][1]),(!1===c||c<u.pricesUSD[w][1])&&(c=u.pricesUSD[w][1]),m.push({X:u.pricesUSD[w][0],Y:u.pricesUSD[w][1]}));var h,v;(a=Math.round(100*(m[m.length-1].Y/m[m.length-2].Y-1)))>0?(h="+ "+a+"% ↑",v="#47AF34"):a<0?(h=a+"% ↓",v="#FA633F"):(h="=",v="#47AF34");i.push({values:m,icon:u.icon,dataLabel:h,dataLabelBg:v,dataLabelColor:"#FFFFFF"})}i[0].color="#2A4269",i[1].color="rgb(101, 181, 178)";for(var g=[],y=n;y<=r;y++)g.push(y);c+=100-c%100;for(var _=[],S=l=0;S<=c;S+=100)_.push(S);!function(t,e,a){for(var i=(0,o.default)(t),n=a.xShift,r=a.yAxisTicks[a.yAxisTicks.length-1],l=!1,c=!1,d=0;d<a.xAxisTicks.length;d++)(!1===l||l>a.xAxisTicks[d])&&(l=a.xAxisTicks[d]),(!1===c||c<a.xAxisTicks[d])&&(c=a.xAxisTicks[d]);function s(t,e,n,o){return(i.width()-o-2*a.xPadding)/(n-e)*(t-e)+o+a.xPadding}function u(t,e,n,o){return i.height()-((t-e)*(i.height()-o-2*a.yPadding)/(n-e)+o+a.yPadding)}var p=i[0].getContext("2d");p.clearRect(0,0,i.width(),i.height()),p.lineWidth=a.lineWidthAxes,p.strokeStyle="#333",p.font=a.font,p.textAlign="center",p.textAlign="right",p.textBaseline="middle";for(var f=0;f<a.yAxisTicks.length;f++)p.fillStyle="#808080",p.fillText("$"+a.yAxisTicks[f],60,u(a.yAxisTicks[f],0,r,30));for(p.textAlign="center",d=0;d<a.xAxisTicks.length;d++){p.fillStyle="#808080";var m=s(a.xAxisTicks[d],l,c,n);p.fillText(a.xAxisTicks[d],m,i.height()-a.yPadding+10),p.beginPath(),p.moveTo(m,u(0,0,r,30)+10),p.lineTo(m,u(r,0,r,30)-10),p.stroke()}var w=function(t,e,a,i,n,o){return function(){t.drawImage(e,a-1.8*o,i+.08*o,.9*o,.9*o)}},h=e[0].values,v=e[1].values;h[h.length-1].Y>v[v.length-1].Y?(e[0].labelShift=-1,e[1].labelShift=0):(e[0].labelShift=0,e[1].labelShift=-1);for(var g=0;g<e.length;g++){var y=e[g];p.strokeStyle=y.color,p.lineWidth=a.lineWidth,p.beginPath(),p.moveTo(s(y.values[0].X,l,c,n),u(y.values[0].Y,0,r,30));for(var _=1;_<y.values.length;_++)p.lineTo(s(y.values[_].X,l,c,n),u(y.values[_].Y,0,r,30));p.stroke(),p.fillStyle=y.color;for(_=0;_<y.values.length;_++){var S=s(y.values[_].X,l,c,n),x=u(y.values[_].Y,0,r,30);p.beginPath(),p.arc(S,x,4,0,2*Math.PI,!0),p.fill()}var b=y.values[y.values.length-1];p.fillStyle=y.dataLabelBg;var A=s(b.X,l,c,n)+75,P=u(b.Y,0,r,30)-15+30*y.labelShift;p.fillRect(A,P,60,30),p.beginPath(),p.arc(A,P+15,15,0,2*Math.PI,!0),p.fill(),p.beginPath(),p.arc(A+60,P+15,15,0,2*Math.PI,!0),p.fill(),p.fillStyle="#ffffff",p.beginPath(),p.arc(A-30-10,P+15,20,0,2*Math.PI,!0),p.fill();var k=new Image;k.src=y.icon,k.onload=w(p,k,A,P,0,30),window.plotImages.push(k),p.textAlign="center",p.fillStyle=y.dataLabelColor,p.fillText(y.dataLabel,A+30,P+15)}}(t,i,{xPadding:150,xShift:-60,yPadding:40,lineWidth:8,lineWidthAxes:4,xAxisTicks:g,yAxisTicks:_,font:"italic 14pt sans-serif"})},window.drawChatMessages=function(t,e){var a=(0,o.default)(t),i=a.children().first().detach();a.empty();for(var n={},r={},l=0;l<window.companydata.active.length;l++){var c=window.companydata.available[window.companydata.active[l]];!1===e&&(e=c.pricesUSD[1][0]),window.plotMaxYear=e;for(var d=0;d<c.pricesUSD.length;d++)c.pricesUSD[d][0]<=e&&(n[c.pricesUSD[d][0]]||(n[c.pricesUSD[d][0]]="",r[c.pricesUSD[d][0]]=""),c.pricesUSD[d][2]&&(r[c.pricesUSD[d][0]]+=c.pricesUSD[d][3],n[c.pricesUSD[d][0]]+=" "+c.pricesUSD[d][2]))}for(var s in n)if(n[s]){var u=i.clone();u.find(".stocks__message-date").empty().html(s+" год"),u.find(".stocks__message-text").empty().html(n[s]+" "+window.companydata.tips[r[s]]),a.prepend(u)}},window.activateNextBtn=function(){(0,o.default)("#oneMoreYear").click((function(t){t.preventDefault();var e=window.plotMaxYear+1;return window.drawStocksPlot("#flot-graph",e),window.drawChatMessages(".stocks__chat-body",e),!1}))}}))},function(t,e,a){"use strict";var i,n=a(0);(0,((i=n)&&i.__esModule?i:{default:i}).default)(document).on("mouseup",(function(t){}))}]);