<template>
  <div class="col-6 d-grid gap-2 mx-0 px-0  my-2" 
:class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}"> 
  <div class="card_cuponds  m-0 position-relative">
    <span 
           class="offer-grid-item-img-company opacity-75" 
           v-html="datos.label_top" 
           :style="`background:${datos.label_top_bg}; border_2px solid purple; color:${datos.label_top_color};`">
       </span>
           <span class="iconos_top_right">
     
     <span class="mx-1">  <IconoAlerta v-if="datos.icono_alerta"/> </span>
     <span>  <IconoMedalla v-if="datos.icono_medalla"/> </span>
   </span>

       <div class="content-box  d-flex 
         flex-column justify-content-between h-100">
         <div class="card_interno d-flex flex-column justify-content-between ">           
       <div class="col-md-offset-12 p-2 mt-2 " style="">    
     </div>  
           <div class="col-12 mt-1  position-relative content-box p-0  d-flex flex-column">
             <small class="title_card--cupon  ms-0 ps-1 " style="">
                <span class="ms-2">Código</span>
           </small>
             <span class="ms-1 mt-2 p-2 cupon-title" style="">
               {{datos.name}}
             </span>
           </div>
           <div class="col-12 d-flex flex-column" style="max-height: 72px;">
             <span style="height: 50px;
               overflow-y: scroll;" 
               class="overflow-auto textoinfo_card--cupon me-2 ms-2 p-1"  >
               <p>¡Rebaja exclusiva! 35% de ahorro en la gama veganos al canjear el código de descuento...
               Lorem ipsum dolor sit amet...
               </p>
             </span>
           </div>
           <div class="col-12 text-center pt-1 ps-3 pe-3 pb-1 ">
             <span style="" class="img_card--cupon">
               <img :src="datos.image" alt="" 
               :style="'object-fit: contain !important;width:auto;'">
             </span>
           </div>

       <div class="col-12 text-center  p-0 my-1 box-content">
           
             <hr class="ms-3 m-2 me-3" style="background:#D9D9D9;padding: 0px;margin: 0px;">
           </div>
           <div class="col-12 d-flex justify-content-center">
           <div class="text-center d-flex flex-column me-2 m-1 ms-2">
           <span style="" class="subtitle_card-cupon">
             ¿Funciona el cupón?
           </span>

           <button 
             v-if="datos.cupon.agotado"
             class="btn my-1" style="background: #CC2323;
             padding:0px;
             border-radius:0px;
             width: 100px;
             color: #fff;
             gap: 10px;" >
             AGOTADO
           </button>
           <button 
           v-else
           class="btn" style="background: transparent;
             padding:0px;
             border-radius:0px;
             width: 100px;
             color: #fff;
             gap: 10px;" >
            
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="8" cy="8" r="6" fill="#DF1A1A"/>
           <path d="M7.99998 1.33334C4.32398 1.33334 1.33331 4.32401 1.33331 8.00001C1.33331 11.676 4.32398 14.6667 7.99998 14.6667C11.6766 14.6667 14.6666 11.676 14.6666 8.00001C14.6666 4.32401 11.6766 1.33334 7.99998 1.33334ZM7.99998 10.6667L4.66665 6.66668H11.3333L7.99998 10.6667Z" fill="#F5D8D2"/>
           </svg>

           <span class="mx-2" style="font-weight: 700;
           font-size: 12px;
           line-height: 15px;
           color: #232323;">
             {{datos.cupon.codigo}}
           </span>

           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="8" cy="8" r="6" fill="#0FB734"/>
           <path d="M7.99996 14.6667C11.676 14.6667 14.6666 11.676 14.6666 7.99999C14.6666 4.32399 11.676 1.33332 7.99996 1.33332C4.32329 1.33332 1.33329 4.32399 1.33329 7.99999C1.33329 11.676 4.32329 14.6667 7.99996 14.6667ZM7.99996 5.33332L11.3333 9.33332L4.66663 9.33332L7.99996 5.33332Z" fill="#D2F5DB"/>
           </svg>
           </button>
           </div>
           </div>
   </div>
   <div class="">
     <div class="  p-0 m-0" style=" position: relative;" 
           :class="{'pe-0':(index%2==0),'ps-0':(index%2!=0)}" v-if="!datos.cupon.visible">              
             <Cupons :color_bg="datos.cupon.color_bg" :color_text="datos.cupon.color_text"/>
           </div>
           <div class=" text-center  p-0 m-0" style=" position: relative;" v-else>              
             <CuponsCode :color_bg="datos.cupon.color_bg" :color_text="datos.cupon.color_text"/>
           </div>

           <div class="col-12  my-0 h-auto text-center mb-2 
           d-flex justify-content-between  align-items-center 
           align-content-center p-0 m-0 my-1 d-flex px-1 " >       
           <div class="p-0 m-0 d-flex mb-0 my-1 justify-content-between w-100">
            <div class="d-flex justify-content-center align-items-center">
             <span class="text_footer" >
               Condiciones
             </span>
             <svg width="8" height="4" viewBox="0 0 8 4"  xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0L4 4L7.5 0H0.5Z" fill="#999999"/>
               </svg>
            </div>
            <div class="d-flex  justify-content-around align-items-center">
            <img :src="oclock" alt="" class="me-1 img-fluid">
               <span style="color:#232323;"  class="me-1 text_footer" v-if="datos.cupon.agotado">Caducado</span>
               <span style="color:#9B9B9B" class="m-0 p-0 d-flex  text_footer" v-else>{{datos.cupon.fecha}}</span>
            </div>
            </div>       
           </div> 
           </div>
         </div>
      </div>   
       
       <!-- <span :class="{'offer-grid-datos-img-discount':!datos.oclock,'offer-grid-datos-img-discount-oclock':datos.oclock,}">-{{datos.discount}}%</span>
       <span class="offer-grid-datos-img-oclock" v-if="datos.oclock">2d : 20h : 15s</span> -->
     <!-- </figure> -->
      </div>
