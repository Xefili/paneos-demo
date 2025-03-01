let track = document.getElementById('x-track');
let thumb = document.getElementById('x-thumb');
let progress = document.getElementById('x-progress');

let startX2;

console.log(track.offsetWidth);

function sound() {
	if(thumb.offsetLeft/track.offsetWidth < 0.3) {
		document.getElementById("vol").innerHTML = "volume_down";
	}
	if(thumb.offsetLeft/track.offsetWidth > 0.3) {
		document.getElementById("vol").innerHTML = "volume_up";
	}
	if(thumb.offsetLeft/track.offsetWidth == 0 || thumb.offsetLeft/track.offsetWidth == NaN) {
		document.getElementById("vol").innerHTML = "volume_off";
	}
} sound();

thumb.addEventListener("pointerdown", (e) => {
	startX2 = e.x - thumb.offsetLeft;
	thumb.addEventListener("pointermove", move2, true);
});

function move2(e) {
	thumb.classList.remove("hover:border-2");
	thumb.classList.add("border-4");
	let computedWidth = track.offsetWidth - thumb.offsetWidth;
	
	let endX = e.x;
	let diffX2 = endX - startX2;

	if (diffX2 < 0) {
		diffX2 = 0;
		thumb.style.left = diffX2 + "px";
	}

	if(diffX2 > computedWidth) {
		diffX2 = computedWidth
		thumb.style.left = diffX2 + "px";
	}
	
	else {
		thumb.style.left = diffX2 + "px";
	}

	progress.style.width = (diffX2 + thumb.offsetWidth) + "px";
	sound();
}

thumb.addEventListener("pointerup", () => {
	thumb.classList.add("hover:border-2");
	thumb.removeEventListener("pointermove", move2, true);
});