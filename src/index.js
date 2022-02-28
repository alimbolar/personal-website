import "./style.scss";

console.log(document.querySelector("header").clientHeight);

document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("hidden");
});

const knowMoreButton = document.querySelector(".know-more");
const profiles = document.querySelector(".profiles");
const hero = document.querySelector(".hero");
const logo = document.querySelector(".logo");

knowMoreButton.addEventListener("click", function () {
  profiles.scrollIntoView();
});

logo.addEventListener("click", function () {
  hero.scrollIntoView(false);
});
