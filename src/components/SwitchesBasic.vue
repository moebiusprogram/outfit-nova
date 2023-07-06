<template>
    <div class="container-switchesBasic">
      <div class="switches" 
           v-bind:style="{ margin: margin ? '20px auto 20px' : '' }">
        <div class="container__swiches" v-for="(item, index) in modelValue" :key="index">
            <span>{{ item.text }}</span>
            <input  
                v-model="item.switcheState" type="checkbox" :id="item.id "
                @change="updateValue()"
            >
            <label :for="item.id">
              <span :style="item.switcheState ? '--mover-bola: -11px;' : '--mover-bola: 2px;'" >
              </span>
            </label>
        </div>
    </div>
    </div>
</template>

<script>
export default {

  components: {
    
  },
  props: {
    modelValue: {
        type: Array,
        required: true,
        default: () => ([]),
      },
    margin:{
      type: Boolean,
      required: false,
      default: true
    },
    padding:{
      type: Boolean,
      required: false,
      default: true
    }   
    },
  setup(){
   
    return {
     
      }
  },
    data(){
      return {  
      }
    },

methods:{
   
  updateValue() {
    this.$emit('update:modelValue', this.modelValue);
  },
}
}
</script>

<style lang="scss" scoped>


.container-switchesBasic{
  border:none;
  padding-top:0px;
  padding-bottom:0px;
}
ul {
  list-style: none;

}
.switches li {
  position: relative;
display:flex;
gap:10px;

}


[type="checkbox"] {
  position: absolute;
  left: -9999px;
}

.switches {
  max-width: 100%;
  width: 100%;
  
  display:inline-flex;
  gap:5px;
  justify-content:space-between;
  width:100%;
  flex-direction:row; 
}

.container__swiches{
  display:flex;
  flex-direction:row;
  gap:12px; 
}
.switches label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.switches span:last-child {
  position: relative;
  width: 34px;
  height: 21px;
  border-radius: 15px;
  background: #CFCFCF;
  transition: all 0.3s;
}
.switches span:last-child::before,
.switches span:last-child::after {
  content: "";
  position: absolute;

}



.fondon{
  background: #27AE60;
  
}

.fondoff{
  background: red;
}
.switches span:last-child::before {
  left: var(--mover-bola);
  top: 1.9px;
  width: 18px;
  height: 18px;
  background-color: #F5F5F5;
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.3s;
}


.switches [type="checkbox"]:checked + label span:last-child {
  background: #03E5B6;
}
.switches [type="checkbox"]:checked + label span:last-child::before {
  transform: translateX(24px);
  
}

</style>