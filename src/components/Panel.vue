<template>
  <router-link :to="link_to">
    <div>
      <img :src="img" alt="" >
        <h4 style="font-size:20px">{{ name }}</h4>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ['link_to', 'img', 'name']
}
</script>

<style scoped>
img {
  height:350px;
  width:auto
}
</style>