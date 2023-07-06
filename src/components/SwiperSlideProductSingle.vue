<template>
  <div>
    <section class="">
      <nav class="w-100 my-0" style="position:relative; ">
        <div class="navigation-absolute">
          <div class="d-flex direction_arrows ">
            <button class="btn_arrow" @click="prev">
              <LeftArrow />
            </button>
          </div>
        </div>
        <swiper :slidesPerView="1" @swiper="onSwiper" class="p-0 m-0 d-flex" style=" width:406px; background:white; ">
          <swiper-slide v-for="(item, index) in singleproducts" :key="index" style="width:406px; " class="p-0 m-0">
            <div class="slide-items-product p-0 m-0" style="width:404px;">
              <CardSwiperProductSingle :products_offers="item" :index="index" />
            </div>
          </swiper-slide>
        </swiper>

        <div class="navigation-absolute-right ">
          <div class="d-flex direction_arrows " style="">
            <button class="btn_arrow" style="" @click="next">
              <RightArrow />
            </button>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
// Json organizados
import { products } from "../products";
import { singleproducts } from "../singleproducts";
// Componentes
import { Swiper, SwiperSlide } from "swiper/vue";
import RightArrow from "../components/svg/rightArrow.vue";
import LeftArrow from "../components/svg/leftArrow.vue";
import CardSwiperProductSingle from "../components/CardSwiperProductSingle.vue"
export default {
  components: {
    Swiper,
    LeftArrow,
    RightArrow,
    SwiperSlide,
    CardSwiperProductSingle
  },
  setup() {
    const swiper = ref(null);

    const onSwiper = (swiperInstance) => {
      swiper.value = swiperInstance;
    };

    const prev = () => {
      swiper.value.slidePrev();
    };

    const next = () => {
      swiper.value.slideNext();
    };

    return {
      onSwiper,
      prev,
      next,
      products,
      singleproducts
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-absolute {
  position: absolute;
  z-index: 1000;
  top: 47%;
  left: 6%
}

.slide-items-product {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-wrapper {
  margin: 0px !important;
  padding: 0px !important;
}

.btn_arrow {
  padding: 0px;
  border: #ebebeb;
  width: 20px;
  height: 20px;
  padding: 1px;
  background: none;
}

.navigation-absolute-right {
  position: absolute;
  z-index: 1000;
  top: 47%;
  right: 6%
}
</style>