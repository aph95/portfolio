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
  // Re-evaluate on window resize
  window.addEventListener('resize', toggleNavbar);
}

// Function to handle scroll-based background color transition
function initBackgroundTransition() {
  const mainContent = document.body;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const scrollLimit = document.body.scrollHeight - window.innerHeight;

    // Calculate the scroll percentage
    const scrollPercentage = Math.min(scrollPosition / scrollLimit, 1);

    // Map scroll percentage to color from black to white
    const colorValue = Math.floor(scrollPercentage * 255);
    mainContent.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  });
}
