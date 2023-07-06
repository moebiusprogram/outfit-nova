<template>
  <article :class="subComment ? 'comment sub-comment' : 'comment'">
    <img :src="img" alt="user image">
    <div class="container">
      <div v-if="!subComment" class="line"></div>
      <h2>{{ name }}</h2>
      <h3>{{ subHeader }}</h3>
      <button class="like" type="button"><img src="../assets/like.svg" alt="like"> {{ likeCounter }}</button>
      <p>{{ comment }}</p>
      <button class="btn-transparent" v-if="!subComment" type="button">RESPONDER</button>
    </div>
    <span>Hace {{date}} <div></div></span>
  </article>
</template>

<script>
export default {
  props: ["commentData"],
  data() {
    const { name, comment, subHeader, img, date, likeCounter, subComment } = this.commentData;
    return {
      name,
      comment,
      subHeader,
      img,
      date,
      likeCounter,
      subComment,
    }
  }
}
</script>
