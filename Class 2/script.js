let a = 10,
  b = 20,
  c = 5;

if (a < b) {
  console.log("truthy");
} else {
  console.log("falsy");
}

let grade = "A";

switch (grade) {
  case "A":
    console.log("Grade A");
    break;
  case "B":
    console.log("Grade B");
}

let random = Math.random() * 5;
let round = Math.round(random);
let PI = Math.PI;
console.log(random);
console.log(round);
console.log;

let colors = ["green", "blue", "red"];
console.log(colors);

for (var idx = 0; idx < colors.length; idx++) {
  console.log(colors[idx]);
}

for (let color of colors) {
  console.log(color);
}

for (let prop in person) {
  console.log(prop + " + " + person[prop]);
}

function writeSum(num1, num2) {
  console.log(num1 + num2);
}

writeSum(5, 10);
