/*
Right now we're hardcoding the URL of the form action in two places - in the HTML of the form, and in our $.ajax call. Let's update our $.ajax call to use whatever URL the form specifies. Also, update the type of the ajax request to use the method attribute of the form.
*/

// application.js
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      dataType: 'json',
      success: function(response) {
        $('.tour').html('<p></p>')
                  .find('p')
                  .append('Trip to ' + response.description)
                  .append(' at $' + response.price)
                  .append(' for ' + response.nights + ' nights')
                  .append('. Confirmation: ' + response.confirmation);
      }
    });
  });
});

// Refactored
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    $.ajax($('form').attr('action'), {
      type: form.attr('method'),
      data: $('form').serialize(),
      dataType: 'json',
      success: function(response) {
        $('.tour').html('<p></p>')
                  .find('p')
                  .append('Trip to ' + response.description)
                  .append(' at $' + response.price)
                  .append(' for ' + response.nights + ' nights')
                  .append('. Confirmation: ' + response.confirmation);
      }
    });
  });
});