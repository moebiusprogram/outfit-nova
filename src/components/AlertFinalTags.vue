<template>
  <div class="alert-final-tag" style="margin-bottom: 1.5em">
      <h2 style="font-weight: 500;font-size: 12px;">
    {{ name }}:
  </h2>
  <swiper :slidesPerView="'auto'" :spaceBetween="6" :modules="modules" class="swiper-js">
    <swiper-slide v-for="(elem, i) in load" :key="i" style="width:auto;">
      <AlertTag :name="elem" style="width:max-content;" @deleteTag="deleteTag"/>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import AlertTag from '../components/AlertTag.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: 'AlertFinalTags',
  components: {
    AlertTag,
    Swiper,
    SwiperSlide
  },
  props: {
    name: String,
    load: Array
  },
   methods: {
    deleteTag(tag) {
      this.$emit('deleteTag', tag)
    }
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style scoped>
.swiper-button-prev{
  display: none;
}
</style>