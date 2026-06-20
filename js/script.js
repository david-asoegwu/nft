// Menu toggle function
function toggleMenu() {
  const navList = document.querySelector(".main-nav-list");
  const menuBtn = document.querySelector(".menu");

  menuBtn.addEventListener("click", function () {
    navList.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
}

// Initialize menu when DOM is loaded
document.addEventListener("DOMContentLoaded", toggleMenu);

const navLinks = document.querySelectorAll(".main-nav-link");

const menuBtn = document.getElementById("menu-btn");
const navList = document.getElementById("nav-list");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});
