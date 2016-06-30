"use strict";

function HotChocolate(){
	 var price = 1.5;
	 var cost = .3;
	 this.getPrice = function(){
	 	return price;
	 }
	 this.getCost = function(){
	 	return cost;
	 }
	 this.setPrice = function(newPrice){
	 	price = newPrice;
	 }
	 this.setCost = function(newCost){
	 	cost = newCost
	 }

}
