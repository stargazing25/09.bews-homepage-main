// variables
const $btnMenu = document.getElementById('menu-btn');
const $iconHamburger = document.getElementById('icon-hamburger');
const $iconClose = document.getElementById('icon-close');
const $mobileMenu = document.getElementById('mobile-menu');

$btnMenu.addEventListener('click', () => {
  // show menu
  $mobileMenu.classList.toggle('opacity-0');
  $mobileMenu.classList.toggle('invisible');
  $mobileMenu.classList.toggle('pointer-events-none');

  // change icons
  $iconHamburger.classList.toggle('hidden');
  $iconClose.classList.toggle('hidden');

  // prevent scrolling on the body when menu is open
  document.body.classList.toggle('overflow-hidden');
});

$mobileMenu.addEventListener('click', () => {
  // show menu
  $mobileMenu.classList.toggle('opacity-0');
  $mobileMenu.classList.toggle('invisible');
  $mobileMenu.classList.toggle('pointer-events-none');

  // change icons
  $iconHamburger.classList.toggle('hidden');
  $iconClose.classList.toggle('hidden');

  // prevent scrolling on the body when menu is open
  document.body.classList.toggle('overflow-hidden');
});
