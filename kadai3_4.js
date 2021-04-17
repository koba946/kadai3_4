$(document).ready(function(){

  $(".slider").slick({
    /*自動送り*/
    autoplay: false,
    /*何m秒ごとに自動送りするか*/
    autoplaySpeed: 5000,
    /*自動送りの速さ。数字が大きいと超スピードで次のスライドが表示される*/
    speed: 300,
    
    /*矢印の表示*/
    allows: true,
    
    /*矢印の見た目を変えられる
    prevArrow: '<button class="prev">後退</p>', //前のスライドへ切り替える矢印（ボタン）を指定
    nextArrow: '<p class="next">前進</p>',
    */
    dots: true,  //ドット状のナビを表示
    
    /*ループする*/
    infinite: true,
    
    /*一度に複数枚表示、複数枚送り Showが１度に表示する枚数、Scrollが１度に送る枚数。*/
    /*
    sliderToShow:2,
    slidesToScroll:2,
    */
    
    /*横幅の異なる画像を一度に複数表示させる設定*/
    /*
    centerMode: true,
    variableWidth: true
    */
    
  }); 

});