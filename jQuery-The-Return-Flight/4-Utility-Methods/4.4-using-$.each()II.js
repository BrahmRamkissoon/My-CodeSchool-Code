$('button').on('click', function() {
  $.getJSON('/cities/deals', function(result){
        $.each(result, function(index, dealItem) {
        var dealElement = $('.deal-' + index);
        dealElement.find('.name').html(dealItem.name);
        dealElement.find('.price').html(dealItem.price);
      });
    });
  });