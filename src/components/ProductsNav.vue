<template>
  <div class="products-nav">
      <nav class="w-100 my-0 py-1 products_nav" style="position:relative;">
    <swiper 
       :slidesPerView="'auto'" 
       :spaceBetween="3" 
       class="nav_profiles ps-0 w-100  pe-2 d-flex"
       style="gap:1px;"
       >
              <swiper-slide 
              style="position:relative; width:auto;" 
              class=" + 'd-flex gap-2  ps-2 pe-2'" > 
              <BrandTiendaTag 
              :brands="brands" />
              
              </swiper-slide>

              <swiper-slide 
                    v-for="(item, index) in selection"
                    :key="index.id"
                    style="position:relative;width:auto; " 
                    class=" + 'd-flex gap-2  ps-0 pe-1'"> 
           <!-- Component show  lod inputs Select -->
              <FormPrenda 
                    label_input="" 
                    :tallas="item"
                    :border_btn="false"
                    :index_prop="index"
                    @selectProductForm="SelectProductForm"
                  
                    ></FormPrenda>
                    <!-- open modals -->
               </swiper-slide>
     </swiper>
      </nav>

      <transition>
      <SizeModal v-if="showModal && name==='talla'" :modalHeight="'75vh'" :bodyHeight="'35vh'" @close="showModal=false">
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
          <div >
            <div style="display:flex; flex-wrap: wrap; gap:10px; padding-left: 1rem;" class="px-2">
              <div v-for="(size, key) in lista_Selection[name].tags" :key="key"
              class="alert-size-button px-4"
              :class="lista_Selection[name].selected.indexOf(size) < 0 ? 'modal-size-not-selected' : 'modal-size-selected'"
              @click.prevent="lista_Selection[name].selected.indexOf(size) < 0 ? lista_Selection[name].selected.push(size) : lista_Selection[name].selected.splice(lista_Selection[name].selected.indexOf(size), 1)">
              {{ size }}
            </div>
            </div>
          </div>
        </template>
        <template #footer :footerPosition="'50px'">
        </template>
      </SizeModal>
    </transition>
        <transition>
      <SizeModal v-if="showModal && name==='precio'" :modalHeight="'50vh'" :bodyHeight="'10vh'" @close="showModal=false">
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
      <SizeModal v-if="showModal && name==='tienda'" :bodyHeight="'50vh'" @close="showModal=false">
        <template #header>
          <h4 class="modal-title">Tus tiendas</h4>
          <div class="search-container" style="width:100%;padding:1.5rem">
            <div class="input-wrapper" style="width:100%;display:flex;align-items:center;border-radius:0.5rem;background:rgb(242,242,242);padding:0.5rem 0.5rem 0.5rem 1rem;max-height: 35px;">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.22222 2.13889C9.42563 2.13779 10.6023 2.49364 11.6035 3.16141C12.6046 3.82919 13.3852 4.77889 13.8465 5.89038C14.3077 7.00187 14.429 8.2252 14.1949 9.40561C13.9608 10.586 13.3819 11.6705 12.5313 12.5218C11.6808 13.3731 10.5968 13.9531 9.41662 14.1883C8.23642 14.4234 7.01298 14.3033 5.90107 13.843C4.78917 13.3828 3.83875 12.603 3.17006 11.6025C2.50137 10.602 2.14445 9.42563 2.14445 8.22222C2.15174 6.61203 2.79425 5.06979 3.93231 3.93068C5.07038 2.79157 6.61204 2.14766 8.22222 2.13889ZM8.22222 1C6.7938 1 5.39746 1.42358 4.20977 2.21716C3.02209 3.01075 2.0964 4.13871 1.54976 5.4584C1.00313 6.77809 0.860105 8.23023 1.13878 9.63121C1.41745 11.0322 2.1053 12.3191 3.11534 13.3291C4.12539 14.3392 5.41227 15.027 6.81324 15.3057C8.21421 15.5843 9.66636 15.4413 10.986 14.8947C12.3057 14.3481 13.4337 13.4224 14.2273 12.2347C15.0209 11.047 15.4444 9.65064 15.4444 8.22222C15.4444 6.30677 14.6835 4.46977 13.3291 3.11534C11.9747 1.76091 10.1377 1 8.22222 1Z"></path>
                <path d="M18.5952 17.8278L14.5008 13.7056L13.7119 14.4889L17.8064 18.6111C17.8578 18.6629 17.9189 18.7041 17.9863 18.7323C18.0536 18.7604 18.1258 18.7751 18.1988 18.7753C18.2718 18.7756 18.3442 18.7615 18.4117 18.7338C18.4792 18.7061 18.5407 18.6653 18.5925 18.6139C18.6443 18.5625 18.6854 18.5013 18.7136 18.434C18.7418 18.3666 18.7564 18.2944 18.7567 18.2214C18.7569 18.1484 18.7428 18.0761 18.7151 18.0086C18.6874 17.941 18.6467 17.8796 18.5952 17.8278Z"></path>
              </svg>
              <input type="text" 
              placeholder="Buscar todas las tiendas" 
              style="outline:none;width:100%;background:transparent;margin-left:0.5rem;border: none;padding-top: 0;font-size:13px;"/>
            </div>
          </div>
        </template>
        <template #body>
          <h4 class="modal-body-title px-3 py-2">
            Seleccionado
          </h4>
          <div v-for="(size, key) in lista_Selection[name].selected" :key="i"
          class="modal-button"
          >
            <label style="font-size:13px">
              {{ size }}
            </label>
            <span :class="lista_Selection[name].selected.indexOf(size) < 0 ? 'modal-not-selected' : 'modal-selected'" />
          </div>
          <h4 class="modal-body-title px-3 py-2">
            #
          </h4>
          <div v-for="(size, i) in [...lista_Selection[name].tags].slice(1)" :key="i"
          class="modal-button"
          @click.prevent="lista_Selection[name].selected.indexOf(size) < 0 ? lista_Selection[name].selected.push(size) : lista_Selection[name].selected.splice(lista_Selection[name].selected.indexOf(size), 1)"
          >
            <label style="font-size:13px">
              {{ size }}
            </label>
            <span :class="lista_Selection[name].selected.indexOf(size) < 0 ? 'modal-not-selected' : 'modal-selected'" />

          </div>
          <h4 class="modal-body-title px-3 py-2">
            A
          </h4>
          <div v-for="(size, i) in [...lista_Selection[name].tags].slice(0,1)" :key="i"
          class="modal-button"
          >
          <label style="font-size:13px">
            {{ size }}
          </label>
          <span :class="lista_Selection[name].selected.indexOf(size) < 0 ? 'modal-not-selected' : 'modal-selected'" />

          </div>
        </template>
        <template #footer>
        </template>
      </SizeModal>
    </transition>

      <!-- Item Selection -->
      <ShowSelectiontienda
              v-if="onShowSelect"
              :idSelection="idSelection"
              :ShowSelection="nombre_selection"
              :datos_select="lista_Selection"/>

  </div>
