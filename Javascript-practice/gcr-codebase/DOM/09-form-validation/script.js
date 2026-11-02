const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

const errorElements = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  password: document.getElementById("passwordError")
};

function checkName() {
  const valid = nameInput.value.trim() !== "";
  errorElements.name.textContent = valid ? "" : "Name is required.";
  return valid;
}

function checkEmail() {
  const valid = emailInput.value.trim().includes("@");
  errorElements.email.textContent = valid ? "" : "Enter an email containing @.";
  return valid;
}

function checkPassword() {
  const valid = passwordInput.value.length >= 6;
  errorElements.password.textContent = valid ? "" : "Password must be at least 6 characters.";
  return valid;
}

// As the user corrects a field, its error is checked again
nameInput.addEventListener("input", checkName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameIsValid = checkName();
  const emailIsValid = checkEmail();
  const passwordIsValid = checkPassword();

  if (nameIsValid && emailIsValid && passwordIsValid) {
    successMessage.textContent = "Form Submitted Successfully";
    signupForm.reset();

    // Clear old errors after a successful submit
    Object.values(errorElements).forEach(function (element) {
      element.textContent = "";
    });
  } else {
    successMessage.textContent = "";
  }
});