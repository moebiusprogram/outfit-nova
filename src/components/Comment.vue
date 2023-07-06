<template>
  <div
    v-for="(comment, index) in comments"
    :key="comment.id"
    class="row ms-1 me-3 py-3 comment-container"
  >
    <div class="col-2 py-2 px-0" id="avatar_comment">
      <ImgHexa :img="comment.avatar" size="31.57px"></ImgHexa>
    </div>
    <div class="col-10 px-0 small d-flex justify-content-start comment-text">
      <div class="row">
        <div
          class="col-12 d-flex align-items-center"
          style="justify-content: space-between"
        >
          <div class="">
            <span class="author-name">{{ comment.author }}</span>
            <span class="m-2 comment-main" v-if="comment.replies.length >= 1">Autor</span>
            <span class="m-1 comment-time">{{ comment.time }}</span>
          </div>
          <span>
            <img
              @click="openSettingModal(index)"
              :src="more"
              class="comment-moreimg"
              style=""
            />
          </span>
          <div
            v-if="showSettingsModal[`${index}-null`]"
            class=""
            :class="
              showSettingsModal[`${index}-null`] ? 'modal-container-settingMain' : ''
            "
          >
            <!-- tu modal aquí -->
            <div>
              <span class="item-list-setting">
                <!-- tu icono SVG aquí -->
                <img :src="Iconcopy" />
                Copiar
              </span>
              <span class="item-list-setting">
                <!-- tu icono SVG aquí -->
                <img :src="IconCompartir" />
                Compartir
              </span>
              <span class="item-list-setting">
                <!-- tu icono SVG aquí -->
                <img :src="IconAlerta" />
                Reportar
              </span>
              <span class="item-list-setting">
                <!-- tu icono SVG aquí -->
                <img :src="IconBloquear" />
                Ignorar usuario
              </span>
            </div>
          </div>
        </div>

        <div
          class="col-12 d-flex justify-content-start align-items-center small pt-2"
          style="line-height: 15px; font-weight: 500; width: 92%; font-size: 12px"
        >
          {{ comment.text }}
        </div>

        <div class="col-12 container_icons pt-2" style="opacity: 0.5">
          <span class="btn_icon">
            <img
              :src="like_black"
              alt=""
              :class="comment.dislikes ? 'liked' : ''"
              class="svg-like"
              @click="incrementLikes(index)"
            />
            <!-- <LikeIcon  /> -->
            {{ comment.likes }}
          </span>
          <span class="btn_icon" style="margin-left: 7px">
            <img :src="unlink" @click="incrementDisLikes(index)" alt="" style="" />
          </span>
          <span
            class="btn_icon pl-4"
            @click="handleReplyClick(index)"
            style="margin-left: 2.8rem"
          >
            <img :src="button_responder" alt="" style="" />Responder
          </span>
        </div>

        <div v-if="showReplyForm[`${index}-null`]" class="row" id="seccion_comentario">
          <div class="col-12 py-1 px-0" style="width: 100%">
            <CommentAreaBox />
          </div>
        </div>

        <!-- Respuestas -->
        <template v-if="comment.replies.length >= 0">
          <!-- Iterar sobre las respuestas -->

          <div v-if="showRepliesForCommentId === comment.id">
            <template v-for="(reply, replyindex) in comment.replies" :key="reply.id">
              <div class="row ms-1 me-2 py-3">
                <div class="col-2 py-2 px-0">
                  <ImgHexa :img="reply.avatar" size="31.57px"></ImgHexa>
                </div>
                <div class="col-10 px-0 small d-flex justify-content-start comment-text">
                  <div class="row">
                    <div
                      class="col-12 d-flex align-items-center"
                      style="justify-content: space-between; position: relative"
                    >
                      <div>
                        <span class="author-name">{{ reply.author }}</span>
                        <span class="m-2 comment-time">{{ reply.time }}</span>
                      </div>
                      <span>
                        <img
                          @click="openSettingModal(index, replyindex)"
                          :src="more"
                          class="comment-moreimg"
                          style=""
                        />
                      </span>
                      <div
                        v-if="showSettingsModal[`${index}-${replyindex}`]"
                        class=""
                        :class="
                          showSettingsModal[`${index}-${replyindex}`]
                            ? 'modal-container-settingReply'
                            : ''
                        "
                      >
                        <!-- tu modal aquí -->
                        <div>
                          <span class="item-list-setting">
                            <!-- tu icono SVG aquí -->
                            <img :src="Iconcopy" />
                            Copiar
                          </span>
                          <span class="item-list-setting">
                            <!-- tu icono SVG aquí -->
                            <img :src="IconCompartir" />
                            Compartir
                          </span>
                          <span class="item-list-setting">
                            <!-- tu icono SVG aquí -->
                            <img :src="IconAlerta" />
                            Reportar
                          </span>
                          <span class="item-list-setting">
                            <!-- tu icono SVG aquí -->
                            <img :src="IconBloquear" />
                            Ignorar usuario
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-12 d-flex justify-content-start align-items-center small pt-1 my-class-text"
                    >
                      {{ reply.text }}
                    </div>

                    <div class="col-12 container_icons pt-2" style="opacity: 0.5">
                      <span class="btn_icon">
                        <img
                          :src="like_black"
                          alt=""
                          :class="reply.dislikes ? 'liked' : ''"
                          class="svg-like"
                          @click="incrementReplyLikes(index, replyindex)"
                        />
                        {{ reply.likes }}
                      </span>
                      <span class="btn_icon" style="margin-left: 7px">
                        <img
                          :src="unlink"
                          alt=""
                          @click="incrementReplyDislikes(index, replyindex)"
                          style=""
                        />
                      </span>
                      <span
                        class="btn_icon pl-4"
                        @click="handleReplyClick(index, replyindex)"
                        style="margin-left: 2.8rem"
                      >
                        <img :src="button_responder" alt="" style="" />Responder
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  v-if="showReplyForm[`${index}-${replyindex}`]"
                  class="row"
                  id="seccion_comentario"
                >
                  <div class="col-12 py-1 px-0" style="width: 100%">
                    <CommentAreaBox />
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div
            style=""
            class="col-12 d-flex mt-2 comment-replies respuestas-container justify-content-start align-items-center"
            v-if="comment.replies.length > 0"
            id="ver_respuesta-comment"
          >
            <span @click="toggleReplies(comment.id)" class="p-0 m-0"
              >Ver respuestas ({{ comment.replies.length }}) •</span
            >
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed } from "vue";
// Composables
import LikeIcon from "../components/svg/likeIcon.vue";
import chollo4 from "../assets/chollo4.svg";
import Iconcopy from "../assets/single-product/copiar.svg";
import IconAlerta from "../assets/single-product/alerta.svg";
import IconCompartir from "../assets/single-product/compartir.svg";
import IconBloquear from "../assets/single-product/bloquear.svg";
import like_black from "../assets/single-product/likes.svg";
import unlink from "../assets/single-product/unlikes.svg";
import button_responder from "../assets/single-product/responder.svg";
import more from "../assets/single-product/more.svg";
import star from "../assets/star.svg";
import img from "../assets/images/avatar/1.png";
import ImgHexa from "../components/ImgHexa.vue";
import hexagon from "../assets/hexagon-model-hex.png";
import CommentAreaBox from "./CommentAreaBox.vue";

