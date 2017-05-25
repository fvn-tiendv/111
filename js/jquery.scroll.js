(function($){
	$(function(){
		$('a[href^="#"]').click(function(){
			if ( $( $(this).attr('href') ).length ) {
				var p = $( $(this).attr('href') ).offset();
				$('html,body').animate({ scrollTop: p.top }, 200);
			}
			return false;
		});
	});
})(jQuery);


// anchor in page
$(window).bind('load resize',function(){
	"use strict";
	$(function(){
		$('a[href^="#"]').click(function(){
			if ( $( $(this).attr('href') ).length ) {
				var p = $( $(this).attr('href') ).offset();
				if($(window).width() > 980){
					$('html,body').animate({ scrollTop: p.top -150}, 400);
				}
			}
			return false;
		});
	});
});





