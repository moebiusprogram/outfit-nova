<template>
  <section class="brands">
    <Navbar :show="showNav" :white="true" height="55px"/>
    <figure :style=" {transform: `translate(${xPos}px, -${yPos}px) scale(${scale})`, 'box-shadow' : shadow ? ''
    : 'none' }" class="brand-pic">
      <img src="../assets/amazon.png" alt="amazon">
    </figure>
    <header class="brands-top">
      <figure>
        <img src="../assets/brand-bg.png" alt="Brand Background">
      </figure>
      <div class="button-group">
        <span class="rating">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.631 5.11934C13.5891 4.99592 13.512 4.88747 13.4092 4.80738C13.3063 4.72729 13.1823 4.67908 13.0524 4.66868L9.25169 4.36668L7.60703 0.72601C7.55465 0.608751 7.46945 0.509157 7.36172 0.439248C7.25399 0.369339 7.12833 0.332102 6.99991 0.332031C6.87148 0.331961 6.74578 0.36906 6.63798 0.438851C6.53017 0.508642 6.44487 0.608142 6.39236 0.725343L4.74769 4.36668L0.947025 4.66868C0.819329 4.67879 0.697251 4.72548 0.595395 4.80316C0.49354 4.88084 0.416221 4.98622 0.372687 5.1067C0.329154 5.22717 0.321251 5.35763 0.349922 5.48248C0.378593 5.60733 0.442626 5.72127 0.534359 5.81068L3.34303 8.54868L2.34969 12.85C2.31953 12.9802 2.3292 13.1165 2.37744 13.2411C2.42568 13.3657 2.51027 13.473 2.62023 13.549C2.73019 13.6249 2.86044 13.6661 2.99408 13.6671C3.12772 13.6681 3.25859 13.629 3.36969 13.5547L6.99969 11.1347L10.6297 13.5547C10.7432 13.6301 10.8772 13.6689 11.0134 13.6659C11.1497 13.6629 11.2818 13.6183 11.392 13.538C11.5021 13.4577 11.585 13.3456 11.6295 13.2167C11.6741 13.0879 11.6781 12.9485 11.641 12.8173L10.4217 8.55068L13.4457 5.82934C13.6437 5.65068 13.7164 5.37201 13.631 5.11934Z"
              fill="#51AB6A" />
          </svg>
          {{ rating }}
        </span>
        <NavbarButton :white="true" :shadow="true"><img src="../assets/arrow-up-right.svg" alt="arrow up" style="width:15px">
        </NavbarButton>
        <NavbarButton :white="true" :shadow="true"><img src="../assets/upload.svg" alt="upload" style="width:15px"></NavbarButton>
      </div>
    </header>
    
    <BrandHeader :style="{ paddingBottom: showBrandNav ? `${16 + 39}px` : '' }" :views="views" :brandName="brandName" />

    <hr style="color:#b4aeae">

    <BrandNav :style="{ position: showBrandNav ? 'fixed' : '' }" @changeView="changeView" />

    <!-- <Button2Swiper :alerts="MoreLikeCardsSwiperItems"></Button2Swiper> -->

    <hr style="color:#b4aeae">
    <transition-group name="slide-up">
        <template v-if="view=='0'">
          <SwiperCuponesOfferts :products="products_offers"/>
        </template>
        <template v-else-if="view=='1'"> 
          <offerChollos/>
        </template>
        <template v-else-if="view=='2'"> 
          <SwiperCuponesOfferts :products="products_offers"/>
        </template>
        <template v-else-if="view=='3'"> 
         <BrandRatings />
    <Review rating="10" title="El servicio postventa es pésimo" text="El servicio postventa es pésimo!!! Llevo más de
un mes para hacer una devolución y aqui sigo
esperando" :replies="
[
  {
    title: 'Reply from Groupon España',
    text: 'Lamentamos leer la mala experiencia que has tenido con nostros. Nuestro equipo está revisando tu caso y poniendose al contacto contigo. En las próximas 48hs solucionaremos el problema.',
    date: 'Hace 2 dias'
  }
]
" />
    <Review rating="5" title="PEDIDO" text="Realicé un pedido de 3 gafas de sol y solo enviaron 2.
No hay manera de ponerse al contacto con la
la empresa ni con groupon solo me remite a ella.
No se responsabiliza por nada. Ya pasó más de
un mes y no tengo respuesta." />
    <BrandRate />
    <Review rating="2" title="PEDIDO" text="Realicé un pedido de 3 gafas de sol y solo enviaron 2.
No hay manera de ponerse al contacto con la
la empresa ni con groupon solo me remite a ella.
No se responsabiliza por nada. Ya pasó más de
un mes y no tengo respuesta." />
    <BrandPagination />
    <BrandRate :secondary="true" /> 

        </template>
    </transition-group>
    <!-- <BrandNav :style="{ position: showBrandNav ? 'fixed' : '' }" /> -->

