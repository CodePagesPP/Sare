
const main = document.getElementById('main');
let parts = [];

let images = [
  "./assets/color1.png",
  "./assets/color2.png",
  "./assets/color3.png",
  "./assets/color5.png"
];
let current = 0;
let playing = false;

for (let i in images) {
  new Image().src = images[i];
}

function createPartsForCurrent() {
  main.innerHTML = ''; 
  parts = [];

  if (current % 2 === 0) {
    // 3 columnas verticales
    const cols = 3;
    main.style.display = 'flex';
    main.style.flexDirection = 'row';
    for (let col = 0; col < cols; col++) {
      let part = document.createElement('div');
      part.className = 'part';

      let el = document.createElement('div');
      el.className = "section";

      let img = document.createElement('img');
      img.src = images[current];

      el.appendChild(img);
      part.style.setProperty('--x', (-100 / cols * col) + 'vw');
      part.style.setProperty('--y', '0');
      part.style.flex = '1';

      part.appendChild(el);
      main.appendChild(part);
      parts.push(part);
    }
  } else {
    // 2 filas horizontales
    const rows = 2;
    main.style.display = 'flex';
    main.style.flexDirection = 'column';

    for (let row = 0; row < rows; row++) {
      let part = document.createElement('div');
      part.className = 'part';

      let el = document.createElement('div');
      el.className = "section";

      let img = document.createElement('img');
      img.src = images[current];

      el.appendChild(img);
      part.style.setProperty('--x', '0');
      part.style.setProperty('--y', (-100 / rows * row) + 'vh');
      part.style.flex = '1';

      part.appendChild(el);
      main.appendChild(part);
      parts.push(part);
    }
  }
}

createPartsForCurrent();

let animOptions = {
  duration: 2.3,
  ease: Power4.easeInOut
};

function go(dir) {
  if (playing) return;
  playing = true;

  let nextIndex;
  if (current + dir < 0) nextIndex = images.length - 1;
  else if (current + dir >= images.length) nextIndex = 0;
  else nextIndex = current + dir;

  let changePattern = (current % 2) !== (nextIndex % 2);
  let completedAnimations = 0;

  for (let p in parts) {
    let part = parts[p];
    let currentSection = part.querySelector('.section');
    
   
    let nextSection = document.createElement('div');
    nextSection.className = 'section';
    let img = document.createElement('img');
    img.src = images[nextIndex];
    nextSection.appendChild(img);
    part.appendChild(nextSection);

    if (current % 2 === 0) {
      // Columnas → animación vertical
      let fromYNext = (p % 2) ? '-100%' : '100%';
      let toYCurrent = (p % 2) ? '100%' : '-100%';

      gsap.fromTo(nextSection, { y: fromYNext }, { 
        y: '0%', 
        ...animOptions 
      });
      gsap.to(currentSection, { 
        y: toYCurrent, 
        ...animOptions, 
        onComplete: () => {
          currentSection.remove();
          if (++completedAnimations === parts.length) {
            current = nextIndex;
            if (changePattern) createPartsForCurrent();
            playing = false;
          }
        }
      });
    } else {
      // Filas → animación horizontal
      let fromXNext = (p % 2) ? '-100%' : '100%';
      let toXCurrent = (p % 2) ? '100%' : '-100%';

      gsap.fromTo(nextSection, { x: fromXNext }, { 
        x: '0%', 
        ...animOptions 
      });
      gsap.to(currentSection, { 
        x: toXCurrent, 
        ...animOptions, 
        onComplete: () => {
          currentSection.remove();
          if (++completedAnimations === parts.length) {
            current = nextIndex;
            if (changePattern) createPartsForCurrent();
            playing = false;
          }
        }
      });
    }
  }
}


window.addEventListener('keydown', function (e) {
  if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
    go(1);
  } else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
    go(-1);
  }
});

function lerp(start, end, amount) {
  return (1-amount)*start+amount*end
}

const cursor = document.createElement('div');
cursor.className = 'cursor';

const cursorF = document.createElement('div');
cursorF.className = 'cursor-f';
let cursorX = 0;
let cursorY = 0;
let pageX = 0;
let pageY = 0;
let size = 8;
let sizeF = 36;
let followSpeed = .16;

document.body.appendChild(cursor);
document.body.appendChild(cursorF);

if ('ontouchstart' in window) {
  cursor.style.display = 'none';
  cursorF.style.display = 'none';
}

cursor.style.setProperty('--size', size+'px');
cursorF.style.setProperty('--size', sizeF+'px');

window.addEventListener('mousemove', function(e) {
  pageX = e.clientX;
  pageY = e.clientY;
  cursor.style.left = e.clientX-size/2+'px';
  cursor.style.top = e.clientY-size/2+'px';
});

function loop() {
  cursorX = lerp(cursorX, pageX, followSpeed);
  cursorY = lerp(cursorY, pageY, followSpeed);
  cursorF.style.top = cursorY - sizeF/2 + 'px';
  cursorF.style.left = cursorX - sizeF/2 + 'px';
  requestAnimationFrame(loop);
}

loop();

let startY;
let endY;
let clicked = false;

function mousedown(e) {
  gsap.to(cursor, {scale: 4.5});
  gsap.to(cursorF, {scale: .4});

  clicked = true;
  startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
}
function mouseup(e) {
  gsap.to(cursor, {scale: 1});
  gsap.to(cursorF, {scale: 1});

  endY = e.clientY || endY;
  if (clicked && startY && Math.abs(startY - endY) >= 40) {
    go(!Math.min(0, startY - endY)?1:-1);
    clicked = false;
    startY = null;
    endY = null;
  }
}
window.addEventListener('mousedown', mousedown, false);
window.addEventListener('touchstart', mousedown, false);
window.addEventListener('touchmove', function(e) {
  if (clicked) {
    endY = e.touches[0].clientY || e.targetTouches[0].clientY;
  }
}, false);
window.addEventListener('touchend', mouseup, false);
window.addEventListener('mouseup', mouseup, false);

let scrollTimeout;
function wheel(e) {
  clearTimeout(scrollTimeout);
  setTimeout(function() {
    if (e.deltaY < -40) {
      go(-1);
    }
    else if (e.deltaY >= 40) {
      go(1);
    }
  })
}
window.addEventListener('mousewheel', wheel, false);
window.addEventListener('wheel', wheel, false);