document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector(".navigate-left");
    const nextButton = document.querySelector(".navigate-right");
    const slider = document.querySelector(".projects-container");
    const slidesToShow = 1;
    const slideWidth = 800 + 272;
    let slideIndex = 0;

    prevButton.addEventListener("click", function() {
      slideLeft();
      updateButtonOpacity();
    });
    nextButton.addEventListener("click", function() {
      slideRight();
      updateButtonOpacity();
    });

    prevButton.classList.add("disable-button-cursor");
    nextButton.style.opacity = 1;

    function updateButtonOpacity() {
      const slides = Array.from(slider.children);
      if (slideIndex == 0) {
        prevButton.style.opacity = 0;
        prevButton.classList.add("disable-button-cursor");
      } else {
        prevButton.style.opacity = 1;
        prevButton.classList.remove("disable-button-cursor");
      }      
      if (slideIndex == slides.length - slidesToShow) {
        nextButton.style.opacity = 0;
        nextButton.classList.add("disable-button-cursor");
      } else {
        nextButton.style.opacity = 1;
        nextButton.classList.remove("disable-button-cursor");
      }
    }
  
    function updateSliderPosition(slider) {
      slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
  
    function slideRight() {
      const slides = Array.from(slider.children);
      if (slideIndex < slides.length - slidesToShow) {
        slideIndex++;
        updateSliderPosition(slider);
      }
    }
  
    function slideLeft() {
    	if (slideIndex > 0) {
        slideIndex--;
        updateSliderPosition(slider);
      }
    }
  });
  