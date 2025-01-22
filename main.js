
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector( '.menu-icon');
  const navLinks = document.querySelector('#nav-menu ul');

  let isMenuOpen = false;

  menuIcon.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      menuIcon.src = "./images/icon-close.svg"; 
      navLinks.style.display = "flex";
    } else {
      menuIcon.src = "./images/icon-hamburger.svg"; 
      navLinks.style.display = "none";
    }
  });
});


