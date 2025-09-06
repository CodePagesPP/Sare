const sliderBg = document.getElementById("sliderBg");
const slideTitle = document.getElementById("slideTitle");
const slideText = document.getElementById("slideText");
const sliderContent = document.getElementById("sliderContent");
const buttons = document.querySelectorAll(".service-btn");
const dots = document.querySelectorAll(".dot");

// Contenido de cada slide
let slidesData = getSlidesData("es");

function getSlidesData(lang) {
  return [
    { title: translations[lang]["dashboard.0.title"], text: translations[lang]["dashboard.0.text"] },
    { title: translations[lang]["dashboard.1.title"], text: translations[lang]["dashboard.1.text"] },
    { title: translations[lang]["dashboard.2.title"], text: translations[lang]["dashboard.2.text"] },
    { title: translations[lang]["dashboard.3.title"], text: translations[lang]["dashboard.3.text"] },
    { title: translations[lang]["dashboard.4.title"], text: translations[lang]["dashboard.4.text"] },
  ];
}

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

window.goToSlide = goToSlide; 
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
