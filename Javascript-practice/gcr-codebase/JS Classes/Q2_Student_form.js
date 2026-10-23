const studentForm = document.getElementById("studentForm");

function validateField(inputId, errorId, regex, errorMessage) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    if (!regex.test(input.value.trim())) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        error.textContent = errorMessage;
        return false;
    }

    input.classList.add("valid");
    input.classList.remove("invalid");
    error.textContent = "";

    return true;
}

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const isNameValid = validateField(
        "name",
        "nameError",
        /^[A-Za-z]+$/,
        "Name must contain alphabets only."
    );

    const isEmailValid = validateField(
        "email",
        "emailError",
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Enter a valid email address."
    );

    const isPhoneValid = validateField(
        "phone",
        "phoneError",
        /^\d{10}$/,
        "Phone number must contain exactly 10 digits."
    );

    const isPasswordValid = validateField(
        "password",
        "passwordError",
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/,
        "Password needs an uppercase letter, a number, and a special character."
    );

    const message = document.getElementById("message");

    if (
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid
    ) {
        message.textContent = "Registration successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Please correct the errors.";
        message.style.color = "red";
    }
});