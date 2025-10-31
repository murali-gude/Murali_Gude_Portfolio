document.addEventListener('DOMContentLoaded', () => {
// ===== Mobile Menu Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}


  // Carousel Fix
  const carouselCards = document.querySelectorAll('.project-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicators = document.querySelectorAll('.indicator');
  let currentIndex = 0;

  function updateCarousel() {
    carouselCards.forEach((card, i) => {
      card.classList.toggle('active', i === currentIndex);
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselCards.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselCards.length) % carouselCards.length;
    updateCarousel();
  });

  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
  });

  updateCarousel();
});
