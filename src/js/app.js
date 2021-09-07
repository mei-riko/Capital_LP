import $ from 'jquery';

import '../blocks/heading-screen/heading-screen';
import '../blocks/header/header';
import '../items/item/item';
import '../items/input/input';

import '../items/slider/slider';

$(function() {
    // Animate Scroll
    $(document).on('click', '[data-trigger="scroll"]', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    // Animate Scroll In Modal
    $(document).on('click', '[data-trigger="modal"]', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    
    // Link Disable
    $(document).on('click', '[data-trigger="click"]', function(e){
        e.preventDefault();
    })
    // Fancybox
    $('.item.item_modal .item_modal__btn').on('click', function(){
        let modal = $(this).closest('.modal');
        let modalForm = modal.find('.modal__form');
        $(".fancybox-slide").animate({
            scrollTop: $(document).height()
        }, 2000);

        modalForm.find('input:first-child').focus();
    });
    $(".fancybox-slide").animate({
        scrollTop: $(document).height()
    }, 2000);

});

