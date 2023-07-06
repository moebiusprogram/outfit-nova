<template>
  <div class="home-header head-band d-flex align-items-center">
    <h2 class="p-0 m-0" v-html="data.title"></h2>
    <div class="secondary-button">
      Filtros
      <span>
        <img src="../assets/menu.svg" alt="fire" style="height: 12px;width:12px">
      </span> 
    </div>
  </div>
</template>

<script>
 export default {
  props: ['data'],
  components: {
    
  }, 
}
</script>
