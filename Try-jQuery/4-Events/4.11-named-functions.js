/*
It looks like both of our event handlers on the .photos li elements are exactly the same! Let's go ahead and refactor these into a new function named showPhotos() and change our event handlers to reference that instead.
*/

// application.js
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });

  // create showPhotos() function

  $('.photos').on('mouseenter', 'li', function() {
    $(this).find('span').slideToggle();
  });
  $('.photos').on('mouseleave', 'li', function() {
    $(this).find('span').slideToggle();
  });
});


// Refactored
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });

  // create showPhotos() function
  function showPhotos (){
  	$(this).find('span').slideToggle();
  }
  
  $('.photos').on('mouseenter', 'li', showPhotos);
  $('.photos').on('mouseleave', 'li', showPhotos);
});