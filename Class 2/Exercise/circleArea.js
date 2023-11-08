let unit = "inches";
let radius = prompt("Enter a radius in" + unit);
let circleArea = Math.PI * radius * radius;
circleArea = circleArea.toFixed();
alert("The area in" + unit + circleArea + ".");

let userRoundPreference = prompt("Would you like to round? (y/n)");

if (userRoundPreference === "y" || userRoundPreference === "Y") {
  circleArea = circleArea.toFixed();
}
