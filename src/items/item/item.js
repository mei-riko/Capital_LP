import $ from 'jquery';


$(function() {
    // Hover Effect
    $('.item')
    .mouseenter(function(event){
        let icon = $(this).find('.item__open-modal');
        let btnAction = $(this).find('.btn_action');
        let btnSecondary = $(this).find('.btn_secondary');
        if( icon.hasClass('item_preipo__open-modal') ){
            icon.addClass('item_preipo__open-modal--hover');
        }
        if( icon.hasClass('item_preipo-soon__open-modal') ){
            icon.addClass('item_preipo-soon__open-modal--hover');
        }
        if( icon.hasClass('item_preipo-prev__open-modal') ){
            icon.addClass('item_preipo-prev__open-modal--hover');
        }
        btnAction.addClass('btn_action--hover');
        btnSecondary.addClass('btn_secondary--hover')
    })
    .mouseleave(function(event){
        $('.item_preipo__open-modal.item_preipo__open-modal--hover').removeClass('item_preipo__open-modal--hover');
        $('.item_preipo-soon__open-modal.item_preipo-soon__open-modal--hover').removeClass('item_preipo-soon__open-modal--hover');
        $('.item_preipo-prev__open-modal.item_preipo-prev__open-modal--hover').removeClass('item_preipo-prev__open-modal--hover');
        
        $('.btn_action.btn_action--hover').removeClass('btn_action--hover');
        $('.btn_secondary.btn_secondary--hover').removeClass('btn_secondary--hover');
    });
});