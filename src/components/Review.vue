<template>
  <article class="review">
    <div class="header">
      <HexagonImage :style="{width: `${35}px`, height: `${35}px`}" :image="user" />
      <div>
        <h2>@{{ username }}</h2>
        <p>Miembro desde 5 de mayo 2022</p>
      </div>
    </div>
    <div class="review-body">
      <div class="review-body-rating">
        <div :style="{background: `linear-gradient(270deg, ${color} 0%, rgba(217, 217, 217, 0) 100%)`}"
          class="gradient">
        </div>
        <span :style="{color: color}">{{rating}}</span>
      </div>
      <p class="review-body-check"><img src="../assets/badge-check.svg" alt="check"> Usuario registrado en la APP</p>
      <h2 class="review-body-title">{{ title }}</h2>
      <p class="review-body-content">{{text}}</p>
    </div>
    <div class="review-likes">
      <button class=""><img src="../assets/like-gray.svg" alt="like"> Util</button>
      <button>
        <img src="../assets/like-gray.svg" alt="like">
        <img src="../assets/like-gray2.svg" alt="like">
        Muy util
      </button>
    </div>
    <div v-for="(reply, i) in replies" :key="i" class="review-reply">
      <h2>{{ reply.title }}</h2>
      <span>{{reply.date}}</span>
      <p>{{ reply.text }}</p>
    </div>
  </article>
</template>

<script>
import HexagonImage from '../components/HexagonImage.vue'
import user from '../assets/user-hex.png'
export default {
  props: ['rating', 'replies', 'title', 'text'],
  computed: {
    color() {
      if (this.rating > 10 && this.rating < 0) return;
      return this.rating > 6 ? '#6BE3B3' : this.rating > 3 ? '#F5CC3B' : '#EC5454';
    }
  },
  components: {
    HexagonImage,
  },
  data() {
    return {
      user,
      username: 'daniellem418',
    }
  },
}
</script>
