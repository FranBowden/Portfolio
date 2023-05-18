// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');

  toggleButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show'); // Toggle the "show" class
  });

  // Close the dropdown menu when a link is clicked
  var dropdownLinks = dropdownMenu.querySelectorAll('a');
  dropdownLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      dropdownMenu.classList.remove('show');
    });
  });

  // Close the dropdown menu when clicking outside of it
  document.addEventListener('click', function(event) {
    var targetElement = event.target;
    if (!toggleButton.contains(targetElement) && !dropdownMenu.contains(targetElement)) {
      dropdownMenu.classList.remove('show');
    }
  });
});

// Intersection Observer API
//on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.square');

    if (entry.isIntersecting) {
      square.classList.add('square-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation');
  });
});

observer.observe(document.querySelector('.square-wrapper'));



//on scroll
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const nameTitle = entry.target.querySelector('.name');


    nameTitle.style.visibility = 'hidden'; // Hide the element initially
    if (entry.isIntersecting) {


      setTimeout(() => {
        nameTitle.style.visibility = 'visible'; 
        nameTitle.classList.add('name-animation');
      }, 3000); // Replace 1000 with the desired delay time in milliseconds
    } else {
      nameTitle.style.visibility = 'hidden'; 
      nameTitle.classList.remove('name-animation');
    }
  });
});

observer2.observe(document.querySelector('.name-wrapper'));



/*

const left = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const leftSection = entry.target.querySelector('.left');

    if (entry.isIntersecting) {
      leftSection.classList.add('left-animation');
    } else {
      leftSection.classList.remove('left-animation');
    }
  });
});

left.observe(document.querySelector('.left-wrapper'));
*/




// Select the element
const element = document.getElementsByClassName('right-to-left-slide');

// Function to handle scroll event
function handleScroll() {
  // Calculate the scroll amount
  const scrollAmount = window.scrollX;

  // Update the left position of the element
  element.style.left = -scrollAmount + 'px';
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
