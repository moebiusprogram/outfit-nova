<template>
  <div class="custom-input">
    <label :class="{focused: isFocused || value}" :for="name">{{placeholder}}</label>
    <input :class="{'invalid-input' : isValid==false}" :type="type" :name="name" :id="name" :value="value" @focusin="this.isFocused = true"
      @focusout="this.isFocused = false" @blur="inputHandler"
      @keyup="inputHandler" placeholder=" ">
    <button v-if="value || isFocused" class="close-button" type="button" @click="() => this.value = ''">
      <img :src="close" alt="">
    </button>
  </div>
</template>

<script>
import close from '../assets/close.svg';

export default {
  props: ['name', 'placeholder', 'type', 'isValid'],
  data() {
    return {
      isFocused: false,
      value: '',
      close,

    }
  },
  methods: {
    inputHandler(e) {
      const inputType = e.currentTarget.getAttribute('name')
      const input = e.currentTarget.value
      this.$emit('update', input, inputType)
      this.value = input
    }
  },
  test () {
    console.log('works')
  }
}
</script>