</template>

<script>
import { Swiper,  SwiperSlide } from 'swiper/vue';
import BrandTiendaTag from '../components/BrandTienda/BrandTiendaTag.vue';
import SizeModal from '../components/SizeModal.vue';
import FormPrenda from '../components/FormPrenda.vue';
import ShowSelectiontienda from '../components/ShowSelectiontienda.vue';
export default {
components: {
  FormPrenda,
  BrandTiendaTag,
  Swiper,
  SizeModal,
  SwiperSlide,
  ShowSelectiontienda
},
data(){
return {
   name: '',
   showModal: false,
   priceFrom:'',
      priceTo:'',
   nombre_selection:'',
   idSelection:0,
   onShowSelect:false,
   brands: [
    {
      name: 'Ver agotadas',
      amount: '',
      img: '',
      index: 0,
      checking: true
    },
  ],
  selection_categoria:['Talla', 'Tienda', 'Precio'],
  selection:[
        {
        tipoSelect:[{
        name_form:'Talla',
        name:'UE',
        sizes : [
              { id:'1', nro:'34', available:true },
              { id:'2', nro:'35', available:true },
              { id:'3', nro:'37', available:true },
              { id:'4', nro:'38', available:true },
              { id:'5', nro:'39', available:true },
        ]
        },
        ],
              },
              {
        tipoSelect:[{
        name_form:'Tienda',
        name:'Mango',
        sizes : [
              { id:'1', nro:'34', available:true },
              { id:'2', nro:'35', available:true },
              { id:'3', nro:'37', available:true },
              { id:'4', nro:'38', available:true },
              { id:'5', nro:'39', available:true },
        ]
        },
        ],
              },
              {
        tipoSelect:[{
        name_form:'Precio',
        name:'EUR',
        sizes : [
              { id:'1', nro:'34', available:true },
              { id:'2', nro:'35', available:true },
              { id:'3', nro:'37', available:true },
              { id:'4', nro:'38', available:true },
              { id:'5', nro:'39', available:true },
        ]
        },
      ],
        },
        
  ],

  lista_Selection:{
      tienda:{
            tags:['Gucci', 'Prada', 'Balenciaga','Adidas','Nike','Pedro del Hierro','Primark','Ralph Lauren'],
            selected:[]},
      talla:{tags:['34','35','36','37','38','39'],
            selected: []},
      precio:{items:['5€ - 250€', '1€ - 300€', '30€ - 500€','9€ - 999€','5€ - 25€'],
            selected: []}
  }
 
}
},
methods: {

chowSelect(tipo){
  this.$emit('chowSelect', tipo);
},
 SelectProductForm(data, indice) {
  this.name = data.toLowerCase()
  console.log(this.lista_Selection[this.name].tags)
  this.idSelection = indice
  this.showModal = true
  },
}
}
</script>

<style lang="scss" scoped>
.active_btn{
  border: 2px solid #e8bf2e;
}

.products_nav{
  position:relative; 
  background:#FFF;
  border-bottom: 1px solid #EDEDED;
}
</style>