<template>
  <a href="#" :class="{'calendar-day': true, active}">
    <span class="day">{{day}}</span>
    <span class="month">{{month}}</span>
  </a>
</template>

<script>
export default {
  props: ['day', 'month', "active"],
}
</script>
