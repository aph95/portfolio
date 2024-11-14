// Event listener for the navbar toggler
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', function () {
    toggler.classList.toggle('collapsed');
  });
});

anime({
  targets: '.arrow-image',  // Target the iPhone image
  translateY: [-20, 20],     // Float up and down by 20px
  direction: 'alternate',    // Reverse the direction on each cycle
  easing: 'easeInOutSine',   // Smooth easing function
  duration: 1000,            // 2 seconds per cycle
  loop: true                 // Loop the animation infinitely
});

// Text animation for "Let's bring your ideas to life."
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.fa-lightbulb', // Target the lightbulb icon
    opacity: [0, 1],           // Fade in the lightbulb
    scale: [0, 1],             // Scale up the lightbulb
    duration: 500,             // Duration of the lightbulb animation
    easing: 'easeInOutSine',   // Easing function for smooth transition
    offset: '-=300'            // Start after the text animation ends, adjust as needed
  });
