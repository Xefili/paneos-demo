document.getElementById('startMenu').addEventListener('click', () => {
	flyout(0);
});
document.getElementById('overflowButton').addEventListener('click', () => {
	flyout(1);
});
document.getElementById('networkButton').addEventListener('click', () => {
	flyout(2);
});


function closeFlyouts() {
	try {
		document.getElementById('startMenuFlyout').classList.add('hidden');
		document.getElementById('overflowFlyout').classList.add('hidden');
		document.getElementById('networkFlyout').classList.add('hidden');
	} catch(e) {
		console.log("No flyouts to close");
	}
}

let startopen = false;
let overflowopen = false;
let networkopen = false;

function flyout(flyout) {
	// open the requested flyout
	if(flyout == 0) {
		closeFlyouts();
		
		if(startopen) {
			startopen = false;
			closeFlyouts();
		} else {
			document.getElementById('startMenuFlyout').classList.toggle('hidden');
			startopen = true;
		}
	}
	if(flyout == 1) {
		closeFlyouts();
		if(overflowopen) {
			overflowopen = false;
			closeFlyouts();
		} else {
			document.getElementById('overflowFlyout').classList.toggle('hidden');
			overflowopen = true;
		}
	}
	if(flyout == 2) {
		closeFlyouts();
		if(networkopen) {
			networkopen = false;
			closeFlyouts();
		} else {
			document.getElementById('networkFlyout').classList.toggle('hidden');
			networkopen = true;
		}
	}
}