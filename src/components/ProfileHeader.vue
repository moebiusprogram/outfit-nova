<template>
  <section id="background" style="background:linear-gradient(#FFFFFF, #E0E0E0); height:175px;">
    <div id="profile-navbar">
      <button style="border:none; width: 24px; height: 45px; background-color: transparent;">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z" />
        </svg>
      </button>
      <span style="float:right;">
        <button class="invite-btn">Invitar Amigos</button>
      </span>
    </div>
    <section class="profile-header">
      <section class="profile-logo">

        <svg viewBox='0 0 150 150' class="profile-svg">
          <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width="200" height="200">
              <image href="../assets/maverick.png" x="0" y="-10" width="150" height="150" />
            </pattern>
          </defs>
          <path stroke=#fff stroke-width=3px fill=url(#img1) stroke-linejoin=round
            d='M12.499999999999996 86.60254037844388Q0 64.9519052838329 12.499999999999996 43.30127018922193L25.000000000000004 21.65063509461097Q37.5 0 62.5 0L87.5 0Q112.5 0 125 21.65063509461097L137.5 43.30127018922193Q150 64.9519052838329 137.5 86.60254037844388L125 108.25317547305482Q112.5 129.9038105676658 87.5 129.9038105676658L62.5 129.9038105676658Q37.5 129.9038105676658 25.000000000000004 108.25317547305482Z' />
        </svg>

        <button style="width: 20px;
            height:20px;
            border-radius:50%;
            background:white;
            transform: translate3d(-25px, 28px, 10px);
            border: none;
            box-shadow: 0px 2px 2px 0px #00000040;">
          <img src="../assets/add-photo.svg" alt="" id="add-photo">
        </button>
      </section>
      <section>

        <button class="send-offer-btn">
          <img src="../assets/fire.svg" alt="" style="width:10.5px; height:14px; margin-right:10px;margin-right: 3px;
      margin-bottom: 4px;">
          Enviar Oferta
        </button>
      </section>
    </section>
  </section>
</template>
<script>
import maverick from '../assets/maverick.png'
import HexagonImage from './HexagonImage.vue'
export default {
  name: 'ProfileHeader',
  components: {
    HexagonImage
  },
  data() {
    return {
      img: maverick,
      style: 'width:77px; height:74px; margin:0 0 0 12px !important; border: 3px solid white; border-right: 5px solid white;border-left: 5px solid white;',
      name: 'Maverick'
    }
  }
}
</script>
<style scoped>
.profile-svg {
  height: 77px;
  width: 74px;
  margin-left: 12px;
}

.profile-header {
  display: flex;
}

#profile-name {
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 400;
}

.invite-btn {
  border-radius: 50px;
  padding: 8px 12px;
  background: #00CBF7;
  height: 34px;
  font-size: 12px;
  color: white;
  border: none;
  margin-top: 8px;
  margin-right: 10px;
}

.send-offer-btn {
  height: 24px;
  width: 110px;
  border-radius: 24px;
  background: white;
  font-size: 10px;
  font-weight: 700;
  border: none;
  line-height: 25px;
}

#add-photo {
  height: 9px;
  width: 9px;
  transform: translateY(-3px);
}
</style>