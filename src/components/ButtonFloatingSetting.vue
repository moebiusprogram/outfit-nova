<template>
  <button class="btn_setting " >
  <IconoSetting/>
  </button> 
</template>

<script>
import IconoSetting from '../components/svg/setting.vue'
export default {
components:{
  IconoSetting
}
}
</script>

<style lang="scss" scoped>
.btn_setting{
position:fixed;
right:15px;
z-index: 100;
bottom:15px;
width: 48px;
text-align: center;
border:none;
height: 48px;
border-radius: 50%;
background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}
</style>