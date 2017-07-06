$(function() {
  function audioAutoPlay(ele) {
    var audio = document.getElementById(ele);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function() {
          audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
          audio.play();
    }, false);
    document.addEventListener('touchstart', function() {
          document.getElementById(ele).play();
    }, false);
  }
  audioAutoPlay('audio');
  audioAutoPlay('audiotwo');
  var musicbg = document.getElementById('audio');
  var music = document.getElementById('audiotwo');
  $(".music").click(function(event) {
    $(".music").hide();
    $(".music-stop").show();
    musicbg.pause();
    music.pause();
  });
  $(".music-stop").click(function(event) {
    $(".music").show();
    $(".music-stop").hide();
    musicbg.play();
    music.play();
  });
  function fixPagesHeight() {
    $('.swiper-slide,.swiper-container,.mask').css({
      height: $(window).height(),
    })
  }
  $(window).on('resize', function() {
        fixPagesHeight();
  });
  fixPagesHeight();

  $(".sharewechat").click(function() {
    $(".mask,.share").fadeIn(200);
  });
  $(".mask,.sharet").click(function() {
    $(".mask,.share").fadeOut(200);
  });

  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    keyboardControl: true,
    onInit: function(swiper) {
      swiperAnimateCache(swiper);
      swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper) {
      swiperAnimate(swiper);
      var index = swiper.activeIndex;
      switch (index) {
        case 1:
          $("#audiotwo").attr("src", "music/music_one.mp3");
          audioAutoPlay('audiotwo');
          break;
        case 3:
          $("#audiotwo").attr("src", "music/music_three.mp3");
          audioAutoPlay('audiotwo');
          break;
        case 5:
          $("#audiotwo").attr("src", "music/music_five.mp3");
          audioAutoPlay('audiotwo');
          break;
        case 7:
          $("#audiotwo").attr("src", "music/music_seven.mp3");
          audioAutoPlay('audiotwo');
          break;
        case 9:
          $("#audiotwo").attr("src", "music/music_nine.mp3");
          audioAutoPlay('audiotwo');
          break;
        default:
          $("#audiotwo").attr("src", "music/music_bg.mp3");
          break;

      }
    }

  });
  function changeCard() {
    var num = Math.ceil(Math.random() * 9);
    $(".pagebtm img").attr("src", "images/0" + num + ".jpg");
  }
  changeCard();
  $(".load").fadeOut(200);

});