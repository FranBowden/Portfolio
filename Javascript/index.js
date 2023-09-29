//Slide Headers in on Scroll

window.addEventListener('scroll', function() {
  const slideText = document.getElementById('hello-title');
  const slideText2 = document.getElementById('name-title');
  const headingText = querySelectorAll('.heading')
  const scrollY = window.scrollY;

  if (scrollY <= 100) {
    // The scroll position is within the desired range
    slideText.style.animationName = 'slideIn';
    slideText2.style.animationName = 'slideIn';
  } else {
    // The scroll position is outside the desired range
    slideText.style.animationName = 'slideOut';
    slideText2.style.animationName = 'slideOut';
  }
});

//Scroll to Top Button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Define the options for the Intersection Observer
const options = {
  threshold: 0.2, // Trigger when 20% of the element is visible
};

// Create the Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // Remove the 'show' class when scrolling up
    }
  });
}, options);

// Get all elements with the .hidden class
const reveals = document.querySelectorAll(".hidden");

// Start observing each hidden element
reveals.forEach(reveal => {
  observer.observe(reveal);
});



