/*
With multiple tours on the page, we're no longer appending the message in the right place. We really only want this message to be added after() the button we click on. Instead of appending the message to the .usa list, add it after() the button that was clicked.
*/

// Code
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).closest('li').append(message);
    $(this).remove();
  });
});
