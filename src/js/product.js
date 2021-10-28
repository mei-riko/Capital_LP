import $ from 'jquery';

var maxActiveProducts = 2;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.initProductPart = function() {
	if(window.initProductPartDone) {
		return;
	}
	window.initProductPartDone = true;

	window.drawActiveProducts = function() {
		for(let i = 0; i<window.productdata.active.length; i++) {
			var product = window.productdata.available[window.productdata.active[i]];
			// console.log(i, window.productdata);
			var productContainer = $('.item.item_product[data-id=' + i + ']').first();
			productContainer.find('.item_product__type').empty().html(product.type);
			productContainer.find('.item_product__name').empty().html(product.name);
			productContainer.find('.item_product__img img').attr('src', product.icon);
			productContainer.find('.item__title.item_product__price .item__value').empty().html(product.price.rur);
		}
	}
	window.loadNextProducts = function() {
		// get active products
		var activeProducts = window.productdata.active;


		// var maxId = activeProducts[0];
		// for(let i = 0; i<activeProducts.length; i++) {
		// 	if(maxId<activeProducts[i]) {
		// 		maxId = activeProducts[i];
		// 	}
		// }
		
		// get next part
		// window.productdata.active = [];
		// var maxK = 2*window.productdata.available.length;
        // for(let k=maxId + 1; k < maxK; k++) {
        // 	var m = k % window.productdata.available.length;
        // 	if (!activeProducts.includes(m)) {
        // 		window.productdata.active.push(m);
        // 	}
        // 	if(window.productdata.active.length >= maxActiveProducts) {
        // 		break;
        // 	}
        // }


		// get next part (maxActiveCompanies random companies)
		var products = [];
		for(let k=0; k < window.productdata.available.length; k++) {
			if (!activeProducts.includes(k)) {
				products.push(k);
			}
		}

		// shuffle array
		shuffleArray(products);
		window.productdata.active = products.slice(0, maxActiveProducts);
		console.log('maxActiveProducts', maxActiveProducts,'window.productdata.active', window.productdata.active);

        // draw next part
        drawActiveProducts();

	}
    window.initNextProduct = function() {
        $(document).on('click', '.nextproduct', function(e){
		// $('.nextproduct').click(function(e) {
            e.preventDefault();
            console.log("$('.nextproduct').click");
            
			loadNextProducts();
            return false;
        });
    };
    window.getTotalProductsRur = function(){
    	var totalRur = 0;
		for(let i = 0; i<window.productdata.active.length; i++) {
			var product = window.productdata.available[window.productdata.active[i]];
			var rurStr = '' + product.price.rur;
    		var rur = parseFloat(rurStr.replace(/[^0-9.]/g, ''));
    		totalRur += rur;
		}
    	return totalRur;
    }
    window.showTotalProductsRur = function(selector){
    	$(selector).empty().html(window.getTotalProductsRur());
    }

	window.showCurrentProducts = function(){
		for(let i = 0; i<window.productdata.active.length; i++) {
			var product = window.productdata.available[window.productdata.active[i]];
			// console.log(i, window.productdata);
			var productContainer = $('.item.item_product[data-id=' + i + ']').first();
			productContainer.find('.item_product__type').empty().html(product.type);
			productContainer.find('.item_product__name').empty().html(product.name);
			productContainer.find('.item_product__img img').attr('src', product.icon);
			productContainer.find('.item__title.item_product__price .item__value').empty().html(product.price.rur);
		}
	};

    try{
	    initNextProduct();
	    loadNextProducts();
	    drawActiveProducts();    	
    } catch (e) {
    	//
    }
};

$(window.initProductPart);