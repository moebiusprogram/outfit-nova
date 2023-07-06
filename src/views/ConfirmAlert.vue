<template>
  <section style="background-color: #F5F5F5; height:110vh">
    <section class="final-alert ml-12">
      <NavbarSearch :route_to="'/create-alert'" :show="true" :white="true" name="Confirmar alerta" :tutorial="true" :shadow="true"/>
      <div style="height:50px; opacity:0" />

      <AlertFinalTags :name="'Marcas'" :load="marcas" @deleteTag="deleteTag"/> <!-- marcas -->

      <AlertFinalTags :name="'Tallas'" :load="tallas" @deleteTag="deleteTag"/> <!-- tallas, hay que crear  comp para esto y noramlizar el nombre del atributo para pasar los datos a 'load' por ejemplo-->

      <AlertFinalSlider /> <!-- precios -->

      <div class="final-discount">
        <div style="position:absolute;font-weight:700" @click="toggleDiscounts()" >
          <span id="show-discount">
            Hasta el 50% de descuento
          </span>
          <img src="../assets/triangle-down.svg" alt="" style="margin-left:2px">
        </div>
        
        <ul class="choose-discount" style="position:relative;top:76px;right:16px;z-index:10;">
            <li @click="switchDisc" class="final-discount">Hasta el 30% de descuento</li>
            <li @click="switchDisc" class="final-discount">Hasta el 50% de descuento</li>
            <li @click="switchDisc" class="final-discount">Hasta el 70% de descuento</li>
            <li @click="switchDisc" class="final-discount">Más del 70% de descuento</li>
          </ul>
      </div>

      <AlertFinalTiendas :name="'Tiendas'" :load="tiendas" @deleteTag="deleteTag"/> <!-- tiendas -> different colors? -->

      <AlertFinalTags :name="'Categoría'" :load="categoria" @deleteTag="deleteTag"/> <!-- categoría -->

      <AlertKeywordInput :editable="false"/>

      <p style="color: #A3A3A3;font-weight: 500;font-size: 14px;text-align: center;
    padding: 14px 20px;">Número de nuevos artículos correspondientes a esta alerta por mes: <strong>{{ alertNumber }} artículos.</strong></p>
    </section>

    <section class="notify-alert">
      <h3 class="ml-12" style="font-size:18px;">Notificarme cuando haya nuevas ofertas:</h3>
      <div class="ml-12 my-15">
        <img src="../assets/menu-outline.svg" alt="menu outline icon">
        <span class="mgx-5 bold">Include in My Feed</span>
        <img src="../assets/question-circle.svg" alt="helper icon" class="helper-icon">
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="ml-12 my-15 bold">
        <img src="../assets/email.svg" alt="email icon">
        <span class="mgx-5">Email notification</span>
        <img src="../assets/question-circle.svg" alt="helper icon" class="helper-icon">
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="ml-12 my-15 bold">
        <img src="../assets/phone-outline.svg" alt="phone outline icon">
        <span class="mgx-5">Push notification</span>
        <img src="../assets/question-circle.svg" alt="helper icon" class="helper-icon">
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
    </section>
     <section class="confirm-alert-btn-container">
      <router-link to="/">
        <button class="accept-btn">
          ACEPTAR
        </button>
      </router-link>
     </section>
  </section>
</template>

<script>
import NavbarSearch from '../components/NavbarSearch.vue';
import AlertKeywordInput from '../components/AlertKeywordInput.vue';
import AlertFinalSlider from '../components/AlertFinalSlider.vue';
import AlertFinalTags from '../components/AlertFinalTags.vue';
import AlertFinalTiendas from '../components/AlertFinalTiendas.vue';
 
export default {
  name: 'ConfirmAlert',
  components: {
    AlertFinalTiendas,
    AlertFinalTags,
    AlertFinalSlider,
    AlertKeywordInput,
    NavbarSearch
  },
  data () {
    return {
      marcas: ['Nike', 'Gucci', 'Adidas', 'Tommy Hilfiger', 'Hollister', 'Balenciaga'],
      tallas: ['S', 'M'],
      categoria:['Sudaderas'],
      precios: ['10','25'],
      descuento: '50',
      tiendas: [{
        name: 'Amazon',
        color: '#E4B408',
        bg: '#FAE7CB'},
        {name: 'ABOUTYOU',
        color: '#FFF',
        bg: '#6C27FF'}],
      alertNumber: 0,
    }
  },
  methods: {
    deleteTag(e) {
      const textToDelete = e.target.nextSibling.innerText //this selects the text to look for
      const category = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerText.slice(0,-1).toLowerCase() //this selects the category to search the tag in

      //we delete the tag from array in data:
      const targetCategory = this.$data[category] //find elements in category
      const index = this.$data[category].indexOf(textToDelete) //find index to delete
      targetCategory.splice(index, 1)
    },
    toggleDiscounts () {
      const list = [...$('.choose-discount')]
      console.log($('#show-discount')[0].innerText)
      list.forEach( l => l.style.opacity === '1' ? l.style.opacity = '0' : l.style.opacity = '1' )

    },
    switchDisc (e) {
      const discount = e.target
      console.log(discount.innerText)
      $('#show-discount')[0].innerText = discount.innerText
      this.toggleDiscounts()
    }
  }
}
</script>


<style scoped>
*{
  font-family: "Inter";
}

.confirm-alert-btn-container {
  display:flex;
  align-items: center;
  background:#F5F5F5;
  height:70px;
  position:sticky;
  bottom:0;
  z-index: 100;
}

.switch {
  position: relative;
  width: 34px;
  height: 21px;
  float: right;
  right: 10px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 2px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #03E5B6;
}

input:focus + .slider {
  box-shadow: 0 0 1px #03E5B6;
}

input:checked + .slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.final-discount {
  width: 168px;
  height: 28px;
  background: #FFFFFF;
  border-radius: 8px;
  font-size: 10px;
  margin: 0 auto;
  display:flex;
  justify-content: center;
  align-items: center;
}

.choose-discount {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>