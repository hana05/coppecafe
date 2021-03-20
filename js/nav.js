//ローダー
$(function(){
	var loader = $('.loader-wrap');
	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});
	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);
});	


//ハンバーガー

$(function(){
  fade('.togglewrap');
});

function fade(elm){
  var $fade = $(elm),
      $body = $('body');
      $fade.addClass('hide');

  $('#toggle').on('click', function(){
    $fade.toggleClass('hide').addClass('animation');
    $('.trigger').toggleClass('active');
    if ($fade.hasClass('hide')) {
      $body.removeClass('no-scroll').off('.noScroll');
    }
    else {
      $body.addClass('no-scroll')
		  .on('touchmove.noScroll', function(e){
        e.preventDefault();
      });
    }
  });

$('.g_nav a[href^="#"]').on('click', function(){
     $fade.toggleClass('hide').addClass('animation');
	  $('.trigger').toggleClass('active');
      $body.removeClass('no-scroll').off('.noScroll');
    });
}


//gototopボタン
  $(function() {
    var topBtn = $('#gototop');    
    topBtn.hide();
    $(window).scroll
      (function () {
        if ($(this).scrollTop() > 500) {
          topBtn.fadeIn();
        }
      else {
        topBtn.fadeOut();
      }
    });
  });



//スクロール
$(document).ready(function() {
    //ハッシュリンクのアンカータグをクリックするとマッチするidを持つ要素にスクロールする
    $('a[href^="#"]').click(function(event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({scrollTop:target}, 1500);
        event.preventDefault();
        return false;
    });
});



