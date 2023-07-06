<template>

  <swiper
    :slides-per-view="2"
    :space-between="5"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >

    <swiper-slide
      v-for="(slideContent, index) in slides"
      :key="index"
      :virtualIndex="index"
      style="margin-left:10px"
      >
      <SwiperHomeProduct :details="slideContent" />  
    </swiper-slide>


    <swiper-slide>
    
    </swiper-slide> 
     
    
  </swiper>

</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperHomeProduct from './SwiperHomeProduct.vue';
export default {
    components: {
      Swiper,
      SwiperSlide,
      SwiperHomeProduct,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  props: ["slides"],
  data() {
    return { 
    }
  },
  mounted() { 
  },
  methods: {
    
  },
};
</script>

<style>

</style>
