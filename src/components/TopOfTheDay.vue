<template>
  <article class="top-of-the-day">
    <div class="top-container">
      <h1>TOP 5 del día</h1>
      <ul>
        <li v-for="(card, i) in cards" :key="i">
          <TopOfTheDayCard :card="card" />
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import TopOfTheDayCard from './TopOfTheDayCard.vue';
import image from '../assets/card-image.png';
export default {
  components: {
    TopOfTheDayCard,
  },
  data() {
    return {
      cards: [
        {
          title: 'LICRAS ALPHASKIN OF SPORT',
          image,
          category: 'Deportes Outlet',
          store: 'Alphaskin Of Sport',
          discount: 20,
          price: 89.9,
          oldPrice: 99.9,
        },
        {
          title: 'LICRAS ALPHASKIN OF SPORT',
          image,
          category: 'Deportes Outlet',
          store: 'Alphaskin Of Sport',
          discount: 20,
          price: 89.9,
          oldPrice: 99.9,
        },
        {
          title: 'LICRAS ALPHASKIN OF SPORT',
          image,
          category: 'Deportes Outlet',
          store: 'Alphaskin Of Sport',
          discount: 20,
          price: 89.9,
          oldPrice: 99.9,
        },
        {
          title: 'LICRAS ALPHASKIN OF SPORT',
          image,
          category: 'Deportes Outlet',
          store: 'Alphaskin Of Sport',
          discount: 20,
          price: 89.9,
          oldPrice: 99.9,
        },
        {
          title: 'LICRAS ALPHASKIN OF SPORT',
          image,
          category: 'Deportes Outlet',
          store: 'Alphaskin Of Sport',
          discount: 20,
          price: 89.9,
          oldPrice: 99.9,
        },
      ]
    }
  },
}
</script>
