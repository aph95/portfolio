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

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Add the lightbulb as a 'letter' element
const lightbulb = document.createElement('span');
lightbulb.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
textWrapper.appendChild(lightbulb);
lightbulb.classList.add('letter', 'lightbulb');

// Text and lightbulb animation
anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],  // Make it jump up and down like the text
    translateZ: 0,
    opacity: [0, 1],  // Fade the letters in
    duration: 750,
    delay: (el, i) => 50 * i  // Staggered delay for each letter
  })
  .add({
    targets: '.ml6 i.fa-lightbulb',  // Target the lightbulb icon
    opacity: [0, 1],  // Fade in the lightbulb
    translateY: ["1.1em", 0],  // Same jump as text
    translateZ: 0,
    duration: 750,
    delay: anime.stagger(50, {start: 50})  // Lightbulb follows the staggered delay
  });

  // JavaScript to toggle the navbar visibility on scroll
document.addEventListener('DOMContentLoaded', function () {
  let prevScrollPos = window.pageYOffset;  // Get the initial scroll position
  const navbar = document.querySelector('.navbar');  // Select the navbar

  window.addEventListener('scroll', function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up - show the navbar
      navbar.classList.remove('navbar-hidden');
    } else {
      // Scrolling down - hide the navbar
      navbar.classList.add('navbar-hidden');
    }

    prevScrollPos = currentScrollPos;  // Update the previous scroll position
  });
});