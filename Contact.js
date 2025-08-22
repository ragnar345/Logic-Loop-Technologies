document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function (event) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      event.preventDefault(); // prevent form submission
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
      return;
    }

    // Optional: Show confirmation (only for local testing)
    alert('Thank you for contacting us! We’ll get back to you soon.');
  });

  function validateEmail(email) {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
