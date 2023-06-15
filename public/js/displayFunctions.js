function clear()
{
	$('#displayButtons').empty();
}

function show(displayNumber, arrPos)
{
	$('#displayButtons').append(
		`<h4>Panel ${++displayNumber}</h4>
		<div class="buttons">
			<button class="btn btn-grey" onclick="DisplayManager.triggerDisplay('blank', ${arrPos})">OFF</button>
			<button class="btn btn-green" onclick="DisplayManager.triggerDisplay('green', ${arrPos})">Green</button>
			<button class="btn btn-blue" onclick="DisplayManager.triggerDisplay('blue', ${arrPos})">Blue</button>
			<button class="btn btn-yellow" onclick="DisplayManager.triggerDisplay('yellow', ${arrPos})">Yellow</button>
			<button class="btn btn-red" onclick="DisplayManager.triggerDisplay('red', ${arrPos})">Red</button>
		<div>`
	);
}

$(document).click(e => {
    if( $(e.target).closest("#displayButtons").length > 0 ||
    	$(e.target).closest("#displays").length > 0 ||
    	$(e.target).closest(".btn").length > 0 ||
    	$(e.target).closest(".closebtn").length > 0) {
        return false;
    }

	$('#displays').find('.display').removeClass('active');
	clear();
});