<!-- This view has all the categories and sizes to choose from -->


<template>
  <section class="field-selector">
    <button class="size-title row" style="width:100vw; background:transparent; display: flex;align-items: center; border: none; padding: 15px 12px 15px 18px" id="show-modal" @click="showModal = true">
      
        <p class="size-title col-5">{{ capitalName }}</p>
        <div class="col-6">
          <button v-if="selected.length === 0" class="selected-size-tag">Seleccionar</button>
          <div >
            <swiper :slidesPerView="3" :spaceBetween="5" :modules="modules" :navigation="true" class="swiper-js" style="width: 40vw; overflow:hidden;">
              <swiper-slide v-for="(sel, i) in selected" :key="i"  style="display:inline;margin-right:5px;">
                <SizeTag  :size="sel" />
              </swiper-slide>
            </swiper>
          </div> 
        </div>
        <div class= "col-1"  style="filter:opacity(50%)" >
          <img class="next-icon" src="../assets/next.svg" alt="">
        </div>
    </button>
    <transition>
      <SizeModal v-if="showModal && name==='marca'" @close="showModal=false">
        <template #header>
          <h4 class="modal-title">Tus {{ name }}s</h4>
          <div class="search-container" style="width:100%;padding:1.5rem">
            <div class="input-wrapper" style="width:100%;display:flex;align-items:center;border-radius:0.5rem;background:rgb(242,242,242);padding:0.5rem 0.5rem 0.5rem 1rem;max-height: 35px;">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.22222 2.13889C9.42563 2.13779 10.6023 2.49364 11.6035 3.16141C12.6046 3.82919 13.3852 4.77889 13.8465 5.89038C14.3077 7.00187 14.429 8.2252 14.1949 9.40561C13.9608 10.586 13.3819 11.6705 12.5313 12.5218C11.6808 13.3731 10.5968 13.9531 9.41662 14.1883C8.23642 14.4234 7.01298 14.3033 5.90107 13.843C4.78917 13.3828 3.83875 12.603 3.17006 11.6025C2.50137 10.602 2.14445 9.42563 2.14445 8.22222C2.15174 6.61203 2.79425 5.06979 3.93231 3.93068C5.07038 2.79157 6.61204 2.14766 8.22222 2.13889ZM8.22222 1C6.7938 1 5.39746 1.42358 4.20977 2.21716C3.02209 3.01075 2.0964 4.13871 1.54976 5.4584C1.00313 6.77809 0.860105 8.23023 1.13878 9.63121C1.41745 11.0322 2.1053 12.3191 3.11534 13.3291C4.12539 14.3392 5.41227 15.027 6.81324 15.3057C8.21421 15.5843 9.66636 15.4413 10.986 14.8947C12.3057 14.3481 13.4337 13.4224 14.2273 12.2347C15.0209 11.047 15.4444 9.65064 15.4444 8.22222C15.4444 6.30677 14.6835 4.46977 13.3291 3.11534C11.9747 1.76091 10.1377 1 8.22222 1Z"></path>
                <path d="M18.5952 17.8278L14.5008 13.7056L13.7119 14.4889L17.8064 18.6111C17.8578 18.6629 17.9189 18.7041 17.9863 18.7323C18.0536 18.7604 18.1258 18.7751 18.1988 18.7753C18.2718 18.7756 18.3442 18.7615 18.4117 18.7338C18.4792 18.7061 18.5407 18.6653 18.5925 18.6139C18.6443 18.5625 18.6854 18.5013 18.7136 18.434C18.7418 18.3666 18.7564 18.2944 18.7567 18.2214C18.7569 18.1484 18.7428 18.0761 18.7151 18.0086C18.6874 17.941 18.6467 17.8796 18.5952 17.8278Z"></path>
              </svg>
              <input type="text" placeholder="Buscar todas las marcas" style=
              "outline:none;
              width:100%;
              background:transparent;
              margin-left:0.5rem;
              border: none;
              padding-top: 0;
              font-size:13px;
              "/>
            </div>
          </div>
        </template>
        <template #body>
          <h4 class="modal-body-title px-3 py-2">
            Seleccionado
          </h4>
          <div v-for="(brand, i) in brands.filter(e => selected.indexOf(e) >= 0)" :key="i"
          @click.prevent="selected.indexOf(brand) < 0 ? selected.push(brand) : selected.splice(selected.indexOf(brand), 1)"
          class="modal-button"
          >
            <label style="font-size:13px">
              {{ brand }}
            </label>
            <span :class="selected.indexOf(brand) < 0 ? 'modal-not-selected' : 'modal-selected'" />
          </div>
          <h4 class="modal-body-title px-3 py-2">
            #
          </h4>
          <div v-for="(brand, i) in brands.slice(3)" :key="i"
          @click.prevent="selected.indexOf(brand) < 0 ? selected.push(brand) : selected.splice(selected.indexOf(brand), 1)" class="modal-button"
          >
            <label style="font-size:13px">
              {{ brand }}
            </label>
            <span :class="selected.indexOf(brand) < 0 ? 'modal-not-selected' : 'modal-selected'" />

          </div>
          <h4 class="modal-body-title px-3 py-2">
            A
          </h4>
          <div v-for="(brand, i) in brands.slice(0,3)" :key="i"
          @click.prevent="selected.indexOf(brand) < 0 ? selected.push(brand) : selected.splice(selected.indexOf(brand), 1)" class="modal-button"
          >
          <label style="font-size:13px">
            {{ brand }}
          </label>
          <span :class="selected.indexOf(brand) < 0 ? 'modal-not-selected' : 'modal-selected'" />

          </div>
        </template>
        <template #footer>
        </template>
      </SizeModal>
    </transition>
    <transition>
      <SizeModal v-if="showModal && name==='categoría'" @close="showModal=false">
        <template #header>
          <h4 class="modal-title">Tus categorías</h4>
          <div class="search-container" style="width:100%;padding:1.5rem">
            <div class="input-wrapper" style="width:100%;display:flex;align-items:center;border-radius:0.5rem;background:rgb(242,242,242);padding:0.5rem 0.5rem 0.5rem 1rem;max-height: 35px;">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.22222 2.13889C9.42563 2.13779 10.6023 2.49364 11.6035 3.16141C12.6046 3.82919 13.3852 4.77889 13.8465 5.89038C14.3077 7.00187 14.429 8.2252 14.1949 9.40561C13.9608 10.586 13.3819 11.6705 12.5313 12.5218C11.6808 13.3731 10.5968 13.9531 9.41662 14.1883C8.23642 14.4234 7.01298 14.3033 5.90107 13.843C4.78917 13.3828 3.83875 12.603 3.17006 11.6025C2.50137 10.602 2.14445 9.42563 2.14445 8.22222C2.15174 6.61203 2.79425 5.06979 3.93231 3.93068C5.07038 2.79157 6.61204 2.14766 8.22222 2.13889ZM8.22222 1C6.7938 1 5.39746 1.42358 4.20977 2.21716C3.02209 3.01075 2.0964 4.13871 1.54976 5.4584C1.00313 6.77809 0.860105 8.23023 1.13878 9.63121C1.41745 11.0322 2.1053 12.3191 3.11534 13.3291C4.12539 14.3392 5.41227 15.027 6.81324 15.3057C8.21421 15.5843 9.66636 15.4413 10.986 14.8947C12.3057 14.3481 13.4337 13.4224 14.2273 12.2347C15.0209 11.047 15.4444 9.65064 15.4444 8.22222C15.4444 6.30677 14.6835 4.46977 13.3291 3.11534C11.9747 1.76091 10.1377 1 8.22222 1Z"></path>
                <path d="M18.5952 17.8278L14.5008 13.7056L13.7119 14.4889L17.8064 18.6111C17.8578 18.6629 17.9189 18.7041 17.9863 18.7323C18.0536 18.7604 18.1258 18.7751 18.1988 18.7753C18.2718 18.7756 18.3442 18.7615 18.4117 18.7338C18.4792 18.7061 18.5407 18.6653 18.5925 18.6139C18.6443 18.5625 18.6854 18.5013 18.7136 18.434C18.7418 18.3666 18.7564 18.2944 18.7567 18.2214C18.7569 18.1484 18.7428 18.0761 18.7151 18.0086C18.6874 17.941 18.6467 17.8796 18.5952 17.8278Z"></path>
              </svg>
              <input type="text" placeholder="Buscar todas las categorías" style=
              "outline:none;
              width:100%;
              background:transparent;
              margin-left:0.5rem;
              border: none;
              padding-top: 0;
              font-size:13px;
              "/>
            </div>
          </div>
        </template>
        <template #body>
          <h4 class="modal-body-title px-3 py-2">
            Seleccionado
          </h4>
          <div v-for="(cat, i) in categories.filter(e => selected.indexOf(e) >= 0)" :key="i"
          @click.prevent="selected.indexOf(cat) < 0 ? selected.push(cat) : selected.splice(selected.indexOf(cat), 1)"
          class="modal-button"
          >
            <label style="font-size:13px">
              {{ cat }}
            </label>
            <span :class="selected.indexOf(cat) < 0 ? 'modal-not-selected' : 'modal-selected'" />
          </div>
          <h4 class="modal-body-title px-3 py-2">
            #
          </h4>
          <div v-for="(cat, i) in categories.slice(3)" :key="i"
          @click.prevent="selected.indexOf(cat) < 0 ? selected.push(cat) : selected.splice(selected.indexOf(cat), 1)" class="modal-button"
          >
            <label style="font-size:13px">
              {{ cat }}
            </label>
            <span :class="selected.indexOf(cat) < 0 ? 'modal-not-selected' : 'modal-selected'" />

          </div>
          <h4 class="modal-body-title px-3 py-2">
            A
          </h4>
          <div v-for="(cat, i) in categories.slice(0,3)" :key="i"
          @click.prevent="selected.indexOf(cat) < 0 ? selected.push(cat) : selected.splice(selected.indexOf(cat), 1)" class="modal-button"
          >
          <label style="font-size:13px">
            {{ cat }}
          </label>
          <span :class="selected.indexOf(cat) < 0 ? 'modal-not-selected' : 'modal-selected'" />

          </div>
        </template>
        <template #footer>
        </template>
      </SizeModal>
    </transition>
    <transition>
      <SizeModal v-if="showModal && name==='tallas'" @close="showModal=false">
        <template #header>
          <h4 class="modal-title">Tus tallas</h4>
          <div>
            <section class="size-selector-helper" style="display:flex; padding: 15px 20px;">
              <img src="../assets/light-bulb-circle.svg" alt="lightbulb icon" style="margin:auto 15px">
              <p style="font-size:13px;font-weight:600; margin-bottom: 0;">Consejo: selecciona varias tallas que se aproximen a la que usas normalmente</p>
            </section>
          </div>
        </template>
        <template #body>
          <div v-for="(clothe, key) in sizes" :key="key">
            <h4 style="text-transform: capitalize; padding-left:1rem; padding-bottom: 1rem" class="modal-body-title">{{ key }}</h4>
            <div style="display:flex; flex-wrap: wrap; gap:5px; padding-left: 1rem;">
              <div v-for="(size, i) in clothe" :key="i"
              class="alert-size-button px-4"
              :class="selected.indexOf(size) < 0 ? 'modal-size-not-selected' : 'modal-size-selected'"
              @click.prevent="selected.indexOf(size) < 0 ? selected.push(size) : selected.splice(selected.indexOf(size), 1)"
              >
              {{ size }}
            </div>
            </div>
          </div>
        </template>
        <template #footer>
        </template>
      </SizeModal>
    </transition>
        <transition>
      <SizeModal v-if="showModal && name==='precio'" @close="showModal=false">
        <template #header>
          <h4 class="modal-title my-4">Precio</h4>
          <h5 style="font-size:90%; color:#646464">{{ priceFrom }} € - {{ priceTo }} €</h5>
        </template>
        <template #body>
          <section style="display:flex; justify-content: center; gap:0.25rem; padding-top:0.25rem">
            <label for="priceFrom" class="alert-price-label">Precio desde: </label>
            <div class="alert-price-input">
              <input type="number" name="priceFrom" id="priceFrom" v-model='priceFrom' style="border:none; width:50px;">
              <span>€</span>
            </div>
            

            <label for="priceTo" class="alert-price-label">Precio hasta: </label>
            <div class="alert-price-input">
              <input type="number" name="priceTo" id="priceTo" v-model='priceTo' style="border:none;width:50px;">
              <span>€</span>
            </div>
          </section>
        </template>
        <template #footer>
        </template>
      </SizeModal>
    </transition>
    <transition>
      <SizeModal v-if="showModal && name==='descuento mínimo'" @close="showModal=false">
        <template #header>
          <h4 class="modal-title">Descuento mínimo</h4>
        </template>
        <template #body>
          <div v-for="(disc, i) in discounts" :key="i"
          @click.prevent="selected = [disc]"
          class="modal-button-discount"
          :class="selected.indexOf(disc) >= 0 ? 'discount-selected' : 'discount-not-selected'"
          >
            <label style="font-size:13px">
              {{ disc }}
            </label>
            <span v-if="selected.indexOf(disc) >= 0" style="position:relative; right:-75px;top:0px;">
              <img src="../assets/check-mark-icon.svg" alt="" style="height:10px;">
            </span>
          </div>
        </template>
        <template #footer>
        </template>
      </SizeModal>
    </transition>
    <transition>
      <SizeModal v-if="showModal && name==='tiendas'" @close="showModal=false">
        <template #header>
          <h4 class="modal-title">Tus tiendas</h4>
          <div class="search-container" style="width:100%;padding:1.5rem">
            <div class="input-wrapper" style="width:100%;display:flex;align-items:center;border-radius:0.5rem;background:rgb(242,242,242);padding:0.5rem 0.5rem 0.5rem 1rem;max-height: 35px;">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.22222 2.13889C9.42563 2.13779 10.6023 2.49364 11.6035 3.16141C12.6046 3.82919 13.3852 4.77889 13.8465 5.89038C14.3077 7.00187 14.429 8.2252 14.1949 9.40561C13.9608 10.586 13.3819 11.6705 12.5313 12.5218C11.6808 13.3731 10.5968 13.9531 9.41662 14.1883C8.23642 14.4234 7.01298 14.3033 5.90107 13.843C4.78917 13.3828 3.83875 12.603 3.17006 11.6025C2.50137 10.602 2.14445 9.42563 2.14445 8.22222C2.15174 6.61203 2.79425 5.06979 3.93231 3.93068C5.07038 2.79157 6.61204 2.14766 8.22222 2.13889ZM8.22222 1C6.7938 1 5.39746 1.42358 4.20977 2.21716C3.02209 3.01075 2.0964 4.13871 1.54976 5.4584C1.00313 6.77809 0.860105 8.23023 1.13878 9.63121C1.41745 11.0322 2.1053 12.3191 3.11534 13.3291C4.12539 14.3392 5.41227 15.027 6.81324 15.3057C8.21421 15.5843 9.66636 15.4413 10.986 14.8947C12.3057 14.3481 13.4337 13.4224 14.2273 12.2347C15.0209 11.047 15.4444 9.65064 15.4444 8.22222C15.4444 6.30677 14.6835 4.46977 13.3291 3.11534C11.9747 1.76091 10.1377 1 8.22222 1Z"></path>
                <path d="M18.5952 17.8278L14.5008 13.7056L13.7119 14.4889L17.8064 18.6111C17.8578 18.6629 17.9189 18.7041 17.9863 18.7323C18.0536 18.7604 18.1258 18.7751 18.1988 18.7753C18.2718 18.7756 18.3442 18.7615 18.4117 18.7338C18.4792 18.7061 18.5407 18.6653 18.5925 18.6139C18.6443 18.5625 18.6854 18.5013 18.7136 18.434C18.7418 18.3666 18.7564 18.2944 18.7567 18.2214C18.7569 18.1484 18.7428 18.0761 18.7151 18.0086C18.6874 17.941 18.6467 17.8796 18.5952 17.8278Z"></path>
              </svg>
              <input type="text" placeholder="Buscar todas las tiendas" style=
              "outline:none;
              width:100%;
              background:transparent;
              margin-left:0.5rem;
              border: none;
              padding-top: 0;
              font-size:13px;
              "/>
            </div>
          </div>
        </template>
        <template #body>
          <h4 class="modal-body-title px-3 py-2">
            Seleccionado
          </h4>
          <div v-for="(shop, i) in shops.filter(e => selected.indexOf(e) >= 0)" :key="i"
          @click.prevent="selected.indexOf(shop) < 0 ? selected.push(shop) : selected.splice(selected.indexOf(shop), 1)"
          class="modal-button"
          >
            <label style="font-size:13px">
              {{ shop }}
            </label>
            <span :class="selected.indexOf(shop) < 0 ? 'modal-not-selected' : 'modal-selected'" />
          </div>
          <h4 class="modal-body-title px-3 py-2">
            #
          </h4>
          <div v-for="(shop, i) in shops.slice(1)" :key="i"
          @click.prevent="selected.indexOf(shop) < 0 ? selected.push(shop) : selected.splice(selected.indexOf(shop), 1)" class="modal-button"
          >
            <label style="font-size:13px">
              {{ shop }}
            </label>
            <span :class="selected.indexOf(shop) < 0 ? 'modal-not-selected' : 'modal-selected'" />

          </div>
          <h4 class="modal-body-title px-3 py-2">
            A
          </h4>
          <div v-for="(shop, i) in shops.slice(0,1)" :key="i"
          @click.prevent="selected.indexOf(shop) < 0 ? selected.push(shop) : selected.splice(selected.indexOf(shop), 1)" class="modal-button"
          >
          <label style="font-size:13px">
            {{ shop }}
          </label>
          <span :class="selected.indexOf(shop) < 0 ? 'modal-not-selected' : 'modal-selected'" />

          </div>
        </template>
        <template #footer>
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
  name: 'FieldSelector',
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
      priceFrom:'',
      priceTo:'',
      sizes: {
        pantalones: ['24','25','26','27','28','29','30','31','32','33','34','35','36','37','38'],
        calzado: ['36','37','38','38.5','39','39.5','40','40.5','41','41.5','42','42.5','43','43.5','44','45','46'],
        camiseta: ['XXXS','XXS','XS','S','M','L','XL','XXL','XXXL']
      },
      brands: ['Nike','Adidas','Gucci','Springfield','Hollister'],
      categories: ['Zapatos', 'Sudaderas', 'Camisas', 'Zapatillas', 'Vestidos', 'Gorras'],
      shops: ['Oysho', 'Amazon', 'About You'],
      discounts: ['Mínimo 30% descuento', 'Mínimo 50% descuento', 'Mínimo 70% descuento', 'Más del 70% descuento']
    }
  },
  props: ['name', 'selected'],
  computed: {
    capitalName () {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }
  },
  methods: {
    test () {
      console.log('works!!')
    }
  }
}
</script>
