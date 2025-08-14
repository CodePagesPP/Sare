document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const items = document.querySelectorAll(".fade-item");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-jacking",
      start: "top top",
      end: "+=400%",
      scrub: true,
      pin: true
    }
  });

  items.forEach((item, index) => {
    if (index === items.length - 1) {
      // Cuando llega la imagen
      tl.to(item, { opacity: 1, duration: 1.5 }, "+=1");
      tl.to(".background-layer", { opacity: 0, duration: 2 }, "<"); // "<" significa al mismo tiempo
    } else {
      // Párrafos normales
      tl.to(item, { opacity: 1, duration: 1.5 })
        .to(item, { opacity: 0, duration: 2 }, "+=1");
    }
  });
});
