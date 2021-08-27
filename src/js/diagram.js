import $ from 'jquery';

var maxActiveCompanies = 2;

window.plotImages=[];
window.plotMaxYear=false;

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

		c.textAlign = "center"
        c.fillStyle = data.dataLabelColor;
        c.fillText(data.dataLabel, xLabel + wLabel/2, yLabel+hLabel/2);
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

	window.drawStocksPlot = function(areaSelector, maxYear) {
		var delta = 1;
		var plotData = [];
		var minX = false;
		var maxX = false;
		var minY = false;
		var maxY = false;

		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			for(let k=0; k<company.plotData.length; k++) {
		        if(minX === false || minX > company.plotData[k][0]) {
		        	minX = company.plotData[k][0];
		        }
		        if(maxX === false || maxX < company.plotData[k][0]) {
		        	maxX = company.plotData[k][0];
		        }
			}
		}
		if(maxYear === false) {
			maxYear = company.plotData[1][0];
		}
		window.plotMaxYear = maxYear;

		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			var companyPlotData = []
			for(let k=0; k<company.plotData.length; k++) {
		        if(company.plotData[k][0]<=maxYear){
			        if(minY === false || minY > company.plotData[k][1]) {
			        	minY = company.plotData[k][1];
			        }
			        if(maxY === false || maxY < company.plotData[k][1]) {
			        	maxY = company.plotData[k][1];
			        }
					companyPlotData.push({
						X:company.plotData[k][0],
						Y:company.plotData[k][1]
						});		        	
		        }
			}

			var delta = Math.round(100*(companyPlotData[companyPlotData.length - 1].Y / companyPlotData[companyPlotData.length - 2].Y - 1))
			// console.log('delta', delta, 'companyPlotData', companyPlotData);
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

			plotData.push({
				values: companyPlotData, 
				icon:company.icon,
				dataLabel: dataLabel,
				dataLabelBg: dataLabelBg,
				dataLabelColor: dataLabelColor
			});
		}

        plotData[0].color='#2A4269';
		plotData[1].color='rgb(101, 181, 178)';

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
		    font:'italic 14pt sans-serif'
		}
		drawLinearGraph(areaSelector, plotData, options);
	}

	window.activateNextBtn = function () {
		$('#oneMoreYear').click(function(e){
			e.preventDefault();
			window.drawStocksPlot('#flot-graph', window.plotMaxYear + 1);
			return false;
		})
	}
});