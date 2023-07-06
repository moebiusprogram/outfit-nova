<template>
  <section class="tienda">
    <div style="height: 42px"></div>
    <NavbarSearch
      :route_to="'/'"
      :show="true"
      :white="true"
      :shadow="showNav === true ? true : false"
      :rating="true"
      :visit="true"
    />

    <BrandBanner :title="'marca'" :name="$route.params.brand" />
    <BrandAbout :name="$route.params.brand" />
    <ProfileNav
      :tabs="name_tabs"
      :onbarra="false"
      :onbackground="true"
      :name_icono="name_iconos"
      :colores_icon="colores_icons"
      :class="showProfileNav ? 'profile-nav-fixed' : 'profile_nav'"
      :bloquear_animation="active_animation"
      :loppActivo="true"
      :controllerSlideFirst="secondSwiper"
      :changeSlideMain="changeSlideMainCount"
      :slide_count="secondSwiper ? secondSwiper.realIndex : 0"
      @changeView="changeView"
      @SlidechangeNavController="recibiendoControllerNav"
      @ClickSlideAlertaNotification="recibiendoAlertaNotification"
    />

    <!-- Sub navegacion de tallas/tiendas/precios -->
    <ProductsNav />
    <swiper
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
        <swiper-slide>
          <SwiperHomeOfferts
            :products="products"
            :alertaEmitNotification="onAlertaNotification"
            @bloquearSwiperSlideMainProducts="getEmitBloquearSwiper"
            v-if="isLoaded"
          />
          <!-- Skeleton card funcional -->
        </swiper-slide>
      </template>
    </swiper>
  </section>
  <section
    class="text-center"
    v-if="!showProfileNav"
    style="margin-top: 55px; background: #fff"
  >
    <FooterNavbar />
  </section>
  <ButtonFloatingSetting v-if="showProfileNav" />
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Controller } from "swiper";
import { ref } from "vue";
import MyCardSkeleton from "../components/CardSkeleton.vue";
import scissors from "../assets/scissors.svg";
import NavbarSearch from "../components/NavbarSearch.vue";
import BrandBanner from "../components/BrandBanner.vue";
import BrandAbout from "../components/BrandAbout.vue";
import BrandNav from "../components/BrandNav.vue";
import BrandRatings from "../components/BrandRatings.vue";
import BrandRate from "../components/BrandRate.vue";
import BrandPagination from "../components/BrandPagination.vue";
import Review from "../components/Review.vue";
import ButtonFloatingSetting from "../components/ButtonFloatingSetting.vue";
import Avatar from "../components/Avatar.vue";
import activos from "../assets/activos.svg";
import ProductsNav from "../components/ProductsNav.vue";
import ProfileNav from "../components/ProfileNav.vue";
import FooterNavbar from "../components/FooterNavbar.vue";
import SwiperHomeOfferts from "../components/SwiperHomeOfferts.vue";
import SwiperCuponesOfferts from "../components/SwiperCuponesOfferts.vue";
import Skeleton from "../components/Skeletone.vue";

