const dotsancla = document.querySelectorAll('.nav-dots .dot-ancla');
const indicator = document.querySelector('.nav-dots .indicator');
const navDots = document.querySelector('.nav-dots');
function moveIndicator(element) {
  const offsetTop = element.offsetTop;
  indicator.style.top = `${offsetTop - 4}px`;
}


if (window.innerWidth <= 768) {
  let scrollTimeout;

  window.addEventListener('scroll', () => {
    
    navDots.style.opacity = '0';
    navDots.style.transition = 'opacity 0.3s ease';

    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      
      navDots.style.opacity = '1';
    }, 300); 
  });
}


dotsancla.forEach(dot => {
  dot.addEventListener('click', e => {
    e.preventDefault();

   
    dotsancla.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    
    moveIndicator(dot);

    
    const section = document.querySelector(dot.dataset.target);

    
    if (dot.dataset.target === '#contact') {
      
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

   
    history.replaceState(null, null, ' ');
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = `#${entry.target.id}`;

      
      const activeDot = [...dotsancla].find(dot => dot.dataset.target === id);

      if (activeDot) {
        dotsancla.forEach(d => d.classList.remove('active'));
        activeDot.classList.add('active');
        moveIndicator(activeDot);
      }
    }
  });
}, {
  threshold: 0.6 
});


document.querySelectorAll('section, div[id]').forEach(sec => observer.observe(sec));


moveIndicator(dotsancla[0]);
