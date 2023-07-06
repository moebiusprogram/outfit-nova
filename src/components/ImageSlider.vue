<template>
  <figure
    :style="{ height: `${height - 81}px` }"
    ref="imageWrapper"
    class="image-wrapper"
    id="component-images-slider"
  >
    <Swiper
      :slides="imageslide"
      ref="swiper"
      @NavBarBlack="NavBarBlack"
      :agotado="agotado"
    />

    <span
      :style="{ backgroundColor: color }"
      :class="{ label: true, withOffer: offer, 'mb-10': offer_start }"
    >
      {{ label.name }}
    </span>

    <div v-for="(element, index) in products" :key="index">
      <BarraTimer v-if="index == 0" :products_offers="element" />
    </div>

    <div class="iconos_top_right">
      <IconoMedalla width="22" height="22" />
      <IconoAlerta width="22" height="22" class="mt-0" />
      <IconoTijera width="22" height="22" />
    </div>

    <span :class="{ 'mb-5 pb-4': offer_end }" style="" class="imagen-slider-container">
      <div class="row">
        <div class="col-12 py-2 d-flex justify-content-center">
          <div class="text-center">
            <img :src="shipper" alt="" style="width: 35px; height: 35px" />
            <img
              :src="plusTop"
              alt=""
              style="width: 15px; height: 15px; position: absolute; top: 15px; right: 5px"
            />
          </div>
        </div>
        <div class="col-12 py-2">
          <div class="text-center">
            <svgLike :color="colorIconLike" size="25" @click="toggleLike"></svgLike>
            <div :style="'font-size: 8px;color:' + colorIcon">{{ likeCount }}</div>
          </div>
        </div>
        <div class="col-12 py-2">
          <div class="text-center">
            <svgComments :color="colorIcon" size="25"></svgComments>
            <div :style="'font-size: 8px;color:' + colorIcon">2046</div>
          </div>
        </div>
        <div class="col-12 py-2">
          <div class="text-center">
            <svgDelivery :color="colorIcon" size="35"></svgDelivery>
            <div :style="'font-size: 8px;color:' + colorIcon">Info envío</div>
          </div>
        </div>
        <div class="col-12 py-2">
          <div class="text-center">
            <img :src="wsp" alt="" style="width: 30px; height: 30px" /><br />
            <div :style="'font-size: 8px;color:' + colorIcon">Compartir</div>
          </div>
        </div>
        <div class="col-12 py-2">
          <div class="text-center">
            <svgMore :color="colorIcon" size="30"></svgMore>
          </div>
        </div>
      </div>
    </span>
    <div v-if="bool" class="gray-screen"></div>
  </figure>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import Swiper from "./Swiper.vue";
import BarraTimer from "../components/CardProducts/BarraTimer.vue";
import IconoMedalla from "./svg/medalla.vue";
import IconoTijera from "./svg/IconoTijera.vue";
import IconoAlerta from "./svg/alerta.vue";
import image_pe from "../assets/rectangle-2.png";
import image from "../assets/zara.jpg";
import zara11 from "../assets/zara11.png";
import zara1 from "../assets/zara1.png";
import women1 from "../assets/single-product/soliver-zapatilla-natural-running-mujer-zalando.webp";
import women2 from "../assets/single-product/soliver-zapatilla-natural-running-mujer.webp";
import women3 from "../assets/single-product/soliver-zapatilla-natural-running-mujer-rebaja.webp";
import like from "../assets/like_black.svg";
import delivery from "../assets/delivery.svg";
import wsp from "../assets/wsp.svg";
import comments from "../assets/comments2.svg";
import ImgHexa from "../components/ImgHexa.vue";
import mujer_hex from "../assets/mujer-hex.svg";
import more from "../assets/more.svg";
import shipper from "../assets/shipper.png";
import svgLike from "../components/svg/like.vue";
import svgComments from "../components/svg/comments.vue";
import svgDelivery from "../components/svg/delivery.vue";
import svgMore from "../components/svg/more.vue";
import plusTop from "../assets/plus-top.svg";

export default defineComponent({
  components: {
    BarraTimer,
    Swiper,
    ImgHexa,
    svgLike,
    svgComments,
    svgDelivery,
    svgMore,
    IconoMedalla,
    IconoTijera,
    IconoAlerta,
  },

  props: {
    products: {
      type: Object,
      required: true,
    },
    imageslide: {
      type: Array,
      default: () => [],
    },
    label: Object,
    date: String,
    color: String,
    bool: Boolean,
    offer: String,
    agotado: Boolean,
    offer_end: Boolean,
    offer_start: Boolean,
  },
  setup(props, { emit }) {
    const height = ref(null);
    const colorIcon = ref("black");
    const isLiked = ref(false);
    const likeCount = ref(19455);
    const colorIconLike = ref("#222222");

    function toggleLike() {
      if (isLiked.value) {
        likeCount.value--;
        colorIconLike.value = "#222222";
      } else {
        likeCount.value++;
        colorIconLike.value = "#CA052A  ";
      }
      isLiked.value = !isLiked.value;
    }

    const swiper = ref(null);

    function NavBarBlack(data) {
      emit("NavBarBlack", data);
      colorIcon.value = data ? "white" : "black";
      colorIconLike.value = data ? "white" : "black";
    }

    onMounted(() => {
      console.log("si entreo en el slideImages: " + window.innerHeight);
      height.value = window.innerHeight - 195;
      console.log("HEIGHT: " + height.value);
      emit("setHeight", height.value);
      let element = document.getElementById("component-images-slider");
      console.log("como: " + element);
      if (element) {
        element.setAttribute("style", "position: fixed !important;", "z-index: -1;");
      }
    });

    function resetSwiperSlide() {
      alert("ingresp en magesslidesss");
      swiper.value.reset();
    }

    return {
      slides: [women1, women2, women3, image, zara11, zara1],
      height,
      image_pe,
      like,
      comments,
      delivery,
      wsp,
      mujer_hex,
      more,
      shipper,
      swiper,
      plusTop,
      colorIcon,
      toggleLike,
      resetSwiperSlide,
      likeCount,
      NavBarBlack,
      colorIconLike,
    };
  },
});
</script>
<style lang="scss" scoped>
.mb-10 {
  margin-bottom: 5rem !important;
}

.imagen-slider-container {
  background-color: transparent;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  right: 5px;
  width: 55px;
  height: auto;
  font-size: 12px;
  z-index: 2;
  position: absolute;
  padding: 3px;
  border-radius: 8px;
  bottom: 30px;
  flex-direction: column;
}

.iconos_top_right {
  position: absolute;
  right: 5px;
  top: 3px;
  margin: 2px;
  display: inline-flex;
  gap: 5px;
  justify-content: center;
}
</style>
