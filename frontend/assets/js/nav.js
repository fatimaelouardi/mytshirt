

// Variables

let navbar = document.querySelector('nav');
let menuBurger = document.querySelector('#menuBurger');
let closeMenu = document.querySelector('#closeMenu');


// menu burger open

menuBurger.addEventListener('click', () => {
    event.preventDefault();
    navbar.classList.add('active');
})