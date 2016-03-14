/*
In order to add a bit of functionality to our Tour, let's pass in the nightly cost of the Tour when we create a new one - maybe 100 for now. In the Tour function, update the declaration to accept this new price argument.

In order to use this price, create a new function within the Tour named cost, which can be called with a number of nights. This cost function should console.log the number of nights multiplied by the price. We've added the call to cost within $(document).ready(), which you can uncomment once you've implemented.
*/

// Refactored application.js
function Tour(price) {
  this.cost = function (nights){
    console.log(nights * price);
  }
  console.log("A new Tour was created");
}

$(document).ready(function() { 
  var tour = new Tour(100);
  tour.cost(4);
});