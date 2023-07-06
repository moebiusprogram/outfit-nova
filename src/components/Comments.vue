<template>
  <section class="comments">
    <header class="d-flex align-items-center">
      <div class="small text-black header-text">Todos los comentarios kasnino</div>
      <button class="btn p-1 header-button">
        <img :src="orden" width="12" height="12" alt="align left icon" />
        Ordenar por: <span class="header-button-span">Relevancia</span>
      </button>
    </header>

    <div class="row py-4 d-flex justify-content-center">
      <div class="col-8">
        <div class="row mx-0 px-0 d-flex align-items-center">
          <div class="col-4 px-0">
            <img :src="anterior" alt="" style="height: 18px; width: 73px;" />
          </div>
          <div class="col-4 page-number">página 2</div>
          <div class="col-4 px-0">
            <img :src="siguiente" alt="" style="height: 18px; width: 73px;" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="comments.length">
      <template v-for="(comment, i) in comments" :key="i.id">
        <div>
           <comment :commentData="getCommentData(comment)" :key="i" /> 
        </div>
      </template>
    </div>
    <hr />

    <div class="row ms-1 me-3 py-3" id="seccion_comentario">
    <div class="col-2 py-2 px-0">
      <ImgHexa :img="img" size="45px"></ImgHexa>
    </div>
    <div class="col-10 px-0 py-2 small d-flex justify-content-start comment-text"

    >
      <textarea
        name=""
        id=""
        v-model="text_new_comments"
        @focus="changeComments(true)"
        @blur="changeComments(false)"
        class="new_comments"
        placeholder="Añade un comentario..."
        rows="3"
      ></textarea>
      <Transition mode="slide-up">
        <div
          class=""
          v-if="!new_comments && text_new_comments == ''"
          style="position: absolute; right: 35px; margin-top: 10px; "
        >
          <img :src="link3" class="mx-1" alt="" />
          <img :src="play" class="mx-1" alt="" />
          <img :src="image" class="mx-1" alt="" />
          <img :src="gif" class="mx-1" alt="" />
        </div>
      </Transition>
    </div>
    <div class="col-2 py-2 px-0"></div>
    <div class="col-10 px-0 py-2 small d-flex justify-content-start comment-text">
      <Transition mode="slide-up">
        <div
          class="d-flex w-100"
          style="justify-content: space-between;"
          v-if="new_comments || text_new_comments != ''"
        >
          <div class="add-comments" style="transition: 0.135s ease;">
            <img :src="link3" class="mx-1" alt="" />
            <img :src="play" class="mx-1" alt="" />
            <img :src="image" class="mx-1" alt="" />
            <img :src="gif" class="mx-1" alt="" />
          </div>
        </div>
      </Transition>
    </div>
  </div>

  <div class="row mx-1 me-3 pt-3">
    <div class="col-12 py-2 text-style">Tú estás en</div>
  </div>
  <div class="row mx-1 d-flex justif-content-center bg-white rounded">
    <div class="col-12 py-2 d-flex align-items-center text-style">
      <img :src="home" alt="" style="width: 16px; height: 16px;" />
      <span class="mx-1">Ropa unisex y básicos</span>
      <img :src="chevron_right_black" alt="" style="width: 5px; height: 9px;" />
      <span class="mx-1">Hoddies</span>
      <img :src="chevron_right_black" alt="" style="width: 5px; height: 9px;" />
      <span class="mx-1">Essencials</span>
    </div>
  </div>
  </section>
</template>

<script>
import Comment from "./Comment.vue";
import img from "../assets/shipper.png";
import orden from "../assets/orden.svg";
import button_comments from "../assets/button-comments.svg";
import siguiente from "../assets/siguiente.svg";
import home from "../assets/home.svg";
import chevron_right_black from "../assets/chevron-right-black.svg";
import anterior from "../assets/anterior.svg";
import PrimaryButton from "./PrimaryButton.vue";
import ImgHexa from '../components/ImgHexa.vue';
import link3 from "../assets/link3.svg";
import play from "../assets/play.svg";
import image from "../assets/image.svg";
import gif from "../assets/gif.svg";
import send_black from "../assets/send_black.svg";

export default {
  components: {
    Comment,
    PrimaryButton,
    ImgHexa
  },
  methods: {
    changeComments(status) {
      this.new_comments = status; 
      this.$emit('menuTyping', !status);
      if(status==true){
       var element = document.getElementById("seccion_comentario");
        var top = element.offsetTop;
        window.scrollTo(0, top);
      }
    },
    getCommentData(comment, subComment = false) {
      delete comment.comments;
      comment.subComment = subComment;
      return comment;
    },
  },
  props: ["amountOfComments", "comments", "img"],
  data() {
    return {
      new_comments : false,
      text_new_comments : '',
      img: img,
      button_comments: button_comments,
      chevron_right_black: chevron_right_black,
      orden: orden,
      home: home,
      siguiente: siguiente,
      anterior: anterior,
      link3:link3,
      play:play,
      image:image,
      gif:gif,
      send_black:send_black,
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
  }, 
}
</script>
<style>

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.header-text {
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.header-button {
  font-size: 10px;
  font-weight: 400;
  background: #f1f1f1;
  color: #898989;
  border-radius: 0px;
}

.header-button-span {
  color: #40bdb6;
  font-weight: 600;
}

.page-number {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
}

.comment-text {
  color: #000;
  font-weight: 700;
  text-align: justify;
}

.comment-text {
  color: #000;
  font-weight: 700;
  text-align: justify;
}


.text-style {
  font-weight: 500;
  font-size: 12px;
  color: #8c8c8c;
  line-height: 15px;
}
</style>