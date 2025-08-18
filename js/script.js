function openModal(img) {
  const modal = document.getElementById("imgModal");
  const expandedImg = document.getElementById("expandedImg");
  expandedImg.src = img.src;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}