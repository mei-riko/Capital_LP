import $ from 'jquery';
$(function() {
    // Фигура которую анимируем
    const $figure = $('.figure_one');
    // Следующий блок
    const $next = $('#preipo');
    // Идентификатор
    let isAnimation = false;
    // Скролл страницы
    let newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // Отступ фигуры от верха страницы
    let figureOffset = $figure.offset().top;
    // Отступ следующего блока от верха страницы
    let nextOffset = $next.offset().top;
    // Триггер
    let trigger = Math.ceil(figureOffset - newPosTop);

    // Если фигуру не видно
    // if( newPosTop > nextOffset ){
    //     isAnimation = true;
    //     $figure.attr('transform', 'translate(0,195)');
    //     $('.figure').each(function(){
    //         $(this).addClass('color');
    //     });

    //     setTimeout(function () {
    //         $figure.addClass('transition');
    //     }, 300)
    // }else{
    //     $figure.addClass('transition');
    // }

    var CurrentScroll = 0;
    $(window).on('scroll', function(event){
  
        var NextScroll = $(this).scrollTop();
  
        if (NextScroll > CurrentScroll){
           //write the codes related to down-ward scrolling here 
            newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            figureOffset = $figure.offset().top;
            trigger = Math.ceil(figureOffset - newPosTop);

            if ( trigger >= 0 && trigger <= 40 && !isAnimation) {
                isAnimation = true;
                $figure.attr('transform', 'translate(0,195)');

                setTimeout(function () {
                    $('.figure').each(function(){
                        $(this).addClass('color');
                    });
                }, 300)
            }
        }
        else {
            //write the codes related to upward-scrolling here
            // newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            // figureOffset = $figure.offset().top;
            // trigger = Math.ceil(figureOffset - newPosTop);

            // if ( trigger >= 60 && isAnimation) {
            //     isAnimation = false;
            //     $figure.attr('transform', 'translate(0,0)');

            //     setTimeout(function () {
            //         $('.figure').each(function(){
            //             $(this).removeClass('color');
            //         });
            //     }, 300)
            // }
        }
  
        CurrentScroll = NextScroll;  //Updates current scroll position
    });
    // При скролле
    // $(window).on('scroll', function(){
    //     newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //     figureOffset = $figure.offset().top;
    //     trigger = Math.ceil(figureOffset - newPosTop);
        
    //     console.log( trigger );
    
    //     if ( trigger >= 0 && trigger <= 40 && !isAnimation) {
    //         isAnimation = true;
    //         $figure.attr('transform', 'translate(0,195)');
    
    //         setTimeout(function () {
    //             $('.figure').each(function(){
    //                 $(this).addClass('color');
    //             });
    //         }, 300)
    //     } else if ( trigger > 60 && isAnimation ){
    //         isAnimation = false;
    //         $figure.attr('transform', 'translate(0,0)');
    
    //         setTimeout(function () {
    //             $('.figure').each(function(){
    //                 $(this).removeClass('color');
    //             });
    //         }, 300)
    //     }
    // });
});
