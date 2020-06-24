const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("actived");
});
