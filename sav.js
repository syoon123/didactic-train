var s = document.getElementById("svg");
var circleButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var rid;

var clear = function(e) {
    while (s.hasChildNodes()) {
	s.removeChild(s.lastChild);
	console.log("removed");
    }
};

var stopIt = function() {
    console.log(rid);
    window.cancelAnimationFrame(rid);
}

var width = s.getAttribute("width");
var height= s.getAttribute("height");

var circleAnime = function() {
    clear();
    window.cancelAnimationFrame(rid);
    console.log(rid);

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    s.appendChild(c);
    
    var x = width / 2;
    var y = height / 2;
    var radius = 0;
    var change = -2;
    
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);

    c.setAttribute("r", radius);
    c.setAttribute("fill", "yellow");

    var updateRadius = function() {
	console.log(rid);
	if (radius == 0 || radius == x) {
	    change *= -1;
	}
	radius += change;
	c.setAttribute("r", radius);
	rid = window.requestAnimationFrame(updateRadius);	
    };
    updateRadius();	
};

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

var dvdAnime = function() {
    clear();
    window.cancelAnimationFrame(rid);
    console.log(rid);

    var xcor = randInt(0, width-80);
    var ycor = randInt(0, height-50);
    var dX = 1;
    var xY = 1;

    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    
    var movedvd = function() {
	console.log(rid);
	if (xcor == 0 || xcor == width-80) {
	    dX *= -1;
	}
	if (ycor == 0 || ycor == width-80) {
	    dY *= -1;
	}
	xcor += dX;
	ycor += dY;
	

circleButton.addEventListener("click", circleAnime);
stopButton.addEventListener("click", stopIt);
