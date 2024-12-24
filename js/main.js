const carousel = document.querySelector('.carousel__list');
const dots = document.querySelectorAll('.carousel__list-points-point');
const item = document.querySelector('.carousel__list-item').offsetWidth;

let currentIndex = 0;


function updateCarousel(){
    const offset = -(currentIndex * (item));
    carousel.computedStyleMap.transform = carousel.style.transform = `translateX(${offset}px)`;
};

function handleInfiniteScroll() {
    const firstItem = carousel.firstElementChild;
    const lastItem = carousel.lastElementChild;


    if (currentIndex === dots.length) {
        carousel.appendChild(firstItem);
        currentIndex = 0;
    } else if( currentIndex < 0){
        carousel.insertBefore(lastItem, firstItem);
        currentIndex = dots.length - 1;
    }

    updateCarousel();
};

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        dots.forEach((d) => {
            d.classList.remove('carousel__list-points-point__active')
        })
        currentIndex = i;
        dot.classList.add('carousel__list-points-point__active');
        updateCarousel();
    })
})


// =======================================
const btnDropDown = document.querySelector('.services__dropdown');
const dropDownText = document.querySelector('.services__dropdown-text');
const imgDropDown = document.querySelector('.services__dropdown-svg');
const carouselList = document.querySelector('.carousel__list');

function showBlockBrands() {
    if (dropDownText.innerText === "Показать все") {
        dropDownText.innerText = "Скрыть";
    } else dropDownText.innerText = "Показать все";

    imgDropDown.classList.toggle('services__dropdown-svg__active');
    carouselList.classList.toggle('carousel__list-more')
}

btnDropDown.addEventListener('click', showBlockBrands)