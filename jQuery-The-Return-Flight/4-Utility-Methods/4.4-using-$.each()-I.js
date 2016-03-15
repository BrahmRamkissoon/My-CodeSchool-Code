/*
Ok, now that we can see what our data looks like, lets go ahead and put the data into our html. We have HTML already created for each deal, so we can use the index within the each loop to locate the deal DOM node to update. Update the name and the price of each deal.
*/

//application.js
$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, dealItem) {
        // Your code goes here
      });
    }
  });
});

// Refactored
('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, dealItem) {
        
        // Your code goes here
      	var deal = $('.deal-' + index);
        deal.find('.name').html(dealItem.name);
        deal.find('.price').html(dealItem.price);
      
      });
    }
  });
});
