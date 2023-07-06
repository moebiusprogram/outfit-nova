<template>
  <div class="form-group d-flex justify-content-center align-items-center">
     <label for="" >{{ label_input }}</label> 
        
        <div v-for="(select, tallaindex) in tallas" :key="tallaindex.id">
                <!-- boton talla/precio/tienda -->
          <button
            v-for="(selecto, selectindex) in select" :key="selectindex.id"
            type="button"
            style="justify-content: space-between;   align-items: center; font-size:0.79rem;" 
            class="py-0  d-flex d-flex btn_fromprenda "
            :class="[(( isShow  && ( active === index_prop) && contadorOn == 1
) ? 'active_btn' : 'border-btn'),
            ((expandir) ? 'dropdown-toggle' : '' )]"
            ref="aqui"
            :aria-expanded="expandir"
            @click="SelectProductForm(selecto.name_form, index_prop), 
                    toggleSelect(index_prop)">
              <small class="mx-1 ">
                {{ selecto.name_form}} 
              </small>
      </button>
    </div>
  </div>


</template>

<script>
import ButtonToSocial from "./ButtonToSocial.vue";
import CustomInput from "./CustomInput.vue";
import PrimaryButton from "./PrimaryButton.vue";
import notification from "../assets/notification.svg";
export default {
    props:  {
        tallas:{
        type:Object,
        default:false
       },
        label_input:{
        type:String,
        default:false
       },
         name_buttom:{
         type:String,
         default:'Seleccionar Talla'
       },
        border_btn:{
         type:Boolean,
         default:true
       },
        index_prop:{
         type:Number,
         default:0
       },
        expandir:{
         type:Boolean,
         default:true
       }
    },
    components: {
    ButtonToSocial,
    CustomInput,
    PrimaryButton,
  },


  data() {
    return {
      notification: notification,
      size_selected: 0,
      name_selected: 0,
      visible: true,
      active_on:false,
      active:0,
      selectionItems:[],  
      contadorOn:0,
      isShow:false,
      showModal: false
    };
  },

  methods: {
     SelectProductForm(name_btn, indice){
      this.$emit('selectProductForm', name_btn, indice);
    },
    marcar(data) {
      this.name_selected = data.nro;
      this.size_selected = data.id;
      this.$refs.aqui.click();
    },
     toggleSelect(dato) {
         if( dato === this.index_prop && this.contadorOn === 0){
          return this.active = dato, this.isShow = true,  this.contadorOn = 1;
         }else{
          return this.isShow = false, this.contadorOn = 0;
         }
         
          
           
     },
  },
  


}
</script>
<style lang="scss" scoped>

.dropdown-toggle::after {
margin:3px;
}
.active_btn{
  border: 1px solid #000000;
  background:#FFFFFF; 
}
.border-btn{
   border: 1px solid #DBDBDB;
   background:#FAFAFA;
   color:#000000;
}
.btn_products{
    background:#FFF;
}

.btn_fromprenda{
  border-radius: 4px;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  padding-left: 4px !important;
  padding-right: 4px !important;
  
}
</style>
