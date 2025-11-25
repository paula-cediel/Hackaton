// ⭐ RENDER ESTRELLAS
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = (rating - full) >= 0.5;
  let html = '';

  for (let i = 0; i < full; i++) html += '<i class="fa fa-star"></i>';
  if (half) html += '<i class="fa fa-star-half-alt"></i>';

  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) html += '<i class="fa fa-star-o"></i>';

  return html;
}

// ⭐ BASE DE PRODUCTOS
const productos = [
  { id: 1, nombre: "Balón Pro Match", precio: 59.99, imagen: "images/balon.jpg", tag: "Top", rating: 4.8, desc: "Balón profesional para competiciones." },
  { id: 2, nombre: "Tenis SpeedRun", precio: 129.99, imagen: "images/tenis.jpg", tag: "Nuevo", rating: 4.6, desc: "Ligero y con gran amortiguación." },
  { id: 3, nombre: "Camiseta TechDry", precio: 34.50, imagen: "images/camiseta.jpg", tag: "Oferta", rating: 4.4, desc: "Tela transpirable y de secado rápido." }
];

// ⭐ CARGAR PRODUCTOS EN HTML
function cargarProductos() {
  const contenedor = document.getElementById("productos-container");

  contenedor.innerHTML = productos.map(prod => `
    <div class="col-md-4 col-lg-3">
      <div class="card-product h-100">
        
        <span class="badge bg-primary position-absolute m-2">${prod.tag}</span>

        <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">

        <div class="card-body">
          <h5 class="product-title">${prod.nombre}</h5>

          <div class="rating">${renderStars(prod.rating)}</div>

          <p class="product-desc">${prod.desc}</p>

          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="fw-bold">$${prod.precio}</span>
            <button class="btn-add agregar-carrito" data-id="${prod.id}">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}
cargarProductos();

// ⭐ LOCAL STORAGE
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ⭐ ACTUALIZAR UI DEL CARRITO
function actualizarCarrito() {
  const lista = document.getElementById("carrito-list");
  const total = document.getElementById("carrito-total");
  const contador = document.getElementById("contador-carrito");
  const empty = document.getElementById("carrito-empty");

  lista.innerHTML = "";

  if (carrito.length === 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }

  let suma = 0;

  carrito.forEach(item => {
    lista.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.nombre} — $${item.precio}
        <button class="btn btn-sm btn-danger borrar" data-id="${item.id}">X</button>
      </li>
    `;
    suma += item.precio;
  });

  total.textContent = suma.toFixed(2);
  contador.textContent = carrito.length;

  localStorage.setItem("carrito", JSON.stringify(carrito));
}
actualizarCarrito();

// ⭐ TOAST NOTIFICACIÓN
function mostrarToast(texto) {
  const toast = document.getElementById("toast");
  toast.textContent = texto;
  toast.style.opacity = 1;
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = 0;
    toast.style.transform = "translateY(20px)";
  }, 2000);
}

// ⭐ EVENTO: AGREGAR AL CARRITO
document.addEventListener("click", e => {
  if (e.target.classList.contains("agregar-carrito")) {
    const id = Number(e.target.dataset.id);
    const prod = productos.find(p => p.id === id);

    carrito.push(prod);
    actualizarCarrito();
    mostrarToast("Producto agregado al carrito");
  }

  if (e.target.classList.contains("borrar")) {
    const id = Number(e.target.dataset.id);
    carrito = carrito.filter(p => p.id !== id);
    actualizarCarrito();
    mostrarToast("Eliminado del carrito");
  }
});


document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
  mostrarToast("Carrito vacío");
});