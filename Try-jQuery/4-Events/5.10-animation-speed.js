/*
This animation lacks the pop we're looking for. Let's speed it up to run in 200ms using the 'fast' shorthand.
*/

// application.js
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'});
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});

// Refactored
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');

  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});