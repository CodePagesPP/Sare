const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const wrapper = document.querySelector('.slider-wrapper');
const cards = document.querySelectorAll('.card');

let cardWidth;

function updateCardWidth() {
  if (!cards.length) return;

  if (window.innerWidth <= 768) {
    // en mobile ocupa todo el ancho del slider
    cardWidth = slider.getBoundingClientRect().width;
  } else {
    const style = window.getComputedStyle(wrapper);
    const gap = parseInt(style.columnGap || style.gap) || 0;
    cardWidth = cards[0].getBoundingClientRect().width + gap;
  }
}

updateCardWidth();
window.addEventListener('resize', updateCardWidth);

btnRight.addEventListener('click', () => {
  const maxScroll = wrapper.scrollWidth - slider.clientWidth; // límite derecho
  let newScroll = slider.scrollLeft + cardWidth;

  // si me paso del final, fuerzo el scroll al máximo
  if (newScroll > maxScroll - 5) {
    newScroll = maxScroll;
  }

  slider.scrollTo({ left: newScroll, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
  let newScroll = slider.scrollLeft - cardWidth;

  // si me paso del inicio, fuerzo a 0
  if (newScroll < 5) {
    newScroll = 0;
  }

  slider.scrollTo({ left: newScroll, behavior: 'smooth' });
});