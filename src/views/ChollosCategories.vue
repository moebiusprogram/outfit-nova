<template>

  <section class="brands bg-white">
       <nav :class="{navbar: true, 'bg-white': white,'shadow':show}" class="navbar" style="align-items: center;    padding-top: 8px !important;"><div class="bg"></div>
      
      <button class="" style="width: 54px;">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z" :fill="(white)?'black':'white'"></path></svg><!-- Atras -->
        </button>
        <span class="navbar-title clip-text"></span>
        <div><ul class="p-0 m-0"><li>
        
        <div class="d-flex">

        <button class="navbar-button justify-content-center">


          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5003 17.5L13.762 13.755L17.5003 17.5ZM15.8337 8.74996C15.8337 10.6286 15.0874 12.4303 13.759 13.7586C12.4306 15.087 10.6289 15.8333 8.75033 15.8333C6.87171 15.8333 5.07004 15.087 3.74165 13.7586C2.41327 12.4303 1.66699 10.6286 1.66699 8.74996C1.66699 6.87134 2.41327 5.06967 3.74165 3.74129C5.07004 2.4129 6.87171 1.66663 8.75033 1.66663C10.6289 1.66663 12.4306 2.4129 13.759 3.74129C15.0874 5.06967 15.8337 6.87134 15.8337 8.74996V8.74996Z" :stroke="(white)?'black':'white'" stroke-width="2" stroke-linecap="round"/>
          </svg>
          
      </button>
        </div>
      </li></ul></div></nav>
 

      <div class="row d-flex bg-dark text-white px-0 mx-0" style="min-height:200px;align-content: space-evenly;">
        <div class="col-12 px-4 pt-5">
          <h1 class="text-uppercase">
              {{categoria}}
          </h1>
        </div> 
        <div class="col-12 px-4">
          <span class="me-3"> Ver todo {{categoria}} </span>
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.869 0.689545L15.8084 1.75019L20.3083 6.25005H0.75V7.75009H20.3081L15.8084 12.2498L16.869 13.3104L23.1796 7L16.869 0.689545Z" fill="white"/>
          </svg>

        </div>
      </div>


    <div style="margin-top:25px"></div>

    <div class="row  px-2 mx-0">
      
      <div class="col-12 py-2" style="z-index: 999 !important;" v-for="(item, index) in categories" :key="index">
        <router-link :to="'/'" class="text-dark" style="text-decoration: none;">
        <span style="font-style: normal;
          font-weight: 700;
          font-size: 17px;
          line-height: 17px;">{{item.name}}
        </span>
        <span style="font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 17px;"><br>
          {{item.unit}}  ofertas activas
        </span>
        </router-link>
      </div>
        
      
    </div>
     <!-- <div style="margin-top:525px"></div> -->

    <footer style="height: 60px;">
      <FooterNavbar/>
    </footer>

  </section>
</template>

<script>
import ImageSlider from '../components/ImageSlider.vue';
import Navbar from '../components/Navbar.vue';
import Offer from '../components/Offer.vue';
import Price from '../components/Price.vue';
import Shipping from '../components/Shipping.vue';
import Description from '../components/description.vue';
import ShareInSocial from '../components/ShareInSocial.vue';
import Comments from '../components/Comments.vue';
import FooterNavbar from '../components/FooterNavbar.vue'

import img from "../assets/china-flag.png";
import logo from "../assets/vans.png";
import logo_img from "../assets/logo_img.svg";
import image from '../assets/rectangle-2.png';
import male from '../assets/generos/male.svg';
import male_black from '../assets/generos/male_black.svg';
import female from '../assets/generos/female.svg';
import children from '../assets/generos/children.svg';
import search from '../assets/search.svg';

import GridCategories from '../components/GridCategories.vue';
import GridMarcas from '../components/GridMarcas.vue';
import HeadBandOnly from '../components/HeadBandOnly.vue';

import spanish from '../assets/banderas/spanish.svg';
import arrow_right from '../assets/chevron-right-white2.svg';
import heart from '../assets/heart.svg';
import upload from '../assets/upload.svg';
export default {
  name: 'ChollosCategories',
  components: {
    ImageSlider,
    Navbar,
    Offer,
    Price,
    Shipping,
    Description,
    ShareInSocial,
    GridCategories,
    GridMarcas,
    HeadBandOnly,
    Comments,
    FooterNavbar
  },
  props: ["offer","id"],
  mounted() {
    if(this.id==2){
      this.offer_end = true;
    }
    if(this.id==3){
      this.agostado = true;
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

      if (scrollPos > this.height + 31) {
        this.showMenu = true;
        this.white = true;
      } else {
        this.showMenu = false;
        this.white = false;
      }
    }
  },
  data() {
    return {
      white: false,

      logo_img,
      heart,
      upload,
      spanish,
      arrow_right,
      male,
      male_black,
      female,
      children,
      search,
      offer_end : false,
      agostado : false,
      sex : 'Mujer',
      textNavBarWhite :false, 
      image,
      logo,
      hide: true,
      path: 100,
      height: 0,
      translate: 0,
      initialPos: null,
      showMenu: false,
      lastKnownScrollPosition: 0,
      scroll: 0,
      
      categoria : 'Complementos Deportivos',
      categories : [{
          name : 'Deportes urbano', 
          unit : 38,
        },{
          name : 'Deportes de raqueta',
          unit : 20,
        },{
          name : 'Deportes recreativos',
          unit : 6,
        },{
          name : 'Deportes urbano', 
          unit : 38,
        },{
          name : 'Deportes de raqueta',
          unit : 20,
        },{
          name : 'Deportes recreativos',
          unit : 6,
        },{
          name : 'Deportes urbano', 
          unit : 38,
        },{
          name : 'Deportes de raqueta',
          unit : 20,
        },{
          name : 'Deportes recreativos',
          unit : 6,
        }
      ],
      
    }
  },
}

</script>
