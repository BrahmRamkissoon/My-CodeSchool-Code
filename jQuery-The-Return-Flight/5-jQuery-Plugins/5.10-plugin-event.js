/*
For each tour that we are using our "photofy" plugin on, we'll want to do a few things.

For starters create an event handler using on, that targets the .see-photos link within each .tour. When this is clicked, run a function that will add a class of is-showing-photofy to the tour. You'll probably want to save a reference to this outside of your event handler, and use that in the click event handler.
*/

// application.js
$.fn.photofy = function() {
  this.each(function() {
    console.log(this);
  });
}

$(document).ready(function() {
  $('.tour').photofy();
});


// Refactored
$.fn.photofy = function() {
   this.each(function() {
  
    // get into the element
    var tour = $(this);
    
    tour.on('click.photofy', '.see-photos', function(event){
      event.preventDefault();
      $(this).hide();
      tour.addClass('is-showing-photofy');
    });   
    
  });
}

$(document).ready(function() {
  $('.tour').photofy();
});