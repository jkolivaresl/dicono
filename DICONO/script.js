// Menú responsive
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

// Carrusel de testimonios
document.addEventListener("DOMContentLoaded", () => {
  const testimonios = document.querySelectorAll(".testimonio");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let index = 0;
  let intervalo;

  function mostrarTestimonio(i) {
    testimonios.forEach((t, idx) => {
      t.classList.toggle("active", idx === i);
      t.style.opacity = idx === i ? "1" : "0";
      t.style.transform = idx === i ? "translateX(0)" : "translateX(50px)";
      t.style.position = idx === i ? "relative" : "absolute";
      t.style.pointerEvents = idx === i ? "auto" : "none";
    });
  }

  function siguiente() {
    index = (index + 1) % testimonios.length;
    mostrarTestimonio(index);
  }

  function anterior() {
    index = (index - 1 + testimonios.length) % testimonios.length;
    mostrarTestimonio(index);
  }

  prevBtn.addEventListener("click", () => {
    anterior();
    reiniciarIntervalo();
  });

  nextBtn.addEventListener("click", () => {
    siguiente();
    reiniciarIntervalo();
  });

  function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(siguiente, 4000);
  }

  // Inicializar
  mostrarTestimonio(index);
  intervalo = setInterval(siguiente, 4000);
});
