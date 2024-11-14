// Wrap each letter in a span with the class "letter" for the animate-text only
document.querySelectorAll('.animate-text').forEach((element) => {
  element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// Animate the text without interfering with the color
anime.timeline({ loop: false })
  .add({
    targets: '.animate-text .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  })
  .add({
    targets: '.animate-text',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Event listener for the navbar toggler
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', function () {
    toggler.classList.toggle('collapsed');
  });
});

