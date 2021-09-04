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
    Fancybox.bind("[data-fancybox]", {
        // Your options go here
        dragToClose: false,
        groupAll : false,
    });

});

