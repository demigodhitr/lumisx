/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/assets/js/pages/sign-up-page.js ***!
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
//# sourceMappingURL=sign-up-page.js.map