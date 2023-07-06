<template>
  <div :class="selected ? 'size-tag size-tag-selected' : 'size-tag'"  @click="select()">
    {{size}}
  </div>
</template>

<script>

export default{
  name: 'SizeTag',
  props: {size: String,
  selected: {
    type: Boolean,
    default: false
  },
enabled: {
  type: Boolean,
  default: false
}},
  methods: {
    select() {
      if (enabled) {
        this.selected = !this.selected
      }
    }
  }
}
</script>
