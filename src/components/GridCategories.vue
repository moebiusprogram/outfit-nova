 <template>
  <div class="row mx-0  px-2">
    <div class="col-6 mx-0 px-0" v-for="(item, index) in categories" :key="index">

      <div class="row d-flex align-items-center m-1 p-2 rounded"  style="background:#F1F1F1;height:70px">
        <div class="col-8 px-0">
          <h3 class="small" v-html="item.name" style="font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;"></h3>
        </div>
        <div class="col-4 px-0 d-flex justify-content-end">
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
