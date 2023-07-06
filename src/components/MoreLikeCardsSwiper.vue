<template>
  <div class="alerts bg-white px-0">
    <swiper :slidesPerView="'auto'" :spaceBetween="4" :modules="modules" :navigation="true" class="swiper-js mx-0">
      <swiper-slide v-for="(alert, i) in alerts" :key="i">
        <div class="row ms-1 me-3 py-2" style="width: 330px;border:1px #E4E4E4 solid; border-radius:5px">
          <div class="col-4 d-flex justify-content-end align-items-end">
            <img :src="chollo4" alt="" style="width: 94px; height: 94px" />
            <span class="offer-grid-item-img-discount bg-black" style="bottom: 9px;left: 9px;">-35%</span>

          </div>
          <div
            class="col-8 small d-flex justify-content-end"
            style="color: #000; font-weight: 700; text-align: justify"
          >
          
            <div class="row">
              <div class="col-12 d-flex justify-content-end align-items-center">
                <img :src="like_black"  alt="" style="width: 11px; height: 11px"> 44
              </div>
              <div class="col-12 d-flex justify-content-end align-items-center">
                HOODIE ESSENTIAL BLACK
              </div>
              <div class="col-12 d-flex justify-content-end align-items-center">
                     <span class="px-1 me-1"  :style="'opacity: 80%; background:#C5E8F8; color:#288ED8; font-size:10px'">Deportes Outlet</span>
                     <span class="px-1 me-1"  :style="'opacity: 80%; background:#F1F1F1; color:#ABABAB; font-size:10px'">Essentials</span>
              </div>
              <div class="col-12 d-flex justify-content-end align-items-center pt-3
              ">
                
                <div class="offer-grid-item-body-prices  align-items-center ">
                  <span class="offer-grid-item-body-prices-price" style="color:#D02B32;font-size:14px">€ 120,99€</span>
                  <span class="offer-grid-item-body-prices-old-price" style="color:#A3A3A1;font-size:10px">€99,9€</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
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
import chollo4 from '../assets/chollo4.svg';
import pencil_edit from "../assets/pencil-edit.svg";
import like_black from "../assets/like_black.svg";


export default {
  data() {
    return {
      chollo4: chollo4,
      pencil_edit: pencil_edit,
      like_black: like_black,
    };
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
