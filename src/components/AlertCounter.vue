<template>
  <section :style="'display: flex;justify-content: center;align-items: center;'">
    <span class="size-12">Tienes {{numAlertas}} alertas creadas</span>
  </section>
</template>

<script>
export default {
  name: 'AlertCounter',
  data () {
    return {
      numAlertas: 6
    }
  },
  props: ['style']
}
</script>

<style scoped>

.size-12{
  font-size: 12px;

}
</style>