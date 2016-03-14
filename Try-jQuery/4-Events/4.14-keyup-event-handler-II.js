/*
Set the content of the #total element to the number the traveler has entered into the form field multiplied by the daily price.
*/

// Issue: text returns a jQuery object, not +$(this).val()
// HTML is same as previous challenge

// application.js
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    $('#nights-count').text($(this).val());
  });
});

// Refactored
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    var nights = +$(this).val();
    $('#nights-count').text(nights);
    var dailyPrice = +$(this).closest('.tour').data('daily-price');
    $('#total').text( nights * dailyPrice );
  });
});