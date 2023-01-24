$(document).ready(function () {
	DisplayManager.getDisplays().forEach(ip => {
		arrPos = DisplayManager.getDisplays().indexOf(ip);

		$('#drag-container').append(
			`<div class="draggable">${ip}</div>`
		);
	});

	var draggables = $('.draggable').draggabilly({
		containment: true,
		grid: [20, 20]
	});

	draggables.on('dragEnd', onDragEnd);
	draggables.on('staticClick', onLightClick)
});

function onDragEnd() {
	var draggie = $(this).data('draggabilly');
	console.log('eventName happened', draggie.position.x, draggie.position.y);
}

function onLightClick() {
	var draggie = $(this).data('draggabilly');
	
	DisplayManager.getDisplays().forEach(ip => {
		arrPos = DisplayManager.getDisplays().indexOf(ip);
	
		$('#light-info').append(
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