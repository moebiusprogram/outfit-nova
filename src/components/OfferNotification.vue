<template>
  <section class="offer-notification">
    <div v-if="alert" class="offer-notification-alert"> 
      <img src="../assets/alert-notification.svg" alt="bell icon" class="offer-notification-icon">
      <span class="offer-notification-alert-description">{{ numOfertas }} nueva/s oferta/s corresponden con tu alerta por palabras claves de tus intereses</span>
      <span class="offer-notification-ago">8d</span>
    </div>
    <div v-else>
      <img v-if="type==='like'" src="../assets/like-notification.svg" alt="like icon" class="offer-notification-icon">
      <img v-if="type==='fire'" src="../assets/fire-notification.svg" alt="fire icon" class="offer-notification-icon">
      <span class="offer-notification-username">
        {{ username }}
      </span>
      
      <span style="float:right;"
      class="offer-notification-ago">
        8d
      </span>
      <div v-if="type==='like'" class="offer-notification-description">
        <p style="margin-bottom:2px;">ha reaccionado a tu comentario</p>
        <p style="color:#BBBBBB">{{ comment || '' }}</p>
      </div>
      <div v-if="type==='fire'" class="offer-notification-description">
        <p>ha publicado un nuevo chollo <span v-if="numChollos > 1">y otros {{ numChollos -1 }} </span></p>
      </div>
    </div>

  <OfferItem :photo="photo"/>
  </section>
</template>

<script>
import OfferItem from './OfferItem.vue'

export default {
  name: 'OfferNotification',
  components: {
    OfferItem
  },
  props: ['alert', 'numOfertas', 'type', 'username', 'comment', 'numChollos', 'photo']
  
}
</script>