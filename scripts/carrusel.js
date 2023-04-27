const carousel = document.querySelector('.carrusel');
const images = carousel.getElementsByTagName('img');
let currentImage = 0;
const intervalTime = 6000; // Intervalo de tiempo en milisegundos (3 segundos)

// Mostrar la primera imagen
images[currentImage].style.display = 'block';

// Cambiar a la siguiente imagen
function nextImage() {
    images[currentImage].style.display = 'none';
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.display = 'block';
}

// Iniciar carrusel automático
function startCarousel() {
    setInterval(nextImage, intervalTime);
}

// Detener carrusel automático
function stopCarousel() {
    clearInterval(intervalId);
}

// Iniciar carrusel automático
let intervalId = startCarousel();