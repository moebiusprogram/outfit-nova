<template>
  <div class="products container-single-product">
    <!-- <SlideBasic 
        :dataSlideGeneral="dataSlideGeneral"
        touchSelector=".touch-container"
        :style="{ width: windowWidth + 'px', background: 'white' }">
        <template #default="{ itemDataSlideGeneral }"
        > -->

    <div
      class="slide-container"
      ref="slideContainer"
      :style="{ width: windowWidth + 'px', background: 'white' }"
    >
      <div class="slides-wrapper">
        <div
          class="slide"
          v-for="(itemDataSlideGeneral, index) in currentSlideData"
          :key="index"
          :style="{ width: `calc(${slideWidth}px)` }"
        >
          <div class="p-0 m-0" style="width: 100%">
            <div class="touch-container" style="background: none; z-index: 1 !important">
              <div class="brands" v-if="showMenuScroll">
                <Navbar
                  :show="showMenuScroll"
                  :showLogo="showMenuScroll"
                  :imgLogo="image"
                  :style="{ position: showMenuScroll ? 'fixed' : '' }"
                  :white="textNavBarWhite"
                  button_right="saved"
                  accion="comprar"
                />
              </div>

              <!-- <Navbar :show="showMenuScroll" name="" :hidden="showMenuScroll" :style="{
            backgroundColor: 'transparent',
            clipPath: `polygon(0 ${path}%, 100% ${path}%, 100% 100%, 0% 100%)`,}" /> -->

              <ImageSlider
                ref="imagesSlidesRef"
                button_right="saved"
                color="#FAE7CB"
                :agotado="agotado"
                :offer="offer"
                :label="label"
                :bool="scroll"
                :products="products"
                :offer_end="offer_end"
                :offer_start="offer_start"
                @NavBarBlack="NavBarBlack"
                @setHeight="setHeightScroll"
                :imageslide="itemDataSlideGeneral.images[0].slides"
                id="element-fijo"
                style="
                  position: fixed !important;
                  background: white;
                  z-index: 1 !important;
                "
              />

              <div
                v-if="offer_end"
                :style="{ top: `${heightScroll - 54}px` }"
                class="offer-container"
              >
                <Offer
                  :style="{
                    transform: `translateY(${translateScroll * -1.5}px)`,
                  }"
                  offer="-40"
                />
              </div>

              <Price
                :priceProductData="itemDataSlideGeneral.priceProductData"
                :height="heightScroll"
                :offer_end="offer_end"
              />
            </div>
            <div class="container-shipping">
              <Shipping price="4,95" :country="country" />
            </div>

            <div
              class="pt-lg-4"
              style="background: white; z-index: 2 !important; position: relative"
            >
              <div class="flex-lg">
                <SingleProductDescription />
                <ListProductTallaColor />
              </div>

              <div class="flex-lg container pt-4">
                <div class="w-100 py-lg-8 mr-lg-11">
                  <div id="comentarios">
                    <SortModalcomment />
                    <div class="row ms-1 me-3 py-3" id="seccion_comentario">
                      <div class="col-2 py-2 px-0">
                        <ImgHexa :img="imageInputBtn" size="45px"></ImgHexa>
                      </div>
                      <!--Tex Area comment expande/contrae  -->
                      <div class="col-10 py-2 px-0">
                        <CommentBoxArea />
                      </div>
                    </div>

                    <Comments
                      :comments="itemDataSlideGeneral.comments"
                      @increment-likes="updateLikes"
                      @increment-dislikes="updateDisLikes"
                      @increment-relikes="updateReplyLikes"
                      @increment-redislikes="updateReplyDislikes"
                    />
                  </div>
                </div>

                <div class="mt-4">
                  <div class="flex justify-between container__searchTallas">
                    <span class="text-ofertas-similares ml-2 pt-0.2">
                      Ofertas similares
                    </span>
                  </div>
                </div>
                <SwiperHomeOfferts :products="products.slice(0, numElements)" />
              </div>
              <div class="container-mas-info">
                <span @click="showMore" v-if="!allElementsShown">Ver más</span>
                <span v-else>Más de BURTORN MENSWEAR LONDON</span>
              </div>
            </div>

            <section
              class="text-center"
              v-if="showMenuScroll"
              style="margin-top: 55px; background: #fff"
            >
              <FooterNavbar />
              <!-- <Menubar :showMenu="showMenuScroll" /> -->
            </section>
          </div>
          <!-- </template> -->
          <!-- </SlideBasic> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, getCurrentInstance, computed } from "vue";
// Json organizados
import { products } from "../products";
import { singleproducts } from "../singleproducts";
import { dataSlideGeneral } from "../dataSlideGeneral";
// Composables
import useComments from "../composables/useCommentsAnidados";
import useScrollHandler from "../composables/useScrollHandlers";
import useSingleProduct from "../composables/useSingleProduct";
import useSlideBasic from "../composables/useSlideBasic";
import {
  imgchina,
  logo,
  sendComment,
  image,
  imageInputBtn,
  urlIcon,
  videoIcon,
  imageIcon,
  gifIcon,
} from "../composables/useImagesSingleProduct";
// Componentes
import SlideBasic from "../components/SlideBasic.vue";
import SortModalcomment from "../components/SingleProductComponents/SortModalcomment.vue";
import SingleProductDescription from "../components/SingleProductComponents/SingleProductDescription.vue";
import ListProductTallaColor from "../components/SingleProductComponents/ListProductTallaColor.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import Menubar from "../components/Menubar.vue";
import RightArrow from "../components/svg/rightArrow.vue";
import LeftArrow from "../components/svg/leftArrow.vue";
import FooterNavbar from "../components/FooterNavbar.vue";
import CommentBoxArea from "../components/CommentAreaBox.vue";
import ImageSlider from "../components/ImageSlider.vue";
import Price from "../components/Price.vue";
import Offer from "../components/Offer.vue";
import SwiperHomeOfferts from "../components/SwiperHomeOfferts.vue";
import Navbar from "../components/Navbar.vue";
import Comments from "../components/Comment.vue";
import ImgHexa from "../components/ImgHexa.vue";
import Shipping from "../components/Shipping.vue";
import Description from "../components/description.vue";

