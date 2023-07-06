<template>
  <li class="justify-content-center" style="display: flex;width: 33%;padding: 0;">
    <img :src="image" alt="tag" style="width:15px">
    <span style="font-weight: 500;line-height: 13px;font-size: 9px;margin-left: 5px;" class="d-flex ">      
      <span >{{ amount }} </span> &nbsp; {{ name }}
    </span>
  </li>
</template>

<script>
export default {
  props: ['amount', 'name', 'image']
}
</script>
