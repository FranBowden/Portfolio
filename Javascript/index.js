document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});



window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const elevator = document.querySelector('.elevator');
const elevatorL = document.querySelector('.elevatorL');
const elevatorR = document.querySelector('.elevatorR');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      elevator.classList.add('elevator-transition');
            elevatorL.classList.add('elevatorL-transition');
      elevatorR.classList.add('elevatorR-transition');

      return;
    }

    elevator.classList.remove('elevator-transition');
    elevatorL.classList.remove('elevatorL-transition');
    elevatorR.classList.remove('elevatorR-transition');

  });
});


observer.observe(document.querySelector('.elevator'));
observer.observe(document.querySelector('.elevatorL'));
observer.observe(document.querySelector('.elevatorR'));
