<template>
   <div class="content_avatar">
      <div class="hexagone" :style="{ width: width + 'rem', height: height + 'rem' }">
      
         <img :src="avatarPerfil" :width="width" :height="height" :style="{ width: width + 'rem', height: height + 'rem' }" alt=""/>

            </div>
            <input
            type="file"
            ref="fileInput"
            @change="handleFileUpload"
            style="display: none"
         />
         
    <button @click="handleButtonClick" class="btn__add-photo"
    :style="{ width: buttonWidth + 'rem', height: buttonHeight + 'rem',
    left: left + 'rem', top: top + 'rem', position: 'absolute'  }"
    >
      <img src="../assets/add-photo.svg" alt=""
      :style="{ width: buttonImgWidth + 'rem', height: buttonImgHeight + 'rem' }"
       id="add-photo" />
    </button>
 
   </div>
  
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Avatar',
  components: {},
  props: {
    width: {
      type: String,
      default: '9.25', // specify default value for width prop
      required: false,
    },
    height: {
      type: String,
      default: '8.75', // specify default value for height prop
      required: false,
    },
    buttonWidth: {
    type: String,
    default: '2.375', // specify default value for buttonWidth prop
    required: false,
  },
    buttonHeight: {
      type: String,
      default: '2.375', // specify default value for buttonHeight prop
      required: false,
    },
    buttonImgWidth:{
      type: String,
      default: '0.875', // specify default value for buttonHeight prop
      required: false,
    },
    buttonImgHeight:{
      type: String,
      default: '0.875', // specify default value for buttonHeight prop
      required: false,
    },
    left: {
      type: String,
      default: '7', // specify default value for height prop
      required: false,
    },
    top: {
      type: String,
      default: '5.5', // specify default value for height prop
      required: false,
    },
  },
  setup(props) {
    const defaultAvatar = new URL('../assets/profile/maverick.svg', import.meta.url);
    const avatarPerfil = ref(defaultAvatar);
    const fileInput = ref(null);

    function handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          avatarPerfil.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }


    function handleButtonClick() {
      fileInput.value.click();
    }

    return {
      avatarPerfil,
      fileInput,
      handleFileUpload,
      handleButtonClick,
      ...props, // include the props in the returned object
    };
  },
};
</script>
<style lang="scss" scoped>
.btn__add-photo {
   display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px;
    gap: 10px;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: none;
    width: 38px;
    height: 38px;
    border: none;
}

div[class] {
   display: inline-block;
    color: blanchedalmond;
    /* margin: 20px; */
    filter: url(#round);
    object-fit: contain;
    background-size: contain;
    position: initial;
    display: block;
}
.hexagone img {

   object-fit: cover;
    background-size: contain;
   mask-image: url('../assets/profile/mask.svg');
   -webkit-mask-image: url('../assets/profile/mask.svg');
   -webkit-mask-repeat: no-repeat;
}
.container_cupon--arra {
   width: 100%;
   height: 100%;
}
.content_avatar {
   position: absolute;
   bottom: -48px;
   left: 5px;
}
</style>