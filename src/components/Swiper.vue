<template>
  <div @scroll="scrollHandler" class="my-swiper" ref="slider">
    <div v-for="(slide, i) in slides" :id="i" class="swiper-slider" :key="i">
      <img
        :src="slide"
        alt="product"
        class="product-image"
        style="object-fit: contain !important"
      />
      <div v-if="i + 1 === slides.length" class="gray-links">
        <ul class="links px-0" v-if="agotado">
          <li class="link">
            <img
              src="../assets/triste.svg"
              alt="amazon icon"
              style="width: 42px; height: 42px"
            />
          </li>
          <li class="link">
            <a
              href="#"
              style="
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;
                text-align: center;
                text-decoration: none;
                color: #ffffff;
              "
            >
              <!-- <span> -->
              HAS LLEGADO DEMASIADO TARDE
              <!-- </span> -->
            </a>
          </li>
          <li class="link">
            <a
              href="#"
              class="my-4"
              style="
                font-weight: 700;
                font-size: 42px;
                line-height: 17px;
                text-align: center;
                text-decoration: none;
                color: #ffffff;
              "
            >
              Agotado
            </a>
          </li>
          <li class="link">
            <a
              href="#"
              class="btn btn-secondary my-4"
              style="font-size: 11px; background: #3c3c3c; border: none"
            >
              <img
                src="../assets/fire.54b53cc7.svg"
                alt="amazon icon"
                style="width: 25px; height: 25px"
              />
              VER MÁS CHOLLOS DE CHAQUETAS
            </a>
          </li>
        </ul>
        <ul class="links px-0" v-else>
          <li class="link">
            <a href="#" style="font-size: 16px">
              <img
                src="../assets/amazon.svg"
                alt="amazon icon"
                style="width: 25px; height: 25px"
              />
              Comprar ahora en Amazon
            </a>
          </li>
          <li class="link">
            <a href="#" @click="toolbarChat()">
              <img
                src="../assets/external-link.svg"
                alt="amazon icon"
                style="width: 25px; height: 25px"
              />
              Más información del chollo
            </a>
          </li>
          <li class="link">
            <a href="#">
              <img
                src="../assets/ph_coat-hanger-bold.svg"
                alt="amazon icon"
                style="width: 25px; height: 25px"
              />
              Ver más chollos de chaquetas
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="slides-control">
      <a
        v-for="i in slides.length"
        :id="i"
        @click="clickHandler(i - 1)"
        :class="i == current ? 'control active' : 'control'"
        :key="i"
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["slides", "agotado"],
  data() {
    return {
      slider: null,
      height: null,
      width: null,
      current: 1,
    };
  },
  mounted() {
    this.slider = this.$refs.slider;
    this.width = this.slider.offsetWidth;
  },
  methods: {
    toolbarChat() {
      var element = document.getElementById("toolbarChat");
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    reset() {
      // Agrega aquí la lógica para reiniciar el estado interno del componente Swiper
      this.current = 1;
      this.slider.scrollTo({ top: 0 });
    },
    scrollHandler(e) {
      for (const child of Array.from(e.target.children).slice(
        0,
        e.target.children.length - 1
      )) {
        const y = child.getBoundingClientRect().y;
        const id = child.id;
        if (y >= -20 && y < 30) this.current = Number(id) + 1;
        // this.slides.length
        // console.log("🚀 ~ file: Swiper.vue ~ line 55 ~ scrollHandler ~ this.slides.length", this.slides.length)
        if (this.current == this.slides.length) {
          console.log("emiat");
          this.$emit("NavBarBlack", 1);
        } else {
          this.$emit("NavBarBlack", 0);
        }
      }
    },
    clickHandler(n) {
      this.slider.scrollTo({ top: this.height * n });
    },
  },
};
</script>

<style></style>
