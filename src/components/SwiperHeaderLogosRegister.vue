<template>

  <swiper
    :slides-per-view="6"
    @swiper="onSwiper"
    :loopFillGroupWithBlank="false"
    @slideChange="onSlideChange"
    :spaceBetween="0"
    :loop="loop"
    :autoplay="autoplay" 
  >

    <swiper-slide
      v-for="(slideContent, index) in slides"
      :key="index"
      :virtualIndex="index"
      >
      <img :src="slideContent" alt="brands" style="width:25px;height:25px;">
    </swiper-slide>
    <swiper-slide>
    </swiper-slide> 
  </swiper>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperHomeProduct from './SwiperHomeProduct.vue';
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper"

SwiperCore.use([EffectCube, Pagination, Autoplay])


import logo1 from '../assets/logos/logo1.svg';
import logo2 from '../assets/logos/logo2.svg';
import logo3 from '../assets/logos/logo3.svg';
import logo4 from '../assets/logos/logo4.svg';
import logo5 from '../assets/logos/logo5.svg';
import logo6 from '../assets/logos/logo6.svg';
import logo7 from '../assets/logos/logo7.svg';
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
   data() {
    return { 
      logo1 : logo1,
      logo2 : logo2,
      logo3 : logo3,
      logo4 : logo4,
      logo5 : logo5,
      logo6 : logo6,
      logo7 : logo7,
      slides: [logo1,logo2,logo3,logo4,logo5,logo6,logo7],
 
      
      effect: 'cube',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoplay: {
        delay: 500,
        disableOnInteraction: true
      },

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
