// Event listener for the navbar toggler
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', function () {
    toggler.classList.toggle('collapsed');
  });
});

anime({
  targets: '.iphone-image',  // Target the iPhone image
  translateY: [-20, 20],     // Float up and down by 20px
  direction: 'alternate',    // Reverse the direction on each cycle
  easing: 'easeInOutSine',   // Smooth easing function
  duration: 1000,            // 2 seconds per cycle
  loop: true                 // Loop the animation infinitely
});

// text for let's bring your ideas to life

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  });