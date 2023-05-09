const audio = document.getElementById('keyboard');
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

