const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const error = document.getElementById("error");
const summary = document.getElementById("summary");

let currentStep = 0;

function showStep() {
  steps.forEach(function (step, index) {
    step.hidden = index !== currentStep;
  });

  backButton.hidden = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Submit" : "Next";
  error.textContent = "";
}

function checkCurrentInput() {
  const input = steps[currentStep].querySelector("input");
  const value = input.value.trim();

  if (value === "") {
    error.textContent = "This field is required.";
    return false;
  }

  if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    error.textContent = "Please enter a valid email.";
    return false;
  }

  if (input.type === "password" && value.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return false;
  }

  return true;
}

nextButton.addEventListener("click", function () {
  if (!checkCurrentInput()) return;

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    document.getElementById("registrationForm").hidden = true;
    summary.hidden = false;
    summary.innerHTML = "<h3>Form Completed!</h3><p>Name: " +
      escapeHTML(name) + "</p><p>Email: " + escapeHTML(email) +
      "</p><p>Password: Saved</p>";
  }
});

backButton.addEventListener("click", function () {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

function escapeHTML(text) {
  return text.replace(/[&<>"']/g, function (character) {
    return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"}[character];
  });
}

showStep();