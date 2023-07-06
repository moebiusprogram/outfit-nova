<template>
  <div class="offer">
    <div class="offer-tag">
      <h4>Oferta</h4>
      <span>{{ offer }}%</span>
    </div>
    <div class="offer-expires">
      <span>Termina en:</span>
      <Spinner data="3d" progress="25" />
      <Spinner data="10h" progress="25" />
      <Spinner data="53s" progress="25" />
    </div>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
export default {
  components: { Spinner, },
  props: ["offer"]
}
</script>
