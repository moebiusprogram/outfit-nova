<template class="d-flex">
  <!-- Iconos agrupados, usados para los navegations tabs -->

  <component :is="name_icono" :color="oncolor" ></component>
  
</template>

<script>
import IconoFire from './fire.vue';
import IconoFuego from './fuego_vivo.vue';
import IconoStart from './start.vue';
import IconoDiamante from './diamante.vue';
import IconoActivity from './activity.vue';
import IconoCampana from './campana.vue';
import IconoAlerta from './alerta.vue';
import IconoComment from './commentario.vue';
import IconoMedalla from './medalla.vue';
import IconoCommentPurple from './commentPurple.vue';
import IconoGuardada from './guardadas.vue';
import IconoActivityMinimalista from './activityIconMinimalista.vue'
export default {
    props:  {
        name_icono:{
        type:String,
        default:false
       },
         colores:{
         type:String,
         default: 'black'
       },
         oncolor:{
         type:String,
         default:'black'
       }
    },
       components: {
         IconoFire,
         IconoStart,
         IconoFuego,
         IconoDiamante,
         IconoActivity,
         IconoCampana,
         IconoComment,
         IconoAlerta,
         IconoCommentPurple,
         IconoGuardada,
         IconoMedalla,
         IconoActivityMinimalista 

       },
       data(){
         return {
         
         }
       }

}
</script>

<style>

</style>