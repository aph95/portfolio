var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');

  // Event spy
  toggler.addEventListener('click', function () {
    // Toggle the collapsed class immediately on click
    toggler.classList.toggle('collapsed');
  });
});
