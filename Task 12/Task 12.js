// Task 12: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)

var usd = 10;
var sar = 25;
var total = (usd * 155) + (sar * 41); 
document.write ("Total currency in PKR: " + total);