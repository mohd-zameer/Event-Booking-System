// Handle booking form submission
const form = document.getElementById("bookingForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const event = document.getElementById("event").value;
    const tickets = document.getElementById("tickets").value;

    // Save booking details in localStorage
    localStorage.setItem("bookingDetails", JSON.stringify({
      name, email, event, tickets
    }));

    // Redirect to confirmation page
    window.location.href = "confirmation.html";
  });
}

// Display booking details on confirmation page
const confirmationSection = document.getElementById("confirmationDetails");
if (confirmationSection) {
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
  if (bookingDetails) {
    confirmationSection.innerHTML = `
      <h2>Thank you, ${bookingDetails.name}!</h2>
      <p>Your booking for <strong>${bookingDetails.event}</strong> is confirmed.</p>
      <p>Tickets: ${bookingDetails.tickets}</p>
      <p>Confirmation sent to: ${bookingDetails.email}</p>
    `;
  }
}