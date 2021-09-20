import $ from 'jquery';
import {unitMaskPhone} from '../items/input/input';

$(function() {
    var initAjaxLoader = function(){
        $(document).on('click', '[data-loader="ajax"]', function(e){
            e.preventDefault();

            let self = $(this);
            let url = self.data("href");
            let target = self.data("target");

            $(target).load(url, initAjaxLoader);

            return false;
        });
        // Input Mask Phone
        if( $('input[type="tel"]').length > 0 ) {
            unitMaskPhone();
        }
    };
    initAjaxLoader();
});