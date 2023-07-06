<template>
  <div :class="{'reg-img-wrapper': large, 'reg-img-wrapper-small': small}">
    <div id="reg-img-image" :style="`background-image:url(${fondo});`">
      <div :class="{'reg-img-mascara': large, 'reg-img-mascara-small': small}"></div>
    </div>

  </div>
</template>

<script>
import fondo from '../assets/fondo_register.png'

export default {
  
  name: 'RegisterImg',
  props: {
    style: String
  },
  data () {
    return {
      fondo: fondo
    }
  },
  props: ['large', 'small'],
  mounted() {
    let newPos = 0
    const imagen = document.querySelector('#reg-img-image')
    setInterval(() => {
      newPos--
      $(imagen).css('background-position', `0px ${newPos}px`)
    }, 50
    )
  }
}
</script>
