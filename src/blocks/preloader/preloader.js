import $ from 'jquery';


$(window).on('load', function () {
    var $preloader = $('.preloader');
    $preloader.fadeOut('slow');
    $('body').delay(100).removeClass( 'not-ready' );
});