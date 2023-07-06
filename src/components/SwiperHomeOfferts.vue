<template>
  <div ref="elementRef" class="row mx-0 px-0 py-1">
    <template v-for="(item, index) in products" :key="index">
      <div class="" v-if="isLoading">
        <SkeletonProduct :index="index" />
      </div>
      <ProductsOfferts
        v-if="!item.is_cupon && !isLoading"
        :products_offers="item"
        :index="index"
        :alerta_notification="alertaEmitNotification"
        @bloquearSwiperSlideMainProducts="getEmitBloquearSwiper"
      />
      <CuponesOfferts v-if="item.is_cupon && !isLoading" :datos="item" :index="index" />
    </template>
  </div>
</template>
<script>
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";
import CuponesOfferts from "../components/CuponsOffers.vue";
import ProductsOfferts from "../components/ProductsOfferts.vue";
import SkeletonProduct from "../components/SkeletonProduct.vue";
import oclock from "../assets/oclock.svg";
import Cupons from "../components/svg/cupons.vue";
import CuponsCode from "../components/svg/cupons_code.vue";

export default {
  props: {
    products: {
      type: Object,
      default: () => [],
    },
    isLoaded: {
      type: Boolean,
      default: true,
    },
    alertaEmitNotification: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    CuponesOfferts,
    ProductsOfferts,
    Cupons,
    CuponsCode,
    SkeletonProduct,
  },
  setup() {
    const isLoading = ref(true);
    const elementRef = ref(null);
    let hasBeenActivated = false;

    const handleScroll = () => {
      if (!hasBeenActivated) {
        const element = elementRef.value;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight) {
            // El elemento está en la posición deseada
            isLoading.value = true;
            hasBeenActivated = true;
            setTimeout(() => {
              isLoading.value = false;
            }, 4000);
          }
        }
      }
    };

    onMounted(() => {
      const element = elementRef.value;
      window.addEventListener("scroll", handleScroll);
      if (element) {
        const rect = element.getBoundingClientRect();
        // console.log(rect.top, rect.left);
      }
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      elementRef,
      isLoading,
    };
  },
  data() {
    return {
      isPostLoading: true,
      oclock: oclock,
      emitBloquearSwiper: true,
      BloquedtouchtouchRatio: 0,
    };
  },
  mounted() {},
  methods: {
    getEmitBloquearSwiper(dato) {
      this.emitBloquearSwiper = dato;
      this.$emit(
        "bloquearSwiperSlideMainProducts",
        this.emitBloquearSwiper,
        this.BloquedtouchtouchRatio
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.img_card--products {
  width: 100%;
  height: auto;
  // object-fit: contain;
  background-size: contain;
}

.buttom_agotado {
  background: #cc2323;
  padding: 0px;
  border-radius: 0px;
  width: 80%;
  height: 12%;
  color: #fff;
}
.countdown--date {
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  display: flex;
}

.badget-discount {
  position: absolute;
  left: 40px;
  background: #f8f9fa;
  color: #cc2323;
  border: 2px solid #cc2323;
  padding: 0.12rem;
  margin: 0;
  font-size: 0.68rem;
  font-weight: 700;
}

.badget-buttom {
  bottom: 30px !important;
}

.badget-static {
  bottom: 0px !important;
}

.agotado_container {
  background: rgb(0 0 0 / 51%);
  mix-blend-mode: normal;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
}
</style>
