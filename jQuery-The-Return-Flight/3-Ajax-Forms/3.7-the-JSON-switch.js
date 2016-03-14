/*
Our form is working now! We're able to submit and see a response message from the server. We'd like to tweak this message a little bit, but since we're getting HTML back from the server, it wouldn't be easy. Luckily, we know that our server can also respond with a JSON version of this same response.

Update our existing $.ajax call to make the request setting the dataType to json, and update the success callback to set the HTML of the .tour element to a message of your choice that uses the description, price, number of nights and confirmation number.
*/

// application.js
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      
      success: function(response) {
        $('.tour').html(response);
      }
    });
  });
});

// Refactored
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      dataType: 'json',
      success: function(response) {
        var msg = $('<p> </p>');
        msg.append("Description: " + response.destination + ". ");
        msg.append("price: " + response.price + ". ");
        msg.append("# of nights: " + response.nights + ". ");
        msg.append("Confirmation: " + response.confirmation + ". ");
        $('.tour').html(msg);
      },
      contentType: 'application/json'
    });
  });
});
