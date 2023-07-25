document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
    const slidesToShow = 3;
    const slideWidth = 200;
  
    const slides = slider.children;
  
    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    function slideNext() {
      if (currentIndex < slides.length - slidesToShow) {
        currentIndex++;
        updateSliderPosition();
      }
    }
  
    function slidePrev() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    }
  
    prevBtn.addEventListener('click', slidePrev);
    nextBtn.addEventListener('click', slideNext);
  });
  