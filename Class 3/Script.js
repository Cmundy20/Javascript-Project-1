document.getElementById("myheading").innerHTML = "Hello World";
let headingContent = document.querySelector(".heading-2").innerHTML;
console.log(headingContent);
let para = document.createElement("p");
let node = document.createTextNode("This is my text node");
para.appendChild(node);
let mydiv = document.getElementById("mydiv");
mydiv.appendChild(para);
