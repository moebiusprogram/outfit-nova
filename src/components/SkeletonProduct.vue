<template>
    <div class="row">
        <div  class="col-6 mx-0 px-0  my-2  d-flex justify-content-between flex-column "   
    :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}"
    style=""
    >
        <div class="product-skeleton">
        <div class="product-image-skeleton"></div>
        <div class="container-footer-skeleton">
            <div class="product-title-skeleton"></div>
            <div class="product-description-skeleton"></div>
            <div class="product-skeleton-slide"></div>
    </div>
        </div>
    </div>
    <div class="col-6 d-grid gap-2 mx-0 px-0  my-2" 
:class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}"> 
<div class="product-skeleton">
        <div class="product-image-skeleton"></div>
        <div class="container-footer-skeleton">
            <div class="product-title-skeleton"></div>
            <div class="product-description-skeleton"></div>
            <div class="product-skeleton-slide"></div>
    </div>
        </div>
</div>

    </div>
</template>

<script >
export default {
  props: ["index"],
  props:  {
        index:{
         type:Number,
         default:0
       }
  },
  components: {

    
  },

 
  data(){
    return{
         
    }
  },

}
</script>

<style lang="scss" scoped>

.product-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image-skeleton {
  width: 100%;
  height: 220px;
  background-color: #e0e0e0;

}

.container-footer-skeleton{
    height:92px;
    width:100%;
}

.product-title-skeleton {
  width: 65%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-top: 8px;
}

.product-description-skeleton {
  width: 65%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-top: 4px;
}
@keyframes loading {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
}

.product-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image-skeleton,
.product-title-skeleton,
.product-description-skeleton {
  animation: loading 2s ease-in-out infinite;
}



.product-skeleton-slide {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-top: 8px;
}


</style>