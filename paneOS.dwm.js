/*
Window Controls, Taskbar implementations
@version 2.0
*/

let apps = {};

let startX, startY, endX, endY, diffX, diffY;

for(let i = 0; i < document.getElementsByClassName("window").length; i++) {
	apps['app' + i] = {
		window: document.getElementById('win' + i),
		min: false,
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

	// Window controls
	document.getElementById('app' + i + 'Min').addEventListener('click', () => {
		minimize(i);
	});

	document.getElementById('bar' + i).addEventListener('dblclick', () => {
		maximize('app' + i);
	});

	document.getElementById('app' + i + 'Max').addEventListener('click', () => {
		maximize('app' + i);
	});

	document.getElementById('app' + i + 'Close').addEventListener('click', () => {
		closeWindow(i);
	});

	// taskbar icon
	document.getElementById('TBapp' + i).addEventListener('click', () => {
		minimize(i);
	});

	pillSync(i);
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

function pillSync(appId) {
	let pill = document.getElementById('TBapp' + appId + '-pill');
	if(!apps['app' + appId].min && apps['app' + appId].exists) {
		pill.classList.add('w-2/3', 'block', 'bg-indigo-400');
		pill.classList.remove('w-1/3', "bg-main-50", 'hidden');
		document.getElementById('TBapp' + appId).classList.add('bg-main-50/15');
	};

	if(apps['app' + appId].min && apps['app' + appId].exists) {
		pill.classList.remove('w-2/3', 'bg-indigo-400');
		pill.classList.add('w-1/3', "bg-main-50");
		document.getElementById('TBapp' + appId).classList.remove('bg-main-50/15');
	};

	if(apps['app' + appId].min && !apps['app' + appId].exists) {
		pill.classList.add('hidden');
		pill.classList.remove('block');
		document.getElementById('TBapp' + appId).classList.remove('bg-main-50/15');
	}
}

function closeWindow(appId) {
	apps['app' + appId].min = true;
	apps['app' + appId].exists = false;
	pillSync(appId);

	apps['app' + appId].window.classList.add('hidden');
	apps['app' + appId].window.classList.remove('block');
}

function minimize(appId) {
	//true true
	if(apps['app' + appId].min && apps['app'+ appId].exists) {
		apps['app' + appId].min = false;
		apps['app' + appId].exists = true;
		pillSync(appId);

		apps['app' + appId].window.classList.remove('hidden');
		apps['app' + appId].window.classList.add('block');
	}
	//false true
	else if(!apps['app' + appId].min && apps['app' + appId].exists) {
		apps['app' + appId].min = true;
		apps['app' + appId].exists = true;
		pillSync(appId);

		apps['app' + appId].window.classList.add('hidden', 'transition-all');
		apps['app' + appId].window.classList.remove('block');
	};
	// true false
	if (apps['app' + appId].min && !apps['app' + appId].exists) {
		apps['app' + appId].min = false;
		apps['app' + appId].exists = true;
		pillSync(appId);

		apps['app' + appId].window.classList.remove('hidden');
		apps['app' + appId].window.classList.add('block');
	};
};

function maximize(appId) {
	apps[appId].max = !apps[appId].max;
	apps[appId].window.classList.toggle('w-full');
	apps[appId].window.classList.toggle('maxHeight');
	apps[appId].window.style.top = '0px';
	apps[appId].window.style.left = '0px';
};

/*
Minimized Windows: min == true && exists == true
Closed Windows: min == true && exists == false

max is NOT used here!
*/