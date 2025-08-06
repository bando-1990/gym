AOS.init({
});


var windowWidth = $(window).width();
var windowSm = 820;
if (windowWidth <= windowSm) {
//横幅768px以下（スマホ）に適用させるJavaScriptを記述
} else {
//横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('#header').addClass('hide');
    } else {
        $('#header').removeClass('hide');
    }
    startPos = winScrollTop;
});
}

$('a[href^="#"]').click(function () {
  const speed = 800;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});


$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

    $(function(){
        $('.faq-orange-bg').click(function(){
          $(this).next('.faq-black-bg').slideToggle(300);
          $('.faq-orange-bg').not($(this)).next('.faq-black-bg').slideUp();
          if ($(this).children(".open-btn").hasClass('active')) {
            // activeを削除
            $(this).children(".open-btn").removeClass('active');
          }
          else {
            // activeを追加
            $(this).children(".open-btn").addClass('active');
          }
        });
      });

      $(".bxslider").bxSlider({
        easing: 'easeOutBounce',
        minSlides: 2,
        maxSlides: 5,
        slideWidth: 420,
        tickerHover:true,
        adaptiveHeight:true,
        slideMargin: 0,
        ticker: true,
        speed: 55000,
      });
      $(".bxslider1").bxSlider({
        easing: 'easeOutBounce',
        minSlides: 2,
        maxSlides: 5,
        slideWidth: 420,
        tickerHover:true,
        adaptiveHeight:true,
        slideMargin: 0,
        ticker: true,
        speed: 40000,
      });

      $('body').niceScroll({
        scrollspeed: 60, // scrolling speed
        cursorcolor:"#ee4d00",
        cursorwidth:10,
        cursorborderradius:10,
        mousescrollstep:20,

      });

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
         'showImageNumberLabel': false,
        });
        // $(function(){
        //   $('#main-visual, .merit, .evidence-wrap,.intro-area,#course,#slide-area,#voice,#price,.experience-area,#access,#contact,#faq,#footer').inertiaScroll({
        //     parent: $("#wrap")

        //     //オプションを追加する場合はここに追記

        //   });

        // });
