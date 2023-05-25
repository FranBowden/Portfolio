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
function toggleTextAnimation() {const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
}

toggleTextAnimation()


let tree = document.getElementById('tree')
let fireflies = document.getElementById('fireflies')
let hill1 = document.getElementById('hill1')
let hill2 = document.getElementById('hill2')
let hill3 = document.getElementById('hill3')
let land = document.getElementById('land')

window.addEventListener('scroll',function() {
  let value = window.scrollY;

  fireflies.style.left = value * 0.25 + 'px';
  hill3.style.top = value * 0.1 + 'px';
  hill2.style.top = value * 0.2 + 'px';
  land.style.top = value * 0.6 + 'px';
})

