$(function() {
  $('.header-right a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 'slow');
    if($('.btn-gnavi').hasClass('open')) {
      $('.btn-gnavi').removeClass("open")
      $('.header-right ul').animate({
        right: '-100%'
      }, 200);
    }
  });

  $('.btn-gnavi').click(function() {
    var rightVal = 0;
    if($(this).hasClass('open')) {
      rightVal = '-100%';
      $(this).removeClass('open');
    }
    else {
      $(this).addClass('open');
    }

    $('.header-right ul').animate({
      right: rightVal
    }, 200);

  });


});
