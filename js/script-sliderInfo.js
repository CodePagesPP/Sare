const slider = document.querySelector('.slider'); // ✅ apuntamos al scroll verdadero
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const card = document.querySelector('.card');

const cardWidth = card.offsetWidth; // ancho + margin/gap

btnRight.addEventListener('click', () => {
  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});