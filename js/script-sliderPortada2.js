const sliderBg2 = document.getElementById("sliderBg2");
const slideTitle2 = document.getElementById("slideTitle2");
const slideText2 = document.getElementById("slideText2");
const sliderContent2 = document.getElementById("sliderContent2");
const buttons2 = document.querySelectorAll(".service-btn2");
const dots2 = document.querySelectorAll(".dot2");


// Contenido de cada slide
const slidesData2 = [
  {
    title: "Planeamiento y control de proyectos (PMO)",
    text: "Fortalecemos la gestión de proyectos a través de metodologías avanzadas que garantizan control en plazos, costos y recursos."
  },
  {
    title: "Transformación digital",
    text: "Guiamos a las organizaciones en la adopción de herramientas digitales y analíticas, asegurando un cambio ordenado y efectivo."
  },
  {
    title: "Estrategia\ne-Commerce",
    text: "Diseñamos planes para digitalizar negocios, aumentar ventas online y optimizar la experiencia de compra en PyMEs y empresas."
  },
  {
    title: "Gestión de riesgos",
    text: "Identificamos, evaluamos y mitigamos riesgos en proyectos y operaciones, minimizando impactos y asegurando continuidad."
  },
  {
    title: "Evaluación financiera y de inversiones",
    text: "Analizamos la viabilidad económica de proyectos y alternativas de inversión para apoyar decisiones sólidas y rentables."
  },
  {
    title: "Roadmaps de innovación e inteligencia artificial",
    text: "Construimos planes de adopción tecnológica que vinculan innovación, IA y estrategia empresarial con los objetivos del negocio."
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
