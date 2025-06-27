const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

// Toggle menu saat burger diklik
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle-burger");
});

// Tutup menu saat link diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle-burger");
    }
  });
});
