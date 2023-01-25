const menuToogle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menuToogle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});