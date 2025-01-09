// Dynamic Greeting
const greetingElement = document.getElementById('greeting');
const getGreetingMessage = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning, Traveler!";
  if (hour < 18) return "Good Afternoon, Adventurer!";
  return "Good Evening, Explorer!";
};
greetingElement.textContent = getGreetingMessage();

// Image Carousel
const images = [
  "https://via.placeholder.com/600x400/FF5733",
  "https://via.placeholder.com/600x400/33FF57",
  "https://via.placeholder.com/600x400/3357FF"
];
let currentIndex = 0;

const carouselImage = document.querySelector(".carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const updateCarousel = () => {
  carouselImage.src = images[currentIndex];
};

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

updateCarousel();
