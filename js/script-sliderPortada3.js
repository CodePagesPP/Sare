const sliderBg3 = document.getElementById("sliderBg");
const slideTitle3 = document.getElementById("slideTitle");
const slideText3 = document.getElementById("slideText");
const sliderContent3 = document.getElementById("sliderContent");
const buttons3 = document.querySelectorAll(".service-btn");
const dots3 = document.querySelectorAll(".dot");

// Contenido de cada slide
const slidesData3 = [
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
    title: "Visualización de datos",
    text: "Diseñamos gráficos claros e intuitivos que convierten la información compleja en insights accionables para la toma de decisiones."
  },
  {
    title: "Monitoreo digital de proyectos",
    text: "Implementamos sistemas que permiten seguir en línea el avance de los proyectos, comparando metas planificadas con resultados reales."
  }
];

function goToSlide(index) {
  // Mueve el fondo en horizontal
  sliderBg3.style.transform = `translateX(-${index * 100}%)`;

  // Animación del texto (salida)
  slideTitle3.classList.add("fade-out");
  slideText3.classList.add("fade-out");

  setTimeout(() => {
    // Cambiar contenido
    slideTitle3.textContent = slidesData[index].title;
    slideText3.textContent = slidesData[index].text;

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
  buttons[index].classList.add("active");

  dots3.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Eventos en botones
buttons3.forEach(btn => {
  btn.addEventListener("click", () => {
    goToSlide(parseInt(btn.dataset.index));
  });
});

// Eventos en puntos
dots3.forEach(dot => {
  dot.addEventListener("click", () => {
    goToSlide(parseInt(dot.dataset.index));
  });
});
