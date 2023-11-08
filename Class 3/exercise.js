function changeColor() {
  let colors = ["red", "pink", "white", "blue", "sky blue", "aqua"];
  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
}

function changeText(id) {
  id.innerHTML = "This element text has changed";
}

function displayDate() {
  document.getElementById("mydiv").innerHTML = Date();
}

document.getElementById("mytime").addEventListener("click", displayTime);
function displayTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let am = true;
  console.log(hours);
  if (hours > 12) {
    am = false;
    hours -= 12;
  }
  let currentTime = hours + ":" + currentDate.getMinutes();
  console.log(currentTime);

  if (am) {
    currentTime += " AM";
  } else {
    currentTime += " PM";
  }
  document.getElementById("mydiv").innerHTML = currentTime;
}
