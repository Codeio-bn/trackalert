$(document).ready(() => {
	displayConnections();
	openAddConnectionModal();

	var ipInput = $('#ip').ipInput();
});

function displayConnections()
{
	DisplayManager.getDisplays().forEach(ip => {
		arrPos = DisplayManager.getDisplays().indexOf(ip);

		$('#connections').append(
			`<div>
				<h4>${ip}</h4>
			</div>
			<br>
			<br>`
		);
	});
}

function openAddConnectionModal()
{
	var span = document.getElementsByClassName("close")[0];

	$('#addConnectionModal').click(() => {
		$('#connectionModal').css('display', 'block');
	});

	$(window).click(function(e) {
		 if($(e.target).is('#connectionModal')) {
		   $('#connectionModal').css('display', 'none');
		   closeNav();
		 }
	});
}