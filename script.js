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
// Activar y desactivar el menu de hamburguesa a partir de una clase
let bar = document.querySelector(".bars"),
  navItem = document.querySelector(".nav-items");

bar.addEventListener("click", () => {
  navItem.classList.toggle("active");
});

// Obtener la ruta actual de la página
let currentPage = window.location.pathname.split("/").pop();

// Encontrar el elemento li correspondiente a la página actual
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

/* ?===== HOME: MAGIPO ======? */

/* ?===== HOME: ANA MARIA ======? */

/* ?===== ABOUT US: BRIAN ======? */

/* ?===== CONTACT: HITALO ======? */

/* ?===== LOGIN: WILLY ======? */

/* ?===== REGISTER: WILLY ======? */

/* ?===== FOOTER: MAGIPO =====? */
