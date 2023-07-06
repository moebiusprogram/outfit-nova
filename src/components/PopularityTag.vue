<template>
  <div class="tag">
    <img src="../assets/arrow.svg" art="arrow down">
    <span>{{ value }}</span>
    <img src="../assets/arrow1.svg" art="arrow up">
  </div>
</template>

<script>
export default {
  props: ["value"],
}
</script>
