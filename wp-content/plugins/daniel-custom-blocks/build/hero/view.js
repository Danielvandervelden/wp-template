/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/hero/view.js ***!
  \**************************/
class Hero {
  constructor() {
    this.slides = Array.from(document.querySelectorAll(".hero-image-wrapper"));
    this.currentSlide = 0;
    this.nextButton = document.querySelector(".controls button:last-child");
    this.prevButton = document.querySelector(".controls button:first-child");
    this.activeClass = "active";
    this.transitionInClass = "transition-in";
    this.transitionOutClass = "transition-out";
    this.allowedToChange = true;
    this.init();
  }
  init() {
    this.addEventListeners();
  }
  addEventListeners(direction) {
    this.nextButton.addEventListener("click", e => {
      if (this.allowedToChange) {
        this.showSlide("next");
        this.allowedToChange = false;
      }
    });
    this.prevButton.addEventListener("click", e => {
      if (this.allowedToChange) {
        this.showSlide("prev");
        this.allowedToChange = false;
      }
    });
  }
  slideIndexToShow(direction) {
    if (direction === "next") {
      return this.currentSlide + 1 === this.slides.length ? 0 : this.currentSlide + 1;
    } else {
      return this.currentSlide - 1 < 0 ? this.slides.length - 1 : this.currentSlide - 1;
    }
  }
  showSlide(direction) {
    const currentSlide = this.slides[this.currentSlide];
    const nextSlide = this.slides[this.slideIndexToShow(direction)];
    currentSlide.classList.add(this.transitionOutClass);
    currentSlide.classList.remove(this.transitionInClass);
    nextSlide.classList.add(this.transitionInClass);
    nextSlide.classList.add(this.activeClass);
    setTimeout(() => {
      this.removeClasses(currentSlide);
      this.allowedToChange = true;
    }, 300);
    this.currentSlide = this.slideIndexToShow(direction);
  }
  removeClasses(slide) {
    slide.classList.remove(this.activeClass);
    slide.classList.remove(this.transitionInClass);
    slide.classList.remove(this.transitionOutClass);
  }
}
document.querySelectorAll(".hero").forEach(hero => new Hero(hero));
/******/ })()
;
//# sourceMappingURL=view.js.map