class Hero {
  constructor(hero) {
    this.hero = hero;
    this.slider = hero.querySelector(".hero-slider");
    this.images = hero.querySelectorAll(".hero-image-wrapper");
    this.nextButton = hero.querySelector(".next-slide");
    this.prevButton = hero.querySelector(".prev-slide");
    this.activeIndex = 0;
    this.totalSlides = this.images.length;
    this.isTouching = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.slideWidth = hero.offsetWidth;
    this.swipeDirection = null;
    this.directionThreshold = 10;
  }

  init() {
    this.addTouchListener();
    this.addButtonListeners();
    this.updateSliderPosition(false);

    // Add window resize listener
    window.addEventListener("resize", () => this.handleResize());
  }

  handleResize() {
    this.slideWidth = this.hero.offsetWidth;
    this.updateSliderPosition(false); // Update position without transition
  }

  updateSliderPosition(applyTransition = true) {
    if (applyTransition) {
      this.slider.style.transition =
        "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
    } else {
      this.slider.style.transition = "none";
    }
    this.currentTranslate = -this.activeIndex * this.slideWidth;
    this.slider.style.transform = `translate3d(${this.currentTranslate}px, 0, 0)`;
    this.updateActiveSlide();
    this.handleVideoPlayback();
  }

  updateActiveSlide() {
    this.images.forEach((slide, index) => {
      if (index === this.activeIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
    this.updateNavigationButtons();
  }

  updateNavigationButtons() {
    if (this.prevButton) {
      if (this.activeIndex === 0) {
        this.prevButton.style.opacity = "0";
        this.prevButton.style.pointerEvents = "none";
      } else {
        this.prevButton.style.opacity = "1";
        this.prevButton.style.pointerEvents = "all";
      }
    }

    if (this.nextButton) {
      if (this.activeIndex === this.totalSlides - 1) {
        this.nextButton.style.opacity = "0";
        this.nextButton.style.pointerEvents = "none";
      } else {
        this.nextButton.style.opacity = "1";
        this.nextButton.style.pointerEvents = "all";
      }
    }
  }

  handleVideoPlayback() {
    // Pause all videos
    this.images.forEach((slide, index) => {
      const video = slide.querySelector("video");
      if (video) {
        if (index === this.activeIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }

  nextSlide() {
    if (this.activeIndex < this.totalSlides - 1) {
      this.activeIndex++;
      this.updateSliderPosition();
    } else {
      this.snapToSlide();
    }
  }

  prevSlide() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.updateSliderPosition();
    } else {
      this.snapToSlide();
    }
  }

  snapToSlide() {
    this.activeIndex = Math.round(
      Math.abs(this.currentTranslate) / this.slideWidth,
    );
    this.updateSliderPosition();
  }

  addTouchListener() {
    this.hero.addEventListener("touchstart", (e) => this.touchStartHandler(e));
    this.hero.addEventListener("touchmove", (e) => this.touchMoveHandler(e));
    this.hero.addEventListener("touchend", () => this.touchEndHandler());
  }

  touchStartHandler(e) {
    this.isTouching = true;
    this.swipeDirection = null;
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
    this.prevTranslate = this.currentTranslate;
    this.slider.style.transition = "none";
  }

  touchMoveHandler(e) {
    if (!this.isTouching) return;

    const touchCurrentX = e.touches[0].clientX;
    const touchCurrentY = e.touches[0].clientY;
    const diffX = touchCurrentX - this.touchStartX;
    const diffY = touchCurrentY - this.touchStartY;

    if (!this.swipeDirection) {
      if (
        Math.abs(diffX) > Math.abs(diffY) &&
        Math.abs(diffX) > this.directionThreshold
      ) {
        this.swipeDirection = "horizontal";
      } else if (
        Math.abs(diffY) > Math.abs(diffX) &&
        Math.abs(diffY) > this.directionThreshold
      ) {
        this.swipeDirection = "vertical";
      }
    }

    if (this.swipeDirection === "horizontal") {
      e.preventDefault();
      this.currentTranslate = this.prevTranslate + diffX;
      this.slider.style.transform = `translate3d(${this.currentTranslate}px, 0, 0)`;
    }
  }

  touchEndHandler() {
    if (!this.isTouching) return;
    this.isTouching = false;

    if (this.swipeDirection === "horizontal") {
      const moveThreshold = this.slideWidth / 4;

      if (this.currentTranslate - this.prevTranslate < -moveThreshold) {
        this.nextSlide();
      } else if (this.currentTranslate - this.prevTranslate > moveThreshold) {
        this.prevSlide();
      } else {
        this.snapToSlide();
      }
    }

    this.swipeDirection = null;
  }

  addButtonListeners() {
    if (this.nextButton) {
      this.nextButton.addEventListener("click", () => this.nextSlide());
    }
    if (this.prevButton) {
      this.prevButton.addEventListener("click", () => this.prevSlide());
    }
  }
}

// Initialize Hero for each `.hero` section
document.querySelectorAll("section.hero").forEach((hero) => {
  const heroSection = new Hero(hero);
  heroSection.init();
});
