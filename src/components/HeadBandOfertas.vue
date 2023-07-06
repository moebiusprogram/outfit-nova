<template>
  <div class="row mx-2 my-2">
    <span class="col-6 d-flex align-items-center">
      <img :src="img_fire_black" style="width: 20px; height:20px" alt="fire"> 
      <h2 class="px-2" v-html="data.title"></h2>
    </span>
    <div class="col-6 d-flex align-items-center small justify-content-end">
      Ver Todos
        <img :src="img_arrow_right"  style="margin-left:5px;width: 20px;height: 20px" alt="fire">
    </div>
  </div>
</template>

<script>
import fire_black from '../assets/fire-black.svg';
import arrow_right from '../assets/arrow-right.svg';

 export default {
  props: ['data'],
  
  data() {
    return {
      img_fire_black:fire_black,
      img_arrow_right:arrow_right
    }
  }
}
</script>
