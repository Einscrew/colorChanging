var COLOR = ["Pink","Black","White","Yellow","Orange","Red","Purple","Blue","Brown","Grey","Green"];
var FONT = ["\"Courier New\", Courier, monospace", "\"Comic Sans MS\", cursive, sans-serif", "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif"];

$(document).ready(function(){
	/*$("*").keydown(function(event){
		console.log(INPUT += event.which+".");
		if(INPUT == "65.65.71.71.79.79.83.83.84.84.79.79."){*/

				$("#theme").click(function(){
					$( "*" ).css({
						"color": genColor(),
						"background-color": genColor(),
						"font-family": genFont(),
						"font-size": genSize().toString() + "px",
					}).length;
				});
});

function Color(Id, Color){	Id.style.color = Color; return Color;}

function FontBackGround(Id, Color){	Id.style.backgroundColor = Color;}

function BackGround(Id, Color){ document.body.style.backgroundColor = Color; }

function Font(Id, Font){	Id.style.fontFamily = Font;}

function Size(Id, Size){	Id.style.fontSize = Size;}

function genColor(){ return COLOR[Math.floor(Math.random()*11)];}

function genFont(){ return FONT[Math.floor(Math.random()*3)];}

function genSize(){
	var s;
	do{
		s = Math.floor(Math.random()*100);
	}while(s < 4);
	
	return s + "px";
}
