const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const wrapper = document.querySelector('.slider-wrapper');
const cards = document.querySelectorAll('.card');

let cardWidth;
let currentIndex = 0; // 👈 índice de la card visible

function updateCardWidth() {
  if (!cards.length) return;

  if (window.innerWidth <= 768) {
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
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    slider.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
  }
});

btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
  }
});
