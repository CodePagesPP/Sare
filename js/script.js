document.querySelectorAll(".cell-content").forEach(card => {
  const hoverCard = card.querySelector(".hover-card");
  const prevBtn = hoverCard.querySelector("#prev-btn");
  const nextBtn = hoverCard.querySelector("#next-btn");
  const trigger = card.querySelector(".font-counter"); 
  const counterSpan = card.querySelector(".font-counter");

  const sources = JSON.parse(card.dataset.sources);
  let current = 0;
  if (counterSpan) {
  counterSpan.innerText = "+" + sources.length;
}

  function renderCard(){
    hoverCard.querySelector(".logo").innerText = sources[current].logo;
    hoverCard.querySelector(".logo-img").src = sources[current].logoUrl;
    hoverCard.querySelector("#card-title").innerText = sources[current].title;
    hoverCard.querySelector("#card-desc").innerText = sources[current].desc;
    hoverCard.querySelector("#card-count").innerText = (current+1) + "/" + sources.length;
    hoverCard.dataset.url = sources[current].url;
  }

  hoverCard.addEventListener("click", () => {
    const url = hoverCard.dataset.url;
    if(url) window.open(url, '_blank');
  })

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


  trigger.addEventListener("mouseenter", (e) => {
  hoverCard.style.display = "block";

  if (card.classList.contains("last-card")) {
   
    hoverCard.style.top = (e.clientY - hoverCard.offsetHeight - 15) + "px";
    hoverCard.style.left = (e.clientX - hoverCard.offsetWidth + 50) + "px"; 
  } else if (card.classList.contains("last-card-2")) {   

    hoverCard.style.top = (e.clientY - hoverCard.offsetHeight - 15) + "px";
    hoverCard.style.left = (e.clientX + 15) + "px";
  } else {
    
    hoverCard.style.top = (e.clientY + 15) + "px";
    hoverCard.style.left = (e.clientX + 15) + "px";
  }

  renderCard();
});

  function hideHoverCard(){
    hoverCard.style.display = "none";
  }


  trigger.addEventListener("mouseleave", ()=>{
    setTimeout(()=>{
      if (!hoverCard.matches(":hover")) hideHoverCard();
    }, 100);
  });

  hoverCard.addEventListener("mouseleave", ()=>{
    if (!trigger.matches(":hover")) hideHoverCard();
  });
});


document.getElementById("whatsappBtn").addEventListener("click", function(event) {
   
    event.preventDefault();

  
    window.open(this.href, "_blank");

 
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});