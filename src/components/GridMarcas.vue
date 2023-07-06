 <template>
  <div class="row mx-0  px-2">
    <div class="col-4 mx-0 px-0" v-for="(item, index) in categories" :key="index">

      <div class="row d-flex align-items-center m-1 p-2 rounded"  style="background:#fff;height:70px">
        <div class="col-12 px-0 text-center">
          <img :src="item.image" alt="category" :style="'height:'+item.height+'; width:'+item.width+';'">
        
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"],
}
</script>
