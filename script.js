$(function () {
  $('.menu_link a').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeOutQuad'); // easing을 'easeOutQuad'로 변경
      event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.menu_link a').click(function () {
  $('.navbar-toggle:visible').click();
});
