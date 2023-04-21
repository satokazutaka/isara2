{
  jQuery(function ($) {  
    //タイトルがクリックされたら
    $(".js-accordion-title").on('click', function () {
      //クリックしたjs-accordion-title以外の全てのopenを取る
      $(".js-accordion-title").not(this).removeClass("open");
      //クリックされたjs-accordion-title以外のcontentを閉じる
      $(".js-accordion-title").not(this).next().slideUp(300);
      //thisにopenクラスを付与
      $(this).toggleClass("open");
      //thisのcontentを展開、開いていれば閉じる
      $(this).next().slideToggle(300);
    });
  });

//   // 最初のコンテンツ以外は非表示
// $(".accordion-content:not(:first-of-type)").css("display", "none");
// // 矢印の向きを変えておく
// $(".js-accordion-title:first-of-type").addClass("open");



}