<template>
  <section class="brands"  :style="'display: flex;justify-content: center;align-items: center;background:url('+background+');background-size: cover;background-repeat: no-repeat;height: 100vh;'">
    <div class="row">
      <div class="col-12">
        
    <div class="row">

      <div class="col-12 text-center">
        <img :src="outfitnova2" alt="">  
      </div>
    </div>

    <div class="row py-4">

      <div class="col-12 text-center">
        <span class="text-white fw-bolder" style="font-size:16px">

          ¿Para quién quieres ver ofertas?

        </span>
      </div>
    </div>

    <div class="row">

      <div class="col-12 text-center mb-3">
       <button class="btn bg-white btn-block w-75 p-2"  style="border-radius:0px"> Mujer  </button>
      </div>

      <div class="col-12 text-center mb-3">
       <button class="btn bg-white btn-block w-75 p-2"  style="border-radius:0px"> Hombre  </button>
      </div>

      <div class="col-12 text-center mb-3">
       <button class="btn bg-white btn-block w-75 p-2"  style="border-radius:0px"> Niño  </button>
      </div>
 
      <div class="col-12 text-center mb-3">
       <button class="btn bg-white btn-block w-75 p-2"  style="border-radius:0px"> Niña  </button>
      </div>

      <div class="col-12 text-center">
       <button class="btn bg-white btn-block w-75 p-2"  style="border-radius:0px"> Infantil </button>
      </div>
    </div>

    <div class="row pt-3">

      <div class="col-12  d-flex justify-content-center mb-3">
       <button class="btn btn-block w-50 d-flex"  style="justify-content: space-between;
    align-items: center;border-color:#fff; border-radius:0px;color:#fff"> 
        <img :src="spanish" alt="" style="width:20px">
        España 
        <img :src="chevron_right_white" alt="">
        </button>
      </div>

    </div>


    <div class="row py-4">

      <div class="col-12 d-flex justify-content-center mb-3">
        <a href="" class="text-white">Ir directo a la tienda</a>
      </div>

    </div>

 
      </div>
    </div>

<!-- 
<router-link :to="'/offer-confirmation'" class="btn btn-block text-white rounded-pill" style=" position: absolute;
       bottom: 20px;
       right: 20px; background:#000; ">Próximo <img :src="arrow_right" alt=""></router-link> -->


  </section>
</template>

<script>
import NavbarSearch from '../components/NavbarSearch.vue';

import outfitnova2 from '../assets/outfitnova2.svg';
import background from '../assets/fashion-bg.jpg';
import img from '../assets/registration-bg.png';
import spanish from '../assets/banderas/spanish.svg';
import arrow_right from '../assets/arrow-right.svg';
import chevron_right_white from '../assets/chevron-right-white.svg';
export default {
  data() {
    return {
      arrow_right,
      background,
      outfitnova2,
      spanish,
      chevron_right_white,
      type:'Chollo'
    }
  },
  components: {
    NavbarSearch,
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
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
  },
 
}
</script>
