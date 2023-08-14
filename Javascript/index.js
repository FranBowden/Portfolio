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

//Scroll to Top Button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function reveal() {
  var reveals = document.querySelectorAll(".hidden");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show");
    }
  }
}

window.addEventListener("scroll", reveal);
