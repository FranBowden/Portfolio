window.addEventListener("load", () => { //on load remove elements
  const loader = document.querySelector(".loader");
  const waves = document.querySelectorAll(".wave");

  // Remove each wave element
  waves.forEach((wave) => {
    wave.parentNode.removeChild(wave);
  });

  // Remove the loader element
  loader.parentNode.removeChild(loader);
} );