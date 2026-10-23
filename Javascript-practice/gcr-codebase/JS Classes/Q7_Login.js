const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    const errors = [];
    if (username.trim().length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }
    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number.");
    }

    if (!/[^A-Za-z0-9\s]/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }
    if (errors.length > 0) {
        message.className = "error";

        message.innerHTML = errors
            .map(error => `<p>${error}</p>`)
            .join("");
    } else {
        message.className = "success";
        message.textContent = "Login validation successful!";
    }
});