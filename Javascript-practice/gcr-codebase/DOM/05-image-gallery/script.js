const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");
const closeButton = document.getElementById("closeButton");

gallery.addEventListener("click", function (event) {
  if (event.target.tagName !== "IMG") return;

  largeImage.src = event.target.src;
  largeImage.alt = event.target.alt;
  modal.hidden = false;
});

// Clicking the dark area closes the preview
modal.addEventListener("click", function () {
  modal.hidden = true;
});

// Clicking inside the popup should not close it
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

closeButton.addEventListener("click", function () {
  modal.hidden = true;
});