<template>
  <section>
    <NavbarSearch :route_to="'/profile'" :show="true" :white="true" name="Notificaciones" :settings="true" :shadow="true" />
    <section class="ofertas-recientes" style="margin-top:40px;">
      <div class="ofertas-recientes-header notis-header">
        <span style="font-size:16px; font-weight:600">Ofertas recientes</span>
        <span style="float:right;font-size:12px; color:#828282; text-decoration-line: underline;">Limpiar todo</span>
      </div>
      <div class="ofertas-recientes-body">
        <OfferNotification v-for="(noti, i) in notis" :key="i"
          :photo="noti.photo"
          :alert="noti.alert"
          :numOfertas="noti.numOfertas"
          :type="noti.type"
          :username="noti.username"
          :comment="noti.comment"
          :numChollos="noti.numChollos"
        />
      </div>
    </section>
    <section>
      <div class="configuracion-pago-header notis-header">
        <span style="font-size:16px; font-weight:600">Configuraciones</span>
        <span style="float:right;font-size:12px; color:#828282; text-decoration-line: underline;">Limpiar todo</span>
      </div>
      <div class="configuracion-pago">
        <img src="../assets/pay-pal.svg" alt="PayPal image">
        <span style="font-size:12px; margin-top:12px;">
          Has añadido un nuevo método de pago <br>
          Paypal: correo@electrónico.com
        </span>
        <span class="offer-notification-ago">8d</span>
      </div>
    </section>
    <FooterNavbar />
    <div style="width:100vw;height:52px;"></div>
  </section>
</template>
<script>
import FooterNavbar from '../components/FooterNavbar.vue'
import NavbarSearch from '../components/NavbarSearch.vue'
import OfferNotification from '../components/OfferNotification.vue'

import photo1 from '../assets/offer-item-1.png'
import photo2 from '../assets/offer-item-2.png'
import photo3 from '../assets/offer-item-3.png'
import photo4 from '../assets/offer-item-4.png'

export default {
  name: 'Notifications',
  components: {
    FooterNavbar,
    OfferNotification,
    NavbarSearch
  },
  data () {
    return {
      notis: [
        {
        id: 1,
        alert: false,
        type: 'like',
        username: 'Usuario99',
        comment: 'Gracias por revisar',
        photo: photo1
        },
        {
        id: 2,
        alert,
        numOfertas: 53,
        photo: photo2
        },
        {
        id: 3,
        alert,
        numOfertas: 1,
        photo: photo3
        },
        {
        id: 4,
        alert: false,
        type: 'fire',
        username: 'Alira22',
        numChollos: 95,
        photo: photo4
        }
      ]
    }
  }
}
</script>
<style scoped>
.notis-header {
  height: 44px;
  margin-bottom: 2px;
  box-shadow: 0px 1px #EDEDED;
  line-height: 44px;
  padding: 0px 12px;
}

.configuracion-pago{
  padding: 12px;
  display: flex;
  justify-content: space-between;
}
</style>