const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const link = document.querySelector('.navbar_links');

toogleBtn.addEventListener('click', ()=> {
  menu.classList.toggle('active');
  link.classList.toggle('active');
});
