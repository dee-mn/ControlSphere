$(document).ready(function (){
	update();
	setInterval(update, 1000);
	
});

function update() {
	var dt = new Date();
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var formattedDate = (("0" + dt.getDate()).slice(-2)) + " " + monthNames[dt.getMonth()] + " " + dt.getFullYear();
	var formattedTime = (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + ":" + (("0" + dt.getSeconds()).slice(-2));
	// $(".datetime").text(formattedDate);
	// $(".time").text(formattedTime);
	$('.datetime').html(formattedDate + '<h5 class="text-inverse text-truncate text-opacity-50">' + formattedTime + '</h5>');
}