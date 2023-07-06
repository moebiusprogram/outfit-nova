<template>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <Comment :comment="comment" />
      </li>
    </ul>
</template>
  
  <script>
  import { defineComponent } from 'vue';
  import Comment from './Comment.vue';
  
  export default defineComponent({
    name: 'CommentsAnidados',
    components: {
      Comment,
    },
    props: {
      comments: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const { comments } = props;
      return { comments };
    },
  });
  </script>
  
  <style lang="scss">
  // Estilos SCSS aquí
  </style>