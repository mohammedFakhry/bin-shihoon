// Start Top Slider

let myImg = ["images/spare-parts-car.png", "./images/cate1-540x300.png", "images/master-collects-rebuilt-motor-car_109285-46501.png"]
let currentSlider = 0;
let SlideActive = document.getElementById("slideImg");
SlideActive.src = myImg[currentSlider];

setInterval(() => {
    if ( currentSlider < myImg.length-1 ) {
        currentSlider += 1;
        SlideActive.src = `${myImg[currentSlider]}`;
    } else {
        currentSlider = 0;
        SlideActive.src = `${myImg[currentSlider]}`;
    }
    
}, 5000);

document.querySelector('.about-us .arrow .next').onclick = () => {
    if ( currentSlider < myImg.length-1 ) {
        currentSlider += 1;
        SlideActive.src = `${myImg[currentSlider]}`;
    }
}

document.querySelector('.about-us .arrow .prev').onclick = () => {
    if ( currentSlider > 0 ) {
        currentSlider -= 1;
        SlideActive.src = myImg[currentSlider];
    }
}

// End Top Slider