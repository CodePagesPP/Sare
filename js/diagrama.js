
(() => {
  const ns  = 'http://www.w3.org/2000/svg';
  const wrap = document.getElementById('flow');
  const svg  = wrap.querySelector('.flow-svg');
  const steps = Array.from(wrap.querySelectorAll('.step'));

  const arrowGap = 1;     
  const sideEdge  = 46;     

function buildDefs(){
  const defs = document.createElementNS(ns, 'defs');


  const arrowR = document.createElementNS(ns,'marker');
  arrowR.setAttribute('id','arrow-right');
  arrowR.setAttribute('viewBox','0 0 10 10');
  arrowR.setAttribute('refX','10'); 
  arrowR.setAttribute('refY','5');
  arrowR.setAttribute('markerWidth','8');
  arrowR.setAttribute('markerHeight','8');
  arrowR.setAttribute('orient','auto');
  const pr = document.createElementNS(ns,'path');
  pr.setAttribute('d','M0,0 L10,5 L0,10 Z'); 
  pr.setAttribute('fill','#000');
  arrowR.appendChild(pr);

 
  const arrowL = document.createElementNS(ns,'marker');
  arrowL.setAttribute('id','arrow-left');
  arrowL.setAttribute('viewBox','0 0 10 10');
  arrowL.setAttribute('refX','0');    
  arrowL.setAttribute('refY','5');
  arrowL.setAttribute('markerWidth','8');
  arrowL.setAttribute('markerHeight','8');
  arrowL.setAttribute('orient','auto');
  const pl = document.createElementNS(ns,'path');
  pl.setAttribute('d','M10,0 L0,5 L10,10 Z');
  pl.setAttribute('fill','#000');
  arrowL.appendChild(pl);

  defs.appendChild(arrowR);
  defs.appendChild(arrowL);
  svg.appendChild(defs);
}

  function makeConn(i){
    const p = document.createElementNS(ns,'path');
    p.classList.add('conn');
    p.dataset.index = i;
    svg.appendChild(p);
    return p;
  }

function positionConns(){
  const wRect = wrap.getBoundingClientRect();
  const width = wrap.clientWidth;
  svg.setAttribute('width', width);
  svg.setAttribute('height', wrap.clientHeight);

  const edgeLeft  = -15;
  const edgeRight = width + 15;

  svg.querySelectorAll('.conn').forEach(p => {
    const i = +p.dataset.index;
    const from = steps[i-1].getBoundingClientRect();
    const to   = steps[i].getBoundingClientRect();

    const leftSide = (i-1) % 2 === 0;

    const x1 = leftSide
      ? (from.left - wRect.left + arrowGap)
      : (from.right - wRect.left - arrowGap);
    const y1 = from.top - wRect.top + from.height/2;

    const x2 = leftSide
      ? (to.left - wRect.left + arrowGap)
      : (to.right - wRect.left - arrowGap);
    const y2 = to.top - wRect.top + to.height/2;

    const edge = leftSide ? edgeLeft : edgeRight;

    const d = `M ${x1} ${y1}
            L ${edge} ${y1}
            L ${edge} ${y2}
            L ${x2} ${y2}`;
    p.setAttribute('d', d);

    
    const arrowDir = (x2 > x1) ? 'url(#arrow-left)' : 'url(#arrow-right)';
    p.setAttribute('marker-end', arrowDir);
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = (p.dataset.drawn === '1') ? 0 : len;
    p.dataset.length = String(len);
  });
}

  function drawConn(i, draw){
    const p = svg.querySelector(`.conn[data-index="${i}"]`);
    if (!p) return;
    p.dataset.drawn = draw ? '1' : '0';
    const len = +p.dataset.length || p.getTotalLength();
    p.style.transition = 'stroke-dashoffset 700ms ease';
    p.style.strokeDashoffset = draw ? 0 : len;
  }

  function build(){
    svg.innerHTML = '';
    buildDefs();
    for (let i = 1; i < steps.length; i++) makeConn(i);
    positionConns();
  }

  
  let lastY = window.scrollY, dir = 'down';
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    dir = y > lastY ? 'down' : 'up';
    lastY = y;
  }, { passive: true });

 
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const idx = steps.indexOf(entry.target);
      if (idx < 0) return;

      if (entry.isIntersecting) {
        entry.target.classList.add('in');

     
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            positionConns();
            if (idx > 0) drawConn(idx, true);
          });
        });

      } else {
        
        entry.target.classList.remove('in');
        if (idx > 0 && dir === 'up') {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              positionConns();
              drawConn(idx, false);
            });
          });
        } else {
         
          requestAnimationFrame(positionConns);
        }
      }
    });
  }, { threshold: 0.55 });

 
  window.addEventListener('load', () => {
    build();
    steps.forEach(s => io.observe(s));
  });

  
  const ro = new ResizeObserver(positionConns);
  ro.observe(wrap);
  window.addEventListener('resize', positionConns);


  steps.forEach(s => s.addEventListener('transitionend', () => {
    positionConns();
  }));
})();
