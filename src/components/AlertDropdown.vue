<template>
  <div style="height:40px; margin-top:10px;">
    <span style="margin-left:12px;">Seleccionar {{type}}</span>
    <img src="../assets/open-dropdown.svg" style="float:right; margin-right:12px;" alt="">
  </div>
</template>
<script>
export default {
  name: 'AlertDropdown',
  props: {type: String}
}
</script>
