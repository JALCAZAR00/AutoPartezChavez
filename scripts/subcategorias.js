const accesoriosContainer = document.querySelector('.accesorios');
const aceiteContainer = document.querySelector('.accesorios');

document.addEventListener("DOMContentLoaded", openCategorie) 

function openCategorie() {
    
    accesoriosContainer.style.display = "block";
    
    window.addEventListener("beforeunload", () => {
        // Restablecer el estilo del elemento antes de abandonar la página
        accesoriosContainer.style.display = "none";
    });
};