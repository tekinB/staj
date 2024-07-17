const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
let index = 0;

function showSlide() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    const offset = -index * (100 / images.length);
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showSlide, 3000); // Her 3 saniyede bir slayt değişir
