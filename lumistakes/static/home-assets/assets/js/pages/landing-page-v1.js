/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./src/assets/js/pages/landing-page-v1.js ***!
  \************************************************/
//landing page header menu
$('.js-navbar-toggler').on('click', function(e) {
  e.preventDefault()
  e.stopPropagation();
  $('.header-navbar.header-navbar--v1').toggleClass("header-navbar--open"); 
});

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $('.slick-slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });
  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
  $(visibleSlides).last().next().css('opacity', 0);
}

$(setSlideVisibility());

$('.testimony__carousel').on('init afterChange', function(e, slick){
  let currentSlick = $('.slick-current.slick-active', slick.$slideTrack)
  let prevName = currentSlick.prev().data('slide-name')
  let nextName = currentSlick.next().data('slide-name')
  let prevContentCarousel = $('.testimony-carousel__prev-next .testimony-carousel-prev__title');
  let nextContentCarousel = $('.testimony-carousel__prev-next .testimony-carousel-next__title');
  prevContentCarousel.text(prevName)
  nextContentCarousel.text(nextName)
  setSlideVisibility();
});

$('.testimony__carousel').slick({
    centerMode: true,
    centerPadding: '32px',
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.testimony-carousel__prev'),
    nextArrow: $('.testimony-carousel__next'),
    appendDots: $('.testimony-carousel__slick-slider-dots'),
    adaptiveHeight: true,
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
          
/******/ })()
;
//# sourceMappingURL=landing-page-v1.js.map