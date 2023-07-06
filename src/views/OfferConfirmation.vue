<template>
  <section class="brands bg-white" style="height: calc(100% - 10px)">
    <NavbarSearch :show="true" :white="true" name="ENVIAR CHOLLOS" :help="true" route_to="offer" />
  




    <div style="margin-top: 80px"></div>
    <div class="mx-3">
    <div class="row text-center bg-white rounded d-flex align-items-center">
      <div
        class="
          col-12
          pb-2
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <span style="font-weight: 600; font-size: 18px; line-height: 22px">
          ¿Vamos a revisar?
        </span>
      </div>
    </div>
 
    <div class="row py-1">
      <div
        class="col-10 d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
       <span style="font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#514D4D">TÍTULO DEL CHOLLO</span>
      </div> 
      <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control form-control" style="border-right:none !important;" value="Topshop knit midi sweater dress in gray heather amazon.es Topshop knit
        midi sweater dress in gray heather amazon.es">
        <span class="input-group-text plac px-1" style="border-left:none !important;"> <img :src="pencil_edit" alt="" style="width: 24px; height: 24px" /></span>
      </div>

    </div>
    <div class="row py-1">
      <div
        class="col-10 d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
       <span style="font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#514D4D">PRECIO</span>
      </div> 
      <div class="input-group mb-3 input-group-sm">
        <span class="input-group-text rounded-start plac">€</span>
        <input type="text" class="form-control form-control" style="border-right:none !important;" value="19,99">
        <span class="input-group-text plac px-1" style="border-left:none !important;"> <img :src="pencil_edit" alt="" style="width: 24px; height: 24px" /></span>
      </div>

    </div>
    <div class="row py-1">
      <div
        class="col-10 d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
       <span style="font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#514D4D">PRECIO HABITUAL</span>
      </div> 
      <div class="input-group mb-3 input-group-sm">
        <span class="input-group-text rounded-start plac">€</span>
        <input type="text" class="form-control form-control" style="border-right:none !important;" value="50,21">
        <span class="input-group-text plac px-1" style="border-left:none !important;"> <img :src="pencil_edit" alt="" style="width: 24px; height: 24px" /></span>
      </div>

    </div>
    <div class="row py-1">
      <div
        class="col-10 d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
       <span style="font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#514D4D">CATEGORÍA</span>
      </div> 
      <div class="input-group mb-3 input-group-sm">
        <select class="form-select" id="inputGroupSelect01" style="border-right:none !important;">
          <option selected>Seleccione...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> 
         <span class="input-group-text plac px-1" style="border-left:none !important;"> <img :src="pencil_edit" alt="" style="width: 24px; height: 24px" /></span>
      </div>

    </div>
 

    <div class="row py-1">
      <div
        class="col-10 d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
       <span style="font-size: 10px;"></span>
       <span style="font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#514D4D"> MODA</span>
      </div>
      
    </div>

    <div class="row pt-1">
      <div
        class="col-12 d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
       <span style="font-size: 10px;">GENERO</span> 
      </div>
    </div>
    <div class="row">
      <div
        class="col-4"> 
       <span style="font-family: Inter;
        font-size: 12px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color:#514D4D; padding-right: 0 !important;"
        @click="type_genero='man'">
        <img :src="(type_genero=='man')?check:uncheck" alt=""  style="width: 16px; height: 16px">
         Hombre</span>
      </div>
      <div
        class="col-4"> 
       <span style="font-family: Inter;
        font-size: 12px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color:#514D4D"
        @click="type_genero='woman'"> 
        <img :src="(type_genero=='woman')?check:uncheck" alt="" style="width: 16px; height: 16px">
        Mujer</span>
      </div>
      <div
        class="col-4"> 
       <span style="font-family: Inter;
        font-size: 12px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color:#514D4D"
        @click="type_genero='unisex'"> 
        <img :src="(type_genero=='unisex')?check:uncheck" alt="" style="width: 16px; height: 16px">
        Unisex</span>
      </div>
    </div>

    <div class="row py-3">
      <div
        class="col-12 d-grid small"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
       ¿Quieres añadir código de descuento y/o cupones?
      </div> 
      <div
        class="col-3"> 
       <span style="
        font-size: 12px;
        font-weight: 600;"
        @click="add_code='yes'">
        <img :src="(add_code=='yes')?check:uncheck" alt="" style="width: 16px; height: 16px">
         Si</span>
      </div>
      <div
        class="col-3"> 
       <span style="
        font-size: 12px;
        font-weight: 600;"
        @click="add_code='no'"> 
        <img :src="(add_code=='no')?check:uncheck" alt="" style="width: 16px; height: 16px">
        No</span>
      </div>
    <transition> 
        <div
         v-if="add_code=='yes'"
          class="col-12 d-grid pt-3"
          style="color: #514D4D; font-weight: 600; text-align: justify"
        >
        <span class="small">Código de descuento o cupón (Opcional)</span> 
        <div class="row">          
          <div
            class="col-12 d-grid py-1"
            style="color: #969696; font-weight: 500; text-align: justify"
          >
          <span class="small">Ejemplo: DESCUENTO25</span> 
          </div>
          <div
            class="col-12 d-grid py-1"
            style="color: #8d8d8d; font-weight: 500; text-align: justify"
          >
          <input type="text" name="" class="form-control w-100 rounded" placeholder="Código a utilizar para obtener el descuento">
        </div>
        </div>
        </div>
    </transition>
        </div>

         <div class="row">
          <div
            class="col-12"
            style="color: #514D4D;"
          >
          <span class="small fw-bolder">IMAGENES</span> 
          </div> 
      </div>


        <div class="row">
          <div class="col-12">
            <div class="row  p-0 m-0 d-flex align-items-center">
              <div class="col-2 rounded d-flex align-items-center" style="background:#eff1f3; min-height:90px; max-height:90px">
                <label for="adjuntar_imagen">
                  <div class="row">
                    <div class="col-12 text-center">
                      <img :src="image" alt=""  style="width: 14px; height: 14px" /> 
                    </div>
                      <span class="col-12 text-center" style="font-size:10px; font-weight:600;color: #8d8d8d;">Insertar </span>
                      <input type="file" @change="adjuntarImagen()" ref="adjuntar_imagen_ref" style="display:none" id="adjuntar_imagen" > 
                  </div>
                </label>
              </div> 
              
              <div class="col-10">
              <swiper
                :slides-per-view="2"
                :space-between="5"
                @swiper="onSwiper"
                :lazy="true"
                class="swiper-lazy"
                @slideChange="onSlideChange"
              >

                <swiper-slide
                  v-for="(photo, index) in photos"
                  :key="index"
                  :virtualIndex="index"

                  style="margin-left:10px;"
                  >
                  <div :style="'min-width:130px !important;min-height:210px !important;max-width:150px !important;max-height:220px !important;background:url('+photo.src+');    background-size: contain;background-repeat: no-repeat;background-position-y: center;'">

                    <span style="position: absolute;padding-top: 5px;padding-left: 90px;">
                    <button class="btn btn-sm rounded-circle" @click="RemovePhoto(photo.id)" style="padding: 2px 0px 3px 4px;">
                      <img :src="close" alt="">
                    </button>
                  </span>
                  

                  </div>
                </swiper-slide>


                <swiper-slide>
                
                </swiper-slide> 
                
                
              </swiper>
