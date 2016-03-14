/*
*/

// application.js
$(document).ready(function() {
  function showPhotos() {
    $(this).find('span').slideToggle();
  }
  $('.photos li').on('mouseenter', showPhotos)
                 .on('mouseleave', showPhotos);


  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        $('#tour').addClass('is-fetching');
      },
      complete: function() {
        $('#tour').removeClass('is-fetching');
      }
    });
  });
});


// Refactored
$(document).ready(function() {
  function showPhotos() {
    $(this).find('span').slideToggle();
  }
    
  $('.photos').on('mouseenter', 'li', showPhotos)
                 .on('mouseleave', 'li',showPhotos);


  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        el.addClass('is-fetching');
      },
      complete: function() {
        el.removeClass('is-fetching');
      }
    });
  });
});
