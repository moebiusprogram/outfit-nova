<template>
  <div class="top-of-the-day-card">
    <span class="top-discount">-{{card.discount}}%</span>
    <figure class="top-image-wrapper"><img :src="card.image" alt="card image"></figure>
    <div class="top-card-body">
      <h2 class="top-title">{{ card.title }}</h2>
      <div class="top-card-body-category">
        <span class="category-tag">{{ card.category }}</span>
        <span class="store">{{ card.store }}</span>
      </div>
      <div class="top-prices">
        <span class="top-price">{{card.price}}</span>
        <span class="old-price">{{card.oldPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>
