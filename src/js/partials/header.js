$(document).ready(function () {
	$('.sh-burger').click(function () {
		$('.sh-menu').removeClass('sh-menu--sub-open');
		$(this).toggleClass('sh-burger--active');
		$('.site-header').toggleClass('site-header--menu-open');
	});

	$('.sh-articles-controls__control').hover(function () {
		var newActiveTab = $('.sh-articles-tabs__tab').eq($(this).index());
		var prevActiveTab = $('.sh-articles-tabs__tab--active');
		prevActiveTab.removeClass('sh-articles-tabs__tab--active');
		newActiveTab.addClass('sh-articles-tabs__tab--active');


	});

	$('.sh-mobile-open-submenu-btn').click(function () {
		$('.sh-sub-menu--active').removeClass('sh-sub-menu--active');
		$(this).next().addClass('sh-sub-menu--active');
		$('.sh-menu').addClass('sh-menu--sub-open');
	});

	$('.sh-menu-close-sub-btn').click(function () {
		$('.sh-menu').removeClass('sh-menu--sub-open');
	});
	/*
		$('.sh-articles__label').on('click', function () {
			$('.sh-articles').toggleClass('sh-articles--active');
		})
	*/


	var topSlider = $('.js-tsws-slider');
	if (topSlider.length > 0) {
		topSlider.slick({
			slidesToShow: 4,
			variableWidth: true,
			infinite: true,
			speed: 300,
			arrows: true,
			prevArrow: '<div class="tsws-slick-prev tsws-slick-arrow"><svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.1793L2.21739 9.55862L7.86956 1.82069L7.21739 1L1 9.61724L7.3913 18L8 17.1793Z" fill="#0E3770" stroke="#0E3770"></path></svg></div>',
			nextArrow: '<div class="tsws-slick-next tsws-slick-arrow"><svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.82069L6.78261 9.44138L1.13044 17.1793L1.78261 18L8 9.38276L1.6087 1L1 1.82069Z" fill="#0E3770" stroke="#0E3770"></path></svg></div>',
			responsive: [
				{
				  breakpoint: 500,//== max-width:501px
				  settings: {
					variableWidth: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 2
				  }
				}
			  ]
		});

	}

	var mainMarquee = $('.js-main-marquee');
	if (mainMarquee.length > 0) {
		mainMarquee.marquee();
	}

	$('.js-foo-top-accordeon__label').click(function(){
		$(this).parent().toggleClass('foo-top-accordeon--active');
	});
});