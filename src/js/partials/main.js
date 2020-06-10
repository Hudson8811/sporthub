$(document).ready(function () {
   // $("input[name='phone']").mask(" +7 (999) 999-99-99");

   $('[data-tabs-wrap-target] .hp-news-tab-control').click(function(){
      var target=$(this).parent().attr('data-tabs-wrap-target');
      $(this).addClass('hp-news-tab-control--active').siblings().removeClass('hp-news-tab-control--active');
      $(target).stop(true,true).hide(300);
      $(target+' .hp-news-tab').eq($(this).index()).addClass('hp-news-tab--active').siblings().removeClass('hp-news-tab--active');
      $(target).stop(true,true).fadeIn(300);
   });
});

