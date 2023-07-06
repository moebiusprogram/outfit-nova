import { ref } from 'vue';

export default function useScrollHandler() {
  const lastKnownScrollPosition = ref(0);
  const ticking = ref(false);
  const showNav = ref(true);
  const yPos = ref(0);
  const xPos = ref(0);
  const scale = ref(1);
  const showBrandNav = ref(true);
  const showProfileNav = ref(false);

  const scrollHandler = () => {
    lastKnownScrollPosition.value = window.scrollY;

    if (!ticking.value) {
      window.requestAnimationFrame(() => {
        calculateOffset(lastKnownScrollPosition.value);
        ticking.value = false;
      });
      ticking.value = true;
    }
  }

  const calculateOffset = (scrollPos) => {
    const width = window.innerWidth / 2 / 2;
    const maxHeigth = 32 - 32;

    if (scrollPos > 10) {
      showNav.value = false;
    } else {
      showNav.value = true;
    }

    if (scrollPos > 0 && scrollPos < maxHeigth) {
      yPos.value = scrollPos;
      xPos.value = scrollPos * width / maxHeigth;
      scale.value = 1 - scrollPos * 0.5 / maxHeigth;
    } else if (scrollPos === 0) {
      yPos.value = 0;
      xPos.value = 0;
      scale.value = 1;
    } else {
      yPos.value = maxHeigth;
      xPos.value = maxHeigth * width / maxHeigth;
      scale.value = 1 - maxHeigth * 0.5 / maxHeigth;
    }

    if (scrollPos > maxHeigth) {
      showNav.value = false;
    } else {
      showNav.value = true;
    }

    if (scrollPos > maxHeigth + 74) {
      showBrandNav.value = true;
    } else {
      showBrandNav.value = false;
    }

    if (scrollPos > maxHeigth + 140) {
      showProfileNav.value = true;
    } else {
      showProfileNav.value = false;
    }
  }

  return {
    lastKnownScrollPosition,
    ticking,
    showNav,
    yPos,
    xPos,
    scale,
    showBrandNav,
    showProfileNav,
    scrollHandler,
    calculateOffset
  };
}
