<template>
  <section :style="{ marginTop: `${heightSet-40}px` }"
  id="component-text-slider"
  style="z-index:2 !important;"
  >
    <div class="row-container">
      <div class="col-4-container">
        <span class="oferta-text">Oferta</span>
        <div class="promotion-prices">
          <span class="promotion-old-price">-40%</span>
        </div>
      </div>
      <div class="col-8-container">
        <span class="termina-text">Termina en:</span>
        <img class="mx-1" :src="oferta_dias" alt="brand" />
        <img class="mx-1" :src="oferta_horas" alt="brand" />
        <img class="mx-1" :src="oferta_segundos" alt="brand" />
      </div>
    </div>
 
    <!-- <SwiperSliderProductSingle/> -->
    <section class="price pb-2" id="toolbarChat" :class="{ price_2: offer_end }"
    style="  "
    >
      <figure>
        <img src="../assets/vans.svg" alt="brand" />
      </figure>
      <!-- <p v-if="sizes.some(mySizes)">Tu talla disponible</p>
    <p v-else>Tu talla no disponible</p> -->
    <p class="helper" >
        Tu talla disponible
        <img src="../assets/question-circle.svg" alt="helper icon">
      </p>
      <div class="price-tags  " style=" justify-content: center; align-items: center;">
     
        <nav class="w-100 my-0 nav-container-slide" style="position:relative; ">
          <swiper :slidesPerView="4" :spaceBetween="3" :modules="modules" @swiper="onSwiper" :navigation="false"
            class="swiper-js" style="overflow:hidden; width:100%;     margin-left: -4px;">
            <swiper-slide v-for="(euShoeSize, index) in priceProductData[0].euShoeSizes" :key="index" class="swiper-slide-activado"
              @click="activateSlide(index)">
              <SizeTag :size="euShoeSize" :class="{ 'size-tag-selected': activeIndex === index }" />
            </swiper-slide>
          </swiper>

          <!-- Flecha -->
          <div class="navigation-absolute-right ">
            <div class="d-flex direction_arrows ms-2 ps-2" style="">
              <button class="btn_arrow" style="" @click="next">
                <svg width="7" height="10" class="arrow_right mb-2 " viewBox="0 0 8 14"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
                    fill="#b9bbc2" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <Coupon title="EXTRA 30" />
      </div>
    
      <article class="p-0 m-0 pt-1  container-price-btn" >
        <PriceGroup :price="priceProductData[0].price" :discountPorcent="0" style="margin-left:0px;" />
        <PrimaryButton type="button" class="primary-button-single">
          COMPRAR EN DEPORTES OUTLET
        </PrimaryButton>
      </article>
    </section>
    <section class="bg-white">
      <div class="mb-lg-3 pt-2 pb-2 pt-lg-0 flex align-center px-0 px-lg-0" style="">
          <div class="flex flex-wrap filtros-activos d-flex">
            <div class="fw-bold mr-1 text-category pt-0.2 text-nowrap">Categorias:</div>
            <div
              v-for="(filter, index) in priceProductData[0].filters"
              :key="filter.id"
              :class="(index > 1) ? 'btn_icon' : ''"
              class="badged-filtro-select">
              <div class="pt-0.2" v-if="filter.text">{{ filter.text }}</div>
              <img 
               v-if="filter.src" 
              :src="filter.src" alt="">
            </div>
          </div>
        </div>
    </section>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import SwiperSliderProductSingle from "../components/SwiperSlideProductSingle.vue"
