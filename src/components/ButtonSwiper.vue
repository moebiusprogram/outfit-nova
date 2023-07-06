<template>
  <div class="alerts bg-white">
    <swiper :slidesPerView="'auto'" :spaceBetween="4" :modules="modules" :navigation="true" class="swiper-js">
      <swiper-slide v-for="(alert, i) in alerts" :key="i">
        <button class="btn btn-outline-secondary rounded-pill me-2" 
        style="font-weight:700; background:#F1F1F1; border:2px #BABABA solid;">
          {{alert.name}}
          <img :src="plus3" alt="" class="ms-2" v-if="alert.img_plus" style="width:10px;height:10px;">
        </button>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import AlertItem from "./AlertItem.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import plus3 from '../assets/plus3.svg';


export default {
  data() {
    return { 
      plus3 : plus3
    }
  },
  components: {
    AlertItem,
    Swiper,
    SwiperSlide,
  },
  props: ["title", "alerts"],
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  },
}
</script>
