<template>
  <div class="slide-container" ref="slideContainer">
    <div class="slides-wrapper">
      <div
        class="slide"
        v-for="(itemDataSlideGeneral, index) in currentSlideData"
        :key="index"
        :style="{ width: `calc(${slideWidth}px)` }">
        <slot :itemDataSlideGeneral="itemDataSlideGeneral"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, toRefs, getCurrentInstance } from "vue";
import useSlideBasic from '../composables/useSlideBasic.js';
export default defineComponent({
  name: "Slide",
  props: {
    dataSlideGeneral: {
      type: Array,
      required: true,
    },
    touchSelector: {
      type: String,
      default: ".slide-container",
    },
  },
  setup(props) {
    const { dataSlideGeneral } = toRefs(props);
    const instance = getCurrentInstance();
    const slideContainerElement = ref(document.querySelector(".slide-container"));
    const { 
            currentSlide, 
            slideWidth, 
            totalSlides, 
            currentSlideData,
            init,
            destroy,
          } = useSlideBasic(dataSlideGeneral, slideContainerElement, props.touchSelector);

    function resetSwiper() {
      instance.ctx.$parent.$refs.imagesSlides.resetSwiper();
    }

    onMounted(() => {
      init();
    });

    onUnmounted(() => {
      destroy();
    });

    return {
      dataSlideGeneral,
      currentSlide,
      currentSlideData,
      slideWidth,
      totalSlides,
      resetSwiper
        };
  },
});
</script>

<style lang="scss" scoped>
.slide-container {
  background: none !important;
  display: flex;
}

.slides-wrapper {
  display: flex;
}

/* Agrega aquí cualquier estilo necesario */
</style>
