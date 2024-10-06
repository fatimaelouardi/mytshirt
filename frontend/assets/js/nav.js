

// Variables

let navbar = document.querySelector('nav');
let menuBurger = document.querySelector('#menuBurger');
let closeMenu = document.querySelector('#closeMenu');

let header = document.querySelector('header');


// header scroll

window.addEventListener('scroll', () => {
    if (window.scrollY > 900) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})



// menu burger open

menuBurger.addEventListener('click', () => {
    event.preventDefault();
    navbar.classList.add('active');
})