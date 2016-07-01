"use strict";

function Customers(){
	this.footTrafficPerDay = 0;
	this.potentialCustomers = [];
	this.customersFinalDecision = [];
	this.generateFootTraffic = function(footTrafficPerDay, numberOfDays) {
		for(var j = 0; j < numberOfDays; j++){
			var personPlaceholderArray = [];
			//var probabilityPlaceholderArray = [];
			for(var i = 0; i < footTrafficPerDay; i++){
				var person = new Person();
				personPlaceholderArray.push(person);
			}
			this.potentialCustomers.push(personPlaceholderArray);
		}
	}
	this.isLikelyToPurchase = function(probability){
		return probability > .5;
	}

}