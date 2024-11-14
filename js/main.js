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
