<template>
  <div class="alerts" style="background:transparent !important">
    <swiper :slidesPerView="'auto'" :spaceBetween="4" :modules="modules" :navigation="false" class="swiper-js">
      <swiper-slide v-for="(alert, i) in alerts" :key="i">
        <button :class="{'selected':offers==alert.name,'notselected':offers!=alert.name}" @click="offers=alert.name" class="btn me-2" style="border-radius:0px;height:30px">
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
      plus3 : plus3,
      offers : 'Todos'
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
<style>
.notselected{
  background: #EEEEEE !important;
  border : 0px !important;
  color : #BBBBBB !important;
  font-weight: 500 !important;
  font-size: 12px !important;
}
.selected{
  font-size: 12px !important;
  background: #FFFFFF !important;
  border: 1px solid #000000 !important;
  color : #000 !important;
  font-weight: 700 !important;
}
.swiper{
      padding-bottom: 0 !important;
          margin-bottom: 0 !important;
}
</style>