<template>
    
        <div class="col-12 px-0 py-2 small d-flex justify-content-start comment-text" style="flex-direction:column;">
      <textarea
        v-model="text_new_comments"
        :class="['new_comments', { expanded: isExpanded }]"
        @focus="expandTextArea"
        @blur="collapseTextArea"
        placeholder="Añade un comentario..."
        rows="1"
      ></textarea>
      <div
        v-if="!isExpanded"
        style="position: absolute; right: 35px; margin-top: 7px"
      >
        <img :src="urlIcon" class="mx-1" alt="" />
        <img :src="videoIcon" class="mx-1" alt="" />
        <img :src="imageIcon" class="mx-1" alt="" />
        <img :src="gifIcon" class="mx-1" alt="" />
      </div>
      <div class="expanded iconos-expanded">
        <div v-if="isExpanded" style="">
          <img :src="urlIcon" class="mx-1" alt="" />
          <img :src="videoIcon" class="mx-1" alt="" />
          <img :src="imageIcon" class="mx-1" alt="" />
          <img :src="gifIcon" class="mx-1" alt="" />
        </div>
        <div v-if="isExpanded" style="">
          <img :src="sendComment" class="mx-1" alt="" />
        </div>
      </div>
    </div>
  
</template>
  
<script>
  import { ref } from 'vue';
  import useComments from "../composables/useCommentsAnidados";
  import { commentsAnidado as commentsAnidadoData } from "../commentsAnidado";
  import {
  imgchina,
  logo,
  sendComment,
  image,
  imageInputBtn,
  urlIcon,
  videoIcon,
  imageIcon,
  gifIcon,
} from "../composables/useImagesSingleProduct";
  export default {
    name: 'CommentBox',
    setup() {
      const text_new_comments = ref('');
      const isExpanded = ref(false);
      const commentsAnidado = ref(commentsAnidadoData);
      const {
      expandTextArea,
      collapseTextArea,
    } = useComments(commentsAnidado, text_new_comments, isExpanded);


      return {
        text_new_comments,
        isExpanded,
        imgchina,
        logo,
        sendComment,
        image,
        imageInputBtn,
        urlIcon,
        videoIcon,
        imageIcon,
        gifIcon,
        expandTextArea,
        collapseTextArea,
      };
    },
  };
  </script>
  <style lang="scss" scoped>
  .new_comments:focus {
  border: 1px solid #ced4da !important;
  outline: 1px solid #e4e4e4;
}



.new_comments {
  border: 1px solid #ced4da;
  resize: none;
  background: transparent;
  width: 100%;
  height: 42px;
  padding: 9px;
  border-radius: 10px;
}

.new_comments.expanded {
  height: 99px;
}

.iconos-expanded {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 10px;
}
  </style>