document.addEventListener("DOMContentLoaded", function () {
  const btnDarkMode = document.querySelector(".dark-mode-btn");
  const bodyElement = document.body;
  btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    bodyElement.classList.toggle("dark");
  };
});
