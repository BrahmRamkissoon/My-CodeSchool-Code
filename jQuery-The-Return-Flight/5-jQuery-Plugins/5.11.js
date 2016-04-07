/*
We'll need to update our plugin to accept and use an options JavaScript Object that we're passing in. Looks like someone started refactoring the show method already to use a variable called settings, which uses a count and a tour key in settings.

Create a variable, settings, that defaults the count to 3, and sets tour to the current tour element -- $(this). Then, update the call to photofy on load to pass in a JavaScript object with a count of 1.
*/


// application.js
var show = function(e) {
       e.preventDefault();
       settings.tour
               .addClass('is-showing-photofy')
               .find('.photos')
               .find('li:gt('+(settings.count-1)+')').hide();
     }
     
     settings.tour.on('click.photofy', '.see-photos', show);
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
});

// Refactored
$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
       e.preventDefault();
       settings.tour
               .addClass('is-showing-photofy')
               .find('.photos')
               .find('li:gt('+(settings.count-1)+')').hide();
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
});