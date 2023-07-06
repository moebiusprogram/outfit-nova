<template>
  <section class="product">
    <div class="brands">
    <Navbar :show="showMenu" :showLogo="true" :imgLogo="image" :white="textNavBarWhite"  button_right="saved" accion="comprar"/> 
    </div>

    <div class="brands">
    <Navbar :show="!showMenu" name="" 
      :style="{backgroundColor: '#fff', clipPath: `polygon(0 ${path}%, 100% ${path}%, 100% 100%, 0% 100%)`}" />
    </div>

    <ImageSlider  :imageslide="slides" :products="products" :offer_start="offer_start" :offer_end="offer_end" :agotado="agotado" :offer="offer" @setHeight="setHeight" 
    color="#FAE7CB" :label="label" :bool="false"  @NavBarBlack="NavBarBlack"  button_right="saved" />
    <div v-if="offer_end" :style="{top: `${height - 54}px`}" class="offer-container"> 

      <Offer :style="{
        transform: `translateY(${translate * -1.5}px)`
      }" offer="-40" />
    </div>
  
    <Price :height="height" :offer_end="false" />
    <div  style="background: #F5F5F5;">
      <Shipping price="4,95" :country="country" />
       <Description :description="description" /> 
       <!-- <Comments amountOfComments="2" @menuTyping="menuTyping" />  -->
    </div>
          <div style="margin-top:50px"></div>
    <Menubar :showMenu="showMenu" :show="true" />
  </section>
</template>

<script>
import { products } from "../products";

import imagene from '../assets/zara.jpg';
import zara11 from '../assets/zara11.png';
import zara1 from '../assets/zara1.png';
import women1 from '../assets/single-product/soliver-zapatilla-natural-running-mujer-zalando.webp';
import women2 from '../assets/single-product/soliver-zapatilla-natural-running-mujer.webp';
import women3 from '../assets/single-product/soliver-zapatilla-natural-running-mujer-rebaja.webp';
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
import logo from "../assets/vans.png";
import image from '../assets/rectangle-2.png';


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
  props: ["offer","id"],
  mounted() {
    if(this.id==2){
      this.offer_end = true;
    }
    if(this.id==3){
      this.agotado = true;
    }
    
    console.log(this.offer_end);
    window.addEventListener('scroll', this.scrollHandler);
    
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    
    menuTyping(data) {
      this.showMenu = data;
    console.log("🚀 ~ file: Product.vue ~ line 74 ~ menuTyping ~ data", data)

    },
    NavBarBlack(data) {
      this.textNavBarWhite = data;
      // this.$emit('NavBarBlack',data); 
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
    setHeight(height) {
      this.height = height-40;
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

      if (scrollPos > this.height + 31) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    }
  },

  data() {
    return {
      products: products,
      slides: [women1, women2, women3, imagene, zara11, zara1 ],
      offer_end : false,
      offer_start: false,
      agotado : false,
      textNavBarWhite :false, 
      image: image,
      logo: logo,
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
