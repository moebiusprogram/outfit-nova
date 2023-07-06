<template>
  <div class="brand-ratings">
    <ul>
      <BrandRating v-for="(rating, i) in ratings" :key="i" :rating="rating.value" :tag="rating.tag"
        :color="rating.color" />
    </ul>
  </div>
</template>

<script>
import BrandRating from './BrandRating.vue'
export default {
  components: {
    BrandRating,
  },
  data() {
    return {
      ratings: [
        {
          value: 9.2,
          tag: 'Excelente',
          amount: 19,
          color: '81, 171, 106'
        },
        {
          value: 9.2,
          tag: 'Normal',
          amount: 19,
          color: '227, 168, 77'
        },
        {
          value: 9.2,
          tag: 'Media',
          amount: 19,
          color: '234, 70, 70'
        },
      ],
    }
  },
}
</script>
