<template>
  <section class="comments">
    <header>
      <div>
        <img src="../assets/comment.svg" alt="comment">
        <h2>COMENTARIOS</h2>
        <span>{{ amountOfComments }}</span>
      </div>
      <button class="btn-transparent"><img src="../assets/chevron-up.svg" alt="chevron"></button>
    </header>
    <button class="btn-transparent order-by"><img src="../assets/align-left.svg" alt="align left icon"> ORDENAR
      POR</button>
    <ul v-if="comments.length">
      <template v-for="(comment, i) in comments">
        <li>
          <comment :commentData="getCommentData(comment)" :key="i" />
        </li>
        <li class="sub-comment-container" v-for="(subComment, i) in comment.subComments">
          <comment :commentData="getCommentData(subComment, true)" :key="i" />
        </li>
      </template>
    </ul>
    <form>
      <div>
        <label for="user">
          <img :src="img" alt="user">
        </label>
        <textarea name="user" id="user" rows="6" placeholder="Escribe algo aquí"></textarea>
      </div>
      <PrimaryButton type="submit">
        <img src="../assets/send.svg" alt="send icon">
        Enviar
      </PrimaryButton>
    </form>
  </section>
</template>

<script>
import Comment from "./Comment.vue";
import img from "../assets/shipper.png";
import PrimaryButton from "./PrimaryButton.vue";
export default {
  components: {
    Comment,
    PrimaryButton
  },
  methods: {
    getCommentData(comment, subComment = false) {
      delete comment.comments;
      comment.subComment = subComment;
      return comment;
    },
  },
  props: ["amountOfComments", "comments", "img"],
  data() {
    return {
      comments: [
        {
          name: 'Leo',
          comment: 'comment',
          subHeader: "Chollazo",
          img,
          date: "2 dias",
          likeCounter: "1",
          subComments: [
            {
              name: 'Leo2',
              comment: 'Another comment',
              subHeader: "Chollazo",
              img,
              date: "2 dias",
              likeCounter: "1",
            }
          ]
        },
      ],
      img
    }
  }
}
</script>
