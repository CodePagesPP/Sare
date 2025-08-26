const sliderBg = document.getElementById("sliderBg");
const slideTitle = document.getElementById("slideTitle");
const slideText = document.getElementById("slideText");
const sliderContent = document.getElementById("sliderContent");
const buttons = document.querySelectorAll(".service-btn");
const dots = document.querySelectorAll(".dot");

// Contenido de cada slide
const slidesData = [
  {
    title: "Minería de Datos y Machine Learning",
    text: "Modelos de ML, recuperación metalúrgica, segmentación de clientes, patrones de comportamiento y predicción de resultados."
  },
  {
    title: "Optimización de Procesos",
    text: "Soluciones de IA para la mejora continua de la eficiencia operativa y reducción de costos."
  },
  {
    title: "Seguridad Predictiva",
    text: "Análisis de datos para prevenir incidentes y mejorar la seguridad industrial."
  },
  {
    title: "Inteligencia Comercial",
    text: "Segmentación avanzada de clientes para estrategias de marketing efectivas."
  },
  {
    title: "Análisis de Comportamiento",
    text: "Identificación de patrones de consumo y tendencias del mercado."
  },
  {
    title: "Predicción de Resultados",
    text: "Modelos predictivos que ayudan en la toma de decisiones estratégicas."
  }
];

function goToSlide(index) {
  // Mueve el fondo en horizontal
  sliderBg.style.transform = `translateX(-${index * 100}%)`;

  // Animación del texto (salida)
  slideTitle.classList.add("fade-out");
  slideText.classList.add("fade-out");

  setTimeout(() => {
    // Cambiar contenido
    slideTitle.textContent = slidesData[index].title;
    slideText.textContent = slidesData[index].text;

    // Reaparece con animación
    slideTitle.classList.remove("fade-out");
    slideText.classList.remove("fade-out");

    slideTitle.classList.add("fade-in");
    slideText.classList.add("fade-in");

    setTimeout(() => {
      slideTitle.classList.remove("fade-in");
      slideText.classList.remove("fade-in");
    }, 600);
  }, 300);

  // Marcar activo botón y punto
  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[index].classList.add("active");

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Eventos en botones
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    goToSlide(parseInt(btn.dataset.index));
  });
});

// Eventos en puntos
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    goToSlide(parseInt(dot.dataset.index));
  });
});
