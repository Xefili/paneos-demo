/*
Window moving code. Does not work on mobile devices!
This behavior is intentional, as fixing the move code would prevent the user from zooming or panning the page.
*/

let startX;
let startY;

document.getElementById('bar1').addEventListener('mousedown', (e) => {
	startX = e.x - document.getElementById('win1').offsetLeft;
	startY = e.y - document.getElementById('win1').offsetTop;
	document.getElementById('bar1').addEventListener('mousemove', move, true);
});

function move(e) {
	let endX = e.x;
	let endY = e.y;
	let diffX = endX - startX;
	let diffY = endY - startY;
	console.log(diffX, diffY);
	document.getElementById('win1').style.left = diffX + 'px';
	document.getElementById('win1').style.top = diffY + 'px';
};


document.getElementById('bar1').addEventListener('mouseup', (e) => {
	document.getElementById('bar1').removeEventListener('mousemove', move, true);
});

document.getElementById('bar2').addEventListener('mousedown', (e) => {
	startX = e.x - document.getElementById('win2').offsetLeft;
	startY = e.y - document.getElementById('win2').offsetTop;
	document.getElementById('bar2').addEventListener('mousemove', move3, true);
});

function move3(e) {
	let endX = e.x;
	let endY = e.y;
	let diffX = endX - startX;
	let diffY = endY - startY;
	console.log(diffX, diffY);
	document.getElementById('win2').style.left = diffX + 'px';
	document.getElementById('win2').style.top = diffY + 'px';
};


document.getElementById('bar2').addEventListener('mouseup', (e) => {
	document.getElementById('bar2').removeEventListener('mousemove', move3, true);
});


document.getElementById('bar3').addEventListener('mousedown', (e) => {
	startX = e.x - document.getElementById('win3').offsetLeft;
	startY = e.y - document.getElementById('win3').offsetTop;
	document.getElementById('bar3').addEventListener('mousemove', move4, true);
});

function move4(e) {
	let endX = e.x;
	let endY = e.y;
	let diffX = endX - startX;
	let diffY = endY - startY;
	console.log(diffX, diffY);
	document.getElementById('win3').style.left = diffX + 'px';
	document.getElementById('win3').style.top = diffY + 'px';
};


document.getElementById('bar3').addEventListener('mouseup', (e) => {
	document.getElementById('bar3').removeEventListener('mousemove', move4, true);
});

/*
Taskbar code; Spawn, close, minimize, and maximize windows.

Window location isn't restored, might add that later.
*/

let app1 = document.getElementById('win1');
let app1Min = true;
let app1Max = false;
let app1Exists = true;

let app2 = document.getElementById('win2');
let app2Min = true;
let app2Max = false;
let app2Exists = true;

let app3 = document.getElementById('win3');
let app3Min = true;
let app3Max = false;
let app3Exists = true;

// Handlers for app1
function app1Minimize() {
	app1Min = true;
	app1.classList.toggle('hidden');

	let pill = document.getElementById('TBapp1-pill');
	pill.classList.toggle('w-2/3');
	pill.classList.toggle('w-1/3');
	pill.classList.toggle('bg-indigo-400');
	pill.classList.toggle('bg-main-50');
	document.getElementById('TBapp1').classList.toggle('bg-main-50/15');
}

document.getElementById('app1Min').addEventListener('click', () => {
	app1Minimize();
});

document.getElementById('bar1').addEventListener('dblclick', () => {
	app1Max = !app1Max;
	app1.classList.toggle('w-full');
	app1.classList.toggle('maxHeight');
	app1.style.top = '0px';
	app1.style.left = '0px';
});
document.getElementById('app1Max').addEventListener('click', () => {
	app1Max = !app1Max;
	app1.classList.toggle('w-full');
	app1.classList.toggle('maxHeight');
	app1.style.top = '0px';
	app1.style.left = '0px';
});


document.getElementById('app1Close').addEventListener('click', () => {
	app1Exists = false;
	app1Min = true;
	app1.classList.add('hidden');
	let pill = document.getElementById('TBapp1-pill');
	pill.classList.toggle('hidden');
	pill.classList.toggle('w-2/3');
	pill.classList.toggle('w-1/3');
	pill.classList.toggle('bg-indigo-400');
	pill.classList.toggle('bg-main-50');
	document.getElementById('TBapp1').classList.toggle('bg-main-50/15');
});


document.getElementById('TBapp1').addEventListener('click', () => {
	app1.classList.toggle('hidden');

	if(app1Exists && app1Min) {
		app1Minimize();
		app1.classList.toggle('hidden');
	}
	if(app1Exists == false) {
		app1Exists = true;
		app1.classList.remove('hidden');
		let pill = document.getElementById('TBapp1-pill');
		pill.classList.toggle('hidden');
		pill.classList.toggle('w-2/3');
		pill.classList.toggle('w-1/3');
		pill.classList.toggle('bg-indigo-400');
		pill.classList.toggle('bg-main-50');
		document.getElementById('TBapp1').classList.toggle('bg-main-50/15');
	}
});


