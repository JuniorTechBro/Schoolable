const harmBurgermenu = document.getElementById('menu');
const menu = document.getElementById('nav-links');
const backdrop = document.getElementById('backdrop');



harmBurgermenu.addEventListener('click', () => {
  menu.classList.toggle('visible')
  backdrop.classList.toggle('hidden')
})