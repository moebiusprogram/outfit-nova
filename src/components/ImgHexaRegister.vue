<template>
    <div :style="'width: '+size+';height:'+size+';background: url('+img+');position:relative; top:-40px; margin:auto; border: 0;'">
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
