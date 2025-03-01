document.getElementById('jesuscrist').addEventListener('click', expand);
function expand() {
	console.log("click");
	for(let i = 0; i < document.getElementsByClassName('expandable').length; i++) {
		document.getElementsByClassName('expandable')[i].classList.toggle('hidden');
	}
}