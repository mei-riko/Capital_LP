import $ from 'jquery';

window.stockChat = function(){
    // Stock Height
    if ( $('.stocks__info').length == 0 &&  $('.stocks__chat').length == 0 ) return false;

    if ( $(window).width() > 1280 || !window.matchMedia('screen and (max-width: 1280px)').matches ){
        let heightMin = Math.ceil( $('.stocks__info').outerHeight(true) );
        let heightChat = Math.ceil( $('.stocks__chat').outerHeight(true) );

        // console.log('heightMin : ' + heightMin + ' heightChat: ' + heightChat);

        if( heightMin > heightChat ){
            $('.stocks__chat').css('min-height', heightMin);
        }
    }else{
        $('.stocks__chat').removeAttr('style');
    }
}
$(window.stockChat);

$(window).on('resize', function(){
    if ( $('.stocks__info').length > 0 &&  $('.stocks__chat').length > 0 ){
        window.stockChat();
        window.drawStocksPlot('#flot-graph', window.plotMaxYear);
    }
})