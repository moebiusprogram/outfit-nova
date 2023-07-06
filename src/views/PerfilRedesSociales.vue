<template>
  <section class="bg-white">
    <section class="tienda">
      <ProfileHeader />
      <ProfileNav
        class="profile_nav"
        :onbarra="false"
        :loppActivo="true"
        :onbackground="true"
        :tabs="name_tabs"
        :name_icono="name_iconos"
        :colores_icon="colores_icons"
        :controllerSlideFirst="secondSwiper"
        :bloquear_animation="active_animation"
        :changeSlideMain="changeSlideMainCount"
        :style="{ position: showProfileNav ? 'fixed' : '' }"
        :slide_count="secondSwiper ? secondSwiper.realIndex : 0"
        @changeView="changeView"
        @SlidechangeNavController="recibiendoControllerNav"
        @ClickSlideAlertaNotification="recibiendoAlertaNotification"
      />

      <swiper
        class="m-0 p-0"
        :loop="true"
        :touchRatio="1"
        :spaceBetween="0"
        :slidesPerView="1"
        :simulateTouch="true"
        :modules="[Controller]"
        :controller="{ control: controllerEmitValueNav }"
        :allowTouchMove="BloquedtouchActiveSlideTallas"
        :slideChange="cambiandoSlides()"
        @swiper="setSecondSwiper"
        @click="ActivartouchSlide"
        @slideChange="changeSlideMain"
        @touchstart="ActivartouchSlide, (BloquedtouchActiveSlideTallas = true)"
      >
        <template v-for="(vistas, index) in 6" :key="index">
          <swiper-slide>
            <SwiperHomeOfferts
              :products="products"
              :alertaEmitNotification="onAlertaNotification"
              @bloquearSwiperSlideMainProducts="getEmitBloquearSwiper"
            />
            <!-- Skeleton card funcional -->
            <div class="row mx-0 d-flex px-0">
              <template v-for="(item, index) in products" :key="index">
                <div
                  class="col-6 d-grid mx-0 px-0 d-flex justify-content-between flex-column"
                  :class="{ 'pe-1': index % 2 == 0, 'ps-1': index % 2 != 0 }"
                ></div>
              </template>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </section>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Controller } from "swiper";
import { ref, onMounted, onUnmounted } from "vue";
import { products } from "../products";
// Composable
import useScrollHandler from "../composables/useScrollViewsRedesSociales";
import ProfileHeader from "../components/HeaderPerfilRedesSociales.vue";
import ProfileNav from "../components/ProfileNav.vue";
import SwiperHomeOfferts from "../components/SwiperHomeOfferts.vue";
import Menubar from "../components/Menubar.vue";
import ButtonFloatingSetting from "../components/ButtonFloatingSetting.vue";

export default {
  name: "ProfileNew",
  components: {
    ProfileHeader,
    SwiperHomeOfferts,
    Swiper,
    SwiperSlide,
    ProfileNav,
    Menubar,
    ButtonFloatingSetting,
  },
  setup() {
    const secondSwiper = ref(null);

    const setSecondSwiper = (swiper) => {
      secondSwiper.value = swiper;
    };

    // Aqui traigo toda la info del composable useScroll
    const { showProfileNav, scrollHandler } = useScrollHandler();

    onMounted(() => {
      window.addEventListener("scroll", scrollHandler);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollHandler);
    });

    return {
      Controller,
      setSecondSwiper,
      scrollHandler,
      secondSwiper,
      showProfileNav,
      products,
    };
  },
  data() {
    return {
      datoAlertaNotification: 0,
      onAlertaNotification: false,
      BloquedtouchActiveSlideTallas: true,
      BloquedtouchtouchRatio: 1,
      swiper: 0,
      swipervalue: 0,
      changeSlideMainCount: false,
      active_animation: false,
      controllerEmitValueNav: {},
      ShowSelectiontienda: false,
      isLoaded: false,
      selectedProducts: [],
      showMenu: true,
      views: 795,
      slideview: 0,
      color_tab: "black",
      view: "0",
      logos_redes: [
        "logo_youtube",
        "logo_instagram",
        "logo_twitter",
        "logo_facebook",
        "logo_tiktok",
      ],
      name_tabs: [
        "Actividad",
        "Ofertas publicadas",
        "12 Seguidores",
        "Tus alertas",
        "Mas Comentadas",
        "Mis favoritos",
      ],
      name_iconos: [
        "IconoActivityMinimalista",
        "IconoFire",
        "",
        "IconoCommentPurple",
        "IconoStart",
        "IconoAlerta",
      ],
      colores_icons: ["#13AB3F", "#ff8f8f", "#F0A410", "#BB6CFF", "#747474", "#00AB5C"],
      tienda_icon: ["start", "fire", "diamante", "start", "fire", "diamante"],
      profile_info:
        "Hola, me encantan las zapatillas y los chollos,intentaré publicar mucho contenido de ofertas de zapatillas, asi que sígueme :).",
    };
  },

  methods: {
    recibiendoAlertaNotification(recibiendoAlertaNotify) {
      this.datoAlertaNotification = recibiendoAlertaNotify;
      if (this.datoAlertaNotification == 3) {
        return (this.onAlertaNotification = true);
      } else {
        return (this.onAlertaNotification = false);
      }
    },
    recibiendoControllerNav(recibido) {
      return (this.controllerEmitValueNav = recibido);
    },
    changeSlideMain() {
      // console.log("SlideChange:  "+ this.secondSwiper.activeIndex)
      if (this.secondSwiper && this.secondSwiper.activeIndex > 0) {
        this.changeSlideMainCount = true;
      } else {
        this.changeSlideMainCount = false;
      }
    },

    ActivartouchSlide() {
      return (
        (this.secondSwiper.allowTouchMove = true),
        (this.BloquedtouchActiveSlideTallas = true)
      );
    },
    getEmitBloquearSwiper(dato, getRatio) {
      return (
        (this.BloquedtouchActiveSlideTallas = dato),
        (this.BloquedtouchtouchRatio = getRatio),
        (this.secondSwiper.allowTouchMove = this.BloquedtouchActiveSlideTallas)
      );
    },

    handleSlideTo() {
      this.secondSwiper.slideTo(3);
    },
    changeSlide(dato) {
      console.log("Emtro tienda Slide");
      this.$emit("changeslide", dato);
    },
    onLoad() {
      this.isLoaded = true;
    },
    cambiandoSlides() {
      return (this.active_animation = false);
    },
    changeView(data) {
      this.onLoad();
      this.secondSwiper.slideTo(data);
      this.view = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.seleccion {
  position: relative;
}

.profile_nav {
  z-index: 10;
  top: 0px !important;
  background: #fff;
  transition: all 0.1s linear 0.2s;
  border-bottom: 1px solid #ededed;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
}
</style>
