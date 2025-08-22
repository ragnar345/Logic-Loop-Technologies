
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });
  // Optional: close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('show'));
  });
});
