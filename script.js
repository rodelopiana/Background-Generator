var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = body.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	var rcolor1 = Math.floor(Math.random()*16777215).toString(16);
	var rcolor2 = Math.floor(Math.random()*16777215).toString(16);
	color1.value = "#" + rcolor1;
	color2.value = "#" + rcolor2;
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click",setRandomGradient);