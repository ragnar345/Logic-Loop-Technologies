// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Animate cards on scroll
  const cards = document.querySelectorAll('.card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  } else {
    // Fallback for browsers without IntersectionObserver
    cards.forEach(card => card.classList.add('slide-in'));
  }

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  if (searchInput && searchButton) {
    function performSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm) {
        window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
      }
    }
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }

  // View More button
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
      window.location.href = 'Products.html';
    });
  }

  // Buy Now buttons
  document.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = {
        name: this.getAttribute('data-name'),
        price: parseFloat(this.getAttribute('data-price')),
        image: this.getAttribute('data-image')
      };
      addToCart(item);
    });
  });

  // Slideshow for .slide-img elements
  const slides = document.querySelectorAll('.slide-img');
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 2500); // Change image every 2.5 seconds

  // Hamburger menu for mobile navigation
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
    // Optional: close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('show'));
    });
  }

  const searchToggle = document.getElementById('searchToggle');
  const searchForm = document.getElementById('searchForm');
  // Toggle search box on mobile
  if (searchToggle && searchForm) {
    searchToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      searchForm.classList.toggle('active');
      if (searchForm.classList.contains('active')) {
        document.getElementById('searchInput').focus();
      }
    });
    // Hide search form when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchForm.contains(e.target) && !searchToggle.contains(e.target)) {
        searchForm.classList.remove('active');
      }
    });
  }

  // Theme toggle functionality
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = themeToggleBtn.querySelector('i');
  if (themeToggleBtn) {
    themeToggleBtn.onclick = function() {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggleBtn.classList.add('dark');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeToggleBtn.classList.remove('dark');
      }
    };
    // Optional: Remember theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      themeToggleBtn.classList.add('dark');
    }
    themeToggleBtn.addEventListener('click', () => {
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  }
});

// Cart utility functions
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(item) {
  let cart = getCart();
  const existing = cart.find(i => i.name === item.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    item.quantity = 1;
    cart.push(item);
  }
  setCart(cart);
  alert(item.name + " added to cart!");
}
