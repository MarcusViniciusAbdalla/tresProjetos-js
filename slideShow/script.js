let totalSildes = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--widht').style.widht = `calc(100vw * ${totalSildes})`;

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSildes - 1;
    }
    updateMargin()
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSildes - 1)) {
        currentSlide = 0;
    }
    updateMargin()
}

function updateMargin() {
    let sliderItemWidht = document.querySelector('.slider').clientWidth;
    let newMargin = (currentSlide * sliderItemWidht)
    document.querySelector('.slider--widht').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000)