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
  //console.log(observer)
  console.log(entries)
  entries.forEach(entry => {
    //console.log(entry)
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


let fireflies = document.getElementById('fireflies')
let hill1 = document.getElementById('hill1')
let hill2 = document.getElementById('hill2')
let hill3 = document.getElementById('hill3')
let land = document.getElementById('land')
let light = document.getElementById('light')

window.addEventListener('scroll',function() {
  let value = window.scrollY;
  hill3.style.top = value * 0.6 + 'px';
  hill2.style.top = value * 0.7 + 'px';
  hill1.style.top = value * 0.6 + 'px';
  land.style.top = value * 0.6 + 'px';
})


//speechSynthesis API
function textToSpeech(ref) {
  const synth = window.speechSynthesis; //speech service
  synth.speak(new SpeechSynthesisUtterance(document.getElementById("about-me-section").innerHTML));
}



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  // Get the button
  let mybutton = document.getElementById("backToTopBtn");
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

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "longtask", buffered: true });

/*
window.addEventListener('scroll', function() {
  document.querySelector(".wrap-items").style.animationName = "rotate";
});*/
let isScrolling = false; // Flag to track scrolling state
let animation;

window.addEventListener('wheel', function() {
  isScrolling = true; // Set the scrolling flag to true
  scrollDirection = event.deltaY > 0 ? 1 : -1; // Update scroll direction based on deltaY

  if (!animation) {
    const wrapItems = document.querySelector('.wrap-items');
    if (wrapItems) {
      animation = wrapItems.animate(
        [
          { transform: 'perspective(1000px) rotateY(0deg)' },
          { transform: 'perspective(1000px) rotateY(360deg)' }
        ],
        {
          duration: 5000, // Animation duration in milliseconds (10 seconds)
          iterations: Infinity, // Repeat indefinitely
          easing: 'linear' // Linear timing function
        }
      );
      animation.pause(); // Pause the animation initially
    }
  }
});

function updateAnimation() {
  if (!isScrolling && animation) {
    animation.pause(); // Pause the animation when scrolling stops
  } else if (isScrolling && animation) {
    animation.play(); // Play the animation when scrolling resumes
  }
  isScrolling = false; // Reset the scrolling flag
  requestAnimationFrame(updateAnimation); // Call the updateAnimation function on the next frame
}

updateAnimation(); // Start the animation loop


window.addEventListener('scroll', function() {
  const slideText = document.getElementById('hello-title');
  const scrollY = window.scrollY;

  if (scrollY <= 100) {
    // The scroll position is within the desired range
    slideText.style.animationName = 'slideIn';
  } else {
    // The scroll position is outside the desired range
    slideText.style.animationName = 'slideOut';
  }
});
