//  Menu Berger
const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("-translate-x-full");

  if (navbar.classList.contains("-translate-x-full")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  }
});

//  Swiper JS

const partnersSwiper = new Swiper(".partnersSwiper", {
  direction: "horizontal",
  loop: true,

  slidesPerView: 2,

  breakpoints: {
    // Tablet
    768: {
      slidesPerView: 3,
    },

    // Desktop
    1024: {
      slidesPerView: 5,
    },
  },
});
