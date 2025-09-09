document.querySelectorAll(".cell-content").forEach(card => {
  const hoverCard = card.querySelector(".hover-card");
  const trigger = card.querySelector(".font-counter");
  const counterSpan = trigger;

  if (!hoverCard || !trigger) return;

  const prevBtn = hoverCard.querySelector(".prev-btn");
  const nextBtn = hoverCard.querySelector(".next-btn");

  const sources = JSON.parse(card.dataset.sources || "[]");
  let current = 0;
  let isOpen = false;

  if (counterSpan) {
    counterSpan.innerText = "+" + sources.length;
  }

  function renderCard(){
    if (!sources.length) return;
    const logoEl = hoverCard.querySelector(".logo");
    const logoImg = hoverCard.querySelector(".logo-img");
    const titleEl = hoverCard.querySelector(".card-title");
    const descEl = hoverCard.querySelector(".card-desc");
    const countEl = hoverCard.querySelector(".card-count");

    if (logoEl) logoEl.innerText = sources[current].logo || "";
    if (logoImg) logoImg.src = sources[current].logoUrl || "";
    if (titleEl) titleEl.innerText = sources[current].title || "";
    if (descEl) descEl.innerText = sources[current].desc || "";
    if (countEl) countEl.innerText = (current+1) + "/" + sources.length;
    hoverCard.dataset.url = sources[current].url || "";
  }

  function hideHoverCard(){
    hoverCard.style.display = "none";
   
    hoverCard.style.visibility = "";
    isOpen = false;
  }


  function showHoverCard(x, y) {
   
    renderCard();
   
    hoverCard.style.display = "block";
    hoverCard.style.visibility = ""; 

    if (card.classList.contains("last-card")) {
      hoverCard.style.top = (y - hoverCard.offsetHeight - 15) + "px";
      hoverCard.style.left = (x - hoverCard.offsetWidth + 50) + "px";
    } else if (card.classList.contains("last-card-2")) {
      hoverCard.style.top = (y - hoverCard.offsetHeight - 15) + "px";
      hoverCard.style.left = (x + 15) + "px";
    } else {
      hoverCard.style.top = (y + 15) + "px";
      hoverCard.style.left = (x + 15) + "px";
    }

    isOpen = true;
  }

 
  function openMobilePositioned() {
    renderCard();

  
    const prevDisplay = hoverCard.style.display;
    const prevVisibility = hoverCard.style.visibility;


    hoverCard.style.display = "block";
    hoverCard.style.visibility = "hidden";

    const hw = hoverCard.offsetWidth;
    const hh = hoverCard.offsetHeight;
    const rect = trigger.getBoundingClientRect();
    const pos = getComputedStyle(hoverCard).position; 

    if (pos === "fixed") {
      
      let top = rect.top - hh - 8;
      let left = rect.left + rect.width/2 - hw/2;

      // clamp dentro viewport
      top = Math.max(top, 8);
      left = Math.min(Math.max(left, 8), window.innerWidth - hw - 8);

      hoverCard.style.top = `${top}px`;
      hoverCard.style.left = `${left}px`;
    } else {
    
      const pageTop = rect.top + window.scrollY;
      const pageLeft = rect.left + window.scrollX;

      const offsetParent = hoverCard.offsetParent || document.body;
      const parentRect = offsetParent.getBoundingClientRect();
      const parentPageTop = parentRect.top + window.scrollY;
      const parentPageLeft = parentRect.left + window.scrollX;

    
      const topPage = pageTop - hh - 8;
      const leftPage = pageLeft + rect.width/2 - hw/2;

      let topRel = topPage - parentPageTop;
      let leftRel = leftPage - parentPageLeft;

     
      topRel = Math.max(topRel, 8);
      
      if (offsetParent === document.body || offsetParent === document.documentElement) {
        leftRel = Math.min(Math.max(leftRel, 8), window.innerWidth - hw - 8);
      } else {
        leftRel = Math.max(leftRel, 8);
      }

      hoverCard.style.top = `${topRel}px`;
      hoverCard.style.left = `${leftRel}px`;
    }

    
    hoverCard.style.visibility = prevVisibility || "";
    hoverCard.style.display = "block";
    isOpen = true;
  }

 
  if (window.matchMedia("(hover: hover)").matches) {
    
    trigger.addEventListener("mouseenter", (e) => {
      showHoverCard(e.clientX, e.clientY);
    });

    trigger.addEventListener("mouseleave", ()=>{
      setTimeout(()=>{
        if (!hoverCard.matches(":hover")) hideHoverCard();
      }, 100);
    });

    hoverCard.addEventListener("mouseleave", ()=>{
      if (!trigger.matches(":hover")) hideHoverCard();
    });

  } else {
   
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isOpen) {
        hideHoverCard();
      } else {
        openMobilePositioned();
      }
    });

  
    document.addEventListener("click", (e)=>{
      if (!card.contains(e.target)) hideHoverCard();
    });
  }


  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", (e)=>{
      e.stopPropagation();
      current = (current+1) % sources.length;
      renderCard();
    
      if (!window.matchMedia("(hover: hover)").matches && isOpen) openMobilePositioned();
    });

    prevBtn.addEventListener("click", (e)=>{
      e.stopPropagation();
      current = (current-1+sources.length) % sources.length;
      renderCard();
      if (!window.matchMedia("(hover: hover)").matches && isOpen) openMobilePositioned();
    });
  }

  hoverCard.addEventListener("click", () => {
    const url = hoverCard.dataset.url;
    if(url) window.open(url, '_blank');
  });


  window.addEventListener("scroll", hideHoverCard, { passive: true });
});
