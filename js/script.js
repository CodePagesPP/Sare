document.querySelectorAll(".cell-content").forEach(card => {
  const hoverCard = card.querySelector(".hover-card");
  const prevBtn = hoverCard.querySelector("#prev-btn");
  const nextBtn = hoverCard.querySelector("#next-btn");

  const sources = JSON.parse(card.dataset.sources);
  let current = 0;

  function renderCard(){
    hoverCard.querySelector(".logo").innerText = sources[current].logo;
    hoverCard.querySelector(".logo-img").src = sources[current].logoUrl;
    hoverCard.querySelector("#card-title").innerText = sources[current].title;
    hoverCard.querySelector("#card-desc").innerText = sources[current].desc;
    hoverCard.querySelector("#card-count").innerText = (current+1) + "/" + sources.length;
  }

  nextBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    current = (current+1) % sources.length;
    renderCard();
  });

  prevBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    current = (current-1+sources.length) % sources.length;
    renderCard();
  });

  card.addEventListener("mouseenter", (e)=>{
    hoverCard.style.display = "block";
    hoverCard.style.top = (e.clientY + 15) + "px";
    hoverCard.style.left = (e.clientX + 15) + "px";
    renderCard();
  });

  function hideHoverCard(){
    hoverCard.style.display = "none";
  }

  card.addEventListener("mouseleave", ()=>{
    if (!hoverCard.matches(":hover")) hideHoverCard();
  });

  hoverCard.addEventListener("mouseleave", ()=>{
    if (!card.matches(":hover")) hideHoverCard();
  });
});
