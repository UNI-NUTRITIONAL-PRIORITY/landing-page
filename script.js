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
    background: "#1e1c2a",
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
// MUESTRA U OCULTA ITEMS AL DARLE CLICK AL MENU DE HAMBURGUESA
let burguer = document.querySelector(".bars"),
  navItems = document.querySelector(".nav-items");

burguer.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

// PINTA DE OTRO COLOR EL ITEM CON LA RUTA QUE COINCIDA CON EL PATH ACTUAL
// Obtiene la ruta actual de la página
let currentPage = window.location.pathname.split("/").pop();
// Encuentra el elemento li correspondiente a la página actual
let activeLink = Array.from(document.querySelectorAll(".nav-link")).find(
  function (link) {
    return (
      link.querySelector("a").getAttribute("href").split("/").pop() ===
      currentPage
    );
  }
);
// Agregar la clase "active" al elemento li encontrado
if (activeLink) {
  activeLink.classList.add("active");
}

// -- HACER TRANSPARENTE Y DE COLOR EL NAVBAR CUANDO LLEGA A TOP = 0
// Obtener el elemento del navbar
let navTransparent = document.getElementsByClassName("navbar-container")[0];
// Función para cambiar el color del navbar
function changeNavbarColor() {
  if (window.scrollY > 0) {
    navTransparent.classList.add("transparent__color");
  } else {
    navTransparent.classList.remove("transparent__color");
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
