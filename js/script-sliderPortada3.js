const sliderBg3 = document.getElementById("sliderBg3");
const slideTitle3 = document.getElementById("slideTitle3");
const slideText3 = document.getElementById("slideText3");
const sliderContent3 = document.getElementById("sliderContent3");
const buttons3 = document.querySelectorAll(".service-btn3");
const dots3 = document.querySelectorAll(".dot3");

// Contenido de cada slide


let slidesData3 = getSlidesData3("es");

function getSlidesData3(lang) {
  return [
    { title: translations[lang]["engineering.0.title"], text: translations[lang]["engineering.0.text"] },
    { title: translations[lang]["engineering.1.title"], text: translations[lang]["engineering.1.text"] },
    { title: translations[lang]["engineering.2.title"], text: translations[lang]["engineering.2.text"] },
    { title: translations[lang]["engineering.3.title"], text: translations[lang]["engineering.3.text"] },
    { title: translations[lang]["engineering.4.title"], text: translations[lang]["engineering.4.text"] },
    { title: translations[lang]["engineering.5.title"], text: translations[lang]["engineering.5.text"] }
  ];
}

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


window.goToSlide3 = goToSlide3;

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
