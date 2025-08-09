/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./src/assets/js/pages/landing-page-v2.js ***!
  \************************************************/

//crypto graph carousel
$('.crypto-graph-carousel').slick({
  centerMode:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  cssEase: 'linear',
  variableWidth: true,
  variableHeight: true,
  dots: true,
  arrows: false,
  appendDots: $('.crypto-graph-carousel__slick-slider-dots'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        arrows:false,
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});

$('.testimonial .testimonial-carousel').on('init afterChange', function(e, slick){
  let currentSlick = $('.slick-current.slick-active', slick.$slideTrack)

  // get all title from carousel
  let currentTitle = currentSlick.data('slick-title')
  let prevTitle = currentSlick.prev().data('slick-title')
  let nextTitle = currentSlick.next().data('slick-title')
  let next2Title = currentSlick.nextAll().eq(1).data('slick-title')

  //get all items testimonial media text
  let currentContentCarousel = $('.testimonial-media .testimonial-media__items.active .testimonial-media__items-title')
  let prevContentCarousel = $('.testimonial-media .testimonial-media__items.prev .testimonial-media__items-title')
  let nextContentCarousel = $('.testimonial-media .testimonial-media__items.next .testimonial-media__items-title')
  let next2ContentCarousel = $('.testimonial-media .testimonial-media__items.next-2 .testimonial-media__items-title')

  //animate change media
  $('.testimonial-media .testimonial-media__items').addClass('ScaleBig');
  $('.testimonial-media .testimonial-media__items .testimonial-media__items-title').addClass('ScaleBigHideFirst');
  window.setTimeout(function(){
    $(".testimonial-media .testimonial-media__items").removeClass("ScaleBig");
    $('.testimonial-media .testimonial-media__items .testimonial-media__items-title').removeClass('ScaleBigHideFirst');
  }, 900);

  //replace title on media text with carousel order
  currentContentCarousel.text(currentTitle)
  prevContentCarousel.text(prevTitle)
  nextContentCarousel.text(nextTitle)
  next2ContentCarousel.text(next2Title)
});

//testimonial carousel
$('.testimonial .testimonial-carousel').slick({
  centerMode:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  cssEase: 'linear',
  variableWidth: true,
  variableHeight: true,
  arrows: true,
  prevArrow: $('.testimonial-carousel__prev'),
  nextArrow: $('.testimonial-carousel__next'),  
  responsive: [
    {
      breakpoint: 1064,
      settings: {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
        
        
/******/ })()
;
//# sourceMappingURL=landing-page-v2.js.map