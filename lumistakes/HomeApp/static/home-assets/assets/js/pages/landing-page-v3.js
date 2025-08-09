/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./src/assets/js/pages/landing-page-v3.js ***!
  \************************************************/

//crypto graph carousel
$('.testimonial__carousel').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  dots: true,
  prevArrow: $('.testimonial-carousel__prev'),
  nextArrow: $('.testimonial-carousel__next'),
  appendDots: $('.testimonial-carousel__slick-slider-dots'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows:true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
});
/******/ })()
;
//# sourceMappingURL=landing-page-v3.js.map