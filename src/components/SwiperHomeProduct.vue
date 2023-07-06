<template>
<div class="promotions">
<div class="promotion-wrapper">
        <div class="promotion">
          <figure class="promotion-image-wrapper">
            <img :src="details.image" alt="product" class="img-fluid">
          </figure>
        <div class="front">
          <p class="company-tag" v-html="details.label_top" :style="'background:'+details.label_top_bg+'; color:'+details.label_top_color+';'"></p>
          <button class="promotion-like btn-transparent" style="top: 0;">
            <img :src="heart_2" alt="" class="img-fluid" style="height: 20px;width:20px">
          </button>
          <div class="promotion-tags">
            <div class="promotion-prices">
              <span class="promotion-price font-size-bolder">€{{details.cost_init}}</span>
              <span class="promotion-old-price">€{{details.cost_end}}</span>
            </div>
            <span class="promotion-discount"> -<span v-html="details.discount"></span>% OFF </span>
          </div>
          <h2 class="promotion-name" v-html="details.name"></h2>
          <h3 class="promotion-color">
            <span v-for="(cat, index) in details.categories" :key="index">{{cat.name}}<span v-if="index+1<details.categories.length"> / </span> </span>
          </h3>
          <span class="promotion-date" style="color:#9B9B9B"> <img :src="oclock" alt="" class="img-fluid"  style="height: 10px;width:10px"> {{details.date}} </span>
        </div>
      </div>
</div>
</div>
    
</template>
<script>

import oclock from '../assets/oclock.svg';
import heart_2 from '../assets/like_save.svg';
export default {
  props: ["details"],
  data() {
    return { 
       oclock : oclock,
       heart_2 : heart_2
    }
  },
  mounted() { 
    console.log(this.details);
  },
  methods: {
    
  },
};
</script>

<style>

</style>
