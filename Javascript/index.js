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


//scrolling 
// build scene
/*
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0.9,
  duration: "80%",
  offset: 50
})
.setClassToggle(".hidden", "show")
.addIndicators()
.addTo(controller);
*/

let tree = document.getElementById('tree')
let fireflies = document.getElementById('fireflies')
let hill1 = document.getElementById('hill1')
let hill2 = document.getElementById('hill2')
let hill3 = document.getElementById('hill3')
let land = document.getElementById('land')

window.addEventListener('scroll',function() {
  let value = window.scrollY;
  hill3.style.top = value * 0.6 + 'px';
  hill2.style.top = value * 0.7 + 'px';
  hill1.style.top = value * 0.6 + 'px';
  land.style.top = value * 0.6 + 'px';
})

/*


var controller = new ScrollMagic.Controller({vertical: false});
$(function () { // wait for document ready
  // build tween
  var tween = new TimelineMax ()
    .add([
      TweenMax.to("#parallaxContainer .tree", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
      TweenMax.to("#parallaxContainer .hill", 1, {backgroundPosition: "-500% 0", ease: Linear.easeNone}),
      TweenMax.to("#parallaxContainer .fireflies", 1, {backgroundPosition: "-225% 0", ease: Linear.easeNone})
    ]);

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 2000, offset: 450})
          .setTween(tween)
          .setPin("#parallaxContainer")
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
});
*/
//speechSynthesis API
function textToSpeech() {
  const synth = window.speechSynthesis; //speech service
  synth.speak(new SpeechSynthesisUtterance(document.getElementsByClassName(".about").value));
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