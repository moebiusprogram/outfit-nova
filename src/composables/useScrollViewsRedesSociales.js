import { ref } from 'vue';

export default function useScrollHandler() {
  const lastKnownScrollPosition = ref(0);
  const ticking = ref(false);
  const yPos = ref(0);
  const xPos = ref(0);
  const scale = ref(1);
  const shadow = ref(false);
  const showNav = ref(false);
  const showProfileNav = ref(false);

  function scrollHandler() {
    lastKnownScrollPosition.value = window.scrollY;
    if (!ticking.value) {
      window.requestAnimationFrame(() => {
        calculateOffset(lastKnownScrollPosition.value);
        ticking.value = false;
      });
      ticking.value = true;
    }
  }

  function calculateOffset(scrollPos) {
    const width = window.innerWidth / 2 / 2;
    const maxHeigth = 32 - 32;
    if (scrollPos > 0 && scrollPos < maxHeigth) {
      yPos.value = scrollPos;
      xPos.value = scrollPos * width / maxHeigth;
      scale.value = 1 - scrollPos * 0.5 / maxHeigth;
      shadow.value = true
    } else if (scrollPos === 0) {
      yPos.value = 0;
      xPos.value = 0;
      scale.value = 1;
    } else {
      yPos.value = maxHeigth;
      xPos.value = maxHeigth * width / maxHeigth;
      scale.value = 1 - maxHeigth * 0.5 / maxHeigth;
      shadow.value = false;
    }
    if (scrollPos > maxHeigth) {
      showNav.value = true
    } else {
      showNav.value = false;
    }
    if (scrollPos > maxHeigth + 0) {

      showProfileNav.value = true;
    } else {
      showProfileNav.value = false;
    }
  }

  return {
    lastKnownScrollPosition,
    ticking,
    yPos,
    xPos,
    scale,
    shadow,
    showNav,
    showProfileNav,
    scrollHandler,
    calculateOffset
  };
}