const themeButtons = document.querySelectorAll("button[data-choice]");

themeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedTheme = button.getAttribute("data-choice");

    // setAttribute is used for both the class and the saved theme
    document.body.setAttribute("class", selectedTheme + "-theme");
    document.body.setAttribute("data-theme", selectedTheme);
  });
});

// Start with the light theme
document.body.setAttribute("class", "light-theme");
document.body.setAttribute("data-theme", "light");