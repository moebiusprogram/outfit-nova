import {  ref } from 'vue';

export default function useScrollHandler(heightScroll) {
  const scroll = ref(0);
  const translateScroll = ref(0);
  const path = ref(100);
  const showMenuScroll = ref(false);
  const lastKnownScrollPosition = ref(0);
  const ticking = ref(false);
 
  const calculateOffset = (scrollPos) => {
    if (scrollPos > 0) {
      scroll.value = scrollPos;
    } else {
      scroll.value = 0;
    }

    if (scrollPos > heightScroll.value / 2) {
      translateScroll.value = heightScroll.value / 2 - scroll.value;
    } else {
      translateScroll.value = 0;
    }

    if (scrollPos > heightScroll.value - 56) {
      path.value = 0;
    } else {
      path.value = 100;
    }

    if (scrollPos > heightScroll.value + 31) {
      showMenuScroll.value = true;
    } else {
      showMenuScroll.value = false;
    }
  };

  const scrollHandler = () => {
    lastKnownScrollPosition.value = window.scrollY;

    if (!ticking.value) {
      window.requestAnimationFrame(() => {
        calculateOffset(lastKnownScrollPosition.value);
        ticking.value = false;
      });

      ticking.value = true;
    }
  };



  return { scroll, translateScroll, path, showMenuScroll, ticking, scrollHandler };
}