const element = document.getElementById('name');
element.classList.remove('myName'); // Remove the slide-in class to hide the element initially
element.classList.add('hidden'); // Add the hidden class to ensure the element is hidden initially

setTimeout(() => {
  element.classList.add('myName'); // Add the slide-in class to show the element with the animation
  element.classList.remove('hidden'); // Remove the hidden class to show the element
}, 3000); // Delay the animation by 1 second (1000 milliseconds)
