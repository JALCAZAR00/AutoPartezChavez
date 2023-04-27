const body = document.querySelector('body');
const main = document.querySelector('main').addEventListener("click", closeAll);
/*------------ Variables Header ------------*/
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



/*------------ V ------------*/
// const backgroundFound = document.querySelector('.background');
// backgroundFound.addEventListener("click", removeBackground);

/*------------ Functions Header ------------*/
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