</div>
            </div>
          </div>
        </div>

         <div class="row pt-4">
          <div
            class="col-12"
            style="color: #514D4D;"
          >
          <span class="small fw-bolder">Otro tipo de descuento</span> 
          </div>
          <div
            class="col-12 small"
            style="color: #969696; font-weight: 500;"
          >
          Ejemplo: descuento al pagar con Paypal, recoger cupón en la tienda, descuento al tramitar pedido, etc.
          </div>
      </div>

    <div class="row pt-4 d-flex align-items-center">
      <div class="col-2">
        <img :src="plus2" alt=""  style="width: 44px; height: 44px" />
       </div>
      <div
        class="col-10 small"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
      <span style="
        font-size: 16px;
        font-weight: 600; 
        text-align: left;
        ">Instrucciones del descuento</span>
        <br>
        Ejemplo: descuento al pagar con Paypal, recoger cupón en la tienda, descuento al tramitar pedido, etc.
      </div> 
    </div>



    <div class="row pt-5">
      <div
        class="col-12 d-grid"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
       <span class="small">DESCRIPCIÓN</span> 
      </div>
    </div>
    <div class="row pt-2 d-flex align-items-center">
      <div class="col-2">
        <img :src="plus2" alt=""  style="width: 44px; height: 44px" />
       </div>
      <div
        class="col-10 small"
        style="color: #8d8d8d; font-weight: 500; text-align: justify"
      >
      <span class="font-weight-bolder" style="font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
