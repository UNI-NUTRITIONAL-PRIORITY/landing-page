/* !===== NO TOCAR (BACKGROUND) ======! */
// BACKGROUND
new BackgroundAnimation({
  count: 300,
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
// -------------------> MOSTRAR / OCULTAR ITEMS AL DARLE CLICK AL MENU DE HAMBURGUESA
let burguer = document.querySelector(".bars");
let navList = document.querySelector(".nav-list");
burguer.addEventListener("click", () => {
  navList.classList.toggle("active");
});

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

/* ?===== REGISTER AND LOGIN: WILLY ======? */
const forms = document.querySelector(".formlogin"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bi-eye-slash", "bi-eye");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bi-eye", "bi-eye-slash");
    });
  });
});

// ? script del formulario de registro
let x = document.querySelector(".nutritional");
let y = document.querySelector(".user");
let z = document.querySelector(".btn");
function user() {
  x.style.left = "-450px";
  y.style.left = "30px";
  z.style.left = "130px";
}
function nutritional() {
  x.style.left = "30px";
  y.style.left = "450px";
  z.style.left = "0px";
}

/* ?===== FOOTER: MAGIPO =====? */
