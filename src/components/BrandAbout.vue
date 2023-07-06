<template>
  <div class="brand-about-wrapper" @click="dropdown = !dropdown">
    <span>About <span class="text-capitalize">{{ name }}</span></span>
    <img src="../assets/open-dropdown.svg" style="width:12px;" alt="">
  </div>
  <div v-if="dropdown==true" class="brand-about-dropdown">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae voluptate odit id sunt aut fuga dolores, molestiae ut. Exercitationem velit doloremque sit molestiae inventore quidem natus quia ratione sunt.
  </div>
</template>

<script>
export default {
  name: 'BrandAbout',
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
      dropdown: false
    }
  }
}
</script>

<style>
.brand-about-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #F7F7F7;
  border-bottom: 1px solid #F7F7F7;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
}

.brand-about-dropdown{
  z-index: 100;
  position:absolute;
  background: #fff;
}
</style>