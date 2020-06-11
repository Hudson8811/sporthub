$(document).ready(function () {
	$('.detail-news__form-submit').fancybox({
		touch: false,
		scrolling: 'no',
		beforeShow: function(){
			$("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
			$("body").css({'overflow-y':'visible'});
		},
		btnTpl : {
			smallBtn : '<div data-fancybox-close class="popup-comment__close"></div>'
		}
	});
});