const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seatsValue = document.getElementById("seats").value.trim();
    const seats = Number(seatsValue);
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("seatsError").textContent = "";
    if (!nameRegex.test(name)) {
        document.getElementById("nameError").textContent =
            "Name must contain alphabets only.";
        isValid = false;
    }
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        isValid = false;
    }
    if (
        seatsValue === "" ||
        !Number.isInteger(seats) ||
        seats < 1 ||
        seats > 10
    ) {
        document.getElementById("seatsError").textContent =
            "Seats must be a whole number between 1 and 10.";
        isValid = false;
    }

    const ticketDetails = document.getElementById("ticketDetails");

    if (isValid) {
        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        ticketDetails.innerHTML = `
            <h3>Booking Successful!</h3>
            <p>Name: ${booking.name}</p>
            <p>Email: ${booking.email}</p>
            <p>Seats Booked: ${booking.seats}</p>
        `;
    } else {
        ticketDetails.textContent = "";
    }
});