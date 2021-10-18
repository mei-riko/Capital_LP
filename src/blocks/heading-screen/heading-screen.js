import $ from 'jquery';
$(function() {
    // Фигура которую анимируем
    const $figureDesktop = $('.figure_one-desktop');
    const $figureMobile = $('.figure_one-mobile');
    let $figureActive = $figureDesktop;

    // Идентификатор
    let canAnimation = false;
    let canTranslate = false;
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
        canAnimation = true;
        canTranslate = true;
        $figureActive.attr('transform', 'translate(0,' + newPosTop + ')');
        // $figureActive.removeClass('figure--stop');
    }else{
        canAnimation = false;
        canTranslate = false;
        // $figureActive.addClass('figure--stop');
    }

    // Отступ фигуры от верха страницы для скроллинга
    // В начале
    let figureOffset = 0;
    // В конце
    let figureOffsetFinal = 0;

    let figureDifference = 0;
    // Триггеры
    let figureOffsetTrigger = Math.ceil($figureActive.offset().top);
    let trigger = Math.ceil(figureOffset - newPosTop);

    var CurrentScroll = 0;

    $(window).on('scroll', function(event){
        var NextScroll = Math.ceil( $(this).scrollTop() );
        
        // Смотрим с какой фигурой работаем
        if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
            figureDifference = 195;
            $figureActive = $figureDesktop;
        }else{
            figureDifference = 130;
            $figureActive = $figureMobile;
        }
        
        newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; 

        // Отступ фигуры в начальном положении
        figureOffset = Math.ceil($figureActive.offset().top);
        // Отступ фигуры в конечном положении
        figureOffsetFinal = figureOffset + figureDifference;

        trigger = Math.ceil(figureOffset - newPosTop);
        
        console.log( 
            'NextScroll: ' + NextScroll 
            + ';\nCurrentScroll: ' + CurrentScroll 
            + ';\nfigureOffsetTrigger (в начале): ' + figureOffsetTrigger
            + ';\nfigureOffset(сейчас): ' + figureOffset 
            + ';\nnewPosTop(от верха браузера): ' + newPosTop 
            + ';\ntrigger: ' + trigger 
            + ';\nстатус анимации: ' + canAnimation
            + ';\nстатус translate: ' + canTranslate
        );

        if( newPosTop === 0){
            canTranslate = true;
            $figureActive.attr('transform', 'translate(0,' + newPosTop + ')');
            $('.figure').each(function(){
                $(this).removeClass('color');
            });
        }
        
        // Смотрим скролл вниз или вверх
        if (NextScroll > CurrentScroll ){
            if ( trigger >= 0 && newPosTop <= figureDifference && canAnimation && canTranslate ) {
                $figureActive.attr('transform', 'translate(0,' + newPosTop + ')');
            }
            if ( newPosTop > figureDifference && canAnimation && canTranslate ){
                canAnimation = false;

                $figureActive.attr('transform', 'translate(0,' + figureDifference + ')');
                $('.figure').each(function(){
                    $(this).addClass('color');
                });
            }
        }else{
            if ( trigger >= 0 && newPosTop < figureDifference && canAnimation ) {
                if( canTranslate ){
                    $figureActive.attr('transform', 'translate(0,' + newPosTop + ')');
                }
            }
            if ( trigger >= 0 && newPosTop < figureDifference && !canAnimation){
                canAnimation = true;
                $('.figure').each(function(){
                    $(this).removeClass('color');
                });
            }
        }

        CurrentScroll = NextScroll;  //Updates current scroll position
    });
});