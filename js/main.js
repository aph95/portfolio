var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  document.querySelectorAll('.nav-link.ml2').forEach(item => {
    item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// Anime.js animation
anime.timeline({ loop: false })
  .add({
    targets: '.nav-link .letter', // Target each letter in each nav-link
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i  // Delay each letter individually
  });

  // new

  