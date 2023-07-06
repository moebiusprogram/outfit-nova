<template>
  <nav class="brand-nav">
 <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation" v-for="(brand, i) in brands" :key="i" @click="changeView">
        <button class="nav-link brand-nav-item w-100" :class="{'active': i === active, 'todo': brand.text === 'Todo'}" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
          {{brand.text}}
          <span v-show="brand.amount" style="font-size:8px !important;">  ({{ brand.amount }})</span> 
        </button>
      </li>
<!-- 
      <BrandNavItem v-for="(brand, i) in brands" :text="brand.text" :amount="brand.amount" :key="i"
        :active="i === active" /> -->
    </ul>
  </nav>
</template>

<script>
import BrandNavItem from './BrandNavItem.vue'
export default {
  components: {
    BrandNavItem,
  },
  methods: {
    changeView(id){
      const tab = id.target.firstChild.data.trim()
      this.$emit('updateView', tab)
    }
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
<style>
.nav-item {
  display: flex;
}

.todo {
  margin-bottom: 3px;
}
</style>