window.addEventListener("load", () => {
  const box = document.getElementById("logo-container");
  const target = document.getElementById("logo-target");
  const header = document.querySelector("header");
  const splashBg = document.getElementById("splash-bg");

  setTimeout(() => {
    const first = box.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
    const finalSize = 200;

    target.style.width  = finalSize + "px";
    target.style.height = finalSize + "px";

    target.appendChild(box);
    box.style.position = "absolute";
    box.style.inset = "0";
    box.style.transform = "none";
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.zIndex = "1000";

    const last = box.getBoundingClientRect();

    const dx = first.left - last.left;
    const dy = first.top  - last.top;
    const sx = first.width  / last.width;
    const sy = first.height / last.height;

    // Duración total de la animación del logo
    const logoAnimDuration = 4000;

    const anim = box.animate(
      [
        { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` },
        { transform: "translate(0, 0) scale(1, 1)" }
      ],
      {
        duration: logoAnimDuration,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both"
      }
    );

    splashBg.style.opacity = "0";

    // ⏳ Lanzar la animación del Sion 1s antes de que termine el logo
    setTimeout(() => {
      document.querySelector(".sion-text").classList.add("fade-zoom-in");
      document.querySelector(".sion-image").classList.add("zoom-out-up");
    }, logoAnimDuration - 3000); // 1000 ms antes

    anim.onfinish = () => {
      box.style.transform = "none";
      splashBg.remove();
    };
  }, 2000);
});
