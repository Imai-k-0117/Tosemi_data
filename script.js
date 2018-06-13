

$(function(){

  $('head').append(
      '<style type="text/css">body {display:none;}</style>'
  );
  $(window).load(function() {
      $('body').fadeIn("slow");
  });

    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });

    $('.circle_btn_1').click(function(){
            var targetTop = $('#target_point').offset().top;
       $('html,body').animate({
         'scrollTop': targetTop
       },1000);
     });
     $('.circle_btn_2').click(function(){
             var targetTop2 = $('#target_point_2').offset().top;
        $('html,body').animate({
          'scrollTop': targetTop2
        },1000);
      });
      $('.circle_btn_3').click(function(){
              var targetTop3 = $('#target_point_3').offset().top;
         $('html,body').animate({
           'scrollTop': targetTop3
         },1000);
       });



});
