/*
Things are working fine, but we could make it better. While the server is responding, the traveler has no indication that anything is happening.

Our designers have added some special styling to account for this. Before the ajax command is sent, add a class of is-fetching to our #tour element, then remove this class after the request is complete.
*/

// Refactored application.js

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
        beforeSend: function() {
            $('#tour').addClass('is-fetching');
        },
        complete: function() {
            $('#tour').removeClass('is-fetching');
        }      
    });
  });
});