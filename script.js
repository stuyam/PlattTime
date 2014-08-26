var d = 0;
var ampm = 0;
var minute = 0;
var second = 0;

$(document).ready(function(){
	$('h1').addClass('animated bounceInDown');
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