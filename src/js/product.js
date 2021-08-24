import $ from 'jquery';

var maxActiveProducts = 2;

$(function() {
	var loadNextProducts = function() {
		// get active products
		var activeProducts = window.productdata.active;
		var maxId = activeProducts[0];
		for(let i = 0; i<activeProducts.length; i++) {
			if(maxId<activeProducts[i]) {
				maxId = activeProducts[i];
			}
		}

		// get next part
		window.productdata.active = [];
		var maxK = 2*window.productdata.available.length;
        for(let k=maxId + 1; k < maxK; k++) {
        	var m = k % window.productdata.available.length;
        	if (!activeProducts.includes(m)) {
        		window.productdata.active.push(m);
        	}
        	if(window.productdata.active.length >= maxActiveProducts) {
        		break;
        	}
        }

        // draw next part
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
    var initNextCompany = function() {
        $('.nextproduct').click(function(e) {
            e.preventDefault();
            loadNextProducts();
            return false;
        });
    };
    initNextCompany();
});

