"use strict";

function Outputter(){
	this.generateSimulationResultsTable = function(days,forecast,footTraffic,purchases,profits) {
		var tableHTML = "<table style='text-align:center'><tr><th>Day</th>" +
							"<th>Temperature</th>" +
							"<th>Passerbys</th>" +
							"<th>Lemonades Sold</th>" +
							"<th>Profit</th>";
		for(var i = 0; i < days; i++){
			tableHTML += "<tr><td>" + (i+1) + "</td>" +
							"<td>" + forecast[i] + "</td>" +
							"<td>" + footTraffic + "</td>" +
							"<td>" + purchases[i] + "</td>" +
							"<td>$" + profits[i] + "</td></tr>";
		}
		tableHTML += "<tr><td>Total</td>" +
						"<td> - </td>" +
						"<td>" + (days * footTraffic) + "</td>" +
						"<td>" + (purchases.reduce(function(total, next) { return total + next;},0)) + "</td>" +
						"<td>$" + (profits.reduce(function(total, next) { return total + Number(next);},0)).toFixed(2) + "</td></tr></table>";
		document.getElementById("lemonadeForm").style = "display: none";
		document.getElementById("simulationResults").innerHTML = tableHTML;
	}
}