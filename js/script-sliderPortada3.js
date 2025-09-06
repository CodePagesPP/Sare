const sliderBg3 = document.getElementById("sliderBg3");
const slideTitle3 = document.getElementById("slideTitle3");
const slideText3 = document.getElementById("slideText3");
const sliderContent3 = document.getElementById("sliderContent3");
const buttons3 = document.querySelectorAll(".service-btn3");
const dots3 = document.querySelectorAll(".dot3");

// Contenido de cada slide
const slidesData3 = [
  {
    title: "Gestión de costos y presupuestos (CAPEX/OPEX)",
    text: "Optimizamos la administración financiera de proyectos asegurando un control preciso de presupuestos e inversiones."
  },
  {
    title: "Optimización operativa",
    text: "Analizamos procesos para aumentar eficiencia, reducir tiempos y mejorar productividad."
  },
  {
    title: "VDC, BIM y\nLean Construction",
    text: "Aplicamos metodologías digitales y de mejora continua que elevan la calidad y reducen desperdicios."
  },
  {
    title: "Modelos de simulación",
    text: "Desarrollamos modelos que permiten anticipar escenarios, evaluar alternativas y tomar decisiones basadas en evidencia."
  },
  {
    title: "Análisis de confiabilidad y desempeño",
    text: "Medimos y mejoramos el rendimiento de equipos, sistemas y procesos para garantizar disponibilidad y eficiencia."
  },
  {
    title: "Estudios de productividad y eficiencia en campo",
    text: "Realizamos evaluaciones directas en operaciones que permiten identificar cuellos de botella y proponer mejoras inmediatas."
  }
];

function goToSlide3(index) {
  // Mueve el fondo en horizontal
  sliderBg3.style.transform = `translateX(-${index * 100}%)`;

  // Animación del texto (salida)
  slideTitle3.classList.add("fade-out");
  slideText3.classList.add("fade-out");

  setTimeout(() => {
    // Cambiar contenido
    slideTitle3.textContent = slidesData3[index].title;
    slideText3.textContent = slidesData3[index].text;

    // Reaparece con animación
    slideTitle3.classList.remove("fade-out");
    slideText3.classList.remove("fade-out");

    slideTitle3.classList.add("fade-in");
    slideText3.classList.add("fade-in");

    setTimeout(() => {
      slideTitle3.classList.remove("fade-in");
      slideText3.classList.remove("fade-in");
    }, 600);
  }, 300);

  // Marcar activo botón y punto
  buttons3.forEach(btn => btn.classList.remove("active"));
  buttons3[index].classList.add("active");

  dots3.forEach(dot => dot.classList.remove("active"));
  dots3[index].classList.add("active");
}

// Eventos en botones
buttons3.forEach(btn => {
  btn.addEventListener("click", () => {
    goToSlide3(parseInt(btn.dataset.index));
  });
});

// Eventos en puntos
dots3.forEach(dot => {
  dot.addEventListener("click", () => {
    goToSlide3(parseInt(dot.dataset.index));
  });
});
