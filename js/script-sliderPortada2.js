const sliderBg2 = document.getElementById("sliderBg2");
const slideTitle2 = document.getElementById("slideTitle2");
const slideText2 = document.getElementById("slideText2");
const sliderContent2 = document.getElementById("sliderContent2");
const buttons2 = document.querySelectorAll(".service-btn2");
const dots2 = document.querySelectorAll(".dot2");


// Contenido de cada slide



let slidesData2 = getSlidesData2("es");

function getSlidesData2(lang) {
  return [
    { title: translations[lang]["consulting.0.title"], text: translations[lang]["consulting.0.text"] },
    { title: translations[lang]["consulting.1.title"], text: translations[lang]["consulting.1.text"] },
    { title: translations[lang]["consulting.2.title"], text: translations[lang]["consulting.2.text"] },
    { title: translations[lang]["consulting.3.title"], text: translations[lang]["consulting.3.text"] },
    { title: translations[lang]["consulting.4.title"], text: translations[lang]["consulting.4.text"] },
    { title: translations[lang]["consulting.5.title"], text: translations[lang]["consulting.5.text"] }
  ];
}

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

window.goToSlide2 = goToSlide2; 

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
