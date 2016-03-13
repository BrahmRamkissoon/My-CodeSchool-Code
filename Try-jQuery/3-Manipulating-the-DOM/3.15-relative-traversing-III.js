/*
Rather than clicking on the button to show the message, we've decided to allow travelers to click on the entire <li> element. Change the call to on() to target .tour elements instead of button elements. After that change, $(this) will reference the clicked <li>. Let's remove the closest() method so that .append(message) still works. Then, use find to locate the button element and remove() it.
*/

//application.js
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).closest('.tour').append(message);
    $(this).remove();
  });
});}

// Refactored
$(document).ready(function() {
  $('.tour').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).append(message);
    $(this).find('.book').remove();
  });
});
