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
  const totalCards = cards.length;
  const visibleCards = Math.floor(slider.clientWidth / cardWidth);
  const maxIndex = totalCards - visibleCards;

  let newScroll = slider.scrollLeft + cardWidth;

  // corregimos con Math.round para evitar píxeles sobrantes
  const maxScroll = Math.round(maxIndex * cardWidth);

  if (newScroll > maxScroll) {
    newScroll = maxScroll;
  }

  slider.scrollTo({ left: newScroll, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
  let newScroll = slider.scrollLeft - cardWidth;

  if (newScroll < 0) {
    newScroll = 0;
  }

  slider.scrollTo({ left: newScroll, behavior: 'smooth' });
});

