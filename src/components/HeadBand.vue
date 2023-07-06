<template>
  <div class="home-header d-flex align-items-center">
    <h2 class="p-0 m-0">
      <span>{{data.title}}</span>
      <span style="color:#9b9b9b"> HOY  <img :src="caretdown" alt="fire" style="height: 20px;width:20px"> </span>
    </h2>
    <div class="home-product-discount">
      <a href="#" v-for="(item, index) in data.categories" :key="index"> {{item.name}}<div v-if="index+1<data.categories.length"> / </div></a>
      <span>
        <img src="../assets/fire.54b53cc7.svg" alt="fire" style="height: 10px;width:10px"> {{data.discount}}%  OFF
      </span> 
    </div>
  </div>
</template>

<script>

import caretdown from '../assets/caret-down.svg';
 export default {
  props: ['data'],
  data() {
    return {
      caretdown : caretdown
    }
  },
  components: {
    
  }, 
}
</script>
