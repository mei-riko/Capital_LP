import $ from 'jquery';
$(function() {
    // Фигура которую анимируем
    const $figureDesktop = $('.figure_one-desktop');
    const $figureMobile = $('.figure_one-mobile');
    // Следующий блок
    const $next = $('#preipo');
    // Идентификатор
    let isAnimation = false;
    // Скролл страницы
    let newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // Отступ фигуры от верха страницы
    let figureOffset = 0;
    // Триггер
    let trigger = Math.ceil(figureOffset - newPosTop);

    var CurrentScroll = 0;
    $(window).on('scroll', function(event){
  
        var NextScroll = $(this).scrollTop();
  
        if (NextScroll > CurrentScroll){
           //write the codes related to down-ward scrolling here 
            newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            
            // Отступ фигуры от верха страницы
            if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
                figureOffset = $figureDesktop.offset().top;
                trigger = Math.ceil(figureOffset - newPosTop);

                if ( trigger >= 0 && trigger <= 40 && !isAnimation) {
                    isAnimation = true;
                    $figureDesktop.attr('transform', 'translate(0,195)');
    
                    setTimeout(function () {
                        $('.figure').each(function(){
                            $(this).addClass('color');
                        });
                    }, 300)
                }
            }else{
                figureOffset = $figureMobile.offset().top;
                trigger = Math.ceil(figureOffset - newPosTop);

                if ( trigger >= 0 && trigger <= 120 && !isAnimation) {
                    isAnimation = true;
                    $figureMobile.attr('transform', 'translate(0,130)');
    
                    setTimeout(function () {
                        $('.figure').each(function(){
                            $(this).addClass('color');
                        });
                    }, 300)
                }
            }
            // console.log( trigger );
        }
  
        CurrentScroll = NextScroll;  //Updates current scroll position
    });
});