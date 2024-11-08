// Toggle Mobile Menu
// Toggle Mobile Menu
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("active");
}

// Optional: Sticky Header on Scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".sticky-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Parallax Effect on Scroll (only for mobile where background-attachment doesn't work)
window.addEventListener("scroll", function () {
    const parallaxImage = document.querySelector(".parallax-image");
    let scrollPosition = window.scrollY  - 600;
    parallaxImage.style.transform = "translateX(" + scrollPosition * 0.2 + "px)";
});
