(() => {
  const ns  = 'http://www.w3.org/2000/svg';
  const wrap = document.getElementById('flow');
  const svg  = wrap.querySelector('.flow-svg');
  const steps = Array.from(wrap.querySelectorAll('.step'));


  function buildDefs() {
    const defs = document.createElementNS(ns, 'defs');

    const arrowR = document.createElementNS(ns,'marker');
    arrowR.setAttribute('id','arrow-right');
    arrowR.setAttribute('markerWidth','12');
    arrowR.setAttribute('markerHeight','12');
    arrowR.setAttribute('refX','10');
    arrowR.setAttribute('refY','6');
    arrowR.setAttribute('orient','auto');
    arrowR.setAttribute('markerUnits','strokeWidth');
    const pr = document.createElementNS(ns,'path');
    pr.setAttribute('d','M0,0 L12,6 L0,12 z');
    pr.setAttribute('fill','#000000ff');
    arrowR.appendChild(pr);

    const arrowL = document.createElementNS(ns,'marker');
    arrowL.setAttribute('id','arrow-left');
    arrowL.setAttribute('markerWidth','12');
    arrowL.setAttribute('markerHeight','12');
    arrowL.setAttribute('refX','2');
    arrowL.setAttribute('refY','6');
    arrowL.setAttribute('orient','auto');
    arrowL.setAttribute('markerUnits','strokeWidth');
    const pl = document.createElementNS(ns,'path');
    pl.setAttribute('d','M12,0 L0,6 L12,12 z');
    pl.setAttribute('fill','#000000ff');
    arrowL.appendChild(pl);

    defs.appendChild(arrowR);
    defs.appendChild(arrowL);
    svg.appendChild(defs);
  }


  function makeConn(i) {
    const p = document.createElementNS(ns,'path');
    p.classList.add('conn');
    p.dataset.index = i;
    svg.appendChild(p);
    return p;
  }

 
  function positionConns() {
    const wRect = wrap.getBoundingClientRect();
    const width = wrap.clientWidth;
    svg.setAttribute('width', width);
    svg.setAttribute('height', wrap.clientHeight);

    const edgeLeft  = 16;           
    const edgeRight = width - 16;   

    svg.querySelectorAll('.conn').forEach(p => {
      const i = +p.dataset.index;
      const from = steps[i-1].getBoundingClientRect();
      const to   = steps[i].getBoundingClientRect();

      const leftSide = (i-1) % 2 === 0; 

      const x1 = leftSide ? (from.left - wRect.left) : (from.right - wRect.left);
      const y1 = from.top - wRect.top + from.height/2;

      const x2 = leftSide ? (to.left - wRect.left) : (to.right - wRect.left);
      const y2 = to.top - wRect.top + to.height/2;

      const edge = leftSide ? edgeLeft : edgeRight;

   
      const d = `M ${x1} ${y1} 
                 L ${edge} ${y1} 
                 L ${edge} ${y2} 
                 L ${x2} ${y2}`;
      p.setAttribute('d', d.trim());
      p.setAttribute('marker-end', leftSide ? 'url(#arrow-right)' : 'url(#arrow-left)');

      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = (p.dataset.drawn === '1') ? 0 : len;
      p.dataset.length = String(len);
    });
  }

  
  function drawConn(i, draw) {
    const p = svg.querySelector(`.conn[data-index="${i}"]`);
    if (!p) return;
    p.dataset.drawn = draw ? '1' : '0';
    const len = +p.dataset.length || p.getTotalLength();
    p.style.transition = 'stroke-dashoffset 700ms';
    p.style.strokeDashoffset = draw ? 0 : len;
  }

  function build() {
    svg.innerHTML = '';
    buildDefs();
    // crea 1 conexión por cada par consecutivo
    for (let i = 1; i < steps.length; i++) makeConn(i);
    positionConns();
  }

  // Observa entradas/salidas de cada paso
  let lastY = window.scrollY, dir = 'down';
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    dir = y > lastY ? 'down' : 'up';
    lastY = y;
  }, { passive: true });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const idx = steps.indexOf(entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        if (idx > 0) drawConn(idx, true);    
      } else {
        entry.target.classList.remove('in');
        if (idx > 0 && dir === 'up') drawConn(idx, false); 
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
})();