
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.remove('close');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    // this is used to transition items before menu when closing
    menuNav.classList.add('close');
    navItems.forEach(item => item.classList.remove('show'));
  }

  showMenu = !showMenu;
}
