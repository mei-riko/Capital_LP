import $ from 'jquery';
$(function() {
    // Фигура которую анимируем
    const $figureDesktop = $('.figure_one-desktop');
    const $figureMobile = $('.figure_one-mobile');
    let $figureActive = $figureDesktop;

    // Идентификатор
    let isAnimation = false;
    // Скролл страницы
    let newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    // Смотрим с какой фигурой работаем
    if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
        figureDifference = 195;
        $figureActive = $figureDesktop;
    }else{
        figureDifference = 130;
        $figureActive = $figureMobile;
    }

    if( newPosTop <  figureDifference){
        isAnimation = false;
    }else{
        isAnimation = true;
        $figureActive.addClass('figure--stop');
    }

    // Отступ фигуры от верха страницы
    // В начале
    let figureOffset = 0;
    // В конце
    let figureOffsetFinal = 0;

    let figureDifference = 0;
    // Триггер
    let trigger = Math.ceil(figureOffset - newPosTop);

    var CurrentScroll = 0;

    $(window).on('scroll', function(event){
        var NextScroll = $(this).scrollTop();
        
        // Смотрим с какой фигурой работаем
        if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
            figureDifference = 195;
            $figureActive = $figureDesktop;
        }else{
            figureDifference = 130;
            $figureActive = $figureMobile;
        }
        
        console.log( 'NextScroll: ' + NextScroll + '; CurrentScroll: ' + CurrentScroll);
        newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; 

        // Отступ фигуры в начальном положении
        figureOffset = Math.ceil($figureActive.offset().top);
        // Отступ фигуры в конечном положении
        figureOffsetFinal = figureOffset + figureDifference;

        trigger = Math.ceil(figureOffset - newPosTop);
        // console.log( 'newPosTop: ' + newPosTop + '; figureOffset: ' + figureOffset + '; trigger: ' + trigger );

        if (NextScroll > CurrentScroll){
            if ( trigger >= 0 && newPosTop <= figureDifference && !isAnimation) {
                $figureActive.removeClass('figure--stop')
                $figureActive.attr('transform', 'translate(0,' + newPosTop + ')');
            }
            if ( trigger >=0 && newPosTop > figureDifference && !isAnimation){
                isAnimation = true;
                $figureActive.attr('transform', 'translate(0,' + figureDifference + ')');
                $('.figure').each(function(){
                    $(this).addClass('color');
                });
            }
        }else{
            if ( trigger >= 0 && newPosTop < figureDifference && !$figureActive.hasClass('figure--stop')) {
                $figureActive.attr('transform', 'translate(0,' + newPosTop + ')');
            }
            if ( trigger >= 0 && newPosTop < figureDifference && isAnimation){
                isAnimation = false;
                $('.figure').each(function(){
                    $(this).removeClass('color');
                });
            }
        }

        CurrentScroll = NextScroll;  //Updates current scroll position
    });
});