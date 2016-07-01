"use strict";

function Vendor(){
	this.lemonade = new Lemonade();
	this.hotChocolate = new HotChocolate();
	this.weather = new Weather();
	this.footTraffic = new Customers();
	this.outputter = new Outputter();
	this.daysOfOperation = 1;
	this.lemonadesPurchased = [];
	this.profitPerDay = [];
	this.getSimulationInput = function(){
		this.daysOfOperation = document.getElementById("numberOfDays").value;
		this.lemonade.setCost(document.getElementById("cost").value);
		this.lemonade.setPrice(document.getElementById("price").value);
		this.footTraffic.footTrafficPerDay = document.getElementById("passerbysPerDay").value;
	}
	this.sellToCustomers = function(potentialCustomers, price){
		var personResult;
		for(var i = 0; i < potentialCustomers.length; i++){
			var placeholderArray = [];
			for(var j = 0; j < potentialCustomers[i].length; j++){
				personResult = potentialCustomers[i][j].calculateProbabilityOfPurchase(this.weather.forecast[i],price);
				placeholderArray.push(personResult);
			}
			this.footTraffic.customersFinalDecision.push(placeholderArray);
		}
	}
	this.findLemonadesPurchased = function(customersDecisions){
		for (var i = 0; i < customersDecisions.length; i++) {
			var soldThatDay = customersDecisions[i].filter(this.footTraffic.isLikelyToPurchase).length;
			this.lemonadesPurchased.push(soldThatDay);
		}
	}
	this.calculateProfit = function(productSold,price, cost){
		var netProfitPerItem = price - cost;
		for(var i = 0; i < productSold.length; i++){
			this.profitPerDay.push((productSold[i]*netProfitPerItem).toFixed(2));
		}
	}
	this.runSimulation = function(){
		this.getSimulationInput();
		var days = this.daysOfOperation;
		var cost = this.lemonade.getCost();
		var price = this.lemonade.getPrice();
		var customers = this.footTraffic.footTrafficPerDay;

		this.weather.getForecast(days);
		this.footTraffic.generateFootTraffic(customers,days);
		this.sellToCustomers(lemonadeStand.footTraffic.potentialCustomers, price);
		this.findLemonadesPurchased(lemonadeStand.footTraffic.customersFinalDecision);
		this.calculateProfit(lemonadeStand.lemonadesPurchased, price,cost);
		this.outputter.generateSimulationResultsTable(days, lemonadeStand.weather.forecast,customers,lemonadeStand.lemonadesPurchased,lemonadeStand.profitPerDay);
		this.outputter.logInfoByDay(lemonadeStand.footTraffic.potentialCustomers);
	}
}
