var d = 0;
var ampm = 0;
var minute = 0;
var second = 0;

$(document).ready(function(){
	$('#top h1').addClass('animated bounceInDown');
	$('h2').addClass('animated bounceInUp');
	$('#shirt').addClass('animated fadeIn');
	startTime();
});

function startTime(){
	d = new Date();
	ampm = d.getHours() >= 12 ? 'pm' : 'am';
	minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
	second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
	$('h2').text(((d.getHours() + 11) % 12 + 1) + ':' + minute + ':' + second + ' ' + ampm);
	setTimeout(startTime, 1000);
}

// $(window).scroll(function(){
// 	$('#shirt').css('-webkit-filter', 'blur(' + map_range($('#spacing').offset().top - $(window).scrollTop(), 0, $('#spacing').offset().top, 10, 0) + 'px)');
// 	//console.log($('#spacing').offset().top - $(window).scrollTop());
// });

// function map_range(value, low1, high1, low2, high2) {
//     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
// }