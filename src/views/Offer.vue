<template>
  <section class="brands bg-white " style="height:calc(100% - 10px);">
    
    <NavbarSearch :show="true" :white="true" name="ENVIAR CHOLLOS" :help="true" route_to="/" />
  
    <div style="margin-top:100px"></div>
    

    <OfferChollos/>
 

  <div class="row mx-0 px-4 py-5">
    <div class="col d-flex justify-content-end" style="background:#000; ">
 
<router-link :to="'/offer-confirmation'" class="btn btn-block text-white w-100" style="border-radius: 0px;
    position: fixed;
    bottom: 0px;
    right: 0px;
    background: rgb(0, 0, 0);    display: flex;
    justify-content: flex-end;
    font-size:17px;
    padding: 13px;">Siguiente <img :src="arrow_right" alt="" class="ms-3"></router-link>


    </div>
  </div>

<!-- 
<router-link :to="'/offer-confirmation'" class="btn btn-block text-white rounded-pill" style=" position: absolute;
       bottom: 20px;
       right: 20px; background:#000; ">Próximo <img :src="arrow_right" alt=""></router-link> -->


  </section>
</template>

<script>
import OfferChollos from '../components/OfferChollos.vue';
import NavbarSearch from '../components/NavbarSearch.vue';

import img from '../assets/registration-bg.png';
import arrow_right from '../assets/arrow-right.svg';
export default {
  data() {
    return {
      arrow_right: arrow_right,
      type:'Chollo'
    }
  },
  components: {
    NavbarSearch,
    OfferChollos,
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
