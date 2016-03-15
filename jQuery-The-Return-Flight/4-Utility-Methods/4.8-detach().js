/*
Let's take a minute to make our previous code a bit more efficient. Use the .detach() method to remove the .flight-times list element from the DOM before you insert the new list items. Then, re-insert the .flight-times element back into the .flights element.
*/

// application.js

$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    var flightElements = $.map(result, function(flightItem, index){
      var flightEl = $('<li>'+flightItem.flightNumber+'-'+flightItem.time+'</li>');
      return flightEl;
    });
    $('.flight-times').html(flightElements);
  });
});

// Refactored 
$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    var flightElements = $.map(result, function(flightItem, index){
      var flightEl = $('<li>'+flightItem.flightNumber+'-'+flightItem.time+'</li>');
      return flightEl;
    });
    $('.flight-times').detach()
    				    .html(flightElements)
    					.appendTo('.flights');
  });
});