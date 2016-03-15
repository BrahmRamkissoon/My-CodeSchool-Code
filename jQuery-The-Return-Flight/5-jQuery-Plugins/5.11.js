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