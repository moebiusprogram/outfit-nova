<template>
  <div class="brands-header pb-0" :style="style">
    <div>
      <header class="brands-header-title">
        <h1 class="p-0 m-0" style="font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;">{{brandName}}</h1>
        <span style="font-weight: 500;
font-size: 12px;
line-height: 15px; 
color: #AEAEAE;">({{ views }})</span>
      </header>
      <img src="../assets/trash.png" alt="trash">
    </div>
    <BrandTags :brands="brands" />
  </div>
</template>

<script>
import BrandTags from './BrandTags.vue';
import activos from '../assets/activos.svg';
import scissors from '../assets/scissors.svg';
import user from '../assets/user-plus.svg';
export default {
  props: ['brandName', 'views', 'style'],
  components: {
    BrandTags,
  },
  data() {
    return {
      brands: [
        {
          name: 'chollos activos',
          amount: '756',
          img: activos
        },
        {
          name: 'cupones',
          amount: '113',
          img: scissors
        },
        {
          name: 'seguidores',
          amount: '13',
          img: user
        },
      ]
    }
  },
}
</script>
