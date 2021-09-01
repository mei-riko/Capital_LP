import $ from 'jquery';

$(function() {
    // Input Mask Phone
    if( $('input[type="tel"]').length > 0 ) {
        $('input[type="tel"]').inputmask({
            mask: "+9 999 999 99 99",
            placeholder: " ",
            showMaskOnHover: false,

            onincomplete: function(){ 
                $(this).closest("form").addClass('error-phone'); 
                $(this).addClass('input--error'); 
                $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
                $(this).removeClass('input--success');
            }, 
            oncomplete: function(){ 
                $(this).closest("form").removeClass('error-phone'); 
                $(this).removeClass('input--error'); 
                $(this).siblings(".error_phone").removeClass('error').html(''); 
                $(this).addClass('input--success'); 
            },
        })
    }
    // Input Mask Name
    if( $('input[name="name"]').length > 0 ) {
        $('input[name="name"]').inputmask({
            regex: "[А-Яа-яЁё]{2,20}",
            placeholder: " ",
            showMaskOnHover: false,

            onincomplete: function(){ 
                $(this).closest("form").addClass('error-name'); 
                $(this).addClass('input--error'); 
                $(this).siblings(".error_name").addClass('error').html('Укажите имя используя кириллицу'); 
                $(this).removeClass('input--success');
            }, 
            oncomplete: function(){ 
                $(this).closest("form").removeClass('error-name'); 
                $(this).removeClass('input--error'); 
                $(this).siblings(".error_name").removeClass('error').html(''); 
                $(this).addClass('input--success');
            },
        })
    }
    // Input Mask Email
    if( $('input[name="mail"]').length > 0 ) {
        $('input[name="mail"]').inputmask({
            // mask: "email",
            regex: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]{2,20}@[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]{2,10}.[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]{2,6}",
            placeholder: " ",
            showMaskOnHover: false,

            onincomplete: function(){ 
                $(this).closest("form").addClass('error-email'); 
                $(this).addClass('input--error'); 
                $(this).siblings(".error_email").addClass('error').html('Укажите имя используя кириллицу'); 
                $(this).removeClass('input--success');
            }, 
            oncomplete: function(){ 
                // alert('inputmask complete'); 
                $(this).closest("form").removeClass('error-email'); 
                $(this).removeClass('input--error'); 
                $(this).siblings(".error_email").removeClass('error').html(''); 
                $(this).addClass('input--success'); 
            },
        })
    }
});

$('input').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
        event.preventDefault();
        $(this).blur();
        return false;
    }
});