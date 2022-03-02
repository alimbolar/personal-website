import "./style.scss";

// LOGO

const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  headerNav.classList.add("hidden");
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
  console.log(hero.clientHeight);
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
const profileItems = profilesNav.querySelectorAll(".nav__item");
profilesNav.addEventListener("click", goToProfile);

// const profilesContainer = document.querySelector(".profiles__container");
// const allProfiles = document.querySelectorAll(".profile");

// const slideWidth = profilesContainer.clientWidth;

// function goToSlide(slide) {
//   allProfiles.forEach((profile) => {
//     profile.style.transform = `transformX(${slide * 100}%)`;
//   });
// }

function goToProfile(e) {
  e.preventDefault();

  const target = e.target;
  if (!target.closest(".nav__item")) return;

  const profilesContainer = document.querySelector(".profiles__container");
  const slideWidth = profilesContainer.clientWidth;
  const activeItem = target.closest(".nav__item");

  // Move Slide to target

  const slide = +activeItem.getAttribute("data-slide");
  profilesContainer.style.transform = `translateX(${-slide * slideWidth}px)`;
  profilesContainer.style.transition = "transform 1s";

  // Add active class to activeItem

  profileItems.forEach((item) => {
    item.classList.remove("active");
  });
  activeItem.classList.add("active");
}

// INACTIVE BUTTONS

const inactiveButtons = document.querySelectorAll(".cta.inactive");

inactiveButtons.forEach((button) => {
  button.addEventListener("click", () => alert("Coming soon"));
});

// INACTIVE MENU LINKS

const inactiveLinks = document.querySelectorAll(".nav__item.inactive");

inactiveLinks.forEach((button) => {
  button.addEventListener("click", () => alert("Coming soon"));
});
