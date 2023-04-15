$(document).ready(() => {
	setupTrackLights();
	showDisplayAllButtons();
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

function showDisplayAllButtons()
{
	$('#all-displays').append(
		`<h4>All panels</h4>
		<div class="buttons column">
			<button class="btn btn-grey" onclick="DisplayManager.triggerDisplay('blank', ${arrPos})">OFF</button>
			<button class="btn btn-green" onclick="DisplayManager.triggerDisplay('green', ${arrPos})">Green</button>
			<button class="btn btn-yellow" onclick="DisplayManager.triggerDisplay('yellow', ${arrPos})">Yellow</button>
			<button class="btn btn-red" onclick="DisplayManager.triggerDisplay('red', ${arrPos})">Red</button>
		<div>`
	);
}