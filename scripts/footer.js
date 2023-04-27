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


/*---------------------- Functions ---------------- */
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
