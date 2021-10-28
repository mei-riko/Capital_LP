import $ from 'jquery';

$(function() {
    window.ajaxLoaderHandler = function(e){
        e.preventDefault();
        if(e.isPropagationStopped()) {
            return false;
        }
        e.stopPropagation()
        let self = $(this);
        let url = self.data("href");
        let target = self.data("target");

        $(target).load(url, initAjaxLoader);
        return false;
    };
    var initAjaxLoader = function(){
        $('[data-loader="ajax"]')
        .off('click', window.ajaxLoaderHandler)
        .on('click', window.ajaxLoaderHandler);

        // Input Mask Phone
        if( $('input[type="tel"]').length > 0 ) {
            unitMaskPhone();
        }
    };
    initAjaxLoader();
});
