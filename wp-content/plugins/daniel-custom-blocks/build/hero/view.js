/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/hero/view.js ***!
  \**************************/
const ACTIVE_CLASS = "active";
const SLIDE_IN_FROM_RIGHT_CLASS = "slide-in-from-right";
const SLIDE_IN_FROM_LEFT_CLASS = "slide-in-from-left";
const SLIDE_OUT_TO_RIGHT_CLASS = "slide-out-to-right";
const SLIDE_OUT_TO_LEFT_CLASS = "slide-out-to-left";
class Hero {
  constructor(hero) {
    this.hero = hero;
    this.images = hero.querySelectorAll(".hero-image-wrapper");
    this.nextButton = hero.querySelector(".next-slide");
    this.prevButton = hero.querySelector(".prev-slide");
    this.activeIndex = 0; // Start with the first slide
    this.totalSlides = this.images.length;
  }
  init() {
    if (this.totalSlides > 1 && this.nextButton && this.prevButton) {
      this.addButtonListeners();
      this.showSlide(this.activeIndex); // Ensure the first slide is active
    }
  }
  showSlide(index) {
    this.images.forEach((image, i) => {
      image.classList.remove(ACTIVE_CLASS, SLIDE_IN_FROM_RIGHT_CLASS, SLIDE_IN_FROM_LEFT_CLASS, SLIDE_OUT_TO_RIGHT_CLASS, SLIDE_OUT_TO_LEFT_CLASS);
      if (i === index) {
        image.classList.add(ACTIVE_CLASS);
      }
    });
  }
  nextSlide() {
    const currentImage = this.images[this.activeIndex];
    currentImage.classList.remove(ACTIVE_CLASS);
    currentImage.classList.add(SLIDE_OUT_TO_LEFT_CLASS);
    this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
    const nextImage = this.images[this.activeIndex];
    nextImage.classList.add(ACTIVE_CLASS, SLIDE_IN_FROM_RIGHT_CLASS);
    this.cleanupAnimations(currentImage, nextImage);
  }
  prevSlide() {
    const currentImage = this.images[this.activeIndex];
    currentImage.classList.remove(ACTIVE_CLASS);
    currentImage.classList.add(SLIDE_OUT_TO_RIGHT_CLASS);
    this.activeIndex = (this.activeIndex - 1 + this.totalSlides) % this.totalSlides;
    const prevImage = this.images[this.activeIndex];
    prevImage.classList.add(ACTIVE_CLASS, SLIDE_IN_FROM_LEFT_CLASS);
    this.cleanupAnimations(currentImage, prevImage);
  }
  cleanupAnimations(outgoingImage, incomingImage) {
    setTimeout(() => {
      outgoingImage.classList.remove(SLIDE_OUT_TO_LEFT_CLASS, SLIDE_OUT_TO_RIGHT_CLASS);
      incomingImage.classList.remove(SLIDE_IN_FROM_RIGHT_CLASS, SLIDE_IN_FROM_LEFT_CLASS);
    }, 300);
  }
  addButtonListeners() {
    this.nextButton.addEventListener("click", () => {
      this.nextSlide();
    });
    this.prevButton.addEventListener("click", () => {
      this.prevSlide();
    });
  }
}

// Initialize Hero for each `.hero` section
document.querySelectorAll("section.hero").forEach(hero => {
  const heroSection = new Hero(hero);
  heroSection.init();
});
/******/ })()
;
//# sourceMappingURL=view.js.map