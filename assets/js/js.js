// JavaScript for form validation
document.querySelector('form').addEventListener('submit', function(e) {
  var name = document.querySelector('input[type="text"]').value;
  var email = document.querySelector('input[type="email"]').value;
  var formValid = true;

  // Check for empty fields
  if (!name) {
      formValid = false;
      document.querySelector('input[type="text"]').style.borderColor = 'red';
      alert('Nama harus diisi!');
  } else {
      document.querySelector('input[type="text"]').style.borderColor = '';
  }

  if (!email) {
      formValid = false;
      document.querySelector('input[type="email"]').style.borderColor = 'red';
      alert('Email harus diisi!');
  } else {
      document.querySelector('input[type="email"]').style.borderColor = '';
  }

  if (!formValid) {
      e.preventDefault();
  }
});

// JavaScript for Google Maps iframe responsiveness
window.addEventListener('resize', function() {
  var mapIframe = document.querySelector('#map iframe');
  var width = window.innerWidth;

  if (width < 768) {
      mapIframe.style.height = '300px'; // For smaller screens
      mapIframe.style.width = '100%';   // Ensure map takes full width on smaller screens
  } else {
      mapIframe.style.height = '400px'; // For larger screens
      mapIframe.style.width = '100%';   // Ensure map takes full width on larger screens
  }
});

// AOS (Animate On Scroll) initialization with additional options for better animation control
AOS.init({
  duration: 1200,  // Increase animation duration for a smoother effect
  once: true,      // Animations happen only once when the element is in view
  easing: 'ease-in-out', // Smoother easing for animations
  offset: 150      // Trigger animations slightly earlier
});

// Smooth scrolling for anchor links with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Adding scroll-to-top button functionality
window.addEventListener('scroll', function() {
  var scrollTopBtn = document.querySelector('#scroll-top-btn');
  if (window.scrollY > 300) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.pointerEvents = 'auto';
  } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.pointerEvents = 'none';
  }
});

document.querySelector('#scroll-top-btn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


