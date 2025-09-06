const sliderBg = document.getElementById("sliderBg");
const slideTitle = document.getElementById("slideTitle");
const slideText = document.getElementById("slideText");
const sliderContent = document.getElementById("sliderContent");
const buttons = document.querySelectorAll(".service-btn");
const dots = document.querySelectorAll(".dot");

// Contenido de cada slide
const slidesData = [
  {
    title: "Dashboards personalizados",
    text: "Creamos tableros visuales adaptados a las necesidades de cada cliente, facilitando el seguimiento de KPIs clave y simplificando el análisis de información en tiempo real."
  },
  {
    title: "Automatización de reportes",
    text: "Reducimos el tiempo invertido en tareas repetitivas mediante reportes automáticos y dinámicos que aseguran información siempre actualizada y confiable."
  },
  {
    title: "Integración de datos",
    text: "Conectamos múltiples fuentes como ERP, Excel o CRM en un solo sistema, logrando una visión unificada y precisa de la operación."
  },
  {
    title: "Modelos predictivos",
    text: "Aplicamos técnicas de machine learning y estadística para anticipar escenarios futuros y mejorar la planificación estratégica."
  },
  {
    title: "Monitoreo digital de proyectos",
    text: "Implementamos sistemas que permiten seguir en línea el avance de los proyectos, comparando metas planificadas con resultados reales."
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
