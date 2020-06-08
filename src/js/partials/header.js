
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$('.sh-menu').removeClass('sh-menu--sub-open');
		$(this).toggleClass('sh-burger--active');
		$('.site-header').toggleClass('site-header--menu-open');
	});

	$('.sh-articles-controls__control').hover(function(){
		var newActiveTab=$('.sh-articles-tabs__tab').eq($(this).index());
		var prevActiveTab=$('.sh-articles-tabs__tab--active');
		prevActiveTab.removeClass('sh-articles-tabs__tab--active');
		newActiveTab.addClass('sh-articles-tabs__tab--active');


	});

	$('.sh-mobile-open-submenu-btn').click(function(){
		$('.sh-sub-menu--active').removeClass('sh-sub-menu--active');
		$(this).next().addClass('sh-sub-menu--active');
		$('.sh-menu').addClass('sh-menu--sub-open');
	});

	$('.sh-menu-close-sub-btn').click(function(){
		$('.sh-menu').removeClass('sh-menu--sub-open');
	});
/*
	$('.sh-articles__label').on('click', function () {
		$('.sh-articles').toggleClass('sh-articles--active');
	})
*/

});