const carouselItems = document.querySelectorAll('.services__list-item');
const points = document.querySelectorAll('.carousel__list-points-point');

points.forEach((dot,index) => {
    let dotIndex = index;
    dot.addEventListener('click', () => {
        carouselItems.forEach((brand,index) => {
            let indexBrand = index;
            if(dotIndex === indexBrand ){
                
            }
        })
    })
})