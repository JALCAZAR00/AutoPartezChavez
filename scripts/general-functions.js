/*------ Variables de la sección productos -----*/
const arrowRight = document.querySelector('.right').addEventListener("click", scrollRight);
const arrowLeft = document.querySelector('.left').addEventListener("click", scrollLeft);
const productsContainer = document.querySelector('.store');


// Variables del boton flotante //
const floatingWhatsapp = document.querySelector('.float-whatsapp');


/*------ Botones de la sección productos -----*/
function scrollRight() {
    productsContainer.scrollLeft += 300;
}

function scrollLeft() {
    productsContainer.scrollLeft -= 300;
}