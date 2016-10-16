var COLOR = ["Pink","Black","White","Yellow","Orange","Red","Purple","Blue","Brown","Grey","Green"];
var FONT = ["\"Courier New\", Courier, monospace", "\"Comic Sans MS\", cursive, sans-serif", "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif"];
var currentColor;


/*$("*").keydown(function(event){
	console.log(INPUT += event.which+".");
	if(INPUT == "65.65.71.71.79.79.83.83.84.84.79.79."){*/




/*--------------------------------jQuery-------------------------------------------*/
/**/
/**/$(document).ready(function(){
				var test = $('<button/>',{
				        text: 'Change Me',
				        click: function () {
									$( "*" ).css({
					    			"color": genColor(),
										"background-color": genColor(),
										"font-family": genFont(),
										"font-size": genSize().toString() + "px"
									);
								}
				    });
						var parent = $('body').prepend(test);



/*
Alternative method,
when you have a button
with #theme ID
*/
//SIMPLER WAY
			/*	$("#theme").click(function(){
					$( "*" ).css({
						"color": genColor(),
						"background-color": genColor(),
						"font-family": genFont(),
						"font-size": genSize().toString() + "px",
					});
				});*/
});
/*--------------------------------jQuery-------------------------------------------*/





function genColor(){ //gera um cor do array de cores
	var newColor;

	//to avoid color repetitiom
	do{
			newColor = COLOR[Math.floor(Math.random()*COLOR.length)]; // .length to add or remove elements from COLOR[]
	}while(newColor == currentColor)

	currentColor = newColor; //atualiza a cor atual
	return currentColor;
}

function genFont(){ return FONT[Math.floor(Math.random()*FONT.length)];}

function genSize(){
	var s;
	do{
		s = Math.floor(Math.random()*100);
	}while(s < 4);

	return s + "px";
}