</template>

<script>
import Cupons from '../components/svg/cupons.vue';
import CuponsCode from '../components/svg/cupons_code.vue';
import oclock from '../assets/oclock.svg';
import Timer from '../components/svg/oclock.vue';
import IconoMedalla from '../components/svg/medalla.vue';
import IconoAlerta from '../components/svg/alerta.vue';

export default {
props: ["datos", "index"],
components: {
   Cupons,
   CuponsCode,
   Timer,
   IconoMedalla,
   IconoAlerta
},
data(){
 return{
       oclock,
 }
}
}
</script>

<style lang="scss" scoped>
.cupon-title{
text-transform: uppercase;
font-weight: 800;
font-size: 16px;
line-height: 19px;
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
.text_footer{
font-weight: 600;
font-size: 10px;
line-height: 12px;
color: #999999;
}
.footer_card--cupons{
justify-self: flex-end;
font-weight: 400;
font-size: 10px;
line-height: 12px;
color: #9b9b9b;
}
.badget-discount {
position: absolute;
 left: 40px;
 background: #f8f9fa;
 color: #cc2323;
 border: 2px solid #CC2323;
 padding: 0.12rem;
 margin: 0;
 font-size: .60rem;
 font-weight: 700;
}

.countdown-date{
text-align: center;
 justify-content: flex-end;
 align-datoss: center;
 align-content: center;
 display: flex;
}
.badget-buttom{
bottom: 30px !important;
}

.badget-static{
bottom: 0px !important;
}

.img_card--products{
width: 100%;
height: 220px;
       object-fit: contain;
 background-size: contain;
}
.card_cuponds{
width:100; 
height:100%; 
background:#FFFFFF;

}

.title_card--cupon{
font-weight: 600;
 font-size: 10px;
 line-height: 12px;
 letter-spacing: 0.05em;
 color: #A5A5A5;
 /* top: 30px; */
 /* left: 10px; */

 width: 100%;
 display: block;
 height: auto;
 margin-left: 11px;
}

.textoinfo_card--cupon{
font-weight: 400;
display: inline-table;
font-size: 0.67rem;
line-height: 12px;
text-align: justify;
}


.img_card--cupon{
font-weight: 400;
font-size: 10px;
line-height: 12px;
             text-align: justify;
}

.subtitle_card-cupon{
font-weight: 600;
font-size: 10px;
line-height: 12px;
color: #A5A5A5;
}

.card_interno{
height: 100%;
}
</style>