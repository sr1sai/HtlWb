function autoScroll() {
    const scrollContainers = document.querySelectorAll('.frame_img');
    scrollContainers.forEach((scrollable) => {
      const scrollContent = scrollable.querySelectorAll('.frame_img_item');
      let scrollPosition = 0;

      function scrollStep() {
        scrollPosition += 1; // Adjust the speed by changing the increment
        if (scrollPosition >= scrollable.scrollWidth - scrollable.clientWidth) {
          scrollPosition = 0; // Reset to the start if reached the end
        }
        scrollable.scrollLeft = scrollPosition;
        requestAnimationFrame(scrollStep);
      }

      scrollStep(); // Start the scrolling
    });
  }
  document.addEventListener("DOMContentLoaded", function() {
      const hamburger = document.querySelector('.header_hamburger');
      const navBarMobile = document.querySelector('.header_nav_bar_mobile');

      hamburger.addEventListener('click', function() {
          navBarMobile.style.display = navBarMobile.style.display === 'none' ? 'flex' : 'none';
      });
  });
  window.onload = autoScroll;