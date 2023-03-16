$(document).ready(() => {
	setupTrackLights();
});

function setupTrackLights()
{
	DisplayManager.getDisplays().forEach(ip => {
		arrPos = DisplayManager.getDisplays().indexOf(ip);
		let displayId = arrPos;

		$('#displays').append(
			`<div id="display${arrPos}" class="display"
				onclick="showDisplayButtons(${arrPos}, ${arrPos})"
			>
				${++displayId}
			</div>`
		);
	});
}

function showDisplayButtons(displayNumber, arrPos)
{
	$('#displays').find('.display').removeClass('active');
	$('#display'+arrPos).toggleClass('active');

	clear();
	show(displayNumber, arrPos);
}