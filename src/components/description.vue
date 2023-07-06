<template>
<div class=" mb-2">
  <section class="description mb-2">
    <span style="font-family: Inter;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
">
      {{ description.title }}
    </span>
    <p class="sub-header" style="font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
color:#374047
">{{ description.subHeader }}</p>

  <div class="row px-0 mx-0">
    <div class="col-1">
      <img :src="comillas" alt="" style="height: 20px;width:20px">
    </div>
    <Transition mode="out-in">
    <div class="col-12" v-if="!leer_mas_boton">
      <p class="small">{{ truncate(description.content) }}</p>     
      <div class="row d-flex justify-content-center" style="
      background: linear-gradient(rgb(255 255 255 / 0%) 7.81%, rgb(255 255 255) 100%);width: 88%;height: 89px;
        position: absolute;
        bottom: 120px;"> 
      </div>
      <div class="text-center" @click="leer_mas_boton=true">
        <img :src="zapatos" alt="" class="w-100 mb-2">
        <img :src="leer_mas" alt="" style="height: 30px;width:128px">
      </div>
    </div>
    <div class="col-12" v-else>
      <p class="small">{{ description.content }}</p>
      <div class="text-center" @click="leer_mas_boton=false">        
        <img :src="zapatos" alt="" class="w-100 mb-2">
        <img :src="leer_menos" alt="" style="height: 30px;width:128px">
      </div>
    </div>
    </Transition>
  </div>

  <div class="row pt-4 mx-0">
    <div class="col-12 text-center">
      <span style="font-family: 'Inter';
font-style: normal;
font-weight: 400;
color: #374047;
font-size: 12px;
line-height: 15px;">

Más información en
      </span>
      <span  style="font-family: 'Inter';
font-style: normal;
font-weight: 700;
color: #FFA216;
font-size: 12px;
line-height: 15px;">
         adidas.es
         <img :src="link2" alt="" style="width:18px; height:18px">
      </span>
    </div>
  </div>

    
   </section>
  <section class=" mb-2" style="padding: 13px 12px 34px;
    border-bottom: 1px solid #EDEDED;
    background-color: #fff;">
    <span style="font-family: Inter;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
">
      Tallas disponibles
    </span>
    <p class="sub-header pt-1" style="font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
color:#374047
">
<button class="btn btn-outline-secondary me-1"> 40 </button>
<button class="btn btn-outline-secondary me-1"> 41 </button>
<button class="btn btn-outline-secondary me-1"> 44.5 </button>
</p>

  <div class="row">

      <span style="font-family: Inter;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
">
      Colores disponibles
    </span>
     <div style="width: 50%; display: flex;" class="mt-2">
          <div style="margin-right:5px;background-color:#9D60FF;min-width: 24px;min-height: 24px;" class="rounded-circle"></div>            
          <div style="margin-right:5px;background-color:#FF815C;min-width: 24px;min-height: 24px;" class="rounded-circle"></div>            
          <div style="margin-right:5px;background-color:#FFD140;min-width: 24px;min-height: 24px;" class="rounded-circle"></div>            
      </div>
  </div>

  <div class="row mt-5">

    <div
        class="d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify;font-size: 12px;"
      >
       <span style="color:#969696">Gastos de envío</span>
       <span style="font-family: Inter;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#484848"> 
Gratis. Gratis a partir de 60€</span>
      </div>
  </div>

  <div class="row mt-1">

    <div
        class="d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify;font-size: 12px;"
      >
       <span style="color:#969696">Entrega</span>
       <span style="font-family: Inter;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#484848"> 

Entre 4 días laborables</span>
      </div>
  </div>

  <div class="row mt-1">

    <div
        class="d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify;font-size: 12px;"
      >
       <span style="color:#969696">Forma de pago</span>
       <span style="font-family: Inter;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#484848"> 


Paypal - Tarjeta de crédito - Tarjeta de débito</span>
      </div>
  </div>


   </section>
      <section class="text-center" style="margin-top:15px; background:#FFF">
        <div class=" px-5 py-3">

        <img :src="campana_notificacion" alt="" style="height: 40px;width:40px">
        <h1 class="raffles-title">Añade alertas de lo que estes buscando </h1>
        <p class="raffles-info" style="    text-align: center;">Recibe un aviso en tu e-mail cada vez que una
oferta que tenga tus palabras claves</p>
        
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Palabras claves..." aria-label="Palabras claves..." aria-describedby="basic-addon2">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">Agregar</span>
          </div>
        </div> 
        </div>
      <div class="text-center " style="background:#FFF">

        <ButtonSwiper :alerts="MoreLikeCardsSwiperItems"></ButtonSwiper>
        
      </div>

      </section>
      
    
      <section class="  px-0 py-3" style="margin-top:15px; background:#FFF">

      <span style="font-family: Inter;
      font-size: 14px;
      padding: 13px 12px 34px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      ">
           Tambien te gustarán...
          </span>
          
        <MoreLikeCardsSwiper :alerts="['Pódca','El Rubius','Riquezas','Pantalones']"></MoreLikeCardsSwiper>

        <div class="row px-0 mx-0 d-flex justify-content-center">
          <div class="col-8">
            <button type="" class="btn btn-outline-secondary btn-block px-5" style="font-weight: 700;font-size: 12px;">Ver más de la marca</button>
          </div>
        </div>


      </section>
</div>

</template>

<style>
.swiper-button-prev{
     margin-top: -5px !important;
}
.swiper-button-next{
     margin-top: -5px !important;
}
</style>

<script>
import comillas from '../assets/comillas.svg';
import leer_mas from '../assets/leer_mas.svg';
import zapatos from '../assets/zapatos.png';
import leer_menos from '../assets/leer_menos.svg';
import link2 from '../assets/link2.svg';
import campana_notificacion from '../assets/campana_notificacion.svg';
import plus3 from '../assets/plus3.svg';
import ButtonSwiper from '../components/ButtonSwiper.vue';
import MoreLikeCardsSwiper from '../components/MoreLikeCardsSwiper.vue';


export default {
  data() {
    return { 
       comillas : comillas,
       leer_mas : leer_mas,
       leer_menos : leer_menos,
       link2 : link2,
       zapatos : zapatos,
       campana_notificacion : campana_notificacion,
       plus3 : plus3,
       leer_mas_boton : false,
      MoreLikeCardsSwiperItems: [{
        name: "Pódca",
        img_plus:true
      },{
        name: "El Rubius",
        img_plus:false
      },{
        name: "Riquezas",
        img_plus:false
      },{
        name: "Pantalones",
        img_plus:true
      }],
    }
  },
  components: {
    ButtonSwiper,
    MoreLikeCardsSwiper,
  },
  props: ["description"],
  computed:{
         truncate(){
            return (v)=>{
              var reqdString = ''
              var num = 130;
              for(let i=0; i<num; i++) {
                  reqdString += v[i]
              }
              return reqdString;
              }
           }
     }
 
}
</script>
