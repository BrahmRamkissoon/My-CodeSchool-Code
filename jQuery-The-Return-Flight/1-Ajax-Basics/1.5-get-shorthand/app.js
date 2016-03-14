/*
There's an easier way to write this code using the jQuery $.get shorthand method. Refactor this code to use $.get instead of $.ajax.
*/

// application.js
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});


// Refactored
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.get('/photos.html', function(response) {
        $('.photos').html(response).fadeIn();      
    });
  });
});