function abrirPopup() {
  document.getElementById("popup").style.display = "flex";
}

function confirmarPopup() {
  document.getElementById("popup").style.display = "none";

  const hoje = new Date().toDateString();
  localStorage.setItem("dataPopup", hoje);
}
window.onload = function() {

  const hoje = new Date().toDateString();
  const ultimaVez = localStorage.getItem("dataPopup");

  if (ultimaVez !== hoje) {
    abrirPopup();
  }

};