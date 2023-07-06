<template>
  <li :class="{icon: true, active: isActive}">
    <a :href="url">
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  props: ['isActive', 'url']
}
</script>
