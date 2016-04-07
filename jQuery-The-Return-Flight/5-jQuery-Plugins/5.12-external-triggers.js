/*
We've added an event handler to the "Show all photos" link above the tours. Within this event handler, you'll need to trigger an event, show.photofy, on all tours. Update the plugin to listen for this event and call the show function when it receives it.
*/

// application.js
$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
      e.preventDefault();
      settings.tour
              .addClass('is-showing-photofy')
              .find('.photos')
              .find('li:gt('+(settings.count-1)+')')
              .hide();
    }
    var settings = $.extend({
      count: 3,
      tour: $(this)
    }, options);
    settings.tour.on('click.photofy', '.see-photos', show);
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
  
  $('.show-photos').on('click', function(e) {
    e.preventDefault();
    // Trigger `show.photofy`
  });
});


// Refactored