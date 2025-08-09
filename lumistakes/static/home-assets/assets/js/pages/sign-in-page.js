/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/assets/js/pages/sign-in-page.js ***!
  \*********************************************/

$(document).ready(function () {
  //toggle show password
  $('.js-form-group__password-toggle').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('show');
    var dataAttribute = $(this).attr('data-password');
    var input = $('#' + dataAttribute);
    input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password');
  });
});
/******/ })()
;
//# sourceMappingURL=sign-in-page.js.map