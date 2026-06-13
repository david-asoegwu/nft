const menuButton = document.querySelector(".menu");
const navList = document.querySelector(".main-nav-list");

if (menuButton && navList) {
  const toggleMenu = () => {
    // Hamburger behavior: nav-open is the only class that should reveal the mobile menu.
    navList.classList.toggle("nav-open");

    // Keep the accessibility state in sync with the visible menu state.
    const isOpen = navList.classList.contains("nav-open");
    menuButton.setAttribute("aria-expanded", isOpen);

    // Blur the page content while the mobile nav menu is open.
    document.body.classList.toggle("nav-active", isOpen);
  };

  menuButton.addEventListener("click", toggleMenu);

  menuButton.addEventListener("keydown", (event) => {
    // Let keyboard users open the hamburger menu with Enter or Space.
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });
}
