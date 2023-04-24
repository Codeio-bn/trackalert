function openNav() {
	document.getElementById("connections-sidenav").style.width = "550px";
	$('#overlay').css('display', 'block');
}

function closeNav() {
 	document.getElementById("connections-sidenav").style.width = "0";
	$('#overlay').css('display', 'none');
}