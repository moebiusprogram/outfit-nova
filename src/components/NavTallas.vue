<template>


      <nav class="w-100 my-0" style="position:relative; ">
           <!-- <div class="navigation-absolute" 
                v-if="contandoClick && swiper.activeIndex > 0" >
                 <div class="d-flex direction_arrows">
                    <button class="btn_arrow" @click="prev">
                        <svg  width="7" 
                        class="" 
                              height="10" viewBox="0 0 8 14" fill="#b9bbc2" 
                              xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
                            fill="#b9bbc2" />
                        </svg>
                    </button>
                  </div>
              </div> -->

          <swiper 
                :slidesPerView="'auto'" 
                :spaceBetween="2" 
                @swiper="onSwiper"  
                class="nav_profiles  w-100 d-flex "
                style="gap:1px; position:relative; "
             >
              
              <swiper-slide
                    v-for="(item, index) in tallas"
                    :key="index.id"
                    type="button"
                    style="justify-content: space-between; align-items: center; font-size:0.79rem;" 
                    class="rounded-2  d-flex d-flex "
                    ref="aqui">

                    <div class="d-flex">
                      <button   class="d-flex  boton_tallas " 
                                :class="[(( (isShow) && (active == index)) ? 'active_btn' : 'border-btn'),
                                ((index > 0) ? 'btn_tallas-margin' : '')]">
                                <div class="d-flex m-0 p-0"
                                @click="SelectProductForm(item.nro, index),
                                toggleSelect(index)"> 
                                <span class="mx-1 name_talla">{{item.nro}}</span>
                            </div>
                          </button>
                        </div>
                  </swiper-slide>
     
       </swiper>
          <div class="navigation-absolute-right ">
              <div class="d-flex direction_arrows ms-2 ps-2" style="">
                  <button class="btn_arrow" style="" @click="next">
                      <svg width="7" height="10" class="arrow_right mb-3 " viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
                          fill="#b9bbc2" />
                      </svg>
                  </button>
                  </div>
              </div>
          </nav>
      
</template>
<script>
  // import Swiper core and required modules
import { Navigation } from 'swiper';
import BrandTiendaTag from '../components/BrandTienda/BrandTiendaTag.vue';
import FormPrenda from '../components/FormPrenda.vue';
import ShowSelectiontienda from '../components/ShowSelectiontienda.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
  // Import Swiper Vue.js components
  import "swiper/swiper-bundle.css";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { ref, reactive } from 'vue'
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  // Import Swiper styles
  export default {
    components: {
      FormPrenda,
      BrandTiendaTag,
      Swiper,
      SwiperSlide,
      VueAwesomeSwiper,
      ShowSelectiontienda,
    },

    data()
    {
      return{
      contandoClick:false,
      swiper:null,
       isShow:true,
       nombre_selection:'',
       idSelection:0,
       active:0,
       onShowSelect:false,
       tallas : [
                  { id:'2', nro:'S', available:true },
                  { id:'3', nro:'M', available:true },
                  { id:'4', nro:'L', available:true },
                  { id:'5', nro:'XL', available:true },
                  { id:'5', nro:'XXL', available:true },
                  { id:'5', nro:'XXXL', available:true }
            ],
      }
    },

    methods: {

      onSwiper(swiper) 
      {
       
        this.swiper = swiper;
      },

      prev() {
        this.swiper.slidePrev()
      },
    
      next() {
       this.swiper.slideNext();
       this.contandoClick = true;
      },
   
  

     chowSelect(tipo){
      this.$emit('chowSelect', tipo);
    },
    
       toggleSelect(index) {
       // toggle the active class
       
          return this.active = index
        
     },
     SelectProductForm(data, indice) {
      return  this.onShowSelect = true, 
              this.nombre_selection = data, 
              this.idSelection = indice
             
      },
},
  };
</script>


<style lang="scss" scoped>

.navigation-absolute-right {
  margin-left: 20px;
}
.name_talla{
font-weight: 600;

font-size: 0.57rem;
}

.boton_tallas{
  background: #FFF;
}

.btn_tallas-margin{
margin-left:2px;

}

.arrow_right{
  transform: rotate(180Deg);
}

.btn_arrow{
  padding: 0px;
  border:#ebebeb;
  width:20px;
  height:20px;
  padding: 1px;
  background:#fff;
}

.navigation-absolute{
  position: absolute;
  top:0px;
 
  left:-9px;
}

.navigation-absolute-right{
  position: absolute;
  top:2px;
  
  right:-30px;
}

.direction-arrows{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.active_btn{
  background: #03E5B6;
  border-radius: 2px;
  color: #000000;
  font-weight: 600;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 3px;
  padding-bottom: 2.5px;
border: none;
}
.swiper-button-disabled{
  display:none;   
}

.border-btn{
  border: 1px solid #DDDDDD;
  border-radius: 2px;
  padding: 2px;
  color:#9B9B9B;
}
.btn_products{
  background:#FFF;
}

.swiper-slide {
    flex-shrink: inherit !important;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
}
</style>