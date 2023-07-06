<template>

      <div class="btn m-0 p-0 w-100 d-flex" :style="'height:35px;border-radius: 0px;    background:url('+cupon2+');background-size: 100%;background-repeat: no-repeat;justify-content: space-around;align-items: center;'">

          <img :src="cuponcut" alt="" style="width: 14px;height: 14px;">

          <span style="font-weight: 800;
font-size: 11px;
line-height: 13px;

color: #232323;">
            EXTRADSCTO5
          </span>

          <img :src="cupongo" alt="" style="width: 14px;height: 14px;">
 


      </div>
</template>

<script>

import cuponcut from '../../assets/cupon_cut.svg';
import cupongo from '../../assets/cupon_go.svg';
import cupon2 from '../../assets/cupon2.svg';

export default {
  props: ['color_bg','color_text'],
  components: {
   },
  data() {
    return {
      cuponcut : cuponcut,
      cupongo : cupongo,
      cupon2 : cupon2,
    }
  },
}
</script>