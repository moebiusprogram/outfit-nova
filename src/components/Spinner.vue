<template>
  <div :style="getBackgroundImage" class="spinner">
    <div>
      <span>{{ data }}</span>
    </div>
  </div>
</template>

<script>


export default {
  props: ["data", "progress"],
  computed: {
    getBackgroundImage() {
      return {
        backgroundImage: `linear-gradient(${this.progress > 50 ? '90' : this.degree + 90
          }deg, transparent 50%, ${this.progress > 50 ? this.dark : this.light
          } 50%), linear-gradient(${this.progress > 50 ? this.degree - 90 : '90'
          }deg, ${this.light} 50%, transparent 50%)`,
      }
    }
  },
  data() {
    return {
      degree: this.progress * 360 / 100,
      dark: '#fff',
      light: '#f76e11',
    }
  },
}
</script>
