/*
We're prototyping a page right now that will fetch some content from around the web and display it so that our travelers can find out about the weather and see more pictures for destinations they are interested in. In chapter 6 we'll make this content dynamic, but for now we'll hardcode it.

The problem is the button can be clicked any number of times and it'll always append the weather. Update this to instead remove the event handler when it's clicked. Note: You can access the clicked button using $(this).
*/

// application.js
$(document).ready(function(){
  // Get Weather
  $('button').on('click', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
  });
});

// Refactored

$(document).ready(function(){
  // Get Weather
  $('button').on('click', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click');
  });  
});