">Introduce la descripción</span>
<br>
        Un poco más de información del chollo y
si es necesario explicar los pasos para
conseguirlo
      </div> 
    </div>




  <div class="row mx-0 px-4 py-5">
    <div class="col d-flex justify-content-end" style="background:#000; ">
 
<router-link :to="'/'" class="btn btn-block text-white w-100" style="border-radius: 0px;
    position: fixed;
    bottom: 0px;
    right: 0px;
    background: rgb(0, 0, 0);    display: flex;
    justify-content: flex-end;
    font-size:17px;
    padding: 13px;">PUBLICAR <img :src="arrow_right" alt="" class="ms-3"></router-link>


    </div>
  </div>

  </div>
        <div style="margin-top: 30px"></div>


  </section>
</template>

<script>
import NavbarSearch from "../components/NavbarSearch.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

import img from "../assets/registration-bg.png";
import arrow_right from "../assets/arrow-right.svg";
import pencil_edit from "../assets/pencil-edit.svg";
import chollo1 from "../assets/chollo1.webp";
import check from "../assets/check.svg";
import uncheck from "../assets/uncheck.svg";
import plus2 from "../assets/plus2.svg";
import arrow2 from "../assets/arrow2.svg";
import image from "../assets/image.svg";
import close from "../assets/close.svg";
export default {
  data() {
    return {
      arrow_right: arrow_right,
      pencil_edit: pencil_edit,
      chollo1: chollo1,
      check: check,
      uncheck: uncheck,
      plus2: plus2,
      arrow2: arrow2,
      image: image,
      close: close,
      type_genero:'man',
      add_code:'no',
      photos:[],
    };
  },
  components: {
      Swiper,
      SwiperSlide,
    NavbarSearch,
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    
    adjuntarImagen(event){
        var reader = new FileReader()
        reader.readAsDataURL(this.$refs.adjuntar_imagen_ref.files[0])
        let baseFile = ''
        reader.onload = () => {// <------ use arrow function
          baseFile = reader.result
          this.photos.push({
            id: this.photos.length+1,
            src: baseFile,
          });
        
        };
    }, 
    RemovePhoto(data){
      console.log("🚀 ~ file: PhotosGallery.vue ~ line 19 ~ RemovePhoto ~ data", data)
      
      this.photos  = this.photos.filter( items => {
             return items.id != data;
      })


     },

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
};
</script>

<style>

.plac{
  border: 1px solid #eff1f3 !important;
  background-color: #fff !important;
  color: #495057 !important;
}
.form-control{
  border: 1px solid #eff1f3 !important;
}
.form-control:focus{
  border: 1px solid #eff1f3 !important;
}
.form-select{
  border: 1px solid #eff1f3 !important;
}
.form-select:focus{
  border: 1px solid #eff1f3 !important;
}
</style>