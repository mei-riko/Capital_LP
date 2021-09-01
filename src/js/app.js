import $ from 'jquery';

import '../blocks/heading-screen/heading-screen';
import '../items/item/item';

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
    // Link Disable
    $(document).on('click', '[data-trigger="click"]', function(e){
        e.preventDefault();
    })
    // Fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your options go here
    });
});