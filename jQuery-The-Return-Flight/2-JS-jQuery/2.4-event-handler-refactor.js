/*
Well, we moved our big block of code around, but it's still tough to read. Let's move our $.ajax call from within this event handler callback to a new fetchPhotos key on the tour object. Also, update the call to on click to use this new fetchPhotos function.
*/


// refactored
var tour = {
    init: function() { $("#tour").on("click", "button", this.fetchPhotos); },
    
    fetchPhotos: function() { 
      $.ajax('/photos.html', {
        data: {location: $("#tour").data('location')},
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
    }
};
$(document).ready(function() { 
  tour.init();
});