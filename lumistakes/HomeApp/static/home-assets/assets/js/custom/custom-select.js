/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./src/assets/js/custom/custom-select.js ***!
  \***********************************************/
  //landing page header menu
  $('.js-forms-group--currency').on('click', function(e) {
    $('.forms-group__dropdown').removeClass('is-open');
    $(this).parent().find('.forms-group__dropdown').toggleClass('is-open');
    e.preventDefault();
    e.stopPropagation();
  });
  $('.js-forms-group--currency .js-forms-group__dropdown .forms-group__items').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    //get data dropdown item clicked
    let selectID = $(this).closest('.js-forms-group--currency').attr('id');
    console.log(selectID);
    let dataSelectedAttr = $(this).data("selected");
    let iconSelect = $(this).find('.fg-items__icon').attr('src');
    let nameSelect = $(this).find('.fg-items__value').text();
    console.log(dataSelectedAttr + ' && ' + iconSelect + ' && ' + nameSelect);
    //replace content dropdown to seleted
    $('#'+selectID).find('.forms-group__items.selected').attr('data-selected', dataSelectedAttr);
    $('#'+selectID).find('.forms-group__items.selected .fg-items__icon').attr('src', iconSelect);
    $('#'+selectID).find('.forms-group__items.selected .fg-items__value').text(nameSelect);
    //close dropdown
    $('.forms-group__dropdown').removeClass('is-open');
  });
  $('.js-forms-group--purchase').on('click', function(e) {
    $('.forms-group__dropdown').removeClass('is-open');
    $(this).parent().find('.forms-group__dropdown').toggleClass('is-open');
    e.preventDefault();
    e.stopPropagation();
  });
  $('.js-forms-group--purchase .js-forms-group__dropdown .forms-group__items').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    //get data dropdown item clicked
    let selectID = $(this).closest('.js-forms-group--purchase').attr('id');
    console.log(selectID);
    let dataSelectedAttr = $(this).data("selected");
    let iconSelect = $(this).find('.fg-items__icon').attr('src');
    let nameSelect = $(this).find('.fg-items__value').text();
    console.log(dataSelectedAttr + ' && ' + iconSelect + ' && ' + nameSelect);
    //replace content dropdown to seleted
    $('#'+selectID).find('.forms-group__items.selected').attr('data-selected', dataSelectedAttr);
    $('#'+selectID).find('.forms-group__items.selected .fg-items__icon').attr('src', iconSelect);
    $('#'+selectID).find('.forms-group__items.selected .fg-items__value').text(nameSelect);
    //close dropdown
    $('.forms-group__dropdown').removeClass('is-open');
  });
  $('.js-forms-select').on('click', function(e) {
    $('.forms-group__dropdown').removeClass('is-open');
    $(this).parent().find('.forms-group__dropdown').toggleClass('is-open');
    e.preventDefault();
    e.stopPropagation();
  });
  $('.js-forms-select .js-forms-group__dropdown .forms-group__items').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    //get data dropdown item clicked
    let selectID = $(this).closest('.js-forms-select').attr('id');
    console.log(selectID);
    let dataSelectedAttr = $(this).data("selected");
    let iconSelect = $(this).find('.fg-items__icon').attr('src');
    let nameSelect = $(this).find('.fg-items__value').text();
    console.log(dataSelectedAttr + ' && ' + iconSelect + ' && ' + nameSelect);
    //replace content dropdown to seleted
    $('#'+selectID).find('.forms-group__items.selected').attr('data-selected', dataSelectedAttr);
    $('#'+selectID).find('.forms-group__items.selected .fg-items__icon').attr('src', iconSelect);
    $('#'+selectID).find('.forms-group__items.selected .fg-items__value').text(nameSelect);
    //close dropdown
    $('.forms-group__dropdown').removeClass('is-open');
  });
  $(document).on('click', function (e) {
    e.stopPropagation();
    $('.forms-group__dropdown').removeClass('is-open');
    $('.dropdown-toggle').dropdown();
  });
  $('.dropdown-menu').on( 'click', 'a', function() {
    let text = $(this).html();
    let icon = '<img src="../assets/media/images/icons/arrow-down.svg" alt="">';
    $(this).closest('.dropdown').find('.dropdown-toggle').html(text + icon);
  });

/******/ })()
;
//# sourceMappingURL=custom-select.js.map