export default {
  name: "SingleProduct",
  components: {
    SlideBasic,
    Menubar,
    Swiper,
    LeftArrow,
    RightArrow,
    SwiperSlide,
    SwiperHomeOfferts,
    ListProductTallaColor,
    SortModalcomment,
    SingleProductDescription,
    FooterNavbar,
    CommentBoxArea,
    ImageSlider,
    Comments,
    ImgHexa,
    Navbar,
    Shipping,
    Description,
    Offer,
    Price,
  },
  props: {
    id: Number,
    offer: Number,
  },
  setup(props, { emit }) {
    // const commentsAnidado = ref(commentsAnidadoData);
    const text_new_comments = ref("");
    const isExpanded = ref(false);
    const heightScroll = ref(0);

    const imagesSlidesRef = ref(null);
    const touchSelector = ".touch-container";
    const instance = getCurrentInstance();
    const slideContainerElement = ref(document.querySelector(".slide-container"));

    function resetSwiperSend() {
      if (
        imagesSlidesRef.value &&
        typeof imagesSlidesRef.value.resetSwiperSlide === "function"
      ) {
        imagesSlidesRef.value.resetSwiperSlide();
      } else {
        console.error(
          "Error: La referencia imagesSlidesRef no está correctamente asignada o el método resetSwiper no está disponible"
        );
      }
    }

    const {
      currentSlide,
      slideWidth,
      totalSlides,
      currentSlideData,
      init,
      destroy,
    } = useSlideBasic(
      dataSlideGeneral,
      slideContainerElement,
      touchSelector,
      resetSwiperSend
    );

    const CommentsData = computed(() => currentSlideData.value[currentSlide.value]);
    console.log("ITEMS", CommentsData.value.comments);
    console.log("CurrentSlideDataSingleProduct", currentSlideData.value[0].comments);
    console.log("slide: ", currentSlide.value);

    const {
      updateLikes,
      updateDisLikes,
      updateReplyLikes,
      updateReplyDislikes,
      expandTextArea,
      collapseTextArea,
    } = useComments(CommentsData, text_new_comments, isExpanded);

    // Aqui traigo toda la info del composable useScroll
    const {
      scroll,
      translateScroll,
      path,
      showMenuScroll,
      ticking,
      scrollHandler,
    } = useScrollHandler(heightScroll);

    const {
      label,
      NavBarBlack,
      menuTyping,
      showMore,
      allElementsShown,
      textNavBarWhite,
      showMenu,
      numElements,
      offer_end,
      offer_start,
      agotado,
      windowWidth,
      windowHeight,
    } = useSingleProduct(props, products, scrollHandler);

    // Emit recibido
    const setHeightScroll = (NewheightScroll) => {
      heightScroll.value = NewheightScroll - 40;
      // console.log("Nuevo Height Emit con Scroll Top: " + heightScroll.value)
    };

    const swiperInstance = ref(null);
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const onSlideChange = () => {
      swiperInstance.value.slideTo(0);
    };

    onMounted(() => {
      init();
    });

    onUnmounted(() => {
      destroy();
    });

    return {
      windowWidth,
      windowHeight,
      allElementsShown,
      numElements,
      offer_end,
      offer_start,
      agotado,
      urlIcon,
      videoIcon,
      imageIcon,
      sendComment,
      gifIcon,
      imageInputBtn,
      text_new_comments,
      showMenu,
      image,
      logo,
      path,
      imgchina,
      textNavBarWhite,
      products,
      singleproducts,
      label,
      isExpanded,
      imagesSlidesRef,
      showMenuScroll,
      translateScroll,
      scroll,
      ticking,
      heightScroll,
      dataSlideGeneral,

      currentSlide,
      currentSlideData,
      slideWidth,
      totalSlides,

      resetSwiperSend,
      onSlideChange,
      onSwiper,
      showMore,
      updateLikes,
      updateDisLikes,
      NavBarBlack,
      setHeightScroll,
      scrollHandler,
      menuTyping,
      expandTextArea,
      collapseTextArea,
      updateReplyLikes,
      updateReplyDislikes,
    };
  },
};
</script>
<style lang="scss" scoped>
.box_text_transparent {
  position: absolute;
  width: 90%;
  top: 36%;
  height: 47px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.65) 7.81%, #ffffff 100%);
}

.container-shipping {
  width: 100%;
  height: 100%;
  background: #f5f9fa;
  padding: 10px 0px;
  z-index: 2 !important;
  position: relative;
}

.comment-text {
  display: flex;
  flex-direction: column;
}

.container {
  background: white;
}

.container-mas-info {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;
    color: #000000;
    border: 2px solid #000000;
    padding: 10px 14px 10px 14px;
    border-radius: 4px;
    box-sizing: content-box;
  }
}

.container-single-product {
  position: absolute;
  z-index: 0;
}

.text-ofertas-similares {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #000000;
}

.container_box--pago {
  margin-top: 0.625rem;
}

.container__searchTallas span {
  display: inline-flex;
  width: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  height: 100%;
}

.container__searchTallas {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  height: 100%;
}

.container__btn--alerta span a {
  cursor: pointer;
  color: #ffa700;
}

.container__btn--alerta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  background: #ffffff;
}

.container__entrega--text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}
</style>
