<template>
  <nav class="brand-nav">
    <ul>
      <BrandNavItem v-for="(brand, i) in brands" :text="brand.text" :amount="brand.amount" :key="i"
        :active="i === active" />
    </ul>
  </nav>
</template>

<script>
import BrandNavItem from './BrandNavItem.vue'
export default {
  props: ['brands'],
  components: {
    BrandNavItem,
  },
  data() {
    return {
      brands: [
        {
          text: 'Todo'
        },
        {
          text: 'Chollos',
          amount: 312
        },
        {
          text: 'Cupones',
          amount: 123
        },
        {
          text: 'Opiniones',
          amount: 123
        },
      ],
      active: 0,
    }
  },
}
</script>
