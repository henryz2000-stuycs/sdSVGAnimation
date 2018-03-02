var clear = document.getElementById("clear");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var svg = document.getElementById("svg");

var id;

//for circle
var size, grow;
//size = 1;
//grow = 1;

//for dvd
var diffX, diffY;

var clearCallback = function(e){
    svg.innerHTML = "";
};

var stopCallback = function(e){
    clearInterval(id);
};

var circleCallback = function(e){
    size = 1;
    grow = 1;
    stopCallback();
    
    var run = function(){
	clearCallback();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", parseInt(svg.getAttribute("width"))/2);
	c.setAttribute("cy", parseInt(svg.getAttribute("height"))/2);
	c.setAttribute("r", size);
	svg.appendChild(c);
	if (size == (parseInt(svg.getAttribute("width"))+parseInt(svg.getAttribute("height")))/4){
	    grow = 0;
	}
	else if (size == 0){
	    grow = 1;
	}
	if (grow == 1){
	    size++;
	}
	else{
	    size--;
	}
    };
    id = setInterval(run, 10);
};

var dvdCallback = function(e){
    var x = parseInt(svg.getAttribute("width"))/2
    var y = parseInt(svg.getAttribute("height"))/2;
    diffX = 2;
    diffY = 1;
    
    stopCallback();
    
    var run = function(){
	clearCallback();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", 10);
	svg.appendChild(c);
	if (x <= 0){
	    diffX = 2;
	}
	else if (x >= parseInt(svg.getAttribute("width"))){
	    diffX = -2;
	}
	if (y <= 0){
	    diffY = 1;
	}
	else if (y >= parseInt(svg.getAttribute("height"))){
	    diffY = -1;
	}
	x += diffX;
	y += diffY;
    };
    id = setInterval(run, 10);
};

clear.addEventListener("click", clearCallback);
stop.addEventListener("click", stopCallback);
circle.addEventListener("click", circleCallback);
dvd.addEventListener("click", dvdCallback);
