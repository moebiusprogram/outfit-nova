<template>
  <nav aria-label="Calendar for top products">
    <swiper :slidesPerView="'auto'" :spaceBetween="4" class="calendar">
      <swiper-slide v-for="(day, i) in days" :key="i">
        <CalendarDay :day="day.day" :month="day.month" :key="i" :active="i === current" />
      </swiper-slide>
    </swiper>
  </nav>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import CalendarDay from './CalendarDay.vue';
// import "swiper/css";
export default {
  components: {
    CalendarDay,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      current: 5,
      days: [
        {
          day: 1,
          month: 'Julio'
        },
        {
          day: 1,
          month: 'Julio'
        },
        {
          day: 1,
          month: 'Julio'
        },
        {
          day: 1,
          month: 'Julio'
        },
        {
          day: 1,
          month: 'Julio'
        },
        {
          day: 1,
          month: 'Julio'
        },
        {
          day: 1,
          month: 'Julio'
        },
        {
          day: 1,
          month: 'Julio'
        },
      ],
    }
  },
}
</script>
