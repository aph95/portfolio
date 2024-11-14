document.addEventListener('DOMContentLoaded', function () {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');

  function toggleNavbar() {
    // Only apply hide/show on screens wider than 768px
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', function () {
        let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Show or hide the navbar based on the scroll direction
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
          navbar.style.top = '-100px'; // Moves it out of view
        } else {
          navbar.style.top = '0';
        }

        lastScrollPosition = currentScrollPosition;
      });
    } else {
      // For smaller screens, keep the navbar always visible
      navbar.style.top = '0';
    }
  }

  // Initial check
  toggleNavbar();

  // Recheck on window resize to handle orientation changes
  window.addEventListener('resize', toggleNavbar);
});