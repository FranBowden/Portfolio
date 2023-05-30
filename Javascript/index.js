//Slide Headers in on Scroll
window.addEventListener('scroll', function() {
  const slideText = document.getElementById('hello-title');
  const slideText2 = document.getElementById('name-title');
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

// Intersection Observer API
function toggleTextAnimation() {const observer = new IntersectionObserver(entries => {
  console.log(entries)
  entries.forEach(entry => { //allows scroll animations to reanimate on scroll by adding and removing .show
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

toggleTextAnimation() //calling toggle animation function



//Creates a Parallax effect with GSAP
gsap.to("#fireflies", {
  scrollTrigger: {
      scrub: true
  },
  x: 200,
  scale: 1.2
})

gsap.to("#lights", {
  scrollTrigger: {
      scrub: true
  },
  x: 200,
  scale: 1.2
})


//speechSynthesis API - Text to Speech Function
function textToSpeech(ref) {
  const synth = window.speechSynthesis; //speech service
  synth.speak(new SpeechSynthesisUtterance(document.getElementById(ref).innerHTML)); //gets ref and gets the innerhtm text 
}


//Scroll to Top Button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}