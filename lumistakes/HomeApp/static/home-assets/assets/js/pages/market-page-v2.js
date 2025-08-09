/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./src/assets/js/pages/market-page-v2.js ***!
  \***********************************************/
$('.market-group-cards').slick({
  centerMode: false,
  centerPadding: '0px',
  dots: true,
  arrows: false,
  infinite: false,
  variableWidth: true, 
  slidesToShow: 3.75,
  slidesToScroll: 1,
  prevArrow: $('.assets-carousel__prev'),
  nextArrow: $('.assets-carousel__next'),
  appendDots: $('.assets-carousel__slick-slider-dots'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 2.25,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 1.25,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows:false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
/******/ })()
;
//# sourceMappingURL=market-page-v2.js.map