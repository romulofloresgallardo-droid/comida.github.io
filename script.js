const searchInput = document.querySelector('.search-container input');

searchInput.addEventListener('focus', () => {
  searchInput.style.backgroundColor = 'rgba(255,255,255,0.8)';
});

searchInput.addEventListener('blur', () => {
  searchInput.style.backgroundColor = 'transparent';
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let currentSlide = 0;

function updateSlider() {
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // actualizar puntitos
    document.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === currentSlide);
    });
}

function moveSlide(direction) {
    const totalSlides = document.querySelectorAll(".slide").length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}
