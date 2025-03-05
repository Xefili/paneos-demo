/*
Window Controls, Taskbar implementations
@version 2.0
*/

let apps = {};

let startX, startY, endX, endY, diffX, diffY;

for(let i = 0; i < document.getElementsByClassName("window").length; i++) {
	apps['app' + i] = {
		window: document.getElementById('win' + i),
		min: true,
		max: false,
		exists: true
	};

	//window movement start
	document.getElementById('bar' + i).addEventListener('mousedown', (e) => {
		startX = e.x - apps['app' + i].window.offsetLeft;
		startY = e.y - apps['app' + i].window.offsetTop;
		pressing = true;
		document.getElementById('bar' + i).addEventListener('mousemove', (e) => {
			moveWindow(i, e);
		}, true);
	});

	document.getElementById('bar' + i).addEventListener('mouseup', () => {
		pressing = false;
	});

	// window movement end

	document.getElementById('app' + i + 'Min').addEventListener('click', () => {
		minimize('app' + i);
	});

	document.getElementById('bar' + i).addEventListener('dblclick', () => {
		maximize('app' + i);
	});

	document.getElementById('app' + i + 'Max').addEventListener('click', () => {
		maximize('app' + i);
	});

	document.getElementById('app' + i + 'Close').addEventListener('click', () => {
		apps['app' + i].exists = false;
		apps['app' + i].min = true;
		apps['app' + i].window.classList.add('hidden');
	});

	document.getElementById('TBapp' + i).addEventListener('click', () => {
		if(apps['app' + i].min) {
			apps['app' + i].window.classList.remove('hidden');
			apps['app' + i].min = false;
		} else {
			minimize('app' + i);
		}
	});
};

function moveWindow(appId, e) {
	if(apps['app' + appId].max && pressing) {
		maximize('app' + appId);
	}

	if(pressing) {
		endX = e.x;
		endY = e.y;
		diffX = endX - startX;
		diffY = endY - startY;
	
		apps['app' + appId].window.style.top = diffY + 'px';
		apps['app' + appId].window.style.left = diffX + 'px';	
	}
}



function minimize(appId) {
	apps[appId].min = true;
	apps[appId].window.classList.toggle('hidden');

	let pill = document.getElementById('TB' + appId + '-pill');
	pill.classList.toggle('w-2/3');
	pill.classList.toggle('w-1/3');
	pill.classList.toggle('bg-indigo-400');
	pill.classList.toggle('bg-main-50');
	document.getElementById('TB' + appId).classList.toggle('bg-main-50/15');
};

function maximize(appId) {
	apps[appId].max = !apps[appId].max;
	apps[appId].window.classList.toggle('w-full');
	apps[appId].window.classList.toggle('maxHeight');
	apps[appId].window.style.top = '0px';
	apps[appId].window.style.left = '0px';
};