// best sellers section starts 
let bsCards = document.querySelector('.bs-cards');
let bsControlsContainer = document.querySelector('.bs-controls');
const bsControls = ['previous', 'next'];
const bsCard = document.querySelectorAll('.bs-card');

class Carousel {
    constructor(container, items, controls) {
        this.CarouselContainer = container;
        this.carouselControls = controls;
        this.CarouselArray = [...items];
    }

    updateGallery() {
        this.CarouselArray.forEach(el => {
            el.classList.remove('bscard-1', 'bscard-2', 'bscard-3');
        });

        this.CarouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`bscard-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction === 'previous') {
            this.CarouselArray.unshift(this.CarouselArray.pop());
        } else {
            this.CarouselArray.push(this.CarouselArray.shift());
        }

        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `bs-controls-${control}`;
            button.innerText = control === 'previous' ? document.querySelector('.left') : document.querySelector('.right'); // Utilisation des flèches
            bsControlsContainer.appendChild(button);
        });
    }

    useControls() {
        this.carouselControls.forEach(control => {
            const button = document.querySelector(`.bs-controls-${control}`);
            button.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(bsCards, bsCard, bsControls);
exampleCarousel.setControls();
exampleCarousel.updateGallery(); // meet à jour la galerie pour initialiser l'affichage
exampleCarousel.useControls(); // ajout les événements de clic

// best sellers section ends 