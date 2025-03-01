let startX;
let startY;

document.getElementById('bar').addEventListener('mousedown', (e) => {
	startX = e.x - document.getElementById('win1').offsetLeft;
	startY = e.y - document.getElementById('win1').offsetTop;
	document.getElementById('bar').addEventListener('mousemove', move, true);
})

function move(e) {
	let endX = e.x;
	let endY = e.y;
	let diffX = endX - startX;
	let diffY = endY - startY;
	console.log(diffX, diffY);
	document.getElementById('win1').style.left = diffX + 'px';
	document.getElementById('win1').style.top = diffY + 'px';
}


document.getElementById('bar').addEventListener('mouseup', (e) => {
	document.getElementById('bar').removeEventListener('mousemove', move, true);
})