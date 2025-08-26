const sliderBg2 = document.getElementById("sliderBg2");
const slideTitle2 = document.getElementById("slideTitle2");
const slideText2 = document.getElementById("slideText2");
const sliderContent2 = document.getElementById("sliderContent2");
const buttons2 = document.querySelectorAll(".service-btn2");
const dots2 = document.querySelectorAll(".dot2");

// Contenido de cada slide
const slidesData2 = [
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

function goToSlide2(index) {
  // Mueve el fondo en horizontal
  sliderBg2.style.transform = `translateX(-${index * 100}%)`;

  // Animación del texto (salida)
  slideTitle2.classList.add("fade-out");
  slideText2.classList.add("fade-out");

  setTimeout(() => {
    // Cambiar contenido
    slideTitle2.textContent = slidesData2[index].title;
    slideText2.textContent = slidesData2[index].text;

    // Reaparece con animación
    slideTitle2.classList.remove("fade-out");
    slideText2.classList.remove("fade-out");

    slideTitle2.classList.add("fade-in");
    slideText2.classList.add("fade-in");

    setTimeout(() => {
      slideTitle2.classList.remove("fade-in");
      slideText2.classList.remove("fade-in");
    }, 600);
  }, 300);

  // Marcar activo botón y punto
  buttons2.forEach(btn => btn.classList.remove("active"));
  buttons2[index].classList.add("active");

  dots2.forEach(dot => dot.classList.remove("active"));
  dots2[index].classList.add("active");
}

// Eventos en botones
buttons2.forEach(btn => {
  btn.addEventListener("click", () => {
    goToSlide2(parseInt(btn.dataset.index));
  });
});

// Eventos en puntos
dots2.forEach(dot => {
  dot.addEventListener("click", () => {
    goToSlide2(parseInt(dot.dataset.index));
  });
});
