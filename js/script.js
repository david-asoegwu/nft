document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu");
  const navList = document.querySelector(".main-nav-list");

  if (!menuBtn || !navList) return;

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  document
    .querySelectorAll(".main-nav-link, .main-nav-links")
    .forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    });
});
