<template>
  <button class="btn btn-outline-secondary rounded-pill w-100 bg-white text-hover-dark justify-content-start" :class="{dark: dark, 'button-to-social': true}" :href="pathToSocial" style="text-decoration: none;padding-left: 80px;">
    <slot /> {{ content }}
  </button>
</template>

<script>
export default {
  props: ['content', 'pathToSocial', 'dark'],
}
</script>
