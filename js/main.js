const carousel = document.querySelector('.carousel__list');
const dots = document.querySelectorAll('.carousel__list-points-point');
const items = document.querySelectorAll('.carousel__list-item');

let currentIndex = 0;
const itemWidth = items[0].offsetWidth + 16;
const totalItems = items.length;

const appendClones = () => {
    items.forEach((item) => {
        const cloneStart = item.cloneNode(true); 
        const cloneEnd = item.cloneNode(true); 
        carousel.appendChild(cloneEnd); 
        carousel.prepend(cloneStart); 
    });
};

appendClones();

currentIndex = totalItems;
carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

const updateCarousel = () => {
    const offset = currentIndex * itemWidth;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${offset}px)`;

    dots.forEach((dot, index) => {
        if (index === (currentIndex % totalItems)) {
            dot.classList.add('carousel__list-points-point__active');
        } else {
            dot.classList.remove('carousel__list-points-point__active');
        }

    });
};

carousel.addEventListener('transitionend', () => {
    if (currentIndex === totalItems * 2) {
        carousel.style.transition = 'none';
        currentIndex = totalItems;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    } else if (currentIndex === totalItems - 1) {
        carousel.style.transition = 'none';
        currentIndex = totalItems - 1 + totalItems;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = totalItems + index;
        updateCarousel();
    });
});

let startX = 0;
let isDragging = false;
let currentTranslate = 0;
let prevTranslate = -currentIndex * itemWidth;

carousel.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isDragging = true;
    carousel.style.transition = 'none';
});

carousel.addEventListener('touchmove', (event) => {
    if (!isDragging) return;

    const touchX = event.touches[0].clientX;
    const deltaX = touchX - startX;

    currentTranslate = prevTranslate + deltaX;
    carousel.style.transform = `translateX(${currentTranslate}px)`;
});

carousel.addEventListener('touchend', () => {
    isDragging = false;

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50) {
        currentIndex++;
    } else if (movedBy > 50) {
        currentIndex--;
    }

    prevTranslate = -currentIndex * itemWidth;
    updateCarousel();
});

window.addEventListener('resize', () => {
    prevTranslate = -currentIndex * itemWidth;
    updateCarousel();
});

updateCarousel();