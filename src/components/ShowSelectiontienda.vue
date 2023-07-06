<template>
  <div 
  class="d-flex w-100  flex-column justify-content-end align-content-end" >
   <div class='wrapper '>
      <div style="text-align:left; ">
              <swiper 
            :slidesPerView="'auto'" 
            :spaceBetween="1" 
            class="nav_profiles ps-0 w-100  pe-1 d-flex"
            style="gap:1px;"
            >
                <swiper-slide 
                          v-for='(tag, key) in datos_select[idSelection].select' :key='key.id' 
                          :id='`boton_dia-${key}`'
                          @click="toggleDay(key)"
                          class="  rounded-3 "
                          style="
                          text-transform:initial;
                          opacity:1;
                          font-size:0.76rem;"
                > 

                    <button 
                      v-if="(key == 0)"
                      @click="SelectAllElements"
                      class="btn_show-select mx-2  active_btn  p-1"
                      :class="[(( key == 0  )) ? 'btn_show-select active_btn' : ' inactivo']"
                      style="text-transform:initial;opacity:1;
                          font-size:0.76rem;"
                   > Todos  </button>
                <button class="  p-1  ps-2 mx-1 pe-2 "
                     :class="[(  (active == key ) && inactiveBtn)  ? 'btn_show-select active_btn' : ' inactivo']"
                     @click="itemsCount(key),toggleSelect(key)"
                     >
               
                    {{ datos_select[idSelection].select[key] }} </button>
                
                </swiper-slide>

             </swiper>

                </div>
                </div>
         </div>
</template>

<script>
import { Swiper,  SwiperSlide } from 'swiper/vue';
export default {

components:{
  Swiper,
  SwiperSlide,
},


props:  {
       datos_select:{
       type:Array,
       default:false
     },
       ShowSelection:{
       type:String,
       default:false
     },
     idSelection:{
        type:Number,
        default:false
     }
},

data(){
    return{
       selectionItems:[],
       inactiveBtn:false,
       active:0

    }
},

methods: {

  SelectAllElements(){
return this.inactiveBtn = false
  },
     toggleDay(index) {
     // toggle the active class
     this.selectionItems[index] = !this.selectionItems[index]
    
   },
   resetSelect(){

   },
    toggleSelect(index) {
     // toggle the active class
        return this.active = index, this.inactiveBtn = true
   },
   itemsCount(data){
     return this.inactiveBtn = true
    },
    
   removeTag(index) {
  //   this.selectionItems = this.services_select.slice(index)
  //   console.log(this.selectionItems)
  }
}
}
</script>

<style lang="scss" scoped>
.active_btn{
    border: 1px solid #000000;
}

.inactivo{
background: #EEEEEE;

margin: 2px;
border:none;
color:#BBBBBB;
}

.btn_show-select{
background: #FFF;

margin: 2px;
}
</style>