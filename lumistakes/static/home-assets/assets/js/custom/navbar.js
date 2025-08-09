/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/assets/js/custom/navbar.js ***!
  \****************************************/
// Mobile Search
$(".navbar-search").on('click', function (e)  {
  if($(window).width() < 992) {
    $(".navbar-search-popup").toggleClass("active");
    $(".js-navbar-search-popup__input").focus();
  }
})
$(".js-navbar-search-popup__image--cancel").on('click', function (e)  {
  if($(window).width() < 992) {
    $(".navbar-search-popup").removeClass("active");
    e.stopPropagation();
  }
})

// Notifications
$(".navbar-notifications").on('click', function (e)  {
  $(".navbar-notifications__dropdown").toggleClass("active");
})

// Profile Menu 
$(".navbar-profile-menu").on('click', function (e)  {
  $(".navbar-profile-menu__dropdown").toggleClass("active");
})
/******/ })()
;
//# sourceMappingURL=navbar.js.map