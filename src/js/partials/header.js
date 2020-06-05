
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});

	$('.sh-articles-controls__control').hover(function(){
		var newActiveTab=$('.sh-articles-tabs__tab').eq($(this).index());
		var prevActiveTab=$('.sh-articles-tabs__tab--active');
		prevActiveTab.removeClass('sh-articles-tabs__tab--active');
		newActiveTab.addClass('sh-articles-tabs__tab--active');


	});

	$('.sh-articles__label').on('click', function () {
		$('.sh-articles').toggleClass('sh-articles--active');
	})


});