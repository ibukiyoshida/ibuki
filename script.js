$(function() {
    $('header a').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
          scrollTop: position
        }, 500);
    });

    $('#top-btn').click(function(){
        $('html,body').animate({ 
            'scrollTop': 0 
        }, 'slow');
    });

    $(window).scroll(function (){
        $(".sample").each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        });
    });

});
