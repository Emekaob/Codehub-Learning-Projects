// Declare Variables
const PI = 3.14159;
let userAge = 19;
var favoriteFood = "Beans";

// Reassign Values
userAge = userAge + 5;

// PI = 3.14; //Won't update because PI has already been given a constant

console.log(userAge);
console.log(PI);
console.log(favoriteFood);

// Calculate your Age
let birthYear = 2006;
let futureYear = 2050;

let possibleAge1 = futureYear - birthYear;
let possibleAge2 = possibleAge1 - 1;

console.log(
  `I will be either ${possibleAge1} or ${possibleAge2} in ${futureYear}`
);

// Temperature Converter
let celsiusTemperature = 50;
let fahrenheit = (celsiusTemperature * 9) / 5;
let fahrenheitOutput = fahrenheit + 32;

let fahrenheitTemperature = 150;
let celsius = fahrenheitTemperature - 32;
let celsiusOutput = (celsius * 5) / 9;

console.log(`${celsiusTemperature}°C is ${fahrenheitOutput}°F`);
console.log(`${fahrenheitTemperature}°F is ${celsiusOutput}°C`);

// Properties of a Circle
let radius = 3;
let circumference = 2 * PI * radius;
let area = PI * radius * radius;

console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);
