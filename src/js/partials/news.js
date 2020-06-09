$(document).ready(function () {
	$('.news-choise__btn').click(function () {
		$('.news-choise__btn').removeClass('news-choise__btn--active');
		$(this).addClass('news-choise__btn--active');
		$('.news-choise__items').removeClass('news-choise__items--active').eq($(this).index()).addClass('news-choise__items--active')
	});
});