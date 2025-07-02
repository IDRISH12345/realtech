let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

function updateSlide() {
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}


