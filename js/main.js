document.addEventListener('DOMContentLoaded', function () {
  // Navbar toggler functionality
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', () => toggler.classList.toggle('collapsed'));

  // Initialize animations
  initArrowAnimation();
  initIslandAnimation();
  initTextAnimation();
  initScrollSpy();
  initBackgroundTransition();
  initScrollAnimations();
  initSocialIconsColor();
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

// Function to animate floating arrow
function initIslandAnimation() {
  anime({
    targets: '.floating-island',
    translateY: [-10, 10],
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
  const socialIcons = document.querySelectorAll('.social-icon'); // Get all social icons

  // Set initial background color and smooth transition for background change
  mainContent.style.transition = 'background-color 1s ease';

  // Define the scroll threshold where color changes (in pixels)
  const colorChangeThreshold = 100;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Calculate the scroll percentage (how far the user has scrolled)
    const scrollPercentage = Math.min(scrollPosition / colorChangeThreshold, 1);

    // Gradually change background color as the user scrolls
    const colorValue = Math.floor(scrollPercentage * (255 - 34)); // Maps to range 34 to 255
    mainContent.style.backgroundColor = `rgb(${255 - colorValue}, ${255 - colorValue}, ${255 - colorValue})`; // Smooth transition to dark

    // Change social icons' color based on scroll position
    if (scrollPosition > colorChangeThreshold) {
      // Change color to white when scrolled beyond the threshold
      socialIcons.forEach(icon => {
        icon.style.color = '#E2E2E2'; // Set social icons to white
      });
    } else {
      // Change color to #222222 when scrolled back to the top or when background is white
      socialIcons.forEach(icon => {
        icon.style.color = '#222222'; // Set social icons to #222222 when the background is white
      });
    }
  });
}

// Function to manage social icons color when scrolling past the contact section
function initSocialIconsColor() {
  const socialIcons = document.querySelectorAll('.social-icon');
  const contactSection = document.querySelector('.contact-container');  // Contact section

  window.addEventListener('scroll', function () {
    const contactSectionTop = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // If the contact section is in view, set social icons to black
    if (contactSectionTop <= windowHeight && contactSectionTop >= 0) {
      socialIcons.forEach(icon => {
        icon.style.color = '#222222';  // Set to black
      });
    } else {
      // Reset the color to black only when scrolled to the top
      if (window.scrollY === 0) {
        socialIcons.forEach(icon => {
          icon.style.color = '#222222'; // Set to black again when at the top
        });
      } else {
        socialIcons.forEach(icon => {
          icon.style.color = '#E2E2E2';  // Set to white when not at the top
        });
      }
    }
  });
}

// Function to handle the swooping text animation based on scroll
function initScrollAnimations() {
  const triggerPoint = 200; // Start animation when scrolled 200px down
  let animationTriggered = false;

  const animateText = () => {
    // Animation code for "HIGHLIGHTED" and "PROJECT"
    anime({
      targets: '.highlighted',
      translateX: ['-200%', '0%'],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200
    });

    anime({
      targets: '.project',
      translateX: ['200%', '0%'],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: 200
    });
  };

  // Scroll listener to trigger animation once
  window.addEventListener('scroll', () => {
    if (window.scrollY > triggerPoint && !animationTriggered) {
      animationTriggered = true;
      animateText();
    }

    // Phone rotation effect based on scroll
    const image = document.getElementById('render-kulturkompassen');
    const scrollY = window.scrollY;
    const rotationAngle = scrollY * 0.008; // Adjust for more/less rotation

    anime({
      targets: image,
      rotate: rotationAngle,
      duration: 300,
      easing: 'easeOutSine',
    });
  });
}


gsap.registerPlugin(ScrollTrigger);

const marqueeAnimation = () => {
  const sections = document.querySelectorAll(".marquee");
  sections.forEach((section) => {
    const marqueeText = section.querySelector(".marquee-text");
    const w = marqueeText; // Assign marqueeText element to w

    const [x, xEnd] = ['0%', (w.scrollWidth - section.offsetWidth) * -0.3];

    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 1.0,
      }
    });
  });
};

