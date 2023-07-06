<template>
    <div class="coupon-dashed">
        <img src="../assets/single-product/tijera.svg" alt="scissors">
        <span style="width: max-content; text-cupon">{{ title }}</span>
    </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
<style lang="scss" scoped>

.coupon-dashed{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 9px 11px;
gap: 12px;
box-sizing: border-box;
width: 119px;
height:24px;
background: #F3F3F3;
border: 1px dashed #848484;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 11px;
line-height: 13px;

color: #232323;
}
.text-cupon{
  font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 11px;
line-height: 13px;

color: #232323;
}
</style>
