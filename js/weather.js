"use strict";
function startLemonadeStand(){
	console.log(document.weather);
}

function Weather(){
	this.forecast = [];
	this.getForecast = function(daysOfOperation){
		for(var i = 0; i < daysOfOperation; i++){
			this.forecast.push(document.weather.forecast[i].high);
		}
	}
}