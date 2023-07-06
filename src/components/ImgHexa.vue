<template>
    <div :style="'width: '+size+';height:'+size+';background: url('+img+');background-size: cover;background-repeat: no-repeat;display: flex;  justify-content: space-between;align-items: center;gap: 8px;'">
        <img :src="hexagon" alt="shipper" class="w-100">
    </div>
</template>
<script>
 import hexagon from '../assets/hexagon-model-hex.png';
export default {
  data() {
    return { 
       hexagon : hexagon
    }
  },
  props: ['img','size'],
}
</script>
