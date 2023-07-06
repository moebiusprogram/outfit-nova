<template>
 <div class="d-flex justify-content-center">
  
  <div> <img :src="back" alt="Atras" style="height: 10px;width:10px"> Atras </div>
  <div>ENVIAR CHOLLOS</div>
  <div> <img :src="search" alt="Buscar" style="height: 10px;width:10px"> Atras </div>
   
 </div>
</template>

<script>
import back from '../assets/back.svg';
import search from '../assets/search.svg';
export default {
  props: ['brands'],
   
  data() {
    return {
      back: back,
      search: search,
    }
  },
}
</script>
