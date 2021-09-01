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

function drawLinearGraph(selector, graphData, options) {
	// console.log( data, previousData);
    var graph = $(selector);
	var drawedCirclesPrevGraph 	  = [];
	var drawedCirclesCurrentGraph = [];
	var xShift = options.xShift;
	var yShift = 30;
	
	var minY = 0;
	// var maxY = getMaxY(graphData);
	var maxY = options.yAxisTicks[options.yAxisTicks.length - 1];

	var minX = false;
	var maxX = false;
	for ( var ix = 0; ix < options.xAxisTicks.length; ix++ ) {
		if (minX === false || minX > options.xAxisTicks[ix] ) {
			minX = options.xAxisTicks[ix];
		}
		if (maxX === false || maxX < options.xAxisTicks[ix] ) {
			maxX = options.xAxisTicks[ix];
		}
	}
	// console.log('minX', minX, 'maxX', maxX);

    function getXPixel(val, minX, maxX, shift) {
    	let xPixel = ((graph.width() - shift - 2 * options.xPadding) / ( maxX - minX) ) * ( val - minX ) + shift + options.xPadding;
    	// console.log('getXPixel', val, minX, maxX, shift, '=>', xPixel);
    	return xPixel;
	}

	function getYPixel(val, minY, maxY, shift) {
		let yPixel = graph.height() - (
			(val-minY) * (graph.height() - shift - 2 * options.yPadding) / (maxY - minY)
			+ shift + options.yPadding
			);
		// console.log('getYPixel', val, minY, maxY, shift, '=>', yPixel);
	    return yPixel;
	}

    var c = graph[0].getContext('2d');

    c.clearRect(0, 0, graph.width(), graph.height());
    
    c.lineWidth = options.lineWidthAxes;
    c.strokeStyle = '#333';
	
    c.font = options.font;
    c.textAlign = "center";

    // Draw the axes
    // c.beginPath();
    // c.moveTo(options.xPadding, options.yPadding);
    // c.lineTo(options.xPadding, graph.height() - options.yPadding);
    // c.lineTo(graph.width() - options.xPadding, graph.height() - options.yPadding);
    // c.stroke();

    // Draw the Y value texts
    c.textAlign = "right"
    c.textBaseline = "middle";
    for ( var iy = 0; iy < options.yAxisTicks.length; iy ++ ) {
		c.fillStyle = '#808080';
        c.fillText('$'+options.yAxisTicks[iy],
        	60,
        	getYPixel(options.yAxisTicks[iy], minY, maxY, yShift));
    }

    // Draw the X value texts
    c.textAlign = "center"
    // console.log(options.xAxisTicks);
	for ( var ix = 0; ix < options.xAxisTicks.length; ix ++ ) {
		c.fillStyle = '#808080';
		let xPixel = getXPixel(options.xAxisTicks[ix], minX, maxX, xShift);

		c.fillText(options.xAxisTicks[ix], xPixel, graph.height() - options.yPadding + 10);
		c.beginPath();
		c.moveTo(xPixel, getYPixel(minY, minY, maxY, yShift) + 10);
		c.lineTo(xPixel, getYPixel(maxY, minY, maxY, yShift) - 10);
		c.stroke();
	}
    

    var onImageLoaded = function(c, icon_image, xLabel, yLabel, wLabel, hLabel){
    	return function() {
		    c.drawImage(
		    	icon_image,
		    	xLabel- 1.8 * hLabel,
		    	yLabel + hLabel*0.08,
		    	hLabel * 0.9,
		    	hLabel * 0.9
		    	);
		}
    }
    // get minimal and maximal Y
    let v0 = graphData[0].values;
    let v1 = graphData[1].values;
    if (v0[v0.length-1].Y > v1[v1.length-1].Y ) {
    	graphData[0].labelShift =  -1;
    	graphData[1].labelShift =   0;
    } else {
    	graphData[0].labelShift = 0;
    	graphData[1].labelShift = -1;
    }
    // plot data 
    for(var iD=0; iD<graphData.length; iD++){
    	var data = graphData[iD];
	    c.strokeStyle = data.color;
	    c.lineWidth = options.lineWidth;
	    c.beginPath();
	    c.moveTo(
	    	getXPixel(data.values[0].X, minX, maxX, xShift),
	    	getYPixel(data.values[0].Y, minY, maxY, yShift));
	    for(var i = 1; i < data.values.length; i ++) {
	        c.lineTo(
	        	getXPixel(data.values[i].X, minX, maxX, xShift),
	        	getYPixel(data.values[i].Y, minY, maxY, yShift));
	    }
	    c.stroke();

	    c.fillStyle = data.color;
	    
	    for(var i = 0; i < data.values.length; i ++) {  
	    	let xPixel = getXPixel(data.values[i].X, minX, maxX, xShift);
	    	let yPixel = getYPixel(data.values[i].Y, minY, maxY, yShift);
	        c.beginPath();
	        c.arc(xPixel, yPixel, 4, 0, Math.PI * 2, true);
			// drawedCirclesCurrentGraph.push({'x':Math.round(xPixel), 'y':Math.round(yPixel)})
	        c.fill();
	    }

	    // draw label in recangle
        var lastDataPoint = data.values[data.values.length - 1];

        c.fillStyle =  data.dataLabelBg;
        var wLabel = 60;
        var hLabel = 30;
        var xLabel = getXPixel(lastDataPoint.X, minX, maxX, xShift) + hLabel * 2.5;
        var yLabel = getYPixel(lastDataPoint.Y, minY, maxY, yShift) - hLabel/2 + data.labelShift * hLabel;

        c.fillRect(xLabel, yLabel, wLabel, hLabel);

        c.beginPath();
	    c.arc(xLabel, yLabel+hLabel/2, hLabel/2, 0, Math.PI * 2, true);
        c.fill();
        c.beginPath();
	    c.arc(xLabel+wLabel, yLabel+hLabel/2, hLabel/2, 0, Math.PI * 2, true);
        c.fill();

		c.fillStyle = "#ffffff";
        c.beginPath();
	    c.arc(xLabel-hLabel-10 , yLabel+hLabel/2, hLabel/1.5, 0, Math.PI * 2, true);
        c.fill();

		var icon_image = new Image();
		icon_image.src = data.icon;
		icon_image.onload = onImageLoaded(c, icon_image, xLabel, yLabel, wLabel, hLabel);
		window.plotImages.push(icon_image);

		c.font = options.dataLabelFont;
		c.textAlign = "center"
        c.fillStyle = data.dataLabelColor;
        c.fillText(data.dataLabel, xLabel + wLabel/2, yLabel+hLabel/2);
        c.font = options.font;
    }


}



