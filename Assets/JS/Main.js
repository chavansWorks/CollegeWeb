//scroll up button code
document.addEventListener('DOMContentLoaded', function() {
    var upButton = document.getElementById('upButton');
    upButton.style.display = 'none';
  
  
    // Show the button when user scrolls down
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        upButton.style.display = 'block';
      } else {
        upButton.style.display = 'none';
      }
    });
  
    // Scroll to the top when the button is clicked
    upButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
      });
    });
  });

//fixing navbar after scrolling
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar.navbar-light");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  
  
  