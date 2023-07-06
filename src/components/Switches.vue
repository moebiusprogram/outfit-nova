<template>
    <div >
      <div class="switches" >
        <div class="container__swiches" v-for="(item, index) in modelValue" :key="index">
            <span>{{ item.text }}</span>
            <input  
                v-model="item.switcheState" type="checkbox" :id="item.id "
                @change="updateValue()"
            >
            <label :for="item.id">
              <span  :style="item.switcheState 
                     ? '--background-color: #27AE60; --background-fondo: #B3F0CD;' 
                     : '--background-color: #F32033; --background-fondo: #FADAE1;' 
                   ">
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

.container__swiches span {


font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #171717;
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
  margin: 9px auto 10px;
  display:inline-flex;
  gap:5px;
  justify-content:space-between;
  width:100%;
  flex-direction:row; 
}

.container__swiches{
  display:flex;
  flex-direction:row;
  gap:21px; 
}
.switches label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.switches span:last-child {
  position: relative;
  width: 20px;
  height: 14px;
  border-radius: 15px;
  background: var(--background-fondo);
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
  left: -11px;
    top: -3px;
    width: 18.5px;
    height: 18.5px;
  background-color: var(--background-color);
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.3s;
}
.switches span:last-child::after {
  top: 50%;
  right: 17px;
  z-index:100;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
  background: url(../assets/profile/uncheck-onswitcher.svg);
  background-size: 12px 12px;
  background-size: contain;
}

.switches [type="checkbox"]:checked + label span:last-child {
  background: #B3F0CD;
}
.switches [type="checkbox"]:checked + label span:last-child::before {
  transform: translateX(24px);
  
}
.switches [type="checkbox"]:checked + label span:last-child::after {
  width: 12px;
  height: 12px;
  left: 16px;
  z-index: 100;
  background-image: url(../assets/profile/checkmark-switcher.svg);
  background-size: contain;

}
</style>