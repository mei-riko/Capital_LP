import $ from 'jquery';

var maxActiveCompanies = 2;

$(function() {
	var drawActiveCompanies = function() {
		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			// console.log(i, window.companydata);
			var companyContainer = $('.item.item_company[data-id=' + i + ']').first();
			companyContainer.find('.item_company__count').empty().html(company.numberOfShares + '&nbsp;шт.');
			companyContainer.find('.item_company__logo img').attr('src', company.icon);
			companyContainer.find('.item__title.item_company__name').empty().html(company.shareCode);
			companyContainer.find('.item_company__fullname').empty().html(company.name);
			companyContainer.find('.item__title.item_company__subtotal').empty().html('$'+company.priceAtStart.usd);
			companyContainer.find('.item__title.item_company__total .item__value').empty().html(company.totalAtStart.rur);
		}
	};
	var loadNextCompanies = function() {
		// get active companies
		var activeCompanies = window.companydata.active;
		var maxId = activeCompanies[0];
		for(let i = 0; i<activeCompanies.length; i++) {
			if(maxId<activeCompanies[i]) {
				maxId = activeCompanies[i];
			}
		}

		// get next part
		window.companydata.active = [];
		var maxK = 2*window.companydata.available.length;
        for(let k=maxId + 1; k < maxK; k++) {
        	var m = k % window.companydata.available.length;
        	if (!activeCompanies.includes(m)) {
        		window.companydata.active.push(m);
        	}
        	if(window.companydata.active.length >= maxActiveCompanies) {
        		break;
        	}
        }

        // draw next part
        drawActiveCompanies();
	}
    var initNextCompany = function() {
        $('.nextcompany').click(function(e) {
            e.preventDefault();
            loadNextCompanies();
            return false;
        });
    };
    initNextCompany();
    drawActiveCompanies();

    window.getTotalSharesRur = function(){
    	var totalSharesRur = 0;
    	for(let i = 0; i<window.companydata.active.length; i++) {
    		var company = window.companydata.available[window.companydata.active[i]];
    		var sharesRurStr = '' + company.totalAtStart.rur;
    		var sharesRur = parseFloat(sharesRurStr.replace(/[^0-9.]/g, ''));
    		totalSharesRur += sharesRur;
    	}
    	return totalSharesRur;
    }
    window.showTotalSharesRur = function(selector){
    	$(selector).empty().html(window.getTotalSharesRur());
    }

    window.showCurrentCompanies = function(){
		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			// console.log(i, window.companydata);
			var companyContainer = $('.item.item_company.item_company-inside[data-id=' + i + ']').first();
			companyContainer.find('.item_company__count').empty().html(company.numberOfShares + '&nbsp;шт.');
			companyContainer.find('.item_company__logo img').attr('src', company.icon);
			companyContainer.find('.item__title.item_company__name').empty().html(company.shareCode);
			companyContainer.find('.item_company__fullname').empty().html(company.name);
			companyContainer.find('.item_subtotal').empty().html('$'+company.priceAtStart.usd);
		}
	};
});

