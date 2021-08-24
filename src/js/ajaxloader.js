import $ from 'jquery';

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
    };
    initAjaxLoader();
});