$(function() {
	window.drawActiveStocks = function() {
		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			// console.log(i, window.companydata);
			var companyContainer = $('.stocks__company[data-id=' + i + ']').first();
			companyContainer.find('.item_stocks__count').empty().html(company.numberOfShares + '&nbsp;шт.');
			companyContainer.find('.item_stocks__title').empty().html(company.shareCode);
			companyContainer.find('.item_stocks__subtitle').empty().html(company.name);
			companyContainer.find('.item_stocks__title#subtotal').empty().html('$'+company.priceAtStart.usd);

			var totalAtStartFloat = parseFloat(company.totalAtStart.rur.replace(/[^0-9.]/g, ''));
			var totalAtStartView = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 2 })).format(Number(totalAtStartFloat).toFixed(2));
			// console.log( totalAtStartView );
			companyContainer.find('.item_stocks__title#total').empty().html(totalAtStartView);
		}
	};

	window.drawActiveStocks();

	window.drawStocksPlot = function(areaSelector, maxYear) {
		var delta = 1;
		var pricesUSD = [];
		var minX = false;
		var maxX = false;
		var minY = false;
		var maxY = false;

		var canvas = $(areaSelector);
		canvas.attr('width', canvas.parent().innerWidth());
		canvas.attr('height', Math.round(canvas.attr('width')/1.8));

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
        var options = {
		    xPadding : 150,
		    xShift: -60,
		    yPadding : 40,
		    lineWidth : 8,
		    lineWidthAxes: 4,
		    xAxisTicks:xAxisTicks,
		    yAxisTicks:yAxisTicks,
		    font:'italic 14pt sans-serif',
		    dataLabelFont:'italic 12pt sans-serif'
		}
		drawLinearGraph(areaSelector, pricesUSD, options);

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
			var nextYear = window.plotMaxYear + 1
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