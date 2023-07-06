<!-- This view has all the fields to choose from -->


<template>
  <section class="bg-white " style="height:100vh;position:absolute;top:0">
    <NavbarSearch :route_to="'/alerts'" :show="true" :white="true" name="Crear alerta" :tutorial="true" :show_name_back="'Atrás'" :shadow="true"/>
    <p class="alert-helper">
      Selecciona la combinación de filtros que quieras y te avisaremos cuando alguna nueva oferta coincida
    </p>

    <AlertFieldSelector v-for="(type, i) in types" :key="i" :name="type.name" :selected="type.selected" class="border-btm"/>
    <h3 class="ml-12" style="font-size:18px;">Modelo o palabra clave</h3>
    <hr style="width:95vw;margin:0 auto 15px auto;height:2px;background-color:black; opacity:0.8;"/>
    <p class="reminder-text">Solo te recomendamos rellenar este campo si estás buscando algo muy específico o un modelo de zapatillas. Ejemplo: Air force</p>
    <AlertKeywordInput :editable="true"/>
    <router-link to="/confirm-alert">
      <button class="accept-btn" style="position: sticky;
    bottom: 0;">
        ACEPTAR
      </button>
    </router-link>
  </section>
</template>
<script>
import NavbarSearch from '../components/NavbarSearch.vue';
import AlertFieldSelector from '../components/AlertFieldSelector.vue';
import AlertKeywordInput from '../components/AlertKeywordInput.vue';

export default {
  name: 'CreateAlert',
  components: {
    NavbarSearch,
    AlertKeywordInput,
    AlertFieldSelector
  },
  data () {
    return {
      types: [
        {
          name: 'marca',
          selected: ['Nike']
        },{
          name: 'tallas',
          selected:['35']
        },{
          name: 'categoría',
          selected: ['Sudaderas']
        },{
          name: 'precio',
          selected: ['10','25']
        },{
          name: 'descuento mínimo',
          selected: ['50']
        },{
          name: 'tiendas',
          selected: ['Oysho', 'About You']
        }
      ]
    }
  }
}
</script>
<style scoped>

.reminder-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #7E7E7E;
  padding: 0 12px;
  margin-bottom: 20px;
}

.border-btm {
  border-bottom: 1px solid #efefef;
}

.border-btm:last-of-type {
  border: none;
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
</style>