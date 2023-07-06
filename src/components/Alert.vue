<template>
  <div class="alerts">
    <div class="bell"><img src="../assets/notification.svg" alt="notification"></div>
    <h3>Establece una alerta en</h3>
    <swiper :slidesPerView="'auto'" :spaceBetween="4" :modules="modules" :navigation="true" class="swiper-js">
      <swiper-slide v-for="(alert, i) in alerts" :key="i">
        <AlertItem :title="alert" :key="i" />
      </swiper-slide>
    </swiper>
    <button class=" btn-transparent" type="button">
      <img src="../assets/settings.svg" alt="settings">
      <span>
        Administrar alertas
      </span>
    </button>
  </div>
</template>

<script>
import AlertItem from "./AlertItem.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default {
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
