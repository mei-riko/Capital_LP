!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e){t.exports=jQuery},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};a(2),a(3),a(4),a(5),a(6),a(7),a(8),a(9),(0,o.default)((function(){(0,o.default)(document).on("click",'[data-trigger="scroll"]',(function(t){return t.preventDefault(),(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,o.default)(document).on("click",'[data-trigger="click"]',(function(t){t.preventDefault()}))}))},function(t,e,a){"use strict";var i,n=a(0);(0,((i=n)&&i.__esModule?i:{default:i}).default)(document).on("mouseup",(function(t){}))},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};(0,o.default)((function(){!function t(){(0,o.default)('a[data-loader="ajax"]').click((function(e){e.preventDefault();var a=(0,o.default)(this),i=a.attr("href"),n=a.data("target");return(0,o.default)(n).load(i,t),!1}))}()}))},function(t,e,a){"use strict";window.companydata={active:[],available:[{icon:"./icon/apple.svg",name:"Apple",shareCode:"APLE",priceAtStart:{usd:"27.34"},totalAtStart:{rur:"18 317.80"},numberOfShares:10,pricesUSD:[[2016,27.34,"","wait"],[2017,39.38,"Apple message 0001","wait"],[2018,54.4,"Apple message 0002","wait"],[2019,51.63,"Apple message 0003","wait"],[2020,124.37,"Apple message 0004","wait"],[2021,150.19,"Apple message 0005","wait"]],sumPricesRUR:[[2016,18317.8],[2017,22849.4],[2018,35904],[2019,33559.5],[2020,90790.1],[2021,109638.7]]},{icon:"./icon/netflix.svg",name:"Netflix",shareCode:"NFLX",priceAtStart:{usd:"95.87"},totalAtStart:{rur:"19 269.87"},numberOfShares:3,pricesUSD:[[2016,95.87,"",""],[2017,166.54,"Netflix Message 001","wait"],[2018,316.78,"Netflix Message 002","wait"],[2019,302.8,"Netflix Message 003","wait"],[2020,492.31,"Netflix Message 004","wait"],[2021,518.91,"Netflix Message 005","wait"]],sumPricesRUR:[[2016,19269.87],[2017,28977.96],[2018,62722.44],[2019,59046],[2020,107815.89],[2021,113641.29]]},{icon:"./icon/yandex.svg",name:"Yandex",shareCode:"YNDX",priceAtStart:{usd:"22.48"},totalAtStart:{rur:"18 073.92"},numberOfShares:12,pricesUSD:[[2016,22.48,"",""],[2017,29.81,"Yandex Message 001","sell"],[2018,31.27,"Yandex Message 002","sell"],[2019,36.48,"Yandex Message 003","sell"],[2020,63.57,"Yandex Message 004","sell"],[2021,69.07,"Yandex Message 005","sell"]],sumPricesRUR:[[2016,18073.92],[2017,20747.76],[2018,24765.84],[2019,28454.4],[2020,55687.32],[2021,60505.32]]},{icon:"./icon/tesla.svg",name:"Tesla",shareCode:"TSLA",priceAtStart:{usd:"45.00"},totalAtStart:{rur:"18 090.00"},numberOfShares:6,pricesUSD:[[2016,45,""],[2017,69.49,"Tesla Message 001","sell"],[2018,61.1,"Tesla Message 002","sell"],[2019,43.99,"Tesla Message 003","sell"],[2020,410,"Tesla Message 004","sell"],[2021,665.71,"Tesla Message 005","sell"]],sumPricesRUR:[[2016,18090],[2017,24182.52],[2018,24195.6],[2019,17156.1],[2020,179580],[2021,291580.98]]}]}},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initCompanyPart=function(){window.drawActiveCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__title.item_company__subtotal").empty().html("$"+e.priceAtStart.usd);var i=parseFloat(e.totalAtStart.rur.replace(/[^0-9.]/g,"")),n=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(i).toFixed(2));a.find(".item__title.item_company__total .item__value").empty().html(n)}},window.loadNextCompanies=function(){for(var t=window.companydata.active,e=[],a=0;a<window.companydata.available.length;a++)t.includes(a)||e.push(a);!function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}}(e),window.companydata.active=e.slice(0,2),drawActiveCompanies()},window.initNextCompany=function(){(0,o.default)(".nextcompany").click((function(t){return t.preventDefault(),loadNextCompanies(),!1}))},window.getTotalSharesRur=function(){for(var t=0,e=0;e<window.companydata.active.length;e++){var a=""+window.companydata.available[window.companydata.active[e]].totalAtStart.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(t).toFixed(2))},window.showTotalSharesRur=function(t){(0,o.default)(t).empty().html(window.getTotalSharesRur())},window.showCurrentCompanies=function(){for(var t=0;t<window.companydata.active.length;t++){var e=window.companydata.available[window.companydata.active[t]],a=(0,o.default)(".item.item_company.item_company-inside[data-id="+t+"]").first();a.find(".item_company__count").empty().html(e.numberOfShares+"&nbsp;шт."),a.find(".item_company__logo img").attr("src",e.icon),a.find(".item__title.item_company__name").empty().html(e.shareCode),a.find(".item_company__fullname").empty().html(e.name),a.find(".item__subtotal").empty().html("$"+e.priceAtStart.usd)}},window.showLostProfitRur=function(t){for(var e=0,a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]],n=""+i.sumPricesRUR[i.sumPricesRUR.length-1][1];e+=parseFloat(n.replace(/[^0-9.]/g,""))}var r=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(e).toFixed(2));(0,o.default)(t).empty().html(r)};try{initNextCompany(),loadNextCompanies(),drawActiveCompanies()}catch(t){}},(0,o.default)(window.initCompanyPart)},function(t,e,a){"use strict";window.productdata={active:[2,3],available:[{icon:"./img/clock.png",name:"Apple Watch Series 2x",type:"Умные часы",price:{rur:"34 000"}},{icon:"./img/clock.png",name:"Samsung Galaxy S7x",type:"Смартфон",price:{rur:"54 000"}},{icon:"./img/clock.png",name:"Apple Watch Series 2",type:"Умные часы",price:{rur:"34 000"}},{icon:"./img/clock.png",name:"Samsung Galaxy S7",type:"Смартфон",price:{rur:"54 000"}}]}},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.initProductPart=function(){window.drawActiveProducts=function(){for(var t=0;t<window.productdata.active.length;t++){var e=window.productdata.available[window.productdata.active[t]],a=(0,o.default)(".item.item_product[data-id="+t+"]").first();a.find(".item_product__type").empty().html(e.type),a.find(".item_product__name").empty().html(e.name),a.find(".item_product__img img").attr("src",e.icon),a.find(".item__title.item_product__price .item__value").empty().html(e.price.rur)}},window.loadNextProducts=function(){for(var t=window.productdata.active,e=t[0],a=0;a<t.length;a++)e<t[a]&&(e=t[a]);window.productdata.active=[];for(var i=2*window.productdata.available.length,n=e+1;n<i;n++){var o=n%window.productdata.available.length;if(t.includes(o)||window.productdata.active.push(o),window.productdata.active.length>=2)break}drawActiveProducts()},window.initNextCompany=function(){(0,o.default)(".nextproduct").click((function(t){return t.preventDefault(),loadNextProducts(),!1}))},window.getTotalProductsRur=function(){for(var t=0,e=0;e<window.productdata.active.length;e++){var a=""+window.productdata.available[window.productdata.active[e]].price.rur;t+=parseFloat(a.replace(/[^0-9.]/g,""))}return t},window.showTotalProductsRur=function(t){(0,o.default)(t).empty().html(window.getTotalProductsRur())};try{window.initNextCompany(),window.drawActiveProducts()}catch(t){}},(0,o.default)(window.initProductPart)},function(t,e,a){"use strict";var i,n,o,r,l;i=CanvasRenderingContext2D.prototype,n=document.createElement("canvas").getContext("2d"),o=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,1!==(l=(window.devicePixelRatio||1)/o)&&(function(t,e){for(var a in t)t.hasOwnProperty(a)&&e(t[a],a)}({fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all"},(function(t,e){var a;i[e]=(a=i[e],function(){var e,i,n=Array.prototype.slice.call(arguments);if("all"===t)n=n.map((function(t){return t*l}));else if(Array.isArray(t))for(e=0,i=t.length;e<i;e++)n[t[e]]*=l;return a.apply(this,n)})})),i.stroke=(r=i.stroke,function(){this.lineWidth*=l,r.apply(this,arguments),this.lineWidth/=l}),i.fillText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.fillText),i.strokeText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=l,e[2]*=l,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e*l+a})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,a){return e/l+a}))}}(i.strokeText)),function(t){t.getContext=function(t){return function(e){var a,i,n=t.call(this,e);return"2d"===e&&(a=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,(i=(window.devicePixelRatio||1)/a)>1&&(this.style.height=this.height+"px",this.style.width=this.width+"px",this.width*=i,this.height*=i)),n}}(t.getContext)}(HTMLCanvasElement.prototype)},function(t,e,a){"use strict";var i,n=a(0),o=(i=n)&&i.__esModule?i:{default:i};window.plotImages=[],window.plotMaxYear=!1,(0,o.default)((function(){window.drawActiveStocks=function(t){for(var e=0;e<window.companydata.active.length;e++){var a=window.companydata.available[window.companydata.active[e]],i=(0,o.default)(".stocks__company[data-id="+e+"]").first();i.find(".item_stocks__count").empty().html(a.numberOfShares+"&nbsp;шт."),i.find(".item_stocks__title").empty().html(a.shareCode),i.find(".item_stocks__subtitle").empty().html(a.name);var n=a.pricesUSD.filter((function(e){return e[0]==t}));n=n[0]?n[0][1]:a.pricesUSD[1][1],i.find(".item_stocks__title#subtotal").empty().html("$"+n);var r=a.sumPricesRUR.filter((function(e){return e[0]==t}));r=""+(r=r[0]?r[0][1]:a.sumPricesRUR[1][1]);var l=parseFloat(r.replace(/[^0-9.]/g,"")),s=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:2}).format(Number(l).toFixed(2));i.find(".item_stocks__title#total").empty().html(s)}},window.drawStocksPlot=function(t,e){for(var a=(0,o.default)(t),i=1,n=[],r=!1,l=!1,s=!1,c=!1,d=0;d<window.companydata.active.length;d++)for(var u=window.companydata.available[window.companydata.active[d]],w=0;w<u.pricesUSD.length;w++)(!1===r||r>u.pricesUSD[w][0])&&(r=u.pricesUSD[w][0]),(!1===l||l<u.pricesUSD[w][0])&&(l=u.pricesUSD[w][0]);window.plotMinYear=u.pricesUSD[0][0],!1===e&&(e=u.pricesUSD[1][0]),window.plotMaxYear=e,window.maxYearDrawn=!0;for(var f=0;f<window.companydata.active.length;f++){u=window.companydata.available[window.companydata.active[f]];for(var p=[],m=0;m<u.pricesUSD.length;m++)u.pricesUSD[m][0]<=e?((!1===s||s>u.pricesUSD[m][1])&&(s=u.pricesUSD[m][1]),(!1===c||c<u.pricesUSD[m][1])&&(c=u.pricesUSD[m][1]),p.push({X:u.pricesUSD[m][0],Y:u.pricesUSD[m][1]})):window.maxYearDrawn=!1;var h,v;(i=Math.round(100*(p[p.length-1].Y/p[p.length-2].Y-1)))>0?(h="+ "+i+"% ↑",v="#47AF34"):i<0?(h=i+"% ↓",v="#FA633F"):(h="=",v="#47AF34");n.push({values:p,icon:u.icon,dataLabel:h,dataLabelBg:v,dataLabelColor:"#FFFFFF"})}n[0].color="#2A4269",n[1].color="rgb(101, 181, 178)";for(var g=[],x=r;x<=l;x++)g.push(x);c+=100-c%100;for(var y=[],S=s=0;S<=c;S+=100)y.push(S);if(!window.drawStocksPlotOptions){var b=a.parent().innerWidth(),P=Math.round(b/2);window.drawStocksPlotOptions={canvasWidth:2*b,canvasHeight:2*P,css:{width:b+"px",height:P+"px",maxWidth:b+"px",maxHeight:P+"px"},xPadding:280,xShift:-160,yShift:60,yPadding:80,wLabel:90,hLabel:60,lineWidth:16,lineWidthAxes:8,xAxisTicks:g,yAxisTicks:y,font:{style:"italic",size:35,unit:"px",family:"sans-serif"},dataLabelFont:{style:"italic",size:30,unit:"px",family:"sans-serif"},maxYear:window.plotMaxYear},b<400&&(window.drawStocksPlotOptions.xPadding=80,window.drawStocksPlotOptions.xShift=-20,window.drawStocksPlotOptions.yShift=10,window.drawStocksPlotOptions.yPadding=10,window.drawStocksPlotOptions.wLabel=40,window.drawStocksPlotOptions.hLabel=20,window.drawStocksPlotOptions.dataLabelFont={style:"italic",size:9,unit:"pt",family:"sans-serif"},window.drawStocksPlotOptions.font={style:"italic",size:10,unit:"pt",family:"sans-serif"},window.drawStocksPlotOptions.lineWidth=8,window.drawStocksPlotOptions.lineWidthAxes=4)}window.drawStocksPlotOptions.maxYear=window.plotMaxYear,window.drawStocksPlotOptions.yAxisTicks=y,function(t,e,a){var i=document.createElement("canvas");i.width=a.canvasWidth,i.height=a.canvasHeight,(0,o.default)(i).attr("width",a.canvasWidth).attr("height",a.canvasHeight).css({width:a.canvasWidth+"px",height:a.canvasHeight+"px"});for(var n={canvasWidth:a.canvasWidth*window.devicePixelRatio,canvasHeight:a.canvasHeight*window.devicePixelRatio,xPadding:a.xPadding*window.devicePixelRatio,xShift:a.xShift*window.devicePixelRatio,yPadding:a.yPadding*window.devicePixelRatio,yShift:a.yShift*window.devicePixelRatio,wLabel:a.wLabel*window.devicePixelRatio,hLabel:a.hLabel*window.devicePixelRatio,lineWidth:a.lineWidth*window.devicePixelRatio,lineWidthAxes:a.lineWidthAxes*window.devicePixelRatio,font:{style:a.font.style,size:Math.round(a.font.size*window.devicePixelRatio),unit:a.font.unit,family:a.font.family},dataLabelFont:{style:a.dataLabelFont.style,size:Math.round(a.dataLabelFont.size*window.devicePixelRatio),unit:a.dataLabelFont.unit,family:a.dataLabelFont.family},css:a.css,yAxisTicks:a.yAxisTicks,xAxisTicks:a.xAxisTicks,maxYear:a.maxYear},r=!1,l=n.yAxisTicks[n.yAxisTicks.length-1],s=!1,c=!1,d=0;d<n.xAxisTicks.length;d++)(!1===s||s>n.xAxisTicks[d])&&(s=n.xAxisTicks[d]),(!1===c||c<n.xAxisTicks[d])&&(c=n.xAxisTicks[d]);function u(t){var e=(n.canvasWidth-n.xShift-2*n.xPadding)/(c-s- -.1)*(t-s- -.1)+n.xShift+n.xPadding;return r&&console.log("getXPixel",{val:t,minX:s,maxX:c,canvasWidth:n.canvasWidth,xShift:n.xShift,xPadding:n.xPadding},"=>",e),e}function w(t){var e=n.canvasHeight-((t-0)*(n.canvasHeight-n.yShift-2*n.yPadding)/(l-0)+n.yShift+n.yPadding);return r&&console.log("getYPixel",{val:t,minY:0,maxY:l,canvasHeight:n.canvasHeight,yShift:n.yShift,yPadding:n.yPadding},"=>",e),e}function f(t){return t.size+t.unit+" "+t.family}var p=(0,o.default)(t).css(n.css),m=i.getContext("2d");m.scale(1/window.devicePixelRatio,1/window.devicePixelRatio),m.clearRect(0,0,n.canvasWidth,n.canvasHeight),r=!1,m.font=f(n.font),m.textAlign="right",m.textBaseline="middle",m.strokeStyle="#333",m.fillStyle="#808080";for(var h=0;h<n.yAxisTicks.length;h++)m.fillText("$"+n.yAxisTicks[h],u(s-.1),w(n.yAxisTicks[h]));for(r=!1,m.lineWidth=n.lineWidthAxes,m.font=f(n.font),m.textAlign="center",d=0;d<n.xAxisTicks.length;d++){n.xAxisTicks[d]==n.maxYear?(m.fillStyle="#ffffff",m.strokeStyle="#ffffff"):(m.fillStyle="#808080",m.strokeStyle="#333");var v=u(n.xAxisTicks[d]);m.fillText(n.xAxisTicks[d],v,n.canvasHeight-n.yPadding+5),m.beginPath(),m.moveTo(v,w(0)+5),m.lineTo(v,w(l)-5),m.stroke()}var g=function(t,e,a,n,o,r){return function(){console.log("c.drawImage",e.src,a,n,o,r),t.drawImage(e,a,n,o,r),p.attr("src",i.toDataURL())}},x=e[0].values,y=e[1].values;x[x.length-1].Y-y[y.length-1].Y>.5*n.hLabel||y[y.length-1].Y-x[x.length-1].Y>.5*n.hLabel?(e[0].labelShift=0,e[1].labelShift=0):x[x.length-1].Y-y[y.length-1].Y>0?(e[0].labelShift=-.5,e[1].labelShift=.5):x[x.length-1].Y-y[y.length-1].Y<=0&&(e[0].labelShift=.5,e[1].labelShift=-.5);for(var S=0;S<e.length;S++){var b=e[S];m.strokeStyle=b.color,m.lineWidth=n.lineWidth,m.beginPath(),m.moveTo(u(b.values[0].X),w(b.values[0].Y));for(var P=1;P<b.values.length;P++)m.lineTo(u(b.values[P].X),w(b.values[P].Y));m.stroke(),m.fillStyle=b.color;for(P=0;P<b.values.length;P++){var _=u(b.values[P].X),k=w(b.values[P].Y);m.beginPath(),m.arc(_,k,n.lineWidth/2,0,2*Math.PI,!0),m.fill()}var R=b.values[b.values.length-1];m.fillStyle=b.dataLabelBg;var A=u(R.X)+1.5*n.hLabel,M=w(R.Y)-n.hLabel/2+b.labelShift*n.hLabel;m.fillRect(A,M,n.wLabel,n.hLabel),m.beginPath(),m.arc(A,M+n.hLabel/2,n.hLabel/2,0,2*Math.PI,!0),m.fill(),m.beginPath(),m.arc(A+n.wLabel,M+n.hLabel/2,n.hLabel/2,0,2*Math.PI,!0),m.fill(),m.fillStyle="#ffffff",m.beginPath();var T=n.hLabel/1.5;m.arc(A-1.5*n.hLabel,M+n.hLabel/2,T,0,2*Math.PI,!0),m.fill();var L=new Image;L.src=b.icon;var D=.8*T;L.onload=g(m,L,(A-1.5*n.hLabel-D)*window.devicePixelRatio,(M+n.hLabel/2-D)*window.devicePixelRatio,2*D*window.devicePixelRatio,2*D*window.devicePixelRatio),window.plotImages.push(L),m.font=f(n.dataLabelFont),m.textAlign="center",m.fillStyle=b.dataLabelColor,m.fillText(b.dataLabel,A+n.wLabel/2,M+n.hLabel/2),m.font=f(n.font)}p.attr("src",i.toDataURL())}(t,n,window.drawStocksPlotOptions),window.maxYearDrawn&&(0,o.default)("#oneMoreYear").parent().addClass("d-none")},window.drawChatMessages=function(t,e){if(!window.chatMessages){window.chatMessages={};for(var a=0;a<window.companydata.active.length;a++){var i=window.companydata.available[window.companydata.active[a]];!1===e&&(e=i.pricesUSD[1][0]);for(var n=0;n<i.pricesUSD.length;n++)window.chatMessages[i.pricesUSD[n][0]]||(window.chatMessages[i.pricesUSD[n][0]]=[]),i.pricesUSD[n][2]&&window.chatMessages[i.pricesUSD[n][0]].push(i.pricesUSD[n][2])}for(var r in window.chatMessages){var l=window.chatMessages[r],s=Math.floor(Math.random()*l.length);window.chatMessages[r]=l[s]}}var c=(0,o.default)(t),d=c.children().first().detach();for(var u in c.empty(),window.plotMaxYear=e,window.chatMessages)if(u<=e&&window.chatMessages[u]){var w=d.clone();w.find(".stocks__message-date").empty().html(u+" год"),w.find(".stocks__message-text").empty().html(window.chatMessages[u]),c.prepend(w)}},window.activateNextBtn=function(){(0,o.default)("#oneMoreYear").click((function(t){t.preventDefault();var e=window.plotMaxYear+1;return window.drawActiveStocks(e),window.drawStocksPlot("#flot-graph",e),window.drawChatMessages(".stocks__chat-body",e),!1}))},window.showResults=function(t,e){var a=window.plotMaxYear-window.plotMinYear;1==a?(0,o.default)(t).empty().html(a+" год"):a>1&&a<=4?(0,o.default)(t).empty().html(a+" года"):(0,o.default)(t).empty().html(a+" лет");for(var i=0,n=0;n<window.companydata.active.length;n++){var r=""+window.companydata.available[window.companydata.active[n]].sumPricesRUR[0][1];i+=parseFloat(r.replace(/[^0-9.]/g,""))}for(var l,s=0,c=0;c<window.companydata.active.length;c++){l=function(t){return t[0]==window.plotMaxYear};var d=""+window.companydata.available[window.companydata.active[c]].sumPricesRUR.filter(l)[0][1];s+=parseFloat(d.replace(/[^0-9.]/g,""))}var u=new Intl.NumberFormat("ru-RU",{useGrouping:!0}).format(Number(s-i).toFixed(2));(0,o.default)(e).empty().html(u)}}))}]);