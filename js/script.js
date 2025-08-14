const scrollContainer = document.querySelector(".horizontal-scroll");
const track = document.querySelector(".scroll-track");

const panels = document.querySelectorAll(".panel");
const totalScrollWidth = panels.length * window.innerWidth;
const scrollHeight = totalScrollWidth - window.innerWidth + window.innerHeight;

// Ajustamos el body para permitir el scroll
document.body.style.height = `${scrollHeight}px`;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scrollPercent = scrollY / (scrollHeight - window.innerHeight);
  const translateX = -scrollPercent * (totalScrollWidth - window.innerWidth);
  track.style.transform = `translateX(${translateX}px)`;
});
