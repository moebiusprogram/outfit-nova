<template>
  <div class="row mx-0 px-0 py-1">
  
    <template  v-for="(item, index) in prodcuts" :key="index" >
        <div class="col-6 mx-0 px-0   d-flex justify-content-between flex-column  my-2 "
        v-if="!item.is_cupon" :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}">
          <figure class="img_card--products offer-grid-item-img text-center" style="display: flex; object-fit: contain !important;">
            <!-- <img :src="item.image" alt="grid item" style="height<template>
  <div class="row mx-0 px-0 py-1">
  
    <template  v-for="(item, index) in prodcuts" :key="index" >
        <div class="col-6 mx-0 px-0   d-flex justify-content-between flex-column  my-2 "
        v-if="!item.is_cupon" :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}">
          <figure class="img_card--products offer-grid-item-img text-center" style="display: flex; object-fit: contain !important;">
            <img :src="item.image" alt="grid item" style="height:220px; width: 170px;"> -->
            <img :src="item.image" alt="grid item img_card--products" 
            style=" ">
            <span class="offer-grid-item-img-company " v-html="item.label_top" :style="' background:'+item.label_top_bg+'; color:'+item.label_top_color+';'"></span>
                     <span :class="{'badget-discount ps-1 pe-1 badget-static':!item.oclock,'badget-discount ps-1 pe-1 badget-buttom':item.oclock + 'badget-discount ps-1 pe-1'}">
          <div class="countdown  d-flex js-article-detail-countdown-container ">
                <div class="countdown--date js-article-detail-countdown">
                   <Timer/>
                  <small class="ms-1">00:29:44</small></div>
                </div>
                </span>
            <span :class="{'offer-grid-item-img-discount':!item.oclock,'offer-grid-item-img-discount-oclock':item.oclock,}">-{{item.discount}}%</span>
            <span class="offer-grid-item-img-oclock" v-if="item.oclock">2d : 20h : 15s</span>
          </figure>
  
          <div class="offer-grid-item-body pe-0 pb-2 d-flex flex-column justify-content-between ">
            <div class="">
            <div class="offer-grid-item-body-prices">
              <span class="offer-grid-item-body-prices-price">€{{item.cost_end}}</span>
              <span class="offer-grid-item-body-prices-old-price">€{{item.cost_init}}</span>
            </div>
             <!-- <h2><span v-for="(cat, index) in item.categories" :key="index">{{cat.name}}
               <span v-if="index+1<item.categories.length"> / </span> 
               </span></h2>  -->
            <h2>{{item.name}}</h2>
            </div>
            <div class=" d-flex  justify-content-between justify-content-center 
            align-items-end pe-1" >
              <div style="width: 50%; display: flex; border:2px solid red;" class=" offer-grid-item-body-footer ">
                  <div v-for="(colour, index) in item.colours" :key="index" :style="'background-color:'+colour"></div>            
              </div> 
              <div style=" m-0 p-0" class="d-flex justify-content-end w-100  ">
                <img :src="oclock" alt="" class="me-1 img-fluid" style="">
                 <span class="d-flex p-0 m-0 flex-inline text_footer--cupons">Desde 22 marzo</span>
              </div>
              </div>       
          </div>
        </div>
        
          <CuponesOfferts v-else :datos="item" :index="index"/>
               <Skeletor  v-if="isPostLoading" width="100"/>
        </template>
    
    </div>
      
</template>
<script>
  
  import oclock from '../assets/oclock.svg';
  import bg_white from '../assets/bg-white.svg';
  import CuponesOfferts from '../components/CuponsOffers.vue';
  import Timer from '../components/svg/oclock.vue';
  import { Skeletor } from 'vue-skeletor';
  export default {
    props: ["prodcuts"],
      props: {
      prodcuts: {
        type: Array,
        default: () => ([]),
      },
      isLoaded: {
        type: Boolean,
        default: true,
      },
    },
    components: {
      CuponesOfferts,
      Timer,
      Skeletor   
    },
    data() {
      return { 
        oclock : oclock,
        bg_white : bg_white,
      }
    },
    mounted() { 
      console.log(this.details + "--");
    },
    methods: {
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .text_footer--cupons{
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: #9B9B9B;
  }
  .badget-discount {
  position: absolute;
      left: 40px;
      background: #f8f9fa;
      color: #cc2323;
      border: 2px solid #CC2323;
      padding: 0.13rem;
      margin: 0;
      font-size: .60rem;
      font-weight: 700;
  }
  
  .countdown-date{
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  display: flex;
  }
  .badget-buttom{
    bottom: 30px !important;
  }
  
  .badget-static{
    bottom: 0px !important;
  }
  
  .img_card--products{
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-size: contain;
  }
  .card_cuponds{
  width:100; 
  height:100%; 
  background:#FFFFFF;
  
  }
  
  .title_card--cupon{
  font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.05em;
      color: #A5A5A5;
      /* top: 30px; */
      /* left: 10px; */
     
      width: 100%;
      display: block;
      height: auto;
      margin-left: 11px;
  }
  
  .textoinfo_card--cupon{
    font-weight: 400;
    display: inline-table;
    font-size: 10px;
    line-height: 12px;
    text-align: justify;
  }
  
  
  .img_card--cupon{
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
                  text-align: justify;
  }
  
  .subtitle_card-cupon{
    font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #A5A5A5;
  }
  
  .card_interno{
    height: 237px;
  }
  </style>
  