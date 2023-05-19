//your JS code here. If required.
const div = document.getElementById('line');

div.style.tranform = "rotate("360")deg";

function rotateDiv(){
	div.style.tranform = `rotate(${div.style.tranform})deg`; 

	requestAnimationFrame(rotateDiv);
}

rotateDiv();