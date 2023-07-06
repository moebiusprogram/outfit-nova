<template>
  <section style="text-align: center;" id="code-share">
    <h2
      style="font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      padding: 0 25vw;
      margin: 40px 0 20px 0;"
    >
      Te falta invitar a 3 amigos para subir de nivel
    </h2>
    <section class="share-bar-progress">
      <img src="../assets/level-egg.svg" alt="" style="margin-left:5vw">
      <div class="level-circle" style="margin-left:2.5vw">
        <span class="level-circle-number">1</span>
      </div>
      <div class="level-line"></div>
      <div class="level-circle">
        <span class="level-circle-number">2</span>
      </div>
      <div class="level-line"></div>
      <div class="level-circle" style="margin-right:2.5vw">
        <span class="level-circle-number">3</span>
      </div>
      <img src="../assets/level-medal.svg" alt="">
    </section>
    <h1
      style="font-weight: 700;
      font-size: 16px;
      margin-bottom:15px;"
    >
      Comparte el secreto
    </h1>
    <div id="separador" style="margin:20px auto"/>
    <p class="reminder-text">Si ya tienes acceso a la APP y te gusta, dale un código de invitación a tus mejores amigos. No seas egoista.</p>
    <h4 class="reminder-bold">Actualmente tienes 3 códigos disponibles. Úsalos bien.</h4>
    <div style="display: flex; justify-content: center;">
      <Coupon title="EXTRA 30" style="height: 32px"/>
      <button style="border:none">
        <img src="../assets/copy-black.svg" alt="" style="height: 32px;margin-left: 5px;">
      </button>
    </div>
    <button class="accept-btn" style="letter-spacing: 4px; font-weight:600; padding: 18px 0; text-align:center;">
      <img src="../assets/wsp.svg" alt="" style="height:24px;width:24px;margin-bottom:4px;">
      COMPARTIR MI CUPÓN
    </button>
    <p class="reminder-text">Si ya tienes acceso a la APP y te gusta, dale un código de invitación a tus mejores amigxs. No seas egoista.</p>
    <h4 class="reminder-bold">Actualmente tienes 0 códigos disponibles</h4>
    <button
      class="dark fit-all-screen py-10 mb-15"
      style="letter-spacing: 4px; margin-left: 2.5vw; border: none;"
      >
        SOLICITAR CÓDIGO
    </button>
    <p class="reminder-text">Si crees que eres un usuario activo y te encanta la app, prueba a solicitar código. Pero son muy limitados</p>
    <h4 class="reminder-bold">Trabajamos con muchos influencers tops, es posible que compartan algún código en sus historias y se lo puedes dar a un amigo si eres rápido</h4>
    <div style="margin-bottom:20px;">
      <swiper :slidesPerView="3" :spaceBetween="5" :modules="modules" @swiper="onSwiper" :navigation="true" class="swiper-js" style="overflow:hidden;">
        <swiper-slide v-for="(influencer, i) in influencers" :key="i">
          <ProfileSummary />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import Coupon from '../components/Coupon.vue';
import ProfileSummary from '../components/ProfileSummary.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default {
  name: 'CodeShare',
  components: {
    Coupon,
    Swiper,
    SwiperSlide,
    ProfileSummary
  },
  data () {
    return {
      influencers: [1,2,3,4,5,6]
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  }
}

</script>

<style scoped>




.coupon {
    width: 110px;
    background: #EAEAEA;
    border: 1px dashed #989898;
    border-radius: 4px;
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 0px 14px;
    height: 24px;
    font-size: 11px;
    font-weight: 800
    }

.reminder-text {
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  color: #7E7E7E;
  padding: 0 15vw;
  margin-bottom: 20px;
}

.reminder-bold {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 10px;
}

.share-bar-progress {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.level-circle{
  height: 34px;
  min-width: 34px;
  border: 2px solid #3B51E7;
  border-radius: 50%;
}

.level-line {
  width: 30px;
  border: 2px solid #3B51E7;
}

.level-circle-number {
  color: #3B51E7;
  font-size: 12px;
  font-weight: 700;
  line-height: 30px;
}
</style>