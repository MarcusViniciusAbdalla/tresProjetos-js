let totalSildes = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--widht').style.widht = `calc(100vw * ${totalSildes})`;

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

