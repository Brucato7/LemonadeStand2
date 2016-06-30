"use strict";

function Lemonade(){
	var price = 1;
	var cost = .2;
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
		cost = newCost;
	}
}