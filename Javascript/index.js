// JavaScript
/*
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

*/


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
let title = document.getElementById('hello-title')

window.addEventListener('scroll',function() {
  let value = window.scrollY;

  fireflies.style.left = value * 0.25 + 'px';
  hill3.style.top = value * 0.6 + 'px';
  land.style.top = value * 0.6 + 'px';
  title.style.right = value  + "px";
})



function textToSpeech() {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";
  
  document.getElementById("talk").addEventListener("click", () => {
    speech.text = document.getElementById("about-me-section").value;
  });
}



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  // Get the button
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}