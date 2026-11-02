const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

// Capturing phase: close the dropdown if the click is outside it
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    options.hidden = true;
  }
}, true);

dropdownButton.addEventListener("click", function () {
  options.hidden = !options.hidden;
});

options.addEventListener("click", function (event) {
  if (event.target.classList.contains("option")) {
    dropdownButton.textContent = event.target.textContent;
    options.hidden = true;
  }
});