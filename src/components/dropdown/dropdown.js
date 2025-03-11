$(document).ready(function(event) {
  'use strict';
  setTimeout(function() {
    _placementControl();
  }, 500);
});

function _placementControl(ignore){
  $('.dropdown-toggle').on('click', function() {
    $('.dropdown-submenu')
      .children('ul')
      .css('display', 'none');
    var offsetBottom = ($(window).height() - (ignore == null ? 0 : ignore)) - ($(this).offset().top - $(window).scrollTop());
    if (
      offsetBottom <
      $(this)
        .next('ul.dropdown-menu')
        .outerHeight()
    ) {
      $(this)
        .closest('.btn-group')
        .addClass('dropup');
    } else {
      $(this)
        .closest('.btn-group')
        .removeClass('dropup');
    }
  });

  $('.dropdown-submenu a').on('click', function(e) {
    $('.dropdown-submenu')
      .children('ul')
      .css('display', 'none');
    $(this)
      .next('ul')
      .toggle();
    e.stopPropagation();
    e.preventDefault();
  });
}


export default {
  run: _placementControl
};
