import $ from 'jquery';

$(function() {
    // Fancybox
    if( $('[data-fancybox]').length > 0 ){
        $('[data-fancybox]').fancybox({
            autoFocus: false
        });
    }
    // Modal
    $('.item.item_modal .item_modal__btn').on('click', function(){
        let modal = $(this).closest('.modal');
        let modalForm = modal.find('.modal__form');
        $(".fancybox-slide").animate({
            scrollTop: $(document).height()
        }, 2000);

        modalForm.find('input:first-child').focus();
    });
    $('.modal .modal__form-btn').on('click', function(){
        $(this).closest('.modal__track-container').find('.modal__track').addClass('modal__track--active');
    });
});

$(document).on('mouseup', function (e){ 
    let trackActive = $(".modal__track"); // элемент

    if (!trackActive.is(e.target) // клик был не по блоку
          && trackActive.has(e.target).length === 0 // и не по его дочерним элементам
    ) { 
        $('.modal__track').removeClass('modal__track--active');
    }
});