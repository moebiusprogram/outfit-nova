<template>
  <div class="top-registration" :style="'background:url('+fondo+')'">
    <div>
      <router-link :to="'/'">Saltar</router-link>
      <figure><img src="../assets/brand.png" alt="brand"></figure>
      
      <p style="font-size:10px" class="text-center">Solo publicamos ofertas de moda con un mínimo del 40% de descuento</p>
    </div>
  </div>
  <div style="background-color: #f4f4f4;
    padding: 12px;
    width: 100%;">
          <SwiperHomeProduct /> 
</div>
</template>

<script>
import fondo from '../assets/registration-bg.png';
import brand from '../assets/brand.svg';
import SwiperHomeProduct from './SwiperHeaderLogosRegister.vue';

export default {
  components: {
    SwiperHomeProduct,
  },
  data() {
    return { 
      fondo : fondo,
      brand : brand,
    }
  },
}
</script>
