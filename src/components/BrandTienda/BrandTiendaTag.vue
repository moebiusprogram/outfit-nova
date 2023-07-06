<template>
  <div class="d-flex">
      <BrandTienda
          v-for="(brand, index) in brands" 
          :amount="brand.amount" 
          :name="brand.name" 
          :image="brand.img" 
          :checking="brand.checking"
          :key="index.id"
          :index="index"
          >
      </BrandTienda>
      </div>
   
  </template>
  
  <script>
  import BrandTienda from './BrandTienda.vue'
  export default {
    props: ['brands'],
    components: {
      BrandTienda,
    }
  }
  </script>
  