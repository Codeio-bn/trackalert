$(document).ready(function () {
	setupDisplayButtons();
	setupDisplaySetButtons();
});

function setupDisplayButtons() 
{
	DisplayManager.getDisplays().forEach(ip => {
		arrPos = DisplayManager.getDisplays().indexOf(ip);
	
		$('#displays').append(
			`<div class="display">
				<p>${ip}</p>
				<div class="buttons">
				   <button class="btn btn-primary" onclick="DisplayManager.triggerDisplay('blue', ${arrPos})">Blue</button>
				   <button class="btn btn-warning" onclick="DisplayManager.triggerDisplay('yellow', ${arrPos})">Yellow</button>
				   <button class="btn btn-danger" onclick="DisplayManager.triggerDisplay('red', ${arrPos})">Red</button>
				   <button class="btn btn-dark" onclick="DisplayManager.triggerDisplay('blank', ${arrPos})">Blank</button>
				<div>
				<br>
				<br>
			</div>`
		);
	});
}

function setupDisplaySetButtons()
{
	$('#displaySets').append(
		`<h4>Transmit to all</h4>
		<div class="buttons">
			<button class="btn btn-primary" onclick="DisplayManager.triggerDisplay('blue', 'all')">Blue</button>
			<button class="btn btn-warning" onclick="DisplayManager.triggerDisplay('yellow', 'all')">Yellow</button>
			<button class="btn btn-danger" onclick="DisplayManager.triggerDisplay('red', 'all')">Red</button>
			<button class="btn btn-dark" onclick="DisplayManager.triggerDisplay('blank', 'all')">Blank</button>
		<div>`
	);
}