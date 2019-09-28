$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('nav .menu').slideToggle(200);
  });

  $('input, textarea').focus(function () {
    $(this).parents('.label').addClass('focus');
  })

  $('input, textarea').blur(function () {
    $(this).parents('.label').removeClass('focus');
  })
  var count = 0;
  var count_item_r = $('.hide_review').length;
  $('.show_more').click(function (e) {
    event.preventDefault();
    count = count + 4;

    if (count_item_r < count) {
      $(this).hide(200);
    }

    $('.hide_review').each(function (index) {
      $(this).show(200);
      if (count == (index + 1)) {
        return false;
      }
    })
  })


  $('input[name="phone"]').intlTelInput({
    defaultCountry: "CA",
    initialCountry: "auto",
    //		preferredCountries: ["ua", "ru", 'az', 'am', 'by', 'kz', 'kg', 'md', 'tj', 'uz', 'tm', 'ge'],
    autoPlaceholder: 'aggressive',
    nationalMode: false,
    customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
      return "+" + selectedCountryData.dialCode;
    },
    geoIpLookup: function (success, failure) {
      /*
      $.get( "https://ip-api.com/json/", function( data ) {
      	var countryCode = (data.countryCode) ? data.countryCode : "ru";
      	success(countryCode);
      }, "json" );*/

      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
        var countryCode = (resp && resp.country) ? resp.country : "CA";
        success(countryCode);
      });
    },
    separateDialCode: false,
    formatOnDisplay: false,
    //		utilsScript: 'https://mk.beauty-matrix.ru/assets/plugins/intltelinput/js/utils.js',
  });


  $('.check').each(function () {
    $(this).on('change', function () {
      var form = $(this).parents('form');

      if ($(this).prop('checked')) {

        form.find('.phone').slideDown();
      } else {
        form.find('.phone').slideUp();
      }
    });
  });

  $('.faq-item').click(function () {
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle(300);
  });


  if ($(window).width() < 1200) {
    $('.mob_slider').addClass('owl-carousel owl-theme');
    $('.mob_slider').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      autoHeight: true,
      responsive: {
        0: {
          items: 1,
        }
      }
    });


  }
  
  var observer = lozad();
  observer.observe();

});