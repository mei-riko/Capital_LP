import $ from 'jquery';

var maxActiveCompanies = 2;

window.plotImages=[];
window.plotMaxYear=false;


/*** LINEAR GRAPH FUNCTIONS ***/

function getMaxY(pricesUSD) {
    var max = false;
    for(var iD=0; iD<pricesUSD.length; iD++){
    	var data = pricesUSD[iD];
	    for(var i = 0; i < data.values.length; i ++) {
	        if(max===false || data.values[i].Y > max) {
	            max = data.values[i].Y;
	        }
	    }
    }
    max += 50 - max % 50;
    return max;
}

function drawLinearGraph(imageSelector, graphData, options) {
	
	// var graph = $(selector);
	var graph = document.createElement("canvas");
	graph.width = options.canvasWidth;
	graph.height = options.canvasHeight;
	$(graph).attr('width', options.canvasWidth)
	        .attr('height', options.canvasHeight)
			.css({
				width : options.canvasWidth + 'px',
				height: options.canvasHeight + 'px'
			});

	// recalculate the sizes
	var geometry = {
		canvasWidth: options.canvasWidth * window.devicePixelRatio,
		canvasHeight: options.canvasHeight * window.devicePixelRatio,
		xPadding : options.xPadding * window.devicePixelRatio,
		xShift: options.xShift * window.devicePixelRatio,
		yPadding : options.yPadding * window.devicePixelRatio,
		yShift: options.yShift * window.devicePixelRatio,
		wLabel : options.wLabel * window.devicePixelRatio,
		hLabel : options.hLabel * window.devicePixelRatio,
		lineWidth : options.lineWidth * window.devicePixelRatio,
		lineWidthAxes: options.lineWidthAxes * window.devicePixelRatio,
		font: {
			style:options.font.style, 
			size: Math.round(options.font.size * window.devicePixelRatio), 
			unit: options.font.unit, 
			family: options.font.family
		},
		dataLabelFont:{
			style:options.dataLabelFont.style, 
			size: Math.round(options.dataLabelFont.size * window.devicePixelRatio), 
			unit: options.dataLabelFont.unit, 
			family: options.dataLabelFont.family
		},
		// 
		css: options.css,
		yAxisTicks: options.yAxisTicks,
		xAxisTicks: options.xAxisTicks,
		maxYear: options.maxYear
	}

	// ==================================
	// alert(window.devicePixelRatio*100);
	var displayLog = false;
	var minY = 0;
	var maxY = geometry.yAxisTicks[geometry.yAxisTicks.length - 1];

	var minX = false;
	var maxX = false;
	for ( var ix = 0; ix < geometry.xAxisTicks.length; ix++ ) {
		if (minX === false || minX > geometry.xAxisTicks[ix] ) {
			minX = geometry.xAxisTicks[ix];
		}
		if (maxX === false || maxX < geometry.xAxisTicks[ix] ) {
			maxX = geometry.xAxisTicks[ix];
		}
	}
	// console.log('minX', minX, 'maxX', maxX);

    function getXPixel(val) {
		let dx=-0.1;
    	let xPixel = (
				(geometry.canvasWidth - geometry.xShift - 2 * geometry.xPadding) 
				/ ( maxX - minX - dx) 
			) * ( val - minX - dx ) 
			+ geometry.xShift + geometry.xPadding;
    	if(displayLog) console.log('getXPixel',{
			val:val,
			minX:minX,
			maxX: maxX,
			canvasWidth:geometry.canvasWidth,
			xShift:geometry.xShift,
			xPadding: geometry.xPadding
		}, '=>', xPixel);
    	return xPixel;
	}

	function getYPixel(val) {
		let yPixel = geometry.canvasHeight - (
			(val - minY) * (geometry.canvasHeight - geometry.yShift - 2 * geometry.yPadding) / (maxY - minY)
			+ geometry.yShift + geometry.yPadding
			);
		if(displayLog) console.log('getYPixel', 
					{
						val:val,
						minY: minY,
						maxY: maxY, 
						canvasHeight: geometry.canvasHeight, 
						yShift: geometry.yShift , 
						yPadding: geometry.yPadding
					}, '=>', yPixel);
	    return yPixel;
	}

	function fontString(f){
		// f = {style:'italic', size: 10, unit: 'pt', family: 'sans-serif'}
		// return f.style + ' ' + f.size + f.unit + ' ' + f.family;
		return f.size + f.unit + ' ' + f.family;
	}



    // $('#canvas-graph').empty().append(graph);
	var image = $(imageSelector).css(geometry.css);
	var c = graph.getContext('2d');

	c.scale(1/window.devicePixelRatio, 1/window.devicePixelRatio);
    c.clearRect(0, 0, geometry.canvasWidth, geometry.canvasHeight);
    

	// c.font = fontString(geometry.font);
	// console.log(c.font, ';', fontString(geometry.font));
	// // c.textAlign = "right";
	// c.strokeStyle = '#333';
	// c.fillStyle = '#808080';
	// c.fillText("AAAAAAAAAAA", 100, 100);
	// c.strokeText('Hello world', 50, 100);
	// image.attr('src', graph.toDataURL());
	// return

    // Draw the axes
    // c.textAlign = "center";
    // c.beginPath();
    // c.moveTo(geometry.xPadding, geometry.yPadding);
    // c.lineTo(geometry.xPadding, graph.height() - geometry.yPadding);
    // c.lineTo(graph.width() - geometry.xPadding, graph.height() - geometry.yPadding);
    // c.stroke();

    // Draw the Y value texts
	displayLog = false;
	c.font = fontString(geometry.font);
    c.textAlign = "right"
    c.textBaseline = "middle";
    c.strokeStyle = '#333';
	c.fillStyle = '#808080';
    for ( var iy = 0; iy < geometry.yAxisTicks.length; iy ++ ) {
		// console.log('$'+geometry.yAxisTicks[iy]);
        c.fillText('$'+geometry.yAxisTicks[iy],
			getXPixel(minX - 0.1),
        	getYPixel(geometry.yAxisTicks[iy]));
    }
	displayLog = false;

    // Draw the X value texts and axes
	c.lineWidth = geometry.lineWidthAxes;
	c.font = fontString(geometry.font);
    c.textAlign = "center"
    // console.log(geometry.xAxisTicks);
	for ( var ix = 0; ix < geometry.xAxisTicks.length; ix ++ ) {
		if (geometry.xAxisTicks[ix] == geometry.maxYear) {
			c.fillStyle = '#ffffff';
			c.strokeStyle = '#ffffff';
		} else {
			c.fillStyle = '#808080';
			c.strokeStyle = '#333';
		}
		let xPixel = getXPixel(geometry.xAxisTicks[ix]);

		c.fillText(geometry.xAxisTicks[ix], xPixel, geometry.canvasHeight - geometry.yPadding + 5);
		c.beginPath();
		c.moveTo(xPixel, getYPixel(minY) + 5);
		c.lineTo(xPixel, getYPixel(maxY) - 5);
		c.stroke();
	}
    
	// image.attr('src', graph.toDataURL()); return;

    var onImageLoaded = function(c, icon_image, xImage, yImage, wImage, hImage){
    	return function() {
			// console.log('c.drawImage', icon_image.src, 	xImage,	yImage,	wImage,	hImage);
		    c.drawImage(
		    	icon_image,
		    	xImage,
		    	yImage,
		    	wImage,
		    	hImage
		    	);
			image.attr('src', graph.toDataURL());
		}
    }
    // get minimal and maximal Y

    let v0 = graphData[0].values;
    let v1 = graphData[1].values;
    //console.log(v0, v1, v0[v0.length-1].Y, v1[v1.length-1].Y, v0[v0.length-1].Y - v1[v1.length-1].Y,  geometry.hLabel);
    if (v0[v0.length-1].Y - v1[v1.length-1].Y > 0.5* geometry.hLabel) {
    	//console.log('a');
    	graphData[0].labelShift =  0;
    	graphData[1].labelShift =  0;
    } else if (v1[v1.length-1].Y - v0[v0.length-1].Y > 0.5 *  geometry.hLabel) {
    	//console.log('b');
    	graphData[0].labelShift =  0;
    	graphData[1].labelShift =  0;
    } else if(v0[v0.length-1].Y - v1[v1.length-1].Y > 0) {
    	//console.log('c');
    	graphData[0].labelShift =  -0.5;
    	graphData[1].labelShift =   0.5;
    } else  if(v0[v0.length-1].Y - v1[v1.length-1].Y <= 0) {
    	//console.log('d');
    	graphData[0].labelShift = 0.5;
    	graphData[1].labelShift = -0.5;
    }
    // plot data 
    for(var iD=0; iD<graphData.length; iD++){
    	var data = graphData[iD];
	    c.strokeStyle = data.color;
	    c.lineWidth = geometry.lineWidth;
	    c.beginPath();
	    c.moveTo(
	    	getXPixel(data.values[0].X),
	    	getYPixel(data.values[0].Y));
	    for(var i = 1; i < data.values.length; i ++) {
	        c.lineTo(
	        	getXPixel(data.values[i].X),
	        	getYPixel(data.values[i].Y));
	    }
	    c.stroke();

	    c.fillStyle = data.color;
	    
	    for(var i = 0; i < data.values.length; i ++) {  
	    	let xPixel = getXPixel(data.values[i].X);
	    	let yPixel = getYPixel(data.values[i].Y);
	        c.beginPath();
	        c.arc(xPixel, yPixel, geometry.lineWidth / 2, 0, Math.PI * 2, true);
	        c.fill();
	    }

	    // draw label in rectangle
        var lastDataPoint = data.values[data.values.length - 1];

        c.fillStyle =  data.dataLabelBg;

		
        var xLabel = getXPixel(lastDataPoint.X) +  geometry.hLabel * 1.5 ;

        var yLabel = getYPixel(lastDataPoint.Y) -  geometry.hLabel/2 + data.labelShift * geometry.hLabel;

        c.fillRect(xLabel, yLabel, geometry.wLabel, geometry.hLabel);

        c.beginPath();
	    c.arc(xLabel, yLabel+geometry.hLabel/2, geometry.hLabel/2, 0, Math.PI * 2, true);
        c.fill();
        c.beginPath();
	    c.arc(xLabel+geometry.wLabel, yLabel+geometry.hLabel/2, geometry.hLabel/2, 0, Math.PI * 2, true);
        c.fill();

		c.fillStyle = "#ffffff";
        c.beginPath();
		var imageBgRadius = geometry.hLabel/1.5;
	    c.arc(xLabel - 1.5 * geometry.hLabel , yLabel+geometry.hLabel/2, imageBgRadius, 0, Math.PI * 2, true);
        c.fill();

		var icon_image = new Image();
		icon_image.src = data.icon;
		var imageSize = ( 1 - 0.2 ) * imageBgRadius;
		icon_image.onload = onImageLoaded(
			c, 
			icon_image, 
			(xLabel - 1.5 * geometry.hLabel - imageSize ) * window.devicePixelRatio, 
			(yLabel + geometry.hLabel/2 - imageSize)* window.devicePixelRatio, 
			2 * imageSize * window.devicePixelRatio,  
			2 * imageSize * window.devicePixelRatio
			);
		window.plotImages.push(icon_image);
        

		c.font = fontString(geometry.dataLabelFont);
		c.textAlign = "center"
	    c.fillStyle = data.dataLabelColor;
	    c.fillText(data.dataLabel, xLabel + geometry.wLabel/2, yLabel+geometry.hLabel/2);
	    c.font = fontString(geometry.font);
    }

	image.attr('src', graph.toDataURL());
}



