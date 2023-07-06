<template>

  <div class="search-bar-container">
      <button class="per btn-transparent" type="button">
      <img :src="male" alt="">
      <img :src="spanish" alt="" style="position: absolute;left: 10px;top: 20px;">
      </button>
      <input type="text" class="form-control search-bar"  v-model="search" :class="{'search-bar-new':search==''}" placeholder=" " style="text-indent: 18px;outline: none;" >
      <router-link :to="'/offer'" class="plus btn-transparent">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M12 8V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </router-link>
  </div>
 
</template>

<script>
import spanish from "../assets/banderas/spanish.svg";
import male from "../assets/generos/male.svg";
import outfiltnova from "../assets/outfiltnova.svg";

export default {

  data() {
    return {
      search :'', 
      spanish :spanish, 
      male :male, 
      outfiltnova :outfiltnova, 
    }
  }
}
</script>
