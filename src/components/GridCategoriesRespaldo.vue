 <template>
  <div class="row mx-0 px-0">
    <div class="col-4 mx-0 px-0 category" v-for="(item, index) in categories" :key="index">
      <figure><img :src="item.image" alt="category" style="height:190px; width: 120px;"></figure>
      <div class="category-gray-screen" style="text-align: center;">
        <h3 class="small" v-html="item.name"></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"],
}
</script>
