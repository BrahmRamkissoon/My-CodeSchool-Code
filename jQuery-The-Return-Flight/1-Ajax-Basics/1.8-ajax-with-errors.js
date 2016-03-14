/*Let's account for this case by adding an error callback that will set the contents of the .photos element to a message in an li element letting the traveler know that something went wrong and to try again. You can write whatever you'd like for this message.
*/

// applications.js
$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});

// Refactored
$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();        
      },
      error: function(request, errorType, errorMessage){
      	$('.photos').html('<li>Try again later</li>');
      }
    });
  });
});
