<template>
  <nav class="w-100 my-0" style="position: relative; background: #fff">
    <swiper
      class="nav_profiles ps-1 w-100 pe-1"
      style="gap: 1px; position: relative"
      :slidesPerView="'auto'"
      :spaceBetween="2"
      :initialSlide="0"
      :class="slide_count === 0 ? '' : ''"
      :loop="loppActivo"
      :modules="[Controller]"
      :centeredSlides="true"
      @swiper="setFirstSwiper"
      @slideChange="onSlideChange, alerta_notification(slide_count)"
      :changeSlideMain="changeSlideMain"
    >
      <swiper-slide
        v-for="(items, i) in tabs"
        :key="i.id"
        :id="`swiper-slides`"
        style="width: max-content !important"
        @click="
          onStyle(i), changeView(i + 1), animation_swiper(i), alerta_notification(i)
        "
        @changeSlide="changeSlide(i)"
        :class="i === slide_count ? 'nuevo' : ''"
      >
        <div
          :id="`Tab-${i}`"
          class="py-2 pb-2 d-flex justify-content-center align-items-center"
          :class="[
            onbarra && active === i ? 'p-2 activo' : '',
            i == 0 ? 'ps-2   ms-0' : 'ps-2',
          ]"
        >
          <div
            class=""
            :id="`slider-${i}`"
            :class="onbackground && relleno_on == i ? '' : ''"
          ></div>

          <label
            class="btn_main--slider"
            :class="[onbackground && relleno_on == i ? '' : '']"
            :style="[
              i === slide_count
                ? 'background:' + colores_icon[slide_count] + '30'
                : 'background: #FAFAFA;',
            ]"
            :for="items"
          >
            <div
              class="d-flex w-100 justify-content-center align-items-center"
              style="box-sizing: content-box; border-radius: 15px; height: 28px"
            >
              <span :class="items != '' ? '' : 'w-100 '" class="m-0 p-0 d-flex">
                <IconoTab
                  class="d-flex"
                  :name_icono="name_icono[i]"
                  :colores="colores_icon[i]"
                  :oncolor="active === i ? colores_icon[i] : colores_icon[i]"
                />
              </span>
              <small
                v-if="items != ''"
                class="d-flex p-0 m-0 ms-1 pe-1 ps-1 text-capitalize"
                :style="`font-size:12px;  color:#000;`"
                :class="[slide_count === i ? 'fw-bold' : '']"
                >{{ items }}</small
              >
            </div>
          </label>
        </div>
      </swiper-slide>
    </swiper>
  </nav>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { Controller } from "swiper";
import IconoTab from "../components/svg/IconoTab.vue";

