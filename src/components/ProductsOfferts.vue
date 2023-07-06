<template>

    <div  class="col-6 mx-0 px-0  my-2  d-flex justify-content-between flex-column "   
    :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}"
    style=""
    >
    <figure class="offer-grid-item-img position-relative text-center h-100">
      <!-- <img :src="products_offers.image" alt="grid item" style="height:220px; width: 170px;"> -->
      <img class="img_card--products" :src="products_offers.image" alt="grid item" loading="lazy" :style="`${products_offers.cupon.agotado ? 'filter: grayscale(.9);':''} `">
      <span class="offer-grid-item-img-company" v-html="products_offers.label_top" 
      :style="` opacity:85%; background:${products_offers.label_top_bg}; 
       color:${products_offers.label_top_color}; + ${products_offers.cupon.agotado ? 'filter: grayscale(.8);':''} `"></span>
      <span v-if="products_offers.black_friday" class="black_friday fw-bold" v-html="products_offers.black_friday_top" :style="'  color:'+products_offers.black_friday_color+'; border:2px solid red;' "></span>
      <span class="iconos_top_right">

        <span>  <IconoMedalla v-if="products_offers.icono_medalla"/> </span>
        <span class="mx-1"    v-if="products_offers.icono_fuego">  <IconoFuego /> </span>
        <span class="mx-1">  <IconoAlerta v-if="products_offers.icono_alerta"/> </span>
      </span>

      <span class="icono_bottom_right">
      <img 
        :src="icono_colorPaletta"
        v-if="products_offers.icono_palettaColor"
        style="height: 12px;width:12px">
      </span>
     
 <span :style="`${products_offers.cupon.agotado ? 'filter: grayscale(.9);':''}`" 
 :class="{'offer-grid-item-img-discount':!products_offers.oclock,'offer-grid-item-img-discount-oclock':products_offers.oclock,}">-{{products_offers.discount}}%</span>
         <span :class="{'badget-discount ps-1 pe-1 badget-static':!products_offers.oclock,'badget-discount ps-1 pe-1 badget-buttom':products_offers.oclock + 'badget-discount ps-1 pe-1'}">
        <div class="countdown  d-flex  ">
              <div class="countdown--date ">
                 <Timer/>
                <small class="ms-1">00:29:44</small></div>
              </div>
              </span>
    
        <span class="offer-grid-item-img-oclock" v-if="products_offers.oclock">2d : 20h : 15s</span>
          <div v-if="products_offers.cupon.agotado" class="agotado_container d-flex justify-content-center align-items-center">
              <button   v-if="products_offers.cupon.agotado" class="btn buttom_agotado">
                  AGOTADO
                </button>
          </div>
          
      </figure>
        <span class="offer-grid-item-alert" v-if="alerta_notification">
             <img :src="campana_notificacion" alt="" style="height: 10px;width:10px">
            Alerta para marca <strong>Nike</strong> filtrado por...
          </span>
      <div class="offer-grid-item-body offer-grid-item-body-new  pe-0 pb-2 d-flex flex-column justify-content-between "  >
        <div class="" >
        <div class="offer-grid-item-body-prices" style="justify-content: space-between;">
          <div style="display: flex; gap: 4px;"><span class="offer-grid-item-body-prices-price  ">{{products_offers.cost_end}}€</span>
          <span class="products-prices-old-prices color_cost_init">{{products_offers.cost_init}}€</span></div>
          <span v-if="products_offers.cost_delivery" class="offer-grid-item-body-prices-delivery color_cost_init">
            <img :src="coche_cardProducts" alt="" class=" img-fluid">{{products_offers.cost_delivery}}€</span>
            <div  class="p-0 m-0 justify-content-end mb-2   d-flex  ">
              <!-- <img :src="oclock" alt="" class="me-1 img-fluid" style=""> -->
              <img :src="setting_cardProducts" height="4" width="11" alt="" class="me-1 img-fluid" >

               <!-- <span  class="d-flex p-0 m-0 me-1 flex-inline text_footer--cupons">hace 22 mins</span> -->
            </div>
        </div>
      
        <h2 class="mt-2">{{products_offers.name}}</h2>
        </div>
      
           <div class=" d-flex  justify-content-between justify-content-center 
           align-items-end py-2 m-0 pe-0" style=""
           @click="bloquedSlideMainProducts"
           @touchstart="bloquedTouchSlideMainProducts"
            >
         <div style="width: 82%; display: flex;  " 
         class="   ">
              <!-- <div v-for="(colour, index) in products_offers.colours" :key="index" :style="'background-color:'+colour"></div>             -->
          <NavTallas/>
          </div> 
       
          </div>       
      </div>
  </div>


</template>

<script>


import NavTallas from './NavTallas.vue'
import Cupons from '../components/svg/cupons.vue';
import Timer from '../components/svg/oclock.vue';
import CuponsCode from '../components/svg/cupons_code.vue';
import oclock from '../assets/oclock.svg';
import setting_cardProducts from '../assets/single-product/more.svg'
import coche_cardProducts from '../assets/single-product/coche.svg'
import IconoMedalla from '../components/svg/medalla.vue';
import IconoFuego from '../components/svg/fuego_vivo.vue';
import IconoAlerta from '../components/svg/alerta.vue';
import campana_notificacion from '../assets/iconos/alert_campana.svg';
import icono_colorPaletta from '../assets/iconos/colorPaletta.svg';
export default {
  props: ["products_offers", "index"],
  props:  {
         products_offers:{
         type:Object,
         default:{}
       },
        index:{
         type:Number,
         default:0
       },
        alerta_notification:{
         type:Boolean,
         default:false
       },
  },
  components: {
      Cupons,
      CuponsCode,
      IconoFuego,
      IconoAlerta,
      IconoMedalla,

      Timer,
      NavTallas
    
  },

 
  data(){
    return{
          oclock : oclock,
          setting_cardProducts:setting_cardProducts,
          coche_cardProducts:coche_cardProducts,
          bloquedtouchActiveSlideTallas:true,
          icono_colorPaletta: icono_colorPaletta,
          campana_notificacion:campana_notificacion
    }
  },

  methods:{
  bloquedSlideMainProducts(){
    this.$emit("bloquearSwiperSlideMainProducts", this.bloquedtouchActiveSlideTallas = false)
  },
  bloquedTouchSlideMainProducts(){
    this.$emit("bloquearSwiperSlideMainProducts", this.bloquedtouchActiveSlideTallas = false)
  }
  }
}
</script>

<style lang="scss" scoped>

.offer-grid-item-body-prices-delivery{
  font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: #9B9B9B;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
}
.offer-grid-item-body-new {
    background-color: #fff;
    padding: 8px 8px !important;
}
.products-prices-old-prices{
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 8px;
line-height: 10px;
/* identical to box height */

text-decoration-line: line-through;

color: #9B9B9B;
}
.offer-grid-item-alert
{
  font-size: 0.5rem;
  text-align: center;
  background: #F3EEEA;
  padding: 4px;
}

.icono_bottom_right
{
  position:absolute;
  right:2px;
  bottom: 0px;
  margin: 5px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.color_cost_init{
color: #9B9B9B;
}

.iconos_top_right{
    position:absolute;
  right:5px;
  top: 0px;
  margin: 2px;

  display:flex;
  justify-content: center;
  align-items: center;
}
.text_footer--cupons{
  font-weight: 400;
  font-size: 0.5rem;
  line-height: 12px;
  color: #9B9B9B;
}
.img_card--products{
  width: 100%;
  height: 100%;
          // object-fit: contain;
    background-size: contain;
}
.buttom_agotado{
  background: #CC2323;
                padding:0px;
                border-radius:0px;
                width: 80%;
                height:12%;
                color: #fff;
}
.countdown--date{
text-align: center;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    display: flex;
}

.badget-discount {
     position: absolute;
    left: 40px;
    background: #f8f9fa;
    color: #cc2323;
    border: 2px solid #CC2323;
    padding: 0.12rem;
    margin: 0;
    font-size: .68rem;
    font-weight: 700;
}

.badget-buttom{
  bottom: 30px !important;
}

.badget-static{
  bottom: 0px !important;
}


.agotado_container {
  background: rgb(0 0 0 / 51%);
        mix-blend-mode: normal;
        position:absolute;
        width:100%;
        height:100%;
        top:0px;
}

</style>