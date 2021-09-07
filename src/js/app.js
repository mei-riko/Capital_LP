import $ from 'jquery';

import '../items/input/input';

import './ajaxloader';
import './company';
import './product';
import './hidpicanvas';
import './diagram';

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
    
    // Hover Effect
    $('.heading-screen .heading-screen__col .btn')
        .mouseenter(function(event){
            let card = $(this).parent().find('.heading-screen__card');
            card.find('.item').addClass('item--hover');
        })
        .mouseleave(function(event){
            $('.item.item--hover').removeClass('item--hover');
        });
    // Init Change
    window.initCompanyPart();
    window.initProductPart();
});

import './mouseup';