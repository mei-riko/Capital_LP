import $ from 'jquery';

var maxActiveCompanies = 2;

/*** LINEAR GRAPH FUNCTIONS ***/

function getMaxY(plotData) {
    var max = false;
    for(var iD=0; iD<plotData.length; iD++){
    	var data = plotData[iD];
	    for(var i = 0; i < data.values.length; i ++) {
	        if(max===false || data.values[i].Y > max) {
	            max = data.values[i].Y;
	        }
	    }
    }
    max += 50 - max % 50;
    return max;
}

function drawLinearGraph(selector,
	graphData,
	options) {
	// console.log( data, previousData);
    var graph = $(selector);
	var drawedCirclesPrevGraph 	  = [];
	var drawedCirclesCurrentGraph = [];
	var xShift = options.xShift;
	var yShift = 30;
	var minY = 0;
	var maxY = getMaxY(graphData);

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
	console.log('minX', minX, 'maxX', maxX);

    function getXPixel(val, minX, maxX, shift) {
    	let xPixel = ((graph.width() - shift - 2 * options.xPadding) / ( maxX - minX) ) * ( val - minX ) + shift + options.xPadding;
    	console.log('getXPixel', val, minX, maxX, shift, '=>', xPixel);
    	return xPixel;
	}

	function getYPixel(val, minY, maxY, shift) {
	    return graph.height() - (((graph.height() - shift - 2 * options.yPadding) / (maxY - minY) ) * (val-minY)) - shift - options.yPadding;
	}

    var c = graph[0].getContext('2d');            
    
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
    c.textBaseline = "bottom";
    for(var i = 0; i < maxY; i += options.dY) {
		c.fillStyle = '#808080';
        c.fillText('$'+i, xShift+20, getYPixel(i, minY, maxY, yShift));
    }

    // Draw the X value texts
    c.textAlign = "center"
    console.log(options.xAxisTicks);
	for ( var ix = 0; ix < options.xAxisTicks.length; ix ++ ) {
		c.fillStyle = '#808080';
		let xPixel = getXPixel(options.xAxisTicks[ix], minX, maxX, xShift);

		c.fillText(options.xAxisTicks[ix], xPixel, graph.height() - options.yPadding + 10);
		c.beginPath();
		c.moveTo(xPixel, getYPixel(minY, minY, maxY, yShift));
		c.lineTo(xPixel, getYPixel(maxY, minY, maxY, yShift));
		c.stroke();
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
			drawedCirclesCurrentGraph.push({'x':Math.round(xPixel), 'y':Math.round(yPixel)})
	        c.fill();
	    }
    }


    return;
    // Draw Previous Graph
	c.lineWidth = options.lineWidth;
    c.strokeStyle = '#333';
	
    c.font = 'italic 14pt sans-serif';
    c.textAlign = "center";

    // c.beginPath();
    // c.moveTo(options.xPadding, 0);
    // c.lineTo(options.xPadding, graph.height() - options.yPadding);
    // c.lineTo(graph.width(), graph.height() - options.yPadding);
    // c.stroke();

	c.strokeStyle = options.prevColor;
	
    c.beginPath();
    c.moveTo(getXPixel(0), getYPixel(previousData.values[0].Y));
    for(var i = 1; i < previousData.values.length; i ++) {
        c.lineTo(getXPixel(i), getYPixel(previousData.values[i].Y));
    }
    c.stroke();

    c.fillStyle = options.prevCircleColor;
    
    for(var i = 0; i < previousData.values.length; i ++) {  
        c.beginPath();
        c.arc(getXPixel(i), getYPixel(previousData.values[i].Y), 4, 0, Math.PI * 2, true);
		drawedCirclesPrevGraph.push({'x':Math.round(getXPixel(i)), 'y':Math.round(getYPixel(data.values[i].Y))})
        c.fill();
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
			companyContainer.find('.item_stocks__title#total').empty().html(company.totalAtStart.rur);
		}
	};

	window.drawActiveStocks();

	window.drawStocksPlot = function(areaSelector) {
		var delta = 1;
		var plotData = [];
		var minX = false;
		var maxX = false;
		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			var companyPlotData = []
			for(let k=0; k<company.plotData.length; k++) {
		        if(minX === false || minX > company.plotData[k][0]) {
		        	minX = company.plotData[k][0];
		        }
		        if(maxX === false || maxX < company.plotData[k][0]) {
		        	maxX = company.plotData[k][0];
		        }
				companyPlotData.push({
					X:company.plotData[k][0],
					Y:company.plotData[k][1]
					});
			}
			plotData.push({values: companyPlotData});
		}

		plotData[0].color='#2A4269';
		plotData[1].color='rgb(101, 181, 178)';

		var xAxisTicks = [];
		for(let x = minX; x<=maxX; x++){
			xAxisTicks.push(x);
		}

        var options = {
		    xPadding : 50,
		    xShift: 40,
		    yPadding : 20,
		    lineWidth : 8,
		    lineWidthAxes: 4,
		    dY : 100,
		    xAxisTicks:xAxisTicks,
		    font:'italic 14pt sans-serif'
		}
		drawLinearGraph(areaSelector, plotData, options);
	}
});