document.addEventListener('DOMContentLoaded', function () {
  // Navbar toggler functionality
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', () => toggler.classList.toggle('collapsed'));

  // Initialize animations
  initArrowAnimation();
  initTextAnimation();
  initScrollSpy();
  initBackgroundTransition();
  initScrollAnimations();
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

  // Function to hide or show navbar based on scroll position
  function handleNavbarOnScroll() {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Hide navbar on scroll down, show on scroll up
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
      navbar.style.top = '-100px'; // Hide navbar
    } else {
      navbar.style.top = '0'; // Show navbar
    }

    lastScrollPosition = currentScrollPosition;
  }

  // Function to toggle navbar behavior based on screen width
  function toggleNavbar() {
    if (window.innerWidth > 768) {
      // Only apply scroll behavior on screens wider than 768px
      window.addEventListener('scroll', handleNavbarOnScroll);
    } else {
      // For smaller screens, keep navbar fixed
      navbar.style.top = '0'; // Make sure navbar stays visible
      window.removeEventListener('scroll', handleNavbarOnScroll); // Remove scroll event listener on smaller screens
    }
  }

  // Initialize navbar behavior
  toggleNavbar();

  // Re-check navbar behavior on window resize
  window.addEventListener('resize', toggleNavbar);
}

// Function to handle scroll-based background color transition and social icon color change
function initBackgroundTransition() {
  const mainContent = document.body;
  const socialIcons = document.querySelectorAll('.social-icon'); // Replace with your social icons' class or ID

  // Set initial background color and smooth transition for background change
  mainContent.style.transition = 'background-color 0.3s ease';

  // Define the scroll threshold where color changes (in pixels)
  const colorChangeThreshold = 100;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Calculate the scroll percentage (how far the user has scrolled)
    const scrollPercentage = Math.min(scrollPosition / colorChangeThreshold, 1);

    // Gradually change background color as the user scrolls
    const colorValue = Math.floor(scrollPercentage * (255 - 34)); // Maps to range 34 to 255
    mainContent.style.backgroundColor = `rgb(${255 - colorValue}, ${255 - colorValue}, ${255 - colorValue})`; // Smooth transition to dark

    // Change social icons to white when the background color is dark
    if (colorValue >= 221) {  // Dark enough (near rgb(34, 34, 34))
      socialIcons.forEach(icon => {
        icon.style.color = 'white'; // Change social icons to white
      });
    } else {
      socialIcons.forEach(icon => {
        icon.style.color = ''; // Reset social icons to default color when background is light
      });
    }
  });
}

// Function to handle the swooping text animation based on scroll
function initScrollAnimations() {
  const triggerPoint = 200; // Start animation when scrolled 200px down
  let animationTriggered = false;

  const animateText = () => {
    // Animate "HIGHLIGHTED" swooping in from the left
    anime({
      targets: '.highlighted',
      translateX: ['-200%', '0%'], // From far left to center
      opacity: [0, 1], // Fade in
      easing: 'easeOutExpo',
      duration: 1200
    });

    // Animate "PROJECT" swooping in from the right
    anime({
      targets: '.project',
      translateX: ['200%', '0%'], // From far right to center
      opacity: [0, 1], // Fade in
      easing: 'easeOutExpo',
      duration: 1200,
      delay: 200 // Slight delay for staggered effect
    });
  };

  // Scroll listener to trigger animation once
  window.addEventListener('scroll', () => {
    if (window.scrollY > triggerPoint && !animationTriggered) {
      animationTriggered = true; // Ensure it only triggers once
      animateText();
    }

    // Phone rotation effect based on scroll
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
}
