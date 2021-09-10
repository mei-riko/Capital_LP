import $ from 'jquery';
import {unitMaskPhone} from '../items/input/input';

$(function() {
    var initAjaxLoader = function(){
        $('a[data-loader="ajax"]').click(function(e){
            e.preventDefault();
            let self = $(this);
            let url = self.attr("href");
            let target = self.data("target");
            $(target).load(url, initAjaxLoader);
            return false;
        });
        // Input Mask Phone
        // if( $('input[type="tel"]').length > 0 ) {
        //     unitMaskPhone();
        // }
    };
    initAjaxLoader();
});