$(document).ready(function(){

  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    
    allows: true,
    prevArrow: '<button class="prev">後退</p>', //前のスライドへ切り替える矢印（ボタン）を指定
    nextArrow: '<p class="next">前進</p>',
    
    dots: true,  //ドット状のナビを表示
	  dotsClass: 'dots-class', //ドット状のナビにclass名「dots-class」を指定

    
    
  }); 

});