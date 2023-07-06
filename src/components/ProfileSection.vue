<template>
  <router-link :to="link_to">
    <section style="background: white; border-radius: 8px 8px 0 0; border-bottom: 1px solid #EBEBEB; min-height:38px; padding: 10px 30px 10px 12px;display: flex; gap:10px;">
    <div id="icon-container" style="height:34px; min-width:34px; border:1px solid #F0F0F0; background:#F8F8F8;border-radius: 8px;">
      <img id="icon" :src="img" alt="" style="height:15.4px; width:15.4px;margin-left:8px;margin-top:5px;"> 
    </div>
    <div style="margin-left:12px;">
    <span style="float:left;font-size:13px;font-weight:700;">{{ title }}</span><br>
    <div v-if="active" class="notification-pulse">
      <div class="notification-pulse-counter">2</div>
    </div>
    <span style="float:left; font-size:11px; line-height:120%; margin-top:-5px;">{{ subtitle }}</span>

    </div>
  </section>
  </router-link>
</template>

<script>

export default{
  name: 'ProfileSection',
  props: ['img', 'title', 'subtitle', 'active', 'link_to'],
  mounted () {
    console.log(this.link_to)
  }
}
</script>

<style scoped>
a{
  color: #000
}
</style>
