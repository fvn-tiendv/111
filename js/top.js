// JavaScript Document
// JavaScript Document
function total_h(){
	"use strict";
	var h_header = $("#header_bt_r").height();
	var h_window = $(window).height();
	var h_GlobalNav =  h_window - h_header;
	$("#gnavi").css("header_bt_r",h_GlobalNav);	
}
$(document).ready(function(){
	"use strict";
	total_h();
});	
// gnavi_icon
$(document).ready(function(){
	"use strict";
	$('#nav-icon4,.close').click(function(){
	$('#nav-icon4').toggleClass('open');
	$("#gnavi").stop(1,1).slideToggle();	
	});
});


// JavaScript Document
$(function () {
	"use strict";
	$('.bnr05').on('click', function () {

		var href = $(this).find('a').attr('href');
		location.href = href;
	}).mouseenter(function () {
		$(this).css({
			opacity: '0.8'
		});
	}).mouseleave(function () {
		$(this).css({
			opacity: '1'
		});
	});

});

$(document).ready(function(e) {
	"use strict";
$(".news_box_light").click(function(){
 window.location=$(this).find("a").attr("href");
return false;
});
});