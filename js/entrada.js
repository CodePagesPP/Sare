window.addEventListener("load", () => {
  const box = document.getElementById("logo-container");
  const target = document.getElementById("logo-target");
  const header = document.querySelector("header");
  const splashBg = document.getElementById("splash-bg");

  setTimeout(() => {
    const first = box.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();

    // const finalSize = Math.max(48, Math.min(72, Math.round(headerRect.height * 0.75)));
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

    // Animar logo
    const anim = box.animate(
      [
        { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` },
        { transform: "translate(0, 0) scale(1, 1)" }
      ],
      {
        duration: 4000,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both"
      }
    );

    // Animar fondo blanco (fade out)
    splashBg.style.opacity = "0";

    anim.onfinish = () => {
      box.style.transform = "none";
      splashBg.remove(); // Eliminamos el fondo de la pantalla
    };
  }, 100);
});