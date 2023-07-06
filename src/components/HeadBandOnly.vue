<template>
  <div class="home-header d-flex align-items-center">
    <h2 class="p-0 m-0 d-flex align-items-center">
      <span style="margin-right: 10px;">{{data.title}}</span>
      <img :src="icon" v-if="icon" class="ml-3" style="width:20px" alt="">
     </h2> 
  </div>
</template>

<script>

import caretdown from '../assets/caret-down.svg';
 export default {
  props: ['data','icon'],
  data() {
    return {
      caretdown : caretdown
    }
  },
  components: {
    
  }, 
}
</script>
