const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav-menu ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
})