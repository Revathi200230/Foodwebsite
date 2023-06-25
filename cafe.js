$(document).ready(function(){
$('#menu-bars').click(function (){
  $('.navbar').toggleClass('active');
  });
});

$(document).ready(function(){
  $('#close').click(function (){
    $('.search-form').hide();
    });
  }); 
  
$(document).ready(function(){
  $('#search-icon').click(function (){
      $('.search-form').show();
    });
  });