document.addEventListener('DOMContentLoaded', function() {
    const prevButtons = document.querySelectorAll(".prev-btn");
    const nextButtons = document.querySelectorAll(".next-btn");
    const sliders = document.querySelectorAll(".slider");
    const carouselRect = document.querySelector('.carousel').getBoundingClientRect();
    const slidesToShow = 3;
    const slideWidth = 213.2 + 46.2;
    let currentIndex = 0;

    for (let i = 0; i < sliders.length; i++) {
      prevButtons[i].addEventListener("click", function() {
        slideLeft(sliders[i]);
      });
      nextButtons[i].addEventListener("click", function() {
        slideRight(sliders[i]);
      });
    }

    for (let i = 0; i < sliders.length; i++) {
      const initialPortal = Array.from(sliders[i].children);
      initialPortal.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        if (elementRect.left < carouselRect.left - 1 || elementRect.right > carouselRect.right + 1) {
          element.style.opacity = 0;
        } else {
          element.style.opacity = 1;
        }
      });
    }
  
    function updateSliderPosition(slider) {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    function slideRight(slider) {
      const slides = Array.from(slider.children);
      if (currentIndex < slides.length - slidesToShow) {
        currentIndex++;
        updateSliderPosition(slider);
        slidePortals(-slideWidth, slider);
      }
    }
  
    function slideLeft(slider) {
    	if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition(slider);
        slidePortals(slideWidth, slider);
      }
    }

    function slidePortals(distance, slider) {
      const slides = Array.from(slider.children);
      slides.forEach(element => {
          const elementRect = element.getBoundingClientRect();
          if (elementRect.left + distance < carouselRect.left - 1 || elementRect.right + distance > carouselRect.right + 1) {
            element.style.opacity = 0;
          } else {
            element.style.opacity = 1;
          }
      });
    }
  });
  