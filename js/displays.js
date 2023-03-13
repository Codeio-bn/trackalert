$(document).ready(function () {
	setupDisplayButtons();
	setupDisplaySetButtons();
	displayConnections();
});

function openNav() {
  document.getElementById("connections").style.width = "550px";
  $('#overlay').css('display', 'block');
}

function closeNav() {
  document.getElementById("connections").style.width = "0";
  $('#overlay').css('display', 'none');
}

function setupDisplayButtons() 
{
	DisplayManager.getDisplays().forEach(ip => {
		arrPos = DisplayManager.getDisplays().indexOf(ip);
		let displayId = arrPos;

		$('#displays').append(
			`<div id="display${arrPos}" class="display"
				onclick="showDisplayButton(${arrPos}, ${arrPos})"
			>
				${++displayId}
			</div>`
		);
	});
}

function showDisplayButton(displayNumber, arrPos)
{
	$('#displays').find('.display').removeClass('active');
	$('#display'+arrPos).toggleClass('active');

	clear();
	show(displayNumber, arrPos);
}

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

$(document).click(function(e){
    if( $(e.target).closest("#displayButtons").length > 0 ||
    	$(e.target).closest("#displays").length > 0 ||
    	$(e.target).closest(".btn").length > 0 ||
    	$(e.target).closest(".closebtn").length > 0) {
        return false;
    }

	$('#displays').find('.display').removeClass('active');
	clear();
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

//function setupDisplayButtons()
//{
//	DisplayManager.getDisplays().forEach(ip => {
//		arrPos = DisplayManager.getDisplays().indexOf(ip);
//
//		$('#displays').append(
//			`<div class="display">
//				<p>${ip}</p>
//				<div class="buttons">
//				   <button class="btn btn-primary" onclick="DisplayManager.triggerDisplay('blue', ${arrPos})">Blue</button>
//				   <button class="btn btn-warning" onclick="DisplayManager.triggerDisplay('yellow', ${arrPos})">Yellow</button>
//				   <button class="btn btn-danger" onclick="DisplayManager.triggerDisplay('red', ${arrPos})">Red</button>
//				   <button class="btn btn-dark" onclick="DisplayManager.triggerDisplay('blank', ${arrPos})">Blank</button>
//				<div>
//				<br>
//				<br>
//			</div>`
//		);
//	});
//}

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