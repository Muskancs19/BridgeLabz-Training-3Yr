const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function (event) {
  const boxPosition = mouseBox.getBoundingClientRect();
  const x = Math.round(event.clientX - boxPosition.left);
  const y = Math.round(event.clientY - boxPosition.top);

  // Show browser client coordinates as asked
  coordinates.textContent = "clientX: " + event.clientX +
    " | clientY: " + event.clientY + " (inside box: " + x + ", " + y + ")";
});

mouseBox.addEventListener("dblclick", function (event) {
  const boxPosition = mouseBox.getBoundingClientRect();
  const dot = document.createElement("span");

  dot.className = "dot";
  dot.style.left = (event.clientX - boxPosition.left) + "px";
  dot.style.top = (event.clientY - boxPosition.top) + "px";
  mouseBox.appendChild(dot);
});