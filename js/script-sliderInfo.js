const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const wrapper = document.querySelector('.slider-wrapper');
const cards = document.querySelectorAll('.card');

let cardWidth;

function updateCardWidth() {
  if (!cards.length) return;

  const style = window.getComputedStyle(wrapper);
  const gap = parseInt(style.columnGap || style.gap) || 0;

  // ancho exacto de la tarjeta (ya centrada en móvil) + gap
  cardWidth = cards[0].getBoundingClientRect().width + gap;
}

updateCardWidth();
window.addEventListener('resize', updateCardWidth);

btnRight.addEventListener('click', () => {
  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
});
btnLeft.addEventListener('click', () => {
  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});
