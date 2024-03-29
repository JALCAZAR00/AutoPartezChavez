// Datos de los productos
const productos = [
    { 
      id: 1, 
      img: 'https://i.postimg.cc/fTs7t7bW/aceite.png', 
      nombre: 'Aceite MOBIL 20W-50 946ml', 
      descripcion: 'Aceite para motor a gasolina MOBIL 20W-50 mineral TRC-PRO 946ml', 
      precio: 169,
      cantidad: 0
    },
    { 
      id: 2, 
      img: 'https://i.postimg.cc/PfYz5VTF/arnes.png', 
      nombre: 'Shampoo para auto MAGREY 1L', 
      descripcion: 'Shampo con cera para auto MAGREY 1L', 
      precio: 65,
      cantidad: 0
    },
    { 
      id: 3, 
      img: 'https://i.postimg.cc/nc14vss4/marcha.png', 
      nombre: 'Trapo de microfibra', 
      descripcion: 'Trapo de microfibra color rojo medidas 50x50cm', 
      precio: 169,
      cantidad: 0
    },
];

// Obtener elementos del DOM
const contenedor = document.querySelector('.store-container');
const contenedorProductos = document.querySelector('.store');
const carritoContainer = document.querySelector('.cart-products');
const carritoProductos = document.querySelector('.products');
const subTotalPrecio = document.querySelector('.subtotal-precio');  
const totalPrecio = document.querySelector('.total-precio');

const modalCarrito = document.querySelector('.modal');

  
// Mostrar los productos en el DOM
function agregarProductos(){
    for (const producto of productos) {
      const productoElement = document.createElement('div');
      productoElement.className = 'store-item';
      productoElement.innerHTML = `
        <div class="image">
          <img src="${producto.img}"></img>
          <p>Precio: $${producto.precio}</p>
        </div>
        <div class="info">
          <h2>${producto.nombre}</h2>
          <h3>${producto.descripcion}</h3>
        </div>
        <div class="btn">
          <button class="agregar" data-id="${producto.id}">Agregar al carrito</button>
        </div>
      `;
      contenedorProductos.appendChild(productoElement);
    }
}

// Función para actualizar el carrito
function actualizarCarrito() {
    carritoProductos.innerHTML = '';
    let total = 0;
    for (const producto of productos) {
      if (producto.cantidad > 0) {
        const productoElement = document.createElement('div');
        productoElement.className = 'product';
        productoElement.innerHTML = `
        <div class="product-img">
            <img src="${producto.img}"></img>
        </div>
        <div class="product-info">
            <p>$${producto.precio * producto.cantidad}</p>
            <h3>${producto.nombre}</h3>
        </div>
        <div class="product-quantity">
            <h2>Cantidad:</h2>
            <p>${producto.cantidad}</p>
            <button data-id="${producto.id}" class="aumentar">+</button>
        </div>
        <div class="delete-car">
            <button class="eliminar" data-id="${producto.id}"></button>
        </div>
        `;
        carritoProductos.appendChild(productoElement);
        total += producto.precio * producto.cantidad;
      }
    }
    subTotalPrecio.textContent = `$${total}`;
    totalPrecio.textContent = `$${total}`;

    // Guardar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(productos));
}

// Función para cargar el carrito desde localStorage
function cargarCarritoDesdeLocalStorage() {
    const carrito = localStorage.getItem('carrito');
    if (carrito) {
        const carritoParsed = JSON.parse(carrito);
        for (const producto of productos) {
            const productoEnCarrito = carritoParsed.find(p => p.id === producto.id);
            if (productoEnCarrito) {
                producto.cantidad = productoEnCarrito.cantidad;
            }
        }
        actualizarCarrito();
        mostrarSumaProductos();
    }
}

// Función para mostrar la suma de todos los productos
function mostrarSumaProductos() {
    const cantidadProductos = productos.reduce((total, producto) => {
        return total + producto.cantidad;
      }, 0);
    const sumaElement = document.querySelector('.count');
    sumaElement.textContent = cantidadProductos;
}

function mostrarModalPorTiempo(tiempo) {
  modalCarrito.style.display = 'flex';
  setTimeout(function() {
    modalCarrito.style.display = 'none';
  }, tiempo);
}

// Función para inicializar la aplicación
function init() {
  agregarProductos();
  cargarCarritoDesdeLocalStorage(); // Cargar carrito desde localStorage
}

//Evento para cargar el carrito
document.addEventListener('DOMContentLoaded', () => {
  cargarCarritoDesdeLocalStorage();
});

// Evento click en el botón "Agregar al carrito"
contenedorProductos.addEventListener('click', (event) => {
  if (event.target.classList.contains('agregar')) {
    const productoId = parseInt(event.target.dataset.id);
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
      producto.cantidad++;
      actualizarCarrito();
      mostrarSumaProductos();
      mostrarModalPorTiempo(1500);
    }
  }
});

// Evento click en el botón "Aumentar" en el carrito
carritoProductos.addEventListener('click', (event) => {
    if (event.target.classList.contains('aumentar')) {
      const productoId = parseInt(event.target.dataset.id);
      const producto = productos.find(p => p.id === productoId);
      if (producto) {
        producto.cantidad++;
        actualizarCarrito();
        mostrarSumaProductos();
      }
    }
});

// Evento click en el botón "Eliminar"
carritoProductos.addEventListener('click', (event) => {
  if (event.target.classList.contains('eliminar')) {
    const productoId = parseInt(event.target.dataset.id);
    const producto = productos.find(p => p.id === productoId);
    if (producto && producto.cantidad > 0) {
      producto.cantidad--;
      actualizarCarrito();
      mostrarSumaProductos();
    }
  }
});

// Inicializar la aplicación
init();