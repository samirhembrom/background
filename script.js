var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function defaultcolor() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function genratecolor() {
	return Math.random().toString(16).substring(2, 8);
}

function generaterandom() {
 	var newcolor1 = "#" + genratecolor();
	var newcolor2 = "#" + genratecolor();
	body.style.background = "linear-gradient(to right, " 
	+ newcolor1 
	+ ", " 
	+ newcolor2
	+ ")";
	css.textContent = body.style.background + ";";
	color1.value = newcolor1;
	color2.value = newcolor2;
	

}

defaultcolor();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generaterandom);