$(function() {
	window.drawActiveStocks = function(maxYear) {
		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			// console.log(i, window.companydata);
			var companyContainer = $('.stocks__company[data-id=' + i + ']').first();
			companyContainer.find('.item_stocks__count').empty().html(company.numberOfShares + '&nbsp;шт.');
			companyContainer.find('.item_stocks__title').empty().html(company.shareCode);
			companyContainer.find('.item_stocks__subtitle').empty().html(company.name);

			
			// var pricePerShare = company.priceAtStart.usd;
			var pricePerShare = company.pricesUSD.filter(w => (w[0] == maxYear) );
			if(pricePerShare[0]) {
				pricePerShare = pricePerShare[0][1];
			} else {
				pricePerShare = company.pricesUSD[1][1];
			}
			companyContainer.find('.item_stocks__title#subtotal').empty().html('$'+pricePerShare);

			// var totalAtStart = company.totalAtStart.rur;
			var totalAtStart = company.sumPricesRUR.filter(w => (w[0] == maxYear) );
			if(totalAtStart[0]) {
				totalAtStart = totalAtStart[0][1];
			} else {
				totalAtStart = company.sumPricesRUR[1][1];
			}
			totalAtStart = ''+totalAtStart;
			

			var totalAtStartFloat = parseFloat(totalAtStart.replace(/[^0-9.]/g, ''));
			var totalAtStartView = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 2 })).format(Number(totalAtStartFloat).toFixed(2));
			// console.log( totalAtStartView );
			companyContainer.find('.item_stocks__title#total').empty().html(totalAtStartView);
		}
	};

	
	// window.drawActiveStocks(maxYear);
	window.drawStocksPlot = function(plotImageSelector, maxYear) {
		
		var plotImage = $(plotImageSelector);

		var delta = 1;
		var pricesUSD = [];
		var minX = false;
		var maxX = false;
		var minY = false;
		var maxY = false;


		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			for(let k=0; k<company.pricesUSD.length; k++) {
		        if(minX === false || minX > company.pricesUSD[k][0]) {
		        	minX = company.pricesUSD[k][0];
		        }
		        if(maxX === false || maxX < company.pricesUSD[k][0]) {
		        	maxX = company.pricesUSD[k][0];
		        }
			}
		}
		window.plotMinYear = company.pricesUSD[0][0];
		if(maxYear === false) {
			maxYear = company.pricesUSD[1][0];
		}
		window.plotMaxYear = maxYear;

		window.maxYearDrawn = true;

		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			var companypricesUSD = []
			for(let k=0; k<company.pricesUSD.length; k++) {
		        if(company.pricesUSD[k][0]<=maxYear){
			        if(minY === false || minY > company.pricesUSD[k][1]) {
			        	minY = company.pricesUSD[k][1];
			        }
			        if(maxY === false || maxY < company.pricesUSD[k][1]) {
			        	maxY = company.pricesUSD[k][1];
			        }
					companypricesUSD.push({
						X:company.pricesUSD[k][0],
						Y:company.pricesUSD[k][1]
						});		        	
		        } else {
		        	window.maxYearDrawn = false;
		        }
			}

			var delta = Math.round(100*(companypricesUSD[companypricesUSD.length - 1].Y / companypricesUSD[companypricesUSD.length - 2].Y - 1))
			// console.log('delta', delta, 'companypricesUSD', companypricesUSD);
			var dataLabel, dataLabelBg;
			if (delta > 0) {
				dataLabel='+ ' + delta + '% ↑';
				dataLabelBg='#47AF34';
			} else if(delta<0) {
				dataLabel='' + delta + '% ↓';
				dataLabelBg='#FA633F';
			} else {
				dataLabel='=';
				dataLabelBg='#47AF34';
			}
			var dataLabelColor='#FFFFFF';

			pricesUSD.push({
				values: companypricesUSD, 
				icon:company.icon,
				dataLabel: dataLabel,
				dataLabelBg: dataLabelBg,
				dataLabelColor: dataLabelColor
			});
		}
		// console.log('minY', minY, 'maxY', maxY);

        pricesUSD[0].color='#2A4269';
		pricesUSD[1].color='rgb(101, 181, 178)';

		var xAxisTicks = [];
		for(let x = minX; x<=maxX; x++){
			xAxisTicks.push(x);
		}

		minY = 0;
		var dY = 100;
		maxY += dY - maxY % dY;
		var yAxisTicks = [];
		for(let y = minY; y<=maxY; y+=100){
			yAxisTicks.push(y);
		}

		if(!window.drawStocksPlotOptions) {
			var canvasWidth =  plotImage.parent().innerWidth();
			var canvasHeight =  Math.round(canvasWidth/2);

			window.drawStocksPlotOptions = {
				canvasWidth: 2 * canvasWidth,
				canvasHeight: 2 * canvasHeight,
				css:{
					width: canvasWidth+'px',
					height: canvasHeight+'px',
					maxWidth: canvasWidth+'px',
					maxHeight: canvasHeight+'px'
				},
				xPadding : 280,
				xShift: -160,
				yShift: 60,
				yPadding : 80,
				wLabel : 90,  // label width
				hLabel : 60,  // label height
				lineWidth : 16,
				lineWidthAxes: 8,
				xAxisTicks:xAxisTicks,
				yAxisTicks:yAxisTicks,
				font: {style:'italic', size: 35, unit: 'px', family: 'sans-serif'},
				dataLabelFont:{style:'italic', size: 30, unit: 'px', family: 'sans-serif'},
				maxYear: window.plotMaxYear
				//devicePixelRatio: 2
				// devicePixelRatio: window.devicePixelRatio
			}
			if(canvasWidth <= 620){		
				// console.log('canvasWidth < 620');
				window.drawStocksPlotOptions.xPadding = 160;
				window.drawStocksPlotOptions.xShift = -40;
				window.drawStocksPlotOptions.yShift = 30;
				window.drawStocksPlotOptions.yPadding = 20;
				window.drawStocksPlotOptions.wLabel = 80;  // label width
				window.drawStocksPlotOptions.hLabel = 40;  // label width
				window.drawStocksPlotOptions.dataLabelFont =  {style:'italic', size: 26, unit: 'px', family: 'sans-serif'};
				window.drawStocksPlotOptions.font = {style:'italic', size: 28, unit: 'px', family: 'sans-serif'};
				window.drawStocksPlotOptions.lineWidth = 16;
				window.drawStocksPlotOptions.lineWidthAxes = 8;
			}
			if(canvasWidth <= 400){		
				// console.log('canvasWidth < 400');
				window.drawStocksPlotOptions.xPadding = 160;
				window.drawStocksPlotOptions.xShift = -40;
				window.drawStocksPlotOptions.yShift = 30;
				window.drawStocksPlotOptions.yPadding = 20;
				window.drawStocksPlotOptions.wLabel = 80;  // label width
				window.drawStocksPlotOptions.hLabel = 40;  // label width
				window.drawStocksPlotOptions.dataLabelFont =  {style:'italic', size: 26, unit: 'px', family: 'sans-serif'};
				window.drawStocksPlotOptions.font = {style:'italic', size: 28, unit: 'px', family: 'sans-serif'};
				window.drawStocksPlotOptions.lineWidth = 16;
				window.drawStocksPlotOptions.lineWidthAxes = 8;
			}
		}
		window.drawStocksPlotOptions.maxYear = window.plotMaxYear;
		window.drawStocksPlotOptions.yAxisTicks = yAxisTicks;
		drawLinearGraph(plotImageSelector, pricesUSD, window.drawStocksPlotOptions);

		if( window.maxYearDrawn) {
			$('#oneMoreYear').parent().addClass('d-none');
		}
	}

    window.drawChatMessages = function(areaSelector, maxYear) {

        if(!window.chatMessages) {
        	// extract all chat messages
        	window.chatMessages = {};
        	for(let i = 0; i<window.companydata.active.length; i++) {
        		var company = window.companydata.available[window.companydata.active[i]];

        		if(maxYear === false) {
					maxYear = company.pricesUSD[1][0];
				}
				

				for(let k=0; k<company.pricesUSD.length; k++) {
			        if(!window.chatMessages[company.pricesUSD[k][0]]) {
			        	window.chatMessages[company.pricesUSD[k][0]] = [];
			        }
			        if(company.pricesUSD[k][2]) {
				       	window.chatMessages[company.pricesUSD[k][0]].push(company.pricesUSD[k][2]);
			        }
				}
        	}
        	for(let y in window.chatMessages){
        		let m = window.chatMessages[y];
        		let k = Math.floor(Math.random() * m.length);
        		window.chatMessages[y] = m[k];
        	}
        }

    	// get element
    	var messageContainer = $(areaSelector);

    	// get first child as template
    	var templateNode = messageContainer.children().first().detach();

    	// clear all children
    	messageContainer.empty();

    	// fill-in the element with the messages
    	window.plotMaxYear = maxYear;
    	for(let y in window.chatMessages) {
    		if(y <= maxYear && window.chatMessages[y]) {
	    		let node = templateNode.clone();
	    		node.find('.stocks__message-date').empty().html(y + ' год');
	    		node.find('.stocks__message-text').empty().html(window.chatMessages[y]);
	    		messageContainer.prepend(node);
    		}
    	}

    }

	window.activateNextBtn = function () {
		$('#oneMoreYear').click(function(e){
			e.preventDefault();
			var nextYear = window.plotMaxYear + 1;
			window.drawActiveStocks(nextYear);
			window.drawStocksPlot('#flot-graph', nextYear);
			window.drawChatMessages('.stocks__chat-body', nextYear);
			return false;
		})
	}

	window.showResults = function(selectorYears, selectorProfit){

		var yearIntervar = window.plotMaxYear - window.plotMinYear;
		if(yearIntervar==1){
			$(selectorYears).empty().html(yearIntervar+' год');
		} else if (yearIntervar > 1 &&  yearIntervar<=4) {
			$(selectorYears).empty().html(yearIntervar+' года');
		} else {
			$(selectorYears).empty().html(yearIntervar+' лет');
		}
		

		// console.log(window.companydata.active);

        var startPriceRur = 0;
    	for(let i = 0; i<window.companydata.active.length; i++) {
    		let company = window.companydata.available[window.companydata.active[i]];
    		let sharesRurStr = '' + company.sumPricesRUR[0][1];
    		let sharesRur = parseFloat(sharesRurStr.replace(/[^0-9.]/g, ''));
    		startPriceRur += sharesRur;
    		// console.log(company, sharesRurStr, sharesRur, totalSharesRur);
    	}

        var endPriceRur = 0;
        var isEndYear;
    	for(let i = 0; i<window.companydata.active.length; i++) {
    		let company = window.companydata.available[window.companydata.active[i]];

            isEndYear = function (value) {
  				return value[0] == window.plotMaxYear;
			}
			let filtered = company.sumPricesRUR.filter(isEndYear);

    		let sharesRurStr = '' + filtered[0][1];
    		let sharesRur = parseFloat(sharesRurStr.replace(/[^0-9.]/g, ''));
    		endPriceRur += sharesRur;
    		// console.log(company, sharesRurStr, sharesRur, totalSharesRur);
    	}

    	var totalSharesRurView = (new Intl.NumberFormat("ru-RU", { useGrouping:true })).format(Number(endPriceRur - startPriceRur).toFixed(2));
    	$(selectorProfit).empty().html(totalSharesRurView);
	}

});