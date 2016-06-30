"use strict";

function Person(){
	this.inherentProbabilityToPurchase = Math.random();
	this.calculateProbabilityOfPurchase = function(todaysHigh, price){
		var probability = this.inherentProbabilityToPurchase/price;
		probability = (todaysHigh>75 ? probability*(todaysHigh%75): probability*1);
		return probability;
	}
}
