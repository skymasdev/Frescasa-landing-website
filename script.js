const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', function () {
  menu.classList.remove('hidden');
  menu.classList.add('active');
  overlay.classList.add('active');
});

function closeMenu() {
  menu.classList.add('hidden');
  menu.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', closeMenu);
closeIcon.addEventListener('click', closeMenu);