marqueeAnimation();

function toggleSocialIconsColorOnScroll() {
  const socialIcons = document.querySelectorAll('.social-icon');
  const caseStudySection = document.querySelector('.case-study');
  const jumbotronPortfolio = document.querySelector('.jumbotron-portfolio');

  window.addEventListener('scroll', () => {
    const caseStudyTop = caseStudySection.getBoundingClientRect().top;
    const jumbotronBottom = jumbotronPortfolio.getBoundingClientRect().bottom;

    // Check if the user has scrolled past the .jumbotron-portfolio
    if (jumbotronBottom < 0) {
      socialIcons.forEach(icon => {
        icon.style.color = '#E2E2E2'; // Set to white once out of jumbotron
      });
    } else {
      socialIcons.forEach(icon => {
        icon.style.color = '#222222'; // Original color within jumbotron
      });
    }

    // Ensure icons remain white when .case-study is in view
    if (caseStudyTop < window.innerHeight && caseStudyTop > 0) {
      socialIcons.forEach(icon => {
        icon.style.color = '#E2E2E2'; // Ensure white color within case-study
      });
    }
  });
}

// Call the function
toggleSocialIconsColorOnScroll();

// script.js

// Function to animate boxes
function animateBoxes() {
  anime({
      targets: '.need-box',
      opacity: [0, 1], // Fade in
      translateY: [200, 0], // Slide up
      delay: anime.stagger(400), // Stagger each box animation
      easing: 'easeOutExpo',
      duration: 1100, // Animation duration for each box
  });
}

// Trigger animation on scroll
let hasAnimated = false;

window.addEventListener('scroll', () => {
  const triggerPoint = document.querySelector('.needs-container').getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (triggerPoint < viewportHeight && !hasAnimated) {
      animateBoxes();
      hasAnimated = true; // Ensure animation only happens once
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('goalChart').getContext('2d');
  
  new Chart(ctx, {
      type: 'pie', // Pie chart type
      data: {
          labels: ['Accessibility and visibility', 'Engagement and motivation', 'Learning and pedagogy'], // Labels for each section
          datasets: [{
              data: [33.3, 33.3, 33.3], // Values for each goal (adjust percentages as needed)
              backgroundColor: [
                  'rgba(128, 0, 128, 0.7)', // Dark purple for Accessibility
                  'rgba(153, 50, 204, 0.7)', // Medium purple for Engagement
                  'rgba(186, 85, 211, 0.7)'  // Light purple for Learning
              ],
              borderColor: [
                  'rgba(128, 0, 128, 1)',
                  'rgba(153, 50, 204, 1)',
                  'rgba(186, 85, 211, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true, // Ensures the chart adjusts to screen size
          plugins: {
              legend: {
                  display: true, // Enable the legend to show labels at the top
                  position: 'top', // Position the legend at the top
                  labels: {
                      boxWidth: 20, // Customize the width of the legend box
                      font: {
                          size: 14, // Customize font size for the legend labels
                          family: 'DM Sans', // Apply DM Sans font
                          weight: 'bold'
                      },
                      color: '#E2E2E2' // Set the label color to match your theme
                  },
                  onClick: function (e) { // Disable clicking on legend
                      e.stopImmediatePropagation(); // Prevent legend interaction
                  },
                  padding: 30 // Add more space between the legend and the chart
              },
              tooltip: {
                  enabled: false, // disables tooltips
              },
          },
          interaction: {
              mode: 'nearest', // Enable hover interactions on the pie chart
              intersect: false, // Ensures interactions happen even when hovering above slices
          },
          animation: {
              animateScale: true, // Adds animation to the pie chart when it loads
              animateRotate: true
          },
      }
  });
});