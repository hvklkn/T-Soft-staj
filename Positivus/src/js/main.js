const closeButton = document.querySelector(".header__nav-close");
const openButton = document.querySelector(".header__nav-open");
const navMenu = document.querySelector(".header__nav-links");

const toggleElement = () => {
  navMenu.classList.toggle("active");
};

closeButton.addEventListener("click", () => toggleElement());
openButton.addEventListener("click", () => toggleElement());

const accordionCards = document.querySelectorAll(".accordion__card");

accordionCards.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.querySelector(".accordion__card-description").classList.toggle("open");

    document
      .querySelectorAll(".accordion__card-description")
      .forEach((item1, index1) => {
        if (index != index1) {
          item1.classList.remove("open");
        }
      });
    accordionCards.forEach((item1) => {
      if (
        item1
          .querySelector(".accordion__card-description")
          .classList.contains("open")
      ) {
        item1.querySelector(".icon i").classList.replace("fa-plus", "fa-minus");
      } else {
        item1.querySelector(".icon i").classList.replace("fa-minus", "fa-plus");
      }
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.50": {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    "@1.25": {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    "@2": {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

const nav = document.querySelector(".header__container");

let prevScrollpos = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }

  // let currentScrollPos = window.scrollY;

  // if (prevScrollpos < currentScrollPos) {
  //   nav.classList.add("hide");
  // } else {
  //   nav.classList.remove("hide");
  // }
  // prevScrollpos = currentScrollPos;
});
