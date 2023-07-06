<template>
  <section class="home">
    <SearchBar :class="showProfileNav ? 'search-nav-fixed' : ''" />

    <ProfileNav
      :tabs="name_tabs"
      :onbarra="false"
      :onbackground="true"
      :name_icono="name_iconos"
      :colores_icon="colores_icons"
      :class="showProfileNav ? 'profile-nav-fixed' : 'profile_nav'"
      :bloquear_animation="active_animation"
      :loppActivo="loopActivo"
      :controllerSlideFirst="secondSwiper"
      :changeSlideMain="changeSlideMainCount"
      :slide_count="secondSwiper ? secondSwiper.realIndex : 0"
      @changeView="changeView"
      @SlidechangeNavController="recibiendoControllerNav"
      @ClickSlideAlertaNotification="recibiendoAlertaNotification"
    />

    <!-- Sub navegacion de tallas/tiendas/precios -->
    <ProductsNav />
    <Swiper
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="1"
      :simulateTouch="true"
      :modules="[Controller]"
      :controller="{ control: controllerEmitValueNav }"
      :slideChange="cambiandoSlides()"
      @swiper="setSecondSwiper"
      @click="ActivartouchSlide"
      @slideChange="changeSlideMain"
      @touch-start="ActivartouchSlide, (BloquedtouchActiveSlideTallas = true)"
    >
      <template v-for="(vistas, index) in 6" :key="index">
        <SwiperSlide>
          <SwiperHomeOfferts
            :products="products_offers"
            :alertaEmitNotification="onAlertaNotification"
            @bloquearSwiperSlideMainProducts="getEmitBloquearSwiper"
            v-if="isLoaded"
          />
          <!-- Skeleton card funcional -->
        </SwiperSlide>
      </template>
    </Swiper>

    <section class="raffles" style="margin-top: 15px; background: #fff">
      <img src="../assets/bell.svg" alt="" style="height: 25px; width: 25px" />
      <h1 class="raffles-title">
        Añade alerta de <strong>lo que estes buscando</strong>
      </h1>
      <p class="raffles-info" style="text-align: center">
        Recibe un aviso en tu e-mail cada vez que una oferta que tenga tus palabras claves
      </p>

      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Palabras claves..."
          aria-label="Palabras claves..."
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">Agregar</span>
        </div>
      </div>
    </section>

    <div class="card mb-3 mt-3 border-0">
      <div class="row mx-0 px-0 d-flex">
        <div class="col-6 mx-0 px-0 d-flex">
          <div class="card-body text-center">
            <p class="card-text small">
              Aprende como activar las alertas con este <strong> tutorial </strong>
            </p>
            <button class="btn btn-block bg-black text-white">Ver Video</button>
          </div>
        </div>
        <div class="col-6 d-flex mx-0 px-0">
          <img
            src="/src/assets/video.png"
            style="height: 130px; width: 190px"
            class="rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>
  </section>

  <div style="margin-top: 100px"></div>

  <FooterNavbar :showMenu="true" />
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Controller } from "swiper";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { products } from "../products";
import FooterNavbar from "../components/FooterNavbar.vue";
import SearchBar from "../components/SearchBar.vue";
import HeadBand from "../components/HeadBand.vue";
import HeadBandCategorias from "../components/HeadBandCategorias.vue";
import HeadBandOfertas from "../components/HeadBandOfertas.vue";
import SwiperHome from "../components/SwiperHome.vue";
import GridCategories from "../components/GridCategories.vue";
import SwiperHomeOfferts from "../components/SwiperHomeOfferts.vue";
import Menubar from "../components/Menubar.vue";
import useScrollHandler from "../composables/useScrollHandlersPortada";
import ProductsNav from "../components/ProductsNav.vue";
import ProfileNav from "../components/ProfileNav.vue";

