<template>
  <div class="dropdown">
    <label :class="{focused: isFocused || value}" :for="name">
      <slot />
    </label>
    <input v-if="date" type="date">
    <select v-if="!date" :name="name" :id="name">
      <option :value="'Seleccionar ' + unit" />
      <option v-for="(option, i) in options" :key="i" :value="option" />
    </select>
  </div>
</template>
<script>
export default {
  props: ['name', 'options', 'unit', 'date'],
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
