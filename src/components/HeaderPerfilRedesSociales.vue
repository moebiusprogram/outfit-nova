<template>
  <section id="background" class="container__redes--sociales">

    <section class="profile-header">
      <section class="profile-logo">
        <Avatar width="4.8675" height="4.8125" left="3.55" 
        top="2.8125" buttonHeight="1.25" buttonWidth="1.25"
        buttonImgHeight="0.59375" buttonImgWidth="0.59375"
         />
      </section>
      <div class="container_description--profile">
        <div class="perfil__title--container">
          <span id="profile-name" class="profile-name">{{ name }}</span>
          <img :src="IconVerificate" alt="" id="add-verificate" class="verificate__icon">
          <button class="send-staff-btn">Staff - Moda Hombre</button>
        </div>

        <div class="followers__container">
          <span class="seguidores__container"><strong>78</strong>Seguidores</span>
          <span class="seguidos__container"><strong>15</strong>Seguidos</span>
        </div>

        <div class="perfil__follow--container">
          <button v-if="showFollow" v-on:click="toggleFollow"   :class="{ active: showFollow }">Follow</button>
          <button v-if="showUnFollow" v-on:click="toggleUnFollow" :class="{ active: showUnFollow }">Unfollow</button>

          <div class="redes__sociales" v-for="(item, index) in imgRedessociales" :key="index">
            <img :src="item.url" alt="" width="16" height="16" id="add-verificate" class="verificate__icon">
          </div>
        </div>
      </div>

    </section>
  </section>
</template>
<script>
import { ref } from 'vue';
import maverick from "../assets/maverick.png";
import Avatar from "../components/Avatar.vue";
import imageUrlYoutube from '../assets/profile/redes_sociales/social_youtube.svg' // => or relative path
import imageUrlInstagram from '../assets/profile/redes_sociales/social_instagram.svg' // => or relative path
import imageUrlFacebook from '../assets/profile/redes_sociales/social_facebook.svg' // => or relative path
import imageUrlTwitter from '../assets/profile/redes_sociales/social_twitter.svg' // => or relative path
import imageUrlTikTok from '../assets/profile/redes_sociales/social_tiktok.svg' // => or relative path
import IconVerificate from '../assets/profile/Verificate.svg'

export default {
  name: "ProfileHeader",
  components: {
    Avatar,
  }, setup() {

    const showFollow = ref(true);
    const showUnFollow = ref(false);

    function toggleFollow() {
      showFollow.value = !showFollow.value;
      showUnFollow.value = true;
    }

    function toggleUnFollow() {
      showUnFollow.value = !showUnFollow.value;
      showFollow.value = true;
    }

    const imgRedessociales = ref([
      { url: imageUrlYoutube, alt: 'red social' },
      { url: imageUrlInstagram, alt: 'red social' },
      { url: imageUrlTwitter, alt: 'red social' },
      { url: imageUrlFacebook, alt: 'red social' },
      { url: imageUrlTikTok, alt: 'red social' }
    ]);

    return {
      img: maverick,
      name: "@daniellen418",
      imgRedessociales,
      IconVerificate,
      showFollow,
      showUnFollow,
      toggleFollow,
      toggleUnFollow,
    };
  },
}
</script>
<style scoped>
.profile-svg {
  height: 77px;
  width: 74px;
  margin-left: 12px;
}

.profile-header {
  display: flex;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.profile-name {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}

.container_description--profile {
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;

  gap: 8px;
  text-align: center;
  margin: 0px !important;
}

.send-staff-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 8px;
  gap: 2px;
  border: none;
  width: auto;
  color: #009df8;
  height: 22px;
  left: 139px;
  top: 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.5rem;
  line-height: 10px;
  background: #d3efff;
  border-radius: 25px;
}

#add-photo {
  height: 9px;
  width: 9px;
  transform: translateY(-3px);
}

.container__redes--sociales {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 100%);
  height: 175px;
}

.profile-logo {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.verificate__icon {
  Width: 19.57px;
  Height: 18.74px;
  margin-left: 6px;
}

.perfil__title--container {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 4px;
}

.perfil__follow--container {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0px;
  padding-top: 3%;
}

.followers__container {
  width: 100%;
  display: flex;
  gap: 10px;

}

.seguidores__container {
  display: flex;
  gap: 3px;
  color: #979797;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
}

.seguidores__container strong {
  color: #000000;
}

.seguidos__container strong {
  color: #000000;
}

.seguidos__container {
  display: flex;
  gap: 3px;
  color: #979797;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
}

.redes__sociales {
  display: flex;
  flex-direction: row;
  gap: 0px;
  justify-content: center;
  align-items: center;
}

.perfil__follow--container button {
  width: 120px;
  height: 32px;
  left: 106px;
  top: 136px;
  border: none;
  background: #000000;
  border-radius: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}
</style>