export default {
  props: {
    onbackground: {
      type: Boolean,
      default: false,
    },
    onbarra: {
      type: Boolean,
      default: false,
    },
    tabs: {
      type: Array,
      default: false,
    },
    name_icono: {
      type: Array,
      default: false,
    },
    colores_icon: {
      type: Array,
      default: false,
    },
    slide_count: {
      type: Number,
      default: 0,
    },
    swiperview: {
      type: Number,
      default: 0,
    },
    bloquear_animation: {
      type: Boolean,
      default: false,
    },
    changeSlideMain: {
      type: Boolean,
      default: false,
    },
    porcentaje_degradado: {
      type: Number,
      default: 30,
    },
    loppActivo: {
      type: Boolean,
      default: false,
    },
    controllerSlideFirst: {
      type: Object,
      default: {},
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    IconoTab,
  },

  setup() {
    const firstSwiper = ref(null);

    const setFirstSwiper = (swiper) => {
      firstSwiper.value = swiper;
    };

    return {
      Controller,
      setFirstSwiper,
      firstSwiper,
    };
  },

  data() {
    return {
      swiper: {},
      active: 0,
      posejeY: 0,
      posejeX: 0,
      opacity: 30,
      num_slide: 0,
      newColor: "",
      relleno_on: 0,
      indiceColor: 0,
      changeSwiper: null,
      activaSlide: false,
      centrarSlide: false,
      secondConditionExecuted: false,
      color_icon: ["black", "yellow"],
      colorgba: ["rgba(255,189,99,0.3)"],
      animation_valor_center: ["-0", "-0", "-0", "-0", "7", "-0"],
      animation_valor: ["-58", "-142", "-198", "-196", "-216", "-235"],
    };
  },
  mounted() {
    if (!this.onbarra) {
      this.firstSwiper.translate = "-710";
      this.firstSwiper.setTranslate(this.firstSwiper.translate);
      console.log("TRANSLATE: " + this.firstSwiper.getTranslate());
    }
  },

  computed: {
    computedSwiper() {
      return this.firstSwiper, console.log("computed-TRANSLATE: " + this.firstSwiper);
    },

    ComputedchangeSlideMain() {
      if (this.firstSwiper && this.slide_count) {
        return (
          this.$emit("SlidechangeNavController", this.firstSwiper),
          console.log("Entro 1er IF"),
          console.log("TRANSLATE 1IF: " + this.firstSwiper.getTranslate())
        );
      }
      if (this.slide_count == 0 && this.firstSwiper) {
        this.secondConditionExecuted = true;
        return (
          this.firstSwiper.setTranslate("-670"),
          console.log("Entro 2do IF", this.firstSwiper)
        );
      }
      // if (this.firstSwiper && this.firstSwiper.realIndex == 4) {
      //   this.secondConditionExecuted = false;
      //   console.log("CONDITION: ", this.firstSwiper.realIndex);
      // }
    },

    slide_cambio() {
      return (
        (this.slide_count = this.slide_count),
        console.log("Cambio Slide", this.slide_count)
      );
    },
  },
  methods: {
    alerta_notification(slideIndex) {
      return this.$emit("ClickSlideAlertaNotification", slideIndex);
    },
    onSlideChange() {
      console.log("Si entro: ", this.firstSwiper);
      if (this.firstSwiper) {
        return this.$emit("SlidechangeNavController", this.firstSwiper);
      }
    },
    transition() {
      if (this.slide_count >= 0) {
      }
    },
    toSlide(i) {
      return (
        this.firstSwiper.slideTo(i),
        (this.activaSlide = true),
        this.slide_count,
        (this.firstSwiper.allowTouchMove = true)
      );
    },
    getRef(swiperInstance) {
      swiper.value = swiperInstance;
    },
    next() {
      swiper.value.slideNext(); // should work
      this.firstSwiper.allowTouchMove = true;
    },

    animation_swiper(i) {
      const slides_wipper = document.getElementById("swiper-slides");
      return this.firstSwiper.slideToLoop(i), console.log("Entro en el animation Swiper");
    },
    onChangeSwiper(translateSwiper) {
      if (translateSwiper) {
        return (
          console.log("otro: ", translateSwiper),
          this.firstSwiper.setTranslate(translateSwiper + "77")
        );
      }
    },

    animationSlide(indie, slide_count) {
      return alert(indice + "-----" + slide_count);
    },

    changeSlide(dato) {
      this.toSlide(dato), alert("Holis");
    },

    handleSlideTo() {
      this.firstSwiper.slideTo(3);
    },

    onStyle(i) {
      if (this.onbarra) {
        return (this.active = i);
      } else {
        if (this.onbackground) {
          return (this.relleno_on = i);
        }
      }
    },
    changeView(id) {
      this.$emit("changeView", id);
    },
  },
};
</script>
<style scoped>
.Slide_inicial {
  padding-left: 20px !important;
}

.nuevo {
  border-radius: 15px !important;
  transition: tramsform 0.4s cubic-bezier(0.1, 0.1, 0.1, 0.84) !important;
  transition-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.84) !important;
}

.btn_main--slider {
  /* padding: 2px 4px; 
  border-radius: 16px; */
  padding: 4px 12px;

  height: 34px;
  left: 0px;
  top: 0px;

  background: #cbffda;
  border-radius: 12px;
}

.relleno {
  /* background:v-bind('colorgba[indiceColor]'); */

  gap: 4px;
  margin: 0.5px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: tramsform 0.4s cubic-bezier(0.1, 0.1, 0.1, 0.84) !important;
  transition-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.84) !important;
}

.relleno_base {
  background: #fafafa;
  border-radius: 15px;
  margin: 0.5px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: tramsform 0.4s cubic-bezier(0.1, 0.1, 0.1, 0.84) !important;
  transition-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.84) !important;
}
.slider {
  position: absolute;
  height: 100%;
  width: 100%;
  background: v-bind("colorgba[indiceColor]");
  transition: tramsform 0.4s cubic-bezier(0.1, 0.1, 0.1, 0.84) !important;
  transition-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.84) !important;
  border-radius: 15px;
  z-index: 1;
}
input[type="radio"] {
  display: none;
}
.activo {
  border-bottom: 2px solid #f4c90c;
}

.sliderr {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #8e44ad;
  left: 0;
  top: 0;
  border-radius: 5px;
}
</style>
