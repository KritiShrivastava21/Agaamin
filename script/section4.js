// Select DOM elements
const carousel = document.querySelector('.carousel');
const slider = document.getElementById('carousel-slider');

// Slider Input Event
slider.addEventListener('input', () => {
  const sliderValue = parseInt(slider.value); // Get slider value (0-7)
  const itemWidth = carousel.querySelector('.carousel-item').offsetWidth; // Width of a single item
  const gap = 20; // Gap between items (from CSS margin)
  const scrollAmount = sliderValue * (itemWidth + gap); // Calculate scroll amount

  // Update carousel transform
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

// Touch Events for Swipe Functionality
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  carousel.style.transition = 'none'; // Disable smooth transition for drag effect
});

carousel.addEventListener('touchmove', (e) => {
  const currentX = e.touches[0].clientX;
  const deltaX = currentX - startX; // Calculate swipe distance
  carousel.style.transform = `translateX(${prevTranslate + deltaX}px)`;
});

carousel.addEventListener('touchend', (e) => {
  const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 20; // Include margin
  const totalItems = carousel.children.length;
  const maxTranslate = -(totalItems - 5) * itemWidth;

  // Calculate final translation
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

  if (deltaX > 50) {
    currentTranslate += itemWidth; // Swipe right
  } else if (deltaX < -50) {
    currentTranslate -= itemWidth; // Swipe left
  }

  // Constrain within bounds
  currentTranslate = Math.max(Math.min(currentTranslate, 0), maxTranslate);
  prevTranslate = currentTranslate;

  // Apply smooth transition
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${currentTranslate}px)`;
});
