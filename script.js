function renderStars(rating) {
  const full = Math.floor(rating);
  const half = (rating - full) >= 0.5;
  let html = '';

  for (let i = 0; i < full; i++) {
    html += '<i class="fa fa-star"></i>';
  }

  if (half) {
    html += '<i class="fa fa-star-half-o"></i>';  
  }

  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) {
    html += '<i class="fa fa-star-o"></i>';
  }

  return html;
}
      const productos = [
  { id: 1, nombre: "Balón Pro Match", precio: 59.99, imagen: "images/balon.jpg", tag: "Top", rating: 4.8, desc: "Balón profesional para competiciones." },
  { id: 2, nombre: "Tenis SpeedRun", precio: 129.99, imagen: "images/tenis.jpg", tag: "Nuevo", rating: 4.6, desc: "Ligero y con gran amortiguación." },
  { id: 3, nombre: "Camiseta TechDry", precio: 34.50, imagen: "images/camiseta.jpg", tag: "Oferta", rating: 4.4, desc: "Tela transpirable de secado rápido." },

  { id: 4, nombre: "Guayos EliteStrike", precio: 149.99, imagen: "images/guayos.jpg", tag: "Top", rating: 4.9, desc: "Máxima tracción en césped y sintético." },

  { id: 5, nombre: "Guantes ProKeeper", precio: 45.99, imagen: "images/guantes.jpg", tag: "Nuevo", rating: 4.7, desc: "Agarre profesional con palma antideslizante." },

  { id: 6, nombre: "Sudadera TrainingFlex", precio: 64.99, imagen: "images/sudadera.jpg", tag: "Popular", rating: 4.5, desc: "Comodidad térmica para entrenamiento." },

  { id: 7, nombre: "Short DryMotion", precio: 22.99, imagen: "images/short.jpg", tag: "Oferta", rating: 4.3, desc: "Ligero y ventilado para running." },

  { id: 8, nombre: "Mancuernas FitIron 5kg", precio: 38.99, imagen: "images/mancuernas.jpg", tag: "Top", rating: 4.8, desc: "Par de mancuernas antideslizantes." },

  { id: 9, nombre: "Bicicleta ProRide 29\"", precio: 499.99, imagen: "images/bici.jpg", tag: "Nuevo", rating: 4.9, desc: "Suspensión premium y marco ultraligero." },

  { id: 10, nombre: "Casco SportShield", precio: 79.99, imagen: "images/casco.jpg", tag: "Popular", rating: 4.6, desc: "Protección avanzada para ciclismo." },

  { id: 11, nombre: "Reloj SmartFit X2", precio: 89.99, imagen: "images/reloj.jpg", tag: "Nuevo", rating: 4.7, desc: "Monitor cardíaco + GPS + pasos + calorías." },

  { id: 12, nombre: "Tennis CourtMaster", precio: 110.00, imagen: "images/tenis2.jpg", tag: "Top", rating: 4.8, desc: "Diseñado para velocidad y soporte lateral." },

  { id: 13, nombre: "Bolso SportTravel", precio: 54.99, imagen: "images/bolso.jpg", tag: "Oferta", rating: 4.4, desc: "Bolso deportivo de gran capacidad." },

  { id: 14, nombre: "Bandas Elásticas ProPack", precio: 29.99, imagen: "images/bandas.jpg", tag: "Popular", rating: 4.6, desc: "Set de 5 bandas para entrenamiento funcional." },

  { id: 15, nombre: "Rodillera ActiveSupport", precio: 19.99, imagen: "images/rodillera.jpg", tag: "Nuevo", rating: 4.5, desc: "Compresión y soporte para articulaciones." }
];
// Renderizar productos en el contenedor
function cargarProductos() {
  const contenedor = document.getElementById("productos-container");

  contenedor.innerHTML = productos.map(prod => `
    <div class="col-md-4 col-lg-3">
      <div class="card producto-card h-100 shadow-sm">
        
        <span class="badge bg-primary position-absolute m-2">${prod.tag}</span>

        <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">

        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${prod.nombre}</h5>

          <div class="rating mb-2" style="color: #ffc107;">
            ${renderStars(prod.rating)}
          </div>

          <p class="card-text text-muted small">${prod.desc}</p>

          <div class="mt-auto d-flex justify-content-between align-items-center">
            <span class="fw-bold">$${prod.precio}</span>
            <button class="btn btn-dark btn-sm agregar-carrito" data-id="${prod.id}">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

cargarProductos();

