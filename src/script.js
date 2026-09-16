const menuBtn = document.querySelector("#menuBtn");
const menuIcon = document.querySelector("#menuIcon");
const navbar = document.querySelector("#navbar");

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