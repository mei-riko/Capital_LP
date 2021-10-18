import $ from 'jquery';


$(window).on('load', function () {
    var $preloader = $('.preloader');
    $preloader.fadeOut('slow');
    $('body').delay(600).removeClass( 'not-ready' );
});