<!--  
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br> 
 <br>  -->
    <Menubar :showMenu="showNav" />
  </section>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import NavbarButton from '../components/NavbarButton.vue';
import BrandHeader from '../components/BrandHeader.vue';
import BrandNav from '../components/BrandNav.vue';
import BrandRatings from '../components/BrandRatings.vue';
import BrandRate from '../components/BrandRate.vue';
import BrandPagination from '../components/BrandPagination.vue';
import Review from '../components/Review.vue';
import offerChollos from '../components/OfferChollos.vue';
import img from '../assets/registration-bg.png';


import Button2Swiper from '../components/Button2Swiper.vue';
import SwiperCuponesOfferts from '../components/SwiperCuponesOfferts.vue';
import oferta1 from '../assets/prenda1.webp';
import oferta2 from '../assets/prenda2.webp';
import logo3 from '../assets/logos/vans.svg';

export default {
  components: {
    Navbar,
    NavbarButton,
    BrandHeader,
    BrandNav,
    BrandRatings,
    BrandRate,
    Review,
    BrandPagination,
    Button2Swiper,
    offerChollos,
    SwiperCuponesOfferts,

  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    changeView(data) {
      console.log('sasd',data);
      this.view = data;
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
      const maxHeigth = 180 - 32;
      if (scrollPos > 0 && scrollPos < maxHeigth) {
        this.yPos = scrollPos;
        this.xPos = scrollPos * width / maxHeigth;
        this.scale = 1 - scrollPos * 0.5 / maxHeigth;
        this.shadow = true
      } else if (scrollPos === 0) {
        this.yPos = 0;
        this.xPos = 0;
        this.scale = 1;
      } else {
        this.yPos = maxHeigth;
        this.xPos = maxHeigth * width / maxHeigth;
        this.scale = 1 - maxHeigth * 0.5 / maxHeigth;
        this.shadow = false;
      }

      if (scrollPos > maxHeigth) {
        this.showNav = true
      } else {
        this.showNav = false;
      }

      if (scrollPos > maxHeigth + 74) {
        this.showBrandNav = true;
      } else {
        this.showBrandNav = false;
      }
    }
  },
  data() {
    return {
      MoreLikeCardsSwiperItems: [{
        name: "Todos",
        img_plus:false
      },{
        name: "Ropa",
        img_plus:false
      },{
        name: "Zapatos",
        img_plus:false
      },{
        name: "Deporte",
        img_plus:false
      },{
        name: "Complementario",
        img_plus:false
      }],
      rating: 9.2,
      brandName: 'Tienda Amazon',
      lastKnownScrollPosition: null,
      views: 795,
      img,
      ticking: false,
      view: '0',
      yPos: 0,
      xPos: 0,
      scale: 1,
      shadow: true,
      showNav: false,
      showBrandNav: false,
      products_offers : [
        {
          is_cupon : true,
          name : "-35% MENOS",
          label_top : 'About You',
          label_top_bg : '#FFF',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : false,
            name : '',
            color_bg : '#232323',
            color_text : '#FFFFFF',
            agotado : true,
            codigo : '',
            fecha: ''
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        } ,{
          is_cupon : true,
          name : "5€ DE DESCUENTO",
          label_top : 'About You',
          label_top_bg : '#FFF',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : true,
            name : 'EXTRADSCTO5',
            color_bg : '#1E4D68',
            color_text : '#FFFFFF',
            agotado : true,
            codigo : '',
            fecha: ''
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        }, {
          is_cupon : true,
          name : "5€ DE DESCUENTO",
          label_top : 'Deportes Outlet',
          label_top_bg : '#C5E8F8',
          label_top_color : '#288ED8',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : false,
            name : '',
            color_bg : '#1E4D68',
            color_text : '#FFFFFF',
            agotado : false,
            codigo : '5237',
            fecha: 'Hace 2 horas'
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        },{
          is_cupon : true,
          name : "ENVÍO GRATIS",
          label_top : 'About You',
          label_top_bg : '#FFF',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : true,
            name : 'EXTRADSCTO5',
            color_bg : '#1E4D68',
            color_text : '#FFFFFF',
            agotado : false,
            codigo : '5237',
            fecha: 'Desde 2 febrero'
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        },
        {
          is_cupon : false,
          name : 'Black / Silver Metallic',
          label_top : 'Amazon',
          label_top_bg : '#FAE7CB',
          label_top_color : '#E4B408',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: oferta1,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#b3ac9f','#296118']
        },{
          is_cupon : true,
          name : "5€ DE DESCUENTO",
          label_top : 'Deportes Outlet',
          label_top_bg : '#C5E8F8',
          label_top_color : '#288ED8',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : false,
            name : '',
            color_bg : '#232323',
            color_text : '#FFFFFF',
            agotado : false,
            codigo : '5237',
            fecha: 'Hace 2 horas'
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        }
      ],
    }
  },
}
</script>

<style>
.nav-link{
      background: transparent;
    color: #000;
}
.nav-link.active{
    background: transparent !important;
    color: #000 !important;
}


.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>