function openModal(card) {
  const modal = document.getElementById("imgModal");
  const expandedImg = document.getElementById("expandedImg");


  const bgImg = card.querySelector(".background-image");
  expandedImg.src = bgImg.src;

  modal.style.display = "block";
}

function closeModal(event) {
  if (event) event.stopPropagation();
  document.getElementById("imgModal").style.display = "none";
}


window.onclick = function(event) {
  const modal = document.getElementById("imgModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
