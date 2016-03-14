/*
Within our event handler, update the number of nights in the #nights-count element to whatever the traveler entered in the #nights form field.
*/

// application.js
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    
  });
});

// Refactored
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    $('#nights-count').text(+$(this).val());
  });
});