import PopularityTag from "./PopularityTag.vue";
import WarningTag from '../components/WarningTag.vue';
import SizeTag from '../components/SizeTag.vue';
import PriceGroup from '../components/PriceGroup.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import Coupon from '../components/Coupon.vue';
import oferta_dias from "../assets/oferta_dias.svg";
import oferta_horas from "../assets/oferta_horas.svg";
import oferta_segundos from "../assets/oferta_segundos.svg";
import AppTimer from '../components/AppTimer.vue';
import imgrrss from '../assets/single-product/rrss.svg'
import imgcompartir from '../assets/single-product/compartir.svg'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    SwiperSliderProductSingle,
    PopularityTag,
    SizeTag,
    WarningTag,
    PriceGroup,
    PrimaryButton,
    Coupon,
    AppTimer,
    Swiper,
    SwiperSlide
  },
  props: {
    priceProductData: {
    type: Array,
    default: () => []
    },
    // euShoeSizes: {
    //   type: Array,
    //   default: () => ["EU 44", "EU 41", "EU 41.5", "EU 42", "EU 44", "EU 45"]
    // },
    height: {
      type: String
    },
    offer_end: {
      type: Boolean
    }
  },
  setup(props) {
    const filters = ref([
      { id: 1, text: "Vertidos de manga corta", type: "type-1", src:null },
      { id: 2, text: "Zapatillas bajas", type: "type-1", src: null },
      { id: 3, text: null, type: "type-1", type: "type-1", src:imgrrss },
      { id: 3, text: null, type: "type-1", type: "type-1", src:imgcompartir },
    ]);
    const activeIndex = ref(null);
    const activateSlide = (index) => {
      activeIndex.value = index;
    }
    const product = props.priceProductData;
    const euShoeSizes = product.euShoeSizes;
    const offer_end = product.offer_end;
    const filteres = product.filters;
    const price = product.price;
    const discountPorcent = product.discountPorcent;
    onMounted(() => {
  
  let element = document.getElementById('component-text-slider');
  console.log("como: " + element)
  if (element) {
    element.setAttribute('style', 'position: relative !important;', 'z-index: 1000 !important;');
  }
}); 
    return {
      euShoeSizes,
      offer_end: props.offer_end,
      filteres,
      price,
      discountPorcent,
      imgrrss,
      imgcompartir,
      activeIndex,
      activateSlide,
      filters,
      modules: [Pagination, Navigation]
    }
  },

  data() {
    return {
      oferta_dias: oferta_dias,
      oferta_horas: oferta_horas,
      oferta_segundos: oferta_segundos,
      swiper: null,
      timeElapsed: 0,
      timerInterval: undefined,
      timeLimit: 10,
    
    }
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        // Stop counting when there is no more time left
        if (++this.timeElapsed === this.timeLimit) {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },


    onSwiper(swiper) {
      this.swiper = swiper;
    },

    prev() {
      this.swiper.slidePrev()
    },

    next() {
      this.swiper.slideNext();
    },
  },
  // Start timer immediately
  mounted() {
    this.startTimer();
  },

  computed: {
    heightSet() {
      var height = this.height;
      var offer_end = this.offer_end;
      if (offer_end) {
        return height - 60;
      } else {
        return height;
      }
    },

  },
}
</script>

<style lang="scss" scoped>

.img-portada-preci
{
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 12px 24px 12px;
  height: auto;
  border-radius: 8px 8px 0 0;
  gap: 7.25px;
  position: relative;

  .price-tags {
    .swiper-button-next{
      right: 0px !important;
     
    }
  
}
}
.container-price-btn{
  display: flex;
    justify-content: space-between;
}
.container_preci{
  background:white;
  position:relative;
}
.btn_icon{
  width:24px !important;
  height:24px !important;
}
.filtros-activos{
  width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
    align-content: center;
}
.text-category{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 12px;

color: #6B6B6B;
}
.badged-filtro-select{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 6px;
background: #EEEEEE;
border-radius: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 12px;
text-align: center;

color: #626262;
}
.primary-button-single {
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 33px;
gap: 10px;
border:none;
border-radius: none !important;
width: 270px;
height: 45px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;

color: #FFFFFF;


/* BLACK COLOR */

background: #000000;
}

.navigation-absolute-right {
  margin-left: 0px;
  position: absolute;
  top: -2px;
  right: 32px;
}

.arrow_right {
  transform: rotate(180Deg);
}

.nav-container-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn_arrow {
  padding: 0px;
  border: #ebebeb;
  width: 20px;
  height: 20px;
  padding: 1px;
  background: #fff;
}

.activado {
  /* Agrega aquí los estilos para el elemento activado */
  background: #03E5B6;
  border-radius: 2px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;

  color: #000000;
}

.swiper-js {
  .swiper-slide-activado:first-child {
    margin-right: 3px;
  }
}

.swiper-slide-activado {
  margin-right: 0px !important;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.swiper.swiper-js {
  width: 50vw !important;
  transform: translateX(0px);
}

.swiper-button-next {
  right: 0px !important;
}

.row-container {
  display: none;
  margin-top: -15px;
  border-radius: 15px 15px 0px 0px !important;
  margin-left: 0.25px !important;
  margin-right: 0.25px !important;
  height: 74px;
  background: linear-gradient(90deg,
      #ee6338 0%,
      #6631ff 58.88%,
      #3a36ff 100%);
}

.col-4-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.oferta-text {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  line-height: 17px;
}

.promotion-old-price {
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #fff;
  width: 50px;
  height: 24px;
  font-size: 12px;
  font-weight: 700;
  margin-left: 10px;

}

.col-8-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;

}

.termina-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #FFFFFF;

}
</style>