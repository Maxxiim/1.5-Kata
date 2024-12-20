const cards = document.querySelectorAll('.carousel__list-item')
const dots = document.querySelectorAll('.carousel__list-points-point');
const carouselList = document.querySelector('.carousel__list');

const shadowLine = document.querySelector('.services__carousel-shadow');
let currentIndex = 0;

function carouselBrand(index) {
    const maxIndex = cards.length - 1;
    const offset = -index * 80;
    carouselList.style.transform = `translateX(${offset}%)`;


    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('carousel__list-points-point__active');
        } else {
            dot.classList.remove('carousel__list-points-point__active');
        }

        if (maxIndex === index && index === maxIndex) {
            shadowLine.style.display = "none"
        } else {
            shadowLine.style.display = ""
        }
    })
};

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex === index;
        carouselBrand(index);
    })
})

carouselBrand(currentIndex)