<template>
  <ul style="
    display: flex;
    padding: 0;
">
    <BrandTag v-for="(brand, i) in brands" :key="i" :amount="brand.amount" :name="brand.name" :image="brand.img"></BrandTag>
  </ul>
</template>

<script>
import BrandTag from './BrandTag.vue'
export default {
  props: ['brands'],
  components: {
    BrandTag,
  }
}
</script>
