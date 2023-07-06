<template>
  <svg :width="width" :height="height" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_165)">
<path d="M4.99992 9.16665C7.30111 9.16665 9.16659 7.30117 9.16659 4.99998C9.16659 2.69879 7.30111 0.833313 4.99992 0.833313C2.69873 0.833313 0.833252 2.69879 0.833252 4.99998C0.833252 7.30117 2.69873 9.16665 4.99992 9.16665Z" stroke="#CC2323" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 2.5V5L6.66667 5.83333" stroke="#CC2323" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_165">
<rect width="10" height="10" fill="#CC2323"/>
</clipPath>
</defs>
</svg>

</template>

<script>
export default {
  props: {
    color: String,
    
    width: {
      type: String,
      default: 10,
      requerid: false
    },

    height: {
      type: String,
      default: 10,
      requerid: false
    }
  }
}
</script>
