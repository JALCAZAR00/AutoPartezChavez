/*------------------- Scripts Header -------------------*/
const body = document.querySelector('body');
const main = document.querySelector('main').addEventListener("click", closeAll);
const toggleMenuContainer = document.querySelector('.toggle-menu');
const toggleMenu = document.querySelector('.menu_icon').addEventListener("click", openMenu);
const menuClose = document.querySelector('.close-menu').addEventListener("click", closeMenu);

const arrowCategory = document.querySelector('.open-category').addEventListener("click", openCategoryList);
const categoryList = document.getElementById('category');
const categoryArrow = document.querySelector('.category-arrow');
const categories = document.querySelector('.category-desktop').addEventListener("click", openCategories);
const categoriesContainer = document.getElementById('categoryDesktop');
const arrowCategories = document.querySelector('.category-arrow-Desk');

const searchBtn = document.querySelector('.search').addEventListener("click", openSearch);
const searchContainer = document.querySelector('.searchActivate');
const searchClose = document.querySelector('.searchClose').addEventListener("click", closeSearch);


const cartBtn = document.querySelector('.cart').addEventListener("click", openCart);
const cartContainer = document.querySelector('.cart-products');
const cartClose = document.querySelector('.close-cart').addEventListener("click", closeCart);

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

function openMenu(){
    toggleMenuContainer.classList.toggle('inactive');
    cartContainer.classList.add('inactive');
    removeScroll();
    closeSearch();
}
function closeMenu(){
    toggleMenuContainer.classList.add('inactive');
    addScroll();
    closeCategoryList();
}

function openCategoryList(){
    categoryList.classList.toggle('inactive');
    categoryArrow.classList.toggle('rotate');
    closeCart();
}
function closeCategoryList(){
    categoryList.classList.add('inactive');
    categoryArrow.classList.remove('rotate');
}

function openSearch(){
    searchContainer.style.display = "flex";
    closeMenu();
    closeCart();
}
function closeSearch(){
    searchContainer.style.display = "none";
}

function openCart(){
    cartContainer.classList.remove('inactive');
    toggleMenuContainer.classList.add('inactive');
    removeScroll();
    closeSearch();
}
function closeCart(){
    cartContainer.classList.add('inactive');
    addScroll();
}

function openCategories(){
    categoriesContainer.classList.toggle('inactive');
    arrowCategories.classList.toggle('rotate');
}
function closeCategories(){
    categoriesContainer.classList.add('inactive');
}

function removeScroll(){
    body.style.overflow = "hidden";
}
function addScroll(){
    body.style.overflow = "auto";
}

function closeAll(){
    addScroll();
    closeMenu();
    closeCategoryList();
    closeSearch();
    closeCart();
    closeCategories();
}


/*------- Carrusel de imagenes ------*/

//Obtener elementos img del DOM y asignar fuente.
const firstImg = document.getElementById('firstImg');
const secondImg = document.getElementById('secondImg');
const thirdImg = document.getElementById('thirdImg');
const fourImg = document.getElementById('fourImg');
firstImg.src = './assets/banners/banner-1.jpeg';
secondImg.src = './assets/banners/banner-2.jpeg';
thirdImg.src = './assets/banners/banner-3.jpeg';
fourImg.src = './assets/banners/banner-4.jpeg';

//Variables del carrusel
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



/*----- Scripts Footer ----- */
const footer = document.querySelector('main').addEventListener("click", closeAll)
const contactContainer = document.querySelector('.contact');
const contactBtn = document.getElementById('contact').addEventListener("click", openContact);
const contactClose = document.querySelector('.close-container').addEventListener("click", closeContact);

const aboutContainer = document.querySelector('.about');
const aboutBtn = document.getElementById('about').addEventListener("click", openAbout);
const aboutClose = document.querySelector('.close-about').addEventListener("click", closeAbout);

const politicsContainer = document.querySelector('.politics');
const politicsBtn = document.getElementById('politics').addEventListener("click", openPolitics);
const politicsClose = document.querySelector('.close-politics').addEventListener("click", closePolitics);

const warrantyContainer = document.querySelector('.warranty');
const warrantyBtn = document.getElementById('warranty').addEventListener("click", openWarranty);
const warrantyClose = document.querySelector('.close-warranty').addEventListener("click", closeWarranty);


function openContact(){
    contactContainer.style.display = "flex";
    removeScroll();
};

function closeContact(){
    contactContainer.style.display = "none";
    addScroll();
};

function openAbout(){
    aboutContainer.style.display = "flex";
    removeScroll();
};

function closeAbout(){
    aboutContainer.style.display = "none";
    addScroll();
}

function openPolitics(){
    politicsContainer.style.display = "flex";
    removeScroll();
}

function closePolitics(){
    politicsContainer.style.display = "none";
    addScroll();
}

function openWarranty(){
    warrantyContainer.style.display = "flex";
    removeScroll();
}

function closeWarranty(){
    warrantyContainer.style.display = "none";
    addScroll();
}

function removeScroll(){
    body.style.overflow = "hidden";
    body.style.overflowY = "hidden";
}

function addScroll(){
    body.style.overflow = "auto";
    body.style.overflowY = "auto";
}


function closeAll(){
    closeContact();
    closeAbout();
    closePolitics();
    closeWarranty();
    addScroll();
};

// Escuchar el evento de scroll y llamar a la función para mostrar el elemento flotante
window.addEventListener('scroll', showFloatingElement);