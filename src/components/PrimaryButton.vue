<template>
  <button :type="type" class=" ">
    <slot />
  </button>
</template>

<script>
export default {
  props: ["type"],
}

</script>
