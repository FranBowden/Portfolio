/*const audio = document.getElementById('keyboard');
const typewriter = document.querySelector('.typewriter');

audio.addEventListener('canplaythrough', () => {
  console.log('Audio loaded and ready to play!');
});

typewriter.addEventListener('animationstart', playAudio);
function playAudio() {
  console.log('animation started');
    audio.currentTime = 0; // set the audio playback time to 0 seconds
    audio.play();
}


*/

//menu 
// JavaScript
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
