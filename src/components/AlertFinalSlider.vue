<template>
  <h2 style="font-weight: 500;font-size: 12px;">Precios:</h2>
  <div class="input-form-control">
    <span id="fromInput">{{ from }}€ - </span>
    <span id="toInput">{{ to }}€</span>
  </div>
  <div class="sliders_control">
    <input id="fromSlider" type="range" value="24" min="0" max="100" @input="controlFromSlider()"/>
    <input id="toSlider" type="range" value="36" min="0" max="100" @input="controlToSlider()"/>
  </div>
    
  
</template>

<script>
export default {
  name: 'AlertFinalSlider',
  data () {
    return {
      from: 24,
      to: 36
    }
  },
  methods: {
    controlFromSlider() {
      const from = $('#fromSlider')[0]
      const to = $('#toSlider')[0]
      this.from = from.value
      this.to = to.value
      this.fillSlider (from, to, '#C6C6C6', '#000', from)

      if (from.value > to.value) {
        from.value = this.to;
        this.from = to.value;
      } else {
        this.from = from.value;
      } 
    },
    controlToSlider() {
      const from = $('#fromSlider')[0]
      const to = $('#toSlider')[0]
      this.from = from.value
      this.to = to.value
      this.fillSlider (from, to, '#C6C6C6', '#000', from)
    },
    fillSlider (from, to, sliderColor, rangeColor, controlSlider) {
      const rangeDistance = to.max-to.min; //number of steps the slider is divided into
      const fromPosition = from.value - to.min; //position of "from" thumb
      const toPosition = to.value - to.min;
      controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
        ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
        ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
        ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
        ${sliderColor} 100%)`;
    },
  },
  mounted () {

  }
}

</script>

<style scoped>
.multi-range-field {
  position: relative
}

.multi-range {
  position: absolute;
  left: 0
}

.input-form-control {
  display: inline;
  float: right;
  margin-right: 5vw;
}

.input-form-control span{
  font-weight: 700;
  font-size: 16px;
}

.sliders_control {
  position: relative;
  min-height: 35px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}


input[type="range"] {
  -webkit-appearance: none; 
  appearance: none;
  height: 4px;
  width: 90%;
  position: absolute;
  background-color: #C6C6C6;
  pointer-events: none;
}

input[type="range"]:last-of-type {
  height: 0px;
}

input[type="range"]:first-of-type::-webkit-slider-thumb{
  margin-top: -2px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 24px;
  height: 24px;
  margin-top: 2px;
  background-color: #000;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #C6C6C6;
  cursor: pointer;
}

input[type=range]::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
	background: transparent;
  border: none;


}

input[type=range]::-webkit-slider-thumb:active {
  box-shadow: inset 0 0 3px #5D5017, 0 0 9px #5D5017;
  -webkit-box-shadow: inset 0 0 3px #5D5017, 0 0 9px #5D5017;
}


</style>