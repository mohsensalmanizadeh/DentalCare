//  data cart
const doctors = [
  {
    name: "Dr. Marteen Bryant",
    role: "General dentist",
    img: "./public/image/Artboard 1.png",
  },
  {
    name: "Dr. Julia Barbara",
    role: "General dentist",
    img: "./public/image/Artboard 4.png",
  },
  {
    name: "Dr. Natasha Smith",
    role: "General dentist",
    img: "./public/image/Artboard 6.png",
  },
];

const iconBase =
  "grid h-[22px] w-[22px] place-items-center rounded-full border border-brand text-brand";
const social = `
    <div class="social mt-2.5 hidden justify-center gap-1.5">
      <a href="#" class="${iconBase}" aria-label="Instagram">
        <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
      </a>
      <a href="#" class="${iconBase} !bg-brand !text-white" aria-label="Facebook">
        <svg class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3a4 4 0 00-4 4v2H7v3.5h3V22h4V11.5h3L17.5 8H14z"/></svg>
      </a>
      <a href="#" class="${iconBase}" aria-label="LinkedIn">
        <svg class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h4v12H4zM6 3a2.2 2.2 0 110 4.4A2.2 2.2 0 016 3zM10 9h3.8v1.7c.5-1 1.8-2 3.8-2 4 0 4.4 2.6 4.4 6V21h-4v-5.500c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900V21h-4z"/></svg>
      </a>
      <a href="#" class="${iconBase}" aria-label="X">
        <svg class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.5 7.5L22 22h-6l-4.7-6.2L5.8 22H3l7-8L2.5 2h6.1l4.3 5.7L18.2 2zm-1 18h1.6L7.9 3.8H6.2L17.2 20z"/></svg>
      </a>
    </div>`;

document.getElementById("slides").innerHTML = doctors
  .map(
    (d) => `
    <div class="swiper-slide flex scale-[.88] justify-center transition-transform duration-300
                max-lg:[&.swiper-slide-active]:scale-100
                lg:[&.swiper-slide-active]:z-10 lg:[&.swiper-slide-active]:scale-[1.08]
                [&.swiper-slide-active_.social]:flex">
      <div class="relative w-full max-w-full rounded-2xl bg-card p-2 shadow-[0_6px_20px_rgba(120,190,235,.35)]">
        <div class="h-auto  overflow-hidden rounded-xl bg-photo">
          <img src="${d.img}" alt="${d.name}" class="h-full w-full object-cover object-bottom">
        </div>
        <div class="absolute bottom-2 left-1/2 w-[78%] -translate-x-1/2 rounded-lg bg-white px-1.5 py-2.5 text-center shadow-md">
          <h4 class="text-xs font-semibold tracking-wider text-brand">${d.name}</h4>
          <p class="mt-1 text-[10px] text-neutral-800">${d.role}</p>
          ${social}
        </div>
      </div>
    </div>`,
  )
  .join("");

new Swiper(".doctorsSwiper", {
  loop: false,
  initialSlide: 1, // اسلاید دوم (وسط) از ابتدا فعال
  speed: 500,
  spaceBetween: 24,
  slidesPerView: 1,
  centeredSlides: true,
  slideToClickedSlide: true,
  navigation: { nextEl: ".btn-next", prevEl: ".btn-prev" },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    640: { slidesPerView: 2, centeredSlides: true },
    1024: { slidesPerView: 3, centeredSlides: true },
  },
});