export default defineComponent({
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
    img: String,
    more: String,
    star: String,
    button_responder: String,
    like_black: String,
    unlink: String,
  },
  components: {
    ImgHexa,
    LikeIcon,
    CommentAreaBox,
  },
  emits: [
    "increment-likes",
    "increment-dislikes",
    "increment-relikes",
    "increment-redislikes",
  ],
  setup(props, { emit }) {
    const showSettingsModal = reactive({});
    const isLiked = ref(false);
    const showRepliesForCommentId = ref(null);
    const showReplies = ref(false);
    const replyIndex = ref(null);
    const replyReplyIndex = ref(null);
    const showReplyForm = reactive({});

    function openSettingModal(commentIndex, replyIndex = null) {
      // muestra el modal de configuración correspondiente al comentario o respuesta seleccionado
      const key = `${commentIndex}-${replyIndex}`;
      showSettingsModal[key] = !showSettingsModal[key];
      replyIndex.value = commentIndex;
      replyReplyIndex.value = replyIndex;
    }

    function closeSettingModal(commentIndex, replyIndex) {
      Object.keys(showSettingsModal).forEach((key) => {
        showSettingsModal[key] = false;
      });
      // oculta el modal de configuración
      const key = `${commentIndex}-${replyIndex}`;
      showSettingsModal[key] = false;
    }

    const incrementLikes = (index) => {
      console.log("Emit click aumentoLike: ", index);
      isLiked.value = !isLiked.value;
      emit("increment-likes", index);
    };

    const incrementDisLikes = (index) => {
      console.log("Emit DisLick aumento");
      emit("increment-dislikes", index);
    };

    const incrementReplyLikes = (index, replyindex) => {
      emit("increment-relikes", index, replyindex);
    };

    const incrementReplyDislikes = (index, replyindex) => {
      emit("increment-redislikes", index, replyindex);
    };

    function addReply(index, reply) {
      comments[index].replies.push(reply);
    }

    const handleReplyClick = (commentIndex, replyIndex = null) => {
      // alterna el valor de showReplyForm para mostrar u ocultar el formulario
      const key = `${commentIndex}-${replyIndex}`;
      showReplyForm[key] = !showReplyForm[key];
      replyIndex.value = commentIndex;
      replyReplyIndex.value = replyIndex;
    };

    function toggleReplies(commentId) {
      console.log("Abrio ver Respuestas...");
      // Cierra todos los modales openSettingModal
      Object.keys(showSettingsModal).forEach((key) => {
        showSettingsModal[key] = false;
      });

      if (showRepliesForCommentId.value === commentId) {
        showRepliesForCommentId.value = null;
      } else {
        showRepliesForCommentId.value = commentId;
      }
    }

    return {
      isLiked,
      chollo4: chollo4,
      Iconcopy: Iconcopy,
      IconCompartir,
      IconAlerta,
      IconBloquear,
      unlink: unlink,
      like_black: like_black,
      button_responder: button_responder,
      more: more,
      showReplyForm,
      showSettingsModal,

      openSettingModal,
      closeSettingModal,
      handleReplyClick,
      incrementLikes,
      incrementDisLikes,
      incrementReplyLikes,
      incrementReplyDislikes,
      img: img,
      hexagon: hexagon,
      star: star,
      showReplies,
      showRepliesForCommentId,
      toggleReplies,
    };
  },
});
</script>
<style lang="scss">
.my-class-text {
  line-height: 15px;
  font-weight: 500;
  width: 92%;
  font-size: 12px;
}
.item-list-setting {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;

  align-items: flex-start;
  padding: 13px 14px;
  gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;

  color: #6f6f6f;

  background: #ffffff;
  border-bottom: 1px solid #d9d9d9;
}
.modal-container-setting {
}

