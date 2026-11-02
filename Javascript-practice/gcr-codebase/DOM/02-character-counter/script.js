const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remaining = maximumCharacters - message.value.length;
  counter.textContent = remaining + " characters left";

  if (remaining === 0) {
    counter.style.color = "red";
  } else if (remaining <= 20) {
    counter.style.color = "orange";
  } else {
    counter.style.color = "green";
  }
}

// Stop typing when the text already has 100 characters
message.addEventListener("keydown", function (event) {
  const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"];
  if (message.value.length >= maximumCharacters &&
      !allowedKeys.includes(event.key) &&
      !event.ctrlKey && !event.metaKey) {
    event.preventDefault();
  }
});

message.addEventListener("input", updateCounter);

resetButton.addEventListener("click", function () {
  message.value = "";
  updateCounter();
});

updateCounter();