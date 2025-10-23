function showMessage() {
  alert("Thank you for visiting my website!");
}

// Contact form function
function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent successfully 💌");
    document.querySelector(".contact-form").reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }

  return false;
}