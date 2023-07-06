<template>
  <section class="product">
    <Navbar />
    <Navbar name="Zapatillas Skechers" :hidden="true"
      :style="{backgroundColor: '#fff', clipPath: `polygon(0 ${path}%, 100% ${path}%, 100% 100%, 0% 100%)`}" />
    <ImageSlider 
    :imageslide="dataSlideGeneral[0].images[0].slides"
    :offer="offer" @setHeight="setHeight" color="#FAE7CB" :label="label" :bool="scroll" />
    <div v-if="offer" :style="{top: `${height - 54}px`}" class="offer-container">
      <Offer :style="{
        transform: `translateY(${translate * -1}px)`
      }" offer="-40" />
    </div>
    <Price   :priceProductData="dataSlideGeneral[0].priceProductData"  :height="height" />
    <Shipping price="4.95" :country="country" />
    <Description :description="description" />
    <ShareInSocial :alerts="alerts" title="Comparte el chollo" />
    <Comments amountOfComments="2" />
    <Menubar :withProduct="true" :showMenu="showMenu" />
  </section>
</template>

<script>
import { dataSlideGeneral } from "../dataSlideGeneral";
import ImageSlider from '../components/ImageSlider.vue';
import Navbar from '../components/Navbar.vue';
import Offer from '../components/Offer.vue';
import Price from '../components/Price.vue';
import Shipping from '../components/Shipping.vue';
import Description from '../components/description.vue';
import ShareInSocial from '../components/ShareInSocial.vue';
import Comments from '../components/Comments.vue';
import Menubar from '../components/Menubar.vue'

import img from "../assets/china-flag.png";


export default {
  components: {
    ImageSlider,
    Navbar,
    Offer,
    Price,
    Shipping,
    Description,
    ShareInSocial,
    Comments,
    Menubar
  },
  props: ["offer"],
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
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
    setHeight(height) {
      this.height = height;
    },
    calculateOffset(scrollPos) {
      if (scrollPos > 0) {
        this.scroll = scrollPos;
      } else {
        this.scroll = 0;
      }

      if (scrollPos > this.height / 2) {
        this.translate = this.height / 2 - this.scroll;
      } else {
        this.translate = 0;
      }

      if (scrollPos > this.height - 56) {
        this.path = 0;
      } else {
        this.path = 100;
      }

      if (scrollPos > this.height + 131) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    }
  },
  data() {
    return {
      dataSlideGeneral: dataSlideGeneral,
      hide: true,
      path: 100,
      height: 0,
      translate: 0,
      initialPos: null,
      showMenu: false,
      lastKnownScrollPosition: 0,
      scroll: 0,
      label: {
        name: "Amazon",
        date: new Date(),
        ticking: false,
      },
      country: {
        name: "China",
        img,
      },
      description: {
        title: "Zapatillas deportivas bajas Calvin Klein en Beige",
        subHeader: "Color liso, Cuero, Con Plataforma, Punta redonda, Acordonado con 6 agujeros.",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, nostrum error! Inventore consectetur, laboriosam dolorem quam nostrum, sit cumque nulla ipsum perspiciatis non ab perferendis iusto iste veritatis ipsa libero."
      },
      alerts: [
        "Licores y bebidas",
        "Cervezas",
        "Botellas de vino",
        "Licores y bebidas",
        "Cervezas",
        "Botellas de vino"
      ],
    }
  },
};
</script>
