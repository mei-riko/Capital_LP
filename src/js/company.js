import $ from 'jquery';

var maxActiveCompanies = 2;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.initCompanyPart = function (){
	window.drawActiveCompanies = function() {
		for(let i = 0; i<window.companydata.active.length; i++) {
			var company = window.companydata.available[window.companydata.active[i]];
			// console.log(i, window.companydata);
			var companyContainer = $('.item.item_company[data-id=' + i + ']').first();
			companyContainer.find('.item_company__count').empty().html(company.numberOfShares + '&nbsp;шт.');
			companyContainer.find('.item_company__logo img').attr('src', company.icon);
			companyContainer.find('.item__title.item_company__name').empty().html(company.shareCode);
			companyContainer.find('.item_company__fullname').empty().html(company.name);
			companyContainer.find('.item__title.item_company__subtotal').empty().html('$'+company.priceAtStart.usd);

			var totalAtStartFloat = parseFloat(company.totalAtStart.rur.replace(/[^0-9.]/g, ''));
			var totalAtStartView = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 2 })).format(Number(totalAtStartFloat).toFixed(2));
			// console.log( totalAtStartView );
			companyContainer.find('.item__title.item_company__total .item__value').empty().html(totalAtStartView);
		}
	};
	window.loadNextCompanies = function() {
		// get active companies
		var activeCompanies = window.companydata.active;
		
		// get next part (maxActiveCompanies random companies)
		var candidates = [];
		for(let k=0; k < window.companydata.available.length; k++) {
			if (!activeCompanies.includes(k)) {
				candidates.push(k);
			}
		}
		
		// shuffle array
		shuffleArray(candidates);
		window.companydata.active = candidates.slice(0, maxActiveCompanies);

        // draw next part
        drawActiveCompanies();
	}
    window.initNextCompany = function() {
        $('.nextcompany').click(function(e) {
            e.preventDefault();
            loadNextCompanies();
            return false;
        });
    };
    window.getTotalSharesRur = function(){
    	var totalSharesRur = 0;
    	for(let i = 0; i<window.companydata.active.length; i++) {
    		var company = window.companydata.available[window.companydata.active[i]];
    		var sharesRurStr = '' + company.totalAtStart.rur;
    		var sharesRur = parseFloat(sharesRurStr.replace(/[^0-9.]/g, ''));
    		totalSharesRur += sharesRur;
    	}
		var totalSharesRurView = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 2 })).format(Number(totalSharesRur).toFixed(2));

    	return totalSharesRurView;
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
			companyContainer.find('.item__subtotal').empty().html('$'+company.priceAtStart.usd);
		}
	};

	window.showLostProfitRur = function(selector) {
    	var totalSharesRur = 0;
    	for(let i = 0; i<window.companydata.active.length; i++) {
    		var company = window.companydata.available[window.companydata.active[i]];
    		var sharesRurStr = '' + company.sumPricesRUR[company.sumPricesRUR.length - 1][1];
    		var sharesRur = parseFloat(sharesRurStr.replace(/[^0-9.]/g, ''));
    		totalSharesRur += sharesRur;
    		// console.log(company, sharesRurStr, sharesRur, totalSharesRur);
    	}
    	var totalSharesRurView = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 2 })).format(Number(totalSharesRur).toFixed(2));
    	$(selector).empty().html(totalSharesRurView);
	}


    try{
	    initNextCompany();
	    loadNextCompanies();
	    drawActiveCompanies();    	
    } catch (e) {
    	//
    }
}

$(window.initCompanyPart);

