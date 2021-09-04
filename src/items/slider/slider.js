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
        if ( $(window).width() < 769 || window.matchMedia('screen and (max-width: 768x)').matches ){
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
                            576: {
                              spaceBetween: 20,
                            },
                        },
                    });
                }
            });
        }else{
            $( elem ).each(function(){
                if( $(this).hasClass('swiper-initialized') ){
                    this.swiper.destroy(true, true);
                }
                sliderClassRemove( $(this) );
            });
        }
    }
    
};

$(function() {
    sliderUnit('.content .content__slider');
});
// Resize
$(window).on("resize", function(){
    sliderUnit('.content .content__slider');
});