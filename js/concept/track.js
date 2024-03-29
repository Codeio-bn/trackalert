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
		`<div class="info ml-5 mt-8">
			<h4>All panels</h4>
			<div class="buttons column">
				<button class="btn btn-green" onclick="DisplayManager.triggerDisplay('green', 'all')">Green</button>
				<button class="btn btn-blue" onclick="DisplayManager.triggerDisplay('blue', 'all')">Blue</button>
				<button class="btn btn-yellow" onclick="DisplayManager.triggerDisplay('yellow', 'all')">Yellow</button>
				<button class="btn btn-red" onclick="DisplayManager.triggerDisplay('red', 'all')">Red</button>
				<button class="btn btn-all pos-rel mt-3" onclick="DisplayManager.triggerDisplay('all', 'all')">Last lap</button>
				<button class="btn btn-grey pos-rel mt-3" onclick="DisplayManager.triggerDisplay('blank', 'all')">OFF</button>
			<div>
		<div>`
	);
}