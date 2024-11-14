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

  document.addEventListener('DOMContentLoaded', function () {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function () {
      // Get the current scroll position
      let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      // Show or hide the navbar based on the scroll direction
      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
        // Scroll down - hide the navbar
        navbar.style.top = '-100px'; // Moves it out of view
      } else {
        // Scroll up - show the navbar
        navbar.style.top = '0';
      }
      
      // Update the last scroll position
      lastScrollPosition = currentScrollPosition;
    });
  });