$(document).ready(function () {
	$('.news-choise__btn').click(function () {
		$('.news-choise__btn').removeClass('news-choise__btn--active');
		$(this).addClass('news-choise__btn--active');
		$('.news-choise__items').hide().eq($(this).index()).fadeIn(300);
	});
});