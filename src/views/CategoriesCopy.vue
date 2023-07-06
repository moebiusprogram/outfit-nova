<template>
  <section class="product" style="background: #F5F5F5;">

    <div class="row bg-white mx-0">
      <div class="col-3" style="border:1px solid #efefef;    display: flex; justify-content: space-evenly;">
        <LanguageSelectorBig />
      </div>
      <div class="col-3 px-0 p-4 text-center" style="border:1px solid #efefef;font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000;">Mujer</div>
      <div class="col-3 px-0 p-4 text-center" style="border:1px solid #efefef;font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #CCCCCC;">Hombre</div>
      <div class="col-3 px-0 p-4 text-center" style="border:1px solid #efefef;border-right:0px; font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #CCCCCC;">Infantil</div>
     
    </div>

    <div style="margin-top:25px"></div>

    <div class="row px-0 mx-0">
      <div class="col-12 text-center">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1" style="border-color:#EAEAEA; background:#EAEAEA">
            <img :src="search" alt="">
          </span>
          <input type="text" class="form-control search-cat"  style="background:#EAEAEA;height: 40px;border-color:#EAEAEA;" placeholder="Buscar marcas, artículos y más..." aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
 
    <HeadBandOnly :data="{title:'CATEGORIAS'}" :icon="male" />

    <GridCategories :categories="categories"/>

    <div style="margin-top:25px"></div>

    <HeadBandOnly :data="{title:'MARCAS RECOMENDADAS'}" />

    <GridMarcas :categories="marcas"/>

    <div style="margin-top:25px"></div>

    <div class="row  px-2 mx-0">
      <div class="col-12 mx-0 p-5 text-center" style="background: #F1F1F1;border-radius: 10px;">
        <span style="font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;">Todas las marcas</span>
      </div>
        
      
      
    </div>
    <div style="margin-top:25px"></div>

<HeadBandOnly :data="{title:'TIENDAS RECOMENDADAS'}" />

<GridMarcas :categories="tiendas"/>

<div style="margin-top:25px"></div>

<div class="row  px-2 mx-0">
  <div class="col-12 mx-0 p-5 text-center" style="background: #F1F1F1;border-radius: 10px;">
    <span style="font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;">Todas las tiendas</span>
  </div>
    
  
  
</div>
     <!-- <div style="margin-top:525px"></div> -->

    <FooterNavbar/>

  </section>
</template>

<script>
import ImageSlider from '../components/ImageSlider.vue';
import LanguageSelectorBig from '../components/LanguageSelectorBig.vue';
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
import image from '../assets/rectangle-2.png';
import male from '../assets/generos/male_black.svg';
import search from '../assets/search.svg';

import GridCategories from '../components/GridCategories.vue';
import GridMarcas from '../components/GridMarcas.vue';
import HeadBandOnly from '../components/HeadBandOnly.vue';

import cat1 from '../assets/cate_1.webp';
import cat2 from '../assets/cate_2.webp';
import cat3 from '../assets/cate_3.webp';
import cat4 from '../assets/cate_4.webp';
import cat5 from '../assets/cate_5.webp';
import cat6 from '../assets/cate_6.webp';

import marca1 from '../assets/logos/marca1.svg';
import marca2 from '../assets/logos/marca2.svg';
import marca3 from '../assets/logos/marca3.svg';
import marca4 from '../assets/logos/marca4.svg';
import marca5 from '../assets/logos/marca5.svg';
import marca6 from '../assets/logos/marca6.svg';

import tienda1 from '../assets/logos/tienda1.svg';
import tienda2 from '../assets/logos/tienda2.svg';
import tienda3 from '../assets/logos/tienda3.svg';


import spanish from '../assets/banderas/spanish.svg';
import arrow_right from '../assets/chevron-right-white2.svg';
import heart from '../assets/heart.svg';
import upload from '../assets/upload.svg';
import nuevo from '../assets/nuevo.svg';
import nuevo2 from '../assets/nuevo2.svg';
export default {
  name: 'CategoriesCopy',
  components: {
    LanguageSelectorBig,
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
      } else {
        this.showMenu = false;
      }
    }
  },
  data() {
    return {
      heart : heart,
      upload : upload,
      spanish : spanish,
      arrow_right : arrow_right,
      male : male,
      search : search,
      offer_end : false,
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
      marcas : [{
          name : 'Ropa',
          image: marca1,
          width:'100px',
          height:'62px',
        },{
          name : 'Zapatos',
          image: marca2,
          width:'90px',
          height:'60px',
        },{
          name : 'Deportes',
          image: marca3,
          width:'90px',
          height:'58px',
        },{
          name : 'Complementos',
          image: marca4,
          width:'85px',
          height:'56px',
        },{
          name : 'Marcas',
          image: marca5,
          width:'71px',
          height:'46px',
        },{
          name : 'Tiendas',
          image: marca6,
          width:'100px',
          height:'68px',
        }
      ],
      categories : [{
          name : 'Ropa',
          image: cat1,
          width:'48px',
          height:'58px',
        },{
          name : 'Zapatos',
          image: cat2,
          width:'48px',
          height:'58px',
        },{
          name : 'Deportes',
          image: cat3,
          width:'48px',
          height:'58px',
        },{
          name : 'Complementos',
          image: cat4,
          width:'26px',
          height:'46px',
        },{
          name : 'Marcas',
          image: cat5,
          width:'48px',
          height:'58px',
        },{
          name : 'Tiendas',
          image: cat6,
          width:'24px',
          height:'21.33px',
        },{
          name : 'Top Hoy',
          image: nuevo,
          width:'58px',
          height:'22px',
        },{
          name : 'Sorteos',
          image: nuevo2,
          width:'58px',
          height:'22px',
        }
      ],
      tiendas: [
        {
          name : 'Amazon',
          image: tienda1,
          width:'72px',
          height:'22px',
        },{
          name : 'Zalando',
          image: tienda2,
          width:'76px',
          height:'46px',
        },{
          name : 'Asos',
          image: tienda3,
          width:'68px',
          height:'48px',
        },{
          name : 'Complementos',
          image: marca4,
          width:'85px',
          height:'56px',
        },{
          name : 'Marcas',
          image: marca5,
          width:'71px',
          height:'46px',
        },{
          name : 'Tiendas',
          image: marca6,
          width:'100px',
          height:'68px',
        }
      ]
    }
  },
};
</script>

<style>
.search-cat:focus{
  border-color:#EAEAEA !important;
  border: 0px !important;
}
.search-cat::placeholder{
  font-weight: 600;
  font-size: 32px;
  color: #9D9D9D;
}

.search-cat {
  padding: 0 0 0 1rem!important;
  line-height: 30px;
}

</style>