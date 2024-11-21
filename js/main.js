document.addEventListener('DOMContentLoaded', function () {
  // Navbar toggler functionality
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', () => toggler.classList.toggle('collapsed'));

  // Initialize animations
  initArrowAnimation();
  initTextAnimation();
  initScrollSpy();
  initBackgroundTransition();
});

// Function to animate floating arrow
function initArrowAnimation() {
  anime({
    targets: '.arrow-image',
    translateY: [-20, 20],
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: 1000,
    loop: true,
  });
}

// Function to animate text and lightbulb
function initTextAnimation() {
  const textWrapper = document.querySelector('.ml6 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  // Add the lightbulb icon at the end
  const lightbulb = document.createElement('span');
  lightbulb.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
  textWrapper.appendChild(lightbulb);
  lightbulb.classList.add('letter', 'lightbulb');

  anime.timeline({ loop: false })
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      opacity: [0, 1],
      duration: 750,
      delay: (el, i) => 50 * i,
    })
    .add({
      targets: '.ml6 i.fa-lightbulb',
      opacity: [0, 1],
      translateY: ["1.1em", 0],
      duration: 750,
      delay: anime.stagger(50, { start: 50 }),
    });
}

// Function to handle navbar hiding on scroll
function initScrollSpy() {
  const navbar = document.querySelector('.navbar');
  let lastScrollPosition = 0;

  function toggleNavbar() {
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', function () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Hide navbar on scroll down, show on scroll up
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
          navbar.style.top = '-100px';
        } else {
          navbar.style.top = '0';
        }

        lastScrollPosition = currentScrollPosition;
      });
    } else {
      navbar.style.top = '0';
    }
  }

  toggleNavbar();
  // Disables hide navbar on window resize
  window.addEventListener('resize', toggleNavbar);
}

// Function to handle scroll-based background color transition
function initBackgroundTransition() {
  const mainContent = document.body;

  // Set initial background color and smooth transition for background change
  mainContent.style.transition = 'background-color 0.3s ease';

  // Define the scroll threshold where color changes (in pixels)
  const colorChangeThreshold = 100;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Calculate the scroll percentage (how far the user has scrolled)
    const scrollPercentage = Math.min(scrollPosition / colorChangeThreshold, 1);

    // Gradually change background color as the user scrolls
    const colorValue = 255 - Math.floor(scrollPercentage * (255 - 34)); // Maps white to #222222
    mainContent.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  });
}

document.addEventListener('scroll', () => {
  const image = document.getElementById('render-autoclone');
  const scrollY = window.scrollY;

  // Scales down the rotation for a subtle effect
  const rotationAngle = scrollY * 0.008; // Adjust for more/less rotation

  anime({
    targets: image,
    rotate: rotationAngle, // Applies rotation based on scroll position
    duration: 300, // Smooth transition
    easing: 'easeOutSine',
  });
});