.modal-container-settingMain {
  width: 179px;
  /* bottom: 0; */
  margin: 0px auto;
  /* padding: 20px 0; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: absolute;
  right: 1px;
  top: 19%;
  z-index: 1000;
}

.modal-container-settingReply {
  width: 179px;
  /* bottom: 0; */
  margin: 0px auto;
  /* padding: 20px 0; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: absolute;
  right: 11px;
  top: 91%;
  z-index: 1000;
}

.svg-like {
  transition: transform 0.2s;
}

.liked {
  animation: heart-burst 0.8s steps(28) 1;
}

@keyframes heart-burst {
  0% {
    transform: scale(0.2);
  }
  30% {
    transform: scale(1.2);
  }
  40% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.95);
  }
  70% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.98);
  }
  90% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

.comment_btn-likes {
  background: #f7f7f7;
  border-radius: 4px;
}
.comment-container {
  position: relative;
  // z-index:110;
  background: white;
}

.container_icons {
  gap: 4px;
}
.container_icons .btn_icon {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 4px;
  width: auto;
  /* height: 24px; */
  left: 57px;
  top: 1444px;
  background: #f7f7f7;
  border-radius: 4px;
  align-content: center;
}

.btn_icon {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;

  color: #484848;
}

.comment-container::before {
  content: "";
  position: absolute;
  top: calc(18% - 0.205rem);
  bottom: 1.1975rem;
  left: 16px;
  width: 2px;
  background-color: #ebebeb;
  z-index: -3;
}
.comment-replies {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #6328e0;
  line-height: 15px;
}

.comment-text {
  color: #000;
  font-weight: 700;
  text-align: justify;
}

.comment-moreimg {
  width: 18.67px;
  height: 4.67px;
}

.comment-main {
  width: 100%;
  height: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  color: #ffffff;
  padding: 1px 6px 2px;
  background: #6328e0;
  border-radius: 25px;
  text-transform: capitalize;
}

.comment-time {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: inline-flex;
  color: #686868;
}

.comment-label {
  background: #e5e5e5;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: flex-start;
}

.author-name {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;

  line-height: 15px;
  font-family: "Inter";

  color: #a6a6a6;
}

.comment-respuesta {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #4e85d9;
  line-height: 15px;
}

.respuestas-container {
  transition: all 0.3s ease-in-out;
}
</style>
