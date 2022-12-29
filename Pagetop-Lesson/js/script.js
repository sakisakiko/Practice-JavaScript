$(function(){
  $('#back a').on('click',function(event){
    $('body,html').animate({
      scrollTop: 0
    },800);
    event.preventDefault();
  });
});

// 800ミリ秒間（0.8秒間）かけてページの最上部まで移動する