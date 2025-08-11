const points = document.querySelectorAll('.timeline-point');
const tooltip = document.getElementById('tooltip');

points.forEach(point => {
    point.addEventListener('mouseenter', (e) => {
        tooltip.textContent = point.dataset.title;
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = (e.pageY - 20) + 'px';
        tooltip.classList.add('show');
    });

    point.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = (e.pageY - 20) + 'px';
    });

    point.addEventListener('mouseleave', () => {
        tooltip.classList.remove('show');
    });
});