// Handlers for app2
function app2Minimize() {
	app2Min = true;
	app2.classList.toggle('hidden');

	let pill = document.getElementById('TBapp2-pill');
	pill.classList.toggle('w-2/3');
	pill.classList.toggle('w-1/3');
	pill.classList.toggle('bg-indigo-400');
	pill.classList.toggle('bg-main-50');
	document.getElementById('TBapp2').classList.toggle('bg-main-50/15');
}

document.getElementById('app2Min').addEventListener('click', () => {
	app2Minimize();
});

document.getElementById('bar2').addEventListener('dblclick', () => {
	app2Max = !app2Max;
	app2.classList.toggle('w-full');
	app2.classList.toggle('maxHeight');
	app2.style.top = '0px';
	app2.style.left = '0px';
});
document.getElementById('app2Max').addEventListener('click', () => {
	app2Max = !app2Max;
	app2.classList.toggle('w-full');
	app2.classList.toggle('maxHeight');
	app2.style.top = '0px';
	app2.style.left = '0px';
});

document.getElementById('app2Close').addEventListener('click', () => {
	app2Exists = false;
	app2Min = true;
	app2.classList.add('hidden');
	let pill = document.getElementById('TBapp2-pill');
	pill.classList.toggle('hidden');
	pill.classList.toggle('w-2/3');
	pill.classList.toggle('w-1/3');
	pill.classList.toggle('bg-indigo-400');
	pill.classList.toggle('bg-main-50');
	document.getElementById('TBapp2').classList.toggle('bg-main-50/15');
});

document.getElementById('TBapp2').addEventListener('click', () => {
	app2.classList.toggle('hidden');

	if(app2Exists && app2Min) {
		app2Minimize();
		app2.classList.toggle('hidden');
	}
	if(app2Exists == false) {
		app2Exists = true;
		app2.classList.remove('hidden');
		let pill = document.getElementById('TBapp2-pill');
		pill.classList.toggle('hidden');
		pill.classList.toggle('w-2/3');
		pill.classList.toggle('w-1/3');
		pill.classList.toggle('bg-indigo-400');
		pill.classList.toggle('bg-main-50');
		document.getElementById('TBapp2').classList.toggle('bg-main-50/15');
	}
});

// Handlers for app3
function app3Minimize() {
	app3Min = true;
	app3.classList.toggle('hidden');

	let pill = document.getElementById('TBapp3-pill');
	pill.classList.toggle('w-2/3');
	pill.classList.toggle('w-1/3');
	pill.classList.toggle('bg-indigo-400');
	pill.classList.toggle('bg-main-50');
	document.getElementById('TBapp3').classList.toggle('bg-main-50/15');
}

document.getElementById('app3Min').addEventListener('click', () => {
	app3Minimize();
});

document.getElementById('bar3').addEventListener('dblclick', () => {
	app3Max = !app3Max;
	app3.classList.toggle('w-full');
	app3.classList.toggle('maxHeight');
	app3.style.top = '0px';
	app3.style.left = '0px';
});
document.getElementById('app3Max').addEventListener('click', () => {
	app3Max = !app3Max;
	app3.classList.toggle('w-full');
	app3.classList.toggle('maxHeight');
	app3.style.top = '0px';
	app3.style.left = '0px';
});

document.getElementById('app3Close').addEventListener('click', () => {
	app3Exists = false;
	app3Min = true;
	app3.classList.add('hidden');
	let pill = document.getElementById('TBapp3-pill');
	pill.classList.toggle('hidden');
	pill.classList.toggle('w-2/3');
	pill.classList.toggle('w-1/3');
	pill.classList.toggle('bg-indigo-400');
	pill.classList.toggle('bg-main-50');
	document.getElementById('TBapp3').classList.toggle('bg-main-50/15');
});

document.getElementById('TBapp3').addEventListener('click', () => {
	app3.classList.toggle('hidden');

	if(app3Exists && app3Min) {
		app3Minimize();
		app3.classList.toggle('hidden');
	}
	if(app3Exists == false) {
		app3Exists = true;
		app3.classList.remove('hidden');
		let pill = document.getElementById('TBapp3-pill');
		pill.classList.toggle('hidden');
		pill.classList.toggle('w-2/3');
		pill.classList.toggle('w-1/3');
		pill.classList.toggle('bg-indigo-400');
		pill.classList.toggle('bg-main-50');
		document.getElementById('TBapp3').classList.toggle('bg-main-50/15');
	}
});