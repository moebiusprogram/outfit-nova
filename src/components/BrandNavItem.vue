
<template>
  <li :class="{
    'brand-nav-item': true,
    active: active,
  }">
    <a href="">{{ text }}</a>
    <span v-if="amount">({{ amount }})</span>
  </li>
</template>

<script>
export default {
  props: ['text', 'amount', 'active']
}
</script>
