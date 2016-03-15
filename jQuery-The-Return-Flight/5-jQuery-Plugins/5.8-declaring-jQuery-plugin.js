/*
Let's revisit our Vacation Photos page from Try jQuery. Previously we wrote some code to show the photos when each link was clicked. We'll see what we can do to refactor this functionality into a jQuery Plugin.

To start off, create a new jQuery plugin named photofy. Call it within your event handler for all .tour elements. Make your plugin call console.log passing in this -- the elements that we are attempting to photofy.
*/

// Refactored application.js
$.fn.photofy = function(){
 	console.log(this);
 };

$(document).ready(function() {
 
  $('.tour').photofy();
});