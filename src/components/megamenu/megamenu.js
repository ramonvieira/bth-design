$(document).ready(function () {
  checkMM();
});

//checar MegaMenu renderizou
function checkMM() {
  if ($(".megamenu").length) {
    init();
  } else {
    window.setTimeout(checkMM, 50);
  }
}

function init() {
  var listItems = $(".megamenu > li:not(:first-child):not(:nth-child(2)):not(.menu-right)");

  checkContainerSize();

  $(window).resize(function () {
    checkContainerSize();
  });

  /*Uploads the selector if the user changes the system module*/
  $(".megamenu .dropdown-menu li").on("click", function () {
    setTimeout(function () {
      listItems = $(".megamenu > li:not(:first-child):not(:nth-child(2)):not(.menu-right)");
      $(window).trigger("resize")
    }, 300);
  });

  function checkContainerSize() {
    listItems.each(function () {

      /*The list item variable receives an object with its three properties: width, x position and left position*/
      var _listItem = objProps($(this));

      /*Calls each dropdown-menu child from the listItem*/
      $(this).children(".megamenu-dropdown").each(function () {

        /*The dropdown variable receives an object with its three properties: width, x position and left position*/
        var _dropdown = objProps($(this));

        /*If the container goes beyond the window's inner width it will be centered*/
        var _hasOffset = ($('body').innerWidth() - (_listItem.xPosition + _dropdown.leftPosition + _dropdown.width) < 0) ? -((_dropdown.width - _listItem.width) / 2) - _dropdown.leftPosition : 0;

        $(this).css("margin-left", _hasOffset);

      })

    })
  }

  /*Collects the width, x position and left position of the list item/dropdown-menu*/
  function objProps(obj) {
    var _width,
      _xPosition,
      _leftPosition,
      _clone = obj.clone();

    _clone.css("visibility", "hidden");
    _clone.removeClass("ng-hide hidden");
    _clone.insertBefore(obj);

    _width = _clone.outerWidth();
    _xPosition = _clone[0].getBoundingClientRect().left;
    _leftPosition = _clone.position().left

    _clone.remove();

    return {
      "width": _width,
      "xPosition": _xPosition,
      "leftPosition": _leftPosition
    };
  }

  $(document).on("click", ".megamenu-dropdown a", function () {
    if ($(this).parent().hasClass('disabled')) {
      return false;
    };
    $(this).parents('.megamenu-dropdown').addClass('invisible');
    $('.megamenu li').removeClass('mm-delay');
  });

  //dropdown de seleção do contexto
  $(document).on("click", ".megamenu-context li", function () {
    $(this).parents('.megamenu-dropdown').addClass('invisible');
    $('.megamenu li').removeClass('mm-delay');
  })

  var megamenuListItem;
  var listItemHasMouseOver;
  var HtmlHasMouseMove;

  $(document).on("mouseover", ".megamenu li", function (e) {
    megamenuListItem = $(this);
    listItemHasMouseOver = true;

    $('.megamenu-dropdown').addClass('invisible');
    $(this).children('.megamenu-dropdown').removeClass('invisible');
    $('.megamenu li').removeClass('mm-delay');
    $(this).addClass('mm-delay');
  });

  /*Quando houver um select2 dentro do megamenu*/
  setTimeout(function () {
    $(".megamenu li [bf-select2]").on("select2-opening", function (e) {
      megamenuListItem.addClass("megamenu-active");
    });
    $(".megamenu li [bf-select2]").on("select2-close", function (e) {
      listItemHasMouseOver = false;
      HtmlHasMouseMove = false;
    });
  }, 100);
  $("html").on("mouseover", function (e) {
    if (listItemHasMouseOver == false) {
      megamenuListItem.removeClass("megamenu-active");
    }
  })
  $("html").on("mousemove", function (e) {
    if (listItemHasMouseOver == false && HtmlHasMouseMove == false) {
      HtmlHasMouseMove = true;
      megamenuListItem.removeClass("megamenu-active");
    }
  })

  $(document).on("mouseover", ".megamenu > li:not('.sort'):has('.mega-fluxos')", function () {
    $(this).find(".mega-fluxos").sortable({
      placeholder: "megamenu-placeholder",
      revert: true,
      scroll: false,
      containment: "parent",
      cursor: "move",
      delay: 50,
      distance: 5,
      forceHelperSize: true,
      forcePlaceholderSize: true,
      helper: "clone",
      items: "> li",
      tolerance: "pointer",
      zIndex: 100001
    });
    $(this).addClass('sort');
  });

  $(document).on("mouseover", ".megamenu > li:not('.scroll'):has('.nano')", function () {
    $(this).find(".nano").nanoScroller({
      preventPageScrolling: true
    });
    $(this).addClass('scroll');
  });

  //** bth-megamenu-search
  $(document).on("mouseover", ".megamenu-search > a", function () {

    $(".megamenu-search .nano").nanoScroller({
      preventPageScrolling: true
    });
    $(".megamenu-search .busca-sistema input").focus();

    var btn = document.querySelectorAll('.onda'),
      indicador = document.querySelector('.indicador-ativo'),
      indi = 0; //-452
    indicador.style.marginLeft = indi + 'px';
    var defaultWidth = btn[0].offsetWidth;
    indicador.style.width = defaultWidth + 'px';

    for (var i = 0; i < btn.length; i++) {
      btn[i].onmousedown = function (e) {
        var newRound = document.createElement('div'),
          x, y;

        newRound.className = 'efeito-onda';
        this.appendChild(newRound);

        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;

        newRound.style.left = x + "px";
        newRound.style.top = y + "px";
        newRound.className += " anima-onda";

        indicador.style.marginLeft = indi + (this.dataset.num - 1) * defaultWidth + 'px';
        setTimeout(function () {
          newRound.remove();
        }, 1200);
      };
    }
  });


  var menuItemsWidth = 0;
  $.makeArray($('.megamenu > li'))
    .forEach(
      function (a) {
        menuItemsWidth += a.getBoundingClientRect().width
      }
    )

  var menuItemsButtons = $('.megamenu > li.has-button > button');

  window.addEventListener('resize', windowResized);

  function windowResized() {
    if ((window.innerWidth) < (menuItemsWidth) + 30) {
      toggleMegamenuButtons(true);
    } else {
      toggleMegamenuButtons(false);
    }
  }
  windowResized();

  function toggleMegamenuButtons(change) {
    $(menuItemsButtons)
      .toggleClass('btn-primary', !change)
      .toggleClass('btn-link', change)
      .toggleClass('btn-hide-label', change);
  }

  //lowercase megamenu title
  var regex = new RegExp(' de | e | do ', 'gi');
  var content = $('.megamenu-title')
    .html()
    .toLowerCase()
    .replace(regex, function(match) {
      return ' <span>' + match.trim() + '</span> ';
    });
  $('.megamenu-title').html(content);

};

export default {
  run: checkMM
};