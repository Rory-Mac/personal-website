document.addEventListener('DOMContentLoaded', function() {
    const prevButtons = document.querySelectorAll(".navigate-left");
    const nextButtons = document.querySelectorAll(".navigate-right");
    const sliders = document.querySelectorAll(".slider");
    const slidesToShow = 3;
    const slideWidth = 213.2 + 29.2;

    for (let i = 0; i < sliders.length; i++) {
      sliders[i].currentIndex = 0;
      prevButtons[i].addEventListener("click", function() {
        slideLeft(sliders[i]);
        updateButtonOpacity(i);
      });
      nextButtons[i].addEventListener("click", function() {
        slideRight(sliders[i]);
        updateButtonOpacity(i);
      });
      prevButtons[i].classList.add("disable-button-cursor");
      nextButtons[i].style.opacity = 1;
    }

    function updateButtonOpacity(i) {
      const slides = Array.from(sliders[i].children);
      if (sliders[i].currentIndex == 0) {
        prevButtons[i].style.opacity = 0;
        prevButtons[i].classList.add("disable-button-cursor");
      } else {
        prevButtons[i].style.opacity = 1;
        prevButtons[i].classList.remove("disable-button-cursor");
      }      
      if (sliders[i].currentIndex == slides.length - slidesToShow) {
        nextButtons[i].style.opacity = 0;
        nextButtons[i].classList.add("disable-button-cursor");
      } else {
        nextButtons[i].style.opacity = 1;
        nextButtons[i].classList.remove("disable-button-cursor");
      }
    }
  
    function updateSliderPosition(slider) {
      slider.style.transform = `translateX(-${slider.currentIndex * slideWidth}px)`;
    }
  
    function slideRight(slider) {
      const slides = Array.from(slider.children);
      if (slider.currentIndex < slides.length - slidesToShow) {
        slider.currentIndex++;
        updateSliderPosition(slider);
      }
    }
  
    function slideLeft(slider) {
    	if (slider.currentIndex > 0) {
        slider.currentIndex--;
        updateSliderPosition(slider);
      }
    }
  });
  