export default {
  components: {
    SearchBar,
    HeadBand,
    HeadBandCategorias,
    HeadBandOfertas,
    SwiperHome,
    GridCategories,
    SwiperHomeOfferts,
    ProductsNav,
    Menubar,
    FooterNavbar,
    Swiper,
    SwiperSlide,
    ProfileNav,
  },
  setup() {
    const { showBrandNav, showProfileNav, scrollHandler } = useScrollHandler();
    const products_offers = ref(products);
    const name_tabs = ref([
      "Nuestra selección",
      "Nuevo",
      "Top Likes Hoy",
      "Tus alertas",
      "Más Comentadas",
      "Mis favoritos",
    ]);
    const name_iconos = ref([
      "IconoMedalla",
      "IconoAlerta",
      "IconoFire",
      "IconoCampana",
      "IconoCommentPurple",
      "IconoStart",
    ]);
    const colores_icons = ref([
      "#5bc6d6",
      "#00AB5C",
      "#ff8f8f",
      "#F0A410",
      "#BB6CFF",
      "#747474",
    ]);
    const secondSwiper = ref(null);
    const color_tab = ref("black");
    const navTab = ref("Chollos");
    const datoAlertaNotification = ref(0);
    const onAlertaNotification = ref(false);
    const BloquedtouchtouchRatio = ref(1);
    const active_animation = ref(false);
    const changeSlideMainCount = ref(false);
    const BloquedtouchActiveSlideTallas = ref(true);
    const isLoaded = ref(false);
    const swiper = ref(0);
    const loopActivo = ref(true);
    const swipervalue = ref(0);
    const controllerEmitValueNav = ref({});
    const view = ref("0");
    const views = ref(795);
    const slideview = ref(0);

    const setSecondSwiper = (swiper) => {
      secondSwiper.value = swiper;
    };

    function updateView(tab) {
      navTab.value = tab;
    }

    function recibiendoAlertaNotification(recibiendoAlertaNotify) {
      datoAlertaNotification.value = recibiendoAlertaNotify;
      if (datoAlertaNotification.value == 3) {
        onAlertaNotification.value = true;
      } else {
        onAlertaNotification.value = false;
      }
    }

    function cambiandoSlides() {
      active_animation.value = false;
    }

    function onSwiper(swiper) {
      swiper.value = swiper;
      swipervalue.value = swiper.value;
    }

    function recibiendoControllerNav(recibido) {
      controllerEmitValueNav.value = recibido;
    }

    function handleSlideTo() {
      swiper.value.slideTo(3);
    }

    function ActivartouchSlide() {
      secondSwiper.value.allowTouchMove = true;
      BloquedtouchActiveSlideTallas.value = true;
    }

    function getEmitBloquearSwiper(dato, getRatio) {
      BloquedtouchActiveSlideTallas.value = dato;
      BloquedtouchtouchRatio.value = getRatio;
      secondSwiper.value.allowTouchMove = BloquedtouchActiveSlideTallas.value;
    }

    function changeSlideMain() {
      if (secondSwiper.value && secondSwiper.value.activeIndex > 0) {
        changeSlideMainCount.value = true;
      } else {
        changeSlideMainCount.value = false;
      }
    }

    function onLoad() {
      isLoaded.value = true;
    }

    function changeView(data) {
      onLoad();
      secondSwiper.value.slideTo(data);
      view.value = data;
    }

    onMounted(() => {
      onLoad();
      console.log("Component mounted");
      window.addEventListener("scroll", scrollHandler);
    });

    onBeforeUnmount(() => {
      console.log("Component before unmount");
      window.removeEventListener("scroll", scrollHandler);
    });

    return {
      products_offers,
      name_tabs,
      name_iconos,
      colores_icons,
      Controller,
      showBrandNav,
      showProfileNav,
      scrollHandler,
      secondSwiper,
      setSecondSwiper,
      onLoad,
      updateView,
      changeView,
      changeSlideMain,
      ActivartouchSlide,
      getEmitBloquearSwiper,
      handleSlideTo,
      recibiendoControllerNav,
      onSwiper,
      cambiandoSlides,
      recibiendoAlertaNotification,
      color_tab,
      loopActivo,
      navTab,
      datoAlertaNotification,
      onAlertaNotification,
      BloquedtouchtouchRatio,
      active_animation,
      changeSlideMainCount,
      BloquedtouchActiveSlideTallas,
      isLoaded,
      swiper,
      swipervalue,
      controllerEmitValueNav,
      view,
      views,
      slideview,
    };
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.tienda {
  position: relative;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.profile_nav {
  position: relative;
  z-index: 1;
  background: #fff;
  transition: all 0.1s linear 0.2s;
  border-top: 1px solid #ededed;
}

.profile-nav-fixed {
  position: sticky !important;
  display: flex;
  align-items: flex-end;
  border-top: none;
  height: 60px;
  top: 58px;
  z-index: 10;
  background: #fff;
}

.search-nav-fixed {
  position: sticky !important;
  display: flex;
  align-items: flex-end;
  border-top: none;
  height: 60px;
  top: 0px;
  z-index: 10;
}
</style>