import oferta7 from "../assets/images/short.webp";
import user from "../assets/user-plus.svg";
import oferta8 from "../assets/images/hansen.webp";
import oferta9 from "../assets/images/heekpek-bufandas.webp";
import oferta10 from "../assets/images/michael-kors.webp";
import logo3 from "../assets/logos/vans.svg";
import oferta1 from "../assets/prenda1.webp";
import oferta2 from "../assets/prenda2.webp";
import oferta3 from "../assets/prenda3.webp";
import oferta4 from "../assets/prenda4.webp";
import oferta5 from "../assets/prenda5.webp";
import oferta6 from "../assets/prenda6.webp";
import oferta11 from "../assets/images/levis-batwing.webp";
import oferta12 from "../assets/test_cinturon.webp";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BrandAbout,
    BrandBanner,
    BrandNav,
    NavbarSearch,
    Avatar,
    ProductsNav,
    BrandRatings,
    BrandRate,
    Review,
    BrandPagination,
    FooterNavbar,
    ProfileNav,
    Skeleton,
    SwiperHomeOfferts,
    SwiperCuponesOfferts,
    ButtonFloatingSetting,
    MyCardSkeleton,
  },
  setup() {
    const secondSwiper = ref(null);
    const setSecondSwiper = (swiper) => {
      secondSwiper.value = swiper;
    };

    return {
      Controller,
      setSecondSwiper,
      secondSwiper,
    };
  },
  mounted() {
    this.onLoad();
    window.addEventListener("scroll", this.scrollHandler);
  },
  created() {
    console.log(this.$route);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandler);
  },

  data() {
    return {
      navTab: "Chollos",
      showBrandNav: true,
      datoAlertaNotification: 0,
      onAlertaNotification: false,
      BloquedtouchActiveSlideTallas: true,
      BloquedtouchtouchRatio: 1,
      swiper: 0,
      swipervalue: 0,
      showNav: true,
      changeSlideMainCount: false,
      active_animation: false,
      controllerEmitValueNav: {},
      items: [
        {
          thumbnail: "laptop.svg",
          avatar: "avatar_1.jpeg",
          bgColor: "#BCD1FF",
          tag: "PRODUCTIVITY",
          date: "3 days ago",
          title: "7 Skills of Highly Effective Programmers",
          desc:
            "Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven...",
          author: "Glen Williams",
        },
        {
          thumbnail: "socmed.svg",
          avatar: "avatar_2.jpeg",
          bgColor: "#F395BA",
          tag: "MEDIA",
          date: "17 days ago",
          title: "SMM starter pack, part 2: content promotion",
          desc:
            "This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media.",
          author: "Patricia Kemp",
        },
        {
          thumbnail: "business.svg",
          avatar: "avatar_3.jpeg",
          bgColor: "#D2EBF7",
          tag: "BUSINESS",
          date: "1 month ago",
          title: "11 Things I Wish I Knew When I Started My Business",
          desc:
            "Here are 11 things I wish I knew when I started my business. I hope they will save you some time and some anguish because (experience is a good teacher here) the sodium from...",
          author: "Lisa Barnes",
        },
        {
          thumbnail: "socmed.svg",
          avatar: "avatar_2.jpeg",
          bgColor: "#F395BA",
          tag: "MEDIA",
          date: "17 days ago",
          title: "SMM starter pack, part 2: content promotion",
          desc:
            "This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media...",
          author: "Patricia Kemp",
        },
      ],
      ShowSelectiontienda: false,
      isLoaded: false,
      tienda_icon: ["start", "fire", "diamante", "start", "fire", "diamante"],
      selectedProducts: [],
      showProfileNav: false,
      showMenu: true,
      views: 795,
      slideview: 0,
      view: "0",
      logos_redes: [
        "logo_youtube",
        "logo_instagram",
        "logo_twitter",
        "logo_facebook",
        "logo_tiktok",
      ],
      name_tabs: [
        "Nuestra selección",
        "Nuevo",
        "Top Likes Hoy",
        "Tus alertas",
        "Más Comentadas",
        "Mis favoritos",
      ],
      name_iconos: [
        "IconoMedalla",
        "IconoAlerta",
        "IconoFire",
        "IconoCampana",
        "IconoCommentPurple",
        "IconoStart",
      ],
      colores_icons: ["#5bc6d6", "#00AB5C", "#ff8f8f", "#F0A410", "#BB6CFF", "#747474"],
      color_tab: "black",
      profile_info:
        "Hola, me encantan las zapatillas y los chollos,intentaré publicar mucho contenido de ofertas de zapatillas, asi que sígueme :).",
      products: [
        {
          is_cupon: false,
          name: "Black / Silver Metallic",
          label_top: "Amazon",
          label_top_bg: "#FAE7CB",
          label_top_color: "#E4B408",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta1,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#b3ac9f", "#296118"],
        },
        {
          is_cupon: false,
          name: "Black / Silver Metallic",
          label_top: "Amazon",
          label_top_bg: "#FAE7CB",
          label_top_color: "#E4B408",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          alerta_notify: true,
          image: oferta5,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#b3ac9f", "#296118"],
          oclock: false,
        },
        {
          is_cupon: false,
          name: "Black / Silver Metallic",
          label_top: "Amazon",
          label_top_bg: "#FAE7CB",
          label_top_color: "#E4B408",
          cost_init: "78.50",
          cost_end: "69.90",
          discount: "15",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta7,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          oclock: false,
          colours: ["#b3ac9f", "#296118"],
        },
        {
          is_cupon: false,
          name: "Camiseta Theo",
          label_top: "About you",
          label_top_bg: "#D8D8D8",
          label_top_color: "#000000",
          cost_init: "34.50",
          cost_end: "29.90",
          discount: "18",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta8,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          oclock: false,
          colours: ["#F2F2F2", "#171717"],
        },

        {
          is_cupon: false,
          name: "Zapatillas bajas Enzo",
          label_top: "Deportes Outlet ",
          label_top_bg: "#C5E8F8",
          label_top_color: "#288ED8",
          black_friday_top: "black friday",
          black_friday_color: "#FFFFFF",
          black_friday: true,
          cost_init: "98.50",
          cost_end: "89.90",
          discount: "18",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta9,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#EDEBEC", "#4A4A4A"],
        },
        {
          is_cupon: false,
          name: "Chaqueta Christopher",
          label_top: "SHEIN",
          label_top_bg: "#1D2E35",
          label_top_color: "#FFFFFF",
          cost_init: "88.50",
          cost_end: "59.90",
          discount: "25",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta10,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#EDEBEC", "#4A4A4A"],
        },
        {
          is_cupon: false,
          name: "Black / Silver Metallic",
          label_top: "Amazon",
          label_top_bg: "#FAE7CB",
          label_top_color: "#E4B408",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta1,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#b3ac9f", "#296118"],
        },
        {
          is_cupon: false,
          name: "Camiseta 'Theo'",
          label_top: "About You",
          label_top_bg: "#D8D8D8",
          label_top_color: "#000",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta2,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#000"],
          oclock: false,
        },
        {
          is_cupon: false,
          name: "Zapatillas bajas Enzo",
          label_top: "Deportes Outlet",
          label_top_bg: "#C5E8F8",
          label_top_color: "#288ED8",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta3,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#edebec", "#4a4a4a"],
          oclock: false,
        },
        {
          is_cupon: false,
          name: "Chaqueta 'Christopher'",
          label_top: "SHEIN",
          label_top_bg: "#1D2E35",
          label_top_color: "#FFF",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta4,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#dad8d9", "#4a4a4a"],
          oclock: false,
        },
        {
          is_cupon: false,
          name: "Black / Silver Metallic",
          label_top: "Amazon",
          label_top_bg: "#FAE7CB",
          label_top_color: "#E4B408",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: true,
          },
          image: oferta5,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#b3ac9f", "#296118"],
          oclock: false,
        },
        {
          is_cupon: false,
          name: "Camiseta 'Theo'",
          label_top: "About You",
          label_top_bg: "#D8D8D8",
          label_top_color: "#000",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta6,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#000"],
          oclock: false,
        },
        {
          is_cupon: false,
          name: "Zapatilla 'Running'",
          label_top: "About You",
          label_top_bg: "#D8D8D8",
          label_top_color: "#000",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta11,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#000"],
          oclock: false,
        },
        {
          is_cupon: false,
          name: "Cinturon 'Theo'",
          label_top: "Amazon",
          label_top_bg: "#FAE7CB",
          label_top_color: "#E4B408",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "moda",
            },
            {
              id: "112",
              name: "sueters",
            },
          ],
          cupon: {
            agotado: false,
          },
          image: oferta12,
          image_width: "192.87px",
          image_height: "220px",
          date: "1 Febrero",
          colours: ["#000"],
          oclock: true,
        },
      ],
    };
  },

  methods: {
    updateView(tab) {
      return (this.navTab = tab);
    },

    recibiendoAlertaNotification(recibiendoAlertaNotify) {
      this.datoAlertaNotification = recibiendoAlertaNotify;
      if (this.datoAlertaNotification == 3) {
        return (this.onAlertaNotification = true);
      } else {
        return (this.onAlertaNotification = false);
      }
    },

    onSwiper(swiper) {
      this.swiper = swiper;
      this.swipervalue = swiper.value;
    },

    recibiendoControllerNav(recibido) {
      return (this.controllerEmitValueNav = recibido);
    },

    handleSlideTo() {
      this.swiper.slideTo(3);
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

    changeSlide(dato) {
      console.log("Entro tienda Slide");
      this.$emit("changeSlide", dato);
    },
    changeSlideMain() {
      if (this.secondSwiper && this.secondSwiper.activeIndex > 0) {
        this.changeSlideMainCount = true;
      } else {
        this.changeSlideMainCount = false;
      }
    },
    cambiandoSlides() {
      return (this.active_animation = false);
    },
    onLoad() {
      this.isLoaded = true;
    },
    changeView(data) {
      this.onLoad();
      this.secondSwiper.slideTo(data);
      this.view = data;
    },
    onTab(data) {
      return (this.color_tab = data ? "black" : "black");
    },
    scrollHandler() {
      this.lastKnownScrollPosition = window.scrollY;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.calculateOffset(this.lastKnownScrollPosition);
          this.ticking = false;
        });
        this.ticking = true;
      }
    },
    calculateOffset(scrollPos) {
      const width = window.innerWidth / 2 / 2;
      const maxHeigth = 32 - 32;

      if (scrollPos > 10) {
        this.showNav = false;
      } else {
        this.showNav = true;
      }

      if (scrollPos > 0 && scrollPos < maxHeigth) {
        this.yPos = scrollPos;
        this.xPos = (scrollPos * width) / maxHeigth;
        this.scale = 1 - (scrollPos * 0.5) / maxHeigth;
      } else if (scrollPos === 0) {
        this.yPos = 0;
        this.xPos = 0;
        this.scale = 1;
      } else {
        this.yPos = maxHeigth;
        this.xPos = (maxHeigth * width) / maxHeigth;
        this.scale = 1 - (maxHeigth * 0.5) / maxHeigth;
      }

      if (scrollPos > maxHeigth) {
        this.showNav = false;
      } else {
        this.showNav = true;
      }

      if (scrollPos > maxHeigth + 74) {
        this.showBrandNav = true;
      } else {
        this.showBrandNav = false;
      }

      if (scrollPos > maxHeigth + 140) {
        this.showProfileNav = true;
      } else {
        this.showProfileNav = false;
      }
    },
  },

  computed: {},
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
  top: 37px;
  z-index: 10;
  background: #fff;
}
</style>
