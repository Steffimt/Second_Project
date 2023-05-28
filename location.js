const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const menuLinks = document.getElementsByClassName("menu-links")[0];

toggleButton.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});