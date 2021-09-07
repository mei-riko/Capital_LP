import $ from 'jquery';

$(function() {
    // Nav
    $('.header__toggle-item').on('click', function(){
        $(this).addClass('header__toggle-item--active');
        $('.header__nav').toggleClass('header__nav--active');
        $('body').toggleClass('hidden');
        $('.overlay').toggleClass('overlay--active');
    })
});

$(document).on('mouseup', function (e){ 
    let headerActive = $(".header__nav"); // элемент

    if (!headerActive.is(e.target) // клик был не по блоку
          && headerActive.has(e.target).length === 0 // и не по его дочерним элементам
          && $('body').hasClass('hidden')
          && !$('.header__toggle-item').is(e.target)
    ) { 
        $('.header__nav').removeClass('header__nav--active');
        $('body').removeClass('hidden');
        $('.overlay').removeClass('overlay--active');
    }
});