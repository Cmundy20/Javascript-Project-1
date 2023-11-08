function addAttendee() {
  let name = birthdayform.first.value + " " + birthdayform.last.value;

  let ul = document.getElementById("attendees");

  let li = document.createElement("Li");
  li.appendChild(document.createTextNode(name));
  ul.appendChild(li);
}
