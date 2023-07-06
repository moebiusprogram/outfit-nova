// useSlideBasic.js
import { ref, computed } from 'vue';

export default function useSlideBasic(dataSlideGeneral, slideContainerElement, touchSelector, resetSwiperSend) 
{
  const currentSlide = ref(0);
  const slideWidth = ref(window.innerWidth);
  const totalSlides = computed(() => dataSlideGeneral.length);
 
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
                                      
  const currentSlideData = computed(() => [dataSlideGeneral[currentSlide.value]]);
  console.log("CurrentSlideDataComposable", currentSlideData.value);


  const handleResize = () => {
    console.log("Entro en hanleResize #1");
        slideWidth.value = window.innerWidth;
  };

  const handleTouchStart = (event) => {
    console.log("Entro en hanleStart #2");
    startX = event.touches[0].clientX;
    isDragging = true;
  };

  const handleTouchMove = (event) => {
 
    if (!isDragging) return;
    currentX = event.touches[0].clientX;
    const diffX = startX - currentX;
    // Agrega aquí la lógica para actualizar la propiedad scrollLeft del contenedor de diapositivas
    slideContainerElement.scrollLeft = currentSlide.value * window.innerWidth + diffX;
  };

  const handleTouchEnd = () => {
    console.log("Entro en hanleend #4");
    isDragging = false;
    const diffX = startX - currentX;
    if (Math.abs(diffX) > window.innerWidth / 3) {
        console.log("currentSlideComposable:: ", currentSlide.value);
        console.log("totalSlideComposable:: ", totalSlides.value);
      if (diffX > 0 && currentSlide.value < totalSlides.value - 1) {
        currentSlide.value++;
        resetSwiperSend();
      } else if (diffX < 0 && currentSlide.value > 0) {
        currentSlide.value--;
        resetSwiperSend();
      }
    }
 
  };

  function init() {
    window.addEventListener("resize", handleResize);
    const touchElements = document.querySelectorAll(touchSelector);
    console.log("TOUCH", touchElements)
    touchElements.forEach((element) => {
    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchmove", handleTouchMove);
    element.addEventListener("touchend", handleTouchEnd);
    });
    }
   
    function destroy() {
    window.removeEventListener("resize", handleResize);
    const touchElements = document.querySelectorAll(touchSelector);
    touchElements.forEach((element) => {
    element.removeEventListener("touchstart", handleTouchStart);
    element.removeEventListener("touchmove", handleTouchMove);
    element.removeEventListener("touchend", handleTouchEnd);
    });
    }

  return {
    currentSlide,
    slideWidth,
    totalSlides,
    currentSlideData,
    handleResize,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    init,
    destroy,
  };
}