$(document).ready(function () {
	$(".faq__question").click(function () {
		$(this).parent().find(".faq__answer").toggle();
	})
});