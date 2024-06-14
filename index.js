document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbarToggle');
    const navMenu = document.getElementById('navMenu');
  
    toggleButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });
  