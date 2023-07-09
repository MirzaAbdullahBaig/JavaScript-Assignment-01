// Task 11: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “N°C is N°F”.

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
var message = celsius + "°C is " + fahrenheit + "°F";
document.write(message + "<br/>");


// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “N°F is N°C”.

var fahrenheit = 70;
var celsius = (fahrenheit - 32 ) * 5/9;
var message = fahrenheit + "°C is " + celsius + "°C ";
document.write(message);