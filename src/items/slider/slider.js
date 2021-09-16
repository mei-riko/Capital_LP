import $ from 'jquery';

const sliderClassAdd = ( container ) => {
    $( container ).addClass('swiper');
    $( container ).find('.content__slider-wrapper').addClass('swiper-wrapper');
    $( container ).find('.content__slider-slide').addClass('swiper-slide');
};
const sliderClassRemove = ( container ) => {
    $( container ).removeClass('swiper');
    $( container ).find('.content__slider-wrapper').removeClass('swiper-wrapper');
    $( container ).find('.content__slider-slide').removeClass('swiper-slide');
};
const sliderUnit = ( elem ) => {
    if( $( elem ).length > 0 ){
        $( elem ).each(function(){
            sliderClassAdd( $(this) );
            console.log( $(this).hasClass('swiper-initialized') );
            if( !$(this).hasClass('swiper-initialized') ){
                const swiper = new Swiper(this, {
                    // Optional parameters
                    loop: false,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    breakpoints: {
                        577: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        769: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1025: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1601: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                    },
                });
            }
        });
        // if ( $(window).width() < 769 || window.matchMedia('screen and (max-width: 768x)').matches ){
            
        // }else{
        //     $( elem ).each(function(){
        //         if( $(this).hasClass('swiper-initialized') ){
        //             this.swiper.destroy(true, true);
        //         }
        //         sliderClassRemove( $(this) );
        //     });
        // }
    }
    
};

$(function() {
    sliderUnit('.content .content__slider');
});
// Resize
$(window).on("resize", function(){
    sliderUnit('.content .content__slider');
});