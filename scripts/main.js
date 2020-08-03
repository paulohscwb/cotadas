const slides = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".active");
  current.classList.remove("active");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("active");
  } else {
    slides[0].classList.add("active");
  }
  setTimeout(() => current.classList.remove("active"));
};

const prevSlide = () => {
  const current = document.querySelector(".active");
  current.classList.remove("active");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("active");
  } else {
    slides[slides.length - 1].classList.add("active");
  }
  setTimeout(() => current.classList.remove("active"));
};

next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
