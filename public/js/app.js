!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e){t.exports=jQuery},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};a(2),a(3),a(4),a(5),a(6),a(7),a(8),a(9),(0,o.default)((function(){(0,o.default)(document).on("click",'[data-trigger="scroll"]',(function(t){return t.preventDefault(),(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,o.default)(document).on("click",'[data-trigger="click"]',(function(t){t.preventDefault()}))}))},function(t,e,a){"use strict";var i,n=a(0);(0,((i=n)&&i.__esModule?i:{default:i}).default)(document).on("mouseup",(function(t){}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};(0,o.default)((function(){!function t(){(0,o.default)('a[data-loader="ajax"]').click((function(e){e.preventDefault();var a=(0,o.default)(this),i=a.attr("href"),n=a.data("target");return(0,o.default)(n).load(i,t),!1}))}()}))},function(t,e,a){"use strict";window.companydata={active:[],available:[{icon:"./icon/apple.svg",name:"Apple",shareCode:"APLE",priceAtStart:{usd:"27.34"},totalAtStart:{rur:"18 317.80"},numberOfShares:10,pricesUSD:[[2016,27.34,"","wait"],[2017,39.38,"Apple message 0001","wait"],[2018,54.4,"Apple message 0002","wait"],[2019,51.63,"Apple message 0003","wait"],[2020,124.37,"Apple message 0004","wait"],[2021,150.19,"Apple message 0005","wait"]],sumPricesRUR:[[2016,18317.8],[2017,22849.4],[2018,35904],[2019,33559.5],[2020,90790.1],[2021,109638.7]]},{icon:"./icon/netflix.svg",name:"Netflix",shareCode:"NFLX",priceAtStart:{usd:"95.87"},totalAtStart:{rur:"19 269.87"},numberOfShares:3,pricesUSD:[[2016,95.87,"",""],[2017,166.54,"Netflix Message 001","wait"],[2018,316.78,"Netflix Message 002","wait"],[2019,302.8,"Netflix Message 003","wait"],[2020,492.31,"Netflix Message 004","wait"],[2021,518.91,"Netflix Message 005","wait"]],sumPricesRUR:[[2016,19269.87],[2017,28977.96],[2018,62722.44],[2019,59046],[2020,107815.89],[2021,113641.29]]},{icon:"./icon/yandex.svg",name:"Yandex",shareCode:"YNDX",priceAtStart:{usd:"22.48"},totalAtStart:{rur:"18 073.92"},numberOfShares:12,pricesUSD:[[2016,22.48,"",""],[2017,29.81,"Yandex Message 001","sell"],[2018,31.27,"Yandex Message 002","sell"],[2019,36.48,"Yandex Message 003","sell"],[2020,63.57,"Yandex Message 004","sell"],[2021,69.07,"Yandex Message 005","sell"]],sumPricesRUR:[[2016,18073.92],[2017,20747.76],[2018,24765.84],[2019,28454.4],[2020,55687.32],[2021,60505.32]]},{icon:"./icon/tesla.svg",name:"Tesla",shareCode:"TSLA",priceAtStart:{usd:"45.00"},totalAtStart:{rur:"18 090.00"},numberOfShares:6,pricesUSD:[[2016,45,""],[2017,69.49,"Tesla Message 001","sell"],[2018,61.1,"Tesla Message 002","sell"],[2019,43.99,"Tesla Message 003","sell"],[2020,410,"Tesla Message 004","sell"],[2021,665.71,"Tesla Message 005","sell"]],sumPricesRUR:[[2016,18090],[2017,24182.52],[2018,24195.6],[2019,17156.1],[2020,179580],[2021,291580.98]]}]}},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initCompanyPart=function(){window.drawActiveCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__title.item_company__subtotal").empty().html("$"+e.priceAtStart.usd);var i=parseFloat(e.totalAtStart.rur.replace(/[^0-9.]/g,"")),n=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(i).toFixed(2));a.find(".item__title.item_company__total .item__value").empty().html(n)}},window.loadNextCompanies=function(){for(var t=window.companydata.active,e=[],a=0;a<window.companydata.available.length;a++)t.includes(a)||e.push(a);!function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}}(e),window.companydata.active=e.slice(0,2),drawActiveCompanies()},window.initNextCompany=function(){(0,o.default)(".nextcompany").click((function(t){return t.preventDefault(),loadNextCompanies(),!1}))},window.getTotalSharesRur=function(){for(var t=0,e=0;e<window.companydata.active.length;e++){var a=""+window.companydata.available[window.companydata.active[e]].totalAtStart.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(t).toFixed(2))},window.showTotalSharesRur=function(t){(0,o.default)(t).empty().html(window.getTotalSharesRur())},window.showCurrentCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company.item_company-inside[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__subtotal").empty().html("$"+e.priceAtStart.usd)}},window.showLostProfitRur=function(t){for(var e=0,a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]],n=""+i.sumPricesRUR[i.sumPricesRUR.length-1][1];e+=parseFloat(n.replace(/[^0-9.]/g,""))}var r=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(e).toFixed(2));(0,o.default)(t).empty().html(r)};try{initNextCompany(),loadNextCompanies(),drawActiveCompanies()}catch(t){}},(0,o.default)(window.initCompanyPart)},function(t,e,a){"use strict";window.productdata={active:[2,3],available:[{icon:"./img/clock.png",name:"Apple Watch Series 2x",type:"Умные часы",price:{rur:"34 000"}},{icon:"./img/clock.png",name:"Samsung Galaxy S7x",type:"Смартфон",price:{rur:"54 000"}},{icon:"./img/clock.png",name:"Apple Watch Series 2",type:"Умные часы",price:{rur:"34 000"}},{icon:"./img/clock.png",name:"Samsung Galaxy S7",type:"Смартфон",price:{rur:"54 000"}}]}},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initProductPart=function(){window.drawActiveProducts=function(){for(var t=0;t<window.productdata.active.length;t++){var e=window.productdata.available[window.productdata.active[t]],a=(0,o.default)(".item.item_product[data-id="+t+"]").first();a.find(".item_product__type").empty().html(e.type),a.find(".item_product__name").empty().html(e.name),a.find(".item_product__img img").attr("src",e.icon),a.find(".item__title.item_product__price .item__value").empty().html(e.price.rur)}},window.loadNextProducts=function(){for(var t=window.productdata.active,e=t[0],a=0;a<t.length;a++)e<t[a]&&(e=t[a]);window.productdata.active=[];for(var i=2*window.productdata.available.length,n=e+1;n<i;n++){var o=n%window.productdata.available.length;if(t.includes(o)||window.productdata.active.push(o),window.productdata.active.length>=2)break}drawActiveProducts()},window.initNextCompany=function(){(0,o.default)(".nextproduct").click((function(t){return t.preventDefault(),loadNextProducts(),!1}))},window.getTotalProductsRur=function(){for(var t=0,e=0;e<window.productdata.active.length;e++){var a=""+window.productdata.available[window.productdata.active[e]].price.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return t},window.showTotalProductsRur=function(t){(0,o.default)(t).empty().html(window.getTotalProductsRur())};try{window.initNextCompany(),window.drawActiveProducts()}catch(t){}},(0,o.default)(window.initProductPart)},function(t,e,a){"use strict";var i,n,o,r,l;i=CanvasRenderingContext2D.prototype,n=document.createElement("canvas").getContext("2d"),o=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,1!==(l=(window.devicePixelRatio||1)/o)&&(function(t,e){for(var a in t)t.hasOwnProperty(a)&&e(t[a],a)}({fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all"},(function(t,e){var a;i[e]=(a=i[e],function(){var e,i,n=Array.prototype.slice.call(arguments);if("all"===t)n=n.map((function(t){return t*l}));else if(Array.isArray(t))for(e=0,i=t.length;e<i;e++)n[t[e]]*=l;return a.apply(this,n)})})),i.stroke=(r=i.stroke,function(){this.lineWidth*=l,r.apply(this,arguments),this.lineWidth/=l}),i.fillText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.fillText),i.strokeText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.strokeText)),function(t){t.getContext=function(t){return function(e){var a,i,n=t.call(this,e);return"2d"===e&&(a=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,(i=(window.devicePixelRatio||1)/a)>1&&(this.style.height=this.height+"px",this.style.width=this.width+"px",this.width*=i,this.height*=i)),n}}(t.getContext)}(HTMLCanvasElement.prototype)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.plotImages=[],window.plotMaxYear=!1,(0,o.default)((function(){window.drawActiveStocks=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".stocks__company[data-id="+t+"]").first();a.find(".item_stocks__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_stocks__title").empty().html(e.shareCode),a.find(".item_stocks__subtitle").empty().html(e.name),a.find(".item_stocks__title#subtotal").empty().html("$"+e.priceAtStart.usd);var i=parseFloat(e.totalAtStart.rur.replace(/[^0-9.]/g,"")),n=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(i).toFixed(2));a.find(".item_stocks__title#total").empty().html(n)}},window.drawActiveStocks(),window.drawStocksPlot=function(t,e){for(var a=1,i=[],n=!1,r=!1,l=!1,c=!1,s=0;s<window.companydata.active.length;s++)for(var d=window.companydata.available[window.companydata.active[s]],u=0;u<d.pricesUSD.length;u++)(!1===n||n>d.pricesUSD[u][0])&&(n=d.pricesUSD[u][0]),(!1===r||r<d.pricesUSD[u][0])&&(r=d.pricesUSD[u][0]);window.plotMinYear=d.pricesUSD[0][0],!1===e&&(e=d.pricesUSD[1][0]),window.plotMaxYear=e,window.maxYearDrawn=!0;for(var p=0;p<window.companydata.active.length;p++){d=window.companydata.available[window.companydata.active[p]];for(var f=[],m=0;m<d.pricesUSD.length;m++)d.pricesUSD[m][0]<=e?((!1===l||l>d.pricesUSD[m][1])&&(l=d.pricesUSD[m][1]),(!1===c||c<d.pricesUSD[m][1])&&(c=d.pricesUSD[m][1]),f.push({X:d.pricesUSD[m][0],Y:d.pricesUSD[m][1]})):window.maxYearDrawn=!1;var w,h;(a=Math.round(100*(f[f.length-1].Y/f[f.length-2].Y-1)))>0?(w="+ "+a+"% ↑",h="#47AF34"):a<0?(w=a+"% ↓",h="#FA633F"):(w="=",h="#47AF34");i.push({values:f,icon:d.icon,dataLabel:w,dataLabelBg:h,dataLabelColor:"#FFFFFF"})}i[0].color="#2A4269",i[1].color="rgb(101, 181, 178)";var g=(0,o.default)(t);g.attr("width",g.parent().innerWidth()),g.attr("height",Math.round(g.attr("width")/1.8));for(var v=[],y=n;y<=r;y++)v.push(y);c+=100-c%100;for(var x=[],_=l=0;_<=c;_+=100)x.push(_);var S={xPadding:140,xShift:-80,yPadding:40,wLabel:45,hLabel:30,lineWidth:8,lineWidthAxes:4,xAxisTicks:v,yAxisTicks:x,font:"italic 14pt sans-serif",dataLabelFont:"italic 10pt sans-serif",drawLogo:!0};1*g.attr("width")<400&&(g.attr("height",Math.round(g.attr("width"))),S.drawLogo=!1,S.xPadding=80,S.xShift=-20,S.yPadding=40,S.dataLabelFont="italic 9pt sans-serif",S.font="italic 10pt sans-serif",S.wLabel=40),function(t,e,a){for(var i=(0,o.default)(t),n=a.xShift,r=a.yAxisTicks[a.yAxisTicks.length-1],l=!1,c=!1,s=0;s<a.xAxisTicks.length;s++)(!1===l||l>a.xAxisTicks[s])&&(l=a.xAxisTicks[s]),(!1===c||c<a.xAxisTicks[s])&&(c=a.xAxisTicks[s]);function d(t,e,n,o){return(i.width()-o-2*a.xPadding)/(n-e)*(t-e)+o+a.xPadding}function u(t,e,n,o){return i.height()-((t-e)*(i.height()-o-2*a.yPadding)/(n-e)+o+a.yPadding)}var p=i[0].getContext("2d");p.clearRect(0,0,i.width(),i.height()),p.lineWidth=a.lineWidthAxes,p.strokeStyle="#333",p.font=a.font,p.textAlign="center",p.textAlign="right",p.textBaseline="middle";for(var f=0;f<a.yAxisTicks.length;f++)p.fillStyle="#808080",p.fillText("$"+a.yAxisTicks[f],50,u(a.yAxisTicks[f],0,r,30));for(p.textAlign="center",s=0;s<a.xAxisTicks.length;s++){p.fillStyle="#808080";var m=d(a.xAxisTicks[s],l,c,n);p.fillText(a.xAxisTicks[s],m,i.height()-a.yPadding+5),p.beginPath(),p.moveTo(m,u(0,0,r,30)+5),p.lineTo(m,u(r,0,r,30)-5),p.stroke()}var w=function(t,e,a,i,n,o){return function(){t.drawImage(e,a-1.8*o,i+.08*o,.9*o,.9*o)}},h=a.wLabel||60,g=a.hLabel||30,v=e[0].values,y=e[1].values;v[v.length-1].Y-y[y.length-1].Y>.8*g||y[y.length-1].Y-v[v.length-1].Y>.8*g?(e[0].labelShift=0,e[1].labelShift=0):v[v.length-1].Y-y[y.length-1].Y>0?(e[0].labelShift=-.5,e[1].labelShift=.5):v[v.length-1].Y-y[y.length-1].Y<=0&&(e[0].labelShift=.5,e[1].labelShift=-.5);for(var x=0;x<e.length;x++){var _=e[x];p.strokeStyle=_.color,p.lineWidth=a.lineWidth,p.beginPath(),p.moveTo(d(_.values[0].X,l,c,n),u(_.values[0].Y,0,r,30));for(var S=1;S<_.values.length;S++)p.lineTo(d(_.values[S].X,l,c,n),u(_.values[S].Y,0,r,30));p.stroke(),p.fillStyle=_.color;for(S=0;S<_.values.length;S++){var b=d(_.values[S].X,l,c,n),P=u(_.values[S].Y,0,r,30);p.beginPath(),p.arc(b,P,4,0,2*Math.PI,!0),p.fill()}var k=_.values[_.values.length-1];p.fillStyle=_.dataLabelBg;var A=d(k.X,l,c,n);a.drawLogo?A+=2.5*g:A+=.8*g;var M=u(k.Y,0,r,30)-g/2+_.labelShift*g;if(p.fillRect(A,M,h,g),p.beginPath(),p.arc(A,M+g/2,g/2,0,2*Math.PI,!0),p.fill(),p.beginPath(),p.arc(A+h,M+g/2,g/2,0,2*Math.PI,!0),p.fill(),a.drawLogo){p.fillStyle="#ffffff",p.beginPath(),p.arc(A-g-10,M+g/2,g/1.5,0,2*Math.PI,!0),p.fill();var R=new Image;R.src=_.icon,R.onload=w(p,R,A,M,0,g),window.plotImages.push(R)}p.font=a.dataLabelFont,p.textAlign="center",p.fillStyle=_.dataLabelColor,p.fillText(_.dataLabel,A+h/2,M+g/2),p.font=a.font}}(t,i,S),window.maxYearDrawn&&(0,o.default)("#oneMoreYear").parent().addClass("d-none")},window.drawChatMessages=function(t,e){if(!window.chatMessages){window.chatMessages={};for(var a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]];!1===e&&(e=i.pricesUSD[1][0]);for(var n=0;n<i.pricesUSD.length;n++)window.chatMessages[i.pricesUSD[n][0]]||(window.chatMessages[i.pricesUSD[n][0]]=[]),i.pricesUSD[n][2]&&window.chatMessages[i.pricesUSD[n][0]].push(i.pricesUSD[n][2])}for(var r in window.chatMessages){var l=window.chatMessages[r],c=Math.floor(Math.random()*l.length);window.chatMessages[r]=l[c]}}var s=(0,o.default)(t),d=s.children().first().detach();for(var u in s.empty(),window.plotMaxYear=e,window.chatMessages)if(u<=e&&window.chatMessages[u]){var p=d.clone();p.find(".stocks__message-date").empty().html(u+" год"),p.find(".stocks__message-text").empty().html(window.chatMessages[u]),s.prepend(p)}},window.activateNextBtn=function(){(0,o.default)("#oneMoreYear").click((function(t){t.preventDefault();var e=window.plotMaxYear+1;return window.drawStocksPlot("#flot-graph",e),window.drawChatMessages(".stocks__chat-body",e),!1}))},window.showResults=function(t,e){var a=window.plotMaxYear-window.plotMinYear;1==a?(0,o.default)(t).empty().html(a+" год"):a>1&&a<=4?(0,o.default)(t).empty().html(a+" года"):(0,o.default)(t).empty().html(a+" лет");for(var i=0,n=0;n<window.companydata.active.length;n++){var r=""+window.companydata.available[window.companydata.active[n]].sumPricesRUR[0][1];i+=parseFloat(r.replace(/[^0-9.]/g,""))}for(var l,c=0,s=0;s<window.companydata.active.length;s++){l=function(t){return t[0]==window.plotMaxYear};var d=""+window.companydata.available[window.companydata.active[s]].sumPricesRUR.filter(l)[0][1];c+=parseFloat(d.replace(/[^0-9.]/g,""))}var u=new Intl.NumberFormat("ru-RU",{useGrouping:!0}).format(Number(c-i).toFixed(2));(0,o.default)(e).empty().html(u)}}))}]);