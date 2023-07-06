<template>
  <a :class="{dark: dark, 'button-to-social': true}" :href="pathToSocial" style="text-decoration: none;">
    <slot /> {{ content }}
  </a>
</template>

<script>
export default {
  props: ['content', 'pathToSocial', 'dark'],
}
</script>
