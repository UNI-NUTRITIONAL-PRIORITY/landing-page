/* !===== NO TOCAR (BACKGROUND) ======! */
// BACKGROUND
new BackgroundAnimation({
  count: 100,
  size: {
    min: 2,
    max: 8,
    pulse: 0,
  },
  speed: {
    x: {
      min: 0,
      max: 0.4,
    },
    y: {
      min: 0,
      max: 0.6,
    },
  },
  colors: {
    // background: "#1e1c2a",
    background: "#000000",
    particles: ["#2ec98e", "#ffb75c", "#2ec98e"],
  },
  blending: "screen",
  opacity: {
    center: 0.3,
    edge: 0,
  },
  skew: 0,
  shapes: ["s"],
});

/* ?===== HEADER: MAGIPO ======? */
// -------------------> PINTA DE OTRO COLOR EL ITEM QUE COINCIDA CON LA RUTA DEL PATH ACTUAL
// Obtiene el path actual de la página
let currentPage = window.location.pathname.split("/").pop(); // Obtiene el path actual del usuario: "Path: /localhost/index.html" -> "Obtiene: index.html"
let navItems = document.querySelectorAll(".nav-list .nav-item");
let navButtons = document.querySelectorAll(".login-register .button_1");
// Agrega la clase "active" al item que coincida con el path actual
navItems.forEach((item) => {
  let itemLink = item.querySelector(".nav-list .nav-item a");
  let href = itemLink.getAttribute("href").split("/").pop(); // Obtiene el path de cada <a>
  if (href === currentPage) {
    item.classList.add("active"); // <li>
    itemLink.classList.add("active"); // <a>
  }
});
// Agrega la clase "active" al botón correspondiente a la página actual
navButtons.forEach((item) => {
  let href = item.getAttribute("href").split("/").pop();
  if (href === currentPage) {
    item.classList.add("active");
  }
});

// -------------------> HACER TRANSPARENTE Y DE COLOR EL NAVBAR CUANDO LLEGA A TOP = 0
// Obtener el elemento del navbar
let navTransparent = document.getElementsByClassName("navbar-container")[0];
// Función para cambiar el color del navbar
function changeNavbarColor() {
  if (window.scrollY > 0) {
    navTransparent.classList.add("navbar_color");
  } else {
    navTransparent.classList.remove("navbar_color");
  }
}
// Agregar un event listener para detectar el scroll
window.addEventListener("scroll", changeNavbarColor);

/* ?===== HOME: MAGIPO ======? */

/* ?===== HOME: ANA MARIA ======? */

/* ?===== ABOUT US: BRIAN ======? */

/* ?===== CONTACT: HITALO ======? */

/* ?===== LOGIN: WILLY ======? */

/* ?===== REGISTER: WILLY ======? */

/* ?===== FOOTER: MAGIPO =====? */
