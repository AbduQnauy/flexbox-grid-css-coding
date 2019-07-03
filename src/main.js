document.getElementById("menu-btn").addEventListener("click", changNav);

function changNav() {
  document.getElementById("links").classList.toggle("hideNav");
  document.getElementById("menu-btn").classList.toggle("turn");
}
