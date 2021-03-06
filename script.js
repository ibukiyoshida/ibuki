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
　　　


    // Created for an Articles on:
// https://www.html5andbeyond.com/bubbling-text-effect-no-canvas-required/

jQuery(document).ready(function($){
 
    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4,6,8,10];
 
    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
     
    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function(){
         
        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
         
        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
 
 
    }, 350);
});


// 背景画像を含むすべての画像が正確に読み込みこめたら実行
$('.wrapper').imagesLoaded( { background: true }, function() {
    Loadingfade();
});

// 5秒経ったら、強制的にローディング非表示
$(function(){
setTimeout(Loadingfade, 5000);
});

//ローディング非表示処理
function Loadingfade(){
// 1秒かけてローディング部分を非表示にし、その後0.8秒かけて背景を非表示
$('#loading-main').fadeOut(3000, function(){
$('#loading').fadeOut(800);
});
}

});
