<template>
  <section :style="'width:100%; display: flex;justify-content: center;align-items: space-between; height:110px;'">
    <router-link :to="'/create-alert'">
      <button 
        id="add-alert"
        style="position: absolute;
        border:none;
        width: 128px;
        height: 64px;
        left: 37px;
        top: 100px;
        border-radius: 8px;
        background-color:  #2B65AE;"
      >
        <img 
          src="../assets/add-item.svg" 
          alt="add-alert"
          class= "add-alert"
          width="128px"
          height="48px"
          />
      </button>
    </router-link>
      <span style="position: absolute;
        width: 81px;
        height: 17px;
        left: 62px;
        top: 174px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;"
      >
        Crear alerta
      </span>
    <button 
      id="view-feed"
      style="position: absolute;
      border:none;
      width: 128px;
      height: 64px;
      left: 205px;
      top: 100px;
      border-radius: 8px;
      background-color:  #2B65AE;"
    >
      <img 
        src="../assets/view-feed.svg" 
        alt="view-feed"
        class="view-feed"
        width="128px"
        height="64px"
        />
    </button>
      <span style="position: absolute;
        width: 77px;
        height: 17px;
        left: 231px;
        top: 174px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;"
      >
        Ver mi feed
      </span>
  </section>
</template>

<script>
export default {
  name: 'CreateAlert',
  data () {
    return {
      numAlertas: 6
    }
  },
  props: ['style']
}
</script>

<style scoped>
.add-alert{
  width:128px;
  height: 48px;
}

.view-feed{
  width: 128px;
  height: 64px;
}
</style>