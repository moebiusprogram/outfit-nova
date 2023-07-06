<template>
  <div class="warning">
    <img src="../assets/alert-circle.svg" alt="alert icon">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  props: ["msg"],
}
</script>
