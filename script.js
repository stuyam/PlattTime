var d = 0;
var ampm = 0;
var minute = 0;
var second = 0;
var shirt = 0;
var saveHour = 100;
var currentHour = 0;

$(document).ready(function(){
	startTime();
	$('#top h1').addClass('animated bounceInDown');
	$('h2').addClass('animated bounceInUp');
	$('#shirt').addClass('animated fadeIn');
});

function startTime(){
	d = new Date();
	ampm = d.getHours() >= 12 ? 'pm' : 'am';
	minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
	second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
	$('h2').text(((d.getHours() + 11) % 12 + 1) + ':' + minute + ':' + second + ' ' + ampm);
	currentHour = d.getHours();

	if(saveHour != currentHour)
	{
		if(currentHour <= 8 || currentHour == 9)
		{
			shirt = 1;
		}
		else if(currentHour == 10 || currentHour == 11)
		{
			shirt = 2;
		}
		else if(currentHour == 12 || currentHour == 13)
		{
			shirt = 3;
		}
		else if(currentHour == 14 || currentHour == 15)
		{
			shirt = 4;
		}
		else if(currentHour == 16 || currentHour == 17)
		{
			shirt = 5;
		}
		else
		{
			shirt = 6;
		}
		$('#shirt').attr('src', 'img/' + shirt + '.png');
	}
	saveHour = currentHour
	setTimeout(startTime, 1000);
}

// $(window).scroll(function(){
// 	$('#shirt').css('-webkit-filter', 'blur(' + map_range($('#spacing').offset().top - $(window).scrollTop(), 0, $('#spacing').offset().top, 10, 0) + 'px)');
// 	//console.log($('#spacing').offset().top - $(window).scrollTop());
// });

// function map_range(value, low1, high1, low2, high2) {
//     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
// }