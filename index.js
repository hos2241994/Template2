const navBar = document.querySelector('.navbar');
const login = document.querySelector('.login');
const hamburger = document.querySelector('.header-content > i');
console.log(navBar, login, hamburger);

hamburger.addEventListener('click', function() {
    navBar.classList.toggle('show');
    login.classList.toggle('show');
})