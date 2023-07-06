<template>
  <section class="size-selector">
    <button class="size-title row fit-all-screen" style="background:transparent; display: flex;align-items: center; border: none;" id="show-modal" @click="showModal = true">
      
        <p class="size-title col-5">Talla de {{ name }}</p>
        <div class="col-6">
          <button v-if="selectedSizes.length === 0" class="selected-size-tag">Seleccionar tallas</button>

          <div >
            <swiper :slidesPerView="3" :spaceBetween="5" :modules="modules" @swiper="onSwiper" :navigation="true" class="swiper-js" style="width: 40vw; overflow:hidden;">
              <swiper-slide v-for="(selectedSize, i) in selectedSizes" :key="i" :size="selectedSize">
                <SizeTag :size="selectedSize" />
              </swiper-slide>
            </swiper>
          </div>
        </div> 
        <div class= "col-1"  style="filter:opacity(50%)" >
          <img class="next-icon" src="../assets/next.svg" alt="">
        </div>
    </button>
    <transition>
      <SizeModal v-if="showModal" @close="showModal=false">
        <template #header>
          <h4 class="modal-title">Tus tallas de {{ name }}</h4>
          <div>
            <section class="size-selector-helper" style="display:flex; padding: 15px 20px;">
              <img src="../assets/light-bulb-circle.svg" alt="lightbulb icon" style="margin:auto 15px">
              <p style="font-size:13px;font-weight:600; margin-bottom: 0;">Consejo: selecciona varias tallas que se aproximen a la que usas normalmente</p>
            </section>
          </div>
        </template>
        <template #body>
          <button v-for="(size, i) in sizes[name]" :key="i"
          @click.prevent="selectedSizes.indexOf(size) < 0 ? selectedSizes.push(size) : selectedSizes.splice(selectedSizes.indexOf(size), 1)" class="size-btn"
          >
              {{ size }}
            <span v-if="selectedSizes.indexOf(size) >= 0" :size="size" class="selected-size-tag" 
            style="position:absolute;right:60px;"
            >
              Tu talla
            </span>
          </button>
        </template>
        <template #footer>
          <section style="background:#f5f5f5">
            <button class="accept-btn" style="position:sticky; bottom:0; left:0; display:block; letter-spacing:3px;"
            @click="showModal=false"
            >
              ACEPTAR
            </button>
          </section>
        </template>
      </SizeModal>
    </transition>

  </section>
</template>
<script>
import SizeTag from '../components/SizeTag.vue';
import SizeModal from '../components/SizeModal.vue';
import NavbarSearch from '../components/NavbarSearch.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export default{
  name: 'SizeSelector',
  components: {
    NavbarSearch,
    SizeModal,
    SizeTag,
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  },
  data () {
    return {
      showModal: false,
      sizes: {
        pantalones: ['24','25','26','27','28','29','30','31','32','33','34','35','36','37','38'],
        calzado: ['36','37','38','38.5','39','39.5','40','40.5','41','41.5','42','42.5','43','43.5','44','45','46'],
        camiseta: ['XXXS','XXS','XS','S','M','L','XL','XXL','XXXL']
      }
    }
  },
  props: ['name', 'selectedSizes'],
  mounted () {
    console.log(this.name, this.sizes[this.name])
  },
  methods: {

  }
}
</script>
