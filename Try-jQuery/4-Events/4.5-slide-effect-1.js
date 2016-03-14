/*
Inside the click event handler, show the .photos element by querying the DOM for it and calling the slideDown() method.
*/

// application.js
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {

  });
});

// Refactored
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $(this).find('.photos').slideDown();
  });
});
