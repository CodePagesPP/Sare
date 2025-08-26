const dots = document.querySelectorAll('.nav-dots .dot');
const indicator = document.querySelector('.nav-dots .indicator');

function moveIndicator(element) {
  const offsetTop = element.offsetTop;
  indicator.style.top = `${offsetTop - 4}px`;
}


dots.forEach(dot => {
  dot.addEventListener('click', e => {
    e.preventDefault();

   
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    
    moveIndicator(dot);

    
    const section = document.querySelector(dot.dataset.target);

    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

   
    history.replaceState(null, null, ' ');
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = `#${entry.target.id}`;

      
      const activeDot = [...dots].find(dot => dot.dataset.target === id);

      if (activeDot) {
        dots.forEach(d => d.classList.remove('active'));
        activeDot.classList.add('active');
        moveIndicator(activeDot);
      }
    }
  });
}, {
  threshold: 0.6 
});


document.querySelectorAll('section, div[id]').forEach(sec => observer.observe(sec));


moveIndicator(dots[0]);
