import "./style.scss";

// LOGO

const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  hero.scrollIntoView(false);
});

// MENU

const menu = document.querySelector(".menu");
const headerNav = document.querySelector(".header__nav");

menu.addEventListener("click", function () {
  headerNav.classList.toggle("hidden");
});

// BUTTON

const knowMoreButton = document.querySelector(".cta.know-more");
const knowMoreMenu = document.querySelector(".nav__item.know-more");
const homeMenu = document.querySelector(".nav__item.home");
const profiles = document.querySelector(".profiles");
const hero = document.querySelector(".hero");
console.log(homeMenu);

knowMoreButton.addEventListener("click", function () {
  profiles.scrollIntoView();
});

knowMoreMenu.addEventListener("click", function () {
  headerNav.classList.toggle("hidden");
  profiles.scrollIntoView();
});
homeMenu.addEventListener("click", function () {
  headerNav.classList.toggle("hidden");
  hero.scrollIntoView(false);
});

// PROFILES NAV

const profilesNav = document.querySelector(".profiles__nav");
console.log(profilesNav);

profilesNav.addEventListener("click", goToProfile);

const profilesContainer = document.querySelector(".profiles__container");

const slideWidth = profilesContainer.clientWidth;

console.log(profilesContainer);

function goToProfile(e) {
  e.preventDefault();

  const target = e.target;
  if (!target.closest(".nav__item")) return;
  const slide = +target.closest(".nav__item").getAttribute("data-slide");

  profilesContainer.style.transform = `translateX(${-slide * slideWidth}px)`;
  profilesContainer.style.transition = "transform 1s";
}
