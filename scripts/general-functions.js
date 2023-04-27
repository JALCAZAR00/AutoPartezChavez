/*------ Variables de la sección productos -----*/
const arrowRight = document.getElementById('arrowRight').addEventListener("click", scrollRight);
const arrowLeft = document.getElementById('arrowLeft').addEventListener("click", scrollLeft);
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


// Función para mostrar el elemento flotante al hacer scroll//
function showFloatingElement() {
    // Calcular la posición del scroll vertical
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // Obtener el ancho de la ventana del navegador
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;

    // Establecer la posición de scroll mínima según el ancho de la ventana
    var scrollMin = windowWidth <= 768 ? 50 : 100;

    // Mostrar el elemento flotante cuando se alcanza cierta posición de scroll
    if (scrollTop > scrollMin) {
        floatingWhatsapp.style.display = 'flex';
    } else {
        floatingWhatsapp.style.display = 'none';
    }
}

// Escuchar el evento de scroll y llamar a la función para mostrar el elemento flotante
window.addEventListener('scroll', showFloatingElement);