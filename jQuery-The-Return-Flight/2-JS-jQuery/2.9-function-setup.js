/*
Now we're going to finish refactoring our code into the new Tour function. To accomplish this, we'll need to do quite a few things.

First, recreate an event listener within our Tour which will watch for clicks on any button contained in the passed in element and run the fetchPhotos function. Next, set this.el to the passed in el so that we'll be able access it later on. For now leave the fetchPhotos function empty, but make sure it's called when the button is clicked.
*/

// Refactored application.js
function Tour(el) {
  // save a reference to passed in element
  this.el = el;
  
  // helper methods
  this.fetchPhotos = function(){};
  
  // event handlers
  el.on('click','button', this.fetchPhotos);
}
$(document).ready(function() { 
  var paris = new Tour($('#paris'));
});