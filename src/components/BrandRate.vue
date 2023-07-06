<template>
  <article class="brand-rate">
    <img src="../assets/white-star.svg" alt="white star">
    <h1>¿Has comprado alguna vez en Amazon?</h1>
    <p>Comparte tu experiencia con nuestra comunidad,
      y podrás participar en nuestros sorteos.</p>
    <form action="">
      <div class="slider-container">
        <img src="../assets/angry.svg" alt="angry">
        <input class="slider" type="range" min="0" max="10" :value="value"
          @change="(e) => value = e.currentTarget.value">
        <img src="../assets/smile.svg" alt="smile">
      </div>
      <div class="fields"
        :style="{'flex-direction': secondary ? 'column' : 'row', 'align-items': secondary ? '' : 'center'}">
        <label for="">Tu puntuación {{ value }}/10</label>
        <input v-if="secondary" class="punt" type="text" placeholder="Resume tu experiencia con esta tienda">
        <label v-if="secondary">Tu opinion extendida <span>(Optional)</span></label>
        <textarea v-if="secondary" type="text"
          placeholder="Escribe aqui tu opinión. Explica tu experiencia de compra con Amazon. Tu feedback debe ser honesta, útil, sin palabras ofensivas y constructivas." />
        <button class="send"><img src="../assets/send.svg" alt="send"> Enviar opinión</button>
      </div>
    </form>
  </article>
</template>
<script>
export default {
  props: ['secondary'],
  data() {
    return {
      value: 5
    }
  },
}
</script>
